// Block tables for the engine, built from the data files (public/data/blocks.json) by the registry.
// Nothing here is hand-written content: add or change a block in the JSON and these tables follow.
import { REG } from './registry.js';

// B.GRASS, B.COAL_ORE, ... : numeric ids by block key (upper-cased). AIR is always 0.
export const B = { AIR: 0 };
for (const b of REG.blocks) B[b.key.toUpperCase()] = b.id;

// Order = position in the texture atlas (the order of "tiles" in textures.json)
export const TILE_NAMES = REG.tileNames;
export const ATLAS_COLS = 8;
export const ATLAS_ROWS = Math.max(8, Math.ceil(TILE_NAMES.length / ATLAS_COLS));
const tile = (n) => TILE_NAMES.indexOf(n);

// id -> definition (name, tiles, mining rules, sound, plant info, ...)
export const BLOCKS = {};
for (const b of REG.blocks) {
  BLOCKS[b.id] = {
    key: b.key, name: b.name, top: b.top, bottom: b.bottom, side: b.side, hard: b.hard, sound: b.sound, tool: b.tool, need: b.need,
    ...(b.plant ? { plant: b.plant.kind === 2 ? 'hash' : 'cross', h: b.plant.height } : {}),
  };
}

export const BLOCK_COUNT = 256; // block ids are stored in one byte per voxel

// Flat lookup tables (fast in the mesher's inner loop)
export const FACE_TILE = new Uint16Array(BLOCK_COUNT * 3); // [top, bottom, side] tile index per block
export const OPAQUE = new Uint8Array(BLOCK_COUNT);        // hides neighbouring faces
export const SOLID = new Uint8Array(BLOCK_COUNT);         // blocks movement
export const IS_WATER = new Uint8Array(BLOCK_COUNT);      // source or flowing water
export const WATER_LEVEL = new Uint8Array(BLOCK_COUNT);   // 7 = source, 1..6 = flowing (0 = not water)
export const PLANT = new Uint8Array(BLOCK_COUNT);         // 0 = not a plant, 1 = crossed quads, 2 = crop grid, 3 = torch (small non-solid model)
export const PLANT_HALF = new Float32Array(BLOCK_COUNT);  // half the width of the selection box of a plant (so you can aim at a thin torch)
export const LEAN = new Int8Array(BLOCK_COUNT * 2);       // [dx, dz] a wall torch tilts towards (away from its wall)
export const SUPPORT = new Int8Array(BLOCK_COUNT * 3);    // [dx, dy, dz] of the solid block a torch etc. hangs on
export const HAS_SUPPORT = new Uint8Array(BLOCK_COUNT);   // 1 = this block needs that support (drops as an item without it)
export const PLANT_H = new Float32Array(BLOCK_COUNT);     // selection-box height of a plant
export const ROLE_LOG = new Uint8Array(BLOCK_COUNT);      // tree trunk blocks (they topple when cut)
export const ROLE_LEAF = new Uint8Array(BLOCK_COUNT);     // tree leaf blocks
export const TILLS_INTO = new Uint8Array(BLOCK_COUNT);    // block a hoe turns this into (0 = cannot be tilled)
export const SPREADS_ONTO = new Uint8Array(BLOCK_COUNT);  // block this one slowly converts when next to it (grass -> dirt)
export const GRAVITY = new Uint8Array(BLOCK_COUNT);        // falls when the block below is empty (sand)
export const EMIT = new Uint8Array(BLOCK_COUNT);           // light the block gives off (0-15)
export const GLOW = new Float32Array(BLOCK_COUNT);          // 0-1: the block shines for itself even in the dark (ores)
export const FILTER = new Uint8Array(BLOCK_COUNT);         // how much light is lost passing through it (leaves, water)
export const HYDRATES = new Uint8Array(BLOCK_COUNT);         // 1 = soil that tracks moisture (fast check)
export const HYDRATION = new Map();                        // soil id -> { wet, dry, decayInto, decayRate }
export const OPENS = new Map();                           // block id -> crafting window it opens when used

export const WATER_FLOW = [0, 0, 0, 0, 0, 0, 0]; // flowing level (1..6) -> block id
for (const b of REG.blocks) {
  FACE_TILE[b.id * 3] = tile(b.top);
  FACE_TILE[b.id * 3 + 1] = tile(b.bottom);
  FACE_TILE[b.id * 3 + 2] = tile(b.side);
  SOLID[b.id] = b.solid ? 1 : 0;
  OPAQUE[b.id] = b.opaque ? 1 : 0;
  if (b.waterLevel) {
    IS_WATER[b.id] = 1;
    WATER_LEVEL[b.id] = b.waterLevel;
    if (b.waterLevel < 7) WATER_FLOW[b.waterLevel] = b.id;
  }
  if (b.plant) { PLANT[b.id] = b.plant.kind; PLANT_H[b.id] = b.plant.height; PLANT_HALF[b.id] = 0.4; SOLID[b.id] = 0; OPAQUE[b.id] = 0; }
  if (b.model?.type === 'torch') {
    PLANT[b.id] = 3; PLANT_H[b.id] = b.model.height; PLANT_HALF[b.id] = 0.16; SOLID[b.id] = 0; OPAQUE[b.id] = 0;
    LEAN[b.id * 2] = b.model.lean[0]; LEAN[b.id * 2 + 1] = b.model.lean[1];
  }
  if (b.support) { HAS_SUPPORT[b.id] = 1; SUPPORT.set(b.support, b.id * 3); }
  if (b.role === 'log') ROLE_LOG[b.id] = 1;
  if (b.role === 'leaf') ROLE_LEAF[b.id] = 1;
  if (b.tillsInto) TILLS_INTO[b.id] = b.tillsInto;
  if (b.spreadsOnto) SPREADS_ONTO[b.id] = b.spreadsOnto;
  if (b.opens) OPENS.set(b.id, b.opens);
  if (b.gravity) GRAVITY[b.id] = 1;
  EMIT[b.id] = b.light;
  GLOW[b.id] = b.glow;
  FILTER[b.id] = b.lightFilter;
  if (b.hydration) { HYDRATION.set(b.id, b.hydration); HYDRATES[b.id] = 1; }
}

// Everything available in creative mode's block palette
// (blocks and items marked "creative": true, like the torch item)
export const PALETTE = [...REG.blocks.filter((b) => b.creative).map((b) => b.id), ...REG.items.filter((i) => i.creative).map((i) => i.id)];
