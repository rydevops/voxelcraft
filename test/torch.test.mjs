// Torches: placement data, hanging on blocks, giving light (untinted block light), and the mesh. Run with: npm test
import assert from 'node:assert/strict';
import { B, EMIT, PLANT, SOLID, HAS_SUPPORT, SUPPORT, LEAN, PLANT_H } from '../src/js/blocks.js';
import { I, placesOf, dropsFor } from '../src/js/items.js';
import { World, CS, idx } from '../src/js/world.js';
import { AttachSim } from '../src/js/attach.js';
import { meshChunk } from '../src/js/mesher.js';
import { raycast } from '../src/js/player.js';
import { brightness, skyBrightness, blockBrightness, MIN_BRIGHTNESS } from '../src/js/light.js';

const G = 30;
function arena() {
  const w = new World(7);
  for (let cx = -1; cx <= 1; cx++) for (let cz = -1; cz <= 1; cz++) {
    const c = w.generateChunk(cx, cz);
    c.data.fill(0);
    c.plants.clear();
    for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
  }
  w.lighting.rebuildAll();
  return w;
}
// a sealed 9x3x2 room (x 3..11, z 3..5, two high) so only a torch can light it
function room() {
  const w = arena();
  for (let x = 2; x <= 12; x++) for (let z = 2; z <= 6; z++) for (let y = G + 1; y <= G + 3; y++) w.setBlock(x, y, z, B.STONE);
  for (let x = 3; x <= 11; x++) for (let z = 3; z <= 5; z++) for (let y = G + 1; y <= G + 2; y++) w.setBlock(x, y, z, B.AIR);
  return w;
}

// ---- data: one item, five blocks (floor + four walls), none solid, all glowing ----
const places = placesOf(I.TORCH);
assert.deepEqual(Object.keys(places).sort(), ['east', 'north', 'south', 'up', 'west'], 'no ceiling torches');
assert.equal(places.up, B.TORCH_FLOOR);
for (const id of Object.values(places)) {
  assert.equal(SOLID[id], 0, 'you can walk through a torch');
  assert.equal(EMIT[id], 14, 'torches give off light 14');
  assert.equal(PLANT[id], 3, 'drawn as the torch model');
  assert.equal(HAS_SUPPORT[id], 1);
  assert.deepEqual(dropsFor(id, true), [{ id: I.TORCH, n: 1 }], 'every kind drops the torch item');
}
assert.deepEqual([...SUPPORT.slice(B.TORCH_FLOOR * 3, B.TORCH_FLOOR * 3 + 3)], [0, -1, 0], 'the floor torch stands on the block below');
assert.deepEqual([...SUPPORT.slice(B.TORCH_E * 3, B.TORCH_E * 3 + 3)], [-1, 0, 0], 'one on the east side hangs on the block to its west');
assert.deepEqual([LEAN[B.TORCH_E * 2], LEAN[B.TORCH_E * 2 + 1]], [1, 0], 'and leans east, away from the wall');

// ---- they hang on blocks and drop when it goes ----
{
  const w = arena();
  const dropped = [];
  const sim = new AttachSim(w, { onBreak: (x, y, z, id) => dropped.push([x, y, z, id]) });
  w.setBlock(5, G + 1, 5, B.TORCH_FLOOR);
  w.setBlock(6, G + 1, 5, B.STONE);
  w.setBlock(7, G + 1, 5, B.TORCH_E);  // east of the stone at x=6: hangs on it
  w.setBlock(3, G + 2, 3, B.STONE);
  w.setBlock(3, G + 2, 4, B.TORCH_S);  // south (+z) of stone at z=3
  sim.update();
  assert.equal(dropped.length, 0, 'supported torches stay');
  w.setBlock(6, G + 1, 5, B.AIR);
  sim.update();
  assert.deepEqual(dropped, [[7, G + 1, 5, B.TORCH_E]], 'removing the wall drops the torch hanging on it');
  assert.equal(w.getBlock(7, G + 1, 5), B.AIR);
  assert.equal(w.getBlock(5, G + 1, 5), B.TORCH_FLOOR, 'the others are untouched');
  dropped.length = 0;
  w.setBlock(5, G, 5, B.AIR); // dig out the ground under the floor torch
  sim.update();
  assert.deepEqual(dropped, [[5, G + 1, 5, B.TORCH_FLOOR]]);
  // a torch placed against nothing falls off at once
  dropped.length = 0;
  w.setBlock(10, G + 3, 10, B.TORCH_N);
  sim.update();
  assert.equal(dropped.length, 1, 'a torch with nothing to hang on does not stay');
}

