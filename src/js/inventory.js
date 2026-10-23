// Inventory logic: 36 slots (0-8 are the hotbar), stacking, crafting. Pure data, no DOM.
import { maxStack, maxDamage, RECIPES, specIds, equipOf, canWear, isOffhand, EQUIP_SLOTS } from './items.js';

export const SLOTS = 36;          // the normal inventory
export const BACKPACK_MAX = 9;    // extra slots a backpack can add (kept after the normal ones)
export const TOTAL_SLOTS = SLOTS + BACKPACK_MAX;
export const HOTBAR = 9;

export class Inventory {
  constructor() {
    this.slots = Array(TOTAL_SLOTS).fill(null); // null | { id, n, d } (d = damage taken, tools only); 36.. only count with a backpack on
    this.equipment = Object.fromEntries(EQUIP_SLOTS.map((e) => [e.id, null])); // helmet, chestplate, ... -> a stack or null
    this.linked = []; // other places crafting may take from (the chests near you): each has count(id) and remove(id, n); see chests.js
  }

  // How many slots can hold things right now: 36, plus the backpack's if one is worn
  get capacity() {
    const bp = this.equipment.backpack;
    return SLOTS + (bp ? Math.min(BACKPACK_MAX, equipOf(bp.id)?.slots ?? 0) : 0);
  }

  // Total armor points of everything worn
  get armor() {
    let n = 0;
    for (const st of Object.values(this.equipment)) if (st) n += equipOf(st.id)?.armor ?? 0;
    return n;
  }

  // Wear (or take off) things by clicking an equipment slot with the cursor. Only the right kind of item fits; the
  // backpack cannot come off while there are things in its extra slots. Returns { cursor, refused } (refused = why not).
  clickEquip(slotId, cursor, button = 0) {
    const cur = this.equipment[slotId];
    if (cursor) {
      if (!canWear(cursor.id, slotId)) return { cursor, refused: null };
      if (isOffhand(cursor.id)) { // torches in the shield slot: a whole stack lives there
        const max = maxStack(cursor.id);
        if (cur && cur.id === cursor.id) { // add to the stack (right button: just one)
          const take = Math.min(max - cur.n, button === 2 ? 1 : cursor.n);
          cur.n += take;
          return { cursor: cursor.n - take > 0 ? { ...cursor, n: cursor.n - take } : null, refused: null };
        }
        if (button === 2 && !cur) {
          this.equipment[slotId] = { id: cursor.id, n: 1, d: cursor.d };
          return { cursor: cursor.n > 1 ? { ...cursor, n: cursor.n - 1 } : null, refused: null };
        }
        this.equipment[slotId] = cursor; // swap the whole stack
        return { cursor: cur, refused: null };
      }
      if (slotId === 'backpack' && cur && this.slots.slice(SLOTS).some(Boolean)) return { cursor, refused: 'Empty the backpack first' };
      const one = { id: cursor.id, n: 1, d: cursor.d };
      const rest = cursor.n > 1 ? { ...cursor, n: cursor.n - 1 } : null;
      if (cur && rest) return { cursor, refused: null }; // swapping needs a free hand
      this.equipment[slotId] = one;
      return { cursor: rest ?? cur, refused: null };
    }
    if (!cur) return { cursor: null, refused: null };
    if (slotId === 'backpack' && this.slots.slice(SLOTS).some(Boolean)) return { cursor: null, refused: 'Empty the backpack first' };
    this.equipment[slotId] = null;
    return { cursor: cur, refused: null };
  }

  // Shift-click an inventory slot: wear it if it is wearable (what was worn goes back into that slot). Returns true if worn.
  quickEquip(i) {
    const st = this.slots[i];
    if (st && isOffhand(st.id)) return this.quickOffhand(i);
    const slotId = st && equipOf(st.id)?.slot;
    if (!slotId || i >= this.capacity) return false;
    if (this.equipment[slotId] && isOffhand(this.equipment[slotId].id)) return false; // keep the offhand stack where it is
    const cur = this.equipment[slotId];
    if (cur && slotId === 'backpack' && this.slots.slice(SLOTS).some(Boolean)) return false;
    const one = { id: st.id, n: 1, d: st.d };
    if (st.n > 1) { if (cur) return false; st.n -= 1; } else this.slots[i] = cur;
    this.equipment[slotId] = one;
    return true;
  }

