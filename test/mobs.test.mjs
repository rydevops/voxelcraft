// Animals and monsters: herds appear once and are remembered, monsters appear only in the dark and never in great numbers, they come for you
// when they see you, they can be hit, picked and sheared, and none of them walks through walls.
import assert from 'node:assert/strict';
import { World, CS, idx } from '../src/js/world.js';
import { B } from '../src/js/blocks.js';
import { Mob, Mobs, SPECIES, surfaceBelow, lightFor } from '../src/js/mobs.js';
import { daylight } from '../src/js/daylight.js';
import { REG } from '../src/js/registry.js';
import { mulberry32 } from '../src/js/noise.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

// a flat field of grass at y = 30 across 7 x 7 chunks, with open sky
const G = 30;
function field(terrain = 4) {
  const w = new World(1337, { terrain });
  for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) {
    const c = w.generateChunk(cx, cz);
    c.data.fill(0); c.plants.clear();
    for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
  }
  w.lighting.rebuildAll();
  return w;
}
const step = (list, secs, ctx, dt = 0.05) => { for (let i = 0; i < secs / dt; i++) for (const m of list) m.update(dt, ctx); };

t('the species are all there, with sensible numbers', () => {
  for (const k of ['cow', 'pig', 'sheep']) assert.equal(SPECIES[k].kind, 'animal');
  for (const k of ['zombie', 'skeleton', 'spider']) { assert.equal(SPECIES[k].kind, 'hostile'); assert.ok(SPECIES[k].damage > 0 && SPECIES[k].sight > 5); }
  assert.ok(SPECIES.skeleton.ranged, 'skeletons shoot');
  assert.ok(SPECIES.sheep.shear, 'sheep can be sheared');
});

t('daylight: bright at noon, dim at night, and the sky agrees', () => {
  assert.ok(daylight(0.25) > 0.95 && daylight(0.75) < 0.3 && daylight(0.25, 1) < daylight(0.25));
});

t('animals graze and wander about without leaving the ground or the field, and a hurt one runs', () => {
  const w = field();
  const cow = new Mob(w, 'cow', 8.5, G + 1, 8.5, mulberry32(3));
  const ctx = { player: null };
  let moved = 0, last = [cow.x, cow.z];
  for (let i = 0; i < 20 * 120; i++) { // two minutes
    cow.update(0.05, ctx);
    assert.ok(Math.abs(cow.y - (G + 1)) < 0.2, 'stays on the grass');
    if (i % 20 === 0) { moved += Math.hypot(cow.x - last[0], cow.z - last[1]); last = [cow.x, cow.z]; }
  }
  assert.ok(moved > 6, `it wandered (${moved.toFixed(1)} blocks)`);
  const before = [cow.x, cow.z];
  assert.equal(cow.damage(1, cow.x - 2, cow.z, 4), false);
  assert.equal(cow.state, 'panic');
  step([cow], 2, ctx);
  assert.ok(Math.hypot(cow.x - before[0], cow.z - before[1]) > 3, 'it ran off');
  assert.ok(cow.x > before[0] - 0.5, 'away from the blow');
});

t('an animal never walks into the water', () => {
  const w = field();
  for (let x = 12; x < 40; x++) for (let z = -20; z < 40; z++) { w.setBlock(x, G, z, B.WATER); }
  const pig = new Mob(w, 'pig', 10.5, G + 1, 8.5, mulberry32(11));
  for (let i = 0; i < 20 * 240; i++) { pig.update(0.05, { player: null }); assert.ok(!pig.body.inWater, 'dry at ' + i); }
});

t('animals: every chunk near you gets its herd once, the same herd every time, and they are saved', () => {
  const a = new Mobs(field(), { seed: 5 }), b = new Mobs(field(), { seed: 5 });
  a.populate(0, 0); b.populate(0, 0);
  assert.ok(a.animals.length >= 8, `herds appeared (${a.animals.length})`);
  assert.deepEqual(a.animals.map((m) => [m.type, +m.x.toFixed(2), +m.z.toFixed(2)]), b.animals.map((m) => [m.type, +m.x.toFixed(2), +m.z.toFixed(2)]), 'deterministic');
  const count = a.animals.length;
  a.populate(0, 0);
  assert.equal(a.animals.length, count, 'a chunk is not stocked twice');
  a.animals[0].damage(3, 0, 0, 0);
  const saved = JSON.parse(JSON.stringify(a.serialize()));
  const c = new Mobs(field(), { seed: 5 });
  c.load(saved);
  assert.equal(c.animals.length, count);
  assert.equal(c.animals[0].hp, a.animals[0].hp, 'a hurt animal stays hurt');
  c.populate(0, 0);
  assert.equal(c.animals.length, count, 'and the chunks already stocked stay as they are (a killed cow is gone for good)');
  for (const m of a.animals) assert.ok(['cow', 'pig', 'sheep'].includes(m.type));
});

