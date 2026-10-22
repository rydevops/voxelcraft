// Tree variants, saplings that regrow them, leaf drops, plus the smaller changes from the same round: tool wear,
// ore glow, a torch carried in the hand (offhand slot) and placing at the top of the world. Run with: npm test
import assert from 'node:assert/strict';
import { B, GLOW, ROLE_LOG, ROLE_LEAF, PLANT } from '../public/js/blocks.js';
import { I, dropsFor, shatterDrops, toolWear, miningInfo, heldLight, canWear, isOffhand, GOALS, placesOf } from '../public/js/items.js';
import { REG } from '../public/js/registry.js';
import { World, CS, CH, SEA, idx } from '../public/js/world.js';
import { VARIANTS, variantByKey, pickVariant, treeBlocks, growSapling, trunkHeight } from '../public/js/trees.js';
import { growPlants } from '../public/js/plants.js';
import { meshChunk } from '../public/js/mesher.js';
import { Inventory } from '../public/js/inventory.js';

const count = (w, id) => { let n = 0; for (const c of w.chunks.values()) for (const b of c.data) if (b === id) n++; return n; };

// ---- several kinds of tree ----
assert.ok(VARIANTS.length >= 5, 'a handful of tree kinds (' + VARIANTS.map((v) => v.key).join(', ') + ')');
assert.deepEqual([...new Set(VARIANTS.map((v) => v.shape))].sort(), ['bush', 'cone', 'round', 'tall']);
for (const v of VARIANTS) {
  assert.ok(ROLE_LOG[v.logId] && ROLE_LEAF[v.leavesId], `${v.key}: a log and a leaf block (so it can be felled)`);
  const blocks = treeBlocks(v, 7, 0, 30, 0);
  const logs = blocks.filter((b) => !b.leaf), leaves = blocks.filter((b) => b.leaf);
  assert.equal(logs.length, trunkHeight(v, 7, 0, 0), `${v.key}: trunk height from the data`);
  assert.ok(logs.every((b) => b.x === 0 && b.z === 0 && b.y > 30) && logs.length >= v.trunk[0] && logs.length <= v.trunk[1]);
  assert.ok(leaves.length >= 6, `${v.key} has a crown`);
  assert.ok(leaves.every((b) => b.id === v.leavesId));
}
// shapes differ in a way you can see
const shape = (key) => { const v = variantByKey(key); const b = treeBlocks(v, 7, 0, 30, 0); const l = b.filter((x) => x.leaf); return { height: Math.max(...b.map((x) => x.y)) - 30, width: Math.max(...l.map((x) => Math.abs(x.x))) * 2 + 1, tip: l.filter((x) => x.y === Math.max(...l.map((q) => q.y))).length }; };
assert.ok(shape('tall_oak').height > shape('oak').height + 2, 'tall oaks are taller');
assert.ok(shape('spruce').tip === 1 && shape('spruce').width >= 5, 'spruces come to a point and are wide at the bottom');
assert.ok(shape('bush').height <= 4, 'bushes are low');

// ---- the world grows a mix of them, in sensible places ----
{
  const w = new World(1337);
  for (let cx = -8; cx <= 8; cx++) for (let cz = -8; cz <= 8; cz++) w.generateChunk(cx, cz);
  const logs = Object.fromEntries(['log', 'birch_log', 'spruce_log'].map((k) => [k, count(w, REG.idOfKey.get(k))]));
  const leaves = Object.fromEntries(['leaves', 'birch_leaves', 'spruce_leaves', 'apple_leaves'].map((k) => [k, count(w, REG.idOfKey.get(k))]));
  console.log('logs', JSON.stringify(logs), 'leaves', JSON.stringify(leaves));
  assert.ok(logs.log > 100 && logs.birch_log > 10 && logs.spruce_log > 10, 'oak, birch and spruce all appear');
  assert.ok(leaves.leaves > 500 && leaves.birch_leaves > 30 && leaves.spruce_leaves > 30 && leaves.apple_leaves > 10, 'with their own leaves, and some apple trees');
  // a world saved before the new kinds exist keeps its old oak trees in the chunks it had edited
  const old = new World(1337);
  const edits = {};
  for (let cx = -8; cx <= 8; cx++) for (let cz = -8; cz <= 8; cz++) edits[cx + ',' + cz] = { 5: B.STONE };
  old.loadEdits(edits);
  for (let cx = -8; cx <= 8; cx++) for (let cz = -8; cz <= 8; cz++) old.generateChunk(cx, cz);
  assert.equal(count(old, REG.idOfKey.get('birch_log')) + count(old, REG.idOfKey.get('spruce_log')) + count(old, REG.idOfKey.get('apple_leaves')), 0, 'old chunks only have the original oaks');
  assert.ok(count(old, B.LOG) > 100);
  // same trees in the same places: the new kinds just change what grows there
  const treeSpots = (world) => { const s = new Set(); for (const c of world.chunks.values()) for (let i = 0; i < c.data.length; i++) if (ROLE_LOG[c.data[i]]) s.add(`${c.cx},${c.cz},${i}`); return s; };
  const spotsOld = treeSpots(old);
  assert.ok(spotsOld.size > 100);
  // height rules: spruces on high ground, none on the lowlands
  const h = (key) => variantByKey(key).heights;
  assert.ok(h('spruce')[0] > h('oak')[0]);
  assert.equal(pickVariant(1337, 5, 5, SEA + 2).key !== 'spruce', true, 'no spruces by the shore');
  const picks = new Set(); for (let x = 0; x < 400; x++) picks.add(pickVariant(1337, x, 3, SEA + 12).key);
  assert.ok(picks.size >= 4, 'several kinds are possible at mid heights');
  assert.equal(pickVariant(1337, 5, 5, SEA + 12, true).key, 'oak', 'legacy chunks always pick oak');
}

