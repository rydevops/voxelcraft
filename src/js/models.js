// Small 3D models for items: textured cubes for blocks, pixel-extruded sprites for tools and materials.
// Used for the first-person hand and for items lying on the ground.
import * as THREE from 'three';
import { BLOCKS, TILE_NAMES, BOXES, SHAPE, ATLAS_COLS, ATLAS_ROWS } from './blocks.js';
import { itemSprite } from './textures.js';
import { toolOf } from './items.js';

const cache = new Map();

// The faces of a unit cube, as the world mesher draws them: t1 x t2 = the normal, o = where the quad starts, k = which tile (0 top, 1 bottom, 2 side)
const FACES = [
  { n: [1, 0, 0], t1: [0, 0, -1], t2: [0, 1, 0], o: [1, 0, 1], shade: 0.82, k: 2 },
  { n: [-1, 0, 0], t1: [0, 0, 1], t2: [0, 1, 0], o: [0, 0, 0], shade: 0.82, k: 2 },
  { n: [0, 0, 1], t1: [1, 0, 0], t2: [0, 1, 0], o: [0, 0, 1], shade: 0.68, k: 2 },
  { n: [0, 0, -1], t1: [-1, 0, 0], t2: [0, 1, 0], o: [1, 0, 0], shade: 0.68, k: 2 },
  { n: [0, 1, 0], t1: [0, 0, 1], t2: [1, 0, 0], o: [0, 1, 0], shade: 1.0, k: 0 },
  { n: [0, -1, 0], t1: [1, 0, 0], t2: [0, 0, 1], o: [0, 0, 0], shade: 0.5, k: 1 },
];
const CORNERS = [[0, 0], [1, 0], [1, 1], [0, 1]];

// A block made of boxes (a slab, a stair, a column): every box face cut from the right part of the tile, centred like a unit cube
function boxesGeometry(id) {
  const def = BLOCKS[id];
  const names = [def.top, def.bottom, def.side];
  const pos = [], uvs = [], col = [], ind = [];
  const tsU = 1 / ATLAS_COLS, tsV = 1 / ATLAS_ROWS, inset = 0.0004;
  for (const box of BOXES.get(id)) {
    for (const F of FACES) {
      const tile = TILE_NAMES.indexOf(names[F.k]);
      const u0 = (tile % ATLAS_COLS) * tsU + inset, v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) * tsV + inset;
      const us = tsU - inset * 2, vs = tsV - inset * 2;
      const i1 = F.t1[0] ? 0 : F.t1[1] ? 1 : 2, i2 = F.t2[0] ? 0 : F.t2[1] ? 1 : 2;
      const base = pos.length / 3;
      for (const [a, b] of CORNERS) {
        const c = [0, 1, 2].map((i) => box[i] + (F.o[i] + F.t1[i] * a + F.t2[i] * b) * (box[i + 3] - box[i]));
        pos.push(c[0] - 0.5, c[1] - 0.5, c[2] - 0.5);
        uvs.push(u0 + us * F.t1[i1] * (c[i1] - F.o[i1]), v0 + vs * F.t2[i2] * (c[i2] - F.o[i2]));
        col.push(F.shade, F.shade, F.shade);
      }
      ind.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(col), 3));
  g.setIndex(ind);
  return g;
}

// A unit cube whose faces use the block's atlas tiles (same shading as the world mesher); blocks made of boxes keep their shape
export function blockGeometry(id) {
  const key = 'b' + id;
  if (cache.has(key)) return cache.get(key);
  const def = BLOCKS[id];
  if (BOXES.has(id) && SHAPE[id] !== 2) { const g = boxesGeometry(id); cache.set(key, g); return g; }
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
