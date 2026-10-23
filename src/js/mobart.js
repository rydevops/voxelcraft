// The pictures on the animals: small pixel textures (a pixel is a sixteenth of a block, like everything else in the game) painted from code, so a
// cow has patches, a face with a muzzle and eyes, hooves and an udder instead of being one colour all over. No DOM here (so it runs in Node);
// mobmodels.js turns these into textures for the boxes. Painters are given the size of the face they paint.
const hash = (x, y, s) => { let h = Math.imul(x * 374761393 + y * 668265263 + s * 1442695041, 1274126177); h = (h ^ (h >>> 13)) >>> 0; return (h % 10000) / 10000; };
const clamp = (v) => Math.max(0, Math.min(255, v | 0));

export class Pix {
  constructor(w, h, fill = null) {
    this.w = w; this.h = h;
    this.px = Array.from({ length: w * h }, () => [0, 0, 0, 0]);
    if (fill) this.fill(fill);
  }
  set(x, y, c) { if (x >= 0 && y >= 0 && x < this.w && y < this.h) this.px[y * this.w + x] = [clamp(c[0]), clamp(c[1]), clamp(c[2]), c[3] ?? 255]; return this; }
  get(x, y) { return this.px[y * this.w + x]; }
  fill(c) { for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) this.set(x, y, c); return this; }
  rect(x0, y0, x1, y1, c) { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) this.set(x, y, c); return this; }
  // a rounded patch: the corners are knocked off so it looks like a blotch and not a rectangle
  blob(x0, y0, x1, y1, c, seed = 1) {
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const corner = (x === x0 || x === x1) && (y === y0 || y === y1);
      if (!corner && !((x === x0 || x === x1 || y === y0 || y === y1) && hash(x, y, seed) < 0.3)) this.set(x, y, c);
    }
    return this;
  }
  // every pixel a little lighter or darker (fur, skin, wool are never flat)
  speckle(amp, seed = 1) {
    for (let i = 0; i < this.px.length; i++) {
      const p = this.px[i];
      if (p[3] === 0) continue;
      const v = (hash(i % this.w, Math.floor(i / this.w), seed) - 0.5) * amp;
      this.px[i] = [clamp(p[0] + v), clamp(p[1] + v), clamp(p[2] + v), p[3]];
    }
    return this;
  }
  // RGBA bytes, bottom row first (the order a GL texture wants)
  data() {
    const out = new Uint8Array(this.w * this.h * 4);
    for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) out.set(this.px[(this.h - 1 - y) * this.w + x], (y * this.w + x) * 4);
    return out;
  }
  get colours() { return new Set(this.px.map((p) => p.join(','))).size; }
}

// scale a patch given for a 20-wide face to the face that is being painted
const sx = (p, x, base) => Math.round((x * p.w) / base), sy = (p, y, base) => Math.round((y * p.h) / base);

// ---------------------------------------------------------------------------------------------------------------------------
const COW = { brown: [100, 64, 40], dark: [58, 38, 26], hoof: [44, 38, 36], white: [238, 234, 224], pink: [232, 172, 166], nostril: [150, 98, 96], black: [28, 24, 22], horn: [232, 226, 202], inner: [196, 140, 130] };

const cowPatches = (p, list, seed) => { for (const [a, b, c, d] of list) p.blob(sx(p, a, 20), sy(p, b, 12), sx(p, c, 20), sy(p, d, 12), COW.white, seed); };