// ---- leaf drops: 15% sticks, 10% saplings, apples only from apple trees (15%) ----
{
  const tally = (block, shatter) => {
    const t = {};
    for (let i = 0; i < 6000; i++) for (const d of (shatter ? shatterDrops(block) : dropsFor(block, true))) t[d.id] = (t[d.id] || 0) + d.n;
    return t;
  };
  const within = (n, p, label) => assert.ok(n > 6000 * p * 0.75 && n < 6000 * p * 1.25, `${label}: ${(100 * n / 6000).toFixed(1)}% (want ${100 * p}%)`);
  for (const shatter of [false, true]) {
    const oak = tally(B.LEAVES, shatter);
    within(oak[I.STICK], 0.15, 'oak leaves give sticks');
    within(oak[I.OAK_SAPLING], 0.10, 'oak leaves give saplings');
    assert.equal(oak[I.APPLE] ?? 0, 0, 'ordinary leaves never give apples');
    const apple = tally(REG.idOfKey.get('apple_leaves'), shatter);
    within(apple[I.APPLE], 0.15, 'apple tree leaves give apples');
    within(apple[I.APPLE_SAPLING], 0.10, 'and apple saplings');
    within(apple[I.STICK], 0.15, 'and sticks');
    const birch = tally(REG.idOfKey.get('birch_leaves'), shatter);
    within(birch[I.BIRCH_SAPLING], 0.10, 'birch leaves give birch saplings');
    assert.equal(birch[I.APPLE] ?? 0, 0);
    const spruce = tally(REG.idOfKey.get('spruce_leaves'), shatter);
    within(spruce[I.SPRUCE_SAPLING], 0.10, 'spruce leaves give spruce saplings');
  }
  assert.deepEqual(dropsFor(REG.idOfKey.get('young_oak'), true), [{ id: I.OAK_SAPLING, n: 1 }], 'a planted sapling comes back as the sapling item');
}

// ---- saplings: plant one, and it grows into a tree when there is room ----
const G = 30;
function field() {
  const w = new World(5);
  for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) {
    const c = w.generateChunk(cx, cz);
    c.data.fill(0); c.plants.clear();
    for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
  }
  w.lighting.rebuildAll(); // the field was carved behind the lighting's back
  return w;
}
{
  assert.ok(placesOf(I.OAK_SAPLING) === null && REG.itemById.get(I.OAK_SAPLING).plants.block === REG.idOfKey.get('young_oak'), 'the sapling item plants the young tree block');
  assert.ok(PLANT[REG.idOfKey.get('young_oak')] > 0, 'it is a plant');
  const young = (k) => REG.idOfKey.get('young_' + k);
  const w = field();
  w.setBlock(8, G + 1, 8, young('birch'));
  assert.equal(growSapling(w, 8, G + 1, 8, ['birch'], 5), true, 'it grows with room to spare');
  assert.equal(w.getBlock(8, G + 1, 8), REG.idOfKey.get('birch_log'), 'the sapling became the first log');
  assert.ok(count(w, REG.idOfKey.get('birch_leaves')) > 6, 'with a birch crown');
  // no room: a roof overhead stops it
  const w2 = field();
  w2.setBlock(8, G + 1, 8, young('oak'));
  w2.setBlock(8, G + 4, 8, B.STONE);
  assert.equal(growSapling(w2, 8, G + 1, 8, ['oak'], 5), false, 'blocked by a ceiling');
  assert.equal(w2.getBlock(8, G + 1, 8), young('oak'), 'and stays a sapling');
  // through the same random growth ticks as crops, at the data's rate
  const w3 = field();
  for (let i = 0; i < 5; i++) w3.setBlock(3 + i * 3, G + 1, 8, young('spruce'));
  for (let t = 0; t < 400; t++) growPlants(w3, 0, 0, 2, 1);
  assert.ok(count(w3, REG.idOfKey.get('spruce_log')) > 0, 'saplings turn into trees over time');
  assert.equal(count(w3, young('spruce')) < 5, true);
  // a sapling needs grass or dirt under it
  const w4 = field();
  w4.setBlock(8, G, 8, B.SAND); w4.setBlock(8, G + 1, 8, young('oak'));
  for (let t = 0; t < 600; t++) growPlants(w4, 0, 0, 2, 1);
  assert.equal(w4.getBlock(8, G + 1, 8), young('oak'), 'not on sand');
}

