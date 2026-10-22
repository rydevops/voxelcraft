// Light levels. Every cell has a sky light (0-15) and a block light (0-15), stored together in chunk.light
// (sky in the high nibble). Light spreads from its sources and loses 1 per block; some blocks dim it more
// (leaves, water: "lightFilter" in blocks.json) and opaque blocks stop it. Sky light is 15 in every column that is
// open to the sky and falls straight down without fading. Blocks can also give off light ("light" in blocks.json).
// Changes are handled incrementally (remove the light that depended on a cell, then re-spread), so digging or
// building only touches the cells nearby. Pure logic (no rendering); the mesher bakes the levels into the geometry.
import { CS, CH, idx } from './voxel.js';
import { OPAQUE, FILTER, EMIT } from './blocks.js';
import { REG } from './registry.js';

const SKY = 0, BLK = 1;
const DIRS = [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1], [0, -1, 0], [0, 1, 0]];
const cfg = REG.game.lighting;
export const MAX_LIGHT = cfg.skyLevel;

// The darkest anything ever looks: a cave with no light at all is dim but never pure black. The renderer applies this
// floor itself (a shader uniform), so it does not shrink at night the way daylight does.
export const MIN_BRIGHTNESS = cfg.minBrightness;

// How strongly sky light shows at a level (0-1, can be fractional: averaged over a corner). This is the daylight part:
// the renderer multiplies it by the time-of-day tint.
export function skyBrightness(level) {
  const n = Math.max(0, Math.min(MAX_LIGHT, level)) / MAX_LIGHT;
  return Math.pow(n, cfg.gamma);
}

// How bright a place looks to someone standing in it, including the dim floor (used to darken the fog and the hand).
export function brightness(level) {
  return MIN_BRIGHTNESS + (1 - MIN_BRIGHTNESS) * skyBrightness(level);
}

// Block light (torches) is added on top of the daylight, untinted by the time of day, and fades to nothing:
// there is no dim floor for it (that belongs to the sky channel above), just level 0 = no glow.
export function blockBrightness(level) {
  return Math.pow(Math.max(0, Math.min(MAX_LIGHT, level)) / MAX_LIGHT, 1.25);
}

// A coordinate packed into one number so queues can be plain arrays
const OFFSET = 32768;
const pack = (x, y, z) => ((x + OFFSET) * 65536 + (z + OFFSET)) * 64 + y;
function unpack(k, out) {
  out[1] = k % 64;
  const rest = Math.floor(k / 64);
  out[0] = Math.floor(rest / 65536) - OFFSET;
  out[2] = (rest % 65536) - OFFSET;
}

export class Lighting {
  constructor(world) {
    this.world = world;
    this.tmp = [0, 0, 0];
    this.carried = null; // { x, y, z, level }: a torch in your hand lights the cell you stand in (see setCarried)
    world.addChangeListener((x, y, z, old, now) => this.onBlockChanged(x, y, z, old, now));
  }

  get hasEmitters() { return EMIT.some((v) => v > 0); }

  // how much light a block at this cell gives off: its own, or the torch someone is carrying there
  emitAt(x, y, z, id) {
    const c = this.carried;
    return Math.max(EMIT[id], c && c.x === x && c.y === y && c.z === z ? c.level : 0);
  }

  // The player carries a light (a torch in hand): it shines from this cell as if a torch stood there, and moves with them.
  // Pass level 0 (or null) to put it out. Only does work when the cell or the level changes.
  setCarried(x, y, z, level) {
    const old = this.carried;
    if (old && level > 0 && old.x === x && old.y === y && old.z === z && old.level === level) return;
    if (!old && !(level > 0)) return;
    this.carried = null;
    if (old) this.refreshBlockLight(old.x, old.y, old.z);
    if (level > 0 && this.world.getChunk(x >> 4, z >> 4) && y >= 0 && y < CH && !OPAQUE[this.world.getBlock(x, y, z)]) {
      this.carried = { x, y, z, level };
      this.refreshBlockLight(x, y, z);
    }
  }

  // Block light around one cell after what it emits changed (a torch placed or taken, a carried light moved)
  refreshBlockLight(x, y, z) {
    const now = this.world.getBlock(x, y, z);
    const rm = [], add = [];
    const b = this.get(x, y, z, BLK);
    if (b > 0) { rm.push([pack(x, y, z), b]); this.set(x, y, z, BLK, 0); }
    const e = this.emitAt(x, y, z, now);
    if (e > 0) { this.set(x, y, z, BLK, e); add.push(pack(x, y, z)); }
    for (const [dx, dy, dz] of DIRS) if (this.get(x + dx, y + dy, z + dz, BLK) > 0) add.push(pack(x + dx, y + dy, z + dz));
    add.push(...this.unspread(BLK, rm));
    this.propagate(BLK, add);
  }

  // ---- reading / writing one cell ----
  // channel value at a world cell, or -1 if that chunk is not loaded / outside the world
  get(x, y, z, ch) {
    if (y < 0 || y >= CH) return -1;
    const c = this.world.getChunk(x >> 4, z >> 4);
    if (!c) return -1;
    const v = c.light[idx(x & 15, y, z & 15)];
    return ch === SKY ? v >> 4 : v & 15;
  }

