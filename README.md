# VoxelCraft

A small Minecraft-style voxel sandbox that runs in the browser, on a computer or a phone, and installs as an app (a PWA). All art and audio is generated, with no downloaded assets, and **all game content is data**: blocks, items, loot, recipes, goals, textures, sounds and world generation are JSON files in `src/data/` (see [src/data/README.md](src/data/README.md)). Add a block, a recipe or a loot drop by editing JSON; no code changes needed. What the game can do is listed in [FEATURES.md](FEATURES.md); what changed in each version is in [CHANGELOG.md](CHANGELOG.md).

```
npm install
npm start          # dev server: http://localhost:3000  (only one instance can run at a time)
npm run stop       # stop the running dev server from another terminal
npm run build      # build the web app into the repo root (index.html, app.js, ...)
npm run preview    # serve the built app the way GitHub Pages does: http://localhost:3000
npm run validate   # check the content files in src/data/ for mistakes
npm test           # all the Node tests (no browser needed)
```

## Project layout

```
index.html app.js style.css      the built web app: a FLAT set of files, no folders (this is what GitHub Pages serves)
manifest.webmanifest sw.js       what makes it installable and offline-capable
icon-*.png apple-touch-icon.png favicon.png  the app icons
.nojekyll
src/        the source: index.html, style.css, js/ (the game), data/ (the content), sw.template.js
scripts/    server.js (dev server), build.mjs, make-icons.mjs, stop.js, validate-data.js
test/       Node tests
```

**Never edit the files in the root by hand**: they are generated from `src/` by `npm run build`, and the tests and CI fail if they are out of date. After changing anything in `src/`, run `npm run build` and commit the result together with the change.

## Hosting on GitHub Pages

1. Push the repository to GitHub (the built files are already in the root).
2. **Settings → Pages → Build and deployment → Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, and save.
3. The game is live at `https://<user>.github.io/<repository>/`. Everything uses relative paths, so it works under that sub-path.

On first visit the service worker caches the whole game (under 1 MB of code), so afterwards it starts instantly and works offline. Chrome / Edge offer **Install** in the address bar; on iOS use **Share → Add to Home Screen**, on Android **⋮ → Install app**. After you publish a new version, players get it the next time they open the game (a message asks them to reload).

**Where worlds are saved.** With the Node dev server (`npm start`) each world is a file in `worlds/`. On GitHub Pages or when installed there is no server, so worlds are saved in the browser's own storage (IndexedDB) on that device; the game asks the browser to keep it, and warns on the title screen if the browser would not. Clearing site data deletes the worlds.

## Phones and tablets

On a touch device (primary pointer is a finger) the game switches to on-screen controls by itself; the switch is also in **Options** (and `?touch` / `?desktop` on the address force either way).

| Control | What it does |
|---|---|
| Left thumb, anywhere on the left | Floating move stick (analog: walk slowly or fast); push it to the rim to sprint |
| Drag on the right | Look around (a finger held on any button can drag to look too) |
| **Break** (hold) / **Use** (hold) | Left click / right click: mine, attack, place, open, till, plant, eat |
| **Jump** (tap twice in creative to fly) · **Run** · **Sneak** | Jump / swim up, latch sprint, crouch / fly down |
| **Fly** (creative) · **Torch** | Toggle flying; place the torch held in the shield slot |
| **Bag** · **II** | Inventory (or the creative palette) · pause menu |
| Tap the hotbar | Pick a slot |
| Inventory button at the top | What a tap does: pick up / place, split / place one, quick move / wear |

The game asks for full screen and landscape when you press Resume.

## Starting up

1. A **developer logo** screen (any key skips it; the studio name and tagline are in `game.json` -> `studio`).
2. The **title screen**: a slow fly-around over a little landscape (it is always daytime there, and the camera always looks down at the land) with **Play**, **Options & Key Bindings** and **Quit Game** (which stops the game server after a second click to confirm), and the **title theme** playing. Browsers keep sound off until your first click or key press, so a hint reminds you.
3. **Select World**: every world is listed with its mode, day, seed and when you last played. Double-click (or Enter) to play, **Create New World** (name, optional seed, Survival or Creative) or **Delete** (needs a second click). Esc steps back.

