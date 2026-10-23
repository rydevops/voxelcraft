// Creatures: peaceful animals (cows, pigs, sheep) that wander in herds, and monsters (zombies, skeletons, spiders) that spawn in the dark and
// come for you. No drawing in here (that is mobmodels.js), so all of it runs in Node tests. What each species is like - health, speed, size,
// what it drops - is data: mobs.json. They move with the same physics as the player (gravity, stairs, water, walls), so they cannot walk
// through anything.
//
//  animals    live in the world for good: each chunk gets its herd once (remembered in `spawned`) and the animals are saved with the world.
//  monsters   are not saved. They appear only where the light is dim (under maxLight: night, caves), never too many at once, never close to
//             you, never in a village, and they fade away in daylight or when you walk off. Kill one and another may take its place.
import { REG } from './registry.js';
import { Player, raycast } from './player.js';
import { B, SOLID, IS_WATER, PLANT, OPAQUE } from './blocks.js';
import { hash2, mulberry32 } from './noise.js';
import { CS, CH, chunkKey } from './voxel.js';
import { inVillage } from './villages.js';

export const SPECIES = REG.mobs.species;
const SP = REG.mobs.spawning;
export const ARROW_GRAVITY = 14; // blocks per second squared
const GRASSY = new Set(['grass', 'savanna_grass', 'podzol', 'mud', 'snow'].map((k) => REG.idOfKey.get(k)));
let nextId = 1;

// Is it fine to stand on the cell (x, z) of a surface at y: solid under the feet, two clear blocks of air, not in water?
function standable(world, x, y, z) {
  if (!world.isLoaded(x, z) || y < 1) return false;
  const below = world.getBlock(x, y - 1, z), a = world.getBlock(x, y, z), b = world.getBlock(x, y + 1, z);
  return SOLID[below] === 1 && !IS_WATER[below] && !IS_WATER[a] && !SOLID[a] && !SOLID[b];
}
// The first standable surface below (yTop) at a column, within `depth` blocks (or -1)
export function surfaceBelow(world, x, z, yTop, depth = 40) {
  for (let y = Math.min(CH - 2, yTop); y > Math.max(1, yTop - depth); y--) if (standable(world, x, y, z)) return y;
  return -1;
}

export class Mob {
  constructor(world, type, x, y, z, rng = Math.random) {
    this.id = nextId++;
    this.world = world;
    this.type = type;
    this.def = SPECIES[type];
    this.rng = rng;
    this.body = new Player(world, this.def.size);
    this.body.pos = { x, y, z };
    this.body.yaw = rng() * Math.PI * 2;
    this.hp = this.def.health;
    this.state = 'idle';      // animals: idle | wander | panic.   monsters: idle | wander | chase
    this.timer = 0.5 + rng() * 3;
    this.target = null;
    this.cooldown = 0.8 + rng();
    this.hurt = 0;            // seconds left of the red flash
    this.knock = { vx: 0, vz: 0, t: 0 };
    this.walkPhase = rng() * 6;
    this.moving = false;
    this.dead = false;
    this.deathTimer = 0;
    this.sheared = false;
    this.regrow = 0;
    this.callTimer = 6 + rng() * 14;
    this.seenAt = null;       // where a monster last saw you, and when
    this.progress = { x, z, t: 0 };
    this.losTimer = 0;
    this.los = false;
    this.sunTimer = 0;
    this.panicDir = 0;
    this.sidestep = 0;
  }

  get x() { return this.body.pos.x; }
  get y() { return this.body.pos.y; }
  get z() { return this.body.pos.z; }
  get yaw() { return this.body.yaw; }
  get hostile() { return this.def.kind === 'hostile'; }
  get eyeY() { return this.y + this.def.size.height * 0.85; }

  turnTo(yaw, dt, rate = 6) {
    let d = yaw - this.body.yaw;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    this.body.yaw += Math.max(-rate * dt, Math.min(rate * dt, d));
    return Math.abs(d);
  }

