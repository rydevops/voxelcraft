// Inventory, mining rules and crafting progression. Run with: npm test
import assert from 'node:assert/strict';
import { B } from '../public/js/blocks.js';
import { I, RECIPES, GOALS, miningInfo, dropsFor, toolOf, maxStack, smeltFor } from '../public/js/items.js';
import { Inventory } from '../public/js/inventory.js';
import { newFurnace, autoFill, tickFurnace, OUTPUT } from '../public/js/furnace.js';
import { World } from '../public/js/world.js';

// ---- inventory basics ----
const inv = new Inventory();
assert.equal(inv.add(B.LOG, 70), 0, 'everything fits');
assert.equal(inv.slots[0].n, 64);
assert.equal(inv.slots[1].n, 6, 'overflow starts a second stack');
assert.equal(inv.count(B.LOG), 70);
assert.equal(inv.remove(B.LOG, 100), false, 'cannot remove more than you have');
assert.equal(inv.count(B.LOG), 70, 'failed remove changes nothing');
assert.ok(inv.remove(B.LOG, 10));
assert.equal(inv.count(B.LOG), 60);

const full = new Inventory();
for (let i = 0; i < 36; i++) full.add(B.DIRT, 64);
assert.equal(full.canFit(B.DIRT, 1), false);
assert.equal(full.add(B.DIRT, 5), 5, 'reports leftover when full');
assert.equal(full.canFit(B.STONE, 1), false);

// tools never stack
const t = new Inventory();
t.add(I.WOOD_PICKAXE, 1); t.add(I.WOOD_PICKAXE, 1);
assert.equal(t.slots.filter(Boolean).length, 2);
assert.equal(maxStack(I.WOOD_PICKAXE), 1);

// cursor interactions
const c = new Inventory();
c.add(B.DIRT, 10);
let cursor = c.clickSlot(0, null, 0);               // pick up all
assert.equal(cursor.n, 10); assert.equal(c.slots[0], null);
cursor = c.clickSlot(5, cursor, 2);                 // right-click: place one
assert.equal(c.slots[5].n, 1); assert.equal(cursor.n, 9);
cursor = c.clickSlot(5, cursor, 0);                 // merge into the stack
assert.equal(c.slots[5].n, 10); assert.equal(cursor, null);
cursor = c.clickSlot(5, null, 2);                   // right-click: take half
assert.equal(cursor.n, 5); assert.equal(c.slots[5].n, 5);
c.quickMove(5);
assert.equal(c.slots[5], null);
assert.equal(c.count(B.DIRT), 5, 'quick-move keeps the items');

// serialization round trip
const inv2 = new Inventory();
inv2.load(JSON.parse(JSON.stringify(t.serialize())));
assert.equal(inv2.count(I.WOOD_PICKAXE), 2);

// ---- mining rules ----
const hand = 0;
assert.equal(miningInfo(B.LOG, hand).canHarvest, true, 'logs can be punched');
assert.equal(miningInfo(B.STONE, hand).canHarvest, false, 'stone needs a pickaxe');
assert.ok(miningInfo(B.STONE, hand).time > miningInfo(B.STONE, I.WOOD_PICKAXE).time * 3, 'pickaxe is much faster');
assert.equal(miningInfo(B.STONE, I.WOOD_PICKAXE).canHarvest, true);
assert.equal(miningInfo(B.IRON_ORE, I.WOOD_PICKAXE).canHarvest, false, 'iron ore needs a stone pickaxe');
assert.equal(miningInfo(B.IRON_ORE, I.STONE_PICKAXE).canHarvest, true);
assert.equal(miningInfo(B.COAL_ORE, I.WOOD_PICKAXE).canHarvest, true);
assert.ok(miningInfo(B.LOG, I.IRON_AXE).time < miningInfo(B.LOG, I.WOOD_AXE).time && miningInfo(B.LOG, I.WOOD_AXE).time < miningInfo(B.LOG, hand).time);
assert.ok(miningInfo(B.LOG, I.IRON_PICKAXE).time === miningInfo(B.LOG, hand).time, 'wrong tool type gives no speed-up');

assert.deepEqual(dropsFor(B.STONE, true), [{ id: B.COBBLE, n: 1 }]);
assert.deepEqual(dropsFor(B.STONE, false), []);
assert.deepEqual(dropsFor(B.GRASS, true), [{ id: B.DIRT, n: 1 }]);
assert.deepEqual(dropsFor(B.COAL_ORE, true), [{ id: I.COAL, n: 1 }]);
assert.deepEqual(dropsFor(B.IRON_ORE, true), [{ id: I.RAW_IRON, n: 1 }], 'iron ore drops raw iron, not the block');
assert.deepEqual(dropsFor(B.IRON_ORE, false), [], 'and nothing without a stone pickaxe');
assert.deepEqual(dropsFor(B.GLASS, true), []);
assert.ok(dropsFor(B.LEAVES, true, () => 0).some((d) => d.id === I.STICK), 'leaves can drop sticks');
assert.equal(dropsFor(B.LEAVES, true, () => 0.99).length, 0);

