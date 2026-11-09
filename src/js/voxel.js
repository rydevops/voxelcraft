// Shared voxel-grid constants and index helpers (kept separate so world.js and light.js don't import each other).
import { REG } from './registry.js';

export const CS = 16;      // chunk width/depth
export const CH = 256;     // world height: tall enough that nobody hits the top (block ids are stored per voxel, so this costs no saved data)
// Nothing "ticks" above this height (plants do not grow, water does not flow, sand does not fall): it is just somewhere to climb to
// and build. A block of game.json "world.tickCeiling".
export const TICK_CEILING = REG.game.world?.tickCeiling ?? 120;
export const chunkKey = (cx, cz) => (cx + 32768) * 65536 + (cz + 32768);
export const idx = (x, y, z) => (y * CS + z) * CS + x;