  // Is the ground a step ahead fine to walk on: not water, not a drop of more than two blocks?
  safeAhead(dist = 0.9, sign = 1) {
    const w = this.world;
    const x = this.x - Math.sin(this.yaw) * (dist + this.def.size.hw) * sign, z = this.z - Math.cos(this.yaw) * (dist + this.def.size.hw) * sign;
    const bx = Math.floor(x), bz = Math.floor(z);
    if (!w.isLoaded(bx, bz)) return false;
    const gy = Math.floor(this.y + 0.2);
    for (let k = 0; k <= 2; k++) {
      const below = w.getBlock(bx, gy - 1 - k, bz);
      if (IS_WATER[below]) return false;
      if (SOLID[below] > 0) return true;
    }
    return false;
  }

  // Take a blow: returns true if it killed. (fromX, fromZ) is where it came from, for the push back.
  damage(amount, fromX, fromZ, knockback = 0) {
    if (this.dead) return false;
    this.hp -= amount;
    this.hurt = 0.5;
    const dx = this.x - fromX, dz = this.z - fromZ, d = Math.hypot(dx, dz) || 1;
    this.knock = { vx: (dx / d) * knockback, vz: (dz / d) * knockback, t: 0.22 };
    if (!this.hostile) { // an animal bolts, away from whatever hit it
      this.state = 'panic'; this.timer = 5; this.panicDir = Math.atan2(-dx, -dz);
    } else { this.state = 'chase'; this.seenAt = { x: fromX, z: fromZ, t: 4 }; }
    if (this.hp <= 0) { this.dead = true; this.deathTimer = 0.9; return true; }
    return false;
  }

  // dt seconds. ctx = { player: { x, y, z } | null, hitPlayer(damage, mob), shoot(from, { vx, vy, vz }, damage, mob), call(mob) }
  update(dt, ctx) {
    const body = this.body;
    if (this.dead) { this.deathTimer -= dt; return; }
    this.hurt = Math.max(0, this.hurt - dt);
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.sheared) { this.regrow -= dt; if (this.regrow <= 0) this.sheared = false; }
    this.callTimer -= dt;
    if (this.callTimer <= 0) { this.callTimer = 8 + this.rng() * 18; if (!this.hostile || this.state === 'chase') ctx.call?.(this); }

    // being pushed back by a blow
    if (this.knock.t > 0) {
      this.knock.t -= dt;
      body.moveAxis('x', this.knock.vx * dt);
      body.moveAxis('z', this.knock.vz * dt);
    }