// ---- the whole progression is reachable from an empty inventory ----
const g = new Inventory();
const st = { table: false, furnace: false };
const progress = { collected: new Set(), crafted: new Set(), flags: new Set() };
const craft = (out) => {
  const r = RECIPES.find((x) => x.out === out);
  assert.ok(r, 'recipe exists for ' + out);
  const res = g.craft(r, st);
  assert.ok(res.ok, `could craft ${out} (station ${r.station}) with ${JSON.stringify(g.serialize().filter(Boolean))}`);
  progress.crafted.add(out);
};
const gather = (id, n) => { g.add(id, n); progress.collected.add(id); };
// cook `n` of an item in a furnace the way the game does: load it from the inventory, tick until it is done, take the result
const smelt = (id, n) => {
  const fur = newFurnace();
  autoFill(fur, g, smeltFor(id));
  if (fur.slots[1]) { g.add(fur.slots[1].id, fur.slots[1].n); fur.slots[1] = null; } // the player picks the fuel: a coal
  assert.ok(g.remove(I.COAL, 1));
  fur.slots[1] = { id: I.COAL, n: 1, d: 0 };
  for (let t = 0; t < 600 && fur.slots[OUTPUT]?.n !== n; t += 0.5) tickFurnace(fur, 0.5);
  const out = fur.slots[OUTPUT];
  assert.ok(out && out.n === n, `smelted ${n} of ${id}`);
  g.add(out.id, out.n);
  progress.crafted.add(out.id); // taking it from the furnace counts as crafting it
};

assert.equal(GOALS.filter((x) => x.done(progress)).length, 0, 'no goal starts complete');
gather(B.LOG, 6);
assert.equal(g.canCraft(RECIPES.find((r) => r.out === I.WOOD_PICKAXE), st), false, 'cannot make tools by hand');
craft(B.PLANKS); craft(B.PLANKS); craft(B.PLANKS); // 12 planks
craft(I.STICK);                                    // 4 sticks
craft(B.CRAFTING);                                 // table: 4 planks
st.table = true;
craft(I.WOOD_PICKAXE);                             // 3 planks + 2 sticks -> out of planks
assert.equal(g.count(B.PLANKS), 3);
gather(B.COBBLE, 12);
craft(I.STONE_PICKAXE);
craft(B.FURNACE);
st.furnace = true;
gather(I.COAL, 3); gather(I.RAW_IRON, 3);
assert.equal(RECIPES.find((r) => r.out === I.IRON_INGOT), undefined, 'ingots are smelted in the furnace, not crafted');
smelt(I.RAW_IRON, 3);
assert.equal(g.count(I.IRON_INGOT), 3);
craft(I.STICK);                                    // sticks ran out after the stone pickaxe
craft(I.IRON_PICKAXE);
// farming chain: hoe, seeds from grass, till, plant, harvest, bread
g.add(B.PLANKS, 2); g.add(I.STICK, 2);
craft(I.WOOD_HOE);
gather(I.WHEAT_SEEDS, 1);
progress.flags.add('tilled'); progress.flags.add('planted');
gather(I.WHEAT, 3);
craft(I.BREAD);
progress.flags.add('ate');
// iron armor: ingots from the furnace, crafted at the table, then worn
gather(I.IRON_INGOT, 5);
craft(I.IRON_HELMET);
progress.flags.add('equipped');
assert.equal(GOALS.filter((x) => x.done(progress)).length, GOALS.length, 'every goal is completable');

// ---- tool wear ----
const w = new Inventory();
w.add(I.WOOD_PICKAXE, 1);
for (let i = 0; i < toolOf(I.WOOD_PICKAXE).uses - 1; i++) assert.equal(w.damage(0), false);
assert.equal(w.damage(0), true, 'tool breaks after its last use');
assert.equal(w.slots[0], null);

// ---- world: ores exist and the spawn has trees nearby ----
const world = new World(1337);
for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) world.generateChunk(cx, cz);
let coal = 0, iron = 0, stone = 0;
for (const ch of world.chunks.values()) for (const b of ch.data) { if (b === B.COAL_ORE) coal++; else if (b === B.IRON_ORE) iron++; else if (b === B.STONE) stone++; }
console.log(`ore share of stone: coal ${(100 * coal / stone).toFixed(2)}%, iron ${(100 * iron / stone).toFixed(2)}%`);
assert.ok(coal > 100 && iron > 50 && coal > iron, 'both ores present, coal more common');
for (const seed of [1, 7, 99, 2024, 31337]) {
  const wd = new World(seed);
  const s = wd.findSpawn();
  assert.ok(wd.treesNear(Math.floor(s.x), Math.floor(s.z), 10) >= 3 || seed === 0, `seed ${seed}: trees within reach of spawn`);
}

console.log('all item/inventory tests passed');
