// Animals have faces and markings, not one flat colour; and flowers (and other flat plants) are drawn flat, never as little cubes.
import assert from 'node:assert/strict';
import { Pix, ANIMAL_ART } from '../src/js/mobart.js';
import { drawsFlat, isBlockItem, dropsFor, itemForBlock } from '../src/js/items.js';
import { B, PLANT } from '../src/js/blocks.js';
import { paintTile } from '../src/js/tilegen.js';
import { REG } from '../src/js/registry.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const paint = (painter, w, h) => { const p = new Pix(w, h); painter(p); return p; };
const dims = { side: (w, h, d) => [d, h], end: (w, h, d) => [w, h], top: (w, h, d) => [w, d] };

t('every face of every animal part is painted, with real detail (several colours, no empty pixels)', () => {
  const parts = {
    cow: { body: [0.84, 0.78, 1.3], head: [0.58, 0.52, 0.5], leg: [0.24, 0.62, 0.24] }, pig: { body: [0.72, 0.58, 1.0], head: [0.5, 0.46, 0.44], snout: [0.26, 0.2, 0.1], leg: [0.22, 0.34, 0.22] },
    sheep: { body: [0.86, 0.74, 1.1], fleece: [0.86, 0.74, 1.1], naked: [0.6, 0.5, 0.9], head: [0.4, 0.44, 0.46], leg: [0.2, 0.52, 0.2] },
  };
  for (const [animal, list] of Object.entries(parts)) {
    for (const [part, [w, h, d]] of Object.entries(list)) {
      const art = ANIMAL_ART[animal][part];
      for (const kind of ['side', 'end', 'top', 'bottom', 'front']) {
        const painter = art[kind] ?? art.end ?? art.side;
        const [fw, fh] = (dims[kind] ?? dims.end)(w, h, d).map((v) => Math.max(2, Math.round(v * 16)));
        const p = paint(painter, fw, fh);
        assert.ok(p.px.every((c) => c[3] === 255), `${animal} ${part} ${kind}: no see-through gaps`);
        assert.ok(p.colours >= (kind === 'bottom' || (kind === 'top' && part === 'leg') || (part === 'snout' && kind !== 'front') ? 1 : 2), `${animal} ${part} ${kind} has more than one colour`); // (the underside is plain)
      }
    }
  }
  for (const [animal, key] of [['cow', 'udder'], ['cow', 'tail'], ['cow', 'ear'], ['cow', 'horn'], ['pig', 'ear'], ['pig', 'tail'], ['sheep', 'ear']]) assert.ok(paint(ANIMAL_ART[animal][key], 4, 6).colours >= 1, animal + ' ' + key);
});

t('a cow has patches, a white blaze, a pink muzzle with nostrils, eyes and hooves', () => {
  const side = paint(ANIMAL_ART.cow.body.side, 21, 12), white = (c) => c[0] > 220 && c[1] > 215;
  const patches = side.px.filter(white).length;
  assert.ok(patches > 25 && patches < side.px.length * 0.5, 'white patches on a brown coat: ' + patches);
  assert.ok(side.colours > 8, 'speckled fur: ' + side.colours + ' tones');
  const face = paint(ANIMAL_ART.cow.head.front, 9, 8);
  assert.ok(white(face.get(4, 1)), 'a white blaze');
  assert.ok(face.get(3, 6)[0] > 200 && face.get(3, 6)[2] > 140, 'a pink muzzle');
  assert.deepEqual(face.get(1, 3).slice(0, 3), [28, 24, 22], 'eyes');
  const leg = paint(ANIMAL_ART.cow.leg.side, 4, 10);
  assert.ok(leg.get(1, 9)[0] < 60 && leg.get(1, 4)[0] > 90, 'dark hooves under brown legs');
});

t('a pig has eyes and a lighter snout with nostrils; a sheep has curly wool, a dark face with eyes, and a bare pink body once sheared', () => {
  const face = paint(ANIMAL_ART.pig.head.front, 8, 7);
  assert.deepEqual(face.get(2, 2).slice(0, 3), [30, 24, 26], 'a pig\'s eye');
  const snout = paint(ANIMAL_ART.pig.snout.front, 4, 3);
  assert.ok(snout.colours >= 2, 'nostrils');
  const wool = paint(ANIMAL_ART.sheep.fleece.side, 18, 12);
  assert.ok(wool.colours >= 4, 'curls and highlights in the wool');
  assert.ok(wool.px.every((c) => c[0] > 200), 'but still white');
  const sheepFace = paint(ANIMAL_ART.sheep.head.front, 6, 7);
  assert.ok(sheepFace.get(3, 4)[0] < 160, 'a dark face');
  const bare = paint(ANIMAL_ART.sheep.naked.side, 14, 8);
  assert.ok(bare.px.every((c) => c[0] > 180) && bare.px.some((c) => c[2] < 180), 'pinkish skin under the wool');
});