    let ahead = 0, jump = false;
    if (this.hostile) ahead = this.thinkHostile(dt, ctx);
    else ahead = this.thinkAnimal(dt, ctx);
    if (body.inWater) jump = true; // swim: never sink
    body.update(dt, { ahead, jump });
    this.moving = ahead > 0.02;
    if (this.moving) this.walkPhase += dt * (3 + ahead * 6);
    if (body.pos.y < 0) this.dead = true;
  }

  // ---- animals: stand about, wander a few blocks, run when hurt ----
  thinkAnimal(dt, ctx) {
    const body = this.body, d = this.def;
    let ahead = 0;
    if (this.state === 'panic') {
      this.timer -= dt;
      if (this.rng() < dt * 1.2) this.panicDir += (this.rng() - 0.5) * 1.6; // jinks as it runs
      this.turnTo(this.panicDir, dt, 7);
      ahead = Math.min(1, d.speed * (d.panic ?? 2.2));
      if (!body.inWater && !this.safeAhead(0.6)) { this.panicDir += Math.PI * (0.5 + this.rng()); ahead = 0.1; }
      if (this.timer <= 0) { this.state = 'idle'; this.timer = 2 + this.rng() * 3; }
      return ahead;
    }
    if (this.state === 'wander' && this.target) {
      const dx = this.target.x - this.x, dz = this.target.z - this.z, dist = Math.hypot(dx, dz);
      if (dist < 0.6) { this.state = 'idle'; this.target = null; this.timer = 2 + this.rng() * 6; return 0; }
      const off = this.turnTo(Math.atan2(-dx, -dz), dt, 4);
      if (off < 0.6) ahead = d.speed;
      if (ahead > 0 && !body.inWater && !this.safeAhead()) { this.state = 'idle'; this.target = null; this.timer = 0.6 + this.rng() * 2; return 0; }
      this.progress.t += dt;
      if (this.progress.t > 1.6) { // going nowhere (a wall, a tree): give up
        if (Math.hypot(this.x - this.progress.x, this.z - this.progress.z) < 0.35) { this.state = 'idle'; this.target = null; this.timer = 0.5 + this.rng(); }
        this.progress = { x: this.x, z: this.z, t: 0 };
      }
      return ahead;
    }
    this.timer -= dt; // idle: graze a while, then set off somewhere
    if (this.timer <= 0) {
      const a = this.rng() * Math.PI * 2, r = 3 + this.rng() * 7;
      this.target = { x: this.x + Math.cos(a) * r, z: this.z + Math.sin(a) * r };
      this.state = 'wander';
      this.progress = { x: this.x, z: this.z, t: 0 };
    }
    return 0;
  }

  // ---- monsters: when they see you they come, and hit or shoot ----
  thinkHostile(dt, ctx) {
    const body = this.body, d = this.def, p = ctx.player;
    let ahead = 0;
    let dist = Infinity, dy = 0;
    if (p) { dist = Math.hypot(p.x - this.x, p.z - this.z); dy = p.y - this.y; }
    // can it see you? (a clear line, close enough) Checked a few times a second, not every frame
    this.losTimer -= dt;
    if (p && this.losTimer <= 0) {
      this.losTimer = 0.3;
      this.los = false;
      if (dist < d.sight && Math.abs(dy) < 14) {
        const from = { x: this.x, y: this.eyeY, z: this.z }, to = { x: p.x, y: p.y + 1.5, z: p.z };
        const len = Math.hypot(to.x - from.x, to.y - from.y, to.z - from.z) || 1;
        const hit = raycast(this.world, from, { x: (to.x - from.x) / len, y: (to.y - from.y) / len, z: (to.z - from.z) / len }, len);
        this.los = !hit;
      }
      if (this.los) this.seenAt = { x: p.x, z: p.z, t: 4 };
    }
    if (this.seenAt) { this.seenAt.t -= dt; if (this.seenAt.t <= 0) this.seenAt = null; }
    if (this.seenAt) this.state = 'chase';
    else if (this.state === 'chase') { this.state = 'idle'; this.timer = 1 + this.rng() * 2; }

    if (this.state === 'chase' && this.seenAt) {
      const tx = this.los && p ? p.x : this.seenAt.x, tz = this.los && p ? p.z : this.seenAt.z;
      const dx = tx - this.x, dz = tz - this.z, flat = Math.hypot(dx, dz);
      if (this.sidestep > 0) this.sidestep -= dt; else this.turnTo(Math.atan2(-dx, -dz), dt, 8);
      const ranged = d.ranged;
      if (ranged && this.los && p) {
        const keep = d.keepDistance ?? 6;
        if (flat < keep - 1) ahead = this.safeAhead(0.9, -1) ? -d.speed * 0.8 : 0; // an archer backs away to keep its distance
        else if (flat > ranged.range * 0.8) ahead = d.speed;
        if (flat < ranged.range && this.cooldown <= 0) {
          this.cooldown = ranged.cooldown + this.rng() * 0.6;
          // aim: fly there in the time it takes at the arrow's speed, lobbed high enough to cancel the drop on the way
          const from = { x: this.x, y: this.eyeY - 0.1, z: this.z }, to = { x: p.x, y: p.y + 1.2, z: p.z };
          const fl = Math.hypot(to.x - from.x, to.z - from.z) || 0.1, T = Math.max(0.05, fl / ranged.speed);
          ctx.shoot?.(from, { vx: (to.x - from.x) / T, vy: (to.y - from.y + 0.5 * ARROW_GRAVITY * T * T) / T, vz: (to.z - from.z) / T }, ranged.damage, this);
        }
      } else if (flat > d.reach * 0.8 || Math.abs(dy) > 1.6) ahead = d.speed;
      if (p && flat <= d.reach && Math.abs(dy) < 1.7 && this.cooldown <= 0 && this.los) { // close enough: a blow
        this.cooldown = d.cooldown;
        ctx.hitPlayer?.(d.damage, this);
      }
      if (ahead > 0 && !body.inWater && !(this.sidestep > 0)) {
        this.progress.t += dt;
        if (this.progress.t > 1.2) { // stuck against something: sidestep
          if (Math.hypot(this.x - this.progress.x, this.z - this.progress.z) < 0.3) { body.yaw += (this.rng() < 0.5 ? 1 : -1) * 1.2; this.sidestep = 0.5; }
          this.progress = { x: this.x, z: this.z, t: 0 };
        }
      }
      return ahead;
    }
    // it has not seen you: shuffles about
    if (this.state === 'wander' && this.target) {
      const dx = this.target.x - this.x, dz = this.target.z - this.z;
      if (Math.hypot(dx, dz) < 0.7) { this.state = 'idle'; this.target = null; this.timer = 2 + this.rng() * 5; return 0; }
      const off = this.turnTo(Math.atan2(-dx, -dz), dt, 4);
      if (off < 0.6) ahead = d.speed * 0.45;
      if (ahead > 0 && !body.inWater && !this.safeAhead()) { this.state = 'idle'; this.target = null; this.timer = 1; return 0; }
      this.progress.t += dt;
      if (this.progress.t > 1.6) { this.state = 'idle'; this.target = null; this.timer = 1; this.progress = { x: this.x, z: this.z, t: 0 }; }
      return ahead;
    }
    this.timer -= dt;
    if (this.timer <= 0) {
      const a = this.rng() * Math.PI * 2, r = 3 + this.rng() * 6;
      this.target = { x: this.x + Math.cos(a) * r, z: this.z + Math.sin(a) * r };
      this.state = 'wander';
      this.progress = { x: this.x, z: this.z, t: 0 };
    }
    return 0;
  }
}

