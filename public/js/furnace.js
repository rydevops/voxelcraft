// Furnaces: each one has an input slot, a fuel slot and an output slot, and cooking takes time.
// Pure logic (no DOM, no rendering) so it can be tested in Node. What burns and what it makes comes from the data
// files (items/blocks "fuel" seconds and recipes.json "smelting").
import { fuelSeconds, smeltFor } from './items.js';
import { maxStack } from './items.js';
import { clickStack } from './inventory.js';

export const INPUT = 0, FUEL = 1, OUTPUT = 2;
export const isFuel = (id) => fuelSeconds(id) > 0;
export const isSmeltable = (id) => !!smeltFor(id);

export function newFurnace() {
  // slots: [input, fuel, output], each null or { id, n, d }.  burn = seconds of fire left from the current fuel item,
  // burnMax = how long that item burns in total (for the flame icon), progress = seconds spent cooking the current item.
  return { slots: [null, null, null], burn: 0, burnMax: 0, progress: 0, working: 0 };
}

// What the furnace is cooking right now: { rec, can } (can: there is something to cook and room for the result)
export function cooking(f) {
  const input = f.slots[INPUT], output = f.slots[OUTPUT];
  const rec = input ? smeltFor(input.id) : null;
  const can = !!rec && (!output || (output.id === rec.out && output.n < maxStack(rec.out)));
  return { rec, can };
}

// Advance a furnace by dt seconds.
export function tickFurnace(f, dt) {
  const { rec, can } = cooking(f);
  const input = f.slots[INPUT], fuel = f.slots[FUEL];
  if (f.working !== (rec ? rec.in : 0)) { f.working = rec ? rec.in : 0; f.progress = 0; } // a different item: start over
  if (f.burn <= 0 && can && fuel && isFuel(fuel.id)) { // light a new piece of fuel
    f.burn = f.burnMax = fuelSeconds(fuel.id);
    if (--fuel.n <= 0) f.slots[FUEL] = null;
  }
  if (f.burn > 0) {
    f.burn = Math.max(0, f.burn - dt);
    if (f.burn <= 0) { // the fuel ran out this tick: light the next piece straight away, so the fire (and the lit furnace) never blinks off
      const next = cooking(f), again = f.slots[FUEL];
      if (next.can && again && isFuel(again.id)) { f.burnMax = f.burn = fuelSeconds(again.id); if (--again.n <= 0) f.slots[FUEL] = null; }
    }
    if (can) {
      f.progress += dt;
      if (f.progress >= rec.seconds) {
        f.progress -= rec.seconds;
        if (--input.n <= 0) { f.slots[INPUT] = null; f.progress = 0; }
        if (f.slots[OUTPUT]) f.slots[OUTPUT].n += 1; else f.slots[OUTPUT] = { id: rec.out, n: 1, d: 0 };
      }
    } else f.progress = Math.max(0, f.progress - 2 * dt);
  } else f.progress = Math.max(0, f.progress - 2 * dt); // goes cold: the progress slips back
}

export const isLit = (f) => f.burn > 0;
export const isEmpty = (f) => f.slots.every((s) => !s) && f.burn <= 0 && f.progress <= 0;

// Click one of the three slots with the cursor. The output slot can only be taken from. Returns { cursor, took }
// where took is the stack that came out of the output slot (for goals and sounds), if any.
export function clickFurnaceSlot(f, which, cursor, button = 0) {
  if (which === OUTPUT) {
    const out = f.slots[OUTPUT];
    if (!out) return { cursor, took: null };
    if (cursor && (cursor.id !== out.id || cursor.n + out.n > maxStack(out.id))) return { cursor, took: null };
    const took = { ...out };
    f.slots[OUTPUT] = null;
    return { cursor: cursor ? { ...cursor, n: cursor.n + out.n } : out, took };
  }
  const accepts = which === INPUT ? isSmeltable : isFuel;
  return { cursor: clickStack(f.slots, which, cursor, button, accepts), took: null };
}

// Shift-click from the inventory: put the stack in whichever slot fits (smeltable -> input, fuel -> fuel).
// Returns how many were NOT moved.
export function quickInsert(f, stack) {
  const which = isSmeltable(stack.id) ? INPUT : isFuel(stack.id) ? FUEL : -1;
  if (which < 0) return stack.n;
  const cur = f.slots[which], max = maxStack(stack.id);
  if (!cur) { f.slots[which] = { id: stack.id, n: stack.n, d: stack.d }; return 0; }
  if (cur.id !== stack.id) return stack.n;
  const take = Math.min(max - cur.n, stack.n);
  cur.n += take;
  return stack.n - take;
}