Each world is its own file in `worlds/` (an older single `world.json` is imported once as "My World"; the original file is left alone). In the pause menu **Esc** resumes the game and **Save & Quit to Title** saves and returns to the title screen.

## Playing (survival is the default)

You start with **nothing**. The on-screen goals walk you through it:

1. Punch a tree (hold left click) to collect **wood**.
2. Craft **planks**, **sticks** and a **crafting table** from the inventory (**E**).
3. Place the table, craft a **wooden pickaxe** and **axe** (stand near the table, or right-click it).
4. Mine **cobblestone**, then craft **stone tools**.
5. Craft a **hoe**. Break tall grass until it drops **wheat seeds**, then **till** soil within 4 blocks of water (hold the hoe: the block outline turns green when the soil is wet enough, orange when it is too dry), **plant** the seeds and wait for the wheat to ripen. Harvest it, craft **bread** and eat it.
6. Find **coal** and **iron ore** (iron needs a stone pickaxe; it drops **raw iron**), craft a **furnace**, put raw iron and fuel in it, wait for the **iron ingots** to cook, craft **iron tools**. Craft **torches** (coal or charcoal + a stick) to light your way underground.

| Key | Action | Key | Action |
|---|---|---|---|
| W A S D | Move | Mouse | Look |
| Space | Jump / swim | Tab | Sprint (not when very hungry) |
| Shift | Crouch: lower and slow, and you cannot walk off an edge (also flies down in creative) | | |
| Left click (hold) | Break block | Right click | Place / use table & furnace / till / plant / eat (hold) |
| 1-9 / wheel | Select slot | Middle click | Pick a block you carry |
| E | Inventory & crafting | Q | Drop one item |
| T | Skip time of day | M | Toggle music |
| [ ] | Render distance | F3 | Debug info |

**Every keyboard key above can be remapped** in *Options & Key Bindings* (main/pause menu), where you can also set mouse sensitivity, field of view, invert-Y, raw mouse input and music/sound volume. Settings are remembered in your browser.

The menu has a **Mode** button: **Creative** gives a block palette (E), unlimited blocks and flying (F or double-tap Space). Your survival inventory is kept separately.

## Survival basics

