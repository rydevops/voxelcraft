// Furnaces: input / fuel / output slots, cooking time, fuel burning, lit state and saving. Run with: npm test
import assert from 'node:assert/strict';
import { B } from '../src/js/blocks.js';
import { I, smeltFor, fuelSeconds, SMELTING } from '../src/js/items.js';
import { Inventory } from '../src/js/inventory.js';
import { newFurnace, tickFurnace, isLit, clickFurnaceSlot, quickInsert, autoFill, Furnaces, INPUT, FUEL, OUTPUT, isFuel, isSmeltable } from '../src/js/furnace.js';

const run = (f, seconds, dt = 0.25) => { for (let t = 0; t < seconds - 1e-9; t += dt) tickFurnace(f, dt); };

// ---- the data: what smelts into what, and what burns ----
assert.equal(smeltFor(I.RAW_IRON).out, I.IRON_INGOT);
assert.equal(smeltFor(B.SAND).out, B.GLASS);
assert.equal(smeltFor(B.COBBLE).out, B.STONE);
assert.equal(smeltFor(B.LOG).out, I.CHARCOAL);
assert.equal(smeltFor(B.DIRT), null);
assert.ok(SMELTING.every((r) => r.seconds > 0));
assert.ok(fuelSeconds(I.COAL) > fuelSeconds(B.LOG) && fuelSeconds(B.LOG) > fuelSeconds(B.PLANKS) && fuelSeconds(B.PLANKS) > fuelSeconds(I.STICK), 'coal outlasts wood');
assert.equal(fuelSeconds(B.DIRT), 0);
assert.ok(isFuel(I.COAL) && isFuel(I.CHARCOAL) && !isFuel(I.RAW_IRON));
assert.ok(isSmeltable(I.RAW_IRON) && !isSmeltable(I.COAL));

// ---- smelting takes time ----
{
  const f = newFurnace();
  f.slots[INPUT] = { id: I.RAW_IRON, n: 2, d: 0 };
  f.slots[FUEL] = { id: I.COAL, n: 1, d: 0 };
  const secs = smeltFor(I.RAW_IRON).seconds;
  tickFurnace(f, 0.1);
  assert.ok(isLit(f), 'it lights as soon as there is something to cook and fuel');
  assert.equal(f.slots[FUEL], null, 'the piece of fuel is used up when it catches');
  assert.equal(f.slots[OUTPUT], null, 'nothing yet');
  run(f, secs - 1);
  assert.equal(f.slots[OUTPUT], null, 'still cooking just before the time is up');
  assert.ok(f.progress > 0);
  run(f, 2);
  assert.equal(f.slots[OUTPUT]?.id, I.IRON_INGOT, 'one ingot after ' + secs + ' seconds');
  assert.equal(f.slots[OUTPUT].n, 1);
  assert.equal(f.slots[INPUT].n, 1);
  run(f, secs);
  assert.equal(f.slots[OUTPUT].n, 2, 'then the second');
  assert.equal(f.slots[INPUT], null);
  assert.equal(f.progress, 0);
  // the coal still has fire in it: a burning furnace with nothing to do does not waste the rest of the fuel item
  assert.ok(f.burn > 0 && f.burn < fuelSeconds(I.COAL));
  run(f, fuelSeconds(I.COAL));
  assert.ok(!isLit(f), 'the fire goes out');
}

// ---- changing from one piece of fuel to the next never lets the fire go out ----
{
  const f = newFurnace();
  f.slots[INPUT] = { id: B.COBBLE, n: 20, d: 0 };
  f.slots[FUEL] = { id: B.PLANKS, n: 4, d: 0 }; // planks burn 15 s each, so the fuel changes over several times
  let lit = [], fuelCounts = [];
  for (let t = 0; t < 60 - 1e-9; t += 0.1) { tickFurnace(f, 0.1); lit.push(isLit(f)); fuelCounts.push(f.slots[FUEL]?.n ?? 0); }
  assert.ok(lit.every(Boolean), 'lit on every single tick while there is fuel and something to cook');
  assert.ok(new Set(fuelCounts).size >= 3, 'and the fuel did change over during that time');
  // when the last piece really is the last, it does go out
  for (let t = 0; t < 40; t += 0.1) tickFurnace(f, 0.1);
  assert.ok(!isLit(f) && f.slots[FUEL] === null);
  // the Furnaces wrapper: the lit/unlit block swap is not called back and forth either
  const calls = [];
  const fs2 = new Furnaces({ onLit: (x, y, z, l) => { calls.push(l); return true; } });
  const g = fs2.get(0, 0, 0);
  g.slots[INPUT] = { id: B.COBBLE, n: 20, d: 0 };
  g.slots[FUEL] = { id: B.PLANKS, n: 3, d: 0 };
  for (let t = 0; t < 40; t += 0.1) fs2.update(0.1); // (three planks last 45 s)
  assert.deepEqual(calls, [true], 'told once that it lit, and nothing else while the fuel kept changing over');
}

