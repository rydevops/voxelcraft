// New villages (terrain 4): five to seven villagers, each with a house of their own and a bed in it; at night they open their door, walk
// to their bed and sleep, and at dawn they get up again. Older worlds keep the villages they had.
import assert from 'node:assert/strict';
import { World } from '../src/js/world.js';
import { villageOfRegion } from '../src/js/villages.js';
import { Villager, bedtime } from '../src/js/villagerai.js';
import { setDoorOpen } from '../src/js/doors.js';
import { BED, DOOR, SOLID } from '../src/js/blocks.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

const world = new World(1337, { terrain: 4 });
const villages = [];
for (let rz = -4; rz <= 4; rz++) for (let rx = -4; rx <= 4; rx++) { const v = villageOfRegion(world, rx, rz); if (v) villages.push(v); }
const gen = (v) => { for (let cx = (v.bounds.x0 >> 4) - 1; cx <= (v.bounds.x1 >> 4) + 1; cx++) for (let cz = (v.bounds.z0 >> 4) - 1; cz <= (v.bounds.z1 >> 4) + 1; cz++) world.generateChunk(cx, cz); };

t('every village has five to seven homes, each with its own door and bed', () => {
  assert.ok(villages.length >= 8, 'villages found: ' + villages.length);
  for (const v of villages) {
    assert.ok(v.homes.length >= 5 && v.homes.length <= 7, `${v.name}: ${v.homes.length} homes`);
    assert.equal(new Set(v.homes.map((h) => h.door.x + ',' + h.door.z)).size, v.homes.length, 'every house has its own door');
    assert.equal(new Set(v.homes.map((h) => h.bedFoot.x + ',' + h.bedFoot.z)).size, v.homes.length, 'and its own bed');
  }
});

t('the beds and doors are really in the world: a bed (foot and head, same colour) and a door at every home', () => {
  for (const v of villages.slice(0, 4)) {
    gen(v);
    for (const h of v.homes) {
      const [hx, hz] = h.bedBlockHead, [fx, fz] = h.bedBlockFoot;
      const head = BED.get(world.getBlock(hx, h.y, hz)), foot = BED.get(world.getBlock(fx, h.y, fz));
      assert.ok(head && head.part === 'head' && foot && foot.part === 'foot', `${v.name}: a bed at ${hx},${hz}`);
      assert.equal(head.color, foot.color);
      assert.equal(head.color, h.color);
      assert.ok(DOOR.has(world.getBlock(Math.floor(h.door.x), h.y, Math.floor(h.door.z))), 'a door');
      // the pillow end is against the wall: the head is further from the door than the foot
      assert.ok(Math.hypot(h.bedHead.x - h.door.x, h.bedHead.z - h.door.z) > Math.hypot(h.bedFoot.x - h.door.x, h.bedFoot.z - h.door.z), 'the head is at the back');
    }
  }
});

t('at night a villager opens their door, walks in, lies down in their own bed and sleeps; at dawn they get up and shut the door behind them', () => {
  const v = villages.find((x) => x.biome === 'plains') ?? villages[0];
  gen(v);
  const h = v.homes[0];
  const villager = new Villager(world, v, { x: h.doorstep.x, y: h.y, z: h.doorstep.z }, 0, h);
  const door = [Math.floor(h.door.x), h.y, Math.floor(h.door.z)];
  const opened = [], doorOpenNow = () => DOOR.get(world.getBlock(...door))?.open;
  const env = { night: false, setDoor: (d, open) => { opened.push(open); setDoorOpen(world, Math.floor(d.x), d.y, Math.floor(d.z), open); } };
  const player = { x: v.cx + 60, z: v.cz + 60 };
  const run = (secs, step = 0.05) => { for (let i = 0; i < secs / step; i++) villager.update(step, player, 0, env); };
  run(20);
  assert.equal(villager.mode, 'day');
  assert.ok(!doorOpenNow(), 'the door stays shut by day');
  env.night = true;
  let slept = false;
  for (let i = 0; i < 20 * 120 && !slept; i++) { villager.update(0.05, player, 0, env); slept = villager.mode === 'sleeping'; }
  assert.ok(slept, 'asleep within two minutes (at ' + villager.x.toFixed(1) + ', ' + villager.z.toFixed(1) + ')');
  assert.ok(opened.includes(true), 'they opened their own door');
  run(3);
  assert.ok(!doorOpenNow(), 'and shut it behind them');
  const p = villager.sleepPose();
  assert.ok(Math.abs(p.x - h.bedFoot.x) < 1 && Math.abs(p.z - h.bedFoot.z) < 1 && p.y > h.y, 'in the bed');
  assert.ok(Math.hypot(villager.x - h.bedFoot.x, villager.z - h.bedFoot.z) < 1.2);
  assert.equal(villager.speak(true).startsWith('Zzz'), true, 'a sleeper mumbles');
  run(30);
  assert.equal(villager.mode, 'sleeping', 'stays asleep all night');
  env.night = false;
  let up = false;
  for (let i = 0; i < 20 * 120 && !up; i++) { villager.update(0.05, player, 0, env); up = villager.mode === 'day'; }
  assert.ok(up, 'up again at dawn');
  assert.ok(Math.hypot(villager.x - h.doorstep.x, villager.z - h.doorstep.z) < 2.5, 'outside their door');
  run(3);
  assert.ok(!doorOpenNow(), 'the door is shut');
  run(120);
  assert.ok(!villager.body.collides(villager.x, villager.y, villager.z), 'not stuck in a wall');
});

t('bedtime is after sunset until just before sunrise', () => {
  assert.equal(bedtime(0.2), false);
  assert.equal(bedtime(0.5), false, 'the sun is only just down');
  assert.equal(bedtime(0.6), true);
  assert.equal(bedtime(0.9), true);
  assert.equal(bedtime(0.99), false);
});

t('every villager of a village can get to bed: a day and a night in a whole village', () => {
  const v = villages[1];
  gen(v);
  const people = v.homes.map((h, i) => new Villager(world, v, { x: h.doorstep.x, y: h.y, z: h.doorstep.z }, i, h));
  const env = { night: true, setDoor: (d, open) => setDoorOpen(world, Math.floor(d.x), d.y, Math.floor(d.z), open) };
  const player = { x: v.cx + 80, z: v.cz + 80 };
  for (let i = 0; i < 20 * 150; i++) for (const p of people) p.update(0.05, player, 0, env);
  const asleep = people.filter((p) => p.mode === 'sleeping').length;
  assert.equal(asleep, people.length, `all ${people.length} are in bed (${asleep})`);
});

t('older worlds are left as they were: no homes, the same villages', () => {
  const old = new World(1337, { terrain: 3 });
  let found = 0;
  for (let rz = -3; rz <= 3; rz++) for (let rx = -3; rx <= 3; rx++) { const v = villageOfRegion(old, rx, rz); if (v) { found++; assert.deepEqual(v.homes, []); } }
  assert.ok(found > 0);
  assert.ok(SOLID.length > 0);
});

console.log('homes: ' + n + ' checks passed');