  // Shift-click a stack of torches: it goes into the shield slot (joining the torches already there, or taking the empty slot).
  // A shield, or a different offhand item, stays where it is. Returns true if anything moved.
  quickOffhand(i) {
    const st = this.slots[i];
    const cur = this.equipment.shield;
    if (!st || i >= this.capacity) return false;
    if (!cur) { this.equipment.shield = { ...st }; this.slots[i] = null; return true; }
    if (cur.id !== st.id) return false;
    const take = Math.min(maxStack(st.id) - cur.n, st.n);
    if (take <= 0) return false;
    cur.n += take;
    if (take === st.n) this.slots[i] = null; else st.n -= take;
    return true;
  }

  // Take everything off and out (death): returns all the stacks
  takeEverything() {
    const out = [];
    for (let i = 0; i < this.slots.length; i++) if (this.slots[i]) { out.push(this.slots[i]); this.slots[i] = null; }
    for (const k of Object.keys(this.equipment)) if (this.equipment[k]) { out.push(this.equipment[k]); this.equipment[k] = null; }
    return out;
  }

  // Put items in, topping up existing stacks first. Returns how many did NOT fit.
  add(id, n = 1, d = 0) {
    const max = maxStack(id);
    if (max > 1) {
      for (const s of this.slots.slice(0, this.capacity)) {
        if (n <= 0) break;
        if (s && s.id === id && s.n < max) {
          const take = Math.min(max - s.n, n);
          s.n += take;
          n -= take;
        }
      }
    }
    for (let i = 0; i < this.capacity && n > 0; i++) {
      if (this.slots[i]) continue;
      const take = Math.min(max, n);
      this.slots[i] = { id, n: take, d };
      n -= take;
    }
    return n;
  }

  count(id) {
    let c = 0;
    for (const s of this.slots) if (s && s.id === id) c += s.n;
    return c;
  }

  // Remove n of an item from anywhere. Returns false (and changes nothing) if there isn't enough.
  remove(id, n = 1) {
    if (this.count(id) < n) return false;
    // drain from the back of the inventory first so the hotbar keeps its stacks
    for (let i = this.slots.length - 1; i >= 0 && n > 0; i--) {
      const s = this.slots[i];
      if (!s || s.id !== id) continue;
      const take = Math.min(s.n, n);
      s.n -= take;
      n -= take;
      if (s.n === 0) this.slots[i] = null;
    }
    return true;
  }

  // Could `n` of this item fit right now?
  canFit(id, n = 1) {
    const max = maxStack(id);
    let room = 0;
    for (const s of this.slots.slice(0, this.capacity)) {
      if (!s) room += max;
      else if (s.id === id && max > 1) room += max - s.n;
      if (room >= n) return true;
    }
    return false;
  }

  // How many of an item we hold, and in the linked chests nearby (what a recipe can use)
  countAll(id) {
    return this.linked.reduce((sum, src) => sum + src.count(id), this.count(id));
  }

  // Take n of an item for a recipe: from the inventory first, then from the chests. Returns how many could NOT be taken.
  take(id, n) {
    const mine = Math.min(n, this.count(id));
    if (mine > 0) this.remove(id, mine);
    n -= mine;
    for (const src of this.linked) {
      if (n <= 0) break;
      const here = Math.min(n, src.count(id));
      if (here > 0) { src.remove(id, here); n -= here; }
    }
    return n;
  }

  // How many of an ingredient spec (an item id, or an array of interchangeable ids) we can use
  countSpec(spec) {
    return specIds(spec).reduce((sum, id) => sum + this.countAll(id), 0);
  }

  // Use up n of a spec, taking from the alternatives in the order they are listed
  removeSpec(spec, n) {
    for (const id of specIds(spec)) {
      if (n <= 0) break;
      const here = Math.min(n, this.countAll(id));
      if (here > 0) this.take(id, here);
      n -= here;
    }
    return n === 0;
  }

  canCraft(recipe, stations = {}) {
    if (recipe.station && !stations[recipe.station]) return false;
    return recipe.ins.every(([spec, n]) => this.countSpec(spec) >= n);
  }

