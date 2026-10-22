// Water flow, tree felling, step-assist, fall damage and grass spreading. Run with: npm test
import assert from 'node:assert/strict';
import { B, IS_WATER, WATER_LEVEL, TILLS_INTO } from '../src/js/blocks.js';
import { World, CS, idx } from '../src/js/world.js';
import { WaterSim } from '../src/js/water.js';
import { Player } from '../src/js/player.js';
import { findFallingTree, removeTree, landTree, shatterTree, fallDirection, landingCell } from '../src/js/physics.js';
import { shatterDrops, I } from '../src/js/items.js';
import { growPlants, trySpreadGrass, spreadGrass, updateHydration } from '../src/js/plants.js';
import { GravitySim } from '../src/js/gravity.js';

// A flat test arena: stone up to y=29, grass at y=30, air above, 3x3 chunks around the origin
const G = 30;
function arena(seed = 1) {
  const w = new World(seed);
  for (let cx = -1; cx <= 1; cx++) for (let cz = -1; cz <= 1; cz++) {
    const c = w.generateChunk(cx, cz);
    c.data.fill(0);
    c.plants.clear();
    for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
  }
  return w;
}
const level = (w, x, y, z) => { const id = w.getBlock(x, y, z); return IS_WATER[id] ? WATER_LEVEL[id] : 0; };

// ======================= water =======================
{
  const w = arena();
  const sim = new WaterSim(w);
  w.setBlock(8, G + 1, 8, B.WATER);
  assert.ok(sim.settle() < 100, 'flow settles');
  assert.equal(level(w, 8, G + 1, 8), 7, 'the source stays a source');
  for (let d = 1; d <= 6; d++) assert.equal(level(w, 8 + d, G + 1, 8), 7 - d, `level ${7 - d} at distance ${d}`);
  assert.equal(level(w, 8 + 7, G + 1, 8), 0, 'it stops spreading after 6 blocks');
  assert.equal(level(w, 8 + 3, G + 1, 8 + 3), 1, 'spreads in all four directions (diamond shaped)');
  assert.equal(level(w, 8 + 4, G + 1, 8 + 3), 0);
  assert.equal(w.getBlock(8, G + 2, 8), B.AIR, 'water spreads on the same level, not upwards');
  // removing the source makes the stream retreat completely
  w.setBlock(8, G + 1, 8, B.AIR);
  sim.settle();
  let wet = 0;
  for (let x = 0; x < 16; x++) for (let z = 0; z < 16; z++) if (level(w, x, G + 1, z)) wet++;
  assert.equal(wet, 0, 'all flowing water dries up without a source');
}
{ // walls stop it; it flows around them
  const w = arena();
  const sim = new WaterSim(w);
  for (let z = 4; z <= 12; z++) w.setBlock(10, G + 1, z, B.STONE);
  w.setBlock(8, G + 1, 8, B.WATER);
  sim.settle();
  assert.equal(level(w, 10, G + 1, 8), 0, 'no water inside a wall');
  assert.equal(level(w, 9, G + 1, 8), 6, 'water reaches the wall');
  assert.equal(level(w, 11, G + 1, 8), 0, 'and does not get through it');
}
{ // dripping down a hill: a plateau next to a drop
  const w = arena();
  const sim = new WaterSim(w);
  for (let x = 12; x < 16; x++) for (let z = 0; z < 16; z++) for (let y = G - 4; y <= G; y++) w.setBlock(x, y, z, B.AIR); // a 4-deep step down
  sim.settle();
  w.setBlock(10, G + 1, 8, B.WATER);
  sim.settle();
  assert.equal(level(w, 11, G + 1, 8), 6, 'spreads along the plateau');
  assert.equal(level(w, 12, G + 1, 8), 5, 'reaches the edge');
  assert.equal(level(w, 13, G + 1, 8), 0, 'does not hover sideways in mid-air beyond the edge');
  for (let y = G; y >= G - 3; y--) assert.ok(level(w, 12, y, 8) > 0, `falls down the drop at y=${y}`);
  assert.ok(level(w, 12, G - 4, 8) > 0 && w.getBlock(12, G - 5, 8) === B.STONE, 'lands on the lower ground');
  assert.ok(level(w, 13, G - 4, 8) > 0, 'and spreads out at the bottom');
}
{ // a trench dug next to a lake fills up
  const w = arena();
  const sim = new WaterSim(w);
  for (let x = 4; x < 12; x++) for (let z = 4; z < 12; z++) w.setBlock(x, G, z, B.WATER); // a lake sitting in the grass layer
  sim.settle();
  w.setBlock(3, G, 8, B.AIR); // dig the bank
  w.setBlock(2, G, 8, B.AIR);
  sim.settle();
  assert.ok(level(w, 3, G, 8) > 0 && level(w, 2, G, 8) > 0, 'water runs into the trench');
}

