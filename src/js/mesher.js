// Turns a chunk into vertex buffers: hidden-face culling + per-vertex ambient occlusion + per-vertex light.
// Pure (no three.js) so it can be unit-tested in Node.
// Light is stored per vertex so the renderer can treat the parts differently: the sky-light part goes in the vertex
// colour (the shader multiplies it by the time-of-day tint), and "blocklight" holds two numbers: the block-light part
// (added on top untinted, so a torch still glows at night) and the face shading that the dim floor is multiplied by
// (so a cave with no light is dim but never black, whatever the time of day).
import { CS, CH, idx } from './world.js';
import { B, FACE_TILE, OPAQUE, GLOW, PLANT, LEAN, PLANT_H, IS_WATER, ROLE_LEAF, WATER_LEVEL, SHAPE, BOXES, ATLAS_COLS, ATLAS_ROWS } from './blocks.js';
import { hash2 } from './noise.js';
import { skyBrightness, blockBrightness, MAX_LIGHT } from './light.js';

const PW = CS + 2;            // padded width
const pidx = (x, y, z) => (y * PW + z) * PW + x; // x,y,z in padded space

// Face table. t1 x t2 = normal so every quad is wound counter-clockwise from outside.
// "o" is the quad origin inside the unit cube.
const FACES = [
  { n: [1, 0, 0],  t1: [0, 0, -1], t2: [0, 1, 0], o: [1, 0, 1], shade: 0.82, k: 2 },
  { n: [-1, 0, 0], t1: [0, 0, 1],  t2: [0, 1, 0], o: [0, 0, 0], shade: 0.82, k: 2 },
  { n: [0, 0, 1],  t1: [1, 0, 0],  t2: [0, 1, 0], o: [0, 0, 1], shade: 0.68, k: 2 },
  { n: [0, 0, -1], t1: [-1, 0, 0], t2: [0, 1, 0], o: [1, 0, 0], shade: 0.68, k: 2 },
  { n: [0, 1, 0],  t1: [0, 0, 1],  t2: [1, 0, 0], o: [0, 1, 0], shade: 1.0,  k: 0 },
  { n: [0, -1, 0], t1: [1, 0, 0],  t2: [0, 0, 1], o: [0, 0, 0], shade: 0.5,  k: 1 },
];
// Corner order: (0,0) (1,0) (1,1) (0,1) in (t1,t2) space
const CORNERS = [[0, 0], [1, 0], [1, 1], [0, 1]];
const AO_LEVELS = [0.5, 0.68, 0.84, 1.0];
// Height of a water cell's surface: full when water sits on top of it, otherwise proportional to its level
// (source = 7/8, thinning to 1/8 at the far end of a stream).
const waterHeight = (pad, px, py, pz, id) => (IS_WATER[pad[pidx(px, py + 1, pz)]] ? 1 : WATER_LEVEL[id] / 8);

// Copy the chunk and a 1-block border from its neighbours into one flat array, so the inner loop never needs Map
// lookups. Returns the block ids and the sky / block light level of every cell (cells outside the loaded world count
// as fully sky-lit so the edge of the map doesn't turn into a dark wall).
function buildPadded(world, chunk, top) {
  const PH = top + 2; // padded height: rows above the highest block are open sky and never stored
  const pad = new Uint8Array(PW * PH * PW);
  const sky = new Uint8Array(PW * PH * PW).fill(MAX_LIGHT);
  const blk = new Uint8Array(PW * PH * PW);
  for (let dz = -1; dz <= 1; dz++) {
    for (let dx = -1; dx <= 1; dx++) {
      const c = dx === 0 && dz === 0 ? chunk : world.getChunk(chunk.cx + dx, chunk.cz + dz);
      if (!c) continue;
      const x0 = dx < 0 ? CS - 1 : dx > 0 ? 0 : 0;
      const x1 = dx < 0 ? CS - 1 : dx > 0 ? 0 : CS - 1;
      const z0 = dz < 0 ? CS - 1 : dz > 0 ? 0 : 0;
      const z1 = dz < 0 ? CS - 1 : dz > 0 ? 0 : CS - 1;
      for (let y = 0; y < top; y++) {
        for (let z = z0; z <= z1; z++) {
          for (let x = x0; x <= x1; x++) {
            const l = c.light[idx(x, y, z)];
            const p = pidx(x + dx * CS + 1, y + 1, z + dz * CS + 1);
            pad[p] = c.data[idx(x, y, z)];
            sky[p] = l >> 4;
            blk[p] = l & 15;
          }
        }
      }
    }
  }
  return { pad, sky, blk };
}

