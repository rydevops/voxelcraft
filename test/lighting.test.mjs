// Light levels: sky light, tunnels, sealed rooms, filtering blocks, emitters, and that incremental updates
// always match a from-scratch calculation. Run with: npm test
import assert from 'node:assert/strict';
import { B, EMIT, FILTER, OPAQUE } from '../src/js/blocks.js';
import { World, CS, CH, idx } from '../src/js/world.js';
import { brightness, MAX_LIGHT } from '../src/js/light.js';
import { REG } from '../src/js/registry.js';

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
  w.lighting.rebuildAll(); // the arena was carved behind the lighting's back
  return w;
}
const L = (w, x, y, z) => w.lighting.levelAt(x, y, z);

// ---- open sky ----
{
  const w = arena();
  assert.equal(L(w, 4, G + 1, 4), MAX_LIGHT, 'open air is fully lit');
  assert.equal(L(w, 4, CH - 1, 4), MAX_LIGHT);
  assert.equal(L(w, 4, G - 3, 4), 0, 'solid ground is dark');
  assert.ok(Math.abs(brightness(MAX_LIGHT) - 1) < 1e-9, 'full light is full brightness');
  assert.ok(brightness(0) > 0 && brightness(0) < 0.2, 'no light is dark but never black');
  for (let l = 1; l <= MAX_LIGHT; l++) assert.ok(brightness(l) > brightness(l - 1), 'brighter as the level rises');
}

// ---- a tunnel gets darker the further in you go ----
{
  const w = arena();
  for (let y = G; y >= G - 2; y--) w.setBlock(2, y, 2, B.AIR); // shaft down from the surface
  for (let x = 3; x <= 14; x++) w.setBlock(x, G - 2, 2, B.AIR); // tunnel off its bottom
  assert.equal(L(w, 2, G - 2, 2), MAX_LIGHT, 'the shaft is as bright as outside');
  for (let d = 1; d <= 12; d++) assert.equal(L(w, 2 + d, G - 2, 2), MAX_LIGHT - d, `${d} blocks into the tunnel`);
  assert.ok(brightness(L(w, 14, G - 2, 2)) < brightness(L(w, 4, G - 2, 2)) * 0.7, 'visibly darker further in');
  // seal the top: the whole tunnel goes dark, and reopening brings it back
  w.setBlock(2, G, 2, B.STONE);
  for (let d = 0; d <= 12; d++) assert.equal(L(w, 2 + d, G - 2, 2), 0, `sealed tunnel is dark at ${d}`);
  w.setBlock(2, G, 2, B.AIR);
  for (let d = 0; d <= 12; d++) assert.equal(L(w, 2 + d, G - 2, 2), d === 0 ? MAX_LIGHT : MAX_LIGHT - d, `reopened tunnel is lit at ${d}`);
}

// ---- hiding in a box ----
{
  const w = arena();
  const box = [];
  for (let y = G + 1; y <= G + 2; y++) for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) box.push([8 + dx, y, 8 + dz]);
  for (const [x, y, z] of box) w.setBlock(x, y, z, B.PLANKS);
  assert.equal(L(w, 8, G + 1, 8), MAX_LIGHT, 'open-topped box: daylight falls straight in');
  w.setBlock(8, G + 3, 8, B.PLANKS); // roof
  assert.equal(L(w, 8, G + 1, 8), 0, 'sealed in: pitch dark');
  assert.equal(L(w, 8, G + 2, 8), 0);
  w.setBlock(9, G + 1, 8, B.AIR); // knock out one wall block
  assert.equal(L(w, 8, G + 1, 8), MAX_LIGHT - 2, 'a gap lets daylight in, dimmed by the turn it takes');
  w.setBlock(9, G + 1, 8, B.PLANKS);
  assert.equal(L(w, 8, G + 1, 8), 0, 'closing the gap darkens it again');
}

