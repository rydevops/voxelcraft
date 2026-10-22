// Shared voxel-grid constants and index helpers (kept separate so world.js and light.js don't import each other).
export const CS = 16;      // chunk width/depth
export const CH = 64;      // world height
export const chunkKey = (cx, cz) => (cx + 32768) * 65536 + (cz + 32768);
export const idx = (x, y, z) => (y * CS + z) * CS + x;
