// Villages: a well where two dirt roads cross, houses and farms along the roads, lamp posts, all built from the same planks,
// cobblestone, glass, stairs and doors the player can craft. Like trees they are a pure function of the seed: the world is cut into
// square regions, each region may hold one village, and every chunk that overlaps a village asks for its part of the plan, so a
// village that straddles chunk borders is built identically (and seamlessly) from both sides.
// Numbers (how common, how big, which biomes) are data: worldgen.json "villages".
import { REG } from './registry.js';
import { B, STAIRS, DOOR_PLACE } from './blocks.js';
import { mulberry32, hash2 } from './noise.js';
import { CH, chunkKey, idx } from './voxel.js';

const WG = REG.worldgen;
const V = WG.villages;
const SEA = WG.seaLevel;
const AIR = 0;

const FIRST = ['Oak', 'Birch', 'Stone', 'River', 'Green', 'Mill', 'Wheat', 'Amber', 'Clay', 'Fern', 'High', 'Low', 'Sun', 'Moss', 'Elder', 'Red', 'Pine', 'Brook'];
const LAST = ['ford', 'ton', 'wick', 'field', 'haven', 'stead', 'brook', 'hollow', 'vale', 'bridge', 'meadow', 'crest', 'dale', 'mere'];

// ---- building blueprints: a size (w along the road, d deep) and a function that stamps it in local coordinates ----
// Local coordinates: x 0..w-1 along the front, z 0..d-1 from the back wall (0) to the front wall (d-1, where the door is), y 0 = the
// ground row (the floor), 1.. = up. `b` offers put / stairs / door, and rotates everything to face the road.
const planksStairs = () => STAIRS.get(B.PLANKS_STAIRS);

function house(b, w, d, kind) {
  const front = d - 1, mid = (w - 1) >> 1;
  // floor: a cobblestone rim with planks inside
  for (let x = 0; x < w; x++) for (let z = 0; z < d; z++) b.put(x, 0, z, x === 0 || z === 0 || x === w - 1 || z === d - 1 ? B.COBBLE : B.PLANKS);
  // walls, three high, with a log post at each corner
  for (let y = 1; y <= 3; y++) {
    for (let x = 0; x < w; x++) for (let z = 0; z < d; z++) {
      if (!(x === 0 || z === 0 || x === w - 1 || z === d - 1)) continue;
      const corner = (x === 0 || x === w - 1) && (z === 0 || z === d - 1);
      b.put(x, y, z, corner ? B.LOG : B.PLANKS);
    }
  }
  // windows (glass) in the middle of the second row of every wall, and beside the door
  const win = (x, z) => b.put(x, 2, z, B.GLASS);
  win(1, front); win(w - 2, front);
  win(mid, 0);
  win(0, d >> 1); win(w - 1, d >> 1);
  if (w >= 9) { win(2, 0); win(w - 3, 0); }
  // the door, in the middle of the front wall
  b.door(mid, 1, front);
  // a gabled roof of stairs: the ridge runs along the front, each side slopes up towards it, one block of overhang all round
  const m = (d - 1) >> 1;
  for (let k = 0; k <= m; k++) {
    const y = 4 + k;
    for (let x = -1; x <= w; x++) {
      b.stairs(x, y, -1 + k, planksStairs(), 2); // the north slope: tall side towards the front (south)
      b.stairs(x, y, d - k, planksStairs(), 0);  // the south slope: tall side towards the back (north)
      if (k === m) for (let z = k; z <= d - 1 - k; z++) b.put(x, y, z, B.PLANKS); // the ridge
    }
    if (k >= 1) for (let z = k; z <= d - 1 - k; z++) { b.put(0, y, z, B.PLANKS); b.put(w - 1, y, z, B.PLANKS); } // the gable ends
  }
  for (let x = 0; x < w; x++) for (let z = 0; z < d; z++) b.put(x, 4, z, B.PLANKS); // the ceiling
  // inside: a torch, and depending on who lives here a crafting table or a furnace
  b.put(1, 1, 1, kind === 'hall' || kind === 'long' ? B.FURNACE : B.CRAFTING);
  b.put(1, 2, 1, B.TORCH_FLOOR);
  if (kind === 'hall') { b.put(w - 2, 1, 1, B.CRAFTING); b.put(w - 2, 2, 1, B.TORCH_FLOOR); }
}

