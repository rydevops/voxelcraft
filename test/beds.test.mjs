// Beds: four sizes in eight colours, placed two long and as wide as their size, broken as a whole, a place to wake up, and sleep flips the day.
import assert from 'node:assert/strict';
import { World, CS, idx } from '../src/js/world.js';
import { B, BED, BED_FOOT, BED_HEADS, BOXES, SOLID } from '../src/js/blocks.js';
import { I, BED_ITEMS, bedOf, itemForBlock, dropsFor, RECIPES } from '../src/js/items.js';
import { bedCells, bedGroup, bedDrops, bedSpawn, isBed, sleepTime } from '../src/js/beds.js';
import { Inventory } from '../src/js/inventory.js';
import { Player } from '../src/js/player.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const G = 30;
function floor() {
  const w = new World(1337, { terrain: 4 });
  for (let cx = -1; cx <= 1; cx++) {
    for (let cz = -1; cz <= 1; cz++) {
      const c = w.generateChunk(cx, cz);
      c.data.fill(0); c.plants.clear();
      for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
      for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
    }
  }
  w.lighting.rebuildAll();
  return w;
}
const place = (w, cells) => { for (const c of cells) w.setBlock(c.x, c.y, c.z, c.id); };
const SIZES = ['single', 'double', 'queen', 'king'];

t('four sizes in eight colours: 32 bed items, each with its blocks', () => {
  assert.equal(BED_ITEMS.length, 32);
  assert.equal(new Set(BED_ITEMS.map((i) => i.bed.color)).size, 8);
  assert.deepEqual([...new Set(BED_ITEMS.map((i) => i.bed.width))].sort(), [1, 2, 3, 4]);
  assert.equal(BED.size, 40, 'a foot and four heads (facing n, e, s, w) per colour');
  for (const color of Object.keys(BED_FOOT)) {
    assert.equal(BED_HEADS[color].length, 4);
    for (const id of BED_HEADS[color]) assert.ok(id > 0 && SOLID[id] === 2 && BOXES.get(id)[0][4] === 0.5, 'half a block high, so you walk up onto it');
  }
  for (const it of BED_ITEMS) assert.equal(it.stack, 16);
});

t('a bed is two long and as wide as its size, the pillow end faces the way you look, and it needs a floor', () => {
  for (const [wi, size] of SIZES.entries()) {
    const spec = bedOf(I['BED_' + size.toUpperCase() + '_RED']);
    assert.equal(spec.width, wi + 1);
    for (let facing = 0; facing < 4; facing++) {
      const w = floor();
      const cells = bedCells(w, 5, G + 1, 5, facing, spec);
      assert.equal(cells.length, 2 * spec.width, size + ' facing ' + facing);
      assert.equal(new Set(cells.map((c) => c.x + ',' + c.z)).size, cells.length, 'no square twice');
      const heads = cells.filter((c) => BED.get(c.id).part === 'head');
      assert.equal(heads.length, spec.width);
      for (const h of heads) assert.equal(BED.get(h.id).facing, facing, 'the pillow is on the side you are facing');
    }
  }
  const w = floor();
  const spec = bedOf(I.BED_DOUBLE_BLUE);
  assert.ok(bedCells(w, 5, G + 1, 5, 0, spec));
  w.setBlock(5, G + 1, 4, B.STONE); // something in the way (the head square, facing north)
  assert.equal(bedCells(w, 5, G + 1, 5, 0, spec), null);
  const w2 = floor();
  w2.setBlock(6, G, 4, B.AIR); // a hole under one square
  assert.equal(bedCells(w2, 5, G + 1, 5, 0, spec), null, 'nothing under one square: no bed');
  const w3 = floor();
  w3.setBlock(6, G + 1, 5, B.GRASS_S); // a tuft of grass: it is replaced
  assert.ok(bedCells(w3, 5, G + 1, 5, 0, spec));
});

