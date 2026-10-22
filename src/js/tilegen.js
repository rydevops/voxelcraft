// Texture generators. A tile is described in data/textures.json as { type, ...params }; this module turns that
// description into 16x16 RGBA pixels. Pure (no DOM), so it also runs in Node for tests.
//
// types: noise, capped, bark, rings, planks, cells, waves, bricks, ore, stripes, blades, stalks   (procedural)
//        pixelart (palette + rows), image (a PNG file), layers (stack), ref (reuse another tile)
import { mulberry32 } from './noise.js';

export const T = 16;
const clamp8 = (v) => Math.max(0, Math.min(255, Math.round(v)));
const CLEAR = [0, 0, 0, 0];

// blotchy value noise that wraps, so tiles repeat cleanly
function tileNoise(rand, cells) {
  const g = Array.from({ length: cells * cells }, rand);
  return (x, y) => {
    const fx = (x / T) * cells, fy = (y / T) * cells;
    const x0 = Math.floor(fx), y0 = Math.floor(fy);
    const tx = fx - x0, ty = fy - y0;
    const at = (i, j) => g[((j % cells) * cells) + (i % cells)];
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    return (at(x0, y0) * (1 - sx) + at(x0 + 1, y0) * sx) * (1 - sy) + (at(x0, y0 + 1) * (1 - sx) + at(x0 + 1, y0 + 1) * sx) * sy;
  };
}

const col = (base, v, ch = [1, 1, 1]) => [base[0] + v * ch[0], base[1] + v * ch[1], base[2] + v * ch[2], 255];