// a plot of wheat with a ditch of water down the middle and a post with a torch at one corner
function farm(b, w, d) {
  const mid = d >> 1;
  const crops = [B.WHEAT_L, B.WHEAT_L, B.WHEAT_M, B.WHEAT_L, B.WHEAT_S];
  for (let x = 0; x < w; x++) for (let z = 0; z < d; z++) {
    if (z === mid) { b.put(x, 0, z, B.WATER); continue; }
    if (x === 0 || x === w - 1) { b.put(x, 0, z, B.PLANKS); continue; } // a plank edge on the short sides
    b.put(x, 0, z, B.FARMLAND_WET);
    b.put(x, 1, z, crops[(x * 7 + z * 3) % crops.length]);
  }
  for (const [x, z] of [[0, 0], [w - 1, 0], [0, d - 1], [w - 1, d - 1]]) b.put(x, 1, z, B.LOG);
  b.put(0, 2, d - 1, B.TORCH_FLOOR);
}

const KINDS = {
  hut:   { w: 5, d: 5, weight: 3, build: (b) => house(b, 5, 5, 'hut') },
  house: { w: 7, d: 5, weight: 4, build: (b) => house(b, 7, 5, 'house') },
  long:  { w: 9, d: 5, weight: 2, build: (b) => house(b, 9, 5, 'long') },
  hall:  { w: 9, d: 7, weight: 1.5, build: (b) => house(b, 9, 7, 'hall') },
  farm:  { w: 9, d: 7, weight: 2.5, build: (b) => farm(b, 9, 7) },
};

// ---- the plan of one village ----
class Plan {
  constructor() {
    this.blocks = new Map();   // "x,y,z" -> block id
    this.columns = new Map();  // "x,z" -> { top, under }: ground levelled to the village floor
    this.buildings = [];
    this.spawns = [];
    this.doors = [];
  }
  put(x, y, z, id) { this.blocks.set(x + ',' + y + ',' + z, id); }
  ground(x, z, top, under) { this.columns.set(x + ',' + z, { top, under }); }
  has(x, z) { return this.columns.has(x + ',' + z); }
}

// A building stamped into the plan at a world position, rotated so its front (+z locally) faces `front`: 0 = south (+z), 1 = east, 2 = north, 3 = west
function builder(plan, y0, ox, oz, w, d, front) {
  const toWorld = (lx, lz) => {
    switch (front) {
      case 0: return [ox + lx, oz + lz];
      case 2: return [ox + (w - 1 - lx), oz + (d - 1 - lz)];
      case 1: return [ox + lz, oz + (w - 1 - lx)];
      default: return [ox + (d - 1 - lz), oz + lx];
    }
  };
  const put = (lx, ly, lz, id) => { const [x, z] = toWorld(lx, lz); plan.put(x, y0 + ly, z, id); };
  return {
    toWorld,
    put,
    // facing f (0-3 = n e s w) in local terms; the front of the building faces local south, which is world direction `front`
    stairs(lx, ly, lz, variants, f) { put(lx, ly, lz, variants[(f + [0, 3, 2, 1][front]) % 4]); }, // (turning the building turns its stairs with it)
    door(lx, ly, lz) {
      const [lo, hi] = DOOR_PLACE[front % 2 === 0 ? 'x' : 'z']; // a front wall that runs east-west holds a plate that spans x
      put(lx, ly, lz, lo); put(lx, ly + 1, lz, hi);
      const [x, z] = toWorld(lx, lz); plan.doors.push({ x, y: y0 + ly, z });
    },
  };
}

// world footprint of a w x d building with its front facing `front`
const footprint = (w, d, front) => (front % 2 === 0 ? [w, d] : [d, w]);

