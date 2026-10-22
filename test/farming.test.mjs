// Farming, plants, raycasting through foliage, and settings. Run with: npm test
import assert from 'node:assert/strict';
import { B, PLANT } from '../public/js/blocks.js';
import { I, RECIPES, dropsFor, miningInfo } from '../public/js/items.js';
import { World, CS, SEA } from '../public/js/world.js';
import { growPlants, GROWTH } from '../public/js/plants.js';
import { raycast } from '../public/js/player.js';
import { meshChunk } from '../public/js/mesher.js';
import { Settings, ACTIONS, keyLabel } from '../public/js/settings.js';

const world = new World(1337);
for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) world.generateChunk(cx, cz);

// ---- wild grass: all three growth stages exist, and chunks track their plants ----
const seen = { [B.GRASS_S]: 0, [B.GRASS_M]: 0, [B.GRASS_L]: 0 };
let tracked = 0;
for (const c of world.chunks.values()) {
  for (const i of c.plants) { assert.ok(PLANT[c.data[i]], 'tracked index really is a plant'); tracked++; }
  for (const b of c.data) if (b in seen) seen[b]++;
}
console.log('wild grass tufts:', JSON.stringify(seen));
assert.ok(seen[B.GRASS_S] > 50 && seen[B.GRASS_M] > 50 && seen[B.GRASS_L] > 30, 'all three stages are generated');
assert.ok(tracked >= seen[B.GRASS_S] + seen[B.GRASS_M] + seen[B.GRASS_L]);
// ---- setBlock keeps the plant index in sync ----
const px = 5, pz = 5, py = world.heightAt(px, pz) + 1;
world.setBlock(px, py, pz, B.WHEAT_S);
const ch = world.getChunk(0, 0);
const li = (py * CS + pz) * CS + px;
assert.ok(ch.plants.has(li), 'placing a plant registers it');
world.setBlock(px, py, pz, B.AIR);
assert.ok(!ch.plants.has(li), 'removing it unregisters it');

// ---- growth: sprout -> young -> ripe, only on farmland ----
const fx = 6, fz = 6, fy = world.heightAt(fx, fz);
world.setBlock(fx, fy, fz, B.DIRT);
world.setBlock(fx, fy + 1, fz, B.WHEAT_S);
growPlants(world, 0, 0, 1, 1000, () => 0);
assert.equal(world.getBlock(fx, fy + 1, fz), B.WHEAT_S, 'wheat does not grow on plain dirt');
world.setBlock(fx, fy, fz, B.FARMLAND);
growPlants(world, 0, 0, 1, 1000, () => 0);
assert.equal(world.getBlock(fx, fy + 1, fz), B.WHEAT_S, 'wheat does not grow on dry farmland');
world.setBlock(fx, fy, fz, B.FARMLAND_WET);
growPlants(world, 0, 0, 1, 1000, () => 0);
assert.equal(world.getBlock(fx, fy + 1, fz), B.WHEAT_M, 'sprout grows to young wheat on moist farmland');
growPlants(world, 0, 0, 1, 1000, () => 0);
assert.equal(world.getBlock(fx, fy + 1, fz), B.WHEAT_L, 'young wheat ripens');
growPlants(world, 0, 0, 1, 1000, () => 0);
assert.equal(world.getBlock(fx, fy + 1, fz), B.WHEAT_L, 'ripe wheat stays ripe');
// a single tick with an unlucky roll changes nothing
world.setBlock(fx, fy + 1, fz, B.WHEAT_S);
growPlants(world, 0, 0, 1, 1, () => 0.999);
assert.equal(world.getBlock(fx, fy + 1, fz), B.WHEAT_S);
assert.ok(GROWTH[B.GRASS_S].rate < GROWTH[B.WHEAT_S].rate, 'wild grass grows slower than a tended crop');

// ---- water proximity is a circle of radius 4 ----
const wx = 40, wz = 40, wy = 30; // empty sky above the terrain
const w2 = new World(5);
w2.generateChunk(2, 2);
w2.setBlock(wx, wy, wz, B.WATER);
const near = (dx, dz, dy = 0) => w2.nearWater(wx + dx, wy + dy, wz + dz);
assert.ok(near(4, 0), '4 blocks straight away is in range');
assert.ok(near(2, 3), '3.6 blocks diagonal is in range');
assert.ok(!near(3, 3), '4.24 blocks diagonal is out of range (circle, not square)');
assert.ok(!near(5, 0), '5 blocks is out of range');
assert.ok(near(0, 0, 4), 'water up to 4 blocks below the soil counts');
assert.ok(!near(0, 0, 5), 'water 5 below does not');
assert.ok(near(0, 0, -1), 'water 1 above counts');
assert.ok(!near(0, 0, -2), 'water 2 above does not');

