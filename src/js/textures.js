// All artwork is generated from data: tile and sprite descriptions in data/textures.json are turned into pixels by
// tilegen.js (procedural generators, hand-drawn pixel art, or PNG files). The sky, crack overlay, icons and logo
// below are drawn in code. No image files are required.
import { mulberry32 } from './noise.js';
import { REG } from './registry.js';
import { TILE_NAMES, BLOCKS, SHAPE, BOXES, ATLAS_COLS, ATLAS_ROWS } from './blocks.js';
import { isBlockItem, itemKey } from './items.js';
import { paintTile, paintSprite, imageSources, T } from './tilegen.js';
import { crackPixels, CRACK_STAGES } from './mining.js';
import { textPixels } from './pixelfont.js';

const clamp8 = (v) => Math.max(0, Math.min(255, v | 0));

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

// PNG files that tiles / sprites refer to ("image" type), scaled to 16x16 RGBA, keyed by the path in the JSON
let images = {};
async function loadImages() {
  const base = new URL('../data/', import.meta.url);
  for (const src of imageSources(REG.textures)) {
    try {
      const img = new Image();
      img.src = new URL(src, base).href;
      await img.decode();
      const c = makeCanvas(T, T), x = c.getContext('2d');
      x.imageSmoothingEnabled = false;
      x.drawImage(img, 0, 0, T, T);
      images[src] = x.getImageData(0, 0, T, T).data;
    } catch {
      console.warn('textures.json: could not load image', src);
    }
  }
}

// Paint every tile into one atlas canvas. Also returns each tile's average colour (used for break particles).
// Flickering tiles (a lit furnace, a torch): every few frames one of the tile's frames is copied into the atlas over it.
// Returns update(seconds) -> true when the atlas changed and needs uploading again.
export function atlasAnimator(canvas) {
  const ctx = canvas.getContext('2d');
  const pos = (name) => { const i = TILE_NAMES.indexOf(name); return [(i % ATLAS_COLS) * T, Math.floor(i / ATLAS_COLS) * T]; };
  const anims = Object.entries(REG.animations).map(([tile, a]) => ({
    at: pos(tile), fps: a.fps, shown: 0,
    frames: a.frames.map((name) => { const [x, y] = pos(name); return ctx.getImageData(x, y, T, T); }),
  }));
  return (seconds) => {
    let changed = false;
    for (const a of anims) {
      const frame = Math.floor(Math.max(0, seconds) * a.fps) % a.frames.length;
      if (frame !== a.shown) { ctx.putImageData(a.frames[frame], a.at[0], a.at[1]); a.shown = frame; changed = true; }
    }
    return changed;
  };
}

export async function buildAtlas() {
  await loadImages();
  const canvas = makeCanvas(ATLAS_COLS * T, ATLAS_ROWS * T);
  const ctx = canvas.getContext('2d');
  const avg = {};
  TILE_NAMES.forEach((name, i) => {
    const buf = paintTile(name, i, REG.tiles, images);
    ctx.putImageData(new ImageData(buf, T, T), (i % ATLAS_COLS) * T, Math.floor(i / ATLAS_COLS) * T);
    let r = 0, g = 0, b = 0, n = 0;
    for (let o = 0; o < buf.length; o += 4) if (buf[o + 3] > 0) { r += buf[o]; g += buf[o + 1]; b += buf[o + 2]; n++; }
    avg[name] = n ? [r / n / 255, g / n / 255, b / n / 255] : [0.5, 0.5, 0.5];
  });
  return { canvas, avg };
}

export function blockColors(avg) {
  const out = {};
  for (const [id, def] of Object.entries(BLOCKS)) out[id] = avg[def.side];
  return out;
}

// ---- sky art ----------------------------------------------------------------------------
// The sun: a round disc (like the moon) with a hot white core, a yellow body and a soft orange edge. Transparent outside the circle.
export function sunTexture() {
  const S = 128, c = makeCanvas(S, S), x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, '#ffffff');
  g.addColorStop(0.35, '#fffbd0');
  g.addColorStop(0.72, '#ffe45c');
  g.addColorStop(0.94, '#ffb92e');
  g.addColorStop(1, 'rgba(255, 170, 40, 0)'); // anti-aliased edge
  x.fillStyle = g;
  x.beginPath(); x.arc(S / 2, S / 2, S / 2, 0, Math.PI * 2); x.fill();
  return c;
}