function makePlan(world, cx, cz, y0, rng, biome) {
  const plan = new Plan();
  const topBlock = biome === 'desert' ? B.SAND : B.GRASS, underBlock = biome === 'desert' ? B.SAND : B.DIRT;
  const suitable = (x, z) => { const h = world.heightAt(x, z); return h > SEA + 1 && Math.abs(h - y0) <= V.maxStep; };
  const free = (x, z) => !plan.has(x, z);
  const L = V.armLength;

  // the well, at the crossing
  for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
    plan.ground(cx + dx, cz + dz, B.COBBLE, B.COBBLE);
    plan.put(cx + dx, y0, cz + dz, B.COBBLE);
    if (dx || dz) plan.put(cx + dx, y0 + 1, cz + dz, B.COBBLE);
  }
  plan.put(cx, y0, cz, B.WATER); plan.put(cx, y0 - 1, cz, B.WATER);
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) for (let y = 2; y <= 3; y++) plan.put(cx + dx, y0 + y, cz + dz, B.LOG);
  for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) plan.put(cx + dx, y0 + 4, cz + dz, B.PLANKS);

  // the two roads, three wide; an arm stops where the ground stops being suitable
  const arm = { east: 0, west: 0, south: 0, north: 0 };
  const road = (x, z) => { if (free(x, z)) plan.ground(x, z, B.PATH, underBlock); };
  for (const [name, dx, dz] of [['east', 1, 0], ['west', -1, 0], ['south', 0, 1], ['north', 0, -1]]) {
    for (let t = 2; t <= L; t++) {
      const x = cx + dx * t, z = cz + dz * t;
      const across = dx ? [[0, -1], [0, 0], [0, 1]] : [[-1, 0], [0, 0], [1, 0]];
      if (!across.every(([ax, az]) => suitable(x + ax, z + az))) break;
      for (const [ax, az] of across) road(x + ax, z + az);
      arm[name] = t;
    }
  }
  for (const [dx, dz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) for (let k = 2; k <= 2; k++) road(cx + dx * k, cz + dz * k); // the well's apron

  // lots along both sides of each arm: a building whose door faces the road, or a farm
  const kinds = Object.keys(KINDS);
  const totalWeight = kinds.reduce((s, k) => s + KINDS[k].weight, 0);
  const pick = () => { let r = rng() * totalWeight; for (const k of kinds) { r -= KINDS[k].weight; if (r <= 0) return k; } return kinds[0]; };
  const slots = [8, 19, 30];
  const sides = [
    // name of the arm, along-road unit, side unit (which way the lot lies from the road), which way its front faces
    { arm: 'east', ax: 1, az: 0, sx: 0, sz: -1, front: 0 }, { arm: 'east', ax: 1, az: 0, sx: 0, sz: 1, front: 2 },
    { arm: 'west', ax: -1, az: 0, sx: 0, sz: -1, front: 0 }, { arm: 'west', ax: -1, az: 0, sx: 0, sz: 1, front: 2 },
    { arm: 'south', ax: 0, az: 1, sx: 1, sz: 0, front: 3 }, { arm: 'south', ax: 0, az: 1, sx: -1, sz: 0, front: 1 },
    { arm: 'north', ax: 0, az: -1, sx: 1, sz: 0, front: 3 }, { arm: 'north', ax: 0, az: -1, sx: -1, sz: 0, front: 1 },
  ];
  let placed = 0;
  for (const s of sides) {
    for (const t of slots) {
      if (t + 4 > arm[s.arm]) continue;   // the road does not reach this far
      if (rng() < V.emptyLot) continue;
      const kind = KINDS[pick()];
      const [fw, fd] = footprint(kind.w, kind.d, s.front);
      // the lot's centre along the road is at distance t; its front wall is 3 off the road's middle line, and it extends away from the road
      const mx = cx + s.ax * t, mz = cz + s.az * t;
      let x0, z0;
      if (s.sx === 0) { // a lot north or south of an east-west road
        x0 = mx - (fw >> 1); z0 = s.sz < 0 ? mz - 3 - (fd - 1) : mz + 3;
      } else { // a lot east or west of a north-south road
        z0 = mz - (fd >> 1); x0 = s.sx < 0 ? mx - 3 - (fw - 1) : mx + 3;
      }
      // everything it needs (with one block of margin) must be free and level enough
      let ok = true;
      for (let x = x0 - 1; x <= x0 + fw && ok; x++) for (let z = z0 - 1; z <= z0 + fd; z++) if (!suitable(x, z) || !free(x, z)) { ok = false; break; }
      if (!ok) continue;
      for (let x = x0 - 1; x <= x0 + fw; x++) for (let z = z0 - 1; z <= z0 + fd; z++) plan.ground(x, z, topBlock, underBlock);
      const bd = builder(plan, y0, x0, z0, kind.w, kind.d, s.front);
      kind.build(bd);
      // the path from the road to the door: the row in front of the building
      const frontRow = [];
      for (let lx = 0; lx < kind.w; lx++) { const [wx, wz] = bd.toWorld(lx, kind.d); frontRow.push([wx, wz]); }
      for (const [wx, wz] of frontRow) if (suitable(wx, wz)) plan.ground(wx, wz, B.PATH, underBlock);
      plan.buildings.push({ kind: Object.keys(KINDS).find((k) => KINDS[k] === kind), x0, z0, w: fw, d: fd, front: s.front });
      const [sx, sz] = bd.toWorld((kind.w - 1) >> 1, kind.d + 1);
      plan.spawns.push({ x: sx + 0.5, y: y0 + 1, z: sz + 0.5 });
      placed++;
    }
  }

  // lamp posts in the gaps between lots
  for (const [name, dx, dz] of [['east', 1, 0], ['west', -1, 0], ['south', 0, 1], ['north', 0, -1]]) {
    for (const t of [13, 24]) {
      if (t + 2 > arm[name]) continue;
      for (const side of [-1, 1]) {
        const x = cx + dx * t + (dx ? 0 : side * 2), z = cz + dz * t + (dz ? 0 : side * 2);
        if (!free(x, z) && plan.columns.get(x + ',' + z)?.top !== B.PATH) continue;
        plan.ground(x, z, topBlock, underBlock);
        plan.put(x, y0 + 1, z, B.LOG); plan.put(x, y0 + 2, z, B.LOG); plan.put(x, y0 + 3, z, B.TORCH_FLOOR);
      }
    }
  }
  for (let i = 0; i < 4; i++) plan.spawns.push({ x: cx + 0.5 + [3, -3, 0, 0][i], y: y0 + 1, z: cz + 0.5 + [0, 0, 3, -3][i] });
  plan.placed = placed;
  return plan;
}

