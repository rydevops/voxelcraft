// The content registry. Everything about blocks, items, loot, recipes, goals, textures, sounds, world generation
// and game rules lives in JSON files under public/data/. This module loads them (in the browser or in Node),
// checks that every reference between them is valid, and resolves names to numeric ids for the engine.
// Adding or changing content = editing JSON; no engine code needs to change. See public/data/README.md.

import { GLYPHS } from './pixelfont.js';

export class DataError extends Error {}

const FILES = ['blocks', 'items', 'loot', 'recipes', 'goals', 'textures', 'sounds', 'worldgen', 'game', 'music'];
const KNOWN_FLAGS = ['tilled', 'planted', 'ate', 'equipped'];
const TILE_TYPES = ['noise', 'capped', 'bark', 'rings', 'planks', 'cells', 'waves', 'bricks', 'ore', 'stripes', 'blades', 'stalks', 'pixelart', 'image', 'layers', 'ref'];
const KEY_RE = /^[a-z][a-z0-9_]*$/;

// ---- loading ---------------------------------------------------------------------------------
const isNode = typeof window === 'undefined' && typeof process !== 'undefined' && !!process.versions?.node;

export async function loadData() {
  const out = {};
  const base = new URL('../data/', import.meta.url);
  if (isNode) {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = process.env.VOXELCRAFT_DATA || fileURLToPath(base); // tests can point this at a different data folder
    for (const name of FILES) {
      const file = path.join(dir, name + '.json');
      let text;
      try { text = await fs.readFile(file, 'utf8'); } catch { throw new DataError(`Cannot read ${file}`); }
      try { out[name] = JSON.parse(text); } catch (e) { throw new DataError(`${name}.json is not valid JSON: ${e.message}`); }
    }
    return out;
  }
  await Promise.all(FILES.map(async (name) => {
    const res = await fetch(new URL(name + '.json', base), { cache: 'no-cache' });
    if (!res.ok) throw new DataError(`Cannot load data/${name}.json (HTTP ${res.status})`);
    const text = await res.text();
    try { out[name] = JSON.parse(text); } catch (e) { throw new DataError(`data/${name}.json is not valid JSON: ${e.message}`); }
  }));
  return out;
}

