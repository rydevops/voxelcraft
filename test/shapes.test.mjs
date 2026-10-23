// Stairs and doors: collision (walk up stairs, land on a half-height step, doors block only while shut), meshing, drops, recipes.
import assert from 'node:assert/strict';
import { World, CS, idx } from '../src/js/world.js';
import { Player, raycast } from '../src/js/player.js';
import { meshChunk } from '../src/js/mesher.js';
import { B, STAIRS, DOOR, DOOR_PLACE, BOXES, SOLID, SHAPE, BASE_OF } from '../src/js/blocks.js';
import { I, RECIPES, dropsFor, itemForBlock, isDoorItem, smeltFor, specIds } from '../src/js/items.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

// a flat stone floor at y = 30 with clear air above, in chunks (0,0) .. (1,1)
const Y = 30;
function flatWorld() {
  const w = new World(1337);
  for (let cx = 0; cx <= 1; cx++) for (let cz = 0; cz <= 1; cz++) {
    const c = w.generateChunk(cx, cz);
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) for (let y = 0; y < 64; y++) c.data[idx(x, y, z)] = y < Y ? B.STONE : y === Y ? B.STONE : B.AIR;
    c.recomputeTop();
  }
  return w;
}
const run = (player, seconds, input) => { for (let i = 0; i < seconds * 60; i++) player.update(1 / 60, input); };
// yaw that walks towards +x / -x / +z / -z
const YAW = { east: -Math.PI / 2, west: Math.PI / 2, south: Math.PI, north: 0 };

t('the data: stairs come in four ways round, doors in eight states, and they link up', () => {
  for (const [base, v] of STAIRS) { assert.equal(v.length, 4); for (const id of v) { assert.ok(id > 0 && SHAPE[id] === 1 && SOLID[id] === 2); assert.equal(BASE_OF[id], base); assert.equal(BOXES.get(id).length, 2); } }
  assert.equal(STAIRS.size, 9, 'nine kinds of stairs: oak, cobblestone, brick, stone brick, sandstone, birch, spruce and two roofs');
  assert.equal(DOOR.size, 16, 'a wooden and an iron door, eight blocks each');
  for (const [id, d] of DOOR) { assert.equal(DOOR.get(d.partner).partner, id); assert.equal(DOOR.get(d.toggled).toggled, id); assert.notEqual(DOOR.get(d.partner).top, d.top); assert.equal(DOOR.get(d.toggled).open, !d.open); assert.equal(SOLID[id], d.open ? 0 : 1, 'a door blocks only while shut'); }
  assert.deepEqual(Object.keys(DOOR_PLACE).sort(), ['x', 'z']);
});

t('crafting: stairs from planks / cobblestone / brick, doors from planks; glass is smelted from sand', () => {
  const makes = (id) => RECIPES.find((r) => r.out === id);
  for (const [out, from] of [[B.PLANKS_STAIRS, B.PLANKS], [B.COBBLE_STAIRS, B.COBBLE], [B.BRICK_STAIRS, B.BRICK], [I.DOOR, B.PLANKS]]) {
    const r = makes(out);
    assert.ok(r && r.n >= 3 && r.station === 'table', 'a table recipe exists for ' + out);
    assert.ok(r.ins.some(([spec, c]) => specIds(spec).includes(from) && c >= 6), 'made from ' + from);
  }
  assert.equal(smeltFor(B.SAND)?.out, B.GLASS, 'sand smelts to glass in a furnace');
});

t('stairs turned another way drop and pick as the usual stairs; a door drops the door item', () => {
  const ids = STAIRS.get(B.PLANKS_STAIRS);
  for (const id of ids) { assert.deepEqual(dropsFor(id, true), [{ id: B.PLANKS_STAIRS, n: 1 }]); assert.equal(itemForBlock(id), B.PLANKS_STAIRS); }
  for (const [id, d] of DOOR) { const item = d.kind === 'iron' ? I.IRON_DOOR : I.DOOR; assert.equal(itemForBlock(id), item); assert.deepEqual(dropsFor(id, true).map((x) => x.id), [item]); }
  assert.ok(isDoorItem(I.DOOR) && isDoorItem(I.IRON_DOOR) && !isDoorItem(B.PLANKS));
});

t('walking up a staircase: each step is half a block, you climb it without jumping', () => {
  const w = flatWorld();
  // stairs rising to the east, one block up every cell: the back (tall side) of each is on the east
  const east = STAIRS.get(B.PLANKS_STAIRS)[1];
  for (let k = 0; k < 4; k++) { for (let y = Y + 1; y <= Y + 1 + k; y++) w.setBlock(6 + k, y, 6, y === Y + 1 + k ? east : B.STONE); }
  const p = new Player(w);
  p.pos = { x: 4.5, y: Y + 1, z: 6.5 };
  p.yaw = YAW.east;
  run(p, 0.3, {});
  assert.ok(p.onGround, 'standing on the floor first');
  let peak = 0, stuck = false;
  for (let i = 0; i < 100; i++) { p.update(1 / 60, { forward: true }); peak = Math.max(peak, p.pos.y); if (p.collides(p.pos.x, p.pos.y, p.pos.z)) stuck = true; }
  assert.ok(p.pos.x > 9.2, 'walked up all four stairs (x = ' + p.pos.x.toFixed(2) + ')');
  assert.ok(peak >= Y + 4.4, 'and ended up four blocks higher (peak y = ' + peak.toFixed(2) + ')');
  assert.ok(!stuck, 'never stuck inside a block');
});

