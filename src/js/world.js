// Voxel world: procedural terrain, chunk storage, player edits. Pure data, no rendering.
import { Noise, hash2 } from './noise.js';
import { B, PLANT, IS_WATER, HYDRATES } from './blocks.js';
import { REG } from './registry.js';

const TILL = REG.game.tilling; // how close water must be for soil to be tilled

const WG = REG.worldgen; // terrain / ore / tree / ground-cover settings from data/worldgen.json
const IDS = WG.ids;
IDS.bedrock = REG.idOfKey.get('bedrock');

import { CS, CH, chunkKey, idx } from './voxel.js';
import { Lighting } from './light.js';
import { pickVariant, treeBlocks } from './trees.js';
import { applyVillages, inVillage } from './villages.js';
export { CS, CH, chunkKey, idx };
export const SEA = WG.seaLevel;
export const SNOW_LINE = WG.snowLine;
export const LATEST_TERRAIN = 4; // what a new world starts with (see World)

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
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
    this.top = 0;        // one above the highest block that is not air: everything from here up is open sky, so scans can stop there
    this.light = new Uint8Array(CS * CH * CS); // per cell: sky light (high nibble) and block light (low nibble), 0-15 each
  }

  // Work out `top` from the blocks (after the data was filled in directly instead of through World.setBlock)
  recomputeTop() {
    this.top = 0;
    for (let i = this.data.length - 1; i >= 0; i--) if (this.data[i] !== 0) { this.top = (i >> 8) + 1; break; }
    return this.top;
  }
}

export class World {
  // terrain: 4 = oceans, more biomes and new villages; 3 = biomes and villages; 2 = the biomes without villages; 1 = the original rolling terrain.
  // Worlds keep the terrain they were started with (it is saved), so the ground under what people built never changes.
  constructor(seed, { terrain = 3 } = {}) {
    this.seed = seed;
    this.terrain = terrain;
    this.T = terrain >= 4 ? { ...WG.terrain, ...WG.terrain4 } : WG.terrain; // terrain shape numbers
    this.S = terrain >= 4 ? WG.biomes.select4 : WG.biomes.select;        // climate cut-offs
    this.maxHeight = terrain >= 4 ? WG.terrain4.maxHeight : WG.terrain.maxHeight; // the highest the ground gets
    this.snowLine = terrain >= 4 ? WG.snowLine4 : WG.snowLine;
    this.noise = new Noise(seed);
    this.noiseB = new Noise(seed ^ 0x5bd1e995);
    this.noiseC = new Noise(seed ^ 0x2545f491); // the sea
    this.chunks = new Map();
    this.edits = new Map(); // chunkKey -> Map(localIndex -> blockId)
    this.legacyCaves = new Set(); // chunkKeys that keep the original cave rules (see loadEdits)
    this.editsDirty = false;
    this.listeners = []; // (x, y, z, oldId, newId) => void, called after every setBlock (water, falling sand ...)
    this.lighting = new Lighting(this); // light levels (see light.js); listens for block changes
  }

  // ---- terrain ---------------------------------------------------------
  // ---- climate and biomes (terrain 2) ----
  climate(x, z) {
    const k = WG.biomes.climateScale;
    return {
      temp: this.noiseB.fbm2(x * k + 900, z * k - 400, 2),
      wet: this.noiseB.fbm2(x * k - 700, z * k + 250, 2),
      rel: this.noise.fbm2(x * k * 1.15 + 1300, z * k * 1.15 - 800, 2),
    };
  }

  // The biome of a column: 'plains', 'forest', 'hills', 'mountains', 'desert' or 'tundra'; terrain 4 adds 'savanna', 'jungle', 'swamp',
  // 'taiga', 'badlands' and the seas 'ocean', 'deep_ocean' and 'frozen_ocean' (null in the original terrain)
  biomeAt(x, z) {
    if (this.terrain < 2) return null;
    const c = this.climate(x, z);
    if (this.terrain < 4) return this.biomeOf(c);
    let f = this.oceanFactor(x, z);
    if (f >= WG.biomes.ocean.minFactor && this.heightAt(x, z) > SEA) f = 0; // (a shore or cliff above the water is land, whatever the sea round it)
    return this.biomeOf4(c, f);
  }