// ---- raycasting: aim through gaps in grass, hit grass by its real size ----
const rw = new World(9);
rw.generateChunk(0, 0);
const gy = rw.heightAt(8, 8);
rw.setBlock(8, gy + 1, 8, B.GRASS_S); // 0.35 tall
const eye = { x: 8.5, y: gy + 3, z: 8.5 };
let hit = raycast(rw, eye, { x: 0, y: -1, z: 0 }, 6);
assert.equal(hit.id, B.GRASS_S, 'straight down onto the tuft hits the tuft');
hit = raycast(rw, { x: 8.02, y: gy + 3, z: 8.02 }, { x: 0, y: -1, z: 0 }, 6);
assert.equal(hit.id, rw.getBlock(8, gy, 8), 'a ray past the tuft edge goes through to the soil underneath');
hit = raycast(rw, { x: 8.5, y: gy + 1.9, z: 6 }, { x: 0, y: -0.9, z: 1 }, 6); // skims in above the 0.35 box
assert.ok(hit && hit.id !== B.GRASS_S, 'passing above a short tuft does not select it');
rw.setBlock(8, gy + 1, 8, B.GRASS_L); // 0.9 tall: now the same ray should hit
hit = raycast(rw, { x: 8.5, y: gy + 1.8, z: 6 }, { x: 0, y: -0.05, z: 1 }, 6);
assert.equal(hit.id, B.GRASS_L, 'a large tuft is a bigger target');
assert.equal(hit.nz, -1, 'the entry face is reported');

// ---- drops ----
assert.deepEqual(dropsFor(B.WHEAT_L, true, () => 0).map((d) => d.id).sort(), [I.WHEAT, I.WHEAT_SEEDS, I.WHEAT_SEEDS].sort());
assert.deepEqual(dropsFor(B.WHEAT_M, true), [{ id: I.WHEAT_SEEDS, n: 1 }], 'unripe wheat only gives the seed back');
assert.equal(dropsFor(B.GRASS_L, true, () => 0.99).length, 0, 'grass usually drops nothing');
assert.deepEqual(dropsFor(B.GRASS_L, true, () => 0), [{ id: I.WHEAT_SEEDS, n: 1 }], 'but sometimes seeds');
let big = 0, small = 0;
for (let i = 0; i < 2000; i++) { big += dropsFor(B.GRASS_L, true).length; small += dropsFor(B.GRASS_S, true).length; }
assert.ok(big > small, 'larger grass is more likely to hold seeds');
assert.deepEqual(dropsFor(B.FARMLAND, true), [{ id: B.DIRT, n: 1 }]);

// ---- shovels matter now ----
for (const b of [B.GRASS, B.DIRT, B.SAND]) {
  const hand = miningInfo(b, 0).time, wood = miningInfo(b, I.WOOD_SHOVEL).time, iron = miningInfo(b, I.IRON_SHOVEL).time;
  assert.ok(wood < hand * 0.6 && iron < wood, `shovel speeds up block ${b}`);
  assert.equal(miningInfo(b, I.IRON_PICKAXE).time, hand, 'a pickaxe does not help on soft blocks');
}
assert.ok(RECIPES.some((r) => r.out === I.IRON_HOE) && RECIPES.some((r) => r.out === I.BREAD && r.ins[0][0] === I.WHEAT));

// ---- the mesher emits sway data for plants ----
const m = meshChunk(world, world.getChunk(0, 0));
assert.ok(m.plants, 'plants mesh exists');
assert.equal(m.plants.sway.length, m.plants.positions.length / 3, 'one sway weight per vertex');
assert.ok(m.plants.sway.every((v) => v === 0 || v === 1));
assert.ok(Math.max(...m.plants.indices) < m.plants.positions.length / 3);

// ---- settings / key bindings ----
const st = new Settings();
assert.equal(st.get('sensitivity'), 1);
assert.equal(st.key('forward'), 'KeyW');
assert.equal(st.actionFor('KeyW'), 'forward');
assert.equal(st.setBind('forward', 'ArrowUp'), null);
assert.equal(st.key('forward'), 'ArrowUp');
assert.equal(st.actionFor('KeyW'), undefined, 'old key is free');
assert.equal(st.setBind('back', 'ArrowUp'), 'forward', 'binding a used key swaps the two actions');
assert.equal(st.key('forward'), 'KeyS');
assert.equal(st.key('back'), 'ArrowUp');
st.resetBinds();
assert.equal(st.key('forward'), 'KeyW');
st.set('sensitivity', 2.5);
assert.equal(st.get('sensitivity'), 2.5);
assert.equal(new Set(ACTIONS.map((a) => a.key)).size, ACTIONS.length, 'default keys are all unique');
assert.equal(keyLabel('KeyW'), 'W');
assert.equal(keyLabel('Digit3'), '3');
assert.equal(keyLabel('ShiftLeft'), 'Left Shift');

console.log('all farming/settings tests passed');
