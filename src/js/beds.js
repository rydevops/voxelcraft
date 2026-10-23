// Beds. A bed is two squares long and as wide as its size: single 1, double 2, queen 3, king 4. Each square is a block (the foot, or the head
// with the pillow on the side the bed faces), so a bed is part of the world and survives a save with nothing extra stored. What the bed
// is worth is its size: breaking any square takes the whole bed apart and gives back the bed (or beds) it was made of.
// Sleeping flips day and night, and a bed you slept in is where you come back after dying: until it is broken.
import { B, BED, SOLID, PLANT, IS_WATER } from './blocks.js';
import { BED_ITEMS } from './items.js';

const FWD = [[0, -1], [1, 0], [0, 1], [-1, 0]];  // n, e, s, w: which way the head lies from the foot
const RIGHT = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // the way a wider bed spreads (to the right of where you look)

const free = (id) => id === B.AIR || PLANT[id] > 0 || IS_WATER[id] === 1;

// The squares a bed of this item would take if its foot went at (x, y, z) and you are looking `facing` (0-3 = n, e, s, w):
// [{ x, y, z, id }] or null if something is in the way or a square has nothing solid under it.
export function bedCells(world, x, y, z, facing, spec) {
  const cells = [];
  const [fx, fz] = FWD[facing], [rx, rz] = RIGHT[facing];
  for (let k = 0; k < spec.width; k++) {
    const bx = x + rx * k, bz = z + rz * k;
    for (const [part, d] of [['foot', 0], ['head', 1]]) {
      const cx = bx + fx * d, cz = bz + fz * d;
      if (!world.canPlace(cx, y, cz)) return null;
      if (!free(world.getBlock(cx, y, cz))) return null;
      if (SOLID[world.getBlock(cx, y - 1, cz)] !== 1) return null; // a bed needs a floor, a whole block of it
      cells.push({ x: cx, y, z: cz, id: part === 'foot' ? spec.foot : spec.heads[facing] });
    }
  }
  return cells;
}

// Every square of the bed (or beds touching each other) that includes (x, y, z): a flood fill over neighbouring bed blocks of one colour.
export function bedGroup(world, x, y, z) {
  const start = BED.get(world.getBlock(x, y, z));
  if (!start) return [];
  const seen = new Set([x + ',' + z]), out = [], queue = [[x, z]];
  while (queue.length && out.length < 32) {
    const [cx, cz] = queue.pop();
    out.push({ x: cx, y, z: cz, id: world.getBlock(cx, y, cz) });
    for (const [dx, dz] of FWD) {
      const nx = cx + dx, nz = cz + dz, k = nx + ',' + nz;
      if (seen.has(k)) continue;
      const b = BED.get(world.getBlock(nx, y, nz));
      if (b && b.color === start.color) { seen.add(k); queue.push([nx, nz]); }
    }
  }
  return out;
}

// What a bed of `squares` squares gives back when it is broken: the widest beds that fit (a king, then a queen ...), in its colour.
// [{ item, n }]
export function bedDrops(color, squares) {
  let width = Math.max(1, Math.floor(squares / 2));
  const out = [];
  for (const it of BED_ITEMS.filter((i) => i.bed.color === color)) { // widest first
    const n = Math.floor(width / it.bed.width);
    if (n > 0) { out.push({ item: it.id, n }); width -= n * it.bed.width; }
  }
  return out;
}

export const isBed = (world, x, y, z) => BED.has(world.getBlock(x, y, z));

// Somewhere to stand beside a bed (where you wake up, or come back after dying): a spot with a floor and two blocks of air. null if boxed in.
export function bedSpawn(world, x, y, z) {
  const spots = [];
  for (let dz = -2; dz <= 2; dz++) {
    for (let dx = -2; dx <= 2; dx++) {
      if (!dx && !dz) continue;
      for (const dy of [0, 1, -1]) {
        const px = x + dx, py = y + dy, pz = z + dz;
        if (!world.isLoaded(px, pz)) continue;
        const below = world.getBlock(px, py - 1, pz), a = world.getBlock(px, py, pz), b = world.getBlock(px, py + 1, pz);
        if (SOLID[below] === 1 && !SOLID[a] && !SOLID[b] && !IS_WATER[a] && !BED.has(a)) { spots.push({ x: px + 0.5, y: py, z: pz + 0.5, d: Math.hypot(dx, dz) + Math.abs(dy) * 0.5 }); break; }
      }
    }
  }
  spots.sort((p, q) => p.d - q.d);
  return spots[0] ? { x: spots[0].x, y: spots[0].y, z: spots[0].z } : null;
}

// Sleep flips day and night: the same time of day, twelve hours on. Returns the new { dayTime, dayCount }.
export function sleepTime(dayTime, dayCount) {
  let t = dayTime + 0.5, d = dayCount;
  if (t >= 1) { t -= 1; d++; }
  return { dayTime: t, dayCount: d };
}