// ---- finding the villages ----
function chooseSite(world, rx, rz, rng) {
  const size = V.regionSize, R = V.flatRadius, margin = V.armLength + 10;
  for (let attempt = 0; attempt < V.attempts; attempt++) {
    const cx = rx * size + margin + Math.floor(rng() * (size - 2 * margin)), cz = rz * size + margin + Math.floor(rng() * (size - 2 * margin));
    const biome = world.biomeAt(cx, cz);
    if (!V.biomes.includes(biome)) continue;
    let lo = CH, hi = 0, bad = false;
    const hs = [];
    for (let dx = -R; dx <= R && !bad; dx += 4) for (let dz = -R; dz <= R; dz += 4) {
      const h = world.heightAt(cx + dx, cz + dz);
      if (h <= SEA + V.minAboveSea || !V.biomes.includes(world.biomeAt(cx + dx, cz + dz))) { bad = true; break; }
      lo = Math.min(lo, h); hi = Math.max(hi, h); hs.push(h);
    }
    if (bad || hi - lo > V.flatRange) continue;
    hs.sort((a, b) => a - b);
    return { cx, cz, y0: hs[hs.length >> 1], biome };
  }
  return null;
}

// The village of a region (or null), cached on the world
export function villageOfRegion(world, rx, rz) {
  if (world.terrain < 3) return null; // worlds started before villages existed never get any (and never look)
  const cache = (world.villageCache ??= new Map());
  const key = rx + ',' + rz;
  if (cache.has(key)) return cache.get(key);
  let village = null;
  const rng = mulberry32((hash2(rx, rz, world.seed + 7919) * 4294967296) | 0);
  if (rng() < V.chance) {
    const site = chooseSite(world, rx, rz, rng);
    if (site) {
      const plan = makePlan(world, site.cx, site.cz, site.y0, rng, site.biome);
      if (plan.placed >= V.minBuildings) village = finish(plan, site, rx, rz, rng);
    }
  }
  cache.set(key, village);
  return village;
}

