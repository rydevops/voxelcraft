// Equipment slots (helmet, chestplate, leggings, boots, shield, backpack, quiver), armor, the backpack's extra slots,
// and the iron set. Run with: npm test
import assert from 'node:assert/strict';
import { B } from '../public/js/blocks.js';
import { I, RECIPES, EQUIP_SLOTS, equipOf, armorOf, maxStack } from '../public/js/items.js';
import { REG } from '../public/js/registry.js';
import { Inventory, SLOTS, BACKPACK_MAX } from '../public/js/inventory.js';
import { reduceDamage } from '../public/js/survival.js';

// ---- the seven slots exist and each has something to wear ----
assert.deepEqual(EQUIP_SLOTS.map((s) => s.id), ['helmet', 'chestplate', 'leggings', 'boots', 'shield', 'backpack', 'quiver']);
for (const slot of EQUIP_SLOTS) assert.ok(REG.items.some((it) => it.equip?.slot === slot.id), `something fits the ${slot.id} slot`);
assert.equal(equipOf(I.IRON_HELMET).slot, 'helmet');
assert.equal(equipOf(I.IRON_BOOTS).slot, 'boots');
assert.equal(equipOf(I.BACKPACK).slots, 9);
assert.equal(equipOf(B.DIRT), null);
assert.equal(maxStack(I.IRON_CHESTPLATE), 1, 'armor does not stack');

// ---- the iron set is craftable from iron ingots at a table ----
const cost = (out) => RECIPES.find((r) => r.out === out);
for (const [item, n] of [[I.IRON_HELMET, 5], [I.IRON_CHESTPLATE, 8], [I.IRON_LEGGINGS, 7], [I.IRON_BOOTS, 4]]) {
  const r = cost(item);
  assert.equal(r.station, 'table');
  assert.deepEqual(r.ins, [[I.IRON_INGOT, n]], 'armor costs ingots like in the genre');
}
assert.ok(cost(I.IRON_SHIELD).ins.some(([id]) => id === I.IRON_INGOT) && cost(I.BACKPACK) && cost(I.QUIVER));
assert.equal(armorOf(I.IRON_HELMET) + armorOf(I.IRON_CHESTPLATE) + armorOf(I.IRON_LEGGINGS) + armorOf(I.IRON_BOOTS), 15, 'a full iron set is 15 points');

// ---- wearing things: only the right item fits each slot ----
{
  const inv = new Inventory();
  assert.equal(inv.armor, 0);
  let r = inv.clickEquip('helmet', { id: I.IRON_BOOTS, n: 1, d: 0 });
  assert.equal(inv.equipment.helmet, null, 'boots do not go on your head');
  assert.equal(r.cursor.id, I.IRON_BOOTS, 'and stay in your hand');
  r = inv.clickEquip('helmet', { id: B.DIRT, n: 5, d: 0 });
  assert.equal(inv.equipment.helmet, null);
  r = inv.clickEquip('helmet', { id: I.IRON_HELMET, n: 1, d: 0 });
  assert.equal(inv.equipment.helmet.id, I.IRON_HELMET);
  assert.equal(r.cursor, null);
  assert.equal(inv.armor, 2);
  // swap with another helmet in hand: the old one comes to the cursor
  r = inv.clickEquip('helmet', { id: I.IRON_HELMET, n: 1, d: 7 });
  assert.equal(r.cursor.d, 0, 'the one you were wearing is in your hand');
  assert.equal(inv.equipment.helmet.d, 7);
  // taking it off
  r = inv.clickEquip('helmet', null);
  assert.equal(r.cursor.id, I.IRON_HELMET);
  assert.equal(inv.equipment.helmet, null);
  assert.equal(inv.armor, 0);
  // a stack of two: only one is worn, the other stays in hand
  r = inv.clickEquip('shield', { id: I.IRON_SHIELD, n: 2, d: 0 });
  assert.equal(inv.equipment.shield.n, 1);
  assert.equal(r.cursor.n, 1);
}

// ---- shift-click in the inventory wears it, and what was worn goes back where it came from ----
{
  const inv = new Inventory();
  inv.add(I.IRON_CHESTPLATE, 1);
  inv.add(B.DIRT, 4);
  assert.ok(!inv.quickEquip(1), 'dirt is not wearable');
  assert.ok(inv.quickEquip(0));
  assert.equal(inv.equipment.chestplate.id, I.IRON_CHESTPLATE);
  assert.equal(inv.slots[0], null);
  inv.add(I.IRON_CHESTPLATE, 1, 0);
  const i = inv.slots.findIndex((s) => s && s.id === I.IRON_CHESTPLATE);
  inv.slots[i].d = 5;
  assert.ok(inv.quickEquip(i));
  assert.equal(inv.slots[i].d, 0, 'the old chestplate took its place');
  assert.equal(inv.equipment.chestplate.d, 5);
}