// ======================= trees =======================
function plantTree(w, x, z, trunk = 5) {
  for (let y = G + 1; y <= G + trunk; y++) w.setBlock(x, y, z, B.LOG);
  for (let y = G + trunk - 2; y <= G + trunk + 1; y++) {
    const r = y >= G + trunk ? 1 : 2;
    for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
      if (w.getBlock(x + dx, y, z + dz) === B.AIR) w.setBlock(x + dx, y, z + dz, B.LEAVES);
    }
  }
}
const count = (w, id) => { let n = 0; for (const c of w.chunks.values()) for (const b of c.data) if (b === id) n++; return n; };
{
  const w = arena();
  plantTree(w, 8, 8, 5);
  const logs0 = count(w, B.LOG), leaves0 = count(w, B.LEAVES);
  w.setBlock(8, G + 1, 8, B.AIR); // chop the bottom log
  const tree = findFallingTree(w, 8, G + 1, 8);
  assert.equal(tree.logs.length, 4, 'the four logs above the cut fall');
  assert.equal(tree.leaves.length, leaves0, 'all the leaves fall with it');
  removeTree(w, tree);
  assert.equal(count(w, B.LOG), 0); assert.equal(count(w, B.LEAVES), 0);
  const dir = fallDirection(8, 8, 3, 8); // player to the west: tree falls east
  assert.deepEqual(dir, { dx: 1, dz: 0 });
  const { placed, lost } = landTree(w, tree, 8, G + 1, 8, dir.dx, dir.dz);
  assert.equal(placed.filter((p) => p.id === B.LOG).length + lost.filter((p) => p.id === B.LOG).length, 4, 'every log is accounted for');
  const logs = placed.filter((p) => p.id === B.LOG);
  assert.ok(logs.length >= 4, 'the trunk lands intact');
  assert.deepEqual(logs.map((p) => p.x).sort((a, b) => a - b), [9, 10, 11, 12], 'the trunk lies in a line pointing away from the player');
  assert.ok(logs.every((p) => p.z === 8 && p.y === G + 1), 'resting on the ground, not floating');
  for (const p of placed) assert.equal(w.getBlock(p.x, p.y, p.z), p.id, 'placed into the world');
  assert.ok(count(w, B.LEAVES) > 0, 'leaves come down with it');
}
{ // chopping a log half-way up only drops the top
  const w = arena();
  plantTree(w, 8, 8, 6);
  w.setBlock(8, G + 3, 8, B.AIR); // third log
  const tree = findFallingTree(w, 8, G + 3, 8);
  assert.equal(tree.logs.length, 3, 'only the logs above fall');
  assert.equal(w.getBlock(8, G + 1, 8), B.LOG, 'the stump stays');
  assert.equal(w.getBlock(8, G + 2, 8), B.LOG);
}
{ // a neighbouring tree's leaves stay if its own trunk still holds them
  const w = arena();
  plantTree(w, 6, 8, 5);
  plantTree(w, 9, 8, 5); // canopies overlap
  w.setBlock(6, G + 1, 8, B.AIR);
  const tree = findFallingTree(w, 6, G + 1, 8);
  removeTree(w, tree);
  assert.equal(w.getBlock(9, G + 3, 8), B.LOG, 'the other tree is untouched');
  assert.ok(count(w, B.LEAVES) > 20, 'its canopy is still there');
}
{ // breaking something that is not a tree does nothing
  const w = arena();
  w.setBlock(8, G + 1, 8, B.LOG); w.setBlock(8, G + 1, 8, B.AIR);
  assert.equal(findFallingTree(w, 8, G + 1, 8), null);
}
{ // shattering: the fallen tree breaks into pick-up-able logs and loot from the leaves
  const w = arena();
  plantTree(w, 8, 8, 5);
  w.setBlock(8, G + 1, 8, B.AIR);
  const tree = findFallingTree(w, 8, G + 1, 8);
  removeTree(w, tree);
  const pieces = shatterTree(w, tree, 8, G + 1, 8, 1, 0);
  assert.equal(pieces.length, tree.logs.length + tree.leaves.length, 'every block of the tree shatters');
  assert.ok(pieces.every((p) => w.getBlock(p.x, p.y, p.z) === B.AIR), 'each piece lands in open air, never inside terrain');
  const logPieces = pieces.filter((p) => p.id === B.LOG);
  assert.equal(logPieces.length, 4);
  assert.deepEqual(logPieces.map((p) => p.x).sort((a, b) => a - b), [9, 10, 11, 12], 'the logs land in a line away from the player');
  assert.ok(logPieces.every((p) => p.y === G + 1 && p.z === 8), 'on the ground');
  assert.equal(count(w, B.LOG), 0, 'shattering leaves nothing standing or lying as blocks');
  // loot: logs give logs; leaves roll their shatter table (sticks, apples)
  assert.deepEqual(shatterDrops(B.LOG), [{ id: B.LOG, n: 1 }]);
  assert.deepEqual(shatterDrops(B.LEAVES, () => 0).map((d) => d.id).sort(), [I.OAK_SAPLING, I.STICK].sort(), 'oak leaves can give sticks and saplings (apples only come from apple trees)');
  assert.deepEqual(shatterDrops(B.LEAVES, () => 0.99), [], 'but usually give nothing');
  let sticks = 0, apples = 0, saplings = 0, appleSaplings = 0;
  for (let i = 0; i < 4000; i++) {
    for (const d of shatterDrops(B.LEAVES)) { if (d.id === I.STICK) sticks += d.n; if (d.id === I.APPLE) apples += d.n; if (d.id === I.OAK_SAPLING) saplings += d.n; }
    for (const d of shatterDrops(B.APPLE_LEAVES)) if (d.id === I.APPLE) appleSaplings += d.n;
  }
  assert.ok(sticks > 450 && sticks < 750, `about 15% of leaves give a stick (${sticks}/4000)`);
  assert.equal(apples, 0, 'plain leaves never give apples');
  assert.ok(saplings > 280 && saplings < 520, `about 10% a sapling (${saplings}/4000)`);
  assert.ok(appleSaplings > 450 && appleSaplings < 750, `apple tree leaves give apples about 15% of the time (${appleSaplings}/4000)`);
}
{ // a tree held up by a log beside the broken one does not fall until it would float
  const col = (w, x, z, from = 1, to = 5) => { for (let y = G + from; y <= G + to; y++) w.setBlock(x, y, z, B.LOG); };
  // two trunks side by side (a thick tree)
  let w = arena();
  col(w, 8, 8); col(w, 9, 8);
  for (let y = G + 4; y <= G + 7; y++) for (let dx = -2; dx <= 3; dx++) for (let dz = -2; dz <= 2; dz++) if (w.getBlock(8 + dx, y, 8 + dz) === B.AIR) w.setBlock(8 + dx, y, 8 + dz, B.LEAVES);
  const leaves0 = count(w, B.LEAVES);
  w.setBlock(8, G + 1, 8, B.AIR);
  assert.equal(findFallingTree(w, 8, G + 1, 8), null, 'breaking the base of one trunk leaves the other holding the tree up');
  assert.equal(count(w, B.LEAVES), leaves0, 'the leaves stay too');
  w.setBlock(8, G + 3, 8, B.AIR); // chop higher up in the same trunk
  assert.equal(findFallingTree(w, 8, G + 3, 8), null, 'still held by the neighbouring trunk');
  w.setBlock(9, G + 1, 8, B.AIR); // now the other trunk loses its base as well: nothing reaches the ground
  const tree = findFallingTree(w, 9, G + 1, 8);
  assert.ok(tree && tree.logs.length > 0, 'once it would be floating, it falls');
  assert.ok(tree.logs.some((l) => l[0] === 8) && tree.logs.some((l) => l[0] === 9), 'taking both trunks with it');
  assert.ok(tree.leaves.length > 0, 'and the leaves');

  // trunks standing diagonally next to each other also hold each other (edge contact)
  w = arena();
  col(w, 8, 8); col(w, 9, 9);
  w.setBlock(8, G + 1, 8, B.AIR);
  assert.equal(findFallingTree(w, 8, G + 1, 8), null, 'a log diagonally beside it still counts as holding the tree up');

  // a neighbour that is itself on the ground, but sits level with the cut only, is not enough if it does not touch the logs above
  w = arena();
  col(w, 8, 8, 1, 6); col(w, 11, 8, 1, 3);   // a second pole three blocks away: not touching
  w.setBlock(8, G + 2, 8, B.AIR);
  const far = findFallingTree(w, 8, G + 2, 8);
  assert.equal(far.logs.length, 4, 'a pole that does not touch the trunk does not hold it');

  // the neighbour must itself be standing on something: a log hanging on the broken trunk only does not hold it
  w = arena();
  col(w, 8, 8, 1, 6);
  w.setBlock(9, G + 4, 8, B.LOG); w.setBlock(9, G + 5, 8, B.LOG); // a branch stuck to the side, 3 blocks off the ground
  w.setBlock(8, G + 2, 8, B.AIR);
  const branch = findFallingTree(w, 8, G + 2, 8);
  assert.equal(branch.logs.length, 6, 'the trunk above the cut (4 logs) falls together with the branch (2 logs) that hung on it');

  // a log resting on a leaf block is not on the ground
  w = arena();
  w.setBlock(8, G + 1, 8, B.LEAVES); w.setBlock(8, G + 2, 8, B.LOG); w.setBlock(8, G + 3, 8, B.LOG);
  w.setBlock(9, G + 2, 8, B.LOG);
  w.setBlock(9, G + 1, 8, B.AIR);
  assert.ok(findFallingTree(w, 9, G + 1, 8) !== null, 'logs resting on leaves are floating');
}
// the landing maths: a block 3 above the cut lands 3 along the fall direction, level with the cut
assert.deepEqual(landingCell(8, 33, 8, 8, 31, 8, 1, 0), [10, 31, 8]);
assert.deepEqual(landingCell(8, 33, 8, 8, 31, 8, 0, -1), [8, 31, 6]);
assert.deepEqual(landingCell(9, 33, 8, 8, 31, 8, 1, 0), [10, 30, 8], 'blocks on the far side land lower');

