// Voxel world: procedural terrain, chunk storage, player edits. Pure data, no rendering.
import { Noise, hash2 } from './noise.js';
import { B, PLANT, IS_WATER, HYDRATES } from './blocks.js';
import { REG } from './registry.js';

const TILL = REG.game.tilling; // how close water must be for soil to be tilled

const WG = REG.worldgen; // terrain / ore / tree / ground-cover settings from data/worldgen.json
const IDS = WG.ids;

import { CS, CH, chunkKey, idx } from './voxel.js';
import { Lighting } from './light.js';
import { pickVariant, treeBlocks } from './trees.js';
export { CS, CH, chunkKey, idx };
export const SEA = WG.seaLevel;
export const SNOW_LINE = WG.snowLine;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};


export class Chunk {
  constructor(cx, cz) {
    this.cx = cx;
    this.cz = cz;
    this.data = new Uint8Array(CS * CH * CS);
    this.dirty = true;   // needs (re)meshing
    this.meshes = null;  // set by the renderer
    this.plants = new Set(); // local indices of plant blocks (so growth doesn't scan the whole chunk)
    this.hydrating = new Set(); // local indices of soil that tracks moisture (farmland)
    this.version = 0;    // bumped on every edit (the minimap re-reads a chunk when this changes)
    this.light = new Uint8Array(CS * CH * CS); // per cell: sky light (high nibble) and block light (low nibble), 0-15 each
  }
}

export class World {
  constructor(seed) {
    this.seed = seed;
    this.noise = new Noise(seed);
    this.noiseB = new Noise(seed ^ 0x5bd1e995);
    this.chunks = new Map();
    this.edits = new Map(); // chunkKey -> Map(localIndex -> blockId)
    this.legacyCaves = new Set(); // chunkKeys that keep the original cave rules (see loadEdits)
    this.editsDirty = false;
    this.listeners = []; // (x, y, z, oldId, newId) => void, called after every setBlock (water, falling sand ...)
    this.lighting = new Lighting(this); // light levels (see light.js); listens for block changes
  }

  // ---- terrain ---------------------------------------------------------
  heightAt(x, z) {
    const n = this.noise;
    const T = WG.terrain;
    const continent = n.fbm2(x * T.continentScale, z * T.continentScale, 3);
    const hills = n.fbm2(x * T.hillScale + 100, z * T.hillScale + 100, 4);
    const ridge = 1 - Math.abs(n.noise2(x * T.ridgeScale - 50, z * T.ridgeScale - 50));
    const mountain = smoothstep(0.08, 0.55, continent);
    let h = SEA + T.baseAboveSea + continent * T.continentHeight + hills * T.hillHeight;
    h += Math.pow(ridge, 3) * mountain * T.ridgeHeight;

    // Rivers: follow the zero-line of a warped noise field. The channel is cut down below sea level and the
    // banks slope gently up to the surrounding land, so there is grass within a few blocks of the water.
    // They fade out in high ground (a river never cuts through a mountain).
    const R = WG.rivers;
    const warpX = x + R.warp * n.noise2(x * 0.02 + 11, z * 0.02 + 7);
    const warpZ = z + R.warp * n.noise2(x * 0.02 - 31, z * 0.02 + 53);
    const a = Math.abs(this.noiseB.noise2(warpX * R.scale + 300, warpZ * R.scale - 120));
    const lowland = 1 - smoothstep(SEA + R.lowlandFrom, SEA + R.lowlandTo, h);
    const carve = (1 - smoothstep(R.coreWidth, R.bankWidth, a)) * lowland;
    const bed = SEA - R.bedBelowSea;
    if (carve > 0 && h > bed) h -= (h - bed) * carve;

    return Math.floor(clamp(h, 3, CH - 6));
  }

  forestDensity(x, z) {
    const f = this.noiseB.fbm2(x * 0.02, z * 0.02, 2);
    return WG.trees.baseDensity + WG.trees.forestDensity * smoothstep(0.0, 0.45, f);
  }

