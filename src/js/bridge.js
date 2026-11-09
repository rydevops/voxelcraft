// Bridge building: with nothing under the crosshair (you are looking out over a gap), a placed block goes in front of the block you
// are standing on, so a bridge can be built forwards without crouching and looking at the side of the last block.
// No rendering here: it only works out which block to build against, and gives it as a hit (like raycast does) so placing works as usual.
import { B, SOLID, PLANT, IS_WATER } from './blocks.js';

// facing: 0-3 = north (-z), east (+x), south (+z), west (-x), as in main.js lookFacing
export const FACING_STEP = [[0, -1], [1, 0], [0, 1], [-1, 0]];

const canFill = (id) => id === B.AIR || !!IS_WATER[id] || !!PLANT[id];

// pos: the player's feet { x, y, z }; hw: half the player's width; the player must be standing on something.
// Returns { x, y, z, nx, ny, nz, id } (the block to build against and the face) or null when there is nothing sensible to do.
// `steps` is how many blocks ahead of the floor's edge we are willing to look for the gap.
export function bridgeHit(world, pos, hw, facing, steps = 2) {
  const [dx, dz] = FACING_STEP[facing] ?? [0, 0];
  if (!dx && !dz) return null;
  const by = Math.floor(pos.y - 0.05); // the layer the player stands on
  // the floor blocks under the four corners of the player (standing on an edge, the one under the middle may be air)
  let base = null, best = -Infinity;
  for (const cz of [-hw, hw]) for (const cx of [-hw, hw]) {
    const x = Math.floor(pos.x + cx), z = Math.floor(pos.z + cz);
    if (!SOLID[world.getBlock(x, by, z)]) continue;
    const score = (x + 0.5 - pos.x) * dx + (z + 0.5 - pos.z) * dz; // furthest along the way we are facing
    if (score > best) { best = score; base = { x, z }; }
  }
  if (!base) return null;
  let { x, z } = base;
  for (let k = 0; k <= steps; k++) {
    const nx = x + dx, nz = z + dz;
    const here = world.getBlock(nx, by, nz);
    if (canFill(here)) return { x, y: by, z, nx: dx, ny: 0, nz: dz, id: world.getBlock(x, by, z) };
    if (!SOLID[here]) return null; // something else in the way (a fence, a door...): leave it alone
    x = nx; z = nz;
  }
  return null;
}