// ---- filtering blocks (leaves, water) dim light that passes through them ----
{
  const filtering = REG.blocks.filter((b) => b.lightFilter > 0 && !b.opaque);
  assert.ok(filtering.length, 'some blocks filter light');
  const w = arena();
  w.setBlock(5, G + 5, 5, B.LEAVES);
  assert.equal(L(w, 5, G + 4, 5), MAX_LIGHT - 1, 'beside open sky the cell below a lone leaf is lit from the side');
  // a wide canopy: the middle of it sits in real shade
  for (let dx = -3; dx <= 3; dx++) for (let dz = -3; dz <= 3; dz++) w.setBlock(8 + dx, G + 5, 8 + dz, B.LEAVES);
  const under = L(w, 8, G + 4, 8);
  assert.ok(under < MAX_LIGHT && under >= MAX_LIGHT - FILTER[B.LEAVES] - 3, `under a canopy it is dimmer (${under})`);
  w.setBlock(8, G + 5, 8, B.AIR);
  assert.ok(L(w, 8, G + 4, 8) > under, 'a hole in the canopy brightens it');
}

// ---- emitters ----
{
  const saved = EMIT[B.GLASS];
  EMIT[B.GLASS] = 12;
  try {
    const w = arena();
    for (let y = G; y >= G - 2; y--) w.setBlock(2, y, 2, B.AIR);
    w.setBlock(2, G, 2, B.STONE); // sealed
    for (let x = 3; x <= 12; x++) w.setBlock(x, G - 2, 2, B.AIR);
    assert.equal(L(w, 8, G - 2, 2), 0, 'dark before the lamp');
    w.setBlock(3, G - 2, 2, B.GLASS); // emitter (it is not opaque, so its own light spreads)
    assert.equal(L(w, 3, G - 2, 2), 12);
    assert.equal(L(w, 5, G - 2, 2), 10);
    assert.equal(L(w, 12, G - 2, 2), 3);
    w.setBlock(3, G - 2, 2, B.AIR);
    assert.equal(L(w, 5, G - 2, 2), 0, 'removing the lamp puts the dark back');
  } finally { EMIT[B.GLASS] = saved; }
}

// ---- incremental updates == full recalculation (random edits across chunk borders) ----
function snapshot(w) { return new Map([...w.chunks].map(([k, c]) => [k, Uint8Array.from(c.light)])); }
function sameLight(w, snap, label) {
  for (const [k, c] of w.chunks) {
    const a = snap.get(k);
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== c.light[i]) {
        const y = Math.floor(i / 256), z = Math.floor((i % 256) / 16), x = i % 16;
        assert.fail(`${label}: light differs in chunk ${c.cx},${c.cz} at local ${x},${y},${z}: incremental ${a[i].toString(16)} vs rebuilt ${c.light[i].toString(16)}`);
      }
    }
  }
}
for (const withEmitters of [false, true]) {
  const saved = EMIT[B.GLASS];
  if (withEmitters) EMIT[B.GLASS] = 11;
  try {
    const w = arena();
    // start with some caves and a canopy so there is structure to disturb
    let seed = 12345;
    const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
    const kinds = [B.AIR, B.AIR, B.AIR, B.STONE, B.STONE, B.LEAVES, B.WATER, B.GLASS, B.PLANKS];
    for (let round = 0; round < 12; round++) {
      for (let i = 0; i < 60; i++) {
        const x = Math.floor(rnd() * 44) - 14, z = Math.floor(rnd() * 44) - 14;
        const y = G - 6 + Math.floor(rnd() * 14);
        w.setBlock(x, y, z, kinds[Math.floor(rnd() * kinds.length)]);
      }
      const snap = snapshot(w);
      w.lighting.rebuildAll();
      sameLight(w, snap, `round ${round}${withEmitters ? ' (emitters)' : ''}`);
    }
  } finally { EMIT[B.GLASS] = saved; }
}

// ---- natural terrain: the surface is bright, caves are dark ----
{
  const w = new World(1337);
  for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) w.generateChunk(cx, cz);
  let surface = 0, surfaceLit = 0, buried = 0, buriedDark = 0;
  for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) {
    const c = w.getChunk(0, 0);
    let top = CH - 1;
    while (top > 0 && c.data[idx(x, top, z)] === B.AIR) top--; // highest block of any kind
    if (!OPAQUE[c.data[idx(x, top, z)]]) continue; // skip trees and water: they are shaded on purpose
    surface++; if (L(w, x, top + 1, z) >= MAX_LIGHT - 1) surfaceLit++;
    if (top > 12) { buried++; if (L(w, x, top - 8, z) <= 1) buriedDark++; }
  }
  assert.ok(surfaceLit > surface * 0.9, `terrain surface is lit (${surfaceLit}/${surface})`);
  assert.ok(buriedDark > buried * 0.7, `rock 8 blocks down is dark (${buriedDark}/${buried})`);
}

console.log('all lighting tests passed');
