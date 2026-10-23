# VoxelCraft content files

Everything about the game's *content* lives in these JSON files. You can add a block, an item, a recipe, a loot
drop, a texture or a sound by editing them: **no code changes needed.** Reload the page to see the change.

```
npm run validate     # checks all files and points at mistakes ("blocks.json "grass": tiles.top "x" is not defined ...")
```

If a file is wrong the game shows the problem on screen instead of loading, and `npm run validate` prints the same
messages in the terminal. Names are lowercase keys like `coal_ore`; the engine finds blocks and items by key.

| file | what it holds |
|---|---|
| `blocks.json` | every block: look, hardness, tool, sound, loot, plant growth, what it opens or turns into |
| `items.json` | non-block items (tools, food, materials) and the tool tiers |
| `loot.json` | what blocks drop (and what leaves give when a tree shatters) |
| `recipes.json` | crafting and smelting recipes, stations, and the crafting windows |
| `goals.json` | the goals list in the HUD |
| `textures.json` | block textures, item sprites, tool colours |
| `sounds.json` | block sound materials |
| `worldgen.json` | terrain, rivers, caves, ores, trees, ground cover, spawn |
| `music.json` | the soundtrack: tracks, tempos, chords, instruments, the title theme |
| `game.json` | equipment slots, health, hunger, falling, tilling, light levels, studio logo, day length, tree falling, creative hotbar, breath, combat, experience, sleep, chests |
| `mobs.json` | animals and monsters: health, speed, size, drops, where they live, and the rules for when they spawn |
| `quests.json` | what each kind of villager asks for, by difficulty, and the loot table each difficulty pays from |
| `weather.json` | the kinds of weather, how likely they are and what they look like |

## blocks.json

```json
{ "id": 13, "key": "coal_ore", "name": "Coal Ore",
  "tiles": { "top": "coal_ore", "bottom": "coal_ore", "side": "coal_ore" },
  "hardness": 4.0, "tool": "pickaxe", "need": 1, "sound": "stone", "loot": "coal_ore", "creative": true }
```

* `id` - 1 to 255, unique, and **never change it** once worlds exist (saves store ids). `key` - unique name (shared with items).
* `tiles` - texture names from `textures.json` for the top, bottom and sides.
* `hardness` - seconds to break with the right tool at speed 1. `tool` - the tool type that mines it faster
  (`pickaxe`, `axe`, `shovel`, ...). `need` - minimum tool tier *level* to get a drop (0 = anything).
* `sound` - a material from `sounds.json`. `loot` - a table from `loot.json` (omit = drops itself; a table named like the block is used automatically).
* `opaque` / `solid` - default true. `opaque: false` lets you see through it (glass, leaves). `solid: false` lets you walk through.
* `creative: true` - appears in the creative palette.
* `role: "log"` - toppling trunk (cutting one makes the tree above fall). `role: "leaf"` - tree leaves.
* `shatterLoot` - loot table used when a falling tree shatters (see `treeFall` in `game.json`).
* `opens: "table"` - right-click opens that crafting window (a key of `windows` in `recipes.json`).
* `tillsInto: "farmland"` - a hoe turns it into that block (needs water nearby, see `tilling` in `game.json`).
* `spreadsOnto: "dirt"` - slowly turns dirt next to it into this block (grass).
* `gravity: true` - falls when the block below is empty (sand), together with everything stacked above it.
* `light: 0-15` - light the block gives off (default 0). `lightFilter: n` - extra light lost passing through it (leaves 2, water 2; default 0).
  Opaque blocks stop light completely. Sky light is 15 and falls straight down through clear blocks; everything else loses 1 level per block.