// ---- generators: (spec, rand, ctx) -> (x, y) => [r, g, b, a] ------------------------------------------------
const GEN = {
  noise(s, rand) {
    const fields = (s.noise || []).map((n) => ({ f: tileNoise(rand, n.cells), amp: n.amp }));
    const ch = s.channels || [1, 1, 1], sp = s.specks || {}, w = s.edge?.width ?? 0;
    return (x, y) => {
      if (s.holes && rand() < s.holes) return CLEAR; // see-through gaps (leaves)
      let v = 0;
      for (const { f, amp } of fields) v += (f(x, y) - 0.5) * amp;
      v += (rand() - 0.5) * (s.jitter || 0);
      if (sp.dark || sp.light) {
        const r = rand();
        if (sp.dark && r < sp.dark.chance) v += sp.dark.amount;
        else if (sp.light && r > 1 - sp.light.chance) v += sp.light.amount;
      }
      if (w && (x < w || y < w || x > T - 1 - w || y > T - 1 - w)) v += s.edge.amount;
      return col(s.base, v, ch);
    };
  },

  // the top rows come from one tile, the rest from another (grass side = grass on dirt)
  capped(s, rand, ctx) {
    const cap = ctx.sub(s.cap, rand), body = ctx.sub(s.body, rand);
    const d = s.depth || { min: 3 };
    const depth = Array.from({ length: T }, () => (d.min ?? 3) + (d.bonus || []).reduce((t, b) => t + (rand() < b.chance ? b.amount : 0), 0));
    return (x, y) => (y < depth[x] ? cap(x, y) : body(x, y));
  },

  bark(s, rand) {
    const colVar = Array.from({ length: T }, () => (rand() - 0.5) * s.columnVariance);
    const ch = s.channels || [1, 1, 1];
    return (x, y) => {
      let v = colVar[x] + (rand() - 0.5) * s.jitter;
      if (s.grooveEvery && x % s.grooveEvery === 0) v -= s.grooveDarken;
      if (rand() < (s.speckChance || 0)) v -= s.speckDarken || 0;
      return col(s.base, v, ch);
    };
  },

  rings(s, rand) {
    return (x, y) => {
      const dx = x - 7.5, dy = y - 7.5;
      if (Math.max(Math.abs(dx), Math.abs(dy)) > 8 - (s.barkWidth ?? 1.6)) return col(s.bark, (rand() - 0.5) * (s.jitter ?? 12));
      const ring = Math.floor(Math.hypot(dx, dy) * (s.ringScale ?? 0.9)) % 2;
      return col(ring ? s.light : s.dark, (rand() - 0.5) * (s.jitter ?? 12));
    };
  },

  planks(s, rand) {
    const bh = s.boardHeight || 4, boards = Math.ceil(T / bh);
    const shade = Array.from({ length: boards }, () => (rand() - 0.5) * s.boardVariance);
    const seam = Array.from({ length: boards }, () => Math.floor(rand() * 12 + 2));
    const ch = s.channels || [1, 1, 1];
    return (x, y) => {
      const b = Math.floor(y / bh);
      let v = shade[b] + (rand() - 0.5) * s.jitter;
      if (y % bh === bh - 1) v -= s.gapDarken;      // gap between boards
      if (seam[b] === x) v -= s.seamDarken;          // butt joint
      if (rand() < (s.grainChance || 0)) v -= s.grainDarken || 0;
      return col(s.base, v, ch);
    };
  },

  cells(s, rand) { // cobblestone: Voronoi cells with dark crevices between them
    const pts = Array.from({ length: s.points }, () => ({ x: rand() * T, y: rand() * T, shade: (rand() - 0.5) * s.spread }));
    return (x, y) => {
      let d1 = 1e9, d2 = 1e9, shade = 0;
      for (const p of pts) {
        for (const ox of [-T, 0, T]) for (const oy of [-T, 0, T]) {
          const d = Math.hypot(x - (p.x + ox), y - (p.y + oy));
          if (d < d1) { d2 = d1; d1 = d; shade = p.shade; } else if (d < d2) d2 = d;
        }
      }
      let v = shade + (rand() - 0.5) * s.jitter;
      if (d2 - d1 < s.creviceWidth) v = s.creviceValue;
      return col(s.base, v);
    };
  },

  waves(s, rand) {
    const n = tileNoise(rand, 4);
    const ch = s.channels || [1, 1, 1];
    return (x, y) => col(s.base, Math.sin((x + y * 0.7) * s.frequency + n(x, y) * 4) * s.amplitude, ch);
  },

  bricks(s, rand) {
    const bw = s.brickWidth || 8, rh = s.rowHeight || 4;
    return (x, y) => {
      const off = Math.floor(y / rh) % 2 ? bw / 2 : 0;
      const mortar = y % rh === rh - 1 || (x + off) % bw === bw - 1;
      const v = (rand() - 0.5) * (s.variance ?? 22);
      return mortar ? col(s.mortar, v * 0.4) : col(s.brick, v, [1, 0.5, 0.4]);
    };
  },

  // Ore: chunks of ore set into the base stone. Each chunk is a small rounded lump (2-3 pixels across) with a lit top-left
  // edge, a shadowed bottom-right edge and a darkened rim of stone around it, so it reads as a lump embedded in the rock.
  ore(s, rand, ctx) {
    const base = ctx.sub(s.base, rand);
    const lump = new Map(); // "x,y" -> 1 lump pixel
    const centres = [];
    for (let tries = 0, want = s.clusters ?? 6; centres.length < want && tries < 80; tries++) {
      const cx = 2 + Math.floor(rand() * 11), cy = 2 + Math.floor(rand() * 11);
      if (centres.some(([x, y]) => Math.abs(x - cx) < 4 && Math.abs(y - cy) < 4)) continue; // keep the lumps apart
      const w = 2 + Math.floor(rand() * 2), h = 2 + Math.floor(rand() * 2);
      centres.push([cx, cy]);
      for (let dy = 0; dy < h; dy++) for (let dx = 0; dx < w; dx++) {
        const corner = (dx === 0 || dx === w - 1) && (dy === 0 || dy === h - 1);
        if (corner && w + h > 4 && rand() < 0.6) continue; // knock off corners of the bigger lumps
        lump.set((cx + dx) + ',' + (cy + dy), 1);
      }
    }
    const has = (x, y) => lump.has(x + ',' + y);
    const darker = (c, k) => c.map((v) => v * k);
    return (x, y) => {
      if (has(x, y)) {
        if (!has(x, y - 1) || !has(x - 1, y)) return col(s.light, (rand() - 0.5) * 14);          // lit edge
        if (!has(x, y + 1) || !has(x + 1, y)) return col(darker(s.color, 0.8), (rand() - 0.5) * 10); // shadowed edge
        return col(s.color, (rand() - 0.5) * 14);
      }
      let rim = false; // stone touching a lump is shadowed
      for (let dy = -1; dy <= 1 && !rim; dy++) for (let dx = -1; dx <= 1; dx++) if ((dx || dy) && has(x + dx, y + dy)) { rim = true; break; }
      const p = base(x, y);
      return rim ? [p[0] * 0.62, p[1] * 0.62, p[2] * 0.62, p[3] ?? 255] : p;
    };
  },

  stripes(s, rand) { // ploughed rows
    const dark = s.darkColumns || [1, 2];
    return (x) => col(dark.includes(x % s.period) ? s.dark : s.light, (rand() - 0.5) * s.jitter, [1, 0.8, 0.6]);
  },

  blades(s, rand) { // tufts of grass / young crops on a transparent background
    const px = new Map();
    for (let b = 0; b < s.count; b++) {
      const x0 = Math.round(((b + 0.5) * T) / s.count + (rand() - 0.5) * 1.5);
      const h = s.minHeight + Math.floor(rand() * (s.maxHeight - s.minHeight + 1));
      const lean = rand() < 0.5 ? -1 : 1;
      for (let k = 0; k < h; k++) {
        const t = k / h, v = (rand() - 0.5) * 22;
        const c = t < 0.35 ? s.dark : t < 0.75 ? s.mid : s.tip;
        px.set(`${x0 + (k > h * 0.6 ? lean : 0)},${T - 1 - k}`, [c[0] + v, c[1] + v, c[2] + v * 0.5, 255]);
      }
    }
    return (x, y) => px.get(x + ',' + y) ?? CLEAR;
  },

  stalks(s, rand) { // ripe wheat: tall stems topped with grain heads
    const px = new Map();
    for (let x = 0; x < T; x += s.spacing || 2) {
      const h = s.minHeight + Math.floor(rand() * (s.maxHeight - s.minHeight + 1));
      for (let k = 0; k < h; k++) {
        const v = (rand() - 0.5) * 16;
        px.set(`${x},${T - 1 - k}`, [s.stem[0] + v, s.stem[1] + v, s.stem[2] + v * 0.5, 255]);
      }
      for (let k = 0; k < s.headLength; k++) {
        const y = T - h - 1 + k;
        for (const dx of k === 0 ? [0] : [0, 1]) {
          const v = (rand() - 0.5) * 24, c = k % 2 ? s.headDark : s.headLight;
          px.set(`${Math.min(T - 1, x + dx)},${y}`, [c[0] + v, c[1] + v, c[2] + v * 0.5, 255]);
        }
      }
    }
    return (x, y) => px.get(x + ',' + y) ?? CLEAR;
  },

  pixelart(s) { // hand-drawn: rows of characters, each looked up in the palette; "." is transparent
    return (x, y) => {
      const ch = s.rows[y]?.[x];
      const c = ch && ch !== '.' ? s.palette[ch] : null;
      return c ? [c[0], c[1], c[2], c[3] ?? 255] : CLEAR;
    };
  },

  image(s, rand, ctx) { // a PNG, already loaded and scaled to 16x16 by the browser
    const buf = ctx.images?.[s.src];
    return (x, y) => {
      if (!buf) return [255, 0, 255, 255]; // missing file: hot pink so it is obvious
      const o = (y * T + x) * 4;
      return [buf[o], buf[o + 1], buf[o + 2], buf[o + 3]];
    };
  },

  layers(s, rand, ctx) { // the first layer is the bottom; transparent pixels let the layer below show through
    const ps = s.layers.map((l) => makePainter(l, rand, ctx));
    return (x, y) => {
      let out = CLEAR;
      for (const p of ps) { const c = p(x, y); if (c[3] > 0) out = c; }
      return out;
    };
  },

  ref(s, rand, ctx) { return ctx.sub(s.tile, rand); },
};