  // the brighter of the two channels: what the player sees (and what the mesher uses)
  levelAt(x, y, z) {
    if (y >= CH) return MAX_LIGHT;
    if (y < 0) return 0;
    const c = this.world.getChunk(x >> 4, z >> 4);
    if (!c) return MAX_LIGHT;
    const v = c.light[idx(x & 15, y, z & 15)];
    return Math.max(v >> 4, v & 15);
  }

  set(x, y, z, ch, val) {
    const c = this.world.getChunk(x >> 4, z >> 4);
    const i = idx(x & 15, y, z & 15);
    const v = c.light[i];
    c.light[i] = ch === SKY ? (val << 4) | (v & 15) : (v & 0xf0) | val;
    // the picture of this chunk (and a neighbour whose edge faces sample it) is out of date
    c.dirty = true;
    const lx = x & 15, lz = z & 15, cx = x >> 4, cz = z >> 4;
    const mark = (a, b) => { const n = this.world.getChunk(a, b); if (n) n.dirty = true; };
    if (lx === 0) mark(cx - 1, cz); else if (lx === 15) mark(cx + 1, cz);
    if (lz === 0) mark(cx, cz - 1); else if (lz === 15) mark(cx, cz + 1);
  }

  // ---- spreading ----
  // Light each queued cell passes on to its neighbours. Mutates the queue (appends newly lit cells).
  propagate(ch, queue) {
    const w = this.world, t = this.tmp;
    for (let qi = 0; qi < queue.length; qi++) {
      unpack(queue[qi], t);
      const x = t[0], y = t[1], z = t[2];
      const l = this.get(x, y, z, ch);
      if (l <= 1) continue;
      for (const [dx, dy, dz] of DIRS) {
        const nx = x + dx, ny = y + dy, nz = z + dz;
        if (ny < 0 || ny >= CH) continue;
        const nc = w.getChunk(nx >> 4, nz >> 4);
        if (!nc) continue;
        const nb = nc.data[idx(nx & 15, ny, nz & 15)];
        if (OPAQUE[nb]) continue;
        // sky light at full strength keeps falling through clear air; everything else loses 1 (or the block's filter)
        const nl = ch === SKY && dy === -1 && l === MAX_LIGHT && FILTER[nb] === 0 ? MAX_LIGHT : l - Math.max(1, FILTER[nb]);
        if (nl > this.get(nx, ny, nz, ch)) {
          this.set(nx, ny, nz, ch, nl);
          queue.push(pack(nx, ny, nz));
        }
      }
    }
  }

  // Remove light that came from the given (cell, oldLevel) pairs. Returns cells that are lit independently and
  // must be spread again to refill the hole.
  unspread(ch, seeds) {
    const w = this.world, t = this.tmp;
    const again = [];
    for (let qi = 0; qi < seeds.length; qi++) {
      const [k, l] = seeds[qi];
      unpack(k, t);
      const x = t[0], y = t[1], z = t[2];
      for (const [dx, dy, dz] of DIRS) {
        const nx = x + dx, ny = y + dy, nz = z + dz;
        const nl = this.get(nx, ny, nz, ch);
        if (nl <= 0) continue; // dark already, or not loaded
        const nb = w.getBlock(nx, ny, nz);
        const dependsOnUs = nl < l || (ch === SKY && dy === -1 && l === MAX_LIGHT && nl === MAX_LIGHT && FILTER[nb] === 0);
        if (dependsOnUs) {
          if (ch === BLK && this.emitAt(nx, ny, nz, nb) > 0) { this.set(nx, ny, nz, ch, this.emitAt(nx, ny, nz, nb)); again.push(pack(nx, ny, nz)); continue; } // an emitter relights itself
          this.set(nx, ny, nz, ch, 0);
          seeds.push([pack(nx, ny, nz), nl]);
        } else {
          again.push(pack(nx, ny, nz)); // brighter than the light being removed: a source in its own right
        }
      }
    }
    return again;
  }

  // sky light each cell of a column gets directly from above: 15 until something blocks or filters it
  directColumn(x, z, overrideY = -1, overrideId = 0) {
    const out = new Int8Array(CH);
    const c = this.world.getChunk(x >> 4, z >> 4);
    let level = MAX_LIGHT;
    for (let y = CH - 1; y >= 0; y--) {
      const b = y === overrideY ? overrideId : c.data[idx(x & 15, y, z & 15)];
      if (OPAQUE[b]) level = 0;
      else level = Math.max(0, level - FILTER[b]);
      out[y] = level;
    }
    return out;
  }

