# Features

A living list of what VoxelCraft can do, grouped by area. When a pull request adds, changes or removes a feature, update this
file in the same change (and add a line to [CHANGELOG.md](CHANGELOG.md)). Everything about blocks, items, recipes, loot, goals,
textures, sounds, world generation, music and game rules is data in `src/data/*.json`, described in `src/data/README.md`.

Legend: **✔** works today · **◐** partly there / limited · **✘** not built yet.

## World
| | Feature |
|---|---|
| ✔ | Endless procedural terrain from a seed: continents, hills, ridged mountains, oceans, beaches, rivers, snow caps |
| ✔ | Biome-style variety of trees: oak, apple, birch, spruce, tall oak, bush; forests and clearings |
| ✔ | Caves: winding tunnels, wide caverns and openings onto the surface; coal and iron ore veins |
| ✔ | Flowing water that spreads over level ground and pours down slopes; sources and streams that retreat |
| ✔ | Grass that spreads onto dirt; tall grass with three growth stages and wind sway |
| ✔ | Day and night cycle with a round sun, a lit 3D moon with 8 phases, twinkling stars and volumetric clouds |
| ✔ | Light levels 0–15: sealed rooms and deep tunnels are dark, torches and lit furnaces give light, held torches follow you |
| ✔ | Several worlds, each with its own seed, mode and save; create, play and delete from the world list |
| ✘ | Mobs, villages, nether / other dimensions, multiplayer |

## Survival
| | Feature |
|---|---|
| ✔ | Start with nothing: punch trees, craft, mine, farm, smelt, forge |
| ✔ | Health (10 hearts), fall damage from 4 blocks, armor that softens falls, death drops everything and respawns you at spawn |
| ✔ | Hunger with sprint, jump and mining costs, no sprinting when very hungry, starvation that can kill |
| ✔ | Saturation: eating fills a hidden reserve that heals you once the hunger bar is full |
| ✔ | Eating animation with crumbs and juice |
| ✔ | Goals tracker that walks you through the first steps |
| ✔ | Creative mode: block palette, unlimited blocks, flying |
| ✔ | Crouching (no walking off edges), sprinting, step-assist, swimming and hopping out of the water |

## Blocks and building
| | Feature |
|---|---|
| ✔ | Mining with exact timing and crack animation; tool tiers (wood, stone, iron); tools wear out, faster on the wrong block |
| ✔ | Placing blocks, falling sand and gravel-type blocks, plants that uproot when their soil goes |
| ✔ | Trees fall over when a log is cut, shatter into logs and leaf loot; saplings regrow trees |
| ✔ | Farming: hoes, farmland that is damp near water and dries out, seeds, wheat, bread |
| ✔ | Torches on floors and walls (drop when what they hang on is removed) |
| ✔ | Ores glow faintly in the dark |

## Crafting and items
| | Feature |
|---|---|
| ✔ | Inventory (36 slots + backpack), hotbar, drag, split, shift-click, throw |
| ✔ | Recipe book per window (hand, crafting table, furnace) as one list with search and a "craftable only" filter, hover pop-outs |
| ✔ | Furnace with smelt, fuel and result slots, real cooking time, fuel burn times, lit look and light |
| ✔ | Equipment slots: helmet, chestplate, leggings, boots, shield (also the offhand for torches), backpack, quiver |
| ✔ | Iron tools and armor set; backpack adds 9 slots |
| ◐ | Quiver and shield have slots and items but nothing to use them on yet |

## Look and sound
| | Feature |
|---|---|
| ✔ | All textures and item sprites are generated or drawn in code/data: no downloaded art |
| ✔ | Chunky three-dimensional held tools with a swing animation; flickering furnace and torch flames |
| ✔ | Smooth lighting with ambient occlusion; sky light and warm untinted block light |
| ✔ | Circular minimap with compass, real clock, game clock and coordinates; "what you are looking at" HUD |
| ✔ | Generated music: six in-game tracks in shuffled order and a looping title theme; generated sound effects |
| ✔ | Developer logo, animated title screen (showing the version), world selection |

## Controls and settings
| | Feature |
|---|---|
| ✔ | Mouse and keyboard with fully remappable keys; mouse sensitivity, field of view, invert Y, raw input, volumes |
| ✔ | Esc closes windows, pauses and resumes |
| ✔ | **Touch controls** on phones and tablets, chosen automatically (and switchable in Options): floating analog move stick, drag-to-look, Break / Use / Jump / Run / Sneak / Fly / Torch / Bag / Pause buttons, hotbar by tap |
| ✔ | Touch inventory: tap to pick up and place, with a mode button for split / place one and quick move / wear, and a close button |
| ✔ | Screens scale to fit small displays (HUD, inventory, options, menus), respect notches and safe areas, and ask for landscape |
| ◐ | Controllers / gamepads are not supported |

## Install and hosting
| | Feature |
|---|---|
| ✔ | Runs from GitHub Pages (or any static host) as a flat set of files in the repository root; no server needed |
| ✔ | Installable web app (PWA): home-screen / desktop icon, full-screen landscape, own window |
| ✔ | Works offline after the first visit; checks for a new version every time it opens and reloads into it from the title screen (in a world it waits until you quit to the title) |
| ✔ | Worlds saved in the browser (IndexedDB) with a request for persistent storage; warns if the browser cannot keep them |
| ✔ | Node dev server saves worlds as files instead (`npm start`) |
| ◐ | No cloud saves or sharing worlds between devices yet (copy the files from `worlds/` when using the dev server) |

## Under the hood
| | Feature |
|---|---|
| ✔ | Content as data (JSON) with validation that explains mistakes; `npm run validate` |
| ✔ | Pure-logic modules tested in Node (`npm test`): world generation, lighting, physics, furnaces, hunger, music, inventory, saves |
| ✔ | Node dev server with one-instance lock, `npm run stop`, and a multi-world save API |
| ✔ | `npm run build` bundles the game (three.js, code and all content) into one `app.js` and writes the PWA files; `build:check` and CI keep the committed build current |