// ======================= step assist & fall damage =======================
function walk(player, frames, input) {
  for (let i = 0; i < frames; i++) player.update(1 / 60, input);
}
{
  const w = arena();
  const p = new Player(w);
  p.pos.x = 8.5; p.pos.z = 8.5; p.pos.y = G + 1;
  p.yaw = 0; // facing -z
  walk(p, 20, {}); // settle on the ground
  assert.ok(p.onGround);
  w.setBlock(8, G + 1, 6, B.STONE); // one-block step in front (z = 6)
  const y0 = p.pos.y;
  for (let i = 0; i < 200 && p.pos.z > 6.5; i++) p.update(1 / 60, { forward: true }); // no jump key
  assert.ok(p.pos.z <= 6.5, `walked onto the step (z=${p.pos.z.toFixed(2)})`);
  assert.ok(Math.abs(p.pos.y - (y0 + 1)) < 0.01, `stepped up one block without jumping (y ${y0} -> ${p.pos.y.toFixed(3)})`);
  assert.ok(p.onGround);
  walk(p, 60, { forward: true });
  assert.ok(Math.abs(p.pos.y - y0) < 0.01, 'and walks off the far side back down to the floor');
}
{ // a two-block wall still blocks you
  const w = arena();
  const p = new Player(w);
  p.pos.x = 8.5; p.pos.z = 8.5; p.pos.y = G + 1;
  walk(p, 20, {});
  w.setBlock(8, G + 1, 6, B.STONE); w.setBlock(8, G + 2, 6, B.STONE);
  walk(p, 120, { forward: true });
  assert.ok(p.pos.z > 6.7, `blocked by a 2-high wall (z=${p.pos.z.toFixed(2)})`);
  assert.ok(p.pos.y < G + 1.1);
}
{ // no head room above the step: do not squeeze under a low ceiling
  const w = arena();
  const p = new Player(w);
  p.pos.x = 8.5; p.pos.z = 8.5; p.pos.y = G + 1;
  walk(p, 20, {});
  w.setBlock(8, G + 1, 6, B.STONE); w.setBlock(8, G + 3, 6, B.STONE); // ceiling leaves only 1 block above the step
  walk(p, 120, { forward: true });
  assert.ok(p.pos.z > 6.7, 'cannot step up into a space too small to stand in');
}
{ // camera eases up instead of snapping
  const w = arena();
  const p = new Player(w);
  p.pos.x = 8.5; p.pos.z = 8.5; p.pos.y = G + 1;
  walk(p, 20, {});
  w.setBlock(8, G + 1, 7, B.STONE);
  let maxLag = 0;
  for (let i = 0; i < 40; i++) { p.update(1 / 60, { forward: true }); maxLag = Math.max(maxLag, p.stepSmooth); }
  assert.ok(maxLag > 0.3 && maxLag <= 1.0, 'eye lags behind the step while it eases');
  walk(p, 60, {});
  assert.equal(p.stepSmooth, 0, 'and catches up completely');
}
{ // fall damage events
  const fall = (height, setup) => {
    const w = arena();
    if (setup) setup(w);
    const p = new Player(w);
    p.pos.x = 8.5; p.pos.z = 8.5; p.pos.y = G + 1 + height;
    let dist = null;
    p.events.fall = (d) => { dist = d; };
    walk(p, 300, {});
    return { dist, p };
  };
  const a = fall(0); assert.equal(a.dist, null, 'standing still: no fall');
  const b = fall(1.5); assert.ok(b.dist > 1.4 && b.dist < 1.6, `1.5 block drop measured as ${b.dist}`);
  const c = fall(5); assert.ok(c.dist > 4.9 && c.dist < 5.1, `5 block drop measured as ${c.dist}`);
  const d = fall(20); assert.ok(d.dist > 19.9 && d.dist < 20.1, `20 block drop measured as ${d.dist}`);
  const e = fall(8, (w) => { for (let y = G + 1; y <= G + 3; y++) w.setBlock(8, y, 8, B.WATER); });
  assert.equal(e.dist, null, 'landing in water cancels the fall');
  // jumping on flat ground never counts as a damaging fall
  const w = arena();
  const p = new Player(w);
  p.pos.x = 8.5; p.pos.z = 8.5; p.pos.y = G + 1;
  walk(p, 20, {});
  let maxDist = 0;
  p.events.fall = (dd) => { maxDist = Math.max(maxDist, dd); };
  for (let i = 0; i < 6; i++) { walk(p, 5, { jump: true }); walk(p, 60, {}); }
  assert.ok(maxDist < 2, `a jump is a ${maxDist.toFixed(2)} block fall, below the damage threshold`);
  // walking off a 2 block ledge is below 3, a 3 block ledge is not
  const ledge = (h) => {
    const w2 = arena();
    for (let x = 8; x < 16; x++) for (let z = 0; z < 16; z++) for (let y = G - h + 1; y <= G; y++) w2.setBlock(x, y, z, B.AIR);
    const q = new Player(w2);
    q.pos.x = 6.5; q.pos.z = 8.5; q.pos.y = G + 1; q.yaw = -Math.PI / 2; // facing +x
    walk(q, 20, {});
    let dist2 = 0;
    q.events.fall = (dd) => { dist2 = dd; };
    walk(q, 200, { forward: true });
    return dist2;
  };
  assert.ok(ledge(2) < 3, 'a two block ledge does no damage');
  assert.ok(ledge(3) >= 3, 'a three block ledge does');
}