* `model: { "type": "torch", "height": 0.75, "lean": [dx, dz] }` - drawn as a thin torch instead of a cube (`lean` points away from the wall it hangs on). Not solid, selectable with a small box, glows (`light`).
* `model: { "type": "stairs", "facing": "n" }` - a stair: a low slab and a tall back on the side `facing` names (n, e, s, w), solid only where it is drawn. Make one block per direction and give the other three `"variantOf": "<the first one's key>"`: placing the first picks the direction from the way you look, and the others drop and pick as the first. Set `"opaque": false`.
* `model: { "type": "door", "axis": "x", "half": "bottom", "open": false }` - one half of a door: a thin plate (`axis` = the way it spans; an open door swings to the edge). A door needs all eight combinations (axis x/z, bottom/top, shut/open), the shut ones `"solid": true` and the open ones `"solid": false`; the item that places them has `"door": "<key of the shut, lower, x-axis block>"` (see `door` in items.json).
* `model: { "type": "boxes", "boxes": [[x0, y0, z0, x1, y1, z1], ...] }` - made of boxes inside the cell (0-1): slabs, columns, windows, beds. Solid only where drawn, so you walk up onto a half-high slab. Set `"opaque": false`.
* `axis: "x"` / `"z"` - a window (or wall piece) that spans one way; the z copy lists the x one as `variantOf`, and placing the x one picks whichever fits the way you face.
* `model.kind` on a door (`"wood"`, `"iron"`) - a door kind is its own set of eight blocks; the item that places it has `"door": "<its closed lower x block>"`.
* `unbreakable: true` - cannot be mined in any mode and gives nothing (bedrock).
* `bed: { "part": "foot" | "head", "facing": "n"|"e"|"s"|"w", "color": "red" }` - one square of a bed: the foot, or the head with the pillow on the side it faces. The bed items (`items.json` `bed`) place a bed `width` wide and two long out of these.
* `chest: { "slots": 27, "stack": 1 }` - storage: how many slots, and how many times a normal stack each slot holds. It needs `"opens": "chest"` (a window with `"chest": true` in `recipes.json`).
* `plant.placeOn: ["grass", "dirt"]` - a flower you can carry and plant on those blocks (the block is its own item).
* `support: [dx, dy, dz]` - where the block it hangs on is; it drops as an item when that stops being solid.
* `fuel: seconds` - burns that long in a furnace (blocks and items).
* `hydration` - soil that tracks water: `{ "wet": "farmland_wet", "decay": { "into": "dirt", "chancePerSecond": 0.012 } }` turns it into the wet block
  when water is near (the `tilling` radius) and, when it is not, slowly into dirt if nothing grows on it. The wet block holds `{ "dry": "farmland" }`
  to go back. Crops with `soil: "farmland_wet"` only grow while it is damp.
* `water: { "level": 7 }` - fluid: 7 = source, 1-6 = flowing (one block per level must exist).
* `plant` - a plant drawn as crossed quads or a crop grid:
  ```json
  "plant": { "kind": "cross", "height": 0.35,
    "growth": { "next": "grass_m", "chancePerSecond": 0.0083, "soil": "grass" },
    "stage": { "label": "Grass", "step": 1, "name": "Short", "ripe": false, "crop": false },
    "spreads": { "block": "grass_s", "chancePerSecond": 0.002, "onto": "grass", "range": 2 } }
  ```
  `kind` is `cross` or `hash`; `height` is the selection box; `growth` makes it advance to another block over time
  on the given soil; `stage` is what the "look at" HUD shows (`ripe` = ready, `crop` = a harvestable crop);
  `spreads` lets a grown plant seed new sprouts nearby.

## items.json

```json
{ "tiers": { "wood": { "level": 1, "speed": 2.0, "durability": 60, "head": "wood" } },
  "items": [
    { "id": 105, "key": "bread", "name": "Bread", "food": 6 },
    { "id": 103, "key": "wheat_seeds", "name": "Wheat Seeds", "plants": { "block": "wheat_s", "on": "farmland" } },
    { "id": 110, "key": "wood_pickaxe", "name": "Wooden Pickaxe", "tool": { "type": "pickaxe", "tier": "wood" } } ] }
```

