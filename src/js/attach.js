// Blocks that hang on another block (torches): when the block they hang on is removed, they come off and drop.
// The needed support is data (blocks.json "support": [dx, dy, dz]); this just watches for changes next to them.
import { B, HAS_SUPPORT, SUPPORT, SOLID } from './blocks.js';

const NEIGHBOURS = [[0, 0, 0], [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];

export class AttachSim {
  // hooks.onBreak(x, y, z, id) is called after a block has fallen off
  constructor(world, hooks = {}) {
    this.world = world;
    this.hooks = hooks;
    this.queue = new Set();
    world.addChangeListener((x, y, z) => {
      for (const [dx, dy, dz] of NEIGHBOURS) if (HAS_SUPPORT[world.getBlock(x + dx, y + dy, z + dz)]) this.queue.add((x + dx) + ',' + (y + dy) + ',' + (z + dz));
    });
  }

  // does the block at (x, y, z) still have what it hangs on?
  supported(x, y, z) {
    const id = this.world.getBlock(x, y, z);
    if (!HAS_SUPPORT[id]) return true;
    const sx = x + SUPPORT[id * 3], sy = y + SUPPORT[id * 3 + 1], sz = z + SUPPORT[id * 3 + 2];
    return SOLID[this.world.getBlock(sx, sy, sz)] > 0;
  }

  update() {
    if (!this.queue.size) return;
    const cells = [...this.queue];
    this.queue.clear();
    for (const key of cells) {
      const [x, y, z] = key.split(',').map(Number);
      if (!this.world.isLoaded(x, z)) continue;
      const id = this.world.getBlock(x, y, z);
      if (!HAS_SUPPORT[id]) continue;
      const sx = x + SUPPORT[id * 3], sz = z + SUPPORT[id * 3 + 2];
      if (!this.world.isLoaded(sx, sz)) continue; // do not judge by chunks that are not there
      if (!this.supported(x, y, z)) {
        this.world.setBlock(x, y, z, B.AIR);
        this.hooks.onBreak?.(x, y, z, id);
      }
    }
  }
}