t('monsters appear only where the light is below 6: night in the open, caves by day, never on open ground at noon', () => {
  const w = field();
  const player = { x: 8.5, y: G + 1, z: 8.5 };
  const noon = daylight(0.25), night = daylight(0.75);
  assert.ok(lightFor(w, 20, G + 1, 20, noon) > 10, 'bright by day');
  assert.ok(lightFor(w, 20, G + 1, 20, night) < 6, 'dim at night');
  const day = new Mobs(w, { seed: 1, rng: mulberry32(1) });
  for (let i = 0; i < 400; i++) day.trySpawnMonster(player, noon);
  assert.equal(day.monsters.length, 0, 'none appear in the open at noon');
  const dark = new Mobs(w, { seed: 1, rng: mulberry32(1) });
  for (let i = 0; i < 400; i++) dark.trySpawnMonster(player, night);
  assert.ok(dark.monsters.length >= 1, 'they come out at night');
  assert.ok(dark.monsters.length <= REG.mobs.spawning.hostile.max, `but never more than ${REG.mobs.spawning.hostile.max} (${dark.monsters.length})`);
  for (const m of dark.monsters) { const d = Math.hypot(m.x - player.x, m.z - player.z); assert.ok(d >= 15 && d <= 40, 'not on top of you: ' + d.toFixed(1)); }
  // a torch makes the place bright again: nothing spawns beside it
  const torchy = new Mobs(w, { seed: 1, rng: mulberry32(2) });
  for (let x = -3 * CS; x < 3 * CS; x += 3) for (let z = -3 * CS; z < 3 * CS; z += 3) w.setBlock(x, G + 1, z, B.TORCH_FLOOR);
  for (let i = 0; i < 400; i++) torchy.trySpawnMonster(player, night);
  assert.equal(torchy.monsters.length, 0, 'a lit field is safe');
  // underground: dark even by day
  const cave = field();
  for (let x = 0; x < 30; x++) for (let z = 0; z < 30; z++) for (let y = G - 6; y < G - 3; y++) cave.setBlock(x, y, z, B.AIR); // a hollow under the grass
  assert.ok(lightFor(cave, 10, G - 5, 10, noon) <= 1, 'a cave is dark at noon');
});

t('a monster sees you from a distance, comes straight for you and hits you; a wall hides you; armor is applied by the game', () => {
  const w = field();
  const z = new Mob(w, 'zombie', 12.5, G + 1, 8.5, mulberry32(4));
  const hits = [];
  const ctx = { player: { x: 4.5, y: G + 1, z: 8.5 }, hitPlayer: (d, m) => hits.push([d, m.type]) };
  step([z], 1, ctx);
  assert.equal(z.state, 'chase', 'it saw you');
  step([z], 6, ctx);
  assert.ok(Math.hypot(z.x - 4.5, z.z - 8.5) < 1.6, 'it came right up to you: ' + z.x.toFixed(1));
  assert.ok(hits.length >= 2 && hits.every(([d, type]) => d === SPECIES.zombie.damage && type === 'zombie'), 'and hit you with its damage, over and over (' + hits.length + ')');
  const gaps = hits.length;
  // a stone wall between you: it does not see you
  const w2 = field();
  for (let y = G + 1; y < G + 5; y++) for (let zz = 0; zz < 20; zz++) w2.setBlock(8, y, zz, B.STONE);
  const z2 = new Mob(w2, 'zombie', 12.5, G + 1, 8.5, mulberry32(4));
  const hits2 = [];
  step([z2], 4, { player: { x: 4.5, y: G + 1, z: 8.5 }, hitPlayer: (d) => hits2.push(d) });
  assert.notEqual(z2.state, 'chase', 'out of sight');
  assert.equal(hits2.length, 0);
  // too far to see
  const z3 = new Mob(field(), 'zombie', 40.5, G + 1, 8.5, mulberry32(4));
  step([z3], 1, { player: { x: 4.5, y: G + 1, z: 8.5 } });
  assert.notEqual(z3.state, 'chase');
  assert.ok(gaps >= 2);
});

