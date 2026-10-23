// Pixel-art symbols for the on-screen controls (16 x 16, drawn in code like the rest of the game's art, so there are no image files).
// Every symbol is white with a dark outline so it reads on any button colour; the loot bag is in colour.
// Each is a function that draws into a grid; symbolURL(name) gives a data URL to put in an <img>.

const N = 16;

class Grid {
  constructor() { this.px = Array.from({ length: N }, () => Array(N).fill(null)); }
  set(x, y, c = '#') { x = Math.round(x); y = Math.round(y); if (x >= 0 && y >= 0 && x < N && y < N) this.px[y][x] = c; return this; }
  rect(x0, y0, x1, y1, c) { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) this.set(x, y, c); return this; }
  // a line of the given thickness (in pixels), from (x0, y0) to (x1, y1)
  line(x0, y0, x1, y1, w = 1, c) {
    const steps = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) * 2) || 1;
    for (let i = 0; i <= steps; i++) {
      const x = x0 + ((x1 - x0) * i) / steps, y = y0 + ((y1 - y0) * i) / steps;
      for (let dy = 0; dy < w; dy++) for (let dx = 0; dx < w; dx++) this.set(x - (w - 1) / 2 + dx, y - (w - 1) / 2 + dy, c);
    }
    return this;
  }
  polyline(points, w = 1, c) { for (let i = 0; i + 1 < points.length; i++) this.line(...points[i], ...points[i + 1], w, c); return this; }
  // fill a polygon (even-odd, sampled at pixel centres)
  poly(points, c) {
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      let inside = false;
      for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
        const [xi, yi] = points[i], [xj, yj] = points[j];
        if ((yi > y + 0.5) !== (yj > y + 0.5) && x + 0.5 < ((xj - xi) * (y + 0.5 - yi)) / (yj - yi) + xi) inside = !inside;
      }
      if (inside) this.set(x, y, c);
    }
    return this;
  }
  erase(cx, cy, rx, ry) { for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1) this.px[y][x] = null; return this; }
  ellipse(cx, cy, rx, ry, c) {
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1) this.set(x, y, c);
    return this;
  }
}

const ART = {
  // a pickaxe: a handle running up to the right and an arched head across its top
  attack(g) {
    g.line(2, 14, 10, 6, 2);
    g.polyline([[3, 7], [5, 3.5], [8.5, 2], [12, 3], [14, 6]], 2);
    g.line(9, 5, 11, 7, 2);
  },
  // a hand with one finger up
  use(g) {
    g.rect(6, 1, 8, 8);            // the pointing finger
    g.rect(3, 8, 13, 13);          // the fist
    g.rect(9, 7, 10, 8); g.rect(11, 8, 12, 8);
    g.rect(1, 9, 3, 11);           // the thumb
    g.rect(4, 14, 12, 14);
  },
  // an arrow up
  jump(g) {
    g.poly([[8, 1], [14, 8], [10, 8], [10, 14], [6, 14], [6, 8], [2, 8]]);
  },
  // an arrow down onto a floor
  crouch(g) {
    g.poly([[8, 12], [2, 5], [6, 5], [6, 1], [10, 1], [10, 5], [14, 5]]);
    g.rect(2, 14, 13, 15);
  },
  // a lightning bolt
  sprint(g) {
    g.poly([[10, 0.5], [3, 9], [7.5, 9], [5.5, 15.5], [13, 6.5], [8.5, 6.5]]);
  },
  // a pair of wings
  fly(g) {
    g.polyline([[8, 11], [6, 7], [3, 4], [1, 3]], 2);
    g.polyline([[8, 11], [10, 7], [13, 4], [15, 3]], 2);
    g.polyline([[7, 12], [4, 10], [2, 8]], 1);
    g.polyline([[9, 12], [12, 10], [14, 8]], 1);
    g.rect(7, 8, 8, 14);
  },
  // a gear: a ring with eight teeth
  gear(g) {
    g.ellipse(7.5, 7.5, 4.8, 4.8);
    g.rect(6, 0, 9, 3); g.rect(6, 12, 9, 15); g.rect(0, 6, 3, 9); g.rect(12, 6, 15, 9);
    g.rect(2, 2, 4, 4); g.rect(11, 2, 13, 4); g.rect(2, 11, 4, 13); g.rect(11, 11, 13, 13);
    g.erase(7.5, 7.5, 2.2, 2.2);
  },
  // two bars: pause
  menu(g) { g.rect(3, 2, 6, 13); g.rect(9, 2, 12, 13); },
  // a loot bag: a plump sack tied at the neck with a flared top, in colour
  bag(g) {
    const body = 'b', light = 'l', rope = 'r', dark = 'd';
    g.ellipse(7.5, 10.5, 6, 4.8, body);
    g.poly([[4.5, 1.5], [6.5, 3.5], [9, 3.5], [11, 1.5], [11.5, 6], [4, 6]], body); // the flared mouth
    g.rect(5, 6, 10, 7, rope);                                                      // the cord
    g.rect(4, 7, 11, 7, rope);
    g.set(5, 2, light); g.set(6, 3, light); g.set(10, 2, light);
    g.ellipse(5.5, 10, 1.6, 2.2, light);                                            // a highlight on the belly
    g.set(7, 12, dark); g.set(8, 12, dark); g.set(9, 11, dark);                     // a stitched seam
    g.rect(7, 9, 9, 10, 'g'); g.set(8, 8, 'g'); g.set(8, 11, 'g');                  // a golden coin on the front
  },
};

const COLORS = { '#': '#ffffff', b: '#a8723e', l: '#d19a5a', r: '#f1d36b', d: '#6e4521', g: '#ffe27a' };
const OUTLINE = '#15110e';
const cache = new Map();

export const SYMBOLS = Object.keys(ART);

// A 16x16 canvas of the symbol with its outline (null outside a browser)
export function drawSymbol(name) {
  if (typeof document === 'undefined') return null;
  const g = new Grid();
  ART[name](g);
  const c = document.createElement('canvas');
  c.width = c.height = N;
  const x = c.getContext('2d');
  x.fillStyle = OUTLINE;
  for (let py = 0; py < N; py++) for (let px = 0; px < N; px++) {
    if (g.px[py][px]) continue;
    let near = false;
    for (let dy = -1; dy <= 1 && !near; dy++) for (let dx = -1; dx <= 1; dx++) if ((dx || dy) && g.px[py + dy]?.[px + dx]) { near = true; break; }
    if (near) x.fillRect(px, py, 1, 1);
  }
  for (let py = 0; py < N; py++) for (let px = 0; px < N; px++) {
    const k = g.px[py][px];
    if (k) { x.fillStyle = COLORS[k] ?? '#fff'; x.fillRect(px, py, 1, 1); }
  }
  return c;
}

export function symbolURL(name) {
  if (!cache.has(name)) cache.set(name, drawSymbol(name)?.toDataURL() ?? '');
  return cache.get(name);
}

// the filled pixels of a symbol, as rows of strings (for tests and docs): "#" = a lit pixel
export function symbolRows(name) {
  const g = new Grid();
  ART[name](g);
  return g.px.map((row) => row.map((k) => (k ? '#' : '.')).join(''));
}