// ---- fuel: one coal cooks several items; no fuel, no cooking ----
{
  const f = newFurnace();
  f.slots[INPUT] = { id: B.COBBLE, n: 12, d: 0 };
  run(f, 60);
  assert.equal(f.slots[OUTPUT], null, 'nothing happens without fuel');
  f.slots[FUEL] = { id: B.PLANKS, n: 1, d: 0 };
  const per = smeltFor(B.COBBLE).seconds;
  const planksBurn = fuelSeconds(B.PLANKS);
  run(f, planksBurn + 0.5);
  assert.equal(f.slots[OUTPUT].n, Math.floor(planksBurn / per), 'one plank cooks ' + Math.floor(planksBurn / per) + ' stone');
  assert.ok(!isLit(f), 'and then it is out');
  assert.ok(f.slots[INPUT].n > 0, 'the rest is left waiting for more fuel');
}

// ---- the output slot: a different result blocks cooking; stacks stop at 64 ----
{
  const f = newFurnace();
  f.slots[INPUT] = { id: I.RAW_IRON, n: 1, d: 0 };
  f.slots[FUEL] = { id: I.COAL, n: 1, d: 0 };
  f.slots[OUTPUT] = { id: B.GLASS, n: 3, d: 0 };
  run(f, 30);
  assert.equal(f.slots[INPUT].n, 1, 'cannot cook into a slot holding something else');
  assert.ok(!isLit(f) || f.slots[FUEL] === null);
  const g = newFurnace();
  g.slots[INPUT] = { id: B.SAND, n: 2, d: 0 };
  g.slots[FUEL] = { id: I.COAL, n: 1, d: 0 };
  g.slots[OUTPUT] = { id: B.GLASS, n: 64, d: 0 };
  run(g, 30);
  assert.equal(g.slots[OUTPUT].n, 64, 'a full output stack stops the furnace');
  assert.equal(g.slots[FUEL].n, 1, 'no fuel is burnt while it is blocked');
}

// ---- progress slips back when the fire is out, and restarts for a different item ----
{
  const f = newFurnace();
  f.slots[INPUT] = { id: I.RAW_IRON, n: 1, d: 0 };
  f.slots[FUEL] = { id: I.STICK, n: 1, d: 0 };
  run(f, fuelSeconds(I.STICK) + 0.5);
  assert.ok(!isLit(f) && f.progress > 0 && f.slots[OUTPUT] === null, 'a stick is not enough for an ingot');
  const before = f.progress;
  run(f, 1);
  assert.ok(f.progress < before, 'progress drains while cold');
  f.slots[INPUT] = { id: B.SAND, n: 1, d: 0 };
  f.slots[FUEL] = { id: I.COAL, n: 1, d: 0 };
  tickFurnace(f, 0.1);
  assert.ok(f.progress <= 0.11, 'a new item starts from zero');
}

// ---- clicking the slots ----
{
  const f = newFurnace();
  let r = clickFurnaceSlot(f, FUEL, { id: I.RAW_IRON, n: 5, d: 0 });
  assert.equal(f.slots[FUEL], null, 'the fuel slot refuses things that do not burn');
  assert.equal(r.cursor.n, 5);
  r = clickFurnaceSlot(f, INPUT, { id: I.COAL, n: 5, d: 0 });
  assert.equal(f.slots[INPUT], null, 'the input slot refuses things that cannot be smelted');
  r = clickFurnaceSlot(f, INPUT, { id: I.RAW_IRON, n: 5, d: 0 });
  assert.equal(f.slots[INPUT].n, 5);
  assert.equal(r.cursor, null);
  r = clickFurnaceSlot(f, FUEL, { id: I.COAL, n: 2, d: 0 }, 2); // right click: just one
  assert.equal(f.slots[FUEL].n, 1);
  assert.equal(r.cursor.n, 1);
  f.slots[OUTPUT] = { id: I.IRON_INGOT, n: 4, d: 0 };
  r = clickFurnaceSlot(f, OUTPUT, { id: B.DIRT, n: 1, d: 0 });
  assert.equal(f.slots[OUTPUT].n, 4, 'you cannot put things into the output');
  r = clickFurnaceSlot(f, OUTPUT, null);
  assert.equal(r.cursor.n, 4);
  assert.equal(r.took.id, I.IRON_INGOT, 'what you took is reported (for goals)');
  assert.equal(f.slots[OUTPUT], null);
  // shift-click from the inventory goes to the right slot
  const g = newFurnace();
  assert.equal(quickInsert(g, { id: I.COAL, n: 3, d: 0 }), 0);
  assert.equal(g.slots[FUEL].n, 3);
  assert.equal(quickInsert(g, { id: B.SAND, n: 4, d: 0 }), 0);
  assert.equal(g.slots[INPUT].id, B.SAND);
  assert.equal(quickInsert(g, { id: B.DIRT, n: 4, d: 0 }), 4, 'dirt goes nowhere');
}