// ======================= grass spreading =======================
{
  const w = arena();
  w.setBlock(8, G, 8, B.DIRT);
  assert.ok(trySpreadGrass(w, 8, G, 8, () => 0), 'dirt beside grass becomes grass');
  assert.equal(w.getBlock(8, G, 8), B.GRASS);
  for (let x = 4; x < 7; x++) w.setBlock(x, G, 4, B.DIRT);
  w.setBlock(5, G + 1, 4, B.STONE); // buried
  assert.ok(!trySpreadGrass(w, 5, G, 4, () => 0), 'dirt with a block on top stays dirt');
  assert.ok(trySpreadGrass(w, 4, G, 4, () => 0), 'exposed dirt next to grass spreads');
  assert.ok(!trySpreadGrass(w, 8, G, 8, () => 0), 'only dirt changes');
  // not adjacent: two blocks of dirt away from any grass
  const iso = arena();
  for (let x = 6; x <= 10; x++) for (let z = 6; z <= 10; z++) iso.setBlock(x, G, z, B.DIRT);
  assert.ok(!trySpreadGrass(iso, 8, G, 8, () => 0), 'dirt in the middle of a dirt patch (grass 3 away) does not spread');
  assert.ok(trySpreadGrass(iso, 6, G, 6, () => 0), 'the patch edge does');
  // one level up or down counts, two does not
  const lv = arena();
  lv.setBlock(8, G, 8, B.DIRT); lv.setBlock(9, G, 8, B.AIR); lv.setBlock(9, G - 1, 8, B.GRASS); // grass one lower, diagonal-adjacent
  for (const [x, z] of [[7, 8], [8, 7], [8, 9]]) lv.setBlock(x, G, z, B.DIRT);
  assert.ok(trySpreadGrass(lv, 8, G, 8, () => 0), 'grass one block below counts');
  const lv2 = arena();
  for (let x = 6; x <= 10; x++) for (let z = 6; z <= 10; z++) { lv2.setBlock(x, G, z, B.DIRT); }
  lv2.setBlock(8, G - 1, 8, B.STONE);
  lv2.setBlock(9, G, 8, B.AIR); lv2.setBlock(9, G - 1, 8, B.AIR); lv2.setBlock(9, G - 2, 8, B.GRASS); // two lower
  assert.ok(!trySpreadGrass(lv2, 8, G, 8, () => 0), 'grass two blocks below does not count');
  // chance: a failed roll leaves it as dirt
  const ch = arena();
  ch.setBlock(8, G, 8, B.DIRT);
  assert.ok(!trySpreadGrass(ch, 8, G, 8, () => 0.99), 'spreading is random');
  // sampling spreads across a patch over time
  const big = arena();
  for (let x = 2; x < 14; x++) for (let z = 2; z < 14; z++) big.setBlock(x, G, z, B.DIRT);
  const dirt = () => { let n = 0; for (let x = 2; x < 14; x++) for (let z = 2; z < 14; z++) if (big.getBlock(x, G, z) === B.DIRT) n++; return n; };
  const before = dirt();
  for (let t = 0; t < 120; t++) spreadGrass(big, 0, 0, 1, 1);
  assert.ok(dirt() < before / 2, `a dirt patch greens over time (${before} -> ${dirt()} dirt blocks)`);
}

