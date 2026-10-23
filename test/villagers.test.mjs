// Villagers: they walk about their village without leaving the ground, falling in the well or walking through walls,
// look at you when you are close, can be picked out with a ray, and have something to say.
import assert from 'node:assert/strict';
import { World } from '../src/js/world.js';
import { villageOfRegion } from '../src/js/villages.js';
import { Villager, pickVillager, JOBS } from '../src/js/villagerai.js';
import { SOLID, IS_WATER } from '../src/js/blocks.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

const world = new World(1337);
let village = null;
for (let rz = -5; rz <= 5 && !village; rz++) for (let rx = -5; rx <= 5 && !village; rx++) { const v = villageOfRegion(world, rx, rz); if (v && v.buildings.length >= 6) village = v; }
assert.ok(village, 'found a village to test in');
for (let cx = (village.bounds.x0 >> 4) - 1; cx <= (village.bounds.x1 >> 4) + 1; cx++) for (let cz = (village.bounds.z0 >> 4) - 1; cz <= (village.bounds.z1 >> 4) + 1; cz++) world.generateChunk(cx, cz);

const people = village.spawns.slice(0, 8).map((s, i) => new Villager(world, village, s, i));

t('villagers start somewhere sensible, with a name, a job and a look', () => {
  for (const v of people) {
    assert.ok(v.name.length >= 3 && JOBS.includes(v.job) && v.skin >= 0 && v.skin < 3);
    assert.ok(!v.body.collides(v.x, v.y, v.z), 'not inside a block');
  }
  assert.ok(new Set(people.map((v) => v.name + v.job)).size >= 3, 'a mixed crowd');
});

t('ten minutes of village life: they walk about, stay on the ground, keep out of the well and the water, and never get stuck in a wall', () => {
  const player = { x: village.cx + 40, z: village.cz + 40 }; // far away: they just go about their day
  const moved = new Map(people.map((v) => [v, 0]));
  const last = new Map(people.map((v) => [v, { x: v.x, z: v.z }]));
  for (let step = 0; step < 600 * 20; step++) { // 10 minutes at 20 ticks a second
    for (const v of people) {
      v.update(0.05, player, step * 0.05);
      assert.ok(v.y > village.y0 - 0.5 && v.y < village.y0 + 3.2, `stays at the village floor (y = ${v.y.toFixed(2)})`);
      if (step % 10 === 0) {
        assert.ok(!v.body.collides(v.x, v.y, v.z), `${v.name} is not inside a wall at ${v.x.toFixed(1)},${v.z.toFixed(1)}`);
        assert.ok(!v.body.inWater, `${v.name} stays out of the well`);
        assert.ok(Math.hypot(v.x - v.home.x, v.z - v.home.z) < 30, 'and does not wander far from home');
      }
      const l = last.get(v); moved.set(v, moved.get(v) + Math.hypot(v.x - l.x, v.z - l.z)); l.x = v.x; l.z = v.z;
    }
  }
  const walkers = [...moved.values()].filter((d) => d > 20).length;
  assert.ok(walkers >= people.length - 1, `nearly all of them walked around (${walkers} of ${people.length}; distances ${[...moved.values()].map((d) => Math.round(d)).join(', ')})`);
});

t('a villager turns to look at you when you stand near', () => {
  const v = people[0];
  v.target = null; v.timer = 99;
  const player = { x: v.x + 3, z: v.z };
  for (let i = 0; i < 80; i++) v.update(0.05, player, 0);
  const want = Math.atan2(-(player.x - v.x), -(player.z - v.z));
  const diff = Math.atan2(Math.sin(want - v.yaw), Math.cos(want - v.yaw));
  assert.ok(Math.abs(diff) < 0.2, 'facing you (off by ' + diff.toFixed(2) + ' rad)');
});

t('a ray picks the nearest villager it passes through, and nobody it misses', () => {
  const a = people[0], b = people[1];
  const fake = [{ x: 10, y: 30, z: 5, id: 'a' }, { x: 10, y: 30, z: 8, id: 'b' }];
  const o = { x: 10, y: 31.5, z: 0 };
  assert.equal(pickVillager(fake, o, { x: 0, y: 0, z: 1 }, 10).villager.id, 'a', 'the near one first');
  assert.equal(pickVillager(fake, o, { x: 0, y: 0, z: 1 }, 3), null, 'out of reach');
  assert.equal(pickVillager(fake, o, { x: 1, y: 0, z: 0 }, 10), null, 'looking away');
  assert.equal(pickVillager(fake, { x: 10, y: 35, z: 0 }, { x: 0, y: 0, z: 1 }, 10), null, 'over their heads');
  assert.ok(a && b);
});

t('every job has something to say by day and by night, and it mentions the village when it should', () => {
  const seen = new Set();
  for (const job of JOBS) {
    let found = null;
    for (let i = 0; i < 200 && !found; i++) { const v = new Villager(world, village, { x: village.cx + i, y: village.y0 + 1, z: village.cz }, i); if (v.job === job) found = v; }
    assert.ok(found, 'a ' + job);
    for (const night of [false, true]) {
      const lines = new Set();
      for (let k = 0; k < 40; k++) lines.add(found.speak(night, () => k / 40));
      assert.ok(lines.size >= 2 && [...lines].every((l) => l.length > 10 && !l.includes('{')), `${job} ${night ? 'night' : 'day'} lines`);
      for (const l of lines) seen.add(l);
    }
  }
  assert.ok([...seen].some((l) => l.includes(village.name)), 'someone welcomes you to the village by name');
});

console.log(`villagers: ${n} checks passed`);