// ---- the recipe-book click loads the furnace from the inventory ----
{
  const inv = new Inventory();
  inv.add(I.RAW_IRON, 5); inv.add(I.COAL, 4); inv.add(B.PLANKS, 6);
  const f = newFurnace();
  const moved = autoFill(f, inv, smeltFor(I.RAW_IRON));
  assert.equal(moved.input, 5);
  assert.equal(inv.count(I.RAW_IRON), 0);
  assert.equal(f.slots[INPUT].n, 5);
  assert.ok(f.slots[FUEL] && moved.fuel > 0, 'fuel is added too');
  assert.ok(f.slots[FUEL].n * fuelSeconds(f.slots[FUEL].id) >= 5 * smeltFor(I.RAW_IRON).seconds, 'enough to cook everything');
  run(f, 5 * smeltFor(I.RAW_IRON).seconds + 1);
  assert.equal(f.slots[OUTPUT].n, 5, 'all five cooked');
  // something else already in the input: leave it alone
  const inv2 = new Inventory();
  inv2.add(B.SAND, 3);
  const f2 = newFurnace();
  f2.slots[INPUT] = { id: I.RAW_IRON, n: 1, d: 0 };
  assert.equal(autoFill(f2, inv2, smeltFor(B.SAND)).input, 0);
  assert.equal(inv2.count(B.SAND), 3);
}

// ---- all the furnaces in a world: lit hook, empty ones are forgotten, saving ----
{
  const log = [];
  let ready = true;
  const fs = new Furnaces({ onLit: (x, y, z, lit) => { if (!ready) return false; log.push([x, y, z, lit]); return true; } });
  const f = fs.get(3, 20, 4);
  f.slots[INPUT] = { id: B.COBBLE, n: 2, d: 0 };
  f.slots[FUEL] = { id: I.COAL, n: 1, d: 0 };
  fs.update(0.1);
  assert.deepEqual(log.at(-1), [3, 20, 4, true], 'it reports when it lights');
  const saved = JSON.parse(JSON.stringify(fs.serialize()));
  assert.ok(saved['3,20,4'], 'a working furnace is saved');
  const back = new Furnaces({ onLit: () => true });
  back.load(saved);
  const g = back.get(3, 20, 4);
  assert.equal(g.slots[INPUT].n, 2);
  assert.ok(g.burn > 0, 'its fire is saved too');
  for (let t = 0; t < 40; t += 0.5) fs.update(0.5);
  assert.equal(fs.get(3, 20, 4).slots[OUTPUT].n, 2, 'cooking carries on through update()');
  for (let t = 0; t < 70; t += 0.5) fs.update(0.5);
  assert.deepEqual(log.at(-1)?.slice(3), [false], 'and reports when the fire goes out');
  assert.deepEqual(fs.remove(3, 20, 4).map((s) => s.id), [B.STONE], 'breaking it gives back what is inside');
  assert.ok(!fs.has(3, 20, 4));
  // chunk not loaded yet: the hook says "later" and it asks again
  ready = false;
  const h = fs.get(9, 9, 9);
  h.slots[INPUT] = { id: B.COBBLE, n: 1, d: 0 };
  h.slots[FUEL] = { id: I.COAL, n: 1, d: 0 };
  const n0 = log.length;
  fs.update(0.1); fs.update(0.1);
  assert.equal(log.length, n0, 'nothing reported while the hook says no');
  ready = true;
  fs.update(0.1);
  assert.deepEqual(log.at(-1), [9, 9, 9, true], 'reported once it can be applied');
  // an idle empty furnace stays usable (a window may hold it) but is not saved
  const idle = new Furnaces({ onLit: () => true });
  const held = idle.get(1, 1, 1);
  idle.update(0.1);
  assert.ok(idle.has(1, 1, 1) && idle.get(1, 1, 1) === held, 'the same object keeps being ticked');
  assert.deepEqual(idle.serialize(), {}, 'but nothing is written for it');
  held.slots[0] = { id: B.SAND, n: 1, d: 0 };
  assert.ok(idle.serialize()['1,1,1'], 'until something is put in it');
}

console.log('all furnace tests passed');