class Buf {
  constructor() { this.pos = []; this.uv = []; this.col = []; this.blk = []; this.ind = []; this.sway = []; this.n = 0; }
  get empty() { return this.n === 0; }
  finish() {
    return {
      sway: new Float32Array(this.sway),
      positions: new Float32Array(this.pos),
      uvs: new Float32Array(this.uv),
      colors: new Float32Array(this.col),
      blocklight: new Float32Array(this.blk), // pairs: [glow, flat shade]
      indices: this.n > 65535 ? new Uint32Array(this.ind) : new Uint16Array(this.ind),
    };
  }
}

// Plants are flat quads: either two crossing diagonals (grass) or a # of four (crop rows).
// Each vertex carries a "sway" weight (0 at the roots, 1 at the top) for the wind shader.
function addPlant(buf, kind, x, y, z, u0, v0, us, vs, wx, wz, sky, blk) {
  const quads = kind === 2
    ? [[0.25, 0, 0.25, 0.25, 0, 0.75], [0.75, 0, 0.25, 0.75, 0, 0.75], [0.25, 0, 0.25, 0.75, 0, 0.25], [0.25, 0, 0.75, 0.75, 0, 0.75]]
    : [[0.08, 0, 0.08, 0.92, 0, 0.92], [0.92, 0, 0.08, 0.08, 0, 0.92]];
  // slight per-plant jitter and brightness so meadows don't look stamped
  const jx = kind === 1 ? (hash2(wx, wz, 5) - 0.5) * 0.3 : 0;
  const jz = kind === 1 ? (hash2(wx, wz, 6) - 0.5) * 0.3 : 0;
  const variation = 0.88 + hash2(wx, wz, 7) * 0.16;
  const shade = variation * skyBrightness(sky), glow = variation * blockBrightness(blk);
  for (const [ax, , az, bx, , bz] of quads) {
    const base = buf.n;
    const corners = [[ax, 0, az, 0, 0], [bx, 0, bz, 1, 0], [bx, 1, bz, 1, 1], [ax, 1, az, 0, 1]];
    for (const [px, py, pz, u, v] of corners) {
      buf.pos.push(x + px + jx, y + py, z + pz + jz);
      buf.uv.push(u0 + u * us, v0 + v * vs);
      buf.col.push(shade, shade, shade);
      buf.blk.push(glow, variation);
      buf.sway.push(py);
    }
    buf.ind.push(base, base + 1, base + 2, base, base + 2, base + 3);
    buf.n += 4;
  }
}