// The recipe-book click: top up the input slot with the item to cook (and the fuel slot if it is empty), taking
// from the inventory. Returns what moved: { input, fuel } counts.
export function autoFill(f, inventory, recipe) {
  const moved = { input: 0, fuel: 0 };
  const cur = f.slots[INPUT];
  if (cur && cur.id !== recipe.in) return moved; // something else is in there: leave it
  const room = maxStack(recipe.in) - (cur ? cur.n : 0);
  const take = Math.min(room, inventory.count(recipe.in));
  if (take > 0) {
    inventory.remove(recipe.in, take);
    if (cur) cur.n += take; else f.slots[INPUT] = { id: recipe.in, n: take, d: 0 };
    moved.input = take;
  }
  if (!f.slots[FUEL] && f.burn <= 0 && f.slots[INPUT]) { // nothing to burn: add just enough fuel to cook what is loaded
    const need = f.slots[INPUT].n * recipe.seconds;
    const have = (id) => inventory.count(id);
    const options = [...new Set(inventory.slots.filter((st) => st && isFuel(st.id) && st.id !== recipe.in).map((st) => st.id))]
      .map((id) => ({ id, per: fuelSeconds(id), total: have(id) * fuelSeconds(id) }));
    // the cheapest fuel that covers the job, else whichever gives the most
    const enough = options.filter((o) => o.total >= need).sort((p, q) => p.per - q.per)[0];
    const best = enough ?? options.sort((p, q) => q.total - p.total)[0];
    if (best) {
      const n = Math.min(maxStack(best.id), have(best.id), Math.ceil(need / best.per));
      inventory.remove(best.id, n);
      f.slots[FUEL] = { id: best.id, n, d: 0 };
      moved.fuel = n;
    }
  }
  return moved;
}

// ---- all the furnaces in a world ---------------------------------------------------------------
export class Furnaces {
  // hooks.onLit(x, y, z, lit) -> true once applied (false = try again later, e.g. the chunk is not loaded)
  constructor(hooks = {}) {
    this.map = new Map();
    this.hooks = hooks;
  }
  static key(x, y, z) { return x + ',' + y + ',' + z; }

  get(x, y, z) {
    const k = Furnaces.key(x, y, z);
    if (!this.map.has(k)) { const f = newFurnace(); f.lit = null; this.map.set(k, f); }
    return this.map.get(k);
  }
  has(x, y, z) { return this.map.has(Furnaces.key(x, y, z)); }

  // Take the furnace away (it was broken); returns its contents so they can drop
  remove(x, y, z) {
    const k = Furnaces.key(x, y, z), f = this.map.get(k);
    this.map.delete(k);
    return f ? f.slots.filter(Boolean) : [];
  }

  // (an empty idle furnace is simply not saved; the window may still hold a reference to it, so it is never dropped here)
  update(dt) {
    for (const [k, f] of this.map) {
      tickFurnace(f, dt);
      const lit = isLit(f);
      if (lit !== f.lit) {
        const [x, y, z] = k.split(',').map(Number);
        if (this.hooks.onLit?.(x, y, z, lit) !== false) f.lit = lit;
      }
    }
  }

  serialize() {
    const out = {};
    for (const [k, f] of this.map) {
      if (isEmpty(f)) continue;
      out[k] = { slots: f.slots.map((s) => (s ? [s.id, s.n, s.d || 0] : null)), burn: f.burn, burnMax: f.burnMax, progress: f.progress };
    }
    return out;
  }

  load(obj) {
    this.map.clear();
    for (const [k, v] of Object.entries(obj || {})) {
      const f = newFurnace();
      f.slots = [0, 1, 2].map((i) => (v.slots?.[i] ? { id: v.slots[i][0], n: v.slots[i][1], d: v.slots[i][2] || 0 } : null));
      f.burn = v.burn || 0; f.burnMax = v.burnMax || 0; f.progress = v.progress || 0;
      f.lit = null; // the block gets set to the right look on the first update
      this.map.set(k, f);
    }
  }
}
