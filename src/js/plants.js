// Plant growth and spreading, driven by the data files: every plant block lists how it grows in blocks.json,
// and blocks like grass list what they spread onto. Growth is probabilistic ("random ticks"), so no per-plant
// timers need to be stored or saved.
import { REG } from './registry.js';
import { B, PLANT, SPREADS_ONTO, HYDRATION } from './blocks.js';
import { CS, CH, TICK_CEILING } from './voxel.js';
import { growSapling } from './trees.js';

// block id -> { next, rate (chance per second), soil }
export const GROWTH = {};
// block id -> { block, rate, onto, range }: fully grown plants that seed new sprouts nearby
const SEEDING = {};
// block id -> { trees: [variant keys], rate, soil: [block ids] } for saplings
const SAPLINGS = {};
for (const b of REG.blocks) {
  if (b.plant?.growth) GROWTH[b.id] = { next: b.plant.growth.next, rate: b.plant.growth.rate, soil: b.plant.growth.soil };
  if (b.plant?.spreads) SEEDING[b.id] = b.plant.spreads;
  if (b.plant?.grows) SAPLINGS[b.id] = b.plant.grows;
}
// target block id -> the block that converts it (dirt <- grass)
const SPREAD_FROM = {};
for (let id = 1; id < SPREADS_ONTO.length; id++) if (SPREADS_ONTO[id]) SPREAD_FROM[SPREADS_ONTO[id]] = id;

// Advance plants in every loaded chunk within `radius` chunks of (pcx, pcz). Returns number of changes.
export function growPlants(world, pcx, pcz, radius, dt, rand = Math.random) {
  let changes = 0;
  for (let cz = pcz - radius; cz <= pcz + radius; cz++) {
    for (let cx = pcx - radius; cx <= pcx + radius; cx++) {
      const chunk = world.getChunk(cx, cz);
      if (!chunk || chunk.plants.size === 0) continue;
      for (const i of [...chunk.plants]) { // copy: setBlock edits the set
        const id = chunk.data[i];
        const x = cx * CS + (i % CS), z = cz * CS + (Math.floor(i / CS) % CS), y = Math.floor(i / (CS * CS));
        if (y > TICK_CEILING) continue; // (nothing grows in the sky)
        const g = GROWTH[id];
        const seed = SEEDING[id];
        const sap = SAPLINGS[id];
        if (sap) { // a sapling: grows into a tree when it has room (and the right ground under it)
          if (rand() < sap.rate * dt && sap.soil.includes(world.getBlock(x, y - 1, z)) && growSapling(world, x, y, z, sap.trees, world.seed, rand)) changes++;
        } else if (g) {
          if (rand() < g.rate * dt && world.getBlock(x, y - 1, z) === g.soil) {
            world.setBlock(x, y, z, g.next);
            changes++;
          }
        } else if (seed && rand() < seed.rate * dt) {
          const r = seed.range * 2 + 1;
          const tx = x + Math.floor(rand() * r) - seed.range, tz = z + Math.floor(rand() * r) - seed.range;
          if (world.getBlock(tx, y, tz) === B.AIR && world.getBlock(tx, y - 1, tz) === seed.onto) {
            world.setBlock(tx, y, tz, seed.block);
            changes++;
          }
        }
      }
    }
  }
  return changes;
}

// ---- spreading (grass onto dirt) ---------------------------------------------------------------
// An exposed block that something spreads onto changes when that block is next to it, within one up or down.
export function trySpreadGrass(world, x, y, z, rand = Math.random, chance = REG.game.spread.chance) {
  const from = SPREAD_FROM[world.getBlock(x, y, z)];
  if (!from) return false;
  const above = world.getBlock(x, y + 1, z);
  if (above !== B.AIR && !PLANT[above]) return false; // buried blocks stay as they are
  for (let dy = -1; dy <= 1; dy++) {
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        if ((dx || dy || dz) && world.getBlock(x + dx, y + dy, z + dz) === from) {
          if (rand() >= chance) return false;
          world.setBlock(x, y, z, from);
          return true;
        }
      }
    }
  }
  return false;
}

// Sample random columns in nearby chunks; the topmost block of each is a candidate for spreading.
export function spreadGrass(world, pcx, pcz, radius, dt, rand = Math.random, samplesPerChunk = REG.game.spread.samplesPerChunk) {
  let changes = 0;
  for (let cz = pcz - radius; cz <= pcz + radius; cz++) {
    for (let cx = pcx - radius; cx <= pcx + radius; cx++) {
      const chunk = world.getChunk(cx, cz);
      if (!chunk) continue;
      const n = Math.floor(samplesPerChunk * dt + rand());
      for (let i = 0; i < n; i++) {
        const x = cx * CS + Math.floor(rand() * CS), z = cz * CS + Math.floor(rand() * CS);
        let y = Math.min(CH - 1, TICK_CEILING);
        while (y > 0) { // find the surface: first block that is neither air nor a plant
          const id = world.getBlock(x, y, z);
          if (id !== B.AIR && !PLANT[id]) break;
          y--;
        }
        if (trySpreadGrass(world, x, y, z, rand)) changes++;
      }
    }
  }
  return changes;
}

// ---- soil moisture -------------------------------------------------------------------------------
// Soil with a "hydration" entry in blocks.json (farmland) is damp when water is near (the same rule as tilling:
// game.json "tilling"), and dry otherwise. Crops only grow on damp soil. Bare dry soil slowly turns back into
// dirt (a crop on it keeps it from reverting, but it will not grow until water is near again).
export function updateHydration(world, pcx, pcz, radius, dt, rand = Math.random) {
  let changes = 0;
  for (let cz = pcz - radius; cz <= pcz + radius; cz++) {
    for (let cx = pcx - radius; cx <= pcx + radius; cx++) {
      const chunk = world.getChunk(cx, cz);
      if (!chunk || chunk.hydrating.size === 0) continue;
      for (const i of [...chunk.hydrating]) { // copy: setBlock edits the set
        const h = HYDRATION.get(chunk.data[i]);
        if (!h) continue;
        const x = cx * CS + (i % CS), z = cz * CS + (Math.floor(i / CS) % CS), y = Math.floor(i / (CS * CS));
        if (y > TICK_CEILING) continue;
        const wet = world.nearWater(x, y, z);
        if (wet && h.wet) { world.setBlock(x, y, z, h.wet); changes++; }
        else if (!wet && h.dry) { world.setBlock(x, y, z, h.dry); changes++; }
        else if (!wet && h.decayInto && world.getBlock(x, y + 1, z) === B.AIR && rand() < h.decayRate * dt) {
          world.setBlock(x, y, z, h.decayInto);
          changes++;
        }
      }
    }
  }
  return changes;
}