* Blocks are items automatically (same key and id). An item can also place a block that depends on where you click: `"places": { "up": "torch_floor", "east": "torch_e", "west": "torch_w", "south": "torch_s", "north": "torch_n" }` (the keys are the face you click; a missing `down` means no ceiling placement). `"creative": true` puts an item in the creative palette. `"fuel": seconds` makes it burn in furnaces. Item ids must not clash with block ids.
* `food` - hunger points restored when eaten (hold right-click). `stack` - max stack (default 64, tools 1).
* `plants` - right-click on the block `on` places the plant block `block` (seeds).
* `tool` - `type` is what it mines faster (`pickaxe`, `axe`, `shovel`, `hoe` ...); `tier` names an entry in `tiers`.
  A tier has `level` (compared with a block's `need`), mining `speed` multiplier, `durability` and a `head` colour set from `textures.json`.
  A new tier is just a new entry (e.g. `ruby` with level 4).
* Every non-tool item needs a sprite in `textures.json` -> `sprites`.
* `tool: { "type": "hammer", "tier": "iron", "mines": "pickaxe", "area": 3, "speed": 0.7, "durabilityMul": 2.5 }` - `mines` makes the tool dig that kind of block as if it were that tool (a hammer is a pickaxe); `area` breaks a square of that width (3x3); `speed` and `durabilityMul` scale the tier's numbers. A weapon's damage comes from its `type` and tier in `game.json` `combat`.
* `bed: { "width": 2, "color": "red", "foot": "bed_red_foot", "heads": ["bed_red_head_n", ...e, s, w] }` - places a bed; `upgrade: { "from": "chest", "to": "iron_chest" }` - used on a chest it becomes the next one and keeps its contents; `shears: true` - shears a sheep.

## loot.json

```json
{ "tables": { "leaves": [ { "item": "stick", "chance": 0.2 }, { "item": "apple", "chance": 0.03 } ],
              "wheat_l": [ { "item": "wheat" }, { "item": "wheat_seeds", "count": [1, 2] } ],
              "glass": [] } }
```
Each entry rolls independently: `chance` 0-1 (default 1), `count` a number or `[min, max]` (default 1). `[]` drops nothing.
Without the right tool a block drops nothing.

## recipes.json

```json
{ "out": "wood_pickaxe", "n": 1, "in": [["planks", 3], ["stick", 2]], "at": "table" }
{ "out": "torch", "n": 4, "in": [["@coals", 1], ["stick", 1]] }
```
* `in` - `[item, count]`; `"@coals"` means any item of the group `coals` (listed in `groups`, used in that order: charcoal before coal).
* `at` - a station from `stations`; leave it out for by-hand recipes. `label` - shown when several recipes make the same item.
* `smelting` - what a furnace cooks: `{ "in": "raw_iron", "out": "iron_ingot", "seconds": 10 }` (one item in, one out, seconds each). Fuel is separate: give an item or block `"fuel": seconds` and it burns that long (coal 80, log 20, plank 15, stick 5; one burning item cooks `fuel / seconds` things).
* `windows` - the crafting windows: `hand` (the inventory) and any block's `opens` target. A window lists the recipes of its `stations`.
  A window with `"furnace": true` has smelt / fuel / result slots instead of crafting recipes, and lists `smelting`. To add a new station: add it under `stations`, add a window that lists it, and give a block `"opens": "<window>"`.

## goals.json

`{ "text": "Craft a Furnace", "crafted": "furnace" }`. Conditions: `collected` (picked up an item), `crafted`,
`craftedAny` (a list) or `flag`: `tilled`, `planted` or `ate` (set by the game).

## textures.json

* `tiles` (the order is the atlas order) - block textures. Each is `{ "type": ..., ...settings }`:
  * `noise` - base colour with blotchy variation, speckles, optional transparent `holes` and darker `edge` (grass, dirt, stone, sand, leaves, snow)
  * `capped` - top rows from one tile, the rest from another (`cap`, `body`, `depth`)
  * `bark`, `rings`, `planks`, `cells` (cobblestone), `waves` (water; optional `seed` pins the ripple pattern and `phase`, in radians, slides it along, which is how the water animates), `bricks`, `ore` (lumps of ore set into a base tile, `clusters` = how many, `color` and `light` for the lump and its lit edge), `stripes` (farmland),
    `blades` (grass tufts, young crops), `stalks` (ripe wheat) - parameters are the colours and sizes you see in the file
  * `pixelart` - draw it yourself: `rows` of up to 16 characters, each looked up in `palette` (`[r,g,b]` or `[r,g,b,a]`); `.` is transparent
  * `image` - `{ "type": "image", "src": "textures/ruby.png" }` a PNG (any size, scaled to 16x16) placed next to these files
  * `layers` - a stack of the above (later layers on top), `ref` - reuse another tile by name
* `sprites` - item icons by item key (any type above; `pixelart` is the usual choice). Tools without a sprite are drawn
  automatically from their `type` and the colours in `toolHeads` (`light`, `base`, `dark`).

## sounds.json

Each material is a list of layers played together: `{ "type": "noise", "filter": "bandpass", "freq": 1900, "q": 1.2, "gain": 0.55 }`
(filtered noise) or `{ "type": "tone", "from": 160, "to": 70, "gain": 0.3, "wave": "sine" }` (a pitch sweep). Optional per layer:
`lengthScale`, `seconds`, `skipPhases`, `delayJitter`. `phases` sets loudness and length for break / place / tick / step.

## worldgen.json

Sea level, snow line, which blocks form the surface and filler (and the bedrock), terrain and river shape numbers, caves, `ores`
(noise settings and height range - first match wins, so list rare ores first), `trees`, `groundCover` (grass tufts) and the spawn search.
Caves: `scale`/`threshold` shape the thin winding tunnels, `caverns` (`scale`, `threshold`, `minY`, `maxY`, `surfaceDepth`) the wide chambers (lower threshold = bigger and more), and `entrances` (`scale`, `threshold`) the columns where tunnels may break through the surface.
`biomes`: three slow noise fields (`temp`, `wet`, `rel`, each mostly between -0.35 and 0.35, stretched by `climateScale`) choose a biome per column using the cut-offs in `select`. Each entry of `types` (`plains`, `forest`, `hills`, `mountains`, `desert`, `tundra`) names its `surface` and `filler` blocks and `fillerDepth`, an optional `rockFrom` height (above it the surface is bare stone) and a `trees` multiplier (`denseMin` keeps forests dense). The shape of the land comes from `terrain` (`plainsHills` / `rollingHills` = how bumpy flat and rolling country is, `mountainHeight`, `mountainUplift`, `duneHeight`, `flatContinent` = how much the big continent noise is flattened on dry land). A tree variant can list `biomes` it grows in.
`villages`: `regionSize` (the world is cut into squares; each may hold one village), `chance`, `attempts` (places tried per square), `flatRadius` / `flatRange` (how level the site must be), `maxStep`, `minAboveSea`, `armLength` (how far the two roads run), `emptyLot` (chance a plot is left bare), `minBuildings`, `maxVillagers` and the `biomes` they may be in. What the buildings are made of lives in `src/js/villages.js`: they use the same blocks players can craft.
`terrain4` and `biomes.select4` / `biomes.ocean` are terrain 4 (new worlds): taller mountains, the climate cut-offs for savanna, jungle, swamp, taiga and badlands, and the sea (its noise, depth, floors, ice). A biome type may also list `cover` (what grows on its ground: grass tufts and flowers with weights), `strata` (bands of blocks below the surface), `climate` (cold, hot, temperate: what weather it gets), `freeze` (lakes ice over) and `water` (it is a sea). A tree variant with `"since": 4` only grows in terrain 4 worlds, and `shape: "flat"` is an acacia. `villages4` is how many people (5-7) and houses a terrain 4 village has.
Changing it changes new terrain only; already generated and edited chunks keep what you built. A world records which terrain it uses (`terrain` in its save: 1 is the original rolling terrain, 2 the biomes, 3 adds villages, 4 the oceans, the new biomes and the new villages), so playing worlds keep theirs.

## mobs.json

`species` has one entry per creature: `kind` (`animal` or `hostile`), `health` (half hearts), `speed` (share of a player's walking speed), `size` (`hw` half width, `height`), `loot` (a table in loot.json), `xp`, `call` (its sound) and, for animals, `herd` ([min, max] together), `biomes` and `shear` (what shearing gives and how long the wool takes to grow back); monsters add `damage`, `sight`, `reach`, `cooldown` and, for an archer, `ranged` and `keepDistance`. `spawning.hostile.maxLight` is the light level monsters need to be at or below (5 = under 6), `max` how many at once, `minDistance` / `maxDistance` how far from you they appear, `despawnDistance` and `sunSeconds` when they fade. `spawning.animals` sets how many herds a chunk gets.

## quests.json

`tiers` (easy, medium, hard) name the loot table each pays from, the experience, and how likely it is to be offered. `jobs` has, for every villager job, a list of quests per tier: `{ "type": "fetch", "item": "wheat", "count": [6, 10], "text": "...{n}..." }` (bring items; they are taken from you) or `{ "type": "slay", "mob": "zombie", "count": [4, 6] }` (defeat them while the quest is open). Which quest a villager offers is chosen from the world's seed, so it is the same every time; declining one makes them think of another, and finishing jobs makes harder ones likelier.

## weather.json

`periodDays`: how long a spell of weather lasts in game days. Each event has `weight` (how likely; 0 = only as a conversion), `minDay`, `darkness`, `wind`, `fog` (view distance multiplier), `particles` (rain, snow, sand), `density`, `lightning` (strikes a minute), `sound`, `speed` (a slowdown out in the open), and conversions for where you stand: `cold` (what it becomes in a cold biome: rain -> snow), `hot`, `climates` (only in those: a hurricane needs the sea or the coast) with a `fallback`.

## game.json

Health and hunger numbers, eating time, fall damage (`safeDistance`, `damageOffset`), `tilling` (how near water must be),
`hunger` (`drainPerSecond`, `sprintDrainPerSecond`, `jumpCost`, `sprintJumpCost`, `miningCost`, `miningDrainPerSecond`, `noSprintAtOrBelow` = points at or under which you cannot sprint (6 = 3 icons), `starveEverySeconds`, `starveDamage`, and the saturation rules: `maxSaturation`, `healEverySeconds`, `saturationPerHeal`, `emptySaturationCost` = hunger lost when the reserve runs dry, `respawnSaturation`), `equipment` (`slots` = the equipment slots in screen order, `armorReduction` = damage taken off per armor point, `maxArmor`), `breath` (air under water: `max`, `drainPerSecond`, `refillPerSecond`, `drownEverySeconds`, `drownDamage`), `combat` (`handDamage`, `attackCooldown`, `knockback`, `reach`, `weapons` = damage by tool type and `tierBonus` by metal), `xp.perLevel`, `sleep` (`monsterRadius`, `fadeSeconds`, `healTo`), `chests.craftRange`, `world.tickCeiling` (nothing ticks above this height), `fall.kick` (how hard the view jolts when a fall hurts), `time.dayLengthSeconds`, `spread` and `plants` tick settings, `creativeHotbar`, `studio` (`name` and `tagline` of the developer logo shown at startup; letters, digits, space and `- . ! & '`), `lighting` (`skyLevel` 15, `minBrightness` the darkest a face can be, `gamma` how quickly it falls off), and `treeFall.mode`:
`"shatter"` - the tree tips over and bursts into loot (logs, and each leaf rolls its `shatterLoot`), or `"land"` - it
comes to rest as blocks on the ground.

## Example: add a ruby ore

1. `textures.json` -> `tiles`: `"ruby_ore": { "type": "ore", "base": "stone", "color": [190,20,50], "light": [255,110,130] }`
2. `blocks.json` -> `blocks`: `{ "id": 40, "key": "ruby_ore", "name": "Ruby Ore", "tiles": {"top":"ruby_ore","bottom":"ruby_ore","side":"ruby_ore"}, "hardness": 6, "tool": "pickaxe", "need": 3, "sound": "stone", "loot": "ruby_ore", "creative": true }`
3. `items.json` -> `items`: `{ "id": 150, "key": "ruby", "name": "Ruby" }` and a sprite `"ruby"` under `sprites` in `textures.json`
4. `loot.json` -> `tables`: `"ruby_ore": [ { "item": "ruby", "count": [1, 3] } ]`
5. `worldgen.json` -> `ores`: `{ "block": "ruby_ore", "scale": 0.2, "offset": [1,2,3], "threshold": 0.55, "minY": 3, "maxY": 20 }`

Then `npm run validate` and reload.

## items.json: equipment and saturation

`"equip": { "slot": "helmet", "armor": 2 }` makes an item wearable in that equipment slot (one of the ids under `equipment.slots` in `game.json`); `armor` points soften falls, and `"slots": 9` on a `backpack`-slot item adds that many inventory slots while worn. Wearable items should have `"stack": 1`. Add a new slot by listing it in `game.json` and giving an item that fits it. Food items take `"food"` (hunger points) and `"saturation"` (the healing reserve it adds; default 60% of `food`).

## music.json

```json
{ "gapSeconds": [5, 12], "title": "theme",
  "tracks": [ { "key": "lantern", "name": "Lantern Light", "bpm": 50, "bars": 16, "barsPerChord": 2,
      "chords": [ { "root": 45, "tones": [57, 60, 64, 67, 71] } ],
      "lead": { "voice": "bell", "density": [0.8, 0.45, 0.3], "leap": 0.2, "rest": 4 },
      "pad": "strings", "bass": "sine" } ] }
```

Every track is generated live (nothing is recorded). In the game a random track plays; when it finishes there is a pause of `gapSeconds` and another is picked: every track once before any repeats, never the same twice in a row. The track named by `title` loops on the title screen and is not part of the shuffle. Add a track by adding an entry (the game needs at least two besides the title theme).
* `chords`: `root` is the bass note, `tones` the notes the pad, arpeggio and melody use (MIDI numbers: 60 = middle C). Each chord lasts `barsPerChord` bars and the list repeats for `bars` bars.
* `lead`: the melody, chosen at random from the chord's tones each play. `voice` is `piano`, `bell` or `pluck`; `density` the chance of a note on [the first beat, other even half-beats, odd half-beats]; `leap` the chance of an octave jump; `rest` makes every Nth bar a breath.
* `melody` (instead of `lead`): written out, `[bar, beat, note, beats long, loudness]` per note, so it plays the same every time (the title theme).
* `arp`: a repeating broken chord: `voice`, `pattern` (which chord tone each step plays), `step` (beats per note), `vel`.
* `pad`: `triangle` or `strings`; `bass`: `sine` or `drone`.

## Trees, saplings, glow and animation

* `worldgen.json` -> `trees.variants`: each tree kind has `key`, `weight`, `heights` (the terrain heights it grows at), `shape` (`round`, `tall`, `cone`, `bush`), `trunk` [min, max], and the `log` and `leaves` blocks. Give the log `"role": "log"` and the leaves `"role": "leaf"` so felling works. Leaves drop what their loot table says (blocks.json `loot` / `shatterLoot`).
* `blocks.json` plant `"grows": { "trees": ["oak", "tall_oak"], "chancePerSecond": 0.012, "soil": ["grass", "dirt"] }` makes a block a sapling: it turns into one of those trees (picked at random from the list) when there is room. The sapling item is an item with `"plants": { "block": "young_oak", "on": ["grass", "dirt"] }`.
* `"glow": 0.22` (0-1) on a block makes it shine for itself in the dark (ores) without lighting its neighbours; `light` is the one that lights things.
* `textures.json` -> `animations`: `"torch": { "frames": ["torch", "torch_b", "torch_c"], "fps": 8 }` cycles those tiles into the atlas, so any block texture can flicker. Water uses it too: eight `waves` tiles with the same `seed` and growing `phase` loop into moving water. The first frame must be the tile itself.
* `items.json` `"offhand": true` lets an item sit in the shield slot (torches). `game.json` `tools.wrongToolWear` is how many uses a tool loses on a block it is not made for.
* `goals.json`: `{ "collectedAny": ["log", "birch_log"] }` completes when any of the listed items has been picked up.
