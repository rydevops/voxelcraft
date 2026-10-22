// Draws the app icons (a grass block) as PNG files with no dependencies: a tiny pixel-art renderer plus a PNG writer.
// Used by build.mjs; can also be run on its own: node scripts/make-icons.mjs <output folder>
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ---- PNG writer (RGBA, 8 bit) ----
const crcTable = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
const crc32 = (buf) => { let c = -1; for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
function chunk(type, data) {
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0);
  out.write(type, 4, 'ascii');
  data.copy(out, 8);
  out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length);
  return out;
}
export function encodePng(w, h, rgba) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; Buffer.from(rgba.buffer, rgba.byteOffset + y * w * 4, w * 4).copy(raw, y * (w * 4 + 1) + 1); }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

// ---- the picture: an isometric grass block on a dark background, drawn on a 32x32 grid and scaled with hard pixels ----
const hash = (x, y, s) => { let h = Math.imul(x * 374761393 + y * 668265263 + s * 2147483647, 1274126177); h = Math.imul(h ^ (h >>> 13), 1103515245); return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const shade = (c, k) => c.map((v) => Math.max(0, Math.min(255, v * k)));
const GRASS = [88, 160, 56], GRASS_LIGHT = [128, 196, 72], DIRT = [134, 96, 62], DIRT_DARK = [96, 68, 44], BG = [21, 17, 14], BG2 = [44, 34, 26];

// A 2:1 isometric cube on a 32x32 grid, R = half its width. Returns which face a cell belongs to (or null for background).
const R = 13, CX = 16, TOP = 3, YC = TOP + R / 2, SIDE = R * 0.95;
function cubePart(gx, gy) {
  const x = gx + 0.5 - CX, y = gy + 0.5;
  if (Math.abs(x) / R + Math.abs(y - YC) / (R / 2) <= 1) return 'top';
  const edge = YC + (R / 2) * (1 - Math.abs(x) / R); // the lower edge of the top face at this x
  if (Math.abs(x) <= R && y > edge && y <= edge + SIDE) return x < 0 ? 'left' : 'right';
  return null;
}

export function drawIcon(size, { padding = 0 } = {}) {
  const N = 32, out = new Uint8Array(size * size * 4), scale = size / N, inner = 1 - padding * 2;
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      // sample the 32x32 art, shrunk towards the centre by `padding` (a fraction of the icon) for maskable icons
      const gx = Math.floor((px / scale - N / 2) / inner + N / 2), gy = Math.floor((py / scale - N / 2) / inner + N / 2);
      const part = gx >= 0 && gx < N && gy >= 0 && gy < N ? cubePart(gx, gy) : null;
      let c;
      if (part === 'top') c = shade(mix(GRASS, GRASS_LIGHT, hash(gx, gy, 1)), 1.08 - hash(gx, gy, 2) * 0.2);
      else if (part) {
        const x = gx + 0.5 - CX, edge = YC + (R / 2) * (1 - Math.abs(x) / R);
        const depth = gy + 0.5 - edge; // how far below the top face this cell is
        const grassy = depth < 3 + (hash(gx, 9, 3) < 0.5 ? 1 : 0) + (hash(gx, 11, 3) < 0.25 ? 1 : 0);
        c = grassy ? mix(GRASS, [60, 120, 40], hash(gx, gy, 4)) : mix(DIRT, DIRT_DARK, hash(gx, gy, 5));
        c = shade(c, part === 'left' ? 0.86 : 0.64);
      } else c = mix(BG, BG2, (py / size) ** 2);
      const o = (py * size + px) * 4;
      out[o] = c[0]; out[o + 1] = c[1]; out[o + 2] = c[2]; out[o + 3] = 255;
    }
  }
  return out;
}

export function writeIcons(dir) {
  fs.mkdirSync(dir, { recursive: true });
  const files = {
    'icon-192.png': [192, 0],
    'icon-512.png': [512, 0],
    'icon-maskable-512.png': [512, 0.1], // keeps the block inside the safe zone that launchers crop to a circle / squircle
    'apple-touch-icon.png': [180, 0.04],
    'favicon.png': [48, 0],
  };
  for (const [name, [size, pad]] of Object.entries(files)) fs.writeFileSync(path.join(dir, name), encodePng(size, size, drawIcon(size, { padding: pad })));
  return Object.keys(files);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log('wrote', writeIcons(process.argv[2] || '.').join(', '));