// The ray / box test shared by picking: does the ray from o along d hit this box within maxDist? Returns the distance or -1.
function rayBox(o, d, lo, hi, maxDist) {
  const oo = [o.x, o.y, o.z], dd = [d.x, d.y, d.z];
  let tmin = 0, tmax = maxDist;
  for (let i = 0; i < 3; i++) {
    if (Math.abs(dd[i]) < 1e-9) { if (oo[i] < lo[i] || oo[i] > hi[i]) return -1; continue; }
    const t1 = (lo[i] - oo[i]) / dd[i], t2 = (hi[i] - oo[i]) / dd[i];
    tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
    if (tmin > tmax) return -1;
  }
  return tmin;
}

// How bright a creature standing here would find it: block light (torches), or sky light dimmed by the time of day. Open ground at night and
// a cave at noon are both dark.
export const lightFor = (world, x, y, z, daylight) => world.lighting.effective(x, y, z, daylight);

export class Mobs {
  constructor(world, { seed = 1, rng = Math.random } = {}) {
    this.world = world;
    this.seed = seed;
    this.rng = rng;
    this.animals = [];          // every animal in the world (only those near you are moved and drawn)
    this.monsters = [];         // the monsters around you
    this.spawned = new Set();   // chunks that have had their herd
    this.arrows = [];           // { x, y, z, vx, vy, vz, life, damage }
    this.spawnTimer = 3;
    this.herdTimer = 0;
    this.removed = [];          // mobs that just went (for the renderer to drop their models)
  }

  get all() { return [...this.animals, ...this.monsters]; }