- **Health** (10 hearts): falling 4 or more blocks hurts, and the damage grows with the height (1 point for the fourth block, then 1 per extra block; water breaks a fall). A hit that hurts flashes the screen red and jolts the view. You heal from saturation (see Hunger and healing). **If you die**, everything you carry drops where you fell (it stays there for half an hour and is saved with the world) and you come back at your spawn point with an empty inventory. Creative mode is invulnerable.
- **Step-assist**: walk into a block that is one level high (with room above it) and you climb it without jumping. Two-high walls still need a jump.
- **Felling trees**: break a log and everything above it (trunk and leaves) topples away from you, tips over as one piece and then **shatters**: every log drops as a log and every leaf rolls its loot (sticks and the odd apple), scattered over the ground for you to pick up. Stumps stay; neighbouring trees are left alone. A tree only falls once it would be floating: if another log beside the broken one (a thick trunk, a neighbouring trunk, even diagonally) still joins the logs above to the ground, it stays up until that support goes too. (`treeFall.mode` in `game.json` can switch this to the tree lying on the ground as blocks.)
- **Water flows**: sources (the sea, rivers) spread thinner water sideways into empty space on the same level (6 blocks, thinning out), and water with nothing underneath pours down hills and cliffs. Dig a trench to the shore and it fills; remove the source and the stream retreats. Only water-adjacent changes wake the simulation, so digging elsewhere costs nothing.
- **Grass spreads**: exposed dirt next to grass (within one block up or down) slowly turns to grass. Dirt under a block stays dirt.
- **Sand falls**: sand (anything with `"gravity": true`) drops when the block under it is removed, and so does everything stacked on top of it: break the bottom of a stack of four and the other three slide down one level together, animated. Sand lands on (and crushes) plants, displaces water, and drops as an item if you build into its path.
- **Light levels**: every block has a light level from 0 to 15. Open sky is 15 and falls straight down; beyond that light loses one level per block, so the deeper you dig a tunnel the darker it gets, down to a dim floor (never pitch black, set by `lighting.minBrightness` in `game.json`). Sealing yourself in a house or a hole cuts the light off, and opening a gap lets it flow back in. Leaves and water dim light as it passes (`lightFilter`), blocks can glow (`light`, none do yet), and the sky, fog and your hand darken with the light around you. Light is baked into the block faces with smooth shading and updated incrementally when you build or dig.
- **Damp soil**: tilled soil next to water (the same radius as tilling) turns darker and damp and crops grow on it. If water is not close enough (or is taken away) it dries out to pale farmland; crops do not grow on dry farmland, and empty dry farmland eventually turns back into dirt.
- **Minimap** (top right): a circular compass-style map of the terrain around you (north is up), outlined with N/E/S/W marks. It scrolls as you move and shows water depth, hills and trees, with an arrow for the way you face. Under it: your real-life clock, the in-game clock with the part of the day and day number, and your X / Y / Z.
- **What you are looking at**: a HUD at the top centre names the block you are aiming at within 5 blocks and, for growing things (wheat, grass), shows its stage of growth and whether it is ready to harvest.
- **Sky**: volumetric clouds with real thickness, a lit 3D moon with craters that cycles through 8 phases (one per day) and twinkling stars.

## Content is data

Everything below is described in `src/data/*.json` and read at startup (the page shows a clear message if a file is wrong):
`blocks.json` (look, hardness, tool, sound, loot, plant growth, what a block opens/tills into/spreads onto), `items.json` (tools, food, seeds, tool tiers),
`loot.json`, `recipes.json` (recipes, stations, crafting windows), `goals.json`, `textures.json` (procedural generators with parameters, hand-drawn
pixel art, or PNG files), `sounds.json`, `worldgen.json` (terrain, ores, trees...) and `game.json` (health, hunger, falling, tilling, day length...).
The engine only knows generic behaviours (a block with `"role": "log"` topples, one with `"opens": "table"` opens that window, an item with `"plants"` plants seeds),
so new content needs no code. Tests prove it by adding a whole new ore, item, tool tier, recipe and goal from JSON alone.

## Systems

