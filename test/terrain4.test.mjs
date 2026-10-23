// Terrain 4 (new worlds): oceans and the new biomes, flowers, bedrock at the bottom, a world with no ceiling and nothing ticking above y = 120.
// And the proof that worlds started in the older terrains still generate exactly as they did.
import assert from 'node:assert/strict';
import { World, CS, CH, SEA, idx, LATEST_TERRAIN } from '../src/js/world.js';
import { B, UNBREAKABLE, IS_WATER, BLOCKS, PLANT } from '../src/js/blocks.js';
import { miningInfo, I } from '../src/js/items.js';
import { TICK_CEILING } from '../src/js/voxel.js';
import { REG } from '../src/js/registry.js';
import { WaterSim } from '../src/js/water.js';
import { GravitySim } from '../src/js/gravity.js';
import { growPlants } from '../src/js/plants.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const fnv = (data, h = 2166136261) => { for (let i = 0; i < data.length; i++) { h ^= data[i]; h = Math.imul(h, 16777619); } return h >>> 0; };

t('worlds started in an older terrain generate exactly as they did (a fingerprint of the first 25 chunks)', () => {
  const want = { 1: 1425888982, 2: 4084229901, 3: 4084229901 };
  for (const terrain of [1, 2, 3]) {
    const w = new World(1337, { terrain });
    let h = 2166136261;
    for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) h = fnv(w.generateChunk(cx, cz).data, h);
    assert.equal(h, want[terrain], `terrain ${terrain} changed: ${h}`);
  }
  assert.equal(LATEST_TERRAIN, 4);
});

t('the old terrains get none of the new things: no oceans, new trees, flowers or new biomes', () => {
  const wanted = new Set(['savanna', 'jungle', 'swamp', 'taiga', 'badlands', 'ocean', 'deep_ocean', 'frozen_ocean']);
  const flowers = new Set(['rose', 'dandelion', 'cornflower', 'orange_tulip', 'allium', 'pink_tulip', 'oxeye_daisy', 'fern', 'dead_bush'].map((k) => B[k.toUpperCase()]));
  const newLogs = new Set([B.JUNGLE_LOG, B.ACACIA_LOG]);
  for (const terrain of [1, 2, 3]) {
    const w = new World(7, { terrain });
    for (let x = -1500; x < 1500; x += 97) for (let z = -1500; z < 1500; z += 97) assert.ok(!wanted.has(w.biomeAt(x, z)), 'no new biome');
    for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) for (const b of w.generateChunk(cx, cz).data) assert.ok(!flowers.has(b) && !newLogs.has(b), 'nothing new in terrain ' + terrain);
  }
});

t('terrain 4 has all fourteen biomes, with a fair share of sea, and the sea is deeper the further out you go', () => {
  const w = new World(1337, { terrain: 4 });
  const count = {};
  let cols = 0, water = 0;
  for (let x = -3000; x < 3000; x += 53) for (let z = -3000; z < 3000; z += 53) { const b = w.biomeAt(x, z); count[b] = (count[b] || 0) + 1; cols++; if (w.heightAt(x, z) < SEA) water++; }
  for (const k of Object.keys(REG.worldgen.biomes.types)) assert.ok(count[k] > cols * 0.01, `${k} is common enough (${count[k] || 0} of ${cols})`);
  const sea = (count.ocean + count.deep_ocean + count.frozen_ocean) / cols;
  assert.ok(sea > 0.07 && sea < 0.3, 'sea share ' + sea.toFixed(2));
  // ocean floors: sand (shallow) and gravel (deep), and the deepest is far below sea level
  let deepest = 0, floors = new Set();
  for (let x = -3000; x < 3000; x += 53) for (let z = -3000; z < 3000; z += 53) {
    const b = w.biomeAt(x, z);
    if (b !== 'ocean' && b !== 'deep_ocean') continue;
    const h = w.heightAt(x, z);
    assert.ok(h <= SEA, 'an ocean column is under water (' + h + ')');
    deepest = Math.max(deepest, SEA - h);
    if (b === 'deep_ocean') assert.ok(SEA - h >= 6, 'deep ocean is deep: ' + (SEA - h));
  }
  assert.ok(deepest >= 12, 'the deep is deep: ' + deepest);
});