export const COW_ART = {
  body: {
    side(p) { p.fill(COW.brown).speckle(14, 3); cowPatches(p, [[2, 1, 8, 6], [12, 4, 18, 9], [0, 7, 4, 11], [9, 8, 12, 11]], 5); p.rect(0, p.h - 1, p.w - 1, p.h - 1, COW.dark); },
    top(p) { p.fill(COW.brown).speckle(14, 4); for (const [a, b, c, d] of [[2, 3, 7, 9], [7, 12, 12, 17], [0, 0, 3, 2]]) p.blob(a * p.w / 13 | 0, b * p.h / 20 | 0, c * p.w / 13 | 0, d * p.h / 20 | 0, COW.white, 6); },
    end(p) { p.fill(COW.brown).speckle(12, 7); },
    bottom(p) { p.fill(COW.dark).speckle(8, 8); },
  },
  head: {
    front(p) { // eyes, a white blaze down the forehead, a pink muzzle with nostrils
      p.fill(COW.brown).speckle(12, 9);
      p.rect(3, 0, 5, 4, COW.white);
      p.rect(1, 5, 7, p.h - 1, COW.pink); p.rect(1, 5, 7, 5, COW.inner);
      p.set(2, p.h - 2, COW.nostril); p.set(6, p.h - 2, COW.nostril);
      p.set(0, 3, COW.white); p.set(1, 3, COW.black); p.set(8, 3, COW.white); p.set(7, 3, COW.black);
    },
    side(p) { p.fill(COW.brown).speckle(12, 10); p.set(p.w - 2, 3, COW.black); p.rect(p.w - 3, p.h - 3, p.w - 1, p.h - 1, COW.pink); },
    top(p) { p.fill(COW.brown).speckle(12, 11); p.rect(3, 0, 5, p.h - 1, COW.white); },
    bottom(p) { p.fill(COW.pink); },
  },
  leg: {
    side(p) { p.fill(COW.brown).speckle(12, 12); p.rect(0, p.h - 3, p.w - 1, p.h - 1, COW.hoof); p.rect(0, p.h - 5, p.w - 1, p.h - 4, COW.white); },
    end(p) { p.fill(COW.brown).speckle(12, 13); p.rect(0, p.h - 3, p.w - 1, p.h - 1, COW.hoof); p.rect(0, p.h - 5, p.w - 1, p.h - 4, COW.white); },
    top(p) { p.fill(COW.dark); },
    bottom(p) { p.fill(COW.hoof); },
  },
  udder(p) { p.fill(COW.pink).speckle(10, 14); p.set(1, p.h - 1, COW.inner); p.set(p.w - 2, p.h - 1, COW.inner); },
  tail(p) { p.fill(COW.brown).speckle(10, 15); p.rect(0, p.h - 3, p.w - 1, p.h - 1, COW.black); },
  ear(p) { p.fill(COW.brown).speckle(10, 16); p.rect(1, 1, p.w - 2, p.h - 2, COW.inner); },
  horn(p) { p.fill(COW.horn).speckle(10, 17); p.rect(0, 0, p.w - 1, 0, [200, 194, 170]); },
};

// ---------------------------------------------------------------------------------------------------------------------------
const PIG = { skin: [238, 156, 156], dark: [214, 126, 130], snout: [246, 182, 182], nostril: [150, 78, 88], hoof: [150, 96, 98], black: [30, 24, 26], white: [248, 244, 240], ear: [220, 134, 138] };

export const PIG_ART = {
  body: {
    side(p) { p.fill(PIG.skin).speckle(16, 21); p.blob(sx(p, 3, 16), sy(p, 2, 9), sx(p, 6, 16), sy(p, 4, 9), PIG.dark, 22); p.blob(sx(p, 10, 16), sy(p, 4, 9), sx(p, 14, 16), sy(p, 7, 9), PIG.dark, 23); p.rect(0, p.h - 1, p.w - 1, p.h - 1, PIG.dark); },
    top(p) { p.fill(PIG.skin).speckle(14, 24); p.rect(p.w >> 1, 0, p.w >> 1, p.h - 1, PIG.dark); },
    end(p) { p.fill(PIG.skin).speckle(12, 25); },
    bottom(p) { p.fill(PIG.dark).speckle(8, 26); },
  },
  head: {
    front(p) { p.fill(PIG.skin).speckle(12, 27); p.set(1, 2, PIG.white); p.set(2, 2, PIG.black); p.set(p.w - 2, 2, PIG.white); p.set(p.w - 3, 2, PIG.black); p.rect(2, p.h - 3, p.w - 3, p.h - 1, PIG.snout); },
    side(p) { p.fill(PIG.skin).speckle(12, 28); p.set(p.w - 3, 2, PIG.black); },
    top(p) { p.fill(PIG.skin).speckle(12, 29); },
    bottom(p) { p.fill(PIG.dark); },
  },
  snout: {
    front(p) { p.fill(PIG.snout).speckle(8, 30); p.set(1, p.h >> 1, PIG.nostril); p.set(p.w - 2, p.h >> 1, PIG.nostril); },
    side(p) { p.fill(PIG.snout); },
    top(p) { p.fill(PIG.snout); },
    bottom(p) { p.fill(PIG.dark); },
  },
  leg: {
    side(p) { p.fill(PIG.skin).speckle(12, 31); p.rect(0, p.h - 2, p.w - 1, p.h - 1, PIG.hoof); },
    end(p) { p.fill(PIG.skin).speckle(12, 32); p.rect(0, p.h - 2, p.w - 1, p.h - 1, PIG.hoof); },
    top(p) { p.fill(PIG.dark); },
    bottom(p) { p.fill(PIG.hoof); },
  },
  ear(p) { p.fill(PIG.ear).speckle(10, 33); p.rect(1, 1, p.w - 2, p.h - 2, PIG.dark); },
  tail(p) { p.fill(PIG.dark).speckle(8, 34); },
};