  // Give every chunk near the player its herd, once. Deterministic: the same chunk gets the same animals in every run of the same world.
  populate(pcx, pcz) {
    const R = SP.animals.radius;
    for (let cz = pcz - R; cz <= pcz + R; cz++) for (let cx = pcx - R; cx <= pcx + R; cx++) {
      const key = chunkKey(cx, cz);
      if (this.spawned.has(key) || !this.world.getChunk(cx, cz)) continue;
      this.spawned.add(key);
      const rng = mulberry32((hash2(cx, cz, this.seed + 4242) * 4294967296) | 0);
      if (rng() >= SP.animals.chunkChance) continue;
      for (let tries = 0; tries < 10; tries++) {
        const x = cx * CS + 2 + Math.floor(rng() * (CS - 4)), z = cz * CS + 2 + Math.floor(rng() * (CS - 4));
        const y = surfaceBelow(this.world, x, z, 100, 100);
        if (y < 0) continue;
        const ground = this.world.getBlock(x, y - 1, z);
        if (!GRASSY.has(ground) || this.world.lighting.get(x, y, z, 0) < SP.animals.minLight) continue;
        const biome = this.world.biomeAt(x, z);
        const kinds = Object.values(SPECIES).filter((s) => s.kind === 'animal' && (!s.biomes || s.biomes.includes(biome)));
        if (!kinds.length) continue;
        const s = kinds[Math.floor(rng() * kinds.length)];
        const [lo, hi] = s.herd;
        const n = Math.min(SP.animals.maxPerChunk, lo + Math.floor(rng() * (hi - lo + 1)));
        for (let i = 0; i < n; i++) {
          const ax = x + (rng() - 0.5) * 5, az = z + (rng() - 0.5) * 5;
          const ay = surfaceBelow(this.world, Math.floor(ax), Math.floor(az), y + 3, 8);
          if (ay >= 0) this.animals.push(new Mob(this.world, s.key, ax, ay, az, mulberry32((rng() * 4294967296) | 0)));
        }
        break;
      }
    }
  }

  // A monster appears somewhere dark within reach of the player, now and then.
  trySpawnMonster(player, daylight) {
    const H = SP.hostile;
    if (this.monsters.length >= H.max) return null;
    const a = this.rng() * Math.PI * 2, r = H.minDistance + this.rng() * (H.maxDistance - H.minDistance);
    const x = Math.floor(player.x + Math.cos(a) * r), z = Math.floor(player.z + Math.sin(a) * r);
    if (!this.world.isLoaded(x, z)) return null;
    const y = surfaceBelow(this.world, x, z, Math.floor(player.y) + 12, 28);
    if (y < 0) return null;
    if (lightFor(this.world, x, y, z, daylight) > H.maxLight) return null; // only where it is dim: light below 6
    if (this.world.terrain >= 3 && inVillage(this.world, x, z, H.villageMargin)) return null;
    const kinds = Object.values(SPECIES).filter((s) => s.kind === 'hostile');
    const total = kinds.reduce((t, s) => t + (s.spawnWeight ?? 1), 0);
    let pick = this.rng() * total, kind = kinds[0];
    for (const s of kinds) { pick -= s.spawnWeight ?? 1; if (pick <= 0) { kind = s; break; } }
    const m = new Mob(this.world, kind.key, x + 0.5, y, z + 0.5, this.rng);
    this.monsters.push(m);
    return m;
  }