// ======================= falling sand =======================
{
  const w = arena();
  const events = { spawn: 0, land: 0, drop: 0 };
  const sim = new GravitySim(w, { onSpawn: () => events.spawn++, onLand: () => events.land++, onDrop: () => events.drop++ });
  const stack = (x, z, n) => { for (let i = 1; i <= n; i++) w.setBlock(x, G + i, z, B.SAND); };
  const column = (x, z) => { const out = []; for (let y = G + 1; y <= G + 8; y++) out.push(w.getBlock(x, y, z) === B.SAND ? 1 : 0); return out.join(''); };
  stack(8, 8, 4);
  sim.settle();
  assert.equal(column(8, 8), '11110000', 'a stack resting on the ground stays put');
  assert.equal(events.spawn, 0);
  // break the bottom one: the remaining three drop one level together
  w.setBlock(8, G + 1, 8, B.AIR);
  sim.update(0.02);
  assert.equal(sim.falling.length, 3, 'all three blocks above the hole start falling at once');
  assert.equal(w.getBlock(8, G + 4, 8), B.AIR, 'and they leave their old spots immediately (they are animated as falling blocks)');
  sim.settle();
  assert.equal(column(8, 8), '11100000', 'the three remaining blocks now fill the gap');
  assert.deepEqual(events, { spawn: 3, land: 3, drop: 0 });
  // break one from the middle: the part above falls, the part below stays
  w.setBlock(8, G + 2, 8, B.AIR);
  sim.settle();
  assert.equal(column(8, 8), '11000000', 'the one above the gap drops into it');
  // sand placed in mid-air falls all the way down
  w.setBlock(11, G + 6, 11, B.SAND);
  sim.settle();
  assert.equal(w.getBlock(11, G + 1, 11), B.SAND, 'sand dropped from 6 blocks up lands on the ground');
  assert.equal(w.getBlock(11, G + 6, 11), B.AIR);
  // sand crushes plants and displaces water on its way down
  w.setBlock(13, G + 1, 13, B.GRASS_S);
  w.setBlock(13, G + 3, 13, B.SAND);
  sim.settle();
  assert.equal(w.getBlock(13, G + 1, 13), B.SAND, 'it lands where a tuft of grass was');
  for (let y = G + 1; y <= G + 2; y++) w.setBlock(2, y, 2, B.WATER);
  w.setBlock(2, G + 4, 2, B.SAND);
  sim.settle();
  assert.equal(w.getBlock(2, G + 1, 2), B.SAND, 'sand sinks through water to the bottom');
  // something built in its way while it falls: it does not vanish, it drops as an item
  const before = events.drop;
  w.setBlock(4, G + 8, 4, B.SAND);
  sim.update(0.02);
  w.setBlock(4, G + 1, 4, B.STONE);
  w.setBlock(4, G + 2, 4, B.STONE); // the landing spot (G+3) stays free but cannot be the one the sand expected
  w.setBlock(4, G + 3, 4, B.STONE);
  sim.settle();
  assert.ok(events.drop > before || w.getBlock(4, G + 4, 4) === B.SAND, 'it lands on the new blocks or drops as an item');
  // other blocks never fall
  w.setBlock(6, G + 5, 6, B.STONE);
  sim.settle();
  assert.equal(w.getBlock(6, G + 5, 6), B.STONE, 'only gravity blocks fall');
  // sand held up by sand beside/below does not move when a neighbour is dug away
  const w2 = arena();
  const sim2 = new GravitySim(w2);
  for (let x = 8; x <= 10; x++) w2.setBlock(x, G + 1, 8, B.SAND);
  w2.setBlock(9, G + 1, 8, B.AIR);
  sim2.settle();
  assert.equal(w2.getBlock(8, G + 1, 8), B.SAND, 'sand beside a hole is supported by the ground and stays');
}

