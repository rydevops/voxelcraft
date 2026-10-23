// What a villager does. No drawing in here (so it runs in Node tests): a villager walks about near where it lives, pauses to
// look around, turns to look at you when you come close, and has something to say when spoken to.
// Moving uses the same physics as the player (gravity, stairs, blocks in the way), so villagers cannot walk through walls.
import { Player } from './player.js';
import { B, SOLID, IS_WATER, PLANT } from './blocks.js';

const FARM = new Set([B.FARMLAND, B.FARMLAND_WET]);
import { hash2, mulberry32 } from './noise.js';

export const JOBS = ['farmer', 'blacksmith', 'librarian', 'cleric', 'mason'];
const NAMES = ['Alder', 'Bram', 'Cora', 'Dilys', 'Edda', 'Finn', 'Gwen', 'Hob', 'Ivo', 'Jory', 'Kit', 'Lark', 'Mabel', 'Ned', 'Orla', 'Pip', 'Quill', 'Rowan', 'Sage', 'Tam', 'Una', 'Wren', 'Yarrow', 'Zed'];

// what they say, by job; {village} is the village's name. Chosen by time of day too: day / night.
const LINES = {
  farmer: {
    day: ['The wheat is looking fine this year.', 'Bread is the best thing there is. Do you have any?', 'Keep the water close to your fields and they will never dry out.', 'Welcome to {village}!'],
    night: ['It is late. The crops will keep.', 'Mind the dark, traveller.'],
  },
  blacksmith: {
    day: ['Iron is all about patience: ore, fire, then ingots.', 'A stone pickaxe will not get you iron. Smelt it first.', 'I have been at this furnace since sunrise.', 'Welcome to {village}!'],
    night: ['The fire keeps me warm. Go and light a torch.', 'Not a good time to be out and about.'],
  },
  librarian: {
    day: ['Glass comes from sand and a hot furnace.', 'Stairs take six planks, and you get four.', 'A door is six planks at a crafting table. Three of them, in fact.', 'Welcome to {village}!'],
    night: ['I read by torchlight. You should try it.', 'Shh. The books are sleeping.'],
  },
  cleric: {
    day: ['May your roads be flat and your pickaxe sharp.', 'There is a good view from the top of the hill.', 'Welcome to {village}.'],
    night: ['The night is long, but morning comes.', 'Stay near the lamp posts, friend.'],
  },
  mason: {
    day: ['Cobblestone and brick, that is what lasts.', 'Every stair in {village} was laid by hand.', 'Look at that roof. Not a single leak.', 'Welcome to {village}!'],
    night: ['Even stone needs its rest.', 'Come back in the morning.'],
  },
};

export class Villager {
  constructor(world, village, spawn, index) {
    this.world = world;
    this.village = village;
    this.index = index;
    const h = (salt) => hash2(Math.floor(spawn.x), Math.floor(spawn.z), village.cx * 31 + salt);
    this.rng = mulberry32((h(3) * 4294967296) | 0);
    this.name = NAMES[Math.floor(h(1) * NAMES.length)];
    this.job = JOBS[Math.floor(h(2) * JOBS.length)];
    this.skin = Math.floor(h(4) * 3);          // which skin tone
    this.body = new Player(world);             // movement physics
    this.body.pos = { x: spawn.x, y: spawn.y, z: spawn.z };
    this.body.yaw = h(5) * Math.PI * 2;
    this.home = { x: spawn.x, z: spawn.z };
    this.timer = 0.5 + this.rng() * 3;
    this.target = null;
    this.moving = false;
    this.walkPhase = 0;
    this.headTurn = 0;                         // how far the head is turned from the body (radians), towards you when you are near
    this.progressAt = { x: spawn.x, z: spawn.z, t: 0 };
    this.talkedAt = -99;
  }

  get x() { return this.body.pos.x; }
  get y() { return this.body.pos.y; }
  get z() { return this.body.pos.z; }
  get yaw() { return this.body.yaw; }

  // Is this somewhere a villager may walk to? Open ground at the village floor: not water, not the well, nothing in the way
  goodSpot(x, z) {
    const w = this.world, v = this.village, y0 = v.y0;
    const bx = Math.floor(x), bz = Math.floor(z);
    if (!w.isLoaded(bx, bz)) return false;
    if (Math.hypot(x - (v.cx + 0.5), z - (v.cz + 0.5)) < 2.8) return false; // the well
    const below = w.getBlock(bx, y0, bz), a = w.getBlock(bx, y0 + 1, bz), b = w.getBlock(bx, y0 + 2, bz);
    if (!(SOLID[below] > 0) || IS_WATER[below] || SOLID[a] || SOLID[b] || PLANT[a] || FARM.has(below)) return false; // (crops are not trampled)
    return true;
  }