function makePainter(spec, rand, ctx) {
  const gen = GEN[spec.type];
  if (!gen) throw new Error(`unknown texture type "${spec.type}"`);
  return gen(spec, rand, ctx);
}

// Paint one named tile (or any spec) into an RGBA buffer. `ctx.tiles` = all tile specs, `ctx.images` = loaded PNGs.
function makeCtx(tiles, images) {
  const ctx = {
    tiles, images, depth: 0,
    sub(name, rand) {
      const spec = tiles[name];
      if (!spec) throw new Error(`texture "${name}" is not defined`);
      if (ctx.depth > 8) throw new Error(`texture "${name}" refers to itself`);
      ctx.depth++;
      try { return makePainter(spec, rand, ctx); } finally { ctx.depth--; }
    },
  };
  return ctx;
}

export function paintSpec(spec, seed, tiles = {}, images = {}) {
  const ctx = makeCtx(tiles, images);
  const painter = makePainter(spec, mulberry32(seed), ctx);
  const buf = new Uint8ClampedArray(T * T * 4);
  for (let y = 0; y < T; y++) {
    for (let x = 0; x < T; x++) {
      const p = painter(x, y);
      const o = (y * T + x) * 4;
      buf[o] = clamp8(p[0]); buf[o + 1] = clamp8(p[1]); buf[o + 2] = clamp8(p[2]); buf[o + 3] = clamp8(p[3]);
    }
  }
  return buf;
}

// The i-th tile of the atlas always uses the same seed, so textures look the same on every run.
export const tileSeed = (index) => 0xc0ffee + index * 7919;
export const paintTile = (name, index, tiles, images) => paintSpec(tiles[name], tileSeed(index), tiles, images);