// A torch: a thin box (2/16 wide), upright on the floor or tilted out from a wall. It draws the middle two columns of its
// tile (the stick and the flame on top), and glows: part of its brightness does not depend on the light around it.
// lean = [dx, dz] points away from the wall it hangs on; [0, 0] stands on the floor.
const TORCH_CORNERS = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
const TORCH_GLOW = 0.78;
const LEAF_SWAY = 0.85; // wind weight of every leaf vertex (grass tips are 1, its roots 0)
function addTorch(buf, x, y, z, lean, height, u0, v0, us, vs, sky) {
  const hw = 0.0625, wall = lean[0] !== 0 || lean[1] !== 0;
  const y0 = wall ? 0.2 : 0, y1 = y0 + height;
  const bx = 0.5 - lean[0] * 0.38, bz = 0.5 - lean[1] * 0.38; // bottom centre: against the wall
  const tx = 0.5 - lean[0] * 0.12, tz = 0.5 - lean[1] * 0.12; // top centre: tipped away from it
  const col = skyBrightness(sky) * 0.9;
  const uA = u0 + us * (7 / 16), uB = u0 + us * (9 / 16);
  const vA = v0, vB = v0 + vs * (12 / 16); // the stick and flame are the bottom 12 rows of the tile
  const push = (px, py, pz, u, v) => { buf.pos.push(x + px, y + py, z + pz); buf.uv.push(u, v); buf.col.push(col, col, col); buf.blk.push(TORCH_GLOW, 0.9); buf.sway.push(0); };
  for (let s = 0; s < 4; s++) {
    const a = TORCH_CORNERS[s], b = TORCH_CORNERS[(s + 1) % 4];
    const base = buf.n;
    push(bx + a[0] * hw, y0, bz + a[1] * hw, uA, vA);
    push(bx + b[0] * hw, y0, bz + b[1] * hw, uB, vA);
    push(tx + b[0] * hw, y1, tz + b[1] * hw, uB, vB);
    push(tx + a[0] * hw, y1, tz + a[1] * hw, uA, vB);
    buf.ind.push(base, base + 2, base + 1, base, base + 3, base + 2); // wound so the face looks outwards
    buf.n += 4;
  }
  // top (the flame): rows 4-5 of the tile
  const base = buf.n, fv0 = v0 + vs * (10 / 16), fv1 = v0 + vs * (12 / 16);
  push(tx - hw, y1, tz + hw, uA, fv0);
  push(tx + hw, y1, tz + hw, uB, fv0);
  push(tx + hw, y1, tz - hw, uB, fv1);
  push(tx - hw, y1, tz - hw, uA, fv1);
  buf.ind.push(base, base + 1, base + 2, base, base + 2, base + 3);
  buf.n += 4;
}

// Stairs and doors: a few boxes inside the cell. A face that lies on the edge of the cell and looks at an opaque block is left out;
// the picture on each face is cropped to the part of the tile that face covers. Lit like the cell they stand in.
function addBoxes(buf, id, x, y, z, pad, px, py, pz, sky, blk) {
  const boxes = BOXES.get(id);
  const tsU = 1 / ATLAS_COLS, tsV = 1 / ATLAS_ROWS, inset = 0.0004;
  const s = skyBrightness(sky), g = blockBrightness(blk);
  boxes.forEach((box, bi) => {
    for (let f = 0; f < 6; f++) {
      const F = FACES[f];
      const axis = F.n[0] ? 0 : F.n[1] ? 1 : 2, up = F.n[axis] > 0;
      if (SHAPE[id] === 1 && bi === 1 && f === 5) continue; // the underside of a stair's upper step sits inside the lower one
      if ((up ? box[axis + 3] === 1 : box[axis] === 0) && OPAQUE[pad[pidx(px + F.n[0], py + F.n[1], pz + F.n[2])]]) continue;
      const tile = FACE_TILE[id * 3 + F.k];
      const u0 = (tile % ATLAS_COLS) * tsU + inset, v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) * tsV + inset;
      const us = tsU - inset * 2, vs = tsV - inset * 2;
      const i1 = F.t1[0] ? 0 : F.t1[1] ? 1 : 2, i2 = F.t2[0] ? 0 : F.t2[1] ? 1 : 2;
      const sg1 = F.t1[i1], sg2 = F.t2[i2];
      const base = buf.n;
      for (const [a, b] of CORNERS) {
        const c = [0, 1, 2].map((i) => box[i] + (F.o[i] + F.t1[i] * a + F.t2[i] * b) * (box[i + 3] - box[i])); // position in the cell
        buf.pos.push(x + c[0], y + c[1], z + c[2]);
        buf.uv.push(u0 + us * sg1 * (c[i1] - F.o[i1]), v0 + vs * sg2 * (c[i2] - F.o[i2]));
        const l = F.shade * s;
        buf.col.push(l, l, l);
        buf.blk.push(F.shade * g, F.shade);
      }
      buf.ind.push(base, base + 1, base + 2, base, base + 2, base + 3);
      buf.n += 4;
    }
  });
}

