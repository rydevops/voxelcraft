// Minimap data: a top-down colour view of the terrain around the player. Pure (no DOM), so it runs in Node tests.
// The surface of every chunk column is cached and only recomputed when that chunk was edited (chunk.version).
import { CS, CH, idx, chunkKey } from './world.js';
import { B, PLANT, IS_WATER } from './blocks.js';

// Water runs from light blue (shallow) to dark blue (deep), whatever lies on the bed
const SHALLOW_WATER = [120, 205, 250];
const DEEP_WATER = [14, 40, 125];
const MAX_DEPTH = 12;

export class MinimapData {
  // colorOf(blockId) -> [r, g, b] (0-255): the colour a block shows when seen from above
  constructor(world, colorOf) {
    this.world = world;
    this.colorOf = colorOf;
    this.cache = new Map(); // chunkKey -> { version, y, id, depth }
  }

  // Surface info for every column of a chunk: height of the topmost visible block, its id, and (for water) the depth.
  chunkColumns(chunk) {
    const key = chunkKey(chunk.cx, chunk.cz);
    const hit = this.cache.get(key);
    if (hit && hit.version === chunk.version) return hit;
    const y = new Uint8Array(CS * CS), id = new Uint8Array(CS * CS), depth = new Uint8Array(CS * CS);
    for (let z = 0; z < CS; z++) {
      for (let x = 0; x < CS; x++) {
        let top = CH - 1;
        while (top > 0) { // skip air and plants: we want the ground (or the water surface)
          const b = chunk.data[idx(x, top, z)];
          if (b !== B.AIR && !PLANT[b]) break;
          top--;
        }
        const i = z * CS + x;
        let surface = chunk.data[idx(x, top, z)];
        y[i] = top;
        if (IS_WATER[surface]) { // look through the water to the bed and remember how deep it is
          let d = 0, yy = top;
          while (yy > 0 && IS_WATER[chunk.data[idx(x, yy, z)]] && d < MAX_DEPTH) { yy--; d++; }
          surface = chunk.data[idx(x, yy, z)];
          depth[i] = d;
        }
        id[i] = surface;
      }
    }
    const entry = { version: chunk.version, y, id, depth };
    this.cache.set(key, entry);
    return entry;
  }

  // Column at world (x, z), or null if its chunk is not loaded
  column(x, z) {
    const chunk = this.world.getChunk(x >> 4, z >> 4);
    if (!chunk) return null;
    const c = this.chunkColumns(chunk);
    const i = (z & 15) * CS + (x & 15);
    return { y: c.y[i], id: c.id[i], depth: c.depth[i] };
  }

  // The (2R+1) x (2R+1) blocks around block (cx, cz) as RGBA (alpha 0 = chunk not loaded). Pixel (i, j) is block (cx-R+i, cz-R+j).
  render(cx, cz, R) {
    const N = 2 * R + 1;
    const out = new Uint8ClampedArray(N * N * 4);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const x = cx - R + i, z = cz - R + j;
        const col = this.column(x, z);
        const o = (j * N + i) * 4;
        if (!col) continue; // transparent
        let [r, g, b] = this.colorOf(col.id);
        // relief: ground that is higher than the block to its north-west is lit, lower is shaded
        let shade = 1;
        if (col.depth === 0) {
          const nw = this.column(x - 1, z - 1);
          if (nw) shade = Math.max(0.72, Math.min(1.24, 1 + (col.y - nw.y) * 0.09));
        } else { // water: light blue where shallow, dark blue where deep (a hint of the bed shows through)
          const t = Math.min(1, (col.depth - 1) / (MAX_DEPTH - 4));
          const bed = 0.12;
          r = (SHALLOW_WATER[0] + (DEEP_WATER[0] - SHALLOW_WATER[0]) * t) * (1 - bed) + r * bed;
          g = (SHALLOW_WATER[1] + (DEEP_WATER[1] - SHALLOW_WATER[1]) * t) * (1 - bed) + g * bed;
          b = (SHALLOW_WATER[2] + (DEEP_WATER[2] - SHALLOW_WATER[2]) * t) * (1 - bed) + b * bed;
        }
        out[o] = r * shade; out[o + 1] = g * shade; out[o + 2] = b * shade; out[o + 3] = 255;
      }
    }
    return out;
  }
}

// ---- the clocks shown under the map -------------------------------------------------------------------
// In-game clock: dayTime 0 = sunrise = 6:00, 0.25 = noon = 12:00, 0.75 = midnight = 0:00
export function gameClock(dayTime) {
  const hours = (dayTime * 24 + 6) % 24;
  const h = Math.floor(hours), m = Math.floor((hours - h) * 60);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

export function gameDayPart(dayTime) {
  const s = Math.sin(dayTime * Math.PI * 2);
  if (Math.abs(s) < 0.14) return dayTime < 0.5 ? 'Sunrise' : 'Sunset';
  if (s < 0) return 'Night';
  return dayTime < 0.25 ? 'Morning' : 'Afternoon';
}