// Equirectangular map for the moon sphere: grey regolith, dark maria (the "seas") and craters with bright rims.
export function moonTexture() {
  const W = 512, H = 256, c = makeCanvas(W, H), x = c.getContext('2d');
  const rand = mulberry32(2024);
  const img = x.createImageData(W, H);
  // value noise (wraps horizontally so there is no seam)
  const gw = 32, gh = 16, grid = Array.from({ length: gw * gh }, rand);
  const noise = (u, v) => {
    const fx = u * gw, fy = v * (gh - 1), x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
    const g = (i, j) => grid[Math.min(gh - 1, j) * gw + ((i % gw) + gw) % gw];
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    return (g(x0, y0) * (1 - sx) + g(x0 + 1, y0) * sx) * (1 - sy) + (g(x0, y0 + 1) * (1 - sx) + g(x0 + 1, y0 + 1) * sx) * sy;
  };
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const u = px / W, v = py / H;
      const fine = noise(u * 4 % 1, v) * 0.5 + noise(u * 8 % 1, v) * 0.3 + rand() * 0.12;
      const maria = noise(u * 1 % 1, v);                       // broad dark patches
      const dark = Math.max(0, Math.min(1, (maria - 0.5) * 3.2));
      let l = 196 + (fine - 0.45) * 46;
      l = l * (1 - dark * 0.42);                               // maria are noticeably darker
      const o = (py * W + px) * 4;
      img.data[o] = l; img.data[o + 1] = l * 0.995; img.data[o + 2] = l * 1.02; img.data[o + 3] = 255;
    }
  }
  x.putImageData(img, 0, 0);
  // craters: a darker floor with a bright rim on the sunward edge, wider near the equator
  for (let i = 0; i < 90; i++) {
    const cx = rand() * W, cy = H * (0.15 + rand() * 0.7), r = 2 + Math.pow(rand(), 2.2) * 15;
    const rx = r * (1 + Math.abs(cy / H - 0.5) * 0.9); // stretched towards the poles by the projection
    const grad = x.createRadialGradient(cx - r * 0.25, cy - r * 0.25, r * 0.1, cx, cy, r);
    grad.addColorStop(0, 'rgba(70,72,82,0.55)');
    grad.addColorStop(0.72, 'rgba(90,92,102,0.35)');
    grad.addColorStop(0.88, 'rgba(235,235,240,0.5)');
    grad.addColorStop(1, 'rgba(235,235,240,0)');
    x.save();
    x.translate(cx, cy);
    x.scale(rx / r, 1);
    x.translate(-cx, -cy);
    x.fillStyle = grad;
    x.beginPath();
    x.arc(cx, cy, r, 0, Math.PI * 2);
    x.fill();
    x.restore();
  }
  return c;
}

// Soft round glow used behind the moon
export function glowTexture() {
  const c = makeCanvas(128, 128), x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 4, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.25, 'rgba(220,228,255,0.35)');
  g.addColorStop(0.6, 'rgba(190,205,255,0.1)');
  g.addColorStop(1, 'rgba(190,205,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return c;
}

export function cloudTexture(seed = 9) {
  const size = 128, c = makeCanvas(size, size), x = c.getContext('2d');
  const rand = mulberry32(seed);
  const cells = 24, g = Array.from({ length: cells * cells }, rand);
  const at = (i, j) => g[((j + cells) % cells) * cells + ((i + cells) % cells)];
  const img = x.createImageData(size, size);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const fx = (px / size) * cells, fy = (py / size) * cells;
      const x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
      const v = at(x0, y0) * (1 - tx) * (1 - ty) + at(x0 + 1, y0) * tx * (1 - ty) + at(x0, y0 + 1) * (1 - tx) * ty + at(x0 + 1, y0 + 1) * tx * ty;
      const o = (py * size + px) * 4;
      const on = v > 0.6;
      img.data[o] = img.data[o + 1] = img.data[o + 2] = 255;
      img.data[o + 3] = on ? 235 : 0;
    }
  }
  x.putImageData(img, 0, 0);
  return c;
}