  // Consume ingredients and add the result. Returns { ok, leftover } where leftover items must be dropped.
  craft(recipe, stations = {}) {
    if (!this.canCraft(recipe, stations)) return { ok: false, leftover: 0 };
    for (const [spec, n] of recipe.ins) this.removeSpec(spec, n);
    const leftover = this.add(recipe.out, recipe.n);
    return { ok: true, leftover };
  }

  // Wear a tool by one use. Returns true if it broke.
  damage(slotIndex, amount = 1) {
    const s = this.slots[slotIndex];
    if (!s || !maxDamage(s.id)) return false;
    s.d += amount;
    if (s.d >= maxDamage(s.id)) {
      this.slots[slotIndex] = null;
      return true;
    }
    return false;
  }

  // ---- cursor-style slot interaction (used by the inventory screen) ----
  // cursor is { id, n, d } | null; returns the new cursor
  clickSlot(i, cursor, button = 0) {
    return clickStack(this.slots, i, cursor, button);
  }

  // Shift-click: move a stack between the hotbar and the main inventory
  quickMove(i) {
    const s = this.slots[i];
    if (!s) return;
    const [a, b] = i < HOTBAR ? [HOTBAR, this.capacity] : [0, HOTBAR];
    const max = maxStack(s.id);
    let n = s.n;
    for (let j = a; j < b && n > 0; j++) {
      const t = this.slots[j];
      if (t && t.id === s.id && max > 1 && t.n < max) {
        const take = Math.min(max - t.n, n);
        t.n += take;
        n -= take;
      }
    }
    for (let j = a; j < b && n > 0; j++) {
      if (!this.slots[j]) { this.slots[j] = { id: s.id, n, d: s.d }; n = 0; }
    }
    if (n === 0) this.slots[i] = null;
    else s.n = n;
  }

  serialize() {
    return this.slots.map((s) => (s ? [s.id, s.n, s.d] : null));
  }

  load(arr) {
    this.slots = Array(TOTAL_SLOTS).fill(null);
    (arr || []).slice(0, TOTAL_SLOTS).forEach((s, i) => { if (s) this.slots[i] = { id: s[0], n: s[1], d: s[2] || 0 }; });
  }

  serializeEquipment() {
    return Object.fromEntries(Object.entries(this.equipment).filter(([, st]) => st).map(([k, st]) => [k, [st.id, st.n, st.d]]));
  }

  loadEquipment(obj) {
    for (const k of Object.keys(this.equipment)) {
      const s = obj?.[k];
      this.equipment[k] = s && canWear(s[0], k) ? { id: s[0], n: isOffhand(s[0]) ? Math.max(1, Math.min(maxStack(s[0]), s[1] || 1)) : 1, d: s[2] || 0 } : null;
    }
  }
}

export { RECIPES };

// Click slot i of any list of stacks with the cursor (pick up, place, swap, merge; right button splits / drops one).
// accepts(id) can refuse an item (a furnace fuel slot only takes fuel): the cursor then keeps it. Returns the new cursor.
export function clickStack(slots, i, cursor, button = 0, accepts = () => true) {
  const s = slots[i];
  if (cursor && !accepts(cursor.id)) return cursor;
  const max = cursor ? maxStack(cursor.id) : 1;
  if (button === 0) {
    if (!cursor) { slots[i] = null; return s; }
    if (!s) { slots[i] = cursor; return null; }
    if (s.id === cursor.id && max > 1) {
      const take = Math.min(max - s.n, cursor.n);
      s.n += take;
      cursor.n -= take;
      return cursor.n > 0 ? cursor : null;
    }
    slots[i] = cursor; // swap
    return s;
  }
  // right button: split the stack / drop a single item
  if (!cursor) {
    if (!s) return null;
    const half = Math.ceil(s.n / 2);
    s.n -= half;
    const out = { id: s.id, n: half, d: s.d };
    if (s.n === 0) slots[i] = null;
    return out;
  }
  if (!s) {
    slots[i] = { id: cursor.id, n: 1, d: cursor.d };
    cursor.n -= 1;
  } else if (s.id === cursor.id && s.n < max) {
    s.n += 1;
    cursor.n -= 1;
  } else {
    slots[i] = cursor;
    return s;
  }
  return cursor.n > 0 ? cursor : null;
}