// ---- light: a torch lights a dark room, and light fades with distance ----
{
  const w = room();
  assert.equal(w.lighting.levelAt(7, G + 1, 4), 0, 'a sealed room is dark');
  w.setBlock(3, G + 1, 4, B.TORCH_FLOOR);
  assert.equal(w.lighting.levelAt(3, G + 1, 4), 14);
  assert.equal(w.lighting.levelAt(5, G + 1, 4), 12, 'two blocks away');
  assert.equal(w.lighting.levelAt(11, G + 1, 4), 6, 'eight blocks away');
  w.setBlock(3, G + 1, 4, B.AIR);
  assert.equal(w.lighting.levelAt(11, G + 1, 4), 0, 'taking the torch away puts the dark back');
  // the incremental lighting equals a full recalculation with torches about
  w.setBlock(4, G + 1, 3, B.TORCH_FLOOR); w.setBlock(10, G + 2, 5, B.TORCH_FLOOR);
  const snap = new Map([...w.chunks].map(([k, c]) => [k, Uint8Array.from(c.light)]));
  w.lighting.rebuildAll();
  for (const [k, c] of w.chunks) assert.deepEqual(Uint8Array.from(c.light), snap.get(k), 'incremental light matches a rebuild');
}

// ---- the mesh: a torch is a small model with its own glow, and a lit room has block light on its walls ----
{
  const w = arena();
  w.setBlock(5, G + 1, 5, B.TORCH_FLOOR);
  const s = meshChunk(w, w.getChunk(0, 0)).solid;
  assert.equal(s.blocklight.length * 3, s.colors.length * 2, 'two numbers (glow, shade) per vertex');
  const glowAt = (i) => s.blocklight[i * 2];
  let torchVerts = 0, tallest = 0;
  for (let i = 0; i < s.positions.length; i += 3) {
    const x = s.positions[i], y = s.positions[i + 1], z = s.positions[i + 2];
    if (x > 5.4 && x < 5.6 && z > 5.4 && z < 5.6 && y >= G + 1 && y <= G + 1.8) { torchVerts++; tallest = Math.max(tallest, y - (G + 1)); }
  }
  assert.equal(torchVerts, 20, 'four sides and a flame top: 20 vertices');
  assert.ok(Math.abs(tallest - PLANT_H[B.TORCH_FLOOR]) < 1e-5, 'as tall as the data says');
  let best = 0;
  for (let i = 0; i < s.positions.length / 3; i++) best = Math.max(best, glowAt(i));
  assert.ok(best >= 0.7, 'the torch itself glows, even in daylight');

  const r = room();
  r.setBlock(3, G + 1, 4, B.TORCH_FLOOR);
  const m = meshChunk(r, r.getChunk(0, 0)).solid;
  let near = 0, far = 0;
  for (let i = 0; i < m.positions.length; i += 3) {
    const x = m.positions[i], y = m.positions[i + 1];
    if (y < G + 1 || y > G + 2.01) continue;
    if (Math.abs(x - 4) < 1e-6) near = Math.max(near, m.blocklight[(i / 3) * 2]);   // the wall nearest the torch
    if (Math.abs(x - 11) < 1e-6) far = Math.max(far, m.blocklight[(i / 3) * 2]);
  }
  assert.ok(near > far && near > 0.3, 'walls near the torch get more block light than the far end (' + near.toFixed(2) + ' vs ' + far.toFixed(2) + ')');
  assert.ok(blockBrightness(0) === 0 && blockBrightness(15) === 1 && blockBrightness(10) > blockBrightness(5));
  assert.equal(skyBrightness(0), 0, 'no sky light is no daylight...');
  assert.equal(brightness(0), MIN_BRIGHTNESS, '...but what you see is never below the dim floor');
  assert.ok(MIN_BRIGHTNESS > 0 && MIN_BRIGHTNESS < 0.25);
}

// ---- you can aim at a thin torch ----
{
  const w = arena();
  w.setBlock(5, G + 1, 5, B.TORCH_FLOOR);
  const dir = { x: 0, y: -0.3, z: 1 }; const len = Math.hypot(dir.x, dir.y, dir.z); dir.x /= len; dir.y /= len; dir.z /= len;
  const hit = raycast(w, { x: 5.5, y: G + 1.6, z: 3.5 }, dir, 6);
  assert.equal(hit.id, B.TORCH_FLOOR, 'a ray through the middle hits the torch');
  const miss = raycast(w, { x: 5.1, y: G + 1.4, z: 3.5 }, { x: 0, y: 0, z: 1 }, 6);
  assert.ok(!miss || miss.id !== B.TORCH_FLOOR, 'a ray past its thin edge goes by');
}

console.log('all torch tests passed');
