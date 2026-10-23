// The full-screen map: zoom maths, and a map that remembers terrain after its chunks unload.
import assert from 'node:assert/strict';
import { clampZoom, zoomAbout, viewRadius, MIN_ZOOM, MAX_ZOOM, MAX_RADIUS } from '../src/js/fullmapmath.js';
import { World } from '../src/js/world.js';
import { MinimapData } from '../src/js/minimap.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

t('zoom stays within its limits (and survives junk)', () => {
  assert.equal(clampZoom(0.1), MIN_ZOOM); assert.equal(clampZoom(500), MAX_ZOOM); assert.equal(clampZoom(4), 4);
  assert.equal(clampZoom(NaN), 3); assert.equal(clampZoom(undefined), 3);
});

t('zooming keeps the point under the finger where it is', () => {
  const view = { zoom: 3, cx: 100, cz: -40 };
  for (const [dx, dy, next] of [[0, 0, 6], [200, -80, 6], [-300, 120, 1.5], [50, 50, 100]]) {
    const r = zoomAbout(view, next, dx, dy);
    const before = { x: view.cx + dx / view.zoom, z: view.cz + dy / view.zoom }, after = { x: r.cx + dx / r.zoom, z: r.cz + dy / r.zoom };
    assert.ok(Math.abs(before.x - after.x) < 1e-9 && Math.abs(before.z - after.z) < 1e-9, `anchored at ${dx},${dy}`);
    assert.ok(r.zoom >= MIN_ZOOM && r.zoom <= MAX_ZOOM);
  }
  const same = zoomAbout({ zoom: 3, cx: 5, cz: 7 }, 3, 40, 40);
  assert.ok(same.zoom === 3 && Math.abs(same.cx - 5) < 1e-9 && Math.abs(same.cz - 7) < 1e-9, 'no zoom change, no move');
});

t('the picture always covers the screen, but its size is capped', () => {
  for (const z of [1, 2, 3, 8, 16]) {
    const R = viewRadius(844, 390, z);
    assert.ok(R <= MAX_RADIUS);
    assert.ok(R * 2 * z >= Math.min(844, 2 * MAX_RADIUS * z), `covers the width at zoom ${z}`);
  }
  assert.equal(viewRadius(4000, 3000, 1), MAX_RADIUS);
});

t('the map remembers a chunk after it unloads', () => {
  const w = new World(1337);
  const data = new MinimapData(w, () => [100, 150, 80]);
  w.generateChunk(0, 0);
  const x = 5, z = 5;
  assert.ok(data.column(x, z), 'seen while loaded');
  const seen = data.column(x, z);
  for (const k of [...w.chunks.keys()]) w.chunks.delete(k);
  const remembered = data.column(x, z);
  assert.deepEqual(remembered, seen, 'the same column is still there');
  assert.equal(data.column(5000, 5000), null, 'never seen: unknown');
  const px = data.render(x, z, 3);
  assert.equal(px[(3 * 7 + 3) * 4 + 3], 255, 'and it is drawn');
});

console.log(`fullmap: ${n} checks passed`);
