# Features

A living list of what VoxelCraft can do, grouped by area. When a pull request adds, changes or removes a feature, update this
file in the same change (and add a line to [CHANGELOG.md](CHANGELOG.md)). Everything about blocks, items, recipes, loot, goals,
textures, sounds, world generation, music and game rules is data in `src/data/*.json`, described in `src/data/README.md`.

Legend: **✔** works today · **◐** partly there / limited · **✘** not built yet.

## World
| | Feature |
|---|---|
| ✔ | Endless procedural terrain from a seed: continents, lakes, beaches, rivers, snow caps |
| ✔ | **Oceans** (new worlds): warm seas with sandy shallows and gravel floors, deep ocean trenches down to y 5, frozen seas with an ice sheet, and sloping coasts |
| ✔ | **Real-world biomes** (new worlds): plains, forest, hills, mountains, desert, tundra, plus savanna (acacia trees, dry grass), jungle (huge trees, ferns), swamp (flat, muddy, pooled), taiga (spruce on podzol), badlands (red terraces with clay bands), ocean, deep ocean and frozen ocean |
| ✔ | **Flowers**: roses, dandelions, cornflowers, orange and pink tulips, alliums, oxeye daisies, ferns and dead bushes grow wild in the right biomes; pick them up, plant them on grass for the look, or make dye |
| ✔ | **Bedrock**: the bottom layer of the world cannot be dug (gives nothing, even in creative) |
| ✔ | **No ceiling**: build up to y 250 and beyond the old limit; nothing ticks above y 120 (no plant growth, no flowing water, no falling sand): a place to climb to and build for fun |
| ✔ | **Weather**: rain, thunderstorms with lightning and thunder, snow and blizzards in cold biomes, sandstorms in the heat, and rare hurricanes at sea; rain particles only fall where there is open sky, storms darken the sky, hide the sun and shorten how far you see, and the grass and leaves sway harder; the clock panel shows biome and weather |
| ✔ | Villages in new worlds: a well, dirt roads, houses with glass windows, doors and stair roofs, wheat farms, lamp posts, different every time |
| ✔ | **Five to seven villagers per village (new worlds), each with a house of their own and a bed** in it; at night they open their own door, go in, lie down and sleep, and get up at dawn |
| ✔ | **Villager quests**: right-click a villager to see the job they have for you (bring items, or defeat monsters), **accept or decline** it and hand it in for a reward; the harder the job (easy, medium, hard) the better the loot pool |
| ✔ | **Animals**: cows (beef, leather), pigs (porkchops) and sheep (wool, lamb chops, and shearing) wander in herds on grass, graze, run when hurt, and are saved with the world |
| ✔ | **Monsters**: zombies, skeletons (they shoot arrows) and spiders appear only where the light level is below 6 (night, caves), never too many at once, never close, never in villages; they attack when they see you, burn away in daylight, drop loot of their own and give experience |
| ✔ | Stairs (planks, cobblestone, brick; half-block steps you walk up), openable doors, glass (smelted from sand), dirt paths |
| ✔ | Biomes: flat plains, forests, rolling hills, tall mountains, deserts and snowy tundra, each with its own ground and trees (new worlds; playing worlds keep their terrain) |
| ✔ | Biome-style variety of trees: oak, apple, birch, spruce, tall oak, bush; forests and clearings |
| ✔ | Caves: winding tunnels, wide caverns and openings onto the surface; coal and iron ore veins |
| ✔ | Flowing water that spreads over level ground and pours down slopes; sources and streams that retreat |
| ✔ | Animated water: the surface ripples |
| ✔ | Grass that spreads onto dirt; tall grass with three growth stages and wind sway |
| ✔ | Day and night cycle with a round sun, a lit 3D moon with 8 phases, twinkling stars and volumetric clouds |
| ✔ | Light levels 0–15: sealed rooms and deep tunnels are dark, torches and lit furnaces give light, held torches follow you |
| ✔ | Several worlds, each with its own seed, mode and save; create, play and delete from the world list |
| ✘ | Nether / other dimensions, multiplayer |