  // Wide chambers: one low-frequency 3D noise field that peaks inside the rock, away from the surface
  isCavern(x, y, z) {
    const c = WG.caves.caverns;
    if (!c || y < c.minY || y > c.maxY) return false;
    const [sx, sy, sz] = c.scale;
    return this.noiseB.noise3(x * sx + 211, y * sy + 57, z * sz - 93) > c.threshold;
  }

  // Columns where the tunnels are allowed to break through to the open air (so caves can be found from outside)
  isEntrance(x, z) {
    const e = WG.caves.entrances;
    return !!e && this.noiseB.noise3(x * e.scale + 500, 0.5, z * e.scale - 500) > e.threshold;
  }

  isCave(x, y, z) {
    const n = this.noiseB, [sx, sy, sz] = WG.caves.scale, t = WG.caves.threshold;
    const a = Math.abs(n.noise3(x * sx, y * sy, z * sz));
    if (a > t) return false;
    const b = Math.abs(n.noise3(x * sx + 77, y * sy + 31, z * sz + 13));
    return b < t;
  }

  // Ore veins are blobs where a 3D noise field peaks. Each ore in worldgen.json has its own noise settings and
  // height range; the first ore whose noise peaks here wins (so list the rarer ones first).
  oreAt(x, y, z) {
    const n = this.noiseB;
    for (const o of WG.ores) {
      if (y < o.minY || y >= o.maxY) continue;
      if (n.noise3(x * o.scale + o.offset[0], y * o.scale + o.offset[1], z * o.scale + o.offset[2]) > o.threshold) return o.id;
    }
    return IDS.stone;
  }

  hasTree(wx, wz) {
    const hv = hash2(wx, wz, this.seed);
    if (hv >= WG.trees.baseDensity + WG.trees.forestDensity) return false; // cheap reject before the noise lookup
    if (hv >= this.forestDensity(wx, wz)) return false;
    const h = this.heightAt(wx, wz);
    return h >= SEA + WG.trees.minAboveSea && h < SNOW_LINE - WG.trees.belowSnowLine;
  }

