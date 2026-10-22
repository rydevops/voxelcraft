// Tree felling: when a log is broken, the part of the tree above it (trunk and leaves) falls over.
// Pure logic on the voxel world (no rendering) so it can be tested in Node; main.js animates the fall.
import { B, PLANT, IS_WATER, SOLID, ROLE_LOG, ROLE_LEAF } from './blocks.js';
import { REG } from './registry.js';

const SIDES6 = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const MAX_LOGS = 300;
const LEAF_REACH = REG.game.treeFall.leafReach; // leaves decay when they are further than this from any log

const k = (x, y, z) => x + ',' + y + ',' + z;
const parse = (key) => key.split(',').map(Number);

// Logs touch (hold each other up) when they share a face or an edge, so a trunk standing diagonally next to another
// one still counts as beside it.
const NEIGH = [];
for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
  const n = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
  if (n === 1 || n === 2) NEIGH.push([dx, dy, dz]);
}

// A log is grounded when it rests on solid ground (not on leaves, and not on thin air). Unloaded chunks count as ground.
function isGrounded(world, x, y, z) {
  if (y <= 0 || !world.isLoaded(x, z)) return true;
  const below = world.getBlock(x, y - 1, z);
  return SOLID[below] === 1 && !ROLE_LOG[below] && !ROLE_LEAF[below];
}

// Work out which blocks fall after the log at (bx, by, bz) was broken.
// A tree only falls once it would be floating: if the logs above the cut are still joined to the ground through
// another log beside the broken one (a thick trunk, a neighbouring trunk), the whole thing stays put.
// Returns { logs: [[x,y,z,id]...], leaves: [[x,y,z,id]...] } or null if nothing falls.
export function findFallingTree(world, bx, by, bz) {
  // 1. every log still connected to the one above the cut; the structure falls only if none of them rests on the ground
  const logs = new Map();
  const stack = [];
  let grounded = false;
  const above = world.getBlock(bx, by + 1, bz);
  if (ROLE_LOG[above]) { logs.set(k(bx, by + 1, bz), [bx, by + 1, bz, above]); stack.push([bx, by + 1, bz]); }
  while (stack.length && logs.size < MAX_LOGS) {
    const [x, y, z] = stack.pop();
    if (isGrounded(world, x, y, z)) grounded = true;
    for (const [dx, dy, dz] of NEIGH) {
      const nx = x + dx, ny = y + dy, nz = z + dz;
      if (logs.has(k(nx, ny, nz)) || !ROLE_LOG[world.getBlock(nx, ny, nz)]) continue;
      logs.set(k(nx, ny, nz), [nx, ny, nz, world.getBlock(nx, ny, nz)]);
      stack.push([nx, ny, nz]);
    }
  }
  if (logs.size >= MAX_LOGS) return null; // a giant structure, not a tree: leave it alone
  if (grounded) logs.clear();            // still held up by a log beside the one that was broken: it does not fall

  // 2. leaves that belong to this tree: within reach of the falling logs (or of the broken spot)...
  const seeds = [[bx, by, bz], ...logs.values()];
  const reach = new Map(); // key -> distance through leaves
  let frontier = [];
  for (const [x, y, z] of seeds) {
    for (const [dx, dy, dz] of SIDES6) {
      const nx = x + dx, ny = y + dy, nz = z + dz;
      if (ROLE_LEAF[world.getBlock(nx, ny, nz)] && !reach.has(k(nx, ny, nz))) { reach.set(k(nx, ny, nz), 1); frontier.push([nx, ny, nz]); }
    }
  }
  for (let d = 1; d < LEAF_REACH + 1 && frontier.length; d++) {
    const next = [];
    for (const [x, y, z] of frontier) {
      for (const [dx, dy, dz] of SIDES6) {
        const nx = x + dx, ny = y + dy, nz = z + dz;
        if (!ROLE_LEAF[world.getBlock(nx, ny, nz)] || reach.has(k(nx, ny, nz))) continue;
        reach.set(k(nx, ny, nz), d + 1);
        next.push([nx, ny, nz]);
      }
    }
    frontier = next;
  }

  // ...minus the ones still held by a log that stays standing (this tree's stump or a neighbouring tree)
  const supported = new Set();
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const key of reach.keys()) {
    const [x, y, z] = parse(key);
    minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
  }
  if (reach.size) {
    const m = LEAF_REACH + 1;
    let front = [];
    for (let x = minX - m; x <= maxX + m; x++) for (let y = minY - m; y <= maxY + m; y++) for (let z = minZ - m; z <= maxZ + m; z++) {
      if (ROLE_LOG[world.getBlock(x, y, z)] && !logs.has(k(x, y, z))) front.push([x, y, z]);
    }
    for (let d = 1; d <= LEAF_REACH && front.length; d++) {
      const next = [];
      for (const [x, y, z] of front) {
        for (const [dx, dy, dz] of SIDES6) {
          const nx = x + dx, ny = y + dy, nz = z + dz, key = k(nx, ny, nz);
          if (!ROLE_LEAF[world.getBlock(nx, ny, nz)] || supported.has(key)) continue;
          supported.add(key);
          next.push([nx, ny, nz]);
        }
      }
      front = next;
    }
  }
  const leaves = [...reach.keys()].filter((key) => !supported.has(key)).map((key) => { const c = parse(key); return [...c, world.getBlock(c[0], c[1], c[2])]; });

  if (!logs.size && !leaves.length) return null;
  return { logs: [...logs.values()], leaves };
}

