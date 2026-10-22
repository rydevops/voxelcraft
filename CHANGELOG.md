# Changelog

All notable changes to VoxelCraft are listed here, newest first. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [semantic versioning](https://semver.org/).
Every pull request that changes how the game plays, looks or is built adds a line under **Unreleased**; when a version is
released those lines move under a new version heading. The list of everything the game can do is in [FEATURES.md](FEATURES.md).

## [Unreleased]

### Changed
- The sun is now a round, glowing disc (like the moon is round) that always faces you, with a soft warm halo that fades at sunset, instead of a flat square.

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