// ---- building + validation ---------------------------------------------------------------------
export function buildRegistry(data) {
  const errors = [];
  const err = (msg) => errors.push(msg);
  const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
  const isArr = Array.isArray;

  const blocksIn = data.blocks?.blocks, itemsIn = data.items?.items, tiers = data.items?.tiers || {};
  const tiles = data.textures?.tiles || {}, sprites = data.textures?.sprites || {};
  const lootIn = data.loot?.tables || {}, soundMats = data.sounds?.materials || {};
  const recipesIn = data.recipes?.recipes, groupsIn = data.recipes?.groups || {};
  const stationsIn = data.recipes?.stations || {}, windowsIn = data.recipes?.windows || {};
  if (!isArr(blocksIn)) err('blocks.json: "blocks" must be a list');
  if (!isArr(itemsIn)) err('items.json: "items" must be a list');
  if (!isArr(recipesIn)) err('recipes.json: "recipes" must be a list');
  if (!isArr(data.goals?.goals)) err('goals.json: "goals" must be a list');
  if (errors.length) throw new DataError(errors.join('\n'));

  // ---- ids and keys (blocks and items share one namespace) ----
  const idOfKey = new Map(), keyOfId = new Map(), blockKeys = new Set(), itemKeys = new Set();
  const claim = (key, id, where) => {
    if (typeof key !== 'string' || !KEY_RE.test(key)) { err(`${where}: key "${key}" must be lowercase letters, digits and underscores, starting with a letter`); return; }
    if (!Number.isInteger(id) || id < 1) { err(`${where}: "id" must be a positive whole number`); return; }
    if (idOfKey.has(key)) err(`${where}: key "${key}" is used twice`);
    if (keyOfId.has(id)) err(`${where}: id ${id} is already used by "${keyOfId.get(id)}"`);
    idOfKey.set(key, id);
    keyOfId.set(id, key);
  };
  blocksIn.forEach((b, i) => {
    claim(b.key, b.id, `blocks.json #${i + 1} (${b.key})`);
    if (Number.isInteger(b.id) && b.id > 255) err(`blocks.json "${b.key}": block ids must be 1-255 (they are stored in one byte per block)`);
    blockKeys.add(b.key);
  });
  itemsIn.forEach((it, i) => { claim(it.key, it.id, `items.json #${i + 1} (${it.key})`); itemKeys.add(it.key); });
  const idOf = (key, where) => {
    if (!idOfKey.has(key)) { err(`${where}: unknown block/item "${key}"`); return 0; }
    return idOfKey.get(key);
  };
  const needBlock = (key, where) => {
    if (!blockKeys.has(key)) { err(`${where}: "${key}" is not a block`); return 0; }
    return idOfKey.get(key);
  };

  // ---- textures: tile names and references ----
  const tileNames = Object.keys(tiles);
  if (!tileNames.length) err('textures.json: no tiles defined');
  const checkTile = (name, spec, path) => {
    if (!spec || typeof spec !== 'object') return err(`textures.json tile "${path}": must be an object`);
    if (!TILE_TYPES.includes(spec.type)) return err(`textures.json tile "${path}": unknown type "${spec.type}" (use one of ${TILE_TYPES.join(', ')})`);
    const ref = (t, what) => { if (!tiles[t]) err(`textures.json tile "${path}": ${what} "${t}" is not a tile`); };
    if (spec.type === 'capped') { ref(spec.cap, 'cap'); ref(spec.body, 'body'); }
    if (spec.type === 'ore') ref(spec.base, 'base');
    if (spec.type === 'ref') ref(spec.tile, 'tile');
    if (spec.type === 'layers') (spec.layers || []).forEach((l, i) => checkTile(name, l, `${path}.layers[${i}]`));
    if (spec.type === 'pixelart') checkPixelart(spec, `tile "${path}"`);
    if (spec.type === 'image' && typeof spec.src !== 'string') err(`textures.json tile "${path}": image needs "src"`);
  };
  function checkPixelart(spec, where) {
    if (!isArr(spec.rows) || !spec.rows.length) return err(`textures.json ${where}: pixelart needs "rows"`);
    if (spec.rows.length > 16 || spec.rows.some((r) => typeof r !== 'string' || r.length > 16)) err(`textures.json ${where}: pixelart is at most 16 rows of 16 characters`);
    for (const row of spec.rows) for (const ch of row) if (ch !== '.' && !spec.palette?.[ch]) { err(`textures.json ${where}: character "${ch}" is not in the palette`); return; }
  }
  for (const name of tileNames) checkTile(name, tiles[name], name);

  // ---- blocks ----
  const windows = Object.keys(windowsIn);
  const blocks = blocksIn.map((b, i) => {
    const where = `blocks.json "${b.key}"`;
    for (const face of ['top', 'bottom', 'side']) if (!tiles[b.tiles?.[face]]) err(`${where}: tiles.${face} "${b.tiles?.[face]}" is not defined in textures.json`);
    if (!isNum(b.hardness) || b.hardness < 0) err(`${where}: "hardness" must be a number >= 0`);
    if (b.tool != null && typeof b.tool !== 'string') err(`${where}: "tool" must be a string (pickaxe, axe, shovel, ...) or omitted`);
    if (b.loot != null && !lootIn[b.loot]) err(`${where}: loot table "${b.loot}" is not defined in loot.json`);
    if (b.shatterLoot != null && !lootIn[b.shatterLoot]) err(`${where}: shatterLoot table "${b.shatterLoot}" is not defined in loot.json`);
    if (b.role != null && !['log', 'leaf'].includes(b.role)) err(`${where}: "role" must be "log" or "leaf"`);
    if (b.opens != null && !windowsIn[b.opens]) err(`${where}: opens "${b.opens}" is not a window in recipes.json`);
    if (b.model != null && !(b.model.type === 'torch' && isNum(b.model.height) && b.model.height > 0 && b.model.height <= 1)) err(`${where}: "model" must be { "type": "torch", "height": 0-1, "lean": [dx, dz] }`);
    if (b.model?.lean != null && !(isArr(b.model.lean) && b.model.lean.length === 2 && b.model.lean.every(Number.isInteger))) err(`${where}: model.lean must be [dx, dz]`);
    if (b.support != null && !(isArr(b.support) && b.support.length === 3 && b.support.every(Number.isInteger))) err(`${where}: "support" must be [dx, dy, dz]: where the block it hangs on is`);
    if (b.fuel != null && !(isNum(b.fuel) && b.fuel > 0)) err(`${where}: "fuel" must be the seconds it burns in a furnace`);
    if (b.glow != null && !(isNum(b.glow) && b.glow >= 0 && b.glow <= 1)) err(`${where}: "glow" must be 0-1 (how much the block shines for itself, even in the dark)`);
    for (const f of ['light', 'lightFilter']) if (b[f] != null && !(Number.isInteger(b[f]) && b[f] >= 0 && b[f] <= 15)) err(`${where}: "${f}" must be a whole number 0-15`);
    if (b.water && !(Number.isInteger(b.water.level) && b.water.level >= 1 && b.water.level <= 7)) err(`${where}: water.level must be 1-7 (7 = source)`);
    const out = {
      id: b.id, key: b.key, name: b.name ?? b.key,
      top: b.tiles?.top, bottom: b.tiles?.bottom, side: b.tiles?.side,
      hard: b.hardness ?? 0, tool: b.tool ?? null, need: b.need ?? 0, sound: b.sound ?? 'default',
      solid: b.solid ?? !b.plant, opaque: b.opaque ?? !b.plant, creative: !!b.creative,
      waterLevel: b.water ? b.water.level : 0,
      role: b.role ?? null, opens: b.opens ?? null,
      gravity: !!b.gravity, // falls when nothing is underneath (sand)
      model: b.model ? { type: b.model.type, height: b.model.height, lean: b.model.lean ?? [0, 0] } : null, // drawn as a small model instead of a cube (torches)
      support: b.support ?? null, // [dx, dy, dz] of the solid block this one hangs on; it drops as an item when that goes
      fuel: b.fuel ?? 0, // seconds it burns in a furnace
      glow: b.glow ?? 0, // self-illumination 0-1 (ores): the block stays visible in the dark without lighting its surroundings
      light: b.light ?? 0, lightFilter: b.lightFilter ?? 0, // light it gives off (0-15) / how much light it dims when light passes through it
      hydration: null,
      loot: b.loot ?? (lootIn[b.key] ? b.key : null), shatterLoot: b.shatterLoot ?? null,
      tillsInto: b.tillsInto ? needBlock(b.tillsInto, `${where} tillsInto`) : 0,
      spreadsOnto: b.spreadsOnto ? needBlock(b.spreadsOnto, `${where} spreadsOnto`) : 0,
      plant: null,
    };
    if (b.hydration) { // soil that is damp when water is near (see "tilling" in game.json) and dries out otherwise
      const h = b.hydration;
      out.hydration = {
        wet: h.wet ? needBlock(h.wet, `${where} hydration.wet`) : 0,
        dry: h.dry ? needBlock(h.dry, `${where} hydration.dry`) : 0,
        decayInto: h.decay ? needBlock(h.decay.into, `${where} hydration.decay.into`) : 0,
        decayRate: h.decay?.chancePerSecond ?? 0,
      };
      if (!out.hydration.wet && !out.hydration.dry) err(`${where}: hydration needs "wet" (the damp version) or "dry" (the dry version)`);
    }
    if (b.plant) {
      const p = b.plant;
      if (!['cross', 'hash'].includes(p.kind)) err(`${where}: plant.kind must be "cross" or "hash"`);
      if (!isNum(p.height) || p.height <= 0 || p.height > 1) err(`${where}: plant.height must be between 0 and 1`);
      out.plant = {
        kind: p.kind === 'hash' ? 2 : 1, height: p.height,
        growth: p.growth ? {
          next: needBlock(p.growth.next, `${where} plant.growth.next`), rate: p.growth.chancePerSecond ?? 0,
          soil: needBlock(p.growth.soil, `${where} plant.growth.soil`),
        } : null,
        stage: p.stage ? { label: p.stage.label ?? out.name, step: p.stage.step ?? 1, name: p.stage.name ?? '', ripe: !!p.stage.ripe, crop: !!p.stage.crop } : null,
        grows: p.grows ? { // a sapling: after a while it turns into one of these trees (worldgen.json trees.variants)
          trees: isArr(p.grows.trees) ? p.grows.trees : [], rate: p.grows.chancePerSecond ?? 0,
          soil: (isArr(p.grows.soil) ? p.grows.soil : [p.grows.soil]).map((k) => needBlock(k, `${where} plant.grows.soil`)),
        } : null,
        spreads: p.spreads ? {
          block: needBlock(p.spreads.block, `${where} plant.spreads.block`), rate: p.spreads.chancePerSecond ?? 0,
          onto: needBlock(p.spreads.onto, `${where} plant.spreads.onto`), range: p.spreads.range ?? 2,
        } : null,
      };
    }
    return out;
  });

  // ---- items ----
  const equipSlotIds = (data.game?.equipment?.slots || []).map((sl) => sl.id);
  if (!equipSlotIds.length) err('game.json: "equipment.slots" must list the equipment slots');
  const items = itemsIn.map((it) => {
    const where = `items.json "${it.key}"`;
    let tool = null;
    if (it.tool) {
      const t = tiers[it.tool.tier];
      if (!t) err(`${where}: tier "${it.tool.tier}" is not defined in items.json "tiers"`);
      if (typeof it.tool.type !== 'string') err(`${where}: tool.type is required`);
      tool = { type: it.tool.type, tier: t?.level ?? 1, speed: t?.speed ?? 1, uses: t?.durability ?? 100, head: t?.head ?? it.tool.tier };
    }
    if (!sprites[it.key] && !tool) err(`${where}: no sprite - add "${it.key}" to textures.json "sprites"`);
    if (it.equip && !(equipSlotIds.includes(it.equip.slot))) err(`${where}: equip.slot "${it.equip.slot}" is not one of the slots in game.json equipment (${equipSlotIds.join(', ')})`);
    if (it.equip && ![it.equip.armor ?? 0, it.equip.slots ?? 0].every((n) => Number.isInteger(n) && n >= 0)) err(`${where}: equip.armor and equip.slots must be whole numbers`);
    if (it.fuel != null && !(isNum(it.fuel) && it.fuel > 0)) err(`${where}: "fuel" must be the seconds it burns in a furnace`);
    return {
      id: it.id, key: it.key, name: it.name ?? it.key, stack: it.stack ?? (tool ? 1 : 64), tool, food: it.food ?? 0,
      fuel: it.fuel ?? 0, creative: !!it.creative, offhand: !!it.offhand, // offhand: can sit in the shield slot
      equip: it.equip ? { slot: it.equip.slot, armor: it.equip.armor ?? 0, slots: it.equip.slots ?? 0 } : null, // wearable: which equipment slot, armor points, extra inventory slots (backpack)
      saturation: it.saturation ?? (it.food ?? 0) * 0.6, // how much "saturation" eating it adds (see game.json hunger)
      places: it.places ? Object.fromEntries(Object.entries(it.places).map(([face, k]) => {
        if (!['up', 'north', 'south', 'east', 'west'].includes(face)) err(`${where}: places.${face} must be up, north, south, east or west (the face you click)`);
        return [face, needBlock(k, `${where} places.${face}`)];
      })) : null, // block placed for the face you click (torches); no "down": they cannot hang from a ceiling

      plants: it.plants ? { block: needBlock(it.plants.block, `${where} plants.block`), on: [].concat(it.plants.on).map((k) => needBlock(k, `${where} plants.on`)) } : null, // `on` may be one block or a list
    };
  });
  for (const [k, spec] of Object.entries(sprites)) {
    if (!itemKeys.has(k)) err(`textures.json sprite "${k}" does not match any item in items.json`);
    else if (spec.type === 'pixelart') checkPixelart(spec, `sprite "${k}"`);
  }
  for (const [name, h] of Object.entries(data.textures?.toolHeads || {})) if (!h.light || !h.base || !h.dark) err(`textures.json toolHeads "${name}" needs light, base and dark colours`);
  for (const it of itemsIn) if (it.tool && !data.textures?.toolHeads?.[tiers[it.tool.tier]?.head ?? it.tool.tier]) err(`items.json "${it.key}": no toolHeads colours for head "${tiers[it.tool.tier]?.head ?? it.tool.tier}" in textures.json`);

  // ---- loot ----
  const loot = {};
  for (const [name, list] of Object.entries(lootIn)) {
    if (!isArr(list)) { err(`loot.json "${name}": must be a list of entries`); continue; }
    loot[name] = list.map((e, i) => {
      const where = `loot.json "${name}" #${i + 1}`;
      const chance = e.chance ?? 1;
      if (!isNum(chance) || chance < 0 || chance > 1) err(`${where}: chance must be 0-1`);
      const c = e.count ?? 1;
      const [min, max] = isArr(c) ? c : [c, c];
      if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < min) err(`${where}: count must be a whole number or [min, max]`);
      return { id: idOf(e.item, where), chance, min, max };
    });
  }

  // ---- recipes ----
  const groups = {};
  for (const [g, list] of Object.entries(groupsIn)) groups[g] = list.map((k) => idOf(k, `recipes.json group "${g}"`));
  const stations = {};
  for (const [k, s] of Object.entries(stationsIn)) stations[k] = { label: s.label ?? k };
  const recipes = recipesIn.map((r, i) => {
    const where = `recipes.json #${i + 1} (${r.out})`;
    if (r.at != null && !stations[r.at]) err(`${where}: station "${r.at}" is not defined in "stations"`);
    if (!isArr(r.in) || !r.in.length) err(`${where}: "in" needs at least one ingredient`);
    return {
      out: idOf(r.out, where), n: r.n ?? 1, station: r.at ?? null, label: r.label ?? null,
      ins: (r.in || []).map(([what, n]) => {
        if (!Number.isInteger(n) || n < 1) err(`${where}: ingredient counts must be whole numbers >= 1`);
        if (typeof what === 'string' && what.startsWith('@')) {
          if (!groups[what.slice(1)]) { err(`${where}: unknown group "${what}"`); return [0, n]; }
          return [groups[what.slice(1)], n];
        }
        return [idOf(what, where), n];
      }),
    };
  });
  const windowDefs = {};
  for (const [k, w] of Object.entries(windowsIn)) {
    for (const s of w.stations || []) if (s !== null && !stations[s]) err(`recipes.json window "${k}": station "${s}" is not defined`);
    windowDefs[k] = { title: w.title ?? k, sub: w.sub ?? '', stations: w.stations ?? [null], furnace: !!w.furnace }; // furnace: a window with input / fuel / output slots
  }
  // furnace cooking: one item in -> one item out, taking some seconds
  const smelting = (data.recipes.smelting || []).map((r, i) => {
    const where = `recipes.json smelting #${i + 1} (${r.in})`;
    const seconds = r.seconds ?? 10;
    if (!isNum(seconds) || seconds <= 0) err(`${where}: "seconds" must be more than 0`);
    return { in: idOf(r.in, where), out: idOf(r.out, where), seconds };
  });
  const seenSmelt = new Set();
  for (const r of smelting) { if (seenSmelt.has(r.in)) err(`recipes.json smelting: "${keyOfId.get(r.in)}" is smelted twice`); seenSmelt.add(r.in); }
  const fuelTime = new Map(); // item or block id -> seconds it burns
  for (const b of blocks) if (b.fuel) fuelTime.set(b.id, b.fuel);
  for (const it of items) if (it.fuel) fuelTime.set(it.id, it.fuel);
  if (!windowDefs.hand) err('recipes.json: a "hand" window is required (the inventory)');

  // ---- goals ----
  const goals = data.goals.goals.map((g, i) => {
    const where = `goals.json #${i + 1}`;
    if (typeof g.text !== 'string') err(`${where}: "text" is required`);
    if (g.collectedAny) { const ids = g.collectedAny.map((k) => idOf(k, where)); return { text: g.text, done: (s) => ids.some((id) => s.collected.has(id)) }; }
    if (g.collected) { const id = idOf(g.collected, where); return { text: g.text, done: (s) => s.collected.has(id) }; }
    if (g.crafted) { const id = idOf(g.crafted, where); return { text: g.text, done: (s) => s.crafted.has(id) }; }
    if (g.craftedAny) { const ids = g.craftedAny.map((k) => idOf(k, where)); return { text: g.text, done: (s) => ids.some((id) => s.crafted.has(id)) }; }
    if (g.flag) {
      if (!KNOWN_FLAGS.includes(g.flag)) err(`${where}: flag "${g.flag}" is not one the game sets (${KNOWN_FLAGS.join(', ')})`);
      return { text: g.text, done: (s) => s.flags.has(g.flag) };
    }
    err(`${where}: needs one of collected / collectedAny / crafted / craftedAny / flag`);
    return { text: g.text, done: () => false };
  });

  // ---- world generation + game rules ----
  const wg = data.worldgen || {};
  const wgBlocks = {};
  for (const [role, key] of Object.entries(wg.blocks || {})) if (role !== 'fillerDepth') wgBlocks[role] = needBlock(key, `worldgen.json blocks.${role}`);
  const worldgen = {
    ...wg, ids: wgBlocks,
    ores: (wg.ores || []).map((o, i) => ({ ...o, id: needBlock(o.block, `worldgen.json ores[${i}]`) })),
    trees: {
      ...wg.trees,
      variants: (wg.trees?.variants || []).map((v, i) => {
        const w = `worldgen.json trees.variants[${i}] (${v.key})`;
        if (typeof v.key !== 'string') err(`${w}: "key" is required`);
        if (!['round', 'tall', 'cone', 'bush'].includes(v.shape)) err(`${w}: shape must be round, tall, cone or bush`);
        if (!isNum(v.weight) || v.weight <= 0) err(`${w}: weight must be more than 0`);
        if (!(isArr(v.trunk) && v.trunk.length === 2 && v.trunk.every(Number.isInteger) && v.trunk[0] >= 1 && v.trunk[1] >= v.trunk[0])) err(`${w}: trunk must be [min, max] whole numbers`);
        const heights = v.heights ?? [0, 99];
        if (!(isArr(heights) && heights.length === 2 && heights[1] >= heights[0])) err(`${w}: heights must be [lowest, highest] terrain height`);
        return { key: v.key, weight: v.weight, shape: v.shape, trunk: v.trunk, heights, logId: needBlock(v.log, `${w} log`), leavesId: needBlock(v.leaves, `${w} leaves`) };
      }),
    },
    groundCover: {
      ...wg.groundCover,
      variants: (wg.groundCover?.variants || []).map((v, i) => ({ ...v, id: needBlock(v.block, `worldgen.json groundCover.variants[${i}]`) })),
    },
  };
  if (!worldgen.trees.variants.length) err('worldgen.json: trees.variants needs at least one tree');
  const treeKeys = new Set(worldgen.trees.variants.map((v) => v.key));
  for (const b of blocks) for (const k of b.plant?.grows?.trees ?? []) if (!treeKeys.has(k)) err(`blocks.json "${b.key}": plant.grows.trees "${k}" is not a tree variant in worldgen.json`);
  const game = { ...data.game };
  game.creativeHotbarIds = (data.game?.creativeHotbar || []).map((k) => needBlock(k, 'game.json creativeHotbar'));
  // the developer logo shown at startup is drawn in a pixel font that only has some characters
  for (const key of ['name', 'tagline']) {
    const text = game.studio?.[key];
    if (typeof text !== 'string' || !text.trim()) err(`game.json studio.${key} must be some text`);
    else for (const ch of text.toUpperCase()) if (!GLYPHS[ch]) err(`game.json studio.${key}: the logo font has no "${ch}" (letters, digits, space and - . ! & ' work)`);
  }
  if (!['shatter', 'land'].includes(game.treeFall?.mode)) err('game.json treeFall.mode must be "shatter" or "land"');
  for (const name of Object.keys(soundMats)) if (!isArr(soundMats[name])) err(`sounds.json material "${name}" must be a list of layers`);
  for (const b of blocks) if (b.sound !== 'default' && !soundMats[b.sound]) err(`blocks.json "${b.key}": sound "${b.sound}" is not defined in sounds.json (using "default" is fine)`);

  // ---- animated tiles (a flickering flame): frames cycled into the atlas ----
  const animations = {};
  for (const [tile, a] of Object.entries(data.textures?.animations ?? {})) {
    if (tile.startsWith('_')) continue;
    const where = `textures.json animations "${tile}"`;
    if (!tiles[tile]) err(`${where}: "${tile}" is not a tile`);
    if (!isArr(a.frames) || a.frames.length < 2 || a.frames[0] !== tile || a.frames.some((t) => !tiles[t])) err(`${where}: frames must list at least two tiles, starting with "${tile}" itself`);
    if (!isNum(a.fps) || a.fps <= 0 || a.fps > 30) err(`${where}: fps must be 1-30`);
    animations[tile] = { frames: a.frames, fps: a.fps };
  }

  // ---- music ----
  const LEAD_VOICES = ['piano', 'bell', 'pluck'], PADS = ['triangle', 'strings'], BASSES = ['sine', 'drone'];
  const mIn = data.music ?? {};
  const midiOk = (n) => Number.isInteger(n) && n >= 24 && n <= 100;
  if (!isArr(mIn.tracks) || mIn.tracks.length < 2) err('music.json: "tracks" must list at least two tracks');
  const gapIn = mIn.gapSeconds ?? [5, 12];
  if (!(isArr(gapIn) && gapIn.length === 2 && gapIn.every(isNum) && gapIn[0] >= 0 && gapIn[1] >= gapIn[0])) err('music.json: "gapSeconds" must be [min, max] seconds of silence between tracks');
  const musicKeys = new Set();
  const tracks = (isArr(mIn.tracks) ? mIn.tracks : []).map((t, i) => {
    const where = `music.json track #${i + 1} (${t.key})`;
    if (typeof t.key !== 'string' || !KEY_RE.test(t.key)) err(`${where}: "key" must be lowercase letters, digits and underscores`);
    if (musicKeys.has(t.key)) err(`${where}: key used twice`);
    musicKeys.add(t.key);
    if (typeof t.name !== 'string') err(`${where}: "name" is required`);
    if (!isNum(t.bpm) || t.bpm < 30 || t.bpm > 160) err(`${where}: bpm must be 30-160`);
    if (!Number.isInteger(t.bars) || t.bars < 4 || t.bars > 128) err(`${where}: bars must be a whole number 4-128`);
    const bpc = t.barsPerChord ?? 1;
    if (!Number.isInteger(bpc) || bpc < 1) err(`${where}: barsPerChord must be a whole number >= 1`);
    if (!isArr(t.chords) || !t.chords.length) err(`${where}: "chords" needs at least one chord`);
    for (const [ci, c] of (isArr(t.chords) ? t.chords : []).entries()) {
      if (!midiOk(c.root)) err(`${where} chord #${ci + 1}: root must be a MIDI note 24-100`);
      if (!isArr(c.tones) || c.tones.length < 3 || !c.tones.every(midiOk)) err(`${where} chord #${ci + 1}: tones must be at least three MIDI notes 24-100`);
    }
    if (t.pad != null && !PADS.includes(t.pad)) err(`${where}: pad must be one of ${PADS.join(', ')}`);
    if (t.bass != null && !BASSES.includes(t.bass)) err(`${where}: bass must be one of ${BASSES.join(', ')}`);
    if (t.lead && !LEAD_VOICES.includes(t.lead.voice)) err(`${where}: lead.voice must be one of ${LEAD_VOICES.join(', ')}`);
    if (!t.lead && !t.melody && !t.arp) err(`${where}: needs a lead, a melody or an arp (something to play)`);
    if (t.arp) {
      if (!LEAD_VOICES.includes(t.arp.voice)) err(`${where}: arp.voice must be one of ${LEAD_VOICES.join(', ')}`);
      if (!isArr(t.arp.pattern) || !t.arp.pattern.length || !t.arp.pattern.every((n) => Number.isInteger(n) && n >= 0)) err(`${where}: arp.pattern must be a list of chord-tone numbers`);
      if (!isNum(t.arp.step) || t.arp.step <= 0 || t.arp.step > 4) err(`${where}: arp.step must be 0-4 beats`);
    }
    if (t.melody && !(isArr(t.melody) && t.melody.every((m) => isArr(m) && m.length === 5 && Number.isInteger(m[0]) && m[0] >= 0 && m[0] < t.bars && isNum(m[1]) && m[1] >= 0 && m[1] < 4 && midiOk(m[2]) && isNum(m[3]) && m[3] > 0 && isNum(m[4])))) err(`${where}: melody entries must be [bar, beat, midi note, beats, loudness] inside the track`);
    const d = t.lead?.density ?? [0.8, 0.45, 0.3];
    if (!(isArr(d) && d.length === 3 && d.every((x) => isNum(x) && x >= 0 && x <= 1))) err(`${where}: lead.density must be three chances 0-1`);
    return {
      key: t.key, name: t.name, bpm: t.bpm, bars: t.bars, barsPerChord: bpc, chords: t.chords ?? [],
      lead: t.lead ? { voice: t.lead.voice, density: d, leap: t.lead.leap ?? 0.1, rest: t.lead.rest ?? 0 } : null,
      pad: t.pad ?? null, bass: t.bass ?? null, arp: t.arp ?? null, melody: t.melody ?? null,
    };
  });
  if (!musicKeys.has(mIn.title)) err('music.json: "title" must name one of the tracks (the one the title screen plays)');
  if (tracks.filter((t) => t.key !== mIn.title).length < 2) err('music.json: the game needs at least two tracks besides the title theme, so there is something to shuffle');
  const music = { gapSeconds: gapIn, title: mIn.title, tracks };

  if (errors.length) throw new DataError('Content data problems:\n - ' + errors.join('\n - '));

  return {
    music, animations,
    smelting, fuelTime,
    data, blocks, items, idOfKey, keyOfId, tileNames, tiles, sprites,
    loot, groups, stations, recipes, windows: windowDefs, goals, worldgen, game,
    sounds: data.sounds, textures: data.textures,
    blockById: new Map(blocks.map((b) => [b.id, b])), itemById: new Map(items.map((i) => [i.id, i])),
  };
}

// ---- the live registry used by the game ---------------------------------------------------------
let registry;
try {
  registry = buildRegistry(await loadData());
} catch (e) {
  if (!isNode && typeof document !== 'undefined') { // show a readable message instead of a blank page
    document.body.innerHTML = '<pre style="margin:0;padding:24px;min-height:100vh;box-sizing:border-box;background:#1b0f0f;color:#ffd6d6;font:14px/1.5 Consolas,monospace;white-space:pre-wrap">' +
      '<b style="font-size:18px">VoxelCraft could not load its content files</b>\n\n' + String(e.message).replace(/</g, '&lt;') +
      '\n\nFix the file(s) under public/data/ and reload. See public/data/README.md.</pre>';
    await new Promise(() => {});
  }
  throw e;
}
export const REG = registry;