// ---------------------------------------------------------------------------------------------------------------------------
const SHEEP = { wool: [238, 236, 228], shade: [214, 212, 202], lite: [250, 250, 245], face: [140, 114, 94], dark: [96, 76, 62], hoof: [58, 52, 48], leg: [150, 138, 126], bare: [232, 198, 182], rib: [214, 172, 156], black: [26, 22, 22], white: [242, 238, 230] };

const wool = (p, seed) => { // curls: rows of little darker and lighter lumps
  for (let y = 0; y < p.h; y++) for (let x = 0; x < p.w; x++) {
    const r = hash(x, y, seed), curl = ((x + (y >> 1) * 2) % 4 === 0 && y % 2 === 0);
    p.set(x, y, curl ? SHEEP.shade : r < 0.08 ? SHEEP.lite : r < 0.3 ? [226, 224, 214] : SHEEP.wool);
  }
};

export const SHEEP_ART = {
  body: { side(p) { wool(p, 41); }, top(p) { wool(p, 42); }, end(p) { wool(p, 43); }, bottom(p) { wool(p, 44); } },
  head: {
    front(p) { p.fill(SHEEP.face).speckle(10, 45); p.rect(0, 0, p.w - 1, 0, SHEEP.dark); p.set(1, 2, SHEEP.white); p.set(2, 2, SHEEP.black); p.set(p.w - 2, 2, SHEEP.white); p.set(p.w - 3, 2, SHEEP.black); p.rect(1, p.h - 2, p.w - 2, p.h - 1, [170, 142, 120]); p.set(2, p.h - 2, SHEEP.dark); p.set(p.w - 3, p.h - 2, SHEEP.dark); },
    side(p) { p.fill(SHEEP.face).speckle(10, 46); p.set(p.w - 3, 2, SHEEP.black); },
    top(p) { p.fill(SHEEP.dark).speckle(10, 47); },
    bottom(p) { p.fill([170, 142, 120]); },
  },
  fleece: { side(p) { wool(p, 48); }, top(p) { wool(p, 49); }, end(p) { wool(p, 50); }, bottom(p) { wool(p, 51); } },
  naked: {
    side(p) { p.fill(SHEEP.bare).speckle(10, 52); for (let y = 2; y < p.h - 1; y += 3) p.rect(1, y, p.w - 2, y, SHEEP.rib); },
    top(p) { p.fill(SHEEP.bare).speckle(10, 53); },
    end(p) { p.fill(SHEEP.bare).speckle(10, 54); },
    bottom(p) { p.fill(SHEEP.rib); },
  },
  leg: {
    side(p) { p.fill(SHEEP.leg).speckle(12, 55); p.rect(0, p.h - 2, p.w - 1, p.h - 1, SHEEP.hoof); },
    end(p) { p.fill(SHEEP.leg).speckle(12, 56); p.rect(0, p.h - 2, p.w - 1, p.h - 1, SHEEP.hoof); },
    top(p) { p.fill(SHEEP.dark); },
    bottom(p) { p.fill(SHEEP.hoof); },
  },
  ear(p) { p.fill(SHEEP.face).speckle(10, 57); p.rect(1, 1, p.w - 2, p.h - 2, [190, 150, 130]); },
};

export const ANIMAL_ART = { cow: COW_ART, pig: PIG_ART, sheep: SHEEP_ART };
