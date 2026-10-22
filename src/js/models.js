// Small 3D models for items: textured cubes for blocks, pixel-extruded sprites for tools and materials.
// Used for the first-person hand and for items lying on the ground.
import * as THREE from 'three';
import { BLOCKS, TILE_NAMES, ATLAS_COLS, ATLAS_ROWS } from './blocks.js';
import { itemSprite } from './textures.js';
import { toolOf } from './items.js';

const cache = new Map();

// A unit cube whose faces use the block's atlas tiles (same shading as the world mesher)
export function blockGeometry(id) {
  const key = 'b' + id;
  if (cache.has(key)) return cache.get(key);
  const def = BLOCKS[id];
  const g = new THREE.BoxGeometry(1, 1, 1);
  const uv = g.attributes.uv;
  const faceTiles = [def.side, def.side, def.top, def.bottom, def.side, def.side]; // +x -x +y -y +z -z
  const shade = [0.82, 0.82, 1, 0.5, 0.68, 0.68];
  const colors = new Float32Array(24 * 3);
  faceTiles.forEach((name, f) => {
    const tile = TILE_NAMES.indexOf(name);
    const u0 = (tile % ATLAS_COLS) / ATLAS_COLS, v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) / ATLAS_ROWS;
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      uv.setXY(i, u0 + uv.getX(i) / ATLAS_COLS, v0 + uv.getY(i) / ATLAS_ROWS);
      colors.set([shade[f], shade[f], shade[f]], i * 3);
    }
  });
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  cache.set(key, g);
  return g;
}

// Every opaque pixel of the item's 16x16 sprite becomes a thin voxel, like Minecraft's held tools.
export function spriteGeometry(id, held = false) {
  const key = (held ? 'sh' : 's') + id;
  if (cache.has(key)) return cache.get(key);
  const canvas = itemSprite(id, held);
  const data = canvas.getContext('2d').getImageData(0, 0, 16, 16).data;
  const solid = (x, y) => x >= 0 && y >= 0 && x < 16 && y < 16 && data[(y * 16 + x) * 4 + 3] > 0;
  const pos = [], col = [];
  const d = (toolOf(id) ? 3.4 : 1.5) / 16; // thickness: tools are chunkier so they read as solid objects
  const quad = (a, b, c, e, rgb, shade) => {
    for (const p of [a, b, c, a, c, e]) { pos.push(...p); col.push(rgb[0] * shade, rgb[1] * shade, rgb[2] * shade); }
  };
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      if (!solid(x, y)) continue;
      const o = (y * 16 + x) * 4;
      const rgb = [data[o] / 255, data[o + 1] / 255, data[o + 2] / 255];
      const x0 = x / 16 - 0.5, x1 = (x + 1) / 16 - 0.5, y1 = 0.5 - y / 16, y0 = 0.5 - (y + 1) / 16, z1 = d / 2, z0 = -d / 2;
      quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], rgb, 1);
      quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], rgb, 0.78);
      if (!solid(x + 1, y)) quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], rgb, 0.85);
      if (!solid(x - 1, y)) quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], rgb, 0.85);
      if (!solid(x, y - 1)) quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], rgb, 0.95);
      if (!solid(x, y + 1)) quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], rgb, 0.6);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(col), 3));
  cache.set(key, g);
  return g;
}
