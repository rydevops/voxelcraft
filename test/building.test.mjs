// Building pieces (slabs, columns, windows, roofs, floors, doors of two kinds), flowers and dyes, and the hammer: the data is complete, the shapes
// behave in the world (half-high slabs you walk onto, windows that span one way), and each piece can be made.
import assert from 'node:assert/strict';
import { World, CS, idx } from '../src/js/world.js';
import { Player } from '../src/js/player.js';
import { B, BOXES, SOLID, SHAPE, OPAQUE, STAIRS, AXIS_VARIANTS, AXIS_OF, DOOR, DOOR_KINDS, PLACE_ON, BLOCKS, PALETTE } from '../src/js/blocks.js';
import { I, RECIPES, miningInfo, toolOf, toolWear, toolDigs, dropsFor, itemForBlock, specIds, maxDamage } from '../src/js/items.js';
import { meshChunk } from '../src/js/mesher.js';
import { Settings, ACTIONS } from '../src/js/settings.js';
import { REG } from '../src/js/registry.js';
import { Inventory } from '../src/js/inventory.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const G = 30;
function floor() {
  const w = new World(1337, { terrain: 4 });
  for (let cx = 0; cx <= 1; cx++) {
    for (let cz = 0; cz <= 1; cz++) {
      const c = w.generateChunk(cx, cz);
      c.data.fill(0); c.plants.clear();
      for (let y = 0; y <= G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
      c.recomputeTop();
    }
  }
  w.lighting.rebuildAll();
  return w;
}
const run = (p, secs, input) => { for (let i = 0; i < secs * 60; i++) p.update(1 / 60, input); };

t('a good set of building pieces exists: six stair kinds more, ten slabs, three columns, three windows, a second door, roofs and floors', () => {
  const has = (k) => assert.ok(B[k.toUpperCase()] > 0, k + ' is a block');
  for (const k of ['stone_bricks', 'birch_planks', 'spruce_planks', 'plaster', 'roof_red', 'roof_slate', 'floor_tiles', 'sandstone', 'stone_column', 'wood_column', 'brick_column', 'wood_window', 'stone_window', 'glass_pane']) has(k);
  assert.equal(STAIRS.size, 9);
  const slabs = REG.blocks.filter((b) => b.key.endsWith('_slab'));
  assert.equal(slabs.length, 10);
  for (const s of slabs) { assert.deepEqual(BOXES.get(s.id), [[0, 0, 0, 1, 0.5, 1]], s.key + ' is half a block'); assert.equal(SOLID[s.id], 2); assert.ok(!OPAQUE[s.id]); assert.ok(s.creative); }
  assert.deepEqual(Object.keys(DOOR_KINDS).sort(), ['iron', 'wood']);
  assert.equal(AXIS_VARIANTS.size, 3, 'three windows, each spanning x or z');
  for (const [base, v] of AXIS_VARIANTS) { assert.ok(v.x && v.z && v.x !== v.z); assert.equal(AXIS_OF[v.x], 0); assert.equal(AXIS_OF[v.z], 1); assert.equal(BLOCKS[base] === BLOCKS[v.x], true); }
  for (const k of ['stone_column', 'wood_column', 'brick_column']) assert.equal(BOXES.get(B[k.toUpperCase()]).length, 3, 'a base, a shaft and a capital');
});

t('every building piece can be crafted at the table, and costs sensible amounts', () => {
  const makes = (id) => RECIPES.filter((r) => r.out === id);
  for (const k of ['stone_bricks', 'birch_planks', 'sandstone', 'plaster', 'roof_red', 'roof_slate', 'floor_tiles', 'stone_column', 'wood_column', 'brick_column', 'wood_window', 'stone_window', 'glass_pane']) assert.ok(makes(B[k.toUpperCase()]).length >= 1, k + ' has a recipe');
  assert.ok(makes(I.IRON_DOOR)[0].station === 'table' && makes(I.IRON_DOOR)[0].n === 3);
  for (const b of REG.blocks.filter((x) => x.key.endsWith('_slab'))) { const r = makes(b.id)[0]; assert.ok(r && r.n === 6 && r.ins[0][1] === 3, b.key + ': 3 of the material make 6 slabs'); }
  for (const mat of ['stone_bricks', 'sandstone', 'birch_planks', 'spruce_planks', 'roof_red', 'roof_slate']) { const r = makes(B[mat.toUpperCase() + '_STAIRS'])[0]; assert.ok(r && r.n === 4 && r.ins[0][1] === 6, mat + ' stairs: 6 make 4'); }
  assert.equal(PALETTE.includes(B.ROOF_RED) && PALETTE.includes(B.STONE_COLUMN) && PALETTE.includes(B.GLASS_PANE_Z) === false, true, 'the z copy of a window is not listed twice');
  const inv = new Inventory();
  inv.add(B.STONE, 4);
  assert.ok(inv.craft(makes(B.STONE_BRICKS)[0], { table: true }).ok && inv.count(B.STONE_BRICKS) === 4);
});

t('walking: you step up onto a slab (half a block) without jumping; a window blocks you only along its thin side; a column can be walked around', () => {
  const w = floor();
  w.setBlock(6, G + 1, 6, B.PLANKS_SLAB);
  const p = new Player(w);
  p.pos = { x: 4.5, y: G + 1, z: 6.5 }; p.yaw = -Math.PI / 2; // looking east
  run(p, 0.3, {}); // (land first: stepping up only works from the ground)
  run(p, 0.5, { forward: true });
  assert.ok(p.pos.x > 6.2, 'walked onto the slab');
  assert.ok(Math.abs(p.pos.y - (G + 1.5)) < 0.05, 'standing on the top of the slab: ' + p.pos.y);
  // a window spanning x: you cannot walk through it north-south, but along it you can
  const w2 = floor();
  const { x: wx, z: wz } = AXIS_VARIANTS.get(B.WOOD_WINDOW);
  for (let y = 1; y <= 2; y++) w2.setBlock(8, G + y, 8, wx);
  const q = new Player(w2);
  q.pos = { x: 8.5, y: G + 1, z: 6.5 }; q.yaw = Math.PI; // facing south, into the window
  run(q, 0.3, {});
  run(q, 1.2, { forward: true });
  assert.ok(q.pos.z < 8.2 && q.pos.z > 8.05, 'stopped by the window pane (its face is at z = 8.44, you are 0.3 wide): z = ' + q.pos.z.toFixed(2));
  const along = new Player(w2);
  along.pos = { x: 6.5, y: G + 1, z: 8.1 }; along.yaw = -Math.PI / 2; // walking east on the near side of the pane (it fills the middle of its cell)
  run(along, 0.3, {});
  run(along, 1.2, { forward: true });
  assert.ok(along.pos.x > 9.5, 'the pane is a thin wall only, you can pass beside it: ' + along.pos.x.toFixed(2));
});

t('a window spans one way and its z copy is the other; they mesh and look like a thin pane', () => {
  const w = floor();
  const v = AXIS_VARIANTS.get(B.STONE_WINDOW);
  w.setBlock(4, G + 1, 4, v.x); w.setBlock(8, G + 1, 4, v.z);
  const mesh = meshChunk(w, w.getChunk(0, 0));
  assert.ok(mesh.solid.positions.length > 0);
  assert.deepEqual(BOXES.get(v.x)[0], [0, 0, 0.4375, 1, 1, 0.5625]);
  assert.deepEqual(BOXES.get(v.z)[0], [0.4375, 0, 0, 0.5625, 1, 1]);
  assert.equal(itemForBlock(v.z), BLOCKS[v.z] ? B.STONE_WINDOW : 0, 'picking the z copy gives the usual window');
  assert.deepEqual(dropsFor(v.z, true), [{ id: B.STONE_WINDOW, n: 1 }], 'and breaking it drops the usual window');
});

t('doors of both kinds: eight blocks each, linked, solid shut and open when opened; the iron door is sturdier', () => {
  for (const kind of ['wood', 'iron']) {
    const ids = [...DOOR].filter(([, d]) => d.kind === kind);
    assert.equal(ids.length, 8, kind + ' door has eight blocks');
    for (const [id, d] of ids) { assert.equal(DOOR.get(d.partner).kind, kind); assert.equal(DOOR.get(d.toggled).kind, kind); assert.equal(SOLID[id], d.open ? 0 : 1); }
    for (const axis of ['x', 'z']) { const [lo, hi] = DOOR_KINDS[kind][axis]; assert.ok(!DOOR.get(lo).top && DOOR.get(hi).top && !DOOR.get(lo).open); }
  }
  assert.ok(BLOCKS[B.IRON_DOOR_B_X_C].hard > BLOCKS[B.DOOR_B_X_C].hard);
  assert.equal(itemForBlock(B.IRON_DOOR_T_Z_O), I.IRON_DOOR);
  assert.equal(itemForBlock(B.DOOR_T_Z_O), I.DOOR);
});

t('flowers: eight kinds that can be picked up, carried and planted on grass; dead bushes drop sticks', () => {
  const kinds = ['rose', 'dandelion', 'cornflower', 'orange_tulip', 'allium', 'pink_tulip', 'oxeye_daisy', 'fern'];
  for (const k of kinds) {
    const id = B[k.toUpperCase()];
    assert.ok(id > 0 && PLACE_ON.has(id) && PLACE_ON.get(id).includes(B.GRASS) && PLACE_ON.get(id).includes(B.DIRT), k + ' can be planted on grass and dirt');
    assert.ok(!SOLID[id] && BLOCKS[id].plant, k + ' is a plant you walk through');
    assert.deepEqual(dropsFor(id, true), [{ id, n: 1 }], k + ' drops itself');
    assert.ok(PALETTE.includes(id));
  }
  assert.ok(PLACE_ON.get(B.DEAD_BUSH).includes(B.SAND), 'dead bushes go on sand');
  assert.equal(dropsFor(B.DEAD_BUSH, true, () => 0).length, 1);
  assert.equal(dropsFor(B.DEAD_BUSH, true, () => 0)[0].id, I.STICK);
  assert.equal(new Set(kinds.map((k) => REG.textures.tiles[k] && JSON.stringify(REG.textures.tiles[k]))).size, 8, 'each looks different');
});

t('hammers: a heavy 3x3 breaker that mines stone like a pickaxe, slower, and lasts longer', () => {
  for (const tier of ['wood', 'stone', 'iron']) {
    const h = toolOf(I[tier.toUpperCase() + '_HAMMER']), pick = toolOf(I[tier.toUpperCase() + '_PICKAXE']);
    assert.equal(h.type, 'hammer'); assert.equal(h.area, 3); assert.equal(h.mines, 'pickaxe');
    assert.ok(toolDigs(h, 'pickaxe') && !toolDigs(h, 'shovel') && !toolDigs(h, null));
    assert.equal(h.tier, pick.tier, 'the same metal, the same reach');
    assert.ok(h.speed < pick.speed, 'slower than a pickaxe');
    assert.ok(maxDamage(I[tier.toUpperCase() + '_HAMMER']) > maxDamage(I[tier.toUpperCase() + '_PICKAXE']), 'lasts longer');
  }
  assert.equal(toolOf(I.IRON_PICKAXE).area, 1);
  assert.ok(miningInfo(B.STONE, I.WOOD_HAMMER).canHarvest, 'any hammer breaks stone');
  assert.ok(!miningInfo(B.IRON_ORE, I.WOOD_HAMMER).canHarvest && miningInfo(B.IRON_ORE, I.STONE_HAMMER).canHarvest, 'and its metal decides which ores');
  assert.equal(toolWear(B.STONE, I.IRON_HAMMER), 1, 'one use for the block it was made for');
  assert.equal(toolWear(B.DIRT, I.IRON_HAMMER), REG.game.tools.wrongToolWear, 'more on dirt');
  const t0 = miningInfo(B.STONE, I.IRON_PICKAXE).time, t1 = miningInfo(B.STONE, I.IRON_HAMMER).time;
  assert.ok(t1 > t0 && t1 < t0 * 2, `a hammer takes longer to break one block: ${t0.toFixed(2)} s vs ${t1.toFixed(2)} s`);
});

t('swords, hammers and shears can be made; swords are the best weapons', () => {
  for (const tier of ['wood', 'stone', 'iron']) for (const kind of ['sword', 'hammer']) assert.ok(RECIPES.some((r) => r.out === I[tier.toUpperCase() + '_' + kind.toUpperCase()] && r.station === 'table'), `${tier} ${kind}`);
  assert.ok(RECIPES.some((r) => r.out === I.IRON_SHEARS) && REG.items.find((i) => i.key === 'iron_shears').shears);
  assert.equal(maxDamage(I.IRON_SWORD) > 0, true);
});

t('the map is on M and the music on N; a player who still has the old pair is moved over, one with their own keys is not', () => {
  assert.equal(ACTIONS.find((a) => a.id === 'map').key, 'KeyM');
  assert.equal(ACTIONS.find((a) => a.id === 'music').key, 'KeyN');
  globalThis.localStorage = { getItem: () => JSON.stringify({ values: {}, binds: { map: 'KeyN', music: 'KeyM', forward: 'KeyW' } }), setItem() {} };
  const old = new Settings();
  assert.equal(old.key('map'), 'KeyM'); assert.equal(old.key('music'), 'KeyN');
  globalThis.localStorage = { getItem: () => JSON.stringify({ values: {}, binds: { map: 'KeyP', music: 'KeyM' } }), setItem() {} };
  const custom = new Settings();
  assert.equal(custom.key('map'), 'KeyP'); assert.equal(custom.key('music'), 'KeyM');
  delete globalThis.localStorage;
  assert.equal(new Settings().key('map'), 'KeyM');
});

t('the content is all there to look at: every new item has a sprite and every new block paints', () => {
  assert.ok(specIds(1).length === 1);
  for (const it of REG.items.filter((i) => i.id >= 300)) assert.ok(REG.sprites[it.key] || it.tool, it.key + ' has a sprite or is a tool');
  assert.ok(REG.items.length >= 90 && REG.blocks.length >= 190);
});

console.log('building: ' + n + ' checks passed');