- **Mining rules** (`items.js`, `blocks.js`): every block has a hardness, a preferred tool (pickaxe/axe/shovel) and a minimum tool tier. Stone needs a pickaxe to drop anything, iron ore needs a stone pickaxe. Tools of wood/stone/iron tiers mine 2x / 3.5x / 5.5x faster and wear out (durability bar, breaks with a sound).
- **Drops**: blocks pop out as spinning items that fall, bounce, and get sucked into the inventory when you're close. Grass gives dirt, stone gives cobblestone, coal ore gives coal, leaves sometimes give sticks.
- **Inventory** (`inventory.js`, `ui.js`): 36 slots with a hotbar, stacking to 64 (tools don't stack), pick up / place / split / shift-click quick-move, and click outside the window to throw items.
- **Crafting**: recipe-book style, and the book only shows what the window you opened can do, as one list (no tabs): **E** opens your inventory (hand recipes), right-click a **crafting table** (hand recipes plus tools and building blocks) or a **furnace**. Type in the search box to filter by name or ingredient, and tick **Craftable only** (**Smeltable only** at a furnace) to hide what you cannot make yet; the tick is remembered. Hover any recipe for a pop-out listing each ingredient, how many you have, and where it is made. **Esc** (or E) closes the window straight back to the game. Typing in the search box never triggers game keys.
- **Furnace**: right-click one for a window with a **smelt** slot, a **fuel** slot and a **result** slot. Cooking takes time (8-10 seconds an item) and burns fuel: coal and charcoal last 80 seconds, logs 20, planks 15, sticks 5 (so one coal cooks eight iron). It keeps working while you walk away, glows and lights its surroundings while lit, saves with the world and spills its contents if you break it. Clicking a recipe in the list loads the furnace from your inventory (and adds just enough fuel); shift-click moves stacks in and out. A log smelts into **charcoal**. What smelts into what, and how long things burn, is data (`recipes.json` "smelting", "fuel" on items and blocks).
- **Trees and saplings**: six kinds of tree grow in the world: oak, apple trees (their leaves carry red apples), birch, spruce (a pointed spire on high ground), tall oaks and low bushes, each with its own bark and leaf colours and its own places to grow (`worldgen.json` "trees"). Breaking leaves has a **15% chance of a stick** and a **10% chance of a sapling** of that tree; **apples only drop from apple trees' leaves (15%)**. Plant a sapling on grass or dirt and it grows into a tree after a while if it has room (an oak sapling may become an oak, a tall oak or a bush). Felled trees drop saplings and sticks the same way. Worlds saved before this keep their old oak trees in chunks you had already edited.
- **Equipment**: the inventory window has seven equipment slots: **helmet, chestplate, leggings, boots, shield, backpack and quiver**. Click an item then the slot, or shift-click the item to wear it (shift-click the slot to take it off); only the right kind of item fits. Each piece of armor gives **armor points** (shown as shields above the health bar), and each point takes 4% off the damage of a fall (up to 20 points; starvation ignores armor). The **iron set** (helmet 5 ingots, chestplate 8, leggings 7, boots 4, shield 1 ingot + 6 planks, all at a crafting table) gives 2 + 6 + 5 + 2 + 2 = 17 points. A **backpack** (6 wheat + 2 sticks) adds 9 inventory slots while worn and cannot come off while those slots hold things. The **shield slot doubles as an offhand**: put **torches** in it (a whole stack) and press **G** to place one where you look. A torch in the offhand slot or selected on the hotbar lights the cell you stand in as if it were placed there, so it follows you through dark caves. The **quiver** has its slot and recipe but nothing to hold yet: there are no bows. Everything you wear drops when you die.
- **Tools wear out faster now** (wood 30 uses, stone 66, iron 125) and **three times as fast on blocks they are not made for** (a pickaxe on dirt, a shovel on stone: `game.json` -> `tools.wrongToolWear`).
- **Ores glow faintly** (the `glow` of a block, 0-1) so coal and iron stand out in dark caves without lighting the room. A lit **furnace's fire flickers** and so do **torch flames** (animated tiles, `textures.json` "animations").
- **Swimming**: hold forward and jump against a bank and you hop out of the water onto it.
- **Tools** are chunky (extruded 3.4 pixels deep) and held handle-down at the lower right with the head up and forward; swinging pivots the whole tool about your hand so the head comes down onto the block.
- **Music**: the soundtrack is generated live from `data/music.json`. Six in-game tracks (Meadow, Lantern Light, Slow Tide, Hearthside, Deep Stone, Morning Light) with different tempos, keys and instruments play in a shuffled order: every track once before any repeats, never the same one twice in a row, with a short silence between them. The title screen plays its own theme on a loop and the music fades over when you start a world. **M** toggles it; the volumes are in Options.
- **Torches**: coal or charcoal + a stick makes four. Click the floor to stand one up, or a wall to hang it there (not on ceilings); breaking what it hangs on drops it. They give off light 14, and that light is **not** dimmed by night, so a torch-lit room glows warm in the dark. A lit furnace glows too.
- **Caves**: the ground is riddled with tunnels, wide caverns and the odd opening onto the surface (`worldgen.json` "caves"), so there is always somewhere dark to explore (bring torches). Worlds saved before this keep their old ground in chunks you had already edited, so nothing changes under your builds; everywhere else gets the new caves. **Iron and coal ore** show as lumps of ore set into the stone.
- **Farming**: tall grass grows in three stages (short, tall, lush) and sways in the wind (`plants.js`, wind shader in `main.js`). Larger tufts are likelier to drop seeds. Hoes (wood/stone/iron) till grass or dirt that has water within a 4-block circle (up to 4 blocks below / 1 above the soil). Wheat goes sprout -> young -> ripe on farmland; a ripe crop gives wheat plus seeds. Crops only grow in loaded chunks near you. Rivers are carved into the lowlands so there is always grass beside water.
- **Hunger and healing**: standing still costs nothing; walking drains the bar slowly, **sprinting about five times faster**, **every jump costs a little (more when sprinting)** and **mining slowly drains it** too, per block broken and for as long as you are working at one (`jumpCost`, `sprintJumpCost`, `miningCost`, `miningDrainPerSecond` in `game.json`). Bread restores 3 icons; hold right-click to eat (the food shrinks as you chew, with crumbs and juice flying off it). At 3 icons or fewer you can no longer sprint. At zero you move more slowly and **lose half a heart every 15 seconds until you die**. **Saturation** is what heals you: eating also fills a hidden reserve (the thin gold line above the hunger icons), capped at what your bar holds. Once the hunger bar is full, healing spends saturation (half a heart every 1.5 seconds, one unit each); when the reserve runs dry half an icon of hunger disappears and healing stops until you eat again. An empty reserve on its own never drains the hunger bar. A loaf of bread heals a few hearts. All tunable in `game.json` -> `hunger`; what each food gives is `food` and `saturation` on the item.
- **Shovels**: grass, dirt, sand and snow are slow to dig by hand; wood/stone/iron shovels speed this up 2x / 3.5x / 5.5x.
- **Goals tracker**: shows your latest achievement and the next two goals.
- **Persistence** (`scripts/server.js`, `src/js/storage.js`): the dev server keeps each world (seed, edits, inventory, tool wear, health, progress, position) as `worlds/<id>.json`, written atomically. API: `GET/POST /api/worlds`, `GET/POST/DELETE /api/worlds/<id>`. Without the server the game keeps the same data in the browser (IndexedDB) behind the same interface; the game picks one at startup by asking `api/ping`.
- **One instance at a time**: the server writes `.voxelcraft.lock` and refuses to start a second copy (it checks the old one really responds, so a crash never blocks you). In the browser, only one tab can run the game; a second tab shows a message instead of loading. `npm run stop` asks the server to shut down (loopback only, and it needs a header a web page can't send).

## Under the hood

- **Terrain** (`world.js`, `noise.js`): seeded Perlin fBm for continents, hills and ridged mountains; oceans, beaches, snow caps, caves, forests and ore veins. The spawn point is chosen near trees.
- **Rendering** (`mesher.js`, `chunks.js`): 16x64x16 chunks, hidden-face culling, per-vertex ambient occlusion and light levels (`light.js`), translucent water, cut-out leaves/glass, time-budgeted chunk streaming.
- **Art** (`tilegen.js`, `textures.js`, `models.js`): texture generators driven by `textures.json`; held tools and dropped items are extruded from their sprite pixels like Minecraft's.
- **Registry** (`registry.js`): loads the JSON, checks every cross-reference, resolves names to ids; `blocks.js` / `items.js` build the engine tables from it.
- **Startup** (`startup.js`, `pixelfont.js`): the logo, title scene and world selection run before the game loads.
- **Music** (`music.js`, `audio.js`): the playlist and per-bar note planning are pure logic (tested in Node); `audio.js` turns the notes into piano, bell, pluck, pad, strings, bass and drone voices.
- **Sky** (`sky.js`) and **audio** (`audio.js`): 8-minute day/night cycle; generative piano-and-pad score and synthesized sound effects.

## Ideas for next steps

Grid-based crafting, mobs, chests, more light sources, multiplayer over WebSockets, chunk meshing in a Web Worker.