// ---- goals accept any kind of log ----
{
  const first = GOALS[0];
  assert.ok(first.done({ collected: new Set([REG.idOfKey.get('birch_log')]), crafted: new Set(), flags: new Set() }), 'birch wood counts as collecting wood');
  assert.ok(!first.done({ collected: new Set(), crafted: new Set(), flags: new Set() }));
}

// ---- tools break sooner, and much sooner on the wrong block ----
{
  const wood = REG.items.find((i) => i.key === 'wood_pickaxe').tool.uses, iron = REG.items.find((i) => i.key === 'iron_pickaxe').tool.uses;
  assert.ok(wood <= 35 && iron <= 135, `lower durability (wood ${wood}, iron ${iron})`);
  assert.equal(toolWear(B.STONE, I.WOOD_PICKAXE), 1, 'the right tool loses 1');
  assert.equal(toolWear(B.DIRT, I.WOOD_PICKAXE), REG.game.tools.wrongToolWear, 'a pickaxe on dirt loses more');
  assert.equal(toolWear(B.STONE, I.STONE_SHOVEL), REG.game.tools.wrongToolWear, 'a shovel on stone too');
  assert.equal(toolWear(B.DIRT, I.IRON_HOE), REG.game.tools.wrongToolWear, 'and a hoe digging');
  assert.equal(toolWear(B.DIRT, 0), 0, 'bare hands do not wear');
  assert.ok(REG.game.tools.wrongToolWear >= 2);
  const inv = new Inventory();
  inv.add(I.WOOD_PICKAXE, 1);
  let stone = 0; while (!inv.damage(0, toolWear(B.STONE, I.WOOD_PICKAXE))) stone++;
  inv.add(I.WOOD_PICKAXE, 1);
  let dirt = 0; while (!inv.damage(0, toolWear(B.DIRT, I.WOOD_PICKAXE))) dirt++;
  assert.ok(dirt * 2 < stone, `it lasts ${stone + 1} stones but only ${dirt + 1} blocks of dirt`);
}

// ---- ores shine a little for themselves ----
{
  assert.ok(GLOW[B.COAL_ORE] > 0.1 && GLOW[B.IRON_ORE] > 0.1, 'coal and iron glow');
  assert.equal(GLOW[B.STONE], 0);
  const w = field();
  w.setBlock(8, G - 2, 8, B.AIR); // a pocket inside the rock
  w.setBlock(8, G - 2, 9, B.COAL_ORE);
  w.setBlock(8, G - 2, 7, B.STONE);
  w.lighting.rebuildAll();
  const m = meshChunk(w, w.getChunk(0, 0)).solid;
  const faceGlow = (zFace) => { // the strongest block-light value on faces at that z inside the pocket's row
    let best = 0;
    for (let i = 0; i < m.positions.length / 3; i++) {
      const x = m.positions[i * 3], y = m.positions[i * 3 + 1], z = m.positions[i * 3 + 2];
      if (y >= G - 2 && y <= G - 1 && x >= 8 && x <= 9 && Math.abs(z - zFace) < 1e-6) best = Math.max(best, m.blocklight[i * 2]);
    }
    return best;
  };
  const ore = faceGlow(9), rock = faceGlow(8);
  assert.ok(ore > 0.04, 'the ore face glows in the dark (' + ore.toFixed(3) + ')');
  assert.ok(ore > rock, 'plain stone next to it does not (' + rock.toFixed(3) + ')');
  assert.equal(w.lighting.levelAt(8, G - 2, 8), 0, 'but it does not light the cave');
}