// 10 crack stages side by side; the pattern itself lives in mining.js
export function crackTexture() {
  const c = makeCanvas(T * CRACK_STAGES, T), x = c.getContext('2d');
  crackPixels(T).forEach((pixels, s) => {
    x.fillStyle = 'rgba(0,0,0,0.72)';
    for (const [px, py] of pixels) x.fillRect(s * T + px, py, 1, 1);
  });
  return c;
}

// ---- UI art -----------------------------------------------------------------------------
// Isometric cube icon drawn from the atlas (top / left / right faces + fake lighting)
export function blockIcon(atlas, id, size = 44) {
  const def = BLOCKS[id];
  const c = makeCanvas(size, size), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  const a = size / 2, b = a / 2, h = a;
  const tileXY = (name) => {
    const i = TILE_NAMES.indexOf(name);
    return [(i % ATLAS_COLS) * T, Math.floor(i / ATLAS_COLS) * T];
  };
  const face = (name, m, shade) => {
    const [sx, sy] = tileXY(name);
    x.save();
    x.transform(...m);
    x.drawImage(atlas, sx, sy, T, T, 0, 0, T, T);
    x.fillStyle = `rgba(0,0,0,${shade})`;
    x.fillRect(0, 0, T, T);
    x.restore();
  };
  const cx = a;
  if (SHAPE[id] === 1 || SHAPE[id] === 3) { // stairs, slabs, columns, windows: drawn box by box
    // each part is a box (A, B along the two floor directions, Y up, all 0-1); its faces are cut out of the same tiles
    const part = (A0, A1, B0, B1, Y0, Y1) => {
      const sub = (name, m, u0, v0, u1, v1, shade) => { // the piece (u0..u1, v0..v1 of the tile) of a face whose local frame is m
        const [sx, sy] = tileXY(name);
        x.save();
        x.transform(...m);
        x.drawImage(atlas, sx + u0 * T, sy + v0 * T, (u1 - u0) * T, (v1 - v0) * T, u0 * T, v0 * T, (u1 - u0) * T, (v1 - v0) * T);
        x.fillStyle = `rgba(0,0,0,${shade})`;
        x.fillRect(u0 * T, v0 * T, (u1 - u0) * T, (v1 - v0) * T);
        x.restore();
      };
      // the matrices put each face at the outer edge of the whole cube, so a box that is smaller is moved in to where its face is
      sub(def.top, [a / T, b / T, -a / T, b / T, cx, (1 - Y1) * h], A0, B0, A1, B1, 0);                          // top: lowered to Y1
      sub(def.side, [a / T, b / T, 0, h / T, cx - a, b], A0, 1 - Y1, A1, 1 - Y0, 0.25);                       // left: the B = 1 side
      sub(def.side, [a / T, -b / T, 0, h / T, cx + (A1 - 1) * a, 2 * b + (A1 - 1) * b], 1 - B1, 1 - Y1, 1 - B0, 1 - Y0, 0.45); // right: the A = A1 side
    };
    // (the boxes of the block; A runs along z and B along x on the icon)
    const boxes = (BOXES.get(id) ?? []).slice().sort((p, q) => p[1] - q[1] || p[0] - q[0] || p[2] - q[2]);
    for (const bx of boxes) part(bx[2], bx[5], bx[0], bx[3], bx[1], bx[4]);
    return c;
  }
  face(def.top, [a / T, b / T, -a / T, b / T, cx, 0], 0);                 // top
  face(def.side, [a / T, b / T, 0, h / T, cx - a, b], 0.25);               // left
  face(def.side, [a / T, -b / T, 0, h / T, cx, 2 * b], 0.45);              // right
  return c;
}


