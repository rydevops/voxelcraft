// Opening and shutting a door (both halves together), for the player's right-click and for villagers going to bed.
import { DOOR } from './blocks.js';

// Make the door whose lower or upper half is at (x, y, z) open or shut. Returns the cells that changed, or null if it was already so
// (or there is no door there).
export function setDoorOpen(world, x, y, z, open) {
  const d = DOOR.get(world.getBlock(x, y, z));
  if (!d || d.open === open) return null;
  const oy = d.top ? y - 1 : y + 1;
  const hasPartner = world.getBlock(x, oy, z) === d.partner;
  world.setBlock(x, y, z, d.toggled);
  if (hasPartner) world.setBlock(x, oy, z, DOOR.get(d.partner).toggled);
  return hasPartner ? [[x, y, z], [x, oy, z]] : [[x, y, z]];
}