// Take the falling blocks out of the world (the animation draws them while they fall).
export function removeTree(world, tree) {
  for (const [x, y, z] of tree.logs) world.setBlock(x, y, z, B.AIR);
  for (const [x, y, z] of tree.leaves) world.setBlock(x, y, z, B.AIR);
}

// Which way the tree topples: directly away from the player (an axis-aligned unit vector).
export function fallDirection(bx, bz, px, pz) {
  const dx = bx + 0.5 - px, dz = bz + 0.5 - pz;
  if (Math.abs(dx) >= Math.abs(dz)) return { dx: dx >= 0 ? 1 : -1, dz: 0 };
  return { dx: 0, dz: dz >= 0 ? 1 : -1 };
}

// Where a block at (x,y,z) ends up after the part of the tree above (bx, by, bz) tips 90 degrees towards (dx, dz).
// Height above the break becomes distance along the fall; blocks on the far side of the trunk end up lower.
export function landingCell(x, y, z, bx, by, bz, dx, dz) {
  const ox = x - bx, oz = z - bz, h = y - by;
  const along = ox * dx + oz * dz;
  const lat = ox * dz - oz * dx;
  return [bx + dx * h + dz * lat, by - along, bz + dz * h - dx * lat];
}

const canLandIn = (id) => id === B.AIR || PLANT[id] > 0 || IS_WATER[id] === 1;

// Where does a block that tips over onto (tx, ty, tz) come to rest? Nudged up out of terrain, then slid down onto
// the ground. Returns the y, or null if there is no room within `maxLift` blocks.
function restingY(world, tx, ty, tz, maxLift) {
  for (let lift = 0; lift <= maxLift; lift++) {
    let cy = ty + lift;
    if (cy < 1 || cy >= 64 || !canLandIn(world.getBlock(tx, cy, tz))) continue;
    for (let drop = 0; drop < 5 && cy > 1 && canLandIn(world.getBlock(tx, cy - 1, tz)); drop++) cy--; // never hover in mid-air
    return cy;
  }
  return null;
}

// Put the toppled tree back into the world as blocks. Blocks that land inside terrain are nudged up (a few blocks)
// or lost. Returns { placed: [{id,x,y,z}], lost: [{id,x,y,z}] } where "lost" blocks should drop as items.
export function landTree(world, tree, bx, by, bz, dx, dz) {
  const placed = [], lost = [];
  for (const list of [tree.logs, tree.leaves]) { // trunk first so it gets the best spots
    const sorted = list.slice().sort((a, b) => (a[1] - by) - (b[1] - by)); // nearest the hinge first
    for (const [x, y, z, id] of sorted) {
      const [tx, ty, tz] = landingCell(x, y, z, bx, by, bz, dx, dz);
      const cy = restingY(world, tx, ty, tz, 3);
      if (cy === null) { lost.push({ id, x: tx, y: ty, z: tz }); continue; }
      world.setBlock(tx, cy, tz, id);
      placed.push({ id, x: tx, y: cy, z: tz });
    }
  }
  return { placed, lost };
}

// The tree smashes apart where it lands: every block becomes a spot where its loot should appear.
// Returns [{id, x, y, z}] (id = the block that broke), without touching the world.
export function shatterTree(world, tree, bx, by, bz, dx, dz) {
  const out = [];
  for (const list of [tree.logs, tree.leaves]) {
    for (const [x, y, z, id] of list) {
      const [tx, ty, tz] = landingCell(x, y, z, bx, by, bz, dx, dz);
      const cy = restingY(world, tx, ty, tz, 6);
      out.push({ id, x: tx, y: cy ?? by + 1, z: tz });
    }
  }
  return out;
}