  // Is the ground a step ahead fine to walk on? (not water, not a farm, not a drop: villagers stop rather than fall in the well)
  safeAhead() {
    const w = this.world;
    const x = this.x - Math.sin(this.yaw) * 0.75, z = this.z - Math.cos(this.yaw) * 0.75;
    const bx = Math.floor(x), bz = Math.floor(z);
    if (!w.isLoaded(bx, bz)) return false;
    const gy = Math.floor(this.y + 0.2) - 1; // the block we are standing on
    const below = w.getBlock(bx, gy, bz), feet = w.getBlock(bx, gy + 1, bz);
    if (IS_WATER[below] || IS_WATER[feet] || FARM.has(below) || PLANT[feet]) return false;
    if (!(SOLID[below] > 0)) { // a step down is fine, a hole is not
      const lower = w.getBlock(bx, gy - 1, bz);
      if (!(SOLID[lower] > 0) || IS_WATER[lower]) return false;
    }
    return Math.hypot(x - (this.village.cx + 0.5), z - (this.village.cz + 0.5)) > 2.2; // (the well)
  }

  turnTo(yaw, dt, rate = 5) {
    let d = yaw - this.body.yaw;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    this.body.yaw += Math.max(-rate * dt, Math.min(rate * dt, d));
    return Math.abs(d);
  }

  // dt seconds; `player` = { x, z } of whoever is nearby (or null)
  update(dt, player = null, now = 0) {
    const body = this.body;
    // safety: fallen out of the village (a hole, the sea): back to where we started
    if (body.pos.y < this.village.y0 - 4) { body.pos = { x: this.home.x, y: this.village.y0 + 1, z: this.home.z }; body.vel = { x: 0, y: 0, z: 0 }; this.target = null; }

    const near = player ? Math.hypot(player.x - this.x, player.z - this.z) : Infinity;
    let ahead = 0;
    if (this.target) {
      const dx = this.target.x - this.x, dz = this.target.z - this.z, dist = Math.hypot(dx, dz);
      if (dist < 0.5) { this.target = null; this.timer = 2 + this.rng() * 6; }
      else {
        const off = this.turnTo(Math.atan2(-dx, -dz), dt, 6);
        if (off < 0.5) ahead = body.inWater ? 0.45 : 0.28; // about 1.2 blocks a second
        if (ahead > 0 && !body.inWater && !this.safeAhead()) { ahead = 0; this.target = null; this.timer = 0.3 + this.rng() * 1.5; } // water, crops or a drop ahead: stop and think again
        this.progressAt.t += dt;
        if (this.progressAt.t > 1.6) { // not getting anywhere (a door, a wall, a fence): give up on this one
          if (Math.hypot(this.x - this.progressAt.x, this.z - this.progressAt.z) < 0.35) { this.target = null; this.timer = 0.4 + this.rng(); }
          this.progressAt = { x: this.x, z: this.z, t: 0 };
        }
      }
    } else {
      this.timer -= dt;
      if (near < 5) this.turnTo(Math.atan2(-(player.x - this.x), -(player.z - this.z)), dt, 3.5); // look at whoever is close
      if (this.timer <= 0) {
        for (let tries = 0; tries < 6 && !this.target; tries++) {
          const a = this.rng() * Math.PI * 2, r = 2 + this.rng() * 12;
          const x = this.home.x + Math.cos(a) * r, z = this.home.z + Math.sin(a) * r;
          if (this.goodSpot(x, z)) { this.target = { x, z }; this.progressAt = { x: this.x, z: this.z, t: 0 }; }
        }
        if (!this.target) this.timer = 1 + this.rng() * 2;
      }
    }
    body.update(dt, { ahead });
    this.moving = ahead > 0;
    if (this.moving) this.walkPhase += dt * 5.5;
    // the head turns towards you, a little, when you are near and we are standing still
    let wantTurn = 0;
    if (!this.moving && near < 6) {
      const d = Math.atan2(-(player.x - this.x), -(player.z - this.z)) - body.yaw;
      wantTurn = Math.max(-0.9, Math.min(0.9, Math.atan2(Math.sin(d), Math.cos(d))));
    }
    this.headTurn += (wantTurn - this.headTurn) * Math.min(1, 6 * dt);
  }

  // Something to say, depending on the job and whether it is day
  speak(night, rand = Math.random) {
    const set = LINES[this.job][night ? 'night' : 'day'];
    return set[Math.floor(rand() * set.length)].replace('{village}', this.village.name);
  }
}

// Which villager (if any) does this ray hit within maxDist? The nearest one; { villager, dist } or null. (Boxes 0.7 wide, 1.8 tall.)
export function pickVillager(villagers, o, d, maxDist = 4.5) {
  let best = null;
  for (const v of villagers) {
    const lo = [v.x - 0.35, v.y, v.z - 0.35], hi = [v.x + 0.35, v.y + 1.8, v.z + 0.35];
    const oo = [o.x, o.y, o.z], dd = [d.x, d.y, d.z];
    let tmin = 0, tmax = maxDist, hit = true;
    for (let i = 0; i < 3 && hit; i++) {
      if (Math.abs(dd[i]) < 1e-9) { if (oo[i] < lo[i] || oo[i] > hi[i]) hit = false; continue; }
      const t1 = (lo[i] - oo[i]) / dd[i], t2 = (hi[i] - oo[i]) / dd[i];
      tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
      if (tmin > tmax) hit = false;
    }
    if (hit && (!best || tmin < best.dist)) best = { villager: v, dist: tmin };
  }
  return best;
}
