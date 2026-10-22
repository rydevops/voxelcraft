globalThis.__VOXELCRAFT_CONTENT__={"blocks":{"_comment":"Every block in the game. See data/README.md for the fields. ids must be unique (1-255) and never change once worlds exist.","blocks":[{"id":1,"key":"grass","name":"Grass Block","tiles":{"top":"grass_top","bottom":"dirt","side":"grass_side"},"hardness":1,"tool":"shovel","sound":"grass","creative":true,"tillsInto":"farmland","spreadsOnto":"dirt","loot":"grass"},{"id":2,"key":"dirt","name":"Dirt","tiles":{"top":"dirt","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","creative":true,"tillsInto":"farmland"},{"id":3,"key":"stone","name":"Stone","tiles":{"top":"stone","bottom":"stone","side":"stone"},"hardness":3,"tool":"pickaxe","need":1,"sound":"stone","creative":true,"loot":"stone"},{"id":4,"key":"sand","name":"Sand","tiles":{"top":"sand","bottom":"sand","side":"sand"},"hardness":0.9,"tool":"shovel","sound":"sand","creative":true,"gravity":true},{"id":5,"key":"log","name":"Oak Log","tiles":{"top":"log_top","bottom":"log_top","side":"log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":6,"key":"leaves","name":"Leaves","tiles":{"top":"leaves","bottom":"leaves","side":"leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"leaves","shatterLoot":"leaves_shatter","creative":true,"lightFilter":1},{"id":7,"key":"planks","name":"Oak Planks","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","creative":true,"fuel":15},{"id":8,"key":"water","name":"Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":7},"lightFilter":2},{"id":9,"key":"cobble","name":"Cobblestone","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":10,"key":"glass","name":"Glass","tiles":{"top":"glass","bottom":"glass","side":"glass"},"hardness":0.35,"sound":"glass","opaque":false,"loot":"glass","creative":true},{"id":11,"key":"brick","name":"Bricks","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":12,"key":"snow","name":"Snowy Grass","tiles":{"top":"snow_top","bottom":"dirt","side":"snow_side"},"hardness":0.7,"tool":"shovel","sound":"snow","loot":"snow","creative":true},{"id":13,"key":"coal_ore","name":"Coal Ore","tiles":{"top":"coal_ore","bottom":"coal_ore","side":"coal_ore"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","loot":"coal_ore","creative":true,"glow":0.22},{"id":14,"key":"iron_ore","name":"Iron Ore","tiles":{"top":"iron_ore","bottom":"iron_ore","side":"iron_ore"},"hardness":5,"tool":"pickaxe","need":2,"sound":"stone","creative":true,"glow":0.22},{"id":15,"key":"crafting","name":"Crafting Table","tiles":{"top":"crafting_top","bottom":"planks","side":"crafting_side"},"hardness":1.6,"tool":"axe","sound":"wood","opens":"table","creative":true},{"id":16,"key":"furnace","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","creative":true},{"id":17,"key":"farmland","name":"Dry Farmland","tiles":{"top":"farmland_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","creative":true,"hydration":{"wet":"farmland_wet","decay":{"into":"dirt","chancePerSecond":0.012}}},{"id":18,"key":"grass_s","name":"Short Grass","tiles":{"top":"grass_s","bottom":"grass_s","side":"grass_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.35,"growth":{"next":"grass_m","chancePerSecond":0.008333333333333333,"soil":"grass"},"stage":{"label":"Grass","step":1,"name":"Short"}},"loot":"grass_s"},{"id":19,"key":"grass_m","name":"Tall Grass","tiles":{"top":"grass_m","bottom":"grass_m","side":"grass_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.6,"growth":{"next":"grass_l","chancePerSecond":0.0058823529411764705,"soil":"grass"},"stage":{"label":"Grass","step":2,"name":"Tall"}},"loot":"grass_m"},{"id":20,"key":"grass_l","name":"Lush Grass","tiles":{"top":"grass_l","bottom":"grass_l","side":"grass_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.9,"stage":{"label":"Grass","step":3,"name":"Lush","ripe":true},"spreads":{"block":"grass_s","chancePerSecond":0.002,"onto":"grass","range":2}},"loot":"grass_l"},{"id":21,"key":"wheat_s","name":"Wheat Sprout","tiles":{"top":"wheat_s","bottom":"wheat_s","side":"wheat_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.3,"growth":{"next":"wheat_m","chancePerSecond":0.025,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":1,"name":"Sprout","crop":true}},"loot":"wheat_s"},{"id":22,"key":"wheat_m","name":"Young Wheat","tiles":{"top":"wheat_m","bottom":"wheat_m","side":"wheat_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.6,"growth":{"next":"wheat_l","chancePerSecond":0.01818181818181818,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":2,"name":"Growing","crop":true}},"loot":"wheat_m"},{"id":23,"key":"wheat_l","name":"Ripe Wheat","tiles":{"top":"wheat_l","bottom":"wheat_l","side":"wheat_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.9,"stage":{"label":"Wheat","step":3,"name":"Ripe","ripe":true,"crop":true}},"loot":"wheat_l"},{"id":24,"key":"flow1","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":1},"lightFilter":2},{"id":25,"key":"flow2","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":2},"lightFilter":2},{"id":26,"key":"flow3","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":3},"lightFilter":2},{"id":27,"key":"flow4","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":4},"lightFilter":2},{"id":28,"key":"flow5","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":5},"lightFilter":2},{"id":29,"key":"flow6","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":6},"lightFilter":2},{"id":30,"key":"farmland_wet","name":"Moist Farmland","tiles":{"top":"farmland_wet_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","hydration":{"dry":"farmland"}},{"id":31,"key":"torch_floor","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75},"support":[0,-1,0]},{"id":32,"key":"torch_e","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[1,0]},"support":[-1,0,0]},{"id":33,"key":"torch_w","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[-1,0]},"support":[1,0,0]},{"id":34,"key":"torch_s","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,1]},"support":[0,0,-1]},{"id":35,"key":"torch_n","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,-1]},"support":[0,0,1]},{"id":36,"key":"furnace_lit","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side_lit"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","light":13},{"id":37,"key":"birch_log","name":"Birch Log","tiles":{"top":"birch_log_top","bottom":"birch_log_top","side":"birch_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":38,"key":"spruce_log","name":"Spruce Log","tiles":{"top":"spruce_log_top","bottom":"spruce_log_top","side":"spruce_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":39,"key":"birch_leaves","name":"Birch Leaves","tiles":{"top":"birch_leaves","bottom":"birch_leaves","side":"birch_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"birch_leaves","shatterLoot":"birch_leaves_shatter","creative":true,"lightFilter":1},{"id":40,"key":"spruce_leaves","name":"Spruce Leaves","tiles":{"top":"spruce_leaves","bottom":"spruce_leaves","side":"spruce_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"spruce_leaves","shatterLoot":"spruce_leaves_shatter","creative":true,"lightFilter":1},{"id":41,"key":"apple_leaves","name":"Apple Tree Leaves","tiles":{"top":"apple_leaves","bottom":"apple_leaves","side":"apple_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"apple_leaves","shatterLoot":"apple_leaves_shatter","creative":true,"lightFilter":1},{"id":42,"key":"young_oak","name":"Oak Sapling","tiles":{"top":"young_oak","bottom":"young_oak","side":"young_oak"},"hardness":0.04,"sound":"grass","loot":"young_oak","plant":{"kind":"cross","height":0.7,"grows":{"trees":["oak","oak","oak","tall_oak","bush"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Oak Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":43,"key":"young_birch","name":"Birch Sapling","tiles":{"top":"young_birch","bottom":"young_birch","side":"young_birch"},"hardness":0.04,"sound":"grass","loot":"young_birch","plant":{"kind":"cross","height":0.7,"grows":{"trees":["birch"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Birch Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":44,"key":"young_spruce","name":"Spruce Sapling","tiles":{"top":"young_spruce","bottom":"young_spruce","side":"young_spruce"},"hardness":0.04,"sound":"grass","loot":"young_spruce","plant":{"kind":"cross","height":0.7,"grows":{"trees":["spruce"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Spruce Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":45,"key":"young_apple","name":"Apple Sapling","tiles":{"top":"young_apple","bottom":"young_apple","side":"young_apple"},"hardness":0.04,"sound":"grass","loot":"young_apple","plant":{"kind":"cross","height":0.7,"grows":{"trees":["apple"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Apple Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}}]},"items":{"_comment":"Non-block items (blocks are items automatically). Tools reference a tier below. ids must not clash with any block id.","tiers":{"wood":{"level":1,"speed":2,"durability":30,"head":"wood"},"stone":{"level":2,"speed":3.5,"durability":66,"head":"stone"},"iron":{"level":3,"speed":5.5,"durability":125,"head":"iron"}},"items":[{"id":100,"key":"stick","name":"Stick","fuel":5},{"id":101,"key":"coal","name":"Coal","fuel":80},{"id":102,"key":"iron_ingot","name":"Iron Ingot"},{"id":103,"key":"wheat_seeds","name":"Wheat Seeds","plants":{"block":"wheat_s","on":["farmland","farmland_wet"]}},{"id":104,"key":"wheat","name":"Wheat"},{"id":105,"key":"bread","name":"Bread","food":6,"saturation":7.2},{"id":106,"key":"charcoal","name":"Charcoal","fuel":80},{"id":107,"key":"apple","name":"Apple","food":4,"saturation":2.4},{"id":108,"key":"raw_iron","name":"Raw Iron"},{"id":110,"key":"wood_pickaxe","name":"Wooden Pickaxe","tool":{"type":"pickaxe","tier":"wood"}},{"id":111,"key":"wood_axe","name":"Wooden Axe","tool":{"type":"axe","tier":"wood"}},{"id":112,"key":"wood_shovel","name":"Wooden Shovel","tool":{"type":"shovel","tier":"wood"}},{"id":113,"key":"stone_pickaxe","name":"Stone Pickaxe","tool":{"type":"pickaxe","tier":"stone"}},{"id":114,"key":"stone_axe","name":"Stone Axe","tool":{"type":"axe","tier":"stone"}},{"id":115,"key":"stone_shovel","name":"Stone Shovel","tool":{"type":"shovel","tier":"stone"}},{"id":116,"key":"iron_pickaxe","name":"Iron Pickaxe","tool":{"type":"pickaxe","tier":"iron"}},{"id":117,"key":"iron_axe","name":"Iron Axe","tool":{"type":"axe","tier":"iron"}},{"id":118,"key":"iron_shovel","name":"Iron Shovel","tool":{"type":"shovel","tier":"iron"}},{"id":119,"key":"wood_hoe","name":"Wooden Hoe","tool":{"type":"hoe","tier":"wood"}},{"id":120,"key":"stone_hoe","name":"Stone Hoe","tool":{"type":"hoe","tier":"stone"}},{"id":121,"key":"iron_hoe","name":"Iron Hoe","tool":{"type":"hoe","tier":"iron"}},{"id":122,"key":"torch","name":"Torch","creative":true,"places":{"up":"torch_floor","east":"torch_e","west":"torch_w","south":"torch_s","north":"torch_n"},"offhand":true},{"id":123,"key":"iron_helmet","name":"Iron Helmet","stack":1,"equip":{"slot":"helmet","armor":2}},{"id":124,"key":"iron_chestplate","name":"Iron Chestplate","stack":1,"equip":{"slot":"chestplate","armor":6}},{"id":125,"key":"iron_leggings","name":"Iron Leggings","stack":1,"equip":{"slot":"leggings","armor":5}},{"id":126,"key":"iron_boots","name":"Iron Boots","stack":1,"equip":{"slot":"boots","armor":2}},{"id":127,"key":"iron_shield","name":"Iron Shield","stack":1,"equip":{"slot":"shield","armor":2}},{"id":128,"key":"backpack","name":"Backpack","stack":1,"equip":{"slot":"backpack","slots":9}},{"id":129,"key":"quiver","name":"Quiver","stack":1,"equip":{"slot":"quiver"}},{"id":130,"key":"oak_sapling","name":"Oak Sapling","plants":{"block":"young_oak","on":["grass","dirt"]}},{"id":131,"key":"birch_sapling","name":"Birch Sapling","plants":{"block":"young_birch","on":["grass","dirt"]}},{"id":132,"key":"spruce_sapling","name":"Spruce Sapling","plants":{"block":"young_spruce","on":["grass","dirt"]}},{"id":133,"key":"apple_sapling","name":"Apple Sapling","plants":{"block":"young_apple","on":["grass","dirt"]}}]},"loot":{"_comment":"Loot tables. A block with no table (see \"loot\" in blocks.json) drops itself. entry: { item, chance (0-1, default 1), count (number or [min,max], default 1) }. An empty list drops nothing.","tables":{"grass":[{"item":"dirt"}],"snow":[{"item":"dirt"}],"farmland":[{"item":"dirt"}],"stone":[{"item":"cobble"}],"coal_ore":[{"item":"coal"}],"glass":[],"leaves":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"leaves_shatter":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"grass_s":[{"item":"wheat_seeds","chance":0.1}],"grass_m":[{"item":"wheat_seeds","chance":0.16}],"grass_l":[{"item":"wheat_seeds","chance":0.28}],"wheat_s":[{"item":"wheat_seeds"}],"wheat_m":[{"item":"wheat_seeds"}],"wheat_l":[{"item":"wheat"},{"item":"wheat_seeds"},{"item":"wheat_seeds","chance":0.5}],"iron_ore":[{"item":"raw_iron"}],"torch_floor":[{"item":"torch"}],"furnace_lit":[{"item":"furnace"}],"apple_leaves":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"apple_leaves_shatter":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"birch_leaves":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"birch_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"spruce_leaves":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"spruce_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"young_oak":[{"item":"oak_sapling"}],"young_birch":[{"item":"birch_sapling"}],"young_spruce":[{"item":"spruce_sapling"}],"young_apple":[{"item":"apple_sapling"}]}},"recipes":{"_comment":"Crafting recipes. in: [item, count] or [\"@group\", count] for any item of a group. at: the station (omit for by-hand). smelting: what a furnace turns one item into (seconds to cook one). Fuel burn times are \"fuel\" (seconds) on items and blocks.","groups":{"coals":["charcoal","coal"],"logs":["log","birch_log","spruce_log"]},"stations":{"table":{"label":"Crafting Table"}},"windows":{"hand":{"title":"Crafting","stations":[null]},"table":{"title":"Crafting Table","stations":[null,"table"]},"furnace":{"title":"Furnace","furnace":true}},"recipes":[{"out":"planks","n":4,"in":[["@logs",1]]},{"out":"stick","n":4,"in":[["planks",2]]},{"out":"crafting","n":1,"in":[["planks",4]]},{"out":"bread","n":1,"in":[["wheat",3]]},{"out":"wood_pickaxe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_axe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_shovel","n":1,"in":[["planks",1],["stick",2]],"at":"table"},{"out":"stone_pickaxe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_axe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_shovel","n":1,"in":[["cobble",1],["stick",2]],"at":"table"},{"out":"iron_pickaxe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_axe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_shovel","n":1,"in":[["iron_ingot",1],["stick",2]],"at":"table"},{"out":"wood_hoe","n":1,"in":[["planks",2],["stick",2]],"at":"table"},{"out":"stone_hoe","n":1,"in":[["cobble",2],["stick",2]],"at":"table"},{"out":"iron_hoe","n":1,"in":[["iron_ingot",2],["stick",2]],"at":"table"},{"out":"furnace","n":1,"in":[["cobble",8]],"at":"table"},{"out":"brick","n":4,"in":[["cobble",4]],"at":"table"},{"out":"torch","n":4,"in":[["@coals",1],["stick",1]]},{"out":"iron_helmet","n":1,"in":[["iron_ingot",5]],"at":"table"},{"out":"iron_chestplate","n":1,"in":[["iron_ingot",8]],"at":"table"},{"out":"iron_leggings","n":1,"in":[["iron_ingot",7]],"at":"table"},{"out":"iron_boots","n":1,"in":[["iron_ingot",4]],"at":"table"},{"out":"iron_shield","n":1,"in":[["iron_ingot",1],["planks",6]],"at":"table"},{"out":"backpack","n":1,"in":[["wheat",6],["stick",2]],"at":"table"},{"out":"quiver","n":1,"in":[["planks",3],["stick",3]],"at":"table"}],"smelting":[{"in":"raw_iron","out":"iron_ingot","seconds":10},{"in":"sand","out":"glass","seconds":8},{"in":"cobble","out":"stone","seconds":8},{"in":"log","out":"charcoal","seconds":10},{"in":"birch_log","out":"charcoal","seconds":10},{"in":"spruce_log","out":"charcoal","seconds":10}]},"goals":{"_comment":"The goals shown in the HUD, in order. Conditions: { collected: item } | { collectedAny: [items] } | { crafted: item } | { craftedAny: [items] } | { flag: \"tilled\" | \"planted\" | \"ate\" }.","goals":[{"text":"Punch a tree to collect Wood","collectedAny":["log","birch_log","spruce_log"]},{"text":"Craft Planks","crafted":"planks"},{"text":"Craft a Crafting Table","crafted":"crafting"},{"text":"Craft a Wooden Pickaxe","crafted":"wood_pickaxe"},{"text":"Mine Cobblestone","collected":"cobble"},{"text":"Craft a Stone Pickaxe","crafted":"stone_pickaxe"},{"text":"Craft a Hoe","craftedAny":["wood_hoe","stone_hoe","iron_hoe"]},{"text":"Find Wheat Seeds in the tall grass","collected":"wheat_seeds"},{"text":"Till soil within 4 blocks of water","flag":"tilled"},{"text":"Plant Wheat Seeds on farmland","flag":"planted"},{"text":"Harvest ripe Wheat","collected":"wheat"},{"text":"Bake Bread and eat it","flag":"ate"},{"text":"Find Coal","collected":"coal"},{"text":"Craft a Furnace","crafted":"furnace"},{"text":"Mine Iron Ore","collected":"raw_iron"},{"text":"Smelt an Iron Ingot","crafted":"iron_ingot"},{"text":"Craft an Iron Pickaxe","crafted":"iron_pickaxe"},{"text":"Forge a piece of Iron Armor","craftedAny":["iron_helmet","iron_chestplate","iron_leggings","iron_boots","iron_shield"]},{"text":"Wear a piece of equipment","flag":"equipped"}]},"textures":{"_comment":"Textures. tiles: block faces, in atlas order. Each tile is { type, ...params }; types: noise, capped, bark, rings, planks, cells, waves, bricks, ore, stripes, blades, stalks, pixelart (palette + rows, \".\" = transparent), image (a PNG next to this file), layers (stack of the others), ref (reuse another tile). sprites: item icons; tools are drawn automatically from their type and tier.","tiles":{"grass_top":{"type":"noise","base":[96,160,54],"noise":[{"cells":4,"amp":36}],"jitter":22,"channels":[0.6,1,0.4],"specks":{"dark":{"chance":0.07,"amount":-26},"light":{"chance":0.07,"amount":22}}},"grass_side":{"type":"capped","cap":"grass_top","body":"dirt","depth":{"min":3,"bonus":[{"chance":0.5,"amount":1},{"chance":0.25,"amount":2}]}},"dirt":{"type":"noise","base":[136,98,68],"noise":[{"cells":4,"amp":34}],"jitter":16,"channels":[1,0.8,0.6],"specks":{"dark":{"chance":0.06,"amount":-34},"light":{"chance":0.05,"amount":26}}},"stone":{"type":"noise","base":[128,128,130],"noise":[{"cells":4,"amp":38},{"cells":8,"amp":22}],"jitter":10,"specks":{"dark":{"chance":0.04,"amount":-24}}},"sand":{"type":"noise","base":[222,208,160],"noise":[{"cells":4,"amp":20}],"jitter":12,"channels":[1,1,1.1],"specks":{"dark":{"chance":0.05,"amount":-16}}},"log_side":{"type":"bark","base":[104,82,50],"channels":[1,0.8,0.6],"columnVariance":22,"jitter":12,"grooveEvery":4,"grooveDarken":22,"speckChance":0.04,"speckDarken":20},"log_top":{"type":"rings","bark":[96,74,44],"barkWidth":1.6,"light":[170,136,84],"dark":[140,108,62],"ringScale":0.9,"jitter":12},"leaves":{"type":"noise","base":[52,122,38],"noise":[{"cells":4,"amp":50}],"jitter":24,"channels":[0.5,1,0.4],"holes":0.16},"planks":{"type":"planks","base":[178,142,88],"channels":[1,0.9,0.7],"boardHeight":4,"boardVariance":22,"jitter":10,"gapDarken":38,"seamDarken":30,"grainChance":0.07,"grainDarken":14},"cobble":{"type":"cells","base":[124,124,126],"points":9,"spread":44,"jitter":12,"creviceWidth":1.25,"creviceValue":-52},"water":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9},"glass":{"type":"pixelart","palette":{"#":[210,238,245],"w":[255,255,255]},"rows":["################","#..............#","#..w...........#","#..ww.......w..#","#...ww.....w...#","#....ww........#","#.....w........#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","################"]},"brick":{"type":"bricks","brick":[150,64,50],"mortar":[186,180,168],"brickWidth":8,"rowHeight":4,"variance":22},"snow_top":{"type":"noise","base":[244,248,255],"noise":[],"jitter":14,"channels":[0.4,0.4,0]},"snow_side":{"type":"capped","cap":"snow_top","body":"dirt","depth":{"min":4,"bonus":[{"chance":0.5,"amount":1},{"chance":0.3,"amount":2}]}},"coal_ore":{"type":"ore","base":"stone","color":[26,26,30],"light":[112,112,126],"clusters":7},"iron_ore":{"type":"ore","base":"stone","color":[206,150,120],"light":[236,196,168],"clusters":7},"crafting_top":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[96,66,38]},"rows":["################","################","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","################","################"]}]},"crafting_side":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[84,58,32],"s":[200,200,205],"h":[120,120,128],"w":[150,108,60]},"rows":["################","################","################","################","++++++++++++++++","................",".........hhhh...","...sss...hhhh...","...s.s....w.....","...s.s....w.....","...sss....w.....","....s.....w.....","....s.....w.....","................","................","................"]}]},"furnace_top":{"type":"noise","base":[104,104,108],"noise":[],"jitter":14,"edge":{"width":1,"amount":-34}},"furnace_side":{"type":"layers","layers":[{"type":"ref","tile":"cobble"},{"type":"pixelart","palette":{"d":[26,24,26],"r":[140,52,20],"G":[226,120,30],"v":[34,32,34]},"rows":["................","................","................",".....vvvvvv.....",".....vvvvvv.....","................","................","....dddddddd....","....dddddddd....","....dddddddd....","....dddddddd....","....rrrrrrrr....","....GGGGGGGG....","....GGGGGGGG....","................","................"]}]},"farmland_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[146,110,74],"dark":[108,80,54],"jitter":16},"grass_s":{"type":"blades","count":6,"minHeight":3,"maxHeight":6,"dark":[52,118,38],"mid":[80,156,50],"tip":[118,190,72]},"grass_m":{"type":"blades","count":8,"minHeight":6,"maxHeight":10,"dark":[50,112,36],"mid":[82,160,52],"tip":[124,196,76]},"grass_l":{"type":"blades","count":10,"minHeight":9,"maxHeight":14,"dark":[46,106,34],"mid":[80,158,50],"tip":[128,200,80]},"wheat_s":{"type":"blades","count":8,"minHeight":3,"maxHeight":5,"dark":[70,150,50],"mid":[96,178,60],"tip":[130,205,80]},"wheat_m":{"type":"blades","count":8,"minHeight":7,"maxHeight":10,"dark":[84,150,50],"mid":[130,178,62],"tip":[176,196,84]},"wheat_l":{"type":"stalks","spacing":2,"minHeight":11,"maxHeight":14,"stem":[176,158,66],"headLength":4,"headLight":[236,200,90],"headDark":[214,168,52]},"farmland_wet_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[72,48,33],"dark":[36,24,18],"jitter":12},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................",".......ff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"furnace_side_lit":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOOORR....","....ROYYYYOR....","....OYYYYYYO....","....OOYYYYOO....","....OOOOOOOO....","................","................"]}]},"birch_log_side":{"type":"layers","layers":[{"type":"bark","base":[226,222,208],"channels":[1,1,1],"columnVariance":8,"jitter":8,"grooveEvery":5,"grooveDarken":10,"speckChance":0.02,"speckDarken":12},{"type":"pixelart","palette":{"d":[44,42,40],"e":[92,88,80]},"rows":["..dd............",".........ee.....","................","....ddd.....dd..","................",".ee.............","........dd......","................","..dd......ee....","................",".....ddd........","...........dd...","................","ee......dd......","................",".....dd........."]}]},"birch_log_top":{"type":"rings","bark":[226,222,208],"barkWidth":1.6,"light":[222,208,166],"dark":[196,180,134],"ringScale":0.9,"jitter":10},"spruce_log_side":{"type":"bark","base":[66,50,34],"channels":[1,0.85,0.7],"columnVariance":20,"jitter":12,"grooveEvery":3,"grooveDarken":26,"speckChance":0.05,"speckDarken":20},"spruce_log_top":{"type":"rings","bark":[62,46,30],"barkWidth":1.6,"light":[150,116,74],"dark":[124,92,56],"ringScale":0.9,"jitter":12},"birch_leaves":{"type":"noise","base":[108,156,52],"noise":[{"cells":4,"amp":46}],"jitter":22,"channels":[0.7,1,0.4],"holes":0.16},"spruce_leaves":{"type":"noise","base":[30,84,58],"noise":[{"cells":4,"amp":40}],"jitter":20,"channels":[0.35,0.9,0.5],"holes":0.14},"apple_leaves":{"type":"layers","layers":[{"type":"ref","tile":"leaves"},{"type":"pixelart","palette":{"r":[212,40,40],"h":[255,130,120]},"rows":["................","................","...rr...........","...rh.....rr....","................","................",".......rr.......",".......rh.......","................",".rr.............",".rh......rr.....",".........rh.....","................",".....rr.........",".....rh.........","................"]}]},"young_oak":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_birch":{"type":"pixelart","palette":{"g":[86,138,40],"G":[140,190,80],"S":[226,222,208]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_spruce":{"type":"pixelart","palette":{"g":[26,74,50],"G":[50,120,80],"S":[84,60,38]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_apple":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46],"r":[212,40,40]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGrgGGg....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"furnace_side_lit_b":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RRYOOORR....","....ROOYYYOR....","....OYYYYOOO....","....OOYYYYYO....","....OOOOOOOO....","................","................"]}]},"furnace_side_lit_c":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOYORR....","....RYYOOYOR....","....OOYYYYYO....","....OYYYOOOO....","....OOOOOOOO....","................","................"]}]},"torch_b":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................","......fff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"torch_c":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......f........",".......ff.......","......FFF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]}},"toolHeads":{"wood":{"light":[204,162,104],"base":[166,124,72],"dark":[108,76,42]},"stone":{"light":[178,178,180],"base":[132,132,136],"dark":[78,78,84]},"iron":{"light":[244,244,248],"base":[208,208,214],"dark":[132,132,144]}},"toolHandle":[[148,108,58],[104,74,38]],"sprites":{"stick":{"type":"pixelart","palette":{"#":[104,74,38],"@":[148,108,58]},"rows":["................","................","................","............@...","...........#....","..........@.....",".........#......","........@.......",".......#........","......@.........",".....#..........","....@...........","...#............","................","................","................"]},"coal":{"type":"pixelart","palette":{"#":[18,18,22],"@":[40,40,46],"%":[86,86,96]},"rows":["................","................","................","................",".....#####......","....##@@@@##....","...##%%@@@@##...","...#@@@@@@@@#...","..##@@%@@@@@#...","..##%@@%%@%@#...","...#%%@@%@@@#...","...##@@@%%@#....",".....#@@@@##....",".....#.###......","................","................"]},"charcoal":{"type":"pixelart","palette":{"#":[32,24,20],"@":[66,50,40],"%":[112,88,66]},"rows":["................","................","................","................","......##........","....##@@@@##....","...##@@@@@@##...","..##%@%@@@@@#...","...#@@@@@%%@#...","...#@@@%@@@@#...","...#@@@@@%@@#...","...##@@@%@%##...","....##@@@@#.....",".....#.##.......","................","................"]},"iron_ingot":{"type":"pixelart","palette":{"#":[140,140,152],"@":[246,246,250],"%":[208,208,216]},"rows":["................","................","................","................","................","................",".......#@@@@@@#.","......#@@@@@@#..",".....#%%%%%%#...","....#%%%%%%#....","...#%%%%%%#.....","..########......","................","................","................","................"]},"wheat_seeds":{"type":"pixelart","palette":{"#":[158,176,84],"@":[96,112,48],"%":[74,92,40]},"rows":["................","................","................",".......#%.......",".......%%#%.....","....#@...%%.....","....@@..........","................","......#@...#%...","......@@...%%...","................","...#@...........","...@@...#%..#@..","........%%..@@..","................","................"]},"wheat":{"type":"pixelart","palette":{"#":[173,153,62],"@":[175,155,62],"%":[165,145,62],"&":[172,152,62],"$":[163,143,62],"*":[174,154,62],"+":[169,149,62],"=":[239,197,80],"~":[213,167,50],"^":[227,185,74],":":[201,155,50],";":[237,195,79],"-":[211,165,50],"_":[236,194,78],"<":[210,164,50],">":[235,193,77],"|":[209,163,50],"!":[161,141,62],"?":[166,146,62],"a":[177,157,62],"b":[223,181,72],"c":[197,151,50],"d":[227,185,73],"e":[228,186,74],"f":[202,156,50],"g":[225,183,73],"h":[199,153,50],"i":[179,159,62],"j":[162,142,62],"k":[176,156,62],"l":[167,147,62],"m":[168,148,62],"n":[230,188,75],"o":[204,158,50],"p":[239,197,79]},"rows":["................","................","...>|...gh.._<..","..._<...ef..p~..","...;-...d:..d:..","....^:..;-..no..","....=~..bc..ef..","....+...?...i...","....*...*...m...","....&...@..l....","....$...?..k....",".....&..a..j....",".....%..?..%....",".....@..+..i....",".....#..!..+....","................"]},"bread":{"type":"pixelart","palette":{"#":[128,82,36],"@":[214,156,76],"%":[150,96,44],"&":[176,118,52]},"rows":["................","................","................","................","................","...##@@@@@#.....","..#@@%@@%@@%#...","..&&&&&&&@@%@@..","..&&&&&&&&&&&&#.","..#&&&&&&&&&&&&.","...&&&&&&&&&&&&.","....#&&&&&&&&&#.","......#&&&&&##..","................","................","................"]},"apple":{"type":"pixelart","palette":{"r":[150,20,24],"R":[214,40,44],"w":[255,205,205],"s":[100,70,38],"g":[70,150,50]},"rows":["................","..........gg....","......s..ggg....","......s....g....","....rrr.rrr.....","...rRRRrRRRr....","..rRwRRRRRRRr...","..rRwRRRRRRRr...","..rRRRRRRRRRr...","..rRRRRRRRRRr...","...rRRRRRRRr....","...rrRRRRRrr....","....rrRRRrr.....",".....rrrr.......","................","................"]},"raw_iron":{"type":"pixelart","palette":{"#":[96,62,48],"@":[206,150,120],"%":[240,200,172]},"rows":["................","................","................","................",".....#####......","....##@@%@##....","...##@@@@@@@#...","...#@@%%@@@@#...","..##@@@@@%@@##..","..#@%@@@@@@@@#..","..##@@@%@@@@##..","...#@@@@@%@@#...","....##@@@@##....",".....######.....","................","................"]},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......ff.......","......ffFf......","......fFFF......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......","................"]},"iron_helmet":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","....########....","...#@@@@%%%%#...","..#@@@%%oo%%%#..","..#@@%%%ooo%%#..","..#@%%%%oooo%#..","..#@%%%%oooo%#..","..#@%%####oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oox#..#xoo#..","..####....####..","................","................","................"]},"iron_chestplate":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..####....####..",".#@@%#....#o%%#.",".#@%%o####ooo%#.",".#@%%%o##oooo%#.",".#@%%%%oooooo%#.",".#@%%%%oooooo%#.",".#@@%%%ooooo%%#.","..#@%%%ooooo%#..","..#@%%%ooooo%#..","..##@%%oooo%##..","...##@%ooo%##...","....##oooo##....",".....######.....","................","................"]},"iron_leggings":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..############..","..#@@%%%ooo%%#..","..#@%%%ooooo%#..","..#@%%####oo%#..","..#@%%#..#oo%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oxx#..#xxo#..","..#oxx#..#xxo#..","..####....####..","................","................","................","................"]},"iron_boots":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","..###......###..","..#@%#....#o%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#@%o####oo%#..","..#@%%%ooooo%#..",".#@%%%%oooooo%#.",".#%%oooooooooo#.",".#oxxxxxxxxxxo#.",".####......####.","................","................","................","................"]},"iron_shield":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114],"g":[150,106,58],"G":[190,142,84]},"rows":["................","..############..",".#@@@@@%o%%%%%#.",".#@%%%%%ooooo%#.",".#@%ggggggggo%#.",".#@%gGGGGGGgo%#.",".#@%ggggggggo%#.",".#@%%%%%ooooo%#.","..#@%%%ooooo%#..","..#@%%oooooo%#..","...#%%oooooo#...","...#@oooooo%#...","....#oooooo#....",".....#xxxx#.....","......####......","................"]},"backpack":{"type":"pixelart","palette":{"#":[50,34,22],"g":[170,120,70],"G":[204,154,94],"x":[112,78,46],"y":[236,204,84]},"rows":["................","....########....","...#gggGGggg#...","..#ggGGGGGGgg#..","..#gGGGGGGGGg#..","..#gGgGGGGgGg#..","..#gggGGGGggg#..","..#gGyGGGGyGg#..","..#gGgGGGGgGg#..","..#ggGGGGGGgg#..","..#gggggggggg#..","..#xxxxxxxxxx#..","..############..","................","................","................"]},"quiver":{"type":"pixelart","palette":{"#":[50,34,22],"g":[150,106,58],"G":[186,138,80],"r":[92,62,36],"f":[244,244,244],"|":[150,120,80]},"rows":["................",".....f..f..f....",".....|..|..|....","....#########...","....#gGgGgGgG#..","....#gGgGgGgG#..","....#gGggGgGg#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....#rrrrrrrr#..","....#gGgGgGgG#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....##########..","................","................"]},"oak_sapling":{"type":"ref","tile":"young_oak"},"birch_sapling":{"type":"ref","tile":"young_birch"},"spruce_sapling":{"type":"ref","tile":"young_spruce"},"apple_sapling":{"type":"ref","tile":"young_apple"}},"animations":{"_comment":"Tiles that flicker: the engine swaps these frames into the texture atlas at the given speed (frames per second). The first frame is the tile itself.","furnace_side_lit":{"frames":["furnace_side_lit","furnace_side_lit_b","furnace_side_lit_c"],"fps":7},"torch":{"frames":["torch","torch_b","torch_c"],"fps":8}}},"sounds":{"_comment":"Block sound materials. Each is a stack of layers played together: filtered noise and/or swept tones. A block picks one with \"sound\". Phases scale loudness and length.","phases":{"break":{"loud":1,"length":0.16},"place":{"loud":0.8,"length":0.16},"tick":{"loud":0.35,"length":0.05},"step":{"loud":0.22,"length":0.07}},"materials":{"default":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"stone":[{"type":"noise","filter":"bandpass","freq":1900,"q":1.2,"gain":0.55},{"type":"tone","from":160,"to":70,"gain":0.3,"lengthScale":1.2}],"wood":[{"type":"noise","filter":"bandpass","freq":700,"q":2,"gain":0.4},{"type":"tone","from":260,"to":110,"gain":0.45,"wave":"triangle","lengthScale":1.4}],"glass":[{"type":"noise","filter":"highpass","freq":4500,"q":1,"gain":0.3},{"type":"tone","from":2600,"to":2340,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":3900,"to":3510,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":5200,"to":4680,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03}],"sand":[{"type":"noise","filter":"highpass","freq":1800,"q":0.5,"gain":0.35,"lengthScale":1.3}],"leaves":[{"type":"noise","filter":"highpass","freq":3000,"q":0.4,"gain":0.28,"lengthScale":1.2}],"snow":[{"type":"noise","filter":"lowpass","freq":1500,"q":0.6,"gain":0.4,"lengthScale":1.4}],"water":[{"type":"noise","filter":"bandpass","freq":900,"q":0.8,"gain":0.35,"seconds":0.3}],"grass":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"dirt":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}]}},"worldgen":{"_comment":"Terrain, ores, caves, trees and ground cover. Block names refer to blocks.json keys. Ores: minY is inclusive, maxY exclusive. beachAboveSea: columns at most this far above the sea are beach.","seaLevel":22,"snowLine":44,"blocks":{"sea":"water","stone":"stone","surface":"grass","filler":"dirt","fillerDepth":3,"beach":"sand","beachFiller":"sand","snowSurface":"snow","snowFiller":"stone"},"terrain":{"continentScale":0.0045,"continentHeight":22,"hillScale":0.014,"hillHeight":7,"ridgeScale":0.011,"ridgeHeight":24,"baseAboveSea":5},"rivers":{"scale":0.0065,"coreWidth":0.016,"bankWidth":0.07,"warp":14,"lowlandFrom":8,"lowlandTo":20,"bedBelowSea":2},"caves":{"scale":[0.045,0.07,0.045],"threshold":0.1,"minY":3,"surfaceDepth":4,"caverns":{"scale":[0.022,0.04,0.022],"threshold":0.4,"minY":4,"maxY":34,"surfaceDepth":6},"entrances":{"scale":0.035,"threshold":0.25}},"ores":[{"block":"iron_ore","scale":0.16,"offset":[40,7,-20],"threshold":0.6,"minY":3,"maxY":36},{"block":"coal_ore","scale":0.14,"offset":[5,0,9],"threshold":0.56,"minY":0,"maxY":64}],"trees":{"_comment":"Trees: every spot that grows a tree picks one variant, weighted by \"weight\" among those whose \"heights\" range (terrain height) fits. shape: round (the classic ball of leaves), tall (a big crown on a long trunk), cone (a spruce) or bush (a low shrub). Saplings grow into these by key (blocks.json plant.grows).","baseDensity":0.003,"forestDensity":0.05,"minAboveSea":2,"belowSnowLine":2,"variants":[{"key":"oak","weight":6,"heights":[24,99],"shape":"round","trunk":[4,6],"log":"log","leaves":"leaves"},{"key":"apple","weight":1.2,"heights":[24,36],"shape":"round","trunk":[3,5],"log":"log","leaves":"apple_leaves"},{"key":"birch","weight":3,"heights":[25,40],"shape":"round","trunk":[5,7],"log":"birch_log","leaves":"birch_leaves"},{"key":"spruce","weight":4,"heights":[30,99],"shape":"cone","trunk":[6,9],"log":"spruce_log","leaves":"spruce_leaves"},{"key":"tall_oak","weight":1,"heights":[24,38],"shape":"tall","trunk":[8,11],"log":"log","leaves":"leaves"},{"key":"bush","weight":1.6,"heights":[24,99],"shape":"bush","trunk":[1,2],"log":"log","leaves":"leaves"}]},"groundCover":{"chance":0.24,"variants":[{"block":"grass_s","weight":0.45},{"block":"grass_m","weight":0.35},{"block":"grass_l","weight":0.2}]},"spawn":{"minTrees":3,"treeRadius":10,"waterRadius":28},"beachAboveSea":1},"game":{"_comment":"Survival rules and tuning numbers.","player":{"maxHealth":20,"maxFood":20,"reach":6,"lookAtReach":5},"hunger":{"drainPerSecond":0.03,"sprintDrainPerSecond":0.12,"jumpCost":0.05,"sprintJumpCost":0.1,"miningCost":0.05,"miningDrainPerSecond":0.06,"maxSaturation":20,"healEverySeconds":1.5,"saturationPerHeal":1,"emptySaturationCost":1,"respawnSaturation":5,"noSprintAtOrBelow":6,"starveEverySeconds":15,"starveDamage":1,"starvingSpeed":0.75},"eating":{"seconds":1.4},"fall":{"safeDistance":4,"damageOffset":3,"tolerance":0.05,"kick":1.3},"tilling":{"radius":4,"waterBelow":4,"waterAbove":1},"time":{"dayLengthSeconds":480,"startTime":0.08},"treeFall":{"mode":"shatter","leafReach":4},"creativeHotbar":["grass","dirt","stone","cobble","planks","log","glass","brick","sand"],"spread":{"chance":0.5,"samplesPerChunk":12,"chunkRadius":3},"plants":{"growthChunkRadius":4},"studio":{"_comment":"The developer logo screen at startup. Letters, digits, space and - . ! & ' only.","name":"Pixel Pilots Studio","tagline":"presents"},"lighting":{"minBrightness":0.14,"gamma":1.5,"skyLevel":15},"equipment":{"_comment":"Equipment slots shown in the inventory (the order here is the order on screen). Armor points reduce damage from falls by armorReduction each (starvation ignores armor).","armorReduction":0.04,"maxArmor":20,"slots":[{"id":"helmet","label":"Helmet"},{"id":"chestplate","label":"Chestplate"},{"id":"leggings","label":"Leggings"},{"id":"boots","label":"Boots"},{"id":"shield","label":"Shield"},{"id":"backpack","label":"Backpack"},{"id":"quiver","label":"Quiver"}]},"tools":{"_comment":"wrongToolWear: how many uses a tool loses when it breaks a block it is not made for (a pickaxe on dirt, a shovel on stone); the right tool loses 1.","wrongToolWear":3}},"music":{"_comment":"The soundtrack. Every track is generated live from this description (nothing is recorded). In the game a random track plays, and when it finishes there is a short pause (gapSeconds) and another one is picked at random, never the same one twice in a row. The title screen plays the track named by \"title\" on a loop. A track: bpm, bars (how long it lasts), chords (root = bass note, tones = the notes the pad and melody use, as MIDI numbers; each chord lasts barsPerChord bars and the list repeats), lead (the melody: voice piano|bell|pluck, density = chance of a note on [the first beat, other even steps, odd steps], leap = chance of an octave jump, rest = every Nth bar the melody takes a breath), pad (triangle|strings|null), bass (sine|drone|null), arp (a repeating broken-chord pattern: voice, pattern = which chord tone each step plays, step = beats per note, vel). \"melody\" instead of a random lead plays exactly these notes: [bar, beat, midi note, beats long, loudness].","gapSeconds":[5,12],"title":"theme","tracks":[{"key":"meadow","name":"Meadow","bpm":58,"bars":16,"barsPerChord":1,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":43,"tones":[59,62,65,67,72]},{"root":40,"tones":[59,62,64,67,71]},{"root":45,"tones":[60,64,67,69,72]},{"root":38,"tones":[57,60,62,65,69]},{"root":43,"tones":[59,62,64,67,71]}],"lead":{"voice":"piano","density":[0.9,0.5,0.28],"leap":0.12,"rest":4},"pad":"triangle","bass":"sine"},{"key":"lantern","name":"Lantern Light","bpm":50,"bars":16,"barsPerChord":2,"chords":[{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":48,"tones":[55,60,64,67,72]},{"root":43,"tones":[55,59,62,67,71]}],"lead":{"voice":"bell","density":[0.8,0.45,0.3],"leap":0.2,"rest":4},"pad":"strings","bass":"sine"},{"key":"slow_tide","name":"Slow Tide","bpm":44,"bars":16,"barsPerChord":2,"chords":[{"root":38,"tones":[57,60,62,64,65]},{"root":43,"tones":[59,62,64,67,71]},{"root":36,"tones":[60,64,67,71,74]},{"root":41,"tones":[57,60,64,65,69]}],"lead":{"voice":"piano","density":[0.55,0.28,0.14],"leap":0.18,"rest":3},"pad":"strings","bass":"drone"},{"key":"hearthside","name":"Hearthside","bpm":66,"bars":16,"barsPerChord":1,"chords":[{"root":41,"tones":[53,57,60,65,69]},{"root":46,"tones":[58,62,65,69,74]},{"root":43,"tones":[55,58,62,65,70]},{"root":48,"tones":[55,58,60,64,67]}],"lead":{"voice":"pluck","density":[0.5,0.25,0.12],"leap":0.1,"rest":4},"arp":{"voice":"piano","pattern":[0,2,1,3,2,4,3,1],"step":0.5,"vel":0.12},"pad":"triangle","bass":"sine"},{"key":"deep_stone","name":"Deep Stone","bpm":40,"bars":16,"barsPerChord":2,"chords":[{"root":40,"tones":[52,55,59,64,67]},{"root":41,"tones":[53,57,60,64,65]},{"root":45,"tones":[52,57,60,64,69]},{"root":38,"tones":[50,53,57,62,65]}],"lead":{"voice":"bell","density":[0.45,0.2,0.1],"leap":0.3,"rest":2},"pad":"strings","bass":"drone"},{"key":"morning_light","name":"Morning Light","bpm":76,"bars":16,"barsPerChord":1,"chords":[{"root":43,"tones":[55,59,62,67,71]},{"root":50,"tones":[57,62,66,69,74]},{"root":40,"tones":[55,59,64,67,71]},{"root":48,"tones":[55,60,64,67,72]}],"lead":{"voice":"piano","density":[0.8,0.55,0.35],"leap":0.1,"rest":4},"arp":{"voice":"pluck","pattern":[0,1,2,3,2,1,4,2],"step":0.5,"vel":0.1},"pad":"triangle","bass":"sine"},{"key":"theme","name":"VoxelCraft Theme","bpm":72,"bars":16,"barsPerChord":2,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":43,"tones":[59,62,67,71,74]},{"root":45,"tones":[57,60,64,67,72]},{"root":41,"tones":[57,60,65,69,72]},{"root":48,"tones":[60,64,67,72,76]},{"root":43,"tones":[59,62,67,71,74]},{"root":41,"tones":[57,60,65,69,72]},{"root":43,"tones":[55,59,62,67,71]}],"melody":[[0,0,72,2,0.3],[0,2,76,1,0.26],[0,3,79,1,0.26],[1,0,81,2,0.28],[1,2,79,2,0.24],[2,0,76,2,0.28],[2,2,74,1,0.24],[2,3,72,1,0.24],[3,0,74,4,0.26],[4,0,72,2,0.28],[4,2,69,1,0.24],[4,3,72,1,0.24],[5,0,76,2,0.28],[5,2,74,2,0.24],[6,0,72,2,0.28],[6,2,69,2,0.24],[7,0,67,4,0.26],[8,0,72,2,0.3],[8,2,76,1,0.26],[8,3,79,1,0.26],[9,0,84,2,0.32],[9,2,83,1,0.26],[9,3,79,1,0.26],[10,0,81,2,0.3],[10,2,79,1,0.24],[10,3,76,1,0.24],[11,0,79,4,0.28],[12,0,77,2,0.28],[12,2,76,1,0.24],[12,3,74,1,0.24],[13,0,72,2,0.26],[13,2,74,2,0.24],[14,0,71,2,0.26],[14,2,74,2,0.24],[15,0,72,4,0.3]],"arp":{"voice":"bell","pattern":[0,2,3,2],"step":1,"vel":0.07},"pad":"strings","bass":"sine"}]}};
var Np=0,ku=1,Dp=2;var ma=1,Up=2,Yr=3,As=0,An=1,Qn=2,Ni=0,Zr=1,Qs=2,zu=3,Hu=4,Fp=5;var tr=100,Op=101,Bp=102,kp=103,zp=104,Hp=200,Vp=201,Gp=202,Wp=203,Vu=204,Gu=205,Xp=206,qp=207,$p=208,Yp=209,Zp=210,Jp=211,Kp=212,jp=213,Qp=214,zl=0,Hl=1,Vl=2,Hr=3,Gl=4,Wl=5,Xl=6,ql=7,Wu=0,tm=1,em=2,di=0,Xu=1,qu=2,$u=3,Yu=4,Zu=5,Ju=6,Ku=7;var ju=300,Cs=301,er=302,vc=303,Mc=304,ga=306,Vr=1e3,Ti=1001,$l=1002,We=1003,nm=1004;var xa=1005;var rn=1006,Sc=1007;var Rs=1008;var Vn=1009,Qu=1010,td=1011,Jr=1012,bc=1013,fi=1014,ti=1015,pi=1016,wc=1017,Ec=1018,Kr=1020,ed=35902,nd=35899,id=1021,sd=1022,ei=1023,Ai=1026,Is=1027,Tc=1028,Ac=1029,Ps=1030,Cc=1031;var Rc=1033,_a=33776,ya=33777,va=33778,Ma=33779,Ic=35840,Pc=35841,Lc=35842,Nc=35843,Dc=36196,Uc=37492,Fc=37496,Oc=37488,Bc=37489,Sa=37490,kc=37491,zc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,$c=37815,Yc=37816,Zc=37817,Jc=37818,Kc=37819,jc=37820,Qc=37821,th=36492,eh=36494,nh=36495,ih=36283,sh=36284,ba=36285,rh=36286;var Go=2300,Yl=2301,Ol=2302,Lu=2303,Nu=2400,Du=2401,Uu=2402;var im=3200;var rd=0,sm=1,ni="",kn="srgb",Ks="srgb-linear",Wo="linear",ye="srgb";var Bl=7680;var rm=519,om=512,am=513,lm=514,oh=515,cm=516,hm=517,ah=518,um=519,od=35044,ad=35048;var ld="300 es",ui=2e3,Xo=2001;function t_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function e_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dm(){let n=qo("canvas");return n.style.display="block",n}var sp={},Gr=null;function $o(...n){let t="THREE."+n.shift();Gr?Gr("log",t,...n):console.log(t,...n)}function fm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Vt(...n){n=fm(n);let t="THREE."+n.shift();if(Gr)Gr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Xt(...n){n=fm(n);let t="THREE."+n.shift();if(Gr)Gr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Js(...n){let t=n.join(" ");t in sp||(sp[t]=!0,Vt(...n))}function pm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var mm={[zl]:Hl,[Vl]:Xl,[Gl]:ql,[Hr]:Wl,[Hl]:zl,[Xl]:Vl,[ql]:Gl,[Wl]:Hr},Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,Zl=180/Math.PI;function Ms(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function n_(n,t){return(n%t+t)%t}function lu(n,t,e){return(1-e)*n+e*t}function wi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var se=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let b=Math.acos(g),A=Math.sin(b);p=Math.sin(p*b)/A,a=Math.sin(a*b)/A,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cu.copy(this).projectOnVector(t),this.sub(cu)}reflect(t){return this.sub(cu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cu=new V,rp=new In,Zt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],b=s[1],A=s[4],v=s[7],E=s[2],M=s[5],R=s[8];return r[0]=o*x+a*b+l*E,r[3]=o*g+a*A+l*M,r[6]=o*p+a*v+l*R,r[1]=c*x+h*b+d*E,r[4]=c*g+h*A+d*M,r[7]=c*p+h*v+d*R,r[2]=u*x+f*b+m*E,r[5]=u*g+f*A+m*M,r[8]=u*p+f*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hu.makeScale(t,e)),this}rotate(t){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hu.makeRotation(-t)),this}translate(t,e){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hu=new Zt,op=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){let n={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=zr(s.r),s.g=zr(s.g),s.b=zr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ks]:{primaries:t,whitePoint:i,transfer:Wo,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),n}var re=i_();function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sr,Jl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Sr===void 0&&(Sr=qo("canvas")),Sr.width=t.width,Sr.height=t.height;let s=Sr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Sr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ts(e[i]/255)*255):e[i]=ts(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},s_=0,Wr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uu(s[o].image)):r.push(uu(s[o]))}else r=uu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function uu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var r_=0,du=new V,En=class n extends Ci{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ti,s=Ti,r=rn,o=Rs,a=ei,l=Vn,c=n.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ms(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(du).x}get height(){return this.source.getSize(du).y}get depth(){return this.source.getSize(du).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=ju;En.DEFAULT_ANISOTROPY=1;var Be=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(f+1)/2,E=(p+1)/2,M=(h+u)/4,R=(d+x)/4,y=(m+g)/4;return A>v&&A>E?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=M/i,r=R/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=y/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=y/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kl=class extends Ci{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new En(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Kl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Yo=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var be=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/br.setFromMatrixColumn(t,0).length(),r=1/br.setFromMatrixColumn(t,1).length(),o=1/br.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o_,t,a_)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),gs.crossVectors(i,On),gs.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),gs.crossVectors(i,On)),gs.normalize(),al.crossVectors(On,gs),s[0]=gs.x,s[4]=al.x,s[8]=On.x,s[1]=gs.y,s[5]=al.y,s[9]=On.y,s[2]=gs.z,s[6]=al.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],b=i[3],A=i[7],v=i[11],E=i[15],M=s[0],R=s[4],y=s[8],C=s[12],D=s[1],F=s[5],H=s[9],N=s[13],I=s[2],O=s[6],q=s[10],G=s[14],et=s[3],B=s[7],X=s[11],K=s[15];return r[0]=o*M+a*D+l*I+c*et,r[4]=o*R+a*F+l*O+c*B,r[8]=o*y+a*H+l*q+c*X,r[12]=o*C+a*N+l*G+c*K,r[1]=h*M+d*D+u*I+f*et,r[5]=h*R+d*F+u*O+f*B,r[9]=h*y+d*H+u*q+f*X,r[13]=h*C+d*N+u*G+f*K,r[2]=m*M+x*D+g*I+p*et,r[6]=m*R+x*F+g*O+p*B,r[10]=m*y+x*H+g*q+p*X,r[14]=m*C+x*N+g*G+p*K,r[3]=b*M+A*D+v*I+E*et,r[7]=b*R+A*F+v*O+E*B,r[11]=b*y+A*H+v*q+E*X,r[15]=b*C+A*N+v*G+E*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],b=l*f-c*u,A=a*f-c*d,v=a*u-l*d,E=o*f-c*h,M=o*u-l*h,R=o*d-a*h;return e*(x*b-g*A+p*v)-i*(m*b-g*E+p*M)+s*(m*A-x*E+p*R)-r*(m*v-x*M+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],b=e*a-i*o,A=e*l-s*o,v=e*c-r*o,E=i*l-s*a,M=i*c-r*a,R=s*c-r*l,y=h*x-d*m,C=h*g-u*m,D=h*p-f*m,F=d*g-u*x,H=d*p-f*x,N=u*p-f*g,I=b*N-A*H+v*F+E*D-M*C+R*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(a*N-l*H+c*F)*O,t[1]=(s*H-i*N-r*F)*O,t[2]=(x*R-g*M+p*E)*O,t[3]=(u*M-d*R-f*E)*O,t[4]=(l*D-o*N-c*C)*O,t[5]=(e*N-s*D+r*C)*O,t[6]=(g*v-m*R-p*A)*O,t[7]=(h*R-u*v+f*A)*O,t[8]=(o*H-a*D+c*y)*O,t[9]=(i*D-e*H-r*y)*O,t[10]=(m*M-x*v+p*b)*O,t[11]=(d*v-h*M-f*b)*O,t[12]=(a*C-o*F-l*y)*O,t[13]=(e*F-i*C+s*y)*O,t[14]=(x*A-m*E-g*b)*O,t[15]=(h*E-d*A+u*b)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,b=l*c,A=l*h,v=l*d,E=i.x,M=i.y,R=i.z;return s[0]=(1-(x+p))*E,s[1]=(f+v)*E,s[2]=(m-A)*E,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(u+p))*M,s[6]=(g+b)*M,s[7]=0,s[8]=(m+A)*R,s[9]=(g-b)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=br.set(s[0],s[1],s[2]).length(),a=br.set(s[4],s[5],s[6]).length(),l=br.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ai.copy(this);let c=1/o,h=1/a,d=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,e.setFromRotationMatrix(ai),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ui,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===ui)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ui,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===ui)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Xo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},br=new V,ai=new be,o_=new V(0,0,0),a_=new V(1,1,1),gs=new V,al=new V,On=new V,lp=new be,cp=new In,Ri=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cp.setFromEuler(this),this.setFromQuaternion(cp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},l_=0,hp=new V,wr=new In,Zi=new be,ll=new V,No=new V,c_=new V,h_=new In,up=new V(1,0,0),dp=new V(0,1,0),fp=new V(0,0,1),pp={type:"added"},u_={type:"removed"},Er={type:"childadded",child:null},fu={type:"childremoved",child:null},Tn=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new Ri,i=new In,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Zt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(up,t)}rotateY(t){return this.rotateOnAxis(dp,t)}rotateZ(t){return this.rotateOnAxis(fp,t)}translateOnAxis(t,e){return hp.copy(t).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(up,t)}translateY(t){return this.translateOnAxis(dp,t)}translateZ(t){return this.translateOnAxis(fp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ll.copy(t):ll.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(No,ll,this.up):Zi.lookAt(ll,No,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(Zi),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pp),Er.child=t,this.dispatchEvent(Er),Er.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u_),fu.child=t,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pp),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,c_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,h_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tn.DEFAULT_UP=new V(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=class extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},d_={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new en;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},cl={h:0,s:0,l:0};function pu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=n_(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pu(o,r,t+1/3),this.g=pu(o,r,t),this.b=pu(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=kn){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){let i=gm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return re.workingToColorSpace(pn.copy(this),t),Math.round(ce(pn.r*255,0,255))*65536+Math.round(ce(pn.g*255,0,255))*256+Math.round(ce(pn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(pn.copy(this),e);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=kn){re.workingToColorSpace(pn.copy(this),t);let e=pn.r,i=pn.g,s=pn.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+e,xs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xs),t.getHSL(cl);let i=lu(xs.h,cl.h,e),s=lu(xs.s,cl.s,e),r=lu(xs.l,cl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new zt;zt.NAMES=gm;var Jo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ko=class extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new V,Ji=new V,mu=new V,Ki=new V,Tr=new V,Ar=new V,mp=new V,gu=new V,xu=new V,_u=new V,yu=new Be,vu=new Be,Mu=new Be,Ei=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),Ji.subVectors(i,e),mu.subVectors(t,e);let o=li.dot(li),a=li.dot(Ji),l=li.dot(mu),c=Ji.dot(Ji),h=Ji.dot(mu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return yu.setScalar(0),vu.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(t,e),vu.fromBufferAttribute(t,i),Mu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yu,r.x),o.addScaledVector(vu,r.y),o.addScaledVector(Mu,r.z),o}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Ji.subVectors(t,e),li.cross(Ji).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),li.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Tr.subVectors(s,i),Ar.subVectors(r,i),gu.subVectors(t,i);let l=Tr.dot(gu),c=Ar.dot(gu);if(l<=0&&c<=0)return e.copy(i);xu.subVectors(t,s);let h=Tr.dot(xu),d=Ar.dot(xu);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Tr,o);_u.subVectors(t,r);let f=Tr.dot(_u),m=Ar.dot(_u);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ar,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return mp.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(mp,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(Tr,o).addScaledVector(Ar,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ii=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(t.matrixWorld),this.union(hl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),ul.subVectors(this.max,Do),Cr.subVectors(t.a,Do),Rr.subVectors(t.b,Do),Ir.subVectors(t.c,Do),_s.subVectors(Rr,Cr),ys.subVectors(Ir,Rr),qs.subVectors(Cr,Ir);let e=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-qs.z,qs.y,_s.z,0,-_s.x,ys.z,0,-ys.x,qs.z,0,-qs.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-qs.y,qs.x,0];return!Su(e,Cr,Rr,Ir,ul)||(e=[1,0,0,0,1,0,0,0,1],!Su(e,Cr,Rr,Ir,ul))?!1:(dl.crossVectors(_s,ys),e=[dl.x,dl.y,dl.z],Su(e,Cr,Rr,Ir,ul))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ji=[new V,new V,new V,new V,new V,new V,new V,new V],ci=new V,hl=new Ii,Cr=new V,Rr=new V,Ir=new V,_s=new V,ys=new V,qs=new V,Do=new V,ul=new V,dl=new V,$s=new V;function Su(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$s.fromArray(n,r);let a=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),l=t.dot($s),c=e.dot($s),h=i.dot($s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new V,fl=new se,f_=0,me=class extends Ci{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=od,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fl.fromBufferAttribute(this,e),fl.applyMatrix3(t),this.setXY(e,fl.x,fl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var jo=class extends me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qo=class extends me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var nn=class extends me{constructor(t,e,i){super(new Float32Array(t),e,i)}},p_=new Ii,Uo=new V,bu=new V,jn=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):p_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);let e=Uo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Uo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(bu)),this.expandByPoint(Uo.copy(t.center).sub(bu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},m_=0,Kn=new be,wu=new Tn,Pr=new V,Bn=new Ii,Fo=new Ii,tn=new V,Ve=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t_(t)?Qo:jo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,i){return Kn.makeTranslation(t,e,i),this.applyMatrix4(Kn),this}scale(t,e,i){return Kn.makeScale(t,e,i),this.applyMatrix4(Kn),this}lookAt(t){return wu.lookAt(t),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Bn.min,Fo.min),Bn.expandByPoint(tn),tn.addVectors(Bn.max,Fo.max),Bn.expandByPoint(tn)):(Bn.expandByPoint(Fo.min),Bn.expandByPoint(Fo.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(t,c),tn.add(Pr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new me(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new V,l[y]=new V;let c=new V,h=new V,d=new V,u=new se,f=new se,m=new se,x=new V,g=new V;function p(y,C,D){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,D),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,D),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let F=1/(f.x*m.y-m.x*f.y);isFinite(F)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(F),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(F),a[y].add(x),a[C].add(x),a[D].add(x),l[y].add(g),l[C].add(g),l[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,C=b.length;y<C;++y){let D=b[y],F=D.start,H=D.count;for(let N=F,I=F+H;N<I;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let A=new V,v=new V,E=new V,M=new V;function R(y){E.fromBufferAttribute(s,y),M.copy(E);let C=a[y];A.copy(C),A.sub(E.multiplyScalar(E.dot(C))).normalize(),v.crossVectors(M,C);let F=v.dot(l[y])<0?-1:1;o.setXYZW(y,A.x,A.y,A.z,F)}for(let y=0,C=b.length;y<C;++y){let D=b[y],F=D.start,H=D.count;for(let N=F,I=F+H;N<I;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new me(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ql=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=od,this.updateRanges=[],this.version=0,this.uuid=Ms()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new V,ta=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Eu=new V,g_=new V,x_=new Zt,hi=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Eu.subVectors(i,e).cross(g_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Eu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||x_.getNormalMatrix(t),s=this.coplanarPoint(Eu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},__=0,Pi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=Zr,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new hi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ss=class extends Pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lr,Oo=new V,Nr=new V,Dr=new V,Ur=new se,Bo=new se,xm=new be,pl=new V,ko=new V,ml=new V,gp=new se,Tu=new se,xp=new se,js=class extends Tn{constructor(t=new Ss){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ql(e,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new ta(i,3,0,!1)),Lr.setAttribute("uv",new ta(i,2,3,!1))}this.geometry=Lr,this.material=t,this.center=new se(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),xm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;gl(pl.set(-.5,-.5,0),Dr,o,Nr,s,r),gl(ko.set(.5,-.5,0),Dr,o,Nr,s,r),gl(ml.set(.5,.5,0),Dr,o,Nr,s,r),gp.set(0,0),Tu.set(1,0),xp.set(1,1);let a=t.ray.intersectTriangle(pl,ko,ml,!1,Oo);if(a===null&&(gl(ko.set(-.5,.5,0),Dr,o,Nr,s,r),Tu.set(0,1),a=t.ray.intersectTriangle(pl,ml,ko,!1,Oo),a===null))return;let l=t.ray.origin.distanceTo(Oo);l<t.near||l>t.far||e.push({distance:l,point:Oo.clone(),uv:Ei.getInterpolation(Oo,pl,ko,ml,gp,Tu,xp,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function gl(n,t,e,i,s,r){Ur.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Bo.x=r*Ur.x-s*Ur.y,Bo.y=s*Ur.x+r*Ur.y):Bo.copy(Ur),n.copy(t),n.x+=Bo.x,n.y+=Bo.y,n.applyMatrix4(xm)}var Qi=new V,Au=new V,xl=new V,_l=new V,qr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Au.copy(t).add(e).multiplyScalar(.5),xl.copy(e).sub(t).normalize(),_l.copy(this.origin).sub(Au);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xl),a=_l.dot(this.direction),l=-_l.dot(xl),c=_l.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Au).addScaledVector(xl,u),f}intersectSphere(t,e){if(t.radius<0)return null;Qi.subVectors(t.center,this.origin);let i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=i.x-o.x,b=i.y-o.y,A=i.z-o.z,v=Math.abs(l),E=Math.abs(c),M=Math.abs(h),R,y,C,D,F,H,N,I,O,q,G,et;if(v>=E&&v>=M?(C=l,H=d,O=m,et=p,l>=0?(R=c,y=h,D=u,F=f,N=x,I=g,q=b,G=A):(R=h,y=c,D=f,F=u,N=g,I=x,q=A,G=b)):E>=M?(C=c,H=u,O=x,et=b,c>=0?(R=h,y=l,D=f,F=d,N=g,I=m,q=A,G=p):(R=l,y=h,D=d,F=f,N=m,I=g,q=p,G=A)):(C=h,H=f,O=g,et=A,h>=0?(R=l,y=c,D=d,F=u,N=m,I=x,q=p,G=b):(R=c,y=l,D=u,F=d,N=x,I=m,q=b,G=p)),C===0)return null;let B=R/C,X=y/C,K=1/C,bt=D-B*H,gt=F-X*H,Kt=N-B*O,Ht=I-X*O,Yt=q-B*et,j=G-X*et,Q=Yt*Ht-j*Kt,mt=bt*j-gt*Yt,Bt=Kt*gt-Ht*bt;if(s){if(Q<0||mt<0||Bt<0)return null}else if((Q<0||mt<0||Bt<0)&&(Q>0||mt>0||Bt>0))return null;let wt=Q+mt+Bt;if(wt===0)return null;let kt=K*(Q*H+mt*O+Bt*et);return(wt>0?kt<0:kt>0)?null:this.at(kt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_p=new be,Ys=new qr,yl=new jn,yp=new V,vl=new V,Ml=new V,Sl=new V,Cu=new V,bl=new V,vp=new V,wl=new V,Pe=class extends Tn{constructor(t=new Ve,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Cu.fromBufferAttribute(d,t),o?bl.addScaledVector(Cu,h):bl.addScaledVector(Cu.sub(e),h))}e.add(bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),Ys.copy(t.ray).recast(t.near),!(yl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(yl,yp)===null||Ys.origin.distanceToSquared(yp)>(t.far-t.near)**2))&&(_p.copy(r).invert(),Ys.copy(t.ray).applyMatrix4(_p),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ys)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),A=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,E=A;v<E;v+=3){let M=a.getX(v),R=a.getX(v+1),y=a.getX(v+2);s=El(this,p,t,i,c,h,d,M,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=a.getX(g),A=a.getX(g+1),v=a.getX(g+2);s=El(this,o,t,i,c,h,d,b,A,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,E=A;v<E;v+=3){let M=v,R=v+1,y=v+2;s=El(this,p,t,i,c,h,d,M,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=g,A=g+1,v=g+2;s=El(this,o,t,i,c,h,d,b,A,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function y_(n,t,e,i,s,r,o,a){let l;if(t.side===An?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===As,a),l===null)return null;wl.copy(a),wl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(wl);return c<e.near||c>e.far?null:{distance:c,point:wl.clone(),object:n}}function El(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,vl),n.getVertexPosition(l,Ml),n.getVertexPosition(c,Sl);let h=y_(n,t,e,i,vl,Ml,Sl,vp);if(h){let d=new V;Ei.getBarycoord(vp,vl,Ml,Sl,d),s&&(h.uv=Ei.getInterpolatedAttribute(s,a,l,c,d,new se)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,a,l,c,d,new se)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new V,materialIndex:0};Ei.getNormal(vl,Ml,Sl,u.normal),h.face=u,h.barycoord=d}return h}var ea=class extends En{constructor(t=null,e=1,i=1,s,r,o,a,l,c=We,h=We,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var na=class extends me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fr=new be,Mp=new be,Tl=[],Sp=new Ii,v_=new be,zo=new Pe,Ho=new jn,ia=class extends Pe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,v_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fr),Sp.copy(t.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Sp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fr),Ho.copy(t.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),t.ray.intersectsSphere(Ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fr),Mp.multiplyMatrices(i,Fr),zo.matrixWorld=Mp,zo.raycast(t,Tl);for(let o=0,a=Tl.length;o<a;o++){let l=Tl[o];l.instanceId=r,l.object=this,e.push(l)}Tl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ea(new Float32Array(s*this.count),s,this.count,Tc,ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zs=new jn,M_=new se(.5,.5),Al=new V,sa=class{constructor(t=new hi,e=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ui,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],b=r[12],A=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-m,E-b).normalize(),s[1].setComponents(c+o,f+h,p+m,E+b).normalize(),s[2].setComponents(c+a,f+d,p+x,E+A).normalize(),s[3].setComponents(c-a,f-d,p-x,E-A).normalize(),i)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,f-u,p-g,E-v).normalize();else if(s[4].setComponents(c-l,f-u,p-g,E-v).normalize(),e===ui)s[5].setComponents(c+l,f+u,p+g,E+v).normalize();else if(e===Xo)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){Zs.center.set(0,0,0);let e=M_.distanceTo(t.center);return Zs.radius=.7071067811865476+e,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Al.x=s.normal.x>0?t.max.x:t.min.x,Al.y=s.normal.y>0?t.max.y:t.min.y,Al.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $r=class extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tc=new V,ec=new V,bp=new be,Vo=new qr,Cl=new jn,Ru=new V,wp=new V,nc=class extends Tn{constructor(t=new Ve,e=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)tc.fromBufferAttribute(e,s-1),ec.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=tc.distanceTo(ec);t.setAttribute("lineDistance",new nn(i,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),Cl.radius+=r,t.ray.intersectsSphere(Cl)===!1)return;bp.copy(s).invert(),Vo.copy(t.ray).applyMatrix4(bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),b=h.getX(x+1),A=Rl(this,t,Vo,l,p,b,x);A&&e.push(A)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Rl(this,t,Vo,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Rl(this,t,Vo,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Rl(this,t,Vo,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rl(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(tc.fromBufferAttribute(a,s),ec.fromBufferAttribute(a,r),e.distanceSqToSegment(tc,ec,Ru,wp)>i)return;Ru.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ru);if(!(c<t.near||c>t.far))return{distance:c,point:wp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ep=new V,Tp=new V,ra=class extends nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ep.fromBufferAttribute(e,s),Tp.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ep.distanceTo(Tp);t.setAttribute("lineDistance",new nn(i,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ic=class extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ap=new be,Fu=new qr,Il=new jn,Pl=new V,oa=class extends Tn{constructor(t=new Ve,e=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Il.radius+=r,t.ray.intersectsSphere(Il)===!1)return;Ap.copy(s).invert(),Fu.copy(t.ray).applyMatrix4(Ap);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Pl.fromBufferAttribute(d,g),Cp(Pl,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Pl.fromBufferAttribute(d,m),Cp(Pl,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cp(n,t,e,i,s,r,o){let a=Fu.distanceSqToPoint(n);if(a<e){let l=new V;Fu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var aa=class extends En{constructor(t=[],e=Cs,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Li=class extends En{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends En{constructor(t,e,i=fi,s,r,o,a=We,l=We,c,h=Ai,d=1){if(h!==Ai&&h!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sc=class extends bs{constructor(t,e=fi,i=Cs,s,r,o=We,a=We,l,c=Ai){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},la=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},zn=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function m(x,g,p,b,A,v,E,M,R,y,C){let D=v/R,F=E/y,H=v/2,N=E/2,I=M/2,O=R+1,q=y+1,G=0,et=0,B=new V;for(let X=0;X<q;X++){let K=X*F-N;for(let bt=0;bt<O;bt++){let gt=bt*D-H;B[x]=gt*b,B[g]=K*A,B[p]=I,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=M>0?1:-1,h.push(B.x,B.y,B.z),d.push(bt/R),d.push(1-X/y),G+=1}}for(let X=0;X<y;X++)for(let K=0;K<R;K++){let bt=u+K+O*X,gt=u+K+O*(X+1),Kt=u+(K+1)+O*(X+1),Ht=u+(K+1)+O*X;l.push(bt,gt,Ht),l.push(gt,Kt,Ht),et+=6}a.addGroup(f,et,C),f+=et,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ll=new V,Nl=new V,Iu=new V,Dl=new Ei,ca=class extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(kl*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=Dl;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Dl.getNormal(Iu),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let A=(b+1)%3,v=d[b],E=d[A],M=Dl[h[b]],R=Dl[h[A]],y=`${v}_${E}`,C=`${E}_${v}`;C in u&&u[C]?(Iu.dot(u[C].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(R.x,R.y,R.z)),u[C]=null):y in u||(u[y]={index0:c[b],index1:c[A],normal:Iu.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:g}=u[m];Ll.fromBufferAttribute(a,x),Nl.fromBufferAttribute(a,g),f.push(Ll.x,Ll.y,Ll.z),f.push(Nl.x,Nl.y,Nl.z)}this.setAttribute("position",new nn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ha=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*u-o;for(let A=0;A<c;A++){let v=A*d-r;m.push(v,-b,0),x.push(0,0,1),g.push(A/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let A=b+c*p,v=b+c*(p+1),E=b+1+c*(p+1),M=b+1+c*p;f.push(A,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ua=class n extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,u=new V,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let b=[],A=p/i,v=o+A*a,E=t*Math.cos(v),M=Math.sqrt(t*t-E*E),R=0;p===0&&o===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let C=y/e,D=s+C*r;d.x=-M*Math.cos(D),d.y=E,d.z=M*Math.sin(D),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(C+R,1-A),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let A=h[p][b+1],v=h[p][b],E=h[p+1][b],M=h[p+1][b+1];(p!==0||o>0)&&f.push(A,v,M),(p!==i-1||l<Math.PI)&&f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function nr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Rp(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Rp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function xn(n){let t={};for(let e=0;e<n.length;e++){let i=nr(n[e]);for(let s in i)t[s]=i[s]}return t}function Rp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function S_(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var _m={clone:nr,merge:xn},b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=S_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},rc=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var oc=class extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ac=class extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Pu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ws=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lc=class extends ws{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:r=t,a=2*e-i;break;case Uu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:o=t,l=2*i-e;break;case Uu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,b=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,A=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+b*o[c+E]+A*o[l+E]+v*o[d+E];return r}},cc=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},hc=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uc=class extends ws{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*u+m*2,b=d[p],A=d[p+1],v=t*u+m*2,E=h[v],M=h[v+1],R=T_(i,e,b,E,s);r[m]=ym(R,x,A,M,g)}return r}};function ym(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function E_(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function T_(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=ym(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=E_(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Pu(t.settings)&&(i.settings={inTangents:Or(t.settings.inTangents,Array),outTangents:Or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Go:e=this.InterpolantFactoryMethodDiscrete;break;case Yl:e=this.InterpolantFactoryMethodLinear;break;case Ol:e=this.InterpolantFactoryMethodSmooth;break;case Lu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Vt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Ol;case this.InterpolantFactoryMethodBezier:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Pu(this.settings)&&(Ip(this.settings.inTangents,t),Ip(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&e_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ol,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ip(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Yl;var Es=class extends Hn{constructor(t,e,i){super(t,e,i)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Go;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};dc.prototype.ValueTypeName="color";var fc=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};fc.prototype.ValueTypeName="number";var pc=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},da=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}};da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Hn{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Go;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};mc.prototype.ValueTypeName="vector";var gc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vm=new gc,xc=class{constructor(t){this.manager=t!==void 0?t:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ul=new V,Fl=new In,bi=new V,fa=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ul,Fl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ul,Fl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new V,Pp=new se,Lp=new se,mn=class extends fa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,e){return this.getViewBounds(t,Pp,Lp),e.subVectors(Lp,Pp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var pa=class extends fa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Br=-90,kr=1,_c=class extends Tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Br,kr,t,e);s.layers=this.layers,this.add(s);let r=new mn(Br,kr,t,e);r.layers=this.layers,this.add(r);let o=new mn(Br,kr,t,e);o.layers=this.layers,this.add(o);let a=new mn(Br,kr,t,e);a.layers=this.layers,this.add(a);let l=new mn(Br,kr,t,e);l.layers=this.layers,this.add(l);let c=new mn(Br,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},yc=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hd="\\[\\]\\.:\\/",A_=new RegExp("["+hd+"]","g"),ud="[^"+hd+"]",C_="[^"+hd.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",ud),I_=/(WCOD+)?/.source.replace("WCOD",C_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),N_=new RegExp("^"+R_+I_+P_+L_+"$"),D_=["material","materials","bones","map"],Ou=class{constructor(t,e,i){let s=i||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(t){let e=N_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);D_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Ou;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uw=new Float32Array(1);var Bu=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function dd(n,t,e,i){let s=U_(i);switch(e){case id:return n*t;case Tc:return n*t/s.components*s.byteLength;case Ac:return n*t/s.components*s.byteLength;case Ps:return n*t*2/s.components*s.byteLength;case Cc:return n*t*2/s.components*s.byteLength;case sd:return n*t*3/s.components*s.byteLength;case ei:return n*t*4/s.components*s.byteLength;case Rc:return n*t*4/s.components*s.byteLength;case _a:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case va:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:case Nc:return Math.max(n,16)*Math.max(t,8)/4;case Ic:case Lc:return Math.max(n,8)*Math.max(t,8)/2;case Dc:case Uc:case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Sa:case kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case th:case eh:case nh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ih:case sh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ba:case rh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U_(n){switch(n){case Vn:case Qu:return{byteLength:1,components:1};case Jr:case td:case pi:return{byteLength:2,components:1};case wc:case Ec:return{byteLength:2,components:4};case fi:case bc:case ti:return{byteLength:4,components:1};case ed:case nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function O_(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,py="gl_FragColor = linearToOutputTexel( gl_FragColor );",my=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,by=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ry=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Iy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Oy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,By=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ky=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:B_,alphahash_pars_fragment:k_,alphamap_fragment:z_,alphamap_pars_fragment:H_,alphatest_fragment:V_,alphatest_pars_fragment:G_,aomap_fragment:W_,aomap_pars_fragment:X_,batching_pars_vertex:q_,batching_vertex:$_,begin_vertex:Y_,beginnormal_vertex:Z_,bsdfs:J_,iridescence_fragment:K_,bumpmap_pars_fragment:j_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:ty,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ny,color_fragment:iy,color_pars_fragment:sy,color_pars_vertex:ry,color_vertex:oy,common:ay,cube_uv_reflection_fragment:ly,defaultnormal_vertex:cy,displacementmap_pars_vertex:hy,displacementmap_vertex:uy,emissivemap_fragment:dy,emissivemap_pars_fragment:fy,colorspace_fragment:py,colorspace_pars_fragment:my,envmap_fragment:gy,envmap_common_pars_fragment:xy,envmap_pars_fragment:_y,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Iy,envmap_vertex:vy,fog_vertex:My,fog_pars_vertex:Sy,fog_fragment:by,fog_pars_fragment:wy,gradientmap_pars_fragment:Ey,lightmap_pars_fragment:Ty,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:Cy,lights_pars_begin:Ry,lights_toon_fragment:Py,lights_toon_pars_fragment:Ly,lights_phong_fragment:Ny,lights_phong_pars_fragment:Dy,lights_physical_fragment:Uy,lights_physical_pars_fragment:Fy,lights_fragment_begin:Oy,lights_fragment_maps:By,lights_fragment_end:ky,lightprobes_pars_fragment:zy,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Vy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Wy,map_fragment:Xy,map_pars_fragment:qy,map_particle_fragment:$y,map_particle_pars_fragment:Yy,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Jy,morphinstance_vertex:Ky,morphcolor_vertex:jy,morphnormal_vertex:Qy,morphtarget_pars_vertex:tv,morphtarget_vertex:ev,normal_fragment_begin:nv,normal_fragment_maps:iv,normal_pars_fragment:sv,normal_pars_vertex:rv,normal_vertex:ov,normalmap_pars_fragment:av,clearcoat_normal_fragment_begin:lv,clearcoat_normal_fragment_maps:cv,clearcoat_pars_fragment:hv,iridescence_pars_fragment:uv,opaque_fragment:dv,packing:fv,premultiplied_alpha_fragment:pv,project_vertex:mv,dithering_fragment:gv,dithering_pars_fragment:xv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:vv,shadowmap_pars_vertex:Mv,shadowmap_vertex:Sv,shadowmask_pars_fragment:bv,skinbase_vertex:wv,skinning_pars_vertex:Ev,skinning_vertex:Tv,skinnormal_vertex:Av,specularmap_fragment:Cv,specularmap_pars_fragment:Rv,tonemapping_fragment:Iv,tonemapping_pars_fragment:Pv,transmission_fragment:Lv,transmission_pars_fragment:Nv,uv_pars_fragment:Dv,uv_pars_vertex:Uv,uv_vertex:Fv,worldpos_vertex:Ov,background_vert:Bv,background_frag:kv,backgroundCube_vert:zv,backgroundCube_frag:Hv,cube_vert:Vv,cube_frag:Gv,depth_vert:Wv,depth_frag:Xv,distance_vert:qv,distance_frag:$v,equirect_vert:Yv,equirect_frag:Zv,linedashed_vert:Jv,linedashed_frag:Kv,meshbasic_vert:jv,meshbasic_frag:Qv,meshlambert_vert:tM,meshlambert_frag:eM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:sM,meshnormal_frag:rM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:lM,meshphysical_frag:cM,meshtoon_vert:hM,meshtoon_frag:uM,points_vert:dM,points_frag:fM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:xM},vt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ui={basic:{uniforms:xn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:xn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:xn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:xn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:xn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:xn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:xn([vt.points,vt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:xn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:xn([vt.common,vt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:xn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:xn([vt.sprite,vt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:xn([vt.common,vt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:xn([vt.lights,vt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ui.physical={uniforms:xn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var lh={r:0,b:0,g:0},_M=new be,Gm=new Zt;Gm.set(-1,0,0,0,1,0,0,0,1);function yM(n,t,e,i,s,r){let o=new zt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let v=b.backgroundBlurriness>0;A=t.get(A,v)}return A}function m(b){let A=!1,v=f(b);v===null?g(o,a):v&&v.isColor&&(g(v,1),A=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===ga)?(c===void 0&&(c=new Pe(new zn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:nr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_M.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gm),c.material.toneMapped=re.getTransfer(v.colorSpace)!==ye,(h!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Pe(new ha(2,2),new gn({name:"BackgroundMaterial",uniforms:nr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,A){b.getRGB(lh,cd(n)),e.buffers.color.setClear(lh.r,lh.g,lh.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:m,addToRenderList:x,dispose:p}}function vM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(F,H,N,I,O){let q=!1,G=d(F,I,N,H);r!==G&&(r=G,c(r.object)),q=f(F,I,N,O),q&&m(F,I,N,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(F,H,N,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function d(F,H,N,I){let O=I.wireframe===!0,q=i[H.id];q===void 0&&(q={},i[H.id]=q);let G=F.isInstancedMesh===!0?F.id:0,et=q[G];et===void 0&&(et={},q[G]=et);let B=et[N.id];B===void 0&&(B={},et[N.id]=B);let X=B[O];return X===void 0&&(X=u(l()),B[O]=X),X}function u(F){let H=[],N=[],I=[];for(let O=0;O<e;O++)H[O]=0,N[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:N,attributeDivisors:I,object:F,attributes:{},index:null}}function f(F,H,N,I){let O=r.attributes,q=H.attributes,G=0,et=N.getAttributes();for(let B in et)if(et[B].location>=0){let K=O[B],bt=q[B];if(bt===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(bt=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(bt=F.instanceColor)),K===void 0||K.attribute!==bt||bt&&K.data!==bt.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function m(F,H,N,I){let O={},q=H.attributes,G=0,et=N.getAttributes();for(let B in et)if(et[B].location>=0){let K=q[B];K===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(K=F.instanceColor));let bt={};bt.attribute=K,K&&K.data&&(bt.data=K.data),O[B]=bt,G++}r.attributes=O,r.attributesNum=G,r.index=I}function x(){let F=r.newAttributes;for(let H=0,N=F.length;H<N;H++)F[H]=0}function g(F){p(F,0)}function p(F,H){let N=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;N[F]=1,I[F]===0&&(n.enableVertexAttribArray(F),I[F]=1),O[F]!==H&&(n.vertexAttribDivisor(F,H),O[F]=H)}function b(){let F=r.newAttributes,H=r.enabledAttributes;for(let N=0,I=H.length;N<I;N++)H[N]!==F[N]&&(n.disableVertexAttribArray(N),H[N]=0)}function A(F,H,N,I,O,q,G){G===!0?n.vertexAttribIPointer(F,H,N,O,q):n.vertexAttribPointer(F,H,N,I,O,q)}function v(F,H,N,I){x();let O=I.attributes,q=N.getAttributes(),G=H.defaultAttributeValues;for(let et in q){let B=q[et];if(B.location>=0){let X=O[et];if(X===void 0&&(et==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),et==="instanceColor"&&F.instanceColor&&(X=F.instanceColor)),X!==void 0){let K=X.normalized,bt=X.itemSize,gt=t.get(X);if(gt===void 0)continue;let Kt=gt.buffer,Ht=gt.type,Yt=gt.bytesPerElement,j=Ht===n.INT||Ht===n.UNSIGNED_INT||X.gpuType===bc;if(X.isInterleavedBufferAttribute){let Q=X.data,mt=Q.stride,Bt=X.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<B.locationSize;wt++)p(B.location+wt,Q.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<B.locationSize;wt++)g(B.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let wt=0;wt<B.locationSize;wt++)A(B.location+wt,bt/B.locationSize,Ht,K,mt*Yt,(Bt+bt/B.locationSize*wt)*Yt,j)}else{if(X.isInstancedBufferAttribute){for(let Q=0;Q<B.locationSize;Q++)p(B.location+Q,X.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Q=0;Q<B.locationSize;Q++)g(B.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let Q=0;Q<B.locationSize;Q++)A(B.location+Q,bt/B.locationSize,Ht,K,bt*Yt,bt/B.locationSize*Q*Yt,j)}}else if(G!==void 0){let K=G[et];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(B.location,K);break;case 3:n.vertexAttrib3fv(B.location,K);break;case 4:n.vertexAttrib4fv(B.location,K);break;default:n.vertexAttrib1fv(B.location,K)}}}}b()}function E(){C();for(let F in i){let H=i[F];for(let N in H){let I=H[N];for(let O in I){let q=I[O];for(let G in q)h(q[G].object),delete q[G];delete I[O]}}delete i[F]}}function M(F){if(i[F.id]===void 0)return;let H=i[F.id];for(let N in H){let I=H[N];for(let O in I){let q=I[O];for(let G in q)h(q[G].object),delete q[G];delete I[O]}}delete i[F.id]}function R(F){for(let H in i){let N=i[H];for(let I in N){let O=N[I];if(O[F.id]===void 0)continue;let q=O[F.id];for(let G in q)h(q[G].object),delete q[G];delete O[F.id]}}}function y(F){for(let H in i){let N=i[H],I=F.isInstancedMesh===!0?F.id:0,O=N[I];if(O!==void 0){for(let q in O){let G=O[q];for(let et in G)h(G[et].object),delete G[et];delete O[q]}delete N[I],Object.keys(N).length===0&&delete i[H]}}}function C(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function MM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function SM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Vn&&R!==ti&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:v,maxSamples:E,samples:M}}function bM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new hi,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:i,A=b*4,v=p.clippingState||null;l.value=v,v=h(m,u,A,f);for(let E=0;E!==A;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,v=f;A!==x;++A,v+=4)o.copy(d[A]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Qr=4,wM=6,EM=20,TM=256,wa=new pa,Mm=new zt,fd=null,pd=0,md=0,gd=!1,AM=new V,ir=new V,hh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=AM}=r;fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fd,pd,md),this._renderer.xr.enabled=gd,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:pi,format:ei,colorSpace:Ks,depthBuffer:!1},s=Sm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=CM(r)),this._blurMaterial=IM(r,t,e),this._ggxMaterial=RM(r,t,e)}return s}_compileMaterial(t){let e=new Pe(new Ve,t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,i,s,r){let l=new mn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Mm),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new zn,new on({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,p=!0):(g.color.copy(Mm),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let E=this._cubeSize;jr(s,v*E,A>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Cs||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,wa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-Qr?i-m+Qr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,jr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,jr(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,wa)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Qr?s-this._lodMax+Qr:0),u=4*(this._cubeSize-h);jr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,wa)}};function CM(n){let t=[],e=[],i=n,s=n-Qr+1+wM;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,A=p>2?0:-1,v=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];m.set(v,f*u*p);for(let E=0;E<u;E++){let M=h[E*2]*2-1,R=h[E*2+1]*2-1;p===0?ir.set(1,R,M):p===1?ir.set(-M,1,-R):p===2?ir.set(-M,R,1):p===3?ir.set(-1,R,-M):p===4?ir.set(-M,-1,R):ir.set(M,R,-1),ir.toArray(x,(p*u+E)*f)}}let g=new Ve;g.setAttribute("position",new me(m,f)),g.setAttribute("outputDirection",new me(x,f)),e.push(new Pe(g,null)),i>Qr&&i--}return{lodMeshes:e,sizeLods:t}}function Sm(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function RM(n,t,e){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function IM(n,t,e){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:EM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function bm(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wm(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uh=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ni});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=rn),new _c(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function PM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===vc||f===Mc)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new uh(m.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===vc||f===Mc,x=f===Cs||f===er;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new hh(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return m&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new hh(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===vc?u.mapping=Cs:f===Mc&&(u.mapping=er),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function LM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Js("WebGLRenderer: "+i+" extension not supported."),s}}}function NM(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let A=0,v=b.length;A<v;A+=3){let E=b[A+0],M=b[A+1],R=b[A+2];u.push(E,M,M,R,R,E)}}else{let b=m.array;x=m.version;for(let A=0,v=b.length/3-1;A<v;A+=3){let E=A+0,M=A+1,R=A+2;u.push(E,M,M,R,R,E)}}let g=new(m.count>=65535?Qo:jo)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function DM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function UM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function FM(n,t,e){let i=new WeakMap,s=new Be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let C=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),x===!0&&(A=3);let v=a.attributes.position.count*A,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*E*4*d),R=new Yo(M,v,E,d);R.type=ti,R.needsUpdate=!0;let y=A*4;for(let D=0;D<d;D++){let F=g[D],H=p[D],N=b[D],I=v*E*4*D;for(let O=0;O<F.count;O++){let q=O*y;f===!0&&(s.fromBufferAttribute(F,O),M[I+q+0]=s.x,M[I+q+1]=s.y,M[I+q+2]=s.z,M[I+q+3]=0),m===!0&&(s.fromBufferAttribute(H,O),M[I+q+4]=s.x,M[I+q+5]=s.y,M[I+q+6]=s.z,M[I+q+7]=0),x===!0&&(s.fromBufferAttribute(N,O),M[I+q+8]=s.x,M[I+q+9]=s.y,M[I+q+10]=s.z,M[I+q+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new se(v,E)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function OM(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var BM={[Xu]:"LINEAR_TONE_MAPPING",[qu]:"REINHARD_TONE_MAPPING",[$u]:"CINEON_TONE_MAPPING",[Yu]:"ACES_FILMIC_TONE_MAPPING",[Ju]:"AGX_TONE_MAPPING",[Ku]:"NEUTRAL_TONE_MAPPING",[Zu]:"CUSTOM_TONE_MAPPING"};function kM(n,t,e,i,s,r){let o=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ve;c.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nn([0,2,0,0,2,0],2));let h=new rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(c,h),u=new pa(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,b=[],A=!1;this.setSize=function(v,E){o.setSize(v,E),a!==null&&a.setSize(v,E),l!==null&&l.setSize(v,E);for(let M=0;M<b.length;M++){let R=b[M];R.setSize&&R.setSize(v,E)}},this.setEffects=function(v){b=v,A=b.length>0&&b[0].isRenderPass===!0;let E=o.width,M=o.height;b.length>0&&a===null&&(a=new Pn(E,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(E,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let y=b[R];y.setSize&&y.setSize(E,M)}},this.begin=function(v,E){if(x||v.toneMapping===di&&b.length===0)return!1;if(p=E,E!==null){let M=E.width,R=E.height;(o.width!==M||o.height!==R)&&this.setSize(M,R)}return A===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=di,!0},this.hasRenderPass=function(){return A},this.end=function(v,E){v.toneMapping=g,x=!0;let M=o,R=a;for(let y=0;y<b.length;y++){let C=b[y];C.enabled!==!1&&(C.render(v,R,M,E),C.needsSwap!==!1&&(M=R,R=R===a?l:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},re.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let y=BM[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Wm=new En,yd=new bs(1,1),Xm=new Yo,qm=new jl,$m=new aa,Em=[],Tm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function eo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Em[s];if(r===void 0&&(r=new Float32Array(s),Em[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ph(n,t){let e=Tm[t];e===void 0&&(e=new Int32Array(t),Tm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function zM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function HM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function VM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function GM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function WM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;Rm.set(i),n.uniformMatrix2fv(this.addr,!1,Rm),Qe(e,i)}}function XM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;Cm.set(i),n.uniformMatrix3fv(this.addr,!1,Cm),Qe(e,i)}}function qM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;Am.set(i),n.uniformMatrix4fv(this.addr,!1,Am),Qe(e,i)}}function $M(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function YM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function ZM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function JM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function KM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function QM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function t1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function e1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yd.compareFunction=e.isReversedDepthBuffer()?ah:oh,r=yd):r=Wm,e.setTexture2D(t||r,s)}function n1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qm,s)}function i1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$m,s)}function s1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xm,s)}function r1(n){switch(n){case 5126:return zM;case 35664:return HM;case 35665:return VM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return $M;case 35667:case 35671:return YM;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return KM;case 36294:return jM;case 36295:return QM;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(n,t){n.uniform1fv(this.addr,t)}function a1(n,t){let e=eo(t,this.size,2);n.uniform2fv(this.addr,e)}function l1(n,t){let e=eo(t,this.size,3);n.uniform3fv(this.addr,e)}function c1(n,t){let e=eo(t,this.size,4);n.uniform4fv(this.addr,e)}function h1(n,t){let e=eo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function u1(n,t){let e=eo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function d1(n,t){let e=eo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function f1(n,t){n.uniform1iv(this.addr,t)}function p1(n,t){n.uniform2iv(this.addr,t)}function m1(n,t){n.uniform3iv(this.addr,t)}function g1(n,t){n.uniform4iv(this.addr,t)}function x1(n,t){n.uniform1uiv(this.addr,t)}function _1(n,t){n.uniform2uiv(this.addr,t)}function y1(n,t){n.uniform3uiv(this.addr,t)}function v1(n,t){n.uniform4uiv(this.addr,t)}function M1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=yd:o=Wm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function S1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qm,r[o])}function b1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$m,r[o])}function w1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xm,r[o])}function E1(n){switch(n){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return h1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return x1;case 36294:return _1;case 36295:return y1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return w1}}var vd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=r1(e.type)}},Md=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E1(e.type)}},Sd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},xd=/(\w+)(\])?(\[|\.)?/g;function Im(n,t){n.seq.push(t),n.map[t.id]=t}function T1(n,t,e){let i=n.name,s=i.length;for(xd.lastIndex=0;;){let r=xd.exec(i),o=xd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Im(e,c===void 0?new vd(a,n,t):new Md(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Sd(a),Im(e,d)),e=d}}}var to=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);T1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Pm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var A1=37297,C1=0;function R1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Lm=new Zt;function I1(n){re._getMatrix(Lm,re.workingColorSpace,n);let t=`mat3( ${Lm.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Wo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+R1(n.getShaderSource(t),a)}else return r}function P1(n,t){let e=I1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var L1={[Xu]:"Linear",[qu]:"Reinhard",[$u]:"Cineon",[Yu]:"ACESFilmic",[Ju]:"AgX",[Ku]:"Neutral",[Zu]:"Custom"};function N1(n,t){let e=L1[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ch=new V;function D1(){re.getLuminanceCoefficients(ch);let n=ch.x.toFixed(4),t=ch.y.toFixed(4),e=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function F1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function O1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ta(n){return n!==""}function Dm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Um(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(n){return n.replace(B1,z1)}var k1=new Map;function z1(n,t){let e=ne[t];if(e===void 0){let i=k1.get(t);if(i!==void 0)e=ne[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bd(e)}var H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(n){return n.replace(H1,V1)}function V1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Om(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var G1={[ma]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function W1(n){return G1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var X1={[Cs]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function q1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":X1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var $1={[er]:"ENVMAP_MODE_REFRACTION"};function Y1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z1={[Wu]:"ENVMAP_BLENDING_MULTIPLY",[tm]:"ENVMAP_BLENDING_MIX",[em]:"ENVMAP_BLENDING_ADD"};function J1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Z1[n.combine]||"ENVMAP_BLENDING_NONE"}function K1(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function j1(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=W1(e),c=q1(e),h=Y1(e),d=J1(e),u=K1(e),f=U1(e),m=F1(r),x=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ta).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ta).join(`
`),p.length>0&&(p+=`
`)):(g=[Om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),p=[Om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?ne.tonemapping_pars_fragment:"",e.toneMapping!==di?N1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,P1("linearToOutputTexel",e.outputColorSpace),D1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ta).join(`
`)),o=bd(o),o=Dm(o,e),o=Um(o,e),a=bd(a),a=Dm(a,e),a=Um(a,e),o=Fm(o),a=Fm(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+g+o,v=b+p+a,E=Pm(s,s.VERTEX_SHADER,A),M=Pm(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(F){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(M)||"",O=H.trim(),q=N.trim(),G=I.trim(),et=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,M);else{let X=Nm(s,E,"vertex"),K=Nm(s,M,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+X+`
`+K)}else O!==""?Vt("WebGLProgram: Program Info Log:",O):(q===""||G==="")&&(B=!1);B&&(F.diagnostics={runnable:et,programLog:O,vertexShader:{log:q,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(E),s.deleteShader(M),y=new to(s,x),C=O1(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,A1)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=M,this}var Q1=0,wd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ed(t),e.set(t,i)),i}},Ed=class{constructor(t){this.id=Q1++,this.code=t,this.usedTimes=0}};function tS(n){return n===Ps||n===Sa||n===ba}function eS(n,t,e,i,s,r){let o=new Zo,a=new wd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,C,D,F,H,N){let I=F.fog,O=H.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,et=t.get(y.envMap||q,G),B=et&&et.mapping===ga?et.image.height:null,X=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Vt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,bt=K!==void 0?K.length:0,gt=0;O.morphAttributes.position!==void 0&&(gt=1),O.morphAttributes.normal!==void 0&&(gt=2),O.morphAttributes.color!==void 0&&(gt=3);let Kt,Ht,Yt,j;if(X){let Re=Ui[X];Kt=Re.vertexShader,Ht=Re.fragmentShader}else{Kt=y.vertexShader,Ht=y.fragmentShader;let Re=a.getVertexShaderStage(y),xe=a.getFragmentShaderStage(y);a.update(y,Re,xe),Yt=Re.id,j=xe.id}let Q=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),Bt=H.isInstancedMesh===!0,wt=H.isBatchedMesh===!0,kt=!!y.map,Se=!!y.matcap,Gt=!!et,Qt=!!y.aoMap,ue=!!y.lightMap,te=!!y.bumpMap&&y.wireframe===!1,S=!!y.normalMap,nt=!!y.displacementMap,tt=!!y.emissiveMap,ut=!!y.metalnessMap,at=!!y.roughnessMap,P=y.anisotropy>0,ge=y.clearcoat>0,le=y.dispersion>0,w=y.retroreflectivity>0,_=y.iridescence>0,L=y.sheen>0,U=y.transmission>0,W=P&&!!y.anisotropyMap,st=ge&&!!y.clearcoatMap,ot=ge&&!!y.clearcoatNormalMap,Z=ge&&!!y.clearcoatRoughnessMap,it=_&&!!y.iridescenceMap,pt=_&&!!y.iridescenceThicknessMap,Ct=L&&!!y.sheenColorMap,ft=L&&!!y.sheenRoughnessMap,dt=!!y.specularMap,Rt=!!y.specularColorMap,Ft=!!y.specularIntensityMap,Wt=U&&!!y.transmissionMap,z=U&&!!y.thicknessMap,xt=!!y.gradientMap,rt=!!y.alphaMap,_t=y.alphaTest>0,Et=!!y.alphaHash,lt=!!y.extensions,Ut=di;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let Nt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Kt,fragmentShader:Ht,defines:y.defines,customVertexShaderID:Yt,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:wt,batchingColor:wt&&H._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&H.instanceColor!==null,instancingMorph:Bt&&H.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:kt,matcap:Se,envMap:Gt,envMapMode:Gt&&et.mapping,envMapCubeUVHeight:B,aoMap:Qt,lightMap:ue,bumpMap:te,normalMap:S,displacementMap:nt,emissiveMap:tt,normalMapObjectSpace:S&&y.normalMapType===sm,normalMapTangentSpace:S&&y.normalMapType===rd,packedNormalMap:S&&y.normalMapType===rd&&tS(y.normalMap.format),metalnessMap:ut,roughnessMap:at,anisotropy:P,anisotropyMap:W,clearcoat:ge,clearcoatMap:st,clearcoatNormalMap:ot,clearcoatRoughnessMap:Z,dispersion:le,retroreflection:w,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:pt,sheen:L,sheenColorMap:Ct,sheenRoughnessMap:ft,specularMap:dt,specularColorMap:Rt,specularIntensityMap:Ft,transmission:U,transmissionMap:Wt,thicknessMap:z,gradientMap:xt,opaque:y.transparent===!1&&y.blending===Zr&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:_t,alphaHash:Et,combine:y.combine,mapUv:kt&&m(y.map.channel),aoMapUv:Qt&&m(y.aoMap.channel),lightMapUv:ue&&m(y.lightMap.channel),bumpMapUv:te&&m(y.bumpMap.channel),normalMapUv:S&&m(y.normalMap.channel),displacementMapUv:nt&&m(y.displacementMap.channel),emissiveMapUv:tt&&m(y.emissiveMap.channel),metalnessMapUv:ut&&m(y.metalnessMap.channel),roughnessMapUv:at&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:st&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&m(y.sheenRoughnessMap.channel),specularMapUv:dt&&m(y.specularMap.channel),specularColorMapUv:Rt&&m(y.specularColorMap.channel),specularIntensityMapUv:Ft&&m(y.specularIntensityMap.channel),transmissionMapUv:Wt&&m(y.transmissionMap.channel),thicknessMapUv:z&&m(y.thicknessMap.channel),alphaMapUv:rt&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(S||P),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(kt||rt),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&S===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:gt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:kt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:tt&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qn,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)C.push(D),C.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(C,y),b(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numSunLights),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numSunLightShadows),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function b(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function A(y){let C=f[y.type],D;if(C){let F=Ui[C];D=_m.clone(F.uniforms)}else D=y.uniforms;return D}function v(y,C){let D=h.get(C);return D!==void 0?++D.usedTimes:(D=new j1(n,C,y,s),c.push(D),h.set(C,D)),D}function E(y){if(--y.usedTimes===0){let C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:R}}function nS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function iS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Bm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function km(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,g,p){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=m,b.materialVariant=o(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=g,b.group=p),t++,b}function l(u,f,m,x,g,p,b){b.reversedDepth===!0&&(g=-g);let A=a(u,f,m,x,g,p);m.transmission>0?i.push(A):m.transparent===!0?s.push(A):e.push(A)}function c(u,f,m,x,g,p){let b=a(u,f,m,x,g,p);m.transmission>0?i.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||iS),i.length>1&&i.sort(f||Bm),s.length>1&&s.sort(f||Bm)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function sS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new km,n.set(i,[o])):s>=r.length?(o=new km,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function rS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new zt};break;case"SpotLight":e={position:new V,direction:new V,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function oS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var aS=0;function lS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cS(n){let t=new rS,e=oS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,A=0,v=0,E=0,M=0,R=0,y=0,C=0,D=0;c.sort(lS);for(let H=0,N=c.length;H<N;H++){let I=c[H],O=I.color,q=I.intensity,G=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ps?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*q,d+=O.g*q,u+=O.b*q;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],q);D++}else if(I.isSunLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,K=e.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[m]=K,i.sunShadowMap[m]=et;let bt=X.getViewportCount();for(let gt=0;gt<bt;gt++)i.sunShadowMatrix[x+gt]=X.getMatrix(gt),i.sunShadowCascade[x+gt]=X._cascadeData[gt];x+=bt,m++}i.sun[f]=B,f++}else if(I.isDirectionalLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,K=e.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=et,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=B,g++}else if(I.isSpotLight){let B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(O).multiplyScalar(q),B.distance=G,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[b]=B;let X=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,X.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[b]=X.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[b]=K,i.spotShadowMap[b]=et,R++}b++}else if(I.isRectAreaLight){let B=t.get(I);B.color.copy(O).multiplyScalar(q),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=B,A++}else if(I.isPointLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let X=I.shadow,K=e.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=et,i.pointShadowMatrix[p]=I.shadow.matrix,M++}i.point[p]=B,p++}else if(I.isHemisphereLight){let B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(q),B.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[v]=B,v++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.sunLength!==f||F.directionalLength!==g||F.pointLength!==p||F.spotLength!==b||F.rectAreaLength!==A||F.hemiLength!==v||F.numSunShadows!==m||F.numDirectionalShadows!==E||F.numPointShadows!==M||F.numSpotShadows!==R||F.numSpotMaps!==y||F.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=g,i.spot.length=b,i.rectArea.length=A,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,F.sunLength=f,F.directionalLength=g,F.pointLength=p,F.spotLength=b,F.rectAreaLength=A,F.hemiLength=v,F.numSunShadows=m,F.numDirectionalShadows=E,F.numPointShadows=M,F.numSpotShadows=R,F.numSpotMaps=y,F.numLightProbes=D,i.version=aS++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let v=c[b];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function zm(n){let t=new cS(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function hS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zm(n),t.set(s,[a])):r>=o.length?(a=new zm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var uS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fS=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],pS=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Hm=new be,Ea=new V,_d=new V;function mS(n,t,e){let i=new sa,s=new se,r=new se,o=new Be,a=new oc,l=new ac,c={},h=e.maxTextureSize,d={[As]:An,[An]:As,[Qn]:Qn},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:uS,fragmentShader:dS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ve;m.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let p=this.type;this.render=function(M,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Up&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ma);let C=n.getRenderTarget(),D=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ni),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==this.type;N&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=M.length;I<O;I++){let q=M[I],G=q.shadow;if(G===void 0){Vt("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let et=G.getFrameExtents();s.multiply(et),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,G.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=B,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Yr){if(q.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Pn(s.x,s.y,{format:Ps,type:pi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new bs(s.x,s.y,ti),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Ai,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=We,G.map.depthTexture.magFilter=We}else q.isPointLight?(G.map=new uh(s.x),G.map.depthTexture=new sc(s.x,fi)):(G.map=new Pn(s.x,s.y),G.map.depthTexture=new bs(s.x,s.y,fi)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Ai,this.type===ma?(G.map.depthTexture.compareFunction=B?ah:oh,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=We,G.map.depthTexture.magFilter=We);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let X=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,y);for(let K=0;K<X;K++){let bt=G.getCamera(K);if(q.isPointLight){let gt=G.camera,Kt=G.matrix,Ht=q.distance||gt.far;Ht!==gt.far&&(gt.far=Ht,gt.updateProjectionMatrix()),Ea.setFromMatrixPosition(q.matrixWorld),gt.position.copy(Ea),_d.copy(gt.position),_d.add(fS[K]),gt.up.copy(pS[K]),gt.lookAt(_d),gt.updateMatrixWorld(),Kt.makeTranslation(-Ea.x,-Ea.y,-Ea.z),Hm.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Hm,gt.coordinateSystem,gt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,K),n.clear();else{K===0&&(n.setRenderTarget(G.map),n.clear());let gt=G.getViewport(K);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),H.viewport(o)}i=G.getFrustum(K),v(R,y,bt,q,this.type)}G.isPointLightShadow!==!0&&this.type===Yr&&b(G,y),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(C,D,F)};function b(M,R){let y=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Pn(s.x,s.y,{format:Ps,type:pi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,y,f,x,null)}function A(M,R,y,C){let D=null,F=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0)D=F;else if(D=y.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let H=D.uuid,N=R.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let O=I[N];O===void 0&&(O=D.clone(),I[N]=O,R.addEventListener("dispose",E)),D=O}if(D.visible=R.visible,D.wireframe=R.wireframe,C===Yr?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let H=n.properties.get(D);H.light=y}return D}function v(M,R,y,C,D){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===Yr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let N=t.update(M),I=M.material;if(Array.isArray(I)){let O=N.groups;for(let q=0,G=O.length;q<G;q++){let et=O[q],B=I[et.materialIndex];if(B&&B.visible){let X=A(M,B,C,D);M.onBeforeShadow(n,M,R,y,N,X,et),n.renderBufferDirect(y,null,N,X,M,et),M.onAfterShadow(n,M,R,y,N,X,et)}}}else if(I.visible){let O=A(M,I,C,D);M.onBeforeShadow(n,M,R,y,N,O,null),n.renderBufferDirect(y,null,N,O,M,null),M.onAfterShadow(n,M,R,y,N,O,null)}}let H=M.children;for(let N=0,I=H.length;N<I;N++)v(H[N],R,y,C,D)}function E(M){M.target.removeEventListener("dispose",E);for(let y in c){let C=c[y],D=M.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function gS(n,t){function e(){let z=!1,xt=new Be,rt=null,_t=new Be(0,0,0,0);return{setMask:function(Et){rt!==Et&&!z&&(n.colorMask(Et,Et,Et,Et),rt=Et)},setLocked:function(Et){z=Et},setClear:function(Et,lt,Ut,Nt,Re){Re===!0&&(Et*=Nt,lt*=Nt,Ut*=Nt),xt.set(Et,lt,Ut,Nt),_t.equals(xt)===!1&&(n.clearColor(Et,lt,Ut,Nt),_t.copy(xt))},reset:function(){z=!1,rt=null,_t.set(-1,0,0,0)}}}function i(){let z=!1,xt=!1,rt=null,_t=null,Et=null;return{setReversed:function(lt){if(xt!==lt){let Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),xt=lt;let Nt=Et;Et=null,this.setClear(Nt)}},getReversed:function(){return xt},setTest:function(lt){lt?Q(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(lt){rt!==lt&&!z&&(n.depthMask(lt),rt=lt)},setFunc:function(lt){if(xt&&(lt=mm[lt]),_t!==lt){switch(lt){case zl:n.depthFunc(n.NEVER);break;case Hl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case Hr:n.depthFunc(n.LEQUAL);break;case Gl:n.depthFunc(n.EQUAL);break;case Wl:n.depthFunc(n.GEQUAL);break;case Xl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=lt}},setLocked:function(lt){z=lt},setClear:function(lt){Et!==lt&&(Et=lt,xt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){z=!1,rt=null,_t=null,Et=null,xt=!1}}}function s(){let z=!1,xt=null,rt=null,_t=null,Et=null,lt=null,Ut=null,Nt=null,Re=null;return{setTest:function(xe){z||(xe?Q(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(xe){xt!==xe&&!z&&(n.stencilMask(xe),xt=xe)},setFunc:function(xe,oi,Mi){(rt!==xe||_t!==oi||Et!==Mi)&&(n.stencilFunc(xe,oi,Mi),rt=xe,_t=oi,Et=Mi)},setOp:function(xe,oi,Mi){(lt!==xe||Ut!==oi||Nt!==Mi)&&(n.stencilOp(xe,oi,Mi),lt=xe,Ut=oi,Nt=Mi)},setLocked:function(xe){z=xe},setClear:function(xe){Re!==xe&&(n.clearStencil(xe),Re=xe)},reset:function(){z=!1,xt=null,rt=null,_t=null,Et=null,lt=null,Ut=null,Nt=null,Re=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,A=null,v=null,E=null,M=null,R=null,y=new zt(0,0,0),C=0,D=!1,F=null,H=null,N=null,I=null,O=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,et=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=et>=1):B.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=et>=2);let X=null,K={},bt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Kt=new Be().fromArray(bt),Ht=new Be().fromArray(gt);function Yt(z,xt,rt,_t){let Et=new Uint8Array(4),lt=n.createTexture();n.bindTexture(z,lt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<rt;Ut++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(xt+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return lt}let j={};j[n.TEXTURE_2D]=Yt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(Hr),te(!1),S(ku),Q(n.CULL_FACE),Qt(Ni);function Q(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function mt(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Bt(z,xt){return u[z]!==xt?(n.bindFramebuffer(z,xt),u[z]=xt,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=xt),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function wt(z,xt){let rt=m,_t=!1;if(z){rt=f.get(xt),rt===void 0&&(rt=[],f.set(xt,rt));let Et=z.textures;if(rt.length!==Et.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Ut=Et.length;lt<Ut;lt++)rt[lt]=n.COLOR_ATTACHMENT0+lt;rt.length=Et.length,_t=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,_t=!0);_t&&n.drawBuffers(rt)}function kt(z){return x!==z?(n.useProgram(z),x=z,!0):!1}let Se={[tr]:n.FUNC_ADD,[Op]:n.FUNC_SUBTRACT,[Bp]:n.FUNC_REVERSE_SUBTRACT};Se[kp]=n.MIN,Se[zp]=n.MAX;let Gt={[Hp]:n.ZERO,[Vp]:n.ONE,[Gp]:n.SRC_COLOR,[Vu]:n.SRC_ALPHA,[Zp]:n.SRC_ALPHA_SATURATE,[$p]:n.DST_COLOR,[Xp]:n.DST_ALPHA,[Wp]:n.ONE_MINUS_SRC_COLOR,[Gu]:n.ONE_MINUS_SRC_ALPHA,[Yp]:n.ONE_MINUS_DST_COLOR,[qp]:n.ONE_MINUS_DST_ALPHA,[Jp]:n.CONSTANT_COLOR,[Kp]:n.ONE_MINUS_CONSTANT_COLOR,[jp]:n.CONSTANT_ALPHA,[Qp]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(z,xt,rt,_t,Et,lt,Ut,Nt,Re,xe){if(z===Ni){g===!0&&(mt(n.BLEND),g=!1);return}if(g===!1&&(Q(n.BLEND),g=!0),z!==Fp){if(z!==p||xe!==D){if((b!==tr||E!==tr)&&(n.blendEquation(n.FUNC_ADD),b=tr,E=tr),xe)switch(z){case Zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qs:n.blendFunc(n.ONE,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xt("WebGLState: Invalid blending: ",z);break}else switch(z){case Zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zu:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",z);break}A=null,v=null,M=null,R=null,y.set(0,0,0),C=0,p=z,D=xe}return}Et=Et||xt,lt=lt||rt,Ut=Ut||_t,(xt!==b||Et!==E)&&(n.blendEquationSeparate(Se[xt],Se[Et]),b=xt,E=Et),(rt!==A||_t!==v||lt!==M||Ut!==R)&&(n.blendFuncSeparate(Gt[rt],Gt[_t],Gt[lt],Gt[Ut]),A=rt,v=_t,M=lt,R=Ut),(Nt.equals(y)===!1||Re!==C)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Re),y.copy(Nt),C=Re),p=z,D=!1}function ue(z,xt){z.side===Qn?mt(n.CULL_FACE):Q(n.CULL_FACE);let rt=z.side===An;xt&&(rt=!rt),te(rt),z.blending===Zr&&z.transparent===!1?Qt(Ni):Qt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let _t=z.stencilWrite;a.setTest(_t),_t&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),tt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){F!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),F=z)}function S(z){z!==Np?(Q(n.CULL_FACE),z!==H&&(z===ku?n.cullFace(n.BACK):z===Dp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),H=z}function nt(z){z!==N&&(G&&n.lineWidth(z),N=z)}function tt(z,xt,rt){z?(Q(n.POLYGON_OFFSET_FILL),(I!==xt||O!==rt)&&(I=xt,O=rt,o.getReversed()&&(xt=-xt),n.polygonOffset(xt,rt))):mt(n.POLYGON_OFFSET_FILL)}function ut(z){z?Q(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function at(z){z===void 0&&(z=n.TEXTURE0+q-1),X!==z&&(n.activeTexture(z),X=z)}function P(z,xt,rt){rt===void 0&&(X===null?rt=n.TEXTURE0+q-1:rt=X);let _t=K[rt];_t===void 0&&(_t={type:void 0,texture:void 0},K[rt]=_t),(_t.type!==z||_t.texture!==xt)&&(X!==rt&&(n.activeTexture(rt),X=rt),n.bindTexture(z,xt||j[z]),_t.type=z,_t.texture=xt)}function ge(){let z=K[X];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function le(){try{n.compressedTexImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function _(){try{n.texSubImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function L(){try{n.texSubImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function st(){try{n.texStorage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function ot(){try{n.texStorage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function Z(){try{n.texImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function it(){try{n.texImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function pt(z){return d[z]!==void 0?d[z]:n.getParameter(z)}function Ct(z,xt){d[z]!==xt&&(n.pixelStorei(z,xt),d[z]=xt)}function ft(z){Kt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Kt.copy(z))}function dt(z){Ht.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Ht.copy(z))}function Rt(z,xt){let rt=c.get(xt);rt===void 0&&(rt=new WeakMap,c.set(xt,rt));let _t=rt.get(z);_t===void 0&&(_t=n.getUniformBlockIndex(xt,z.name),rt.set(z,_t))}function Ft(z,xt){let _t=c.get(xt).get(z);l.get(xt)!==_t&&(n.uniformBlockBinding(xt,_t,z.__bindingPointIndex),l.set(xt,_t))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,K={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,A=null,v=null,E=null,M=null,R=null,y=new zt(0,0,0),C=0,D=!1,F=null,H=null,N=null,I=null,O=null,Kt.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:mt,bindFramebuffer:Bt,drawBuffers:wt,useProgram:kt,setBlending:Qt,setMaterial:ue,setFlipSided:te,setCullFace:S,setLineWidth:nt,setPolygonOffset:tt,setScissorTest:ut,activeTexture:at,bindTexture:P,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:w,texImage2D:Z,texImage3D:it,pixelStorei:Ct,getParameter:pt,updateUBOMapping:Rt,uniformBlockBinding:Ft,texStorage2D:st,texStorage3D:ot,texSubImage2D:_,texSubImage3D:L,compressedTexSubImage2D:U,compressedTexSubImage3D:W,scissor:ft,viewport:dt,reset:Wt}}function xS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return m?new OffscreenCanvas(w,_):qo("canvas")}function g(w,_,L){let U=1,W=le(w);if((W.width>L||W.height>L)&&(U=L/Math.max(W.width,W.height)),U<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let st=Math.floor(U*W.width),ot=Math.floor(U*W.height);u===void 0&&(u=x(st,ot));let Z=_?x(st,ot):u;return Z.width=st,Z.height=ot,Z.getContext("2d").drawImage(w,0,0,st,ot),Vt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+st+"x"+ot+")."),Z}else return"data"in w&&Vt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function b(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,_,L,U,W,st=!1){if(w!==null){if(n[w]!==void 0)return n[w];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot;U&&(ot=t.get("EXT_texture_norm16"),ot||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===n.RED&&(L===n.FLOAT&&(Z=n.R32F),L===n.HALF_FLOAT&&(Z=n.R16F),L===n.UNSIGNED_BYTE&&(Z=n.R8),L===n.UNSIGNED_SHORT&&ot&&(Z=ot.R16_EXT),L===n.SHORT&&ot&&(Z=ot.R16_SNORM_EXT)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.R8UI),L===n.UNSIGNED_SHORT&&(Z=n.R16UI),L===n.UNSIGNED_INT&&(Z=n.R32UI),L===n.BYTE&&(Z=n.R8I),L===n.SHORT&&(Z=n.R16I),L===n.INT&&(Z=n.R32I)),_===n.RG&&(L===n.FLOAT&&(Z=n.RG32F),L===n.HALF_FLOAT&&(Z=n.RG16F),L===n.UNSIGNED_BYTE&&(Z=n.RG8),L===n.UNSIGNED_SHORT&&ot&&(Z=ot.RG16_EXT),L===n.SHORT&&ot&&(Z=ot.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RG8UI),L===n.UNSIGNED_SHORT&&(Z=n.RG16UI),L===n.UNSIGNED_INT&&(Z=n.RG32UI),L===n.BYTE&&(Z=n.RG8I),L===n.SHORT&&(Z=n.RG16I),L===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),L===n.UNSIGNED_INT&&(Z=n.RGB32UI),L===n.BYTE&&(Z=n.RGB8I),L===n.SHORT&&(Z=n.RGB16I),L===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),L===n.UNSIGNED_INT&&(Z=n.RGBA32UI),L===n.BYTE&&(Z=n.RGBA8I),L===n.SHORT&&(Z=n.RGBA16I),L===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&(L===n.UNSIGNED_SHORT&&ot&&(Z=ot.RGB16_EXT),L===n.SHORT&&ot&&(Z=ot.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),_===n.RGBA){let it=st?Wo:re.getTransfer(W);L===n.FLOAT&&(Z=n.RGBA32F),L===n.HALF_FLOAT&&(Z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Z=it===ye?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&ot&&(Z=ot.RGBA16_EXT),L===n.SHORT&&ot&&(Z=ot.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(w,_){let L;return w?_===null||_===fi||_===Kr?L=n.DEPTH24_STENCIL8:_===ti?L=n.DEPTH32F_STENCIL8:_===Jr&&(L=n.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===Kr?L=n.DEPTH_COMPONENT24:_===ti?L=n.DEPTH_COMPONENT32F:_===Jr&&(L=n.DEPTH_COMPONENT16),L}function M(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==We&&w.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),C(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(w){let _=w.target;_.removeEventListener("dispose",y),F(_)}function C(w){let _=i.get(w);if(_.__webglInit===void 0)return;let L=w.source,U=f.get(L);if(U){let W=U[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&D(w),Object.keys(U).length===0&&f.delete(L)}i.remove(w)}function D(w){let _=i.get(w);n.deleteTexture(_.__webglTexture);let L=w.source,U=f.get(L);delete U[_.__cacheKey],o.memory.textures--}function F(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(_.__webglFramebuffer[U]))for(let W=0;W<_.__webglFramebuffer[U].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[U][W]);else n.deleteFramebuffer(_.__webglFramebuffer[U]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[U])}else{if(Array.isArray(_.__webglFramebuffer))for(let U=0;U<_.__webglFramebuffer.length;U++)n.deleteFramebuffer(_.__webglFramebuffer[U]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let U=0;U<_.__webglColorRenderbuffer.length;U++)_.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[U]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let L=w.textures;for(let U=0,W=L.length;U<W;U++){let st=i.get(L[U]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),o.memory.textures--),i.remove(L[U])}i.remove(w)}let H=0;function N(){H=0}function I(){return H}function O(w){H=w}function q(){let w=H;return w>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,w}function G(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function et(w,_){let L=i.get(w);if(w.isVideoTexture&&P(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&L.__version!==w.version){let U=w.image;if(U===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(L,w,_);return}}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function B(w,_){let L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){mt(L,w,_);return}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function X(w,_){let L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){mt(L,w,_);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function K(w,_){let L=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&L.__version!==w.version){Bt(L,w,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}let bt={[Vr]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},gt={[We]:n.NEAREST,[nm]:n.NEAREST_MIPMAP_NEAREST,[xa]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Sc]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},Kt={[om]:n.NEVER,[um]:n.ALWAYS,[am]:n.LESS,[oh]:n.LEQUAL,[lm]:n.EQUAL,[ah]:n.GEQUAL,[cm]:n.GREATER,[hm]:n.NOTEQUAL};function Ht(w,_){if(_.type===ti&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===Sc||_.magFilter===xa||_.magFilter===Rs||_.minFilter===rn||_.minFilter===Sc||_.minFilter===xa||_.minFilter===Rs)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,bt[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,bt[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,bt[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,gt[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,gt[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Kt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===We||_.minFilter!==xa&&_.minFilter!==Rs||_.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Yt(w,_){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let U=_.source,W=f.get(U);W===void 0&&(W={},f.set(U,W));let st=G(_);if(st!==w.__cacheKey){W[st]===void 0&&(W[st]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),W[st].usedTimes++;let ot=W[w.__cacheKey];ot!==void 0&&(W[w.__cacheKey].usedTimes--,ot.usedTimes===0&&D(_)),w.__cacheKey=st,w.__webglTexture=W[st].texture}return L}function j(w,_,L){return Math.floor(Math.floor(w/L)/_)}function Q(w,_,L,U){let st=w.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,U,_.data);else{st.sort((Ct,ft)=>Ct.start-ft.start);let ot=0;for(let Ct=1;Ct<st.length;Ct++){let ft=st[ot],dt=st[Ct],Rt=ft.start+ft.count,Ft=j(dt.start,_.width,4),Wt=j(ft.start,_.width,4);dt.start<=Rt+1&&Ft===Wt&&j(dt.start+dt.count-1,_.width,4)===Ft?ft.count=Math.max(ft.count,dt.start+dt.count-ft.start):(++ot,st[ot]=dt)}st.length=ot+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ct=0,ft=st.length;Ct<ft;Ct++){let dt=st[Ct],Rt=Math.floor(dt.start/4),Ft=Math.ceil(dt.count/4),Wt=Rt%_.width,z=Math.floor(Rt/_.width),xt=Ft,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,Wt,z,xt,rt,L,U,_.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,pt)}}function mt(w,_,L){let U=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=n.TEXTURE_3D);let W=Yt(w,_),st=_.source;e.bindTexture(U,w.__webglTexture,n.TEXTURE0+L);let ot=i.get(st);if(st.version!==ot.__version||W===!0){if(e.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let rt=re.getPrimaries(re.workingColorSpace),_t=_.colorSpace===ni?null:re.getPrimaries(_.colorSpace),Et=_.colorSpace===ni||rt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let it=g(_.image,!1,s.maxTextureSize);it=ge(_,it);let pt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type),ft=v(_.internalFormat,pt,Ct,_.normalized,_.colorSpace,_.isVideoTexture);Ht(U,_);let dt,Rt=_.mipmaps,Ft=_.isVideoTexture!==!0,Wt=ot.__version===void 0||W===!0,z=st.dataReady,xt=M(_,it);if(_.isDepthTexture)ft=E(_.format===Is,_.type),Wt&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,ft,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,ft,it.width,it.height,0,pt,Ct,null));else if(_.isDataTexture)if(Rt.length>0){Ft&&Wt&&e.texStorage2D(n.TEXTURE_2D,xt,ft,Rt[0].width,Rt[0].height);for(let rt=0,_t=Rt.length;rt<_t;rt++)dt=Rt[rt],Ft?z&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,dt.width,dt.height,pt,Ct,dt.data):e.texImage2D(n.TEXTURE_2D,rt,ft,dt.width,dt.height,0,pt,Ct,dt.data);_.generateMipmaps=!1}else Ft?(Wt&&e.texStorage2D(n.TEXTURE_2D,xt,ft,it.width,it.height),z&&Q(_,it,pt,Ct)):e.texImage2D(n.TEXTURE_2D,0,ft,it.width,it.height,0,pt,Ct,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,ft,Rt[0].width,Rt[0].height,it.depth);for(let rt=0,_t=Rt.length;rt<_t;rt++)if(dt=Rt[rt],_.format!==ei)if(pt!==null)if(Ft){if(z)if(_.layerUpdates.size>0){let Et=dd(dt.width,dt.height,_.format,_.type);for(let lt of _.layerUpdates){let Ut=dt.data.subarray(lt*Et/dt.data.BYTES_PER_ELEMENT,(lt+1)*Et/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,lt,dt.width,dt.height,1,pt,Ut)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,dt.width,dt.height,it.depth,pt,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,ft,dt.width,dt.height,it.depth,0,dt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,dt.width,dt.height,it.depth,pt,Ct,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,ft,dt.width,dt.height,it.depth,0,pt,Ct,dt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ft&&Wt&&e.texStorage2D(n.TEXTURE_2D,xt,ft,Rt[0].width,Rt[0].height);for(let rt=0,_t=Rt.length;rt<_t;rt++)dt=Rt[rt],_.format!==ei?pt!==null?Ft?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,dt.width,dt.height,pt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,ft,dt.width,dt.height,0,dt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?z&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,dt.width,dt.height,pt,Ct,dt.data):e.texImage2D(n.TEXTURE_2D,rt,ft,dt.width,dt.height,0,pt,Ct,dt.data)}else if(_.isDataArrayTexture)if(Ft){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,ft,it.width,it.height,it.depth),z)if(_.layerUpdates.size>0){let rt=dd(it.width,it.height,_.format,_.type);for(let _t of _.layerUpdates){let Et=it.data.subarray(_t*rt/it.data.BYTES_PER_ELEMENT,(_t+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,it.width,it.height,1,pt,Ct,Et)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ft,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isData3DTexture)Ft?(Wt&&e.texStorage3D(n.TEXTURE_3D,xt,ft,it.width,it.height,it.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)):e.texImage3D(n.TEXTURE_3D,0,ft,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isFramebufferTexture){if(Wt)if(Ft)e.texStorage2D(n.TEXTURE_2D,xt,ft,it.width,it.height);else{let rt=it.width,_t=it.height;for(let Et=0;Et<xt;Et++)e.texImage2D(n.TEXTURE_2D,Et,ft,rt,_t,0,pt,Ct,null),rt>>=1,_t>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),it.parentNode!==rt){rt.appendChild(it),d.add(_),rt.onpaint=_t=>{let Et=_t.changedElements;for(let lt of d)Et.includes(lt.image)&&(lt.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Et=n.RGBA,lt=n.RGBA,Ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Et,lt,Ut,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Ft&&Wt){let rt=le(Rt[0]);e.texStorage2D(n.TEXTURE_2D,xt,ft,rt.width,rt.height)}for(let rt=0,_t=Rt.length;rt<_t;rt++)dt=Rt[rt],Ft?z&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,pt,Ct,dt):e.texImage2D(n.TEXTURE_2D,rt,ft,pt,Ct,dt);_.generateMipmaps=!1}else if(Ft){if(Wt){let rt=le(it);e.texStorage2D(n.TEXTURE_2D,xt,ft,rt.width,rt.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Ct,it)}else e.texImage2D(n.TEXTURE_2D,0,ft,pt,Ct,it);p(_)&&b(U),ot.__version=st.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Bt(w,_,L){if(_.image.length!==6)return;let U=Yt(w,_),W=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+L);let st=i.get(W);if(W.version!==st.__version||U===!0){e.activeTexture(n.TEXTURE0+L);let ot=re.getPrimaries(re.workingColorSpace),Z=_.colorSpace===ni?null:re.getPrimaries(_.colorSpace),it=_.colorSpace===ni||ot===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let pt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ct=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let lt=0;lt<6;lt++)!pt&&!Ct?ft[lt]=g(_.image[lt],!0,s.maxCubemapSize):ft[lt]=Ct?_.image[lt].image:_.image[lt],ft[lt]=ge(_,ft[lt]);let dt=ft[0],Rt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),Wt=v(_.internalFormat,Rt,Ft,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,xt=st.__version===void 0||U===!0,rt=W.dataReady,_t=M(_,dt);Ht(n.TEXTURE_CUBE_MAP,_);let Et;if(pt){z&&xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Wt,dt.width,dt.height);for(let lt=0;lt<6;lt++){Et=ft[lt].mipmaps;for(let Ut=0;Ut<Et.length;Ut++){let Nt=Et[Ut];_.format!==ei?Rt!==null?z?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Nt.width,Nt.height,Rt,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Wt,Nt.width,Nt.height,0,Nt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Nt.width,Nt.height,Rt,Ft,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Wt,Nt.width,Nt.height,0,Rt,Ft,Nt.data)}}}else{if(Et=_.mipmaps,z&&xt){Et.length>0&&_t++;let lt=le(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Wt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ct){z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ft[lt].width,ft[lt].height,Rt,Ft,ft[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,ft[lt].width,ft[lt].height,0,Rt,Ft,ft[lt].data);for(let Ut=0;Ut<Et.length;Ut++){let Re=Et[Ut].image[lt].image;z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,Re.width,Re.height,Rt,Ft,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Wt,Re.width,Re.height,0,Rt,Ft,Re.data)}}else{z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Rt,Ft,ft[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,Rt,Ft,ft[lt]);for(let Ut=0;Ut<Et.length;Ut++){let Nt=Et[Ut];z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,Rt,Ft,Nt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Wt,Rt,Ft,Nt.image[lt])}}}p(_)&&b(n.TEXTURE_CUBE_MAP),st.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function wt(w,_,L,U,W,st){let ot=r.convert(L.format,L.colorSpace),Z=r.convert(L.type),it=v(L.internalFormat,ot,Z,L.normalized,L.colorSpace),pt=i.get(_),Ct=i.get(L);if(Ct.__renderTarget=_,!pt.__hasExternalTextures){let ft=Math.max(1,_.width>>st),dt=Math.max(1,_.height>>st);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,st,it,ft,dt,_.depth,0,ot,Z,null):e.texImage2D(W,st,it,ft,dt,0,ot,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),at(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,W,Ct.__webglTexture,0,ut(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,W,Ct.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(w,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){let U=_.depthTexture,W=U&&U.isDepthTexture?U.type:null,st=E(_.stencilBuffer,W),ot=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;at(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(_),st,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(_),st,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,st,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,w)}else{let U=_.textures;for(let W=0;W<U.length;W++){let st=U[W],ot=r.convert(st.format,st.colorSpace),Z=r.convert(st.type),it=v(st.internalFormat,ot,Z,st.normalized,st.colorSpace);at(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(_),it,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(_),it,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,it,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,_,L){let U=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,_.depthTexture);let pt=r.convert(_.depthTexture.format),Ct=r.convert(_.depthTexture.type),ft;_.depthTexture.format===Ai?ft=n.DEPTH_COMPONENT24:_.depthTexture.format===Is&&(ft=n.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ft,_.width,_.height,0,pt,Ct,null)}}else et(_.depthTexture,0);let st=W.__webglTexture,ot=ut(_),Z=U?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,it=_.depthTexture.format===Is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ai)at(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Z,st,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,it,Z,st,0);else if(_.depthTexture.format===Is)at(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Z,st,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,it,Z,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(w){let _=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let U=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),U){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,U.removeEventListener("dispose",W)};U.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=U}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let U=0;U<6;U++)Se(_.__webglFramebuffer[U],w,U);else{let U=w.texture.mipmaps;U&&U.length>0?Se(_.__webglFramebuffer[0],w,0):Se(_.__webglFramebuffer,w,0)}else if(L){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]===void 0)_.__webglDepthbuffer[U]=n.createRenderbuffer(),kt(_.__webglDepthbuffer[U],w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,st)}}else{let U=w.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),kt(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(w,_,L){let U=i.get(w);_!==void 0&&wt(U.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Gt(w)}function ue(w){let _=w.texture,L=i.get(w),U=i.get(_);w.addEventListener("dispose",y);let W=w.textures,st=w.isWebGLCubeRenderTarget===!0,ot=W.length>1;if(ot||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=_.version,o.memory.textures++),st){L.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[Z]=[];for(let it=0;it<_.mipmaps.length;it++)L.__webglFramebuffer[Z][it]=n.createFramebuffer()}else L.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)L.__webglFramebuffer[Z]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ot)for(let Z=0,it=W.length;Z<it;Z++){let pt=i.get(W[Z]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&at(w)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Z=0;Z<W.length;Z++){let it=W[Z];L.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);let pt=r.convert(it.format,it.colorSpace),Ct=r.convert(it.type),ft=v(it.internalFormat,pt,Ct,it.normalized,it.colorSpace,w.isXRRenderTarget===!0),dt=ut(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,ft,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,L.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(L.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)wt(L.__webglFramebuffer[Z][it],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,it);else wt(L.__webglFramebuffer[Z],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(_)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let Z=0,it=W.length;Z<it;Z++){let pt=W[Z],Ct=i.get(pt),ft=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,Ct.__webglTexture),Ht(ft,pt),wt(L.__webglFramebuffer,w,pt,n.COLOR_ATTACHMENT0+Z,ft,0),p(pt)&&b(ft)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,U.__webglTexture),Ht(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)wt(L.__webglFramebuffer[it],w,_,n.COLOR_ATTACHMENT0,Z,it);else wt(L.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,Z,0);p(_)&&b(Z),e.unbindTexture()}w.depthBuffer&&Gt(w)}function te(w){let _=w.textures;for(let L=0,U=_.length;L<U;L++){let W=_[L];if(p(W)){let st=A(w),ot=i.get(W).__webglTexture;e.bindTexture(st,ot),b(st),e.unbindTexture()}}}let S=[],nt=[];function tt(w){if(w.samples>0){if(at(w)===!1){let _=w.textures,L=w.width,U=w.height,W=n.COLOR_BUFFER_BIT,st=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(w),Z=_.length>1;if(Z)for(let pt=0;pt<_.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let it=w.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let pt=0;pt<_.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[pt]);let Ct=i.get(_[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ct,0)}n.blitFramebuffer(0,0,L,U,0,0,L,U,W,n.NEAREST),l===!0&&(S.length=0,nt.length=0,S.push(n.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(S.push(st),nt.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let pt=0;pt<_.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ot.__webglColorRenderbuffer[pt]);let Ct=i.get(_[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ut(w){return Math.min(s.maxSamples,w.samples)}function at(w){let _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function ge(w,_){let L=w.colorSpace,U=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Ks&&L!==ni&&(re.getTransfer(L)===ye?(U!==ei||W!==Vn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",L)),_}function le(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=et,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=Qt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _S(n,t){function e(i,s=ni){let r,o=re.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qu)return n.BYTE;if(i===td)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===id)return n.ALPHA;if(i===sd)return n.RGB;if(i===ei)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===Is)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Ps)return n.RG;if(i===Cc)return n.RG_INTEGER;if(i===Rc)return n.RGBA_INTEGER;if(i===_a||i===ya||i===va||i===Ma)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Pc||i===Lc||i===Nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dc||i===Uc||i===Fc||i===Oc||i===Bc||i===Sa||i===kc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dc||i===Uc)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oc)return r.COMPRESSED_R11_EAC;if(i===Bc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sa)return r.COMPRESSED_RG11_EAC;if(i===kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===$c||i===Yc||i===Zc||i===Jc||i===Kc||i===jc||i===Qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===eh||i===nh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===th)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ih||i===sh||i===ba||i===rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var yS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new la(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new gn({vertexShader:yS,fragmentShader:vS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ad=class extends Ci{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Td,p={},b=e.getContextAttributes(),A=null,v=null,E=[],M=[],R=new se,y=null,C=null,D=new mn;D.viewport=new Be;let F=new mn;F.viewport=new Be;let H=[D,F],N=new yc,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=E[j];return Q===void 0&&(Q=new Xr,E[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=E[j];return Q===void 0&&(Q=new Xr,E[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=E[j];return Q===void 0&&(Q=new Xr,E[j]=Q),Q.getHandSpace()};function q(j){let Q=M.indexOf(j.inputSource);if(Q===-1)return;let mt=E[Q];mt!==void 0&&(mt.update(j.inputSource,j.frame,c||o),mt.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",et);for(let j=0;j<E.length;j++){let Q=M[j];Q!==null&&(M[j]=null,E[j].disconnect(Q))}I=null,O=null,g.reset();for(let j in p)delete p[j];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,v=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),C!==null){let j=C.camera;j.fov=C.fov,j.zoom=C.zoom,j.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",et),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Bt=null,wt=null;b.depth&&(wt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=b.stencil?Is:Ai,Bt=b.stencil?Kr:fi);let kt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Pn(u.textureWidth,u.textureHeight,{format:ei,type:Vn,depthTexture:new bs(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pn(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(j){for(let Q=0;Q<j.removed.length;Q++){let mt=j.removed[Q],Bt=M.indexOf(mt);Bt>=0&&(M[Bt]=null,E[Bt].disconnect(mt))}for(let Q=0;Q<j.added.length;Q++){let mt=j.added[Q],Bt=M.indexOf(mt);if(Bt===-1){for(let kt=0;kt<E.length;kt++)if(kt>=M.length){M.push(mt),Bt=kt;break}else if(M[kt]===null){M[kt]=mt,Bt=kt;break}if(Bt===-1)break}let wt=E[Bt];wt&&wt.connect(mt)}}let B=new V,X=new V;function K(j,Q,mt){B.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(mt.matrixWorld);let Bt=B.distanceTo(X),wt=Q.projectionMatrix.elements,kt=mt.projectionMatrix.elements,Se=wt[14]/(wt[10]-1),Gt=wt[14]/(wt[10]+1),Qt=(wt[9]+1)/wt[5],ue=(wt[9]-1)/wt[5],te=(wt[8]-1)/wt[0],S=(kt[8]+1)/kt[0],nt=Se*te,tt=Se*S,ut=Bt/(-te+S),at=ut*-te;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(at),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let P=Se+ut,ge=Gt+ut,le=nt-at,w=tt+(Bt-at),_=Qt*Gt/ge*P,L=ue*Gt/ge*P;j.projectionMatrix.makePerspective(le,w,_,L,P,ge),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function bt(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Q=j.near,mt=j.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),N.near=F.near=D.near=Q,N.far=F.far=D.far=mt,(I!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,O=N.far),N.layers.mask=j.layers.mask|6,D.layers.mask=N.layers.mask&-5,F.layers.mask=N.layers.mask&-3;let Bt=j.parent,wt=N.cameras;bt(N,Bt);for(let kt=0;kt<wt.length;kt++)bt(wt[kt],Bt);wt.length===2?K(N,D,F):N.projectionMatrix.copy(D.projectionMatrix),C===null&&j.isPerspectiveCamera&&(C={camera:j,fov:j.fov,zoom:j.zoom}),gt(j,N,Bt)};function gt(j,Q,mt){mt===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let Kt=null;function Ht(j,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Bt=!1;mt.length!==N.cameras.length&&(N.cameras.length=0,Bt=!0);for(let Gt=0;Gt<mt.length;Gt++){let Qt=mt[Gt],ue=null;if(f!==null)ue=f.getViewport(Qt);else{let S=d.getViewSubImage(u,Qt);ue=S.viewport,Gt===0&&(t.setRenderTargetTextures(v,S.colorTexture,S.depthStencilTexture),t.setRenderTarget(v))}let te=H[Gt];te===void 0&&(te=new mn,te.layers.enable(Gt),te.viewport=new Be,H[Gt]=te),te.matrix.fromArray(Qt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ue.x,ue.y,ue.width,ue.height),Gt===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Bt===!0&&N.cameras.push(te)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Gt=d.getDepthInformation(mt[0]);Gt&&Gt.isValid&&Gt.texture&&g.init(Gt,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Gt=0;Gt<mt.length;Gt++){let Qt=mt[Gt].camera;if(Qt){let ue=p[Qt];ue||(ue=new la,p[Qt]=ue);let te=d.getCameraImage(Qt);ue.sourceTexture=te}}}}for(let mt=0;mt<E.length;mt++){let Bt=M[mt],wt=E[mt];Bt!==null&&wt!==void 0&&wt.update(Bt,Q,c||o)}Kt&&Kt(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Yt=new Vm;Yt.setAnimationLoop(Ht),this.setAnimationLoop=function(j){Kt=j},this.dispose=function(){}}},MS=new be,Ym=new Zt;Ym.set(-1,0,0,0,1,0,0,0,1);function SS(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,cd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===An&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===An&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),A=b.envMap,v=b.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(MS.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ym),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let M=E.program;i.uniformBlockBinding(v,M)}function c(v,E){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",b));let R=E.program;i.updateUBOMapping(v,R);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let E=d();v.__bindingPointIndex=E;let M=n.createBuffer(),R=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],M=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,C=M.length;y<C;y++){let D=M[y];if(Array.isArray(D))for(let F=0,H=D.length;F<H;F++)f(D[F],y,F,R);else f(D,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,E,M,R){if(x(v,E,M,R)===!0){let y=v.__offset,C=v.value;if(Array.isArray(C)){let D=0;for(let F=0;F<C.length;F++){let H=C[F],N=p(H);m(H,v.__data,D),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(D+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,v.__data)}}function m(v,E,M){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,M)}function x(v,E,M,R){let y=v.value,C=E+"_"+M;if(R[C]===void 0)return typeof y=="number"||typeof y=="boolean"?R[C]=y:ArrayBuffer.isView(y)?R[C]=y.slice():R[C]=y.clone(),!0;{let D=R[C];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return R[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function g(v){let E=v.uniforms,M=0,R=16;for(let C=0,D=E.length;C<D;C++){let F=Array.isArray(E[C])?E[C]:[E[C]];for(let H=0,N=F.length;H<N;H++){let I=F[H],O=Array.isArray(I.value)?I.value:[I.value];for(let q=0,G=O.length;q<G;q++){let et=O[q],B=p(et),X=M%R,K=X%B.boundary,bt=X+K;M+=K,bt!==0&&R-bt<B.storage&&(M+=R-bt),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=B.storage}}}let y=M%R;return y>0&&(M+=R-y),v.__size=M,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),E}function b(v){let E=v.target;E.removeEventListener("dispose",b);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var wS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function ES(){return Di===null&&(Di=new ea(wS,16,16,Ps,pi),Di.name="DFG_LUT",Di.minFilter=rn,Di.magFilter=rn,Di.wrapS=Ti,Di.wrapT=Ti,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var dh=class{constructor(t={}){let{canvas:e=dm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Vn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=f,g=new Set([Rc,Cc,Ac]),p=new Set([Vn,fi,Jr,Kr,wc,Ec]),b=new Uint32Array(4),A=new Int32Array(4),v=new V,E=null,M=null,R=[],y=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,F=!1,H=null,N=null,I=null,O=null;this._outputColorSpace=kn;let q=0,G=0,et=null,B=-1,X=null,K=new Be,bt=new Be,gt=null,Kt=new zt(0),Ht=0,Yt=e.width,j=e.height,Q=1,mt=null,Bt=null,wt=new Be(0,0,Yt,j),kt=new Be(0,0,Yt,j),Se=!1,Gt=new sa,Qt=!1,ue=!1,te=new be,S=new V,nt=new Be,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function at(){return et===null?Q:1}let P=i;function ge(T,k){return e.getContext(T,k)}let le,w,_,L,U,W,st,ot,Z,it,pt,Ct,ft,dt,Rt,Ft,Wt,z,xt,rt,_t,Et,lt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",oi,!1),P===null){let k="webgl2";if(P=ge(k,T),P===null)throw ge(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(T){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",oi,!1),Xt("WebGLRenderer: "+T.message),T}function Ut(){le=new LM(P),le.init(),_t=new _S(P,le),w=new SM(P,le,t,_t),_=new gS(P,le),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),N=P.createFramebuffer(),I=P.createFramebuffer(),O=P.createFramebuffer(),L=new UM(P),U=new nS,W=new xS(P,le,_,U,w,_t,L),st=new PM(D),ot=new O_(P),Et=new vM(P,ot),Z=new NM(P,ot,L,Et),it=new OM(P,Z,ot,Et,L),z=new FM(P,w,W),Rt=new bM(U),pt=new eS(D,st,le,w,Et,Rt),Ct=new SS(D,U),ft=new sS,dt=new hS(le),Wt=new yM(D,st,_,it,m,l),Ft=new mS(D,it,w),lt=new bS(P,L,w,_),xt=new MM(P,le,L),rt=new DM(P,le,L),L.programs=pt.programs,D.capabilities=w,D.extensions=le,D.properties=U,D.renderLists=ft,D.shadowMap=Ft,D.state=_,D.info=L}x!==Vn&&(C=new kM(x,e.width,e.height,a,s,r));let Nt=new Ad(D,P);this.xr=Nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(Yt,j,!1))},this.getSize=function(T){return T.set(Yt,j)},this.setSize=function(T,k,J=!0){if(Nt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=T,j=k,e.width=Math.floor(T*Q),e.height=Math.floor(k*Q),J===!0&&(e.style.width=T+"px",e.style.height=k+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Yt*Q,j*Q).floor()},this.setDrawingBufferSize=function(T,k,J){Yt=T,j=k,Q=J,e.width=Math.floor(T*J),e.height=Math.floor(k*J),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(x===Vn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,k,J,$){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,k,J,$),_.viewport(K.copy(wt).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(kt)},this.setScissor=function(T,k,J,$){T.isVector4?kt.set(T.x,T.y,T.z,T.w):kt.set(T,k,J,$),_.scissor(bt.copy(kt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){_.setScissorTest(Se=T)},this.setOpaqueSort=function(T){mt=T},this.setTransparentSort=function(T){Bt=T},this.getClearColor=function(T){return T.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,J=!0){let $=0;if(T){let Y=!1;if(et!==null){let St=et.texture.format;Y=g.has(St)}if(Y){let St=et.texture.type,At=p.has(St),Mt=Wt.getClearColor(),Pt=Wt.getClearAlpha(),Dt=Mt.r,ee=Mt.g,ae=Mt.b;At?(b[0]=Dt,b[1]=ee,b[2]=ae,b[3]=Pt,P.clearBufferuiv(P.COLOR,0,b)):(A[0]=Dt,A[1]=ee,A[2]=ae,A[3]=Pt,P.clearBufferiv(P.COLOR,0,A))}else $|=P.COLOR_BUFFER_BIT}k&&($|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),H=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",oi,!1),Wt.dispose(),ft.dispose(),dt.dispose(),U.dispose(),st.dispose(),it.dispose(),Et.dispose(),lt.dispose(),pt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Zf),Nt.removeEventListener("sessionend",Jf),Xs.stop()};function Re(T){T.preventDefault(),$o("WebGLRenderer: Context Lost."),F=!0}function xe(){$o("WebGLRenderer: Context Restored."),F=!1;let T=L.autoReset,k=Ft.enabled,J=Ft.autoUpdate,$=Ft.needsUpdate,Y=Ft.type;Ut(),L.autoReset=T,Ft.enabled=k,Ft.autoUpdate=J,Ft.needsUpdate=$,Ft.type=Y}function oi(T){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mi(T){let k=T.target;k.removeEventListener("dispose",Mi),$x(k)}function $x(T){Yx(T),U.remove(T)}function Yx(T){let k=U.get(T).programs;k!==void 0&&(k.forEach(function(J){pt.releaseProgram(J)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,J,$,Y,St){k===null&&(k=tt);let At=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Mt=Kx(T,k,J,$,Y);_.setMaterial($,At);let Pt=J.index,Dt=1;if($.wireframe===!0){if(Pt=Z.getWireframeAttribute(J),Pt===void 0)return;Dt=2}let ee=J.drawRange,ae=J.attributes.position,Lt=ee.start*Dt,_e=(ee.start+ee.count)*Dt;St!==null&&(Lt=Math.max(Lt,St.start*Dt),_e=Math.min(_e,(St.start+St.count)*Dt)),Pt!==null?(Lt=Math.max(Lt,0),_e=Math.min(_e,Pt.count)):ae!=null&&(Lt=Math.max(Lt,0),_e=Math.min(_e,ae.count));let qe=_e-Lt;if(qe<0||qe===1/0)return;Et.setup(Y,$,Mt,J,Pt);let De,Ae=xt;if(Pt!==null&&(De=ot.get(Pt),Ae=rt,Ae.setIndex(De)),Y.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*at()),Ae.setMode(P.LINES)):Ae.setMode(P.TRIANGLES);else if(Y.isLine){let dn=$.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*at()),Y.isLineSegments?Ae.setMode(P.LINES):Y.isLineLoop?Ae.setMode(P.LINE_LOOP):Ae.setMode(P.LINE_STRIP)}else Y.isPoints?Ae.setMode(P.POINTS):Y.isSprite&&Ae.setMode(P.TRIANGLES);if(Y.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let dn=Y._multiDrawStarts,Tt=Y._multiDrawCounts,bn=Y._multiDrawCount,pe=Pt?ot.get(Pt).bytesPerElement:1,Jn=U.get($).currentProgram.getUniforms();for(let Si=0;Si<bn;Si++)Jn.setValue(P,"_gl_DrawID",Si),Ae.render(dn[Si]/pe,Tt[Si])}else if(Y.isInstancedMesh)Ae.renderInstances(Lt,qe,Y.count);else if(J.isInstancedBufferGeometry){let dn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tt=Math.min(J.instanceCount,dn);Ae.renderInstances(Lt,qe,Tt)}else Ae.render(Lt,qe)};function Yf(T,k,J,$){H!==null&&T.isNodeMaterial&&H.setObject($,T),Qt===!0&&Rt.setState(T,J,!1),T.transparent===!0&&T.side===Qn&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,ol(T,k,$),T.side=As,T.needsUpdate=!0,ol(T,k,$),T.side=Qn):ol(T,k,$)}this.compile=function(T,k,J=null){J===null&&(J=T),H!==null&&H.renderStart(T,k,J),M=dt.get(J),M.init(k),y.push(M),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),T!==J&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights(),H!==null&&H.updateLights(M.state.lightsArray),ue=this.localClippingEnabled,Qt=Rt.init(this.clippingPlanes,ue),Qt===!0&&Rt.setGlobalState(this.clippingPlanes,k),H!==null&&Ft.render(M.state.shadowsArray,J,k);let $=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let St=Y.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let Mt=St[At];Yf(Mt,J,k,Y),$.add(Mt)}else Yf(St,J,k,Y),$.add(St)}),M=y.pop(),H!==null&&H.renderEnd(),$},this.compileAsync=function(T,k,J=null){let $=this.compile(T,k,J);return new Promise(Y=>{function St(){if($.forEach(function(At){let Pt=U.get(At).currentProgram;(Pt===void 0||Pt.isReady())&&$.delete(At)}),$.size===0){Y(T);return}setTimeout(St,10)}le.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ou=null;function Zx(T){ou&&ou(T)}function Zf(){Xs.stop()}function Jf(){Xs.start()}let Xs=new Vm;Xs.setAnimationLoop(Zx),typeof self<"u"&&Xs.setContext(self),this.setAnimationLoop=function(T){ou=T,Nt.setAnimationLoop(T),T===null?Xs.stop():Xs.start()},Nt.addEventListener("sessionstart",Zf),Nt.addEventListener("sessionend",Jf),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;H!==null&&H.renderStart(T,k);let J=Nt.enabled===!0&&Nt.isPresenting===!0,$=C!==null&&(et===null||J)&&C.begin(D,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(k),k=Nt.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,k,et),M=dt.get(T,y.length),M.init(k),M.state.textureUnits=W.getTextureUnits(),y.push(M),te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Gt.setFromProjectionMatrix(te,ui,k.reversedDepth),ue=this.localClippingEnabled,Qt=Rt.init(this.clippingPlanes,ue),E=ft.get(T,R.length),E.init(),R.push(E),Nt.enabled===!0&&Nt.isPresenting===!0){let At=D.xr.getDepthSensingMesh();At!==null&&au(At,k,-1/0,D.sortObjects)}au(T,k,0,D.sortObjects),E.finish(),H!==null&&H.updateLights(M.state.lightsArray),D.sortObjects===!0&&E.sort(mt,Bt),ut=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,ut&&Wt.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&Rt.beginShadows();let Y=M.state.shadowsArray;if(Ft.render(Y,T,k),Qt===!0&&Rt.endShadows(),($&&C.hasRenderPass())===!1){let At=E.opaque,Mt=E.transmissive;if(M.setupLights(),k.isArrayCamera){let Pt=k.cameras;if(Mt.length>0)for(let Dt=0,ee=Pt.length;Dt<ee;Dt++){let ae=Pt[Dt];jf(At,Mt,T,ae)}ut&&Wt.render(T);for(let Dt=0,ee=Pt.length;Dt<ee;Dt++){let ae=Pt[Dt];Kf(E,T,ae,ae.viewport)}}else Mt.length>0&&jf(At,Mt,T,k),ut&&Wt.render(T),Kf(E,T,k)}et!==null&&G===0&&(W.updateMultisampleRenderTarget(et),W.updateRenderTargetMipmap(et)),$&&C.end(D),T.isScene===!0&&T.onAfterRender(D,T,k),Et.resetDefaultState(),B=-1,X=null,y.pop(),y.length>0?(M=y[y.length-1],W.setTextureUnits(M.state.textureUnits),Qt===!0&&Rt.setGlobalState(D.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,H!==null&&H.renderEnd()};function au(T,k,J,$){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Gt)){$&&nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);let At=it.update(T),Mt=T.material;Mt.visible&&E.push(T,At,Mt,J,nt.z,null,k)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Gt))){let At=it.update(T),Mt=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),nt.copy(T.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),nt.copy(At.boundingSphere.center)),nt.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Mt)){let Pt=At.groups;for(let Dt=0,ee=Pt.length;Dt<ee;Dt++){let ae=Pt[Dt],Lt=Mt[ae.materialIndex];Lt&&Lt.visible&&E.push(T,At,Lt,J,nt.z,ae,k)}}else Mt.visible&&E.push(T,At,Mt,J,nt.z,null,k)}}let St=T.children;for(let At=0,Mt=St.length;At<Mt;At++)au(St[At],k,J,$)}function Kf(T,k,J,$){let{opaque:Y,transmissive:St,transparent:At}=T;M.setupLightsView(J),Qt===!0&&Rt.setGlobalState(D.clippingPlanes,J),$&&_.viewport(K.copy($)),Y.length>0&&rl(Y,k,J),St.length>0&&rl(St,k,J),At.length>0&&rl(At,k,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function jf(T,k,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[$.id]===void 0){let Lt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[$.id]=new Pn(1,1,{generateMipmaps:!0,type:Lt?pi:Vn,minFilter:Rs,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let St=M.state.transmissionRenderTarget[$.id],At=$.viewport||K;St.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);let Mt=D.getRenderTarget(),Pt=D.getActiveCubeFace(),Dt=D.getActiveMipmapLevel();D.setRenderTarget(St),D.getClearColor(Kt),Ht=D.getClearAlpha(),Ht<1&&D.setClearColor(16777215,.5),D.clear(),ut&&Wt.render(J);let ee=D.toneMapping;D.toneMapping=di;let ae=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),M.setupLightsView($),Qt===!0&&Rt.setGlobalState(D.clippingPlanes,$),rl(T,J,$),W.updateMultisampleRenderTarget(St),W.updateRenderTargetMipmap(St),le.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let _e=0,qe=k.length;_e<qe;_e++){let De=k[_e],{object:Ae,geometry:dn,material:Tt,group:bn}=De;if(Tt.side===Qn&&Ae.layers.test($.layers)){let pe=Tt.side;Tt.side=An,Tt.needsUpdate=!0,Qf(Ae,J,$,dn,Tt,bn),Tt.side=pe,Tt.needsUpdate=!0,Lt=!0}}Lt===!0&&(W.updateMultisampleRenderTarget(St),W.updateRenderTargetMipmap(St))}D.setRenderTarget(Mt,Pt,Dt),D.setClearColor(Kt,Ht),ae!==void 0&&($.viewport=ae),D.toneMapping=ee}function rl(T,k,J){let $=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,St=T.length;Y<St;Y++){let At=T[Y],{object:Mt,geometry:Pt,group:Dt}=At,ee=At.material;ee.allowOverride===!0&&$!==null&&(ee=$),Mt.layers.test(J.layers)&&Qf(Mt,k,J,Pt,ee,Dt)}}function Qf(T,k,J,$,Y,St){H!==null&&Y.isNodeMaterial&&H.setObject(T,Y),T.onBeforeRender(D,k,J,$,Y,St),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(D,k,J,$,T,St),Y.transparent===!0&&Y.side===Qn&&Y.forceSinglePass===!1?(Y.side=An,Y.needsUpdate=!0,D.renderBufferDirect(J,k,$,Y,T,St),Y.side=As,Y.needsUpdate=!0,D.renderBufferDirect(J,k,$,Y,T,St),Y.side=Qn):D.renderBufferDirect(J,k,$,Y,T,St),T.onAfterRender(D,k,J,$,Y,St)}function ol(T,k,J){k.isScene!==!0&&(k=tt);let $=U.get(T),Y=M.state.lights,St=M.state.shadowsArray,At=Y.state.version,Mt=pt.getParameters(T,Y.state,St,k,J,M.state.lightProbeGridArray),Pt=pt.getProgramCacheKey(Mt),Dt=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;let ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=st.get(T.envMap||$.environment,ee),$.envMapRotation=$.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Mi),Dt=new Map,$.programs=Dt);let ae=Dt.get(Pt);if(ae!==void 0){if($.currentProgram===ae&&$.lightsStateVersion===At)return ep(T,Mt),ae}else Mt.uniforms=pt.getUniforms(T),H!==null&&T.isNodeMaterial&&H.build(T,J,Mt),T.onBeforeCompile(Mt,D),ae=pt.acquireProgram(Mt,Pt),Dt.set(Pt,ae),$.uniforms=Mt.uniforms;let Lt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=Rt.uniform),ep(T,Mt),$.needsLights=Qx(T),$.lightsStateVersion=At,$.needsLights&&(Lt.ambientLightColor.value=Y.state.ambient,Lt.lightProbe.value=Y.state.probe,Lt.sunLights.value=Y.state.sun,Lt.sunLightShadows.value=Y.state.sunShadow,Lt.directionalLights.value=Y.state.directional,Lt.directionalLightShadows.value=Y.state.directionalShadow,Lt.spotLights.value=Y.state.spot,Lt.spotLightShadows.value=Y.state.spotShadow,Lt.rectAreaLights.value=Y.state.rectArea,Lt.ltc_1.value=Y.state.rectAreaLTC1,Lt.ltc_2.value=Y.state.rectAreaLTC2,Lt.pointLights.value=Y.state.point,Lt.pointLightShadows.value=Y.state.pointShadow,Lt.hemisphereLights.value=Y.state.hemi,Lt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Lt.sunShadowCascade.value=Y.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Y.state.spotLightMatrix,Lt.spotLightMap.value=Y.state.spotLightMap,Lt.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=M.state.lightProbeGridArray.length>0,$.currentProgram=ae,$.uniformsList=null,ae}function tp(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=to.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ep(T,k){let J=U.get(T);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Jx(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let J=0,$=T.length;J<$;J++){let Y=T[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(v))return Y}return null}function Kx(T,k,J,$,Y){k.isScene!==!0&&(k=tt),W.resetTextureUnits();let St=k.fog,At=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,Mt=et===null?D.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,Pt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Dt=st.get($.envMap||At,Pt),ee=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ae=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Lt=!!J.morphAttributes.position,_e=!!J.morphAttributes.normal,qe=!!J.morphAttributes.color,De=di;$.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(De=D.toneMapping);let Ae=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dn=Ae!==void 0?Ae.length:0,Tt=U.get($),bn=M.state.lights;if(Qt===!0&&(ue===!0||T!==X)){let Ie=T===X&&$.id===B;Rt.setState($,T,Ie)}let pe=!1;$.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==bn.state.version||Tt.outputColorSpace!==Mt||Y.isBatchedMesh&&Tt.batching===!1||!Y.isBatchedMesh&&Tt.batching===!0||Y.isBatchedMesh&&Tt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Tt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Tt.instancing===!1||!Y.isInstancedMesh&&Tt.instancing===!0||Y.isSkinnedMesh&&Tt.skinning===!1||!Y.isSkinnedMesh&&Tt.skinning===!0||Y.isInstancedMesh&&Tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Tt.instancingMorph===!1&&Y.morphTexture!==null||Tt.envMap!==Dt||$.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Rt.numPlanes||Tt.numIntersection!==Rt.numIntersection)||Tt.vertexAlphas!==ee||Tt.vertexTangents!==ae||Tt.morphTargets!==Lt||Tt.morphNormals!==_e||Tt.morphColors!==qe||Tt.toneMapping!==De||Tt.morphTargetsCount!==dn||!!Tt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Tt.__version=$.version);let Jn=Tt.currentProgram;pe===!0&&(Jn=ol($,k,Y),H&&$.isNodeMaterial&&H.onUpdateProgram($,Jn,Tt));let Si=!1,fs=!1,vr=!1,we=Jn.getUniforms(),Ge=Tt.uniforms;if(_.useProgram(Jn.program)&&(Si=!0,fs=!0,vr=!0),$.id!==B&&(B=$.id,fs=!0),Tt.needsLights){let Ie=Jx(M.state.lightProbeGridArray,Y);Tt.lightProbeGrid!==Ie&&(Tt.lightProbeGrid=Ie,fs=!0)}if(Si||X!==T){_.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(P,"projectionMatrix",T.projectionMatrix),we.setValue(P,"viewMatrix",T.matrixWorldInverse);let ms=we.map.cameraPosition;ms!==void 0&&ms.setValue(P,S.setFromMatrixPosition(T.matrixWorld)),w.logarithmicDepthBuffer&&we.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&we.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,fs=!0,vr=!0)}if(Tt.needsLights&&(bn.state.sunShadowMap.length>0&&we.setValue(P,"sunShadowMap",bn.state.sunShadowMap,W),bn.state.directionalShadowMap.length>0&&we.setValue(P,"directionalShadowMap",bn.state.directionalShadowMap,W),bn.state.spotShadowMap.length>0&&we.setValue(P,"spotShadowMap",bn.state.spotShadowMap,W),bn.state.pointShadowMap.length>0&&we.setValue(P,"pointShadowMap",bn.state.pointShadowMap,W)),Y.isSkinnedMesh){we.setOptional(P,Y,"bindMatrix"),we.setOptional(P,Y,"bindMatrixInverse");let Ie=Y.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),we.setValue(P,"boneTexture",Ie.boneTexture,W))}Y.isBatchedMesh&&(we.setOptional(P,Y,"batchingTexture"),we.setValue(P,"batchingTexture",Y._matricesTexture,W),we.setOptional(P,Y,"batchingIdTexture"),we.setValue(P,"batchingIdTexture",Y._indirectTexture,W),we.setOptional(P,Y,"batchingColorTexture"),Y._colorsTexture!==null&&we.setValue(P,"batchingColorTexture",Y._colorsTexture,W));let ps=J.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&z.update(Y,J,Jn),(fs||Tt.receiveShadow!==Y.receiveShadow)&&(Tt.receiveShadow=Y.receiveShadow,we.setValue(P,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(Ge.envMapIntensity.value=k.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=ES()),fs){if(we.setValue(P,"toneMappingExposure",D.toneMappingExposure),Tt.needsLights&&jx(Ge,vr),St&&$.fog===!0&&Ct.refreshFogUniforms(Ge,St),Ct.refreshMaterialUniforms(Ge,$,Q,j,M.state.transmissionRenderTarget[T.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ie=Tt.lightProbeGrid;Ge.probesSH.value=Ie.texture,Ge.probesMin.value.copy(Ie.boundingBox.min),Ge.probesMax.value.copy(Ie.boundingBox.max),Ge.probesResolution.value.copy(Ie.resolution)}to.upload(P,tp(Tt),Ge,W)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(to.upload(P,tp(Tt),Ge,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&we.setValue(P,"center",Y.center),we.setValue(P,"modelViewMatrix",Y.modelViewMatrix),we.setValue(P,"normalMatrix",Y.normalMatrix),we.setValue(P,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){let Ie=$.uniformsGroups;for(let ms=0,Mr=Ie.length;ms<Mr;ms++){let ip=Ie[ms];lt.update(ip,Jn),lt.bind(ip,Jn)}}return Jn}function jx(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Qx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,k,J){let $=U.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),U.get(T.texture).__webglTexture=k,U.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let J=U.get(T);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,J=0){et=T,q=k,G=J;let $=null,Y=!1,St=!1;if(T){let Mt=U.get(T);if(Mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Mt.__webglFramebuffer),K.copy(T.viewport),bt.copy(T.scissor),gt=T.scissorTest,_.viewport(K),_.scissor(bt),_.setScissorTest(gt),B=-1;return}else if(Mt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Mt.__hasExternalTextures)W.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ee=T.depthTexture;if(Mt.__boundDepthTexture!==ee){if(ee!==null&&U.has(ee)&&(T.width!==ee.image.width||T.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}let Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(St=!0);let Dt=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[k])?$=Dt[k][J]:$=Dt[k],Y=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?$=U.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?$=Dt[J]:$=Dt,K.copy(T.viewport),bt.copy(T.scissor),gt=T.scissorTest}else K.copy(wt).multiplyScalar(Q).floor(),bt.copy(kt).multiplyScalar(Q).floor(),gt=Se;if(J!==0&&($=N),_.bindFramebuffer(P.FRAMEBUFFER,$)&&_.drawBuffers(T,$),_.viewport(K),_.scissor(bt),_.setScissorTest(gt),Y){let Mt=U.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,J)}else if(St){let Mt=k;for(let Pt=0;Pt<T.textures.length;Pt++){let Dt=U.get(T.textures[Pt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,J,Mt)}}else if(T!==null&&J!==0){let Mt=U.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,J)}B=-1};function np(T){let k=U.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=w.textureFormatReadable(T.format),k.__typeReadable=w.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,J,$,Y,St,At,Mt=0){if(!(T&&T.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){_.bindFramebuffer(P.FRAMEBUFFER,Pt);try{let Dt=T.textures[Mt],ee=Dt.format,ae=Dt.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt);let Lt=np(Dt);if(Lt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-$&&J>=0&&J<=T.height-Y&&P.readPixels(k,J,$,Y,_t.convert(ee),_t.convert(ae),St)}finally{let Dt=et!==null?U.get(et).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,k,J,$,Y,St,At,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(k>=0&&k<=T.width-$&&J>=0&&J<=T.height-Y){_.bindFramebuffer(P.FRAMEBUFFER,Pt);let Dt=T.textures[Mt],ee=Dt.format,ae=Dt.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt);let Lt=np(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,_e),P.bufferData(P.PIXEL_PACK_BUFFER,St.byteLength,P.STREAM_READ),P.readPixels(k,J,$,Y,_t.convert(ee),_t.convert(ae),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let qe=et!==null?U.get(et).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,qe);let De=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await pm(P,De,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,_e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,St),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(_e),P.deleteSync(De),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,J=0){let $=Math.pow(2,-J),Y=Math.floor(T.image.width*$),St=Math.floor(T.image.height*$),At=k!==null?k.x:0,Mt=k!==null?k.y:0;W.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,At,Mt,Y,St),_.unbindTexture()},this.copyTextureToTexture=function(T,k,J=null,$=null,Y=0,St=0){let At,Mt,Pt,Dt,ee,ae,Lt,_e,qe,De=T.isCompressedTexture?T.mipmaps[St]:T.image;if(J!==null)At=J.max.x-J.min.x,Mt=J.max.y-J.min.y,Pt=J.isBox3?J.max.z-J.min.z:1,Dt=J.min.x,ee=J.min.y,ae=J.isBox3?J.min.z:0;else{let Ge=Math.pow(2,-Y);At=Math.floor(De.width*Ge),Mt=Math.floor(De.height*Ge),T.isDataArrayTexture?Pt=De.depth:T.isData3DTexture?Pt=Math.floor(De.depth*Ge):Pt=1,Dt=0,ee=0,ae=0}$!==null?(Lt=$.x,_e=$.y,qe=$.z):(Lt=0,_e=0,qe=0);let Ae=_t.convert(k.format),dn=_t.convert(k.type),Tt;k.isData3DTexture?(W.setTexture3D(k,0),Tt=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(W.setTexture2DArray(k,0),Tt=P.TEXTURE_2D_ARRAY):(W.setTexture2D(k,0),Tt=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let bn=_.getParameter(P.UNPACK_ROW_LENGTH),pe=_.getParameter(P.UNPACK_IMAGE_HEIGHT),Jn=_.getParameter(P.UNPACK_SKIP_PIXELS),Si=_.getParameter(P.UNPACK_SKIP_ROWS),fs=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(P.UNPACK_SKIP_ROWS,ee),_.pixelStorei(P.UNPACK_SKIP_IMAGES,ae);let vr=T.isDataArrayTexture||T.isData3DTexture,we=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let Ge=U.get(T),ps=U.get(k),Ie=U.get(Ge.__renderTarget),ms=U.get(ps.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,Ie.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Mr=0;Mr<Pt;Mr++)vr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,U.get(T).__webglTexture,Y,ae+Mr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,U.get(k).__webglTexture,St,qe+Mr)),P.blitFramebuffer(Dt,ee,At,Mt,Lt,_e,At,Mt,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||U.has(T)){let Ge=U.get(T),ps=U.get(k);_.bindFramebuffer(P.READ_FRAMEBUFFER,I),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,O);for(let Ie=0;Ie<Pt;Ie++)vr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ge.__webglTexture,Y,ae+Ie):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ge.__webglTexture,Y),we?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ps.__webglTexture,St,qe+Ie):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ps.__webglTexture,St),Y!==0?P.blitFramebuffer(Dt,ee,At,Mt,Lt,_e,At,Mt,P.COLOR_BUFFER_BIT,P.NEAREST):we?P.copyTexSubImage3D(Tt,St,Lt,_e,qe+Ie,Dt,ee,At,Mt):P.copyTexSubImage2D(Tt,St,Lt,_e,Dt,ee,At,Mt);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Tt,St,Lt,_e,qe,At,Mt,Pt,Ae,dn,De.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,St,Lt,_e,qe,At,Mt,Pt,Ae,De.data):P.texSubImage3D(Tt,St,Lt,_e,qe,At,Mt,Pt,Ae,dn,De):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,St,Lt,_e,At,Mt,Ae,dn,De.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,St,Lt,_e,De.width,De.height,Ae,De.data):P.texSubImage2D(P.TEXTURE_2D,St,Lt,_e,At,Mt,Ae,dn,De);_.pixelStorei(P.UNPACK_ROW_LENGTH,bn),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Jn),_.pixelStorei(P.UNPACK_SKIP_ROWS,Si),_.pixelStorei(P.UNPACK_SKIP_IMAGES,fs),St===0&&k.generateMipmaps&&P.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(T){U.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),_.unbindTexture()},this.resetState=function(){q=0,G=0,et=null,_.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function Oi(n){let t=n|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gn(n,t,e){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}var Ca=n=>n*n*n*(n*(n*6-15)+10),Fi=(n,t,e)=>n+(t-n)*e,TS=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],AS=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Ra=class{constructor(t=1){let e=Oi(t),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise2(t,e){let i=this.perm,s=Math.floor(t),r=Math.floor(e),o=t-s,a=e-r,l=s&255,c=r&255,h=(f,m,x,g)=>{let p=TS[i[i[f]+m]&7];return p[0]*x+p[1]*g},d=Ca(o),u=Ca(a);return Fi(Fi(h(l,c,o,a),h(l+1,c,o-1,a),d),Fi(h(l,c+1,o,a-1),h(l+1,c+1,o-1,a-1),d),u)}noise3(t,e,i){let s=this.perm,r=Math.floor(t),o=Math.floor(e),a=Math.floor(i),l=t-r,c=e-o,h=i-a,d=r&255,u=o&255,f=a&255,m=(b,A,v,E,M,R)=>{let y=AS[s[s[s[b]+A]+v]%12];return y[0]*E+y[1]*M+y[2]*R},x=Ca(l),g=Ca(c),p=Ca(h);return Fi(Fi(Fi(m(d,u,f,l,c,h),m(d+1,u,f,l-1,c,h),x),Fi(m(d,u+1,f,l,c-1,h),m(d+1,u+1,f,l-1,c-1,h),x),g),Fi(Fi(m(d,u,f+1,l,c,h-1),m(d+1,u,f+1,l-1,c,h-1),x),Fi(m(d,u+1,f+1,l,c-1,h-1),m(d+1,u+1,f+1,l-1,c-1,h-1),x),g),p)}fbm2(t,e,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise2(t*a,e*a),c+=o,o*=r,a*=s;return l/c}};var Cd={" ":["00000","00000","00000","00000","00000","00000","00000"],A:["01110","10001","10001","11111","10001","10001","10001"],B:["11110","10001","10001","11110","10001","10001","11110"],C:["01110","10001","10000","10000","10000","10001","01110"],D:["11110","10001","10001","10001","10001","10001","11110"],E:["11111","10000","10000","11110","10000","10000","11111"],F:["11111","10000","10000","11110","10000","10000","10000"],G:["01110","10001","10000","10111","10001","10001","01111"],H:["10001","10001","10001","11111","10001","10001","10001"],I:["01110","00100","00100","00100","00100","00100","01110"],J:["00111","00010","00010","00010","00010","10010","01100"],K:["10001","10010","10100","11000","10100","10010","10001"],L:["10000","10000","10000","10000","10000","10000","11111"],M:["10001","11011","10101","10101","10001","10001","10001"],N:["10001","11001","10101","10011","10001","10001","10001"],O:["01110","10001","10001","10001","10001","10001","01110"],P:["11110","10001","10001","11110","10000","10000","10000"],Q:["01110","10001","10001","10001","10101","10010","01101"],R:["11110","10001","10001","11110","10100","10010","10001"],S:["01111","10000","10000","01110","00001","00001","11110"],T:["11111","00100","00100","00100","00100","00100","00100"],U:["10001","10001","10001","10001","10001","10001","01110"],V:["10001","10001","10001","10001","10001","01010","00100"],W:["10001","10001","10001","10101","10101","11011","10001"],X:["10001","10001","01010","00100","01010","10001","10001"],Y:["10001","10001","01010","00100","00100","00100","00100"],Z:["11111","00001","00010","00100","01000","10000","11111"],0:["01110","10001","10011","10101","11001","10001","01110"],1:["00100","01100","00100","00100","00100","00100","01110"],2:["01110","10001","00001","00010","00100","01000","11111"],3:["11110","00001","00001","01110","00001","00001","11110"],4:["00010","00110","01010","10010","11111","00010","00010"],5:["11111","10000","11110","00001","00001","10001","01110"],6:["00110","01000","10000","11110","10001","10001","01110"],7:["11111","00001","00010","00100","01000","01000","01000"],8:["01110","10001","10001","01110","10001","10001","01110"],9:["01110","10001","10001","01111","00001","00010","01100"],"-":["00000","00000","00000","11111","00000","00000","00000"],".":["00000","00000","00000","00000","00000","01100","01100"],"!":["00100","00100","00100","00100","00100","00000","00100"],"&":["01100","10010","10100","01000","10101","10010","01101"],"'":["00100","00100","01000","00000","00000","00000","00000"]};function Zm(n){let t=[];return[...n.toUpperCase()].forEach((e,i)=>{let s=Cd[e];s&&s.forEach((r,o)=>[...r].forEach((a,l)=>{a==="1"&&t.push([i*6+l,o])}))}),t}var Ls=class extends Error{},Jm=["blocks","items","loot","recipes","goals","textures","sounds","worldgen","game","music"],Km=["tilled","planted","ate","equipped"],jm=["noise","capped","bark","rings","planks","cells","waves","bricks","ore","stripes","blades","stalks","pixelart","image","layers","ref"],Qm=/^[a-z][a-z0-9_]*$/,t0=typeof window>"u"&&typeof process<"u"&&!!process.versions?.node;async function CS(){if(globalThis.__VOXELCRAFT_CONTENT__)return structuredClone(globalThis.__VOXELCRAFT_CONTENT__);let n={},t=new URL("../data/",import.meta.url);if(t0){let e=await import("node:fs/promises"),i=await import("node:path"),{fileURLToPath:s}=await import("node:url"),r=process.env.VOXELCRAFT_DATA||s(t);for(let o of Jm){let a=i.join(r,o+".json"),l;try{l=await e.readFile(a,"utf8")}catch{throw new Ls(`Cannot read ${a}`)}try{n[o]=JSON.parse(l)}catch(c){throw new Ls(`${o}.json is not valid JSON: ${c.message}`)}}return n}return await Promise.all(Jm.map(async e=>{let i=await fetch(new URL(e+".json",t),{cache:"no-cache"});if(!i.ok)throw new Ls(`Cannot load data/${e}.json (HTTP ${i.status})`);let s=await i.text();try{n[e]=JSON.parse(s)}catch(r){throw new Ls(`data/${e}.json is not valid JSON: ${r.message}`)}})),n}function RS(n){let t=[],e=S=>t.push(S),i=S=>typeof S=="number"&&Number.isFinite(S),s=Array.isArray,r=n.blocks?.blocks,o=n.items?.items,a=n.items?.tiers||{},l=n.textures?.tiles||{},c=n.textures?.sprites||{},h=n.loot?.tables||{},d=n.sounds?.materials||{},u=n.recipes?.recipes,f=n.recipes?.groups||{},m=n.recipes?.stations||{},x=n.recipes?.windows||{};if(s(r)||e('blocks.json: "blocks" must be a list'),s(o)||e('items.json: "items" must be a list'),s(u)||e('recipes.json: "recipes" must be a list'),s(n.goals?.goals)||e('goals.json: "goals" must be a list'),t.length)throw new Ls(t.join(`
`));let g=new Map,p=new Map,b=new Set,A=new Set,v=(S,nt,tt)=>{if(typeof S!="string"||!Qm.test(S)){e(`${tt}: key "${S}" must be lowercase letters, digits and underscores, starting with a letter`);return}if(!Number.isInteger(nt)||nt<1){e(`${tt}: "id" must be a positive whole number`);return}g.has(S)&&e(`${tt}: key "${S}" is used twice`),p.has(nt)&&e(`${tt}: id ${nt} is already used by "${p.get(nt)}"`),g.set(S,nt),p.set(nt,S)};r.forEach((S,nt)=>{v(S.key,S.id,`blocks.json #${nt+1} (${S.key})`),Number.isInteger(S.id)&&S.id>255&&e(`blocks.json "${S.key}": block ids must be 1-255 (they are stored in one byte per block)`),b.add(S.key)}),o.forEach((S,nt)=>{v(S.key,S.id,`items.json #${nt+1} (${S.key})`),A.add(S.key)});let E=(S,nt)=>g.has(S)?g.get(S):(e(`${nt}: unknown block/item "${S}"`),0),M=(S,nt)=>b.has(S)?g.get(S):(e(`${nt}: "${S}" is not a block`),0),R=Object.keys(l);R.length||e("textures.json: no tiles defined");let y=(S,nt,tt)=>{if(!nt||typeof nt!="object")return e(`textures.json tile "${tt}": must be an object`);if(!jm.includes(nt.type))return e(`textures.json tile "${tt}": unknown type "${nt.type}" (use one of ${jm.join(", ")})`);let ut=(at,P)=>{l[at]||e(`textures.json tile "${tt}": ${P} "${at}" is not a tile`)};nt.type==="capped"&&(ut(nt.cap,"cap"),ut(nt.body,"body")),nt.type==="ore"&&ut(nt.base,"base"),nt.type==="ref"&&ut(nt.tile,"tile"),nt.type==="layers"&&(nt.layers||[]).forEach((at,P)=>y(S,at,`${tt}.layers[${P}]`)),nt.type==="pixelart"&&C(nt,`tile "${tt}"`),nt.type==="image"&&typeof nt.src!="string"&&e(`textures.json tile "${tt}": image needs "src"`)};function C(S,nt){if(!s(S.rows)||!S.rows.length)return e(`textures.json ${nt}: pixelart needs "rows"`);(S.rows.length>16||S.rows.some(tt=>typeof tt!="string"||tt.length>16))&&e(`textures.json ${nt}: pixelart is at most 16 rows of 16 characters`);for(let tt of S.rows)for(let ut of tt)if(ut!=="."&&!S.palette?.[ut]){e(`textures.json ${nt}: character "${ut}" is not in the palette`);return}}for(let S of R)y(S,l[S],S);let D=Object.keys(x),F=r.map((S,nt)=>{let tt=`blocks.json "${S.key}"`;for(let at of["top","bottom","side"])l[S.tiles?.[at]]||e(`${tt}: tiles.${at} "${S.tiles?.[at]}" is not defined in textures.json`);(!i(S.hardness)||S.hardness<0)&&e(`${tt}: "hardness" must be a number >= 0`),S.tool!=null&&typeof S.tool!="string"&&e(`${tt}: "tool" must be a string (pickaxe, axe, shovel, ...) or omitted`),S.loot!=null&&!h[S.loot]&&e(`${tt}: loot table "${S.loot}" is not defined in loot.json`),S.shatterLoot!=null&&!h[S.shatterLoot]&&e(`${tt}: shatterLoot table "${S.shatterLoot}" is not defined in loot.json`),S.role!=null&&!["log","leaf"].includes(S.role)&&e(`${tt}: "role" must be "log" or "leaf"`),S.opens!=null&&!x[S.opens]&&e(`${tt}: opens "${S.opens}" is not a window in recipes.json`),S.model!=null&&!(S.model.type==="torch"&&i(S.model.height)&&S.model.height>0&&S.model.height<=1)&&e(`${tt}: "model" must be { "type": "torch", "height": 0-1, "lean": [dx, dz] }`),S.model?.lean!=null&&!(s(S.model.lean)&&S.model.lean.length===2&&S.model.lean.every(Number.isInteger))&&e(`${tt}: model.lean must be [dx, dz]`),S.support!=null&&!(s(S.support)&&S.support.length===3&&S.support.every(Number.isInteger))&&e(`${tt}: "support" must be [dx, dy, dz]: where the block it hangs on is`),S.fuel!=null&&!(i(S.fuel)&&S.fuel>0)&&e(`${tt}: "fuel" must be the seconds it burns in a furnace`),S.glow!=null&&!(i(S.glow)&&S.glow>=0&&S.glow<=1)&&e(`${tt}: "glow" must be 0-1 (how much the block shines for itself, even in the dark)`);for(let at of["light","lightFilter"])S[at]!=null&&!(Number.isInteger(S[at])&&S[at]>=0&&S[at]<=15)&&e(`${tt}: "${at}" must be a whole number 0-15`);S.water&&!(Number.isInteger(S.water.level)&&S.water.level>=1&&S.water.level<=7)&&e(`${tt}: water.level must be 1-7 (7 = source)`);let ut={id:S.id,key:S.key,name:S.name??S.key,top:S.tiles?.top,bottom:S.tiles?.bottom,side:S.tiles?.side,hard:S.hardness??0,tool:S.tool??null,need:S.need??0,sound:S.sound??"default",solid:S.solid??!S.plant,opaque:S.opaque??!S.plant,creative:!!S.creative,waterLevel:S.water?S.water.level:0,role:S.role??null,opens:S.opens??null,gravity:!!S.gravity,model:S.model?{type:S.model.type,height:S.model.height,lean:S.model.lean??[0,0]}:null,support:S.support??null,fuel:S.fuel??0,glow:S.glow??0,light:S.light??0,lightFilter:S.lightFilter??0,hydration:null,loot:S.loot??(h[S.key]?S.key:null),shatterLoot:S.shatterLoot??null,tillsInto:S.tillsInto?M(S.tillsInto,`${tt} tillsInto`):0,spreadsOnto:S.spreadsOnto?M(S.spreadsOnto,`${tt} spreadsOnto`):0,plant:null};if(S.hydration){let at=S.hydration;ut.hydration={wet:at.wet?M(at.wet,`${tt} hydration.wet`):0,dry:at.dry?M(at.dry,`${tt} hydration.dry`):0,decayInto:at.decay?M(at.decay.into,`${tt} hydration.decay.into`):0,decayRate:at.decay?.chancePerSecond??0},!ut.hydration.wet&&!ut.hydration.dry&&e(`${tt}: hydration needs "wet" (the damp version) or "dry" (the dry version)`)}if(S.plant){let at=S.plant;["cross","hash"].includes(at.kind)||e(`${tt}: plant.kind must be "cross" or "hash"`),(!i(at.height)||at.height<=0||at.height>1)&&e(`${tt}: plant.height must be between 0 and 1`),ut.plant={kind:at.kind==="hash"?2:1,height:at.height,growth:at.growth?{next:M(at.growth.next,`${tt} plant.growth.next`),rate:at.growth.chancePerSecond??0,soil:M(at.growth.soil,`${tt} plant.growth.soil`)}:null,stage:at.stage?{label:at.stage.label??ut.name,step:at.stage.step??1,name:at.stage.name??"",ripe:!!at.stage.ripe,crop:!!at.stage.crop}:null,grows:at.grows?{trees:s(at.grows.trees)?at.grows.trees:[],rate:at.grows.chancePerSecond??0,soil:(s(at.grows.soil)?at.grows.soil:[at.grows.soil]).map(P=>M(P,`${tt} plant.grows.soil`))}:null,spreads:at.spreads?{block:M(at.spreads.block,`${tt} plant.spreads.block`),rate:at.spreads.chancePerSecond??0,onto:M(at.spreads.onto,`${tt} plant.spreads.onto`),range:at.spreads.range??2}:null}}return ut}),H=(n.game?.equipment?.slots||[]).map(S=>S.id);H.length||e('game.json: "equipment.slots" must list the equipment slots');let N=o.map(S=>{let nt=`items.json "${S.key}"`,tt=null;if(S.tool){let ut=a[S.tool.tier];ut||e(`${nt}: tier "${S.tool.tier}" is not defined in items.json "tiers"`),typeof S.tool.type!="string"&&e(`${nt}: tool.type is required`),tt={type:S.tool.type,tier:ut?.level??1,speed:ut?.speed??1,uses:ut?.durability??100,head:ut?.head??S.tool.tier}}return!c[S.key]&&!tt&&e(`${nt}: no sprite - add "${S.key}" to textures.json "sprites"`),S.equip&&!H.includes(S.equip.slot)&&e(`${nt}: equip.slot "${S.equip.slot}" is not one of the slots in game.json equipment (${H.join(", ")})`),S.equip&&![S.equip.armor??0,S.equip.slots??0].every(ut=>Number.isInteger(ut)&&ut>=0)&&e(`${nt}: equip.armor and equip.slots must be whole numbers`),S.fuel!=null&&!(i(S.fuel)&&S.fuel>0)&&e(`${nt}: "fuel" must be the seconds it burns in a furnace`),{id:S.id,key:S.key,name:S.name??S.key,stack:S.stack??(tt?1:64),tool:tt,food:S.food??0,fuel:S.fuel??0,creative:!!S.creative,offhand:!!S.offhand,equip:S.equip?{slot:S.equip.slot,armor:S.equip.armor??0,slots:S.equip.slots??0}:null,saturation:S.saturation??(S.food??0)*.6,places:S.places?Object.fromEntries(Object.entries(S.places).map(([ut,at])=>(["up","north","south","east","west"].includes(ut)||e(`${nt}: places.${ut} must be up, north, south, east or west (the face you click)`),[ut,M(at,`${nt} places.${ut}`)]))):null,plants:S.plants?{block:M(S.plants.block,`${nt} plants.block`),on:[].concat(S.plants.on).map(ut=>M(ut,`${nt} plants.on`))}:null}});for(let[S,nt]of Object.entries(c))A.has(S)?nt.type==="pixelart"&&C(nt,`sprite "${S}"`):e(`textures.json sprite "${S}" does not match any item in items.json`);for(let[S,nt]of Object.entries(n.textures?.toolHeads||{}))(!nt.light||!nt.base||!nt.dark)&&e(`textures.json toolHeads "${S}" needs light, base and dark colours`);for(let S of o)S.tool&&!n.textures?.toolHeads?.[a[S.tool.tier]?.head??S.tool.tier]&&e(`items.json "${S.key}": no toolHeads colours for head "${a[S.tool.tier]?.head??S.tool.tier}" in textures.json`);let I={};for(let[S,nt]of Object.entries(h)){if(!s(nt)){e(`loot.json "${S}": must be a list of entries`);continue}I[S]=nt.map((tt,ut)=>{let at=`loot.json "${S}" #${ut+1}`,P=tt.chance??1;(!i(P)||P<0||P>1)&&e(`${at}: chance must be 0-1`);let ge=tt.count??1,[le,w]=s(ge)?ge:[ge,ge];return(!Number.isInteger(le)||!Number.isInteger(w)||le<0||w<le)&&e(`${at}: count must be a whole number or [min, max]`),{id:E(tt.item,at),chance:P,min:le,max:w}})}let O={};for(let[S,nt]of Object.entries(f))O[S]=nt.map(tt=>E(tt,`recipes.json group "${S}"`));let q={};for(let[S,nt]of Object.entries(m))q[S]={label:nt.label??S};let G=u.map((S,nt)=>{let tt=`recipes.json #${nt+1} (${S.out})`;return S.at!=null&&!q[S.at]&&e(`${tt}: station "${S.at}" is not defined in "stations"`),(!s(S.in)||!S.in.length)&&e(`${tt}: "in" needs at least one ingredient`),{out:E(S.out,tt),n:S.n??1,station:S.at??null,label:S.label??null,ins:(S.in||[]).map(([ut,at])=>((!Number.isInteger(at)||at<1)&&e(`${tt}: ingredient counts must be whole numbers >= 1`),typeof ut=="string"&&ut.startsWith("@")?O[ut.slice(1)]?[O[ut.slice(1)],at]:(e(`${tt}: unknown group "${ut}"`),[0,at]):[E(ut,tt),at]))}}),et={};for(let[S,nt]of Object.entries(x)){for(let tt of nt.stations||[])tt!==null&&!q[tt]&&e(`recipes.json window "${S}": station "${tt}" is not defined`);et[S]={title:nt.title??S,sub:nt.sub??"",stations:nt.stations??[null],furnace:!!nt.furnace}}let B=(n.recipes.smelting||[]).map((S,nt)=>{let tt=`recipes.json smelting #${nt+1} (${S.in})`,ut=S.seconds??10;return(!i(ut)||ut<=0)&&e(`${tt}: "seconds" must be more than 0`),{in:E(S.in,tt),out:E(S.out,tt),seconds:ut}}),X=new Set;for(let S of B)X.has(S.in)&&e(`recipes.json smelting: "${p.get(S.in)}" is smelted twice`),X.add(S.in);let K=new Map;for(let S of F)S.fuel&&K.set(S.id,S.fuel);for(let S of N)S.fuel&&K.set(S.id,S.fuel);et.hand||e('recipes.json: a "hand" window is required (the inventory)');let bt=n.goals.goals.map((S,nt)=>{let tt=`goals.json #${nt+1}`;if(typeof S.text!="string"&&e(`${tt}: "text" is required`),S.collectedAny){let ut=S.collectedAny.map(at=>E(at,tt));return{text:S.text,done:at=>ut.some(P=>at.collected.has(P))}}if(S.collected){let ut=E(S.collected,tt);return{text:S.text,done:at=>at.collected.has(ut)}}if(S.crafted){let ut=E(S.crafted,tt);return{text:S.text,done:at=>at.crafted.has(ut)}}if(S.craftedAny){let ut=S.craftedAny.map(at=>E(at,tt));return{text:S.text,done:at=>ut.some(P=>at.crafted.has(P))}}return S.flag?(Km.includes(S.flag)||e(`${tt}: flag "${S.flag}" is not one the game sets (${Km.join(", ")})`),{text:S.text,done:ut=>ut.flags.has(S.flag)}):(e(`${tt}: needs one of collected / collectedAny / crafted / craftedAny / flag`),{text:S.text,done:()=>!1})}),gt=n.worldgen||{},Kt={};for(let[S,nt]of Object.entries(gt.blocks||{}))S!=="fillerDepth"&&(Kt[S]=M(nt,`worldgen.json blocks.${S}`));let Ht={...gt,ids:Kt,ores:(gt.ores||[]).map((S,nt)=>({...S,id:M(S.block,`worldgen.json ores[${nt}]`)})),trees:{...gt.trees,variants:(gt.trees?.variants||[]).map((S,nt)=>{let tt=`worldgen.json trees.variants[${nt}] (${S.key})`;typeof S.key!="string"&&e(`${tt}: "key" is required`),["round","tall","cone","bush"].includes(S.shape)||e(`${tt}: shape must be round, tall, cone or bush`),(!i(S.weight)||S.weight<=0)&&e(`${tt}: weight must be more than 0`),s(S.trunk)&&S.trunk.length===2&&S.trunk.every(Number.isInteger)&&S.trunk[0]>=1&&S.trunk[1]>=S.trunk[0]||e(`${tt}: trunk must be [min, max] whole numbers`);let ut=S.heights??[0,99];return s(ut)&&ut.length===2&&ut[1]>=ut[0]||e(`${tt}: heights must be [lowest, highest] terrain height`),{key:S.key,weight:S.weight,shape:S.shape,trunk:S.trunk,heights:ut,logId:M(S.log,`${tt} log`),leavesId:M(S.leaves,`${tt} leaves`)}})},groundCover:{...gt.groundCover,variants:(gt.groundCover?.variants||[]).map((S,nt)=>({...S,id:M(S.block,`worldgen.json groundCover.variants[${nt}]`)}))}};Ht.trees.variants.length||e("worldgen.json: trees.variants needs at least one tree");let Yt=new Set(Ht.trees.variants.map(S=>S.key));for(let S of F)for(let nt of S.plant?.grows?.trees??[])Yt.has(nt)||e(`blocks.json "${S.key}": plant.grows.trees "${nt}" is not a tree variant in worldgen.json`);let j={...n.game};j.creativeHotbarIds=(n.game?.creativeHotbar||[]).map(S=>M(S,"game.json creativeHotbar"));for(let S of["name","tagline"]){let nt=j.studio?.[S];if(typeof nt!="string"||!nt.trim())e(`game.json studio.${S} must be some text`);else for(let tt of nt.toUpperCase())Cd[tt]||e(`game.json studio.${S}: the logo font has no "${tt}" (letters, digits, space and - . ! & ' work)`)}["shatter","land"].includes(j.treeFall?.mode)||e('game.json treeFall.mode must be "shatter" or "land"');for(let S of Object.keys(d))s(d[S])||e(`sounds.json material "${S}" must be a list of layers`);for(let S of F)S.sound!=="default"&&!d[S.sound]&&e(`blocks.json "${S.key}": sound "${S.sound}" is not defined in sounds.json (using "default" is fine)`);let Q={};for(let[S,nt]of Object.entries(n.textures?.animations??{})){if(S.startsWith("_"))continue;let tt=`textures.json animations "${S}"`;l[S]||e(`${tt}: "${S}" is not a tile`),(!s(nt.frames)||nt.frames.length<2||nt.frames[0]!==S||nt.frames.some(ut=>!l[ut]))&&e(`${tt}: frames must list at least two tiles, starting with "${S}" itself`),(!i(nt.fps)||nt.fps<=0||nt.fps>30)&&e(`${tt}: fps must be 1-30`),Q[S]={frames:nt.frames,fps:nt.fps}}let mt=["piano","bell","pluck"],Bt=["triangle","strings"],wt=["sine","drone"],kt=n.music??{},Se=S=>Number.isInteger(S)&&S>=24&&S<=100;(!s(kt.tracks)||kt.tracks.length<2)&&e('music.json: "tracks" must list at least two tracks');let Gt=kt.gapSeconds??[5,12];s(Gt)&&Gt.length===2&&Gt.every(i)&&Gt[0]>=0&&Gt[1]>=Gt[0]||e('music.json: "gapSeconds" must be [min, max] seconds of silence between tracks');let Qt=new Set,ue=(s(kt.tracks)?kt.tracks:[]).map((S,nt)=>{let tt=`music.json track #${nt+1} (${S.key})`;(typeof S.key!="string"||!Qm.test(S.key))&&e(`${tt}: "key" must be lowercase letters, digits and underscores`),Qt.has(S.key)&&e(`${tt}: key used twice`),Qt.add(S.key),typeof S.name!="string"&&e(`${tt}: "name" is required`),(!i(S.bpm)||S.bpm<30||S.bpm>160)&&e(`${tt}: bpm must be 30-160`),(!Number.isInteger(S.bars)||S.bars<4||S.bars>128)&&e(`${tt}: bars must be a whole number 4-128`);let ut=S.barsPerChord??1;(!Number.isInteger(ut)||ut<1)&&e(`${tt}: barsPerChord must be a whole number >= 1`),(!s(S.chords)||!S.chords.length)&&e(`${tt}: "chords" needs at least one chord`);for(let[P,ge]of(s(S.chords)?S.chords:[]).entries())Se(ge.root)||e(`${tt} chord #${P+1}: root must be a MIDI note 24-100`),(!s(ge.tones)||ge.tones.length<3||!ge.tones.every(Se))&&e(`${tt} chord #${P+1}: tones must be at least three MIDI notes 24-100`);S.pad!=null&&!Bt.includes(S.pad)&&e(`${tt}: pad must be one of ${Bt.join(", ")}`),S.bass!=null&&!wt.includes(S.bass)&&e(`${tt}: bass must be one of ${wt.join(", ")}`),S.lead&&!mt.includes(S.lead.voice)&&e(`${tt}: lead.voice must be one of ${mt.join(", ")}`),!S.lead&&!S.melody&&!S.arp&&e(`${tt}: needs a lead, a melody or an arp (something to play)`),S.arp&&(mt.includes(S.arp.voice)||e(`${tt}: arp.voice must be one of ${mt.join(", ")}`),(!s(S.arp.pattern)||!S.arp.pattern.length||!S.arp.pattern.every(P=>Number.isInteger(P)&&P>=0))&&e(`${tt}: arp.pattern must be a list of chord-tone numbers`),(!i(S.arp.step)||S.arp.step<=0||S.arp.step>4)&&e(`${tt}: arp.step must be 0-4 beats`)),S.melody&&!(s(S.melody)&&S.melody.every(P=>s(P)&&P.length===5&&Number.isInteger(P[0])&&P[0]>=0&&P[0]<S.bars&&i(P[1])&&P[1]>=0&&P[1]<4&&Se(P[2])&&i(P[3])&&P[3]>0&&i(P[4])))&&e(`${tt}: melody entries must be [bar, beat, midi note, beats, loudness] inside the track`);let at=S.lead?.density??[.8,.45,.3];return s(at)&&at.length===3&&at.every(P=>i(P)&&P>=0&&P<=1)||e(`${tt}: lead.density must be three chances 0-1`),{key:S.key,name:S.name,bpm:S.bpm,bars:S.bars,barsPerChord:ut,chords:S.chords??[],lead:S.lead?{voice:S.lead.voice,density:at,leap:S.lead.leap??.1,rest:S.lead.rest??0}:null,pad:S.pad??null,bass:S.bass??null,arp:S.arp??null,melody:S.melody??null}});Qt.has(kt.title)||e('music.json: "title" must name one of the tracks (the one the title screen plays)'),ue.filter(S=>S.key!==kt.title).length<2&&e("music.json: the game needs at least two tracks besides the title theme, so there is something to shuffle");let te={gapSeconds:Gt,title:kt.title,tracks:ue};if(t.length)throw new Ls(`Content data problems:
 - `+t.join(`
 - `));return{music:te,animations:Q,smelting:B,fuelTime:K,data:n,blocks:F,items:N,idOfKey:g,keyOfId:p,tileNames:R,tiles:l,sprites:c,loot:I,groups:O,stations:q,recipes:G,windows:et,goals:bt,worldgen:Ht,game:j,sounds:n.sounds,textures:n.textures,blockById:new Map(F.map(S=>[S.id,S])),itemById:new Map(N.map(S=>[S.id,S]))}}var e0;try{e0=RS(await CS())}catch(n){throw!t0&&typeof document<"u"&&(document.body.innerHTML=`<pre style="margin:0;padding:24px;min-height:100vh;box-sizing:border-box;background:#1b0f0f;color:#ffd6d6;font:14px/1.5 Consolas,monospace;white-space:pre-wrap"><b style="font-size:18px">VoxelCraft could not load its content files</b>

`+String(n.message).replace(/</g,"&lt;")+`

Fix the file(s) under src/data/ and reload. See src/data/README.md.</pre>`,await new Promise(()=>{})),n}var It=e0;var Jt={AIR:0};for(let n of It.blocks)Jt[n.key.toUpperCase()]=n.id;var mi=It.tileNames,Le=8,sr=Math.max(8,Math.ceil(mi.length/Le)),Rd=n=>mi.indexOf(n),Fe={};for(let n of It.blocks)Fe[n.id]={key:n.key,name:n.name,top:n.top,bottom:n.bottom,side:n.side,hard:n.hard,sound:n.sound,tool:n.tool,need:n.need,...n.plant?{plant:n.plant.kind===2?"hash":"cross",h:n.plant.height}:{}};var Ye=256,no=new Uint16Array(Ye*3),Xe=new Uint8Array(Ye),Ln=new Uint8Array(Ye),de=new Uint8Array(Ye),Ds=new Uint8Array(Ye),jt=new Uint8Array(Ye),io=new Float32Array(Ye),Bi=new Int8Array(Ye*2),gi=new Int8Array(Ye*3),Ia=new Uint8Array(Ye),Ns=new Float32Array(Ye),es=new Uint8Array(Ye),Us=new Uint8Array(Ye),mh=new Uint8Array(Ye),Pa=new Uint8Array(Ye),so=new Uint8Array(Ye),ki=new Uint8Array(Ye),Id=new Float32Array(Ye),xi=new Uint8Array(Ye),La=new Uint8Array(Ye),Na=new Map,ro=new Map,Pd=[0,0,0,0,0,0,0];for(let n of It.blocks)no[n.id*3]=Rd(n.top),no[n.id*3+1]=Rd(n.bottom),no[n.id*3+2]=Rd(n.side),Ln[n.id]=n.solid?1:0,Xe[n.id]=n.opaque?1:0,n.waterLevel&&(de[n.id]=1,Ds[n.id]=n.waterLevel,n.waterLevel<7&&(Pd[n.waterLevel]=n.id)),n.plant&&(jt[n.id]=n.plant.kind,Ns[n.id]=n.plant.height,io[n.id]=.4,Ln[n.id]=0,Xe[n.id]=0),n.model?.type==="torch"&&(jt[n.id]=3,Ns[n.id]=n.model.height,io[n.id]=.16,Ln[n.id]=0,Xe[n.id]=0,Bi[n.id*2]=n.model.lean[0],Bi[n.id*2+1]=n.model.lean[1]),n.support&&(Ia[n.id]=1,gi.set(n.support,n.id*3)),n.role==="log"&&(es[n.id]=1),n.role==="leaf"&&(Us[n.id]=1),n.tillsInto&&(mh[n.id]=n.tillsInto),n.spreadsOnto&&(Pa[n.id]=n.spreadsOnto),n.opens&&ro.set(n.id,n.opens),n.gravity&&(so[n.id]=1),ki[n.id]=n.light,Id[n.id]=n.glow,xi[n.id]=n.lightFilter,n.hydration&&(Na.set(n.id,n.hydration),La[n.id]=1);var gh=[...It.blocks.filter(n=>n.creative).map(n=>n.id),...It.items.filter(n=>n.creative).map(n=>n.id)];var Wn=(n,t)=>(n+32768)*65536+(t+32768),he=(n,t,e)=>(t*16+e)*16+n;var Xn=0,Fs=1,Da=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,-1,0],[0,1,0]],Ld=It.game.lighting,Nn=Ld.skyLevel,xh=Ld.minBrightness;function oo(n){let t=Math.max(0,Math.min(Nn,n))/Nn;return Math.pow(t,Ld.gamma)}function i0(n){return xh+(1-xh)*oo(n)}function vh(n){return Math.pow(Math.max(0,Math.min(Nn,n))/Nn,1.25)}var _h=32768,Cn=(n,t,e)=>((n+_h)*65536+(e+_h))*64+t;function n0(n,t){t[1]=n%64;let e=Math.floor(n/64);t[0]=Math.floor(e/65536)-_h,t[2]=e%65536-_h}var yh=class{constructor(t){this.world=t,this.tmp=[0,0,0],this.carried=null,t.addChangeListener((e,i,s,r,o)=>this.onBlockChanged(e,i,s,r,o))}get hasEmitters(){return ki.some(t=>t>0)}emitAt(t,e,i,s){let r=this.carried;return Math.max(ki[s],r&&r.x===t&&r.y===e&&r.z===i?r.level:0)}setCarried(t,e,i,s){let r=this.carried;r&&s>0&&r.x===t&&r.y===e&&r.z===i&&r.level===s||!r&&!(s>0)||(this.carried=null,r&&this.refreshBlockLight(r.x,r.y,r.z),s>0&&this.world.getChunk(t>>4,i>>4)&&e>=0&&e<64&&!Xe[this.world.getBlock(t,e,i)]&&(this.carried={x:t,y:e,z:i,level:s},this.refreshBlockLight(t,e,i)))}refreshBlockLight(t,e,i){let s=this.world.getBlock(t,e,i),r=[],o=[],a=this.get(t,e,i,Fs);a>0&&(r.push([Cn(t,e,i),a]),this.set(t,e,i,Fs,0));let l=this.emitAt(t,e,i,s);l>0&&(this.set(t,e,i,Fs,l),o.push(Cn(t,e,i)));for(let[c,h,d]of Da)this.get(t+c,e+h,i+d,Fs)>0&&o.push(Cn(t+c,e+h,i+d));o.push(...this.unspread(Fs,r)),this.propagate(Fs,o)}get(t,e,i,s){if(e<0||e>=64)return-1;let r=this.world.getChunk(t>>4,i>>4);if(!r)return-1;let o=r.light[he(t&15,e,i&15)];return s===Xn?o>>4:o&15}levelAt(t,e,i){if(e>=64)return Nn;if(e<0)return 0;let s=this.world.getChunk(t>>4,i>>4);if(!s)return Nn;let r=s.light[he(t&15,e,i&15)];return Math.max(r>>4,r&15)}set(t,e,i,s,r){let o=this.world.getChunk(t>>4,i>>4),a=he(t&15,e,i&15),l=o.light[a];o.light[a]=s===Xn?r<<4|l&15:l&240|r,o.dirty=!0;let c=t&15,h=i&15,d=t>>4,u=i>>4,f=(m,x)=>{let g=this.world.getChunk(m,x);g&&(g.dirty=!0)};c===0?f(d-1,u):c===15&&f(d+1,u),h===0?f(d,u-1):h===15&&f(d,u+1)}propagate(t,e){let i=this.world,s=this.tmp;for(let r=0;r<e.length;r++){n0(e[r],s);let o=s[0],a=s[1],l=s[2],c=this.get(o,a,l,t);if(!(c<=1))for(let[h,d,u]of Da){let f=o+h,m=a+d,x=l+u;if(m<0||m>=64)continue;let g=i.getChunk(f>>4,x>>4);if(!g)continue;let p=g.data[he(f&15,m,x&15)];if(Xe[p])continue;let b=t===Xn&&d===-1&&c===Nn&&xi[p]===0?Nn:c-Math.max(1,xi[p]);b>this.get(f,m,x,t)&&(this.set(f,m,x,t,b),e.push(Cn(f,m,x)))}}}unspread(t,e){let i=this.world,s=this.tmp,r=[];for(let o=0;o<e.length;o++){let[a,l]=e[o];n0(a,s);let c=s[0],h=s[1],d=s[2];for(let[u,f,m]of Da){let x=c+u,g=h+f,p=d+m,b=this.get(x,g,p,t);if(b<=0)continue;let A=i.getBlock(x,g,p);if(b<l||t===Xn&&f===-1&&l===Nn&&b===Nn&&xi[A]===0){if(t===Fs&&this.emitAt(x,g,p,A)>0){this.set(x,g,p,t,this.emitAt(x,g,p,A)),r.push(Cn(x,g,p));continue}this.set(x,g,p,t,0),e.push([Cn(x,g,p),b])}else r.push(Cn(x,g,p))}}return r}directColumn(t,e,i=-1,s=0){let r=new Int8Array(64),o=this.world.getChunk(t>>4,e>>4),a=Nn;for(let l=63;l>=0;l--){let c=l===i?s:o.data[he(t&15,l,e&15)];Xe[c]?a=0:a=Math.max(0,a-xi[c]),r[l]=a}return r}initChunk(t,{clear:e=!0}={}){let i=this.world,s=t.data,r=t.cx*16,o=t.cz*16;e&&t.light.fill(0);let a=this.hasEmitters;for(let u=0;u<16;u++)for(let f=0;f<16;f++){let m=Nn;for(let x=63;x>=0;x--){let g=he(f,x,u),p=s[g];Xe[p]?m=0:m=Math.max(0,m-xi[p]);let b=m<<4;a&&ki[p]>0&&(b|=ki[p]),t.light[g]=b}}let l=this.carried;if(l&&l.x>=r&&l.x<r+16&&l.z>=o&&l.z<o+16&&!Xe[s[he(l.x-r,l.y,l.z-o)]]){let u=he(l.x-r,l.y,l.z-o),f=t.light[u];(f&15)<l.level&&(t.light[u]=f&240|l.level)}let c=[],h=[],d=(u,f)=>u===0||f===0||u===15||f===15;for(let u=0;u<64;u++)for(let f=0;f<16;f++)for(let m=0;m<16;m++){let x=t.light[he(m,u,f)],g=x>>4,p=x&15;if(g<=1&&p<=1)continue;let b=d(m,f);if(!b)for(let[A,v,E]of Da){let M=u+v;if(M<0||M>=64)continue;let R=he(m+A,M,f+E);if(Xe[s[R]])continue;let y=t.light[R];if(y>>4<g-1||(y&15)<p-1){b=!0;break}}b&&(g>1&&c.push(Cn(r+m,u,o+f)),p>1&&h.push(Cn(r+m,u,o+f)))}for(let[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){let m=i.getChunk(t.cx+u,t.cz+f);if(m)for(let x=0;x<64;x++)for(let g=0;g<16;g++){let p=u===1?0:u===-1?15:g,b=f===1?0:f===-1?15:g,A=m.light[he(p,x,b)];A>>4>1&&c.push(Cn(m.cx*16+p,x,m.cz*16+b)),(A&15)>1&&h.push(Cn(m.cx*16+p,x,m.cz*16+b))}}this.propagate(Xn,c),this.propagate(Fs,h)}rebuildAll(){let t=[...this.world.chunks.values()];for(let e of t)e.light.fill(0);for(let e of t)this.initChunk(e,{clear:!1});for(let e of t)e.dirty=!0}onBlockChanged(t,e,i,s,r){if(!this.world.getChunk(t>>4,i>>4)||e<0||e>=64||!(Xe[s]!==Xe[r]||xi[s]!==xi[r]||ki[s]!==ki[r]))return;let l=this.directColumn(t,i,e,s),c=this.directColumn(t,i),h=[],d=[];for(let f=0;f<64;f++){if(c[f]===l[f])continue;let m=this.get(t,f,i,Xn);c[f]<l[f]?m>0&&(h.push([Cn(t,f,i),m]),this.set(t,f,i,Xn,0)):(c[f]>m&&this.set(t,f,i,Xn,c[f]),d.push(Cn(t,f,i)))}let u=this.get(t,e,i,Xn);u>0&&(Xe[r]||xi[r]>xi[s])&&c[e]===l[e]&&(h.push([Cn(t,e,i),u]),this.set(t,e,i,Xn,0));for(let[f,m,x]of Da)this.get(t+f,e+m,i+x,Xn)>0&&d.push(Cn(t+f,e+m,i+x));d.push(...this.unspread(Xn,h)),this.propagate(Xn,d),this.hasEmitters&&this.refreshBlockLight(t,e,i)}};var IS=It.worldgen.trees,Nd=IS.variants,r0=n=>Nd.find(t=>t.key===n),s0=r0("oak")??Nd[0];function o0(n,t,e,i,s=!1){if(s)return s0;let r=Nd.filter(a=>i>=a.heights[0]&&i<=a.heights[1]);if(!r.length)return s0;let o=Gn(t,e,n+13)*r.reduce((a,l)=>a+l.weight,0);for(let a of r){if(o<a.weight)return a;o-=a.weight}return r[r.length-1]}var PS=(n,t,e,i)=>n.trunk[0]+Math.floor(Gn(e,i,t+7)*(n.trunk[1]-n.trunk[0]+1));function ao(n,t,e,i,s,r,o,a){for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++)Math.abs(c)===s&&Math.abs(l)===s&&s>0&&(s===1||a==="always"||Gn(t+c,i+l+e,o)<.5)||n.push({x:t+c,y:e,z:i+l,id:r,leaf:!0})}function Dd(n,t,e,i,s){let r=PS(n,t,e,s),o=i+r,a=[];if(n.shape==="round")for(let l=o-2;l<=o+1;l++)ao(a,e,l,s,l>=o?1:2,n.leavesId,t,"random");else if(n.shape==="tall")[2,3,3,2,1,1].forEach((c,h)=>ao(a,e,o-3+h,s,c,n.leavesId,t,c>=3?"always":"random"));else if(n.shape==="cone"){let l=[0,1,1,2,2,3,3],c=Math.min(l.length,r-1);for(let h=0;h<c;h++)ao(a,e,o+1-h,s,l[h],n.leavesId,t,"always")}else ao(a,e,o,s,1,n.leavesId,t,"random"),ao(a,e,o+1,s,1,n.leavesId,t,"random"),ao(a,e,o-1,s,2,n.leavesId,t,"always");for(let l=i+1;l<=o;l++)a.push({x:e,y:l,z:s,id:n.logId,leaf:!1});return a}function a0(n,t,e,i,s,r=1,o=Math.random){let a=r0(s[Math.floor(o()*s.length)]);if(!a)return!1;let l=Dd(a,r+Math.floor(o()*1e3),t,e-1,i),c=h=>h===Jt.AIR||jt[h]>0||Us[h]===1;for(let h of l)if(!(h.x===t&&h.y===e&&h.z===i)&&!c(n.getBlock(h.x,h.y,h.z)))return!1;for(let h of l)n.setBlock(h.x,h.y,h.z,h.id);return!0}var Ud=It.game.tilling,ve=It.worldgen,zi=ve.ids;var ii=ve.seaLevel,Mh=ve.snowLine,l0=(n,t,e)=>Math.max(t,Math.min(e,n)),Sh=(n,t,e)=>{let i=l0((e-n)/(t-n),0,1);return i*i*(3-2*i)},Fd=class{constructor(t,e){this.cx=t,this.cz=e,this.data=new Uint8Array(1024*16),this.dirty=!0,this.meshes=null,this.plants=new Set,this.hydrating=new Set,this.version=0,this.light=new Uint8Array(1024*16)}},lo=class{constructor(t){this.seed=t,this.noise=new Ra(t),this.noiseB=new Ra(t^1540483477),this.chunks=new Map,this.edits=new Map,this.legacyCaves=new Set,this.editsDirty=!1,this.listeners=[],this.lighting=new yh(this)}heightAt(t,e){let i=this.noise,s=ve.terrain,r=i.fbm2(t*s.continentScale,e*s.continentScale,3),o=i.fbm2(t*s.hillScale+100,e*s.hillScale+100,4),a=1-Math.abs(i.noise2(t*s.ridgeScale-50,e*s.ridgeScale-50)),l=Sh(.08,.55,r),c=ii+s.baseAboveSea+r*s.continentHeight+o*s.hillHeight;c+=Math.pow(a,3)*l*s.ridgeHeight;let h=ve.rivers,d=t+h.warp*i.noise2(t*.02+11,e*.02+7),u=e+h.warp*i.noise2(t*.02-31,e*.02+53),f=Math.abs(this.noiseB.noise2(d*h.scale+300,u*h.scale-120)),m=1-Sh(ii+h.lowlandFrom,ii+h.lowlandTo,c),x=(1-Sh(h.coreWidth,h.bankWidth,f))*m,g=ii-h.bedBelowSea;return x>0&&c>g&&(c-=(c-g)*x),Math.floor(l0(c,3,58))}forestDensity(t,e){let i=this.noiseB.fbm2(t*.02,e*.02,2);return ve.trees.baseDensity+ve.trees.forestDensity*Sh(0,.45,i)}isCavern(t,e,i){let s=ve.caves.caverns;if(!s||e<s.minY||e>s.maxY)return!1;let[r,o,a]=s.scale;return this.noiseB.noise3(t*r+211,e*o+57,i*a-93)>s.threshold}isEntrance(t,e){let i=ve.caves.entrances;return!!i&&this.noiseB.noise3(t*i.scale+500,.5,e*i.scale-500)>i.threshold}isCave(t,e,i){let s=this.noiseB,[r,o,a]=ve.caves.scale,l=ve.caves.threshold;return Math.abs(s.noise3(t*r,e*o,i*a))>l?!1:Math.abs(s.noise3(t*r+77,e*o+31,i*a+13))<l}oreAt(t,e,i){let s=this.noiseB;for(let r of ve.ores)if(!(e<r.minY||e>=r.maxY)&&s.noise3(t*r.scale+r.offset[0],e*r.scale+r.offset[1],i*r.scale+r.offset[2])>r.threshold)return r.id;return zi.stone}hasTree(t,e){let i=Gn(t,e,this.seed);if(i>=ve.trees.baseDensity+ve.trees.forestDensity||i>=this.forestDensity(t,e))return!1;let s=this.heightAt(t,e);return s>=ii+ve.trees.minAboveSea&&s<Mh-ve.trees.belowSnowLine}treesNear(t,e,i){let s=0;for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)this.hasTree(t+o,e+r)&&s++;return s}generateChunk(t,e){let i=new Fd(t,e),s=i.data,r=!this.legacyCaves.has(Wn(t,e)),o=t*16,a=e*16;for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=o+c,d=a+l,u=this.heightAt(h,d),f=u<=ii+ve.beachAboveSea,m=u>=Mh,x=ve.caves,g=r&&this.isEntrance(h,d);for(let p=0;p<=u;p++){let b=zi.stone;p===u?b=f?zi.beach:m?zi.snowSurface:zi.surface:p>=u-ve.blocks.fillerDepth&&(b=f?zi.beachFiller:m?zi.snowFiller:zi.filler),p>=x.minY&&(p<u-x.surfaceDepth||u>ii+1&&p<=u&&g?this.isCave(h,p,d):!1)||r&&p<u-(x.caverns?.surfaceDepth??6)&&this.isCavern(h,p,d)?b=Jt.AIR:b===zi.stone&&(b=this.oreAt(h,p,d)),s[he(c,p,l)]=b}for(let p=u+1;p<=ii;p++)s[he(c,p,l)]=zi.sea;if(!f&&!m&&u+1<64&&s[he(c,u,l)]!==Jt.AIR&&Gn(h,d,this.seed+97)<ve.groundCover.chance){let p=Gn(h,d,this.seed+131),b=ve.groundCover.variants.reduce((v,E)=>v+E.weight,0),A=ve.groundCover.variants[ve.groundCover.variants.length-1].id;for(let v of ve.groundCover.variants){if(p<v.weight/b){A=v.id;break}p-=v.weight/b}s[he(c,u+1,l)]=A}}this.growTrees(i),this.applyEdits(i);for(let l=0;l<s.length;l++)jt[s[l]]&&i.plants.add(l),La[s[l]]&&i.hydrating.add(l);return this.chunks.set(Wn(t,e),i),this.lighting.initChunk(i),i}growTrees(t){let e=t.cx*16,i=t.cz*16,s=t.data,r=(a,l,c,h,d)=>{let u=a-e,f=c-i;if(u<0||u>=16||f<0||f>=16||l<0||l>=64)return;let m=he(u,l,f);d&&s[m]!==Jt.AIR||(s[m]=h)},o=this.legacyCaves.has(Wn(t.cx,t.cz));for(let a=i-2;a<i+16+2;a++)for(let l=e-2;l<e+16+2;l++){if(Gn(l,a,this.seed)>=this.forestDensity(l,a))continue;let c=this.heightAt(l,a);if(c<ii+ve.trees.minAboveSea||c>=Mh-ve.trees.belowSnowLine)continue;let h=o0(this.seed,l,a,c,o);for(let d of Dd(h,this.seed,l,c,a))r(d.x,d.y,d.z,d.id,d.leaf)}}applyEdits(t){let e=this.edits.get(Wn(t.cx,t.cz));if(e)for(let[i,s]of e)t.data[i]=s}getChunk(t,e){return this.chunks.get(Wn(t,e))}getBlock(t,e,i){if(e<0||e>=64)return Jt.AIR;let s=this.chunks.get(Wn(t>>4,i>>4));return s?s.data[he(t&15,e,i&15)]:Jt.AIR}nearWater(t,e,i,s=Ud.radius){for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(!(o*o+r*r>s*s)){for(let a=-Ud.waterBelow;a<=Ud.waterAbove;a++)if(de[this.getBlock(t+o,e+a,i+r)])return!0}return!1}addChangeListener(t){this.listeners.push(t)}canPlace(t,e,i){return e>=0&&e<64&&this.isLoaded(t,i)}isLoaded(t,e){return this.chunks.has(Wn(t>>4,e>>4))}setBlock(t,e,i,s){if(e<0||e>=64)return[];let r=t>>4,o=i>>4,a=this.getChunk(r,o);if(!a)return[];let l=t&15,c=i&15,h=a.data[he(l,e,c)];a.data[he(l,e,c)]=s,a.version++,jt[h]&&a.plants.delete(he(l,e,c)),jt[s]&&a.plants.add(he(l,e,c)),La[h]&&a.hydrating.delete(he(l,e,c)),La[s]&&a.hydrating.add(he(l,e,c));let d=Wn(r,o),u=this.edits.get(d);u||this.edits.set(d,u=new Map),u.set(he(l,e,c),s),this.editsDirty=!0;let f=[a],m=(x,g)=>{let p=this.getChunk(x,g);p&&f.push(p)};l===0&&m(r-1,o),l===15&&m(r+1,o),c===0&&m(r,o-1),c===15&&m(r,o+1);for(let x of f)x.dirty=!0;for(let x of this.listeners)x(t,e,i,h,s);return f}hasWaterNear(t,e,i){for(let s=-i;s<=i;s+=3)for(let r=-i;r<=i;r+=3)if(this.heightAt(t+r,e+s)<ii)return!0;return!1}findSpawn(){for(let[t,e]of[[!0,!0],[!0,!1],[!1,!1]])for(let i=0;i<300;i+=4)for(let s=0;s<8;s++){let r=Math.round(Math.cos(s*Math.PI/4)*i),o=Math.round(Math.sin(s*Math.PI/4)*i),a=this.heightAt(r,o);if(!(a<=ii+ve.beachAboveSea||a>=Mh-4)&&!(t&&this.treesNear(r,o,ve.spawn.treeRadius)<ve.spawn.minTrees)&&!(e&&!this.hasWaterNear(r,o,ve.spawn.waterRadius)))return{x:r+.5,y:a+1,z:o+.5}}return{x:.5,y:ii+10,z:.5}}serializeLegacy(){return[...this.legacyCaves].map(t=>`${Math.floor(t/65536)-32768},${t%65536-32768}`)}serializeEdits(){let t={};for(let[e,i]of this.edits){let s=Math.floor(e/65536)-32768,r=e%65536-32768;t[`${s},${r}`]=Object.fromEntries(i)}return t}loadEdits(t,e=null){for(let i of e??Object.keys(t||{})){let[s,r]=i.split(",").map(Number);this.legacyCaves.add(Wn(s,r))}for(let[i,s]of Object.entries(t||{})){let[r,o]=i.split(",").map(Number),a=new Map;for(let[l,c]of Object.entries(s))a.set(Number(l),c);this.edits.set(Wn(r,o),a)}}};var LS={};for(let n of It.items)LS[n.key.toUpperCase()]=n.id;var Hi=new Map(It.items.map(n=>[n.id,n])),Os=n=>It.blockById.has(n),_n=n=>Os(n)?Fe[n].name:Hi.get(n)?.name??"Unknown",qn=n=>Hi.get(n)?.tool??null,c0=n=>Hi.get(n)?.food??0,h0=n=>Hi.get(n)?.saturation??0,$n=n=>Hi.get(n)?.stack??64,Ua=n=>qn(n)?.uses??0,Od=n=>Hi.get(n)?.plants??null,u0=n=>It.keyOfId.get(n);var rr=n=>Array.isArray(n)?n:[n],Bd=n=>rr(n).map(_n).join(" or "),DC=It.groups.coals||[],Bs=n=>It.fuelTime.get(n)??0,NS=new Map(It.smelting.map(n=>[n.in,n])),kd=n=>NS.get(n)??null,bh=It.smelting,d0=[...It.fuelTime.keys()],ns=n=>Hi.get(n)?.equip??null,co=It.game.equipment.slots;var or=n=>!!Hi.get(n)?.offhand,zd=(n,t)=>ns(n)?.slot===t||t==="shield"&&or(n);function Hd(n){let t=Hi.get(n)?.places;return t?Math.max(0,...Object.values(t).map(e=>ki[e])):0}function f0(n,t){let e=qn(t);return e?Fe[n]?.tool===e.type?1:It.game.tools.wrongToolWear:0}var Fa=n=>Hi.get(n)?.places??null;function p0(n,t){let e=[];for(let i of n){if(t()>=i.chance)continue;let s=i.min+Math.floor(t()*(i.max-i.min+1));s>0&&e.push({id:i.id,n:s})}return e}function ho(n,t,e=Math.random){if(!t)return[];let i=It.blockById.get(n),s=i?.loot?It.loot[i.loot]:null;return s?p0(s,e):[{id:n,n:1}]}function m0(n,t=Math.random){let e=It.blockById.get(n),i=e?.shatterLoot?It.loot[e.shatterLoot]:e?.loot?It.loot[e.loot]:null;return i?p0(i,t):[{id:n,n:1}]}function wh(n,t){let e=Fe[n],i=qn(t),s=!!i&&e.tool===i.type,r=e.need===0||s&&i.tier>=e.need,o=e.hard;return s&&(o/=i.speed),r||(o*=3.3),{time:o,canHarvest:r,matches:s}}var g0=n=>Object.entries(It.data.items.tiers).find(([,t])=>t.level===n)?.[0]??"",Oa=It.recipes,x0=Object.fromEntries(Object.entries(It.stations).map(([n,t])=>[n,t.label])),Ba=It.windows,ar=It.goals,Vd={};for(let n of It.blocks){let t=n.plant?.stage;t&&(Vd[n.id]={label:t.label,stage:t.step,name:t.name,ripe:t.ripe,crop:t.crop})}var is=36,_0=9,Gd=is+_0,uo=9,Eh=class{constructor(){this.slots=Array(Gd).fill(null),this.equipment=Object.fromEntries(co.map(t=>[t.id,null]))}get capacity(){let t=this.equipment.backpack;return is+(t?Math.min(_0,ns(t.id)?.slots??0):0)}get armor(){let t=0;for(let e of Object.values(this.equipment))e&&(t+=ns(e.id)?.armor??0);return t}clickEquip(t,e,i=0){let s=this.equipment[t];if(e){if(!zd(e.id,t))return{cursor:e,refused:null};if(or(e.id)){let a=$n(e.id);if(s&&s.id===e.id){let l=Math.min(a-s.n,i===2?1:e.n);return s.n+=l,{cursor:e.n-l>0?{...e,n:e.n-l}:null,refused:null}}return i===2&&!s?(this.equipment[t]={id:e.id,n:1,d:e.d},{cursor:e.n>1?{...e,n:e.n-1}:null,refused:null}):(this.equipment[t]=e,{cursor:s,refused:null})}if(t==="backpack"&&s&&this.slots.slice(is).some(Boolean))return{cursor:e,refused:"Empty the backpack first"};let r={id:e.id,n:1,d:e.d},o=e.n>1?{...e,n:e.n-1}:null;return s&&o?{cursor:e,refused:null}:(this.equipment[t]=r,{cursor:o??s,refused:null})}return s?t==="backpack"&&this.slots.slice(is).some(Boolean)?{cursor:null,refused:"Empty the backpack first"}:(this.equipment[t]=null,{cursor:s,refused:null}):{cursor:null,refused:null}}quickEquip(t){let e=this.slots[t],i=e&&ns(e.id)?.slot;if(!i||t>=this.capacity||this.equipment[i]&&or(this.equipment[i].id))return!1;let s=this.equipment[i];if(s&&i==="backpack"&&this.slots.slice(is).some(Boolean))return!1;let r={id:e.id,n:1,d:e.d};if(e.n>1){if(s)return!1;e.n-=1}else this.slots[t]=s;return this.equipment[i]=r,!0}takeEverything(){let t=[];for(let e=0;e<this.slots.length;e++)this.slots[e]&&(t.push(this.slots[e]),this.slots[e]=null);for(let e of Object.keys(this.equipment))this.equipment[e]&&(t.push(this.equipment[e]),this.equipment[e]=null);return t}add(t,e=1,i=0){let s=$n(t);if(s>1)for(let r of this.slots.slice(0,this.capacity)){if(e<=0)break;if(r&&r.id===t&&r.n<s){let o=Math.min(s-r.n,e);r.n+=o,e-=o}}for(let r=0;r<this.capacity&&e>0;r++){if(this.slots[r])continue;let o=Math.min(s,e);this.slots[r]={id:t,n:o,d:i},e-=o}return e}count(t){let e=0;for(let i of this.slots)i&&i.id===t&&(e+=i.n);return e}remove(t,e=1){if(this.count(t)<e)return!1;for(let i=this.slots.length-1;i>=0&&e>0;i--){let s=this.slots[i];if(!s||s.id!==t)continue;let r=Math.min(s.n,e);s.n-=r,e-=r,s.n===0&&(this.slots[i]=null)}return!0}canFit(t,e=1){let i=$n(t),s=0;for(let r of this.slots.slice(0,this.capacity))if(r?r.id===t&&i>1&&(s+=i-r.n):s+=i,s>=e)return!0;return!1}countSpec(t){return rr(t).reduce((e,i)=>e+this.count(i),0)}removeSpec(t,e){for(let i of rr(t)){let s=Math.min(e,this.count(i));s>0&&this.remove(i,s),e-=s}return e===0}canCraft(t,e={}){return t.station&&!e[t.station]?!1:t.ins.every(([i,s])=>this.countSpec(i)>=s)}craft(t,e={}){if(!this.canCraft(t,e))return{ok:!1,leftover:0};for(let[s,r]of t.ins)this.removeSpec(s,r);return{ok:!0,leftover:this.add(t.out,t.n)}}damage(t,e=1){let i=this.slots[t];return!i||!Ua(i.id)?!1:(i.d+=e,i.d>=Ua(i.id)?(this.slots[t]=null,!0):!1)}clickSlot(t,e,i=0){return Wd(this.slots,t,e,i)}quickMove(t){let e=this.slots[t];if(!e)return;let[i,s]=t<uo?[uo,this.capacity]:[0,uo],r=$n(e.id),o=e.n;for(let a=i;a<s&&o>0;a++){let l=this.slots[a];if(l&&l.id===e.id&&r>1&&l.n<r){let c=Math.min(r-l.n,o);l.n+=c,o-=c}}for(let a=i;a<s&&o>0;a++)this.slots[a]||(this.slots[a]={id:e.id,n:o,d:e.d},o=0);o===0?this.slots[t]=null:e.n=o}serialize(){return this.slots.map(t=>t?[t.id,t.n,t.d]:null)}load(t){this.slots=Array(Gd).fill(null),(t||[]).slice(0,Gd).forEach((e,i)=>{e&&(this.slots[i]={id:e[0],n:e[1],d:e[2]||0})})}serializeEquipment(){return Object.fromEntries(Object.entries(this.equipment).filter(([,t])=>t).map(([t,e])=>[t,[e.id,e.n,e.d]]))}loadEquipment(t){for(let e of Object.keys(this.equipment)){let i=t?.[e];this.equipment[e]=i&&zd(i[0],e)?{id:i[0],n:or(i[0])?Math.max(1,Math.min($n(i[0]),i[1]||1)):1,d:i[2]||0}:null}}};function Wd(n,t,e,i=0,s=()=>!0){let r=n[t];if(e&&!s(e.id))return e;let o=e?$n(e.id):1;if(i===0){if(!e)return n[t]=null,r;if(!r)return n[t]=e,null;if(r.id===e.id&&o>1){let a=Math.min(o-r.n,e.n);return r.n+=a,e.n-=a,e.n>0?e:null}return n[t]=e,r}if(!e){if(!r)return null;let a=Math.ceil(r.n/2);r.n-=a;let l={id:r.id,n:a,d:r.d};return r.n===0&&(n[t]=null),l}if(!r)n[t]={id:e.id,n:1,d:e.d},e.n-=1;else if(r.id===e.id&&r.n<o)r.n+=1,e.n-=1;else return n[t]=e,r;return e.n>0?e:null}var ks=18,Xd=66,Vi=(n,t,e)=>(t*ks+e)*ks+n,DS=[{n:[1,0,0],t1:[0,0,-1],t2:[0,1,0],o:[1,0,1],shade:.82,k:2},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0],o:[0,0,0],shade:.82,k:2},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0],o:[0,0,1],shade:.68,k:2},{n:[0,0,-1],t1:[-1,0,0],t2:[0,1,0],o:[1,0,0],shade:.68,k:2},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0],o:[0,1,0],shade:1,k:0},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1],o:[0,0,0],shade:.5,k:1}],ka=[[0,0],[1,0],[1,1],[0,1]],y0=[.5,.68,.84,1],v0=(n,t,e,i,s)=>de[n[Vi(t,e+1,i)]]?1:Ds[s]/8;function US(n,t){let e=new Uint8Array(ks*Xd*ks),i=new Uint8Array(ks*Xd*ks).fill(Nn),s=new Uint8Array(ks*Xd*ks);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){let a=o===0&&r===0?t:n.getChunk(t.cx+o,t.cz+r);if(!a)continue;let l=o<0?15:(o>0,0),c=o<0?15:o>0?0:15,h=r<0?15:(r>0,0),d=r<0?15:r>0?0:15;for(let u=0;u<64;u++)for(let f=h;f<=d;f++)for(let m=l;m<=c;m++){let x=a.light[he(m,u,f)],g=Vi(m+o*16+1,u+1,f+r*16+1);e[g]=a.data[he(m,u,f)],i[g]=x>>4,s[g]=x&15}}return{pad:e,sky:i,blk:s}}var za=class{constructor(){this.pos=[],this.uv=[],this.col=[],this.blk=[],this.ind=[],this.sway=[],this.n=0}get empty(){return this.n===0}finish(){return{sway:new Float32Array(this.sway),positions:new Float32Array(this.pos),uvs:new Float32Array(this.uv),colors:new Float32Array(this.col),blocklight:new Float32Array(this.blk),indices:this.n>65535?new Uint32Array(this.ind):new Uint16Array(this.ind)}}};function FS(n,t,e,i,s,r,o,a,l,c,h,d,u){let f=t===2?[[.25,0,.25,.25,0,.75],[.75,0,.25,.75,0,.75],[.25,0,.25,.75,0,.25],[.25,0,.75,.75,0,.75]]:[[.08,0,.08,.92,0,.92],[.92,0,.08,.08,0,.92]],m=t===1?(Gn(c,h,5)-.5)*.3:0,x=t===1?(Gn(c,h,6)-.5)*.3:0,g=.88+Gn(c,h,7)*.16,p=g*oo(d),b=g*vh(u);for(let[A,,v,E,,M]of f){let R=n.n,y=[[A,0,v,0,0],[E,0,M,1,0],[E,1,M,1,1],[A,1,v,0,1]];for(let[C,D,F,H,N]of y)n.pos.push(e+C+m,i+D,s+F+x),n.uv.push(r+H*a,o+N*l),n.col.push(p,p,p),n.blk.push(b,g),n.sway.push(D);n.ind.push(R,R+1,R+2,R,R+2,R+3),n.n+=4}}var M0=[[-1,-1],[1,-1],[1,1],[-1,1]],OS=.78;function BS(n,t,e,i,s,r,o,a,l,c,h){let f=s[0]!==0||s[1]!==0?.2:0,m=f+r,x=.5-s[0]*.38,g=.5-s[1]*.38,p=.5-s[0]*.12,b=.5-s[1]*.12,A=oo(h)*.9,v=o+l*(7/16),E=o+l*(9/16),M=a,R=a+c*(12/16),y=(H,N,I,O,q)=>{n.pos.push(t+H,e+N,i+I),n.uv.push(O,q),n.col.push(A,A,A),n.blk.push(OS,.9),n.sway.push(0)};for(let H=0;H<4;H++){let N=M0[H],I=M0[(H+1)%4],O=n.n;y(x+N[0]*.0625,f,g+N[1]*.0625,v,M),y(x+I[0]*.0625,f,g+I[1]*.0625,E,M),y(p+I[0]*.0625,m,b+I[1]*.0625,E,R),y(p+N[0]*.0625,m,b+N[1]*.0625,v,R),n.ind.push(O,O+2,O+1,O,O+3,O+2),n.n+=4}let C=n.n,D=a+c*(10/16),F=a+c*(12/16);y(p-.0625,m,b+.0625,v,D),y(p+.0625,m,b+.0625,E,D),y(p+.0625,m,b-.0625,E,F),y(p-.0625,m,b-.0625,v,F),n.ind.push(C,C+1,C+2,C,C+2,C+3),n.n+=4}function S0(n,t){let{pad:e,sky:i,blk:s}=US(n,t),r=new za,o=new za,a=new za,l=4e-4,c=1/Le,h=1/sr;for(let d=0;d<64;d++)for(let u=0;u<16;u++)for(let f=0;f<16;f++){let m=t.data[he(f,d,u)];if(m===Jt.AIR)continue;if(jt[m]){let E=no[m*3+2],M=E%Le*c+l,R=1-(Math.floor(E/Le)+1)*h+l,y=Vi(f+1,d+1,u+1);jt[m]===3?BS(r,f,d,u,[Bi[m*2],Bi[m*2+1]],Ns[m],M,R,c-l*2,h-l*2,i[y]):FS(a,jt[m],f,d,u,M,R,c-l*2,h-l*2,t.cx*16+f,t.cz*16+u,i[y],s[y]);continue}let x=de[m]===1,g=x?o:r,p=f+1,b=d+1,A=u+1,v=x?v0(e,p,b,A,m):1;for(let E=0;E<6;E++){let M=DS[E],R=e[Vi(p+M.n[0],b+M.n[1],A+M.n[2])],y=0;if(x){if(Xe[R])continue;if(de[R]){if(E>=4)continue;let B=v0(e,p+M.n[0],b,A+M.n[2],R);if(B>=v-1e-6)continue;y=B}}else if(Xe[R]||R===m&&!Xe[m])continue;let C=no[m*3+M.k],D=C%Le*c+l,F=1-(Math.floor(C/Le)+1)*h+l,H=c-l*2,N=h-l*2,I=[1,1,1,1];if(!x)for(let B=0;B<4;B++){let X=ka[B][0]?1:-1,K=ka[B][1]?1:-1,bt=p+M.n[0],gt=b+M.n[1],Kt=A+M.n[2],Ht=Xe[e[Vi(bt+M.t1[0]*X,gt+M.t1[1]*X,Kt+M.t1[2]*X)]],Yt=Xe[e[Vi(bt+M.t2[0]*K,gt+M.t2[1]*K,Kt+M.t2[2]*K)]],j=Xe[e[Vi(bt+M.t1[0]*X+M.t2[0]*K,gt+M.t1[1]*X+M.t2[1]*K,Kt+M.t1[2]*X+M.t2[2]*K)]];I[B]=Ht&&Yt?0:3-(Ht+Yt+j)}let O=[1,1,1,1],q=[0,0,0,0];for(let B=0;B<4;B++){if(x){O[B]=oo(i[Vi(p,b,A)]),q[B]=vh(s[Vi(p,b,A)]);continue}let X=ka[B][0]?1:-1,K=ka[B][1]?1:-1,bt=p+M.n[0],gt=b+M.n[1],Kt=A+M.n[2],Ht=[[bt,gt,Kt],[bt+M.t1[0]*X,gt+M.t1[1]*X,Kt+M.t1[2]*X],[bt+M.t2[0]*K,gt+M.t2[1]*K,Kt+M.t2[2]*K],[bt+M.t1[0]*X+M.t2[0]*K,gt+M.t1[1]*X+M.t2[1]*K,Kt+M.t1[2]*X+M.t2[2]*K]],Yt=0,j=0,Q=0;for(let mt=0;mt<4;mt++){let Bt=Vi(Ht[mt][0],Ht[mt][1],Ht[mt][2]);mt>0&&Xe[e[Bt]]||(Yt+=i[Bt],j+=s[Bt],Q++)}O[B]=oo(Yt/Q),q[B]=Math.max(vh(j/Q),Id[m])}let G=g.n;for(let B=0;B<4;B++){let[X,K]=ka[B],bt=M.o[0]+M.t1[0]*X+M.t2[0]*K,gt=M.o[1]+M.t1[1]*X+M.t2[1]*K,Kt=M.o[2]+M.t1[2]*X+M.t2[2]*K;x&&(gt=gt===1?v:y&&E<4?y:gt),g.pos.push(f+bt,d+gt,u+Kt),g.uv.push(D+X*H,F+K*N);let Ht=M.shade*(x?1:y0[I[B]]),Yt=Ht*O[B];g.col.push(Yt,Yt,Yt),g.blk.push(Ht*q[B],Ht)}let et=B=>(x?0:y0[I[B]])*(O[B]+q[B]);et(0)+et(2)<et(1)+et(3)?g.ind.push(G+1,G+2,G+3,G+1,G+3,G):g.ind.push(G,G+1,G+2,G,G+2,G+3),g.n+=4}}return{solid:r.empty?null:r.finish(),water:o.empty?null:o.finish(),plants:a.empty?null:a.finish()}}var kS=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function zS(n){let t=new Ve;return t.setAttribute("position",new me(n.positions,3)),t.setAttribute("uv",new me(n.uvs,2)),t.setAttribute("color",new me(n.colors,3)),n.sway.length&&t.setAttribute("aSway",new me(n.sway,1)),t.setAttribute("aBlk",new me(n.blocklight,2)),t.setIndex(new me(n.indices,1)),t.computeBoundingSphere(),t}var fo=class{constructor(t,e,i,s=6){this.world=e,this.mats=i,this.radius=s,this.group=new en,t.add(this.group),this.wanted=[],this.lastCx=null,this.lastCz=null,this.stats={chunks:0,meshed:0,quads:0}}setRadius(t){this.radius=t,this.lastCx=null}rebuildWanted(t,e){let i=this.radius+1;this.wanted=[];for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++){let a=o*o+r*r;a<=i*i+1&&this.wanted.push({cx:t+o,cz:e+r,d:a})}this.wanted.sort((r,o)=>r.d-o.d);let s=i+2;for(let[r,o]of this.world.chunks)Math.max(Math.abs(o.cx-t),Math.abs(o.cz-e))>s&&(this.disposeMeshes(o),this.world.chunks.delete(r))}disposeMeshes(t){if(t.meshes){for(let e of t.meshes)this.group.remove(e),e.geometry.dispose();t.meshes=null}}ready(t){for(let[e,i]of kS)if(!this.world.getChunk(t.cx+e,t.cz+i))return!1;return!0}mesh(t){this.disposeMeshes(t);let e=S0(this.world,t);t.meshes=[];let i=(s,r,o)=>{if(!s)return;let a=new Pe(zS(s),r);a.position.set(t.cx*16,0,t.cz*16),a.renderOrder=o,a.matrixAutoUpdate=!1,a.updateMatrix(),this.group.add(a),t.meshes.push(a)};i(e.solid,this.mats.solid,0),i(e.plants,this.mats.plant,0),i(e.water,this.mats.water,1),t.dirty=!1}remeshNow(t){for(let e of t)this.ready(e)&&this.mesh(e)}update(t,e,i=6){let s=Math.floor(t/16),r=Math.floor(e/16);(s!==this.lastCx||r!==this.lastCz)&&(this.lastCx=s,this.lastCz=r,this.rebuildWanted(s,r));let o=performance.now(),a=this.world;for(let c of this.wanted)if(!a.getChunk(c.cx,c.cz)&&(a.generateChunk(c.cx,c.cz),performance.now()-o>i))return;let l=this.radius*this.radius+1;for(let c of this.wanted){if(c.d>l)break;let h=a.getChunk(c.cx,c.cz);if(h&&h.dirty&&this.ready(h)&&(this.mesh(h),performance.now()-o>i))return}}preload(t,e,i=3){let s=this.radius;this.radius=i,this.lastCx=null;for(let r=0;r<4;r++)this.update(t,e,1/0);this.radius=s,this.lastCx=null}collectStats(){let t=0,e=0;for(let i of this.world.chunks.values())if(i.meshes){t++;for(let s of i.meshes)e+=s.geometry.index.count/6}return this.stats={chunks:this.world.chunks.size,meshed:t,quads:e},this.stats}};var Ze=.3,qd=1.8,HS=1.5,b0=1.62,VS=1.27,GS=.35,Gi=1e-4,w0=30,WS=9.2,XS=40,Th=class{constructor(t){this.world=t,this.pos={x:0,y:40,z:0},this.vel={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headInWater=!1,this.stepDist=0,this.speedMul=1,this.events={step:null,splash:null,land:null,fall:null,jump:null},this.fallPeak=null,this.stepSmooth=0,this.canStep=!1,this.crouching=!1,this.height=qd,this.eyeHeight=b0}solidAt(t,e,i){return e<0||!this.world.isLoaded(t,i)?!0:Ln[this.world.getBlock(t,e,i)]===1}collides(t,e,i,s=this.height){let r=Math.floor(t-Ze+1e-5),o=Math.floor(t+Ze-1e-5),a=Math.floor(e+1e-5),l=Math.floor(e+s-1e-5),c=Math.floor(i-Ze+1e-5),h=Math.floor(i+Ze-1e-5);for(let d=a;d<=l;d++)for(let u=c;u<=h;u++)for(let f=r;f<=o;f++)if(this.solidAt(f,d,u))return!0;return!1}supported(t,e,i){let s=Math.floor(e-.05);for(let r of[-Ze,Ze])for(let o of[-Ze,Ze])if(this.solidAt(Math.floor(t+o),s,Math.floor(i+r)))return!0;return!1}intersectsBlock(t,e,i){let s=this.pos;return s.x+Ze>t&&s.x-Ze<t+1&&s.y+this.height>e&&s.y<e+1&&s.z+Ze>i&&s.z-Ze<i+1}moveAxis(t,e){if(e===0)return!1;let i=this.pos,s=Math.ceil(Math.abs(e)/.2),r=e/s;for(let o=0;o<s;o++)if(i[t]+=r,!!this.collides(i.x,i.y,i.z)){if(this.canStep&&t!=="y"){let a=Math.floor(i.y+Gi)+1+Gi;if(a-i.y<=1+2*Gi&&!this.collides(i.x,a,i.z)){this.stepSmooth+=a-i.y,i.y=a;continue}}return t==="x"?i.x=r>0?Math.floor(i.x+Ze)-Ze-Gi:Math.floor(i.x-Ze)+1+Ze+Gi:t==="z"?i.z=r>0?Math.floor(i.z+Ze)-Ze-Gi:Math.floor(i.z-Ze)+1+Ze+Gi:i.y=r>0?Math.floor(i.y+this.height)-this.height-Gi:Math.floor(i.y)+1+Gi,this.vel[t]=0,!0}return!1}update(t,e){t=Math.min(t,.05);let i=this.pos,s=this.vel,r=this.onGround;(this.fallPeak===null||r||this.inWater||this.flying)&&(this.fallPeak=i.y);let o=this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z)),a=this.inWater;this.inWater=de[o]===1,this.headInWater=de[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+1.62),Math.floor(i.z))]===1,this.inWater&&!a&&s.y<-3&&this.events.splash?.(),!!e.crouch&&!this.flying&&!this.inWater?(this.crouching=!0,this.height=HS):this.crouching&&!this.collides(i.x,i.y,i.z,qd)&&(this.crouching=!1,this.height=qd),this.eyeHeight+=((this.crouching?VS:b0)-this.eyeHeight)*Math.min(1,16*t);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),d=0,u=0;e.forward&&(d-=c,u-=h),e.back&&(d+=c,u+=h),e.left&&(d-=h,u+=c),e.right&&(d+=h,u-=c),e.ahead&&(d-=c*e.ahead,u-=h*e.ahead),e.strafe&&(d+=h*e.strafe,u-=c*e.strafe);let f=Math.hypot(d,u);f>1&&(d/=f,u/=f);let m=e.sprint&&!this.crouching?6.4:4.4;this.crouching&&(m*=GS),this.flying?m=e.sprint?22:11:this.inWater&&(m*=.55),m*=this.speedMul;let x=this.flying?14:this.onGround?46:this.inWater?14:12,g=Math.min(1,x*t);if(s.x+=(d*m-s.x)*g,s.z+=(u*m-s.z)*g,this.flying){let y=(e.jump?1:0)-(e.down?1:0);s.y+=(y*(e.sprint?14:8)-s.y)*Math.min(1,10*t)}else this.inWater?(s.y-=8*t,s.y*=1-Math.min(1,3*t),e.jump&&(s.y+=(3.6-s.y)*Math.min(1,8*t))):(s.y=Math.max(s.y-w0*t,-XS),e.jump&&this.onGround&&(s.y=WS,this.onGround=!1,this.events.jump?.(!!e.sprint&&!this.crouching)));let p=s.y;this.canStep=this.onGround&&!this.flying&&!this.inWater&&s.y<=.01&&f>0;let b=this.crouching&&this.onGround&&!this.flying,A=i.x,v=i.z,E=this.moveAxis("x",s.x*t);b&&!this.supported(i.x,i.y,i.z)&&(i.x=A,s.x=0);let M=this.moveAxis("z",s.z*t);if(b&&!this.supported(i.x,i.y,i.z)&&(i.z=v,s.z=0),this.inWater&&e.jump&&(E||M)&&f>0)for(let y of[Math.floor(i.y)+1,Math.floor(i.y)+2]){if(y-i.y>1.45)break;if(!this.collides(i.x+d*.4,y+Gi,i.z+u*.4)){s.y=Math.max(s.y,Math.sqrt(2*w0*(y-i.y+.3)));break}}let R=this.moveAxis("y",s.y*t);if(this.onGround=R&&p<0,this.flying&&this.onGround&&(this.flying=!1),this.onGround||(this.fallPeak=Math.max(this.fallPeak,i.y)),this.onGround&&!r){p<-7&&this.events.land?.(p);let y=this.inWater||de[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z))]===1,C=this.fallPeak-i.y;!this.flying&&!y&&C>.5&&this.events.fall?.(C,p),this.fallPeak=i.y}this.stepSmooth=this.stepSmooth<.001?0:this.stepSmooth*Math.exp(-12*t),this.onGround&&!this.flying&&f>0&&(this.stepDist+=Math.hypot(s.x,s.z)*t,this.stepDist>(e.sprint&&!this.crouching?2.2:1.7)&&!this.crouching&&(this.stepDist=0,this.events.step?.()))}get eye(){return{x:this.pos.x,y:this.pos.y+this.eyeHeight-this.stepSmooth,z:this.pos.z}}};function qS(n,t,e,i,s,r,o){let a=[e+.5-o,i,s+.5-o],l=[e+.5+o,i+r,s+.5+o],c=[n.x,n.y,n.z],h=[t.x,t.y,t.z],d=-1/0,u=1/0,f=-1,m=0;for(let x=0;x<3;x++){if(Math.abs(h[x])<1e-9){if(c[x]<a[x]||c[x]>l[x])return null;continue}let g=(a[x]-c[x])/h[x],p=(l[x]-c[x])/h[x],b=Math.min(g,p),A=Math.max(g,p);if(b>d&&(d=b,f=x,m=h[x]>0?-1:1),A<u&&(u=A),d>u)return null}return u<0?null:{t:d,axis:f,sign:m}}function $d(n,t,e,i=6){let s=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z),a=Math.sign(e.x),l=Math.sign(e.y),c=Math.sign(e.z),h=e.x!==0?Math.abs(1/e.x):1/0,d=e.y!==0?Math.abs(1/e.y):1/0,u=e.z!==0?Math.abs(1/e.z):1/0,f=e.x!==0?(a>0?s+1-t.x:t.x-s)*h:1/0,m=e.y!==0?(l>0?r+1-t.y:t.y-r)*d:1/0,x=e.z!==0?(c>0?o+1-t.z:t.z-o)*u:1/0,g=0,p=0,b=0,A=0;for(;A<=i;){let v=n.getBlock(s,r,o);if(Ln[v])return{x:s,y:r,z:o,nx:g,ny:p,nz:b,id:v};if(jt[v]){let E=qS(t,e,s,r,o,Ns[v],io[v]);if(E&&E.t<=i){let M=E.t<0||E.axis<0?[0,0,0]:[E.axis===0?E.sign:0,E.axis===1?E.sign:0,E.axis===2?E.sign:0];return{x:s,y:r,z:o,nx:M[0],ny:M[1],nz:M[2],id:v}}}f<m&&f<x?(s+=a,A=f,f+=h,g=-a,p=0,b=0):m<x?(r+=l,A=m,m+=d,g=0,p=-l,b=0):(o+=c,A=x,x+=u,g=0,p=0,b=-c)}return null}var E0=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};var $S=new zt(.47,.68,1),YS=new zt(.015,.025,.07),ZS=new zt(1,.52,.28),JS=new zt(.36,.42,.7),KS=new zt(1,1,1),jS=new zt(1,.82,.7),an=64,Ha=12,ss=an*Ha,QS=82;function Yd(n,t){let e=Array.from({length:n*n},t);return(i,s)=>{let r=i*n,o=s*n,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(m,x)=>e[(x%n+n)%n*n+(m%n+n)%n],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}function tb(n=9){let t=Oi(n),e=Yd(6,t),i=Yd(14,t),s=Yd(30,t),r=new Float32Array(an*an),o=.56;for(let a=0;a<an;a++)for(let l=0;l<an;l++){let c=l/an,h=a/an,d=e(c,h)*.55+i(c,h)*.3+s(c,h)*.15;if(d<=o)continue;let u=Math.min(1,(d-o)/.18);r[a*an+l]=4+Math.round(u*3)*2.2}return r}function eb(){let n=tb(),t=[],e=[],i=[],s=(l,c)=>n[(c%an+an)%an*an+(l%an+an)%an],r=0,o=(l,c,h,d,u)=>{for(let f of[l,c,h,d])t.push(f[0],f[1],f[2]),e.push(u,u,u);i.push(r,r+1,r+2,r,r+2,r+3),r+=4};for(let l=0;l<an;l++)for(let c=0;c<an;c++){let h=s(c,l);if(!h)continue;let d=c*Ha,u=d+Ha,f=l*Ha,m=f+Ha;o([d,h,m],[u,h,m],[u,h,f],[d,h,f],1),o([d,0,f],[u,0,f],[u,0,m],[d,0,m],.8);let x=s(c+1,l),g=s(c-1,l),p=s(c,l+1),b=s(c,l-1);x<h&&o([u,x,m],[u,x,f],[u,h,f],[u,h,m],.92),g<h&&o([d,g,f],[d,g,m],[d,h,m],[d,h,f],.92),p<h&&o([d,p,m],[u,p,m],[u,h,m],[d,h,m],.84),b<h&&o([u,b,f],[d,b,f],[d,h,f],[u,h,f],.84)}let a=new Ve;return a.setAttribute("position",new me(new Float32Array(t),3)),a.setAttribute("color",new me(new Float32Array(e),3)),a.setIndex(new me(r>65535?new Uint32Array(i):new Uint16Array(i),1)),a.boundingSphere=new jn(new V(ss/2,4,ss/2),ss*.75),a}var nb=`
  attribute float aPhase;
  attribute float aSize;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uScale;
  varying float vTw;
  varying vec3 vCol;
  void main() {
    float speed = 1.2 + aPhase * 3.0;
    // two out-of-step sine waves give an irregular shimmer, and a few stars flicker deeply
    float tw = 0.5 + 0.5 * sin(uTime * speed + aPhase * 60.0);
    tw = mix(tw, 0.5 + 0.5 * sin(uTime * speed * 2.7 + aPhase * 17.0), 0.4);
    vTw = 0.25 + 0.75 * tw;
    vCol = aColor;
    gl_PointSize = aSize * uScale * (0.75 + 0.5 * vTw);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,ib=`
  uniform float uOpacity;
  varying float vTw;
  varying vec3 vCol;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    gl_FragColor = vec4(vCol, a * vTw * uOpacity);
  }`,sb=`
  uniform float uShift;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vN = normalize(normal);
    vUv = uv + vec2(uShift, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,rb=`
  uniform sampler2D uMap;
  uniform vec3 uLight;
  uniform float uAlpha;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vec3 tex = texture2D(uMap, vUv).rgb;
    float d = dot(normalize(vN), normalize(uLight));
    float lit = smoothstep(-0.06, 0.28, d);                 // soft terminator between night and day side
    vec3 sunlit = tex * vec3(1.0, 0.98, 0.92) * (0.42 + 0.42 * max(d, 0.0));
    vec3 earthshine = tex * vec3(0.10, 0.12, 0.2) * 0.55;    // the dark side is faintly visible
    gl_FragColor = vec4(mix(earthshine, sunlit, lit), uAlpha);
  }`,Ah=class{constructor(t,e){this.group=new en,t.add(this.group);let i=new en;i.rotation.y=.45,this.group.add(i),this.pivot=new en,i.add(this.pivot);let s=new Li(e.sun);s.colorSpace=ni;let r=new js(new Ss({map:s,transparent:!0,fog:!1,depthWrite:!1}));r.scale.set(92,92,1),r.position.x=320,this.pivot.add(r),this.sun=r;let o=new js(new Ss({map:new Li(e.glow),color:16764778,transparent:!0,depthWrite:!1,fog:!1,blending:Qs,opacity:.5}));o.scale.set(210,210,1),o.position.x=318,this.pivot.add(o),this.sunHalo=o;let a=new Li(e.moon);a.wrapS=Vr,a.colorSpace=ni,this.moonMat=new gn({uniforms:{uMap:{value:a},uLight:{value:new V(1,0,0)},uAlpha:{value:1},uShift:{value:.31}},vertexShader:sb,fragmentShader:rb,transparent:!0,depthWrite:!1,fog:!1}),this.moon=new Pe(new ua(26,48,32),this.moonMat),this.moon.position.x=-320,this.pivot.add(this.moon);let l=new js(new Ss({map:new Li(e.glow),transparent:!0,depthWrite:!1,fog:!1,blending:Qs,opacity:.4}));l.scale.set(150,150,1),l.position.x=-318,this.pivot.add(l),this.halo=l;let c=Oi(31337),h=900,d=new Float32Array(h*3),u=new Float32Array(h),f=new Float32Array(h),m=new Float32Array(h*3);for(let p=0;p<h;p++){let b=c()*2-1,A=c()*Math.PI*2,v=Math.sqrt(1-b*b);d.set([Math.cos(A)*v*400,b*400,Math.sin(A)*v*400],p*3),u[p]=c();let E=c()<.07;f[p]=E?4.5+c()*2:1.6+c()*1.8;let M=c();m.set(M<.25?[.7,.8,1]:M<.8?[1,1,1]:[1,.9,.7],p*3)}let x=new Ve;x.setAttribute("position",new me(d,3)),x.setAttribute("aPhase",new me(u,1)),x.setAttribute("aSize",new me(f,1)),x.setAttribute("aColor",new me(m,3)),this.starMat=new gn({uniforms:{uTime:{value:0},uOpacity:{value:1},uScale:{value:1}},vertexShader:nb,fragmentShader:ib,transparent:!0,depthWrite:!1,fog:!1,blending:Qs}),this.stars=new oa(x,this.starMat),this.stars.frustumCulled=!1,this.pivot.add(this.stars);let g=eb();this.cloudMat=new on({vertexColors:!0,transparent:!0,opacity:.93,fog:!1}),this.clouds=[],this.cloudRoot=new en,t.add(this.cloudRoot);for(let p=0;p<9;p++){let b=new Pe(g,this.cloudMat);b.matrixAutoUpdate=!0,this.cloudRoot.add(b),this.clouds.push(b)}this.skyColor=new zt,this.tint=new zt,this.sunHeight=1,this.setMoonPhase(0)}setPixelRatio(t){this.starMat.uniforms.uScale.value=t}setMoonPhase(t){let e=t%8/8*Math.PI*2;this.moonMat.uniforms.uLight.value.set(Math.cos(e),.12,Math.sin(e)),this.phaseName=["Full Moon","Waning Gibbous","Last Quarter","Waning Crescent","New Moon","Waxing Crescent","First Quarter","Waxing Gibbous"][t%8]}update(t,e,i){let s=t*Math.PI*2;this.pivot.rotation.z=s,this.group.position.copy(e);let r=this.sunHeight=Math.sin(s),o=E0(-.1,.26,r);this.skyColor.copy(YS).lerp($S,o);let a=Math.pow(Math.max(0,1-Math.abs(r)/.24),1.1)*.92;a>0&&this.skyColor.lerp(ZS,a),this.tint.copy(JS).lerp(KS,o),a>0&&this.tint.lerp(jS,a*.35);let l=1-E0(-.18,.1,r);this.starMat.uniforms.uTime.value=i,this.starMat.uniforms.uOpacity.value=l,this.stars.visible=l>.01,this.moonMat.uniforms.uAlpha.value=.3+.7*l,this.halo.material.opacity=.4*l,this.sunHalo.material.opacity=.5*(1-l);let c=i*1.6,h=Math.floor((e.x-c)/ss)*ss,d=Math.floor(e.z/ss)*ss,u=0;for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++)this.clouds[u++].position.set(h+m*ss+c,QS,d+f*ss);return this.cloudMat.color.copy(this.tint).multiplyScalar(.62+.38*o),{sky:this.skyColor,tint:this.tint,day:o}}};var lr=It.music,ob=lr.tracks.filter(n=>n.key!==lr.title),A0=lr.tracks.find(n=>n.key===lr.title),Ch=class{constructor(t=ob,e=Math.random){this.tracks=t,this.rand=e,this.bag=[],this.last=null}next(){if(!this.bag.length){this.bag=[...this.tracks];for(let t=this.bag.length-1;t>0;t--){let e=Math.floor(this.rand()*(t+1));[this.bag[t],this.bag[e]]=[this.bag[e],this.bag[t]]}this.bag.length>1&&this.bag[this.bag.length-1]===this.last&&([this.bag[0],this.bag[this.bag.length-1]]=[this.bag[this.bag.length-1],this.bag[0]])}return this.last=this.bag.pop(),this.last}},C0=(n=Math.random)=>lr.gapSeconds[0]+n()*(lr.gapSeconds[1]-lr.gapSeconds[0]),R0=n=>60/n.bpm;var ab=(n,t)=>n.chords[Math.floor(t/n.barsPerChord)%n.chords.length],T0=(n,t)=>n[Math.floor(t()*n.length)];function I0(n,t,e=Math.random){let i=[],s=ab(n,t),r=t%n.barsPerChord===0;if(n.pad&&i.push({voice:n.pad==="strings"?"strings":"pad",notes:s.tones.slice(0,4),beat:0,beats:4.4,vel:1}),n.bass==="drone"?r&&i.push({voice:"drone",notes:[s.root-12],beat:0,beats:4*n.barsPerChord+1,vel:1}):n.bass&&i.push({voice:"bass",notes:[s.root-12],beat:0,beats:3,vel:1}),n.arp){let{voice:o,pattern:a,step:l,vel:c}=n.arp;for(let h=0,d=0;d<4-1e-9;h++,d+=l)i.push({voice:o,notes:[s.tones[a[h%a.length]%s.tones.length]],beat:d,beats:l*2,vel:c})}if(n.melody)for(let[o,a,l,c,h]of n.melody)o===t&&i.push({voice:n.lead?.voice??"piano",notes:[l],beat:a,beats:c,vel:h});else if(n.lead){let o=n.lead;if(o.rest&&t%o.rest===o.rest-1&&e()<.6)return i;let a=T0(s.tones,e);for(let l=0;l<8;l++){let c=l===0?o.density[0]:l%2===0?o.density[1]:o.density[2];if(e()>c)continue;let h=s.tones.filter(u=>Math.abs(u-a)<=7),d=T0(h.length?h:s.tones,e);e()<o.leap&&(d+=12),e()<o.leap*.66&&(d-=12),a=d,i.push({voice:o.voice,notes:[d],beat:l*.5,beats:1.5,vel:.14+e()*.12})}}return i}var Rh=It.sounds,cr=n=>440*Math.pow(2,(n-69)/12);var Ih=class{constructor(){this.ctx=null,this.musicOn=!0,this.musicVol=.8,this.sfxVol=.9,this.nextBarTime=0,this.timer=null,this.scene="title",this.playlist=new Ch,this.track=null,this.trackBar=0,this.bus=null,this.nowPlaying=null,this.onTrack=null}unlockOnGesture(){let t=["pointerdown","keydown","touchstart"],e=()=>{if(this.start(),this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0);else this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0)})};for(let i of t)window.addEventListener(i,e,!0)}get running(){return!!this.ctx&&this.ctx.state==="running"}setScene(t){t!==this.scene&&(this.scene=t,this.endTrack(1.4),this.ctx&&(this.nextBarTime=Math.max(this.nextBarTime,this.ctx.currentTime+.8)))}endTrack(t=0){if(this.bus&&this.ctx){let e=this.bus,i=this.ctx.currentTime;t>0&&e.gain.setTargetAtTime(0,i,t/3),setTimeout(()=>{try{e.disconnect()}catch{}},(t+12)*1e3)}this.bus=null,this.track=null,this.trackBar=0}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=.8,this.master.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicOn?.55*this.musicVol:0,this.sfxBus=t.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(4.2,2.4);let e=t.createGain();e.gain.value=.55,this.reverb.connect(e),e.connect(this.master),this.musicBus.connect(this.master),this.musicBus.connect(this.reverb),this.delay=t.createDelay(2),this.delay.delayTime.value=.72;let i=t.createGain();i.gain.value=.32;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this.delay.connect(s),s.connect(i),i.connect(this.delay),s.connect(this.musicBus);let r=t.sampleRate;this.noise=t.createBuffer(1,r,t.sampleRate);let o=this.noise.getChannelData(0);for(let a=0;a<r;a++)o[a]=Math.random()*2-1;this.nextBarTime=t.currentTime+1,this.timer=setInterval(()=>this.schedule(),400)}makeImpulse(t,e){let i=this.ctx,s=Math.floor(i.sampleRate*t),r=i.createBuffer(2,s,i.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}setMusic(t){this.musicOn=t,this.applyVolumes()}setVolumes(t,e){this.musicVol=t,this.sfxVol=e,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.musicOn?.55*this.musicVol:0,t,.15),this.sfxBus.gain.setTargetAtTime(this.sfxVol,t,.05)}startTrack(){this.track=this.scene==="title"?A0:this.playlist.next(),this.trackBar=0,this.nowPlaying=this.track,this.bus=this.ctx.createGain(),this.bus.connect(this.musicBus),this.onTrack?.(this.track)}schedule(){let t=this.ctx;for(;this.nextBarTime<t.currentTime+1.2;){this.track||this.startTrack();let e=R0(this.track);this.playBar(this.nextBarTime,e),this.nextBarTime+=e*4,++this.trackBar>=this.track.bars&&(this.scene==="title"?this.trackBar=0:(this.endTrack(0),this.nextBarTime+=C0()))}}playBar(t,e){for(let i of I0(this.track,this.trackBar)){let s=t+i.beat*e+(i.voice==="piano"||i.voice==="bell"||i.voice==="pluck"?(Math.random()-.5)*.03:0),r=i.beats*e;switch(i.voice){case"piano":this.piano(cr(i.notes[0]),s,i.vel);break;case"bell":this.bell(cr(i.notes[0]),s,i.vel);break;case"pluck":this.pluck(cr(i.notes[0]),s,i.vel);break;case"pad":this.pad(i.notes,s,r);break;case"strings":this.strings(i.notes,s,r);break;case"bass":this.bass(i.notes[0],s,r);break;case"drone":this.drone(i.notes[0],s,r);break;default:break}}}piano(t,e,i){let s=this.ctx,r=s.createGain(),o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*9,7e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.5,400),e+2.5),r.connect(o),o.connect(this.bus),o.connect(this.delay);let a=[[1,1,3.2],[2,.42,1.8],[3,.2,1.1],[4,.1,.7],[5.01,.05,.4]];for(let[l,c,h]of a){let d=s.createOscillator();d.type="sine",d.frequency.value=t*l,d.detune.value=(Math.random()-.5)*6;let u=s.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(i*c,e+.008),u.gain.exponentialRampToValueAtTime(1e-4,e+h*1.6),d.connect(u),u.connect(r),d.start(e),d.stop(e+h*1.6+.1)}this.noiseHit(e,.03,"lowpass",t*3,1,i*.5,this.bus)}bell(t,e,i){let s=this.ctx,r=s.createGain();r.connect(this.bus),r.connect(this.delay);for(let[o,a,l]of[[1,1,2.6],[2.76,.32,1.4],[5.4,.12,.8],[8.93,.05,.4]]){let c=s.createOscillator();c.type="sine",c.frequency.value=t*2*o;let h=s.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(i*a*.8,e+.004),h.gain.exponentialRampToValueAtTime(1e-4,e+l*1.7),c.connect(h),h.connect(r),c.start(e),c.stop(e+l*1.7+.1)}}pluck(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=t;let o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*7,6e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.2,300),e+.7);let a=s.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(i*1.4,e+.006),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1),r.connect(o),o.connect(a),a.connect(this.bus),a.connect(this.delay),r.start(e),r.stop(e+1.2)}pad(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=900;let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.05,e+i*.4),o.gain.linearRampToValueAtTime(0,e+i+1.4),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-7,7]){let c=s.createOscillator();c.type="triangle",c.frequency.value=cr(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.5)}}strings(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,e),r.frequency.linearRampToValueAtTime(1300,e+i*.6);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.034,e+i*.55),o.gain.linearRampToValueAtTime(0,e+i+1.8),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-9,0,9]){let c=s.createOscillator();c.type="sawtooth",c.frequency.value=cr(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.9)}}bass(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=cr(t);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.16,e+.06),o.gain.exponentialRampToValueAtTime(1e-4,e+i),r.connect(o),o.connect(this.bus),r.start(e),r.stop(e+i+.1)}drone(t,e,i){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.13,e+i*.35),r.gain.linearRampToValueAtTime(0,e+i),r.connect(this.bus);for(let[o,a]of[[0,"sine"],[7,"sine"],[12,"triangle"]]){let l=s.createOscillator();l.type=a,l.frequency.value=cr(t+o),l.connect(r),l.start(e),l.stop(e+i+.1)}}noiseHit(t,e,i,s,r,o,a=this.sfxBus){let l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loop=!0;let h=l.createBiquadFilter();h.type=i,h.frequency.value=s,h.Q.value=r;let d=l.createGain();d.gain.setValueAtTime(o,t),d.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(d),d.connect(a),c.start(t,Math.random()*.5),c.stop(t+e+.05)}tone(t,e,i,s,r,o="sine"){let a=this.ctx,l=a.createOscillator();l.type=o,l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(i,t+s);let c=a.createGain();c.gain.setValueAtTime(r,t),c.gain.exponentialRampToValueAtTime(1e-4,t+s),l.connect(c),c.connect(this.sfxBus),l.start(t),l.stop(t+s+.05)}block(t,e){if(!this.ctx)return;let i=this.ctx.currentTime,s=Rh.phases[e]??Rh.phases.break,r=Rh.materials[t]??Rh.materials.default,o=.85+Math.random()*.3;for(let a of r){if(a.skipPhases?.includes(e))continue;let l=a.seconds??s.length*(a.lengthScale??1),c=a.jitter===!1?1:o,h=i+(a.delayJitter?Math.random()*a.delayJitter:0);a.type==="noise"?this.noiseHit(h,l,a.filter,a.freq*c,a.q,a.gain*s.loud):this.tone(h,a.from*c,a.to,l,a.gain*s.loud,a.wave??"sine")}}pickup(){if(!this.ctx)return;let t=this.ctx.currentTime,e=520+Math.random()*260;this.tone(t,e,e*2,.09,.14)}craft(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,660,660,.12,.12,"triangle"),this.tone(t+.07,990,990,.16,.12,"triangle"),this.noiseHit(t,.06,"bandpass",2400,1.5,.15)}toolBreak(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.25,"bandpass",1400,1,.5),this.tone(t,300,80,.3,.3,"square")}hurt(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,180,60,.22,.45,"triangle"),this.noiseHit(t,.18,"bandpass",500,.9,.35)}eat(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.07,"bandpass",1500+Math.random()*600,1.4,.45),this.noiseHit(t+.05,.05,"highpass",3200,.8,.18)}click(){this.ctx&&this.tone(this.ctx.currentTime,900,700,.04,.08,"square")}splash(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.5,"bandpass",1200,.6,.5),this.noiseHit(t+.05,.4,"highpass",3e3,.5,.2)}};var ht=16,Ph=n=>Math.max(0,Math.min(255,Math.round(n))),Va=[0,0,0,0];function P0(n,t){let e=Array.from({length:t*t},n);return(i,s)=>{let r=i/ht*t,o=s/ht*t,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(m,x)=>e[x%t*t+m%t],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}var Yn=(n,t,e=[1,1,1])=>[n[0]+t*e[0],n[1]+t*e[1],n[2]+t*e[2],255],lb={noise(n,t){let e=(n.noise||[]).map(o=>({f:P0(t,o.cells),amp:o.amp})),i=n.channels||[1,1,1],s=n.specks||{},r=n.edge?.width??0;return(o,a)=>{if(n.holes&&t()<n.holes)return Va;let l=0;for(let{f:c,amp:h}of e)l+=(c(o,a)-.5)*h;if(l+=(t()-.5)*(n.jitter||0),s.dark||s.light){let c=t();s.dark&&c<s.dark.chance?l+=s.dark.amount:s.light&&c>1-s.light.chance&&(l+=s.light.amount)}return r&&(o<r||a<r||o>ht-1-r||a>ht-1-r)&&(l+=n.edge.amount),Yn(n.base,l,i)}},capped(n,t,e){let i=e.sub(n.cap,t),s=e.sub(n.body,t),r=n.depth||{min:3},o=Array.from({length:ht},()=>(r.min??3)+(r.bonus||[]).reduce((a,l)=>a+(t()<l.chance?l.amount:0),0));return(a,l)=>l<o[a]?i(a,l):s(a,l)},bark(n,t){let e=Array.from({length:ht},()=>(t()-.5)*n.columnVariance),i=n.channels||[1,1,1];return(s,r)=>{let o=e[s]+(t()-.5)*n.jitter;return n.grooveEvery&&s%n.grooveEvery===0&&(o-=n.grooveDarken),t()<(n.speckChance||0)&&(o-=n.speckDarken||0),Yn(n.base,o,i)}},rings(n,t){return(e,i)=>{let s=e-7.5,r=i-7.5;if(Math.max(Math.abs(s),Math.abs(r))>8-(n.barkWidth??1.6))return Yn(n.bark,(t()-.5)*(n.jitter??12));let o=Math.floor(Math.hypot(s,r)*(n.ringScale??.9))%2;return Yn(o?n.light:n.dark,(t()-.5)*(n.jitter??12))}},planks(n,t){let e=n.boardHeight||4,i=Math.ceil(ht/e),s=Array.from({length:i},()=>(t()-.5)*n.boardVariance),r=Array.from({length:i},()=>Math.floor(t()*12+2)),o=n.channels||[1,1,1];return(a,l)=>{let c=Math.floor(l/e),h=s[c]+(t()-.5)*n.jitter;return l%e===e-1&&(h-=n.gapDarken),r[c]===a&&(h-=n.seamDarken),t()<(n.grainChance||0)&&(h-=n.grainDarken||0),Yn(n.base,h,o)}},cells(n,t){let e=Array.from({length:n.points},()=>({x:t()*ht,y:t()*ht,shade:(t()-.5)*n.spread}));return(i,s)=>{let r=1e9,o=1e9,a=0;for(let c of e)for(let h of[-ht,0,ht])for(let d of[-ht,0,ht]){let u=Math.hypot(i-(c.x+h),s-(c.y+d));u<r?(o=r,r=u,a=c.shade):u<o&&(o=u)}let l=a+(t()-.5)*n.jitter;return o-r<n.creviceWidth&&(l=n.creviceValue),Yn(n.base,l)}},waves(n,t){let e=P0(t,4),i=n.channels||[1,1,1];return(s,r)=>Yn(n.base,Math.sin((s+r*.7)*n.frequency+e(s,r)*4)*n.amplitude,i)},bricks(n,t){let e=n.brickWidth||8,i=n.rowHeight||4;return(s,r)=>{let o=Math.floor(r/i)%2?e/2:0,a=r%i===i-1||(s+o)%e===e-1,l=(t()-.5)*(n.variance??22);return a?Yn(n.mortar,l*.4):Yn(n.brick,l,[1,.5,.4])}},ore(n,t,e){let i=e.sub(n.base,t),s=new Map,r=[];for(let l=0,c=n.clusters??6;r.length<c&&l<80;l++){let h=2+Math.floor(t()*11),d=2+Math.floor(t()*11);if(r.some(([m,x])=>Math.abs(m-h)<4&&Math.abs(x-d)<4))continue;let u=2+Math.floor(t()*2),f=2+Math.floor(t()*2);r.push([h,d]);for(let m=0;m<f;m++)for(let x=0;x<u;x++)(x===0||x===u-1)&&(m===0||m===f-1)&&u+f>4&&t()<.6||s.set(h+x+","+(d+m),1)}let o=(l,c)=>s.has(l+","+c),a=(l,c)=>l.map(h=>h*c);return(l,c)=>{if(o(l,c))return!o(l,c-1)||!o(l-1,c)?Yn(n.light,(t()-.5)*14):!o(l,c+1)||!o(l+1,c)?Yn(a(n.color,.8),(t()-.5)*10):Yn(n.color,(t()-.5)*14);let h=!1;for(let u=-1;u<=1&&!h;u++)for(let f=-1;f<=1;f++)if((f||u)&&o(l+f,c+u)){h=!0;break}let d=i(l,c);return h?[d[0]*.62,d[1]*.62,d[2]*.62,d[3]??255]:d}},stripes(n,t){let e=n.darkColumns||[1,2];return i=>Yn(e.includes(i%n.period)?n.dark:n.light,(t()-.5)*n.jitter,[1,.8,.6])},blades(n,t){let e=new Map;for(let i=0;i<n.count;i++){let s=Math.round((i+.5)*ht/n.count+(t()-.5)*1.5),r=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1)),o=t()<.5?-1:1;for(let a=0;a<r;a++){let l=a/r,c=(t()-.5)*22,h=l<.35?n.dark:l<.75?n.mid:n.tip;e.set(`${s+(a>r*.6?o:0)},${ht-1-a}`,[h[0]+c,h[1]+c,h[2]+c*.5,255])}}return(i,s)=>e.get(i+","+s)??Va},stalks(n,t){let e=new Map;for(let i=0;i<ht;i+=n.spacing||2){let s=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1));for(let r=0;r<s;r++){let o=(t()-.5)*16;e.set(`${i},${ht-1-r}`,[n.stem[0]+o,n.stem[1]+o,n.stem[2]+o*.5,255])}for(let r=0;r<n.headLength;r++){let o=ht-s-1+r;for(let a of r===0?[0]:[0,1]){let l=(t()-.5)*24,c=r%2?n.headDark:n.headLight;e.set(`${Math.min(ht-1,i+a)},${o}`,[c[0]+l,c[1]+l,c[2]+l*.5,255])}}}return(i,s)=>e.get(i+","+s)??Va},pixelart(n){return(t,e)=>{let i=n.rows[e]?.[t],s=i&&i!=="."?n.palette[i]:null;return s?[s[0],s[1],s[2],s[3]??255]:Va}},image(n,t,e){let i=e.images?.[n.src];return(s,r)=>{if(!i)return[255,0,255,255];let o=(r*ht+s)*4;return[i[o],i[o+1],i[o+2],i[o+3]]}},layers(n,t,e){let i=n.layers.map(s=>Zd(s,t,e));return(s,r)=>{let o=Va;for(let a of i){let l=a(s,r);l[3]>0&&(o=l)}return o}},ref(n,t,e){return e.sub(n.tile,t)}};function Zd(n,t,e){let i=lb[n.type];if(!i)throw new Error(`unknown texture type "${n.type}"`);return i(n,t,e)}function cb(n,t){let e={tiles:n,images:t,depth:0,sub(i,s){let r=n[i];if(!r)throw new Error(`texture "${i}" is not defined`);if(e.depth>8)throw new Error(`texture "${i}" refers to itself`);e.depth++;try{return Zd(r,s,e)}finally{e.depth--}}};return e}function N0(n,t,e={},i={}){let s=cb(e,i),r=Zd(n,Oi(t),s),o=new Uint8ClampedArray(ht*ht*4);for(let a=0;a<ht;a++)for(let l=0;l<ht;l++){let c=r(l,a),h=(a*ht+l)*4;o[h]=Ph(c[0]),o[h+1]=Ph(c[1]),o[h+2]=Ph(c[2]),o[h+3]=Ph(c[3])}return o}var D0=n=>12648430+n*7919,U0=(n,t,e,i)=>N0(e[n],D0(t),e,i),L0={pickaxe:["....dddddd....","..ddLLllbbdd..",".dLllbbbbbbbd.","dLlbd....hHobd","dlbd....hHo.dd","dbd....hHo....","dd....hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"],axe:["........dd...","......ddLLd..",".....dlLbld..","....dLlbbbhh.","....dLllbmbo.",".....dddhbmld","......hhhdbbd","......hhhhbbd",".....hhHo.dd.","....hhoo.....","...hho.......","..hHo........",".hho.........","hHo..........","oo..........."],shovel:["..........ddd.",".........dLLbd","........dLlbLd","......ddLlblLd","........hblLd.","......hhHoLd..",".....hHHo.d...",".....hHHo.d...","....hhoo......","...hHo........","..hho.........","ohHo..........","hHo...........","ho............"],hoe:["...ddddd......","..dLLllbbd....","..dLllbbbbd...","..ddddddbbd...","........dbhHo.",".......hHbo...","......hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"]},hb={shovel:["........dddd....","......ddLLLLdd..",".....dLLllbbLd..","....dLllllbbbld.","....dLllllbbbbd.","....dllllbbbbmd.",".....dlllbbbbmd.","......dlbbbbmd..",".....hhddbbmd...","....hHHod.dd....","...hHHo.........","..hhHo..........",".hHHo...........","hHHo............","hHo.............","oo.............."]};function ub(n,t,e,i=!1){let s=i&&hb[n]||L0[n]||L0.shovel,r=t.light.map(h=>h+(255-h)*.45),o={d:t.dark,b:t.base,m:t.base.map(h=>h*.8),l:t.light,L:r,H:e[0],h:e[1],o:e[1].map(h=>h*.5)},a=ht-s.length,l=Math.min(1,ht-s[0].length),c=new Map;return s.forEach((h,d)=>[...h].forEach((u,f)=>{o[u]&&c.set(f+l+","+(d+a),o[u])})),c}function F0(n,t,e,i={},s=!1){let r=e.sprites?.[n];if(r)return N0(r,D0(900),e.tiles,i);if(t?.tool){let o=e.toolHeads[t.tool.head],a=ub(t.tool.type,o,e.toolHandle||[[148,108,58],[104,74,38]],s),l=new Uint8ClampedArray(ht*ht*4);for(let[c,h]of a){let[d,u]=c.split(",").map(Number);if(d<0||u<0||d>=ht||u>=ht)continue;let f=(u*ht+d)*4;l[f]=h[0],l[f+1]=h[1],l[f+2]=h[2],l[f+3]=255}return l}throw new Error(`item "${n}" has no sprite`)}function O0(n){let t=new Set,e=i=>{if(i){i.type==="image"&&t.add(i.src);for(let s of i.layers||[])e(s)}};return Object.values(n.tiles||{}).forEach(e),Object.values(n.sprites||{}).forEach(e),[...t]}var po=10,db=.15,fb=n=>Math.max(0,Math.min(po-1,Math.floor(n*po))),Lh=class{constructor(){this.cooldown=0,this.reset()}reset(){this.key=null,this.progress=0}idle(t){this.cooldown=Math.max(0,this.cooldown-t)}tick(t,e,i){if(e!==this.key&&(this.key=e,this.progress=0),this.cooldown>0){let s=Math.min(t,this.cooldown);this.cooldown-=s,t-=s}return t<=0?!1:(this.progress+=t/Math.max(i,.02),this.progress>=1?(this.reset(),this.cooldown=db,!0):!1)}get stage(){return fb(this.progress)}};function B0(n=16,t=4242){let e=Oi(t),i=(n-1)/2,r=n*.6/po,o=Array.from({length:8},(h,d)=>({x:i+(e()-.5)*2,y:i+(e()-.5)*2,a:d/8*Math.PI*2+(e()-.5)*.5,fork:d%2===0?2+Math.floor(e()*3):4+Math.floor(e()*3),life:1})),a=[],l=new Set,c=[];for(let h=0;h<po;h++){for(let d of o.slice()){for(let f=0;f<3;f++){d.a+=(e()-.5)*.5,d.x+=Math.cos(d.a)*r*d.life/3,d.y+=Math.sin(d.a)*r*d.life/3;let m=Math.round(d.x),x=Math.round(d.y),g=m+","+x;m>=0&&x>=0&&m<n&&x<n&&!l.has(g)&&(l.add(g),c.push([m,x]))}d.fork===h&&o.push({x:d.x,y:d.y,a:d.a+(e()<.5?1:-1)*.9,fork:-1,life:.85})}a.push(c.slice())}return a}var Jd=n=>Math.max(0,Math.min(255,n|0));function Rn(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}var jd={};async function pb(){let n=new URL("../data/",import.meta.url);for(let t of O0(It.textures))try{let e=new Image;e.src=new URL(t,n).href,await e.decode();let i=Rn(ht,ht),s=i.getContext("2d");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0,ht,ht),jd[t]=s.getImageData(0,0,ht,ht).data}catch{console.warn("textures.json: could not load image",t)}}function k0(n){let t=n.getContext("2d"),e=s=>{let r=mi.indexOf(s);return[r%Le*ht,Math.floor(r/Le)*ht]},i=Object.entries(It.animations).map(([s,r])=>({at:e(s),fps:r.fps,shown:0,frames:r.frames.map(o=>{let[a,l]=e(o);return t.getImageData(a,l,ht,ht)})}));return s=>{let r=!1;for(let o of i){let a=Math.floor(Math.max(0,s)*o.fps)%o.frames.length;a!==o.shown&&(t.putImageData(o.frames[a],o.at[0],o.at[1]),o.shown=a,r=!0)}return r}}async function z0(){await pb();let n=Rn(Le*ht,sr*ht),t=n.getContext("2d"),e={};return mi.forEach((i,s)=>{let r=U0(i,s,It.tiles,jd);t.putImageData(new ImageData(r,ht,ht),s%Le*ht,Math.floor(s/Le)*ht);let o=0,a=0,l=0,c=0;for(let h=0;h<r.length;h+=4)r[h+3]>0&&(o+=r[h],a+=r[h+1],l+=r[h+2],c++);e[i]=c?[o/c/255,a/c/255,l/c/255]:[.5,.5,.5]}),{canvas:n,avg:e}}function H0(n){let t={};for(let[e,i]of Object.entries(Fe))t[e]=n[i.side];return t}function V0(){let t=Rn(128,128),e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"#ffffff"),i.addColorStop(.35,"#fffbd0"),i.addColorStop(.72,"#ffe45c"),i.addColorStop(.94,"#ffb92e"),i.addColorStop(1,"rgba(255, 170, 40, 0)"),e.fillStyle=i,e.beginPath(),e.arc(128/2,128/2,128/2,0,Math.PI*2),e.fill(),t}function G0(){let e=Rn(512,256),i=e.getContext("2d"),s=Oi(2024),r=i.createImageData(512,256),o=32,a=16,l=Array.from({length:o*a},s),c=(h,d)=>{let u=h*o,f=d*(a-1),m=Math.floor(u),x=Math.floor(f),g=u-m,p=f-x,b=(E,M)=>l[Math.min(a-1,M)*o+(E%o+o)%o],A=g*g*(3-2*g),v=p*p*(3-2*p);return(b(m,x)*(1-A)+b(m+1,x)*A)*(1-v)+(b(m,x+1)*(1-A)+b(m+1,x+1)*A)*v};for(let h=0;h<256;h++)for(let d=0;d<512;d++){let u=d/512,f=h/256,m=c(u*4%1,f)*.5+c(u*8%1,f)*.3+s()*.12,x=c(u*1%1,f),g=Math.max(0,Math.min(1,(x-.5)*3.2)),p=196+(m-.45)*46;p=p*(1-g*.42);let b=(h*512+d)*4;r.data[b]=p,r.data[b+1]=p*.995,r.data[b+2]=p*1.02,r.data[b+3]=255}i.putImageData(r,0,0);for(let h=0;h<90;h++){let d=s()*512,u=256*(.15+s()*.7),f=2+Math.pow(s(),2.2)*15,m=f*(1+Math.abs(u/256-.5)*.9),x=i.createRadialGradient(d-f*.25,u-f*.25,f*.1,d,u,f);x.addColorStop(0,"rgba(70,72,82,0.55)"),x.addColorStop(.72,"rgba(90,92,102,0.35)"),x.addColorStop(.88,"rgba(235,235,240,0.5)"),x.addColorStop(1,"rgba(235,235,240,0)"),i.save(),i.translate(d,u),i.scale(m/f,1),i.translate(-d,-u),i.fillStyle=x,i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill(),i.restore()}return e}function W0(){let n=Rn(128,128),t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.25,"rgba(220,228,255,0.35)"),e.addColorStop(.6,"rgba(190,205,255,0.1)"),e.addColorStop(1,"rgba(190,205,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),n}function X0(){let n=Rn(ht*po,ht),t=n.getContext("2d");return B0(ht).forEach((e,i)=>{t.fillStyle="rgba(0,0,0,0.72)";for(let[s,r]of e)t.fillRect(i*ht+s,r,1,1)}),n}function mb(n,t,e=44){let i=Fe[t],s=Rn(e,e),r=s.getContext("2d");r.imageSmoothingEnabled=!1;let o=e/2,a=o/2,l=o,c=u=>{let f=mi.indexOf(u);return[f%Le*ht,Math.floor(f/Le)*ht]},h=(u,f,m)=>{let[x,g]=c(u);r.save(),r.transform(...f),r.drawImage(n,x,g,ht,ht,0,0,ht,ht),r.fillStyle=`rgba(0,0,0,${m})`,r.fillRect(0,0,ht,ht),r.restore()},d=o;return h(i.top,[o/ht,a/ht,-o/ht,a/ht,d,0],0),h(i.side,[o/ht,a/ht,0,l/ht,d-o,a],.25),h(i.side,[o/ht,-a/ht,0,l/ht,d,2*a],.45),s}var Kd=new Map;function Qd(n,t=!1){let e=t?"h"+n:n;if(Kd.has(e))return Kd.get(e);let i=F0(u0(n),It.itemById.get(n),It.textures,jd,t),s=Rn(ht,ht);return s.getContext("2d").putImageData(new ImageData(i,ht,ht),0,0),Kd.set(e,s),s}function q0(n,t=3){let e=Rn(9*t,9*t),i=e.getContext("2d");i.imageSmoothingEnabled=!1;for(let s=1;s<8;s++)for(let r=0;r<9;r++){let o=((r-4)/4.4)**2+((s-4.3)/3.2)**2;if(o>1)continue;let a=o>.7,l=n===2||n===1&&r<5;i.fillStyle=l?a?"#7a4a1e":s<4?"#e2a24e":"#c0782e":a?"#2a2a2e":"#4a4a52",i.fillRect(r*t,s*t,t,t)}return e}var gb=["#########","#@@@@@%%#","#@@%%%%%#","#@%%%%%o#","#@%%%%%o#",".#%%%%o#.","..#%%o#..","...#o#...","....#...."];function $0(n,t=3){let e=Rn(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,gb.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;i.fillStyle=o==="#"?l?"#4a4a58":"#2a2a2e":l?o==="@"?"#f2f2fa":o==="%"?"#c4c4d4":"#8e8ea4":"#4a4a52",i.fillRect(a*t,r*t,t,t)})),e}var xb=[".##...##.","#@@#.#@@#","#@@@#@@@#","#@@@@@@@#",".#@@@@@#.","..#@@@#..","...#@#...","....#...."];function Y0(n,t=3){let e=Rn(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,xb.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;o==="#"?i.fillStyle=l?"#7a0f12":"#2a2a2e":i.fillStyle=l?r<3?"#ff5a5a":"#d92a2a":"#4a4a52",i.fillRect(a*t,(r+1)*t,t,t)})),n>0&&(i.fillStyle="rgba(255,255,255,0.65)",i.fillRect(2*t,2*t,t,t)),e}function Z0(n,t,e=44){let i=Fe[t].side,s=mi.indexOf(i),r=Rn(e,e),o=r.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(n,s%Le*ht,Math.floor(s/Le)*ht,ht,ht,0,0,e,e),r}function hr(n,t,e=44){if(Os(t))return mb(n,t,e);let i=Rn(e,e),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(Qd(t),0,0,e,e),i}function Nh(n,t="VOXELCRAFT",e=6){let r=(t.length*6+1)*e+e*2,o=9*e+e,a=Rn(r,o),l=a.getContext("2d");l.imageSmoothingEnabled=!1;let c=n.getContext("2d"),h=Math.max(0,mi.indexOf("stone")),[d,u]=[h%Le*ht,Math.floor(h/Le)*ht],f=c.getImageData(d,u,ht,ht).data,m=Zm(t),x=new Set(m.map(([g,p])=>g+","+p));l.fillStyle="rgba(0,0,0,0.45)";for(let[g,p]of m)l.fillRect(g*e+e+4,p*e+e+4,e,e);for(let[g,p]of m){let b=(p%ht*ht+g%ht)*4,A=1.15;l.fillStyle=`rgb(${Jd(f[b]*A)},${Jd(f[b+1]*A)},${Jd(f[b+2]*A)})`,l.fillRect(g*e+e,p*e+e,e,e);let v=g*e+e,E=p*e+e;l.fillStyle="rgba(255,255,255,0.35)",x.has(g+","+(p-1))||l.fillRect(v,E,e,2),x.has(g-1+","+p)||l.fillRect(v,E,2,e),l.fillStyle="rgba(0,0,0,0.45)",x.has(g+","+(p+1))||l.fillRect(v,E+e-2,e,2),x.has(g+1+","+p)||l.fillRect(v+e-2,E,2,e)}return a}function J0(n,t=4){let e=Math.max(0,mi.indexOf("dirt")),i=Rn(ht*t,ht*t),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(n,e%Le*ht,Math.floor(e/Le)*ht,ht,ht,0,0,ht*t,ht*t),i.toDataURL()}var mo=new Map;function go(n){let t="b"+n;if(mo.has(t))return mo.get(t);let e=Fe[n],i=new zn(1,1,1),s=i.attributes.uv,r=[e.side,e.side,e.top,e.bottom,e.side,e.side],o=[.82,.82,1,.5,.68,.68],a=new Float32Array(72);return r.forEach((l,c)=>{let h=mi.indexOf(l),d=h%Le/Le,u=1-(Math.floor(h/Le)+1)/sr;for(let f=0;f<4;f++){let m=c*4+f;s.setXY(m,d+s.getX(m)/Le,u+s.getY(m)/sr),a.set([o[c],o[c],o[c]],m*3)}}),i.setAttribute("color",new me(a,3)),mo.set(t,i),i}function Dh(n,t=!1){let e=(t?"sh":"s")+n;if(mo.has(e))return mo.get(e);let s=Qd(n,t).getContext("2d").getImageData(0,0,16,16).data,r=(d,u)=>d>=0&&u>=0&&d<16&&u<16&&s[(u*16+d)*4+3]>0,o=[],a=[],l=(qn(n)?3.4:1.5)/16,c=(d,u,f,m,x,g)=>{for(let p of[d,u,f,d,f,m])o.push(...p),a.push(x[0]*g,x[1]*g,x[2]*g)};for(let d=0;d<16;d++)for(let u=0;u<16;u++){if(!r(u,d))continue;let f=(d*16+u)*4,m=[s[f]/255,s[f+1]/255,s[f+2]/255],x=u/16-.5,g=(u+1)/16-.5,p=.5-d/16,b=.5-(d+1)/16,A=l/2,v=-l/2;c([x,b,A],[g,b,A],[g,p,A],[x,p,A],m,1),c([g,b,v],[x,b,v],[x,p,v],[g,p,v],m,.78),r(u+1,d)||c([g,b,A],[g,b,v],[g,p,v],[g,p,A],m,.85),r(u-1,d)||c([x,b,v],[x,b,A],[x,p,A],[x,p,v],m,.85),r(u,d-1)||c([x,p,A],[g,p,A],[g,p,v],[x,p,v],m,.95),r(u,d+1)||c([x,b,v],[g,b,v],[g,b,A],[x,b,A],m,.6)}let h=new Ve;return h.setAttribute("position",new me(new Float32Array(o),3)),h.setAttribute("color",new me(new Float32Array(a),3)),mo.set(e,h),h}var _b=160,yb=300,Uh=class{constructor(t,e,i,s){this.world=e,this.blockMat=i,this.spriteMat=s,this.group=new en,t.add(this.group),this.items=[]}spawn(t,e,i,s,r,{d:o=0,delay:a=.5,vx:l,vy:c,vz:h,life:d=yb,age:u=0}={}){this.items.length>=_b&&this.remove(0);let f=Os(t),m=new Pe(f?go(t):Dh(t),f?this.blockMat:this.spriteMat);m.scale.setScalar(f?.28:.5),this.group.add(m),this.items.push({id:t,n:e,d:o,mesh:m,x:i,y:s,z:r,age:u,life:d,delay:a,vx:l??(Math.random()-.5)*2.4,vy:c??3+Math.random()*1.5,vz:h??(Math.random()-.5)*2.4,spin:Math.random()*6,block:f})}serialize(){return this.items.map(t=>({id:t.id,n:t.n,d:t.d,x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),age:Math.round(t.age),life:t.life}))}load(t){for(let e of Array.isArray(t)?t:[])this.spawn(e.id,e.n,e.x,e.y,e.z,{d:e.d,delay:.3,vx:0,vy:0,vz:0,life:e.life,age:e.age})}remove(t){let e=this.items[t];this.group.remove(e.mesh),this.items.splice(t,1)}solid(t,e,i){return Ln[this.world.getBlock(Math.floor(t),Math.floor(e),Math.floor(i))]===1}update(t,e,i,s){for(let r=this.items.length-1;r>=0;r--){let o=this.items[r];if(o.age+=t,o.age>o.life){this.remove(r);continue}if(!this.world.isLoaded(o.x,o.z))continue;let a=o.block?.14:.2,l=e.x-o.x,c=e.y+.7-o.y,h=e.z-o.z,d=Math.hypot(l,c,h),u=o.age>o.delay&&i(o);if(u&&d<.9&&s(o)){this.remove(r);continue}if(u&&d<2.6){let p=14*t/Math.max(d,.3);o.vx+=l*p,o.vy+=c*p,o.vz+=h*p,o.vx*=.9,o.vy*=.9,o.vz*=.9}else o.vy-=20*t;let f=o.x+o.vx*t,m=o.y+o.vy*t,x=o.z+o.vz*t;this.solid(f,o.y,o.z)&&(f=o.x,o.vx=0),this.solid(f,o.y,x)&&(x=o.z,o.vz=0),this.solid(f,m-a,x)?(m=Math.floor(m-a)+1+a,o.vy<0&&(o.vy=0),o.vx*=.8,o.vz*=.8):this.solid(f,m+a,x)&&o.vy>0&&(o.vy=0,m=o.y),o.x=f,o.y=m,o.z=x;let g=Math.sin(o.age*3+o.spin)*.05+.1;o.mesh.position.set(o.x,o.y+g,o.z),o.mesh.rotation.y=o.age*1.8+o.spin}}};var rs=0,ur=1,os=2,Ga=n=>Bs(n)>0,j0=n=>!!kd(n);function K0(){return{slots:[null,null,null],burn:0,burnMax:0,progress:0,working:0}}function Fh(n){let t=n.slots[rs],e=n.slots[os],i=t?kd(t.id):null,s=!!i&&(!e||e.id===i.out&&e.n<$n(i.out));return{rec:i,can:s}}function vb(n,t){let{rec:e,can:i}=Fh(n),s=n.slots[rs],r=n.slots[ur];if(n.working!==(e?e.in:0)&&(n.working=e?e.in:0,n.progress=0),n.burn<=0&&i&&r&&Ga(r.id)&&(n.burn=n.burnMax=Bs(r.id),--r.n<=0&&(n.slots[ur]=null)),n.burn>0){if(n.burn=Math.max(0,n.burn-t),n.burn<=0){let o=Fh(n),a=n.slots[ur];o.can&&a&&Ga(a.id)&&(n.burnMax=n.burn=Bs(a.id),--a.n<=0&&(n.slots[ur]=null))}i?(n.progress+=t,n.progress>=e.seconds&&(n.progress-=e.seconds,--s.n<=0&&(n.slots[rs]=null,n.progress=0),n.slots[os]?n.slots[os].n+=1:n.slots[os]={id:e.out,n:1,d:0})):n.progress=Math.max(0,n.progress-2*t)}else n.progress=Math.max(0,n.progress-2*t)}var Mb=n=>n.burn>0,Sb=n=>n.slots.every(t=>!t)&&n.burn<=0&&n.progress<=0;function Q0(n,t,e,i=0){if(t===os){let r=n.slots[os];if(!r)return{cursor:e,took:null};if(e&&(e.id!==r.id||e.n+r.n>$n(r.id)))return{cursor:e,took:null};let o={...r};return n.slots[os]=null,{cursor:e?{...e,n:e.n+r.n}:r,took:o}}let s=t===rs?j0:Ga;return{cursor:Wd(n.slots,t,e,i,s),took:null}}function tg(n,t){let e=j0(t.id)?rs:Ga(t.id)?ur:-1;if(e<0)return t.n;let i=n.slots[e],s=$n(t.id);if(!i)return n.slots[e]={id:t.id,n:t.n,d:t.d},0;if(i.id!==t.id)return t.n;let r=Math.min(s-i.n,t.n);return i.n+=r,t.n-r}function eg(n,t,e){let i={input:0,fuel:0},s=n.slots[rs];if(s&&s.id!==e.in)return i;let r=$n(e.in)-(s?s.n:0),o=Math.min(r,t.count(e.in));if(o>0&&(t.remove(e.in,o),s?s.n+=o:n.slots[rs]={id:e.in,n:o,d:0},i.input=o),!n.slots[ur]&&n.burn<=0&&n.slots[rs]){let a=n.slots[rs].n*e.seconds,l=u=>t.count(u),c=[...new Set(t.slots.filter(u=>u&&Ga(u.id)&&u.id!==e.in).map(u=>u.id))].map(u=>({id:u,per:Bs(u),total:l(u)*Bs(u)})),d=c.filter(u=>u.total>=a).sort((u,f)=>u.per-f.per)[0]??c.sort((u,f)=>f.total-u.total)[0];if(d){let u=Math.min($n(d.id),l(d.id),Math.ceil(a/d.per));t.remove(d.id,u),n.slots[ur]={id:d.id,n:u,d:0},i.fuel=u}}return i}var Oh=class n{constructor(t={}){this.map=new Map,this.hooks=t}static key(t,e,i){return t+","+e+","+i}get(t,e,i){let s=n.key(t,e,i);if(!this.map.has(s)){let r=K0();r.lit=null,this.map.set(s,r)}return this.map.get(s)}has(t,e,i){return this.map.has(n.key(t,e,i))}remove(t,e,i){let s=n.key(t,e,i),r=this.map.get(s);return this.map.delete(s),r?r.slots.filter(Boolean):[]}update(t){for(let[e,i]of this.map){vb(i,t);let s=Mb(i);if(s!==i.lit){let[r,o,a]=e.split(",").map(Number);this.hooks.onLit?.(r,o,a,s)!==!1&&(i.lit=s)}}}serialize(){let t={};for(let[e,i]of this.map)Sb(i)||(t[e]={slots:i.slots.map(s=>s?[s.id,s.n,s.d||0]:null),burn:i.burn,burnMax:i.burnMax,progress:i.progress});return t}load(t){this.map.clear();for(let[e,i]of Object.entries(t||{})){let s=K0();s.slots=[0,1,2].map(r=>i.slots?.[r]?{id:i.slots[r][0],n:i.slots[r][1],d:i.slots[r][2]||0}:null),s.burn=i.burn||0,s.burnMax=i.burnMax||0,s.progress=i.progress||0,s.lit=null,this.map.set(e,s)}}};var Ce=n=>document.getElementById(n);function ng({atlas:n,inventory:t,getHotbarStack:e,onCraft:i,onToss:s,onPalettePick:r,onSelect:o,onSmeltTake:a,onEquip:l,onNotice:c}){let h=new Map,d=w=>(h.has(w)||h.set(w,hr(n,w,44).toDataURL()),h.get(w));function u(w,_=""){let L=document.createElement("div");if(L.className="slot "+_,w){let U=document.createElement("img");if(U.src=d(w.id),U.draggable=!1,L.appendChild(U),w.n>1){let ot=document.createElement("span");ot.className="count",ot.textContent=w.n,L.appendChild(ot)}let W=Ua(w.id);if(W&&w.d>0){let ot=document.createElement("div");ot.className="dura";let Z=1-w.d/W;ot.innerHTML=`<i style="width:${Math.max(6,Z*100)}%;background:hsl(${Z*120},80%,48%)"></i>`,L.appendChild(ot)}L.dataset.tip=_n(w.id),W&&(L.dataset.tipSub=`Durability ${W-w.d} / ${W}`);let st=ns(w.id);st&&(L.dataset.tipSub=st.armor?`Armor +${st.armor}  (${co.find(ot=>ot.id===st.slot)?.label})`:st.slots?`Backpack: adds ${st.slots} inventory slots`:`Wear it in the ${co.find(ot=>ot.id===st.slot)?.label} slot`)}return L}let f=Ce("hotbar");function m(w){f.replaceChildren();for(let _=0;_<uo;_++){let L=u(e(_),_===w?"sel":""),U=document.createElement("span");U.className="num",U.textContent=_+1,L.appendChild(U),L.addEventListener("mousedown",W=>{W.stopPropagation(),o(_)}),f.appendChild(L)}}let x=Ce("inventory"),g=Ce("inv-grid"),p=Ce("inv-hotbar"),b=Ce("recipes"),A=Ce("cursor-item"),v=null,E=!1;function M(w){let _=u(t.slots[w]);return _.addEventListener("mousedown",L=>{L.preventDefault(),L.stopPropagation();let U=t.slots[w];if(L.shiftKey&&L.button===0&&U&&ns(U.id)&&t.quickEquip(w))l?.();else if(L.shiftKey&&L.button===0&&O){if(U){let W=tg(O,U);W<=0?t.slots[w]=null:U.n=W}}else L.shiftKey&&L.button===0?t.quickMove(w):v=t.clickSlot(w,v,L.button===2?2:0);kt()}),_}let R=Ce("equip-row"),y={};function C(){R.replaceChildren();for(let w of co){let _=t.equipment[w.id],L=document.createElement("div");L.className="equip-cell";let U=u(_,"equip"+(_?" worn":""));if(!_){let st=D(w.id);if(st){let ot=document.createElement("img");ot.src=d(st),ot.className="ghost",ot.draggable=!1,U.appendChild(ot)}U.dataset.tip=w.label,U.dataset.tipSub=w.id==="shield"?"A shield, or torches to hold in your off hand (G places one)":"Drop a "+w.label.toLowerCase()+" here to wear it"}U.addEventListener("mousedown",st=>{if(st.preventDefault(),st.stopPropagation(),st.shiftKey&&st.button===0)_&&t.canFit(_.id,1)&&!(w.id==="backpack"&&t.slots.slice(is).some(Boolean))?(t.equipment[w.id]=null,t.add(_.id,1,_.d)):_&&w.id==="backpack"&&c?.("Empty the backpack first");else{let ot=!t.equipment[w.id],Z=t.clickEquip(w.id,v,st.button===2?2:0);Z.refused&&c?.(Z.refused),v=Z.cursor,ot&&t.equipment[w.id]&&l?.()}kt()});let W=document.createElement("small");W.textContent=w.label,L.append(U,W),R.appendChild(L)}}function D(w){if(y[w]===void 0){y[w]=null;for(let _=100;_<400;_++)if(ns(_)?.slot===w){y[w]=_;break}}return y[w]}function F(){g.replaceChildren(),p.replaceChildren(),Ce("backpack-grid").replaceChildren();let w=t.capacity;for(let _=0;_<w;_++){let L=M(_);(_<uo?p:_<is?g:Ce("backpack-grid")).appendChild(L)}Ce("backpack-box").hidden=w<=is,C(),H(),K(),S()}function H(){v?(A.hidden=!1,A.replaceChildren(...u(v,"bare").childNodes)):A.hidden=!0}let N=Ba,I="hand",O=null,q=Ce("recipe-search"),G=Ce("recipe-only");try{G.checked=localStorage.getItem("voxelcraft.recipeOnly")==="1"}catch{}let et=()=>({table:I==="table",furnace:I==="furnace"}),B=()=>!!N[I].furnace,X=w=>{let _=q.value.trim().toLowerCase().split(/\s+/).filter(Boolean),L=w.toLowerCase();return _.every(U=>L.includes(U))};function K(){mt();let w=N[I],_=!!w.furnace;Ce("craft-title").textContent=w.title,Ce("recipe-only-label").textContent=_?"Smeltable only":"Craftable only",Ce("furnace-panel").hidden=!_,_&&Yt();let L=G.checked;b.replaceChildren();let U=0,W=(st,ot,Z,it,pt,Ct,ft)=>{let dt=document.createElement("div");dt.className="recipe"+(Ct?" can":""),dt.dataset.kind=st,dt.dataset.index=ot;let Rt=u(Z,"bare"),Ft=document.createElement("div");if(Ft.className="rtext",Ft.innerHTML=`<b>${it}</b><div class="ings">${pt}</div>`,dt.append(Rt,Ft),ft){let Wt=document.createElement("span");Wt.className="secs",Wt.textContent=ft,dt.appendChild(Wt)}dt.addEventListener("mousedown",Wt=>{if(Wt.preventDefault(),Wt.stopPropagation(),st==="smelt"){eg(O,t,bh[ot]),kt();return}let z=Oa[ot];t.canCraft(z,et())&&(i(z,t.craft(z,et())),kt())}),b.appendChild(dt),U++};if(_)bh.forEach((st,ot)=>{let Z=t.count(st.in);if(L&&Z<1||!X(_n(st.out)+" "+_n(st.in)))return;let it=`<span class="ing ${Z>=1?"ok":"no"}"><img src="${d(st.in)}" draggable="false">${Z}/1</span>`;W("smelt",ot,{id:st.out,n:1,d:0},_n(st.out),it,Z>=1,st.seconds+" s")});else{let st=et();for(let ot of w.stations)Oa.forEach((Z,it)=>{if(Z.station!==ot)return;let pt=t.canCraft(Z,st);if(L&&!pt||!X((Z.label||"")+" "+_n(Z.out)+" "+Z.ins.map(([ft])=>Bd(ft)).join(" ")))return;let Ct=Z.ins.map(([ft,dt])=>{let Rt=t.countSpec(ft);return`<span class="ing ${Rt>=dt?"ok":"no"}"><img src="${d(rr(ft)[0])}" draggable="false">${Rt}/${dt}</span>`}).join("");W("craft",it,{id:Z.out,n:Z.n,d:0},Z.label||_n(Z.out),Ct,pt)})}if(!U){let st=document.createElement("p");st.className="recipe-empty",st.textContent=q.value.trim()?"Nothing matches that search.":L?_?"Nothing in your inventory can be smelted yet.":"You cannot craft anything here yet. Untick the box to see every recipe.":"No recipes.",b.appendChild(st)}}q.addEventListener("input",K),G.addEventListener("change",()=>{try{localStorage.setItem("voxelcraft.recipeOnly",G.checked?"1":"0")}catch{}K()});let bt=[Ce("fur-input"),Ce("fur-fuel"),Ce("fur-output")],gt=["Put something to smelt here","Fuel: coal, charcoal, logs, planks...","The finished items appear here"],Kt="",Ht=w=>w.slots.map(_=>_?_.id+":"+_.n:"-").join("|");function Yt(){O&&(Kt=Ht(O),bt.forEach((w,_)=>{let L=O.slots[_],U=u(L);w.replaceChildren(...U.childNodes),L?(w.dataset.tip=U.dataset.tip,delete w.dataset.tipSub):(w.dataset.tip=gt[_],delete w.dataset.tipSub)}),j())}function j(){if(!O)return;let{rec:w}=Fh(O);Ce("fur-flame").classList.toggle("lit",O.burn>0),Ce("fur-flame").firstElementChild.style.height=(O.burnMax>0?Math.min(100,O.burn/O.burnMax*100):0)+"%",Ce("fur-arrow").firstElementChild.style.width=(w&&O.progress>0?Math.min(100,O.progress/w.seconds*100):0)+"%"}bt.forEach((w,_)=>{w.addEventListener("mousedown",L=>{if(L.preventDefault(),L.stopPropagation(),!!O){if(L.shiftKey&&L.button===0){let U=O.slots[_];if(U){let W=t.add(U.id,U.n,U.d);_===os&&W<U.n&&a?.({id:U.id,n:U.n-W}),O.slots[_]=W>0?{...U,n:W}:null}}else{let U=Q0(O,_,v,L.button===2?2:0);v=U.cursor,U.took&&a?.(U.took)}kt()}})});let Q=Ce("recipe-tip");function mt(){Q.hidden=!0}function Bt(w,_,L){let U=bh[Number(w.dataset.index)],W=t.count(U.in),st=d0.map(ot=>`${_n(ot)} (${Bs(ot)} s)`).join(", ");Q.innerHTML=`<h4>${_n(U.out)}</h4><div class="tip-head">Smelts:</div>
      <div class="tip-ing ${W>=1?"ok":"no"}"><img src="${d(U.in)}" draggable="false"><span>1\xD7 ${_n(U.in)}</span><em>${W>=1?"\u2714":"\u2718"} you have ${W}</em></div>
      <div class="tip-station">Takes ${U.seconds} seconds per item and needs fuel</div>
      <div class="tip-station">Burns: ${st}</div>
      ${W>=1?'<div class="tip-ok">Click to load it into the furnace</div>':'<div class="tip-no">You have none to smelt</div>'}`,Q.hidden=!1,Q.style.left=Math.min(_+18,window.innerWidth-Q.offsetWidth-8)+"px",Q.style.top=Math.min(L+14,window.innerHeight-Q.offsetHeight-8)+"px"}function wt(w,_,L){if(w.dataset.kind==="smelt")return Bt(w,_,L);let U=Oa[Number(w.dataset.index)],W=t.canCraft(U,et()),st=U.ins.map(([Ct,ft])=>{let dt=t.countSpec(Ct),Rt=dt>=ft;return`<div class="tip-ing ${Rt?"ok":"no"}"><img src="${d(rr(Ct)[0])}" draggable="false">
        <span>${ft}\xD7 ${Bd(Ct)}</span><em>${Rt?"\u2714":"\u2718"} you have ${dt}</em></div>`}).join(""),ot=U.station?`<div class="tip-station">Made at: ${x0[U.station]}</div>`:'<div class="tip-station">Made by hand</div>',Z=W?'<div class="tip-ok">Click to craft</div>':'<div class="tip-no">Missing materials</div>';Q.innerHTML=`<h4>${U.label||_n(U.out)} \xD7${U.n}</h4><div class="tip-head">Requires:</div>${st}${ot}${Z}`,Q.hidden=!1;let it=Q.offsetWidth,pt=Q.offsetHeight;Q.style.left=Math.min(_+18,window.innerWidth-it-8)+"px",Q.style.top=Math.min(L+14,window.innerHeight-pt-8)+"px"}b.addEventListener("mousemove",w=>{let _=w.target.closest(".recipe");_?wt(_,w.clientX,w.clientY):mt()}),b.addEventListener("mouseleave",mt);function kt(){F(),m(nt)}let Se=Ce("item-tip"),Gt=0,Qt=0,ue=()=>{Se.hidden=!0};function te(w,_,L){w.hidden=!1,w.style.left=Math.min(_+16,window.innerWidth-w.offsetWidth-8)+"px",w.style.top=Math.min(L+14,window.innerHeight-w.offsetHeight-8)+"px"}function S(){if(!E&&at.hidden){ue();return}let w=document.elementFromPoint(Gt,Qt),_=w?.closest?.(".slot[data-tip]");_&&!v&&_.closest("#inventory, #palette")?(Se.innerHTML=`<b></b>${_.dataset.tipSub?"<span></span>":""}`,Se.firstChild.textContent=_.dataset.tip,_.dataset.tipSub&&(Se.lastChild.textContent=_.dataset.tipSub),te(Se,Gt,Qt)):ue();let L=w?.closest?.(".recipe");L&&E?wt(L,Gt,Qt):mt()}document.addEventListener("mousemove",w=>{Gt=w.clientX,Qt=w.clientY,S()});let nt=0;x.addEventListener("mousemove",w=>{A.style.left=w.clientX+"px",A.style.top=w.clientY+"px"}),x.addEventListener("mousedown",w=>{w.target!==x||!v||(w.button===2&&v.n>1?(s({...v,n:1}),v.n-=1):(s(v),v=null),H())});function tt(w,_="hand",L=null){nt=w,I=N[_]?_:"hand",O=N[I].furnace?L:null,q.value="",E=!0,x.hidden=!1,F()}function ut(){if(mt(),ue(),v){let w=t.add(v.id,v.n,v.d);w>0&&s({...v,n:w}),v=null}O=null,E=!1,x.hidden=!0,m(nt)}let at=Ce("palette"),P=Ce("palette-grid");for(let w of gh){let _=u({id:w,n:1,d:0});_.addEventListener("click",()=>r(w)),P.appendChild(_)}let ge=Ce("goal-list");function le(w){ge.replaceChildren(),Ce("goal-count").textContent=`${w.filter(Boolean).length}/${ar.length}`;let _=w.lastIndexOf(!0),L=0;if(ar.forEach((U,W)=>{if(!(w[W]?W===_:++L<=2))return;let ot=document.createElement("li");ot.className=w[W]?"done":"todo",ot.textContent=U.text,ge.appendChild(ot)}),w.every(Boolean)){let U=document.createElement("li");U.className="done",U.textContent="All goals complete!",ge.appendChild(U)}}return{renderHotbar:w=>{nt=w,m(w),E&&F()},refreshInventory:()=>{E&&F()},tickFurnace:()=>{!E||!O||(Ht(O)!==Kt?Yt():j())},openInventory:tt,closeInventory:ut,renderGoals:le,openPalette:()=>{at.hidden=!1},closePalette:()=>{at.hidden=!0,ue()},get invOpen(){return E},get paletteOpen(){return!at.hidden}}}function ig(n,t,e=56,i=.14){let s=Math.hypot(n,t)/e;if(!(s>0))return{strafe:0,forward:0,mag:0,edge:!1};let r=Math.min(1,s),o=n/(s*e),a=t/(s*e),l=r<=i?0:(r-i)/(1-i);return{strafe:o*l,forward:-a*l,mag:l,edge:s>=.94}}var sg=n=>n.edge&&n.forward>.3;function rg(n,t,e=56){let i=t.x-n.x,s=t.y-n.y,r=Math.hypot(i,s);if(r<=e)return{x:n.x,y:n.y};let o=(r-e)/r;return{x:n.x+i*o,y:n.y+s*o}}function og(n,t,e,i=!1){return{yaw:-n*e*1.7,pitch:-t*e*1.7*(i?-1:1)}}function bb({coarse:n=!1,search:t=""}={}){let e=new URLSearchParams(t);return e.has("touch")?!0:e.has("desktop")?!1:!!n}function ag(){return typeof window>"u"?!1:bb({coarse:!!window.matchMedia?.("(pointer: coarse)").matches,search:window.location.search})}var xo=[{id:"forward",label:"Move forward",group:"Movement",key:"KeyW"},{id:"back",label:"Move backward",group:"Movement",key:"KeyS"},{id:"left",label:"Move left",group:"Movement",key:"KeyA"},{id:"right",label:"Move right",group:"Movement",key:"KeyD"},{id:"jump",label:"Jump / swim up / fly up",group:"Movement",key:"Space"},{id:"sprint",label:"Sprint",group:"Movement",key:"Tab"},{id:"crouch",label:"Crouch / fly down",group:"Movement",key:"ShiftLeft"},{id:"down",label:"Fly down (extra key)",group:"Movement",key:"KeyC"},{id:"inventory",label:"Inventory & crafting",group:"Actions",key:"KeyE"},{id:"drop",label:"Drop item",group:"Actions",key:"KeyQ"},{id:"fly",label:"Toggle flight (creative)",group:"Actions",key:"KeyF"},{id:"offhand",label:"Use offhand item (place a torch from the shield slot)",group:"Actions",key:"KeyG"},...Array.from({length:9},(n,t)=>({id:"slot"+(t+1),label:"Hotbar slot "+(t+1),group:"Hotbar",key:"Digit"+(t+1)})),{id:"music",label:"Toggle music",group:"Other",key:"KeyM"},{id:"skipTime",label:"Skip time of day",group:"Other",key:"KeyT"},{id:"renderUp",label:"Render distance +",group:"Other",key:"BracketRight"},{id:"renderDown",label:"Render distance -",group:"Other",key:"BracketLeft"},{id:"debug",label:"Debug info",group:"Other",key:"F3"}],Bh={sensitivity:1,invertY:!1,rawInput:!0,fov:75,musicVolume:.8,sfxVolume:.9,touchControls:ag()},tf=.0022,lg="voxelcraft.settings.v1";function Wa(n){return n?n.startsWith("Key")?n.slice(3):n.startsWith("Digit")?n.slice(5):n.startsWith("Numpad")?"Num "+n.slice(6):{Space:"Space",ShiftLeft:"Left Shift",ShiftRight:"Right Shift",ControlLeft:"Left Ctrl",ControlRight:"Right Ctrl",AltLeft:"Left Alt",AltRight:"Right Alt",Tab:"Tab",CapsLock:"Caps Lock",Enter:"Enter",Backspace:"Backspace",ArrowUp:"Up Arrow",ArrowDown:"Down Arrow",ArrowLeft:"Left Arrow",ArrowRight:"Right Arrow",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",Minus:"-",Equal:"=",Backquote:"`"}[n]||n:"Unbound"}var kh=class{constructor(){this.values={...Bh},this.binds=Object.fromEntries(xo.map(t=>[t.id,t.key])),this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem(lg)||"null");if(t){for(let e of Object.keys(Bh))typeof t.values?.[e]==typeof Bh[e]&&(this.values[e]=t.values[e]);for(let e of xo)t.binds&&e.id in t.binds&&(this.binds[e.id]=t.binds[e.id]);t.binds&&!("crouch"in t.binds)&&t.binds.sprint==="ShiftLeft"&&(this.binds.sprint="Tab")}}catch{}this.rebuild()}rebuild(){this.reverse=new Map;for(let[t,e]of Object.entries(this.binds))e&&this.reverse.set(e,t)}save(){try{localStorage.setItem(lg,JSON.stringify({values:this.values,binds:this.binds}))}catch{}for(let t of this.listeners)t(this)}get(t){return this.values[t]}set(t,e){this.values[t]=e,this.save()}onChange(t){this.listeners.add(t)}key(t){return this.binds[t]}actionFor(t){return this.reverse.get(t)}setBind(t,e){let i=this.reverse.get(e),s=null;return i&&i!==t&&(this.binds[i]=this.binds[t],s=i),this.binds[t]=e,this.rebuild(),this.save(),s}resetBinds(){this.binds=Object.fromEntries(xo.map(t=>[t.id,t.key])),this.rebuild(),this.save()}resetAll(){this.values={...Bh},this.resetBinds()}};var Xa=n=>document.getElementById(n),wb=[{key:"sensitivity",label:"Look sensitivity (mouse / touch)",min:.1,max:3,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"fov",label:"Field of view",min:60,max:110,step:1,fmt:n=>n+"\xB0"},{key:"musicVolume",label:"Music volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"sfxVolume",label:"Sound effects volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"}],Eb=[{key:"invertY",label:"Invert mouse Y axis"},{key:"rawInput",label:"Raw mouse input (no OS acceleration)"},{key:"touchControls",label:"On-screen touch controls (sticks and buttons)"}];function cg(n,{onClose:t}){let e=Xa("options"),i=Xa("opt-general"),s=Xa("opt-keys"),r=!1,o=null;function a(){i.replaceChildren();for(let x of wb){let g=document.createElement("label");g.className="opt-row";let p=document.createElement("span");p.textContent=x.label;let b=document.createElement("input");b.type="range",b.min=x.min,b.max=x.max,b.step=x.step,b.value=n.get(x.key);let A=document.createElement("output");A.textContent=x.fmt(Number(b.value)),b.addEventListener("input",()=>{let v=Number(b.value);A.textContent=x.fmt(v),n.set(x.key,v)}),g.append(p,b,A),i.appendChild(g)}for(let x of Eb){let g=document.createElement("label");g.className="opt-row toggle";let p=document.createElement("input");p.type="checkbox",p.checked=n.get(x.key),p.addEventListener("change",()=>n.set(x.key,p.checked));let b=document.createElement("span");b.textContent=x.label,g.append(p,b),i.appendChild(g)}let m=document.createElement("p");m.className="opt-hint",m.textContent="Tip: sensitivity changes apply instantly. Raw input takes effect the next time you click Resume.",i.appendChild(m)}function l(m=""){s.replaceChildren();let x=document.createElement("p");x.className="opt-hint",x.textContent=m||"Click a key, then press the new key. Esc cancels. If the key is already used, the two actions swap.",s.appendChild(x);let g="";for(let A of xo){if(A.group!==g){g=A.group;let R=document.createElement("h3");R.textContent=g,s.appendChild(R)}let v=document.createElement("div");v.className="bind-row";let E=document.createElement("span");E.textContent=A.label;let M=document.createElement("button");M.className="bind-btn"+(n.key(A.id)===A.key?"":" changed"),M.textContent=Wa(n.key(A.id)),M.addEventListener("click",()=>c(A.id,M)),v.append(E,M),s.appendChild(v)}let p=document.createElement("p");p.className="opt-hint",p.textContent="Mouse buttons are fixed: left = break, right = place / use, middle = pick block, wheel = hotbar.";let b=document.createElement("button");b.className="small",b.textContent="Reset keys to defaults",b.addEventListener("click",()=>{n.resetBinds(),l("Keys reset to defaults.")}),s.append(p,b)}function c(m,x){h(),o={action:m,button:x},x.textContent="Press a key\u2026",x.classList.add("waiting")}function h(){o&&(o=null,l())}window.addEventListener("keydown",m=>{if(r)if(o){if(m.preventDefault(),m.stopImmediatePropagation(),m.code==="Escape"){h();return}let x=o.action;o=null;let g=n.setBind(x,m.code),p=b=>xo.find(A=>A.id===b).label;l(g?`"${p(x)}" is now ${Wa(m.code)}; swapped with "${p(g)}".`:"")}else m.code==="Escape"&&(m.stopImmediatePropagation(),f())},!0);function d(m){i.hidden=m!=="general",s.hidden=m!=="keys";for(let x of e.querySelectorAll(".opt-tabs button"))x.classList.toggle("active",x.dataset.tab===m)}for(let m of e.querySelectorAll(".opt-tabs button"))m.addEventListener("click",()=>{h(),d(m.dataset.tab)});function u(){r=!0,a(),l(),d("general"),e.hidden=!1}function f(){h(),r=!1,e.hidden=!0,t()}return Xa("opt-done").addEventListener("click",f),Xa("opt-reset").addEventListener("click",()=>{n.resetAll(),a(),l("Everything reset to defaults.")}),{open:u,close:f,get isOpen(){return r}}}var hg={},ug={},dg={};for(let n of It.blocks)n.plant?.growth&&(hg[n.id]={next:n.plant.growth.next,rate:n.plant.growth.rate,soil:n.plant.growth.soil}),n.plant?.spreads&&(ug[n.id]=n.plant.spreads),n.plant?.grows&&(dg[n.id]=n.plant.grows);var fg={};for(let n=1;n<Pa.length;n++)Pa[n]&&(fg[Pa[n]]=n);function ef(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.plants.size===0))for(let h of[...c.plants]){let d=c.data[h],u=l*16+h%16,f=a*16+Math.floor(h/16)%16,m=Math.floor(h/256),x=hg[d],g=ug[d],p=dg[d];if(p)r()<p.rate*s&&p.soil.includes(n.getBlock(u,m-1,f))&&a0(n,u,m,f,p.trees,n.seed,r)&&o++;else if(x)r()<x.rate*s&&n.getBlock(u,m-1,f)===x.soil&&(n.setBlock(u,m,f,x.next),o++);else if(g&&r()<g.rate*s){let b=g.range*2+1,A=u+Math.floor(r()*b)-g.range,v=f+Math.floor(r()*b)-g.range;n.getBlock(A,m,v)===Jt.AIR&&n.getBlock(A,m-1,v)===g.onto&&(n.setBlock(A,m,v,g.block),o++)}}}return o}function Tb(n,t,e,i,s=Math.random,r=It.game.spread.chance){let o=fg[n.getBlock(t,e,i)];if(!o)return!1;let a=n.getBlock(t,e+1,i);if(a!==Jt.AIR&&!jt[a])return!1;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++)if((h||l||c)&&n.getBlock(t+h,e+l,i+c)===o)return s()>=r?!1:(n.setBlock(t,e,i,o),!0);return!1}function pg(n,t,e,i,s,r=Math.random,o=It.game.spread.samplesPerChunk){let a=0;for(let l=e-i;l<=e+i;l++)for(let c=t-i;c<=t+i;c++){if(!n.getChunk(c,l))continue;let d=Math.floor(o*s+r());for(let u=0;u<d;u++){let f=c*16+Math.floor(r()*16),m=l*16+Math.floor(r()*16),x=63;for(;x>0;){let g=n.getBlock(f,x,m);if(g!==Jt.AIR&&!jt[g])break;x--}Tb(n,f,x,m,r)&&a++}}return a}function mg(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.hydrating.size===0))for(let h of[...c.hydrating]){let d=Na.get(c.data[h]);if(!d)continue;let u=l*16+h%16,f=a*16+Math.floor(h/16)%16,m=Math.floor(h/256),x=n.nearWater(u,m,f);x&&d.wet?(n.setBlock(u,m,f,d.wet),o++):!x&&d.dry?(n.setBlock(u,m,f,d.dry),o++):!x&&d.decayInto&&n.getBlock(u,m+1,f)===Jt.AIR&&r()<d.decayRate*s&&(n.setBlock(u,m,f,d.decayInto),o++)}}return o}var Ab=28,zh=n=>n===Jt.AIR||jt[n]>0||de[n]===1,Hh=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,this.falling=[],t.addChangeListener((i,s,r)=>this.touch(i,s,r))}touch(t,e,i){(so[this.world.getBlock(t,e,i)]||so[this.world.getBlock(t,e+1,i)])&&(this.queue.add(t+","+e+","+i),this.queue.add(t+","+(e+1)+","+i))}startColumn(t,e,i){let s=this.world,r=[];for(let l=e;l<64&&so[s.getBlock(t,l,i)];l++)r.push([l,s.getBlock(t,l,i)]);let o=e-1;for(;o>=0&&zh(s.getBlock(t,o,i));)o--;let a=o+1;r.forEach(([l,c],h)=>{s.setBlock(t,l,i,Jt.AIR);let d={id:c,x:t,z:i,y:l,rest:a+h,vy:0};this.falling.push(d),this.hooks.onSpawn?.(d)})}update(t){if(this.queue.size){let i=[...this.queue];this.queue.clear();for(let s of i){let[r,o,a]=s.split(",").map(Number);o<0||o>=64||!this.world.isLoaded(r,a)||so[this.world.getBlock(r,o,a)]&&o>0&&zh(this.world.getBlock(r,o-1,a))&&this.startColumn(r,o,a)}}if(!this.falling.length)return;this.falling.sort((i,s)=>i.y-s.y);let e=[];for(let i of this.falling)i.vy+=Ab*t,i.y-=i.vy*t,i.y<=i.rest&&e.push(i);for(let i of e){this.falling.splice(this.falling.indexOf(i),1);let s=this.world.getBlock(i.x,i.rest,i.z);zh(s)?(this.world.setBlock(i.x,i.rest,i.z,i.id),this.hooks.onLand?.(i)):this.hooks.onDrop?.(i)}}flush(){for(let t of this.falling.splice(0))zh(this.world.getBlock(t.x,t.rest,t.z))?(this.world.setBlock(t.x,t.rest,t.z,t.id),this.hooks.onLand?.(t)):this.hooks.onDrop?.(t)}settle(t=.02,e=2e3){for(let i=0;i<e;i++)if(this.update(t),!this.falling.length&&!this.queue.size)return i;return e}};var Cb=[[0,0,0],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Vh=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,t.addChangeListener((i,s,r)=>{for(let[o,a,l]of Cb)Ia[t.getBlock(i+o,s+a,r+l)]&&this.queue.add(i+o+","+(s+a)+","+(r+l))})}supported(t,e,i){let s=this.world.getBlock(t,e,i);if(!Ia[s])return!0;let r=t+gi[s*3],o=e+gi[s*3+1],a=i+gi[s*3+2];return Ln[this.world.getBlock(r,o,a)]===1}update(){if(!this.queue.size)return;let t=[...this.queue];this.queue.clear();for(let e of t){let[i,s,r]=e.split(",").map(Number);if(!this.world.isLoaded(i,r))continue;let o=this.world.getBlock(i,s,r);if(!Ia[o])continue;let a=i+gi[o*3],l=r+gi[o*3+2];this.world.isLoaded(a,l)&&(this.supported(i,s,r)||(this.world.setBlock(i,s,r,Jt.AIR),this.hooks.onBreak?.(i,s,r,o)))}}};var si=It.game.hunger,xg=It.game.player.maxFood,_g=n=>n>si.noSprintAtOrBelow,nf=n=>n<=0,gg=It.game.equipment;function yg(n,t){if(n<=0)return 0;let e=n*(1-Math.min(gg.maxArmor,t)*gg.armorReduction);return Math.max(1,Math.round(e))}function vg(n){let t=It.game.fall;return n<t.safeDistance-t.tolerance?0:Math.max(0,Math.floor(n-t.damageOffset+t.tolerance))}var Mg=n=>n?si.sprintJumpCost:si.jumpCost,Rb=n=>n>xg-1;function Sg(n,t,e){n.food=Math.min(xg,n.food+t),n.saturation=Math.min(si.maxSaturation,n.food,(n.saturation??0)+e)}function bg(n,t,{moving:e,sprinting:i,mining:s=!1,maxHealth:r}){let o={healed:!1,starved:0};return n.saturation=Math.min(n.saturation??0,n.food),Rb(n.food)&&n.saturation>0&&n.health<r?(n.regenTimer+=t,n.regenTimer>=si.healEverySeconds&&(n.regenTimer=0,n.health=Math.min(r,n.health+1),n.saturation-=si.saturationPerHeal,o.healed=!0,n.saturation<=0&&(n.saturation=0,n.food=Math.max(0,n.food-si.emptySaturationCost)))):n.regenTimer=0,nf(n.food)?(n.starveTimer+=t,n.starveTimer>=si.starveEverySeconds&&(n.starveTimer=0,o.starved=si.starveDamage)):n.starveTimer=0,e&&(n.food=Math.max(0,n.food-t*(si.drainPerSecond+(i?si.sprintDrainPerSecond:0)))),s&&(n.food=Math.max(0,n.food-t*si.miningDrainPerSecond)),n.saturation=Math.min(n.saturation,n.food),o}var Ib=Pd,wg=[[1,0],[-1,0],[0,1],[0,-1]],Pb=.2,Lb=500,Nb=n=>n===Jt.AIR||jt[n]===1||jt[n]===2||de[n]===1,Db=n=>!(n===Jt.AIR||jt[n]>0||de[n]===1&&Ds[n]!==7),Gh=class{constructor(t){this.world=t,this.queue=new Set,this.timer=0,this.stats={changed:0},t.addChangeListener((e,i,s)=>this.touch(e,i,s))}key(t,e,i){return((t+32768)*65536+(i+32768))*64+e}unkey(t){let e=t%64,i=Math.floor(t/64);return[Math.floor(i/65536)-32768,e,i%65536-32768]}touch(t,e,i){let s=this.world;if(!(de[s.getBlock(t,e,i)]||de[s.getBlock(t,e+1,i)]||de[s.getBlock(t,e-1,i)]||de[s.getBlock(t+1,e,i)]||de[s.getBlock(t-1,e,i)]||de[s.getBlock(t,e,i+1)]||de[s.getBlock(t,e,i-1)]))return;let r=this.queue;r.add(this.key(t,e,i)),r.add(this.key(t,e+1,i)),e>0&&r.add(this.key(t,e-1,i));for(let[o,a]of wg)r.add(this.key(t+o,e,i+a))}supplyFor(t,e,i){let s=this.world,r=de[s.getBlock(t,e+1,i)]?6:0;for(let[o,a]of wg){let l=s.getBlock(t+o,e,i+a);if(!de[l])continue;let c=Ds[l];c<=1||Db(s.getBlock(t+o,e-1,i+a))&&(r=Math.max(r,c-1))}return r}step(){let t=this.world,e=[...this.queue].slice(0,Lb);for(let s of e)this.queue.delete(s);let i=0;for(let s of e){let[r,o,a]=this.unkey(s);if(o<0||o>=64||!t.isLoaded(r,a))continue;let l=t.getBlock(r,o,a);if(Ds[l]===7||!Nb(l))continue;let c=de[l]?Ds[l]:0,h=this.supplyFor(r,o,a);h!==c&&(t.setBlock(r,o,a,h>0?Ib[h]:Jt.AIR),i++)}return this.stats.changed=i,i}update(t){return this.timer+=t,this.timer<Pb?0:(this.timer=0,this.queue.size?this.step():0)}settle(t=200){for(let e=0;e<t;e++){if(!this.queue.size)return e;this.step()}return t}};var _o=[120,205,250],sf=[14,40,125],Eg=12,Wh=class{constructor(t,e){this.world=t,this.colorOf=e,this.cache=new Map}chunkColumns(t){let e=Wn(t.cx,t.cz),i=this.cache.get(e);if(i&&i.version===t.version)return i;let s=new Uint8Array(256),r=new Uint8Array(256),o=new Uint8Array(256);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=63;for(;h>0;){let f=t.data[he(c,h,l)];if(f!==Jt.AIR&&!jt[f])break;h--}let d=l*16+c,u=t.data[he(c,h,l)];if(s[d]=h,de[u]){let f=0,m=h;for(;m>0&&de[t.data[he(c,m,l)]]&&f<Eg;)m--,f++;u=t.data[he(c,m,l)],o[d]=f}r[d]=u}let a={version:t.version,y:s,id:r,depth:o};return this.cache.set(e,a),a}column(t,e){let i=this.world.getChunk(t>>4,e>>4);if(!i)return null;let s=this.chunkColumns(i),r=(e&15)*16+(t&15);return{y:s.y[r],id:s.id[r],depth:s.depth[r]}}render(t,e,i){let s=2*i+1,r=new Uint8ClampedArray(s*s*4);for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=t-i+a,c=e-i+o,h=this.column(l,c),d=(o*s+a)*4;if(!h)continue;let[u,f,m]=this.colorOf(h.id),x=1;if(h.depth===0){let g=this.column(l-1,c-1);g&&(x=Math.max(.72,Math.min(1.24,1+(h.y-g.y)*.09)))}else{let g=Math.min(1,(h.depth-1)/(Eg-4)),p=.12;u=(_o[0]+(sf[0]-_o[0])*g)*(1-p)+u*p,f=(_o[1]+(sf[1]-_o[1])*g)*(1-p)+f*p,m=(_o[2]+(sf[2]-_o[2])*g)*(1-p)+m*p}r[d]=u*x,r[d+1]=f*x,r[d+2]=m*x,r[d+3]=255}return r}};function Tg(n){let t=(n*24+6)%24,e=Math.floor(t),i=Math.floor((t-e)*60);return`${e%12===0?12:e%12}:${String(i).padStart(2,"0")} ${e<12?"AM":"PM"}`}function Ag(n){let t=Math.sin(n*Math.PI*2);return Math.abs(t)<.14?n<.5?"Sunrise":"Sunset":t<0?"Night":n<.25?"Morning":"Afternoon"}var Xh=class{constructor(t,e,i=28){this.canvas=t,this.ctx=t.getContext("2d"),this.data=e,this.R=i,this.N=2*i+1,this.off=document.createElement("canvas"),this.off.width=this.off.height=this.N,this.offCtx=this.off.getContext("2d"),this.cx=NaN,this.cz=NaN,this.lastBuild=0}refresh(t,e,i){t===this.cx&&e===this.cz&&i-this.lastBuild<500||(this.cx=t,this.cz=e,this.lastBuild=i,this.offCtx.putImageData(new ImageData(this.data.render(t,e,this.R),this.N,this.N),0,0))}draw(t,e,i,s){let r=this.ctx;this.refresh(Math.floor(t),Math.floor(e),s),r.clearRect(0,0,196,196),r.save(),r.beginPath(),r.arc(98,98,80,0,Math.PI*2),r.clip(),r.fillStyle="#0c0f13",r.fillRect(0,0,196,196),r.imageSmoothingEnabled=!1,r.drawImage(this.off,98+(this.cx-this.R-t)*3,98+(this.cz-this.R-e)*3,this.N*3,this.N*3);let o=r.createRadialGradient(98,98,80*.62,98,98,80);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.38)"),r.fillStyle=o,r.fillRect(0,0,196,196),r.restore(),r.lineWidth=5,r.strokeStyle="#14141a",r.beginPath(),r.arc(98,98,80+2.5,0,Math.PI*2),r.stroke(),r.lineWidth=2,r.strokeStyle="#a4a4b0",r.beginPath(),r.arc(98,98,80+.5,0,Math.PI*2),r.stroke(),r.fillStyle="#c8c8d2";for(let a=0;a<8;a++){let l=a*Math.PI/4,c=85;a%2&&(r.beginPath(),r.arc(98+Math.sin(l)*c,98-Math.cos(l)*c,1.8,0,Math.PI*2),r.fill())}r.font="bold 12px Consolas, monospace",r.textAlign="center",r.textBaseline="middle",r.lineWidth=3,r.strokeStyle="#000",[["N",0,"#ff6a5a"],["E",1,"#f0f0f8"],["S",2,"#f0f0f8"],["W",3,"#f0f0f8"]].forEach(([a,l,c])=>{let h=l*Math.PI/2,d=91,u=98+Math.sin(h)*d,f=98-Math.cos(h)*d;r.strokeText(a,u,f),r.fillStyle=c,r.fillText(a,u,f)}),r.save(),r.translate(98,98),r.rotate(-i),r.beginPath(),r.moveTo(0,-9),r.lineTo(6,7),r.lineTo(0,3),r.lineTo(-6,7),r.closePath(),r.lineWidth=2.5,r.strokeStyle="#000",r.stroke(),r.fillStyle="#ffffff",r.fill(),r.restore()}};var $t=n=>document.getElementById(n),Cg=n=>new Promise(t=>setTimeout(t,n)),rf=()=>new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(n))),Ub=20260,Fb=2400;function Ob(n){let t=n.trim();if(!t)return;if(/^-?\d{1,9}$/.test(t))return Number(t);let e=2166136261;for(let i of t)e^=i.codePointAt(0),e=Math.imul(e,16777619);return(e>>>0)%2147483647}function Rg(n,t,e){let i=n.textContent,s=0;n.addEventListener("click",()=>{if(n.dataset.armed){clearTimeout(s),delete n.dataset.armed,n.textContent=i,e();return}n.dataset.armed="1",n.textContent=t,s=setTimeout(()=>{delete n.dataset.armed,n.textContent=i},3e3)}),n.disarm=()=>{clearTimeout(s),delete n.dataset.armed,n.textContent=i}}var of=class{constructor({scene:t,camera:e,materials:i,sky:s,renderer:r}){Object.assign(this,{scene:t,camera:e,materials:i,sky:s,renderer:r}),this.world=new lo(Ub),this.chunks=new fo(t,this.world,i,6);let o=this.world.findSpawn();this.cx=o.x,this.cz=o.z,this.ground=Math.max(this.world.heightAt(Math.floor(o.x),Math.floor(o.z)),30),this.angle=.9,this.dayTime=.12,this.elapsed=0,this.chunks.preload(this.cx,this.cz,3),this.sky.setMoonPhase(3),e.fov=68,e.updateProjectionMatrix()}update(t){this.elapsed+=t,this.angle+=t*.06,this.dayTime=.1+.26*(.5-.5*Math.cos(this.elapsed/55));let e=34,i=Math.sin(this.elapsed*.21)*1.5,s=this.camera;s.position.set(this.cx+Math.cos(this.angle)*e,this.ground+19+i,this.cz+Math.sin(this.angle)*e),s.lookAt(this.cx,this.ground+1,this.cz),this.chunks.update(this.cx,this.cz,8);let r=this.sky.update(this.dayTime,s.position,this.elapsed);this.materials.tint.value.copy(r.tint),this.materials.sprite.color.copy(r.tint),this.scene.background=this.scene.background||r.sky.clone(),this.scene.background.copy(r.sky),this.scene.fog.color.copy(r.sky);let o=this.chunks.radius*16-4;this.scene.fog.near=o*.55,this.scene.fog.far=o,this.renderer.render(this.scene,s)}dispose(){for(let t of this.world.chunks.values())this.chunks.disposeMeshes(t);this.scene.remove(this.chunks.group)}};async function Ig(n){let{params:t,atlasCanvas:e,titleLogo:i,openOptions:s}=n,{storage:r}=n;if(n.autoplay)return Bb(t,r);let{audio:o}=n;o.setScene("title"),o.start(),o.unlockOnGesture();let a=$t("music-hint"),l=setInterval(()=>{a.hidden=o.running||!o.musicOn},300),c=new AbortController,h=(g,p)=>window.addEventListener(g,p,{signal:c.signal}),d=new of(n),u=0,f=performance.now(),m=g=>{u=requestAnimationFrame(m);let p=Math.min(.1,(g-f)/1e3);f=g,n.windTime.value=d.elapsed%1e3,d.update(p)};u=requestAnimationFrame(m),t.has("title")||await kb(n);let x=await new Promise(g=>{let p={title:$t("title"),worlds:$t("worlds")},b=B=>{for(let[X,K]of Object.entries(p))K.hidden=X!==B;A=B},A="title",v=$t("title-logo");v.width=i.width,v.height=i.height,v.getContext("2d").drawImage(i,0,0),$t("title-credit").textContent=It.game.studio.name,$t("t-play").addEventListener("click",()=>{b("worlds"),F()}),$t("t-options").addEventListener("click",s),r.kind==="server"?Rg($t("t-quit"),"Click again: stop the game server",()=>zb(r)):$t("t-quit").hidden=!0,b("title");let E=[],M=null,R=!1,y=$t("world-list"),C=B=>{let X=new Date(B);return isNaN(X)?"":X.toLocaleDateString(void 0,{month:"short",day:"numeric"})+" "+X.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})};function D(){if(y.replaceChildren(...E.map(B=>{let X=document.createElement("div");X.className="world-item"+(B.id===M?" sel":""),X.dataset.id=B.id;let K=document.createElement("b");K.textContent=B.name;let bt=document.createElement("span");return bt.textContent=`${B.mode==="creative"?"Creative":"Survival"} \xB7 Day ${(B.day||0)+1} \xB7 Seed ${B.seed} \xB7 ${C(B.updated)}`,X.append(K,bt),X.addEventListener("click",()=>{M=B.id,D()}),X.addEventListener("dblclick",()=>H(B.id)),X})),!E.length){let B=document.createElement("p");B.className="world-empty",B.textContent="No worlds yet. Create one to start playing!",y.append(B)}$t("w-play").disabled=!M||R,$t("w-del").disabled=!M||R,$t("w-del").disarm?.()}async function F(){$t("world-error").textContent="";try{E=await r.list()}catch(B){E=[],$t("world-error").textContent="Could not read your worlds: "+B.message}r.persistent||($t("world-error").textContent="Your browser is not allowing saved games here: worlds will be lost when you close this tab."),E.some(B=>B.id===M)||(M=E[0]?.id??null),D(),!E.length&&!$t("world-error").textContent&&q()}async function H(B){if(!R){R=!0,$t("w-play").disabled=!0;try{$t("loading").hidden=!1,await rf();let X=await r.load(B);g({id:B,save:X})}catch(X){R=!1,$t("loading").hidden=!0,$t("world-error").textContent="Could not load that world: "+X.message,D()}}}$t("w-play").addEventListener("click",()=>M&&H(M)),$t("w-back").addEventListener("click",()=>b("title")),Rg($t("w-del"),"Click again to delete forever",async()=>{if(M){try{await r.remove(M),M=null}catch(B){$t("world-error").textContent=B.message}F()}});let N=$t("world-create"),I="survival",O=B=>{I=B,$t("wc-mode").textContent="Game mode: "+(B==="creative"?"Creative":"Survival")};function q(){$t("wc-name").value="New World",$t("wc-seed").value="",O("survival"),N.hidden=!1,$t("world-actions").hidden=!0,$t("wc-name").focus(),$t("wc-name").select()}function G(){N.hidden=!0,$t("world-actions").hidden=!1}$t("w-new").addEventListener("click",q),$t("wc-cancel").addEventListener("click",G),$t("wc-mode").addEventListener("click",()=>O(I==="survival"?"creative":"survival"));async function et(){if(!R)try{let B=await r.create({name:$t("wc-name").value,mode:I,seed:Ob($t("wc-seed").value)});await H(B.id)}catch(B){$t("world-error").textContent="Could not create the world: "+B.message}}$t("wc-go").addEventListener("click",et),h("keydown",B=>{if(A!=="worlds"||R)return;if(B.code==="Escape"){!N.hidden&&E.length?G():N.hidden&&b("title");return}if(!N.hidden){B.code==="Enter"&&et();return}let X=E.findIndex(K=>K.id===M);B.code==="ArrowDown"&&E.length?(M=E[Math.min(E.length-1,X+1)].id,D()):B.code==="ArrowUp"&&E.length?(M=E[Math.max(0,X-1)].id,D()):B.code==="Enter"&&M&&H(M)})});return await rf(),cancelAnimationFrame(u),clearInterval(l),a.hidden=!0,c.abort(),d.dispose(),$t("title").hidden=!0,$t("worlds").hidden=!0,{...x,done:Pg}}function Pg(){$t("loading").hidden=!0,document.body.classList.remove("startup")}async function Bb(n,t){let e=n.get("world");if(!e){let i=n.has("seed")?Number(n.get("seed")):void 0;e=(await t.create({name:"Autoplay",mode:n.get("mode")||"survival",seed:i})).id}return{id:e,save:await t.load(e),done:Pg}}async function kb(n){let t=$t("intro"),{name:e,tagline:i}=It.game.studio,s=Nh(n.atlasCanvas,e.toUpperCase(),4),r=$t("intro-logo");r.width=s.width,r.height=s.height,r.getContext("2d").drawImage(s,0,0);let o=hr(n.atlasCanvas,Jt.GRASS,112),a=$t("intro-emblem");a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),$t("intro-sub").textContent=i;let l,c=new Promise(d=>{l=d}),h=new AbortController;for(let d of["keydown","pointerdown"])window.addEventListener(d,l,{signal:h.signal});t.hidden=!1,await rf(),t.classList.add("in"),await Promise.race([Cg(900+Fb),c]),t.classList.remove("in"),await Cg(700),h.abort(),t.hidden=!0}async function zb(n){await n.quitGame(),document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#15110e;color:#fff;font-family:Consolas,monospace;text-align:center"><h1 style="margin:0">Thanks for playing!</h1><p style="color:#bbb;margin:0">The game server has stopped. You can close this tab.<br>Run <b>npm start</b> to play again.</p></div>',window.close()}var Hb=/^[a-z0-9-]{1,48}$/,Vb=n=>(typeof n=="string"?n.replace(/\s+/g," ").trim().slice(0,32):"")||"New World",Lg=(n,t)=>({id:n,name:t.name,mode:t.mode==="creative"?"creative":"survival",seed:t.seed,created:t.created,updated:t.updated,day:t.day??0}),af=n=>typeof n=="string"&&Hb.test(n);function Gb(n,t,e){let i=n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,30)||"world";for(;;){let s=i+"-"+e().toString(36).slice(2,6).padEnd(4,"0");if(!t(s))return s}}function Ng(n,{rand:t=Math.random,now:e=()=>new Date().toISOString(),persistent:i=!0}={}){let s=new Set;return{kind:"local",persistent:i,async list(){let r=[];for(let o of await n.keys()){s.add(o);let a=await n.get(o);a&&typeof a=="object"&&r.push(Lg(o,a))}return r.sort((o,a)=>String(a.updated).localeCompare(String(o.updated)))},async create({name:r,mode:o,seed:a}={}){for(let u of await n.keys())s.add(u);let l=Vb(r),c=e(),h={name:l,created:c,updated:c,seed:Number.isInteger(a)?a:Math.floor(t()*2**31),mode:o==="creative"?"creative":"survival"},d=Gb(l,u=>s.has(u),t);return s.add(d),await n.set(d,h),Lg(d,h)},async load(r){let o=af(r)?await n.get(r):null;if(!o)throw new Error("no such world");return{...o,id:r}},async save(r,o){let a=af(r)?await n.get(r):null;if(!a)throw new Error("no such world");let l=typeof o=="string"?JSON.parse(o):o;if(typeof l!="object"||l===null||typeof l.seed!="number")throw new Error("bad world payload");await n.set(r,{...l,name:a.name,created:a.created,updated:e()})},async remove(r){af(r)&&await n.delete(r),s.delete(r)},saveOnExit(r,o){this.save(r,o).catch(()=>{})}}}function Wb(n=(...t)=>fetch(...t)){let t=async(e,i="GET",s)=>{let r=await n(e,{method:i,headers:s===void 0?{}:{"Content-Type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)});if(!r.ok)throw new Error(`${i} ${e}: ${r.status} ${await r.text()}`);return r.json()};return{kind:"server",persistent:!0,list:()=>t("api/worlds"),create:e=>t("api/worlds","POST",e),load:e=>t("api/worlds/"+e),save:(e,i)=>n("api/worlds/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:i}),remove:e=>t("api/worlds/"+e,"DELETE"),saveOnExit(e,i){navigator.sendBeacon("api/worlds/"+e,new Blob([i],{type:"application/json"}))},async quitGame(){try{await n("__voxelcraft/shutdown",{method:"POST",headers:{"x-voxelcraft-stop":"1"}})}catch{}}}}function Xb(n="voxelcraft",t="worlds"){let e=()=>new Promise((o,a)=>{let l=indexedDB.open(n,1);l.onupgradeneeded=()=>l.result.createObjectStore(t),l.onsuccess=()=>o(l.result),l.onerror=()=>a(l.error)}),i=null,s=()=>i??=e(),r=async(o,a)=>{let l=await s();return new Promise((c,h)=>{let d=l.transaction(t,o),u=a(d.objectStore(t));d.oncomplete=()=>c(u?.result),d.onerror=()=>h(d.error),d.onabort=()=>h(d.error)})};return{get:o=>r("readonly",a=>a.get(o)),set:(o,a)=>r("readwrite",l=>l.put(a,o)),delete:o=>r("readwrite",a=>a.delete(o)),keys:()=>r("readonly",o=>o.getAllKeys())}}function qb(){let n=new Map;return{get:async t=>n.has(t)?structuredClone(n.get(t)):void 0,set:async(t,e)=>{n.set(t,structuredClone(e))},delete:async t=>{n.delete(t)},keys:async()=>[...n.keys()]}}async function Dg(){try{let n=await fetch("api/ping",{cache:"no-store"});if(n.ok&&(await n.json())?.game==="voxelcraft")return Wb()}catch{}try{let n=Xb();return await n.keys(),navigator.storage?.persist&&navigator.storage.persist().catch(()=>{}),Ng(n)}catch{return Ng(qb(),{persistent:!1})}}var as=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),e&&(s.textContent=e),i&&i.appendChild(s),s},lf=[{id:"move",label:"Tap: pick up / place",button:0,shift:!1},{id:"split",label:"Tap: split / place one",button:2,shift:!1},{id:"quick",label:"Tap: quick move / wear",button:0,shift:!0}];function Fg(n){let t={strafe:0,forward:0,edge:!1,jump:!1,crouch:!1,sprint:!1},e=!1,i=!1,s=new Set,r=as("div");r.id="touch",r.hidden=!0;let o=as("div","tz look","",r),a=as("div","tz move","",r),l=as("div","stick ghost","",r);as("i","knob","",l);let c=as("div","stick live","",r),h=as("i","knob","",c);c.hidden=!0;let d=null,u={x:0,y:0},f=()=>{c.style.left=u.x+"px",c.style.top=u.y+"px"};function m(){d=null,t.strafe=0,t.forward=0,t.edge=!1,c.hidden=!0,l.hidden=!1,n.changed?.()}a.addEventListener("pointerdown",N=>{d===null&&(N.preventDefault(),d=N.pointerId,a.setPointerCapture(N.pointerId),u={x:N.clientX,y:N.clientY},f(),h.style.transform="translate(-50%, -50%)",c.hidden=!1,l.hidden=!0)}),a.addEventListener("pointermove",N=>{if(N.pointerId!==d)return;u=rg(u,{x:N.clientX,y:N.clientY}),f();let I=N.clientX-u.x,O=N.clientY-u.y,q=ig(I,O);t.strafe=q.strafe,t.forward=q.forward,t.edge=sg(q);let G=Math.min(1,Math.hypot(I,O)/56)*56,et=Math.atan2(O,I);h.style.transform=`translate(calc(-50% + ${Math.cos(et)*G}px), calc(-50% + ${Math.sin(et)*G}px))`,n.changed?.()});for(let N of["pointerup","pointercancel"])a.addEventListener(N,I=>{I.pointerId===d&&m()});let x=null,g={x:0,y:0};o.addEventListener("pointerdown",N=>{x===null&&(N.preventDefault(),x=N.pointerId,o.setPointerCapture(N.pointerId),g={x:N.clientX,y:N.clientY})}),o.addEventListener("pointermove",N=>{N.pointerId===x&&(n.look(N.clientX-g.x,N.clientY-g.y),g={x:N.clientX,y:N.clientY})});for(let N of["pointerup","pointercancel"])o.addEventListener(N,I=>{I.pointerId===x&&(x=null)});function p(N,I,O=r){let q=as("div","tb "+N,I,O);return q.setAttribute("role","button"),q}function b(N,I,O,q){let G=p(N,I),et=null,B=()=>{et!==null&&(et=null,s.delete(B),G.classList.remove("on"),q?.())};G.addEventListener("pointerdown",X=>{et===null&&(X.preventDefault(),et=X.pointerId,G.setPointerCapture(X.pointerId),G.classList.add("on"),s.add(B),O())});for(let X of["pointerup","pointercancel"])G.addEventListener(X,K=>{K.pointerId===et&&B()});return G}function A(N,I,O,q=r){let G=p(N,I,q);return G.addEventListener("pointerdown",et=>{et.preventDefault(),O()}),G}function v(N,I,O){let q=p(N,I);return q.addEventListener("pointerdown",G=>{G.preventDefault(),t[O]=!t[O],q.classList.toggle("on",t[O]),n.changed?.()}),q}b("attack","Break",()=>n.attack(!0),()=>n.attack(!1)),b("use","Use",()=>n.use(!0),()=>n.use(!1)),b("jump","Jump",()=>{t.jump=!0,n.jump(),n.changed?.()},()=>{t.jump=!1,n.changed?.()});let E=A("fly","Fly",()=>n.fly()),M=v("sprint","Run","sprint"),R=v("crouch","Sneak","crouch");A("inv","Bag",()=>n.inventory()),A("off","Torch",()=>n.offhand()),A("menu","II",()=>n.menu());let y=A("close","\u2715",()=>n.closeScreen(),document.body);y.id="t-close";let C=as("div","tb invmode");document.querySelector("#inventory .inv-col").prepend(C),C.id="t-invmode",y.hidden=C.hidden=!0;let D=0,F=()=>{C.textContent=lf[D].label};F(),C.addEventListener("pointerdown",N=>{N.preventDefault(),D=(D+1)%lf.length,F()}),document.getElementById("inventory").addEventListener("mousedown",N=>{let I=lf[D];!e||!N.isTrusted||I.id==="move"||(N.stopImmediatePropagation(),N.preventDefault(),N.target.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:I.button,shiftKey:I.shift,clientX:N.clientX,clientY:N.clientY})))},!0),document.body.appendChild(r);function H(){for(let N of[...s])N();d!==null&&m(),x=null,t.jump=!1,t.crouch=!1,t.sprint=!1,M.classList.remove("on"),R.classList.remove("on"),n.changed?.()}return{state:t,reset:H,get enabled(){return e},setEnabled(N){e=!!N,e||(H(),r.hidden=!0,i=!1,y.hidden=!0,C.hidden=!0)},sync({show:N,screen:I,creative:O,flying:q}){if(!e)return;let G=!!N;G!==i&&(i=G,r.hidden=!G,G||H()),E.hidden=!O,E.classList.toggle("on",!!q),y.hidden=!I,C.hidden=I!=="inv"}}}var $b=[".inv-panel",".pal-panel",".opt-panel",".world-panel","#menu","#title-menu","#death-box"];function Yb(n,t,e,i,s=12){return!(n>0)||!(t>0)?1:Math.max(.25,Math.min(1,(e-s*2)/n,(i-s*2)/t))}function Zb(n,t){return Math.max(.55,Math.min(1,n/900,t/560))}function Og(){let n=[],t=s=>{let r=s.offsetWidth,o=s.offsetHeight;s.style.setProperty("--fit",String(Yb(r,o,window.innerWidth,window.innerHeight)))},e=()=>{document.documentElement.style.setProperty("--hud",Zb(window.innerWidth,window.innerHeight).toFixed(3));for(let s of n)t(s)},i=typeof ResizeObserver=="function"?new ResizeObserver(s=>{for(let r of s)t(r.target)}):null;for(let s of $b)for(let r of document.querySelectorAll(s))n.push(r),i?.observe(r);window.addEventListener("resize",e),window.addEventListener("orientationchange",e),e()}var cf=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Bg=300,hf=It.game.treeFall.leafReach,ls=(n,t,e)=>n+","+t+","+e,kg=n=>n.split(",").map(Number),Hg=[];for(let n=-1;n<=1;n++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++){let i=Math.abs(n)+Math.abs(t)+Math.abs(e);(i===1||i===2)&&Hg.push([n,t,e])}function Jb(n,t,e,i){if(e<=0||!n.isLoaded(t,i))return!0;let s=n.getBlock(t,e-1,i);return Ln[s]===1&&!es[s]&&!Us[s]}function Vg(n,t,e,i){let s=new Map,r=[],o=!1,a=n.getBlock(t,e+1,i);for(es[a]&&(s.set(ls(t,e+1,i),[t,e+1,i,a]),r.push([t,e+1,i]));r.length&&s.size<Bg;){let[A,v,E]=r.pop();Jb(n,A,v,E)&&(o=!0);for(let[M,R,y]of Hg){let C=A+M,D=v+R,F=E+y;s.has(ls(C,D,F))||!es[n.getBlock(C,D,F)]||(s.set(ls(C,D,F),[C,D,F,n.getBlock(C,D,F)]),r.push([C,D,F]))}}if(s.size>=Bg)return null;o&&s.clear();let l=[[t,e,i],...s.values()],c=new Map,h=[];for(let[A,v,E]of l)for(let[M,R,y]of cf){let C=A+M,D=v+R,F=E+y;Us[n.getBlock(C,D,F)]&&!c.has(ls(C,D,F))&&(c.set(ls(C,D,F),1),h.push([C,D,F]))}for(let A=1;A<hf+1&&h.length;A++){let v=[];for(let[E,M,R]of h)for(let[y,C,D]of cf){let F=E+y,H=M+C,N=R+D;!Us[n.getBlock(F,H,N)]||c.has(ls(F,H,N))||(c.set(ls(F,H,N),A+1),v.push([F,H,N]))}h=v}let d=new Set,u=1/0,f=-1/0,m=1/0,x=-1/0,g=1/0,p=-1/0;for(let A of c.keys()){let[v,E,M]=kg(A);u=Math.min(u,v),f=Math.max(f,v),m=Math.min(m,E),x=Math.max(x,E),g=Math.min(g,M),p=Math.max(p,M)}if(c.size){let A=hf+1,v=[];for(let E=u-A;E<=f+A;E++)for(let M=m-A;M<=x+A;M++)for(let R=g-A;R<=p+A;R++)es[n.getBlock(E,M,R)]&&!s.has(ls(E,M,R))&&v.push([E,M,R]);for(let E=1;E<=hf&&v.length;E++){let M=[];for(let[R,y,C]of v)for(let[D,F,H]of cf){let N=R+D,I=y+F,O=C+H,q=ls(N,I,O);!Us[n.getBlock(N,I,O)]||d.has(q)||(d.add(q),M.push([N,I,O]))}v=M}}let b=[...c.keys()].filter(A=>!d.has(A)).map(A=>{let v=kg(A);return[...v,n.getBlock(v[0],v[1],v[2])]});return!s.size&&!b.length?null:{logs:[...s.values()],leaves:b}}function Gg(n,t){for(let[e,i,s]of t.logs)n.setBlock(e,i,s,Jt.AIR);for(let[e,i,s]of t.leaves)n.setBlock(e,i,s,Jt.AIR)}function Wg(n,t,e,i){let s=n+.5-e,r=t+.5-i;return Math.abs(s)>=Math.abs(r)?{dx:s>=0?1:-1,dz:0}:{dx:0,dz:r>=0?1:-1}}function Xg(n,t,e,i,s,r,o,a){let l=n-i,c=e-r,h=t-s,d=l*o+c*a,u=l*a-c*o;return[i+o*h+a*u,s-d,r+a*h-o*u]}var zg=n=>n===Jt.AIR||jt[n]>0||de[n]===1;function qg(n,t,e,i,s){for(let r=0;r<=s;r++){let o=e+r;if(!(o<1||o>=64||!zg(n.getBlock(t,o,i)))){for(let a=0;a<5&&o>1&&zg(n.getBlock(t,o-1,i));a++)o--;return o}}return null}function $g(n,t,e,i,s,r,o){let a=[],l=[];for(let c of[t.logs,t.leaves]){let h=c.slice().sort((d,u)=>d[1]-i-(u[1]-i));for(let[d,u,f,m]of h){let[x,g,p]=Xg(d,u,f,e,i,s,r,o),b=qg(n,x,g,p,3);if(b===null){l.push({id:m,x,y:g,z:p});continue}n.setBlock(x,b,p,m),a.push({id:m,x,y:b,z:p})}}return{placed:a,lost:l}}function Yg(n,t,e,i,s,r,o){let a=[];for(let l of[t.logs,t.leaves])for(let[c,h,d,u]of l){let[f,m,x]=Xg(c,h,d,e,i,s,r,o),g=qg(n,f,m,x,6);a.push({id:u,x:f,y:g??i+1,z:x})}return a}var sn=It.game,nu=sn.hunger;re.enabled=!1;var Ot=n=>document.getElementById(n),un=new kh,Zg=new URLSearchParams(location.search),Kb=Zg.has("touch")?!0:Zg.has("desktop")?!1:null,px=()=>Kb??!!un.get("touchControls"),ln=px();document.body.classList.toggle("touch",ln);Og();var wf=new URLSearchParams(location.search);async function jb(){if(!navigator.locks)return!0;for(let n=0;n<8;n++){if(await new Promise(e=>{navigator.locks.request("voxelcraft-game",{ifAvailable:!0},i=>{if(!i){e(!1);return}return e(!0),new Promise(()=>{})})}))return!0;await new Promise(e=>setTimeout(e,250))}return!1}await jb()||(document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#1b1410;color:#fff;font-family:Consolas,monospace;text-align:center;padding:24px"><h1 style="margin:0">VoxelCraft is already open</h1><p style="max-width:520px;color:#ccc;margin:0">Only one copy of the game can run at a time. Close the other tab or window, then reload this page.</p></div>',await new Promise(()=>{}));var Yi=wf.has("autoplay"),{canvas:$i,avg:mx}=await z0(),Qb=H0(mx);document.documentElement.style.setProperty("--dirt",`url(${J0($i)})`);var Ef=Ot("logo"),iu=Nh($i);Ef.width=iu.width;Ef.height=iu.height;Ef.getContext("2d").drawImage(iu,0,0);var Eo=new dh({canvas:Ot("game"),antialias:!1,powerPreference:"high-performance"});Eo.outputColorSpace=Ks;Eo.setPixelRatio(Math.min(window.devicePixelRatio,2));var Te=new Ko;Te.fog=new Jo(10208511,40,90);var ze=new mn(75,1,.05,700);ze.rotation.order="YXZ";Te.add(ze);function gx(){Eo.setSize(window.innerWidth,window.innerHeight,!1),ze.aspect=window.innerWidth/window.innerHeight,ze.updateProjectionMatrix()}window.addEventListener("resize",gx);gx();var xx=n=>{let t=new Li(n);return t.magFilter=t.minFilter=We,t.generateMipmaps=!1,t},Ya=xx($i),tw=k0($i),vi={solid:new on({map:Ya,vertexColors:!0,alphaTest:.5}),water:new on({map:Ya,vertexColors:!0,transparent:!0,opacity:.74,depthWrite:!1}),sprite:new on({vertexColors:!0}),plant:new on({map:Ya,vertexColors:!0,alphaTest:.5,side:Qn})},Tf={value:new zt(1,1,1)},ew={value:xh},nw={value:new zt(1,.84,.58)};vi.tint=Tf;function Af(n){n.uniforms.uTint=Tf,n.uniforms.uWarm=nw,n.uniforms.uFloor=ew,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aBlk;
uniform vec3 uTint;
uniform vec3 uWarm;
uniform float uFloor;`).replace("#include <color_vertex>",`#include <color_vertex>
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  vColor.rgb = min(vec3(1.0), max(vColor.rgb * uTint, vec3(aBlk.y * uFloor)) + aBlk.x * uWarm);
#endif`)}vi.solid.onBeforeCompile=Af;vi.water.onBeforeCompile=Af;var Cf={value:0};vi.plant.onBeforeCompile=n=>{Af(n),n.uniforms.uTime=Cf,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aSway;
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
      float ph = uTime * 2.1 + wp.x * 0.65 + wp.z * 0.45;
      float gust = sin(ph) + 0.5 * sin(ph * 2.3 + 1.7);
      transformed.x += gust * 0.075 * aSway;
      transformed.z += cos(ph * 0.9 + wp.x * 0.3) * 0.05 * aSway;`)};var To=new Ah(Te,{sun:V0(),moon:G0(),glow:W0()});To.setPixelRatio(Eo.getPixelRatio());var _x=new on({map:Ya,vertexColors:!0,alphaTest:.5,fog:!1,depthTest:!1,transparent:!0}),yx=new on({vertexColors:!0,fog:!1,depthTest:!1,transparent:!0}),Rf=new on({color:13212276,fog:!1,depthTest:!1,transparent:!0}),vx=new zn(.11,.11,.6),ke=new Pe(vx,Rf);ke.renderOrder=999;ke.frustumCulled=!1;ze.add(ke);var hs={arm:{pos:[.5,-.5,-.55],rot:[.55,-.35,.15],scale:1},block:{pos:[.5,-.46,-.8],rot:[.25,-.6,.05],scale:.22},sprite:{pos:[.46,-.33,-.7],rot:[.1,-.5,.05],scale:.42},tool:{pos:[.52,-.42,-.8],rot:[.12,2.45,.38],scale:.46,pivot:[.66,-.7,-.45]}};hs.axe={...hs.tool,flip:!0};var Je=hs.arm,vf=-1,iw=new In().setFromAxisAngle(new V(1,1,0).normalize(),Math.PI),uf=new In,Jg=new Ri,Kg=new V;function Mx(){let n=Co(Ne),t=n?n.id:0;t!==vf&&(vf=t,t?Os(t)?(ke.geometry=go(t),ke.material=_x,Je=hs.block):(ke.geometry=Dh(t,!0),ke.material=yx,Je=qn(t)?qn(t).type==="axe"?hs.axe:hs.tool:hs.sprite):(ke.geometry=vx,ke.material=Rf,Je=hs.arm))}var zs=new ra(new ca(new zn(1.004,1.004,1.004)),new $r({color:0,fog:!1}));zs.visible=!1;Te.add(zs);var If=xx(X0());If.repeat.set(.1,1);var Ja=new Pe(new zn(1.006,1.006,1.006),new on({map:If,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Ja.visible=!1;Te.add(Ja);var Pf=256,yi=new ia(new zn(1,1,1),new on({color:16777215}),Pf);yi.instanceMatrix.setUsage(ad);yi.frustumCulled=!1;yi.count=0;Te.add(yi);var Hs=[],jg=new be,sw=new In,Qg=new V,tx=new V,Sx=new zt;function Mo(n,t,e,i){let s=Qb[i]||[.5,.5,.5];for(let r=0;r<14&&Hs.length<Pf;r++){let o=.75+Math.random()*.5;Hs.push({x:n+.2+Math.random()*.6,y:t+.2+Math.random()*.6,z:e+.2+Math.random()*.6,vx:(Math.random()-.5)*3.5,vy:Math.random()*3.5+1,vz:(Math.random()-.5)*3.5,life:.55+Math.random()*.5,size:.07+Math.random()*.08,r:s[0]*o,g:s[1]*o,b:s[2]*o})}}var df=new Map;function rw(n){if(!df.has(n)){let t=hr($i,n,16),e=t.getContext("2d").getImageData(0,0,16,16).data,i=0,s=0,r=0,o=0;for(let a=0;a<e.length;a+=4)e[a+3]>200&&(i+=e[a],s+=e[a+1],r+=e[a+2],o++);df.set(n,o?[i/o/255,s/o/255,r/o/255]:[.8,.5,.2])}return df.get(n)}var qh=new V;function ow(n){let t=rw(n);ze.updateMatrixWorld(),ze.localToWorld(qh.set(.02,-.2,-.5));let e=ze.getWorldDirection(tu);for(let i=0;i<9&&Hs.length<Pf;i++){let s=i%3===0,r=s?1.25:.8+Math.random()*.3;Hs.push({x:qh.x+(Math.random()-.5)*.08,y:qh.y+(Math.random()-.5)*.06,z:qh.z+(Math.random()-.5)*.08,vx:e.x*.6+(Math.random()-.5)*1.6,vy:.9+Math.random()*1.4,vz:e.z*.6+(Math.random()-.5)*1.6,life:.35+Math.random()*.3,size:.018+Math.random()*.026,r:Math.min(1,t[0]*r+(s?.15:0)),g:Math.min(1,t[1]*r+(s?.15:0)),b:Math.min(1,t[2]*r+(s?.15:0))})}}function aw(n){let t=0;for(let e=Hs.length-1;e>=0;e--){let i=Hs[e];if(i.life-=n,i.life<=0){Hs.splice(e,1);continue}i.vy-=18*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n}for(let e of Hs){tx.set(e.x,e.y,e.z);let i=e.size*Math.min(1,e.life*3);Qg.set(i,i,i),jg.compose(tx,sw,Qg),yi.setMatrixAt(t,jg),yi.setColorAt(t,Sx.setRGB(e.r,e.g,e.b)),t++}yi.count=t,yi.instanceMatrix.needsUpdate=!0,yi.instanceColor&&(yi.instanceColor.needsUpdate=!0)}var _r=!1,Lf=cg(un,{onClose:()=>{_r=!1}});ke.visible=!1;var oe=new Ih;window.__audio=oe;window.__atlas=$i;oe.setVolumes(un.get("musicVolume"),un.get("sfxVolume"));var Nf=await Dg(),Df=await Ig({params:wf,autoplay:Yi,atlasCanvas:$i,titleLogo:iu,openOptions:()=>Lf.open(),renderer:Eo,scene:Te,camera:ze,materials:vi,sky:To,windTime:Cf,audio:oe,storage:Nf});ke.visible=!0;oe.setScene("game");var Uf=Df.id,He=Df.save,Ff=He?.seed??Math.floor(Math.random()*2**31),qt=new lo(Ff);He?.edits&&qt.loadEdits(He.edits,He.legacyCaves);var Mn=new fo(Te,qt,vi,He?.radius??6),ct=new Th(qt),Un=new Uh(Te,qt,vi.solid,vi.sprite);Un.load(He?.drops);var lw=n=>{let t=mx[Fe[n]?.top];return t?[t[0]*255,t[1]*255,t[2]*255]:[90,90,90]},cw=new Xh(Ot("minimap"),new Wh(qt,lw)),bx=new Gh(qt),vo=new Map,wx=new Hh(qt,{onSpawn(n){let t=new Pe(go(n.id),vi.solid);t.position.set(n.x+.5,n.y+.5,n.z+.5),Te.add(t),vo.set(n,t)},onLand(n){Te.remove(vo.get(n)),vo.delete(n),Mn.remeshNow(yr(n.x,n.z)),oe.block(Fe[n.id].sound,"place")},onDrop(n){if(Te.remove(vo.get(n)),vo.delete(n),!ie)for(let t of ho(n.id,!0))Un.spawn(t.id,t.n,n.x+.5,n.rest+.5,n.z+.5);Mo(n.x,n.rest,n.z,n.id)}}),Ex=new Vh(qt,{onBreak(n,t,e,i){if(Mo(n,t,e,i),oe.block(Fe[i].sound,"break"),!ie)for(let s of ho(i,!0))Un.spawn(s.id,s.n,n+.5,t+.4,e+.5)}}),Ao=new Oh({onLit(n,t,e,i){if(!qt.isLoaded(n,e))return!1;let s=qt.getBlock(n,t,e);if(s!==Jt.FURNACE&&s!==Jt.FURNACE_LIT)return!0;let r=i?Jt.FURNACE_LIT:Jt.FURNACE;return s!==r&&qt.setBlock(n,t,e,r),!0}});Ao.load(He?.furnaces);var ie=He?.mode==="creative",Me=new Eh;Me.load(He?.inventory);Me.loadEquipment(He?.equipment);var su=He?.creativeHotbar??[...sn.creativeHotbarIds],Zn={collected:new Set(He?.progress?.collected),crafted:new Set(He?.progress?.crafted),flags:new Set(He?.progress?.flags)},Jh=sn.player.maxFood,hn=Math.min(Jh,He?.food??Jh),mr=Math.min(hn,He?.saturation??sn.hunger.respawnSaturation),_i=0,Ka=sn.player.maxHealth,ri=He?.health>0?Math.min(Ka,He.health):Ka,Sn=!1,ja=He?.day??0,ff=Number(wf.get("growth"))||1,Ne=He?.slot??0,qi=He?.time??sn.time.startTime;To.setMoonPhase(ja);var us=0,Co=n=>ie?{id:su[n],n:1,d:0}:Me.slots[n],fr=()=>Co(Ne)?.id??0,Vs=He?.spawnPoint??qt.findSpawn(),Ro=He?.player??Vs;ct.pos.x=Ro.x;ct.pos.y=Ro.y;ct.pos.z=Ro.z;ct.yaw=Ro.yaw??0;ct.pitch=Ro.pitch??0;ct.flying=ie&&!!Ro.flying;Mn.preload(ct.pos.x,ct.pos.z,3);for(;ct.collides(ct.pos.x,ct.pos.y,ct.pos.z)&&ct.pos.y<120;)ct.pos.y+=1;var pr=n=>Fe[n]?.sound??"default",Tx=()=>qt.getBlock(Math.floor(ct.pos.x),Math.floor(ct.pos.y-.2),Math.floor(ct.pos.z));ct.events.step=()=>oe.block(Fe[Tx()]?.sound||"default","step");ct.events.splash=()=>oe.splash();ct.events.land=()=>oe.block(Fe[Tx()]?.sound||"default","place");ct.events.jump=n=>{ie||(hn=Math.max(0,hn-Mg(n)))};ct.events.fall=n=>{let t=vg(n);ie||t<=0||(Of(yg(t,Me.armor),"You hit the ground too hard"),Sn||(dr.v=-sn.fall.kick))};var pf=ar.map(n=>n.done(Zn));function Gs(){let n=ar.map(t=>t.done(Zn));n.forEach((t,e)=>{t&&!pf[e]&&(yn("Goal complete: "+ar[e].text),oe.craft())}),pf=n,ds.renderGoals(pf)}function Kh(n){let t=ct.eye,e=ze.getWorldDirection(tu);Un.spawn(n.id,n.n,t.x+e.x*.5,t.y-.3+e.y*.5,t.z+e.z*.5,{d:n.d||0,delay:1.5,vx:e.x*4,vy:e.y*4+1.5,vz:e.z*4})}var ds=ng({atlas:$i,inventory:Me,getHotbarStack:Co,onSelect:n=>So(n),onToss:Kh,onCraft:(n,t)=>{t.ok&&(oe.craft(),Zn.crafted.add(n.out),t.leftover>0&&Kh({id:n.out,n:t.leftover,d:0}),Gs(),cn())},onPalettePick:n=>{su[Ne]=n,cn(),Ax()},onEquip:()=>{oe.craft(),Zn.flags.add("equipped"),Gs(),cn()},onNotice:n=>yn(n),onSmeltTake:n=>{oe.craft(),Zn.crafted.add(n.id),Gs(),cn()}}),ex=0;function Ax(){let n=Co(Ne),t=Ot("blockname");t.textContent=n?_n(n.id):"",t.classList.add("show"),clearTimeout(ex),ex=setTimeout(()=>t.classList.remove("show"),1400)}function cn(){ds.renderHotbar(Ne),Mx()}function So(n){Ne=(n+9)%9,cn(),Ax()}var Qa=-1;function Io(){let n=Ot("health");n.style.display=ie?"none":"flex";let t=Math.ceil(ri);t!==Qa&&(Qa=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=ri-i*2;return Y0(s>=2?2:s>=1?1:0)})),n.classList.toggle("low",ri<=6))}var nx=0;function hw(){let n=Ot("hurt");n.classList.add("flash"),clearTimeout(nx),nx=setTimeout(()=>n.classList.remove("flash"),220)}var dr={y:0,v:0};function Of(n,t="You died"){ie||Sn||n<=0||(ri=Math.max(0,ri-n),Io(),hw(),oe.hurt(),ri<=0&&dw(t))}var uw=1800;function dw(n){Sn=!0,Ke&&kf();let t=0,e=ct.pos;for(let i of Me.takeEverything())Un.spawn(i.id,i.n,e.x,e.y+.9,e.z,{d:i.d,delay:1.5,life:uw}),t++;cn(),Ot("death-cause").textContent=n+(t?". Your things are where you fell.":""),Ot("death").hidden=!1,document.exitPointerLock(),vn(!1)}function Cx(){for(ri=Ka,hn=Jh,mr=nu.respawnSaturation,Sn=!1,Ot("death").hidden=!0,ct.pos.x=Vs.x,ct.pos.y=Vs.y,ct.pos.z=Vs.z,ct.vel.x=ct.vel.y=ct.vel.z=0,ct.stepSmooth=0,ct.fallPeak=null,Mn.preload(ct.pos.x,ct.pos.z,2);ct.collides(ct.pos.x,ct.pos.y,ct.pos.z)&&ct.pos.y<120;)ct.pos.y+=1;Qa=el=-1,Io(),sl(),Yi?vn(!0):(vn(!0),Po())}Ot("respawn").addEventListener("click",Cx);var ix=0;function yn(n){let t=Ot("toast");t.textContent=n,t.classList.add("show"),clearTimeout(ix),ix=setTimeout(()=>t.classList.remove("show"),2200)}cn();Gs();var gr=new Set,Dn={forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,down:!1},Oe=!1,Ke=null,Mf=!1,jh=0,Fn={left:!1,right:!1},cs=n=>gr.has(un.key(n));function Rx(n,t){ct.yaw+=n,ct.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,ct.pitch+t))}function fw(){let n=document.documentElement;document.fullscreenElement||!n.requestFullscreen||matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches||n.requestFullscreen({navigationUI:"hide"}).then(()=>window.screen.orientation?.lock?.("landscape")).catch(()=>{})}var il=Fg({changed:()=>xr(),look:(n,t)=>{if(!Oe)return;let e=og(n,t,tf*un.get("sensitivity"),un.get("invertY"));Rx(e.yaw,e.pitch)},attack:n=>{Oe&&(Fn.left=n,n||nl())},use:n=>{Oe&&(Fn.right=n,Ws=n,n&&(Za=0))},jump:()=>{let n=performance.now();ie&&n-jh<300&&Qh(!ct.flying),jh=n},fly:()=>Qh(!ct.flying),offhand:()=>{Oe&&Vx()},inventory:()=>{Oe&&!Ke&&ru(ie?"palette":"inv")},closeScreen:()=>zf(),menu:()=>{Oe&&(vn(!1),Ot("play").textContent="Resume",Lo())}});il.setEnabled(ln);function xr(){let n=il.state;Dn.forward=cs("forward"),Dn.back=cs("back"),Dn.left=cs("left"),Dn.right=cs("right"),Dn.strafe=n.strafe,Dn.ahead=n.forward,Dn.jump=cs("jump")||n.jump,Mf=cs("sprint")||n.sprint||n.edge,Dn.sprint=Mf&&Vf(),Dn.crouch=cs("crouch")||n.crouch,Dn.down=cs("crouch")||cs("down")||n.crouch}function Bf(n){for(qi+=n;qi>=1;)qi-=1,ja++,To.setMoonPhase(ja)}function Qh(n){if(!ie){yn("Flying is only available in creative mode");return}ct.flying=n,ct.vel.y=0,yn("Flying: "+(n?"ON":"OFF"))}function ru(n,t="hand",e=null){Ke=n,n==="inv"?ds.openInventory(Ne,t,e&&Ba[t]?.furnace?Ao.get(e.x,e.y,e.z):null):ds.openPalette(),document.exitPointerLock(),(Yi||ln)&&vn(!1)}function kf(){Ke==="inv"?ds.closeInventory():Ke==="palette"&&ds.closePalette(),Ke=null,cn()}function zf(){kf(),Hf=performance.now()+700,vn(!0),Yi||(Po(),tl=performance.now())}window.addEventListener("keydown",n=>{if(_r||n.target instanceof HTMLInputElement&&n.code!=="Escape")return;if(n.code==="Escape"&&Oe&&!Yi&&document.pointerLockElement!==bo&&!Ke){vn(!1),Ot("play").textContent="Resume",Lo();return}if(n.code==="Escape"&&!Oe&&!Ke&&!Sn&&!n.repeat&&performance.now()-Ix>250){n.preventDefault(),Lx();return}if(n.code!=="Escape"&&Px(),(n.code==="Tab"||n.code.startsWith("F")&&n.code!=="F11"&&n.code!=="F5"&&n.code!=="F12")&&n.preventDefault(),n.repeat){Oe&&(gr.add(n.code),xr());return}let t=un.actionFor(n.code);if(Ke&&(t==="inventory"||n.code==="Escape")){n.preventDefault(),zf();return}if(t==="inventory"&&Oe){ru(ie?"palette":"inv");return}if(t==="music"){Dx();return}if(t==="debug"){Ot("debug").hidden=!Ot("debug").hidden;return}if(Oe)switch(gr.add(n.code),xr(),t){case"jump":{let e=performance.now();ie&&e-jh<300&&Qh(!ct.flying),jh=e;break}case"fly":Qh(!ct.flying);break;case"offhand":Vx();break;case"sprint":Vf()||yn("Too hungry to sprint");break;case"skipTime":Bf(.125),yn("Time skipped");break;case"drop":ie||pw();break;case"renderUp":case"renderDown":{let e=Math.max(3,Math.min(12,Mn.radius+(t==="renderUp"?1:-1)));Mn.setRadius(e),Xf(),yn("Render distance: "+e+" chunks");break}default:t&&t.startsWith("slot")&&So(Number(t.slice(4))-1)}});window.addEventListener("keyup",n=>{gr.delete(n.code),xr()});window.addEventListener("blur",()=>{gr.clear(),xr(),Fn={left:!1,right:!1}});function pw(){let n=Me.slots[Ne];n&&(Kh({id:n.id,n:1,d:n.d}),--n.n<=0&&(Me.slots[Ne]=null),cn())}window.addEventListener("wheel",n=>{!Oe||ln||So(Ne+(n.deltaY>0?1:-1))},{passive:!0});window.addEventListener("mousemove",n=>{if(!Oe||ln)return;let t=tf*un.get("sensitivity"),e=Math.abs(n.movementX)>500?0:n.movementX,i=Math.abs(n.movementY)>500?0:n.movementY;Rx(-e*t,-i*t*(un.get("invertY")?-1:1))});window.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("mousedown",n=>{if(!ln&&(Px(),!!Oe&&(n.button===0&&(Fn.left=!0),n.button===2&&(Fn.right=!0,Ws=!0,Za=0),n.button===1))){n.preventDefault();let t=Gf();if(!t)return;if(ie)gh.includes(t.id)&&(su[Ne]=t.id,So(Ne));else{let e=Me.slots.slice(0,9).findIndex(i=>i&&i.id===t.id);e>=0&&So(e)}}});window.addEventListener("mouseup",n=>{ln||(n.button===0&&(Fn.left=!1,nl()),n.button===2&&(Fn.right=!1,Ws=!1))});var mw=Ot("overlay"),bo=Ot("game");function Po(){if(Yi)return;if(ln){!Ke&&!Sn&&!_r&&vn(!0);return}let n=()=>bo.requestPointerLock?.();if(!un.get("rawInput"))return n();try{let t=bo.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(n)}catch{n()}}var Hf=0,Ix=0,tl=0;function Px(){if(Yi||ln||!Oe||_r||Sn||document.pointerLockElement===bo)return;let n=performance.now();n-tl<500||(tl=n,Po())}bo.style.cursor="none";function vn(n){Oe=n,n||(gr.clear(),il.reset(),xr(),Fn={left:!1,right:!1},nl()),mw.classList.toggle("hidden",n||!!Ke||Sn)}document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===bo){Ke&&kf(),vn(!0);return}if(Ke){vn(!1);return}performance.now()<Hf||(Ix=performance.now(),vn(!1),Ot("play").textContent="Resume",Lo())});function Lx(){Oe||Sn||Ke||_r||(oe.start(),vn(!0),Yi||(Hf=performance.now()+700,Po(),tl=performance.now()))}Ot("play").addEventListener("click",()=>{oe.start(),ln&&fw(),Yi?vn(!0):Po()});var Sf=!1;async function Nx(){Sf||(Sf=!0,Ot("quitbtn").disabled=!0,Ot("quitbtn").textContent="Saving...",document.exitPointerLock(),Xx(),await Lo(),qf=!0,location.href="?title")}Ot("quitbtn").addEventListener("click",Nx);function Dx(){oe.setMusic(!oe.musicOn),Ot("musicbtn").textContent="Music: "+(oe.musicOn?"On":"Off"),yn("Music "+(oe.musicOn?"on":"off"))}Ot("musicbtn").addEventListener("click",Dx);function Ux(n){ie=n,n||(ct.flying=!1),Ot("modebtn").textContent="Mode: "+(n?"Creative":"Survival"),vf=-1,el=-1,Qa=-1,sl(),Io(),cn(),Lo()}Ot("modebtn").addEventListener("click",()=>Ux(!ie));Ot("modebtn").textContent="Mode: "+(ie?"Creative":"Survival");Ot("optionsbtn").addEventListener("click",()=>{_r=!0,gr.clear(),xr(),Lf.open()});function gw(){let n=e=>Wa(un.key(e)),t=[[[n("forward"),n("left"),n("back"),n("right")].join(" "),"Move","Mouse","Look"],[n("jump"),"Jump / swim (double-tap to fly in creative)",n("sprint"),"Sprint (not when very hungry)"],[n("crouch"),"Crouch: slower, and you cannot walk off edges","",""],["Left click","Hold to break","Right click","Place / use / till / plant / eat"],[`${n("slot1")}\u2013${n("slot9")} / Wheel`,"Select slot",n("drop"),"Drop one item"],[n("inventory"),"Inventory & crafting",n("music"),"Toggle music"],[n("skipTime"),"Skip time of day",`${n("renderDown")} ${n("renderUp")}`,"Render distance"],[n("fly"),"Fly (creative only)",n("debug"),"Debug info"],[n("offhand"),"Place the torch in your shield slot","",""]];Ot("controls").replaceChildren(...t.map(e=>{let i=document.createElement("tr");for(let s of e){let r=document.createElement("td");r.textContent=s,i.appendChild(r)}return i}))}function Fx(){oe.setVolumes(un.get("musicVolume"),un.get("sfxVolume"));let n=ln;ln=px(),ln!==n&&(document.body.classList.toggle("touch",ln),il.setEnabled(ln),Fn={left:!1,right:!1},ln&&document.exitPointerLock?.()),Ot("tagline").textContent=ln?"Game paused":"Game paused \u2014 press Esc to resume",gw()}un.onChange(Fx);Fx();window.addEventListener("vc-update",()=>yn("A new version is ready. Reload to play it."));var sx=-1;function xw(){let n=Me.armor;if(n===sx)return;sx=n;let t=Ot("armorbar");t.hidden=n<=0,t.replaceChildren(...Array.from({length:10},(e,i)=>{let s=n-i*2;return $0(s>=2?2:s>=1?1:0)}))}var Ox=()=>!ie&&nf(hn),Vf=()=>ie||_g(hn),el=-1;function sl(){let n=Ot("hunger");n.style.display=ie?"none":"flex",Ot("satbar").style.display=ie?"none":"block",Ot("satbar").firstElementChild.style.width=Math.min(100,mr/nu.maxSaturation*100)+"%";let t=Math.ceil(hn);t!==el&&(el=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=t-i*2;return q0(s>=2?2:s>=1?1:0)})),n.classList.toggle("starving",Ox()))}sl();Io();var tu=new V;function Gf(){return ze.getWorldDirection(tu),$d(qt,ct.eye,tu,sn.player.reach)}var $a=new Lh,eu=null,bf=null,mf=0,Za=0,Ws=!1,Xi=0;function nl(){eu=null,bf=null,$a.reset(),Ja.visible=!1}function yr(n,t){let e=[];for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){let r=qt.getChunk((n>>4)+s,(t>>4)+i);r&&r.dirty&&e.push(r)}return e}var wo=[];function Bx(n){let t=new Set,e=[];for(let[i,,s]of n)for(let r of yr(i,s))t.has(r)||(t.add(r),e.push(r));Mn.remeshNow(e)}function kx(n,t,e){let i=Vg(qt,n,t,e);if(!i)return;let s=Wg(n,e,ct.pos.x,ct.pos.z);Gg(qt,i),Bx([...i.logs,...i.leaves]);let r=new en;r.position.set(n+.5,t+.5,e+.5);for(let a of[i.logs,i.leaves])for(let[l,c,h,d]of a){let u=new Pe(go(d),vi.solid);u.position.set(l-n,c-t,h-e),r.add(u)}Te.add(r);let o=i.logs.reduce((a,l)=>Math.max(a,l[1]-t),1);wo.push({group:r,tree:i,bx:n,by:t,bz:e,dir:s,axis:new V(s.dz,0,-s.dx),t:0,T:.9+.08*o}),oe.block(pr(i.logs[0]?.[3]),"break")}function zx(n){Te.remove(n.group),wo.splice(wo.indexOf(n),1);let{dx:t,dz:e}=n.dir;if(sn.treeFall.mode==="land"){let{placed:r,lost:o}=$g(qt,n.tree,n.bx,n.by,n.bz,t,e);if(Bx(r.map(a=>[a.x,a.y,a.z])),!ie)for(let a of o)for(let l of ho(a.id,!0))Un.spawn(l.id,l.n,a.x+.5,a.y+.5,a.z+.5);oe.block(pr(n.tree.logs[0]?.[3]),"place");return}let i=Yg(qt,n.tree,n.bx,n.by,n.bz,t,e),s=0;for(let r of i){if(!ie)for(let o of m0(r.id))Un.spawn(o.id,o.n,r.x+.5,r.y+.4,r.z+.5,{delay:.5,vx:(Math.random()-.5)*2.5+t*1.2,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*2.5+e*1.2});(es[r.id]||s++%3===0)&&Mo(r.x,r.y,r.z,r.id)}oe.block(pr(n.tree.logs[0]?.[3]),"break"),oe.block(pr(n.tree.logs[0]?.[3]),"place"),n.tree.leaves.length&&oe.block(pr(n.tree.leaves[0][3]),"break")}function _w(n){for(let t of[...wo]){t.t+=n;let e=Math.min(1,t.t/t.T);t.group.quaternion.setFromAxisAngle(t.axis,Math.PI/2*Math.pow(e,2.2)),e>=1&&zx(t)}}var rx=!1;function yw(n){let t=wh(n.id,fr()),e=!!jt[n.id];qt.setBlock(n.x,n.y,n.z,Jt.AIR),Mo(n.x,n.y,n.z,n.id),oe.block(Fe[n.id].sound,"break"),Xi=1;let i=qt.getBlock(n.x,n.y+1,n.z);if(!e&&jt[i]&&(qt.setBlock(n.x,n.y+1,n.z,Jt.AIR),Mo(n.x,n.y+1,n.z,i),!ie))for(let r of ho(i,!0))Un.spawn(r.id,r.n,n.x+.5,n.y+1.4,n.z+.5);if(Ba[ro.get(n.id)]?.furnace)for(let r of Ao.remove(n.x,n.y,n.z))Un.spawn(r.id,r.n,n.x+.5,n.y+.6,n.z+.5,{d:r.d});if(Mn.remeshNow(yr(n.x,n.z)),es[n.id]&&kx(n.x,n.y,n.z),ie)return;for(let r of ho(n.id,t.canHarvest))Un.spawn(r.id,r.n,n.x+.5,n.y+.5,n.z+.5);if(e)return;hn=Math.max(0,hn-nu.miningCost);let s=Me.slots[Ne];if(s&&qn(s.id)){let r=_n(s.id);Me.damage(Ne,f0(n.id,s.id))&&(yn(`Your ${r} broke!`),oe.toolBreak()),cn()}}var Wf=(n,t,e)=>qt.canPlace(n,t,e);function vw(n){let t=!!jt[n.id],e=t?n.x:n.x+n.nx,i=t?n.y:n.y+n.ny,s=t?n.z:n.z+n.nz;if(!Wf(e,i,s))return;let r=qt.getBlock(e,i,s);if(r!==Jt.AIR&&!de[r]&&!jt[r])return;let o=Co(Ne);!o||!Os(o.id)||jt[o.id]||ct.intersectsBlock(e,i,s)||(qt.setBlock(e,i,s,o.id),Mn.remeshNow(yr(e,s)),oe.block(Fe[o.id].sound,"place"),Xi=1,ie||(--o.n<=0&&(Me.slots[Ne]=null),cn()))}function Hx(n,t,e=!1){let i=!!jt[n.id],s=i||n.ny===1?"up":n.nx===1?"east":n.nx===-1?"west":n.nz===1?"south":n.nz===-1?"north":null,r=s&&t[s];if(!r)return;let o=i?n.x:n.x+n.nx,a=i?n.y:n.y+n.ny,l=i?n.z:n.z+n.nz;if(!Wf(o,a,l))return;let c=qt.getBlock(o,a,l);if(!(c!==Jt.AIR&&!de[c]&&!jt[c])&&Ln[qt.getBlock(o+gi[r*3],a+gi[r*3+1],l+gi[r*3+2])]&&(qt.setBlock(o,a,l,r),Mn.remeshNow(yr(o,l)),oe.block(Fe[r].sound,"place"),Xi=1,!ie)){if(e){let h=Me.equipment.shield;h&&--h.n<=0&&(Me.equipment.shield=null),ds.refreshInventory()}else{let h=Me.slots[Ne];h&&--h.n<=0&&(Me.slots[Ne]=null)}cn()}}var gf=0;function Mw(n){if(gf-=n,gf>0)return;gf=.1;let t=Sn||Ke==="palette"?0:Math.max(Hd(fr()),Hd(Me.equipment.shield?.id??0)),e=ct.eye;qt.lighting.setCarried(Math.floor(e.x),Math.floor(e.y),Math.floor(e.z),t)}function Vx(){let n=Me.equipment.shield;if(!n||!or(n.id)||!Fa(n.id))return;let t=Gf();t&&Hx(t,Fa(n.id),!0)}function Sw(){let n=Me.slots[Ne];if(ie||!n||!qn(n.id))return;let t=_n(n.id);Me.damage(Ne)&&(yn(`Your ${t} broke!`),oe.toolBreak()),cn()}function Gx(n){if(!n)return null;let t=n.x,e=n.z,i=jt[n.id]?n.y-1:n.y,s=qt.getBlock(t,i,e);if(!mh[s])return null;let r=qt.getBlock(t,i+1,e);return r!==Jt.AIR&&!jt[r]?null:{x:t,y:i,z:e,wet:qt.nearWater(t,i,e)}}function bw(n,t){let e=Gx(n);if(!e)return;jt[qt.getBlock(e.x,e.y+1,e.z)]&&qt.setBlock(e.x,e.y+1,e.z,Jt.AIR);let i=qt.getBlock(e.x,e.y,e.z),s=mh[i];qt.setBlock(e.x,e.y,e.z,s);let r=e.wet?Na.get(s)?.wet:0;r?qt.setBlock(e.x,e.y,e.z,r):t&&yn(`Dry soil: crops only grow with water within ${sn.tilling.radius} blocks, and bare dry soil turns back into dirt`),Mn.remeshNow(yr(e.x,e.z)),Mo(e.x,e.y,e.z,i),oe.block(pr(i),"place"),Xi=1,Sw(),e.wet&&(Zn.flags.add("tilled"),Gs())}function ww(n,t){if(!(!t.on.includes(n.id)||n.ny!==1)&&Wf(n.x,n.y+1,n.z)&&qt.getBlock(n.x,n.y+1,n.z)===Jt.AIR){if(qt.setBlock(n.x,n.y+1,n.z,t.block),Mn.remeshNow(yr(n.x,n.z)),oe.block(pr(t.block),"place"),Xi=1,!ie){let e=Me.slots[Ne];e&&--e.n<=0&&(Me.slots[Ne]=null),cn()}Zn.flags.add("planted"),Gs()}}function Ew(n,t){let e=fr(),i=c0(e),s=t&&ro.has(t.id)&&Ws;if(!Fn.right||!i||ie||s){_i=0,Ot("eatbar").hidden=!0;return}if(hn>=Jh){Ws&&(yn("You're not hungry"),Ws=!1),_i=0,Ot("eatbar").hidden=!0;return}let r=Math.floor(_i/.3);if(_i+=n,Math.floor(_i/.3)>r&&(oe.eat(),ow(e)),Ot("eatbar").hidden=!1,Ot("eatbar").firstElementChild.style.width=Math.min(100,_i/sn.eating.seconds*100)+"%",_i>=sn.eating.seconds){_i=0;let o=Me.slots[Ne];o&&--o.n<=0&&(Me.slots[Ne]=null);let a={food:hn,saturation:mr};Sg(a,i,h0(e)),{food:hn,saturation:mr}=a,Zn.flags.add("ate"),yn(`Yum! +${i/2} hunger`),cn(),Gs()}}function Tw(n){return Me.add(n.id,n.n,n.d),Zn.collected.add(n.id),oe.pickup(),cn(),Gs(),!0}function Aw(n){let t=Gf();if(t){zs.visible=!0;let s=jt[t.id]?Ns[t.id]:1,r=jt[t.id]?io[t.id]*2:1;zs.scale.set(r,s,r);let o=jt[t.id]===3&&(Bi[t.id*2]||Bi[t.id*2+1]);zs.position.set(t.x+.5-(o?Bi[t.id*2]*.25:0),t.y+s/2+(o?.2:0),t.z+.5-(o?Bi[t.id*2+1]*.25:0))}else zs.visible=!1;let i=qn(fr())?.type==="hoe"?Gx(t):null;if(zs.material.color.setHex(i?i.wet?3407701:16751150:0),Za-=n,Xi=Math.max(0,Xi-n*4.5),Fn.left&&t&&t.y>0){let s=t.x+","+t.y+","+t.z;if(s!==bf){bf=s;let o=Fe[t.id];!ie&&!wh(t.id,fr()).canHarvest?yn(`You need a ${g0(o.need)} ${o.tool} (or better) to harvest this`):!ie&&!rx&&o.tool==="shovel"&&qn(fr())?.type!=="shovel"&&(rx=!0,yn("Tip: a shovel digs dirt, grass and sand much faster (craft one at a table)"))}eu=t;let r=ie?.25:wh(t.id,fr()).time;mf-=n,mf<=0&&(mf=.24,oe.block(Fe[t.id].sound,"tick"),Xi=Math.max(Xi,.8)),$a.tick(n,s,r)?(yw(t),nl()):$a.progress>0&&(Ja.visible=!0,Ja.position.copy(zs.position),If.offset.x=$a.stage/10)}else $a.idle(n),eu&&nl();if(Ew(n,t),Fn.right&&t&&Za<=0&&!_i){Za=.22;let s=Ws;Ws=!1;let r=Co(Ne),o=r&&qn(r.id);s&&ro.has(t.id)?(Fn.right=!1,ru("inv",ro.get(t.id),t)):o?.type==="hoe"?bw(t,s):r&&Od(r.id)?ww(t,Od(r.id)):r&&Fa(r.id)?Hx(t,Fa(r.id)):vw(t)}}var ox=0;function Cw(n){n-ox<250||(ox=n,Ot("mm-real").textContent=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}),Ot("mm-game").textContent=Tg(qi),Ot("mm-part").textContent=`${Ag(qi)} \xB7 Day ${ja+1}`,Ot("mm-x").textContent=Math.floor(ct.pos.x),Ot("mm-y").textContent=Math.floor(ct.pos.y),Ot("mm-z").textContent=Math.floor(ct.pos.z))}var xf=new Map,Rw=n=>(xf.has(n)||xf.set(n,(jt[n]?Z0($i,n):hr($i,n,44)).toDataURL()),xf.get(n)),ax=new V,$h=null;function Iw(){let n=Ot("lookat");if(!Oe||Ke||Sn){n.hidden=!0,$h=null;return}ze.getWorldDirection(ax);let t=$d(qt,ct.eye,ax,sn.player.lookAtReach);if(!t){n.hidden=!0,$h=null;return}if(t.id!==$h){$h=t.id;let e=Vd[t.id];Ot("lookat-icon").src=Rw(t.id),Ot("lookat-name").textContent=e?e.label:Fe[t.id].name;let i=Ot("lookat-sub"),s=Ot("lookat-pips");if(i.classList.remove("ready"),s.replaceChildren(),s.classList.remove("ripe"),e){for(let r=1;r<=3;r++){let o=document.createElement("i");r<=e.stage&&(o.className="on"),s.appendChild(o)}s.classList.toggle("ripe",!!e.ripe),e.crop?i.textContent=e.ripe?`${e.name} \u2014 ready to harvest!`:`${e.name} (stage ${e.stage}/3) \u2014 not ready yet`:i.textContent=`${e.name} (stage ${e.stage}/3)${e.ripe?" \u2014 fully grown":" \u2014 still growing"}`,i.classList.toggle("ready",!!e.ripe)}else{let r=Fe[t.id];i.textContent=r.tool?`Best tool: ${r.tool[0].toUpperCase()}${r.tool.slice(1)}`:""}}n.hidden=!1}function Xf(){let n=Mn.radius*16-4;Te.fog.near=n*.55,Te.fog.far=n}Xf();var Pw=new zt(13212276),Lw=new zt(1,1,1),lx=!1,_f=1,cx=0;function Nw(){let n=Math.min(.25,Math.max(0,us-cx));cx=us;let t=qt.lighting.levelAt(Math.floor(ze.position.x),Math.floor(ze.position.y),Math.floor(ze.position.z));return _f+=(i0(t)-_f)*Math.min(1,n*4),_f}function Dw(){let n=To.update(qi,ze.position,us),t=Nw();Tf.value.copy(n.tint),vi.sprite.color.copy(n.tint);let e=Sx.copy(n.tint).lerp(Lw,.35).multiplyScalar(.25+.75*t);_x.color.copy(e),yx.color.copy(e),Rf.color.copy(Pw).multiply(e),yi.material.color.copy(n.tint),Te.background=Te.background||new zt,Te.background.copy(n.sky).multiplyScalar(t),Te.fog.color.copy(Te.background);let i=ct.headInWater;i!==lx&&(lx=i,Ot("underwater").style.opacity=i?"1":"0"),i?(Te.fog.color.setRGB(.1*n.tint.r*t,.25*n.tint.g*t,.6*n.tint.b*t),Te.background.copy(Te.fog.color),Te.fog.near=1,Te.fog.far=22):Xf()}var qf=!1;function Wx(){return JSON.stringify({seed:Ff,edits:qt.serializeEdits(),legacyCaves:qt.serializeLegacy(),player:Sn?{x:Vs.x,y:Vs.y,z:Vs.z,yaw:0,pitch:0,flying:!1}:{x:ct.pos.x,y:ct.pos.y,z:ct.pos.z,yaw:ct.yaw,pitch:ct.pitch,flying:ct.flying},mode:ie?"creative":"survival",inventory:Me.serialize(),equipment:Me.serializeEquipment(),creativeHotbar:su,food:hn,saturation:mr,health:Sn?Ka:ri,spawnPoint:Vs,day:ja,drops:Un.serialize(),furnaces:Ao.serialize(),progress:{collected:[...Zn.collected],crafted:[...Zn.crafted],flags:[...Zn.flags]},slot:Ne,time:qi,radius:Mn.radius})}function Lo(){if(qf)return Promise.resolve();let n=Promise.resolve(Nf.save(Uf,Wx())).catch(()=>{});return qt.editsDirty=!1,n}function Xx(){for(let n of[...wo])zx(n);wx.flush()}setInterval(()=>{Oe&&Lo()},1e4);function $f(){qf||Sf||(Xx(),Nf.saveOnExit(Uf,Wx()))}window.addEventListener("beforeunload",$f);window.addEventListener("pagehide",$f);document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&$f()});var hx=performance.now(),ux=60,Yh=0,yf=0,Zh=75,qa=0,yo=0,dx=0,fx=0,Wi=0;function qx(n){requestAnimationFrame(qx);let t=Math.max(0,Math.min(.1,(n-hx)/1e3));if(hx=n,us+=t,Yh+=t,yf++,Yh>.5&&(ux=Math.round(yf/Yh),Yh=0,yf=0),il.sync({show:Oe&&!Ke&&!Sn&&!_r,screen:Ke,creative:ie,flying:ct.flying}),Oe&&(ct.speedMul=Ox()?nu.starvingSpeed:1,Dn.sprint=Mf&&Vf(),ct.update(t,Dn),Aw(t),Bf(t/sn.time.dayLengthSeconds),!ie)){let a=Math.hypot(ct.vel.x,ct.vel.z)>1,l={food:hn,saturation:mr,health:ri,regenTimer:dx,starveTimer:fx},c=bg(l,t,{moving:a,sprinting:Dn.sprint&&a,mining:Fn.left&&!!eu,maxHealth:Ka});({food:hn,saturation:mr,health:ri,regenTimer:dx,starveTimer:fx}=l),c.healed&&Io(),c.starved&&Of(c.starved,"You starved to death"),sl()}Cf.value=us%1e3,bx.update(t),wx.update(t),Ex.update(),(Oe||Ke)&&Ao.update(t),ds.tickFurnace();for(let[a,l]of vo)l.position.y=a.y+.5;_w(t),yo+=t,yo>=1&&(ef(qt,Math.floor(ct.pos.x/16),Math.floor(ct.pos.z/16),sn.plants.growthChunkRadius,yo*ff),pg(qt,Math.floor(ct.pos.x/16),Math.floor(ct.pos.z/16),sn.spread.chunkRadius,yo*ff),mg(qt,Math.floor(ct.pos.x/16),Math.floor(ct.pos.z/16),sn.plants.growthChunkRadius,yo*ff),yo=0),Un.update(t,ct.pos,a=>!ie&&!Sn&&Me.canFit(a.id,a.n),Tw),Mw(t),tw(us)&&(Ya.needsUpdate=!0),Mx();let e=ct.eye;dr.v+=(-140*dr.y-15*dr.v)*t,dr.y+=dr.v*t,ze.position.set(e.x,e.y+dr.y,e.z),ze.rotation.set(ct.pitch,ct.yaw,0);let i=Math.hypot(ct.vel.x,ct.vel.z);qa+=i*t*(ct.onGround?1.9:.4);let s=un.get("fov")+(Dn.sprint&&i>5?8:0)+(ct.flying&&i>12?8:0);Zh+=(s-Zh)*Math.min(1,8*t),Math.abs(ze.fov-Zh)>.01&&(ze.fov=Zh,ze.updateProjectionMatrix());let r=Math.sin(Xi*Math.PI);Wi+=((_i>0?1:0)-Wi)*Math.min(1,10*t);let o=Math.sin(us*26)*.015*Wi;if(Je.pivot?(uf.setFromEuler(Jg.set(-r*.62,r*.12,0)),ke.position.set(Je.pos[0]+Math.sin(qa)*.01,Je.pos[1]+Math.abs(Math.cos(qa))*.012,Je.pos[2]).sub(Kg.fromArray(Je.pivot)).applyQuaternion(uf).add(Kg),ke.position.x-=r*.1,ke.position.y+=r*.1,ke.position.z-=r*.16,ke.quaternion.setFromEuler(Jg.set(Je.rot[0],Je.rot[1],Je.rot[2])),Je.flip&&ke.quaternion.multiply(iw),ke.quaternion.premultiply(uf)):(ke.position.set(Je.pos[0]+Math.sin(qa)*.01-r*.1-Wi*.22,Je.pos[1]+Math.abs(Math.cos(qa))*.012-r*.14+Wi*.3+o,Je.pos[2]-r*.08+Wi*.2),ke.rotation.set(Je.rot[0]-r*.9+Wi*.5,Je.rot[1]+r*.25,Je.rot[2])),ke.scale.setScalar(Je.scale*(1-.35*Wi*Math.min(1,_i/sn.eating.seconds))),Wi>.05&&!Je.pivot&&(ke.rotation.z+=Math.sin(us*26)*.07*Wi),Mn.update(ct.pos.x,ct.pos.z,Oe?5:10),Iw(),xw(),cw.draw(ct.pos.x,ct.pos.z,ct.yaw,n),Cw(n),aw(t),Dw(),Eo.render(Te,ze),!Ot("debug").hidden){let a=Mn.collectStats();Ot("debug").textContent=`VoxelCraft  ${ux} fps  [${ie?"creative":"survival"}]
XYZ  ${ct.pos.x.toFixed(2)} / ${ct.pos.y.toFixed(2)} / ${ct.pos.z.toFixed(2)}
Chunk ${Math.floor(ct.pos.x/16)}, ${Math.floor(ct.pos.z/16)}   seed ${Ff}
Chunks ${a.chunks} (meshed ${a.meshed})  quads ${a.quads}  drops ${Un.items.length}
Time ${((qi*24+6)%24).toFixed(1)}h  ${ct.flying?"FLYING":ct.onGround?"ground":ct.inWater?"swimming":"air"}`}}requestAnimationFrame(qx);window.__vc={world:qt,player:ct,audio:oe,inventory:Me,drops:Un,ui:ds,progress:Zn,chunkRenderer:Mn,camera:ze,scene:Te,setPlaying:vn,selectSlot:So,setMode:Ux,get elapsed(){return us},POSES:hs,held:ke,furnaces:Ao,attachSim:Ex,worldId:Uf,quitToTitle:Nx,resumeGame:Lx,openScreen:ru,closeScreen:zf,tossStack:Kh,settings:un,options:Lf,growPlants:ef,get food(){return hn},set food(n){hn=n,el=-1,sl()},get creative(){return ie},REG:It,waterSim:bx,damage:Of,respawn:Cx,advanceTime:Bf,fallingTrees:wo,startTreeFall:kx,sky:To,get health(){return ri},set health(n){ri=n,Qa=-1,Io()},get dead(){return Sn},get playing(){return Oe},get screen(){return Ke},get dayTime(){return qi},set dayTime(n){qi=n},toggleDebug:()=>Ot("debug").hidden=!Ot("debug").hidden};Df.done();Yi?vn(!0):(oe.start(),vn(!0),Po(),tl=performance.now());
