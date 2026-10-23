// Tree shapes: which variant grows where, and the blocks of a tree. Used by world generation and by saplings growing up.
// The variants themselves (shape, trunk height, which log and leaves, where they grow) are data in worldgen.json "trees".
import { REG } from './registry.js';
import { B, ROLE_LEAF, PLANT } from './blocks.js';
import { hash2 } from './noise.js';

export const TREES = REG.worldgen.trees;
export const VARIANTS = TREES.variants;
export const variantByKey = (key) => VARIANTS.find((v) => v.key === key);
const OAK = variantByKey('oak') ?? VARIANTS[0]; // the original tree: chunks saved before the other kinds existed keep it

// Which kind of tree grows at this column? Chosen by a hash of the position among the variants that suit the terrain height.
// (`biome` is optional: when given, variants that list biomes only grow in those)
export function pickVariant(seed, wx, wz, groundHeight, legacy = false, biome = null) {
  if (legacy) return OAK;
  const ok = VARIANTS.filter((v) => groundHeight >= v.heights[0] && groundHeight <= v.heights[1] && (!biome || !v.biomes || v.biomes.includes(biome)));
  if (!ok.length) return OAK;
  let r = hash2(wx, wz, seed + 13) * ok.reduce((t, v) => t + v.weight, 0);
  for (const v of ok) { if (r < v.weight) return v; r -= v.weight; }
  return ok[ok.length - 1];
}

// Trunk height of a tree at this spot (same hash as the original, so existing trees keep their height)
export const trunkHeight = (v, seed, wx, wz) => v.trunk[0] + Math.floor(hash2(wx, wz, seed + 7) * (v.trunk[1] - v.trunk[0] + 1));

// The leaf cells of one layer: a square of "radius" r around the trunk with the corners trimmed
function layer(out, wx, y, wz, r, id, seed, trim) {
  for (let dz = -r; dz <= r; dz++) {
    for (let dx = -r; dx <= r; dx++) {
      const corner = Math.abs(dx) === r && Math.abs(dz) === r;
      if (corner && r > 0 && (r === 1 || trim === 'always' || hash2(wx + dx, wz + dz + y, seed) < 0.5)) continue;
      out.push({ x: wx + dx, y, z: wz + dz, id, leaf: true });
    }
  }
}

// All blocks of a tree whose trunk stands on the ground block at height h (trunk from h+1 up): [{ x, y, z, id, leaf }]
export function treeBlocks(v, seed, wx, h, wz) {
  const trunk = trunkHeight(v, seed, wx, wz);
  const top = h + trunk;
  const out = [];
  if (v.shape === 'round') {
    for (let y = top - 2; y <= top + 1; y++) layer(out, wx, y, wz, y >= top ? 1 : 2, v.leavesId, seed, 'random');
  } else if (v.shape === 'tall') {
    const radii = [2, 3, 3, 2, 1, 1]; // from the lowest crown layer up
    radii.forEach((r, i) => layer(out, wx, top - 3 + i, wz, r, v.leavesId, seed, r >= 3 ? 'always' : 'random'));
  } else if (v.shape === 'cone') { // a spruce: a pointed spire of rings getting wider downwards
    const radii = [0, 1, 1, 2, 2, 3, 3]; // from the tip down
    const layers = Math.min(radii.length, trunk - 1);
    for (let i = 0; i < layers; i++) layer(out, wx, top + 1 - i, wz, radii[i], v.leavesId, seed, 'always');
  } else { // bush: a little ball of leaves around a stump
    layer(out, wx, top, wz, 1, v.leavesId, seed, 'random');
    layer(out, wx, top + 1, wz, 1, v.leavesId, seed, 'random');
    layer(out, wx, top - 1, wz, 2, v.leavesId, seed, 'always');
  }
  for (let y = h + 1; y <= top; y++) out.push({ x: wx, y, z: wz, id: v.logId, leaf: false });
  return out;
}

// A sapling at (x, y, z) grows into a tree if there is room: the trunk and crown cells must be free (air, plants or leaves).
// Returns true if it grew. `world` needs getBlock / setBlock.
export function growSapling(world, x, y, z, treeKeys, seed = 1, rand = Math.random) {
  const v = variantByKey(treeKeys[Math.floor(rand() * treeKeys.length)]);
  if (!v) return false;
  const blocks = treeBlocks(v, seed + Math.floor(rand() * 1000), x, y - 1, z);
  const free = (id) => id === B.AIR || PLANT[id] > 0 || ROLE_LEAF[id] === 1;
  for (const b of blocks) {
    if (b.x === x && b.y === y && b.z === z) continue; // the sapling's own cell
    if (!free(world.getBlock(b.x, b.y, b.z))) return false;
  }
  for (const b of blocks) world.setBlock(b.x, b.y, b.z, b.id); // logs first or last does not matter: nothing overlaps
  return true;
}
