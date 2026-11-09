// Chests: boxes that hold things. Each chest block has a tier (blocks.json "chest": how many slots, and by how many times a normal stack each
// slot is bigger), so an iron chest holds more slots AND stacks of 256 where your own pockets stop at 64. A chest can be upgraded in place
// (the upgrade item turns a chest into the next tier and keeps what is inside). Crafting reaches into every chest near you (ChestSource below)
// so you never have to dig through them for what a recipe needs.
// Pure logic (no DOM, no rendering) so it can be tested in Node.
import { CHEST } from './blocks.js';
import { maxStack } from './items.js';
import { REG } from './registry.js';

const RANGE = REG.game.chests.craftRange;

export const chestTier = (blockId) => CHEST.get(blockId) ?? null;          // { slots, stack } of a chest block, or null
export const isChest = (blockId) => CHEST.has(blockId);
// How many of an item one slot of this chest holds: a normal stack times the tier's multiplier (tools and other single items stay single)
export const slotLimit = (itemId, tier) => { const base = maxStack(itemId); return base > 1 ? base * tier.stack : 1; };

export class Chests {
  constructor() { this.map = new Map(); } // "x,y,z" -> { slots: [null | { id, n, d }], x, y, z }
  static key(x, y, z) { return x + ',' + y + ',' + z; }

  // The chest at a place, made (empty) if it is new and grown to the slots of its tier (an upgrade adds slots and keeps the contents)
  get(x, y, z, tier) {
    const k = Chests.key(x, y, z);
    let c = this.map.get(k);
    if (!c) { c = { slots: [], x, y, z }; this.map.set(k, c); }
    while (c.slots.length < tier.slots) c.slots.push(null);
    return c;
  }
  has(x, y, z) { return this.map.has(Chests.key(x, y, z)); }

  // The chest was broken: returns everything that was inside so it can drop
  remove(x, y, z) {
    const k = Chests.key(x, y, z), c = this.map.get(k);
    this.map.delete(k);
    return c ? c.slots.filter(Boolean) : [];
  }

  // Every chest within `range` blocks of a point (a chest nobody has put anything in is not worth reaching into)
  near(px, py, pz, range = RANGE) {
    const out = [];
    for (const c of this.map.values()) if (Math.hypot(c.x + 0.5 - px, c.y + 0.5 - py, c.z + 0.5 - pz) <= range && c.slots.some(Boolean)) out.push(c);
    return out;
  }

  serialize() {
    const out = {};
    for (const [k, c] of this.map) if (c.slots.some(Boolean)) out[k] = c.slots.map((s) => (s ? [s.id, s.n, s.d || 0] : null));
    return out;
  }

  load(obj) {
    this.map.clear();
    for (const [k, slots] of Object.entries(obj || {})) {
      const [x, y, z] = k.split(',').map(Number);
      this.map.set(k, { x, y, z, slots: slots.map((s) => (s ? { id: s[0], n: s[1], d: s[2] || 0 } : null)) });
    }
  }
}

// ---- the cursor and a chest's slots ---------------------------------------------------------------------
// A stack in a chest can be bigger than the biggest stack you can carry, so picking one up takes at most a carryable stack.
// cursor is { id, n, d } | null; returns the new cursor. button 0 = left click, 2 = right click.
export function clickChest(chest, i, cursor, button, tier) {
  const slots = chest.slots, s = slots[i];
  if (button === 2) {
    if (!cursor) { // half the stack (at most what a hand can hold)
      if (!s) return null;
      const take = Math.min(Math.ceil(s.n / 2), maxStack(s.id));
      s.n -= take;
      const out = { id: s.id, n: take, d: s.d };
      if (s.n <= 0) slots[i] = null;
      return out;
    }
    if (!s) { slots[i] = { id: cursor.id, n: 1, d: cursor.d }; cursor.n -= 1; return cursor.n > 0 ? cursor : null; }
    if (s.id === cursor.id && s.n < slotLimit(s.id, tier)) { s.n += 1; cursor.n -= 1; return cursor.n > 0 ? cursor : null; }
    return cursor;
  }
  if (!cursor) { // take up to a hand-full
    if (!s) return null;
    const take = Math.min(s.n, maxStack(s.id));
    const out = { id: s.id, n: take, d: s.d };
    s.n -= take;
    if (s.n <= 0) slots[i] = null;
    return out;
  }
  if (!s) { slots[i] = cursor; return null; }
  if (s.id === cursor.id && maxStack(s.id) > 1) {
    const take = Math.min(slotLimit(s.id, tier) - s.n, cursor.n);
    s.n += take;
    cursor.n -= take;
    return cursor.n > 0 ? cursor : null;
  }
  if (s.n > maxStack(s.id)) return cursor; // a huge stack cannot be swapped into a hand: take some of it out first
  slots[i] = cursor; // swap
  return s;
}

// Put a stack into a chest as far as it will go (existing stacks of the same thing first). Returns how many did NOT fit.
export function putInChest(chest, tier, stack) {
  let n = stack.n;
  if (maxStack(stack.id) > 1) {
    for (const s of chest.slots) {
      if (n <= 0) break;
      if (s && s.id === stack.id) { const take = Math.min(slotLimit(s.id, tier) - s.n, n); s.n += take; n -= take; }
    }
  }
  for (let i = 0; i < chest.slots.length && n > 0; i++) {
    if (chest.slots[i]) continue;
    const take = Math.min(slotLimit(stack.id, tier), n);
    chest.slots[i] = { id: stack.id, n: take, d: stack.d || 0 };
    n -= take;
  }
  return n;
}

// Shift-click on a chest slot: send the whole stack to the inventory, as much as fits. Returns how many moved.
export function takeFromChest(chest, i, inventory) {
  const s = chest.slots[i];
  if (!s) return 0;
  const left = inventory.add(s.id, s.n, s.d);
  const moved = s.n - left;
  if (left > 0) s.n = left; else chest.slots[i] = null;
  return moved;
}

// Tidy up: merge half-empty stacks and put the contents in order (by item, fullest first)
export function sortChest(chest, tier) {
  const totals = new Map();
  for (const s of chest.slots) if (s) { const key = maxStack(s.id) > 1 ? 'n' + s.id : 'u' + Math.random(); const t = totals.get(key) ?? { id: s.id, n: 0, d: s.d }; t.n += s.n; totals.set(key, t); }
  const stacks = [];
  for (const t of totals.values()) {
    let n = t.n;
    const lim = slotLimit(t.id, tier);
    while (n > 0) { const take = Math.min(lim, n); stacks.push({ id: t.id, n: take, d: t.d }); n -= take; }
  }
  stacks.sort((a, b) => a.id - b.id || b.n - a.n);
  chest.slots.fill(null);
  stacks.forEach((s, i) => { chest.slots[i] = s; });
}

// ---- crafting from the chests around you ---------------------------------------------------------------
// The thing an Inventory asks "how many of this do you have, and take n" to, so a recipe can use what is in the chests nearby.
export class ChestSource {
  constructor(chests) { this.chests = chests; }
  count(id) { let c = 0; for (const ch of this.chests) for (const s of ch.slots) if (s && s.id === id) c += s.n; return c; }
  remove(id, n) {
    for (const ch of this.chests) {
      for (let i = 0; i < ch.slots.length && n > 0; i++) {
        const s = ch.slots[i];
        if (!s || s.id !== id) continue;
        const take = Math.min(s.n, n);
        s.n -= take; n -= take;
        if (s.n <= 0) ch.slots[i] = null;
      }
    }
    return n === 0;
  }
}
