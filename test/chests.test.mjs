// Chests: three tiers with more slots and bigger stacks, taking and putting with a cursor, upgrades that keep what is inside, saving,
// and crafting that draws on every chest within range.
import assert from 'node:assert/strict';
import { B, CHEST } from '../src/js/blocks.js';
import { I, maxStack, upgradeOf, RECIPES } from '../src/js/items.js';
import { Chests, chestTier, slotLimit, clickChest, putInChest, takeFromChest, sortChest, ChestSource } from '../src/js/chests.js';
import { Inventory } from '../src/js/inventory.js';
import { REG } from '../src/js/registry.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const wood = chestTier(B.CHEST), iron = chestTier(B.IRON_CHEST), vault = chestTier(B.VAULT_CHEST);

t('three tiers: each has more slots and bigger stacks than the one before, and a stack can be bigger than your pockets allow', () => {
  assert.equal(CHEST.size, 3);
  assert.ok(wood.slots < iron.slots && iron.slots < vault.slots, 'more slots');
  assert.ok(wood.stack < iron.stack && iron.stack < vault.stack, 'bigger stacks');
  assert.equal(slotLimit(B.COBBLE, wood), maxStack(B.COBBLE));
  assert.equal(slotLimit(B.COBBLE, iron), maxStack(B.COBBLE) * iron.stack);
  assert.ok(slotLimit(B.COBBLE, vault) > 64 * 4, 'a vault holds more than a thousand of a thing');
  assert.equal(slotLimit(I.IRON_PICKAXE, vault), 1, 'tools stay one to a slot');
});

t('a chest holds what you put in, up to its limit, and what does not fit is left over', () => {
  const c = new Chests().get(1, 2, 3, wood);
  assert.equal(c.slots.length, wood.slots);
  assert.equal(putInChest(c, wood, { id: B.DIRT, n: 100 }), 0);
  assert.deepEqual(c.slots[0], { id: B.DIRT, n: 64, d: 0 });
  assert.equal(c.slots[1].n, 36);
  const tiny = new Chests().get(0, 0, 0, { slots: 2, stack: 1 });
  assert.equal(putInChest(tiny, { slots: 2, stack: 1 }, { id: B.DIRT, n: 200 }), 200 - 128, 'two slots of 64');
  const big = new Chests().get(0, 0, 0, iron);
  assert.equal(putInChest(big, iron, { id: B.DIRT, n: 1000 }), 0);
  assert.equal(big.slots[0].n, 64 * iron.stack, 'an iron chest slot holds a big stack');
  putInChest(big, iron, { id: I.IRON_PICKAXE, n: 1, d: 5 });
  assert.equal(big.slots.find((s) => s && s.id === I.IRON_PICKAXE).d, 5, 'damage goes with the tool');
});

t('with the cursor: take up to a hand-full from a huge stack, place, merge, swap, split', () => {
  const chest = new Chests().get(0, 0, 0, iron);
  putInChest(chest, iron, { id: B.COBBLE, n: 500 });
  let cursor = clickChest(chest, 0, null, 0, iron);
  assert.deepEqual(cursor, { id: B.COBBLE, n: 64, d: 0 }, 'a hand holds a normal stack');
  assert.equal(chest.slots[0].n, 64 * iron.stack - 64, 'the rest stays in the chest');
  cursor = clickChest(chest, 0, cursor, 0, iron); // put it back: merges
  assert.equal(cursor, null);
  assert.equal(chest.slots[0].n, 64 * iron.stack);
  const half = clickChest(chest, 0, null, 2, iron);
  assert.equal(half.n, 64, 'half would be 128 but a hand holds 64');
  // swapping with a different item: only if the stack in the slot fits in a hand
  let c2 = clickChest(chest, 5, { id: B.DIRT, n: 3, d: 0 }, 0, iron);
  assert.equal(c2, null, 'into an empty slot');
  c2 = clickChest(chest, 5, { id: B.SAND, n: 2, d: 0 }, 0, iron);
  assert.deepEqual(c2, { id: B.DIRT, n: 3, d: 0 }, 'swapped');
  assert.deepEqual(clickChest(chest, 0, { id: B.SAND, n: 2, d: 0 }, 0, iron), { id: B.SAND, n: 2, d: 0 }, 'a huge stack cannot be swapped into a hand: nothing happens');
  // one at a time
  let one = clickChest(chest, 6, { id: B.PLANKS, n: 4, d: 0 }, 2, iron);
  assert.equal(one.n, 3);
  assert.equal(chest.slots[6].n, 1);
});