t('breaking any square of a bed takes it all apart and gives back the bed; two singles side by side give a double', () => {
  const w = floor();
  place(w, bedCells(w, 4, G + 1, 4, 2, bedOf(I.BED_KING_GREEN)));
  const group = bedGroup(w, 3, G + 1, 5); // (facing south the bed spreads to the west: x = 4, 3, 2, 1)
  assert.equal(group.length, 8, 'the whole king bed');
  assert.deepEqual(bedDrops('green', group.length), [{ item: I.BED_KING_GREEN, n: 1 }]);
  const w2 = floor();
  place(w2, bedCells(w2, 4, G + 1, 4, 2, bedOf(I.BED_SINGLE_PINK)));
  place(w2, bedCells(w2, 5, G + 1, 4, 2, bedOf(I.BED_SINGLE_PINK)));
  const g2 = bedGroup(w2, 4, G + 1, 4);
  assert.equal(g2.length, 4);
  assert.deepEqual(bedDrops('pink', g2.length), [{ item: I.BED_DOUBLE_PINK, n: 1 }], 'worth exactly what they cost: two singles = a double');
  assert.deepEqual(bedDrops('red', 10), [{ item: I.BED_KING_RED, n: 1 }, { item: I.BED_SINGLE_RED, n: 1 }]);
  assert.deepEqual(bedDrops('red', 2), [{ item: I.BED_SINGLE_RED, n: 1 }]);
  const w3 = floor(); // different colours do not join up
  place(w3, bedCells(w3, 4, G + 1, 4, 2, bedOf(I.BED_SINGLE_RED)));
  place(w3, bedCells(w3, 5, G + 1, 4, 2, bedOf(I.BED_SINGLE_BLUE)));
  assert.equal(bedGroup(w3, 4, G + 1, 4).length, 2);
  assert.equal(itemForBlock(BED_FOOT.red), I.BED_SINGLE_RED, 'middle-clicking a bed picks a single of its colour');
  assert.deepEqual(dropsFor(BED_FOOT.red, true), [], 'the blocks themselves drop nothing: the game hands back the bed');
});

t('a bed costs wool and planks in proportion to its width; dye turns a bed another colour', () => {
  const makes = (id) => RECIPES.find((r) => r.out === id);
  for (const [i, size] of SIZES.entries()) {
    const r = makes(I['BED_' + size.toUpperCase() + '_WHITE']);
    assert.equal(r.station, 'table');
    assert.deepEqual(r.ins.map(([, c]) => c), [3 * (i + 1), 3 * (i + 1)]);
    const dye = makes(I['BED_' + size.toUpperCase() + '_BLUE']);
    assert.ok(dye.ins.some(([spec, c]) => !Array.isArray(spec) && spec === I.BLUE_DYE && c === 1), 'a blue dye');
    assert.ok(dye.ins.some(([spec]) => Array.isArray(spec) && spec.includes(I['BED_' + size.toUpperCase() + '_RED']) && spec.length === 8), 'and a bed of any colour');
  }
  const inv = new Inventory();
  inv.add(I.BED_SINGLE_WHITE, 1); inv.add(I.RED_DYE, 1);
  const out = inv.craft(makes(I.BED_SINGLE_RED), { table: true });
  assert.ok(out.ok && inv.count(I.BED_SINGLE_RED) === 1 && inv.count(I.BED_SINGLE_WHITE) === 0 && inv.count(I.RED_DYE) === 0, 'white bed + red dye = red bed');
  for (const [flower, dye] of [['ROSE', 'RED'], ['DANDELION', 'YELLOW'], ['CORNFLOWER', 'BLUE'], ['ORANGE_TULIP', 'ORANGE'], ['ALLIUM', 'PURPLE'], ['PINK_TULIP', 'PINK'], ['OXEYE_DAISY', 'WHITE'], ['FERN', 'GREEN']]) {
    const rec = RECIPES.find((x) => x.out === I[dye + '_DYE']);
    assert.ok(rec && !rec.station && rec.ins[0][0] === B[flower] && rec.n === 2, flower + ' -> ' + dye + ' dye, by hand');
  }
});

t('after a bed is gone, the spot beside it: somewhere to wake up with a floor and room to stand; boxed in gives none', () => {
  const w = floor();
  place(w, bedCells(w, 8, G + 1, 8, 0, bedOf(I.BED_SINGLE_RED)));
  const spot = bedSpawn(w, 8, G + 1, 8);
  assert.ok(spot && Math.abs(spot.y - (G + 1)) < 0.01);
  const p = new Player(w);
  p.pos = { ...spot };
  assert.ok(!p.collides(spot.x, spot.y, spot.z), 'a place you can stand');
  const boxed = floor();
  for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) for (let dy = 1; dy <= 3; dy++) if (dx || dz) boxed.setBlock(8 + dx, G + dy, 8 + dz, B.STONE);
  boxed.setBlock(8, G + 1, 8, BED_FOOT.red);
  assert.equal(bedSpawn(boxed, 8, G + 1, 8), null);
  assert.ok(isBed(boxed, 8, G + 1, 8) && !isBed(boxed, 9, G + 1, 8));
});

t('sleeping flips day and night: the same time of day, twelve hours on', () => {
  assert.deepEqual(sleepTime(0.1, 3), { dayTime: 0.6, dayCount: 3 });
  const next = sleepTime(0.7, 3);
  assert.ok(Math.abs(next.dayTime - 0.2) < 1e-9 && next.dayCount === 4, 'sleeping through the night: it is the next day');
  const day = sleepTime(0.25, 0).dayTime, night = sleepTime(0.75, 0).dayTime;
  assert.ok(day >= 0.5 && night < 0.5, 'noon becomes midnight and midnight becomes noon');
});

console.log('beds: ' + n + ' checks passed');