## Survival
| | Feature |
|---|---|
| ✔ | Start with nothing: punch trees, craft, mine, farm, smelt, forge |
| ✔ | Health (10 hearts), fall damage from 4 blocks, armor that softens falls and monster blows, death drops everything and respawns you at the bed you last slept in (or the world spawn) |
| ✔ | **Air**: a row of bubbles over the hunger bar under water; when it is gone you take damage every second until you surface |
| ✔ | **Fighting**: swords hit hardest, then hammers and axes, then other tools, then bare hands; better metals hit harder; hits knock creatures back and wear the weapon; a cooldown between blows |
| ✔ | **Experience** from monsters (a bar and level by the hotbar), kept for the armour and tool augments to come |
| ✔ | **Beds and sleep**: right-click a bed to set your respawn point and sleep (day becomes night, night becomes day); not with a monster near; breaking the bed sends your respawn back to the world spawn |
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
| ✔ | **Building pieces**: stairs in nine materials, ten slabs for floors and steps, roof tiles (red and slate) with matching stairs and slabs, floor tiles, plaster, stone bricks, sandstone, birch and spruce planks, stone / wood / brick columns, framed windows and glass panes (they turn to fit the way you face), wooden and iron doors |
| ✔ | **Hammers** (wood, stone, iron): a heavy tool that mines stone like a pickaxe, slower, and breaks the 3x3 patch of stone around the block you hit |
| ✔ | **Beds** in four sizes (single, double, queen, king) and eight colours; dye comes from flowers; breaking a bed hands the whole bed back |
| ✔ | **Chests** in three tiers (chest, iron chest, vault) with more slots and stacks bigger than your pockets (up to 1024 of a block); upgrade items turn one into the next and keep what is inside; crafting automatically uses the items in chests within 10 blocks |

## Crafting and items
| | Feature |
|---|---|
| ✔ | Inventory (36 slots + backpack), hotbar, drag, split, shift-click, throw |
| ✔ | Recipe book per window (hand, crafting table, furnace) as one list with search and a "craftable only" filter, hover pop-outs |
| ✔ | Furnace with smelt, fuel and result slots, real cooking time, fuel burn times, lit look and light |
| ✔ | Equipment slots: helmet, chestplate, leggings, boots, shield (also the offhand for torches: a torch there is held in the left hand and lights the way; shift-click sends torches there), backpack, quiver |
| ✔ | Iron tools and armor set; backpack adds 9 slots |
| ✔ | Swords, hammers, shears; raw beef, porkchops and lamb chops cooked in the furnace; leather, bones, string, rotten flesh; wool from string; dyes from flowers |
| ◐ | Quiver and shield have slots and items but nothing to use them on yet |

## Look and sound
| | Feature |
|---|---|
| ✔ | All textures and item sprites are generated or drawn in code/data: no downloaded art |
| ✔ | Chunky three-dimensional held tools with a swing animation; flickering furnace and torch flames |
| ✔ | Smooth lighting with ambient occlusion; sky light and warm untinted block light |
| ✔ | Fold the clock panel and the goals with a tap; a gear on the clock panel switches parts of the HUD on and off and lets you drag the panels where you like |
| ✔ | Full Screen button on the title screen (explains the home-screen way on an iPhone) |
| ✔ | HUD size setting (hotbar, hearts, map, goals), larger by default on phones; the goals show on phones too |
| ✔ | Hotbar size and touch button size settings, smaller by default on phones |
| ✔ | Full-screen map (tap the minimap, or press **M**): drag, zoom, remembers the ground you have left |
| ✔ | **A visible arm and hand** that holds whatever is selected (block, tool, food) and swings, bobs and lifts it to your mouth; a left arm when a torch is in your off hand |
| ✔ | Creatures built from boxes with walking animation, a red flash when hit and tipping over when defeated; cows, pigs and sheep are painted with patches, faces, hooves, horns, ears and tails |
| ✔ | Flowers and other flat plants are drawn flat on the ground, in your hand and in the inventory |
| ✔ | Tree leaves rustle in the wind like the grass |
| ✔ | Circular minimap with compass, real clock, game clock and coordinates; "what you are looking at" HUD |
| ✔ | Generated music: six in-game tracks in shuffled order and a looping title theme; generated sound effects |
| ✔ | Developer logo, animated title screen (showing the version), world selection |

## Controls and settings
| | Feature |
|---|---|
| ✔ | Mouse and keyboard with fully remappable keys; mouse sensitivity, field of view (the menus fade away while you adjust it, so you see the result), invert Y, raw input, volumes |
| ✔ | Esc closes windows, pauses and resumes |
| ✔ | **Touch controls** on phones and tablets, chosen automatically (and switchable in Options): a fixed analog joystick at the bottom left (it never sprints), drag-to-look from anywhere, symbol buttons for attack / dig / mine, interact / use, jump, sprint, crouch, fly and pause, and a loot bag button on the hotbar for the inventory; the joystick and every button can be dragged to where you like in a layout window (Options), with a reset to the defaults |
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
