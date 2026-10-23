// Items lying in the world: they pop out of broken blocks, fall, spin, and get sucked into the inventory.
import * as THREE from 'three';
import { SOLID } from './blocks.js';
import { isBlockItem, drawsFlat } from './items.js';
import { blockGeometry, spriteGeometry } from './models.js';

const MAX_DROPS = 160;
const LIFETIME = 300;

export class Drops {
  constructor(scene, world, blockMat, spriteMat) {
    this.world = world;
    this.blockMat = blockMat;
    this.spriteMat = spriteMat;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.items = [];
  }

  spawn(id, n, x, y, z, { d = 0, delay = 0.5, vx, vy, vz, life = LIFETIME, age = 0 } = {}) {
    if (this.items.length >= MAX_DROPS) this.remove(0);
    const block = isBlockItem(id) && !drawsFlat(id); // (a flower lying on the ground is the flower, not a cube of it)
    const mesh = new THREE.Mesh(block ? blockGeometry(id) : spriteGeometry(id), block ? this.blockMat : this.spriteMat);
    mesh.scale.setScalar(block ? 0.28 : 0.5);
    this.group.add(mesh);
    this.items.push({
      id, n, d, mesh, x, y, z, age, life, delay,
      vx: vx ?? (Math.random() - 0.5) * 2.4, vy: vy ?? 3 + Math.random() * 1.5, vz: vz ?? (Math.random() - 0.5) * 2.4,
      spin: Math.random() * 6, block,
    });
  }

  // Items lying around are part of the saved world (so a death pile survives quitting)
  serialize() {
    return this.items.map((it) => ({ id: it.id, n: it.n, d: it.d, x: +it.x.toFixed(2), y: +it.y.toFixed(2), z: +it.z.toFixed(2), age: Math.round(it.age), life: it.life }));
  }

  load(list) {
    for (const s of Array.isArray(list) ? list : []) this.spawn(s.id, s.n, s.x, s.y, s.z, { d: s.d, delay: 0.3, vx: 0, vy: 0, vz: 0, life: s.life, age: s.age });
  }

  remove(i) {
    const it = this.items[i];
    this.group.remove(it.mesh);
    this.items.splice(i, 1);
  }

  solid(x, y, z) {
    return SOLID[this.world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z))] > 0;
  }

  // onPickup(item) -> true if the inventory accepted it
  update(dt, playerPos, canPickup, onPickup) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.age += dt;
      if (it.age > it.life) { this.remove(i); continue; }
      if (!this.world.isLoaded(it.x, it.z)) continue; // freeze outside loaded terrain

      const half = it.block ? 0.14 : 0.2;
      // magnet towards the player once close and the inventory has room
      const dx = playerPos.x - it.x, dy = playerPos.y + 0.7 - it.y, dz = playerPos.z - it.z;
      const dist = Math.hypot(dx, dy, dz);
      const ready = it.age > it.delay && canPickup(it);
      if (ready && dist < 0.9) {
        if (onPickup(it)) { this.remove(i); continue; }
      }
      if (ready && dist < 2.6) {
        const pull = 14 * dt / Math.max(dist, 0.3);
        it.vx += dx * pull; it.vy += dy * pull; it.vz += dz * pull;
        it.vx *= 0.9; it.vy *= 0.9; it.vz *= 0.9;
      } else {
        it.vy -= 20 * dt;
      }

      let nx = it.x + it.vx * dt, ny = it.y + it.vy * dt, nz = it.z + it.vz * dt;
      if (this.solid(nx, it.y, it.z)) { nx = it.x; it.vx = 0; }
      if (this.solid(nx, it.y, nz)) { nz = it.z; it.vz = 0; }
      if (this.solid(nx, ny - half, nz)) {
        ny = Math.floor(ny - half) + 1 + half;
        if (it.vy < 0) it.vy = 0;
        it.vx *= 0.8; it.vz *= 0.8;
      } else if (this.solid(nx, ny + half, nz) && it.vy > 0) {
        it.vy = 0; ny = it.y;
      }
      it.x = nx; it.y = ny; it.z = nz;

      const bob = Math.sin(it.age * 3 + it.spin) * 0.05 + 0.1;
      it.mesh.position.set(it.x, it.y + bob, it.z);
      it.mesh.rotation.y = it.age * 1.8 + it.spin;
    }
  }
}
