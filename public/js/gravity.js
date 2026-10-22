// Falling blocks. A block with "gravity": true (sand) drops when the space under it is empty, and so does everything
// stacked on top of it: break the bottom of a column and the rest slides down one level together.
// Pure logic with hooks, so it runs in Node tests; main.js draws the falling blocks.
import { B, GRAVITY, PLANT, IS_WATER } from './blocks.js';
import { CH } from './world.js';

const FALL_ACCEL = 28; // blocks per second squared
const canFallInto = (id) => id === B.AIR || PLANT[id] > 0 || IS_WATER[id] === 1;

export class GravitySim {
  // hooks: onSpawn(entity), onLand(entity), onDrop(entity)   (all optional)
  constructor(world, hooks = {}) {
    this.world = world;
    this.hooks = hooks;
    this.queue = new Set();
    this.falling = []; // { id, x, z, y (bottom of the block), rest (y it will stop at), vy }
    world.addChangeListener((x, y, z) => this.touch(x, y, z));
  }

  // A change can only affect support at the changed cell and the cell above it
  touch(x, y, z) {
    if (GRAVITY[this.world.getBlock(x, y, z)] || GRAVITY[this.world.getBlock(x, y + 1, z)]) {
      this.queue.add(x + ',' + y + ',' + z);
      this.queue.add(x + ',' + (y + 1) + ',' + z);
    }
  }

  // Start a fall for the unsupported block at (x, y, z), and for every gravity block stacked above it
  startColumn(x, y, z) {
    const w = this.world;
    const column = [];
    for (let yy = y; yy < CH && GRAVITY[w.getBlock(x, yy, z)]; yy++) column.push([yy, w.getBlock(x, yy, z)]);
    // where the bottom block will come to rest: on the first thing that is not empty space
    let ground = y - 1;
    while (ground >= 0 && canFallInto(w.getBlock(x, ground, z))) ground--;
    const bottomRest = ground + 1;
    column.forEach(([yy, id], i) => {
      w.setBlock(x, yy, z, B.AIR);
      const e = { id, x, z, y: yy, rest: bottomRest + i, vy: 0 };
      this.falling.push(e);
      this.hooks.onSpawn?.(e);
    });
  }

  update(dt) {
    // 1. find newly unsupported blocks
    if (this.queue.size) {
      const cells = [...this.queue];
      this.queue.clear();
      for (const key of cells) {
        const [x, y, z] = key.split(',').map(Number);
        if (y < 0 || y >= CH || !this.world.isLoaded(x, z)) continue;
        if (GRAVITY[this.world.getBlock(x, y, z)] && y > 0 && canFallInto(this.world.getBlock(x, y - 1, z))) this.startColumn(x, y, z);
      }
    }
    // 2. move the falling ones (lowest first, so a column lands bottom to top)
    if (!this.falling.length) return;
    this.falling.sort((a, b) => a.y - b.y);
    const landed = [];
    for (const e of this.falling) {
      e.vy += FALL_ACCEL * dt;
      e.y -= e.vy * dt;
      if (e.y <= e.rest) landed.push(e);
    }
    for (const e of landed) {
      this.falling.splice(this.falling.indexOf(e), 1);
      const here = this.world.getBlock(e.x, e.rest, e.z);
      if (canFallInto(here)) { // normal landing (sand crushes plants and displaces water)
        this.world.setBlock(e.x, e.rest, e.z, e.id);
        this.hooks.onLand?.(e);
      } else { // somebody built in the way while it fell: it breaks into an item instead
        this.hooks.onDrop?.(e);
      }
    }
  }

  // Land everything that is still falling right now (before saving or leaving)
  flush() {
    for (const e of this.falling.splice(0)) {
      if (canFallInto(this.world.getBlock(e.x, e.rest, e.z))) { this.world.setBlock(e.x, e.rest, e.z, e.id); this.hooks.onLand?.(e); } else this.hooks.onDrop?.(e);
    }
  }

  // run until everything has settled (tests)
  settle(dt = 0.02, maxSteps = 2000) {
    for (let i = 0; i < maxSteps; i++) {
      this.update(dt);
      if (!this.falling.length && !this.queue.size) return i;
    }
    return maxSteps;
  }
}