t('landing on a stair: you stand on the half-height step, not floating on top of the cell', () => {
  const w = flatWorld();
  w.setBlock(6, Y + 1, 6, STAIRS.get(B.PLANKS_STAIRS)[0]);
  const p = new Player(w);
  p.pos = { x: 6.5, y: Y + 6, z: 6.9 }; // over the low front half of a stair whose tall back is to the north
  run(p, 2, {});
  assert.ok(p.onGround);
  assert.ok(Math.abs(p.pos.y - (Y + 1.5)) < 0.01, 'on the lower step, half a block up (y = ' + p.pos.y.toFixed(3) + ')');
  // and the tall back really is a wall: walking north into it from the low step climbs it (it is only half a block higher)
  p.yaw = YAW.north;
  let peak = 0;
  for (let i = 0; i < 40; i++) { p.update(1 / 60, { forward: true }); peak = Math.max(peak, p.pos.y); }
  assert.ok(Math.abs(peak - (Y + 2)) < 0.01, 'then up the upper step, a block above the floor (peak y = ' + peak.toFixed(3) + ')');
});

t('a stair is solid only where it is drawn: you can walk under the tall back', () => {
  const w = flatWorld();
  const north = STAIRS.get(B.PLANKS_STAIRS)[0];
  w.setBlock(6, Y + 1, 6, north);
  const p = new Player(w);
  // the low half (south) leaves headroom above it for a 1.8 tall body only above the lower slab
  assert.ok(p.collides(6.5, Y + 1.2, 6.2), 'inside the tall back');
  assert.ok(!p.collides(6.5, Y + 1.5, 6.8), 'standing on the low front half is fine');
  assert.ok(p.collides(6.5, Y + 1.2, 6.8), 'but not inside the low slab');
});

t('doors: a shut door blocks you, an open one lets you through, and both can be aimed at', () => {
  const w = flatWorld();
  const [lo, hi] = DOOR_PLACE.x; // a plate across the x direction, so it blocks walking north-south
  w.setBlock(6, Y + 1, 6, lo); w.setBlock(6, Y + 2, 6, hi);
  const p = new Player(w);
  p.pos = { x: 6.5, y: Y + 1, z: 8.5 };
  p.yaw = YAW.north;
  run(p, 3, { forward: true });
  assert.ok(p.pos.z > 7, 'stopped by the shut door (z = ' + p.pos.z.toFixed(2) + ')');
  for (const [dy, id] of [[1, lo], [2, hi]]) w.setBlock(6, Y + dy, 6, DOOR.get(id).toggled);
  run(p, 3, { forward: true });
  assert.ok(p.pos.z < 5.5, 'walked through the open door (z = ' + p.pos.z.toFixed(2) + ')');
  const hit = raycast(w, { x: 6.5, y: Y + 1.5, z: 8.5 }, { x: 0, y: 0, z: -1 }, 6);
  assert.ok(hit && hit.id === DOOR.get(lo).toggled, 'an open door can still be aimed at (to close it)');
});

t('meshing: stairs and doors produce valid geometry, hidden faces are left out', () => {
  const w = flatWorld();
  const north = STAIRS.get(B.PLANKS_STAIRS)[0];
  w.setBlock(6, Y + 1, 6, north); w.setBlock(8, Y + 1, 8, DOOR_PLACE.x[0]); w.setBlock(8, Y + 2, 8, DOOR_PLACE.x[1]);
  const flat = meshChunk(w, w.getChunk(0, 0));
  const q = flat.solid.positions.length / 12;
  assert.ok(Math.max(...flat.solid.indices) < flat.solid.positions.length / 3 && flat.solid.uvs.every(Number.isFinite));
  // one stair on a stone floor: the floor's top face under it is hidden, the stair adds the quads of its two boxes minus the faces on the floor
  const bare = new World(1337); const c = bare.generateChunk(0, 0);
  for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) for (let y = 0; y < 64; y++) c.data[idx(x, y, z)] = y <= Y ? B.STONE : B.AIR;
  c.recomputeTop();
  const base = meshChunk(bare, c).solid.positions.length / 12;
  bare.setBlock(6, Y + 1, 6, north);
  const withStair = meshChunk(bare, c).solid.positions.length / 12;
  assert.ok(withStair - base >= 6 && withStair - base <= 12, 'a stair is a handful of quads (' + (withStair - base) + ')');
  bare.setBlock(6, Y + 1, 6, B.AIR);
  const before = meshChunk(bare, c).solid.positions.length / 12;
  bare.setBlock(8, Y + 1, 8, DOOR_PLACE.x[0]); bare.setBlock(8, Y + 2, 8, DOOR_PLACE.x[1]);
  const withDoor = meshChunk(bare, c).solid.positions.length / 12;
  assert.ok(withDoor - before >= 8 && withDoor - before <= 12, 'a door is two thin plates (' + (withDoor - before) + ' quads)');
  assert.ok(q > 0);
});

console.log(`shapes: ${n} checks passed`);