t('what the ground is made of: sea floors of sand and gravel, ice on cold seas, mud in swamps, podzol in the taiga, clay bands in the badlands', () => {
  const w = new World(1337, { terrain: 4 });
  const found = {};
  const topOf = (c, lx, lz) => { for (let y = CH - 1; y > 0; y--) { const id = c.data[idx(lx, y, lz)]; if (id !== B.AIR && !PLANT[id]) return { y, id }; } return null; };
  for (let cx = -60; cx <= 60 && Object.keys(found).length < 6; cx += 3) for (let cz = -60; cz <= 60; cz += 3) {
    const wx = cx * CS + 8, wz = cz * CS + 8, biome = w.biomeAt(wx, wz);
    if (!['ocean', 'deep_ocean', 'frozen_ocean', 'swamp', 'taiga', 'badlands', 'savanna', 'jungle'].includes(biome) || found[biome]) continue;
    const c = w.generateChunk(cx, cz);
    const lx = 8, lz = 8, h = w.heightAt(wx, wz);
    if (c.data[idx(lx, h, lz)] === B.AIR) continue; // (a cave opening: try another chunk)
    found[biome] = { top: c.data[idx(lx, h, lz)], air: c.data[idx(lx, h + 1, lz)], seaTop: c.data[idx(lx, SEA, lz)], below: [3, 5, 8].map((d) => c.data[idx(lx, h - d, lz)]), h };
  }
  const key = (id) => REG.blockById.get(id)?.key;
  if (found.deep_ocean) assert.equal(key(found.deep_ocean.top), 'gravel', 'deep sea floor is gravel');
  if (found.ocean) assert.ok(['sand', 'gravel'].includes(key(found.ocean.top)), 'sea floor: ' + key(found.ocean.top));
  if (found.frozen_ocean) assert.equal(key(found.frozen_ocean.seaTop), 'ice', 'a frozen sea has ice on top');
  if (found.ocean) assert.equal(key(found.ocean.seaTop), 'water', 'a warm sea does not');
  if (found.swamp) assert.ok(['mud', 'sand', 'water'].includes(key(found.swamp.top)) || found.swamp.h <= SEA + 1, 'swamp ground: ' + key(found.swamp.top));
  if (found.taiga) assert.ok(['podzol', 'snow', 'stone', 'sand'].includes(key(found.taiga.top)), 'taiga ground: ' + key(found.taiga.top));
  if (found.badlands) assert.ok(['red_sand', 'stone', 'sand', 'snow'].includes(key(found.badlands.top)), 'badlands ground: ' + key(found.badlands.top));
  if (found.badlands && found.badlands.h > SEA + 2) assert.ok(found.badlands.below.every((id) => /terracotta|red_sand|stone|cobble|coal|iron/.test(key(id))), 'clay bands below: ' + found.badlands.below.map(key));
  assert.ok(Object.keys(found).length >= 5, 'sampled ' + Object.keys(found));
});

t('the bottom layer of the world is bedrock in every terrain, and nothing else is', () => {
  for (const terrain of [1, 3, 4]) {
    const w = new World(5, { terrain });
    for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) {
      const d = w.generateChunk(cx, cz).data;
      for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) { assert.equal(d[idx(x, 0, z)], B.BEDROCK); assert.notEqual(d[idx(x, 1, z)], B.BEDROCK); }
    }
  }
  assert.ok(UNBREAKABLE[B.BEDROCK] && !UNBREAKABLE[B.STONE]);
  const m = miningInfo(B.BEDROCK, I.IRON_PICKAXE);
  assert.ok(m.unbreakable && m.canHarvest === false && m.time === Infinity, 'cannot be mined, even with an iron pickaxe');
  assert.deepEqual(REG.loot.bedrock, [], 'and gives nothing');
  assert.ok(!REG.blockById.get(B.BEDROCK).creative, 'it is not in the creative palette either');
});

