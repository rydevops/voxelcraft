// Minimap data and clocks. Run with: npm test
import assert from 'node:assert/strict';
import { B } from '../public/js/blocks.js';
import { World, CS, idx } from '../public/js/world.js';
import { MinimapData, gameClock, gameDayPart } from '../public/js/minimap.js';

const G = 30;
function arena() {
  const w = new World(1);
  for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) {
    const c = w.generateChunk(cx, cz);
    c.data.fill(0);
    c.plants.clear();
    for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
  }
  return w;
}
// distinct colours per block so we can tell what was drawn
const COLORS = { [B.GRASS]: [80, 160, 60], [B.STONE]: [120, 120, 125], [B.DIRT]: [130, 95, 65], [B.SAND]: [220, 205, 160], [B.WATER]: [40, 100, 210], [B.LEAVES]: [40, 110, 40], [B.PLANKS]: [180, 140, 90] };
const colorOf = (id) => COLORS[id] ?? [200, 0, 200];
const px = (img, N, i, j) => { const o = (j * N + i) * 4; return [img[o], img[o + 1], img[o + 2], img[o + 3]]; };

const w = arena();
const map = new MinimapData(w, colorOf);
const R = 10, N = 2 * R + 1;

// flat grass: every pixel is the grass colour, fully opaque (no relief on flat ground)
let img = map.render(0, 0, R);
assert.equal(img.length, N * N * 4);
assert.deepEqual(px(img, N, R, R), [80, 160, 60, 255]);
assert.deepEqual(px(img, N, 0, 0), [80, 160, 60, 255]);

// the picture is centred on the player and moves with them: pixel (i, j) is block (cx-R+i, cz-R+j)
w.setBlock(5, G, 3, B.SAND);
img = map.render(0, 0, R);
assert.deepEqual(px(img, N, R + 5, R + 3), [220, 205, 160, 255], 'a sand block 5 east / 3 south of the player');
img = map.render(4, 1, R); // player walks east and south
assert.deepEqual(px(img, N, R + 1, R + 2), [220, 205, 160, 255], 'the same block is now closer (1 east, 2 south)');
assert.deepEqual(px(img, N, R + 5, R + 3), [80, 160, 60, 255]);

// edits show up (the chunk's version changed)
w.setBlock(2, G, 2, B.PLANKS);
img = map.render(0, 0, R);
assert.deepEqual([...px(img, N, R + 2, R + 2)], [180, 140, 90, 255], 'a placed block appears on the map');

// plants and air above the ground are skipped; a tree shows its leaves from above
w.setBlock(7, G + 1, 7, B.GRASS_S);
for (let y = G + 1; y <= G + 4; y++) w.setBlock(-3, y, 4, y === G + 4 ? B.LEAVES : B.LOG);
img = map.render(0, 0, R);
assert.deepEqual(px(img, N, R + 7, R + 7).slice(0, 3), [80, 160, 60], 'grass tufts do not hide the ground');
const top = px(img, N, R - 3, R + 4); // a column 4 taller than its neighbour is lit with the maximum relief factor (1.24)
assert.ok(Math.abs(top[0] - 40 * 1.24) < 2 && Math.abs(top[1] - 110 * 1.24) < 2, 'the tree top is leaf coloured, lit by its height');

// water: blue, and deeper water is darker and bluer than shallow water
for (let x = -8; x <= -4; x++) for (let z = -8; z <= -4; z++) { w.setBlock(x, G, z, B.WATER); }
for (let x = -8; x <= -6; x++) for (let z = -8; z <= -4; z++) for (let y = G - 6; y < G; y++) w.setBlock(x, y, z, B.WATER); // a deep end
img = map.render(0, 0, R);
const shallow = px(img, N, R - 4, R - 8), deep = px(img, N, R - 8, R - 8);
assert.ok(shallow[2] > shallow[0] && shallow[2] > shallow[1] * 0.9, 'water looks blue');
assert.ok(deep[0] + deep[1] + deep[2] < shallow[0] + shallow[1] + shallow[2], 'deeper water is darker');

// relief: a hill is lit on its north-west slope side and shaded where the ground drops
for (let x = 6; x <= 8; x++) for (let z = -8; z <= -6; z++) w.setBlock(x, G + 1, z, B.GRASS);
img = map.render(0, 0, R);
const lit = px(img, N, R + 6, R - 8), flat = px(img, N, R + 12 - 4, R - 8 + 6);
assert.ok(lit[1] > flat[1], 'ground rising to the south-east of its north-west neighbour is brighter');

// unloaded areas are transparent
const edge = new MinimapData(w, colorOf).render(45, 0, R); // the arena is loaded up to x = 47
assert.equal(px(edge, N, N - 1, R)[3], 0, 'beyond the loaded chunks the map is empty');
assert.equal(px(edge, N, 0, R)[3], 255);

// ---- clocks ----
assert.equal(gameClock(0), '6:00 AM', 'sunrise');
assert.equal(gameClock(0.25), '12:00 PM', 'noon');
assert.equal(gameClock(0.5), '6:00 PM', 'sunset');
assert.equal(gameClock(0.75), '12:00 AM', 'midnight');
assert.equal(gameClock(0.125), '9:00 AM');
assert.equal(gameClock(0.9999).endsWith('AM'), true);
assert.equal(gameDayPart(0.25), 'Afternoon');
assert.equal(gameDayPart(0.1), 'Morning');
assert.equal(gameDayPart(0.75), 'Night');
assert.equal(gameDayPart(0.0), 'Sunrise');
assert.equal(gameDayPart(0.5), 'Sunset');

console.log('all minimap tests passed');
