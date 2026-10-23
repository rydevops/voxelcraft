// Run with: npm test
import assert from 'node:assert/strict';
import { World, CS, CH, SEA, idx } from '../src/js/world.js';
import { meshChunk } from '../src/js/mesher.js';
import { B } from '../src/js/blocks.js';

const world = new World(1337);

// Terrain is deterministic for a seed
const a = new World(1337).heightAt(123, -456);
assert.equal(a, new World(1337).heightAt(123, -456));
assert.notEqual(a, new World(99).heightAt(123, -456) + 1000);

// Height / biome distribution
let water = 0, snow = 0, cols = 0, min = 99, max = 0;
for (let x = -400; x < 400; x += 5) {
  for (let z = -400; z < 400; z += 5) {
    const h = world.heightAt(x, z);
    cols++; min = Math.min(min, h); max = Math.max(max, h);
    if (h <= SEA) water++;
    if (h >= 44) snow++;
  }
}
console.log(`height range ${min}-${max}, water ${(100 * water / cols).toFixed(0)}%, snow ${(100 * snow / cols).toFixed(1)}%`);
assert.ok(water / cols > 0.05 && water / cols < 0.6, 'some, but not all, ocean');
assert.ok(max < CH, 'terrain fits the world');

// Generate a 5x5 block of chunks, mesh the middle one
let t0 = performance.now();
for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) world.generateChunk(cx, cz);
console.log(`generated 25 chunks in ${(performance.now() - t0).toFixed(0)}ms`);

let carved = 0, total = 0, logs = 0, leaves = 0;
for (const c of world.chunks.values()) {
  for (let i = 0; i < c.data.length; i++) {
    const y = Math.floor(i / (CS * CS));
    if (y > 3 && y < 15) { total++; if (c.data[i] === B.AIR) carved++; }
    if (c.data[i] === B.LOG) logs++;
    if (c.data[i] === B.LEAVES) leaves++;
  }
}
console.log(`cave air below y=15: ${(100 * carved / total).toFixed(1)}%, logs ${logs}, leaves ${leaves}`);
assert.ok(carved / total > 0.002 && carved / total < 0.25, 'caves exist but do not hollow the world');
{ // caves can be found from outside: some columns have a hole through the surface, and there are wide chambers
  let holes = 0, chamber = 0;
  for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) {
    const c = world.generateChunk(cx, cz);
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) {
      const h = world.heightAt(cx * CS + x, cz * CS + z);
      if (h > SEA + 1 && c.data[idx(x, h, z)] === B.AIR) holes++;
    }
    for (let y = 6; y < 30; y++) for (let z = 1; z < CS - 3; z += 2) for (let x = 1; x < CS - 3; x += 2) {
      let open = true;
      for (let dz = 0; dz < 3 && open; dz++) for (let dx = 0; dx < 3 && open; dx++) for (let dy = 0; dy < 2; dy++) if (c.data[idx(x + dx, y + dy, z + dz)] !== B.AIR) { open = false; break; }
      if (open) chamber++;
    }
  }
  console.log(`cave entrances in 7x7 chunks: ${holes}, 3x3x2 chambers: ${chamber}`);
  assert.ok(holes >= 20, 'there are caves that open onto the surface');
  assert.ok(chamber >= 5, 'there are wide caverns, not just thin tunnels');
}

t0 = performance.now();
const mesh = meshChunk(world, world.getChunk(0, 0));
console.log(`meshed a chunk in ${(performance.now() - t0).toFixed(1)}ms: ${mesh.solid.positions.length / 12} quads solid, ${mesh.water ? mesh.water.positions.length / 12 : 0} water`);
assert.ok(mesh.solid.indices.length % 6 === 0);
assert.ok(Math.max(...mesh.solid.indices) < mesh.solid.positions.length / 3);

// Edits: placing a block records it, regenerating the chunk restores it
const h = world.heightAt(3, 3);
world.setBlock(3, h + 1, 3, B.BRICK);
assert.equal(world.getBlock(3, h + 1, 3), B.BRICK);
const saved = world.serializeEdits();
const w2 = new World(1337);
w2.loadEdits(JSON.parse(JSON.stringify(saved)));
w2.generateChunk(0, 0);
assert.equal(w2.getBlock(3, h + 1, 3), B.BRICK);

// Border edit marks the neighbour dirty
world.getChunk(-1, 0).dirty = false;
world.setBlock(0, h + 2, 3, B.STONE);
assert.ok(world.getChunk(-1, 0).dirty, 'neighbour chunk needs remesh');

// Chunk-border consistency: block read through two chunks agrees with raw data
const c0 = world.getChunk(1, 1);
assert.equal(world.getBlock(CS + 4, 10, CS + 5), c0.data[idx(4, 10, 5)]);

// ---- worlds saved before the new caves keep their old ground where they were built on ----
{
  const holesIn = (w) => {
    let holes = 0;
    for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) {
      const c = w.generateChunk(cx, cz);
      for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) {
        const h = w.heightAt(cx * CS + x, cz * CS + z);
        if (h > SEA + 1 && c.data[idx(x, h, z)] === B.AIR) holes++;
      }
    }
    return holes;
  };
  const edits = {};
  for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) edits[cx + ',' + cz] = { 5: B.STONE };
  const old = new World(1337);
  old.loadEdits(edits); // an old save: no legacy list recorded, so every edited chunk is legacy
  assert.equal(holesIn(old), 0, 'chunks with old edits get no new surface openings');
  assert.equal(old.serializeLegacy().length, 49, 'and they are remembered, so the next save keeps it that way');
  const again = new World(1337);
  again.loadEdits(old.serializeEdits(), old.serializeLegacy());
  assert.equal(holesIn(again), 0, 'still legacy after a save and reload');
  assert.ok(holesIn(new World(1337)) >= 20, 'while untouched ground has the new caves');
  const mixed = new World(1337);
  mixed.loadEdits({ '0,0': { 5: B.STONE } }, []); // a save that records none as legacy
  assert.ok(holesIn(mixed) > 0);
  assert.equal(new World(1337).serializeLegacy().length, 0);
}