  // What to show for the place you are standing in: { key, label, climate: 'cold' | 'hot' | 'temperate' | 'ocean' | 'coast' }
  biomeInfo(x, z, y = 99) {
    const key = this.biomeAt(x, z);
    const t = key && WG.biomes.types[key];
    if (!t) return { key: null, label: '', climate: 'temperate' };
    if (t.water) return { key, label: t.label, climate: t.climate === 'cold' ? 'cold' : 'ocean' }; // (a frozen sea is cold: it snows on it)
    if (this.terrain >= 4 && y <= SEA + 3 && this.heightAt(Math.floor(x), Math.floor(z)) <= SEA + 2) return { key, label: t.label + ' (coast)', climate: 'coast' };
    return { key, label: t.label, climate: t.climate };
  }

  // How much sea there is at a column: 0 = dry land, 1 = the middle of the ocean (terrain 4)
  oceanFactor(x, z) {
    const o = WG.biomes.ocean;
    const v = this.noiseC.fbm2(x * o.scale + 1700, z * o.scale - 900, 3);
    return clamp((o.threshold - v) / o.blend, 0, 1);
  }

  biomeOf4(c, f) {
    const S = this.S, O = WG.biomes.ocean;
    if (f >= O.minFactor) return c.temp < O.iceTemp ? 'frozen_ocean' : f >= O.deepFrom ? 'deep_ocean' : 'ocean';
    if (c.rel > S.mountainRel) return 'mountains';
    if (c.temp > S.hotTemp) {
      if (c.wet < S.dryWet) return c.rel > S.badlandsRel ? 'badlands' : 'desert';
      return c.wet > S.jungleWet ? 'jungle' : 'savanna';
    }
    if (c.temp < S.coldTemp) return c.wet > S.taigaWet ? 'taiga' : 'tundra';
    if (c.wet > S.swampWet && c.rel < S.swampRel && c.temp > S.swampTemp[0] && c.temp < S.swampTemp[1]) return 'swamp';
    if (c.rel > S.hillsRel) return 'hills';
    return c.wet > S.forestWet ? 'forest' : 'plains';
  }

  // Terrain 4 on top of the shared height: swamps lie flat just at the water line, badlands rise in terraces, and the sea takes the land down
  // to a shelf and then a deep floor.
  shapeV4(x, z, h, c, hills) {
    const S = this.S, O = WG.biomes.ocean, bl = S.blend;
    const mild = smoothstep(S.swampTemp[0] - bl, S.swampTemp[0] + bl, c.temp) * (1 - smoothstep(S.swampTemp[1] - bl, S.swampTemp[1] + bl, c.temp));
    const swamp = smoothstep(S.swampWet - bl, S.swampWet + bl, c.wet) * (1 - smoothstep(S.swampRel - bl, S.swampRel + bl, c.rel)) * mild;
    if (swamp > 0) h = lerp(h, SEA + 1.4 + hills * 1.8, swamp);
    const hot = smoothstep(S.hotTemp - bl * 0.5, S.hotTemp + bl, c.temp), dry = 1 - smoothstep(S.dryWet - bl, S.dryWet + bl * 0.5, c.wet);
    const bad = hot * dry * smoothstep(S.badlandsRel - bl, S.badlandsRel + bl, c.rel) * (1 - smoothstep(S.mountainRel - bl, S.mountainRel + bl, c.rel));
    if (bad > 0) {
      const u = (h - SEA) / 5, k = Math.floor(u);
      h = lerp(h, SEA + (k + smoothstep(0.7, 1, u - k)) * 5 + 2, bad);
    }
    const f = this.oceanFactor(x, z);
    if (f > 0) {
      const floor = SEA - lerp(O.shelfDepth, O.deepDepth, smoothstep(0.25, 0.95, f));
      h = lerp(h, floor, smoothstep(0, 0.7, f));
    }
    return h;
  }

  biomeOf(c) {
    const S = WG.biomes.select;
    if (c.rel > S.mountainRel) return 'mountains';
    if (c.temp > S.hotTemp && c.wet < S.dryWet) return 'desert';
    if (c.temp < S.coldTemp) return 'tundra';
    if (c.rel > S.hillsRel) return 'hills';
    return c.wet > S.forestWet ? 'forest' : 'plains';
  }

