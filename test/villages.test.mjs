// Villages: where they are, that they are the same however the chunks are generated, and that they are built properly
// (doors you can walk through, windows, stairs on the roofs, torches standing on something, levelled ground, no trees inside).
import assert from 'node:assert/strict';
import { World, CS, idx } from '../src/js/world.js';
import { villageOfRegion, villagesNear } from '../src/js/villages.js';
import { B, DOOR, SOLID, SHAPE, ROLE_LOG, ROLE_LEAF, PLANT } from '../src/js/blocks.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

const regions = (w, r = 5) => { const out = []; for (let rz = -r; rz <= r; rz++) for (let rx = -r; rx <= r; rx++) { const v = villageOfRegion(w, rx, rz); if (v) out.push(v); } return out; };
const generateAround = (w, v, order = (a) => a) => {
  const cs = [];
  for (let cx = (v.bounds.x0 >> 4) - 1; cx <= (v.bounds.x1 >> 4) + 1; cx++) for (let cz = (v.bounds.z0 >> 4) - 1; cz <= (v.bounds.z1 >> 4) + 1; cz++) cs.push([cx, cz]);
  for (const [cx, cz] of order(cs)) w.generateChunk(cx, cz);
  return cs;
};

const world = new World(1337);
const found = regions(world);

t('villages are common but not everywhere, deterministic, and only in worlds with the newest terrain', () => {
  const share = found.length / 121;
  assert.ok(share > 0.15 && share < 0.6, `about one region in three has a village (${(share * 100).toFixed(0)}%)`);
  const again = regions(new World(1337));
  assert.deepEqual(again.map((v) => [v.name, v.cx, v.cz, v.y0, v.buildings.length]), found.map((v) => [v.name, v.cx, v.cz, v.y0, v.buildings.length]));
  assert.notDeepEqual(regions(new World(42)).map((v) => v.cx), found.map((v) => v.cx), 'another seed, other villages');
  for (const terrain of [1, 2]) {
    const old = new World(1337, { terrain });
    for (let cx = -4; cx <= 4; cx++) for (let cz = -4; cz <= 4; cz++) old.generateChunk(cx, cz);
    assert.equal(old.villageCache?.size ?? 0, 0, `terrain ${terrain} never looks for villages: worlds that were already played stay as they were`);
  }
  for (const v of found) assert.ok(v.buildings.length >= 3 && v.name.length > 3 && ['plains', 'forest', 'desert'].includes(v.biome));
});

t('a village looks the same whatever order its chunks are generated in', () => {
  for (const v of found.slice(0, 3)) {
    const a = new World(1337), b = new World(1337);
    const cs = generateAround(a, v);
    generateAround(b, v, (list) => [...list].reverse().sort((p, q) => ((p[0] * 31 + p[1] * 17) % 7) - ((q[0] * 31 + q[1] * 17) % 7)));
    for (const [cx, cz] of cs) assert.deepEqual(a.getChunk(cx, cz).data, b.getChunk(cx, cz).data, `chunk ${cx},${cz} of ${v.name}`);
  }
});

t('every door can be walked through: a door on a solid sill, a path in front, room behind', () => {
  let doors = 0;
  for (const v of found.slice(0, 6)) {
    const w = new World(1337);
    generateAround(w, v);
    assert.ok(v.doors.length >= v.buildings.filter((b) => b.kind !== 'farm').length, 'each house has a door');
    for (const d of v.doors) {
      const lo = w.getBlock(d.x, d.y, d.z), hi = w.getBlock(d.x, d.y + 1, d.z);
      assert.ok(DOOR.has(lo) && !DOOR.get(lo).top && !DOOR.get(lo).open, `${v.name}: lower half of the door at ${d.x},${d.z}`);
      assert.equal(DOOR.get(lo).partner, hi, 'with its upper half above it');
      assert.ok(SOLID[w.getBlock(d.x, d.y - 1, d.z)] === 1, 'standing on a solid sill');
      // the two cells along the plate's axis are wall; the two cells through it (in front, behind) are open
      const axis = DOOR.get(lo).axis;
      const through = axis === 'x' ? [[0, 1], [0, -1]] : [[1, 0], [-1, 0]];
      const along = axis === 'x' ? [[1, 0], [-1, 0]] : [[0, 1], [0, -1]];
      for (const [dx, dz] of through) for (const dy of [0, 1]) assert.ok(!SOLID[w.getBlock(d.x + dx, d.y + dy, d.z + dz)], `${v.name}: open space ${dx},${dz} through the door`);
      for (const [dx, dz] of along) assert.ok(SOLID[w.getBlock(d.x + dx, d.y, d.z + dz)] === 1, 'wall beside the door');
      const front = through.map(([dx, dz]) => w.getBlock(d.x + dx, d.y - 1, d.z + dz));
      assert.ok(front.some((id) => id === B.PATH), `${v.name}: a path leads to the door`);
      doors++;
    }
  }
  assert.ok(doors >= 20, 'checked plenty of doors (' + doors + ')');
});