// ---- item sprites (16x16) ------------------------------------------------------------------------------
const spriteCache = new Map();
export function itemSprite(id, held = false) { // held: the version drawn for the model in your hand (bigger shovel blade)
  const ck = held ? 'h' + id : id;
  if (spriteCache.has(ck)) return spriteCache.get(ck);
  const buf = paintSprite(itemKey(id), REG.itemById.get(id), REG.textures, images, held);
  const c = makeCanvas(T, T);
  c.getContext('2d').putImageData(new ImageData(buf, T, T), 0, 0);
  spriteCache.set(ck, c);
  return c;
}

// Hunger bar icon: 0 = empty, 1 = half, 2 = full (a little loaf, 9x9 pixels scaled up)
export function hungerIcon(state, scale = 3) {
  const c = makeCanvas(9 * scale, 9 * scale), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  for (let py = 1; py < 8; py++) {
    for (let px = 0; px < 9; px++) {
      const d = ((px - 4) / 4.4) ** 2 + ((py - 4.3) / 3.2) ** 2;
      if (d > 1) continue;
      const edge = d > 0.7;
      const filled = state === 2 || (state === 1 && px < 5);
      x.fillStyle = !filled ? (edge ? '#2a2a2e' : '#4a4a52') : edge ? '#7a4a1e' : py < 4 ? '#e2a24e' : '#c0782e';
      x.fillRect(px * scale, py * scale, scale, scale);
    }
  }
  return c;
}

// Armor bar icon: 0 = empty, 1 = half, 2 = full (a 9x9 pixel shield)
const SHIELD = [
  '#########',
  '#@@@@@%%#',
  '#@@%%%%%#',
  '#@%%%%%o#',
  '#@%%%%%o#',
  '.#%%%%o#.',
  '..#%%o#..',
  '...#o#...',
  '....#....',
];
export function armorIcon(state, scale = 3) {
  const c = makeCanvas(9 * scale, 9 * scale), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  SHIELD.forEach((row, py) => [...row].forEach((ch, px) => {
    if (ch === '.') return;
    const filled = state === 2 || (state === 1 && px < 5);
    x.fillStyle = ch === '#' ? (filled ? '#4a4a58' : '#2a2a2e') : !filled ? '#4a4a52' : ch === '@' ? '#f2f2fa' : ch === '%' ? '#c4c4d4' : '#8e8ea4';
    x.fillRect(px * scale, py * scale, scale, scale);
  }));
  return c;
}

// Health bar icon: 0 = empty, 1 = half, 2 = full (9x9 pixel heart scaled up)
const HEART = [
  '.##...##.',
  '#@@#.#@@#',
  '#@@@#@@@#',
  '#@@@@@@@#',
  '.#@@@@@#.',
  '..#@@@#..',
  '...#@#...',
  '....#....',
];
export function heartIcon(state, scale = 3) {
  const c = makeCanvas(9 * scale, 9 * scale), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  HEART.forEach((row, py) => [...row].forEach((ch, px) => {
    if (ch === '.') return;
    const filled = state === 2 || (state === 1 && px < 5);
    if (ch === '#') x.fillStyle = filled ? '#7a0f12' : '#2a2a2e';
    else x.fillStyle = !filled ? '#4a4a52' : py < 3 ? '#ff5a5a' : '#d92a2a';
    x.fillRect(px * scale, (py + 1) * scale, scale, scale);
  }));
  if (state > 0) { x.fillStyle = 'rgba(255,255,255,0.65)'; x.fillRect(2 * scale, 2 * scale, scale, scale); } // glint
  return c;
}

// Air bubble icon: 0 = popped (a faint ring), 1 = half, 2 = full (9x9 pixels scaled up)
const BUBBLE = [
  '..#####..',
  '.#@@@@@#.',
  '#@%%%%%@#',
  '#@%wwwo@#',
  '#@%w%%o@#',
  '#@%%%%o@#',
  '#@%%oooo#',
  '.#@@@@@#.',
  '..#####..',
];
export function bubbleIcon(state, scale = 2) {
  const c = makeCanvas(9 * scale, 9 * scale), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  BUBBLE.forEach((row, py) => [...row].forEach((ch, px) => {
    if (ch === '.') return;
    const edge = ch === '#';
    if (state === 0) { if (edge) { x.fillStyle = 'rgba(120,180,255,0.35)'; x.fillRect(px * scale, py * scale, scale, scale); } return; }
    const filled = state === 2 || px < 5;
    if (!filled) { if (edge) { x.fillStyle = 'rgba(120,180,255,0.35)'; x.fillRect(px * scale, py * scale, scale, scale); } return; }
    x.fillStyle = edge ? '#1d5fa8' : ch === '@' ? '#5aa8ff' : ch === '%' ? '#9ad0ff' : ch === 'w' ? '#ffffff' : '#7ab8f0';
    x.fillRect(px * scale, py * scale, scale, scale);
  }));
  return c;
}