function finish(plan, site, rx, rz, rng) {
  const byChunk = new Map();
  const part = (x, z) => { const k = chunkKey(x >> 4, z >> 4); let p = byChunk.get(k); if (!p) byChunk.set(k, (p = { columns: [], blocks: [] })); return p; };
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (const [k, c] of plan.columns) {
    const [x, z] = k.split(',').map(Number);
    part(x, z).columns.push({ x, z, top: c.top, under: c.under });
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
  }
  for (const [k, id] of plan.blocks) {
    const [x, y, z] = k.split(',').map(Number);
    part(x, z).blocks.push({ x, y, z, id });
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
  }
  const name = FIRST[Math.floor(rng() * FIRST.length)] + LAST[Math.floor(rng() * LAST.length)];
  return {
    key: rx + ',' + rz, name, cx: site.cx, cz: site.cz, y0: site.y0, biome: site.biome,
    bounds: { x0, x1, z0, z1 }, byChunk, buildings: plan.buildings, spawns: plan.spawns, doors: plan.doors,
  };
}

// Villages whose area touches this chunk or comes within `margin` blocks of it
export function villagesNear(world, x0, z0, x1, z1, margin = 0) {
  const size = V.regionSize, out = [];
  const reach = V.armLength + 14; // a village never extends further than this from its site, which lies inside its region
  for (let rz = Math.floor((z0 - reach) / size); rz <= Math.floor((z1 + reach) / size); rz++) {
    for (let rx = Math.floor((x0 - reach) / size); rx <= Math.floor((x1 + reach) / size); rx++) {
      const v = villageOfRegion(world, rx, rz);
      if (v && v.bounds.x1 + margin >= x0 && v.bounds.x0 - margin <= x1 && v.bounds.z1 + margin >= z0 && v.bounds.z0 - margin <= z1) out.push(v);
    }
  }
  return out;
}

// Is (x, z) inside a village, or within `margin` of one? (trees keep out)
export const inVillage = (world, x, z, margin = 0) => villagesNear(world, x, z, x, z, margin).length > 0;

// Level the village's ground in this chunk and stamp its buildings (called while the chunk is generated)
export function applyVillages(world, chunk) {
  const key = chunkKey(chunk.cx, chunk.cz);
  const x0 = chunk.cx * 16, z0 = chunk.cz * 16;
  const d = chunk.data;
  for (const v of villagesNear(world, x0, z0, x0 + 15, z0 + 15)) {
    const part = v.byChunk.get(key);
    if (!part) continue;
    for (const c of part.columns) {
      const lx = c.x - x0, lz = c.z - z0;
      for (let y = v.y0 + 1; y < Math.min(CH, v.y0 + 24); y++) d[idx(lx, y, lz)] = AIR; // whatever stood here (hill, tree) goes
      d[idx(lx, v.y0, lz)] = c.top;
      for (let y = v.y0 - 1; y >= Math.max(0, v.y0 - 3); y--) d[idx(lx, y, lz)] = c.under; // solid ground below, caves or not
    }
    for (const b of part.blocks) d[idx(b.x - x0, b.y, b.z - z0)] = b.id;
  }
}

// Where villagers of a village start (world coordinates, standing height)
export const villageSpawns = (v) => v.spawns;
