# Changelog

All notable changes to VoxelCraft are listed here, newest first. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [semantic versioning](https://semver.org/).
Every pull request that changes how the game plays, looks or is built adds a line under **Unreleased**; when a version is
released those lines move under a new version heading. The list of everything the game can do is in [FEATURES.md](FEATURES.md).

## [Unreleased]

### Added
- **Smaller hotbar and buttons on a phone, and settings for both.** Options has a new **Hotbar size** slider (40-150%: the hotbar, hearts and loot bag) and, on touch devices, a **Touch button size** slider (50-150%: the joystick, buttons and their icons). They start at 75% and 80% on a touch device and 100% elsewhere, so the controls take up less of a small screen.
- **Fold, hide and move the HUD.** Tap the clock panel or the goals to fold them down to one line (and tap again to open): more room to see on a phone. A **gear** on the clock panel opens a window to switch each part on or off (minimap, real-world time, game time, time of day, coordinates, goals) and to drag the panels wherever you like. It is all remembered, with a Reset.
- **Full Screen button** on the title screen. On an iPhone, where Safari has no full-screen mode for web pages, it shows how to add the game to the home screen instead. It is hidden in the installed app, which already is full screen.
- **Villages and villagers.** New worlds have villages on flat ground in plains, forests and deserts: a well where two dirt roads cross, houses with glass windows, doors and gabled stair roofs, wheat farms and lamp posts, each village different but always the same when you come back. Villagers (farmer, blacksmith, librarian, cleric, mason) wander about, look at you, and say something when you right-click or use them. *Welcome to <village>* appears when you walk in, and there are two new goals (find a village, talk to a villager). Older worlds are left exactly as they were.
- **Stairs, doors and paths.** Oak, cobblestone and brick **stairs** (6 blocks make 4; they face the way you place them, and you walk up them without jumping), a wooden **door** (6 planks make 3; right-click to open and close, it is two blocks tall) and a **dirt path** block. Glass was already smelted from sand in a furnace and still is. The look-at panel and inventory show proper stair and door icons.
- **Look while holding a button.** On a touch device a finger resting on any on-screen button (Break, Use, Jump, Run, Sneak...) can drag to turn the camera, so you can keep mining or placing while you look around. The button stays pressed until the finger lifts; a plain tap does not turn the camera.
- **Biomes.** The land is now plains, forests, hills, mountains, deserts and tundra, each a few hundred blocks wide. Plains and forests are very flat, hills roll, mountains are tall with bare rock and snow caps, deserts are sand with low dunes and no trees, tundra is snowy with spruces. Climate (temperature, wetness, relief) picks the biome; it is all data in `worldgen.json` "biomes". **New worlds only:** worlds you were already playing keep their original terrain so your builds do not change.
- **Full-screen map.** Tap the minimap (or press **N**) for a map of everything you have seen, with your arrow. Drag to move, scroll or pinch to zoom, *Find me* to come back. The map remembers ground you have walked away from.
- **Tree leaves rustle** in the wind, the same wind that sways the grass.
- **A torch in the shield slot is held in your left hand**, and shift-clicking torches (or the *quick move / wear* tap mode) sends the whole stack there.
- **Move the touch controls.** On a phone or tablet, *Options > Move the touch controls...* (from the pause menu, in a world) lets you drag every button wherever suits your thumbs. Buttons stay on screen, **Reset** puts them back, and the layout is saved and kept when you turn the phone.
- **HUD size** slider in Options (70-180%) for the hotbar, hearts, minimap, clock and goals; it starts at 130% on a touch device. The screen shows the world while you adjust it, like the field of view.
- **Animated water.** The water surface ripples: eight frames of the wave texture play in a loop (also on the title screen). It is data: `waves` textures take a `seed` and a `phase`, and `water` is listed under `animations` in `textures.json`.
- **The version is shown on the title screen** (bottom left), e.g. `v1.0.0-8726a41cae`: the package version plus the build.

### Changed
- **Longer days and nights.** Daytime (6:00 to 18:00 on the in-game clock) now lasts 10 real minutes and the night lasts another 10, so a full day is 20 minutes instead of 8. It is `time.dayLengthSeconds` in `game.json`.
- **Touch buttons rearranged for the right thumb.** Attack (pickaxe) sits in the bottom-right corner with use (hand) right above it, jump beside them, and sprint and crouch a little further out, in an arc the thumb sweeps easily. The joystick stays on the left and the pause button where it was.
- **New touch controls.** The joystick is now fixed in the bottom left corner instead of floating, and the buttons show symbols instead of words: a pickaxe (attack, dig, mine), a hand (interact, use), an up arrow (jump), a lightning bolt (sprint), a down arrow (crouch), wings (fly, creative) and pause bars. The inventory is a loot bag button attached to the right of the hotbar (it replaces the *Bag* button). The hotbar and loot bag shrink on small screens so they always fit between the joystick and the action buttons.
- **Moving the controls** now includes the joystick, and the editor is a *Move the controls* window with **Reset** and **Done** (Done returns to Options). *Options -> Reset controls to default* puts everything back without opening the editor.
- **The Torch button is gone** from the touch controls: put torches in the shield slot and they light your way by themselves (the layout editor forgets the old button).
- **The goals are back on phones.** The Goals panel had been hidden on any phone held sideways (a screen shorter than 520 px). It now sits top left under the menu buttons, in larger text, and the minimap is smaller with the real-time row left out so everything fits.
- **Adjusting the field of view shows the world.** While you drag the Field of view slider (or use the arrow keys on it) the pause menu and the rest of Options fade away, so you see the view you paused in with the new angle immediately; they return a moment after you let go. The title screen's fly-around follows the field of view too.
- **Updates load by themselves.** Every time the app is opened or brought back to the front it checks for a newer version; if one is found while you are on the title screen the game reloads into it at once. In a world it waits and tells you, and the update loads when you quit to the title. The service worker also fetches new files past the browser's HTTP cache, so an update never caches stale copies.

### Fixed
- **The joystick no longer sprints.** Pushing it to the rim used to switch sprint on by itself; now sprinting is only the sprint button, which you tap on and off.
- **Dragging a finger on empty screen always turns the camera.** A finger that starts on the minimap, the clock panel, the goals or the hotbar now turns the camera as soon as it moves (a plain tap still does what it did), and a touch whose lift was never reported can no longer leave the joystick, look area or a button stuck.
- **Saturation only goes down when it heals you.** Walking, sprinting and mining used to drag the hidden saturation reserve down with the hunger bar; now they only cost hunger, and the reserve is spent on healing and nothing else.
- **The real-life clock is back on phones.** The minimap panel had dropped its "Real time" row on touch screens; both clocks show again.
- **Save & Quit to Title no longer gets stuck on "Saving..."** on an iPhone / iPad. Safari there has no Pointer Lock API, and the game called it without checking, which threw an error before the save finished. The same call is now guarded everywhere (it also left the inventory and map open with the game still running, and the death screen with the game still running). Save & Quit also catches any failure and gives a stalled save only a few seconds, so it can never trap you.

## [1.0.0]

VoxelCraft is now an installable web app (a PWA) that runs straight from GitHub Pages, on a computer or on a phone or tablet.

### Added
- **Installable and offline.** A web app manifest and a service worker let you install the game ("Install" in Chrome / Edge, "Add to Home Screen" on phones) and play with no network. It opens full screen in landscape, and a new version is picked up automatically (a message tells you to reload).
- **Touch controls** on phones and tablets: a floating move stick (push it to the rim to sprint), drag anywhere on the right to look, and buttons for Break, Use, Jump, Run, Sneak, Fly (creative), Torch (offhand), Bag (inventory) and Pause. In the inventory a button chooses what a tap does: pick up / place, split / place one, or quick move / wear. A close button leaves the window. Touch controls switch on by themselves on a touch device and can be turned on or off in Options (`?touch` and `?desktop` in the address force either).
- **Screens fit small displays**: the hotbar, hearts, minimap, inventory, options and menus scale down to fit a phone, honour the notch and rounded corners, and a "turn your device sideways" message shows in portrait.
- **Worlds are saved in the browser** (IndexedDB) when there is no server, so the installed / hosted game keeps your worlds. The Node dev server still saves them as files in `worlds/`.
- `npm run build` turns the source into the flat web app in the repository root (`index.html`, `app.js`, `style.css`, `manifest.webmanifest`, `sw.js`, icons); `npm run build:check` verifies it is up to date and `npm run preview` serves it the way GitHub Pages does.
- An app icon (a grass block) in all the sizes browsers and phones ask for, drawn by the build with no image files in the source.
- A GitHub Actions workflow that runs the tests and checks the built app on every pull request.
- CHANGELOG.md and FEATURES.md.

### Changed
- **Project layout:** the game source moved from `public/` to `src/`, the dev server to `scripts/server.js`. The repository root now holds the built app as a flat set of files with no folders (what GitHub Pages serves); source, scripts and tests stay in folders.
- The pause menu no longer mentions Esc on touch devices, and "Quit Game" is only shown when there is a dev server to stop.
- The sun is now a round, glowing disc (like the moon is round) that always faces you, with a soft warm halo that fades at sunset, instead of a flat square.
- Analog movement: the move stick walks at the speed the stick is pushed.

## [0.12.0]

### Changed
- Tool art redrawn as hand-made pixel art in the classic style (pickaxe, axe, shovel, hoe), with the axe and shovel copied from reference sprites. The held axe is turned blade-down and the held shovel has a bigger blade.
- Falling now hurts from 4 blocks instead of 3.
- Hunger: sprinting drains the bar about five times faster than walking, every jump costs a little (more when sprinting), and mining drains it slowly.

### Fixed
- The furnace window no longer flickers when one piece of fuel runs out and the next lights.

## [0.11.0]

### Added
- Six kinds of tree (oak, apple, birch, spruce, tall oak, bush) and saplings that regrow them; leaves drop sticks (15%) and saplings (10%); apples only drop from apple-tree leaves (15%).
- Ores glow faintly so they are easy to spot in dark caves.
- Furnace and torch flames flicker (animated tiles).
- Torches can be held in the shield slot, which acts as an offhand (press G to place one). A torch held in the hand or offhand lights the area around the player.

### Changed
- Tools wear out faster, and three times as fast on blocks they are not made for.

### Fixed
- You can hop out of the water onto a bank by holding jump.
- Placing a block at the top of the world no longer uses the block up.
- Items dropped on death are no longer picked up again while on the death screen.

## [0.10.0]

### Added
- Equipment slots (helmet, chestplate, leggings, boots, shield, backpack, quiver), an iron armor set, a backpack that adds nine inventory slots, and an armor bar.
- A soundtrack of six generated tracks played in shuffled order, and a looping title theme.
- Saturation: eating fills a hidden reserve that heals you once the hunger bar is full.
- Chunkier, more three-dimensional tools held with a swinging animation.

### Fixed
- The options screen no longer shows the title screen's buttons on top of it.
- The title screen always shows the land (it was drifting into night and sky-only views).

## [0.9.0]

### Added
- Crouching (Shift; Tab now sprints), hunger rules (no sprinting when very hungry, starvation costs half a heart every 15 seconds), death drops and respawn.
- Eating animation with juice and crumbs, hurt flash and camera bounce on a hard landing.
- Caves: wide caverns and openings to the surface. Ores look like lumps set into the stone and iron ore drops raw iron.
- Torches (floor and wall), glowing and untinted by night, hanging on blocks.
- A real furnace with input, fuel and result slots that smelts over time and glows while lit.
- A single recipe list with search and a "craftable only" filter.

### Changed
- The minimap shows light blue shallow water and dark blue deep water.

### Fixed
- The food bar now fills completely; standing still no longer uses hunger.

## [0.8.0]

### Added
- Instant item tooltips, falling sand with animation, light levels (dark tunnels and sealed rooms), damp farmland that dries out, Esc to resume from the pause menu and a Save & Quit button.
- A developer logo screen, an animated title screen and a world selection screen (create, play, delete), with one save file per world.

## [0.7.0]

### Added
- A circular compass-style minimap with real-time clock, game clock and coordinates.

### Fixed
- A tree held up by a neighbouring log no longer falls until it would float.
- The health and food bars no longer overlap.

## [0.6.0]

### Changed
- All content (blocks, items, loot, recipes, goals, textures, sounds, world generation, game rules) moved into JSON files under `data/`.
- Felled trees shatter into logs and leaf loot that can be picked up.

## [0.5.0]

### Added
- Health, fall damage, step-assist, flowing water, grass that spreads, trees that fall when a log is cut, volumetric clouds, a 3D moon with phases, twinkling stars and a "what you are looking at" HUD.
- Only one copy of the game can run at a time, and `npm run stop` stops it.

## [0.4.0]

### Added
- Burning logs into charcoal, per-station recipe books, and recipe pop-outs that show what is missing.

### Fixed
- Esc closes the inventory and crafting windows without opening the pause menu; block breaking and its crack animation now share one exact timer.

## [0.3.0]

### Added
- An options screen with mouse sensitivity and a key binding editor, shovels, hoes, farmland, seeds, wheat, bread and three-stage animated grass.

## [0.2.0]

### Added
- Survival mode: an empty start, an inventory, crafting, tools and goals.

## [0.1.0]

### Added
- First prototype: procedurally generated terrain with caves, oceans, snow and trees; textured chunk meshing with ambient occlusion; water; a day and night cycle; generated pixel-art textures; generated music and sound effects; breaking and placing blocks; saving the world.

[Unreleased]: https://github.com/rydevops/voxelcraft/compare/v0.12.0...HEAD
[0.12.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.12.0
[0.11.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.11.0
[0.10.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.10.0
[0.9.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.9.0
[0.8.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.8.0
[0.7.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.7.0
[0.6.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.6.0
[0.5.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.5.0
[0.4.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.4.0
[0.3.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.3.0
[0.2.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.2.0
[0.1.0]: https://github.com/rydevops/voxelcraft/releases/tag/v0.1.0