// ---- armor adds up ----
{
  const inv = new Inventory();
  for (const [slot, id] of [['helmet', I.IRON_HELMET], ['chestplate', I.IRON_CHESTPLATE], ['leggings', I.IRON_LEGGINGS], ['boots', I.IRON_BOOTS]]) inv.clickEquip(slot, { id, n: 1, d: 0 });
  assert.equal(inv.armor, 15);
  assert.equal(reduceDamage(0, 15), 0);
  assert.equal(reduceDamage(10, 0), 10, 'no armor, no change');
  assert.equal(reduceDamage(10, 15), 4, 'iron armor takes 60% off a hard fall');
  assert.equal(reduceDamage(1, 15), 1, 'but a hit that happens still costs at least half a heart');
  assert.equal(reduceDamage(10, 100), 2, 'there is a cap on how much armor helps');
}

// ---- the backpack: 9 more slots while it is worn ----
{
  const inv = new Inventory();
  assert.equal(inv.capacity, SLOTS);
  for (let i = 0; i < SLOTS; i++) inv.add(B.DIRT, 64);
  assert.equal(inv.add(B.COBBLE, 10), 10, 'a full inventory takes no more');
  assert.ok(!inv.canFit(B.COBBLE, 1));
  inv.clickEquip('backpack', { id: I.BACKPACK, n: 1, d: 0 });
  assert.equal(inv.capacity, SLOTS + 9);
  assert.ok(inv.canFit(B.COBBLE, 10), 'the backpack makes room');
  assert.equal(inv.add(B.COBBLE, 10), 0);
  assert.equal(inv.slots[SLOTS].id, B.COBBLE, 'the new things land in its slots');
  assert.equal(BACKPACK_MAX, 9);
  // cannot take it off while it holds things
  let r = inv.clickEquip('backpack', null);
  assert.ok(r.refused && inv.equipment.backpack, 'refused: ' + r.refused);
  // empty it and it comes off
  inv.slots[SLOTS] = null;
  r = inv.clickEquip('backpack', null);
  assert.ok(!r.refused && !inv.equipment.backpack);
  assert.equal(inv.capacity, SLOTS);
}

// ---- death: everything, including what you wear and what is in the backpack ----
{
  const inv = new Inventory();
  inv.clickEquip('backpack', { id: I.BACKPACK, n: 1, d: 0 });
  inv.clickEquip('boots', { id: I.IRON_BOOTS, n: 1, d: 0 });
  inv.add(B.DIRT, 3);
  inv.slots[SLOTS + 2] = { id: B.STONE, n: 2, d: 0 };
  const all = inv.takeEverything();
  assert.deepEqual(all.map((s) => s.id).sort((a, b) => a - b), [B.DIRT, B.STONE, I.IRON_BOOTS, I.BACKPACK].sort((a, b) => a - b));
  assert.ok(inv.slots.every((s) => !s) && Object.values(inv.equipment).every((s) => !s));
  assert.equal(inv.armor, 0);
}

// ---- saving and loading ----
{
  const inv = new Inventory();
  inv.clickEquip('helmet', { id: I.IRON_HELMET, n: 1, d: 3 });
  inv.clickEquip('backpack', { id: I.BACKPACK, n: 1, d: 0 });
  inv.add(B.DIRT, 9);
  inv.slots[SLOTS + 1] = { id: B.COBBLE, n: 5, d: 0 };
  const saved = JSON.parse(JSON.stringify({ slots: inv.serialize(), eq: inv.serializeEquipment() }));
  const back = new Inventory();
  back.load(saved.slots);
  back.loadEquipment(saved.eq);
  assert.equal(back.equipment.helmet.d, 3);
  assert.equal(back.armor, 2);
  assert.equal(back.capacity, SLOTS + 9);
  assert.equal(back.slots[SLOTS + 1].n, 5, 'the backpack contents come back');
  // a save from before equipment existed (36 slots, no equipment) still loads
  const old = new Inventory();
  old.load(Array(36).fill(null).map((_, i) => (i === 0 ? [B.DIRT, 5, 0] : null)));
  old.loadEquipment(undefined);
  assert.equal(old.count(B.DIRT), 5);
  assert.equal(old.armor, 0);
  // something in the wrong equipment slot in a save is ignored, not worn
  const bad = new Inventory();
  bad.loadEquipment({ helmet: [I.IRON_BOOTS, 1, 0] });
  assert.equal(bad.equipment.helmet, null);
}

console.log('all equipment tests passed');