// ======================= farmland moisture =======================
{
  const w = arena();
  const farm = (x, z, id = B.FARMLAND) => w.setBlock(x, G, z, id);
  // far from water: dry, and bare dry soil turns back into dirt over time
  farm(4, 4);
  assert.equal(updateHydration(w, 0, 0, 1, 1, () => 0.5), 0, 'a single short tick does not change it (the decay roll fails)');
  assert.equal(w.getBlock(4, G, 4), B.FARMLAND);
  updateHydration(w, 0, 0, 1, 1000, () => 0);
  assert.equal(w.getBlock(4, G, 4), B.DIRT, 'bare dry farmland reverts to dirt');
  // a crop keeps dry farmland from reverting
  farm(6, 4); w.setBlock(6, G + 1, 4, B.WHEAT_S);
  updateHydration(w, 0, 0, 1, 1000, () => 0);
  assert.equal(w.getBlock(6, G, 4), B.FARMLAND, 'with a crop on it, dry soil stays (but nothing grows)');
  growPlants(w, 0, 0, 1, 1000, () => 0);
  assert.equal(w.getBlock(6, G + 1, 4), B.WHEAT_S, 'dry soil does not grow the crop');
  // near water (circle of radius 4, 4 below to 1 above): it becomes damp
  w.setBlock(9, G, 4, B.WATER);
  farm(6, 8); // 3 blocks from (9,4)? no: far enough to be dry
  farm(8, 4);
  updateHydration(w, 0, 0, 1, 1, () => 0.99);
  assert.equal(w.getBlock(8, G, 4), B.FARMLAND_WET, 'soil next to water becomes moist');
  assert.equal(w.getBlock(6, G, 4), B.FARMLAND_WET, 'and so does soil 3 blocks away (inside the radius)');
  assert.equal(w.getBlock(6, G, 8), B.FARMLAND, 'while soil at distance 5 (3 east, 4 south) stays dry');
  growPlants(w, 0, 0, 1, 1000, () => 0);
  assert.equal(w.getBlock(6, G + 1, 4), B.WHEAT_M, 'the crop on moist soil now grows');
  // the water goes away: the soil dries again
  w.setBlock(9, G, 4, B.AIR);
  updateHydration(w, 0, 0, 1, 1, () => 0.99);
  assert.equal(w.getBlock(8, G, 4), B.FARMLAND, 'moist soil dries out when the water is gone');
  // grass cannot be tilled into moist soil by the engine tables: tilling yields the dry kind first
  assert.equal(TILLS_INTO[B.DIRT], B.FARMLAND);
}

