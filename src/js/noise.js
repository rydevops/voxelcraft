// Seeded gradient noise + hashing. No dependencies, usable in Node and the browser.

export function mulberry32(seed) {
  let a = seed | 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Integer hash of a 2D lattice point -> [0,1)
export function hash2(x, z, seed) {
  let h = (Math.imul(x | 0, 374761393) + Math.imul(z | 0, 668265263) + Math.imul(seed | 0, 1274126177)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a, b, t) => a + (b - a) * t;

const G2 = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
];
const G3 = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
];

export class Noise {
  constructor(seed = 1) {
    const rand = mulberry32(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  // Perlin noise in roughly [-1, 1]
  noise2(x, y) {
    const p = this.perm;
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const X = xi & 255, Y = yi & 255;
    const g = (hx, hy, dx, dy) => {
      const v = G2[p[p[hx] + hy] & 7];
      return v[0] * dx + v[1] * dy;
    };
    const u = fade(xf), v = fade(yf);
    return lerp(
      lerp(g(X, Y, xf, yf), g(X + 1, Y, xf - 1, yf), u),
      lerp(g(X, Y + 1, xf, yf - 1), g(X + 1, Y + 1, xf - 1, yf - 1), u),
      v
    );
  }

  noise3(x, y, z) {
    const p = this.perm;
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const xf = x - xi, yf = y - yi, zf = z - zi;
    const X = xi & 255, Y = yi & 255, Z = zi & 255;
    const g = (hx, hy, hz, dx, dy, dz) => {
      const v = G3[p[p[p[hx] + hy] + hz] % 12];
      return v[0] * dx + v[1] * dy + v[2] * dz;
    };
    const u = fade(xf), v = fade(yf), w = fade(zf);
    return lerp(
      lerp(
        lerp(g(X, Y, Z, xf, yf, zf), g(X + 1, Y, Z, xf - 1, yf, zf), u),
        lerp(g(X, Y + 1, Z, xf, yf - 1, zf), g(X + 1, Y + 1, Z, xf - 1, yf - 1, zf), u),
        v
      ),
      lerp(
        lerp(g(X, Y, Z + 1, xf, yf, zf - 1), g(X + 1, Y, Z + 1, xf - 1, yf, zf - 1), u),
        lerp(g(X, Y + 1, Z + 1, xf, yf - 1, zf - 1), g(X + 1, Y + 1, Z + 1, xf - 1, yf - 1, zf - 1), u),
        v
      ),
      w
    );
  }

  // Fractal sum, normalised so the result stays roughly in [-1, 1]
  fbm2(x, y, octaves = 4, lacunarity = 2, gain = 0.5) {
    let amp = 1, freq = 1, sum = 0, norm = 0;
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.noise2(x * freq, y * freq);
      norm += amp;
      amp *= gain;
      freq *= lacunarity;
    }
    return sum / norm;
  }
}