t('a texture is the right way up and the right size for a GL texture (bottom row first)', () => {
  const p = new Pix(2, 2, [0, 0, 0]);
  p.set(0, 0, [255, 0, 0]);
  const d = p.data();
  assert.equal(d.length, 16);
  assert.deepEqual([...d.slice(8, 12)], [255, 0, 0, 255], 'the top-left pixel is in the last row');
});

t('flowers, ferns, saplings and grass tufts are drawn flat; blocks, slabs, stairs and chests are not', () => {
  for (const k of ['rose', 'dandelion', 'cornflower', 'orange_tulip', 'allium', 'pink_tulip', 'oxeye_daisy', 'fern', 'dead_bush', 'young_oak', 'grass_s', 'wheat_l']) assert.ok(drawsFlat(B[k.toUpperCase()]), k + ' is flat');
  for (const k of ['stone', 'planks', 'planks_slab', 'planks_stairs', 'chest', 'wool', 'glass_pane', 'bed_red_foot', 'leaves']) assert.ok(!drawsFlat(B[k.toUpperCase()]), k + ' is a solid thing');
  assert.ok(isBlockItem(B.ROSE) && drawsFlat(B.ROSE), 'the rose is an item that is also a block, and it is drawn flat');
  // what a flower looks like as an item is its own tile, which has real art
  for (const k of ['rose', 'dandelion', 'cornflower', 'orange_tulip', 'allium', 'pink_tulip', 'oxeye_daisy', 'fern']) {
    const name = REG.blockById.get(B[k.toUpperCase()]).side;
    const px = paintTile(name, REG.tileNames.indexOf(name), REG.tiles, {});
    let opaque = 0, clear = 0;
    for (let i = 3; i < px.length; i += 4) px[i] > 0 ? opaque++ : clear++;
    assert.ok(opaque > 20 && clear > 100, k + ' is a small picture with see-through gaps, not a square: ' + opaque + ' / ' + clear);
  }
});

t('what plants drop makes sense: a flower is a flower, grass gives seeds, saplings give saplings, a dead bush a stick, never a block that is not that thing', () => {
  assert.deepEqual(dropsFor(B.ROSE, true), [{ id: B.ROSE, n: 1 }]);
  assert.equal(itemForBlock(B.ROSE), B.ROSE);
  for (const k of ['grass_s', 'grass_m', 'grass_l']) for (const d of dropsFor(B[k.toUpperCase()], true, () => 0)) assert.ok(!PLANT[d.id] && !isBlockItem(d.id), k + ' gives seeds, an item');
  for (const k of ['young_oak', 'young_birch', 'young_spruce', 'young_apple']) for (const d of dropsFor(B[k.toUpperCase()], true)) assert.ok(!isBlockItem(d.id), k + ' gives its sapling item');
  for (const d of dropsFor(B.DEAD_BUSH, true, () => 0)) assert.ok(!isBlockItem(d.id), 'a dead bush gives sticks');
  for (const k of ['torch_floor', 'torch_e', 'torch_w']) for (const d of dropsFor(B[k.toUpperCase()], true)) assert.ok(!isBlockItem(d.id), 'a torch block gives the torch item');
  for (const k of ['wheat_s', 'wheat_m', 'wheat_l']) for (const d of dropsFor(B[k.toUpperCase()], true, () => 0)) assert.ok(!isBlockItem(d.id), 'crops give wheat and seeds');
  for (const d of dropsFor(B.DOOR_B_X_C, true)) assert.ok(!isBlockItem(d.id), 'a door block gives the door item');
  for (const d of dropsFor(B.IRON_DOOR_T_Z_O, true)) assert.ok(!isBlockItem(d.id), 'and so does an iron door');
  assert.ok(dropsFor(B.BED_RED_FOOT, true).length === 0, 'a bed square gives nothing itself: the whole bed is handed back as the bed item');
});

console.log('animals: ' + n + ' checks passed');