export function meshChunk(world, chunk) {
  let top = chunk.top; // (a neighbour's taller blocks can still show their sides next to us, and they are read through the padding)
  for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) top = Math.max(top, world.getChunk(chunk.cx + dx, chunk.cz + dz)?.top ?? 0);
  top = Math.min(CH, top);
  const { pad, sky: litS, blk: litB } = buildPadded(world, chunk, top);
  const solid = new Buf();  // opaque + cutout (leaves, glass)
  const water = new Buf();
  const plants = new Buf(); // swaying foliage, drawn with its own wind material
  const leaves = new Buf(); // tree leaves: ordinary cubes that rustle in the same wind (every vertex sways, so cubes never tear apart)
  const inset = 0.0004;
  const tsU = 1 / ATLAS_COLS, tsV = 1 / ATLAS_ROWS;

  for (let y = 0; y < chunk.top; y++) {
    for (let z = 0; z < CS; z++) {
      for (let x = 0; x < CS; x++) {
        const id = chunk.data[idx(x, y, z)];
        if (id === B.AIR) continue;
        if (PLANT[id]) {
          const tile = FACE_TILE[id * 3 + 2];
          const tu = (tile % ATLAS_COLS) * tsU + inset, tv = 1 - (Math.floor(tile / ATLAS_COLS) + 1) * tsV + inset;
          const here = pidx(x + 1, y + 1, z + 1);
          if (PLANT[id] === 3) { // torch model (kept out of the wind-swayed buffer)
            addTorch(solid, x, y, z, [LEAN[id * 2], LEAN[id * 2 + 1]], PLANT_H[id], tu, tv, tsU - inset * 2, tsV - inset * 2, litS[here]);
          } else {
            addPlant(plants, PLANT[id], x, y, z, tu, tv, tsU - inset * 2, tsV - inset * 2, chunk.cx * CS + x, chunk.cz * CS + z, litS[here], litB[here]);
          }
          continue;
        }
        if (SHAPE[id]) { // stairs, doors
          const here = pidx(x + 1, y + 1, z + 1);
          addBoxes(solid, id, x, y, z, pad, x + 1, y + 1, z + 1, litS[here], litB[here]);
          continue;
        }
        const isWater = IS_WATER[id] === 1;
        const buf = isWater ? water : ROLE_LEAF[id] ? leaves : solid;
        const px = x + 1, py = y + 1, pz = z + 1;
        const hSelf = isWater ? waterHeight(pad, px, py, pz, id) : 1;

        for (let f = 0; f < 6; f++) {
          const F = FACES[f];
          const nid = pad[pidx(px + F.n[0], py + F.n[1], pz + F.n[2])];
          let sideBottom = 0; // for water: where a partial side face starts
          if (isWater) {
            if (OPAQUE[nid]) continue;
            if (IS_WATER[nid]) {
              // next to other water only the strip that stands higher than its neighbour's surface is visible
              if (f >= 4) continue;
              const hN = waterHeight(pad, px + F.n[0], py, pz + F.n[2], nid);
              if (hN >= hSelf - 1e-6) continue;
              sideBottom = hN;
            }
          } else {
            if (OPAQUE[nid]) continue;
            if (nid === id && !OPAQUE[id]) continue; // see-through blocks (leaves, glass, ...) hide the faces between neighbours of the same kind
          }

          const tile = FACE_TILE[id * 3 + F.k];
          const u0 = (tile % ATLAS_COLS) * tsU + inset;
          const v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) * tsV + inset;
          const us = tsU - inset * 2, vs = tsV - inset * 2;

          const ao = [1, 1, 1, 1];
          if (!isWater) {
            for (let c = 0; c < 4; c++) {
              const s1 = CORNERS[c][0] ? 1 : -1, s2 = CORNERS[c][1] ? 1 : -1;
              const bx = px + F.n[0], by = py + F.n[1], bz = pz + F.n[2];
              const a = OPAQUE[pad[pidx(bx + F.t1[0] * s1, by + F.t1[1] * s1, bz + F.t1[2] * s1)]];
              const b = OPAQUE[pad[pidx(bx + F.t2[0] * s2, by + F.t2[1] * s2, bz + F.t2[2] * s2)]];
              const k = OPAQUE[pad[pidx(
                bx + F.t1[0] * s1 + F.t2[0] * s2,
                by + F.t1[1] * s1 + F.t2[1] * s2,
                bz + F.t1[2] * s1 + F.t2[2] * s2)]];
              ao[c] = a && b ? 0 : 3 - (a + b + k);
            }
          }

          // light at each corner: the average of the open cells touching it on the side the face looks at
          // (water has no solid face to look past, so it just uses its own cell). Sky and block light separately.
          const vSky = [1, 1, 1, 1], vBlk = [0, 0, 0, 0];
          for (let c = 0; c < 4; c++) {
            if (isWater) { vSky[c] = skyBrightness(litS[pidx(px, py, pz)]); vBlk[c] = blockBrightness(litB[pidx(px, py, pz)]); continue; }
            const s1 = CORNERS[c][0] ? 1 : -1, s2 = CORNERS[c][1] ? 1 : -1;
            const bx = px + F.n[0], by = py + F.n[1], bz = pz + F.n[2];
            const cells = [
              [bx, by, bz],
              [bx + F.t1[0] * s1, by + F.t1[1] * s1, bz + F.t1[2] * s1],
              [bx + F.t2[0] * s2, by + F.t2[1] * s2, bz + F.t2[2] * s2],
              [bx + F.t1[0] * s1 + F.t2[0] * s2, by + F.t1[1] * s1 + F.t2[1] * s2, bz + F.t1[2] * s1 + F.t2[2] * s2],
            ];
            let sumS = 0, sumB = 0, n = 0;
            for (let i = 0; i < 4; i++) {
              const ci = pidx(cells[i][0], cells[i][1], cells[i][2]);
              if (i > 0 && OPAQUE[pad[ci]]) continue; // walls don't contribute light
              sumS += litS[ci]; sumB += litB[ci]; n++;
            }
            vSky[c] = skyBrightness(sumS / n);
            vBlk[c] = Math.max(blockBrightness(sumB / n), GLOW[id]); // ores shine a little for themselves
          }

          const base = buf.n;
          for (let c = 0; c < 4; c++) {
            const [a, b] = CORNERS[c];
            let vx = F.o[0] + F.t1[0] * a + F.t2[0] * b;
            let vy = F.o[1] + F.t1[1] * a + F.t2[1] * b;
            let vz = F.o[2] + F.t1[2] * a + F.t2[2] * b;
            if (isWater) vy = vy === 1 ? hSelf : sideBottom && f < 4 ? sideBottom : vy;
            buf.pos.push(x + vx, y + vy, z + vz);
            buf.uv.push(u0 + a * us, v0 + b * vs);
            const shade = F.shade * (isWater ? 1 : AO_LEVELS[ao[c]]);
            const l = shade * vSky[c];
            buf.col.push(l, l, l);
            buf.blk.push(shade * vBlk[c], shade);
            if (buf === leaves) buf.sway.push(LEAF_SWAY);
          }
          // Flip the diagonal so AO gradients don't produce a visible seam
          const dark = (c) => (isWater ? 0 : AO_LEVELS[ao[c]]) * (vSky[c] + vBlk[c]);
          if (dark(0) + dark(2) < dark(1) + dark(3)) {
            buf.ind.push(base + 1, base + 2, base + 3, base + 1, base + 3, base);
          } else {
            buf.ind.push(base, base + 1, base + 2, base, base + 2, base + 3);
          }
          buf.n += 4;
        }
      }
    }
  }
  return {
    solid: solid.empty ? null : solid.finish(),
    water: water.empty ? null : water.finish(),
    plants: plants.empty ? null : plants.finish(),
    leaves: leaves.empty ? null : leaves.finish(),
  };
}
