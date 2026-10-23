// Streams chunks in and out around the player and owns their three.js meshes.
import * as THREE from 'three';
import { meshChunk } from './mesher.js';

const neighbours = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];

function toGeometry(buf) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(buf.positions, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(buf.uvs, 2));
  g.setAttribute('color', new THREE.BufferAttribute(buf.colors, 3));
  if (buf.sway.length) g.setAttribute('aSway', new THREE.BufferAttribute(buf.sway, 1)); // wind weight (plant material only)
  g.setAttribute('aBlk', new THREE.BufferAttribute(buf.blocklight, 2)); // [block light (torches), face shade for the dim floor]
  g.setIndex(new THREE.BufferAttribute(buf.indices, 1));
  g.computeBoundingSphere();
  return g;
}

export class ChunkRenderer {
  // onUnload(chunk): called just before a far chunk is dropped (the map remembers what it looked like)
  constructor(scene, world, materials, radius = 6, onUnload = null) {
    this.onUnload = onUnload;
    this.world = world;
    this.mats = materials;
    this.radius = radius;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.wanted = [];
    this.lastCx = null;
    this.lastCz = null;
    this.stats = { chunks: 0, meshed: 0, quads: 0 };
  }

  setRadius(r) {
    this.radius = r;
    this.lastCx = null;
  }

  rebuildWanted(pcx, pcz) {
    const R = this.radius + 1;
    this.wanted = [];
    for (let dz = -R; dz <= R; dz++) {
      for (let dx = -R; dx <= R; dx++) {
        const d = dx * dx + dz * dz;
        if (d <= R * R + 1) this.wanted.push({ cx: pcx + dx, cz: pcz + dz, d });
      }
    }
    this.wanted.sort((a, b) => a.d - b.d);

    const keep = R + 2;
    for (const [k, c] of this.world.chunks) {
      if (Math.max(Math.abs(c.cx - pcx), Math.abs(c.cz - pcz)) > keep) {
        this.onUnload?.(c);
        this.disposeMeshes(c);
        this.world.chunks.delete(k);
      }
    }
  }

  disposeMeshes(c) {
    if (!c.meshes) return;
    for (const m of c.meshes) {
      this.group.remove(m);
      m.geometry.dispose();
    }
    c.meshes = null;
  }

  ready(c) {
    for (const [dx, dz] of neighbours) if (!this.world.getChunk(c.cx + dx, c.cz + dz)) return false;
    return true;
  }

  mesh(c) {
    this.disposeMeshes(c);
    const out = meshChunk(this.world, c);
    c.meshes = [];
    const add = (buf, mat, order) => {
      if (!buf) return;
      const m = new THREE.Mesh(toGeometry(buf), mat);
      m.position.set(c.cx * 16, 0, c.cz * 16);
      m.renderOrder = order;
      m.matrixAutoUpdate = false;
      m.updateMatrix();
      this.group.add(m);
      c.meshes.push(m);
    };
    add(out.solid, this.mats.solid, 0);
    add(out.plants, this.mats.plant, 0);
    add(out.leaves, this.mats.leaves, 0);
    add(out.water, this.mats.water, 1);
    c.dirty = false;
  }

  // Remesh right now (used after the player edits a block so it feels instant)
  remeshNow(chunks) {
    for (const c of chunks) if (this.ready(c)) this.mesh(c);
  }

  update(px, pz, budgetMs = 6) {
    const pcx = Math.floor(px / 16), pcz = Math.floor(pz / 16);
    if (pcx !== this.lastCx || pcz !== this.lastCz) {
      this.lastCx = pcx;
      this.lastCz = pcz;
      this.rebuildWanted(pcx, pcz);
    }
    const t0 = performance.now();
    const w = this.world;
    for (const e of this.wanted) {
      if (!w.getChunk(e.cx, e.cz)) {
        w.generateChunk(e.cx, e.cz);
        if (performance.now() - t0 > budgetMs) return;
      }
    }
    const meshR2 = this.radius * this.radius + 1;
    for (const e of this.wanted) {
      if (e.d > meshR2) break;
      const c = w.getChunk(e.cx, e.cz);
      if (c && c.dirty && this.ready(c)) {
        this.mesh(c);
        if (performance.now() - t0 > budgetMs) return;
      }
    }
  }

  // Block until the area around (px, pz) is fully built (used at startup)
  preload(px, pz, radius = 3) {
    const keep = this.radius;
    this.radius = radius;
    this.lastCx = null;
    for (let i = 0; i < 4; i++) this.update(px, pz, Infinity);
    this.radius = keep;
    this.lastCx = null;
  }

  collectStats() {
    let meshed = 0, quads = 0;
    for (const c of this.world.chunks.values()) {
      if (!c.meshes) continue;
      meshed++;
      for (const m of c.meshes) quads += m.geometry.index.count / 6;
    }
    this.stats = { chunks: this.world.chunks.size, meshed, quads };
    return this.stats;
  }
}