// ---- item sprites ------------------------------------------------------------------------------------------
// Tools are hand-drawn pixel art in the classic style: a two-pixel handle running from the lower left up to the head,
// with a dark outline. d / b / l / L are the head's dark, base, light and lightest tones (they come from the tool tier's
// colours in textures.json "toolHeads"; m is a shade between base and dark); h / H / o are the handle's dark, light and outline tones.
const TOOL_ART = {
  pickaxe: [
    '....dddddd....',
    '..ddLLllbbdd..',
    '.dLllbbbbbbbd.',
    'dLlbd....hHobd',
    'dlbd....hHo.dd',
    'dbd....hHo....',
    'dd....hHo.....',
    '.....hHo......',
    '....hHo.......',
    '...hHo........',
    '..hHo.........',
    '.hHo..........',
    'hHo...........',
    'oo............',
  ],
  // axe and shovel are copied pixel for pixel from the classic sprites
  axe: [
    '........dd...',
    '......ddLLd..',
    '.....dlLbld..',
    '....dLlbbbhh.',
    '....dLllbmbo.',
    '.....dddhbmld',
    '......hhhdbbd',
    '......hhhhbbd',
    '.....hhHo.dd.',
    '....hhoo.....',
    '...hho.......',
    '..hHo........',
    '.hho.........',
    'hHo..........',
    'oo...........',
  ],
  shovel: [
    '..........ddd.',
    '.........dLLbd',
    '........dLlbLd',
    '......ddLlblLd',
    '........hblLd.',
    '......hhHoLd..',
    '.....hHHo.d...',
    '.....hHHo.d...',
    '....hhoo......',
    '...hHo........',
    '..hho.........',
    'ohHo..........',
    'hHo...........',
    'ho............',
  ],
  hoe: [
    '...ddddd......',
    '..dLLllbbd....',
    '..dLllbbbbd...',
    '..ddddddbbd...',
    '........dbhHo.',
    '.......hHbo...',
    '......hHo.....',
    '.....hHo......',
    '....hHo.......',
    '...hHo........',
    '..hHo.........',
    '.hHo..........',
    'hHo...........',
    'oo............',
  ],
};
// The held model uses a bigger shovel blade than the icon (about twice the metal), so it reads well in the hand.
const HELD_ART = {
  shovel: [
    '........dddd....',
    '......ddLLLLdd..',
    '.....dLLllbbLd..',
    '....dLllllbbbld.',
    '....dLllllbbbbd.',
    '....dllllbbbbmd.',
    '.....dlllbbbbmd.',
    '......dlbbbbmd..',
    '.....hhddbbmd...',
    '....hHHod.dd....',
    '...hHHo.........',
    '..hhHo..........',
    '.hHHo...........',
    'hHHo............',
    'hHo.............',
    'oo..............',
  ],
};
function toolPixels(type, head, handle, held = false) {
  const art = (held && HELD_ART[type]) || TOOL_ART[type] || TOOL_ART.shovel;
  const lightest = head.light.map((v) => v + (255 - v) * 0.45);
  const colour = { d: head.dark, b: head.base, m: head.base.map((v) => v * 0.8), l: head.light, L: lightest, H: handle[0], h: handle[1], o: handle[1].map((v) => v * 0.5) };
  const oy = T - art.length, ox = Math.min(1, T - art[0].length);
  const px = new Map();
  art.forEach((row, y) => [...row].forEach((ch, x) => { if (colour[ch]) px.set((x + ox) + ',' + (y + oy), colour[ch]); }));
  return px;
}

// Sprite for an item. spec comes from textures.json "sprites"; tools without one are drawn from their type and tier.
export function paintSprite(itemKey, item, textures, images = {}, held = false) {
  const spec = textures.sprites?.[itemKey];
  if (spec) return paintSpec(spec, tileSeed(900), textures.tiles, images);
  if (item?.tool) {
    const head = textures.toolHeads[item.tool.head];
    const px = toolPixels(item.tool.type, head, textures.toolHandle || [[148, 108, 58], [104, 74, 38]], held);
    const buf = new Uint8ClampedArray(T * T * 4);
    for (const [k, c] of px) {
      const [x, y] = k.split(',').map(Number);
      if (x < 0 || y < 0 || x >= T || y >= T) continue;
      const o = (y * T + x) * 4;
      buf[o] = c[0]; buf[o + 1] = c[1]; buf[o + 2] = c[2]; buf[o + 3] = 255;
    }
    return buf;
  }
  throw new Error(`item "${itemKey}" has no sprite`);
}

// Every "image" file a set of textures refers to (so the browser can load them before painting)
export function imageSources(textures) {
  const out = new Set();
  const visit = (spec) => {
    if (!spec) return;
    if (spec.type === 'image') out.add(spec.src);
    for (const l of spec.layers || []) visit(l);
  };
  Object.values(textures.tiles || {}).forEach(visit);
  Object.values(textures.sprites || {}).forEach(visit);
  return [...out];
}