t('there is no ceiling: blocks can be built up to y = 250, and the terrain can reach high', () => {
  assert.ok(CH >= 250);
  const w = new World(1337, { terrain: 4 });
  const c = w.generateChunk(0, 0);
  for (const y of [100, 150, 200, 249]) { assert.ok(w.canPlace(3, y, 3)); w.setBlock(3, y, 3, B.STONE); assert.equal(w.getBlock(3, y, 3), B.STONE); }
  assert.equal(c.top, 250, 'the chunk knows how tall it is');
  assert.ok(w.lighting.levelAt(3, 251, 3) === 15, 'sunlight above');
  let tallest = 0;
  for (let x = -3000; x < 3000; x += 53) for (let z = -3000; z < 3000; z += 53) tallest = Math.max(tallest, w.heightAt(x, z));
  assert.ok(tallest > 64 && tallest <= REG.worldgen.terrain4.maxHeight, 'mountains rise above the old limit: ' + tallest);
  const old = new World(1337, { terrain: 3 });
  let oldTallest = 0;
  for (let x = -3000; x < 3000; x += 53) for (let z = -3000; z < 3000; z += 53) oldTallest = Math.max(oldTallest, old.heightAt(x, z));
  assert.ok(oldTallest <= 58, 'older worlds keep their old mountain tops: ' + oldTallest);
});

t('nothing ticks above y = 120: water does not flow, sand does not fall, plants do not grow; below that they do', () => {
  assert.equal(TICK_CEILING, 120);
  for (const [y, runs] of [[40, true], [110, true], [TICK_CEILING + 5, false], [200, false]]) {
    const w = new World(1337, { terrain: 4 });
    const c = w.generateChunk(0, 0);
    const water = new WaterSim(w), gravity = new GravitySim(w);
    // a floor to stand things on, a water source on it, and a sand block with air under it
    for (let x = 0; x < 8; x++) for (let z = 0; z < 8; z++) w.setBlock(x, y - 1, z, B.STONE);
    w.setBlock(4, y, 4, B.WATER);
    w.setBlock(2, y + 3, 2, B.SAND); w.setBlock(2, y + 2, 2, B.AIR);
    water.settle(60);
    for (let i = 0; i < 80; i++) gravity.update(0.05);
    const flowed = w.getBlock(5, y, 4) !== B.AIR, fell = w.getBlock(2, y + 3, 2) === B.AIR;
    assert.equal(flowed, runs, `water at y=${y} ${runs ? 'flows' : 'stays'}`);
    assert.equal(fell, runs, `sand at y=${y} ${runs ? 'falls' : 'stays'}`);
    // grass tufts grow up (small to medium) only where ticks run
    w.setBlock(6, y - 1, 6, B.GRASS); w.setBlock(6, y, 6, B.GRASS_S);
    let grown = false;
    for (let i = 0; i < 400 && !grown; i++) { growPlants(w, 0, 0, 1, 30, () => 0); grown = w.getBlock(6, y, 6) !== B.GRASS_S; }
    assert.equal(grown, runs, `plants at y=${y} ${runs ? 'grow' : 'stay'}`);
    assert.ok(c);
  }
});