  // ctx = { player: { x, y, z } | null, creative, daylight (0-1), hitPlayer, call, onSunBurn(mob) }
  update(dt, ctx) {
    const p = ctx.player;
    const pcx = p ? Math.floor(p.x / CS) : 0, pcz = p ? Math.floor(p.z / CS) : 0;
    this.herdTimer -= dt;
    if (p && this.herdTimer <= 0) { this.herdTimer = 1; this.populate(pcx, pcz); }
    const SQ = (SP.animals.radius + 3) * CS; // animals further than this stand still
    const ctx2 = { ...ctx, shoot: (from, v, damage, mob) => this.arrows.push({ x: from.x, y: from.y, z: from.z, vx: v.vx, vy: v.vy, vz: v.vz, life: 4, damage, from: mob.type }) };
    for (const m of this.animals) {
      if (p && Math.hypot(m.x - p.x, m.z - p.z) > SQ) continue;
      if (!this.world.isLoaded(Math.floor(m.x), Math.floor(m.z))) continue;
      m.update(Math.min(dt, 0.05), ctx2);
    }
    if (p && !ctx.creative) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) { this.spawnTimer = SP.hostile.attemptSeconds * (0.6 + this.rng() * 0.8); this.trySpawnMonster(p, ctx.daylight); }
    }
    for (const m of this.monsters) {
      if (!this.world.isLoaded(Math.floor(m.x), Math.floor(m.z))) continue;
      m.update(Math.min(dt, 0.05), ctx.creative ? { ...ctx2, player: null } : ctx2);
      if (m.dead) continue;
      // daylight on open ground burns them away; walking far from them or falling out of the world loses them too
      const sky = this.world.lighting.get(Math.floor(m.x), Math.floor(m.y + 1), Math.floor(m.z), 0);
      if (ctx.daylight > 0.7 && sky >= 14) { m.sunTimer += dt; if (m.sunTimer > SP.hostile.sunSeconds) { m.dead = true; m.deathTimer = 0.3; m.burned = true; ctx.onSunBurn?.(m); } } else m.sunTimer = 0;
      if (p && Math.hypot(m.x - p.x, m.z - p.z) > SP.hostile.despawnDistance) { m.dead = true; m.deathTimer = 0; m.vanished = true; }
    }
    // arrows
    for (let i = this.arrows.length - 1; i >= 0; i--) {
      const a = this.arrows[i];
      a.life -= dt;
      a.vy -= ARROW_GRAVITY * dt;
      const nx = a.x + a.vx * dt, ny = a.y + a.vy * dt, nz = a.z + a.vz * dt;
      const stop = SOLID[this.world.getBlock(Math.floor(nx), Math.floor(ny), Math.floor(nz))] === 1;
      let hit = false;
      if (p && !ctx.creative && Math.abs(nx - p.x) < 0.45 && Math.abs(nz - p.z) < 0.45 && ny > p.y && ny < p.y + 1.85) { ctx.hitPlayer?.(a.damage, { type: a.from, x: a.x, z: a.z, arrow: true }); hit = true; }
      a.x = nx; a.y = ny; a.z = nz;
      if (a.life <= 0 || stop || hit) this.arrows.splice(i, 1);
    }
    // the dead are cleared away once they have fallen over
    for (const list of [this.animals, this.monsters]) {
      for (let i = list.length - 1; i >= 0; i--) if (list[i].dead && list[i].deathTimer <= 0) { this.removed.push(list[i]); list.splice(i, 1); }
    }
  }

  // The creature under the crosshair within reach: { mob, dist } or null
  pick(origin, dir, maxDist) {
    let best = null;
    for (const m of this.all) {
      if (m.dead || Math.hypot(m.x - origin.x, m.z - origin.z) > maxDist + 2) continue;
      const hw = m.def.size.hw, h = m.def.size.height;
      const t = rayBox(origin, dir, [m.x - hw, m.y, m.z - hw], [m.x + hw, m.y + h, m.z + hw], maxDist);
      if (t >= 0 && (!best || t < best.dist)) best = { mob: m, dist: t };
    }
    return best;
  }

  // Shear a sheep (returns true if it had wool to give)
  shear(mob) {
    if (!mob.def.shear || mob.sheared) return false;
    mob.sheared = true;
    mob.regrow = mob.def.shear.regrowSeconds;
    return true;
  }

  nearest(x, z, radius, hostileOnly = true) {
    let best = null;
    for (const m of hostileOnly ? this.monsters : this.all) {
      if (m.dead) continue;
      const d = Math.hypot(m.x - x, m.z - z);
      if (d < radius && (!best || d < best.dist)) best = { mob: m, dist: d };
    }
    return best;
  }

  serialize() {
    return {
      spawned: [...this.spawned],
      animals: this.animals.filter((m) => !m.dead).map((m) => ({ t: m.type, x: +m.x.toFixed(2), y: +m.y.toFixed(2), z: +m.z.toFixed(2), hp: m.hp, ...(m.sheared ? { sh: Math.round(m.regrow) } : {}) })),
    };
  }

  load(obj) {
    this.spawned = new Set(obj?.spawned ?? []);
    this.animals = [];
    for (const a of obj?.animals ?? []) {
      if (!SPECIES[a.t] || SPECIES[a.t].kind !== 'animal') continue;
      const m = new Mob(this.world, a.t, a.x, a.y, a.z, this.rng);
      m.hp = Math.min(m.def.health, a.hp ?? m.def.health);
      if (a.sh) { m.sheared = true; m.regrow = a.sh; }
      this.animals.push(m);
    }
  }
}