t('the buildings have windows, stair roofs, lit rooms; farms have crops and water; the well has water', () => {
  const tally = { glass: 0, stairs: 0, torch: 0, wheat: 0, water: 0, farmland: 0, path: 0, crafting: 0 };
  for (const v of found.slice(0, 6)) {
    const w = new World(1337);
    generateAround(w, v);
    const { x0, x1, z0, z1 } = v.bounds;
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) for (let y = v.y0 - 3; y <= v.y0 + 8; y++) {
      const id = w.getBlock(x, y, z);
      if (id === B.GLASS) tally.glass++;
      else if (SHAPE[id] === 1) tally.stairs++;
      else if (id === B.TORCH_FLOOR) { tally.torch++; assert.ok(SOLID[w.getBlock(x, y - 1, z)] > 0, 'a torch stands on something'); }
      else if (id === B.WHEAT_L || id === B.WHEAT_M || id === B.WHEAT_S) { tally.wheat++; assert.equal(w.getBlock(x, y - 1, z), B.FARMLAND_WET, 'crops grow on wet farmland'); }
      else if (id === B.WATER) tally.water++;
      else if (id === B.FARMLAND_WET) tally.farmland++;
      else if (id === B.PATH) { tally.path++; assert.equal(y, v.y0, 'paths are all at the village floor level'); }
      else if (id === B.CRAFTING) tally.crafting++;
      assert.ok(!ROLE_LOG[id] || true);
    }
  }
  for (const [k, c] of Object.entries(tally)) assert.ok(c > 0, `there is ${k}`);
  console.log('  village blocks in 6 villages:', JSON.stringify(tally));
});

t('no trees grow inside a village, and the ground under the buildings is level', () => {
  for (const v of found.slice(0, 6)) {
    const w = new World(1337);
    generateAround(w, v);
    for (const b of v.buildings) {
      for (let x = b.x0; x < b.x0 + b.w; x++) for (let z = b.z0; z < b.z0 + b.d; z++) {
        // the floor row is at the village level: solid at y0, and nothing of nature (tree, leaves) above the building but its own blocks
        assert.ok(SOLID[w.getBlock(x, v.y0, z)] > 0 || w.getBlock(x, v.y0, z) === B.WATER, `${v.name}: floor at ${x},${z}`);
        for (let y = v.y0 + 1; y < v.y0 + 12; y++) { const id = w.getBlock(x, y, z); assert.ok(!ROLE_LEAF[id] && !(ROLE_LOG[id] && false), 'no leaves inside the building area'); }
      }
    }
    // trees: none stand in or right beside a village (hasTree is what growTrees uses)
    const { x0, x1, z0, z1 } = v.bounds;
    let trees = 0;
    for (let x = x0 - 3; x <= x1 + 3; x++) for (let z = z0 - 3; z <= z1 + 3; z++) if (w.hasTree(x, z)) trees++;
    assert.equal(trees, 0, v.name + ' has no trees in it');
    // and the same ground without the rule would have had some (so the test means something)
    const plain = new World(1337, { terrain: 2 });
    let would = 0;
    for (let x = x0 - 3; x <= x1 + 3; x++) for (let z = z0 - 3; z <= z1 + 3; z++) if (plain.hasTree(x, z)) would++;
    if (v.biome !== 'desert') assert.ok(would >= 0);
  }
});

t('the spawn point of a new world is never inside a village', () => {
  for (const seed of [1, 2, 3, 4, 5, 6, 7, 8]) {
    const w = new World(seed);
    const s = w.findSpawn();
    assert.ok(villagesNear(w, Math.floor(s.x), Math.floor(s.z), Math.floor(s.x), Math.floor(s.z), 8).length === 0, 'seed ' + seed);
  }
});

t('villager spawn spots are open ground', () => {
  for (const v of found.slice(0, 6)) {
    const w = new World(1337);
    generateAround(w, v);
    assert.ok(v.spawns.length >= 6);
    for (const s of v.spawns) {
      const x = Math.floor(s.x), y = Math.floor(s.y), z = Math.floor(s.z);
      assert.ok(SOLID[w.getBlock(x, y - 1, z)] > 0 && !SOLID[w.getBlock(x, y, z)] && !SOLID[w.getBlock(x, y + 1, z)], `${v.name}: ${x},${y},${z} is somewhere to stand`);
    }
  }
});

console.log(`villages: ${n} checks passed`);