t('a skeleton shoots from a distance; its arrows fly in an arc, hit you, and stop at walls', () => {
  const w = field();
  const mobs = new Mobs(w, { seed: 3, rng: mulberry32(9) });
  const sk = new Mob(w, 'skeleton', 20.5, G + 1, 8.5, mulberry32(1));
  mobs.monsters.push(sk);
  const hits = [];
  const player = { x: 6.5, y: G + 1, z: 8.5 };
  let shot = 0;
  for (let i = 0; i < 20 * 10; i++) { mobs.update(0.05, { player, creative: false, daylight: 0.2, hitPlayer: (d, m) => hits.push([d, m.type]) }); shot = Math.max(shot, mobs.arrows.length); }
  assert.ok(shot >= 1, 'it fired');
  assert.ok(hits.some(([d, type]) => d === SPECIES.skeleton.ranged.damage && type === 'skeleton'), 'an arrow hit for its damage');
  const stopped = new Mobs(field(), { seed: 3 });
  stopped.arrows.push({ x: 0.5, y: G + 1.5, z: 0.5, vx: 20, vy: 0, vz: 0, life: 4, damage: 3, from: 'skeleton' });
  for (let x = 6; x < 8; x++) for (let y = G + 1; y < G + 4; y++) stopped.world.setBlock(x, y, 0, B.STONE);
  stopped.world.setBlock(6, G + 1, 0, B.STONE); stopped.world.setBlock(6, G + 2, 0, B.STONE);
  for (let i = 0; i < 40; i++) stopped.update(0.05, { player: null, creative: false, daylight: 0.2 });
  assert.equal(stopped.arrows.length, 0, 'it hit the wall and was gone');
});

t('monsters burn away in daylight and fade when you leave; killing one lets another come', () => {
  const w = field();
  const mobs = new Mobs(w, { seed: 1, rng: mulberry32(5) });
  const z = new Mob(w, 'zombie', 12.5, G + 1, 8.5, mulberry32(4));
  mobs.monsters.push(z);
  let burned = 0;
  for (let i = 0; i < 20 * 14; i++) mobs.update(0.05, { player: null, creative: false, daylight: 1, hitPlayer() {}, onSunBurn: () => burned++ });
  assert.equal(burned, 1, 'burned by the sun');
  assert.equal(mobs.monsters.length, 0, 'and cleared away');
  const far = new Mob(w, 'zombie', 12.5, G + 1, 8.5, mulberry32(4));
  const m2 = new Mobs(w, { seed: 1, rng: mulberry32(5) });
  m2.monsters.push(far);
  for (let i = 0; i < 5; i++) m2.update(0.05, { player: { x: 12.5 + 90, y: G + 1, z: 8.5 }, creative: true, daylight: 0.2 });
  assert.equal(m2.monsters.length, 0, 'out of range they are gone');
  // a kill frees a place
  const m3 = new Mobs(w, { seed: 1, rng: mulberry32(8) });
  const player = { x: 8.5, y: G + 1, z: 8.5 };
  for (let i = 0; i < 800; i++) m3.trySpawnMonster(player, 0.2);
  assert.equal(m3.monsters.length, REG.mobs.spawning.hostile.max);
  assert.equal(m3.trySpawnMonster(player, 0.2), null, 'full: no more');
  assert.equal(m3.monsters[0].damage(999, 0, 0, 0), true);
  for (let i = 0; i < 25; i++) m3.update(0.05, { player: null, creative: true, daylight: 0.2 });
  assert.equal(m3.monsters.length, REG.mobs.spawning.hostile.max - 1, 'the dead one is cleared');
  let again = null;
  for (let i = 0; i < 400 && !again; i++) again = m3.trySpawnMonster(player, 0.2);
  assert.ok(again, 'and a new one can spawn');
});

