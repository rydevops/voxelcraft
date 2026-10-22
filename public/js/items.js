// Items, tools, loot, recipes and goals for the engine, built from the data files (public/data/*.json).
// Nothing here is hand-written content: add an item, recipe or loot table in the JSON and it appears in the game.
import { REG } from './registry.js';
import { BLOCKS, EMIT } from './blocks.js';

// I.STICK, I.WOOD_PICKAXE, ... : numeric ids by item key (upper-cased). Blocks live in B (blocks.js).
export const I = {};
for (const it of REG.items) I[it.key.toUpperCase()] = it.id;

const ITEM = new Map(REG.items.map((it) => [it.id, it]));
export const isBlockItem = (id) => REG.blockById.has(id);
export const itemName = (id) => (isBlockItem(id) ? BLOCKS[id].name : ITEM.get(id)?.name ?? 'Unknown');
export const toolOf = (id) => ITEM.get(id)?.tool ?? null;
export const foodValue = (id) => ITEM.get(id)?.food ?? 0;
export const saturationValue = (id) => ITEM.get(id)?.saturation ?? 0;
export const maxStack = (id) => ITEM.get(id)?.stack ?? 64;
export const maxDamage = (id) => toolOf(id)?.uses ?? 0;
export const plantsOf = (id) => ITEM.get(id)?.plants ?? null; // seeds etc: { block, on }
export const itemKey = (id) => REG.keyOfId.get(id);
export const idOf = (key) => REG.idOfKey.get(key);
export const allItemIds = () => [...REG.keyOfId.keys()];

// An ingredient is [spec, count] where spec is an item id, or an array of interchangeable ids (a group).
export const specIds = (spec) => (Array.isArray(spec) ? spec : [spec]);
export const specName = (spec) => specIds(spec).map(itemName).join(' or ');
export const COALS = REG.groups.coals || []; // coal-like items (charcoal first), e.g. for torches

// ---- furnace data ---------------------------------------------------------------------------------
// What each fuel item/block burns for (seconds), and what a furnace turns each smeltable item into
export const fuelSeconds = (id) => REG.fuelTime.get(id) ?? 0;
const SMELT = new Map(REG.smelting.map((r) => [r.in, r]));
export const smeltFor = (id) => SMELT.get(id) ?? null; // { in, out, seconds } or null
export const SMELTING = REG.smelting;
export const FUEL_ITEMS = [...REG.fuelTime.keys()]; // everything a furnace can burn
export const equipOf = (id) => ITEM.get(id)?.equip ?? null; // { slot, armor, slots } for things you can wear
export const EQUIP_SLOTS = REG.game.equipment.slots; // [{ id, label }] in screen order
export const armorOf = (id) => equipOf(id)?.armor ?? 0;
export const isOffhand = (id) => !!ITEM.get(id)?.offhand; // torches: can be held in the shield slot
// Can this item go in that equipment slot? (the shield slot is also the offhand slot)
export const canWear = (id, slotId) => equipOf(id)?.slot === slotId || (slotId === 'shield' && isOffhand(id));
// How brightly something lights up its surroundings while you carry it (a torch gives what a placed one does)
export function heldLight(id) {
  const places = ITEM.get(id)?.places;
  return places ? Math.max(0, ...Object.values(places).map((b) => EMIT[b])) : 0;
}
// How many uses a tool loses breaking this block: 1 for what it is made for, more for anything else
export function toolWear(blockId, heldId) {
  const t = toolOf(heldId);
  if (!t) return 0;
  return BLOCKS[blockId]?.tool === t.type ? 1 : REG.game.tools.wrongToolWear;
}
export const placesOf = (id) => ITEM.get(id)?.places ?? null; // torch etc: { up, north, ... } -> block placed on the face you click

// ---- loot ---------------------------------------------------------------------------------------
function roll(table, rand) {
  const out = [];
  for (const e of table) {
    if (rand() >= e.chance) continue;
    const n = e.min + Math.floor(rand() * (e.max - e.min + 1));
    if (n > 0) out.push({ id: e.id, n });
  }
  return out;
}

// What a broken block gives: its loot table from loot.json, or itself if it has none.
export function dropsFor(blockId, canHarvest, rand = Math.random) {
  if (!canHarvest) return [];
  const def = REG.blockById.get(blockId);
  const table = def?.loot ? REG.loot[def.loot] : null;
  return table ? roll(table, rand) : [{ id: blockId, n: 1 }];
}

// What a block gives when it is smashed apart (e.g. a falling tree): "shatterLoot" if it has one, else its normal loot.
export function shatterDrops(blockId, rand = Math.random) {
  const def = REG.blockById.get(blockId);
  const table = def?.shatterLoot ? REG.loot[def.shatterLoot] : def?.loot ? REG.loot[def.loot] : null;
  return table ? roll(table, rand) : [{ id: blockId, n: 1 }];
}

// Can this held item harvest the block, and how long does breaking take (seconds)?
export function miningInfo(blockId, heldId) {
  const b = BLOCKS[blockId];
  const tool = toolOf(heldId);
  const matches = !!tool && b.tool === tool.type;
  const canHarvest = b.need === 0 || (matches && tool.tier >= b.need);
  let t = b.hard;
  if (matches) t /= tool.speed;
  if (!canHarvest) t *= 3.3; // grinding stone with your fists is painful
  return { time: t, canHarvest, matches };
}

// The name of the tool tier with this level ("wood", "stone", ...), for messages like "You need a wood pickaxe"
export const tierName = (level) => Object.entries(REG.data.items.tiers).find(([, t]) => t.level === level)?.[0] ?? '';

// ---- recipes ------------------------------------------------------------------------------------
// station: null = by hand, otherwise a key of STATIONS (table, furnace, ...)
export const RECIPES = REG.recipes;
export const STATION_LABEL = Object.fromEntries(Object.entries(REG.stations).map(([k, s]) => [k, s.label]));
export const WINDOWS = REG.windows; // inventory / crafting-table / furnace windows: which stations' recipes each one shows

// ---- progression goals (shown in the HUD) -------------------------------------------------------
// each goal: { text, done(state) } with state = { collected:Set, crafted:Set, flags:Set } of ids / flag names
export const GOALS = REG.goals;

// Growable plants: what to call them and how far along they are (step out of 3). "ripe" means harvestable.
export const GROWTH_INFO = {};
for (const b of REG.blocks) {
  const s = b.plant?.stage;
  if (s) GROWTH_INFO[b.id] = { label: s.label, stage: s.step, name: s.name, ripe: s.ripe, crop: s.crop };
}