// Flat icon for plants (they are not cubes): the plant's own tile, scaled up
export function plantIcon(atlas, id, size = 44) {
  const name = BLOCKS[id].side, i = TILE_NAMES.indexOf(name);
  const c = makeCanvas(size, size), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  x.drawImage(atlas, (i % ATLAS_COLS) * T, Math.floor(i / ATLAS_COLS) * T, T, T, 0, 0, size, size);
  return c;
}

// Any item as a UI icon: isometric cube for blocks, scaled pixel sprite for everything else
export function itemIcon(atlas, id, size = 44) {
  if (isBlockItem(id)) return blockIcon(atlas, id, size);
  const c = makeCanvas(size, size), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  x.drawImage(itemSprite(id), 0, 0, size, size);
  return c;
}

// Stone-textured block letters with a bevel and drop shadow
export function logoCanvas(atlas, text = 'VOXELCRAFT', cell = 6) {
  const gap = 1, letterW = 5 + gap;
  const w = (text.length * letterW + 1) * cell + cell * 2, h = (7 + 2) * cell + cell;
  const c = makeCanvas(w, h), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  const sctx = atlas.getContext('2d');
  const stoneTile = Math.max(0, TILE_NAMES.indexOf('stone')); // the logo letters use the stone tile (falls back to the first tile)
  const [sx, sy] = [(stoneTile % ATLAS_COLS) * T, Math.floor(stoneTile / ATLAS_COLS) * T];
  const stone = sctx.getImageData(sx, sy, T, T).data;
  const pixels = textPixels(text);
  const set = new Set(pixels.map(([px, py]) => px + ',' + py));
  // shadow
  x.fillStyle = 'rgba(0,0,0,0.45)';
  for (const [px, py] of pixels) x.fillRect(px * cell + cell + 4, py * cell + cell + 4, cell, cell);
  for (const [px, py] of pixels) {
    // fill from the stone tile, brightened
    const o = ((py % T) * T + (px % T)) * 4;
    const k = 1.15;
    x.fillStyle = `rgb(${clamp8(stone[o] * k)},${clamp8(stone[o + 1] * k)},${clamp8(stone[o + 2] * k)})`;
    x.fillRect(px * cell + cell, py * cell + cell, cell, cell);
    // bevel highlights / darks on exposed edges
    const px0 = px * cell + cell, py0 = py * cell + cell;
    x.fillStyle = 'rgba(255,255,255,0.35)';
    if (!set.has(px + ',' + (py - 1))) x.fillRect(px0, py0, cell, 2);
    if (!set.has((px - 1) + ',' + py)) x.fillRect(px0, py0, 2, cell);
    x.fillStyle = 'rgba(0,0,0,0.45)';
    if (!set.has(px + ',' + (py + 1))) x.fillRect(px0, py0 + cell - 2, cell, 2);
    if (!set.has((px + 1) + ',' + py)) x.fillRect(px0 + cell - 2, py0, 2, cell);
  }
  return c;
}

// Tiled dirt pattern for UI backgrounds
export function dirtBackground(atlas, scale = 4) {
  const i = Math.max(0, TILE_NAMES.indexOf('dirt'));
  const c = makeCanvas(T * scale, T * scale), x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  x.drawImage(atlas, (i % ATLAS_COLS) * T, Math.floor(i / ATLAS_COLS) * T, T, T, 0, 0, T * scale, T * scale);
  return c.toDataURL();
}