// ---- biomes: flat plains, forests, hills, mountains, deserts and tundra ----
{
  const w = new World(1337);
  const seen = {}, rough = {}, tops = {};
  for (const seed of [1337, 42]) {
    const bw = new World(seed);
    for (let x = -1500; x < 1500; x += 12) for (let z = -1500; z < 1500; z += 12) {
      const b = bw.biomeAt(x, z), h = bw.heightAt(x, z), hx = bw.heightAt(x + 4, z), hz = bw.heightAt(x, z + 4);
      seen[b] = (seen[b] || 0) + 1;
      if (h > SEA + 1 && hx > SEA + 1 && hz > SEA + 1) { const r = (rough[b] ??= { sum: 0, n: 0 }); r.sum += Math.abs(h - hx) + Math.abs(h - hz); r.n++; }
      (tops[b] ??= []).push(h);
    }
  }
  const total = Object.values(seen).reduce((a, b) => a + b, 0);
  for (const b of ['plains', 'forest', 'hills', 'mountains', 'desert', 'tundra']) assert.ok(seen[b] / total > 0.04, `${b} covers a fair share of the world (${((seen[b] || 0) / total * 100).toFixed(1)}%)`);
  const r = (b) => rough[b].sum / rough[b].n;
  console.log('dry roughness: plains ' + r('plains').toFixed(2) + ', forest ' + r('forest').toFixed(2) + ', hills ' + r('hills').toFixed(2) + ', mountains ' + r('mountains').toFixed(2));
  assert.ok(r('plains') < 0.7 && r('forest') < 0.7, 'plains and forests are flat');
  assert.ok(r('hills') > 2 * r('plains'), 'hills roll much more than plains');
  assert.ok(r('mountains') > r('hills'), 'mountains are the roughest');
  const mean = (b) => tops[b].reduce((a, c) => a + c, 0) / tops[b].length;
  assert.ok(mean('mountains') > mean('plains') + 12, 'mountains stand well above the plains');
  assert.ok(tops.mountains.reduce((a, c) => Math.max(a, c), 0) >= 44, 'mountains reach the snow line');
  assert.ok(Object.values(tops).every((t) => t.reduce((a, c) => Math.max(a, c), 0) < CH), 'terrain fits the world');

  // what each biome is made of: deserts are sand, tundra is snow, high mountains are bare rock, and no trees grow in a desert
  const find = (kind) => { for (let x = -1500; x < 1500; x += 8) for (let z = -1500; z < 1500; z += 8) { const h = w.heightAt(x, z); if (w.biomeAt(x, z) === kind && h > SEA + 2 && h < 44) return { x, z, h }; } return null; };
  const des = find('desert'), tun = find('tundra');
  assert.ok(des && tun, 'found a desert and a tundra');
  w.generateChunk(des.x >> 4, des.z >> 4); w.generateChunk(tun.x >> 4, tun.z >> 4);
  assert.equal(w.getBlock(des.x, des.h, des.z), B.SAND, 'a desert is sand');
  assert.equal(w.getBlock(des.x, des.h - 3, des.z), B.SAND, 'and sand underneath');
  assert.equal(w.getBlock(tun.x, tun.h, tun.z), B.SNOW, 'tundra is covered in snow');
  let desertTrees = 0, forestTrees = 0, plainsTrees = 0;
  for (let x = -1500; x < 1500; x += 2) for (let z = -300; z < 300; z += 2) {
    const k = w.biomeAt(x, z);
    if (k === 'desert' && w.hasTree(x, z)) desertTrees++;
    else if (k === 'forest' && w.hasTree(x, z)) forestTrees++;
    else if (k === 'plains' && w.hasTree(x, z)) plainsTrees++;
  }
  assert.equal(desertTrees, 0, 'no trees in a desert');
  assert.ok(forestTrees > plainsTrees * 2, `forests are much denser than plains (${forestTrees} vs ${plainsTrees})`);
}

// worlds that were played before the biomes keep the original terrain exactly
{
  const classic = new World(1337, { terrain: 1 }), modern = new World(1337);
  assert.equal(classic.terrain, 1); assert.equal(modern.terrain, 3);
  assert.equal(classic.biomeAt(10, 10), null);
  let differ = 0;
  for (let x = -300; x < 300; x += 15) for (let z = -300; z < 300; z += 15) if (classic.heightAt(x, z) !== modern.heightAt(x, z)) differ++;
  assert.ok(differ > 50, 'the two terrains are different');
  assert.equal(classic.heightAt(123, -456), new World(1337, { terrain: 1 }).heightAt(123, -456), 'and the original one is stable');
  // the exact heights the original terrain gave before the biomes existed (guards against editing it by accident)
  const c1 = new World(1337, { terrain: 1 });
  assert.deepEqual([[0, 0], [123, -456], [300, 200], [-250, 90]].map(([x, z]) => c1.heightAt(x, z)), [20, 27, 23, 30]);
}

console.log('all world tests passed');
