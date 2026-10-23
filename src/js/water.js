// Flowing water. A source block (the sea, a river) spreads thinner water sideways into empty cells on the
// same level, and water with nothing underneath falls straight down, so streams run down hills.
// Each water cell has a level: source = 7, flowing = 6 down to 1. A cell takes whatever the best supplier
// next to it offers (one level less than a neighbour that is spreading sideways, or 6 if it is fed from above),
// and dries up when nothing supplies it, so streams retreat when their source is blocked or removed.
// Pure logic: no rendering, runs in Node for tests.
import { B, PLANT, IS_WATER, WATER_LEVEL, WATER_FLOW } from './blocks.js';
import { CH, TICK_CEILING } from './voxel.js';

const FLOW = WATER_FLOW; // flowing level (1..6) -> block id, from the blocks that have a water level in blocks.json
const SIDES = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const TICK = 0.2;          // seconds between simulation steps
const MAX_PER_TICK = 500;  // cells examined per step, so a flood can never stall the frame

// Water may flow into air and over plants
const replaceable = (id) => id === B.AIR || PLANT[id] === 1 || PLANT[id] === 2 || IS_WATER[id] === 1;
// Water only spreads sideways when it is resting on something solid (or on a source). Over air, plants or
// other flowing water it is a falling column and just keeps going down.
const restsOnSomething = (below) => !(below === B.AIR || PLANT[below] > 0 || (IS_WATER[below] === 1 && WATER_LEVEL[below] !== 7));

export class WaterSim {
  constructor(world) {
    this.world = world;
    this.queue = new Set();
    this.timer = 0;
    this.stats = { changed: 0 };
    world.addChangeListener((x, y, z) => this.touch(x, y, z)); // any block change wakes the water around it
  }

  key(x, y, z) {
    return ((x + 32768) * 65536 + (z + 32768)) * CH + y;
  }
  unkey(k) {
    const y = k % CH;
    const rest = Math.floor(k / CH);
    return [Math.floor(rest / 65536) - 32768, y, (rest % 65536) - 32768];
  }

  // Wake the cells around a changed block, but only if water is actually involved: digging a tunnel far from
  // any water must not flood the queue.
  touch(x, y, z) {
    const w = this.world;
    if (!(IS_WATER[w.getBlock(x, y, z)] || IS_WATER[w.getBlock(x, y + 1, z)] || IS_WATER[w.getBlock(x, y - 1, z)]
      || IS_WATER[w.getBlock(x + 1, y, z)] || IS_WATER[w.getBlock(x - 1, y, z)] || IS_WATER[w.getBlock(x, y, z + 1)] || IS_WATER[w.getBlock(x, y, z - 1)])) return;
    const q = this.queue;
    q.add(this.key(x, y, z));
    q.add(this.key(x, y + 1, z));
    if (y > 0) q.add(this.key(x, y - 1, z));
    for (const [dx, dz] of SIDES) q.add(this.key(x + dx, y, z + dz));
  }

  // The level this cell should have, from what is next to it (0 = dry)
  supplyFor(x, y, z) {
    const w = this.world;
    let s = IS_WATER[w.getBlock(x, y + 1, z)] ? 6 : 0; // fed from above: a falling column
    for (const [dx, dz] of SIDES) {
      const nid = w.getBlock(x + dx, y, z + dz);
      if (!IS_WATER[nid]) continue;
      const level = WATER_LEVEL[nid];
      if (level <= 1) continue;
      // a neighbour that is falling pours downwards instead of spreading sideways
      if (!restsOnSomething(w.getBlock(x + dx, y - 1, z + dz))) continue;
      s = Math.max(s, level - 1);
    }
    return s;
  }

  step() {
    const w = this.world;
    const cells = [...this.queue].slice(0, MAX_PER_TICK);
    for (const k of cells) this.queue.delete(k);
    let changed = 0;
    for (const k of cells) {
      const [x, y, z] = this.unkey(k);
      if (y < 0 || y >= CH || y > TICK_CEILING || !w.isLoaded(x, z)) continue; // (nothing flows up in the sky)
      const id = w.getBlock(x, y, z);
      if (WATER_LEVEL[id] === 7 || !replaceable(id)) continue; // sources never change; solid blocks hold no water
      const current = IS_WATER[id] ? WATER_LEVEL[id] : 0;
      const supply = this.supplyFor(x, y, z);
      if (supply === current) continue;
      w.setBlock(x, y, z, supply > 0 ? FLOW[supply] : B.AIR); // queues the neighbours via the change listener
      changed++;
    }
    this.stats.changed = changed;
    return changed;
  }

  update(dt) {
    this.timer += dt;
    if (this.timer < TICK) return 0;
    this.timer = 0;
    return this.queue.size ? this.step() : 0;
  }

  // Run until nothing changes (tests / debugging)
  settle(maxSteps = 200) {
    for (let i = 0; i < maxSteps; i++) {
      if (!this.queue.size) return i;
      this.step();
    }
    return maxSteps;
  }
}
