// Charcoal, fuel alternatives, break timing and crack pacing. Run with: npm test
import assert from 'node:assert/strict';
import { B } from '../src/js/blocks.js';
import { I, RECIPES, COALS, specIds, specName, miningInfo, WINDOWS } from '../src/js/items.js';
import { Inventory } from '../src/js/inventory.js';
import { BreakTimer, crackPixels, crackStage, CRACK_STAGES, BREAK_COOLDOWN } from '../src/js/mining.js';

// ---- windows: hand, crafting table and furnace; the furnace has slots instead of crafting recipes ----
assert.deepEqual([...new Set(RECIPES.map((r) => r.station))].map(String).sort(), ['null', 'table'], 'crafting recipes need a table or nothing');
assert.ok(WINDOWS.furnace.furnace && !WINDOWS.hand.furnace && !WINDOWS.table.furnace);
assert.deepEqual(WINDOWS.table.stations, [null, 'table'], 'the table window lists the hand recipes too');

// ---- torches: coal or charcoal and a stick, by hand ----
assert.deepEqual(specIds(COALS), [I.CHARCOAL, I.COAL]);
assert.equal(specName(COALS), 'Charcoal or Coal');
const torch = RECIPES.find((r) => r.out === I.TORCH);
assert.ok(torch && torch.n === 4 && torch.station === null, 'four torches by hand');
const t1 = new Inventory();
t1.add(I.COAL, 1); t1.add(I.CHARCOAL, 1); t1.add(I.STICK, 2);
assert.ok(t1.craft(torch).ok);
assert.equal(t1.count(I.TORCH), 4);
assert.equal(t1.count(I.CHARCOAL), 0, 'charcoal is used before coal');
assert.equal(t1.count(I.COAL), 1);
assert.ok(t1.craft(torch).ok && t1.count(I.TORCH) === 8, 'coal works too');
assert.equal(t1.canCraft(torch), false, 'no stick left');

// ---- break timing is exact ----
const frame = 1 / 60;
function breakAfter(time, dt = frame) {
  const bt = new BreakTimer();
  let elapsed = 0;
  for (let i = 0; i < 100000; i++) {
    elapsed += dt;
    if (bt.tick(dt, 'a', time)) return elapsed;
  }
  throw new Error('never broke');
}
for (const time of [0.3, 0.5, 0.9, 1.5, 3, 7.5]) {
  const got = breakAfter(time);
  assert.ok(got >= time - 1e-9 && got < time + frame + 1e-9, `${time}s break finished at ${got.toFixed(4)}s (within one frame)`);
}
for (const dt of [1 / 30, 1 / 60, 1 / 144, 1 / 240]) { // independent of the frame rate
  const got = breakAfter(1.2, dt);
  assert.ok(got >= 1.2 - 1e-9 && got < 1.2 + dt + 1e-9, `frame time ${dt.toFixed(4)}: broke at ${got.toFixed(4)}`);
}
{ // each crack stage lasts exactly a tenth of the break
  const bt = new BreakTimer();
  const time = 2;
  const stageAt = [];
  let elapsed = 0;
  while (true) {
    elapsed += 1 / 240;
    if (bt.tick(1 / 240, 'a', time)) break;
    if (stageAt[bt.stage] === undefined) stageAt[bt.stage] = elapsed;
  }
  assert.equal(stageAt.length, CRACK_STAGES, 'all 10 crack stages are shown');
  stageAt.forEach((t0, s) => assert.ok(Math.abs(t0 - (s * time) / CRACK_STAGES) < 0.02, `stage ${s} starts at ${t0.toFixed(3)}s`));
}
{ // switching target restarts; the cooldown is the only extra delay between blocks
  const bt = new BreakTimer();
  bt.tick(0.4, 'a', 1);
  assert.ok(Math.abs(bt.progress - 0.4) < 1e-9);
  bt.tick(0.1, 'b', 1);
  assert.ok(Math.abs(bt.progress - 0.1) < 1e-9, 'a new block starts from zero');
  const bt2 = new BreakTimer();
  assert.ok(bt2.tick(1, 'a', 1));
  let total = 0;
  while (!bt2.tick(0.01, 'b', 0.5)) total += 0.01;
  assert.ok(Math.abs(total + 0.01 - (0.5 + BREAK_COOLDOWN)) < 0.011, 'second block takes its time plus the short cooldown');
}
assert.equal(crackStage(0), 0);
assert.equal(crackStage(0.999), 9);
assert.equal(crackStage(0.55), 5);

// real blocks: hand vs shovel times feed straight into the timer
const dirtHand = breakAfter(miningInfo(B.DIRT, 0).time), dirtShovel = breakAfter(miningInfo(B.DIRT, I.IRON_SHOVEL).time);
assert.ok(dirtShovel < dirtHand / 3);

// ---- the crack pattern keeps growing until the very last stage ----
const stages = crackPixels(16);
assert.equal(stages.length, CRACK_STAGES);
stages.forEach((px, s) => {
  const added = px.length - (s ? stages[s - 1].length : 0);
  assert.ok(added >= 3, `stage ${s} adds visible cracks (+${added})`);
});
const reach = stages.map((px) => Math.max(...px.map(([x, y]) => Math.hypot(x - 7.5, y - 7.5))));
assert.ok(reach[9] > reach[6] + 0.5, 'late stages still spread outward');
assert.ok(stages[0].length >= 6 && stages[9].length > 70);

console.log('all crafting/mining tests passed');