  treesNear(x, z, r) {
    let n = 0;
    for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) if (this.hasTree(x + dx, z + dz)) n++;
    return n;
  }

  generateChunk(cx, cz) {
    const chunk = new Chunk(cx, cz);
    const d = chunk.data;
    const modern = !this.legacyCaves.has(chunkKey(cx, cz)); // chunks built on in an older version keep the old caves, so the ground under your work does not change
    const ox = cx * CS, oz = cz * CS;

    for (let lz = 0; lz < CS; lz++) {
      for (let lx = 0; lx < CS; lx++) {
        const wx = ox + lx, wz = oz + lz;
        const h = this.heightAt(wx, wz);
        const beach = h <= SEA + WG.beachAboveSea;
        const snowy = h >= SNOW_LINE;
        const cave = WG.caves;
        const entrance = modern && this.isEntrance(wx, wz);

        for (let y = 0; y <= h; y++) {
          let id = IDS.stone;
          if (y === h) id = beach ? IDS.beach : snowy ? IDS.snowSurface : IDS.surface;
          else if (y >= h - WG.blocks.fillerDepth) id = beach ? IDS.beachFiller : snowy ? IDS.snowFiller : IDS.filler;
          const open = y >= cave.minY && (y < h - cave.surfaceDepth || (h > SEA + 1 && y <= h && entrance) ? this.isCave(wx, y, wz) : false);
          if (open || (modern && y < h - (cave.caverns?.surfaceDepth ?? 6) && this.isCavern(wx, y, wz))) id = B.AIR;
          else if (id === IDS.stone) id = this.oreAt(wx, y, wz);
          d[idx(lx, y, lz)] = id;
        }
        for (let y = h + 1; y <= SEA; y++) d[idx(lx, y, lz)] = IDS.sea;
        if (!beach && !snowy && h + 1 < CH && d[idx(lx, h, lz)] !== B.AIR && hash2(wx, wz, this.seed + 97) < WG.groundCover.chance) {
          let r = hash2(wx, wz, this.seed + 131);
          const total = WG.groundCover.variants.reduce((t, v) => t + v.weight, 0);
          let pick = WG.groundCover.variants[WG.groundCover.variants.length - 1].id;
          for (const v of WG.groundCover.variants) { if (r < v.weight / total) { pick = v.id; break; } r -= v.weight / total; }
          d[idx(lx, h + 1, lz)] = pick;
        }
      }
    }

    this.growTrees(chunk);
    this.applyEdits(chunk);
    for (let i = 0; i < d.length; i++) { if (PLANT[d[i]]) chunk.plants.add(i); if (HYDRATES[d[i]]) chunk.hydrating.add(i); }
    this.chunks.set(chunkKey(cx, cz), chunk);
    this.lighting.initChunk(chunk);
    return chunk;
  }

  // Trees are placed by hashing world columns, so a tree straddling a chunk
  // border is generated identically (and seamlessly) from both sides.
  growTrees(chunk) {
    const ox = chunk.cx * CS, oz = chunk.cz * CS;
    const d = chunk.data;
    const put = (wx, y, wz, id, onlyAir) => {
      const lx = wx - ox, lz = wz - oz;
      if (lx < 0 || lx >= CS || lz < 0 || lz >= CS || y < 0 || y >= CH) return;
      const i = idx(lx, y, lz);
      if (onlyAir && d[i] !== B.AIR) return;
      d[i] = id;
    };

    const legacy = this.legacyCaves.has(chunkKey(chunk.cx, chunk.cz)); // an older save: its trees stay the original oak
    for (let wz = oz - 2; wz < oz + CS + 2; wz++) {
      for (let wx = ox - 2; wx < ox + CS + 2; wx++) {
        if (hash2(wx, wz, this.seed) >= this.forestDensity(wx, wz)) continue;
        const h = this.heightAt(wx, wz);
        if (h < SEA + WG.trees.minAboveSea || h >= SNOW_LINE - WG.trees.belowSnowLine) continue;
        const variant = pickVariant(this.seed, wx, wz, h, legacy);
        for (const blk of treeBlocks(variant, this.seed, wx, h, wz)) put(blk.x, blk.y, blk.z, blk.id, blk.leaf); // leaves only into air, logs over anything
      }
    }
  }

  applyEdits(chunk) {
    const e = this.edits.get(chunkKey(chunk.cx, chunk.cz));
    if (!e) return;
    for (const [i, id] of e) chunk.data[i] = id;
  }

  // ---- access ----------------------------------------------------------
  getChunk(cx, cz) {
    return this.chunks.get(chunkKey(cx, cz));
  }

  getBlock(x, y, z) {
    if (y < 0 || y >= CH) return B.AIR;
    const c = this.chunks.get(chunkKey(x >> 4, z >> 4));
    if (!c) return B.AIR;
    return c.data[idx(x & 15, y, z & 15)];
  }

  // Is there water within a circle of the configured radius (game.json "tilling") around this block?
  // Used to decide whether soil can be tilled into farmland.
  nearWater(x, y, z, radius = TILL.radius) {
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (dx * dx + dz * dz > radius * radius) continue;
        for (let dy = -TILL.waterBelow; dy <= TILL.waterAbove; dy++) if (IS_WATER[this.getBlock(x + dx, y + dy, z + dz)]) return true;
      }
    }
    return false;
  }

  addChangeListener(fn) {
    this.listeners.push(fn);
  }

  // Can a block be put here? The world has a fixed height and only loaded chunks can be changed.
  canPlace(x, y, z) {
    return y >= 0 && y < CH && this.isLoaded(x, z);
  }

  isLoaded(x, z) {
    return this.chunks.has(chunkKey(x >> 4, z >> 4));
  }

  // Returns the list of chunks whose meshes are affected.
  setBlock(x, y, z, id) {
    if (y < 0 || y >= CH) return [];
    const cx = x >> 4, cz = z >> 4;
    const c = this.getChunk(cx, cz);
    if (!c) return [];
    const lx = x & 15, lz = z & 15;
    const old = c.data[idx(lx, y, lz)];
    c.data[idx(lx, y, lz)] = id;
    c.version++;
    if (PLANT[old]) c.plants.delete(idx(lx, y, lz));
    if (PLANT[id]) c.plants.add(idx(lx, y, lz));
    if (HYDRATES[old]) c.hydrating.delete(idx(lx, y, lz));
    if (HYDRATES[id]) c.hydrating.add(idx(lx, y, lz));

    const k = chunkKey(cx, cz);
    let e = this.edits.get(k);
    if (!e) this.edits.set(k, (e = new Map()));
    e.set(idx(lx, y, lz), id);
    this.editsDirty = true;

    const touched = [c];
    const add = (nx, nz) => {
      const n = this.getChunk(nx, nz);
      if (n) touched.push(n);
    };
    if (lx === 0) add(cx - 1, cz);
    if (lx === CS - 1) add(cx + 1, cz);
    if (lz === 0) add(cx, cz - 1);
    if (lz === CS - 1) add(cx, cz + 1);
    for (const t of touched) t.dirty = true;
    for (const fn of this.listeners) fn(x, y, z, old, id);
    return touched;
  }

  // Prefer dry, gentle ground with a few trees in reach: the first goal is to punch wood.
  hasWaterNear(x, z, r) {
    for (let dz = -r; dz <= r; dz += 3) for (let dx = -r; dx <= r; dx += 3) if (this.heightAt(x + dx, z + dz) < SEA) return true;
    return false;
  }

  findSpawn() {
    for (const [needTrees, needWater] of [[true, true], [true, false], [false, false]]) {
      for (let r = 0; r < 300; r += 4) {
        for (let a = 0; a < 8; a++) {
          const x = Math.round(Math.cos((a * Math.PI) / 4) * r);
          const z = Math.round(Math.sin((a * Math.PI) / 4) * r);
          const h = this.heightAt(x, z);
          if (h <= SEA + WG.beachAboveSea || h >= SNOW_LINE - 4) continue;
          if (needTrees && this.treesNear(x, z, WG.spawn.treeRadius) < WG.spawn.minTrees) continue;
          if (needWater && !this.hasWaterNear(x, z, WG.spawn.waterRadius)) continue;
          return { x: x + 0.5, y: h + 1, z: z + 0.5 };
        }
      }
    }
    return { x: 0.5, y: SEA + 10, z: 0.5 };
  }

  // ---- persistence -----------------------------------------------------
  serializeLegacy() {
    return [...this.legacyCaves].map((k) => `${Math.floor(k / 65536) - 32768},${(k % 65536) - 32768}`);
  }

  serializeEdits() {
    const out = {};
    for (const [k, e] of this.edits) {
      const cx = Math.floor(k / 65536) - 32768;
      const cz = (k % 65536) - 32768;
      out[`${cx},${cz}`] = Object.fromEntries(e);
    }
    return out;
  }

  // legacy: the list of "cx,cz" chunks that must keep the original cave rules. A save that has none recorded (made before the
  // wide caverns and surface openings existed) counts every chunk it has edits for.
  loadEdits(obj, legacy = null) {
    for (const key of legacy ?? Object.keys(obj || {})) { const [cx, cz] = key.split(',').map(Number); this.legacyCaves.add(chunkKey(cx, cz)); }
    for (const [key, entries] of Object.entries(obj || {})) {
      const [cx, cz] = key.split(',').map(Number);
      const m = new Map();
      for (const [i, id] of Object.entries(entries)) m.set(Number(i), id);
      this.edits.set(chunkKey(cx, cz), m);
    }
  }
}