  // ---- a chunk has just been generated (or loaded): light it and let it exchange light with its neighbours ----
  initChunk(chunk, { clear = true } = {}) {
    const w = this.world, d = chunk.data, ox = chunk.cx * CS, oz = chunk.cz * CS;
    if (clear) chunk.light.fill(0);
    // 1. sky columns and emitters
    const emit = this.hasEmitters;
    for (let z = 0; z < CS; z++) {
      for (let x = 0; x < CS; x++) {
        let level = MAX_LIGHT;
        for (let y = CH - 1; y >= 0; y--) {
          const i = idx(x, y, z), b = d[i];
          if (OPAQUE[b]) level = 0; else level = Math.max(0, level - FILTER[b]);
          let v = level << 4;
          if (emit && EMIT[b] > 0) v |= EMIT[b];
          chunk.light[i] = v;
        }
      }
    }
    const cr = this.carried;
    if (cr && cr.x >= ox && cr.x < ox + CS && cr.z >= oz && cr.z < oz + CS && !OPAQUE[d[idx(cr.x - ox, cr.y, cr.z - oz)]]) {
      const i = idx(cr.x - ox, cr.y, cr.z - oz), v = chunk.light[i];
      if ((v & 15) < cr.level) chunk.light[i] = (v & 0xf0) | cr.level;
    }
    // 2. seeds: cells that may brighten a neighbour (lit, with a darker clear neighbour); everything on the chunk edge
    const sky = [], blk = [];
    const edge = (x, z) => x === 0 || z === 0 || x === CS - 1 || z === CS - 1;
    for (let y = 0; y < CH; y++) {
      for (let z = 0; z < CS; z++) {
        for (let x = 0; x < CS; x++) {
          const v = chunk.light[idx(x, y, z)];
          const s = v >> 4, b = v & 15;
          if (s <= 1 && b <= 1) continue;
          let seed = edge(x, z);
          if (!seed) {
            for (const [dx, dy, dz] of DIRS) {
              const ny = y + dy;
              if (ny < 0 || ny >= CH) continue;
              const ni = idx(x + dx, ny, z + dz);
              if (OPAQUE[d[ni]]) continue;
              const nv = chunk.light[ni];
              if ((nv >> 4) < s - 1 || (nv & 15) < b - 1) { seed = true; break; }
            }
          }
          if (!seed) continue;
          if (s > 1) sky.push(pack(ox + x, y, oz + z));
          if (b > 1) blk.push(pack(ox + x, y, oz + z));
        }
      }
    }
    // 3. light already in the neighbouring chunks flows in across the border
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const n = w.getChunk(chunk.cx + dx, chunk.cz + dz);
      if (!n) continue;
      for (let y = 0; y < CH; y++) {
        for (let i = 0; i < CS; i++) {
          const lx = dx === 1 ? 0 : dx === -1 ? 15 : i, lz = dz === 1 ? 0 : dz === -1 ? 15 : i; // the neighbour's cell next to the border
          const v = n.light[idx(lx, y, lz)];
          if (v >> 4 > 1) sky.push(pack(n.cx * CS + lx, y, n.cz * CS + lz));
          if ((v & 15) > 1) blk.push(pack(n.cx * CS + lx, y, n.cz * CS + lz));
        }
      }
    }
    this.propagate(SKY, sky);
    this.propagate(BLK, blk);
  }

  // Recompute everything from scratch (tests, and after bulk edits made behind the lighting's back)
  rebuildAll() {
    const chunks = [...this.world.chunks.values()];
    for (const c of chunks) c.light.fill(0);
    for (const c of chunks) this.initChunk(c, { clear: false });
    for (const c of chunks) c.dirty = true;
  }

  // ---- a block changed ----
  onBlockChanged(x, y, z, old, now) {
    const w = this.world;
    if (!w.getChunk(x >> 4, z >> 4) || y < 0 || y >= CH) return;
    const lightRelevant = OPAQUE[old] !== OPAQUE[now] || FILTER[old] !== FILTER[now] || EMIT[old] !== EMIT[now];
    if (!lightRelevant) return;

    // ---- sky light ----
    const oldCol = this.directColumn(x, z, y, old), newCol = this.directColumn(x, z);
    let removeSeeds = [], addSeeds = [];
    for (let yy = 0; yy < CH; yy++) {
      if (newCol[yy] === oldCol[yy]) continue;
      const cur = this.get(x, yy, z, SKY);
      if (newCol[yy] < oldCol[yy]) { // the column lost direct light here
        if (cur > 0) { removeSeeds.push([pack(x, yy, z), cur]); this.set(x, yy, z, SKY, 0); }
      } else { // gained it
        if (newCol[yy] > cur) { this.set(x, yy, z, SKY, newCol[yy]); }
        addSeeds.push(pack(x, yy, z));
      }
    }
    // the changed cell itself: whatever light it had came from the old situation; its neighbours refill it
    const cur = this.get(x, y, z, SKY);
    if (cur > 0 && (OPAQUE[now] || FILTER[now] > FILTER[old]) && newCol[y] === oldCol[y]) { removeSeeds.push([pack(x, y, z), cur]); this.set(x, y, z, SKY, 0); }
    for (const [dx, dy, dz] of DIRS) if (this.get(x + dx, y + dy, z + dz, SKY) > 0) addSeeds.push(pack(x + dx, y + dy, z + dz));
    addSeeds.push(...this.unspread(SKY, removeSeeds));
    this.propagate(SKY, addSeeds);

    // ---- block light ----
    if (this.hasEmitters) this.refreshBlockLight(x, y, z);
  }
}