  // Terrain height from the climate: flat plains and deserts (with a few low dunes), rolling hills, and mountains that rise out of
  // foothills. The big continent noise (oceans, lakes) and the rivers are shared by every biome.
  heightBiomes(x, z) {
    const n = this.noise;
    const T = this.T, S = this.S;
    const c = this.climate(x, z);
    const continent = n.fbm2(x * T.continentScale, z * T.continentScale, 3);
    const hills = n.fbm2(x * T.hillScale + 100, z * T.hillScale + 100, 4);
    const ridge = 1 - Math.abs(n.noise2(x * T.ridgeScale - 50, z * T.ridgeScale - 50));
    const bl = S.blend;
    const rolling = smoothstep(S.hillsRel - bl, S.hillsRel + bl, c.rel);
    const mountain = smoothstep(S.mountainRel - bl, S.mountainRel + bl * 1.2, c.rel);
    const desert = smoothstep(S.hotTemp - bl * 0.5, S.hotTemp + bl, c.temp) * (1 - smoothstep(S.dryWet - bl, S.dryWet + bl * 0.5, c.wet)) * (1 - mountain);
    // flat country keeps its lakes and seas but its dry land is only gently raised: the continent noise is flattened above sea level
    const land = continent > 0 ? continent * lerp(T.flatContinent, 1, Math.max(rolling * 0.7, mountain)) : continent;
    let h = SEA + T.baseAboveSea + land * T.continentHeight;
    h += hills * lerp(T.plainsHills, T.rollingHills, rolling) * (1 - 0.45 * desert);
    h += desert * (n.noise2(x * T.duneScale + 40, z * T.duneScale - 90) * 0.5 + 0.5) * T.duneHeight;
    h += mountain * T.mountainUplift + Math.pow(ridge, 2.4) * mountain * T.mountainHeight;
    if (this.terrain >= 4) h = this.shapeV4(x, z, h, c, hills);
    return this.carveRivers(x, z, h);
  }

  // Rivers: follow the zero-line of a warped noise field. The channel is cut down below sea level and the
  // banks slope gently up to the surrounding land, so there is grass within a few blocks of the water.
  // They fade out in high ground (a river never cuts through a mountain).
  carveRivers(x, z, h) {
    const n = this.noise;
    const R = WG.rivers;
    const warpX = x + R.warp * n.noise2(x * 0.02 + 11, z * 0.02 + 7);
    const warpZ = z + R.warp * n.noise2(x * 0.02 - 31, z * 0.02 + 53);
    const a = Math.abs(this.noiseB.noise2(warpX * R.scale + 300, warpZ * R.scale - 120));
    const lowland = 1 - smoothstep(SEA + R.lowlandFrom, SEA + R.lowlandTo, h);
    const carve = (1 - smoothstep(R.coreWidth, R.bankWidth, a)) * lowland;
    const bed = SEA - R.bedBelowSea;
    if (carve > 0 && h > bed) h -= (h - bed) * carve;
    return Math.floor(clamp(h, 3, this.maxHeight));
  }

  heightAt(x, z) {
    if (this.terrain >= 2) return this.heightBiomes(x, z);
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

    return Math.floor(clamp(h, 3, this.maxHeight));
  }