t('hitting a creature: picking by ray, damage, knock back, death, shearing and wool regrowing', () => {
  const w = field();
  const mobs = new Mobs(w, { seed: 1 });
  const cow = new Mob(w, 'cow', 10.5, G + 1, 8.5, mulberry32(2));
  const sheep = new Mob(w, 'sheep', 10.5, G + 1, 14.5, mulberry32(2));
  mobs.animals.push(cow, sheep);
  const eye = { x: 6.5, y: G + 1.62, z: 8.5 };
  const hit = mobs.pick(eye, { x: 1, y: 0, z: 0 }, 6);
  assert.equal(hit.mob, cow);
  assert.ok(Math.abs(hit.dist - (10.5 - 0.45 - 6.5)) < 0.01);
  assert.equal(mobs.pick(eye, { x: 0, y: 1, z: 0 }, 6), null, 'looking at the sky: nothing');
  assert.equal(mobs.pick(eye, { x: 1, y: 0, z: 0 }, 2), null, 'out of reach');
  const x0 = cow.x;
  assert.equal(cow.damage(4, 6.5, 8.5, 6), false);
  cow.update(0.1, { player: null });
  assert.ok(cow.x > x0, 'knocked back, away from you');
  assert.equal(cow.hp, SPECIES.cow.health - 4);
  assert.equal(cow.damage(99, 6.5, 8.5, 6), true, 'killed');
  assert.ok(cow.dead);
  for (let i = 0; i < 25; i++) mobs.update(0.05, { player: null });
  assert.ok(!mobs.animals.includes(cow) && mobs.removed.includes(cow), 'cleared away once it has fallen over');
  // shearing
  assert.equal(mobs.shear(sheep), true);
  assert.equal(mobs.shear(sheep), false, 'a bare sheep has nothing to give');
  assert.ok(sheep.sheared);
  const saved = mobs.serialize();
  assert.ok(saved.animals[0].sh > 100, 'a sheared sheep is saved as such');
  for (let i = 0; i < 20 * (SPECIES.sheep.shear.regrowSeconds + 2); i++) sheep.update(0.05, { player: null });
  assert.ok(!sheep.sheared, 'the wool grew back');
  assert.equal(mobs.shear(cow), false, 'cows have no wool');
});

t('creatures drop what their loot tables say', () => {
  const names = (key) => REG.loot[key].map((e) => REG.itemById.get(e.id)?.key ?? REG.blockById.get(e.id)?.key);
  assert.deepEqual(names('cow').sort(), ['leather', 'raw_beef']);
  assert.deepEqual(names('pig'), ['raw_porkchop']);
  assert.deepEqual(names('sheep').sort(), ['raw_lamb_chop', 'wool']);
  assert.ok(names('zombie').includes('rotten_flesh') && names('skeleton').includes('bone') && names('spider').includes('string'));
  assert.deepEqual(names('sheep_shear'), ['wool']);
});

t('creatures never stand inside a block, in a day of walking about', () => {
  const w = field();
  for (let i = 0; i < 40; i++) w.setBlock(14 + (i % 5), G + 1, 2 + Math.floor(i / 5) * 3, B.STONE); // some scattered blocks
  const crowd = [new Mob(w, 'cow', 8.5, G + 1, 8.5, mulberry32(1)), new Mob(w, 'pig', 9.5, G + 1, 9.5, mulberry32(2)), new Mob(w, 'sheep', 11.5, G + 1, 7.5, mulberry32(3)), new Mob(w, 'spider', 12.5, G + 1, 12.5, mulberry32(4)), new Mob(w, 'zombie', 6.5, G + 1, 12.5, mulberry32(5))];
  for (let i = 0; i < 20 * 120; i++) for (const m of crowd) { m.update(0.05, { player: { x: 15, y: G + 1, z: 10 }, hitPlayer() {} }); if (i % 40 === 0) assert.ok(!m.body.collides(m.x, m.y, m.z), `${m.type} is not inside a block at ${m.x.toFixed(1)}, ${m.z.toFixed(1)}`); }
});

t('surfaceBelow finds the ground', () => {
  const w = field();
  assert.equal(surfaceBelow(w, 5, 5, 60), G + 1);
  assert.equal(surfaceBelow(w, 5, 5, G), -1 + 0 === -1 ? surfaceBelow(w, 5, 5, G) : 0);
});

console.log(`mobs: ${n} checks passed`);