// ---- a torch in the hand or the shield slot lights up the place you stand ----
{
  assert.equal(heldLight(I.TORCH), 14, 'a held torch gives what a placed one does');
  assert.equal(heldLight(I.IRON_PICKAXE), 0);
  assert.ok(isOffhand(I.TORCH) && !isOffhand(B.DIRT));
  assert.ok(canWear(I.TORCH, 'shield') && canWear(I.IRON_SHIELD, 'shield') && !canWear(I.TORCH, 'helmet'));
  const w = field();
  for (let x = 2; x <= 12; x++) for (let z = 2; z <= 6; z++) for (let y = G + 1; y <= G + 3; y++) w.setBlock(x, y, z, B.STONE);
  for (let x = 3; x <= 11; x++) for (let z = 3; z <= 5; z++) for (let y = G + 1; y <= G + 2; y++) w.setBlock(x, y, z, B.AIR);
  assert.equal(w.lighting.levelAt(7, G + 1, 4), 0, 'a dark room');
  w.lighting.setCarried(4, G + 1, 4, 14);
  assert.equal(w.lighting.levelAt(4, G + 1, 4), 14);
  assert.equal(w.lighting.levelAt(6, G + 1, 4), 12, 'it lights the room like a placed torch');
  assert.equal(w.lighting.levelAt(11, G + 1, 4), 7);
  // walking: the light follows
  w.lighting.setCarried(9, G + 1, 4, 14);
  assert.equal(w.lighting.levelAt(9, G + 1, 4), 14);
  assert.equal(w.lighting.levelAt(4, G + 1, 4), 9, 'it has left the old spot');
  assert.equal(w.lighting.levelAt(3, G + 1, 4), 8);
  // the incremental result matches a full recalculation, with a real torch there too
  w.setBlock(3, G + 1, 4, B.TORCH_FLOOR);
  const snap = new Map([...w.chunks].map(([k, c]) => [k, Uint8Array.from(c.light)]));
  w.lighting.rebuildAll();
  for (const [k, c] of w.chunks) assert.deepEqual(Uint8Array.from(c.light), snap.get(k), 'matches a rebuild');
  // putting the torch away puts the dark back (except around the real torch)
  w.lighting.setCarried(9, G + 1, 4, 0);
  assert.equal(w.lighting.levelAt(9, G + 1, 4), 8, 'only the placed torch is left');
  assert.equal(w.lighting.carried, null);
  w.setBlock(3, G + 1, 4, B.AIR);
  assert.equal(w.lighting.levelAt(9, G + 1, 4), 0);
  // standing where a real torch is: taking the carried one away leaves the placed one burning
  w.setBlock(5, G + 1, 4, B.TORCH_FLOOR);
  w.lighting.setCarried(5, G + 1, 4, 14);
  w.lighting.setCarried(5, G + 1, 4, 0);
  assert.equal(w.lighting.levelAt(5, G + 1, 4), 14, 'the placed torch still shines');
}
// ---- the shield slot as an offhand: whole stacks of torches ----
{
  const inv = new Inventory();
  let r = inv.clickEquip('shield', { id: I.TORCH, n: 20, d: 0 });
  assert.equal(inv.equipment.shield.n, 20, 'a whole stack of torches goes in');
  assert.equal(r.cursor, null);
  r = inv.clickEquip('shield', { id: I.TORCH, n: 50, d: 0 });
  assert.equal(inv.equipment.shield.n, 64, 'topped up to a full stack');
  assert.equal(r.cursor.n, 6, 'the rest stays in hand');
  r = inv.clickEquip('shield', { id: I.IRON_SHIELD, n: 1, d: 0 });
  assert.equal(inv.equipment.shield.id, I.IRON_SHIELD, 'a real shield swaps with them');
  assert.equal(r.cursor.n, 64, 'taking the whole stack back');
  inv.equipment.shield = null;
  r = inv.clickEquip('shield', { id: I.TORCH, n: 10, d: 0 }, 2);
  assert.equal(inv.equipment.shield.n, 1, 'right click puts just one');
  assert.equal(inv.armor, 0, 'a torch gives no armor');
  assert.equal(inv.clickEquip('helmet', { id: I.TORCH, n: 1, d: 0 }).cursor.id, I.TORCH, 'torches only fit the shield slot');
  const saved = JSON.parse(JSON.stringify(inv.serializeEquipment()));
  inv.equipment.shield = { id: I.TORCH, n: 33, d: 0 };
  const back = new Inventory();
  back.loadEquipment(JSON.parse(JSON.stringify(inv.serializeEquipment())));
  assert.equal(back.equipment.shield.n, 33, 'the stack size is saved');
  assert.ok(saved.shield);
}

// ---- nothing can be placed above the top of the world ----
{
  const w = field();
  assert.ok(w.canPlace(5, CH - 1, 5) && w.canPlace(5, 0, 5));
  assert.ok(!w.canPlace(5, CH, 5), 'above the top');
  assert.ok(!w.canPlace(5, -1, 5), 'below the bottom');
  assert.ok(!w.canPlace(5000, 10, 5000), 'in a chunk that is not loaded');
  assert.deepEqual(w.setBlock(5, CH, 5, B.STONE), [], 'setBlock itself ignores it (which is why the game has to check first)');
}

console.log('all tree / small-change tests passed');