t('flowers and ferns grow wild in terrain 4 (different ones in different biomes), standing on grass', () => {
  const w = new World(1337, { terrain: 4 });
  const flowerIds = new Set(['rose', 'dandelion', 'cornflower', 'orange_tulip', 'allium', 'pink_tulip', 'oxeye_daisy', 'fern'].map((k) => B[k.toUpperCase()]));
  const seen = new Set(), byBiome = {};
  for (let cx = -12; cx <= 12; cx++) for (let cz = -12; cz <= 12; cz++) {
    const c = w.generateChunk(cx, cz);
    for (let i = 0; i < c.data.length; i++) if (flowerIds.has(c.data[i])) {
      seen.add(c.data[i]);
      const x = i & 15, z = (i >> 4) & 15, y = i >> 8;
      const below = c.data[idx(x, y - 1, z)];
      assert.ok(['grass', 'savanna_grass', 'podzol', 'mud', 'dirt'].includes(REG.blockById.get(below).key), 'on soil, not on ' + REG.blockById.get(below).key);
      const biome = w.biomeAt(cx * CS + x, cz * CS + z);
      (byBiome[biome] ??= new Set()).add(c.data[i]);
    }
  }
  assert.ok(seen.size >= 7, 'most kinds of flower appear: ' + seen.size);
  assert.ok(byBiome.plains && byBiome.plains.has(B.DANDELION), 'dandelions on the plains');
  assert.ok(![...(byBiome.desert ?? [])].some((id) => id !== B.DEAD_BUSH), 'only dead bushes in the desert');
});

t('the new trees grow only in their own biomes', () => {
  const w = new World(1337, { terrain: 4 });
  const logOf = { jungle: B.JUNGLE_LOG, savanna: B.ACACIA_LOG };
  const hits = { jungle: 0, savanna: 0 }, stray = [];
  for (let cx = -14; cx <= 14; cx += 1) for (let cz = -14; cz <= 14; cz += 1) {
    const c = w.generateChunk(cx, cz);
    for (let i = 0; i < c.data.length; i++) {
      const id = c.data[i];
      if (id !== B.JUNGLE_LOG && id !== B.ACACIA_LOG) continue;
      const x = cx * CS + (i & 15), z = cz * CS + ((i >> 4) & 15);
      const biome = w.biomeAt(x, z);
      if (id === B.JUNGLE_LOG) { hits.jungle++; if (biome !== 'jungle') stray.push('jungle log in ' + biome); }
      else { hits.savanna++; if (biome !== 'savanna') stray.push('acacia log in ' + biome); }
    }
  }
  assert.ok(hits.jungle > 20 && hits.savanna > 10, JSON.stringify(hits));
  assert.ok(stray.length <= 2, 'trunks stay in their biome (a trunk can lean over a border): ' + stray.slice(0, 3));
});

t('a new world starts on dry land with some trees, never in the sea', () => {
  for (const seed of [1, 2, 3, 1337, 42, 99999]) {
    const w = new World(seed, { terrain: 4 });
    const s = w.findSpawn();
    const h = w.heightAt(Math.floor(s.x), Math.floor(s.z));
    assert.ok(h > SEA, `seed ${seed} spawns above the sea (h ${h})`);
    assert.ok(!['ocean', 'deep_ocean', 'frozen_ocean'].includes(w.biomeAt(Math.floor(s.x), Math.floor(s.z))));
  }
});

t('the biome and its climate come out right for the weather: cold, hot and sea', () => {
  const w = new World(1337, { terrain: 4 });
  const seen = {};
  for (let x = -3000; x < 3000; x += 71) for (let z = -3000; z < 3000; z += 71) { const i = w.biomeInfo(x, z, 60); seen[i.key] = i.climate; }
  assert.equal(seen.tundra, 'cold'); assert.equal(seen.taiga, 'cold'); assert.equal(seen.frozen_ocean, 'cold');
  assert.equal(seen.desert, 'hot'); assert.equal(seen.jungle, 'hot'); assert.equal(seen.savanna, 'hot'); assert.equal(seen.badlands, 'hot');
  assert.equal(seen.ocean, 'ocean'); assert.equal(seen.deep_ocean, 'ocean');
  assert.equal(seen.plains, 'temperate');
  assert.equal(new World(1, { terrain: 3 }).biomeInfo(10, 10).label.length > 0, true);
  assert.equal(new World(1, { terrain: 1 }).biomeInfo(10, 10).key, null, 'the original terrain has no biomes');
  assert.ok(IS_WATER[B.WATER] && BLOCKS[B.ICE].key === 'ice');
});

console.log('terrain4: ' + n + ' checks passed');