  // Chance that a column grows a tree: patchy forests everywhere, scaled by the biome (none in deserts, dense in forests)
  forestDensity(x, z, biome = null) {
    const f = this.noiseB.fbm2(x * 0.02, z * 0.02, 2);
    const b = biome && WG.biomes.types[biome];
    const patch = Math.max(smoothstep(0.0, 0.45, f), b?.denseMin ?? 0);
    return (WG.trees.baseDensity + WG.trees.forestDensity * patch) * (b?.trees ?? 1);
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
    if (hv >= this.forestDensity(wx, wz, this.biomeAt(wx, wz))) return false;
    if (this.terrain >= 3 && inVillage(this, wx, wz, 5)) return false; // (the same rule as growTrees)
    const h = this.heightAt(wx, wz);
    return h >= SEA + WG.trees.minAboveSea && h < this.snowLine - WG.trees.belowSnowLine;
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
        const v4 = this.terrain >= 4;
        const biome = WG.biomes?.types[this.biomeAt(wx, wz)]; // undefined in the original terrain
        const sea = v4 && !!biome?.water; // the floor of an ocean
        const O = WG.biomes.ocean;
        const beach = !sea && !(v4 && biome?.noBeach) && h <= SEA + WG.beachAboveSea;
        const snowy = !sea && h >= this.snowLine;
        const rock = biome && biome.rockFrom != null && h >= biome.rockFrom && !sea; // bare stone high in the mountains
        const gravelFloor = sea && (SEA - h > O.gravelBelow || biome.surfaceId === O.gravelId);
        const topId = sea ? (gravelFloor ? O.gravelId : biome.surfaceId) : beach ? IDS.beach : snowy ? IDS.snowSurface : rock ? IDS.stone : biome ? biome.surfaceId : IDS.surface;
        const underId = sea ? (gravelFloor ? O.gravelId : biome.fillerId) : beach ? IDS.beachFiller : snowy ? IDS.snowFiller : rock ? IDS.stone : biome ? biome.fillerId : IDS.filler;
        const depth = biome && !beach && !snowy ? biome.fillerDepth : WG.blocks.fillerDepth;
        const strata = v4 && !beach && !snowy && biome?.strataIds?.length ? biome.strataIds : null; // bands of clay (badlands)
        const cave = WG.caves;
        const entrance = modern && this.isEntrance(wx, wz);

        for (let y = 0; y <= h; y++) {
          let id = IDS.stone;
          if (y === 0) id = IDS.bedrock; // the bottom of the world cannot be dug
          else if (y === h) id = topId;
          else if (strata && y >= h - 14) id = strata[(y >> 1) % strata.length];
          else if (y >= h - depth) id = underId;
          const open = y >= cave.minY && (y < h - cave.surfaceDepth || (h > SEA + 1 && y <= h && entrance) ? this.isCave(wx, y, wz) : false);
          if (y === 0) { /* bedrock stays */ } else if (open || (modern && y < h - (cave.caverns?.surfaceDepth ?? 6) && this.isCavern(wx, y, wz))) id = B.AIR;
          else if (id === IDS.stone) id = this.oreAt(wx, y, wz);
          d[idx(lx, y, lz)] = id;
        }
        for (let y = h + 1; y <= SEA; y++) d[idx(lx, y, lz)] = IDS.sea;
        if (v4 && biome?.freeze && h < SEA) d[idx(lx, SEA, lz)] = O.iceId; // cold lakes and seas freeze over
        // what grows on the ground: grass tufts (and, in terrain 4, flowers and ferns that depend on the biome)
        const cover = v4 ? (topId === biome?.surfaceId && h > SEA ? biome.cover : null) : topId === IDS.surface ? { chance: WG.groundCover.chance, variants: WG.groundCover.variants } : null;
        if (cover && h + 1 < CH && d[idx(lx, h, lz)] !== B.AIR && hash2(wx, wz, this.seed + 97) < cover.chance) {
          let r = hash2(wx, wz, this.seed + 131);
          const total = cover.variants.reduce((t, v) => t + v.weight, 0);
          let pick = cover.variants[cover.variants.length - 1].id;
          for (const v of cover.variants) { if (r < v.weight / total) { pick = v.id; break; } r -= v.weight / total; }
          d[idx(lx, h + 1, lz)] = pick;
        }
      }
    }

    this.growTrees(chunk);
    if (this.terrain >= 3) applyVillages(this, chunk); // levelled ground, houses, roads
    this.applyEdits(chunk);
    chunk.recomputeTop();
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
        const hv = hash2(wx, wz, this.seed);
        if (hv >= WG.trees.baseDensity + WG.trees.forestDensity) continue; // (cheap reject before the noise lookups)
        const biome = this.biomeAt(wx, wz);
        if (hv >= this.forestDensity(wx, wz, biome)) continue;
        if (this.terrain >= 3 && inVillage(this, wx, wz, 5)) continue; // villages are kept clear of trees
        const h = this.heightAt(wx, wz);
        if (h < SEA + WG.trees.minAboveSea || h >= this.snowLine - WG.trees.belowSnowLine) continue;
        const variant = pickVariant(this.seed, wx, wz, h, legacy, biome, this.terrain);
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
    if (id !== B.AIR && y >= c.top) c.top = y + 1;
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
          if (h <= SEA + WG.beachAboveSea || h >= this.snowLine - 4) continue;
          if (this.terrain >= 3 && inVillage(this, x, z, 12)) continue; // (the village floor is not at this terrain height)
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