t('shift-click moves a whole stack to the inventory as far as it fits; sorting tidies the chest', () => {
  const chest = new Chests().get(0, 0, 0, iron);
  putInChest(chest, iron, { id: B.DIRT, n: 300 });
  const inv = new Inventory();
  const moved = takeFromChest(chest, 0, inv);
  assert.equal(moved, 256, 'the whole slot (an iron chest slot holds 256)');
  assert.equal(inv.count(B.DIRT), moved);
  for (let i = 0; i < 20; i++) putInChest(chest, iron, { id: B.SAND, n: 1 });
  chest.slots[10] = { id: B.SAND, n: 5, d: 0 }; chest.slots[20] = { id: B.COBBLE, n: 3, d: 0 };
  sortChest(chest, iron);
  const used = chest.slots.filter(Boolean);
  assert.ok(used.length <= 4, 'merged: ' + used.length);
  assert.equal(chest.slots.slice(used.length).every((s) => s === null), true, 'packed at the front');
  assert.equal(used.reduce((s, x) => s + (x.id === B.SAND ? x.n : 0), 0), 25, 'nothing lost: 20 + 5 sand');
  assert.equal(used.reduce((s, x) => s + (x.id === B.DIRT ? x.n : 0), 0), 44, 'the dirt that stayed behind');
});

t('upgrading: the upgrade item names a chest and the next one; the chest keeps its contents and gains slots', () => {
  const up = upgradeOf(I.CHEST_UPGRADE_IRON);
  assert.deepEqual(up, { from: B.CHEST, to: B.IRON_CHEST });
  assert.deepEqual(upgradeOf(I.CHEST_UPGRADE_VAULT), { from: B.IRON_CHEST, to: B.VAULT_CHEST });
  const chests = new Chests();
  const c = chests.get(4, 5, 6, wood);
  putInChest(c, wood, { id: B.DIRT, n: 10 });
  const upgraded = chests.get(4, 5, 6, iron);
  assert.equal(upgraded, c, 'the same chest');
  assert.equal(upgraded.slots.length, iron.slots, 'with more slots');
  assert.equal(upgraded.slots[0].n, 10, 'and what was in it');
  const r = RECIPES.find((x) => x.out === I.CHEST_UPGRADE_IRON);
  assert.ok(r && r.station === 'table');
});

t('breaking a chest gives back what was inside; an empty chest is not saved; a full one survives a save', () => {
  const chests = new Chests();
  const c = chests.get(1, 1, 1, wood);
  assert.equal(chests.has(1, 1, 1), true);
  assert.deepEqual(chests.serialize(), {}, 'empty: nothing to save');
  putInChest(c, wood, { id: B.DIRT, n: 70 }); putInChest(c, wood, { id: I.IRON_PICKAXE, n: 1, d: 9 });
  const saved = JSON.parse(JSON.stringify(chests.serialize()));
  const back = new Chests(); back.load(saved);
  assert.deepEqual(back.get(1, 1, 1, wood).slots.filter(Boolean), c.slots.filter(Boolean));
  const dropped = chests.remove(1, 1, 1);
  assert.equal(dropped.reduce((s, x) => s + x.n, 0), 71);
  assert.equal(chests.has(1, 1, 1), false);
});

t('crafting reaches into the chests within range, taking from your pockets first; far chests are left alone', () => {
  const chests = new Chests();
  const near = chests.get(3, 0, 0, wood), far = chests.get(50, 0, 0, wood);
  putInChest(near, wood, { id: B.PLANKS, n: 20 }); putInChest(near, wood, { id: I.STICK, n: 4 });
  putInChest(far, wood, { id: B.PLANKS, n: 100 });
  const inv = new Inventory();
  inv.add(B.PLANKS, 2); inv.add(I.STICK, 1);
  inv.linked = [new ChestSource(chests.near(0, 0, 0))];
  assert.equal(chests.near(0, 0, 0).length, 1, 'only the near one');
  assert.equal(inv.countSpec(B.PLANKS), 22, 'pockets and the near chest, not the far one');
  const pick = RECIPES.find((r) => r.out === I.WOOD_PICKAXE);
  assert.ok(inv.canCraft(pick, { table: true }), 'the planks and sticks are in the chest');
  const res = inv.craft(pick, { table: true });
  assert.ok(res.ok && inv.count(I.WOOD_PICKAXE) === 1);
  assert.equal(inv.count(B.PLANKS), 0, 'pockets used first');
  assert.equal(near.slots.filter((s) => s && s.id === B.PLANKS).reduce((a, s) => a + s.n, 0), 20 - 1, 'then the chest: 3 planks needed, 2 from pockets');
  assert.equal(inv.count(I.STICK), 0);
  assert.equal(near.slots.filter((s) => s && s.id === I.STICK).reduce((a, s) => a + s.n, 0), 3);
  assert.equal(far.slots[0].n, 64, 'nothing taken from the far chest');
  inv.linked = [];
  assert.equal(inv.countSpec(B.PLANKS), 0, 'with no chests linked, only the pockets count');
  assert.ok(REG.game.chests.craftRange >= 5);
});

console.log('chests: ' + n + ' checks passed');
