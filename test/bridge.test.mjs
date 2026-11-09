// Bridge assist: with nothing targeted, a block goes in front of the block you stand on (so a bridge can be built forwards).
import assert from 'node:assert/strict';
import { bridgeHit } from '../src/js/bridge.js';
import { B } from '../src/js/blocks.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

// a tiny world: blocks in a map, air elsewhere
const mk = (...cells) => { const m = new Map(cells.map(([x, y, z, id]) => [x + ',' + y + ',' + z, id ?? B.STONE])); return { getBlock: (x, y, z) => m.get(x + ',' + y + ',' + z) ?? B.AIR }; };
const HW = 0.3;

t('at the end of a bridge heading east, the next block goes in front of the last one', () => {
  const w = mk([0, 62, 0], [1, 62, 0], [2, 62, 0]);
  const h = bridgeHit(w, { x: 2.5, y: 63, z: 0.5 }, HW, 1);
  assert.deepEqual([h.x, h.y, h.z, h.nx, h.ny, h.nz], [2, 62, 0, 1, 0, 0]);
});

t('every facing builds the way you look', () => {
  const w = mk([0, 62, 0]);
  const p = { x: 0.5, y: 63, z: 0.5 };
  assert.deepEqual([0, 1, 2, 3].map((f) => { const h = bridgeHit(w, p, HW, f); return [h.nx, h.nz]; }), [[0, -1], [1, 0], [0, 1], [-1, 0]]);
});

t('standing right on the edge (the block under your middle is air) still finds the floor', () => {
  const w = mk([0, 62, 0]);
  const h = bridgeHit(w, { x: 1.1, y: 63, z: 0.5 }, HW, 1); // 0.2 past the edge: only the left corners are on the block
  assert.ok(h && h.x === 0 && h.nx === 1);
});

t('a little back from the edge it still finds the gap, but not far away', () => {
  const w = mk([0, 62, 0], [1, 62, 0], [2, 62, 0], [3, 62, 0], [4, 62, 0]);
  assert.equal(bridgeHit(w, { x: 3.5, y: 63, z: 0.5 }, HW, 1).x, 4, 'one block short of the edge');
  assert.equal(bridgeHit(w, { x: 0.5, y: 63, z: 0.5 }, HW, 1), null, 'four short: nothing to do');
});

t('water and plants are built over; a solid block in the way means the bridge goes on past it', () => {
  assert.ok(bridgeHit(mk([0, 62, 0], [1, 62, 0, B.WATER]), { x: 0.5, y: 63, z: 0.5 }, HW, 1), 'over water');
  assert.ok(bridgeHit(mk([0, 62, 0], [1, 62, 0, B.GRASS_S]), { x: 0.5, y: 63, z: 0.5 }, HW, 1), 'over a tuft of grass');
  const h = bridgeHit(mk([0, 62, 0], [1, 62, 0]), { x: 0.5, y: 63, z: 0.5 }, HW, 1);
  assert.equal(h.x, 1, 'the next free spot is after the solid one');
});

t('nothing underfoot (in the air) gives nothing', () => {
  assert.equal(bridgeHit(mk(), { x: 0.5, y: 63, z: 0.5 }, HW, 1), null);
});

console.log(`bridge: ${n} checks passed`);
