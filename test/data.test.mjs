// The content files: validation, error messages, and proof that new content needs no code. Run with: npm test
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { loadData, buildRegistry, DataError } from '../src/js/registry.js';
import { paintTile, paintSprite, paintSpec, T } from '../src/js/tilegen.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const mod = (p) => pathToFileURL(path.join(ROOT, p)).href; // a file:// URL, which Node needs on Windows
const fresh = async () => structuredClone(await loadData());
const expectError = (data, pattern, why) => {
  assert.throws(() => buildRegistry(data), (e) => e instanceof DataError && pattern.test(e.message), why);
};

// ---- the shipped content is valid and complete ----
const data = await fresh();
const reg = buildRegistry(data);
assert.ok(reg.blocks.length >= 29 && reg.items.length >= 20);
assert.ok(reg.recipes.length >= 15 && reg.smelting.length >= 3 && reg.goals.length >= 15);
reg.tileNames.forEach((n, i) => {
  const px = paintTile(n, i, reg.tiles, {});
  assert.equal(px.length, T * T * 4);
  assert.ok(px.some((v, o) => o % 4 === 3 && v > 0), `tile ${n} is not blank`);
});
// water is an animation: its frames share one ripple pattern (same seed) and only the phase moves, looping back to the start
{
  const anim = reg.animations.water;
  assert.ok(anim && anim.frames.length >= 4 && anim.frames[0] === 'water', 'water is animated');
  const frames = anim.frames.map((n) => paintTile(n, 0, reg.tiles, {})); // (the tile's index is not used: the wave seed is in its data)
  for (let i = 1; i < frames.length; i++) assert.notDeepEqual(frames[i], frames[i - 1], `water frame ${i} moves`);
  const wrapped = paintSpec({ ...reg.tiles.water, phase: 2 * Math.PI }, 7, {}, {}), start = paintSpec({ ...reg.tiles.water, phase: 0 }, 99, {}, {});
  assert.deepEqual(wrapped, start, 'a full turn of phase is the first frame again, whatever the tile index');
}
for (const it of reg.items) assert.ok(paintSprite(it.key, it, reg.textures, {}).some((v, o) => o % 4 === 3 && v > 0), `sprite ${it.key} is not blank`);
// painting is deterministic (same seed -> same pixels)
assert.deepEqual(paintTile('stone', 3, reg.tiles, {}), paintTile('stone', 3, reg.tiles, {}));
assert.notDeepEqual(paintTile('stone', 3, reg.tiles, {}), paintTile('stone', 4, reg.tiles, {}));