// ======================= swimming out onto the bank =======================
{
  const w = arena();
  for (let x = 3; x <= 8; x++) for (let z = 3; z <= 8; z++) { for (let y = G - 3; y <= G; y++) w.setBlock(x, y, z, B.AIR); for (let y = G - 3; y < G; y++) w.setBlock(x, y, z, B.WATER); }
  const p = new Player(w);
  p.pos = { x: 5.5, y: G - 2, z: 5.5 };
  p.yaw = -Math.PI / 2; // facing +x, towards the grass bank at x = 9
  const input = { forward: true, back: false, left: false, right: false, jump: true, sprint: false, crouch: false, down: false };
  for (let t = 0; t < 4; t += 1 / 60) p.update(1 / 60, input);
  for (let t = 0; t < 1; t += 1 / 60) p.update(1 / 60, { ...input, jump: false }); // stop jumping once out
  assert.ok(p.pos.x > 9.2 && p.pos.y >= G + 1 - 0.01, 'holding forward and jump takes you out of the water and onto the bank (x=' + p.pos.x.toFixed(2) + ', y=' + p.pos.y.toFixed(2) + ')');
  assert.ok(p.onGround && !p.inWater, 'standing on the bank: ' + JSON.stringify({ g: p.onGround, w: p.inWater, y: p.pos.y, vy: p.vel.y }));
  // without jump you stay in the water at the foot of the bank
  const q = new Player(w);
  q.pos = { x: 5.5, y: G - 2, z: 5.5 }; q.yaw = -Math.PI / 2;
  for (let t = 0; t < 6; t += 1 / 60) q.update(1 / 60, { ...input, jump: false });
  assert.ok(q.pos.x < 8.8 && q.inWater, 'without jumping you just bump against it');
  // a two-block wall is too high to hop
  const w2 = arena();
  for (let x = 3; x <= 8; x++) for (let z = 3; z <= 8; z++) { for (let y = G - 3; y <= G; y++) w2.setBlock(x, y, z, B.AIR); for (let y = G - 3; y < G; y++) w2.setBlock(x, y, z, B.WATER); }
  for (let z = 0; z < 16; z++) w2.setBlock(9, G + 1, z, B.STONE);
  const r = new Player(w2);
  r.pos = { x: 5.5, y: G - 2, z: 5.5 }; r.yaw = -Math.PI / 2;
  for (let t = 0; t < 6; t += 1 / 60) r.update(1 / 60, input);
  assert.ok(r.pos.x < 9, 'a two-high wall cannot be hopped');
}

console.log('all physics tests passed');