// ---- mistakes give clear messages that name the file and the entry ----
{ const d = await fresh(); d.blocks.blocks[1].id = d.blocks.blocks[0].id; expectError(d, /id \d+ is already used by "grass"/, 'duplicate block id'); }
{ const d = await fresh(); d.blocks.blocks[0].key = 'Bad Key'; expectError(d, /key "Bad Key" must be lowercase/, 'bad key'); }
{ const d = await fresh(); d.blocks.blocks[0].tiles.top = 'nope'; expectError(d, /blocks\.json "grass": tiles\.top "nope" is not defined in textures\.json/, 'missing tile'); }
{ const d = await fresh(); d.blocks.blocks[0].loot = 'nothing'; expectError(d, /loot table "nothing" is not defined/, 'missing loot table'); }
{ const d = await fresh(); d.blocks.blocks[0].light = 20; expectError(d, /"light" must be a whole number 0-15/, 'light out of range'); }
{ const d = await fresh(); d.blocks.blocks[0].lightFilter = -1; expectError(d, /"lightFilter" must be a whole number 0-15/, 'negative light filter'); }
{ const d = await fresh(); d.game.studio.name = 'Café Studio'; expectError(d, /studio.name: the logo font has no/, 'studio name with a letter the logo font lacks'); }
{ const d = await fresh(); delete d.game.studio; expectError(d, /studio.name must be some text/, 'studio is required'); }
{ const d = await fresh(); d.blocks.blocks[0].id = 300; expectError(d, /block ids must be 1-255/, 'block id too big'); }
{ const d = await fresh(); d.loot.tables.stone[0].item = 'unobtainium'; expectError(d, /loot\.json "stone" #1: unknown block\/item "unobtainium"/, 'unknown loot item'); }
{ const d = await fresh(); d.loot.tables.stone[0].chance = 3; expectError(d, /chance must be 0-1/, 'bad chance'); }
{ const d = await fresh(); d.recipes.recipes[0].in = [['nothing', 1]]; expectError(d, /recipes\.json #1 \(planks\): unknown block\/item "nothing"/, 'unknown ingredient'); }
{ const d = await fresh(); d.recipes.recipes[4].at = 'anvil'; expectError(d, /station "anvil" is not defined/, 'unknown station'); }
{ const d = await fresh(); d.recipes.recipes[0].in = [['@mystery', 1]]; expectError(d, /unknown group "@mystery"/, 'unknown group'); }
{ const d = await fresh(); d.items.items[0].tool = { type: 'pickaxe', tier: 'diamond' }; expectError(d, /tier "diamond" is not defined/, 'unknown tier'); }
{ const d = await fresh(); d.items.items[0].id = d.blocks.blocks[0].id; expectError(d, /already used by "grass"/, 'item/block id clash'); }
{ const d = await fresh(); delete d.textures.sprites.stick; expectError(d, /items\.json "stick": no sprite/, 'missing sprite'); }
{ const d = await fresh(); d.textures.tiles.stone.type = 'wobble'; expectError(d, /tile "stone": unknown type "wobble"/, 'unknown texture type'); }
{ const d = await fresh(); d.textures.tiles.grass_side.cap = 'missing_tile'; expectError(d, /cap "missing_tile" is not a tile/, 'bad tile reference'); }
{ const d = await fresh(); d.textures.tiles.glass.rows[3] = 'ZZZZ'; expectError(d, /character "Z" is not in the palette/, 'pixelart palette'); }
{ const d = await fresh(); d.goals.goals[0] = { text: 'x', collected: 'nothing' }; expectError(d, /goals\.json #1: unknown block\/item/, 'goal item'); }
{ const d = await fresh(); d.goals.goals[1] = { text: 'x', flag: 'dancing' }; expectError(d, /flag "dancing" is not one the game sets/, 'goal flag'); }
{ const d = await fresh(); d.worldgen.ores[0].block = 'unobtainium'; expectError(d, /worldgen\.json ores\[0\]: "unobtainium" is not a block/, 'ore block'); }
{ const d = await fresh(); d.game.treeFall.mode = 'explode'; expectError(d, /treeFall\.mode must be "shatter" or "land"/, 'tree fall mode'); }
{ // several problems are all reported at once
  const d = await fresh(); d.blocks.blocks[0].tiles.top = 'a'; d.blocks.blocks[1].tiles.top = 'b';
  assert.throws(() => buildRegistry(d), (e) => /tiles\.top "a"[\s\S]*tiles\.top "b"/.test(e.message));
}

// ---- NEW CONTENT WITH JSON ONLY: a ruby ore, a ruby gem, a ruby sword recipe, loot, a goal ----
function addRuby(d) {
  d.textures.tiles.ruby_ore = { type: 'ore', base: 'stone', color: [190, 20, 50], light: [255, 110, 130], clusters: 7 };
  d.blocks.blocks.push({ id: 60, key: 'ruby_ore', name: 'Ruby Ore', tiles: { top: 'ruby_ore', bottom: 'ruby_ore', side: 'ruby_ore' }, hardness: 6, tool: 'pickaxe', need: 4, sound: 'stone', loot: 'ruby_ore', creative: true });
  d.items.items.push({ id: 150, key: 'ruby', name: 'Ruby' }, { id: 151, key: 'ruby_pickaxe', name: 'Ruby Pickaxe', tool: { type: 'pickaxe', tier: 'ruby' } });
  d.items.tiers.ruby = { level: 4, speed: 9, durability: 800, head: 'ruby' };
  d.textures.toolHeads.ruby = { light: [255, 150, 170], base: [220, 30, 70], dark: [120, 10, 40] };
  d.textures.sprites.ruby = { type: 'pixelart', palette: { r: [220, 30, 70], w: [255, 190, 200] }, rows: ['', '', '', '......rrrr', '.....rwwrr', '....rrwrrr', '.....rrrr'] };
  d.loot.tables.ruby_ore = [{ item: 'ruby', count: [1, 3] }, { item: 'diamond_dust'.replace('diamond_dust', 'coal'), chance: 0.5 }];
  d.recipes.recipes.push({ out: 'ruby_pickaxe', n: 1, in: [['ruby', 3], ['stick', 2]], at: 'table' });
  d.goals.goals.push({ text: 'Craft a Ruby Pickaxe', crafted: 'ruby_pickaxe' });
  d.worldgen.ores.unshift({ block: 'ruby_ore', scale: 0.2, offset: [1, 2, 3], threshold: 0.55, minY: 3, maxY: 20 });
  return d;
}
{
  const r = buildRegistry(addRuby(await fresh()));
  const rubyOre = r.idOfKey.get('ruby_ore'), ruby = r.idOfKey.get('ruby');
  assert.equal(rubyOre, 60);
  assert.deepEqual(r.loot.ruby_ore.map((e) => [e.id, e.min, e.max]), [[ruby, 1, 3], [r.idOfKey.get('coal'), 1, 1]]);
  const rp = r.recipes.find((x) => x.out === r.idOfKey.get('ruby_pickaxe'));
  assert.deepEqual(rp.ins, [[ruby, 3], [r.idOfKey.get('stick'), 2]]);
  assert.equal(rp.station, 'table');
  assert.equal(r.items.find((i) => i.key === 'ruby_pickaxe').tool.speed, 9, 'a brand new tool tier works');
  assert.equal(r.goals.length, (await fresh()).goals.goals.length + 1, 'the new goal is added');
  assert.equal(r.worldgen.ores[0].id, rubyOre, 'and it is part of world generation');
  assert.ok(paintTile('ruby_ore', r.tileNames.indexOf('ruby_ore'), r.tiles, {}).length > 0, 'its texture paints');
  assert.ok(paintSprite('ruby_pickaxe', r.items.find((i) => i.key === 'ruby_pickaxe'), r.textures, {}).some((v, o) => o % 4 === 3 && v > 0), 'the new tier colours the new pickaxe');
}

// ...and the real engine (blocks.js, world generation, loot) picks it up from a data folder, with no code edited.
{
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'voxelcraft-data-'));
  const moddedFiles = addRuby(await fresh());
  for (const [name, content] of Object.entries(moddedFiles)) fs.writeFileSync(path.join(dir, name + '.json'), JSON.stringify(content));
  const probe = `
    import { B, PALETTE, OPAQUE } from '${mod('src/js/blocks.js')}';
    import { I, dropsFor, miningInfo, RECIPES } from '${mod('src/js/items.js')}';
    import { World } from '${mod('src/js/world.js')}';
    const w = new World(5); let ore = 0;
    for (let cx = -3; cx <= 3; cx++) for (let cz = -3; cz <= 3; cz++) for (const b of w.generateChunk(cx, cz).data) if (b === B.RUBY_ORE) ore++;
    const drops = dropsFor(B.RUBY_ORE, true, () => 0);
    console.log(JSON.stringify({ id: B.RUBY_ORE, inPalette: PALETTE.includes(B.RUBY_ORE), ruby: I.RUBY, ore, drops, needsTier: miningInfo(B.RUBY_ORE, I.IRON_PICKAXE).canHarvest, rubyTool: miningInfo(B.RUBY_ORE, I.RUBY_PICKAXE).canHarvest, recipes: RECIPES.length }));
  `;
  const out = spawnSync(process.execPath, ['--input-type=module', '-e', probe], { env: { ...process.env, VOXELCRAFT_DATA: dir }, encoding: 'utf8' });
  assert.equal(out.status, 0, out.stderr);
  const got = JSON.parse(out.stdout.trim().split('\n').pop());
  assert.equal(got.id, 60);
  assert.ok(got.inPalette, 'shows up in the creative palette');
  assert.equal(got.ruby, 150);
  assert.ok(got.ore > 0, `ruby ore is generated in the world (${got.ore} blocks)`);
  assert.deepEqual(got.drops, [{ id: 150, n: 1 }, { id: 101, n: 1 }], 'its loot table works');
  assert.equal(got.needsTier, false, 'an iron pickaxe is not enough');
  assert.equal(got.rubyTool, true, 'the new ruby pickaxe is');
  assert.equal(got.recipes, reg.recipes.length + 1, 'and the recipe exists');
  // a broken data folder stops the engine with a readable message instead of running with bad data
  const bad = structuredClone(moddedFiles);
  bad.recipes.recipes[0].in = [['nothing_here', 1]];
  fs.writeFileSync(path.join(dir, 'recipes.json'), JSON.stringify(bad.recipes));
  const failed = spawnSync(process.execPath, ['--input-type=module', '-e', `import '${mod('src/js/blocks.js')}'`], { env: { ...process.env, VOXELCRAFT_DATA: dir }, encoding: 'utf8' });
  assert.notEqual(failed.status, 0);
  assert.match(failed.stderr, /recipes\.json #1 \(planks\): unknown block\/item "nothing_here"/);
  fs.rmSync(dir, { recursive: true, force: true });
}

// ---- texture generators ----
{
  const art = paintSpec({ type: 'pixelart', palette: { x: [255, 0, 0] }, rows: ['x.', '.x'] }, 1);
  assert.deepEqual([...art.slice(0, 4)], [255, 0, 0, 255]);
  assert.equal(art[4 + 3], 0, 'dots are transparent');
  const layered = paintSpec({ type: 'layers', layers: [{ type: 'noise', base: [10, 20, 30], noise: [], jitter: 0 }, { type: 'pixelart', palette: { x: [255, 0, 0] }, rows: ['x'] }] }, 1);
  assert.deepEqual([...layered.slice(0, 4)], [255, 0, 0, 255], 'the top layer wins where it has pixels');
  assert.deepEqual([...layered.slice(4, 8)], [10, 20, 30, 255], 'the layer below shows elsewhere');
  const missing = paintSpec({ type: 'image', src: 'nope.png' }, 1);
  assert.deepEqual([...missing.slice(0, 4)], [255, 0, 255, 255], 'a missing image is hot pink');
  assert.throws(() => paintSpec({ type: 'ref', tile: 'a' }, 1, { a: { type: 'ref', tile: 'a' } }), /refers to itself/);
}

console.log('all data/content tests passed');
