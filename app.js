globalThis.__VOXELCRAFT_CONTENT__={"blocks":{"_comment":"Every block in the game. See data/README.md for the fields. ids must be unique (1-255) and never change once worlds exist.","blocks":[{"id":1,"key":"grass","name":"Grass Block","tiles":{"top":"grass_top","bottom":"dirt","side":"grass_side"},"hardness":1,"tool":"shovel","sound":"grass","creative":true,"tillsInto":"farmland","spreadsOnto":"dirt","loot":"grass"},{"id":2,"key":"dirt","name":"Dirt","tiles":{"top":"dirt","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","creative":true,"tillsInto":"farmland"},{"id":3,"key":"stone","name":"Stone","tiles":{"top":"stone","bottom":"stone","side":"stone"},"hardness":3,"tool":"pickaxe","need":1,"sound":"stone","creative":true,"loot":"stone"},{"id":4,"key":"sand","name":"Sand","tiles":{"top":"sand","bottom":"sand","side":"sand"},"hardness":0.9,"tool":"shovel","sound":"sand","creative":true,"gravity":true},{"id":5,"key":"log","name":"Oak Log","tiles":{"top":"log_top","bottom":"log_top","side":"log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":6,"key":"leaves","name":"Leaves","tiles":{"top":"leaves","bottom":"leaves","side":"leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"leaves","shatterLoot":"leaves_shatter","creative":true,"lightFilter":1},{"id":7,"key":"planks","name":"Oak Planks","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","creative":true,"fuel":15},{"id":8,"key":"water","name":"Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":7},"lightFilter":2},{"id":9,"key":"cobble","name":"Cobblestone","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":10,"key":"glass","name":"Glass","tiles":{"top":"glass","bottom":"glass","side":"glass"},"hardness":0.35,"sound":"glass","opaque":false,"loot":"glass","creative":true},{"id":11,"key":"brick","name":"Bricks","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":12,"key":"snow","name":"Snowy Grass","tiles":{"top":"snow_top","bottom":"dirt","side":"snow_side"},"hardness":0.7,"tool":"shovel","sound":"snow","loot":"snow","creative":true},{"id":13,"key":"coal_ore","name":"Coal Ore","tiles":{"top":"coal_ore","bottom":"coal_ore","side":"coal_ore"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","loot":"coal_ore","creative":true,"glow":0.22},{"id":14,"key":"iron_ore","name":"Iron Ore","tiles":{"top":"iron_ore","bottom":"iron_ore","side":"iron_ore"},"hardness":5,"tool":"pickaxe","need":2,"sound":"stone","creative":true,"glow":0.22},{"id":15,"key":"crafting","name":"Crafting Table","tiles":{"top":"crafting_top","bottom":"planks","side":"crafting_side"},"hardness":1.6,"tool":"axe","sound":"wood","opens":"table","creative":true},{"id":16,"key":"furnace","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","creative":true},{"id":17,"key":"farmland","name":"Dry Farmland","tiles":{"top":"farmland_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","creative":true,"hydration":{"wet":"farmland_wet","decay":{"into":"dirt","chancePerSecond":0.012}}},{"id":18,"key":"grass_s","name":"Short Grass","tiles":{"top":"grass_s","bottom":"grass_s","side":"grass_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.35,"growth":{"next":"grass_m","chancePerSecond":0.008333333333333333,"soil":"grass"},"stage":{"label":"Grass","step":1,"name":"Short"}},"loot":"grass_s"},{"id":19,"key":"grass_m","name":"Tall Grass","tiles":{"top":"grass_m","bottom":"grass_m","side":"grass_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.6,"growth":{"next":"grass_l","chancePerSecond":0.0058823529411764705,"soil":"grass"},"stage":{"label":"Grass","step":2,"name":"Tall"}},"loot":"grass_m"},{"id":20,"key":"grass_l","name":"Lush Grass","tiles":{"top":"grass_l","bottom":"grass_l","side":"grass_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.9,"stage":{"label":"Grass","step":3,"name":"Lush","ripe":true},"spreads":{"block":"grass_s","chancePerSecond":0.002,"onto":"grass","range":2}},"loot":"grass_l"},{"id":21,"key":"wheat_s","name":"Wheat Sprout","tiles":{"top":"wheat_s","bottom":"wheat_s","side":"wheat_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.3,"growth":{"next":"wheat_m","chancePerSecond":0.025,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":1,"name":"Sprout","crop":true}},"loot":"wheat_s"},{"id":22,"key":"wheat_m","name":"Young Wheat","tiles":{"top":"wheat_m","bottom":"wheat_m","side":"wheat_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.6,"growth":{"next":"wheat_l","chancePerSecond":0.01818181818181818,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":2,"name":"Growing","crop":true}},"loot":"wheat_m"},{"id":23,"key":"wheat_l","name":"Ripe Wheat","tiles":{"top":"wheat_l","bottom":"wheat_l","side":"wheat_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.9,"stage":{"label":"Wheat","step":3,"name":"Ripe","ripe":true,"crop":true}},"loot":"wheat_l"},{"id":24,"key":"flow1","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":1},"lightFilter":2},{"id":25,"key":"flow2","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":2},"lightFilter":2},{"id":26,"key":"flow3","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":3},"lightFilter":2},{"id":27,"key":"flow4","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":4},"lightFilter":2},{"id":28,"key":"flow5","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":5},"lightFilter":2},{"id":29,"key":"flow6","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":6},"lightFilter":2},{"id":30,"key":"farmland_wet","name":"Moist Farmland","tiles":{"top":"farmland_wet_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","hydration":{"dry":"farmland"}},{"id":31,"key":"torch_floor","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75},"support":[0,-1,0]},{"id":32,"key":"torch_e","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[1,0]},"support":[-1,0,0]},{"id":33,"key":"torch_w","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[-1,0]},"support":[1,0,0]},{"id":34,"key":"torch_s","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,1]},"support":[0,0,-1]},{"id":35,"key":"torch_n","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,-1]},"support":[0,0,1]},{"id":36,"key":"furnace_lit","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side_lit"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","light":13},{"id":37,"key":"birch_log","name":"Birch Log","tiles":{"top":"birch_log_top","bottom":"birch_log_top","side":"birch_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":38,"key":"spruce_log","name":"Spruce Log","tiles":{"top":"spruce_log_top","bottom":"spruce_log_top","side":"spruce_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":39,"key":"birch_leaves","name":"Birch Leaves","tiles":{"top":"birch_leaves","bottom":"birch_leaves","side":"birch_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"birch_leaves","shatterLoot":"birch_leaves_shatter","creative":true,"lightFilter":1},{"id":40,"key":"spruce_leaves","name":"Spruce Leaves","tiles":{"top":"spruce_leaves","bottom":"spruce_leaves","side":"spruce_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"spruce_leaves","shatterLoot":"spruce_leaves_shatter","creative":true,"lightFilter":1},{"id":41,"key":"apple_leaves","name":"Apple Tree Leaves","tiles":{"top":"apple_leaves","bottom":"apple_leaves","side":"apple_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"apple_leaves","shatterLoot":"apple_leaves_shatter","creative":true,"lightFilter":1},{"id":42,"key":"young_oak","name":"Oak Sapling","tiles":{"top":"young_oak","bottom":"young_oak","side":"young_oak"},"hardness":0.04,"sound":"grass","loot":"young_oak","plant":{"kind":"cross","height":0.7,"grows":{"trees":["oak","oak","oak","tall_oak","bush"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Oak Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":43,"key":"young_birch","name":"Birch Sapling","tiles":{"top":"young_birch","bottom":"young_birch","side":"young_birch"},"hardness":0.04,"sound":"grass","loot":"young_birch","plant":{"kind":"cross","height":0.7,"grows":{"trees":["birch"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Birch Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":44,"key":"young_spruce","name":"Spruce Sapling","tiles":{"top":"young_spruce","bottom":"young_spruce","side":"young_spruce"},"hardness":0.04,"sound":"grass","loot":"young_spruce","plant":{"kind":"cross","height":0.7,"grows":{"trees":["spruce"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Spruce Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":45,"key":"young_apple","name":"Apple Sapling","tiles":{"top":"young_apple","bottom":"young_apple","side":"young_apple"},"hardness":0.04,"sound":"grass","loot":"young_apple","plant":{"kind":"cross","height":0.7,"grows":{"trees":["apple"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Apple Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}}]},"items":{"_comment":"Non-block items (blocks are items automatically). Tools reference a tier below. ids must not clash with any block id.","tiers":{"wood":{"level":1,"speed":2,"durability":30,"head":"wood"},"stone":{"level":2,"speed":3.5,"durability":66,"head":"stone"},"iron":{"level":3,"speed":5.5,"durability":125,"head":"iron"}},"items":[{"id":100,"key":"stick","name":"Stick","fuel":5},{"id":101,"key":"coal","name":"Coal","fuel":80},{"id":102,"key":"iron_ingot","name":"Iron Ingot"},{"id":103,"key":"wheat_seeds","name":"Wheat Seeds","plants":{"block":"wheat_s","on":["farmland","farmland_wet"]}},{"id":104,"key":"wheat","name":"Wheat"},{"id":105,"key":"bread","name":"Bread","food":6,"saturation":7.2},{"id":106,"key":"charcoal","name":"Charcoal","fuel":80},{"id":107,"key":"apple","name":"Apple","food":4,"saturation":2.4},{"id":108,"key":"raw_iron","name":"Raw Iron"},{"id":110,"key":"wood_pickaxe","name":"Wooden Pickaxe","tool":{"type":"pickaxe","tier":"wood"}},{"id":111,"key":"wood_axe","name":"Wooden Axe","tool":{"type":"axe","tier":"wood"}},{"id":112,"key":"wood_shovel","name":"Wooden Shovel","tool":{"type":"shovel","tier":"wood"}},{"id":113,"key":"stone_pickaxe","name":"Stone Pickaxe","tool":{"type":"pickaxe","tier":"stone"}},{"id":114,"key":"stone_axe","name":"Stone Axe","tool":{"type":"axe","tier":"stone"}},{"id":115,"key":"stone_shovel","name":"Stone Shovel","tool":{"type":"shovel","tier":"stone"}},{"id":116,"key":"iron_pickaxe","name":"Iron Pickaxe","tool":{"type":"pickaxe","tier":"iron"}},{"id":117,"key":"iron_axe","name":"Iron Axe","tool":{"type":"axe","tier":"iron"}},{"id":118,"key":"iron_shovel","name":"Iron Shovel","tool":{"type":"shovel","tier":"iron"}},{"id":119,"key":"wood_hoe","name":"Wooden Hoe","tool":{"type":"hoe","tier":"wood"}},{"id":120,"key":"stone_hoe","name":"Stone Hoe","tool":{"type":"hoe","tier":"stone"}},{"id":121,"key":"iron_hoe","name":"Iron Hoe","tool":{"type":"hoe","tier":"iron"}},{"id":122,"key":"torch","name":"Torch","creative":true,"places":{"up":"torch_floor","east":"torch_e","west":"torch_w","south":"torch_s","north":"torch_n"},"offhand":true},{"id":123,"key":"iron_helmet","name":"Iron Helmet","stack":1,"equip":{"slot":"helmet","armor":2}},{"id":124,"key":"iron_chestplate","name":"Iron Chestplate","stack":1,"equip":{"slot":"chestplate","armor":6}},{"id":125,"key":"iron_leggings","name":"Iron Leggings","stack":1,"equip":{"slot":"leggings","armor":5}},{"id":126,"key":"iron_boots","name":"Iron Boots","stack":1,"equip":{"slot":"boots","armor":2}},{"id":127,"key":"iron_shield","name":"Iron Shield","stack":1,"equip":{"slot":"shield","armor":2}},{"id":128,"key":"backpack","name":"Backpack","stack":1,"equip":{"slot":"backpack","slots":9}},{"id":129,"key":"quiver","name":"Quiver","stack":1,"equip":{"slot":"quiver"}},{"id":130,"key":"oak_sapling","name":"Oak Sapling","plants":{"block":"young_oak","on":["grass","dirt"]}},{"id":131,"key":"birch_sapling","name":"Birch Sapling","plants":{"block":"young_birch","on":["grass","dirt"]}},{"id":132,"key":"spruce_sapling","name":"Spruce Sapling","plants":{"block":"young_spruce","on":["grass","dirt"]}},{"id":133,"key":"apple_sapling","name":"Apple Sapling","plants":{"block":"young_apple","on":["grass","dirt"]}}]},"loot":{"_comment":"Loot tables. A block with no table (see \"loot\" in blocks.json) drops itself. entry: { item, chance (0-1, default 1), count (number or [min,max], default 1) }. An empty list drops nothing.","tables":{"grass":[{"item":"dirt"}],"snow":[{"item":"dirt"}],"farmland":[{"item":"dirt"}],"stone":[{"item":"cobble"}],"coal_ore":[{"item":"coal"}],"glass":[],"leaves":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"leaves_shatter":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"grass_s":[{"item":"wheat_seeds","chance":0.1}],"grass_m":[{"item":"wheat_seeds","chance":0.16}],"grass_l":[{"item":"wheat_seeds","chance":0.28}],"wheat_s":[{"item":"wheat_seeds"}],"wheat_m":[{"item":"wheat_seeds"}],"wheat_l":[{"item":"wheat"},{"item":"wheat_seeds"},{"item":"wheat_seeds","chance":0.5}],"iron_ore":[{"item":"raw_iron"}],"torch_floor":[{"item":"torch"}],"furnace_lit":[{"item":"furnace"}],"apple_leaves":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"apple_leaves_shatter":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"birch_leaves":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"birch_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"spruce_leaves":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"spruce_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"young_oak":[{"item":"oak_sapling"}],"young_birch":[{"item":"birch_sapling"}],"young_spruce":[{"item":"spruce_sapling"}],"young_apple":[{"item":"apple_sapling"}]}},"recipes":{"_comment":"Crafting recipes. in: [item, count] or [\"@group\", count] for any item of a group. at: the station (omit for by-hand). smelting: what a furnace turns one item into (seconds to cook one). Fuel burn times are \"fuel\" (seconds) on items and blocks.","groups":{"coals":["charcoal","coal"],"logs":["log","birch_log","spruce_log"]},"stations":{"table":{"label":"Crafting Table"}},"windows":{"hand":{"title":"Crafting","stations":[null]},"table":{"title":"Crafting Table","stations":[null,"table"]},"furnace":{"title":"Furnace","furnace":true}},"recipes":[{"out":"planks","n":4,"in":[["@logs",1]]},{"out":"stick","n":4,"in":[["planks",2]]},{"out":"crafting","n":1,"in":[["planks",4]]},{"out":"bread","n":1,"in":[["wheat",3]]},{"out":"wood_pickaxe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_axe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_shovel","n":1,"in":[["planks",1],["stick",2]],"at":"table"},{"out":"stone_pickaxe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_axe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_shovel","n":1,"in":[["cobble",1],["stick",2]],"at":"table"},{"out":"iron_pickaxe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_axe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_shovel","n":1,"in":[["iron_ingot",1],["stick",2]],"at":"table"},{"out":"wood_hoe","n":1,"in":[["planks",2],["stick",2]],"at":"table"},{"out":"stone_hoe","n":1,"in":[["cobble",2],["stick",2]],"at":"table"},{"out":"iron_hoe","n":1,"in":[["iron_ingot",2],["stick",2]],"at":"table"},{"out":"furnace","n":1,"in":[["cobble",8]],"at":"table"},{"out":"brick","n":4,"in":[["cobble",4]],"at":"table"},{"out":"torch","n":4,"in":[["@coals",1],["stick",1]]},{"out":"iron_helmet","n":1,"in":[["iron_ingot",5]],"at":"table"},{"out":"iron_chestplate","n":1,"in":[["iron_ingot",8]],"at":"table"},{"out":"iron_leggings","n":1,"in":[["iron_ingot",7]],"at":"table"},{"out":"iron_boots","n":1,"in":[["iron_ingot",4]],"at":"table"},{"out":"iron_shield","n":1,"in":[["iron_ingot",1],["planks",6]],"at":"table"},{"out":"backpack","n":1,"in":[["wheat",6],["stick",2]],"at":"table"},{"out":"quiver","n":1,"in":[["planks",3],["stick",3]],"at":"table"}],"smelting":[{"in":"raw_iron","out":"iron_ingot","seconds":10},{"in":"sand","out":"glass","seconds":8},{"in":"cobble","out":"stone","seconds":8},{"in":"log","out":"charcoal","seconds":10},{"in":"birch_log","out":"charcoal","seconds":10},{"in":"spruce_log","out":"charcoal","seconds":10}]},"goals":{"_comment":"The goals shown in the HUD, in order. Conditions: { collected: item } | { collectedAny: [items] } | { crafted: item } | { craftedAny: [items] } | { flag: \"tilled\" | \"planted\" | \"ate\" }.","goals":[{"text":"Punch a tree to collect Wood","collectedAny":["log","birch_log","spruce_log"]},{"text":"Craft Planks","crafted":"planks"},{"text":"Craft a Crafting Table","crafted":"crafting"},{"text":"Craft a Wooden Pickaxe","crafted":"wood_pickaxe"},{"text":"Mine Cobblestone","collected":"cobble"},{"text":"Craft a Stone Pickaxe","crafted":"stone_pickaxe"},{"text":"Craft a Hoe","craftedAny":["wood_hoe","stone_hoe","iron_hoe"]},{"text":"Find Wheat Seeds in the tall grass","collected":"wheat_seeds"},{"text":"Till soil within 4 blocks of water","flag":"tilled"},{"text":"Plant Wheat Seeds on farmland","flag":"planted"},{"text":"Harvest ripe Wheat","collected":"wheat"},{"text":"Bake Bread and eat it","flag":"ate"},{"text":"Find Coal","collected":"coal"},{"text":"Craft a Furnace","crafted":"furnace"},{"text":"Mine Iron Ore","collected":"raw_iron"},{"text":"Smelt an Iron Ingot","crafted":"iron_ingot"},{"text":"Craft an Iron Pickaxe","crafted":"iron_pickaxe"},{"text":"Forge a piece of Iron Armor","craftedAny":["iron_helmet","iron_chestplate","iron_leggings","iron_boots","iron_shield"]},{"text":"Wear a piece of equipment","flag":"equipped"}]},"textures":{"_comment":"Textures. tiles: block faces, in atlas order. Each tile is { type, ...params }; types: noise, capped, bark, rings, planks, cells, waves, bricks, ore, stripes, blades, stalks, pixelart (palette + rows, \".\" = transparent), image (a PNG next to this file), layers (stack of the others), ref (reuse another tile). sprites: item icons; tools are drawn automatically from their type and tier.","tiles":{"grass_top":{"type":"noise","base":[96,160,54],"noise":[{"cells":4,"amp":36}],"jitter":22,"channels":[0.6,1,0.4],"specks":{"dark":{"chance":0.07,"amount":-26},"light":{"chance":0.07,"amount":22}}},"grass_side":{"type":"capped","cap":"grass_top","body":"dirt","depth":{"min":3,"bonus":[{"chance":0.5,"amount":1},{"chance":0.25,"amount":2}]}},"dirt":{"type":"noise","base":[136,98,68],"noise":[{"cells":4,"amp":34}],"jitter":16,"channels":[1,0.8,0.6],"specks":{"dark":{"chance":0.06,"amount":-34},"light":{"chance":0.05,"amount":26}}},"stone":{"type":"noise","base":[128,128,130],"noise":[{"cells":4,"amp":38},{"cells":8,"amp":22}],"jitter":10,"specks":{"dark":{"chance":0.04,"amount":-24}}},"sand":{"type":"noise","base":[222,208,160],"noise":[{"cells":4,"amp":20}],"jitter":12,"channels":[1,1,1.1],"specks":{"dark":{"chance":0.05,"amount":-16}}},"log_side":{"type":"bark","base":[104,82,50],"channels":[1,0.8,0.6],"columnVariance":22,"jitter":12,"grooveEvery":4,"grooveDarken":22,"speckChance":0.04,"speckDarken":20},"log_top":{"type":"rings","bark":[96,74,44],"barkWidth":1.6,"light":[170,136,84],"dark":[140,108,62],"ringScale":0.9,"jitter":12},"leaves":{"type":"noise","base":[52,122,38],"noise":[{"cells":4,"amp":50}],"jitter":24,"channels":[0.5,1,0.4],"holes":0.16},"planks":{"type":"planks","base":[178,142,88],"channels":[1,0.9,0.7],"boardHeight":4,"boardVariance":22,"jitter":10,"gapDarken":38,"seamDarken":30,"grainChance":0.07,"grainDarken":14},"cobble":{"type":"cells","base":[124,124,126],"points":9,"spread":44,"jitter":12,"creviceWidth":1.25,"creviceValue":-52},"water":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":0},"glass":{"type":"pixelart","palette":{"#":[210,238,245],"w":[255,255,255]},"rows":["################","#..............#","#..w...........#","#..ww.......w..#","#...ww.....w...#","#....ww........#","#.....w........#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","################"]},"brick":{"type":"bricks","brick":[150,64,50],"mortar":[186,180,168],"brickWidth":8,"rowHeight":4,"variance":22},"snow_top":{"type":"noise","base":[244,248,255],"noise":[],"jitter":14,"channels":[0.4,0.4,0]},"snow_side":{"type":"capped","cap":"snow_top","body":"dirt","depth":{"min":4,"bonus":[{"chance":0.5,"amount":1},{"chance":0.3,"amount":2}]}},"coal_ore":{"type":"ore","base":"stone","color":[26,26,30],"light":[112,112,126],"clusters":7},"iron_ore":{"type":"ore","base":"stone","color":[206,150,120],"light":[236,196,168],"clusters":7},"crafting_top":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[96,66,38]},"rows":["################","################","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","################","################"]}]},"crafting_side":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[84,58,32],"s":[200,200,205],"h":[120,120,128],"w":[150,108,60]},"rows":["################","################","################","################","++++++++++++++++","................",".........hhhh...","...sss...hhhh...","...s.s....w.....","...s.s....w.....","...sss....w.....","....s.....w.....","....s.....w.....","................","................","................"]}]},"furnace_top":{"type":"noise","base":[104,104,108],"noise":[],"jitter":14,"edge":{"width":1,"amount":-34}},"furnace_side":{"type":"layers","layers":[{"type":"ref","tile":"cobble"},{"type":"pixelart","palette":{"d":[26,24,26],"r":[140,52,20],"G":[226,120,30],"v":[34,32,34]},"rows":["................","................","................",".....vvvvvv.....",".....vvvvvv.....","................","................","....dddddddd....","....dddddddd....","....dddddddd....","....dddddddd....","....rrrrrrrr....","....GGGGGGGG....","....GGGGGGGG....","................","................"]}]},"farmland_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[146,110,74],"dark":[108,80,54],"jitter":16},"grass_s":{"type":"blades","count":6,"minHeight":3,"maxHeight":6,"dark":[52,118,38],"mid":[80,156,50],"tip":[118,190,72]},"grass_m":{"type":"blades","count":8,"minHeight":6,"maxHeight":10,"dark":[50,112,36],"mid":[82,160,52],"tip":[124,196,76]},"grass_l":{"type":"blades","count":10,"minHeight":9,"maxHeight":14,"dark":[46,106,34],"mid":[80,158,50],"tip":[128,200,80]},"wheat_s":{"type":"blades","count":8,"minHeight":3,"maxHeight":5,"dark":[70,150,50],"mid":[96,178,60],"tip":[130,205,80]},"wheat_m":{"type":"blades","count":8,"minHeight":7,"maxHeight":10,"dark":[84,150,50],"mid":[130,178,62],"tip":[176,196,84]},"wheat_l":{"type":"stalks","spacing":2,"minHeight":11,"maxHeight":14,"stem":[176,158,66],"headLength":4,"headLight":[236,200,90],"headDark":[214,168,52]},"farmland_wet_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[72,48,33],"dark":[36,24,18],"jitter":12},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................",".......ff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"furnace_side_lit":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOOORR....","....ROYYYYOR....","....OYYYYYYO....","....OOYYYYOO....","....OOOOOOOO....","................","................"]}]},"birch_log_side":{"type":"layers","layers":[{"type":"bark","base":[226,222,208],"channels":[1,1,1],"columnVariance":8,"jitter":8,"grooveEvery":5,"grooveDarken":10,"speckChance":0.02,"speckDarken":12},{"type":"pixelart","palette":{"d":[44,42,40],"e":[92,88,80]},"rows":["..dd............",".........ee.....","................","....ddd.....dd..","................",".ee.............","........dd......","................","..dd......ee....","................",".....ddd........","...........dd...","................","ee......dd......","................",".....dd........."]}]},"birch_log_top":{"type":"rings","bark":[226,222,208],"barkWidth":1.6,"light":[222,208,166],"dark":[196,180,134],"ringScale":0.9,"jitter":10},"spruce_log_side":{"type":"bark","base":[66,50,34],"channels":[1,0.85,0.7],"columnVariance":20,"jitter":12,"grooveEvery":3,"grooveDarken":26,"speckChance":0.05,"speckDarken":20},"spruce_log_top":{"type":"rings","bark":[62,46,30],"barkWidth":1.6,"light":[150,116,74],"dark":[124,92,56],"ringScale":0.9,"jitter":12},"birch_leaves":{"type":"noise","base":[108,156,52],"noise":[{"cells":4,"amp":46}],"jitter":22,"channels":[0.7,1,0.4],"holes":0.16},"spruce_leaves":{"type":"noise","base":[30,84,58],"noise":[{"cells":4,"amp":40}],"jitter":20,"channels":[0.35,0.9,0.5],"holes":0.14},"apple_leaves":{"type":"layers","layers":[{"type":"ref","tile":"leaves"},{"type":"pixelart","palette":{"r":[212,40,40],"h":[255,130,120]},"rows":["................","................","...rr...........","...rh.....rr....","................","................",".......rr.......",".......rh.......","................",".rr.............",".rh......rr.....",".........rh.....","................",".....rr.........",".....rh.........","................"]}]},"young_oak":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_birch":{"type":"pixelart","palette":{"g":[86,138,40],"G":[140,190,80],"S":[226,222,208]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_spruce":{"type":"pixelart","palette":{"g":[26,74,50],"G":[50,120,80],"S":[84,60,38]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_apple":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46],"r":[212,40,40]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGrgGGg....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"furnace_side_lit_b":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RRYOOORR....","....ROOYYYOR....","....OYYYYOOO....","....OOYYYYYO....","....OOOOOOOO....","................","................"]}]},"furnace_side_lit_c":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOYORR....","....RYYOOYOR....","....OOYYYYYO....","....OYYYOOOO....","....OOOOOOOO....","................","................"]}]},"torch_b":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................","......fff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"torch_c":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......f........",".......ff.......","......FFF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"water_b":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":0.7854},"water_c":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":1.5708},"water_d":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":2.3562},"water_e":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":3.1416},"water_f":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":3.927},"water_g":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":4.7124},"water_h":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":5.4978}},"toolHeads":{"wood":{"light":[204,162,104],"base":[166,124,72],"dark":[108,76,42]},"stone":{"light":[178,178,180],"base":[132,132,136],"dark":[78,78,84]},"iron":{"light":[244,244,248],"base":[208,208,214],"dark":[132,132,144]}},"toolHandle":[[148,108,58],[104,74,38]],"sprites":{"stick":{"type":"pixelart","palette":{"#":[104,74,38],"@":[148,108,58]},"rows":["................","................","................","............@...","...........#....","..........@.....",".........#......","........@.......",".......#........","......@.........",".....#..........","....@...........","...#............","................","................","................"]},"coal":{"type":"pixelart","palette":{"#":[18,18,22],"@":[40,40,46],"%":[86,86,96]},"rows":["................","................","................","................",".....#####......","....##@@@@##....","...##%%@@@@##...","...#@@@@@@@@#...","..##@@%@@@@@#...","..##%@@%%@%@#...","...#%%@@%@@@#...","...##@@@%%@#....",".....#@@@@##....",".....#.###......","................","................"]},"charcoal":{"type":"pixelart","palette":{"#":[32,24,20],"@":[66,50,40],"%":[112,88,66]},"rows":["................","................","................","................","......##........","....##@@@@##....","...##@@@@@@##...","..##%@%@@@@@#...","...#@@@@@%%@#...","...#@@@%@@@@#...","...#@@@@@%@@#...","...##@@@%@%##...","....##@@@@#.....",".....#.##.......","................","................"]},"iron_ingot":{"type":"pixelart","palette":{"#":[140,140,152],"@":[246,246,250],"%":[208,208,216]},"rows":["................","................","................","................","................","................",".......#@@@@@@#.","......#@@@@@@#..",".....#%%%%%%#...","....#%%%%%%#....","...#%%%%%%#.....","..########......","................","................","................","................"]},"wheat_seeds":{"type":"pixelart","palette":{"#":[158,176,84],"@":[96,112,48],"%":[74,92,40]},"rows":["................","................","................",".......#%.......",".......%%#%.....","....#@...%%.....","....@@..........","................","......#@...#%...","......@@...%%...","................","...#@...........","...@@...#%..#@..","........%%..@@..","................","................"]},"wheat":{"type":"pixelart","palette":{"#":[173,153,62],"@":[175,155,62],"%":[165,145,62],"&":[172,152,62],"$":[163,143,62],"*":[174,154,62],"+":[169,149,62],"=":[239,197,80],"~":[213,167,50],"^":[227,185,74],":":[201,155,50],";":[237,195,79],"-":[211,165,50],"_":[236,194,78],"<":[210,164,50],">":[235,193,77],"|":[209,163,50],"!":[161,141,62],"?":[166,146,62],"a":[177,157,62],"b":[223,181,72],"c":[197,151,50],"d":[227,185,73],"e":[228,186,74],"f":[202,156,50],"g":[225,183,73],"h":[199,153,50],"i":[179,159,62],"j":[162,142,62],"k":[176,156,62],"l":[167,147,62],"m":[168,148,62],"n":[230,188,75],"o":[204,158,50],"p":[239,197,79]},"rows":["................","................","...>|...gh.._<..","..._<...ef..p~..","...;-...d:..d:..","....^:..;-..no..","....=~..bc..ef..","....+...?...i...","....*...*...m...","....&...@..l....","....$...?..k....",".....&..a..j....",".....%..?..%....",".....@..+..i....",".....#..!..+....","................"]},"bread":{"type":"pixelart","palette":{"#":[128,82,36],"@":[214,156,76],"%":[150,96,44],"&":[176,118,52]},"rows":["................","................","................","................","................","...##@@@@@#.....","..#@@%@@%@@%#...","..&&&&&&&@@%@@..","..&&&&&&&&&&&&#.","..#&&&&&&&&&&&&.","...&&&&&&&&&&&&.","....#&&&&&&&&&#.","......#&&&&&##..","................","................","................"]},"apple":{"type":"pixelart","palette":{"r":[150,20,24],"R":[214,40,44],"w":[255,205,205],"s":[100,70,38],"g":[70,150,50]},"rows":["................","..........gg....","......s..ggg....","......s....g....","....rrr.rrr.....","...rRRRrRRRr....","..rRwRRRRRRRr...","..rRwRRRRRRRr...","..rRRRRRRRRRr...","..rRRRRRRRRRr...","...rRRRRRRRr....","...rrRRRRRrr....","....rrRRRrr.....",".....rrrr.......","................","................"]},"raw_iron":{"type":"pixelart","palette":{"#":[96,62,48],"@":[206,150,120],"%":[240,200,172]},"rows":["................","................","................","................",".....#####......","....##@@%@##....","...##@@@@@@@#...","...#@@%%@@@@#...","..##@@@@@%@@##..","..#@%@@@@@@@@#..","..##@@@%@@@@##..","...#@@@@@%@@#...","....##@@@@##....",".....######.....","................","................"]},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......ff.......","......ffFf......","......fFFF......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......","................"]},"iron_helmet":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","....########....","...#@@@@%%%%#...","..#@@@%%oo%%%#..","..#@@%%%ooo%%#..","..#@%%%%oooo%#..","..#@%%%%oooo%#..","..#@%%####oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oox#..#xoo#..","..####....####..","................","................","................"]},"iron_chestplate":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..####....####..",".#@@%#....#o%%#.",".#@%%o####ooo%#.",".#@%%%o##oooo%#.",".#@%%%%oooooo%#.",".#@%%%%oooooo%#.",".#@@%%%ooooo%%#.","..#@%%%ooooo%#..","..#@%%%ooooo%#..","..##@%%oooo%##..","...##@%ooo%##...","....##oooo##....",".....######.....","................","................"]},"iron_leggings":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..############..","..#@@%%%ooo%%#..","..#@%%%ooooo%#..","..#@%%####oo%#..","..#@%%#..#oo%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oxx#..#xxo#..","..#oxx#..#xxo#..","..####....####..","................","................","................","................"]},"iron_boots":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","..###......###..","..#@%#....#o%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#@%o####oo%#..","..#@%%%ooooo%#..",".#@%%%%oooooo%#.",".#%%oooooooooo#.",".#oxxxxxxxxxxo#.",".####......####.","................","................","................","................"]},"iron_shield":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114],"g":[150,106,58],"G":[190,142,84]},"rows":["................","..############..",".#@@@@@%o%%%%%#.",".#@%%%%%ooooo%#.",".#@%ggggggggo%#.",".#@%gGGGGGGgo%#.",".#@%ggggggggo%#.",".#@%%%%%ooooo%#.","..#@%%%ooooo%#..","..#@%%oooooo%#..","...#%%oooooo#...","...#@oooooo%#...","....#oooooo#....",".....#xxxx#.....","......####......","................"]},"backpack":{"type":"pixelart","palette":{"#":[50,34,22],"g":[170,120,70],"G":[204,154,94],"x":[112,78,46],"y":[236,204,84]},"rows":["................","....########....","...#gggGGggg#...","..#ggGGGGGGgg#..","..#gGGGGGGGGg#..","..#gGgGGGGgGg#..","..#gggGGGGggg#..","..#gGyGGGGyGg#..","..#gGgGGGGgGg#..","..#ggGGGGGGgg#..","..#gggggggggg#..","..#xxxxxxxxxx#..","..############..","................","................","................"]},"quiver":{"type":"pixelart","palette":{"#":[50,34,22],"g":[150,106,58],"G":[186,138,80],"r":[92,62,36],"f":[244,244,244],"|":[150,120,80]},"rows":["................",".....f..f..f....",".....|..|..|....","....#########...","....#gGgGgGgG#..","....#gGgGgGgG#..","....#gGggGgGg#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....#rrrrrrrr#..","....#gGgGgGgG#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....##########..","................","................"]},"oak_sapling":{"type":"ref","tile":"young_oak"},"birch_sapling":{"type":"ref","tile":"young_birch"},"spruce_sapling":{"type":"ref","tile":"young_spruce"},"apple_sapling":{"type":"ref","tile":"young_apple"}},"animations":{"_comment":"Tiles that flicker: the engine swaps these frames into the texture atlas at the given speed (frames per second). The first frame is the tile itself.","furnace_side_lit":{"frames":["furnace_side_lit","furnace_side_lit_b","furnace_side_lit_c"],"fps":7},"torch":{"frames":["torch","torch_b","torch_c"],"fps":8},"water":{"frames":["water","water_b","water_c","water_d","water_e","water_f","water_g","water_h"],"fps":6}}},"sounds":{"_comment":"Block sound materials. Each is a stack of layers played together: filtered noise and/or swept tones. A block picks one with \"sound\". Phases scale loudness and length.","phases":{"break":{"loud":1,"length":0.16},"place":{"loud":0.8,"length":0.16},"tick":{"loud":0.35,"length":0.05},"step":{"loud":0.22,"length":0.07}},"materials":{"default":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"stone":[{"type":"noise","filter":"bandpass","freq":1900,"q":1.2,"gain":0.55},{"type":"tone","from":160,"to":70,"gain":0.3,"lengthScale":1.2}],"wood":[{"type":"noise","filter":"bandpass","freq":700,"q":2,"gain":0.4},{"type":"tone","from":260,"to":110,"gain":0.45,"wave":"triangle","lengthScale":1.4}],"glass":[{"type":"noise","filter":"highpass","freq":4500,"q":1,"gain":0.3},{"type":"tone","from":2600,"to":2340,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":3900,"to":3510,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":5200,"to":4680,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03}],"sand":[{"type":"noise","filter":"highpass","freq":1800,"q":0.5,"gain":0.35,"lengthScale":1.3}],"leaves":[{"type":"noise","filter":"highpass","freq":3000,"q":0.4,"gain":0.28,"lengthScale":1.2}],"snow":[{"type":"noise","filter":"lowpass","freq":1500,"q":0.6,"gain":0.4,"lengthScale":1.4}],"water":[{"type":"noise","filter":"bandpass","freq":900,"q":0.8,"gain":0.35,"seconds":0.3}],"grass":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"dirt":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}]}},"worldgen":{"_comment":"Terrain, ores, caves, trees and ground cover. Block names refer to blocks.json keys. Ores: minY is inclusive, maxY exclusive. beachAboveSea: columns at most this far above the sea are beach.","seaLevel":22,"snowLine":44,"blocks":{"sea":"water","stone":"stone","surface":"grass","filler":"dirt","fillerDepth":3,"beach":"sand","beachFiller":"sand","snowSurface":"snow","snowFiller":"stone"},"terrain":{"continentScale":0.0045,"continentHeight":22,"hillScale":0.014,"hillHeight":7,"ridgeScale":0.011,"ridgeHeight":24,"baseAboveSea":5},"rivers":{"scale":0.0065,"coreWidth":0.016,"bankWidth":0.07,"warp":14,"lowlandFrom":8,"lowlandTo":20,"bedBelowSea":2},"caves":{"scale":[0.045,0.07,0.045],"threshold":0.1,"minY":3,"surfaceDepth":4,"caverns":{"scale":[0.022,0.04,0.022],"threshold":0.4,"minY":4,"maxY":34,"surfaceDepth":6},"entrances":{"scale":0.035,"threshold":0.25}},"ores":[{"block":"iron_ore","scale":0.16,"offset":[40,7,-20],"threshold":0.6,"minY":3,"maxY":36},{"block":"coal_ore","scale":0.14,"offset":[5,0,9],"threshold":0.56,"minY":0,"maxY":64}],"trees":{"_comment":"Trees: every spot that grows a tree picks one variant, weighted by \"weight\" among those whose \"heights\" range (terrain height) fits. shape: round (the classic ball of leaves), tall (a big crown on a long trunk), cone (a spruce) or bush (a low shrub). Saplings grow into these by key (blocks.json plant.grows).","baseDensity":0.003,"forestDensity":0.05,"minAboveSea":2,"belowSnowLine":2,"variants":[{"key":"oak","weight":6,"heights":[24,99],"shape":"round","trunk":[4,6],"log":"log","leaves":"leaves"},{"key":"apple","weight":1.2,"heights":[24,36],"shape":"round","trunk":[3,5],"log":"log","leaves":"apple_leaves"},{"key":"birch","weight":3,"heights":[25,40],"shape":"round","trunk":[5,7],"log":"birch_log","leaves":"birch_leaves"},{"key":"spruce","weight":4,"heights":[30,99],"shape":"cone","trunk":[6,9],"log":"spruce_log","leaves":"spruce_leaves"},{"key":"tall_oak","weight":1,"heights":[24,38],"shape":"tall","trunk":[8,11],"log":"log","leaves":"leaves"},{"key":"bush","weight":1.6,"heights":[24,99],"shape":"bush","trunk":[1,2],"log":"log","leaves":"leaves"}]},"groundCover":{"chance":0.24,"variants":[{"block":"grass_s","weight":0.45},{"block":"grass_m","weight":0.35},{"block":"grass_l","weight":0.2}]},"spawn":{"minTrees":3,"treeRadius":10,"waterRadius":28},"beachAboveSea":1},"game":{"_comment":"Survival rules and tuning numbers.","player":{"maxHealth":20,"maxFood":20,"reach":6,"lookAtReach":5},"hunger":{"drainPerSecond":0.03,"sprintDrainPerSecond":0.12,"jumpCost":0.05,"sprintJumpCost":0.1,"miningCost":0.05,"miningDrainPerSecond":0.06,"maxSaturation":20,"healEverySeconds":1.5,"saturationPerHeal":1,"emptySaturationCost":1,"respawnSaturation":5,"noSprintAtOrBelow":6,"starveEverySeconds":15,"starveDamage":1,"starvingSpeed":0.75},"eating":{"seconds":1.4},"fall":{"safeDistance":4,"damageOffset":3,"tolerance":0.05,"kick":1.3},"tilling":{"radius":4,"waterBelow":4,"waterAbove":1},"time":{"dayLengthSeconds":480,"startTime":0.08},"treeFall":{"mode":"shatter","leafReach":4},"creativeHotbar":["grass","dirt","stone","cobble","planks","log","glass","brick","sand"],"spread":{"chance":0.5,"samplesPerChunk":12,"chunkRadius":3},"plants":{"growthChunkRadius":4},"studio":{"_comment":"The developer logo screen at startup. Letters, digits, space and - . ! & ' only.","name":"Pixel Pilots Studio","tagline":"presents"},"lighting":{"minBrightness":0.14,"gamma":1.5,"skyLevel":15},"equipment":{"_comment":"Equipment slots shown in the inventory (the order here is the order on screen). Armor points reduce damage from falls by armorReduction each (starvation ignores armor).","armorReduction":0.04,"maxArmor":20,"slots":[{"id":"helmet","label":"Helmet"},{"id":"chestplate","label":"Chestplate"},{"id":"leggings","label":"Leggings"},{"id":"boots","label":"Boots"},{"id":"shield","label":"Shield"},{"id":"backpack","label":"Backpack"},{"id":"quiver","label":"Quiver"}]},"tools":{"_comment":"wrongToolWear: how many uses a tool loses when it breaks a block it is not made for (a pickaxe on dirt, a shovel on stone); the right tool loses 1.","wrongToolWear":3}},"music":{"_comment":"The soundtrack. Every track is generated live from this description (nothing is recorded). In the game a random track plays, and when it finishes there is a short pause (gapSeconds) and another one is picked at random, never the same one twice in a row. The title screen plays the track named by \"title\" on a loop. A track: bpm, bars (how long it lasts), chords (root = bass note, tones = the notes the pad and melody use, as MIDI numbers; each chord lasts barsPerChord bars and the list repeats), lead (the melody: voice piano|bell|pluck, density = chance of a note on [the first beat, other even steps, odd steps], leap = chance of an octave jump, rest = every Nth bar the melody takes a breath), pad (triangle|strings|null), bass (sine|drone|null), arp (a repeating broken-chord pattern: voice, pattern = which chord tone each step plays, step = beats per note, vel). \"melody\" instead of a random lead plays exactly these notes: [bar, beat, midi note, beats long, loudness].","gapSeconds":[5,12],"title":"theme","tracks":[{"key":"meadow","name":"Meadow","bpm":58,"bars":16,"barsPerChord":1,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":43,"tones":[59,62,65,67,72]},{"root":40,"tones":[59,62,64,67,71]},{"root":45,"tones":[60,64,67,69,72]},{"root":38,"tones":[57,60,62,65,69]},{"root":43,"tones":[59,62,64,67,71]}],"lead":{"voice":"piano","density":[0.9,0.5,0.28],"leap":0.12,"rest":4},"pad":"triangle","bass":"sine"},{"key":"lantern","name":"Lantern Light","bpm":50,"bars":16,"barsPerChord":2,"chords":[{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":48,"tones":[55,60,64,67,72]},{"root":43,"tones":[55,59,62,67,71]}],"lead":{"voice":"bell","density":[0.8,0.45,0.3],"leap":0.2,"rest":4},"pad":"strings","bass":"sine"},{"key":"slow_tide","name":"Slow Tide","bpm":44,"bars":16,"barsPerChord":2,"chords":[{"root":38,"tones":[57,60,62,64,65]},{"root":43,"tones":[59,62,64,67,71]},{"root":36,"tones":[60,64,67,71,74]},{"root":41,"tones":[57,60,64,65,69]}],"lead":{"voice":"piano","density":[0.55,0.28,0.14],"leap":0.18,"rest":3},"pad":"strings","bass":"drone"},{"key":"hearthside","name":"Hearthside","bpm":66,"bars":16,"barsPerChord":1,"chords":[{"root":41,"tones":[53,57,60,65,69]},{"root":46,"tones":[58,62,65,69,74]},{"root":43,"tones":[55,58,62,65,70]},{"root":48,"tones":[55,58,60,64,67]}],"lead":{"voice":"pluck","density":[0.5,0.25,0.12],"leap":0.1,"rest":4},"arp":{"voice":"piano","pattern":[0,2,1,3,2,4,3,1],"step":0.5,"vel":0.12},"pad":"triangle","bass":"sine"},{"key":"deep_stone","name":"Deep Stone","bpm":40,"bars":16,"barsPerChord":2,"chords":[{"root":40,"tones":[52,55,59,64,67]},{"root":41,"tones":[53,57,60,64,65]},{"root":45,"tones":[52,57,60,64,69]},{"root":38,"tones":[50,53,57,62,65]}],"lead":{"voice":"bell","density":[0.45,0.2,0.1],"leap":0.3,"rest":2},"pad":"strings","bass":"drone"},{"key":"morning_light","name":"Morning Light","bpm":76,"bars":16,"barsPerChord":1,"chords":[{"root":43,"tones":[55,59,62,67,71]},{"root":50,"tones":[57,62,66,69,74]},{"root":40,"tones":[55,59,64,67,71]},{"root":48,"tones":[55,60,64,67,72]}],"lead":{"voice":"piano","density":[0.8,0.55,0.35],"leap":0.1,"rest":4},"arp":{"voice":"pluck","pattern":[0,1,2,3,2,1,4,2],"step":0.5,"vel":0.1},"pad":"triangle","bass":"sine"},{"key":"theme","name":"VoxelCraft Theme","bpm":72,"bars":16,"barsPerChord":2,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":43,"tones":[59,62,67,71,74]},{"root":45,"tones":[57,60,64,67,72]},{"root":41,"tones":[57,60,65,69,72]},{"root":48,"tones":[60,64,67,72,76]},{"root":43,"tones":[59,62,67,71,74]},{"root":41,"tones":[57,60,65,69,72]},{"root":43,"tones":[55,59,62,67,71]}],"melody":[[0,0,72,2,0.3],[0,2,76,1,0.26],[0,3,79,1,0.26],[1,0,81,2,0.28],[1,2,79,2,0.24],[2,0,76,2,0.28],[2,2,74,1,0.24],[2,3,72,1,0.24],[3,0,74,4,0.26],[4,0,72,2,0.28],[4,2,69,1,0.24],[4,3,72,1,0.24],[5,0,76,2,0.28],[5,2,74,2,0.24],[6,0,72,2,0.28],[6,2,69,2,0.24],[7,0,67,4,0.26],[8,0,72,2,0.3],[8,2,76,1,0.26],[8,3,79,1,0.26],[9,0,84,2,0.32],[9,2,83,1,0.26],[9,3,79,1,0.26],[10,0,81,2,0.3],[10,2,79,1,0.24],[10,3,76,1,0.24],[11,0,79,4,0.28],[12,0,77,2,0.28],[12,2,76,1,0.24],[12,3,74,1,0.24],[13,0,72,2,0.26],[13,2,74,2,0.24],[14,0,71,2,0.26],[14,2,74,2,0.24],[15,0,72,4,0.3]],"arp":{"voice":"bell","pattern":[0,2,3,2],"step":1,"vel":0.07},"pad":"strings","bass":"sine"}]}};
var Up=0,zu=1,Fp=2;var xa=1,Op=2,Zr=3,As=0,An=1,ti=2,Ui=0,Jr=1,er=2,Hu=3,Vu=4,Bp=5;var nr=100,kp=101,zp=102,Hp=103,Vp=104,Gp=200,Wp=201,Xp=202,qp=203,Gu=204,Wu=205,$p=206,Yp=207,Zp=208,Jp=209,Kp=210,jp=211,Qp=212,tm=213,em=214,zl=0,Hl=1,Vl=2,Vr=3,Gl=4,Wl=5,Xl=6,ql=7,Xu=0,nm=1,im=2,fi=0,qu=1,$u=2,Yu=3,Zu=4,Ju=5,Ku=6,ju=7;var Qu=300,Cs=301,ir=302,vc=303,Mc=304,_a=306,Gr=1e3,Ci=1001,$l=1002,We=1003,sm=1004;var ya=1005;var an=1006,Sc=1007;var Rs=1008;var Vn=1009,td=1010,ed=1011,Kr=1012,bc=1013,pi=1014,ei=1015,mi=1016,wc=1017,Ec=1018,jr=1020,nd=35902,id=35899,sd=1021,rd=1022,ni=1023,Ri=1026,Is=1027,Tc=1028,Ac=1029,Ps=1030,Cc=1031;var Rc=1033,va=33776,Ma=33777,Sa=33778,ba=33779,Ic=35840,Pc=35841,Lc=35842,Nc=35843,Dc=36196,Uc=37492,Fc=37496,Oc=37488,Bc=37489,wa=37490,kc=37491,zc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,$c=37815,Yc=37816,Zc=37817,Jc=37818,Kc=37819,jc=37820,Qc=37821,th=36492,eh=36494,nh=36495,ih=36283,sh=36284,Ea=36285,rh=36286;var Xo=2300,Yl=2301,Ol=2302,Nu=2303,Du=2400,Uu=2401,Fu=2402;var rm=3200;var od=0,om=1,ii="",kn="srgb",Qs="srgb-linear",qo="linear",ve="srgb";var Bl=7680;var am=519,lm=512,cm=513,hm=514,oh=515,um=516,dm=517,ah=518,fm=519,ad=35044,ld=35048;var cd="300 es",di=2e3,$o=2001;function r_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function o_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pm(){let n=Yo("canvas");return n.style.display="block",n}var op={},Wr=null;function Zo(...n){let t="THREE."+n.shift();Wr?Wr("log",t,...n):console.log(t,...n)}function mm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=mm(n);let t="THREE."+n.shift();if(Wr)Wr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function $t(...n){n=mm(n);let t="THREE."+n.shift();if(Wr)Wr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function js(...n){let t=n.join(" ");t in op||(op[t]=!0,Wt(...n))}function gm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var xm={[zl]:Hl,[Vl]:Xl,[Gl]:ql,[Vr]:Wl,[Hl]:zl,[Xl]:Vl,[ql]:Gl,[Wl]:Vr},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,Zl=180/Math.PI;function Ms(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function a_(n,t){return(n%t+t)%t}function cu(n,t,e){return(1-e)*n+e*t}function Ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var se=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let w=Math.acos(g),C=Math.sin(w);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ap.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ap.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hu.copy(this).projectOnVector(t),this.sub(hu)}reflect(t){return this.sub(hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new V,ap=new In,Jt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],w=s[1],C=s[4],M=s[7],E=s[2],v=s[5],R=s[8];return r[0]=o*x+a*w+l*E,r[3]=o*g+a*C+l*v,r[6]=o*p+a*M+l*R,r[1]=c*x+h*w+d*E,r[4]=c*g+h*C+d*v,r[7]=c*p+h*M+d*R,r[2]=u*x+f*w+m*E,r[5]=u*g+f*C+m*v,r[8]=u*p+f*M+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uu.makeScale(t,e)),this}rotate(t){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uu.makeRotation(-t)),this}translate(t,e){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uu=new Jt,lp=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){let n={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qs]:{primaries:t,whitePoint:i,transfer:qo,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),n}var re=l_();function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var br,Jl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{br===void 0&&(br=Yo("canvas")),br.width=t.width,br.height=t.height;let s=br.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=br}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(es(e[i]/255)*255):e[i]=es(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},c_=0,Xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(du(s[o].image)):r.push(du(s[o]))}else r=du(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function du(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var h_=0,fu=new V,En=class n extends Ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ci,s=Ci,r=an,o=Rs,a=ni,l=Vn,c=n.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Ms(),this.name="",this.source=new Xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Qu;En.DEFAULT_ANISOTROPY=1;var Be=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,M=(f+1)/2,E=(p+1)/2,v=(h+u)/4,R=(d+x)/4,y=(m+g)/4;return C>M&&C>E?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=v/i,r=R/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=v/s,r=y/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=y/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(d-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kl=class extends Ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new En(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Kl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Jo=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var be=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/wr.setFromMatrixColumn(t,0).length(),r=1/wr.setFromMatrixColumn(t,1).length(),o=1/wr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u_,t,d_)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),gs.crossVectors(i,On),gs.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),gs.crossVectors(i,On)),gs.normalize(),al.crossVectors(On,gs),s[0]=gs.x,s[4]=al.x,s[8]=On.x,s[1]=gs.y,s[5]=al.y,s[9]=On.y,s[2]=gs.z,s[6]=al.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],w=i[3],C=i[7],M=i[11],E=i[15],v=s[0],R=s[4],y=s[8],A=s[12],I=s[1],P=s[5],z=s[9],H=s[13],D=s[2],F=s[6],J=s[10],Z=s[14],rt=s[3],O=s[7],$=s[11],tt=s[15];return r[0]=o*v+a*I+l*D+c*rt,r[4]=o*R+a*P+l*F+c*O,r[8]=o*y+a*z+l*J+c*$,r[12]=o*A+a*H+l*Z+c*tt,r[1]=h*v+d*I+u*D+f*rt,r[5]=h*R+d*P+u*F+f*O,r[9]=h*y+d*z+u*J+f*$,r[13]=h*A+d*H+u*Z+f*tt,r[2]=m*v+x*I+g*D+p*rt,r[6]=m*R+x*P+g*F+p*O,r[10]=m*y+x*z+g*J+p*$,r[14]=m*A+x*H+g*Z+p*tt,r[3]=w*v+C*I+M*D+E*rt,r[7]=w*R+C*P+M*F+E*O,r[11]=w*y+C*z+M*J+E*$,r[15]=w*A+C*H+M*Z+E*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],w=l*f-c*u,C=a*f-c*d,M=a*u-l*d,E=o*f-c*h,v=o*u-l*h,R=o*d-a*h;return e*(x*w-g*C+p*M)-i*(m*w-g*E+p*v)+s*(m*C-x*E+p*R)-r*(m*M-x*v+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],w=e*a-i*o,C=e*l-s*o,M=e*c-r*o,E=i*l-s*a,v=i*c-r*a,R=s*c-r*l,y=h*x-d*m,A=h*g-u*m,I=h*p-f*m,P=d*g-u*x,z=d*p-f*x,H=u*p-f*g,D=w*H-C*z+M*P+E*I-v*A+R*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return t[0]=(a*H-l*z+c*P)*F,t[1]=(s*z-i*H-r*P)*F,t[2]=(x*R-g*v+p*E)*F,t[3]=(u*v-d*R-f*E)*F,t[4]=(l*I-o*H-c*A)*F,t[5]=(e*H-s*I+r*A)*F,t[6]=(g*M-m*R-p*C)*F,t[7]=(h*R-u*M+f*C)*F,t[8]=(o*z-a*I+c*y)*F,t[9]=(i*I-e*z-r*y)*F,t[10]=(m*v-x*M+p*w)*F,t[11]=(d*M-h*v-f*w)*F,t[12]=(a*A-o*P-l*y)*F,t[13]=(e*P-i*A+s*y)*F,t[14]=(x*C-m*E-g*w)*F,t[15]=(h*E-d*C+u*w)*F,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,w=l*c,C=l*h,M=l*d,E=i.x,v=i.y,R=i.z;return s[0]=(1-(x+p))*E,s[1]=(f+M)*E,s[2]=(m-C)*E,s[3]=0,s[4]=(f-M)*v,s[5]=(1-(u+p))*v,s[6]=(g+w)*v,s[7]=0,s[8]=(m+C)*R,s[9]=(g-w)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=wr.set(s[0],s[1],s[2]).length(),a=wr.set(s[4],s[5],s[6]).length(),l=wr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);let c=1/o,h=1/a,d=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,e.setFromRotationMatrix(li),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=di,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===di)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$o)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=di,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===di)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===$o)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},wr=new V,li=new be,u_=new V(0,0,0),d_=new V(1,1,1),gs=new V,al=new V,On=new V,hp=new be,up=new In,Pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return up.setFromEuler(this),this.setFromQuaternion(up,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},f_=0,dp=new V,Er=new In,Ji=new be,ll=new V,Uo=new V,p_=new V,m_=new In,fp=new V(1,0,0),pp=new V(0,1,0),mp=new V(0,0,1),gp={type:"added"},g_={type:"removed"},Tr={type:"childadded",child:null},pu={type:"childremoved",child:null},Tn=class n extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new Pi,i=new In,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(fp,t)}rotateY(t){return this.rotateOnAxis(pp,t)}rotateZ(t){return this.rotateOnAxis(mp,t)}translateOnAxis(t,e){return dp.copy(t).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fp,t)}translateY(t){return this.translateOnAxis(pp,t)}translateZ(t){return this.translateOnAxis(mp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ll.copy(t):ll.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Uo,ll,this.up):Ji.lookAt(ll,Uo,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(Ji),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gp),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(g_),pu.child=t,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gp),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,p_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,m_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tn.DEFAULT_UP=new V(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=class extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},x_={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},cl={h:0,s:0,l:0};function mu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=a_(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=mu(o,r,t+1/3),this.g=mu(o,r,t),this.b=mu(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=kn){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){let i=_m[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return re.workingToColorSpace(pn.copy(this),t),Math.round(ce(pn.r*255,0,255))*65536+Math.round(ce(pn.g*255,0,255))*256+Math.round(ce(pn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(pn.copy(this),e);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=kn){re.workingToColorSpace(pn.copy(this),t);let e=pn.r,i=pn.g,s=pn.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+e,xs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xs),t.getHSL(cl);let i=cu(xs.h,cl.h,e),s=cu(xs.s,cl.s,e),r=cu(xs.l,cl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Gt;Gt.NAMES=_m;var jo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qo=class extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ci=new V,Ki=new V,gu=new V,ji=new V,Ar=new V,Cr=new V,xp=new V,xu=new V,_u=new V,yu=new V,vu=new Be,Mu=new Be,Su=new Be,Ai=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ci.subVectors(t,e),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ci.subVectors(s,e),Ki.subVectors(i,e),gu.subVectors(t,e);let o=ci.dot(ci),a=ci.dot(Ki),l=ci.dot(gu),c=Ki.dot(Ki),h=Ki.dot(gu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return vu.setScalar(0),Mu.setScalar(0),Su.setScalar(0),vu.fromBufferAttribute(t,e),Mu.fromBufferAttribute(t,i),Su.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vu,r.x),o.addScaledVector(Mu,r.y),o.addScaledVector(Su,r.z),o}static isFrontFacing(t,e,i,s){return ci.subVectors(i,e),Ki.subVectors(t,e),ci.cross(Ki).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),ci.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ar.subVectors(s,i),Cr.subVectors(r,i),xu.subVectors(t,i);let l=Ar.dot(xu),c=Cr.dot(xu);if(l<=0&&c<=0)return e.copy(i);_u.subVectors(t,s);let h=Ar.dot(_u),d=Cr.dot(_u);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ar,o);yu.subVectors(t,r);let f=Ar.dot(yu),m=Cr.dot(yu);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Cr,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return xp.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(xp,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(Ar,o).addScaledVector(Cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Li=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(t.matrixWorld),this.union(hl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),ul.subVectors(this.max,Fo),Rr.subVectors(t.a,Fo),Ir.subVectors(t.b,Fo),Pr.subVectors(t.c,Fo),_s.subVectors(Ir,Rr),ys.subVectors(Pr,Ir),Ys.subVectors(Rr,Pr);let e=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-Ys.z,Ys.y,_s.z,0,-_s.x,ys.z,0,-ys.x,Ys.z,0,-Ys.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-Ys.y,Ys.x,0];return!bu(e,Rr,Ir,Pr,ul)||(e=[1,0,0,0,1,0,0,0,1],!bu(e,Rr,Ir,Pr,ul))?!1:(dl.crossVectors(_s,ys),e=[dl.x,dl.y,dl.z],bu(e,Rr,Ir,Pr,ul))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qi=[new V,new V,new V,new V,new V,new V,new V,new V],hi=new V,hl=new Li,Rr=new V,Ir=new V,Pr=new V,_s=new V,ys=new V,Ys=new V,Fo=new V,ul=new V,dl=new V,Zs=new V;function bu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zs.fromArray(n,r);let a=s.x*Math.abs(Zs.x)+s.y*Math.abs(Zs.y)+s.z*Math.abs(Zs.z),l=t.dot(Zs),c=e.dot(Zs),h=i.dot(Zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ye=new V,fl=new se,__=0,me=class extends Ii{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ad,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fl.fromBufferAttribute(this,e),fl.applyMatrix3(t),this.setXY(e,fl.x,fl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ta=class extends me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ea=class extends me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var rn=class extends me{constructor(t,e,i){super(new Float32Array(t),e,i)}},y_=new Li,Oo=new V,wu=new V,Qn=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):y_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);let e=Oo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Oo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(wu)),this.expandByPoint(Oo.copy(t.center).sub(wu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},v_=0,jn=new be,Eu=new Tn,Lr=new V,Bn=new Li,Bo=new Li,nn=new V,Ve=class n extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r_(t)?ea:ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,i){return jn.makeTranslation(t,e,i),this.applyMatrix4(jn),this}scale(t,e,i){return jn.makeScale(t,e,i),this.applyMatrix4(jn),this}lookAt(t){return Eu.lookAt(t),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Bn.min,Bo.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,Bo.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(Bo.min),Bn.expandByPoint(Bo.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(t,c),nn.add(Lr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new me(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new V,l[y]=new V;let c=new V,h=new V,d=new V,u=new se,f=new se,m=new se,x=new V,g=new V;function p(y,A,I){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[y].add(x),a[A].add(x),a[I].add(x),l[y].add(g),l[A].add(g),l[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let y=0,A=w.length;y<A;++y){let I=w[y],P=I.start,z=I.count;for(let H=P,D=P+z;H<D;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let C=new V,M=new V,E=new V,v=new V;function R(y){E.fromBufferAttribute(s,y),v.copy(E);let A=a[y];C.copy(A),C.sub(E.multiplyScalar(E.dot(A))).normalize(),M.crossVectors(v,A);let P=M.dot(l[y])<0?-1:1;o.setXYZW(y,C.x,C.y,C.z,P)}for(let y=0,A=w.length;y<A;++y){let I=w[y],P=I.start,z=I.count;for(let H=P,D=P+z;H<D;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new me(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ql=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ad,this.updateRanges=[],this.version=0,this.uuid=Ms()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new V,na=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tu=new V,M_=new V,S_=new Jt,ui=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Tu.subVectors(i,e).cross(M_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Tu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||S_.getNormalMatrix(t),s=this.coplanarPoint(Tu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},b_=0,Ni=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=Jr,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ss=class extends Ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nr,ko=new V,Dr=new V,Ur=new V,Fr=new se,zo=new se,ym=new be,pl=new V,Ho=new V,ml=new V,_p=new se,Au=new se,yp=new se,tr=class extends Tn{constructor(t=new Ss){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ql(e,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new na(i,3,0,!1)),Nr.setAttribute("uv",new na(i,2,3,!1))}this.geometry=Nr,this.material=t,this.center=new se(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),ym.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;gl(pl.set(-.5,-.5,0),Ur,o,Dr,s,r),gl(Ho.set(.5,-.5,0),Ur,o,Dr,s,r),gl(ml.set(.5,.5,0),Ur,o,Dr,s,r),_p.set(0,0),Au.set(1,0),yp.set(1,1);let a=t.ray.intersectTriangle(pl,Ho,ml,!1,ko);if(a===null&&(gl(Ho.set(-.5,.5,0),Ur,o,Dr,s,r),Au.set(0,1),a=t.ray.intersectTriangle(pl,ml,Ho,!1,ko),a===null))return;let l=t.ray.origin.distanceTo(ko);l<t.near||l>t.far||e.push({distance:l,point:ko.clone(),uv:Ai.getInterpolation(ko,pl,Ho,ml,_p,Au,yp,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function gl(n,t,e,i,s,r){Fr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(zo.x=r*Fr.x-s*Fr.y,zo.y=s*Fr.x+r*Fr.y):zo.copy(Fr),n.copy(t),n.x+=zo.x,n.y+=zo.y,n.applyMatrix4(ym)}var ts=new V,Cu=new V,xl=new V,_l=new V,$r=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Cu.copy(t).add(e).multiplyScalar(.5),xl.copy(e).sub(t).normalize(),_l.copy(this.origin).sub(Cu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xl),a=_l.dot(this.direction),l=-_l.dot(xl),c=_l.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cu).addScaledVector(xl,u),f}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);let i=ts.dot(this.direction),s=ts.dot(ts)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=i.x-o.x,w=i.y-o.y,C=i.z-o.z,M=Math.abs(l),E=Math.abs(c),v=Math.abs(h),R,y,A,I,P,z,H,D,F,J,Z,rt;if(M>=E&&M>=v?(A=l,z=d,F=m,rt=p,l>=0?(R=c,y=h,I=u,P=f,H=x,D=g,J=w,Z=C):(R=h,y=c,I=f,P=u,H=g,D=x,J=C,Z=w)):E>=v?(A=c,z=u,F=x,rt=w,c>=0?(R=h,y=l,I=f,P=d,H=g,D=m,J=C,Z=p):(R=l,y=h,I=d,P=f,H=m,D=g,J=p,Z=C)):(A=h,z=f,F=g,rt=C,h>=0?(R=l,y=c,I=d,P=u,H=m,D=x,J=p,Z=w):(R=c,y=l,I=u,P=d,H=x,D=m,J=w,Z=p)),A===0)return null;let O=R/A,$=y/A,tt=1/A,vt=I-O*z,K=P-$*z,xt=H-O*F,_t=D-$*F,At=J-O*rt,W=Z-$*rt,j=At*_t-W*xt,pt=vt*W-K*At,Dt=xt*K-_t*vt;if(s){if(j<0||pt<0||Dt<0)return null}else if((j<0||pt<0||Dt<0)&&(j>0||pt>0||Dt>0))return null;let yt=j+pt+Dt;if(yt===0)return null;let Bt=tt*(j*z+pt*F+Dt*rt);return(yt>0?Bt<0:Bt>0)?null:this.at(Bt/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vp=new be,Js=new $r,yl=new Qn,Mp=new V,vl=new V,Ml=new V,Sl=new V,Ru=new V,bl=new V,Sp=new V,wl=new V,Pe=class extends Tn{constructor(t=new Ve,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ru.fromBufferAttribute(d,t),o?bl.addScaledVector(Ru,h):bl.addScaledVector(Ru.sub(e),h))}e.add(bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),Js.copy(t.ray).recast(t.near),!(yl.containsPoint(Js.origin)===!1&&(Js.intersectSphere(yl,Mp)===null||Js.origin.distanceToSquared(Mp)>(t.far-t.near)**2))&&(vp.copy(r).invert(),Js.copy(t.ray).applyMatrix4(vp),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Js)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),C=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,E=C;M<E;M+=3){let v=a.getX(M),R=a.getX(M+1),y=a.getX(M+2);s=El(this,p,t,i,c,h,d,v,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let w=a.getX(g),C=a.getX(g+1),M=a.getX(g+2);s=El(this,o,t,i,c,h,d,w,C,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),C=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,E=C;M<E;M+=3){let v=M,R=M+1,y=M+2;s=El(this,p,t,i,c,h,d,v,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let w=g,C=g+1,M=g+2;s=El(this,o,t,i,c,h,d,w,C,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function w_(n,t,e,i,s,r,o,a){let l;if(t.side===An?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===As,a),l===null)return null;wl.copy(a),wl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(wl);return c<e.near||c>e.far?null:{distance:c,point:wl.clone(),object:n}}function El(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,vl),n.getVertexPosition(l,Ml),n.getVertexPosition(c,Sl);let h=w_(n,t,e,i,vl,Ml,Sl,Sp);if(h){let d=new V;Ai.getBarycoord(Sp,vl,Ml,Sl,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,l,c,d,new se)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,l,c,d,new se)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new V,materialIndex:0};Ai.getNormal(vl,Ml,Sl,u.normal),h.face=u,h.barycoord=d}return h}var ia=class extends En{constructor(t=null,e=1,i=1,s,r,o,a,l,c=We,h=We,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sa=class extends me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Or=new be,bp=new be,Tl=[],wp=new Li,E_=new be,Vo=new Pe,Go=new Qn,ra=class extends Pe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,E_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),wp.copy(t.boundingBox).applyMatrix4(Or),this.boundingBox.union(wp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),Go.copy(t.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(i),t.ray.intersectsSphere(Go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),bp.multiplyMatrices(i,Or),Vo.matrixWorld=bp,Vo.raycast(t,Tl);for(let o=0,a=Tl.length;o<a;o++){let l=Tl[o];l.instanceId=r,l.object=this,e.push(l)}Tl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ia(new Float32Array(s*this.count),s,this.count,Tc,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ks=new Qn,T_=new se(.5,.5),Al=new V,oa=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],w=r[12],C=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-m,E-w).normalize(),s[1].setComponents(c+o,f+h,p+m,E+w).normalize(),s[2].setComponents(c+a,f+d,p+x,E+C).normalize(),s[3].setComponents(c-a,f-d,p-x,E-C).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,f-u,p-g,E-M).normalize();else if(s[4].setComponents(c-l,f-u,p-g,E-M).normalize(),e===di)s[5].setComponents(c+l,f+u,p+g,E+M).normalize();else if(e===$o)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(t){Ks.center.set(0,0,0);let e=T_.distanceTo(t.center);return Ks.radius=.7071067811865476+e,Ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Al.x=s.normal.x>0?t.max.x:t.min.x,Al.y=s.normal.y>0?t.max.y:t.min.y,Al.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yr=class extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tc=new V,ec=new V,Ep=new be,Wo=new $r,Cl=new Qn,Iu=new V,Tp=new V,nc=class extends Tn{constructor(t=new Ve,e=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)tc.fromBufferAttribute(e,s-1),ec.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=tc.distanceTo(ec);t.setAttribute("lineDistance",new rn(i,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),Cl.radius+=r,t.ray.intersectsSphere(Cl)===!1)return;Ep.copy(s).invert(),Wo.copy(t.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),w=h.getX(x+1),C=Rl(this,t,Wo,l,p,w,x);C&&e.push(C)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Rl(this,t,Wo,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Rl(this,t,Wo,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Rl(this,t,Wo,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rl(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(tc.fromBufferAttribute(a,s),ec.fromBufferAttribute(a,r),e.distanceSqToSegment(tc,ec,Iu,Tp)>i)return;Iu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Iu);if(!(c<t.near||c>t.far))return{distance:c,point:Tp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ap=new V,Cp=new V,aa=class extends nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ap.fromBufferAttribute(e,s),Cp.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ap.distanceTo(Cp);t.setAttribute("lineDistance",new rn(i,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ic=class extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rp=new be,Ou=new $r,Il=new Qn,Pl=new V,la=class extends Tn{constructor(t=new Ve,e=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Il.radius+=r,t.ray.intersectsSphere(Il)===!1)return;Rp.copy(s).invert(),Ou.copy(t.ray).applyMatrix4(Rp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Pl.fromBufferAttribute(d,g),Ip(Pl,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Pl.fromBufferAttribute(d,m),Ip(Pl,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ip(n,t,e,i,s,r,o){let a=Ou.distanceSqToPoint(n);if(a<e){let l=new V;Ou.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ca=class extends En{constructor(t=[],e=Cs,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Di=class extends En{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends En{constructor(t,e,i=pi,s,r,o,a=We,l=We,c,h=Ri,d=1){if(h!==Ri&&h!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sc=class extends bs{constructor(t,e=pi,i=Cs,s,r,o=We,a=We,l,c=Ri){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ha=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},zn=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(d,2));function m(x,g,p,w,C,M,E,v,R,y,A){let I=M/R,P=E/y,z=M/2,H=E/2,D=v/2,F=R+1,J=y+1,Z=0,rt=0,O=new V;for(let $=0;$<J;$++){let tt=$*P-H;for(let vt=0;vt<F;vt++){let K=vt*I-z;O[x]=K*w,O[g]=tt*C,O[p]=D,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[p]=v>0?1:-1,h.push(O.x,O.y,O.z),d.push(vt/R),d.push(1-$/y),Z+=1}}for(let $=0;$<y;$++)for(let tt=0;tt<R;tt++){let vt=u+tt+F*$,K=u+tt+F*($+1),xt=u+(tt+1)+F*($+1),_t=u+(tt+1)+F*$;l.push(vt,K,_t),l.push(K,xt,_t),rt+=6}a.addGroup(f,rt,A),f+=rt,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ll=new V,Nl=new V,Pu=new V,Dl=new Ai,ua=class extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(kl*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=Dl;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Dl.getNormal(Pu),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){let C=(w+1)%3,M=d[w],E=d[C],v=Dl[h[w]],R=Dl[h[C]],y=`${M}_${E}`,A=`${E}_${M}`;A in u&&u[A]?(Pu.dot(u[A].normal)<=r&&(f.push(v.x,v.y,v.z),f.push(R.x,R.y,R.z)),u[A]=null):y in u||(u[y]={index0:c[w],index1:c[C],normal:Pu.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:g}=u[m];Ll.fromBufferAttribute(a,x),Nl.fromBufferAttribute(a,g),f.push(Ll.x,Ll.y,Ll.z),f.push(Nl.x,Nl.y,Nl.z)}this.setAttribute("position",new rn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var da=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let w=p*u-o;for(let C=0;C<c;C++){let M=C*d-r;m.push(M,-w,0),x.push(0,0,1),g.push(C/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let C=w+c*p,M=w+c*(p+1),E=w+1+c*(p+1),v=w+1+c*p;f.push(C,M,v),f.push(M,E,v)}this.setIndex(f),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var fa=class n extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,u=new V,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let w=[],C=p/i,M=o+C*a,E=t*Math.cos(M),v=Math.sqrt(t*t-E*E),R=0;p===0&&o===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let A=y/e,I=s+A*r;d.x=-v*Math.cos(I),d.y=E,d.z=v*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(A+R,1-C),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){let C=h[p][w+1],M=h[p][w],E=h[p+1][w],v=h[p+1][w+1];(p!==0||o>0)&&f.push(C,M,v),(p!==i-1||l<Math.PI)&&f.push(M,E,v)}this.setIndex(f),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function sr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Pp(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Pp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function xn(n){let t={};for(let e=0;e<n.length;e++){let i=sr(n[e]);for(let s in i)t[s]=i[s]}return t}function Pp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function A_(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var vm={clone:sr,merge:xn},C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=A_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},rc=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var oc=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ac=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Br(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Lu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ws=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lc=class extends ws{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:r=t,a=2*e-i;break;case Fu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:o=t,l=2*i-e;break;case Fu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,w=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,C=(-1-f)*g+(1.5+f)*x+.5*m,M=f*g-f*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+w*o[c+E]+C*o[l+E]+M*o[d+E];return r}},cc=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},hc=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uc=class extends ws{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*u+m*2,w=d[p],C=d[p+1],M=t*u+m*2,E=h[M],v=h[M+1],R=P_(i,e,w,E,s);r[m]=Mm(R,x,C,v,g)}return r}};function Mm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function I_(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function P_(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Mm(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=I_(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Lu(t.settings)&&(i.settings={inTangents:Br(t.settings.inTangents,Array),outTangents:Br(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xo:e=this.InterpolantFactoryMethodDiscrete;break;case Yl:e=this.InterpolantFactoryMethodLinear;break;case Ol:e=this.InterpolantFactoryMethodSmooth;break;case Nu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Ol;case this.InterpolantFactoryMethodBezier:return Nu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Lu(this.settings)&&(Lp(this.settings.inTangents,t),Lp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&o_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ol,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Lu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Yl;var Es=class extends Hn{constructor(t,e,i){super(t,e,i)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Xo;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};dc.prototype.ValueTypeName="color";var fc=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};fc.prototype.ValueTypeName="number";var pc=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},pa=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Hn{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Xo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};mc.prototype.ValueTypeName="vector";var gc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sm=new gc,xc=class{constructor(t){this.manager=t!==void 0?t:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ul=new V,Fl=new In,Ei=new V,ma=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ul,Fl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ul,Fl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new V,Np=new se,Dp=new se,mn=class extends ma{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,e){return this.getViewBounds(t,Np,Dp),e.subVectors(Dp,Np)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ga=class extends ma{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var kr=-90,zr=1,_c=class extends Tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(kr,zr,t,e);s.layers=this.layers,this.add(s);let r=new mn(kr,zr,t,e);r.layers=this.layers,this.add(r);let o=new mn(kr,zr,t,e);o.layers=this.layers,this.add(o);let a=new mn(kr,zr,t,e);a.layers=this.layers,this.add(a);let l=new mn(kr,zr,t,e);l.layers=this.layers,this.add(l);let c=new mn(kr,zr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},yc=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ud="\\[\\]\\.:\\/",L_=new RegExp("["+ud+"]","g"),dd="[^"+ud+"]",N_="[^"+ud.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",dd),U_=/(WCOD+)?/.source.replace("WCOD",N_),F_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),B_=new RegExp("^"+D_+U_+F_+O_+"$"),k_=["material","materials","bones","map"],Bu=class{constructor(t,e,i){let s=i||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L_,"")}static parseTrackName(t){let e=B_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);k_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Bu;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gw=new Float32Array(1);var ku=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function fd(n,t,e,i){let s=z_(i);switch(e){case sd:return n*t;case Tc:return n*t/s.components*s.byteLength;case Ac:return n*t/s.components*s.byteLength;case Ps:return n*t*2/s.components*s.byteLength;case Cc:return n*t*2/s.components*s.byteLength;case rd:return n*t*3/s.components*s.byteLength;case ni:return n*t*4/s.components*s.byteLength;case Rc:return n*t*4/s.components*s.byteLength;case va:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:case Nc:return Math.max(n,16)*Math.max(t,8)/4;case Ic:case Lc:return Math.max(n,8)*Math.max(t,8)/2;case Dc:case Uc:case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fc:case wa:case kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case th:case eh:case nh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ih:case sh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ea:case rh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z_(n){switch(n){case Vn:case td:return{byteLength:1,components:1};case Kr:case ed:case mi:return{byteLength:2,components:1};case wc:case Ec:return{byteLength:2,components:4};case pi:case bc:case ei:return{byteLength:4,components:1};case nd:case id:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function V_(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var G_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
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
#endif`,X_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z_=`#ifdef USE_AOMAP
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
#endif`,J_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
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
#endif`,j_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dy=`#define PI 3.141592653589793
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
} // validated`,fy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
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
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
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
#endif`,Hy=`uniform sampler2D dfgLUT;
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
}`,Vy=`
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qy=`#if defined( USE_POINTS_UV )
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
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
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
#endif`,ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
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
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cv=`float getShadowMask() {
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
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iv=`#ifdef USE_SKINNING
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
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,Bv=`#ifdef USE_TRANSMISSION
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`#include <common>
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
}`,Jv=`#if DEPTH_PACKING == 3200
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
}`,Kv=`#define DISTANCE
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
}`,jv=`#define DISTANCE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,lM=`#define MATCAP
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
}`,cM=`#define NORMAL
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
}`,hM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,pM=`#define STANDARD
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
}`,mM=`#define TOON
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
}`,gM=`#define TOON
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
}`,xM=`uniform float size;
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
}`,_M=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,vM=`uniform vec3 color;
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
}`,MM=`uniform float rotation;
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
}`,SM=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:G_,alphahash_pars_fragment:W_,alphamap_fragment:X_,alphamap_pars_fragment:q_,alphatest_fragment:$_,alphatest_pars_fragment:Y_,aomap_fragment:Z_,aomap_pars_fragment:J_,batching_pars_vertex:K_,batching_vertex:j_,begin_vertex:Q_,beginnormal_vertex:ty,bsdfs:ey,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ay,color_fragment:ly,color_pars_fragment:cy,color_pars_vertex:hy,color_vertex:uy,common:dy,cube_uv_reflection_fragment:fy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:xy,emissivemap_pars_fragment:_y,colorspace_fragment:yy,colorspace_pars_fragment:vy,envmap_fragment:My,envmap_common_pars_fragment:Sy,envmap_pars_fragment:by,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Uy,envmap_vertex:Ey,fog_vertex:Ty,fog_pars_vertex:Ay,fog_fragment:Cy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Py,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Ny,lights_pars_begin:Dy,lights_toon_fragment:Fy,lights_toon_pars_fragment:Oy,lights_phong_fragment:By,lights_phong_pars_fragment:ky,lights_physical_fragment:zy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Vy,lights_fragment_maps:Gy,lights_fragment_end:Wy,lightprobes_pars_fragment:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:Zy,map_fragment:Jy,map_pars_fragment:Ky,map_particle_fragment:jy,map_particle_pars_fragment:Qy,metalnessmap_fragment:tv,metalnessmap_pars_fragment:ev,morphinstance_vertex:nv,morphcolor_vertex:iv,morphnormal_vertex:sv,morphtarget_pars_vertex:rv,morphtarget_vertex:ov,normal_fragment_begin:av,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:hv,normal_vertex:uv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:xv,packing:_v,premultiplied_alpha_fragment:yv,project_vertex:vv,dithering_fragment:Mv,dithering_pars_fragment:Sv,roughnessmap_fragment:bv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Ev,shadowmap_pars_vertex:Tv,shadowmap_vertex:Av,shadowmask_pars_fragment:Cv,skinbase_vertex:Rv,skinning_pars_vertex:Iv,skinning_vertex:Pv,skinnormal_vertex:Lv,specularmap_fragment:Nv,specularmap_pars_fragment:Dv,tonemapping_fragment:Uv,tonemapping_pars_fragment:Fv,transmission_fragment:Ov,transmission_pars_fragment:Bv,uv_pars_fragment:kv,uv_pars_vertex:zv,uv_vertex:Hv,worldpos_vertex:Vv,background_vert:Gv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:qv,cube_vert:$v,cube_frag:Yv,depth_vert:Zv,depth_frag:Jv,distance_vert:Kv,distance_frag:jv,equirect_vert:Qv,equirect_frag:tM,linedashed_vert:eM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:sM,meshlambert_vert:rM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:hM,meshphong_vert:uM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:xM,points_frag:_M,shadow_vert:yM,shadow_frag:vM,sprite_vert:MM,sprite_frag:SM},wt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Oi={basic:{uniforms:xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:xn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:xn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:xn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:xn([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:xn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:xn([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:xn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:xn([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:xn([wt.common,wt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:xn([wt.lights,wt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Oi.physical={uniforms:xn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var lh={r:0,b:0,g:0},bM=new be,Xm=new Jt;Xm.set(-1,0,0,0,1,0,0,0,1);function wM(n,t,e,i,s,r){let o=new Gt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let M=w.backgroundBlurriness>0;C=t.get(C,M)}return C}function m(w){let C=!1,M=f(w);M===null?g(o,a):M&&M.isColor&&(g(M,1),C=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(w,C){let M=f(C);M&&(M.isCubeTexture||M.mapping===_a)?(c===void 0&&(c=new Pe(new zn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:sr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,v,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xm),c.material.toneMapped=re.getTransfer(M.colorSpace)!==ve,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pe(new da(2,2),new gn({name:"BackgroundMaterial",uniforms:sr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=re.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,C){w.getRGB(lh,hd(n)),e.buffers.color.setClear(lh.r,lh.g,lh.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,C=1){o.set(w),a=C,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:m,addToRenderList:x,dispose:p}}function EM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(P,z,H,D,F){let J=!1,Z=d(P,D,H,z);r!==Z&&(r=Z,c(r.object)),J=f(P,D,H,F),J&&m(P,D,H,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(P,z,H,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,z,H,D){let F=D.wireframe===!0,J=i[z.id];J===void 0&&(J={},i[z.id]=J);let Z=P.isInstancedMesh===!0?P.id:0,rt=J[Z];rt===void 0&&(rt={},J[Z]=rt);let O=rt[H.id];O===void 0&&(O={},rt[H.id]=O);let $=O[F];return $===void 0&&($=u(l()),O[F]=$),$}function u(P){let z=[],H=[],D=[];for(let F=0;F<e;F++)z[F]=0,H[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,z,H,D){let F=r.attributes,J=z.attributes,Z=0,rt=H.getAttributes();for(let O in rt)if(rt[O].location>=0){let tt=F[O],vt=J[O];if(vt===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(vt=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(vt=P.instanceColor)),tt===void 0||tt.attribute!==vt||vt&&tt.data!==vt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function m(P,z,H,D){let F={},J=z.attributes,Z=0,rt=H.getAttributes();for(let O in rt)if(rt[O].location>=0){let tt=J[O];tt===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor));let vt={};vt.attribute=tt,tt&&tt.data&&(vt.data=tt.data),F[O]=vt,Z++}r.attributes=F,r.attributesNum=Z,r.index=D}function x(){let P=r.newAttributes;for(let z=0,H=P.length;z<H;z++)P[z]=0}function g(P){p(P,0)}function p(P,z){let H=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;H[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),F[P]!==z&&(n.vertexAttribDivisor(P,z),F[P]=z)}function w(){let P=r.newAttributes,z=r.enabledAttributes;for(let H=0,D=z.length;H<D;H++)z[H]!==P[H]&&(n.disableVertexAttribArray(H),z[H]=0)}function C(P,z,H,D,F,J,Z){Z===!0?n.vertexAttribIPointer(P,z,H,F,J):n.vertexAttribPointer(P,z,H,D,F,J)}function M(P,z,H,D){x();let F=D.attributes,J=H.getAttributes(),Z=z.defaultAttributeValues;for(let rt in J){let O=J[rt];if(O.location>=0){let $=F[rt];if($===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let tt=$.normalized,vt=$.itemSize,K=t.get($);if(K===void 0)continue;let xt=K.buffer,_t=K.type,At=K.bytesPerElement,W=_t===n.INT||_t===n.UNSIGNED_INT||$.gpuType===bc;if($.isInterleavedBufferAttribute){let j=$.data,pt=j.stride,Dt=$.offset;if(j.isInstancedInterleavedBuffer){for(let yt=0;yt<O.locationSize;yt++)p(O.location+yt,j.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let yt=0;yt<O.locationSize;yt++)g(O.location+yt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let yt=0;yt<O.locationSize;yt++)C(O.location+yt,vt/O.locationSize,_t,tt,pt*At,(Dt+vt/O.locationSize*yt)*At,W)}else{if($.isInstancedBufferAttribute){for(let j=0;j<O.locationSize;j++)p(O.location+j,$.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let j=0;j<O.locationSize;j++)g(O.location+j);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let j=0;j<O.locationSize;j++)C(O.location+j,vt/O.locationSize,_t,tt,vt*At,vt/O.locationSize*j*At,W)}}else if(Z!==void 0){let tt=Z[rt];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(O.location,tt);break;case 3:n.vertexAttrib3fv(O.location,tt);break;case 4:n.vertexAttrib4fv(O.location,tt);break;default:n.vertexAttrib1fv(O.location,tt)}}}}w()}function E(){A();for(let P in i){let z=i[P];for(let H in z){let D=z[H];for(let F in D){let J=D[F];for(let Z in J)h(J[Z].object),delete J[Z];delete D[F]}}delete i[P]}}function v(P){if(i[P.id]===void 0)return;let z=i[P.id];for(let H in z){let D=z[H];for(let F in D){let J=D[F];for(let Z in J)h(J[Z].object),delete J[Z];delete D[F]}}delete i[P.id]}function R(P){for(let z in i){let H=i[z];for(let D in H){let F=H[D];if(F[P.id]===void 0)continue;let J=F[P.id];for(let Z in J)h(J[Z].object),delete J[Z];delete F[P.id]}}}function y(P){for(let z in i){let H=i[z],D=P.isInstancedMesh===!0?P.id:0,F=H[D];if(F!==void 0){for(let J in F){let Z=F[J];for(let rt in Z)h(Z[rt].object),delete Z[rt];delete F[J]}delete H[D],Object.keys(H).length===0&&delete i[z]}}}function A(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function TM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function AM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ni&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Vn&&R!==ei&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),v=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:M,maxSamples:E,samples:v}}function CM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ui,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let w=r?0:i,C=w*4,M=p.clippingState||null;l.value=M,M=h(m,u,C,f);for(let E=0;E!==C;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,M=f;C!==x;++C,M+=4)o.copy(d[C]).applyMatrix4(w,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var to=4,RM=6,IM=20,PM=256,Ta=new ga,bm=new Gt,pd=null,md=0,gd=0,xd=!1,LM=new V,rr=new V,hh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=LM}=r;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=xd,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:mi,format:ni,colorSpace:Qs,depthBuffer:!1},s=wm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NM(r)),this._blurMaterial=UM(r,t,e),this._ggxMaterial=DM(r,t,e)}return s}_compileMaterial(t){let e=new Pe(new Ve,t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,s,r){let l=new mn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(bm),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new zn,new ln({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,p=!0):(g.color.copy(bm),p=!0);for(let C=0;C<6;C++){let M=C%3;M===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):M===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let E=this._cubeSize;Qr(s,M*E,C>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Cs||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ta)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-to?i-m+to:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Qr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Ta),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Qr(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Ta)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-to?s-this._lodMax+to:0),u=4*(this._cubeSize-h);Qr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Ta)}};function NM(n){let t=[],e=[],i=n,s=n-to+1+RM;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,C=p>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];m.set(M,f*u*p);for(let E=0;E<u;E++){let v=h[E*2]*2-1,R=h[E*2+1]*2-1;p===0?rr.set(1,R,v):p===1?rr.set(-v,1,-R):p===2?rr.set(-v,R,1):p===3?rr.set(-1,R,-v):p===4?rr.set(-v,-1,R):rr.set(v,R,-1),rr.toArray(x,(p*u+E)*f)}}let g=new Ve;g.setAttribute("position",new me(m,f)),g.setAttribute("outputDirection",new me(x,f)),e.push(new Pe(g,null)),i>to&&i--}return{lodMeshes:e,sizeLods:t}}function wm(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function DM(n,t,e){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function UM(n,t,e){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:IM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Em(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Tm(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uh=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ca(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ui});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=an),new _c(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function FM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===vc||f===Mc)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new uh(m.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===vc||f===Mc,x=f===Cs||f===ir;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new hh(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let w=u.image;return m&&w&&w.height>0||x&&w&&l(w)?(i===null&&(i=new hh(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===vc?u.mapping=Cs:f===Mc&&(u.mapping=ir),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function OM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&js("WebGLRenderer: "+i+" extension not supported."),s}}}function BM(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let w=f.array;x=f.version;for(let C=0,M=w.length;C<M;C+=3){let E=w[C+0],v=w[C+1],R=w[C+2];u.push(E,v,v,R,R,E)}}else{let w=m.array;x=m.version;for(let C=0,M=w.length/3-1;C<M;C+=3){let E=C+0,v=C+1,R=C+2;u.push(E,v,v,R,R,E)}}let g=new(m.count>=65535?ea:ta)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function kM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function HM(n,t,e){let i=new WeakMap,s=new Be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let A=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],C=0;f===!0&&(C=1),m===!0&&(C=2),x===!0&&(C=3);let M=a.attributes.position.count*C,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let v=new Float32Array(M*E*4*d),R=new Jo(v,M,E,d);R.type=ei,R.needsUpdate=!0;let y=C*4;for(let I=0;I<d;I++){let P=g[I],z=p[I],H=w[I],D=M*E*4*I;for(let F=0;F<P.count;F++){let J=F*y;f===!0&&(s.fromBufferAttribute(P,F),v[D+J+0]=s.x,v[D+J+1]=s.y,v[D+J+2]=s.z,v[D+J+3]=0),m===!0&&(s.fromBufferAttribute(z,F),v[D+J+4]=s.x,v[D+J+5]=s.y,v[D+J+6]=s.z,v[D+J+7]=0),x===!0&&(s.fromBufferAttribute(H,F),v[D+J+8]=s.x,v[D+J+9]=s.y,v[D+J+10]=s.z,v[D+J+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new se(M,E)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function VM(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var GM={[qu]:"LINEAR_TONE_MAPPING",[$u]:"REINHARD_TONE_MAPPING",[Yu]:"CINEON_TONE_MAPPING",[Zu]:"ACES_FILMIC_TONE_MAPPING",[Ku]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[Ju]:"CUSTOM_TONE_MAPPING"};function WM(n,t,e,i,s,r){let o=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ve;c.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new rn([0,2,0,0,2,0],2));let h=new rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(c,h),u=new ga(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,w=[],C=!1;this.setSize=function(M,E){o.setSize(M,E),a!==null&&a.setSize(M,E),l!==null&&l.setSize(M,E);for(let v=0;v<w.length;v++){let R=w[v];R.setSize&&R.setSize(M,E)}},this.setEffects=function(M){w=M,C=w.length>0&&w[0].isRenderPass===!0;let E=o.width,v=o.height;w.length>0&&a===null&&(a=new Pn(E,v,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(E,v,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){let y=w[R];y.setSize&&y.setSize(E,v)}},this.begin=function(M,E){if(x||M.toneMapping===fi&&w.length===0)return!1;if(p=E,E!==null){let v=E.width,R=E.height;(o.width!==v||o.height!==R)&&this.setSize(v,R)}return C===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=fi,!0},this.hasRenderPass=function(){return C},this.end=function(M,E){M.toneMapping=g,x=!0;let v=o,R=a;for(let y=0;y<w.length;y++){let A=w[y];A.enabled!==!1&&(A.render(M,R,v,E),A.needsSwap!==!1&&(v=R,R=R===a?l:a))}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,h.defines={},re.getTransfer(f)===ve&&(h.defines.SRGB_TRANSFER="");let y=GM[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(p),M.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var qm=new En,vd=new bs(1,1),$m=new Jo,Ym=new jl,Zm=new ca,Am=[],Cm=[],Rm=new Float32Array(16),Im=new Float32Array(9),Pm=new Float32Array(4);function no(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Am[s];if(r===void 0&&(r=new Float32Array(s),Am[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ph(n,t){let e=Cm[t];e===void 0&&(e=new Int32Array(t),Cm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function XM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function $M(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function YM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function ZM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Pm.set(i),n.uniformMatrix2fv(this.addr,!1,Pm),tn(e,i)}}function JM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Im.set(i),n.uniformMatrix3fv(this.addr,!1,Im),tn(e,i)}}function KM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Rm.set(i),n.uniformMatrix4fv(this.addr,!1,Rm),tn(e,i)}}function jM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function QM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function t1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function e1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function n1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function i1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function s1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function r1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function o1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vd.compareFunction=e.isReversedDepthBuffer()?ah:oh,r=vd):r=qm,e.setTexture2D(t||r,s)}function a1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ym,s)}function l1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Zm,s)}function c1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$m,s)}function h1(n){switch(n){case 5126:return XM;case 35664:return qM;case 35665:return $M;case 35666:return YM;case 35674:return ZM;case 35675:return JM;case 35676:return KM;case 5124:case 35670:return jM;case 35667:case 35671:return QM;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function u1(n,t){n.uniform1fv(this.addr,t)}function d1(n,t){let e=no(t,this.size,2);n.uniform2fv(this.addr,e)}function f1(n,t){let e=no(t,this.size,3);n.uniform3fv(this.addr,e)}function p1(n,t){let e=no(t,this.size,4);n.uniform4fv(this.addr,e)}function m1(n,t){let e=no(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g1(n,t){let e=no(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function x1(n,t){let e=no(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _1(n,t){n.uniform1iv(this.addr,t)}function y1(n,t){n.uniform2iv(this.addr,t)}function v1(n,t){n.uniform3iv(this.addr,t)}function M1(n,t){n.uniform4iv(this.addr,t)}function S1(n,t){n.uniform1uiv(this.addr,t)}function b1(n,t){n.uniform2uiv(this.addr,t)}function w1(n,t){n.uniform3uiv(this.addr,t)}function E1(n,t){n.uniform4uiv(this.addr,t)}function T1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=vd:o=qm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function A1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ym,r[o])}function C1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zm,r[o])}function R1(n,t,e){let i=this.cache,s=t.length,r=ph(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$m,r[o])}function I1(n){switch(n){case 5126:return u1;case 35664:return d1;case 35665:return f1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return x1;case 5124:case 35670:return _1;case 35667:case 35671:return y1;case 35668:case 35672:return v1;case 35669:case 35673:return M1;case 5125:return S1;case 36294:return b1;case 36295:return w1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return R1}}var Md=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=h1(e.type)}},Sd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I1(e.type)}},bd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},_d=/(\w+)(\])?(\[|\.)?/g;function Lm(n,t){n.seq.push(t),n.map[t.id]=t}function P1(n,t,e){let i=n.name,s=i.length;for(_d.lastIndex=0;;){let r=_d.exec(i),o=_d.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lm(e,c===void 0?new Md(a,n,t):new Sd(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new bd(a),Lm(e,d)),e=d}}}var eo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);P1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Nm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var L1=37297,N1=0;function D1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Dm=new Jt;function U1(n){re._getMatrix(Dm,re.workingColorSpace,n);let t=`mat3( ${Dm.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case qo:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Um(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+D1(n.getShaderSource(t),a)}else return r}function F1(n,t){let e=U1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var O1={[qu]:"Linear",[$u]:"Reinhard",[Yu]:"Cineon",[Zu]:"ACESFilmic",[Ku]:"AgX",[ju]:"Neutral",[Ju]:"Custom"};function B1(n,t){let e=O1[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ch=new V;function k1(){re.getLuminanceCoefficients(ch);let n=ch.x.toFixed(4),t=ch.y.toFixed(4),e=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function H1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function V1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ca(n){return n!==""}function Fm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Om(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(n){return n.replace(G1,X1)}var W1=new Map;function X1(n,t){let e=ne[t];if(e===void 0){let i=W1.get(t);if(i!==void 0)e=ne[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wd(e)}var q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(n){return n.replace(q1,$1)}function $1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function km(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Y1={[xa]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function Z1(n){return Y1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J1={[Cs]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[_a]:"ENVMAP_TYPE_CUBE_UV"};function K1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":J1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var j1={[ir]:"ENVMAP_MODE_REFRACTION"};function Q1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":j1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tS={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[nm]:"ENVMAP_BLENDING_MIX",[im]:"ENVMAP_BLENDING_ADD"};function eS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tS[n.combine]||"ENVMAP_BLENDING_NONE"}function nS(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function iS(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Z1(e),c=K1(e),h=Q1(e),d=eS(e),u=nS(e),f=z1(e),m=H1(r),x=s.createProgram(),g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ca).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(g=[km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ne.tonemapping_pars_fragment:"",e.toneMapping!==fi?B1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,F1("linearToOutputTexel",e.outputColorSpace),k1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ca).join(`
`)),o=wd(o),o=Fm(o,e),o=Om(o,e),a=wd(a),a=Fm(a,e),a=Om(a,e),o=Bm(o),a=Bm(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=w+g+o,M=w+p+a,E=Nm(s,s.VERTEX_SHADER,C),v=Nm(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,v),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(v)||"",F=z.trim(),J=H.trim(),Z=D.trim(),rt=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,v);else{let $=Um(s,E,"vertex"),tt=Um(s,v,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+$+`
`+tt)}else F!==""?Wt("WebGLProgram: Program Info Log:",F):(J===""||Z==="")&&(O=!1);O&&(P.diagnostics={runnable:rt,programLog:F,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(E),s.deleteShader(v),y=new eo(s,x),A=V1(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,L1)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=v,this}var sS=0,Ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Td(t),e.set(t,i)),i}},Td=class{constructor(t){this.id=sS++,this.code=t,this.usedTimes=0}};function rS(n){return n===Ps||n===wa||n===Ea}function oS(n,t,e,i,s,r){let o=new Ko,a=new Ed,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,I,P,z,H){let D=P.fog,F=z.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,rt=t.get(y.envMap||J,Z),O=rt&&rt.mapping===_a?rt.image.height:null,$=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Wt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,vt=tt!==void 0?tt.length:0,K=0;F.morphAttributes.position!==void 0&&(K=1),F.morphAttributes.normal!==void 0&&(K=2),F.morphAttributes.color!==void 0&&(K=3);let xt,_t,At,W;if($){let Re=Oi[$];xt=Re.vertexShader,_t=Re.fragmentShader}else{xt=y.vertexShader,_t=y.fragmentShader;let Re=a.getVertexShaderStage(y),_e=a.getFragmentShaderStage(y);a.update(y,Re,_e),At=Re.id,W=_e.id}let j=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Dt=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,Bt=!!y.map,ge=!!y.matcap,Xt=!!rt,Qt=!!y.aoMap,ue=!!y.lightMap,te=!!y.bumpMap&&y.wireframe===!1,S=!!y.normalMap,nt=!!y.displacementMap,et=!!y.emissiveMap,dt=!!y.metalnessMap,lt=!!y.roughnessMap,L=y.anisotropy>0,xe=y.clearcoat>0,le=y.dispersion>0,b=y.retroreflectivity>0,_=y.iridescence>0,N=y.sheen>0,U=y.transmission>0,G=L&&!!y.anisotropyMap,st=xe&&!!y.clearcoatMap,at=xe&&!!y.clearcoatNormalMap,Y=xe&&!!y.clearcoatRoughnessMap,it=_&&!!y.iridescenceMap,gt=_&&!!y.iridescenceThicknessMap,Pt=N&&!!y.sheenColorMap,mt=N&&!!y.sheenRoughnessMap,ft=!!y.specularMap,Lt=!!y.specularColorMap,Vt=!!y.specularIntensityMap,qt=U&&!!y.transmissionMap,k=U&&!!y.thicknessMap,Mt=!!y.gradientMap,ot=!!y.alphaMap,St=y.alphaTest>0,Ct=!!y.alphaHash,ct=!!y.extensions,Ht=fi;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let Ot={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:xt,fragmentShader:_t,defines:y.defines,customVertexShaderID:At,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:yt,batchingColor:yt&&z._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&z.instanceColor!==null,instancingMorph:Dt&&z.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:ge,envMap:Xt,envMapMode:Xt&&rt.mapping,envMapCubeUVHeight:O,aoMap:Qt,lightMap:ue,bumpMap:te,normalMap:S,displacementMap:nt,emissiveMap:et,normalMapObjectSpace:S&&y.normalMapType===om,normalMapTangentSpace:S&&y.normalMapType===od,packedNormalMap:S&&y.normalMapType===od&&rS(y.normalMap.format),metalnessMap:dt,roughnessMap:lt,anisotropy:L,anisotropyMap:G,clearcoat:xe,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:Y,dispersion:le,retroreflection:b,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:gt,sheen:N,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:ft,specularColorMap:Lt,specularIntensityMap:Vt,transmission:U,transmissionMap:qt,thicknessMap:k,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===Jr&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:Ct,combine:y.combine,mapUv:Bt&&m(y.map.channel),aoMapUv:Qt&&m(y.aoMap.channel),lightMapUv:ue&&m(y.lightMap.channel),bumpMapUv:te&&m(y.bumpMap.channel),normalMapUv:S&&m(y.normalMap.channel),displacementMapUv:nt&&m(y.displacementMap.channel),emissiveMapUv:et&&m(y.emissiveMap.channel),metalnessMapUv:dt&&m(y.metalnessMap.channel),roughnessMapUv:lt&&m(y.roughnessMap.channel),anisotropyMapUv:G&&m(y.anisotropyMap.channel),clearcoatMapUv:st&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&m(y.sheenRoughnessMap.channel),specularMapUv:ft&&m(y.specularMap.channel),specularColorMapUv:Lt&&m(y.specularColorMap.channel),specularIntensityMapUv:Vt&&m(y.specularIntensityMap.channel),transmissionMapUv:qt&&m(y.transmissionMap.channel),thicknessMapUv:k&&m(y.thicknessMap.channel),alphaMapUv:ot&&m(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(S||L),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(Bt||ot),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&S===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:K,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===ve,decodeVideoTextureEmissive:et&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ti,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(A,y),w(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function w(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function C(y){let A=f[y.type],I;if(A){let P=Oi[A];I=vm.clone(P.uniforms)}else I=y.uniforms;return I}function M(y,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new iS(n,A,y,s),c.push(I),h.set(A,I)),I}function E(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function v(y){a.remove(y)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:C,acquireProgram:M,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:R}}function aS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function lS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function zm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,g,p){let w=n[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},n[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=m,w.materialVariant=o(u),w.groupOrder=x,w.renderOrder=u.renderOrder,w.z=g,w.group=p),t++,w}function l(u,f,m,x,g,p,w){w.reversedDepth===!0&&(g=-g);let C=a(u,f,m,x,g,p);m.transmission>0?i.push(C):m.transparent===!0?s.push(C):e.push(C)}function c(u,f,m,x,g,p){let w=a(u,f,m,x,g,p);m.transmission>0?i.unshift(w):m.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,f){e.length>1&&e.sort(u||lS),i.length>1&&i.sort(f||zm),s.length>1&&s.sort(f||zm)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function cS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Hm,n.set(i,[o])):s>=r.length?(o=new Hm,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Gt};break;case"SpotLight":e={position:new V,direction:new V,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function uS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var dS=0;function fS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pS(n){let t=new hS,e=uS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,w=0,C=0,M=0,E=0,v=0,R=0,y=0,A=0,I=0;c.sort(fS);for(let z=0,H=c.length;z<H;z++){let D=c[z],F=D.color,J=D.intensity,Z=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ps?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=F.r*J,d+=F.g*J,u+=F.b*J;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],J);I++}else if(D.isSunLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,tt=e.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[m]=tt,i.sunShadowMap[m]=rt;let vt=$.getViewportCount();for(let K=0;K<vt;K++)i.sunShadowMatrix[x+K]=$.getMatrix(K),i.sunShadowCascade[x+K]=$._cascadeData[K];x+=vt,m++}i.sun[f]=O,f++}else if(D.isDirectionalLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,tt=e.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=rt,i.directionalShadowMatrix[g]=D.shadow.matrix,E++}i.directional[g]=O,g++}else if(D.isSpotLight){let O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(F).multiplyScalar(J),O.distance=Z,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[w]=O;let $=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,$.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[w]=$.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.spotShadow[w]=tt,i.spotShadowMap[w]=rt,R++}w++}else if(D.isRectAreaLight){let O=t.get(D);O.color.copy(F).multiplyScalar(J),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[C]=O,C++}else if(D.isPointLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let $=D.shadow,tt=e.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=D.shadow.matrix,v++}i.point[p]=O,p++}else if(D.isHemisphereLight){let O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(J),O.groundColor.copy(D.groundColor).multiplyScalar(J),i.hemi[M]=O,M++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==w||P.rectAreaLength!==C||P.hemiLength!==M||P.numSunShadows!==m||P.numDirectionalShadows!==E||P.numPointShadows!==v||P.numSpotShadows!==R||P.numSpotMaps!==y||P.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=g,i.spot.length=w,i.rectArea.length=C,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=w,P.rectAreaLength=C,P.hemiLength=M,P.numSunShadows=m,P.numDirectionalShadows=E,P.numPointShadows=v,P.numSpotShadows=R,P.numSpotMaps=y,P.numLightProbes=I,i.version=dS++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let w=0,C=c.length;w<C;w++){let M=c[w];if(M.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(M.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Vm(n){let t=new pS(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function mS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vm(n),t.set(s,[a])):r>=o.length?(a=new Vm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xS=`uniform sampler2D shadow_pass;
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
}`,_S=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],yS=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Gm=new be,Aa=new V,yd=new V;function vS(n,t,e){let i=new oa,s=new se,r=new se,o=new Be,a=new oc,l=new ac,c={},h=e.maxTextureSize,d={[As]:An,[An]:As,[ti]:ti},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:gS,fragmentShader:xS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ve;m.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xa;let p=this.type;this.render=function(v,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===Op&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xa);let A=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ui),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=p!==this.type;H&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(F=>F.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,F=v.length;D<F;D++){let J=v[D],Z=J.shadow;if(Z===void 0){Wt("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let rt=Z.getFrameExtents();s.multiply(rt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,Z.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=O,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Zr){if(J.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Pn(s.x,s.y,{format:Ps,type:mi,minFilter:an,magFilter:an,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new bs(s.x,s.y,ei),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Ri,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=We,Z.map.depthTexture.magFilter=We}else J.isPointLight?(Z.map=new uh(s.x),Z.map.depthTexture=new sc(s.x,pi)):(Z.map=new Pn(s.x,s.y),Z.map.depthTexture=new bs(s.x,s.y,pi)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Ri,this.type===xa?(Z.map.depthTexture.compareFunction=O?ah:oh,Z.map.depthTexture.minFilter=an,Z.map.depthTexture.magFilter=an):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=We,Z.map.depthTexture.magFilter=We);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let $=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,y);for(let tt=0;tt<$;tt++){let vt=Z.getCamera(tt);if(J.isPointLight){let K=Z.camera,xt=Z.matrix,_t=J.distance||K.far;_t!==K.far&&(K.far=_t,K.updateProjectionMatrix()),Aa.setFromMatrixPosition(J.matrixWorld),K.position.copy(Aa),yd.copy(K.position),yd.add(_S[tt]),K.up.copy(yS[tt]),K.lookAt(yd),K.updateMatrixWorld(),xt.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Gm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Gm,K.coordinateSystem,K.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(Z.map),n.clear());let K=Z.getViewport(tt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o)}i=Z.getFrustum(tt),M(R,y,vt,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Zr&&w(Z,y),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(A,I,P)};function w(v,R){let y=t.update(x);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new Pn(s.x,s.y,{format:Ps,type:mi}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),u.uniforms.shadow_pass.value=v.map.depthTexture,u.uniforms.resolution.value.set(v.map.width,v.map.height),u.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(R,null,y,f,x,null)}function C(v,R,y,A){let I=null,P=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=I.uuid,H=R.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let F=D[H];F===void 0&&(F=I.clone(),D[H]=F,R.addEventListener("dispose",E)),I=F}if(I.visible=R.visible,I.wireframe=R.wireframe,A===Zr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=n.properties.get(I);z.light=y}return I}function M(v,R,y,A,I){if(v.visible===!1)return;if(v.layers.test(R.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&I===Zr)&&(!v.frustumCulled||v.intersectsFrustum(i))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);let H=t.update(v),D=v.material;if(Array.isArray(D)){let F=H.groups;for(let J=0,Z=F.length;J<Z;J++){let rt=F[J],O=D[rt.materialIndex];if(O&&O.visible){let $=C(v,O,A,I);v.onBeforeShadow(n,v,R,y,H,$,rt),n.renderBufferDirect(y,null,H,$,v,rt),v.onAfterShadow(n,v,R,y,H,$,rt)}}}else if(D.visible){let F=C(v,D,A,I);v.onBeforeShadow(n,v,R,y,H,F,null),n.renderBufferDirect(y,null,H,F,v,null),v.onAfterShadow(n,v,R,y,H,F,null)}}let z=v.children;for(let H=0,D=z.length;H<D;H++)M(z[H],R,y,A,I)}function E(v){v.target.removeEventListener("dispose",E);for(let y in c){let A=c[y],I=v.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function MS(n,t){function e(){let k=!1,Mt=new Be,ot=null,St=new Be(0,0,0,0);return{setMask:function(Ct){ot!==Ct&&!k&&(n.colorMask(Ct,Ct,Ct,Ct),ot=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,ct,Ht,Ot,Re){Re===!0&&(Ct*=Ot,ct*=Ot,Ht*=Ot),Mt.set(Ct,ct,Ht,Ot),St.equals(Mt)===!1&&(n.clearColor(Ct,ct,Ht,Ot),St.copy(Mt))},reset:function(){k=!1,ot=null,St.set(-1,0,0,0)}}}function i(){let k=!1,Mt=!1,ot=null,St=null,Ct=null;return{setReversed:function(ct){if(Mt!==ct){let Ht=t.get("EXT_clip_control");ct?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;let Ot=Ct;Ct=null,this.setClear(Ot)}},getReversed:function(){return Mt},setTest:function(ct){ct?j(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ct){ot!==ct&&!k&&(n.depthMask(ct),ot=ct)},setFunc:function(ct){if(Mt&&(ct=xm[ct]),St!==ct){switch(ct){case zl:n.depthFunc(n.NEVER);break;case Hl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case Vr:n.depthFunc(n.LEQUAL);break;case Gl:n.depthFunc(n.EQUAL);break;case Wl:n.depthFunc(n.GEQUAL);break;case Xl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=ct}},setLocked:function(ct){k=ct},setClear:function(ct){Ct!==ct&&(Ct=ct,Mt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){k=!1,ot=null,St=null,Ct=null,Mt=!1}}}function s(){let k=!1,Mt=null,ot=null,St=null,Ct=null,ct=null,Ht=null,Ot=null,Re=null;return{setTest:function(_e){k||(_e?j(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(_e){Mt!==_e&&!k&&(n.stencilMask(_e),Mt=_e)},setFunc:function(_e,ai,bi){(ot!==_e||St!==ai||Ct!==bi)&&(n.stencilFunc(_e,ai,bi),ot=_e,St=ai,Ct=bi)},setOp:function(_e,ai,bi){(ct!==_e||Ht!==ai||Ot!==bi)&&(n.stencilOp(_e,ai,bi),ct=_e,Ht=ai,Ot=bi)},setLocked:function(_e){k=_e},setClear:function(_e){Re!==_e&&(n.clearStencil(_e),Re=_e)},reset:function(){k=!1,Mt=null,ot=null,St=null,Ct=null,ct=null,Ht=null,Ot=null,Re=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,w=null,C=null,M=null,E=null,v=null,R=null,y=new Gt(0,0,0),A=0,I=!1,P=null,z=null,H=null,D=null,F=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,rt=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(O)[1]),Z=rt>=1):O.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Z=rt>=2);let $=null,tt={},vt=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),xt=new Be().fromArray(vt),_t=new Be().fromArray(K);function At(k,Mt,ot,St){let Ct=new Uint8Array(4),ct=n.createTexture();n.bindTexture(k,ct),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<ot;Ht++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(Mt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return ct}let W={};W[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(Vr),te(!1),S(zu),j(n.CULL_FACE),Qt(Ui);function j(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function pt(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Dt(k,Mt){return u[k]!==Mt?(n.bindFramebuffer(k,Mt),u[k]=Mt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function yt(k,Mt){let ot=m,St=!1;if(k){ot=f.get(Mt),ot===void 0&&(ot=[],f.set(Mt,ot));let Ct=k.textures;if(ot.length!==Ct.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Ht=Ct.length;ct<Ht;ct++)ot[ct]=n.COLOR_ATTACHMENT0+ct;ot.length=Ct.length,St=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,St=!0);St&&n.drawBuffers(ot)}function Bt(k){return x!==k?(n.useProgram(k),x=k,!0):!1}let ge={[nr]:n.FUNC_ADD,[kp]:n.FUNC_SUBTRACT,[zp]:n.FUNC_REVERSE_SUBTRACT};ge[Hp]=n.MIN,ge[Vp]=n.MAX;let Xt={[Gp]:n.ZERO,[Wp]:n.ONE,[Xp]:n.SRC_COLOR,[Gu]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[Zp]:n.DST_COLOR,[$p]:n.DST_ALPHA,[qp]:n.ONE_MINUS_SRC_COLOR,[Wu]:n.ONE_MINUS_SRC_ALPHA,[Jp]:n.ONE_MINUS_DST_COLOR,[Yp]:n.ONE_MINUS_DST_ALPHA,[jp]:n.CONSTANT_COLOR,[Qp]:n.ONE_MINUS_CONSTANT_COLOR,[tm]:n.CONSTANT_ALPHA,[em]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(k,Mt,ot,St,Ct,ct,Ht,Ot,Re,_e){if(k===Ui){g===!0&&(pt(n.BLEND),g=!1);return}if(g===!1&&(j(n.BLEND),g=!0),k!==Bp){if(k!==p||_e!==I){if((w!==nr||E!==nr)&&(n.blendEquation(n.FUNC_ADD),w=nr,E=nr),_e)switch(k){case Jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$t("WebGLState: Invalid blending: ",k);break}else switch(k){case Jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hu:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vu:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",k);break}C=null,M=null,v=null,R=null,y.set(0,0,0),A=0,p=k,I=_e}return}Ct=Ct||Mt,ct=ct||ot,Ht=Ht||St,(Mt!==w||Ct!==E)&&(n.blendEquationSeparate(ge[Mt],ge[Ct]),w=Mt,E=Ct),(ot!==C||St!==M||ct!==v||Ht!==R)&&(n.blendFuncSeparate(Xt[ot],Xt[St],Xt[ct],Xt[Ht]),C=ot,M=St,v=ct,R=Ht),(Ot.equals(y)===!1||Re!==A)&&(n.blendColor(Ot.r,Ot.g,Ot.b,Re),y.copy(Ot),A=Re),p=k,I=!1}function ue(k,Mt){k.side===ti?pt(n.CULL_FACE):j(n.CULL_FACE);let ot=k.side===An;Mt&&(ot=!ot),te(ot),k.blending===Jr&&k.transparent===!1?Qt(Ui):Qt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let St=k.stencilWrite;a.setTest(St),St&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),et(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){P!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),P=k)}function S(k){k!==Up?(j(n.CULL_FACE),k!==z&&(k===zu?n.cullFace(n.BACK):k===Fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),z=k}function nt(k){k!==H&&(Z&&n.lineWidth(k),H=k)}function et(k,Mt,ot){k?(j(n.POLYGON_OFFSET_FILL),(D!==Mt||F!==ot)&&(D=Mt,F=ot,o.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,ot))):pt(n.POLYGON_OFFSET_FILL)}function dt(k){k?j(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function lt(k){k===void 0&&(k=n.TEXTURE0+J-1),$!==k&&(n.activeTexture(k),$=k)}function L(k,Mt,ot){ot===void 0&&($===null?ot=n.TEXTURE0+J-1:ot=$);let St=tt[ot];St===void 0&&(St={type:void 0,texture:void 0},tt[ot]=St),(St.type!==k||St.texture!==Mt)&&($!==ot&&(n.activeTexture(ot),$=ot),n.bindTexture(k,Mt||W[k]),St.type=k,St.texture=Mt)}function xe(){let k=tt[$];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function le(){try{n.compressedTexImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function _(){try{n.texSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function N(){try{n.texSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function G(){try{n.compressedTexSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function st(){try{n.texStorage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function at(){try{n.texStorage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function Y(){try{n.texImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function it(){try{n.texImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function gt(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function Pt(k,Mt){d[k]!==Mt&&(n.pixelStorei(k,Mt),d[k]=Mt)}function mt(k){xt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function ft(k){_t.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),_t.copy(k))}function Lt(k,Mt){let ot=c.get(Mt);ot===void 0&&(ot=new WeakMap,c.set(Mt,ot));let St=ot.get(k);St===void 0&&(St=n.getUniformBlockIndex(Mt,k.name),ot.set(k,St))}function Vt(k,Mt){let St=c.get(Mt).get(k);l.get(Mt)!==St&&(n.uniformBlockBinding(Mt,St,k.__bindingPointIndex),l.set(Mt,St))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,tt={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,w=null,C=null,M=null,E=null,v=null,R=null,y=new Gt(0,0,0),A=0,I=!1,P=null,z=null,H=null,D=null,F=null,xt.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:pt,bindFramebuffer:Dt,drawBuffers:yt,useProgram:Bt,setBlending:Qt,setMaterial:ue,setFlipSided:te,setCullFace:S,setLineWidth:nt,setPolygonOffset:et,setScissorTest:dt,activeTexture:lt,bindTexture:L,unbindTexture:xe,compressedTexImage2D:le,compressedTexImage3D:b,texImage2D:Y,texImage3D:it,pixelStorei:Pt,getParameter:gt,updateUBOMapping:Lt,uniformBlockBinding:Vt,texStorage2D:st,texStorage3D:at,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:U,compressedTexSubImage3D:G,scissor:mt,viewport:ft,reset:qt}}function SS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,_){return m?new OffscreenCanvas(b,_):Yo("canvas")}function g(b,_,N){let U=1,G=le(b);if((G.width>N||G.height>N)&&(U=N/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let st=Math.floor(U*G.width),at=Math.floor(U*G.height);u===void 0&&(u=x(st,at));let Y=_?x(st,at):u;return Y.width=st,Y.height=at,Y.getContext("2d").drawImage(b,0,0,st,at),Wt("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+st+"x"+at+")."),Y}else return"data"in b&&Wt("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),b;return b}function p(b){return b.generateMipmaps}function w(b){n.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,_,N,U,G,st=!1){if(b!==null){if(n[b]!==void 0)return n[b];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let at;U&&(at=t.get("EXT_texture_norm16"),at||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(N===n.FLOAT&&(Y=n.R32F),N===n.HALF_FLOAT&&(Y=n.R16F),N===n.UNSIGNED_BYTE&&(Y=n.R8),N===n.UNSIGNED_SHORT&&at&&(Y=at.R16_EXT),N===n.SHORT&&at&&(Y=at.R16_SNORM_EXT)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.R8UI),N===n.UNSIGNED_SHORT&&(Y=n.R16UI),N===n.UNSIGNED_INT&&(Y=n.R32UI),N===n.BYTE&&(Y=n.R8I),N===n.SHORT&&(Y=n.R16I),N===n.INT&&(Y=n.R32I)),_===n.RG&&(N===n.FLOAT&&(Y=n.RG32F),N===n.HALF_FLOAT&&(Y=n.RG16F),N===n.UNSIGNED_BYTE&&(Y=n.RG8),N===n.UNSIGNED_SHORT&&at&&(Y=at.RG16_EXT),N===n.SHORT&&at&&(Y=at.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RG8UI),N===n.UNSIGNED_SHORT&&(Y=n.RG16UI),N===n.UNSIGNED_INT&&(Y=n.RG32UI),N===n.BYTE&&(Y=n.RG8I),N===n.SHORT&&(Y=n.RG16I),N===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),N===n.UNSIGNED_INT&&(Y=n.RGB32UI),N===n.BYTE&&(Y=n.RGB8I),N===n.SHORT&&(Y=n.RGB16I),N===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),N===n.UNSIGNED_INT&&(Y=n.RGBA32UI),N===n.BYTE&&(Y=n.RGBA8I),N===n.SHORT&&(Y=n.RGBA16I),N===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_SHORT&&at&&(Y=at.RGB16_EXT),N===n.SHORT&&at&&(Y=at.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let it=st?qo:re.getTransfer(G);N===n.FLOAT&&(Y=n.RGBA32F),N===n.HALF_FLOAT&&(Y=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Y=it===ve?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&at&&(Y=at.RGBA16_EXT),N===n.SHORT&&at&&(Y=at.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function E(b,_){let N;return b?_===null||_===pi||_===jr?N=n.DEPTH24_STENCIL8:_===ei?N=n.DEPTH32F_STENCIL8:_===Kr&&(N=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===jr?N=n.DEPTH_COMPONENT24:_===ei?N=n.DEPTH_COMPONENT32F:_===Kr&&(N=n.DEPTH_COMPONENT16),N}function v(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==We&&b.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){let _=b.target;_.removeEventListener("dispose",R),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(b){let _=b.target;_.removeEventListener("dispose",y),P(_)}function A(b){let _=i.get(b);if(_.__webglInit===void 0)return;let N=b.source,U=f.get(N);if(U){let G=U[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&I(b),Object.keys(U).length===0&&f.delete(N)}i.remove(b)}function I(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let N=b.source,U=f.get(N);delete U[_.__cacheKey],o.memory.textures--}function P(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(_.__webglFramebuffer[U]))for(let G=0;G<_.__webglFramebuffer[U].length;G++)n.deleteFramebuffer(_.__webglFramebuffer[U][G]);else n.deleteFramebuffer(_.__webglFramebuffer[U]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[U])}else{if(Array.isArray(_.__webglFramebuffer))for(let U=0;U<_.__webglFramebuffer.length;U++)n.deleteFramebuffer(_.__webglFramebuffer[U]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let U=0;U<_.__webglColorRenderbuffer.length;U++)_.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[U]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=b.textures;for(let U=0,G=N.length;U<G;U++){let st=i.get(N[U]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),o.memory.textures--),i.remove(N[U])}i.remove(b)}let z=0;function H(){z=0}function D(){return z}function F(b){z=b}function J(){let b=z;return b>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,b}function Z(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function rt(b,_){let N=i.get(b);if(b.isVideoTexture&&L(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let U=b.image;if(U===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(N,b,_);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function O(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){pt(N,b,_);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function $(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){pt(N,b,_);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function tt(b,_){let N=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&N.__version!==b.version){Dt(N,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}let vt={[Gr]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},K={[We]:n.NEAREST,[sm]:n.NEAREST_MIPMAP_NEAREST,[ya]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Sc]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},xt={[lm]:n.NEVER,[fm]:n.ALWAYS,[cm]:n.LESS,[oh]:n.LEQUAL,[hm]:n.EQUAL,[ah]:n.GEQUAL,[um]:n.GREATER,[dm]:n.NOTEQUAL};function _t(b,_){if(_.type===ei&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===Sc||_.magFilter===ya||_.magFilter===Rs||_.minFilter===an||_.minFilter===Sc||_.minFilter===ya||_.minFilter===Rs)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,vt[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,vt[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,vt[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===We||_.minFilter!==ya&&_.minFilter!==Rs||_.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function At(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));let U=_.source,G=f.get(U);G===void 0&&(G={},f.set(U,G));let st=Z(_);if(st!==b.__cacheKey){G[st]===void 0&&(G[st]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),G[st].usedTimes++;let at=G[b.__cacheKey];at!==void 0&&(G[b.__cacheKey].usedTimes--,at.usedTimes===0&&I(_)),b.__cacheKey=st,b.__webglTexture=G[st].texture}return N}function W(b,_,N){return Math.floor(Math.floor(b/N)/_)}function j(b,_,N,U){let st=b.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,U,_.data);else{st.sort((Pt,mt)=>Pt.start-mt.start);let at=0;for(let Pt=1;Pt<st.length;Pt++){let mt=st[at],ft=st[Pt],Lt=mt.start+mt.count,Vt=W(ft.start,_.width,4),qt=W(mt.start,_.width,4);ft.start<=Lt+1&&Vt===qt&&W(ft.start+ft.count-1,_.width,4)===Vt?mt.count=Math.max(mt.count,ft.start+ft.count-mt.start):(++at,st[at]=ft)}st.length=at+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),gt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,mt=st.length;Pt<mt;Pt++){let ft=st[Pt],Lt=Math.floor(ft.start/4),Vt=Math.ceil(ft.count/4),qt=Lt%_.width,k=Math.floor(Lt/_.width),Mt=Vt,ot=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,qt,k,Mt,ot,N,U,_.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,gt)}}function pt(b,_,N){let U=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=n.TEXTURE_3D);let G=At(b,_),st=_.source;e.bindTexture(U,b.__webglTexture,n.TEXTURE0+N);let at=i.get(st);if(st.version!==at.__version||G===!0){if(e.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ot=re.getPrimaries(re.workingColorSpace),St=_.colorSpace===ii?null:re.getPrimaries(_.colorSpace),Ct=_.colorSpace===ii||ot===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let it=g(_.image,!1,s.maxTextureSize);it=xe(_,it);let gt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),mt=M(_.internalFormat,gt,Pt,_.normalized,_.colorSpace,_.isVideoTexture);_t(U,_);let ft,Lt=_.mipmaps,Vt=_.isVideoTexture!==!0,qt=at.__version===void 0||G===!0,k=st.dataReady,Mt=v(_,it);if(_.isDepthTexture)mt=E(_.format===Is,_.type),qt&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,mt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,mt,it.width,it.height,0,gt,Pt,null));else if(_.isDataTexture)if(Lt.length>0){Vt&&qt&&e.texStorage2D(n.TEXTURE_2D,Mt,mt,Lt[0].width,Lt[0].height);for(let ot=0,St=Lt.length;ot<St;ot++)ft=Lt[ot],Vt?k&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,ft.width,ft.height,gt,Pt,ft.data):e.texImage2D(n.TEXTURE_2D,ot,mt,ft.width,ft.height,0,gt,Pt,ft.data);_.generateMipmaps=!1}else Vt?(qt&&e.texStorage2D(n.TEXTURE_2D,Mt,mt,it.width,it.height),k&&j(_,it,gt,Pt)):e.texImage2D(n.TEXTURE_2D,0,mt,it.width,it.height,0,gt,Pt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,mt,Lt[0].width,Lt[0].height,it.depth);for(let ot=0,St=Lt.length;ot<St;ot++)if(ft=Lt[ot],_.format!==ni)if(gt!==null)if(Vt){if(k)if(_.layerUpdates.size>0){let Ct=fd(ft.width,ft.height,_.format,_.type);for(let ct of _.layerUpdates){let Ht=ft.data.subarray(ct*Ct/ft.data.BYTES_PER_ELEMENT,(ct+1)*Ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,ct,ft.width,ft.height,1,gt,Ht)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,ft.width,ft.height,it.depth,gt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,mt,ft.width,ft.height,it.depth,0,ft.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,ft.width,ft.height,it.depth,gt,Pt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,mt,ft.width,ft.height,it.depth,0,gt,Pt,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Vt&&qt&&e.texStorage2D(n.TEXTURE_2D,Mt,mt,Lt[0].width,Lt[0].height);for(let ot=0,St=Lt.length;ot<St;ot++)ft=Lt[ot],_.format!==ni?gt!==null?Vt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,ft.width,ft.height,gt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,mt,ft.width,ft.height,0,ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?k&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,ft.width,ft.height,gt,Pt,ft.data):e.texImage2D(n.TEXTURE_2D,ot,mt,ft.width,ft.height,0,gt,Pt,ft.data)}else if(_.isDataArrayTexture)if(Vt){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,mt,it.width,it.height,it.depth),k)if(_.layerUpdates.size>0){let ot=fd(it.width,it.height,_.format,_.type);for(let St of _.layerUpdates){let Ct=it.data.subarray(St*ot/it.data.BYTES_PER_ELEMENT,(St+1)*ot/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,it.width,it.height,1,gt,Pt,Ct)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(_.isData3DTexture)Vt?(qt&&e.texStorage3D(n.TEXTURE_3D,Mt,mt,it.width,it.height,it.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)):e.texImage3D(n.TEXTURE_3D,0,mt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(_.isFramebufferTexture){if(qt)if(Vt)e.texStorage2D(n.TEXTURE_2D,Mt,mt,it.width,it.height);else{let ot=it.width,St=it.height;for(let Ct=0;Ct<Mt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,mt,ot,St,0,gt,Pt,null),ot>>=1,St>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let ot=n.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),it.parentNode!==ot){ot.appendChild(it),d.add(_),ot.onpaint=St=>{let Ct=St.changedElements;for(let ct of d)Ct.includes(ct.image)&&(ct.needsUpdate=!0)},ot.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Ct=n.RGBA,ct=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ct,ct,Ht,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Vt&&qt){let ot=le(Lt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,mt,ot.width,ot.height)}for(let ot=0,St=Lt.length;ot<St;ot++)ft=Lt[ot],Vt?k&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,gt,Pt,ft):e.texImage2D(n.TEXTURE_2D,ot,mt,gt,Pt,ft);_.generateMipmaps=!1}else if(Vt){if(qt){let ot=le(it);e.texStorage2D(n.TEXTURE_2D,Mt,mt,ot.width,ot.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Pt,it)}else e.texImage2D(n.TEXTURE_2D,0,mt,gt,Pt,it);p(_)&&w(U),at.__version=st.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Dt(b,_,N){if(_.image.length!==6)return;let U=At(b,_),G=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);let st=i.get(G);if(G.version!==st.__version||U===!0){e.activeTexture(n.TEXTURE0+N);let at=re.getPrimaries(re.workingColorSpace),Y=_.colorSpace===ii?null:re.getPrimaries(_.colorSpace),it=_.colorSpace===ii||at===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let gt=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let ct=0;ct<6;ct++)!gt&&!Pt?mt[ct]=g(_.image[ct],!0,s.maxCubemapSize):mt[ct]=Pt?_.image[ct].image:_.image[ct],mt[ct]=xe(_,mt[ct]);let ft=mt[0],Lt=r.convert(_.format,_.colorSpace),Vt=r.convert(_.type),qt=M(_.internalFormat,Lt,Vt,_.normalized,_.colorSpace),k=_.isVideoTexture!==!0,Mt=st.__version===void 0||U===!0,ot=G.dataReady,St=v(_,ft);_t(n.TEXTURE_CUBE_MAP,_);let Ct;if(gt){k&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,qt,ft.width,ft.height);for(let ct=0;ct<6;ct++){Ct=mt[ct].mipmaps;for(let Ht=0;Ht<Ct.length;Ht++){let Ot=Ct[Ht];_.format!==ni?Lt!==null?k?ot&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,Ot.width,Ot.height,Lt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,qt,Ot.width,Ot.height,0,Ot.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,Ot.width,Ot.height,Lt,Vt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,qt,Ot.width,Ot.height,0,Lt,Vt,Ot.data)}}}else{if(Ct=_.mipmaps,k&&Mt){Ct.length>0&&St++;let ct=le(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,qt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Pt){k?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,mt[ct].width,mt[ct].height,Lt,Vt,mt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,mt[ct].width,mt[ct].height,0,Lt,Vt,mt[ct].data);for(let Ht=0;Ht<Ct.length;Ht++){let Re=Ct[Ht].image[ct].image;k?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,Re.width,Re.height,Lt,Vt,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,qt,Re.width,Re.height,0,Lt,Vt,Re.data)}}else{k?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Vt,mt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,Lt,Vt,mt[ct]);for(let Ht=0;Ht<Ct.length;Ht++){let Ot=Ct[Ht];k?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,Lt,Vt,Ot.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,qt,Lt,Vt,Ot.image[ct])}}}p(_)&&w(n.TEXTURE_CUBE_MAP),st.__version=G.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function yt(b,_,N,U,G,st){let at=r.convert(N.format,N.colorSpace),Y=r.convert(N.type),it=M(N.internalFormat,at,Y,N.normalized,N.colorSpace),gt=i.get(_),Pt=i.get(N);if(Pt.__renderTarget=_,!gt.__hasExternalTextures){let mt=Math.max(1,_.width>>st),ft=Math.max(1,_.height>>st);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,st,it,mt,ft,_.depth,0,at,Y,null):e.texImage2D(G,st,it,mt,ft,0,at,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),lt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,G,Pt.__webglTexture,0,dt(_)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,G,Pt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(b,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let U=_.depthTexture,G=U&&U.isDepthTexture?U.type:null,st=E(_.stencilBuffer,G),at=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;lt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(_),st,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(_),st,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,st,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,b)}else{let U=_.textures;for(let G=0;G<U.length;G++){let st=U[G],at=r.convert(st.format,st.colorSpace),Y=r.convert(st.type),it=M(st.internalFormat,at,Y,st.normalized,st.colorSpace);lt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(_),it,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(_),it,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,it,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(b,_,N){let U=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=i.get(_.depthTexture);if(G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U){if(G.__webglInit===void 0&&(G.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),G.__webglTexture===void 0){G.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),_t(n.TEXTURE_CUBE_MAP,_.depthTexture);let gt=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type),mt;_.depthTexture.format===Ri?mt=n.DEPTH_COMPONENT24:_.depthTexture.format===Is&&(mt=n.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,mt,_.width,_.height,0,gt,Pt,null)}}else rt(_.depthTexture,0);let st=G.__webglTexture,at=dt(_),Y=U?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,it=_.depthTexture.format===Is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ri)lt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Y,st,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,it,Y,st,0);else if(_.depthTexture.format===Is)lt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Y,st,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,it,Y,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(b){let _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let U=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),U){let G=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,U.removeEventListener("dispose",G)};U.addEventListener("dispose",G),_.__depthDisposeCallback=G}_.__boundDepthTexture=U}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let U=0;U<6;U++)ge(_.__webglFramebuffer[U],b,U);else{let U=b.texture.mipmaps;U&&U.length>0?ge(_.__webglFramebuffer[0],b,0):ge(_.__webglFramebuffer,b,0)}else if(N){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]===void 0)_.__webglDepthbuffer[U]=n.createRenderbuffer(),Bt(_.__webglDepthbuffer[U],b,!1);else{let G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,st)}}else{let U=b.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Bt(_.__webglDepthbuffer,b,!1);else{let G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(b,_,N){let U=i.get(b);_!==void 0&&yt(U.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Xt(b)}function ue(b){let _=b.texture,N=i.get(b),U=i.get(_);b.addEventListener("dispose",y);let G=b.textures,st=b.isWebGLCubeRenderTarget===!0,at=G.length>1;if(at||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=_.version,o.memory.textures++),st){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let it=0;it<_.mipmaps.length;it++)N.__webglFramebuffer[Y][it]=n.createFramebuffer()}else N.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)N.__webglFramebuffer[Y]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(at)for(let Y=0,it=G.length;Y<it;Y++){let gt=i.get(G[Y]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&lt(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<G.length;Y++){let it=G[Y];N.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let gt=r.convert(it.format,it.colorSpace),Pt=r.convert(it.type),mt=M(it.internalFormat,gt,Pt,it.normalized,it.colorSpace,b.isXRRenderTarget===!0),ft=dt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,mt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),_t(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)yt(N.__webglFramebuffer[Y][it],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it);else yt(N.__webglFramebuffer[Y],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Y=0,it=G.length;Y<it;Y++){let gt=G[Y],Pt=i.get(gt),mt=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,Pt.__webglTexture),_t(mt,gt),yt(N.__webglFramebuffer,b,gt,n.COLOR_ATTACHMENT0+Y,mt,0),p(gt)&&w(mt)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,U.__webglTexture),_t(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)yt(N.__webglFramebuffer[it],b,_,n.COLOR_ATTACHMENT0,Y,it);else yt(N.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,Y,0);p(_)&&w(Y),e.unbindTexture()}b.depthBuffer&&Xt(b)}function te(b){let _=b.textures;for(let N=0,U=_.length;N<U;N++){let G=_[N];if(p(G)){let st=C(b),at=i.get(G).__webglTexture;e.bindTexture(st,at),w(st),e.unbindTexture()}}}let S=[],nt=[];function et(b){if(b.samples>0){if(lt(b)===!1){let _=b.textures,N=b.width,U=b.height,G=n.COLOR_BUFFER_BIT,st=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(b),Y=_.length>1;if(Y)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let it=b.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[gt]);let Pt=i.get(_[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,N,U,0,0,N,U,G,n.NEAREST),l===!0&&(S.length=0,nt.length=0,S.push(n.COLOR_ATTACHMENT0+gt),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(S.push(st),nt.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,at.__webglColorRenderbuffer[gt]);let Pt=i.get(_[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function dt(b){return Math.min(s.maxSamples,b.samples)}function lt(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(b){let _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function xe(b,_){let N=b.colorSpace,U=b.format,G=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Qs&&N!==ii&&(re.getTransfer(N)===ve?(U!==ni||G!==Vn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",N)),_}function le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=F,this.setTexture2D=rt,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=tt,this.rebindTextures=Qt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bS(n,t){function e(i,s=ii){let r,o=re.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===id)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===td)return n.BYTE;if(i===ed)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===rd)return n.RGB;if(i===ni)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===Is)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Ps)return n.RG;if(i===Cc)return n.RG_INTEGER;if(i===Rc)return n.RGBA_INTEGER;if(i===va||i===Ma||i===Sa||i===ba)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Pc||i===Lc||i===Nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dc||i===Uc||i===Fc||i===Oc||i===Bc||i===wa||i===kc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dc||i===Uc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oc)return r.COMPRESSED_R11_EAC;if(i===Bc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wa)return r.COMPRESSED_RG11_EAC;if(i===kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===$c||i===Yc||i===Zc||i===Jc||i===Kc||i===jc||i===Qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===eh||i===nh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===th)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ih||i===sh||i===Ea||i===rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var wS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ES=`
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

}`,Ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ha(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new gn({vertexShader:wS,fragmentShader:ES,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cd=class extends Ii{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Ad,p={},w=e.getContextAttributes(),C=null,M=null,E=[],v=[],R=new se,y=null,A=null,I=new mn;I.viewport=new Be;let P=new mn;P.viewport=new Be;let z=[I,P],H=new yc,D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=E[W];return j===void 0&&(j=new qr,E[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=E[W];return j===void 0&&(j=new qr,E[W]=j),j.getGripSpace()},this.getHand=function(W){let j=E[W];return j===void 0&&(j=new qr,E[W]=j),j.getHandSpace()};function J(W){let j=v.indexOf(W.inputSource);if(j===-1)return;let pt=E[j];pt!==void 0&&(pt.update(W.inputSource,W.frame,c||o),pt.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",rt);for(let W=0;W<E.length;W++){let j=v[W];j!==null&&(v[W]=null,E[W].disconnect(j))}D=null,F=null,g.reset();for(let W in p)delete p[W];if(t.setRenderTarget(C),f=null,u=null,d=null,s=null,M=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),A!==null){let W=A.camera;W.fov=A.fov,W.zoom=A.zoom,W.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",rt),w.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,yt=null;w.depth&&(yt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?Is:Ri,Dt=w.stencil?jr:pi);let Bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Pn(u.textureWidth,u.textureHeight,{format:ni,type:Vn,depthTexture:new bs(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Pn(f.framebufferWidth,f.framebufferHeight,{format:ni,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(W){for(let j=0;j<W.removed.length;j++){let pt=W.removed[j],Dt=v.indexOf(pt);Dt>=0&&(v[Dt]=null,E[Dt].disconnect(pt))}for(let j=0;j<W.added.length;j++){let pt=W.added[j],Dt=v.indexOf(pt);if(Dt===-1){for(let Bt=0;Bt<E.length;Bt++)if(Bt>=v.length){v.push(pt),Dt=Bt;break}else if(v[Bt]===null){v[Bt]=pt,Dt=Bt;break}if(Dt===-1)break}let yt=E[Dt];yt&&yt.connect(pt)}}let O=new V,$=new V;function tt(W,j,pt){O.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(pt.matrixWorld);let Dt=O.distanceTo($),yt=j.projectionMatrix.elements,Bt=pt.projectionMatrix.elements,ge=yt[14]/(yt[10]-1),Xt=yt[14]/(yt[10]+1),Qt=(yt[9]+1)/yt[5],ue=(yt[9]-1)/yt[5],te=(yt[8]-1)/yt[0],S=(Bt[8]+1)/Bt[0],nt=ge*te,et=ge*S,dt=Dt/(-te+S),lt=dt*-te;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(lt),W.translateZ(dt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),yt[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let L=ge+dt,xe=Xt+dt,le=nt-lt,b=et+(Dt-lt),_=Qt*Xt/xe*L,N=ue*Xt/xe*L;W.projectionMatrix.makePerspective(le,b,_,N,L,xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function vt(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let j=W.near,pt=W.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),H.near=P.near=I.near=j,H.far=P.far=I.far=pt,(D!==H.near||F!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,F=H.far),H.layers.mask=W.layers.mask|6,I.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let Dt=W.parent,yt=H.cameras;vt(H,Dt);for(let Bt=0;Bt<yt.length;Bt++)vt(yt[Bt],Dt);yt.length===2?tt(H,I,P):H.projectionMatrix.copy(I.projectionMatrix),A===null&&W.isPerspectiveCamera&&(A={camera:W,fov:W.fov,zoom:W.zoom}),K(W,H,Dt)};function K(W,j,pt){pt===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(pt.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(W){return p[W]};let xt=null;function _t(W,j){if(h=j.getViewerPose(c||o),m=j,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Dt=!1;pt.length!==H.cameras.length&&(H.cameras.length=0,Dt=!0);for(let Xt=0;Xt<pt.length;Xt++){let Qt=pt[Xt],ue=null;if(f!==null)ue=f.getViewport(Qt);else{let S=d.getViewSubImage(u,Qt);ue=S.viewport,Xt===0&&(t.setRenderTargetTextures(M,S.colorTexture,S.depthStencilTexture),t.setRenderTarget(M))}let te=z[Xt];te===void 0&&(te=new mn,te.layers.enable(Xt),te.viewport=new Be,z[Xt]=te),te.matrix.fromArray(Qt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ue.x,ue.y,ue.width,ue.height),Xt===0&&(H.matrix.copy(te.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Dt===!0&&H.cameras.push(te)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Xt=d.getDepthInformation(pt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,s.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Xt=0;Xt<pt.length;Xt++){let Qt=pt[Xt].camera;if(Qt){let ue=p[Qt];ue||(ue=new ha,p[Qt]=ue);let te=d.getCameraImage(Qt);ue.sourceTexture=te}}}}for(let pt=0;pt<E.length;pt++){let Dt=v[pt],yt=E[pt];Dt!==null&&yt!==void 0&&yt.update(Dt,j,c||o)}xt&&xt(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}let At=new Wm;At.setAnimationLoop(_t),this.setAnimationLoop=function(W){xt=W},this.dispose=function(){}}},TS=new be,Jm=new Jt;Jm.set(-1,0,0,0,1,0,0,0,1);function AS(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,hd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,C,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,w,C):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===An&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===An&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),C=w.envMap,M=w.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(TS.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jm),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=C*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let v=E.program;i.uniformBlockBinding(M,v)}function c(M,E){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",w));let R=E.program;i.updateUBOMapping(M,R);let y=t.render.frame;r[M.id]!==y&&(u(M),r[M.id]=y)}function h(M){let E=d();M.__bindingPointIndex=E;let v=n.createBuffer(),R=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let E=s[M.id],v=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,A=v.length;y<A;y++){let I=v[y];if(Array.isArray(I))for(let P=0,z=I.length;P<z;P++)f(I[P],y,P,R);else f(I,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,E,v,R){if(x(M,E,v,R)===!0){let y=M.__offset,A=M.value;if(Array.isArray(A)){let I=0;for(let P=0;P<A.length;P++){let z=A[P],H=p(z);m(z,M.__data,I),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,M.__data)}}function m(M,E,v){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,v)}function x(M,E,v,R){let y=M.value,A=E+"_"+v;if(R[A]===void 0)return typeof y=="number"||typeof y=="boolean"?R[A]=y:ArrayBuffer.isView(y)?R[A]=y.slice():R[A]=y.clone(),!0;{let I=R[A];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return R[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(M){let E=M.uniforms,v=0,R=16;for(let A=0,I=E.length;A<I;A++){let P=Array.isArray(E[A])?E[A]:[E[A]];for(let z=0,H=P.length;z<H;z++){let D=P[z],F=Array.isArray(D.value)?D.value:[D.value];for(let J=0,Z=F.length;J<Z;J++){let rt=F[J],O=p(rt),$=v%R,tt=$%O.boundary,vt=$+tt;v+=tt,vt!==0&&R-vt<O.storage&&(v+=R-vt),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=O.storage}}}let y=v%R;return y>0&&(v+=R-y),M.__size=v,M.__cache={},this}function p(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",M),E}function w(M){let E=M.target;E.removeEventListener("dispose",w);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function C(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var RS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function IS(){return Fi===null&&(Fi=new ia(RS,16,16,Ps,mi),Fi.name="DFG_LUT",Fi.minFilter=an,Fi.magFilter=an,Fi.wrapS=Ci,Fi.wrapT=Ci,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var dh=class{constructor(t={}){let{canvas:e=pm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Vn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=f,g=new Set([Rc,Cc,Ac]),p=new Set([Vn,pi,Kr,jr,wc,Ec]),w=new Uint32Array(4),C=new Int32Array(4),M=new V,E=null,v=null,R=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,z=null,H=null,D=null,F=null;this._outputColorSpace=kn;let J=0,Z=0,rt=null,O=-1,$=null,tt=new Be,vt=new Be,K=null,xt=new Gt(0),_t=0,At=e.width,W=e.height,j=1,pt=null,Dt=null,yt=new Be(0,0,At,W),Bt=new Be(0,0,At,W),ge=!1,Xt=new oa,Qt=!1,ue=!1,te=new be,S=new V,nt=new Be,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function lt(){return rt===null?j:1}let L=i;function xe(T,B){return e.getContext(T,B)}let le,b,_,N,U,G,st,at,Y,it,gt,Pt,mt,ft,Lt,Vt,qt,k,Mt,ot,St,Ct,ct;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ai,!1),L===null){let B="webgl2";if(L=xe(B,T),L===null)throw xe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(T){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ai,!1),$t("WebGLRenderer: "+T.message),T}function Ht(){le=new OM(L),le.init(),St=new bS(L,le),b=new AM(L,le,t,St),_=new MS(L,le),b.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),H=L.createFramebuffer(),D=L.createFramebuffer(),F=L.createFramebuffer(),N=new zM(L),U=new aS,G=new SS(L,le,_,U,b,St,N),st=new FM(I),at=new V_(L),Ct=new EM(L,at),Y=new BM(L,at,N,Ct),it=new VM(L,Y,at,Ct,N),k=new HM(L,b,G),Lt=new CM(U),gt=new oS(I,st,le,b,Ct,Lt),Pt=new AS(I,U),mt=new cS,ft=new mS(le),qt=new wM(I,st,_,it,m,l),Vt=new vS(I,it,b),ct=new CS(L,N,b,_),Mt=new TM(L,le,N),ot=new kM(L,le,N),N.programs=gt.programs,I.capabilities=b,I.extensions=le,I.properties=U,I.renderLists=mt,I.shadowMap=Vt,I.state=_,I.info=N}x!==Vn&&(A=new WM(x,e.width,e.height,a,s,r));let Ot=new Cd(I,L);this.xr=Ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(At,W,!1))},this.getSize=function(T){return T.set(At,W)},this.setSize=function(T,B,Q=!0){if(Ot.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=T,W=B,e.width=Math.floor(T*j),e.height=Math.floor(B*j),Q===!0&&(e.style.width=T+"px",e.style.height=B+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(At*j,W*j).floor()},this.setDrawingBufferSize=function(T,B,Q){At=T,W=B,j=Q,e.width=Math.floor(T*Q),e.height=Math.floor(B*Q),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===Vn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,B,Q,X){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,B,Q,X),_.viewport(tt.copy(yt).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,B,Q,X){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,B,Q,X),_.scissor(vt.copy(Bt).multiplyScalar(j).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){_.setScissorTest(ge=T)},this.setOpaqueSort=function(T){pt=T},this.setTransparentSort=function(T){Dt=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Q=!0){let X=0;if(T){let q=!1;if(rt!==null){let Tt=rt.texture.format;q=g.has(Tt)}if(q){let Tt=rt.texture.type,It=p.has(Tt),Et=qt.getClearColor(),Ut=qt.getClearAlpha(),kt=Et.r,ee=Et.g,ae=Et.b;It?(w[0]=kt,w[1]=ee,w[2]=ae,w[3]=Ut,L.clearBufferuiv(L.COLOR,0,w)):(C[0]=kt,C[1]=ee,C[2]=ae,C[3]=Ut,L.clearBufferiv(L.COLOR,0,C))}else X|=L.COLOR_BUFFER_BIT}B&&(X|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ai,!1),qt.dispose(),mt.dispose(),ft.dispose(),U.dispose(),st.dispose(),it.dispose(),Ct.dispose(),ct.dispose(),gt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Kf),Ot.removeEventListener("sessionend",jf),$s.stop()};function Re(T){T.preventDefault(),Zo("WebGLRenderer: Context Lost."),P=!0}function _e(){Zo("WebGLRenderer: Context Restored."),P=!1;let T=N.autoReset,B=Vt.enabled,Q=Vt.autoUpdate,X=Vt.needsUpdate,q=Vt.type;Ht(),N.autoReset=T,Vt.enabled=B,Vt.autoUpdate=Q,Vt.needsUpdate=X,Vt.type=q}function ai(T){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function bi(T){let B=T.target;B.removeEventListener("dispose",bi),jx(B)}function jx(T){Qx(T),U.remove(T)}function Qx(T){let B=U.get(T).programs;B!==void 0&&(B.forEach(function(Q){gt.releaseProgram(Q)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Q,X,q,Tt){B===null&&(B=et);let It=q.isMesh&&q.matrixWorld.determinantAffine()<0,Et=n_(T,B,Q,X,q);_.setMaterial(X,It);let Ut=Q.index,kt=1;if(X.wireframe===!0){if(Ut=Y.getWireframeAttribute(Q),Ut===void 0)return;kt=2}let ee=Q.drawRange,ae=Q.attributes.position,Ft=ee.start*kt,ye=(ee.start+ee.count)*kt;Tt!==null&&(Ft=Math.max(Ft,Tt.start*kt),ye=Math.min(ye,(Tt.start+Tt.count)*kt)),Ut!==null?(Ft=Math.max(Ft,0),ye=Math.min(ye,Ut.count)):ae!=null&&(Ft=Math.max(Ft,0),ye=Math.min(ye,ae.count));let $e=ye-Ft;if($e<0||$e===1/0)return;Ct.setup(q,X,Et,Q,Ut);let De,Ae=Mt;if(Ut!==null&&(De=at.get(Ut),Ae=ot,Ae.setIndex(De)),q.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*lt()),Ae.setMode(L.LINES)):Ae.setMode(L.TRIANGLES);else if(q.isLine){let dn=X.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*lt()),q.isLineSegments?Ae.setMode(L.LINES):q.isLineLoop?Ae.setMode(L.LINE_LOOP):Ae.setMode(L.LINE_STRIP)}else q.isPoints?Ae.setMode(L.POINTS):q.isSprite&&Ae.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Ae.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let dn=q._multiDrawStarts,Rt=q._multiDrawCounts,bn=q._multiDrawCount,pe=Ut?at.get(Ut).bytesPerElement:1,Kn=U.get(X).currentProgram.getUniforms();for(let wi=0;wi<bn;wi++)Kn.setValue(L,"_gl_DrawID",wi),Ae.render(dn[wi]/pe,Rt[wi])}else if(q.isInstancedMesh)Ae.renderInstances(Ft,$e,q.count);else if(Q.isInstancedBufferGeometry){let dn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Rt=Math.min(Q.instanceCount,dn);Ae.renderInstances(Ft,$e,Rt)}else Ae.render(Ft,$e)};function Jf(T,B,Q,X){z!==null&&T.isNodeMaterial&&z.setObject(X,T),Qt===!0&&Lt.setState(T,Q,!1),T.transparent===!0&&T.side===ti&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,ol(T,B,X),T.side=As,T.needsUpdate=!0,ol(T,B,X),T.side=ti):ol(T,B,X)}this.compile=function(T,B,Q=null){Q===null&&(Q=T),z!==null&&z.renderStart(T,B,Q),v=ft.get(Q),v.init(B),y.push(v),Q.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),T!==Q&&T.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(),z!==null&&z.updateLights(v.state.lightsArray),ue=this.localClippingEnabled,Qt=Lt.init(this.clippingPlanes,ue),Qt===!0&&Lt.setGlobalState(this.clippingPlanes,B),z!==null&&Vt.render(v.state.shadowsArray,Q,B);let X=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let It=0;It<Tt.length;It++){let Et=Tt[It];Jf(Et,Q,B,q),X.add(Et)}else Jf(Tt,Q,B,q),X.add(Tt)}),v=y.pop(),z!==null&&z.renderEnd(),X},this.compileAsync=function(T,B,Q=null){let X=this.compile(T,B,Q);return new Promise(q=>{function Tt(){if(X.forEach(function(It){let Ut=U.get(It).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(It)}),X.size===0){q(T);return}setTimeout(Tt,10)}le.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let au=null;function t_(T){au&&au(T)}function Kf(){$s.stop()}function jf(){$s.start()}let $s=new Wm;$s.setAnimationLoop(t_),typeof self<"u"&&$s.setContext(self),this.setAnimationLoop=function(T){au=T,Ot.setAnimationLoop(T),T===null?$s.stop():$s.start()},Ot.addEventListener("sessionstart",Kf),Ot.addEventListener("sessionend",jf),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;z!==null&&z.renderStart(T,B);let Q=Ot.enabled===!0&&Ot.isPresenting===!0,X=A!==null&&(rt===null||Q)&&A.begin(I,rt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(B),B=Ot.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,rt),v=ft.get(T,y.length),v.init(B),v.state.textureUnits=G.getTextureUnits(),y.push(v),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Xt.setFromProjectionMatrix(te,di,B.reversedDepth),ue=this.localClippingEnabled,Qt=Lt.init(this.clippingPlanes,ue),E=mt.get(T,R.length),E.init(),R.push(E),Ot.enabled===!0&&Ot.isPresenting===!0){let It=I.xr.getDepthSensingMesh();It!==null&&lu(It,B,-1/0,I.sortObjects)}lu(T,B,0,I.sortObjects),E.finish(),z!==null&&z.updateLights(v.state.lightsArray),I.sortObjects===!0&&E.sort(pt,Dt),dt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,dt&&qt.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&Lt.beginShadows();let q=v.state.shadowsArray;if(Vt.render(q,T,B),Qt===!0&&Lt.endShadows(),(X&&A.hasRenderPass())===!1){let It=E.opaque,Et=E.transmissive;if(v.setupLights(),B.isArrayCamera){let Ut=B.cameras;if(Et.length>0)for(let kt=0,ee=Ut.length;kt<ee;kt++){let ae=Ut[kt];tp(It,Et,T,ae)}dt&&qt.render(T);for(let kt=0,ee=Ut.length;kt<ee;kt++){let ae=Ut[kt];Qf(E,T,ae,ae.viewport)}}else Et.length>0&&tp(It,Et,T,B),dt&&qt.render(T),Qf(E,T,B)}rt!==null&&Z===0&&(G.updateMultisampleRenderTarget(rt),G.updateRenderTargetMipmap(rt)),X&&A.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),Ct.resetDefaultState(),O=-1,$=null,y.pop(),y.length>0?(v=y[y.length-1],G.setTextureUnits(v.state.textureUnits),Qt===!0&&Lt.setGlobalState(I.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,z!==null&&z.renderEnd()};function lu(T,B,Q,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)v.pushLightProbeGrid(T);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Xt)){X&&nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);let It=it.update(T),Et=T.material;Et.visible&&E.push(T,It,Et,Q,nt.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Xt))){let It=it.update(T),Et=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),nt.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),nt.copy(It.boundingSphere.center)),nt.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Et)){let Ut=It.groups;for(let kt=0,ee=Ut.length;kt<ee;kt++){let ae=Ut[kt],Ft=Et[ae.materialIndex];Ft&&Ft.visible&&E.push(T,It,Ft,Q,nt.z,ae,B)}}else Et.visible&&E.push(T,It,Et,Q,nt.z,null,B)}}let Tt=T.children;for(let It=0,Et=Tt.length;It<Et;It++)lu(Tt[It],B,Q,X)}function Qf(T,B,Q,X){let{opaque:q,transmissive:Tt,transparent:It}=T;v.setupLightsView(Q),Qt===!0&&Lt.setGlobalState(I.clippingPlanes,Q),X&&_.viewport(tt.copy(X)),q.length>0&&rl(q,B,Q),Tt.length>0&&rl(Tt,B,Q),It.length>0&&rl(It,B,Q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function tp(T,B,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[X.id]===void 0){let Ft=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[X.id]=new Pn(1,1,{generateMipmaps:!0,type:Ft?mi:Vn,minFilter:Rs,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let Tt=v.state.transmissionRenderTarget[X.id],It=X.viewport||tt;Tt.setSize(It.z*I.transmissionResolutionScale,It.w*I.transmissionResolutionScale);let Et=I.getRenderTarget(),Ut=I.getActiveCubeFace(),kt=I.getActiveMipmapLevel();I.setRenderTarget(Tt),I.getClearColor(xt),_t=I.getClearAlpha(),_t<1&&I.setClearColor(16777215,.5),I.clear(),dt&&qt.render(Q);let ee=I.toneMapping;I.toneMapping=fi;let ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),v.setupLightsView(X),Qt===!0&&Lt.setGlobalState(I.clippingPlanes,X),rl(T,Q,X),G.updateMultisampleRenderTarget(Tt),G.updateRenderTargetMipmap(Tt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ye=0,$e=B.length;ye<$e;ye++){let De=B[ye],{object:Ae,geometry:dn,material:Rt,group:bn}=De;if(Rt.side===ti&&Ae.layers.test(X.layers)){let pe=Rt.side;Rt.side=An,Rt.needsUpdate=!0,ep(Ae,Q,X,dn,Rt,bn),Rt.side=pe,Rt.needsUpdate=!0,Ft=!0}}Ft===!0&&(G.updateMultisampleRenderTarget(Tt),G.updateRenderTargetMipmap(Tt))}I.setRenderTarget(Et,Ut,kt),I.setClearColor(xt,_t),ae!==void 0&&(X.viewport=ae),I.toneMapping=ee}function rl(T,B,Q){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Tt=T.length;q<Tt;q++){let It=T[q],{object:Et,geometry:Ut,group:kt}=It,ee=It.material;ee.allowOverride===!0&&X!==null&&(ee=X),Et.layers.test(Q.layers)&&ep(Et,B,Q,Ut,ee,kt)}}function ep(T,B,Q,X,q,Tt){z!==null&&q.isNodeMaterial&&z.setObject(T,q),T.onBeforeRender(I,B,Q,X,q,Tt),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(I,B,Q,X,T,Tt),q.transparent===!0&&q.side===ti&&q.forceSinglePass===!1?(q.side=An,q.needsUpdate=!0,I.renderBufferDirect(Q,B,X,q,T,Tt),q.side=As,q.needsUpdate=!0,I.renderBufferDirect(Q,B,X,q,T,Tt),q.side=ti):I.renderBufferDirect(Q,B,X,q,T,Tt),T.onAfterRender(I,B,Q,X,q,Tt)}function ol(T,B,Q){B.isScene!==!0&&(B=et);let X=U.get(T),q=v.state.lights,Tt=v.state.shadowsArray,It=q.state.version,Et=gt.getParameters(T,q.state,Tt,B,Q,v.state.lightProbeGridArray),Ut=gt.getProgramCacheKey(Et),kt=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=st.get(T.envMap||X.environment,ee),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",bi),kt=new Map,X.programs=kt);let ae=kt.get(Ut);if(ae!==void 0){if(X.currentProgram===ae&&X.lightsStateVersion===It)return ip(T,Et),ae}else Et.uniforms=gt.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,Q,Et),T.onBeforeCompile(Et,I),ae=gt.acquireProgram(Et,Ut),kt.set(Ut,ae),X.uniforms=Et.uniforms;let Ft=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=Lt.uniform),ip(T,Et),X.needsLights=s_(T),X.lightsStateVersion=It,X.needsLights&&(Ft.ambientLightColor.value=q.state.ambient,Ft.lightProbe.value=q.state.probe,Ft.sunLights.value=q.state.sun,Ft.sunLightShadows.value=q.state.sunShadow,Ft.directionalLights.value=q.state.directional,Ft.directionalLightShadows.value=q.state.directionalShadow,Ft.spotLights.value=q.state.spot,Ft.spotLightShadows.value=q.state.spotShadow,Ft.rectAreaLights.value=q.state.rectArea,Ft.ltc_1.value=q.state.rectAreaLTC1,Ft.ltc_2.value=q.state.rectAreaLTC2,Ft.pointLights.value=q.state.point,Ft.pointLightShadows.value=q.state.pointShadow,Ft.hemisphereLights.value=q.state.hemi,Ft.sunShadowMatrix.value=q.state.sunShadowMatrix,Ft.sunShadowCascade.value=q.state.sunShadowCascade,Ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ft.spotLightMatrix.value=q.state.spotLightMatrix,Ft.spotLightMap.value=q.state.spotLightMap,Ft.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=v.state.lightProbeGridArray.length>0,X.currentProgram=ae,X.uniformsList=null,ae}function np(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=eo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ip(T,B){let Q=U.get(T);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function e_(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let Q=0,X=T.length;Q<X;Q++){let q=T[Q];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function n_(T,B,Q,X,q){B.isScene!==!0&&(B=et),G.resetTextureUnits();let Tt=B.fog,It=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Et=rt===null?I.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:re.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,kt=st.get(X.envMap||It,Ut),ee=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ae=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ft=!!Q.morphAttributes.position,ye=!!Q.morphAttributes.normal,$e=!!Q.morphAttributes.color,De=fi;X.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(De=I.toneMapping);let Ae=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,dn=Ae!==void 0?Ae.length:0,Rt=U.get(X),bn=v.state.lights;if(Qt===!0&&(ue===!0||T!==$)){let Ie=T===$&&X.id===O;Lt.setState(X,T,Ie)}let pe=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==bn.state.version||Rt.outputColorSpace!==Et||q.isBatchedMesh&&Rt.batching===!1||!q.isBatchedMesh&&Rt.batching===!0||q.isBatchedMesh&&Rt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Rt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Rt.instancing===!1||!q.isInstancedMesh&&Rt.instancing===!0||q.isSkinnedMesh&&Rt.skinning===!1||!q.isSkinnedMesh&&Rt.skinning===!0||q.isInstancedMesh&&Rt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Rt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Rt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Rt.instancingMorph===!1&&q.morphTexture!==null||Rt.envMap!==kt||X.fog===!0&&Rt.fog!==Tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Lt.numPlanes||Rt.numIntersection!==Lt.numIntersection)||Rt.vertexAlphas!==ee||Rt.vertexTangents!==ae||Rt.morphTargets!==Ft||Rt.morphNormals!==ye||Rt.morphColors!==$e||Rt.toneMapping!==De||Rt.morphTargetsCount!==dn||!!Rt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Rt.__version=X.version);let Kn=Rt.currentProgram;pe===!0&&(Kn=ol(X,B,q),z&&X.isNodeMaterial&&z.onUpdateProgram(X,Kn,Rt));let wi=!1,fs=!1,Mr=!1,we=Kn.getUniforms(),Ge=Rt.uniforms;if(_.useProgram(Kn.program)&&(wi=!0,fs=!0,Mr=!0),X.id!==O&&(O=X.id,fs=!0),Rt.needsLights){let Ie=e_(v.state.lightProbeGridArray,q);Rt.lightProbeGrid!==Ie&&(Rt.lightProbeGrid=Ie,fs=!0)}if(wi||$!==T){_.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(L,"projectionMatrix",T.projectionMatrix),we.setValue(L,"viewMatrix",T.matrixWorldInverse);let ms=we.map.cameraPosition;ms!==void 0&&ms.setValue(L,S.setFromMatrixPosition(T.matrixWorld)),b.logarithmicDepthBuffer&&we.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&we.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,fs=!0,Mr=!0)}if(Rt.needsLights&&(bn.state.sunShadowMap.length>0&&we.setValue(L,"sunShadowMap",bn.state.sunShadowMap,G),bn.state.directionalShadowMap.length>0&&we.setValue(L,"directionalShadowMap",bn.state.directionalShadowMap,G),bn.state.spotShadowMap.length>0&&we.setValue(L,"spotShadowMap",bn.state.spotShadowMap,G),bn.state.pointShadowMap.length>0&&we.setValue(L,"pointShadowMap",bn.state.pointShadowMap,G)),q.isSkinnedMesh){we.setOptional(L,q,"bindMatrix"),we.setOptional(L,q,"bindMatrixInverse");let Ie=q.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),we.setValue(L,"boneTexture",Ie.boneTexture,G))}q.isBatchedMesh&&(we.setOptional(L,q,"batchingTexture"),we.setValue(L,"batchingTexture",q._matricesTexture,G),we.setOptional(L,q,"batchingIdTexture"),we.setValue(L,"batchingIdTexture",q._indirectTexture,G),we.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&we.setValue(L,"batchingColorTexture",q._colorsTexture,G));let ps=Q.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&k.update(q,Q,Kn),(fs||Rt.receiveShadow!==q.receiveShadow)&&(Rt.receiveShadow=q.receiveShadow,we.setValue(L,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Ge.envMapIntensity.value=B.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=IS()),fs){if(we.setValue(L,"toneMappingExposure",I.toneMappingExposure),Rt.needsLights&&i_(Ge,Mr),Tt&&X.fog===!0&&Pt.refreshFogUniforms(Ge,Tt),Pt.refreshMaterialUniforms(Ge,X,j,W,v.state.transmissionRenderTarget[T.id]),Rt.needsLights&&Rt.lightProbeGrid){let Ie=Rt.lightProbeGrid;Ge.probesSH.value=Ie.texture,Ge.probesMin.value.copy(Ie.boundingBox.min),Ge.probesMax.value.copy(Ie.boundingBox.max),Ge.probesResolution.value.copy(Ie.resolution)}eo.upload(L,np(Rt),Ge,G)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(eo.upload(L,np(Rt),Ge,G),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&we.setValue(L,"center",q.center),we.setValue(L,"modelViewMatrix",q.modelViewMatrix),we.setValue(L,"normalMatrix",q.normalMatrix),we.setValue(L,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Ie=X.uniformsGroups;for(let ms=0,Sr=Ie.length;ms<Sr;ms++){let rp=Ie[ms];ct.update(rp,Kn),ct.bind(rp,Kn)}}return Kn}function i_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function s_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(T,B,Q){let X=U.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),U.get(T.texture).__webglTexture=B,U.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let Q=U.get(T);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Q=0){rt=T,J=B,Z=Q;let X=null,q=!1,Tt=!1;if(T){let Et=U.get(T);if(Et.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,Et.__webglFramebuffer),tt.copy(T.viewport),vt.copy(T.scissor),K=T.scissorTest,_.viewport(tt),_.scissor(vt),_.setScissorTest(K),O=-1;return}else if(Et.__webglFramebuffer===void 0)G.setupRenderTarget(T);else if(Et.__hasExternalTextures)G.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ee=T.depthTexture;if(Et.__boundDepthTexture!==ee){if(ee!==null&&U.has(ee)&&(T.width!==ee.image.width||T.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(T)}}let Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Tt=!0);let kt=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?X=kt[B][Q]:X=kt[B],q=!0):T.samples>0&&G.useMultisampledRTT(T)===!1?X=U.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?X=kt[Q]:X=kt,tt.copy(T.viewport),vt.copy(T.scissor),K=T.scissorTest}else tt.copy(yt).multiplyScalar(j).floor(),vt.copy(Bt).multiplyScalar(j).floor(),K=ge;if(Q!==0&&(X=H),_.bindFramebuffer(L.FRAMEBUFFER,X)&&_.drawBuffers(T,X),_.viewport(tt),_.scissor(vt),_.setScissorTest(K),q){let Et=U.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,Q)}else if(Tt){let Et=B;for(let Ut=0;Ut<T.textures.length;Ut++){let kt=U.get(T.textures[Ut]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ut,kt.__webglTexture,Q,Et)}}else if(T!==null&&Q!==0){let Et=U.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,Q)}O=-1};function sp(T){let B=U.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=b.textureFormatReadable(T.format),B.__typeReadable=b.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,Q,X,q,Tt,It,Et=0){if(!(T&&T.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){_.bindFramebuffer(L.FRAMEBUFFER,Ut);try{let kt=T.textures[Et],ee=kt.format,ae=kt.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et);let Ft=sp(kt);if(Ft.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&Q>=0&&Q<=T.height-q&&L.readPixels(B,Q,X,q,St.convert(ee),St.convert(ae),Tt)}finally{let kt=rt!==null?U.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,B,Q,X,q,Tt,It,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(B>=0&&B<=T.width-X&&Q>=0&&Q<=T.height-q){_.bindFramebuffer(L.FRAMEBUFFER,Ut);let kt=T.textures[Et],ee=kt.format,ae=kt.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et);let Ft=sp(kt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,Tt.byteLength,L.STREAM_READ),L.readPixels(B,Q,X,q,St.convert(ee),St.convert(ae),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let $e=rt!==null?U.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,$e);let De=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gm(L,De,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Tt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ye),L.deleteSync(De),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Q=0){let X=Math.pow(2,-Q),q=Math.floor(T.image.width*X),Tt=Math.floor(T.image.height*X),It=B!==null?B.x:0,Et=B!==null?B.y:0;G.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Q,0,0,It,Et,q,Tt),_.unbindTexture()},this.copyTextureToTexture=function(T,B,Q=null,X=null,q=0,Tt=0){let It,Et,Ut,kt,ee,ae,Ft,ye,$e,De=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(Q!==null)It=Q.max.x-Q.min.x,Et=Q.max.y-Q.min.y,Ut=Q.isBox3?Q.max.z-Q.min.z:1,kt=Q.min.x,ee=Q.min.y,ae=Q.isBox3?Q.min.z:0;else{let Ge=Math.pow(2,-q);It=Math.floor(De.width*Ge),Et=Math.floor(De.height*Ge),T.isDataArrayTexture?Ut=De.depth:T.isData3DTexture?Ut=Math.floor(De.depth*Ge):Ut=1,kt=0,ee=0,ae=0}X!==null?(Ft=X.x,ye=X.y,$e=X.z):(Ft=0,ye=0,$e=0);let Ae=St.convert(B.format),dn=St.convert(B.type),Rt;B.isData3DTexture?(G.setTexture3D(B,0),Rt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(G.setTexture2DArray(B,0),Rt=L.TEXTURE_2D_ARRAY):(G.setTexture2D(B,0),Rt=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let bn=_.getParameter(L.UNPACK_ROW_LENGTH),pe=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Kn=_.getParameter(L.UNPACK_SKIP_PIXELS),wi=_.getParameter(L.UNPACK_SKIP_ROWS),fs=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),_.pixelStorei(L.UNPACK_SKIP_ROWS,ee),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ae);let Mr=T.isDataArrayTexture||T.isData3DTexture,we=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Ge=U.get(T),ps=U.get(B),Ie=U.get(Ge.__renderTarget),ms=U.get(ps.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ie.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Sr=0;Sr<Ut;Sr++)Mr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,U.get(T).__webglTexture,q,ae+Sr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,U.get(B).__webglTexture,Tt,$e+Sr)),L.blitFramebuffer(kt,ee,It,Et,Ft,ye,It,Et,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||U.has(T)){let Ge=U.get(T),ps=U.get(B);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let Ie=0;Ie<Ut;Ie++)Mr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,q,ae+Ie):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,q),we?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ps.__webglTexture,Tt,$e+Ie):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ps.__webglTexture,Tt),q!==0?L.blitFramebuffer(kt,ee,It,Et,Ft,ye,It,Et,L.COLOR_BUFFER_BIT,L.NEAREST):we?L.copyTexSubImage3D(Rt,Tt,Ft,ye,$e+Ie,kt,ee,It,Et):L.copyTexSubImage2D(Rt,Tt,Ft,ye,kt,ee,It,Et);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Rt,Tt,Ft,ye,$e,It,Et,Ut,Ae,dn,De.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Rt,Tt,Ft,ye,$e,It,Et,Ut,Ae,De.data):L.texSubImage3D(Rt,Tt,Ft,ye,$e,It,Et,Ut,Ae,dn,De):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Tt,Ft,ye,It,Et,Ae,dn,De.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Tt,Ft,ye,De.width,De.height,Ae,De.data):L.texSubImage2D(L.TEXTURE_2D,Tt,Ft,ye,It,Et,Ae,dn,De);_.pixelStorei(L.UNPACK_ROW_LENGTH,bn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Kn),_.pixelStorei(L.UNPACK_SKIP_ROWS,wi),_.pixelStorei(L.UNPACK_SKIP_IMAGES,fs),Tt===0&&B.generateMipmaps&&L.generateMipmap(Rt),_.unbindTexture()},this.initRenderTarget=function(T){U.get(T).__webglFramebuffer===void 0&&G.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?G.setTextureCube(T,0):T.isData3DTexture?G.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?G.setTexture2DArray(T,0):G.setTexture2D(T,0),_.unbindTexture()},this.resetState=function(){J=0,Z=0,rt=null,_.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function gi(n){let t=n|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gn(n,t,e){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}var Ia=n=>n*n*n*(n*(n*6-15)+10),Bi=(n,t,e)=>n+(t-n)*e,PS=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],LS=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Pa=class{constructor(t=1){let e=gi(t),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise2(t,e){let i=this.perm,s=Math.floor(t),r=Math.floor(e),o=t-s,a=e-r,l=s&255,c=r&255,h=(f,m,x,g)=>{let p=PS[i[i[f]+m]&7];return p[0]*x+p[1]*g},d=Ia(o),u=Ia(a);return Bi(Bi(h(l,c,o,a),h(l+1,c,o-1,a),d),Bi(h(l,c+1,o,a-1),h(l+1,c+1,o-1,a-1),d),u)}noise3(t,e,i){let s=this.perm,r=Math.floor(t),o=Math.floor(e),a=Math.floor(i),l=t-r,c=e-o,h=i-a,d=r&255,u=o&255,f=a&255,m=(w,C,M,E,v,R)=>{let y=LS[s[s[s[w]+C]+M]%12];return y[0]*E+y[1]*v+y[2]*R},x=Ia(l),g=Ia(c),p=Ia(h);return Bi(Bi(Bi(m(d,u,f,l,c,h),m(d+1,u,f,l-1,c,h),x),Bi(m(d,u+1,f,l,c-1,h),m(d+1,u+1,f,l-1,c-1,h),x),g),Bi(Bi(m(d,u,f+1,l,c,h-1),m(d+1,u,f+1,l-1,c,h-1),x),Bi(m(d,u+1,f+1,l,c-1,h-1),m(d+1,u+1,f+1,l-1,c-1,h-1),x),g),p)}fbm2(t,e,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise2(t*a,e*a),c+=o,o*=r,a*=s;return l/c}};var Rd={" ":["00000","00000","00000","00000","00000","00000","00000"],A:["01110","10001","10001","11111","10001","10001","10001"],B:["11110","10001","10001","11110","10001","10001","11110"],C:["01110","10001","10000","10000","10000","10001","01110"],D:["11110","10001","10001","10001","10001","10001","11110"],E:["11111","10000","10000","11110","10000","10000","11111"],F:["11111","10000","10000","11110","10000","10000","10000"],G:["01110","10001","10000","10111","10001","10001","01111"],H:["10001","10001","10001","11111","10001","10001","10001"],I:["01110","00100","00100","00100","00100","00100","01110"],J:["00111","00010","00010","00010","00010","10010","01100"],K:["10001","10010","10100","11000","10100","10010","10001"],L:["10000","10000","10000","10000","10000","10000","11111"],M:["10001","11011","10101","10101","10001","10001","10001"],N:["10001","11001","10101","10011","10001","10001","10001"],O:["01110","10001","10001","10001","10001","10001","01110"],P:["11110","10001","10001","11110","10000","10000","10000"],Q:["01110","10001","10001","10001","10101","10010","01101"],R:["11110","10001","10001","11110","10100","10010","10001"],S:["01111","10000","10000","01110","00001","00001","11110"],T:["11111","00100","00100","00100","00100","00100","00100"],U:["10001","10001","10001","10001","10001","10001","01110"],V:["10001","10001","10001","10001","10001","01010","00100"],W:["10001","10001","10001","10101","10101","11011","10001"],X:["10001","10001","01010","00100","01010","10001","10001"],Y:["10001","10001","01010","00100","00100","00100","00100"],Z:["11111","00001","00010","00100","01000","10000","11111"],0:["01110","10001","10011","10101","11001","10001","01110"],1:["00100","01100","00100","00100","00100","00100","01110"],2:["01110","10001","00001","00010","00100","01000","11111"],3:["11110","00001","00001","01110","00001","00001","11110"],4:["00010","00110","01010","10010","11111","00010","00010"],5:["11111","10000","11110","00001","00001","10001","01110"],6:["00110","01000","10000","11110","10001","10001","01110"],7:["11111","00001","00010","00100","01000","01000","01000"],8:["01110","10001","10001","01110","10001","10001","01110"],9:["01110","10001","10001","01111","00001","00010","01100"],"-":["00000","00000","00000","11111","00000","00000","00000"],".":["00000","00000","00000","00000","00000","01100","01100"],"!":["00100","00100","00100","00100","00100","00000","00100"],"&":["01100","10010","10100","01000","10101","10010","01101"],"'":["00100","00100","01000","00000","00000","00000","00000"]};function Km(n){let t=[];return[...n.toUpperCase()].forEach((e,i)=>{let s=Rd[e];s&&s.forEach((r,o)=>[...r].forEach((a,l)=>{a==="1"&&t.push([i*6+l,o])}))}),t}var Ls=class extends Error{},jm=["blocks","items","loot","recipes","goals","textures","sounds","worldgen","game","music"],Qm=["tilled","planted","ate","equipped"],t0=["noise","capped","bark","rings","planks","cells","waves","bricks","ore","stripes","blades","stalks","pixelart","image","layers","ref"],e0=/^[a-z][a-z0-9_]*$/,n0=typeof window>"u"&&typeof process<"u"&&!!process.versions?.node;async function NS(){if(globalThis.__VOXELCRAFT_CONTENT__)return structuredClone(globalThis.__VOXELCRAFT_CONTENT__);let n={},t=new URL("../data/",import.meta.url);if(n0){let e=await import("node:fs/promises"),i=await import("node:path"),{fileURLToPath:s}=await import("node:url"),r=process.env.VOXELCRAFT_DATA||s(t);for(let o of jm){let a=i.join(r,o+".json"),l;try{l=await e.readFile(a,"utf8")}catch{throw new Ls(`Cannot read ${a}`)}try{n[o]=JSON.parse(l)}catch(c){throw new Ls(`${o}.json is not valid JSON: ${c.message}`)}}return n}return await Promise.all(jm.map(async e=>{let i=await fetch(new URL(e+".json",t),{cache:"no-cache"});if(!i.ok)throw new Ls(`Cannot load data/${e}.json (HTTP ${i.status})`);let s=await i.text();try{n[e]=JSON.parse(s)}catch(r){throw new Ls(`data/${e}.json is not valid JSON: ${r.message}`)}})),n}function DS(n){let t=[],e=S=>t.push(S),i=S=>typeof S=="number"&&Number.isFinite(S),s=Array.isArray,r=n.blocks?.blocks,o=n.items?.items,a=n.items?.tiers||{},l=n.textures?.tiles||{},c=n.textures?.sprites||{},h=n.loot?.tables||{},d=n.sounds?.materials||{},u=n.recipes?.recipes,f=n.recipes?.groups||{},m=n.recipes?.stations||{},x=n.recipes?.windows||{};if(s(r)||e('blocks.json: "blocks" must be a list'),s(o)||e('items.json: "items" must be a list'),s(u)||e('recipes.json: "recipes" must be a list'),s(n.goals?.goals)||e('goals.json: "goals" must be a list'),t.length)throw new Ls(t.join(`
`));let g=new Map,p=new Map,w=new Set,C=new Set,M=(S,nt,et)=>{if(typeof S!="string"||!e0.test(S)){e(`${et}: key "${S}" must be lowercase letters, digits and underscores, starting with a letter`);return}if(!Number.isInteger(nt)||nt<1){e(`${et}: "id" must be a positive whole number`);return}g.has(S)&&e(`${et}: key "${S}" is used twice`),p.has(nt)&&e(`${et}: id ${nt} is already used by "${p.get(nt)}"`),g.set(S,nt),p.set(nt,S)};r.forEach((S,nt)=>{M(S.key,S.id,`blocks.json #${nt+1} (${S.key})`),Number.isInteger(S.id)&&S.id>255&&e(`blocks.json "${S.key}": block ids must be 1-255 (they are stored in one byte per block)`),w.add(S.key)}),o.forEach((S,nt)=>{M(S.key,S.id,`items.json #${nt+1} (${S.key})`),C.add(S.key)});let E=(S,nt)=>g.has(S)?g.get(S):(e(`${nt}: unknown block/item "${S}"`),0),v=(S,nt)=>w.has(S)?g.get(S):(e(`${nt}: "${S}" is not a block`),0),R=Object.keys(l);R.length||e("textures.json: no tiles defined");let y=(S,nt,et)=>{if(!nt||typeof nt!="object")return e(`textures.json tile "${et}": must be an object`);if(!t0.includes(nt.type))return e(`textures.json tile "${et}": unknown type "${nt.type}" (use one of ${t0.join(", ")})`);let dt=(lt,L)=>{l[lt]||e(`textures.json tile "${et}": ${L} "${lt}" is not a tile`)};nt.type==="capped"&&(dt(nt.cap,"cap"),dt(nt.body,"body")),nt.type==="ore"&&dt(nt.base,"base"),nt.type==="ref"&&dt(nt.tile,"tile"),nt.type==="layers"&&(nt.layers||[]).forEach((lt,L)=>y(S,lt,`${et}.layers[${L}]`)),nt.type==="pixelart"&&A(nt,`tile "${et}"`),nt.type==="image"&&typeof nt.src!="string"&&e(`textures.json tile "${et}": image needs "src"`)};function A(S,nt){if(!s(S.rows)||!S.rows.length)return e(`textures.json ${nt}: pixelart needs "rows"`);(S.rows.length>16||S.rows.some(et=>typeof et!="string"||et.length>16))&&e(`textures.json ${nt}: pixelart is at most 16 rows of 16 characters`);for(let et of S.rows)for(let dt of et)if(dt!=="."&&!S.palette?.[dt]){e(`textures.json ${nt}: character "${dt}" is not in the palette`);return}}for(let S of R)y(S,l[S],S);let I=Object.keys(x),P=r.map((S,nt)=>{let et=`blocks.json "${S.key}"`;for(let lt of["top","bottom","side"])l[S.tiles?.[lt]]||e(`${et}: tiles.${lt} "${S.tiles?.[lt]}" is not defined in textures.json`);(!i(S.hardness)||S.hardness<0)&&e(`${et}: "hardness" must be a number >= 0`),S.tool!=null&&typeof S.tool!="string"&&e(`${et}: "tool" must be a string (pickaxe, axe, shovel, ...) or omitted`),S.loot!=null&&!h[S.loot]&&e(`${et}: loot table "${S.loot}" is not defined in loot.json`),S.shatterLoot!=null&&!h[S.shatterLoot]&&e(`${et}: shatterLoot table "${S.shatterLoot}" is not defined in loot.json`),S.role!=null&&!["log","leaf"].includes(S.role)&&e(`${et}: "role" must be "log" or "leaf"`),S.opens!=null&&!x[S.opens]&&e(`${et}: opens "${S.opens}" is not a window in recipes.json`),S.model!=null&&!(S.model.type==="torch"&&i(S.model.height)&&S.model.height>0&&S.model.height<=1)&&e(`${et}: "model" must be { "type": "torch", "height": 0-1, "lean": [dx, dz] }`),S.model?.lean!=null&&!(s(S.model.lean)&&S.model.lean.length===2&&S.model.lean.every(Number.isInteger))&&e(`${et}: model.lean must be [dx, dz]`),S.support!=null&&!(s(S.support)&&S.support.length===3&&S.support.every(Number.isInteger))&&e(`${et}: "support" must be [dx, dy, dz]: where the block it hangs on is`),S.fuel!=null&&!(i(S.fuel)&&S.fuel>0)&&e(`${et}: "fuel" must be the seconds it burns in a furnace`),S.glow!=null&&!(i(S.glow)&&S.glow>=0&&S.glow<=1)&&e(`${et}: "glow" must be 0-1 (how much the block shines for itself, even in the dark)`);for(let lt of["light","lightFilter"])S[lt]!=null&&!(Number.isInteger(S[lt])&&S[lt]>=0&&S[lt]<=15)&&e(`${et}: "${lt}" must be a whole number 0-15`);S.water&&!(Number.isInteger(S.water.level)&&S.water.level>=1&&S.water.level<=7)&&e(`${et}: water.level must be 1-7 (7 = source)`);let dt={id:S.id,key:S.key,name:S.name??S.key,top:S.tiles?.top,bottom:S.tiles?.bottom,side:S.tiles?.side,hard:S.hardness??0,tool:S.tool??null,need:S.need??0,sound:S.sound??"default",solid:S.solid??!S.plant,opaque:S.opaque??!S.plant,creative:!!S.creative,waterLevel:S.water?S.water.level:0,role:S.role??null,opens:S.opens??null,gravity:!!S.gravity,model:S.model?{type:S.model.type,height:S.model.height,lean:S.model.lean??[0,0]}:null,support:S.support??null,fuel:S.fuel??0,glow:S.glow??0,light:S.light??0,lightFilter:S.lightFilter??0,hydration:null,loot:S.loot??(h[S.key]?S.key:null),shatterLoot:S.shatterLoot??null,tillsInto:S.tillsInto?v(S.tillsInto,`${et} tillsInto`):0,spreadsOnto:S.spreadsOnto?v(S.spreadsOnto,`${et} spreadsOnto`):0,plant:null};if(S.hydration){let lt=S.hydration;dt.hydration={wet:lt.wet?v(lt.wet,`${et} hydration.wet`):0,dry:lt.dry?v(lt.dry,`${et} hydration.dry`):0,decayInto:lt.decay?v(lt.decay.into,`${et} hydration.decay.into`):0,decayRate:lt.decay?.chancePerSecond??0},!dt.hydration.wet&&!dt.hydration.dry&&e(`${et}: hydration needs "wet" (the damp version) or "dry" (the dry version)`)}if(S.plant){let lt=S.plant;["cross","hash"].includes(lt.kind)||e(`${et}: plant.kind must be "cross" or "hash"`),(!i(lt.height)||lt.height<=0||lt.height>1)&&e(`${et}: plant.height must be between 0 and 1`),dt.plant={kind:lt.kind==="hash"?2:1,height:lt.height,growth:lt.growth?{next:v(lt.growth.next,`${et} plant.growth.next`),rate:lt.growth.chancePerSecond??0,soil:v(lt.growth.soil,`${et} plant.growth.soil`)}:null,stage:lt.stage?{label:lt.stage.label??dt.name,step:lt.stage.step??1,name:lt.stage.name??"",ripe:!!lt.stage.ripe,crop:!!lt.stage.crop}:null,grows:lt.grows?{trees:s(lt.grows.trees)?lt.grows.trees:[],rate:lt.grows.chancePerSecond??0,soil:(s(lt.grows.soil)?lt.grows.soil:[lt.grows.soil]).map(L=>v(L,`${et} plant.grows.soil`))}:null,spreads:lt.spreads?{block:v(lt.spreads.block,`${et} plant.spreads.block`),rate:lt.spreads.chancePerSecond??0,onto:v(lt.spreads.onto,`${et} plant.spreads.onto`),range:lt.spreads.range??2}:null}}return dt}),z=(n.game?.equipment?.slots||[]).map(S=>S.id);z.length||e('game.json: "equipment.slots" must list the equipment slots');let H=o.map(S=>{let nt=`items.json "${S.key}"`,et=null;if(S.tool){let dt=a[S.tool.tier];dt||e(`${nt}: tier "${S.tool.tier}" is not defined in items.json "tiers"`),typeof S.tool.type!="string"&&e(`${nt}: tool.type is required`),et={type:S.tool.type,tier:dt?.level??1,speed:dt?.speed??1,uses:dt?.durability??100,head:dt?.head??S.tool.tier}}return!c[S.key]&&!et&&e(`${nt}: no sprite - add "${S.key}" to textures.json "sprites"`),S.equip&&!z.includes(S.equip.slot)&&e(`${nt}: equip.slot "${S.equip.slot}" is not one of the slots in game.json equipment (${z.join(", ")})`),S.equip&&![S.equip.armor??0,S.equip.slots??0].every(dt=>Number.isInteger(dt)&&dt>=0)&&e(`${nt}: equip.armor and equip.slots must be whole numbers`),S.fuel!=null&&!(i(S.fuel)&&S.fuel>0)&&e(`${nt}: "fuel" must be the seconds it burns in a furnace`),{id:S.id,key:S.key,name:S.name??S.key,stack:S.stack??(et?1:64),tool:et,food:S.food??0,fuel:S.fuel??0,creative:!!S.creative,offhand:!!S.offhand,equip:S.equip?{slot:S.equip.slot,armor:S.equip.armor??0,slots:S.equip.slots??0}:null,saturation:S.saturation??(S.food??0)*.6,places:S.places?Object.fromEntries(Object.entries(S.places).map(([dt,lt])=>(["up","north","south","east","west"].includes(dt)||e(`${nt}: places.${dt} must be up, north, south, east or west (the face you click)`),[dt,v(lt,`${nt} places.${dt}`)]))):null,plants:S.plants?{block:v(S.plants.block,`${nt} plants.block`),on:[].concat(S.plants.on).map(dt=>v(dt,`${nt} plants.on`))}:null}});for(let[S,nt]of Object.entries(c))C.has(S)?nt.type==="pixelart"&&A(nt,`sprite "${S}"`):e(`textures.json sprite "${S}" does not match any item in items.json`);for(let[S,nt]of Object.entries(n.textures?.toolHeads||{}))(!nt.light||!nt.base||!nt.dark)&&e(`textures.json toolHeads "${S}" needs light, base and dark colours`);for(let S of o)S.tool&&!n.textures?.toolHeads?.[a[S.tool.tier]?.head??S.tool.tier]&&e(`items.json "${S.key}": no toolHeads colours for head "${a[S.tool.tier]?.head??S.tool.tier}" in textures.json`);let D={};for(let[S,nt]of Object.entries(h)){if(!s(nt)){e(`loot.json "${S}": must be a list of entries`);continue}D[S]=nt.map((et,dt)=>{let lt=`loot.json "${S}" #${dt+1}`,L=et.chance??1;(!i(L)||L<0||L>1)&&e(`${lt}: chance must be 0-1`);let xe=et.count??1,[le,b]=s(xe)?xe:[xe,xe];return(!Number.isInteger(le)||!Number.isInteger(b)||le<0||b<le)&&e(`${lt}: count must be a whole number or [min, max]`),{id:E(et.item,lt),chance:L,min:le,max:b}})}let F={};for(let[S,nt]of Object.entries(f))F[S]=nt.map(et=>E(et,`recipes.json group "${S}"`));let J={};for(let[S,nt]of Object.entries(m))J[S]={label:nt.label??S};let Z=u.map((S,nt)=>{let et=`recipes.json #${nt+1} (${S.out})`;return S.at!=null&&!J[S.at]&&e(`${et}: station "${S.at}" is not defined in "stations"`),(!s(S.in)||!S.in.length)&&e(`${et}: "in" needs at least one ingredient`),{out:E(S.out,et),n:S.n??1,station:S.at??null,label:S.label??null,ins:(S.in||[]).map(([dt,lt])=>((!Number.isInteger(lt)||lt<1)&&e(`${et}: ingredient counts must be whole numbers >= 1`),typeof dt=="string"&&dt.startsWith("@")?F[dt.slice(1)]?[F[dt.slice(1)],lt]:(e(`${et}: unknown group "${dt}"`),[0,lt]):[E(dt,et),lt]))}}),rt={};for(let[S,nt]of Object.entries(x)){for(let et of nt.stations||[])et!==null&&!J[et]&&e(`recipes.json window "${S}": station "${et}" is not defined`);rt[S]={title:nt.title??S,sub:nt.sub??"",stations:nt.stations??[null],furnace:!!nt.furnace}}let O=(n.recipes.smelting||[]).map((S,nt)=>{let et=`recipes.json smelting #${nt+1} (${S.in})`,dt=S.seconds??10;return(!i(dt)||dt<=0)&&e(`${et}: "seconds" must be more than 0`),{in:E(S.in,et),out:E(S.out,et),seconds:dt}}),$=new Set;for(let S of O)$.has(S.in)&&e(`recipes.json smelting: "${p.get(S.in)}" is smelted twice`),$.add(S.in);let tt=new Map;for(let S of P)S.fuel&&tt.set(S.id,S.fuel);for(let S of H)S.fuel&&tt.set(S.id,S.fuel);rt.hand||e('recipes.json: a "hand" window is required (the inventory)');let vt=n.goals.goals.map((S,nt)=>{let et=`goals.json #${nt+1}`;if(typeof S.text!="string"&&e(`${et}: "text" is required`),S.collectedAny){let dt=S.collectedAny.map(lt=>E(lt,et));return{text:S.text,done:lt=>dt.some(L=>lt.collected.has(L))}}if(S.collected){let dt=E(S.collected,et);return{text:S.text,done:lt=>lt.collected.has(dt)}}if(S.crafted){let dt=E(S.crafted,et);return{text:S.text,done:lt=>lt.crafted.has(dt)}}if(S.craftedAny){let dt=S.craftedAny.map(lt=>E(lt,et));return{text:S.text,done:lt=>dt.some(L=>lt.crafted.has(L))}}return S.flag?(Qm.includes(S.flag)||e(`${et}: flag "${S.flag}" is not one the game sets (${Qm.join(", ")})`),{text:S.text,done:dt=>dt.flags.has(S.flag)}):(e(`${et}: needs one of collected / collectedAny / crafted / craftedAny / flag`),{text:S.text,done:()=>!1})}),K=n.worldgen||{},xt={};for(let[S,nt]of Object.entries(K.blocks||{}))S!=="fillerDepth"&&(xt[S]=v(nt,`worldgen.json blocks.${S}`));let _t={...K,ids:xt,ores:(K.ores||[]).map((S,nt)=>({...S,id:v(S.block,`worldgen.json ores[${nt}]`)})),trees:{...K.trees,variants:(K.trees?.variants||[]).map((S,nt)=>{let et=`worldgen.json trees.variants[${nt}] (${S.key})`;typeof S.key!="string"&&e(`${et}: "key" is required`),["round","tall","cone","bush"].includes(S.shape)||e(`${et}: shape must be round, tall, cone or bush`),(!i(S.weight)||S.weight<=0)&&e(`${et}: weight must be more than 0`),s(S.trunk)&&S.trunk.length===2&&S.trunk.every(Number.isInteger)&&S.trunk[0]>=1&&S.trunk[1]>=S.trunk[0]||e(`${et}: trunk must be [min, max] whole numbers`);let dt=S.heights??[0,99];return s(dt)&&dt.length===2&&dt[1]>=dt[0]||e(`${et}: heights must be [lowest, highest] terrain height`),{key:S.key,weight:S.weight,shape:S.shape,trunk:S.trunk,heights:dt,logId:v(S.log,`${et} log`),leavesId:v(S.leaves,`${et} leaves`)}})},groundCover:{...K.groundCover,variants:(K.groundCover?.variants||[]).map((S,nt)=>({...S,id:v(S.block,`worldgen.json groundCover.variants[${nt}]`)}))}};_t.trees.variants.length||e("worldgen.json: trees.variants needs at least one tree");let At=new Set(_t.trees.variants.map(S=>S.key));for(let S of P)for(let nt of S.plant?.grows?.trees??[])At.has(nt)||e(`blocks.json "${S.key}": plant.grows.trees "${nt}" is not a tree variant in worldgen.json`);let W={...n.game};W.creativeHotbarIds=(n.game?.creativeHotbar||[]).map(S=>v(S,"game.json creativeHotbar"));for(let S of["name","tagline"]){let nt=W.studio?.[S];if(typeof nt!="string"||!nt.trim())e(`game.json studio.${S} must be some text`);else for(let et of nt.toUpperCase())Rd[et]||e(`game.json studio.${S}: the logo font has no "${et}" (letters, digits, space and - . ! & ' work)`)}["shatter","land"].includes(W.treeFall?.mode)||e('game.json treeFall.mode must be "shatter" or "land"');for(let S of Object.keys(d))s(d[S])||e(`sounds.json material "${S}" must be a list of layers`);for(let S of P)S.sound!=="default"&&!d[S.sound]&&e(`blocks.json "${S.key}": sound "${S.sound}" is not defined in sounds.json (using "default" is fine)`);let j={};for(let[S,nt]of Object.entries(n.textures?.animations??{})){if(S.startsWith("_"))continue;let et=`textures.json animations "${S}"`;l[S]||e(`${et}: "${S}" is not a tile`),(!s(nt.frames)||nt.frames.length<2||nt.frames[0]!==S||nt.frames.some(dt=>!l[dt]))&&e(`${et}: frames must list at least two tiles, starting with "${S}" itself`),(!i(nt.fps)||nt.fps<=0||nt.fps>30)&&e(`${et}: fps must be 1-30`),j[S]={frames:nt.frames,fps:nt.fps}}let pt=["piano","bell","pluck"],Dt=["triangle","strings"],yt=["sine","drone"],Bt=n.music??{},ge=S=>Number.isInteger(S)&&S>=24&&S<=100;(!s(Bt.tracks)||Bt.tracks.length<2)&&e('music.json: "tracks" must list at least two tracks');let Xt=Bt.gapSeconds??[5,12];s(Xt)&&Xt.length===2&&Xt.every(i)&&Xt[0]>=0&&Xt[1]>=Xt[0]||e('music.json: "gapSeconds" must be [min, max] seconds of silence between tracks');let Qt=new Set,ue=(s(Bt.tracks)?Bt.tracks:[]).map((S,nt)=>{let et=`music.json track #${nt+1} (${S.key})`;(typeof S.key!="string"||!e0.test(S.key))&&e(`${et}: "key" must be lowercase letters, digits and underscores`),Qt.has(S.key)&&e(`${et}: key used twice`),Qt.add(S.key),typeof S.name!="string"&&e(`${et}: "name" is required`),(!i(S.bpm)||S.bpm<30||S.bpm>160)&&e(`${et}: bpm must be 30-160`),(!Number.isInteger(S.bars)||S.bars<4||S.bars>128)&&e(`${et}: bars must be a whole number 4-128`);let dt=S.barsPerChord??1;(!Number.isInteger(dt)||dt<1)&&e(`${et}: barsPerChord must be a whole number >= 1`),(!s(S.chords)||!S.chords.length)&&e(`${et}: "chords" needs at least one chord`);for(let[L,xe]of(s(S.chords)?S.chords:[]).entries())ge(xe.root)||e(`${et} chord #${L+1}: root must be a MIDI note 24-100`),(!s(xe.tones)||xe.tones.length<3||!xe.tones.every(ge))&&e(`${et} chord #${L+1}: tones must be at least three MIDI notes 24-100`);S.pad!=null&&!Dt.includes(S.pad)&&e(`${et}: pad must be one of ${Dt.join(", ")}`),S.bass!=null&&!yt.includes(S.bass)&&e(`${et}: bass must be one of ${yt.join(", ")}`),S.lead&&!pt.includes(S.lead.voice)&&e(`${et}: lead.voice must be one of ${pt.join(", ")}`),!S.lead&&!S.melody&&!S.arp&&e(`${et}: needs a lead, a melody or an arp (something to play)`),S.arp&&(pt.includes(S.arp.voice)||e(`${et}: arp.voice must be one of ${pt.join(", ")}`),(!s(S.arp.pattern)||!S.arp.pattern.length||!S.arp.pattern.every(L=>Number.isInteger(L)&&L>=0))&&e(`${et}: arp.pattern must be a list of chord-tone numbers`),(!i(S.arp.step)||S.arp.step<=0||S.arp.step>4)&&e(`${et}: arp.step must be 0-4 beats`)),S.melody&&!(s(S.melody)&&S.melody.every(L=>s(L)&&L.length===5&&Number.isInteger(L[0])&&L[0]>=0&&L[0]<S.bars&&i(L[1])&&L[1]>=0&&L[1]<4&&ge(L[2])&&i(L[3])&&L[3]>0&&i(L[4])))&&e(`${et}: melody entries must be [bar, beat, midi note, beats, loudness] inside the track`);let lt=S.lead?.density??[.8,.45,.3];return s(lt)&&lt.length===3&&lt.every(L=>i(L)&&L>=0&&L<=1)||e(`${et}: lead.density must be three chances 0-1`),{key:S.key,name:S.name,bpm:S.bpm,bars:S.bars,barsPerChord:dt,chords:S.chords??[],lead:S.lead?{voice:S.lead.voice,density:lt,leap:S.lead.leap??.1,rest:S.lead.rest??0}:null,pad:S.pad??null,bass:S.bass??null,arp:S.arp??null,melody:S.melody??null}});Qt.has(Bt.title)||e('music.json: "title" must name one of the tracks (the one the title screen plays)'),ue.filter(S=>S.key!==Bt.title).length<2&&e("music.json: the game needs at least two tracks besides the title theme, so there is something to shuffle");let te={gapSeconds:Xt,title:Bt.title,tracks:ue};if(t.length)throw new Ls(`Content data problems:
 - `+t.join(`
 - `));return{music:te,animations:j,smelting:O,fuelTime:tt,data:n,blocks:P,items:H,idOfKey:g,keyOfId:p,tileNames:R,tiles:l,sprites:c,loot:D,groups:F,stations:J,recipes:Z,windows:rt,goals:vt,worldgen:_t,game:W,sounds:n.sounds,textures:n.textures,blockById:new Map(P.map(S=>[S.id,S])),itemById:new Map(H.map(S=>[S.id,S]))}}var i0;try{i0=DS(await NS())}catch(n){throw!n0&&typeof document<"u"&&(document.body.innerHTML=`<pre style="margin:0;padding:24px;min-height:100vh;box-sizing:border-box;background:#1b0f0f;color:#ffd6d6;font:14px/1.5 Consolas,monospace;white-space:pre-wrap"><b style="font-size:18px">VoxelCraft could not load its content files</b>

`+String(n.message).replace(/</g,"&lt;")+`

Fix the file(s) under src/data/ and reload. See src/data/README.md.</pre>`,await new Promise(()=>{})),n}var Nt=i0;var Kt={AIR:0};for(let n of Nt.blocks)Kt[n.key.toUpperCase()]=n.id;var xi=Nt.tileNames,Le=8,or=Math.max(8,Math.ceil(xi.length/Le)),Id=n=>xi.indexOf(n),Fe={};for(let n of Nt.blocks)Fe[n.id]={key:n.key,name:n.name,top:n.top,bottom:n.bottom,side:n.side,hard:n.hard,sound:n.sound,tool:n.tool,need:n.need,...n.plant?{plant:n.plant.kind===2?"hash":"cross",h:n.plant.height}:{}};var Ze=256,io=new Uint16Array(Ze*3),Xe=new Uint8Array(Ze),Ln=new Uint8Array(Ze),de=new Uint8Array(Ze),Ds=new Uint8Array(Ze),jt=new Uint8Array(Ze),so=new Float32Array(Ze),ki=new Int8Array(Ze*2),_i=new Int8Array(Ze*3),La=new Uint8Array(Ze),Ns=new Float32Array(Ze),ns=new Uint8Array(Ze),Us=new Uint8Array(Ze),mh=new Uint8Array(Ze),Na=new Uint8Array(Ze),ro=new Uint8Array(Ze),zi=new Uint8Array(Ze),Pd=new Float32Array(Ze),yi=new Uint8Array(Ze),Da=new Uint8Array(Ze),Ua=new Map,oo=new Map,Ld=[0,0,0,0,0,0,0];for(let n of Nt.blocks)io[n.id*3]=Id(n.top),io[n.id*3+1]=Id(n.bottom),io[n.id*3+2]=Id(n.side),Ln[n.id]=n.solid?1:0,Xe[n.id]=n.opaque?1:0,n.waterLevel&&(de[n.id]=1,Ds[n.id]=n.waterLevel,n.waterLevel<7&&(Ld[n.waterLevel]=n.id)),n.plant&&(jt[n.id]=n.plant.kind,Ns[n.id]=n.plant.height,so[n.id]=.4,Ln[n.id]=0,Xe[n.id]=0),n.model?.type==="torch"&&(jt[n.id]=3,Ns[n.id]=n.model.height,so[n.id]=.16,Ln[n.id]=0,Xe[n.id]=0,ki[n.id*2]=n.model.lean[0],ki[n.id*2+1]=n.model.lean[1]),n.support&&(La[n.id]=1,_i.set(n.support,n.id*3)),n.role==="log"&&(ns[n.id]=1),n.role==="leaf"&&(Us[n.id]=1),n.tillsInto&&(mh[n.id]=n.tillsInto),n.spreadsOnto&&(Na[n.id]=n.spreadsOnto),n.opens&&oo.set(n.id,n.opens),n.gravity&&(ro[n.id]=1),zi[n.id]=n.light,Pd[n.id]=n.glow,yi[n.id]=n.lightFilter,n.hydration&&(Ua.set(n.id,n.hydration),Da[n.id]=1);var gh=[...Nt.blocks.filter(n=>n.creative).map(n=>n.id),...Nt.items.filter(n=>n.creative).map(n=>n.id)];var Wn=(n,t)=>(n+32768)*65536+(t+32768),he=(n,t,e)=>(t*16+e)*16+n;var Xn=0,Fs=1,Fa=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,-1,0],[0,1,0]],Nd=Nt.game.lighting,Nn=Nd.skyLevel,xh=Nd.minBrightness;function ao(n){let t=Math.max(0,Math.min(Nn,n))/Nn;return Math.pow(t,Nd.gamma)}function r0(n){return xh+(1-xh)*ao(n)}function vh(n){return Math.pow(Math.max(0,Math.min(Nn,n))/Nn,1.25)}var _h=32768,Cn=(n,t,e)=>((n+_h)*65536+(e+_h))*64+t;function s0(n,t){t[1]=n%64;let e=Math.floor(n/64);t[0]=Math.floor(e/65536)-_h,t[2]=e%65536-_h}var yh=class{constructor(t){this.world=t,this.tmp=[0,0,0],this.carried=null,t.addChangeListener((e,i,s,r,o)=>this.onBlockChanged(e,i,s,r,o))}get hasEmitters(){return zi.some(t=>t>0)}emitAt(t,e,i,s){let r=this.carried;return Math.max(zi[s],r&&r.x===t&&r.y===e&&r.z===i?r.level:0)}setCarried(t,e,i,s){let r=this.carried;r&&s>0&&r.x===t&&r.y===e&&r.z===i&&r.level===s||!r&&!(s>0)||(this.carried=null,r&&this.refreshBlockLight(r.x,r.y,r.z),s>0&&this.world.getChunk(t>>4,i>>4)&&e>=0&&e<64&&!Xe[this.world.getBlock(t,e,i)]&&(this.carried={x:t,y:e,z:i,level:s},this.refreshBlockLight(t,e,i)))}refreshBlockLight(t,e,i){let s=this.world.getBlock(t,e,i),r=[],o=[],a=this.get(t,e,i,Fs);a>0&&(r.push([Cn(t,e,i),a]),this.set(t,e,i,Fs,0));let l=this.emitAt(t,e,i,s);l>0&&(this.set(t,e,i,Fs,l),o.push(Cn(t,e,i)));for(let[c,h,d]of Fa)this.get(t+c,e+h,i+d,Fs)>0&&o.push(Cn(t+c,e+h,i+d));o.push(...this.unspread(Fs,r)),this.propagate(Fs,o)}get(t,e,i,s){if(e<0||e>=64)return-1;let r=this.world.getChunk(t>>4,i>>4);if(!r)return-1;let o=r.light[he(t&15,e,i&15)];return s===Xn?o>>4:o&15}levelAt(t,e,i){if(e>=64)return Nn;if(e<0)return 0;let s=this.world.getChunk(t>>4,i>>4);if(!s)return Nn;let r=s.light[he(t&15,e,i&15)];return Math.max(r>>4,r&15)}set(t,e,i,s,r){let o=this.world.getChunk(t>>4,i>>4),a=he(t&15,e,i&15),l=o.light[a];o.light[a]=s===Xn?r<<4|l&15:l&240|r,o.dirty=!0;let c=t&15,h=i&15,d=t>>4,u=i>>4,f=(m,x)=>{let g=this.world.getChunk(m,x);g&&(g.dirty=!0)};c===0?f(d-1,u):c===15&&f(d+1,u),h===0?f(d,u-1):h===15&&f(d,u+1)}propagate(t,e){let i=this.world,s=this.tmp;for(let r=0;r<e.length;r++){s0(e[r],s);let o=s[0],a=s[1],l=s[2],c=this.get(o,a,l,t);if(!(c<=1))for(let[h,d,u]of Fa){let f=o+h,m=a+d,x=l+u;if(m<0||m>=64)continue;let g=i.getChunk(f>>4,x>>4);if(!g)continue;let p=g.data[he(f&15,m,x&15)];if(Xe[p])continue;let w=t===Xn&&d===-1&&c===Nn&&yi[p]===0?Nn:c-Math.max(1,yi[p]);w>this.get(f,m,x,t)&&(this.set(f,m,x,t,w),e.push(Cn(f,m,x)))}}}unspread(t,e){let i=this.world,s=this.tmp,r=[];for(let o=0;o<e.length;o++){let[a,l]=e[o];s0(a,s);let c=s[0],h=s[1],d=s[2];for(let[u,f,m]of Fa){let x=c+u,g=h+f,p=d+m,w=this.get(x,g,p,t);if(w<=0)continue;let C=i.getBlock(x,g,p);if(w<l||t===Xn&&f===-1&&l===Nn&&w===Nn&&yi[C]===0){if(t===Fs&&this.emitAt(x,g,p,C)>0){this.set(x,g,p,t,this.emitAt(x,g,p,C)),r.push(Cn(x,g,p));continue}this.set(x,g,p,t,0),e.push([Cn(x,g,p),w])}else r.push(Cn(x,g,p))}}return r}directColumn(t,e,i=-1,s=0){let r=new Int8Array(64),o=this.world.getChunk(t>>4,e>>4),a=Nn;for(let l=63;l>=0;l--){let c=l===i?s:o.data[he(t&15,l,e&15)];Xe[c]?a=0:a=Math.max(0,a-yi[c]),r[l]=a}return r}initChunk(t,{clear:e=!0}={}){let i=this.world,s=t.data,r=t.cx*16,o=t.cz*16;e&&t.light.fill(0);let a=this.hasEmitters;for(let u=0;u<16;u++)for(let f=0;f<16;f++){let m=Nn;for(let x=63;x>=0;x--){let g=he(f,x,u),p=s[g];Xe[p]?m=0:m=Math.max(0,m-yi[p]);let w=m<<4;a&&zi[p]>0&&(w|=zi[p]),t.light[g]=w}}let l=this.carried;if(l&&l.x>=r&&l.x<r+16&&l.z>=o&&l.z<o+16&&!Xe[s[he(l.x-r,l.y,l.z-o)]]){let u=he(l.x-r,l.y,l.z-o),f=t.light[u];(f&15)<l.level&&(t.light[u]=f&240|l.level)}let c=[],h=[],d=(u,f)=>u===0||f===0||u===15||f===15;for(let u=0;u<64;u++)for(let f=0;f<16;f++)for(let m=0;m<16;m++){let x=t.light[he(m,u,f)],g=x>>4,p=x&15;if(g<=1&&p<=1)continue;let w=d(m,f);if(!w)for(let[C,M,E]of Fa){let v=u+M;if(v<0||v>=64)continue;let R=he(m+C,v,f+E);if(Xe[s[R]])continue;let y=t.light[R];if(y>>4<g-1||(y&15)<p-1){w=!0;break}}w&&(g>1&&c.push(Cn(r+m,u,o+f)),p>1&&h.push(Cn(r+m,u,o+f)))}for(let[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){let m=i.getChunk(t.cx+u,t.cz+f);if(m)for(let x=0;x<64;x++)for(let g=0;g<16;g++){let p=u===1?0:u===-1?15:g,w=f===1?0:f===-1?15:g,C=m.light[he(p,x,w)];C>>4>1&&c.push(Cn(m.cx*16+p,x,m.cz*16+w)),(C&15)>1&&h.push(Cn(m.cx*16+p,x,m.cz*16+w))}}this.propagate(Xn,c),this.propagate(Fs,h)}rebuildAll(){let t=[...this.world.chunks.values()];for(let e of t)e.light.fill(0);for(let e of t)this.initChunk(e,{clear:!1});for(let e of t)e.dirty=!0}onBlockChanged(t,e,i,s,r){if(!this.world.getChunk(t>>4,i>>4)||e<0||e>=64||!(Xe[s]!==Xe[r]||yi[s]!==yi[r]||zi[s]!==zi[r]))return;let l=this.directColumn(t,i,e,s),c=this.directColumn(t,i),h=[],d=[];for(let f=0;f<64;f++){if(c[f]===l[f])continue;let m=this.get(t,f,i,Xn);c[f]<l[f]?m>0&&(h.push([Cn(t,f,i),m]),this.set(t,f,i,Xn,0)):(c[f]>m&&this.set(t,f,i,Xn,c[f]),d.push(Cn(t,f,i)))}let u=this.get(t,e,i,Xn);u>0&&(Xe[r]||yi[r]>yi[s])&&c[e]===l[e]&&(h.push([Cn(t,e,i),u]),this.set(t,e,i,Xn,0));for(let[f,m,x]of Fa)this.get(t+f,e+m,i+x,Xn)>0&&d.push(Cn(t+f,e+m,i+x));d.push(...this.unspread(Xn,h)),this.propagate(Xn,d),this.hasEmitters&&this.refreshBlockLight(t,e,i)}};var US=Nt.worldgen.trees,Dd=US.variants,a0=n=>Dd.find(t=>t.key===n),o0=a0("oak")??Dd[0];function l0(n,t,e,i,s=!1){if(s)return o0;let r=Dd.filter(a=>i>=a.heights[0]&&i<=a.heights[1]);if(!r.length)return o0;let o=Gn(t,e,n+13)*r.reduce((a,l)=>a+l.weight,0);for(let a of r){if(o<a.weight)return a;o-=a.weight}return r[r.length-1]}var FS=(n,t,e,i)=>n.trunk[0]+Math.floor(Gn(e,i,t+7)*(n.trunk[1]-n.trunk[0]+1));function lo(n,t,e,i,s,r,o,a){for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++)Math.abs(c)===s&&Math.abs(l)===s&&s>0&&(s===1||a==="always"||Gn(t+c,i+l+e,o)<.5)||n.push({x:t+c,y:e,z:i+l,id:r,leaf:!0})}function Ud(n,t,e,i,s){let r=FS(n,t,e,s),o=i+r,a=[];if(n.shape==="round")for(let l=o-2;l<=o+1;l++)lo(a,e,l,s,l>=o?1:2,n.leavesId,t,"random");else if(n.shape==="tall")[2,3,3,2,1,1].forEach((c,h)=>lo(a,e,o-3+h,s,c,n.leavesId,t,c>=3?"always":"random"));else if(n.shape==="cone"){let l=[0,1,1,2,2,3,3],c=Math.min(l.length,r-1);for(let h=0;h<c;h++)lo(a,e,o+1-h,s,l[h],n.leavesId,t,"always")}else lo(a,e,o,s,1,n.leavesId,t,"random"),lo(a,e,o+1,s,1,n.leavesId,t,"random"),lo(a,e,o-1,s,2,n.leavesId,t,"always");for(let l=i+1;l<=o;l++)a.push({x:e,y:l,z:s,id:n.logId,leaf:!1});return a}function c0(n,t,e,i,s,r=1,o=Math.random){let a=a0(s[Math.floor(o()*s.length)]);if(!a)return!1;let l=Ud(a,r+Math.floor(o()*1e3),t,e-1,i),c=h=>h===Kt.AIR||jt[h]>0||Us[h]===1;for(let h of l)if(!(h.x===t&&h.y===e&&h.z===i)&&!c(n.getBlock(h.x,h.y,h.z)))return!1;for(let h of l)n.setBlock(h.x,h.y,h.z,h.id);return!0}var Fd=Nt.game.tilling,Me=Nt.worldgen,Hi=Me.ids;var si=Me.seaLevel,Mh=Me.snowLine,h0=(n,t,e)=>Math.max(t,Math.min(e,n)),Sh=(n,t,e)=>{let i=h0((e-n)/(t-n),0,1);return i*i*(3-2*i)},Od=class{constructor(t,e){this.cx=t,this.cz=e,this.data=new Uint8Array(1024*16),this.dirty=!0,this.meshes=null,this.plants=new Set,this.hydrating=new Set,this.version=0,this.light=new Uint8Array(1024*16)}},co=class{constructor(t){this.seed=t,this.noise=new Pa(t),this.noiseB=new Pa(t^1540483477),this.chunks=new Map,this.edits=new Map,this.legacyCaves=new Set,this.editsDirty=!1,this.listeners=[],this.lighting=new yh(this)}heightAt(t,e){let i=this.noise,s=Me.terrain,r=i.fbm2(t*s.continentScale,e*s.continentScale,3),o=i.fbm2(t*s.hillScale+100,e*s.hillScale+100,4),a=1-Math.abs(i.noise2(t*s.ridgeScale-50,e*s.ridgeScale-50)),l=Sh(.08,.55,r),c=si+s.baseAboveSea+r*s.continentHeight+o*s.hillHeight;c+=Math.pow(a,3)*l*s.ridgeHeight;let h=Me.rivers,d=t+h.warp*i.noise2(t*.02+11,e*.02+7),u=e+h.warp*i.noise2(t*.02-31,e*.02+53),f=Math.abs(this.noiseB.noise2(d*h.scale+300,u*h.scale-120)),m=1-Sh(si+h.lowlandFrom,si+h.lowlandTo,c),x=(1-Sh(h.coreWidth,h.bankWidth,f))*m,g=si-h.bedBelowSea;return x>0&&c>g&&(c-=(c-g)*x),Math.floor(h0(c,3,58))}forestDensity(t,e){let i=this.noiseB.fbm2(t*.02,e*.02,2);return Me.trees.baseDensity+Me.trees.forestDensity*Sh(0,.45,i)}isCavern(t,e,i){let s=Me.caves.caverns;if(!s||e<s.minY||e>s.maxY)return!1;let[r,o,a]=s.scale;return this.noiseB.noise3(t*r+211,e*o+57,i*a-93)>s.threshold}isEntrance(t,e){let i=Me.caves.entrances;return!!i&&this.noiseB.noise3(t*i.scale+500,.5,e*i.scale-500)>i.threshold}isCave(t,e,i){let s=this.noiseB,[r,o,a]=Me.caves.scale,l=Me.caves.threshold;return Math.abs(s.noise3(t*r,e*o,i*a))>l?!1:Math.abs(s.noise3(t*r+77,e*o+31,i*a+13))<l}oreAt(t,e,i){let s=this.noiseB;for(let r of Me.ores)if(!(e<r.minY||e>=r.maxY)&&s.noise3(t*r.scale+r.offset[0],e*r.scale+r.offset[1],i*r.scale+r.offset[2])>r.threshold)return r.id;return Hi.stone}hasTree(t,e){let i=Gn(t,e,this.seed);if(i>=Me.trees.baseDensity+Me.trees.forestDensity||i>=this.forestDensity(t,e))return!1;let s=this.heightAt(t,e);return s>=si+Me.trees.minAboveSea&&s<Mh-Me.trees.belowSnowLine}treesNear(t,e,i){let s=0;for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)this.hasTree(t+o,e+r)&&s++;return s}generateChunk(t,e){let i=new Od(t,e),s=i.data,r=!this.legacyCaves.has(Wn(t,e)),o=t*16,a=e*16;for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=o+c,d=a+l,u=this.heightAt(h,d),f=u<=si+Me.beachAboveSea,m=u>=Mh,x=Me.caves,g=r&&this.isEntrance(h,d);for(let p=0;p<=u;p++){let w=Hi.stone;p===u?w=f?Hi.beach:m?Hi.snowSurface:Hi.surface:p>=u-Me.blocks.fillerDepth&&(w=f?Hi.beachFiller:m?Hi.snowFiller:Hi.filler),p>=x.minY&&(p<u-x.surfaceDepth||u>si+1&&p<=u&&g?this.isCave(h,p,d):!1)||r&&p<u-(x.caverns?.surfaceDepth??6)&&this.isCavern(h,p,d)?w=Kt.AIR:w===Hi.stone&&(w=this.oreAt(h,p,d)),s[he(c,p,l)]=w}for(let p=u+1;p<=si;p++)s[he(c,p,l)]=Hi.sea;if(!f&&!m&&u+1<64&&s[he(c,u,l)]!==Kt.AIR&&Gn(h,d,this.seed+97)<Me.groundCover.chance){let p=Gn(h,d,this.seed+131),w=Me.groundCover.variants.reduce((M,E)=>M+E.weight,0),C=Me.groundCover.variants[Me.groundCover.variants.length-1].id;for(let M of Me.groundCover.variants){if(p<M.weight/w){C=M.id;break}p-=M.weight/w}s[he(c,u+1,l)]=C}}this.growTrees(i),this.applyEdits(i);for(let l=0;l<s.length;l++)jt[s[l]]&&i.plants.add(l),Da[s[l]]&&i.hydrating.add(l);return this.chunks.set(Wn(t,e),i),this.lighting.initChunk(i),i}growTrees(t){let e=t.cx*16,i=t.cz*16,s=t.data,r=(a,l,c,h,d)=>{let u=a-e,f=c-i;if(u<0||u>=16||f<0||f>=16||l<0||l>=64)return;let m=he(u,l,f);d&&s[m]!==Kt.AIR||(s[m]=h)},o=this.legacyCaves.has(Wn(t.cx,t.cz));for(let a=i-2;a<i+16+2;a++)for(let l=e-2;l<e+16+2;l++){if(Gn(l,a,this.seed)>=this.forestDensity(l,a))continue;let c=this.heightAt(l,a);if(c<si+Me.trees.minAboveSea||c>=Mh-Me.trees.belowSnowLine)continue;let h=l0(this.seed,l,a,c,o);for(let d of Ud(h,this.seed,l,c,a))r(d.x,d.y,d.z,d.id,d.leaf)}}applyEdits(t){let e=this.edits.get(Wn(t.cx,t.cz));if(e)for(let[i,s]of e)t.data[i]=s}getChunk(t,e){return this.chunks.get(Wn(t,e))}getBlock(t,e,i){if(e<0||e>=64)return Kt.AIR;let s=this.chunks.get(Wn(t>>4,i>>4));return s?s.data[he(t&15,e,i&15)]:Kt.AIR}nearWater(t,e,i,s=Fd.radius){for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(!(o*o+r*r>s*s)){for(let a=-Fd.waterBelow;a<=Fd.waterAbove;a++)if(de[this.getBlock(t+o,e+a,i+r)])return!0}return!1}addChangeListener(t){this.listeners.push(t)}canPlace(t,e,i){return e>=0&&e<64&&this.isLoaded(t,i)}isLoaded(t,e){return this.chunks.has(Wn(t>>4,e>>4))}setBlock(t,e,i,s){if(e<0||e>=64)return[];let r=t>>4,o=i>>4,a=this.getChunk(r,o);if(!a)return[];let l=t&15,c=i&15,h=a.data[he(l,e,c)];a.data[he(l,e,c)]=s,a.version++,jt[h]&&a.plants.delete(he(l,e,c)),jt[s]&&a.plants.add(he(l,e,c)),Da[h]&&a.hydrating.delete(he(l,e,c)),Da[s]&&a.hydrating.add(he(l,e,c));let d=Wn(r,o),u=this.edits.get(d);u||this.edits.set(d,u=new Map),u.set(he(l,e,c),s),this.editsDirty=!0;let f=[a],m=(x,g)=>{let p=this.getChunk(x,g);p&&f.push(p)};l===0&&m(r-1,o),l===15&&m(r+1,o),c===0&&m(r,o-1),c===15&&m(r,o+1);for(let x of f)x.dirty=!0;for(let x of this.listeners)x(t,e,i,h,s);return f}hasWaterNear(t,e,i){for(let s=-i;s<=i;s+=3)for(let r=-i;r<=i;r+=3)if(this.heightAt(t+r,e+s)<si)return!0;return!1}findSpawn(){for(let[t,e]of[[!0,!0],[!0,!1],[!1,!1]])for(let i=0;i<300;i+=4)for(let s=0;s<8;s++){let r=Math.round(Math.cos(s*Math.PI/4)*i),o=Math.round(Math.sin(s*Math.PI/4)*i),a=this.heightAt(r,o);if(!(a<=si+Me.beachAboveSea||a>=Mh-4)&&!(t&&this.treesNear(r,o,Me.spawn.treeRadius)<Me.spawn.minTrees)&&!(e&&!this.hasWaterNear(r,o,Me.spawn.waterRadius)))return{x:r+.5,y:a+1,z:o+.5}}return{x:.5,y:si+10,z:.5}}serializeLegacy(){return[...this.legacyCaves].map(t=>`${Math.floor(t/65536)-32768},${t%65536-32768}`)}serializeEdits(){let t={};for(let[e,i]of this.edits){let s=Math.floor(e/65536)-32768,r=e%65536-32768;t[`${s},${r}`]=Object.fromEntries(i)}return t}loadEdits(t,e=null){for(let i of e??Object.keys(t||{})){let[s,r]=i.split(",").map(Number);this.legacyCaves.add(Wn(s,r))}for(let[i,s]of Object.entries(t||{})){let[r,o]=i.split(",").map(Number),a=new Map;for(let[l,c]of Object.entries(s))a.set(Number(l),c);this.edits.set(Wn(r,o),a)}}};var OS={};for(let n of Nt.items)OS[n.key.toUpperCase()]=n.id;var Vi=new Map(Nt.items.map(n=>[n.id,n])),Os=n=>Nt.blockById.has(n),_n=n=>Os(n)?Fe[n].name:Vi.get(n)?.name??"Unknown",qn=n=>Vi.get(n)?.tool??null,u0=n=>Vi.get(n)?.food??0,d0=n=>Vi.get(n)?.saturation??0,$n=n=>Vi.get(n)?.stack??64,Oa=n=>qn(n)?.uses??0,Bd=n=>Vi.get(n)?.plants??null,f0=n=>Nt.keyOfId.get(n);var ar=n=>Array.isArray(n)?n:[n],kd=n=>ar(n).map(_n).join(" or "),VC=Nt.groups.coals||[],Bs=n=>Nt.fuelTime.get(n)??0,BS=new Map(Nt.smelting.map(n=>[n.in,n])),zd=n=>BS.get(n)??null,bh=Nt.smelting,p0=[...Nt.fuelTime.keys()],is=n=>Vi.get(n)?.equip??null,ho=Nt.game.equipment.slots;var lr=n=>!!Vi.get(n)?.offhand,Hd=(n,t)=>is(n)?.slot===t||t==="shield"&&lr(n);function Vd(n){let t=Vi.get(n)?.places;return t?Math.max(0,...Object.values(t).map(e=>zi[e])):0}function m0(n,t){let e=qn(t);return e?Fe[n]?.tool===e.type?1:Nt.game.tools.wrongToolWear:0}var Ba=n=>Vi.get(n)?.places??null;function g0(n,t){let e=[];for(let i of n){if(t()>=i.chance)continue;let s=i.min+Math.floor(t()*(i.max-i.min+1));s>0&&e.push({id:i.id,n:s})}return e}function uo(n,t,e=Math.random){if(!t)return[];let i=Nt.blockById.get(n),s=i?.loot?Nt.loot[i.loot]:null;return s?g0(s,e):[{id:n,n:1}]}function x0(n,t=Math.random){let e=Nt.blockById.get(n),i=e?.shatterLoot?Nt.loot[e.shatterLoot]:e?.loot?Nt.loot[e.loot]:null;return i?g0(i,t):[{id:n,n:1}]}function wh(n,t){let e=Fe[n],i=qn(t),s=!!i&&e.tool===i.type,r=e.need===0||s&&i.tier>=e.need,o=e.hard;return s&&(o/=i.speed),r||(o*=3.3),{time:o,canHarvest:r,matches:s}}var _0=n=>Object.entries(Nt.data.items.tiers).find(([,t])=>t.level===n)?.[0]??"",ka=Nt.recipes,y0=Object.fromEntries(Object.entries(Nt.stations).map(([n,t])=>[n,t.label])),za=Nt.windows,cr=Nt.goals,Gd={};for(let n of Nt.blocks){let t=n.plant?.stage;t&&(Gd[n.id]={label:t.label,stage:t.step,name:t.name,ripe:t.ripe,crop:t.crop})}var ss=36,v0=9,Wd=ss+v0,fo=9,Eh=class{constructor(){this.slots=Array(Wd).fill(null),this.equipment=Object.fromEntries(ho.map(t=>[t.id,null]))}get capacity(){let t=this.equipment.backpack;return ss+(t?Math.min(v0,is(t.id)?.slots??0):0)}get armor(){let t=0;for(let e of Object.values(this.equipment))e&&(t+=is(e.id)?.armor??0);return t}clickEquip(t,e,i=0){let s=this.equipment[t];if(e){if(!Hd(e.id,t))return{cursor:e,refused:null};if(lr(e.id)){let a=$n(e.id);if(s&&s.id===e.id){let l=Math.min(a-s.n,i===2?1:e.n);return s.n+=l,{cursor:e.n-l>0?{...e,n:e.n-l}:null,refused:null}}return i===2&&!s?(this.equipment[t]={id:e.id,n:1,d:e.d},{cursor:e.n>1?{...e,n:e.n-1}:null,refused:null}):(this.equipment[t]=e,{cursor:s,refused:null})}if(t==="backpack"&&s&&this.slots.slice(ss).some(Boolean))return{cursor:e,refused:"Empty the backpack first"};let r={id:e.id,n:1,d:e.d},o=e.n>1?{...e,n:e.n-1}:null;return s&&o?{cursor:e,refused:null}:(this.equipment[t]=r,{cursor:o??s,refused:null})}return s?t==="backpack"&&this.slots.slice(ss).some(Boolean)?{cursor:null,refused:"Empty the backpack first"}:(this.equipment[t]=null,{cursor:s,refused:null}):{cursor:null,refused:null}}quickEquip(t){let e=this.slots[t],i=e&&is(e.id)?.slot;if(!i||t>=this.capacity||this.equipment[i]&&lr(this.equipment[i].id))return!1;let s=this.equipment[i];if(s&&i==="backpack"&&this.slots.slice(ss).some(Boolean))return!1;let r={id:e.id,n:1,d:e.d};if(e.n>1){if(s)return!1;e.n-=1}else this.slots[t]=s;return this.equipment[i]=r,!0}takeEverything(){let t=[];for(let e=0;e<this.slots.length;e++)this.slots[e]&&(t.push(this.slots[e]),this.slots[e]=null);for(let e of Object.keys(this.equipment))this.equipment[e]&&(t.push(this.equipment[e]),this.equipment[e]=null);return t}add(t,e=1,i=0){let s=$n(t);if(s>1)for(let r of this.slots.slice(0,this.capacity)){if(e<=0)break;if(r&&r.id===t&&r.n<s){let o=Math.min(s-r.n,e);r.n+=o,e-=o}}for(let r=0;r<this.capacity&&e>0;r++){if(this.slots[r])continue;let o=Math.min(s,e);this.slots[r]={id:t,n:o,d:i},e-=o}return e}count(t){let e=0;for(let i of this.slots)i&&i.id===t&&(e+=i.n);return e}remove(t,e=1){if(this.count(t)<e)return!1;for(let i=this.slots.length-1;i>=0&&e>0;i--){let s=this.slots[i];if(!s||s.id!==t)continue;let r=Math.min(s.n,e);s.n-=r,e-=r,s.n===0&&(this.slots[i]=null)}return!0}canFit(t,e=1){let i=$n(t),s=0;for(let r of this.slots.slice(0,this.capacity))if(r?r.id===t&&i>1&&(s+=i-r.n):s+=i,s>=e)return!0;return!1}countSpec(t){return ar(t).reduce((e,i)=>e+this.count(i),0)}removeSpec(t,e){for(let i of ar(t)){let s=Math.min(e,this.count(i));s>0&&this.remove(i,s),e-=s}return e===0}canCraft(t,e={}){return t.station&&!e[t.station]?!1:t.ins.every(([i,s])=>this.countSpec(i)>=s)}craft(t,e={}){if(!this.canCraft(t,e))return{ok:!1,leftover:0};for(let[s,r]of t.ins)this.removeSpec(s,r);return{ok:!0,leftover:this.add(t.out,t.n)}}damage(t,e=1){let i=this.slots[t];return!i||!Oa(i.id)?!1:(i.d+=e,i.d>=Oa(i.id)?(this.slots[t]=null,!0):!1)}clickSlot(t,e,i=0){return Xd(this.slots,t,e,i)}quickMove(t){let e=this.slots[t];if(!e)return;let[i,s]=t<fo?[fo,this.capacity]:[0,fo],r=$n(e.id),o=e.n;for(let a=i;a<s&&o>0;a++){let l=this.slots[a];if(l&&l.id===e.id&&r>1&&l.n<r){let c=Math.min(r-l.n,o);l.n+=c,o-=c}}for(let a=i;a<s&&o>0;a++)this.slots[a]||(this.slots[a]={id:e.id,n:o,d:e.d},o=0);o===0?this.slots[t]=null:e.n=o}serialize(){return this.slots.map(t=>t?[t.id,t.n,t.d]:null)}load(t){this.slots=Array(Wd).fill(null),(t||[]).slice(0,Wd).forEach((e,i)=>{e&&(this.slots[i]={id:e[0],n:e[1],d:e[2]||0})})}serializeEquipment(){return Object.fromEntries(Object.entries(this.equipment).filter(([,t])=>t).map(([t,e])=>[t,[e.id,e.n,e.d]]))}loadEquipment(t){for(let e of Object.keys(this.equipment)){let i=t?.[e];this.equipment[e]=i&&Hd(i[0],e)?{id:i[0],n:lr(i[0])?Math.max(1,Math.min($n(i[0]),i[1]||1)):1,d:i[2]||0}:null}}};function Xd(n,t,e,i=0,s=()=>!0){let r=n[t];if(e&&!s(e.id))return e;let o=e?$n(e.id):1;if(i===0){if(!e)return n[t]=null,r;if(!r)return n[t]=e,null;if(r.id===e.id&&o>1){let a=Math.min(o-r.n,e.n);return r.n+=a,e.n-=a,e.n>0?e:null}return n[t]=e,r}if(!e){if(!r)return null;let a=Math.ceil(r.n/2);r.n-=a;let l={id:r.id,n:a,d:r.d};return r.n===0&&(n[t]=null),l}if(!r)n[t]={id:e.id,n:1,d:e.d},e.n-=1;else if(r.id===e.id&&r.n<o)r.n+=1,e.n-=1;else return n[t]=e,r;return e.n>0?e:null}var ks=18,qd=66,Gi=(n,t,e)=>(t*ks+e)*ks+n,kS=[{n:[1,0,0],t1:[0,0,-1],t2:[0,1,0],o:[1,0,1],shade:.82,k:2},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0],o:[0,0,0],shade:.82,k:2},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0],o:[0,0,1],shade:.68,k:2},{n:[0,0,-1],t1:[-1,0,0],t2:[0,1,0],o:[1,0,0],shade:.68,k:2},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0],o:[0,1,0],shade:1,k:0},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1],o:[0,0,0],shade:.5,k:1}],Ha=[[0,0],[1,0],[1,1],[0,1]],M0=[.5,.68,.84,1],S0=(n,t,e,i,s)=>de[n[Gi(t,e+1,i)]]?1:Ds[s]/8;function zS(n,t){let e=new Uint8Array(ks*qd*ks),i=new Uint8Array(ks*qd*ks).fill(Nn),s=new Uint8Array(ks*qd*ks);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){let a=o===0&&r===0?t:n.getChunk(t.cx+o,t.cz+r);if(!a)continue;let l=o<0?15:(o>0,0),c=o<0?15:o>0?0:15,h=r<0?15:(r>0,0),d=r<0?15:r>0?0:15;for(let u=0;u<64;u++)for(let f=h;f<=d;f++)for(let m=l;m<=c;m++){let x=a.light[he(m,u,f)],g=Gi(m+o*16+1,u+1,f+r*16+1);e[g]=a.data[he(m,u,f)],i[g]=x>>4,s[g]=x&15}}return{pad:e,sky:i,blk:s}}var Va=class{constructor(){this.pos=[],this.uv=[],this.col=[],this.blk=[],this.ind=[],this.sway=[],this.n=0}get empty(){return this.n===0}finish(){return{sway:new Float32Array(this.sway),positions:new Float32Array(this.pos),uvs:new Float32Array(this.uv),colors:new Float32Array(this.col),blocklight:new Float32Array(this.blk),indices:this.n>65535?new Uint32Array(this.ind):new Uint16Array(this.ind)}}};function HS(n,t,e,i,s,r,o,a,l,c,h,d,u){let f=t===2?[[.25,0,.25,.25,0,.75],[.75,0,.25,.75,0,.75],[.25,0,.25,.75,0,.25],[.25,0,.75,.75,0,.75]]:[[.08,0,.08,.92,0,.92],[.92,0,.08,.08,0,.92]],m=t===1?(Gn(c,h,5)-.5)*.3:0,x=t===1?(Gn(c,h,6)-.5)*.3:0,g=.88+Gn(c,h,7)*.16,p=g*ao(d),w=g*vh(u);for(let[C,,M,E,,v]of f){let R=n.n,y=[[C,0,M,0,0],[E,0,v,1,0],[E,1,v,1,1],[C,1,M,0,1]];for(let[A,I,P,z,H]of y)n.pos.push(e+A+m,i+I,s+P+x),n.uv.push(r+z*a,o+H*l),n.col.push(p,p,p),n.blk.push(w,g),n.sway.push(I);n.ind.push(R,R+1,R+2,R,R+2,R+3),n.n+=4}}var b0=[[-1,-1],[1,-1],[1,1],[-1,1]],VS=.78;function GS(n,t,e,i,s,r,o,a,l,c,h){let f=s[0]!==0||s[1]!==0?.2:0,m=f+r,x=.5-s[0]*.38,g=.5-s[1]*.38,p=.5-s[0]*.12,w=.5-s[1]*.12,C=ao(h)*.9,M=o+l*(7/16),E=o+l*(9/16),v=a,R=a+c*(12/16),y=(z,H,D,F,J)=>{n.pos.push(t+z,e+H,i+D),n.uv.push(F,J),n.col.push(C,C,C),n.blk.push(VS,.9),n.sway.push(0)};for(let z=0;z<4;z++){let H=b0[z],D=b0[(z+1)%4],F=n.n;y(x+H[0]*.0625,f,g+H[1]*.0625,M,v),y(x+D[0]*.0625,f,g+D[1]*.0625,E,v),y(p+D[0]*.0625,m,w+D[1]*.0625,E,R),y(p+H[0]*.0625,m,w+H[1]*.0625,M,R),n.ind.push(F,F+2,F+1,F,F+3,F+2),n.n+=4}let A=n.n,I=a+c*(10/16),P=a+c*(12/16);y(p-.0625,m,w+.0625,M,I),y(p+.0625,m,w+.0625,E,I),y(p+.0625,m,w-.0625,E,P),y(p-.0625,m,w-.0625,M,P),n.ind.push(A,A+1,A+2,A,A+2,A+3),n.n+=4}function w0(n,t){let{pad:e,sky:i,blk:s}=zS(n,t),r=new Va,o=new Va,a=new Va,l=4e-4,c=1/Le,h=1/or;for(let d=0;d<64;d++)for(let u=0;u<16;u++)for(let f=0;f<16;f++){let m=t.data[he(f,d,u)];if(m===Kt.AIR)continue;if(jt[m]){let E=io[m*3+2],v=E%Le*c+l,R=1-(Math.floor(E/Le)+1)*h+l,y=Gi(f+1,d+1,u+1);jt[m]===3?GS(r,f,d,u,[ki[m*2],ki[m*2+1]],Ns[m],v,R,c-l*2,h-l*2,i[y]):HS(a,jt[m],f,d,u,v,R,c-l*2,h-l*2,t.cx*16+f,t.cz*16+u,i[y],s[y]);continue}let x=de[m]===1,g=x?o:r,p=f+1,w=d+1,C=u+1,M=x?S0(e,p,w,C,m):1;for(let E=0;E<6;E++){let v=kS[E],R=e[Gi(p+v.n[0],w+v.n[1],C+v.n[2])],y=0;if(x){if(Xe[R])continue;if(de[R]){if(E>=4)continue;let O=S0(e,p+v.n[0],w,C+v.n[2],R);if(O>=M-1e-6)continue;y=O}}else if(Xe[R]||R===m&&!Xe[m])continue;let A=io[m*3+v.k],I=A%Le*c+l,P=1-(Math.floor(A/Le)+1)*h+l,z=c-l*2,H=h-l*2,D=[1,1,1,1];if(!x)for(let O=0;O<4;O++){let $=Ha[O][0]?1:-1,tt=Ha[O][1]?1:-1,vt=p+v.n[0],K=w+v.n[1],xt=C+v.n[2],_t=Xe[e[Gi(vt+v.t1[0]*$,K+v.t1[1]*$,xt+v.t1[2]*$)]],At=Xe[e[Gi(vt+v.t2[0]*tt,K+v.t2[1]*tt,xt+v.t2[2]*tt)]],W=Xe[e[Gi(vt+v.t1[0]*$+v.t2[0]*tt,K+v.t1[1]*$+v.t2[1]*tt,xt+v.t1[2]*$+v.t2[2]*tt)]];D[O]=_t&&At?0:3-(_t+At+W)}let F=[1,1,1,1],J=[0,0,0,0];for(let O=0;O<4;O++){if(x){F[O]=ao(i[Gi(p,w,C)]),J[O]=vh(s[Gi(p,w,C)]);continue}let $=Ha[O][0]?1:-1,tt=Ha[O][1]?1:-1,vt=p+v.n[0],K=w+v.n[1],xt=C+v.n[2],_t=[[vt,K,xt],[vt+v.t1[0]*$,K+v.t1[1]*$,xt+v.t1[2]*$],[vt+v.t2[0]*tt,K+v.t2[1]*tt,xt+v.t2[2]*tt],[vt+v.t1[0]*$+v.t2[0]*tt,K+v.t1[1]*$+v.t2[1]*tt,xt+v.t1[2]*$+v.t2[2]*tt]],At=0,W=0,j=0;for(let pt=0;pt<4;pt++){let Dt=Gi(_t[pt][0],_t[pt][1],_t[pt][2]);pt>0&&Xe[e[Dt]]||(At+=i[Dt],W+=s[Dt],j++)}F[O]=ao(At/j),J[O]=Math.max(vh(W/j),Pd[m])}let Z=g.n;for(let O=0;O<4;O++){let[$,tt]=Ha[O],vt=v.o[0]+v.t1[0]*$+v.t2[0]*tt,K=v.o[1]+v.t1[1]*$+v.t2[1]*tt,xt=v.o[2]+v.t1[2]*$+v.t2[2]*tt;x&&(K=K===1?M:y&&E<4?y:K),g.pos.push(f+vt,d+K,u+xt),g.uv.push(I+$*z,P+tt*H);let _t=v.shade*(x?1:M0[D[O]]),At=_t*F[O];g.col.push(At,At,At),g.blk.push(_t*J[O],_t)}let rt=O=>(x?0:M0[D[O]])*(F[O]+J[O]);rt(0)+rt(2)<rt(1)+rt(3)?g.ind.push(Z+1,Z+2,Z+3,Z+1,Z+3,Z):g.ind.push(Z,Z+1,Z+2,Z,Z+2,Z+3),g.n+=4}}return{solid:r.empty?null:r.finish(),water:o.empty?null:o.finish(),plants:a.empty?null:a.finish()}}var WS=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function XS(n){let t=new Ve;return t.setAttribute("position",new me(n.positions,3)),t.setAttribute("uv",new me(n.uvs,2)),t.setAttribute("color",new me(n.colors,3)),n.sway.length&&t.setAttribute("aSway",new me(n.sway,1)),t.setAttribute("aBlk",new me(n.blocklight,2)),t.setIndex(new me(n.indices,1)),t.computeBoundingSphere(),t}var po=class{constructor(t,e,i,s=6){this.world=e,this.mats=i,this.radius=s,this.group=new sn,t.add(this.group),this.wanted=[],this.lastCx=null,this.lastCz=null,this.stats={chunks:0,meshed:0,quads:0}}setRadius(t){this.radius=t,this.lastCx=null}rebuildWanted(t,e){let i=this.radius+1;this.wanted=[];for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++){let a=o*o+r*r;a<=i*i+1&&this.wanted.push({cx:t+o,cz:e+r,d:a})}this.wanted.sort((r,o)=>r.d-o.d);let s=i+2;for(let[r,o]of this.world.chunks)Math.max(Math.abs(o.cx-t),Math.abs(o.cz-e))>s&&(this.disposeMeshes(o),this.world.chunks.delete(r))}disposeMeshes(t){if(t.meshes){for(let e of t.meshes)this.group.remove(e),e.geometry.dispose();t.meshes=null}}ready(t){for(let[e,i]of WS)if(!this.world.getChunk(t.cx+e,t.cz+i))return!1;return!0}mesh(t){this.disposeMeshes(t);let e=w0(this.world,t);t.meshes=[];let i=(s,r,o)=>{if(!s)return;let a=new Pe(XS(s),r);a.position.set(t.cx*16,0,t.cz*16),a.renderOrder=o,a.matrixAutoUpdate=!1,a.updateMatrix(),this.group.add(a),t.meshes.push(a)};i(e.solid,this.mats.solid,0),i(e.plants,this.mats.plant,0),i(e.water,this.mats.water,1),t.dirty=!1}remeshNow(t){for(let e of t)this.ready(e)&&this.mesh(e)}update(t,e,i=6){let s=Math.floor(t/16),r=Math.floor(e/16);(s!==this.lastCx||r!==this.lastCz)&&(this.lastCx=s,this.lastCz=r,this.rebuildWanted(s,r));let o=performance.now(),a=this.world;for(let c of this.wanted)if(!a.getChunk(c.cx,c.cz)&&(a.generateChunk(c.cx,c.cz),performance.now()-o>i))return;let l=this.radius*this.radius+1;for(let c of this.wanted){if(c.d>l)break;let h=a.getChunk(c.cx,c.cz);if(h&&h.dirty&&this.ready(h)&&(this.mesh(h),performance.now()-o>i))return}}preload(t,e,i=3){let s=this.radius;this.radius=i,this.lastCx=null;for(let r=0;r<4;r++)this.update(t,e,1/0);this.radius=s,this.lastCx=null}collectStats(){let t=0,e=0;for(let i of this.world.chunks.values())if(i.meshes){t++;for(let s of i.meshes)e+=s.geometry.index.count/6}return this.stats={chunks:this.world.chunks.size,meshed:t,quads:e},this.stats}};var Je=.3,$d=1.8,qS=1.5,E0=1.62,$S=1.27,YS=.35,Wi=1e-4,T0=30,ZS=9.2,JS=40,Th=class{constructor(t){this.world=t,this.pos={x:0,y:40,z:0},this.vel={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headInWater=!1,this.stepDist=0,this.speedMul=1,this.events={step:null,splash:null,land:null,fall:null,jump:null},this.fallPeak=null,this.stepSmooth=0,this.canStep=!1,this.crouching=!1,this.height=$d,this.eyeHeight=E0}solidAt(t,e,i){return e<0||!this.world.isLoaded(t,i)?!0:Ln[this.world.getBlock(t,e,i)]===1}collides(t,e,i,s=this.height){let r=Math.floor(t-Je+1e-5),o=Math.floor(t+Je-1e-5),a=Math.floor(e+1e-5),l=Math.floor(e+s-1e-5),c=Math.floor(i-Je+1e-5),h=Math.floor(i+Je-1e-5);for(let d=a;d<=l;d++)for(let u=c;u<=h;u++)for(let f=r;f<=o;f++)if(this.solidAt(f,d,u))return!0;return!1}supported(t,e,i){let s=Math.floor(e-.05);for(let r of[-Je,Je])for(let o of[-Je,Je])if(this.solidAt(Math.floor(t+o),s,Math.floor(i+r)))return!0;return!1}intersectsBlock(t,e,i){let s=this.pos;return s.x+Je>t&&s.x-Je<t+1&&s.y+this.height>e&&s.y<e+1&&s.z+Je>i&&s.z-Je<i+1}moveAxis(t,e){if(e===0)return!1;let i=this.pos,s=Math.ceil(Math.abs(e)/.2),r=e/s;for(let o=0;o<s;o++)if(i[t]+=r,!!this.collides(i.x,i.y,i.z)){if(this.canStep&&t!=="y"){let a=Math.floor(i.y+Wi)+1+Wi;if(a-i.y<=1+2*Wi&&!this.collides(i.x,a,i.z)){this.stepSmooth+=a-i.y,i.y=a;continue}}return t==="x"?i.x=r>0?Math.floor(i.x+Je)-Je-Wi:Math.floor(i.x-Je)+1+Je+Wi:t==="z"?i.z=r>0?Math.floor(i.z+Je)-Je-Wi:Math.floor(i.z-Je)+1+Je+Wi:i.y=r>0?Math.floor(i.y+this.height)-this.height-Wi:Math.floor(i.y)+1+Wi,this.vel[t]=0,!0}return!1}update(t,e){t=Math.min(t,.05);let i=this.pos,s=this.vel,r=this.onGround;(this.fallPeak===null||r||this.inWater||this.flying)&&(this.fallPeak=i.y);let o=this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z)),a=this.inWater;this.inWater=de[o]===1,this.headInWater=de[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+1.62),Math.floor(i.z))]===1,this.inWater&&!a&&s.y<-3&&this.events.splash?.(),!!e.crouch&&!this.flying&&!this.inWater?(this.crouching=!0,this.height=qS):this.crouching&&!this.collides(i.x,i.y,i.z,$d)&&(this.crouching=!1,this.height=$d),this.eyeHeight+=((this.crouching?$S:E0)-this.eyeHeight)*Math.min(1,16*t);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),d=0,u=0;e.forward&&(d-=c,u-=h),e.back&&(d+=c,u+=h),e.left&&(d-=h,u+=c),e.right&&(d+=h,u-=c),e.ahead&&(d-=c*e.ahead,u-=h*e.ahead),e.strafe&&(d+=h*e.strafe,u-=c*e.strafe);let f=Math.hypot(d,u);f>1&&(d/=f,u/=f);let m=e.sprint&&!this.crouching?6.4:4.4;this.crouching&&(m*=YS),this.flying?m=e.sprint?22:11:this.inWater&&(m*=.55),m*=this.speedMul;let x=this.flying?14:this.onGround?46:this.inWater?14:12,g=Math.min(1,x*t);if(s.x+=(d*m-s.x)*g,s.z+=(u*m-s.z)*g,this.flying){let y=(e.jump?1:0)-(e.down?1:0);s.y+=(y*(e.sprint?14:8)-s.y)*Math.min(1,10*t)}else this.inWater?(s.y-=8*t,s.y*=1-Math.min(1,3*t),e.jump&&(s.y+=(3.6-s.y)*Math.min(1,8*t))):(s.y=Math.max(s.y-T0*t,-JS),e.jump&&this.onGround&&(s.y=ZS,this.onGround=!1,this.events.jump?.(!!e.sprint&&!this.crouching)));let p=s.y;this.canStep=this.onGround&&!this.flying&&!this.inWater&&s.y<=.01&&f>0;let w=this.crouching&&this.onGround&&!this.flying,C=i.x,M=i.z,E=this.moveAxis("x",s.x*t);w&&!this.supported(i.x,i.y,i.z)&&(i.x=C,s.x=0);let v=this.moveAxis("z",s.z*t);if(w&&!this.supported(i.x,i.y,i.z)&&(i.z=M,s.z=0),this.inWater&&e.jump&&(E||v)&&f>0)for(let y of[Math.floor(i.y)+1,Math.floor(i.y)+2]){if(y-i.y>1.45)break;if(!this.collides(i.x+d*.4,y+Wi,i.z+u*.4)){s.y=Math.max(s.y,Math.sqrt(2*T0*(y-i.y+.3)));break}}let R=this.moveAxis("y",s.y*t);if(this.onGround=R&&p<0,this.flying&&this.onGround&&(this.flying=!1),this.onGround||(this.fallPeak=Math.max(this.fallPeak,i.y)),this.onGround&&!r){p<-7&&this.events.land?.(p);let y=this.inWater||de[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z))]===1,A=this.fallPeak-i.y;!this.flying&&!y&&A>.5&&this.events.fall?.(A,p),this.fallPeak=i.y}this.stepSmooth=this.stepSmooth<.001?0:this.stepSmooth*Math.exp(-12*t),this.onGround&&!this.flying&&f>0&&(this.stepDist+=Math.hypot(s.x,s.z)*t,this.stepDist>(e.sprint&&!this.crouching?2.2:1.7)&&!this.crouching&&(this.stepDist=0,this.events.step?.()))}get eye(){return{x:this.pos.x,y:this.pos.y+this.eyeHeight-this.stepSmooth,z:this.pos.z}}};function KS(n,t,e,i,s,r,o){let a=[e+.5-o,i,s+.5-o],l=[e+.5+o,i+r,s+.5+o],c=[n.x,n.y,n.z],h=[t.x,t.y,t.z],d=-1/0,u=1/0,f=-1,m=0;for(let x=0;x<3;x++){if(Math.abs(h[x])<1e-9){if(c[x]<a[x]||c[x]>l[x])return null;continue}let g=(a[x]-c[x])/h[x],p=(l[x]-c[x])/h[x],w=Math.min(g,p),C=Math.max(g,p);if(w>d&&(d=w,f=x,m=h[x]>0?-1:1),C<u&&(u=C),d>u)return null}return u<0?null:{t:d,axis:f,sign:m}}function Yd(n,t,e,i=6){let s=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z),a=Math.sign(e.x),l=Math.sign(e.y),c=Math.sign(e.z),h=e.x!==0?Math.abs(1/e.x):1/0,d=e.y!==0?Math.abs(1/e.y):1/0,u=e.z!==0?Math.abs(1/e.z):1/0,f=e.x!==0?(a>0?s+1-t.x:t.x-s)*h:1/0,m=e.y!==0?(l>0?r+1-t.y:t.y-r)*d:1/0,x=e.z!==0?(c>0?o+1-t.z:t.z-o)*u:1/0,g=0,p=0,w=0,C=0;for(;C<=i;){let M=n.getBlock(s,r,o);if(Ln[M])return{x:s,y:r,z:o,nx:g,ny:p,nz:w,id:M};if(jt[M]){let E=KS(t,e,s,r,o,Ns[M],so[M]);if(E&&E.t<=i){let v=E.t<0||E.axis<0?[0,0,0]:[E.axis===0?E.sign:0,E.axis===1?E.sign:0,E.axis===2?E.sign:0];return{x:s,y:r,z:o,nx:v[0],ny:v[1],nz:v[2],id:M}}}f<m&&f<x?(s+=a,C=f,f+=h,g=-a,p=0,w=0):m<x?(r+=l,C=m,m+=d,g=0,p=-l,w=0):(o+=c,C=x,x+=u,g=0,p=0,w=-c)}return null}var A0=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};var jS=new Gt(.47,.68,1),QS=new Gt(.015,.025,.07),tb=new Gt(1,.52,.28),eb=new Gt(.36,.42,.7),nb=new Gt(1,1,1),ib=new Gt(1,.82,.7),cn=64,Ga=12,rs=cn*Ga,sb=82;function Zd(n,t){let e=Array.from({length:n*n},t);return(i,s)=>{let r=i*n,o=s*n,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(m,x)=>e[(x%n+n)%n*n+(m%n+n)%n],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}function rb(n=9){let t=gi(n),e=Zd(6,t),i=Zd(14,t),s=Zd(30,t),r=new Float32Array(cn*cn),o=.56;for(let a=0;a<cn;a++)for(let l=0;l<cn;l++){let c=l/cn,h=a/cn,d=e(c,h)*.55+i(c,h)*.3+s(c,h)*.15;if(d<=o)continue;let u=Math.min(1,(d-o)/.18);r[a*cn+l]=4+Math.round(u*3)*2.2}return r}function ob(){let n=rb(),t=[],e=[],i=[],s=(l,c)=>n[(c%cn+cn)%cn*cn+(l%cn+cn)%cn],r=0,o=(l,c,h,d,u)=>{for(let f of[l,c,h,d])t.push(f[0],f[1],f[2]),e.push(u,u,u);i.push(r,r+1,r+2,r,r+2,r+3),r+=4};for(let l=0;l<cn;l++)for(let c=0;c<cn;c++){let h=s(c,l);if(!h)continue;let d=c*Ga,u=d+Ga,f=l*Ga,m=f+Ga;o([d,h,m],[u,h,m],[u,h,f],[d,h,f],1),o([d,0,f],[u,0,f],[u,0,m],[d,0,m],.8);let x=s(c+1,l),g=s(c-1,l),p=s(c,l+1),w=s(c,l-1);x<h&&o([u,x,m],[u,x,f],[u,h,f],[u,h,m],.92),g<h&&o([d,g,f],[d,g,m],[d,h,m],[d,h,f],.92),p<h&&o([d,p,m],[u,p,m],[u,h,m],[d,h,m],.84),w<h&&o([u,w,f],[d,w,f],[d,h,f],[u,h,f],.84)}let a=new Ve;return a.setAttribute("position",new me(new Float32Array(t),3)),a.setAttribute("color",new me(new Float32Array(e),3)),a.setIndex(new me(r>65535?new Uint32Array(i):new Uint16Array(i),1)),a.boundingSphere=new Qn(new V(rs/2,4,rs/2),rs*.75),a}var ab=`
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
  }`,lb=`
  uniform float uOpacity;
  varying float vTw;
  varying vec3 vCol;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    gl_FragColor = vec4(vCol, a * vTw * uOpacity);
  }`,cb=`
  uniform float uShift;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vN = normalize(normal);
    vUv = uv + vec2(uShift, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,hb=`
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
  }`,Ah=class{constructor(t,e){this.group=new sn,t.add(this.group);let i=new sn;i.rotation.y=.45,this.group.add(i),this.pivot=new sn,i.add(this.pivot);let s=new Di(e.sun);s.colorSpace=ii;let r=new tr(new Ss({map:s,transparent:!0,fog:!1,depthWrite:!1}));r.scale.set(92,92,1),r.position.x=320,this.pivot.add(r),this.sun=r;let o=new tr(new Ss({map:new Di(e.glow),color:16764778,transparent:!0,depthWrite:!1,fog:!1,blending:er,opacity:.5}));o.scale.set(210,210,1),o.position.x=318,this.pivot.add(o),this.sunHalo=o;let a=new Di(e.moon);a.wrapS=Gr,a.colorSpace=ii,this.moonMat=new gn({uniforms:{uMap:{value:a},uLight:{value:new V(1,0,0)},uAlpha:{value:1},uShift:{value:.31}},vertexShader:cb,fragmentShader:hb,transparent:!0,depthWrite:!1,fog:!1}),this.moon=new Pe(new fa(26,48,32),this.moonMat),this.moon.position.x=-320,this.pivot.add(this.moon);let l=new tr(new Ss({map:new Di(e.glow),transparent:!0,depthWrite:!1,fog:!1,blending:er,opacity:.4}));l.scale.set(150,150,1),l.position.x=-318,this.pivot.add(l),this.halo=l;let c=gi(31337),h=900,d=new Float32Array(h*3),u=new Float32Array(h),f=new Float32Array(h),m=new Float32Array(h*3);for(let p=0;p<h;p++){let w=c()*2-1,C=c()*Math.PI*2,M=Math.sqrt(1-w*w);d.set([Math.cos(C)*M*400,w*400,Math.sin(C)*M*400],p*3),u[p]=c();let E=c()<.07;f[p]=E?4.5+c()*2:1.6+c()*1.8;let v=c();m.set(v<.25?[.7,.8,1]:v<.8?[1,1,1]:[1,.9,.7],p*3)}let x=new Ve;x.setAttribute("position",new me(d,3)),x.setAttribute("aPhase",new me(u,1)),x.setAttribute("aSize",new me(f,1)),x.setAttribute("aColor",new me(m,3)),this.starMat=new gn({uniforms:{uTime:{value:0},uOpacity:{value:1},uScale:{value:1}},vertexShader:ab,fragmentShader:lb,transparent:!0,depthWrite:!1,fog:!1,blending:er}),this.stars=new la(x,this.starMat),this.stars.frustumCulled=!1,this.pivot.add(this.stars);let g=ob();this.cloudMat=new ln({vertexColors:!0,transparent:!0,opacity:.93,fog:!1}),this.clouds=[],this.cloudRoot=new sn,t.add(this.cloudRoot);for(let p=0;p<9;p++){let w=new Pe(g,this.cloudMat);w.matrixAutoUpdate=!0,this.cloudRoot.add(w),this.clouds.push(w)}this.skyColor=new Gt,this.tint=new Gt,this.sunHeight=1,this.setMoonPhase(0)}setPixelRatio(t){this.starMat.uniforms.uScale.value=t}setMoonPhase(t){let e=t%8/8*Math.PI*2;this.moonMat.uniforms.uLight.value.set(Math.cos(e),.12,Math.sin(e)),this.phaseName=["Full Moon","Waning Gibbous","Last Quarter","Waning Crescent","New Moon","Waxing Crescent","First Quarter","Waxing Gibbous"][t%8]}update(t,e,i){let s=t*Math.PI*2;this.pivot.rotation.z=s,this.group.position.copy(e);let r=this.sunHeight=Math.sin(s),o=A0(-.1,.26,r);this.skyColor.copy(QS).lerp(jS,o);let a=Math.pow(Math.max(0,1-Math.abs(r)/.24),1.1)*.92;a>0&&this.skyColor.lerp(tb,a),this.tint.copy(eb).lerp(nb,o),a>0&&this.tint.lerp(ib,a*.35);let l=1-A0(-.18,.1,r);this.starMat.uniforms.uTime.value=i,this.starMat.uniforms.uOpacity.value=l,this.stars.visible=l>.01,this.moonMat.uniforms.uAlpha.value=.3+.7*l,this.halo.material.opacity=.4*l,this.sunHalo.material.opacity=.5*(1-l);let c=i*1.6,h=Math.floor((e.x-c)/rs)*rs,d=Math.floor(e.z/rs)*rs,u=0;for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++)this.clouds[u++].position.set(h+m*rs+c,sb,d+f*rs);return this.cloudMat.color.copy(this.tint).multiplyScalar(.62+.38*o),{sky:this.skyColor,tint:this.tint,day:o}}};var hr=Nt.music,ub=hr.tracks.filter(n=>n.key!==hr.title),R0=hr.tracks.find(n=>n.key===hr.title),Ch=class{constructor(t=ub,e=Math.random){this.tracks=t,this.rand=e,this.bag=[],this.last=null}next(){if(!this.bag.length){this.bag=[...this.tracks];for(let t=this.bag.length-1;t>0;t--){let e=Math.floor(this.rand()*(t+1));[this.bag[t],this.bag[e]]=[this.bag[e],this.bag[t]]}this.bag.length>1&&this.bag[this.bag.length-1]===this.last&&([this.bag[0],this.bag[this.bag.length-1]]=[this.bag[this.bag.length-1],this.bag[0]])}return this.last=this.bag.pop(),this.last}},I0=(n=Math.random)=>hr.gapSeconds[0]+n()*(hr.gapSeconds[1]-hr.gapSeconds[0]),P0=n=>60/n.bpm;var db=(n,t)=>n.chords[Math.floor(t/n.barsPerChord)%n.chords.length],C0=(n,t)=>n[Math.floor(t()*n.length)];function L0(n,t,e=Math.random){let i=[],s=db(n,t),r=t%n.barsPerChord===0;if(n.pad&&i.push({voice:n.pad==="strings"?"strings":"pad",notes:s.tones.slice(0,4),beat:0,beats:4.4,vel:1}),n.bass==="drone"?r&&i.push({voice:"drone",notes:[s.root-12],beat:0,beats:4*n.barsPerChord+1,vel:1}):n.bass&&i.push({voice:"bass",notes:[s.root-12],beat:0,beats:3,vel:1}),n.arp){let{voice:o,pattern:a,step:l,vel:c}=n.arp;for(let h=0,d=0;d<4-1e-9;h++,d+=l)i.push({voice:o,notes:[s.tones[a[h%a.length]%s.tones.length]],beat:d,beats:l*2,vel:c})}if(n.melody)for(let[o,a,l,c,h]of n.melody)o===t&&i.push({voice:n.lead?.voice??"piano",notes:[l],beat:a,beats:c,vel:h});else if(n.lead){let o=n.lead;if(o.rest&&t%o.rest===o.rest-1&&e()<.6)return i;let a=C0(s.tones,e);for(let l=0;l<8;l++){let c=l===0?o.density[0]:l%2===0?o.density[1]:o.density[2];if(e()>c)continue;let h=s.tones.filter(u=>Math.abs(u-a)<=7),d=C0(h.length?h:s.tones,e);e()<o.leap&&(d+=12),e()<o.leap*.66&&(d-=12),a=d,i.push({voice:o.voice,notes:[d],beat:l*.5,beats:1.5,vel:.14+e()*.12})}}return i}var Rh=Nt.sounds,ur=n=>440*Math.pow(2,(n-69)/12);var Ih=class{constructor(){this.ctx=null,this.musicOn=!0,this.musicVol=.8,this.sfxVol=.9,this.nextBarTime=0,this.timer=null,this.scene="title",this.playlist=new Ch,this.track=null,this.trackBar=0,this.bus=null,this.nowPlaying=null,this.onTrack=null}unlockOnGesture(){let t=["pointerdown","keydown","touchstart"],e=()=>{if(this.start(),this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0);else this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0)})};for(let i of t)window.addEventListener(i,e,!0)}get running(){return!!this.ctx&&this.ctx.state==="running"}setScene(t){t!==this.scene&&(this.scene=t,this.endTrack(1.4),this.ctx&&(this.nextBarTime=Math.max(this.nextBarTime,this.ctx.currentTime+.8)))}endTrack(t=0){if(this.bus&&this.ctx){let e=this.bus,i=this.ctx.currentTime;t>0&&e.gain.setTargetAtTime(0,i,t/3),setTimeout(()=>{try{e.disconnect()}catch{}},(t+12)*1e3)}this.bus=null,this.track=null,this.trackBar=0}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=.8,this.master.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicOn?.55*this.musicVol:0,this.sfxBus=t.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(4.2,2.4);let e=t.createGain();e.gain.value=.55,this.reverb.connect(e),e.connect(this.master),this.musicBus.connect(this.master),this.musicBus.connect(this.reverb),this.delay=t.createDelay(2),this.delay.delayTime.value=.72;let i=t.createGain();i.gain.value=.32;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this.delay.connect(s),s.connect(i),i.connect(this.delay),s.connect(this.musicBus);let r=t.sampleRate;this.noise=t.createBuffer(1,r,t.sampleRate);let o=this.noise.getChannelData(0);for(let a=0;a<r;a++)o[a]=Math.random()*2-1;this.nextBarTime=t.currentTime+1,this.timer=setInterval(()=>this.schedule(),400)}makeImpulse(t,e){let i=this.ctx,s=Math.floor(i.sampleRate*t),r=i.createBuffer(2,s,i.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}setMusic(t){this.musicOn=t,this.applyVolumes()}setVolumes(t,e){this.musicVol=t,this.sfxVol=e,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.musicOn?.55*this.musicVol:0,t,.15),this.sfxBus.gain.setTargetAtTime(this.sfxVol,t,.05)}startTrack(){this.track=this.scene==="title"?R0:this.playlist.next(),this.trackBar=0,this.nowPlaying=this.track,this.bus=this.ctx.createGain(),this.bus.connect(this.musicBus),this.onTrack?.(this.track)}schedule(){let t=this.ctx;for(;this.nextBarTime<t.currentTime+1.2;){this.track||this.startTrack();let e=P0(this.track);this.playBar(this.nextBarTime,e),this.nextBarTime+=e*4,++this.trackBar>=this.track.bars&&(this.scene==="title"?this.trackBar=0:(this.endTrack(0),this.nextBarTime+=I0()))}}playBar(t,e){for(let i of L0(this.track,this.trackBar)){let s=t+i.beat*e+(i.voice==="piano"||i.voice==="bell"||i.voice==="pluck"?(Math.random()-.5)*.03:0),r=i.beats*e;switch(i.voice){case"piano":this.piano(ur(i.notes[0]),s,i.vel);break;case"bell":this.bell(ur(i.notes[0]),s,i.vel);break;case"pluck":this.pluck(ur(i.notes[0]),s,i.vel);break;case"pad":this.pad(i.notes,s,r);break;case"strings":this.strings(i.notes,s,r);break;case"bass":this.bass(i.notes[0],s,r);break;case"drone":this.drone(i.notes[0],s,r);break;default:break}}}piano(t,e,i){let s=this.ctx,r=s.createGain(),o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*9,7e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.5,400),e+2.5),r.connect(o),o.connect(this.bus),o.connect(this.delay);let a=[[1,1,3.2],[2,.42,1.8],[3,.2,1.1],[4,.1,.7],[5.01,.05,.4]];for(let[l,c,h]of a){let d=s.createOscillator();d.type="sine",d.frequency.value=t*l,d.detune.value=(Math.random()-.5)*6;let u=s.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(i*c,e+.008),u.gain.exponentialRampToValueAtTime(1e-4,e+h*1.6),d.connect(u),u.connect(r),d.start(e),d.stop(e+h*1.6+.1)}this.noiseHit(e,.03,"lowpass",t*3,1,i*.5,this.bus)}bell(t,e,i){let s=this.ctx,r=s.createGain();r.connect(this.bus),r.connect(this.delay);for(let[o,a,l]of[[1,1,2.6],[2.76,.32,1.4],[5.4,.12,.8],[8.93,.05,.4]]){let c=s.createOscillator();c.type="sine",c.frequency.value=t*2*o;let h=s.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(i*a*.8,e+.004),h.gain.exponentialRampToValueAtTime(1e-4,e+l*1.7),c.connect(h),h.connect(r),c.start(e),c.stop(e+l*1.7+.1)}}pluck(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=t;let o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*7,6e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.2,300),e+.7);let a=s.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(i*1.4,e+.006),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1),r.connect(o),o.connect(a),a.connect(this.bus),a.connect(this.delay),r.start(e),r.stop(e+1.2)}pad(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=900;let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.05,e+i*.4),o.gain.linearRampToValueAtTime(0,e+i+1.4),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-7,7]){let c=s.createOscillator();c.type="triangle",c.frequency.value=ur(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.5)}}strings(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,e),r.frequency.linearRampToValueAtTime(1300,e+i*.6);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.034,e+i*.55),o.gain.linearRampToValueAtTime(0,e+i+1.8),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-9,0,9]){let c=s.createOscillator();c.type="sawtooth",c.frequency.value=ur(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.9)}}bass(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=ur(t);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.16,e+.06),o.gain.exponentialRampToValueAtTime(1e-4,e+i),r.connect(o),o.connect(this.bus),r.start(e),r.stop(e+i+.1)}drone(t,e,i){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.13,e+i*.35),r.gain.linearRampToValueAtTime(0,e+i),r.connect(this.bus);for(let[o,a]of[[0,"sine"],[7,"sine"],[12,"triangle"]]){let l=s.createOscillator();l.type=a,l.frequency.value=ur(t+o),l.connect(r),l.start(e),l.stop(e+i+.1)}}noiseHit(t,e,i,s,r,o,a=this.sfxBus){let l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loop=!0;let h=l.createBiquadFilter();h.type=i,h.frequency.value=s,h.Q.value=r;let d=l.createGain();d.gain.setValueAtTime(o,t),d.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(d),d.connect(a),c.start(t,Math.random()*.5),c.stop(t+e+.05)}tone(t,e,i,s,r,o="sine"){let a=this.ctx,l=a.createOscillator();l.type=o,l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(i,t+s);let c=a.createGain();c.gain.setValueAtTime(r,t),c.gain.exponentialRampToValueAtTime(1e-4,t+s),l.connect(c),c.connect(this.sfxBus),l.start(t),l.stop(t+s+.05)}block(t,e){if(!this.ctx)return;let i=this.ctx.currentTime,s=Rh.phases[e]??Rh.phases.break,r=Rh.materials[t]??Rh.materials.default,o=.85+Math.random()*.3;for(let a of r){if(a.skipPhases?.includes(e))continue;let l=a.seconds??s.length*(a.lengthScale??1),c=a.jitter===!1?1:o,h=i+(a.delayJitter?Math.random()*a.delayJitter:0);a.type==="noise"?this.noiseHit(h,l,a.filter,a.freq*c,a.q,a.gain*s.loud):this.tone(h,a.from*c,a.to,l,a.gain*s.loud,a.wave??"sine")}}pickup(){if(!this.ctx)return;let t=this.ctx.currentTime,e=520+Math.random()*260;this.tone(t,e,e*2,.09,.14)}craft(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,660,660,.12,.12,"triangle"),this.tone(t+.07,990,990,.16,.12,"triangle"),this.noiseHit(t,.06,"bandpass",2400,1.5,.15)}toolBreak(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.25,"bandpass",1400,1,.5),this.tone(t,300,80,.3,.3,"square")}hurt(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,180,60,.22,.45,"triangle"),this.noiseHit(t,.18,"bandpass",500,.9,.35)}eat(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.07,"bandpass",1500+Math.random()*600,1.4,.45),this.noiseHit(t+.05,.05,"highpass",3200,.8,.18)}click(){this.ctx&&this.tone(this.ctx.currentTime,900,700,.04,.08,"square")}splash(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.5,"bandpass",1200,.6,.5),this.noiseHit(t+.05,.4,"highpass",3e3,.5,.2)}};var ut=16,Ph=n=>Math.max(0,Math.min(255,Math.round(n))),Wa=[0,0,0,0];function N0(n,t){let e=Array.from({length:t*t},n);return(i,s)=>{let r=i/ut*t,o=s/ut*t,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(m,x)=>e[x%t*t+m%t],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}var Yn=(n,t,e=[1,1,1])=>[n[0]+t*e[0],n[1]+t*e[1],n[2]+t*e[2],255],fb={noise(n,t){let e=(n.noise||[]).map(o=>({f:N0(t,o.cells),amp:o.amp})),i=n.channels||[1,1,1],s=n.specks||{},r=n.edge?.width??0;return(o,a)=>{if(n.holes&&t()<n.holes)return Wa;let l=0;for(let{f:c,amp:h}of e)l+=(c(o,a)-.5)*h;if(l+=(t()-.5)*(n.jitter||0),s.dark||s.light){let c=t();s.dark&&c<s.dark.chance?l+=s.dark.amount:s.light&&c>1-s.light.chance&&(l+=s.light.amount)}return r&&(o<r||a<r||o>ut-1-r||a>ut-1-r)&&(l+=n.edge.amount),Yn(n.base,l,i)}},capped(n,t,e){let i=e.sub(n.cap,t),s=e.sub(n.body,t),r=n.depth||{min:3},o=Array.from({length:ut},()=>(r.min??3)+(r.bonus||[]).reduce((a,l)=>a+(t()<l.chance?l.amount:0),0));return(a,l)=>l<o[a]?i(a,l):s(a,l)},bark(n,t){let e=Array.from({length:ut},()=>(t()-.5)*n.columnVariance),i=n.channels||[1,1,1];return(s,r)=>{let o=e[s]+(t()-.5)*n.jitter;return n.grooveEvery&&s%n.grooveEvery===0&&(o-=n.grooveDarken),t()<(n.speckChance||0)&&(o-=n.speckDarken||0),Yn(n.base,o,i)}},rings(n,t){return(e,i)=>{let s=e-7.5,r=i-7.5;if(Math.max(Math.abs(s),Math.abs(r))>8-(n.barkWidth??1.6))return Yn(n.bark,(t()-.5)*(n.jitter??12));let o=Math.floor(Math.hypot(s,r)*(n.ringScale??.9))%2;return Yn(o?n.light:n.dark,(t()-.5)*(n.jitter??12))}},planks(n,t){let e=n.boardHeight||4,i=Math.ceil(ut/e),s=Array.from({length:i},()=>(t()-.5)*n.boardVariance),r=Array.from({length:i},()=>Math.floor(t()*12+2)),o=n.channels||[1,1,1];return(a,l)=>{let c=Math.floor(l/e),h=s[c]+(t()-.5)*n.jitter;return l%e===e-1&&(h-=n.gapDarken),r[c]===a&&(h-=n.seamDarken),t()<(n.grainChance||0)&&(h-=n.grainDarken||0),Yn(n.base,h,o)}},cells(n,t){let e=Array.from({length:n.points},()=>({x:t()*ut,y:t()*ut,shade:(t()-.5)*n.spread}));return(i,s)=>{let r=1e9,o=1e9,a=0;for(let c of e)for(let h of[-ut,0,ut])for(let d of[-ut,0,ut]){let u=Math.hypot(i-(c.x+h),s-(c.y+d));u<r?(o=r,r=u,a=c.shade):u<o&&(o=u)}let l=a+(t()-.5)*n.jitter;return o-r<n.creviceWidth&&(l=n.creviceValue),Yn(n.base,l)}},waves(n,t){let e=N0(n.seed!=null?gi(n.seed):t,4),i=n.channels||[1,1,1],s=n.phase||0;return(r,o)=>Yn(n.base,Math.sin((r+o*.7)*n.frequency+e(r,o)*4+s)*n.amplitude,i)},bricks(n,t){let e=n.brickWidth||8,i=n.rowHeight||4;return(s,r)=>{let o=Math.floor(r/i)%2?e/2:0,a=r%i===i-1||(s+o)%e===e-1,l=(t()-.5)*(n.variance??22);return a?Yn(n.mortar,l*.4):Yn(n.brick,l,[1,.5,.4])}},ore(n,t,e){let i=e.sub(n.base,t),s=new Map,r=[];for(let l=0,c=n.clusters??6;r.length<c&&l<80;l++){let h=2+Math.floor(t()*11),d=2+Math.floor(t()*11);if(r.some(([m,x])=>Math.abs(m-h)<4&&Math.abs(x-d)<4))continue;let u=2+Math.floor(t()*2),f=2+Math.floor(t()*2);r.push([h,d]);for(let m=0;m<f;m++)for(let x=0;x<u;x++)(x===0||x===u-1)&&(m===0||m===f-1)&&u+f>4&&t()<.6||s.set(h+x+","+(d+m),1)}let o=(l,c)=>s.has(l+","+c),a=(l,c)=>l.map(h=>h*c);return(l,c)=>{if(o(l,c))return!o(l,c-1)||!o(l-1,c)?Yn(n.light,(t()-.5)*14):!o(l,c+1)||!o(l+1,c)?Yn(a(n.color,.8),(t()-.5)*10):Yn(n.color,(t()-.5)*14);let h=!1;for(let u=-1;u<=1&&!h;u++)for(let f=-1;f<=1;f++)if((f||u)&&o(l+f,c+u)){h=!0;break}let d=i(l,c);return h?[d[0]*.62,d[1]*.62,d[2]*.62,d[3]??255]:d}},stripes(n,t){let e=n.darkColumns||[1,2];return i=>Yn(e.includes(i%n.period)?n.dark:n.light,(t()-.5)*n.jitter,[1,.8,.6])},blades(n,t){let e=new Map;for(let i=0;i<n.count;i++){let s=Math.round((i+.5)*ut/n.count+(t()-.5)*1.5),r=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1)),o=t()<.5?-1:1;for(let a=0;a<r;a++){let l=a/r,c=(t()-.5)*22,h=l<.35?n.dark:l<.75?n.mid:n.tip;e.set(`${s+(a>r*.6?o:0)},${ut-1-a}`,[h[0]+c,h[1]+c,h[2]+c*.5,255])}}return(i,s)=>e.get(i+","+s)??Wa},stalks(n,t){let e=new Map;for(let i=0;i<ut;i+=n.spacing||2){let s=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1));for(let r=0;r<s;r++){let o=(t()-.5)*16;e.set(`${i},${ut-1-r}`,[n.stem[0]+o,n.stem[1]+o,n.stem[2]+o*.5,255])}for(let r=0;r<n.headLength;r++){let o=ut-s-1+r;for(let a of r===0?[0]:[0,1]){let l=(t()-.5)*24,c=r%2?n.headDark:n.headLight;e.set(`${Math.min(ut-1,i+a)},${o}`,[c[0]+l,c[1]+l,c[2]+l*.5,255])}}}return(i,s)=>e.get(i+","+s)??Wa},pixelart(n){return(t,e)=>{let i=n.rows[e]?.[t],s=i&&i!=="."?n.palette[i]:null;return s?[s[0],s[1],s[2],s[3]??255]:Wa}},image(n,t,e){let i=e.images?.[n.src];return(s,r)=>{if(!i)return[255,0,255,255];let o=(r*ut+s)*4;return[i[o],i[o+1],i[o+2],i[o+3]]}},layers(n,t,e){let i=n.layers.map(s=>Jd(s,t,e));return(s,r)=>{let o=Wa;for(let a of i){let l=a(s,r);l[3]>0&&(o=l)}return o}},ref(n,t,e){return e.sub(n.tile,t)}};function Jd(n,t,e){let i=fb[n.type];if(!i)throw new Error(`unknown texture type "${n.type}"`);return i(n,t,e)}function pb(n,t){let e={tiles:n,images:t,depth:0,sub(i,s){let r=n[i];if(!r)throw new Error(`texture "${i}" is not defined`);if(e.depth>8)throw new Error(`texture "${i}" refers to itself`);e.depth++;try{return Jd(r,s,e)}finally{e.depth--}}};return e}function U0(n,t,e={},i={}){let s=pb(e,i),r=Jd(n,gi(t),s),o=new Uint8ClampedArray(ut*ut*4);for(let a=0;a<ut;a++)for(let l=0;l<ut;l++){let c=r(l,a),h=(a*ut+l)*4;o[h]=Ph(c[0]),o[h+1]=Ph(c[1]),o[h+2]=Ph(c[2]),o[h+3]=Ph(c[3])}return o}var F0=n=>12648430+n*7919,O0=(n,t,e,i)=>U0(e[n],F0(t),e,i),D0={pickaxe:["....dddddd....","..ddLLllbbdd..",".dLllbbbbbbbd.","dLlbd....hHobd","dlbd....hHo.dd","dbd....hHo....","dd....hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"],axe:["........dd...","......ddLLd..",".....dlLbld..","....dLlbbbhh.","....dLllbmbo.",".....dddhbmld","......hhhdbbd","......hhhhbbd",".....hhHo.dd.","....hhoo.....","...hho.......","..hHo........",".hho.........","hHo..........","oo..........."],shovel:["..........ddd.",".........dLLbd","........dLlbLd","......ddLlblLd","........hblLd.","......hhHoLd..",".....hHHo.d...",".....hHHo.d...","....hhoo......","...hHo........","..hho.........","ohHo..........","hHo...........","ho............"],hoe:["...ddddd......","..dLLllbbd....","..dLllbbbbd...","..ddddddbbd...","........dbhHo.",".......hHbo...","......hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"]},mb={shovel:["........dddd....","......ddLLLLdd..",".....dLLllbbLd..","....dLllllbbbld.","....dLllllbbbbd.","....dllllbbbbmd.",".....dlllbbbbmd.","......dlbbbbmd..",".....hhddbbmd...","....hHHod.dd....","...hHHo.........","..hhHo..........",".hHHo...........","hHHo............","hHo.............","oo.............."]};function gb(n,t,e,i=!1){let s=i&&mb[n]||D0[n]||D0.shovel,r=t.light.map(h=>h+(255-h)*.45),o={d:t.dark,b:t.base,m:t.base.map(h=>h*.8),l:t.light,L:r,H:e[0],h:e[1],o:e[1].map(h=>h*.5)},a=ut-s.length,l=Math.min(1,ut-s[0].length),c=new Map;return s.forEach((h,d)=>[...h].forEach((u,f)=>{o[u]&&c.set(f+l+","+(d+a),o[u])})),c}function B0(n,t,e,i={},s=!1){let r=e.sprites?.[n];if(r)return U0(r,F0(900),e.tiles,i);if(t?.tool){let o=e.toolHeads[t.tool.head],a=gb(t.tool.type,o,e.toolHandle||[[148,108,58],[104,74,38]],s),l=new Uint8ClampedArray(ut*ut*4);for(let[c,h]of a){let[d,u]=c.split(",").map(Number);if(d<0||u<0||d>=ut||u>=ut)continue;let f=(u*ut+d)*4;l[f]=h[0],l[f+1]=h[1],l[f+2]=h[2],l[f+3]=255}return l}throw new Error(`item "${n}" has no sprite`)}function k0(n){let t=new Set,e=i=>{if(i){i.type==="image"&&t.add(i.src);for(let s of i.layers||[])e(s)}};return Object.values(n.tiles||{}).forEach(e),Object.values(n.sprites||{}).forEach(e),[...t]}var mo=10,xb=.15,_b=n=>Math.max(0,Math.min(mo-1,Math.floor(n*mo))),Lh=class{constructor(){this.cooldown=0,this.reset()}reset(){this.key=null,this.progress=0}idle(t){this.cooldown=Math.max(0,this.cooldown-t)}tick(t,e,i){if(e!==this.key&&(this.key=e,this.progress=0),this.cooldown>0){let s=Math.min(t,this.cooldown);this.cooldown-=s,t-=s}return t<=0?!1:(this.progress+=t/Math.max(i,.02),this.progress>=1?(this.reset(),this.cooldown=xb,!0):!1)}get stage(){return _b(this.progress)}};function z0(n=16,t=4242){let e=gi(t),i=(n-1)/2,r=n*.6/mo,o=Array.from({length:8},(h,d)=>({x:i+(e()-.5)*2,y:i+(e()-.5)*2,a:d/8*Math.PI*2+(e()-.5)*.5,fork:d%2===0?2+Math.floor(e()*3):4+Math.floor(e()*3),life:1})),a=[],l=new Set,c=[];for(let h=0;h<mo;h++){for(let d of o.slice()){for(let f=0;f<3;f++){d.a+=(e()-.5)*.5,d.x+=Math.cos(d.a)*r*d.life/3,d.y+=Math.sin(d.a)*r*d.life/3;let m=Math.round(d.x),x=Math.round(d.y),g=m+","+x;m>=0&&x>=0&&m<n&&x<n&&!l.has(g)&&(l.add(g),c.push([m,x]))}d.fork===h&&o.push({x:d.x,y:d.y,a:d.a+(e()<.5?1:-1)*.9,fork:-1,life:.85})}a.push(c.slice())}return a}var Kd=n=>Math.max(0,Math.min(255,n|0));function Rn(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}var Qd={};async function yb(){let n=new URL("../data/",import.meta.url);for(let t of k0(Nt.textures))try{let e=new Image;e.src=new URL(t,n).href,await e.decode();let i=Rn(ut,ut),s=i.getContext("2d");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0,ut,ut),Qd[t]=s.getImageData(0,0,ut,ut).data}catch{console.warn("textures.json: could not load image",t)}}function H0(n){let t=n.getContext("2d"),e=s=>{let r=xi.indexOf(s);return[r%Le*ut,Math.floor(r/Le)*ut]},i=Object.entries(Nt.animations).map(([s,r])=>({at:e(s),fps:r.fps,shown:0,frames:r.frames.map(o=>{let[a,l]=e(o);return t.getImageData(a,l,ut,ut)})}));return s=>{let r=!1;for(let o of i){let a=Math.floor(Math.max(0,s)*o.fps)%o.frames.length;a!==o.shown&&(t.putImageData(o.frames[a],o.at[0],o.at[1]),o.shown=a,r=!0)}return r}}async function V0(){await yb();let n=Rn(Le*ut,or*ut),t=n.getContext("2d"),e={};return xi.forEach((i,s)=>{let r=O0(i,s,Nt.tiles,Qd);t.putImageData(new ImageData(r,ut,ut),s%Le*ut,Math.floor(s/Le)*ut);let o=0,a=0,l=0,c=0;for(let h=0;h<r.length;h+=4)r[h+3]>0&&(o+=r[h],a+=r[h+1],l+=r[h+2],c++);e[i]=c?[o/c/255,a/c/255,l/c/255]:[.5,.5,.5]}),{canvas:n,avg:e}}function G0(n){let t={};for(let[e,i]of Object.entries(Fe))t[e]=n[i.side];return t}function W0(){let t=Rn(128,128),e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"#ffffff"),i.addColorStop(.35,"#fffbd0"),i.addColorStop(.72,"#ffe45c"),i.addColorStop(.94,"#ffb92e"),i.addColorStop(1,"rgba(255, 170, 40, 0)"),e.fillStyle=i,e.beginPath(),e.arc(128/2,128/2,128/2,0,Math.PI*2),e.fill(),t}function X0(){let e=Rn(512,256),i=e.getContext("2d"),s=gi(2024),r=i.createImageData(512,256),o=32,a=16,l=Array.from({length:o*a},s),c=(h,d)=>{let u=h*o,f=d*(a-1),m=Math.floor(u),x=Math.floor(f),g=u-m,p=f-x,w=(E,v)=>l[Math.min(a-1,v)*o+(E%o+o)%o],C=g*g*(3-2*g),M=p*p*(3-2*p);return(w(m,x)*(1-C)+w(m+1,x)*C)*(1-M)+(w(m,x+1)*(1-C)+w(m+1,x+1)*C)*M};for(let h=0;h<256;h++)for(let d=0;d<512;d++){let u=d/512,f=h/256,m=c(u*4%1,f)*.5+c(u*8%1,f)*.3+s()*.12,x=c(u*1%1,f),g=Math.max(0,Math.min(1,(x-.5)*3.2)),p=196+(m-.45)*46;p=p*(1-g*.42);let w=(h*512+d)*4;r.data[w]=p,r.data[w+1]=p*.995,r.data[w+2]=p*1.02,r.data[w+3]=255}i.putImageData(r,0,0);for(let h=0;h<90;h++){let d=s()*512,u=256*(.15+s()*.7),f=2+Math.pow(s(),2.2)*15,m=f*(1+Math.abs(u/256-.5)*.9),x=i.createRadialGradient(d-f*.25,u-f*.25,f*.1,d,u,f);x.addColorStop(0,"rgba(70,72,82,0.55)"),x.addColorStop(.72,"rgba(90,92,102,0.35)"),x.addColorStop(.88,"rgba(235,235,240,0.5)"),x.addColorStop(1,"rgba(235,235,240,0)"),i.save(),i.translate(d,u),i.scale(m/f,1),i.translate(-d,-u),i.fillStyle=x,i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill(),i.restore()}return e}function q0(){let n=Rn(128,128),t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.25,"rgba(220,228,255,0.35)"),e.addColorStop(.6,"rgba(190,205,255,0.1)"),e.addColorStop(1,"rgba(190,205,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),n}function $0(){let n=Rn(ut*mo,ut),t=n.getContext("2d");return z0(ut).forEach((e,i)=>{t.fillStyle="rgba(0,0,0,0.72)";for(let[s,r]of e)t.fillRect(i*ut+s,r,1,1)}),n}function vb(n,t,e=44){let i=Fe[t],s=Rn(e,e),r=s.getContext("2d");r.imageSmoothingEnabled=!1;let o=e/2,a=o/2,l=o,c=u=>{let f=xi.indexOf(u);return[f%Le*ut,Math.floor(f/Le)*ut]},h=(u,f,m)=>{let[x,g]=c(u);r.save(),r.transform(...f),r.drawImage(n,x,g,ut,ut,0,0,ut,ut),r.fillStyle=`rgba(0,0,0,${m})`,r.fillRect(0,0,ut,ut),r.restore()},d=o;return h(i.top,[o/ut,a/ut,-o/ut,a/ut,d,0],0),h(i.side,[o/ut,a/ut,0,l/ut,d-o,a],.25),h(i.side,[o/ut,-a/ut,0,l/ut,d,2*a],.45),s}var jd=new Map;function tf(n,t=!1){let e=t?"h"+n:n;if(jd.has(e))return jd.get(e);let i=B0(f0(n),Nt.itemById.get(n),Nt.textures,Qd,t),s=Rn(ut,ut);return s.getContext("2d").putImageData(new ImageData(i,ut,ut),0,0),jd.set(e,s),s}function Y0(n,t=3){let e=Rn(9*t,9*t),i=e.getContext("2d");i.imageSmoothingEnabled=!1;for(let s=1;s<8;s++)for(let r=0;r<9;r++){let o=((r-4)/4.4)**2+((s-4.3)/3.2)**2;if(o>1)continue;let a=o>.7,l=n===2||n===1&&r<5;i.fillStyle=l?a?"#7a4a1e":s<4?"#e2a24e":"#c0782e":a?"#2a2a2e":"#4a4a52",i.fillRect(r*t,s*t,t,t)}return e}var Mb=["#########","#@@@@@%%#","#@@%%%%%#","#@%%%%%o#","#@%%%%%o#",".#%%%%o#.","..#%%o#..","...#o#...","....#...."];function Z0(n,t=3){let e=Rn(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,Mb.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;i.fillStyle=o==="#"?l?"#4a4a58":"#2a2a2e":l?o==="@"?"#f2f2fa":o==="%"?"#c4c4d4":"#8e8ea4":"#4a4a52",i.fillRect(a*t,r*t,t,t)})),e}var Sb=[".##...##.","#@@#.#@@#","#@@@#@@@#","#@@@@@@@#",".#@@@@@#.","..#@@@#..","...#@#...","....#...."];function J0(n,t=3){let e=Rn(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,Sb.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;o==="#"?i.fillStyle=l?"#7a0f12":"#2a2a2e":i.fillStyle=l?r<3?"#ff5a5a":"#d92a2a":"#4a4a52",i.fillRect(a*t,(r+1)*t,t,t)})),n>0&&(i.fillStyle="rgba(255,255,255,0.65)",i.fillRect(2*t,2*t,t,t)),e}function K0(n,t,e=44){let i=Fe[t].side,s=xi.indexOf(i),r=Rn(e,e),o=r.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(n,s%Le*ut,Math.floor(s/Le)*ut,ut,ut,0,0,e,e),r}function dr(n,t,e=44){if(Os(t))return vb(n,t,e);let i=Rn(e,e),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(tf(t),0,0,e,e),i}function Nh(n,t="VOXELCRAFT",e=6){let r=(t.length*6+1)*e+e*2,o=9*e+e,a=Rn(r,o),l=a.getContext("2d");l.imageSmoothingEnabled=!1;let c=n.getContext("2d"),h=Math.max(0,xi.indexOf("stone")),[d,u]=[h%Le*ut,Math.floor(h/Le)*ut],f=c.getImageData(d,u,ut,ut).data,m=Km(t),x=new Set(m.map(([g,p])=>g+","+p));l.fillStyle="rgba(0,0,0,0.45)";for(let[g,p]of m)l.fillRect(g*e+e+4,p*e+e+4,e,e);for(let[g,p]of m){let w=(p%ut*ut+g%ut)*4,C=1.15;l.fillStyle=`rgb(${Kd(f[w]*C)},${Kd(f[w+1]*C)},${Kd(f[w+2]*C)})`,l.fillRect(g*e+e,p*e+e,e,e);let M=g*e+e,E=p*e+e;l.fillStyle="rgba(255,255,255,0.35)",x.has(g+","+(p-1))||l.fillRect(M,E,e,2),x.has(g-1+","+p)||l.fillRect(M,E,2,e),l.fillStyle="rgba(0,0,0,0.45)",x.has(g+","+(p+1))||l.fillRect(M,E+e-2,e,2),x.has(g+1+","+p)||l.fillRect(M+e-2,E,2,e)}return a}function j0(n,t=4){let e=Math.max(0,xi.indexOf("dirt")),i=Rn(ut*t,ut*t),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(n,e%Le*ut,Math.floor(e/Le)*ut,ut,ut,0,0,ut*t,ut*t),i.toDataURL()}var go=new Map;function xo(n){let t="b"+n;if(go.has(t))return go.get(t);let e=Fe[n],i=new zn(1,1,1),s=i.attributes.uv,r=[e.side,e.side,e.top,e.bottom,e.side,e.side],o=[.82,.82,1,.5,.68,.68],a=new Float32Array(72);return r.forEach((l,c)=>{let h=xi.indexOf(l),d=h%Le/Le,u=1-(Math.floor(h/Le)+1)/or;for(let f=0;f<4;f++){let m=c*4+f;s.setXY(m,d+s.getX(m)/Le,u+s.getY(m)/or),a.set([o[c],o[c],o[c]],m*3)}}),i.setAttribute("color",new me(a,3)),go.set(t,i),i}function Dh(n,t=!1){let e=(t?"sh":"s")+n;if(go.has(e))return go.get(e);let s=tf(n,t).getContext("2d").getImageData(0,0,16,16).data,r=(d,u)=>d>=0&&u>=0&&d<16&&u<16&&s[(u*16+d)*4+3]>0,o=[],a=[],l=(qn(n)?3.4:1.5)/16,c=(d,u,f,m,x,g)=>{for(let p of[d,u,f,d,f,m])o.push(...p),a.push(x[0]*g,x[1]*g,x[2]*g)};for(let d=0;d<16;d++)for(let u=0;u<16;u++){if(!r(u,d))continue;let f=(d*16+u)*4,m=[s[f]/255,s[f+1]/255,s[f+2]/255],x=u/16-.5,g=(u+1)/16-.5,p=.5-d/16,w=.5-(d+1)/16,C=l/2,M=-l/2;c([x,w,C],[g,w,C],[g,p,C],[x,p,C],m,1),c([g,w,M],[x,w,M],[x,p,M],[g,p,M],m,.78),r(u+1,d)||c([g,w,C],[g,w,M],[g,p,M],[g,p,C],m,.85),r(u-1,d)||c([x,w,M],[x,w,C],[x,p,C],[x,p,M],m,.85),r(u,d-1)||c([x,p,C],[g,p,C],[g,p,M],[x,p,M],m,.95),r(u,d+1)||c([x,w,M],[g,w,M],[g,w,C],[x,w,C],m,.6)}let h=new Ve;return h.setAttribute("position",new me(new Float32Array(o),3)),h.setAttribute("color",new me(new Float32Array(a),3)),go.set(e,h),h}var bb=160,wb=300,Uh=class{constructor(t,e,i,s){this.world=e,this.blockMat=i,this.spriteMat=s,this.group=new sn,t.add(this.group),this.items=[]}spawn(t,e,i,s,r,{d:o=0,delay:a=.5,vx:l,vy:c,vz:h,life:d=wb,age:u=0}={}){this.items.length>=bb&&this.remove(0);let f=Os(t),m=new Pe(f?xo(t):Dh(t),f?this.blockMat:this.spriteMat);m.scale.setScalar(f?.28:.5),this.group.add(m),this.items.push({id:t,n:e,d:o,mesh:m,x:i,y:s,z:r,age:u,life:d,delay:a,vx:l??(Math.random()-.5)*2.4,vy:c??3+Math.random()*1.5,vz:h??(Math.random()-.5)*2.4,spin:Math.random()*6,block:f})}serialize(){return this.items.map(t=>({id:t.id,n:t.n,d:t.d,x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),age:Math.round(t.age),life:t.life}))}load(t){for(let e of Array.isArray(t)?t:[])this.spawn(e.id,e.n,e.x,e.y,e.z,{d:e.d,delay:.3,vx:0,vy:0,vz:0,life:e.life,age:e.age})}remove(t){let e=this.items[t];this.group.remove(e.mesh),this.items.splice(t,1)}solid(t,e,i){return Ln[this.world.getBlock(Math.floor(t),Math.floor(e),Math.floor(i))]===1}update(t,e,i,s){for(let r=this.items.length-1;r>=0;r--){let o=this.items[r];if(o.age+=t,o.age>o.life){this.remove(r);continue}if(!this.world.isLoaded(o.x,o.z))continue;let a=o.block?.14:.2,l=e.x-o.x,c=e.y+.7-o.y,h=e.z-o.z,d=Math.hypot(l,c,h),u=o.age>o.delay&&i(o);if(u&&d<.9&&s(o)){this.remove(r);continue}if(u&&d<2.6){let p=14*t/Math.max(d,.3);o.vx+=l*p,o.vy+=c*p,o.vz+=h*p,o.vx*=.9,o.vy*=.9,o.vz*=.9}else o.vy-=20*t;let f=o.x+o.vx*t,m=o.y+o.vy*t,x=o.z+o.vz*t;this.solid(f,o.y,o.z)&&(f=o.x,o.vx=0),this.solid(f,o.y,x)&&(x=o.z,o.vz=0),this.solid(f,m-a,x)?(m=Math.floor(m-a)+1+a,o.vy<0&&(o.vy=0),o.vx*=.8,o.vz*=.8):this.solid(f,m+a,x)&&o.vy>0&&(o.vy=0,m=o.y),o.x=f,o.y=m,o.z=x;let g=Math.sin(o.age*3+o.spin)*.05+.1;o.mesh.position.set(o.x,o.y+g,o.z),o.mesh.rotation.y=o.age*1.8+o.spin}}};var os=0,fr=1,as=2,Xa=n=>Bs(n)>0,tg=n=>!!zd(n);function Q0(){return{slots:[null,null,null],burn:0,burnMax:0,progress:0,working:0}}function Fh(n){let t=n.slots[os],e=n.slots[as],i=t?zd(t.id):null,s=!!i&&(!e||e.id===i.out&&e.n<$n(i.out));return{rec:i,can:s}}function Eb(n,t){let{rec:e,can:i}=Fh(n),s=n.slots[os],r=n.slots[fr];if(n.working!==(e?e.in:0)&&(n.working=e?e.in:0,n.progress=0),n.burn<=0&&i&&r&&Xa(r.id)&&(n.burn=n.burnMax=Bs(r.id),--r.n<=0&&(n.slots[fr]=null)),n.burn>0){if(n.burn=Math.max(0,n.burn-t),n.burn<=0){let o=Fh(n),a=n.slots[fr];o.can&&a&&Xa(a.id)&&(n.burnMax=n.burn=Bs(a.id),--a.n<=0&&(n.slots[fr]=null))}i?(n.progress+=t,n.progress>=e.seconds&&(n.progress-=e.seconds,--s.n<=0&&(n.slots[os]=null,n.progress=0),n.slots[as]?n.slots[as].n+=1:n.slots[as]={id:e.out,n:1,d:0})):n.progress=Math.max(0,n.progress-2*t)}else n.progress=Math.max(0,n.progress-2*t)}var Tb=n=>n.burn>0,Ab=n=>n.slots.every(t=>!t)&&n.burn<=0&&n.progress<=0;function eg(n,t,e,i=0){if(t===as){let r=n.slots[as];if(!r)return{cursor:e,took:null};if(e&&(e.id!==r.id||e.n+r.n>$n(r.id)))return{cursor:e,took:null};let o={...r};return n.slots[as]=null,{cursor:e?{...e,n:e.n+r.n}:r,took:o}}let s=t===os?tg:Xa;return{cursor:Xd(n.slots,t,e,i,s),took:null}}function ng(n,t){let e=tg(t.id)?os:Xa(t.id)?fr:-1;if(e<0)return t.n;let i=n.slots[e],s=$n(t.id);if(!i)return n.slots[e]={id:t.id,n:t.n,d:t.d},0;if(i.id!==t.id)return t.n;let r=Math.min(s-i.n,t.n);return i.n+=r,t.n-r}function ig(n,t,e){let i={input:0,fuel:0},s=n.slots[os];if(s&&s.id!==e.in)return i;let r=$n(e.in)-(s?s.n:0),o=Math.min(r,t.count(e.in));if(o>0&&(t.remove(e.in,o),s?s.n+=o:n.slots[os]={id:e.in,n:o,d:0},i.input=o),!n.slots[fr]&&n.burn<=0&&n.slots[os]){let a=n.slots[os].n*e.seconds,l=u=>t.count(u),c=[...new Set(t.slots.filter(u=>u&&Xa(u.id)&&u.id!==e.in).map(u=>u.id))].map(u=>({id:u,per:Bs(u),total:l(u)*Bs(u)})),d=c.filter(u=>u.total>=a).sort((u,f)=>u.per-f.per)[0]??c.sort((u,f)=>f.total-u.total)[0];if(d){let u=Math.min($n(d.id),l(d.id),Math.ceil(a/d.per));t.remove(d.id,u),n.slots[fr]={id:d.id,n:u,d:0},i.fuel=u}}return i}var Oh=class n{constructor(t={}){this.map=new Map,this.hooks=t}static key(t,e,i){return t+","+e+","+i}get(t,e,i){let s=n.key(t,e,i);if(!this.map.has(s)){let r=Q0();r.lit=null,this.map.set(s,r)}return this.map.get(s)}has(t,e,i){return this.map.has(n.key(t,e,i))}remove(t,e,i){let s=n.key(t,e,i),r=this.map.get(s);return this.map.delete(s),r?r.slots.filter(Boolean):[]}update(t){for(let[e,i]of this.map){Eb(i,t);let s=Tb(i);if(s!==i.lit){let[r,o,a]=e.split(",").map(Number);this.hooks.onLit?.(r,o,a,s)!==!1&&(i.lit=s)}}}serialize(){let t={};for(let[e,i]of this.map)Ab(i)||(t[e]={slots:i.slots.map(s=>s?[s.id,s.n,s.d||0]:null),burn:i.burn,burnMax:i.burnMax,progress:i.progress});return t}load(t){this.map.clear();for(let[e,i]of Object.entries(t||{})){let s=Q0();s.slots=[0,1,2].map(r=>i.slots?.[r]?{id:i.slots[r][0],n:i.slots[r][1],d:i.slots[r][2]||0}:null),s.burn=i.burn||0,s.burnMax=i.burnMax||0,s.progress=i.progress||0,s.lit=null,this.map.set(e,s)}}};var Ce=n=>document.getElementById(n);function sg({atlas:n,inventory:t,getHotbarStack:e,onCraft:i,onToss:s,onPalettePick:r,onSelect:o,onSmeltTake:a,onEquip:l,onNotice:c}){let h=new Map,d=b=>(h.has(b)||h.set(b,dr(n,b,44).toDataURL()),h.get(b));function u(b,_=""){let N=document.createElement("div");if(N.className="slot "+_,b){let U=document.createElement("img");if(U.src=d(b.id),U.draggable=!1,N.appendChild(U),b.n>1){let at=document.createElement("span");at.className="count",at.textContent=b.n,N.appendChild(at)}let G=Oa(b.id);if(G&&b.d>0){let at=document.createElement("div");at.className="dura";let Y=1-b.d/G;at.innerHTML=`<i style="width:${Math.max(6,Y*100)}%;background:hsl(${Y*120},80%,48%)"></i>`,N.appendChild(at)}N.dataset.tip=_n(b.id),G&&(N.dataset.tipSub=`Durability ${G-b.d} / ${G}`);let st=is(b.id);st&&(N.dataset.tipSub=st.armor?`Armor +${st.armor}  (${ho.find(at=>at.id===st.slot)?.label})`:st.slots?`Backpack: adds ${st.slots} inventory slots`:`Wear it in the ${ho.find(at=>at.id===st.slot)?.label} slot`)}return N}let f=Ce("hotbar");function m(b){f.replaceChildren();for(let _=0;_<fo;_++){let N=u(e(_),_===b?"sel":""),U=document.createElement("span");U.className="num",U.textContent=_+1,N.appendChild(U),N.addEventListener("mousedown",G=>{G.stopPropagation(),o(_)}),f.appendChild(N)}}let x=Ce("inventory"),g=Ce("inv-grid"),p=Ce("inv-hotbar"),w=Ce("recipes"),C=Ce("cursor-item"),M=null,E=!1;function v(b){let _=u(t.slots[b]);return _.addEventListener("mousedown",N=>{N.preventDefault(),N.stopPropagation();let U=t.slots[b];if(N.shiftKey&&N.button===0&&U&&is(U.id)&&t.quickEquip(b))l?.();else if(N.shiftKey&&N.button===0&&F){if(U){let G=ng(F,U);G<=0?t.slots[b]=null:U.n=G}}else N.shiftKey&&N.button===0?t.quickMove(b):M=t.clickSlot(b,M,N.button===2?2:0);Bt()}),_}let R=Ce("equip-row"),y={};function A(){R.replaceChildren();for(let b of ho){let _=t.equipment[b.id],N=document.createElement("div");N.className="equip-cell";let U=u(_,"equip"+(_?" worn":""));if(!_){let st=I(b.id);if(st){let at=document.createElement("img");at.src=d(st),at.className="ghost",at.draggable=!1,U.appendChild(at)}U.dataset.tip=b.label,U.dataset.tipSub=b.id==="shield"?"A shield, or torches to hold in your off hand (G places one)":"Drop a "+b.label.toLowerCase()+" here to wear it"}U.addEventListener("mousedown",st=>{if(st.preventDefault(),st.stopPropagation(),st.shiftKey&&st.button===0)_&&t.canFit(_.id,1)&&!(b.id==="backpack"&&t.slots.slice(ss).some(Boolean))?(t.equipment[b.id]=null,t.add(_.id,1,_.d)):_&&b.id==="backpack"&&c?.("Empty the backpack first");else{let at=!t.equipment[b.id],Y=t.clickEquip(b.id,M,st.button===2?2:0);Y.refused&&c?.(Y.refused),M=Y.cursor,at&&t.equipment[b.id]&&l?.()}Bt()});let G=document.createElement("small");G.textContent=b.label,N.append(U,G),R.appendChild(N)}}function I(b){if(y[b]===void 0){y[b]=null;for(let _=100;_<400;_++)if(is(_)?.slot===b){y[b]=_;break}}return y[b]}function P(){g.replaceChildren(),p.replaceChildren(),Ce("backpack-grid").replaceChildren();let b=t.capacity;for(let _=0;_<b;_++){let N=v(_);(_<fo?p:_<ss?g:Ce("backpack-grid")).appendChild(N)}Ce("backpack-box").hidden=b<=ss,A(),z(),tt(),S()}function z(){M?(C.hidden=!1,C.replaceChildren(...u(M,"bare").childNodes)):C.hidden=!0}let H=za,D="hand",F=null,J=Ce("recipe-search"),Z=Ce("recipe-only");try{Z.checked=localStorage.getItem("voxelcraft.recipeOnly")==="1"}catch{}let rt=()=>({table:D==="table",furnace:D==="furnace"}),O=()=>!!H[D].furnace,$=b=>{let _=J.value.trim().toLowerCase().split(/\s+/).filter(Boolean),N=b.toLowerCase();return _.every(U=>N.includes(U))};function tt(){pt();let b=H[D],_=!!b.furnace;Ce("craft-title").textContent=b.title,Ce("recipe-only-label").textContent=_?"Smeltable only":"Craftable only",Ce("furnace-panel").hidden=!_,_&&At();let N=Z.checked;w.replaceChildren();let U=0,G=(st,at,Y,it,gt,Pt,mt)=>{let ft=document.createElement("div");ft.className="recipe"+(Pt?" can":""),ft.dataset.kind=st,ft.dataset.index=at;let Lt=u(Y,"bare"),Vt=document.createElement("div");if(Vt.className="rtext",Vt.innerHTML=`<b>${it}</b><div class="ings">${gt}</div>`,ft.append(Lt,Vt),mt){let qt=document.createElement("span");qt.className="secs",qt.textContent=mt,ft.appendChild(qt)}ft.addEventListener("mousedown",qt=>{if(qt.preventDefault(),qt.stopPropagation(),st==="smelt"){ig(F,t,bh[at]),Bt();return}let k=ka[at];t.canCraft(k,rt())&&(i(k,t.craft(k,rt())),Bt())}),w.appendChild(ft),U++};if(_)bh.forEach((st,at)=>{let Y=t.count(st.in);if(N&&Y<1||!$(_n(st.out)+" "+_n(st.in)))return;let it=`<span class="ing ${Y>=1?"ok":"no"}"><img src="${d(st.in)}" draggable="false">${Y}/1</span>`;G("smelt",at,{id:st.out,n:1,d:0},_n(st.out),it,Y>=1,st.seconds+" s")});else{let st=rt();for(let at of b.stations)ka.forEach((Y,it)=>{if(Y.station!==at)return;let gt=t.canCraft(Y,st);if(N&&!gt||!$((Y.label||"")+" "+_n(Y.out)+" "+Y.ins.map(([mt])=>kd(mt)).join(" ")))return;let Pt=Y.ins.map(([mt,ft])=>{let Lt=t.countSpec(mt);return`<span class="ing ${Lt>=ft?"ok":"no"}"><img src="${d(ar(mt)[0])}" draggable="false">${Lt}/${ft}</span>`}).join("");G("craft",it,{id:Y.out,n:Y.n,d:0},Y.label||_n(Y.out),Pt,gt)})}if(!U){let st=document.createElement("p");st.className="recipe-empty",st.textContent=J.value.trim()?"Nothing matches that search.":N?_?"Nothing in your inventory can be smelted yet.":"You cannot craft anything here yet. Untick the box to see every recipe.":"No recipes.",w.appendChild(st)}}J.addEventListener("input",tt),Z.addEventListener("change",()=>{try{localStorage.setItem("voxelcraft.recipeOnly",Z.checked?"1":"0")}catch{}tt()});let vt=[Ce("fur-input"),Ce("fur-fuel"),Ce("fur-output")],K=["Put something to smelt here","Fuel: coal, charcoal, logs, planks...","The finished items appear here"],xt="",_t=b=>b.slots.map(_=>_?_.id+":"+_.n:"-").join("|");function At(){F&&(xt=_t(F),vt.forEach((b,_)=>{let N=F.slots[_],U=u(N);b.replaceChildren(...U.childNodes),N?(b.dataset.tip=U.dataset.tip,delete b.dataset.tipSub):(b.dataset.tip=K[_],delete b.dataset.tipSub)}),W())}function W(){if(!F)return;let{rec:b}=Fh(F);Ce("fur-flame").classList.toggle("lit",F.burn>0),Ce("fur-flame").firstElementChild.style.height=(F.burnMax>0?Math.min(100,F.burn/F.burnMax*100):0)+"%",Ce("fur-arrow").firstElementChild.style.width=(b&&F.progress>0?Math.min(100,F.progress/b.seconds*100):0)+"%"}vt.forEach((b,_)=>{b.addEventListener("mousedown",N=>{if(N.preventDefault(),N.stopPropagation(),!!F){if(N.shiftKey&&N.button===0){let U=F.slots[_];if(U){let G=t.add(U.id,U.n,U.d);_===as&&G<U.n&&a?.({id:U.id,n:U.n-G}),F.slots[_]=G>0?{...U,n:G}:null}}else{let U=eg(F,_,M,N.button===2?2:0);M=U.cursor,U.took&&a?.(U.took)}Bt()}})});let j=Ce("recipe-tip");function pt(){j.hidden=!0}function Dt(b,_,N){let U=bh[Number(b.dataset.index)],G=t.count(U.in),st=p0.map(at=>`${_n(at)} (${Bs(at)} s)`).join(", ");j.innerHTML=`<h4>${_n(U.out)}</h4><div class="tip-head">Smelts:</div>
      <div class="tip-ing ${G>=1?"ok":"no"}"><img src="${d(U.in)}" draggable="false"><span>1\xD7 ${_n(U.in)}</span><em>${G>=1?"\u2714":"\u2718"} you have ${G}</em></div>
      <div class="tip-station">Takes ${U.seconds} seconds per item and needs fuel</div>
      <div class="tip-station">Burns: ${st}</div>
      ${G>=1?'<div class="tip-ok">Click to load it into the furnace</div>':'<div class="tip-no">You have none to smelt</div>'}`,j.hidden=!1,j.style.left=Math.min(_+18,window.innerWidth-j.offsetWidth-8)+"px",j.style.top=Math.min(N+14,window.innerHeight-j.offsetHeight-8)+"px"}function yt(b,_,N){if(b.dataset.kind==="smelt")return Dt(b,_,N);let U=ka[Number(b.dataset.index)],G=t.canCraft(U,rt()),st=U.ins.map(([Pt,mt])=>{let ft=t.countSpec(Pt),Lt=ft>=mt;return`<div class="tip-ing ${Lt?"ok":"no"}"><img src="${d(ar(Pt)[0])}" draggable="false">
        <span>${mt}\xD7 ${kd(Pt)}</span><em>${Lt?"\u2714":"\u2718"} you have ${ft}</em></div>`}).join(""),at=U.station?`<div class="tip-station">Made at: ${y0[U.station]}</div>`:'<div class="tip-station">Made by hand</div>',Y=G?'<div class="tip-ok">Click to craft</div>':'<div class="tip-no">Missing materials</div>';j.innerHTML=`<h4>${U.label||_n(U.out)} \xD7${U.n}</h4><div class="tip-head">Requires:</div>${st}${at}${Y}`,j.hidden=!1;let it=j.offsetWidth,gt=j.offsetHeight;j.style.left=Math.min(_+18,window.innerWidth-it-8)+"px",j.style.top=Math.min(N+14,window.innerHeight-gt-8)+"px"}w.addEventListener("mousemove",b=>{let _=b.target.closest(".recipe");_?yt(_,b.clientX,b.clientY):pt()}),w.addEventListener("mouseleave",pt);function Bt(){P(),m(nt)}let ge=Ce("item-tip"),Xt=0,Qt=0,ue=()=>{ge.hidden=!0};function te(b,_,N){b.hidden=!1,b.style.left=Math.min(_+16,window.innerWidth-b.offsetWidth-8)+"px",b.style.top=Math.min(N+14,window.innerHeight-b.offsetHeight-8)+"px"}function S(){if(!E&&lt.hidden){ue();return}let b=document.elementFromPoint(Xt,Qt),_=b?.closest?.(".slot[data-tip]");_&&!M&&_.closest("#inventory, #palette")?(ge.innerHTML=`<b></b>${_.dataset.tipSub?"<span></span>":""}`,ge.firstChild.textContent=_.dataset.tip,_.dataset.tipSub&&(ge.lastChild.textContent=_.dataset.tipSub),te(ge,Xt,Qt)):ue();let N=b?.closest?.(".recipe");N&&E?yt(N,Xt,Qt):pt()}document.addEventListener("mousemove",b=>{Xt=b.clientX,Qt=b.clientY,S()});let nt=0;x.addEventListener("mousemove",b=>{C.style.left=b.clientX+"px",C.style.top=b.clientY+"px"}),x.addEventListener("mousedown",b=>{b.target!==x||!M||(b.button===2&&M.n>1?(s({...M,n:1}),M.n-=1):(s(M),M=null),z())});function et(b,_="hand",N=null){nt=b,D=H[_]?_:"hand",F=H[D].furnace?N:null,J.value="",E=!0,x.hidden=!1,P()}function dt(){if(pt(),ue(),M){let b=t.add(M.id,M.n,M.d);b>0&&s({...M,n:b}),M=null}F=null,E=!1,x.hidden=!0,m(nt)}let lt=Ce("palette"),L=Ce("palette-grid");for(let b of gh){let _=u({id:b,n:1,d:0});_.addEventListener("click",()=>r(b)),L.appendChild(_)}let xe=Ce("goal-list");function le(b){xe.replaceChildren(),Ce("goal-count").textContent=`${b.filter(Boolean).length}/${cr.length}`;let _=b.lastIndexOf(!0),N=0;if(cr.forEach((U,G)=>{if(!(b[G]?G===_:++N<=2))return;let at=document.createElement("li");at.className=b[G]?"done":"todo",at.textContent=U.text,xe.appendChild(at)}),b.every(Boolean)){let U=document.createElement("li");U.className="done",U.textContent="All goals complete!",xe.appendChild(U)}}return{renderHotbar:b=>{nt=b,m(b),E&&P()},refreshInventory:()=>{E&&P()},tickFurnace:()=>{!E||!F||(_t(F)!==xt?At():W())},openInventory:et,closeInventory:dt,renderGoals:le,openPalette:()=>{lt.hidden=!1},closePalette:()=>{lt.hidden=!0,ue()},get invOpen(){return E},get paletteOpen(){return!lt.hidden}}}function rg(n,t,e=56,i=.14){let s=Math.hypot(n,t)/e;if(!(s>0))return{strafe:0,forward:0,mag:0,edge:!1};let r=Math.min(1,s),o=n/(s*e),a=t/(s*e),l=r<=i?0:(r-i)/(1-i);return{strafe:o*l,forward:-a*l,mag:l,edge:s>=.94}}var og=n=>n.edge&&n.forward>.3;function ag(n,t,e=56){let i=t.x-n.x,s=t.y-n.y,r=Math.hypot(i,s);if(r<=e)return{x:n.x,y:n.y};let o=(r-e)/r;return{x:n.x+i*o,y:n.y+s*o}}function lg(n,t,e,i=!1){return{yaw:-n*e*1.7,pitch:-t*e*1.7*(i?-1:1)}}var Cb=["attack","use","jump","fly","sprint","crouch","inv","off","menu"];function cg(n){let t={};if(!n||typeof n!="object")return t;for(let e of Cb){let i=n[e];i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&(t[e]={x:Math.min(1,Math.max(0,i.x)),y:Math.min(1,Math.max(0,i.y))})}return t}function hg(n,t,e,i,s,r,o=4){let a=(c,h)=>Math.min(.5,(c/2+o)/h),l=(c,h)=>1-a(c,h);return{x:Math.min(l(e,s),Math.max(a(e,s),n/s)),y:Math.min(l(i,r),Math.max(a(i,r),t/r))}}function Rb({coarse:n=!1,search:t=""}={}){let e=new URLSearchParams(t);return e.has("touch")?!0:e.has("desktop")?!1:!!n}function ef(){return typeof window>"u"?!1:Rb({coarse:!!window.matchMedia?.("(pointer: coarse)").matches,search:window.location.search})}var _o=[{id:"forward",label:"Move forward",group:"Movement",key:"KeyW"},{id:"back",label:"Move backward",group:"Movement",key:"KeyS"},{id:"left",label:"Move left",group:"Movement",key:"KeyA"},{id:"right",label:"Move right",group:"Movement",key:"KeyD"},{id:"jump",label:"Jump / swim up / fly up",group:"Movement",key:"Space"},{id:"sprint",label:"Sprint",group:"Movement",key:"Tab"},{id:"crouch",label:"Crouch / fly down",group:"Movement",key:"ShiftLeft"},{id:"down",label:"Fly down (extra key)",group:"Movement",key:"KeyC"},{id:"inventory",label:"Inventory & crafting",group:"Actions",key:"KeyE"},{id:"drop",label:"Drop item",group:"Actions",key:"KeyQ"},{id:"fly",label:"Toggle flight (creative)",group:"Actions",key:"KeyF"},{id:"offhand",label:"Use offhand item (place a torch from the shield slot)",group:"Actions",key:"KeyG"},...Array.from({length:9},(n,t)=>({id:"slot"+(t+1),label:"Hotbar slot "+(t+1),group:"Hotbar",key:"Digit"+(t+1)})),{id:"music",label:"Toggle music",group:"Other",key:"KeyM"},{id:"skipTime",label:"Skip time of day",group:"Other",key:"KeyT"},{id:"renderUp",label:"Render distance +",group:"Other",key:"BracketRight"},{id:"renderDown",label:"Render distance -",group:"Other",key:"BracketLeft"},{id:"debug",label:"Debug info",group:"Other",key:"F3"}],Bh={sensitivity:1,invertY:!1,rawInput:!0,fov:75,musicVolume:.8,sfxVolume:.9,touchControls:ef(),hudSize:ef()?1.3:1,touchLayout:{}},nf=.0022,ug="voxelcraft.settings.v1";function qa(n){return n?n.startsWith("Key")?n.slice(3):n.startsWith("Digit")?n.slice(5):n.startsWith("Numpad")?"Num "+n.slice(6):{Space:"Space",ShiftLeft:"Left Shift",ShiftRight:"Right Shift",ControlLeft:"Left Ctrl",ControlRight:"Right Ctrl",AltLeft:"Left Alt",AltRight:"Right Alt",Tab:"Tab",CapsLock:"Caps Lock",Enter:"Enter",Backspace:"Backspace",ArrowUp:"Up Arrow",ArrowDown:"Down Arrow",ArrowLeft:"Left Arrow",ArrowRight:"Right Arrow",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",Minus:"-",Equal:"=",Backquote:"`"}[n]||n:"Unbound"}var kh=class{constructor(){this.values={...Bh},this.binds=Object.fromEntries(_o.map(t=>[t.id,t.key])),this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem(ug)||"null");if(t){for(let e of Object.keys(Bh))typeof t.values?.[e]==typeof Bh[e]&&t.values[e]!==null&&(this.values[e]=t.values[e]);for(let e of _o)t.binds&&e.id in t.binds&&(this.binds[e.id]=t.binds[e.id]);t.binds&&!("crouch"in t.binds)&&t.binds.sprint==="ShiftLeft"&&(this.binds.sprint="Tab")}}catch{}this.rebuild()}rebuild(){this.reverse=new Map;for(let[t,e]of Object.entries(this.binds))e&&this.reverse.set(e,t)}save(){try{localStorage.setItem(ug,JSON.stringify({values:this.values,binds:this.binds}))}catch{}for(let t of this.listeners)t(this)}get(t){return this.values[t]}set(t,e){this.values[t]=e,this.save()}onChange(t){this.listeners.add(t)}key(t){return this.binds[t]}actionFor(t){return this.reverse.get(t)}setBind(t,e){let i=this.reverse.get(e),s=null;return i&&i!==t&&(this.binds[i]=this.binds[t],s=i),this.binds[t]=e,this.rebuild(),this.save(),s}resetBinds(){this.binds=Object.fromEntries(_o.map(t=>[t.id,t.key])),this.rebuild(),this.save()}resetAll(){this.values={...Bh,touchLayout:{}},this.resetBinds()}};var $a=n=>document.getElementById(n),Ib=[{key:"sensitivity",label:"Look sensitivity (mouse / touch)",min:.1,max:3,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"fov",label:"Field of view",min:60,max:110,step:1,fmt:n=>n+"\xB0",peek:!0},{key:"hudSize",label:"HUD size (hotbar, hearts, map, goals)",min:.7,max:1.8,step:.05,fmt:n=>Math.round(n*100)+"%",peek:!0},{key:"musicVolume",label:"Music volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"sfxVolume",label:"Sound effects volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"}],Pb=[{key:"invertY",label:"Invert mouse Y axis"},{key:"rawInput",label:"Raw mouse input (no OS acceleration)"},{key:"touchControls",label:"On-screen touch controls (sticks and buttons)"}];function dg(n,{onClose:t,layout:e}){let i=$a("options"),s=$a("opt-general"),r=$a("opt-keys"),o=!1,a=null,l=!1,c=null,h=0,d=v=>{l=v,document.body.classList.toggle("peek",v),c?.classList.toggle("peeking",v)},u=()=>{clearTimeout(h),h=setTimeout(()=>{f||d(!1)},900)},f=!1,m=()=>{f&&(f=!1,u())};window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m);function x(){s.replaceChildren(),c=null;for(let y of Ib){let A=document.createElement("label");A.className="opt-row";let I=document.createElement("span");I.textContent=y.label;let P=document.createElement("input");P.type="range",P.min=y.min,P.max=y.max,P.step=y.step,P.value=n.get(y.key);let z=document.createElement("output");z.textContent=y.fmt(Number(P.value)),P.addEventListener("input",()=>{let H=Number(P.value);z.textContent=y.fmt(H),n.set(y.key,H),y.peek&&(c=A,d(!0),u())}),y.peek&&P.addEventListener("pointerdown",()=>{f=!0,c=A,d(!0)}),A.append(I,P,z),s.appendChild(A)}for(let y of Pb){let A=document.createElement("label");A.className="opt-row toggle";let I=document.createElement("input");I.type="checkbox",I.checked=n.get(y.key),I.addEventListener("change",()=>n.set(y.key,I.checked));let P=document.createElement("span");P.textContent=y.label,A.append(I,P),s.appendChild(A)}let v=document.createElement("div");if(v.className="opt-row touch-only",v.style.gridTemplateColumns="1fr",e?.available()){let y=document.createElement("button");y.className="small",y.textContent="Move the touch controls...",y.addEventListener("click",()=>{E(),e.edit()}),v.append(y)}else v.append(Object.assign(document.createElement("span"),{className:"opt-hint",textContent:"To move the touch buttons, open Options from the pause menu while you are in a world."}));s.prepend(v);let R=document.createElement("p");R.className="opt-hint",R.textContent="Tip: sensitivity changes apply instantly. Raw input takes effect the next time you click Resume.",s.appendChild(R)}function g(v=""){r.replaceChildren();let R=document.createElement("p");R.className="opt-hint",R.textContent=v||"Click a key, then press the new key. Esc cancels. If the key is already used, the two actions swap.",r.appendChild(R);let y="";for(let P of _o){if(P.group!==y){y=P.group;let F=document.createElement("h3");F.textContent=y,r.appendChild(F)}let z=document.createElement("div");z.className="bind-row";let H=document.createElement("span");H.textContent=P.label;let D=document.createElement("button");D.className="bind-btn"+(n.key(P.id)===P.key?"":" changed"),D.textContent=qa(n.key(P.id)),D.addEventListener("click",()=>p(P.id,D)),z.append(H,D),r.appendChild(z)}let A=document.createElement("p");A.className="opt-hint",A.textContent="Mouse buttons are fixed: left = break, right = place / use, middle = pick block, wheel = hotbar.";let I=document.createElement("button");I.className="small",I.textContent="Reset keys to defaults",I.addEventListener("click",()=>{n.resetBinds(),g("Keys reset to defaults.")}),r.append(A,I)}function p(v,R){w(),a={action:v,button:R},R.textContent="Press a key\u2026",R.classList.add("waiting")}function w(){a&&(a=null,g())}window.addEventListener("keydown",v=>{if(o)if(a){if(v.preventDefault(),v.stopImmediatePropagation(),v.code==="Escape"){w();return}let R=a.action;a=null;let y=n.setBind(R,v.code),A=I=>_o.find(P=>P.id===I).label;g(y?`"${A(R)}" is now ${qa(v.code)}; swapped with "${A(y)}".`:"")}else v.code==="Escape"&&(v.stopImmediatePropagation(),E())},!0);function C(v){s.hidden=v!=="general",r.hidden=v!=="keys";for(let R of i.querySelectorAll(".opt-tabs button"))R.classList.toggle("active",R.dataset.tab===v)}for(let v of i.querySelectorAll(".opt-tabs button"))v.addEventListener("click",()=>{w(),C(v.dataset.tab)});function M(){o=!0,x(),g(),C("general"),i.hidden=!1}function E(){w(),f=!1,clearTimeout(h),d(!1),o=!1,i.hidden=!0,t()}return $a("opt-done").addEventListener("click",E),$a("opt-reset").addEventListener("click",()=>{n.resetAll(),x(),g("Everything reset to defaults.")}),{open:M,close:E,get isOpen(){return o}}}var fg={},pg={},mg={};for(let n of Nt.blocks)n.plant?.growth&&(fg[n.id]={next:n.plant.growth.next,rate:n.plant.growth.rate,soil:n.plant.growth.soil}),n.plant?.spreads&&(pg[n.id]=n.plant.spreads),n.plant?.grows&&(mg[n.id]=n.plant.grows);var gg={};for(let n=1;n<Na.length;n++)Na[n]&&(gg[Na[n]]=n);function sf(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.plants.size===0))for(let h of[...c.plants]){let d=c.data[h],u=l*16+h%16,f=a*16+Math.floor(h/16)%16,m=Math.floor(h/256),x=fg[d],g=pg[d],p=mg[d];if(p)r()<p.rate*s&&p.soil.includes(n.getBlock(u,m-1,f))&&c0(n,u,m,f,p.trees,n.seed,r)&&o++;else if(x)r()<x.rate*s&&n.getBlock(u,m-1,f)===x.soil&&(n.setBlock(u,m,f,x.next),o++);else if(g&&r()<g.rate*s){let w=g.range*2+1,C=u+Math.floor(r()*w)-g.range,M=f+Math.floor(r()*w)-g.range;n.getBlock(C,m,M)===Kt.AIR&&n.getBlock(C,m-1,M)===g.onto&&(n.setBlock(C,m,M,g.block),o++)}}}return o}function Lb(n,t,e,i,s=Math.random,r=Nt.game.spread.chance){let o=gg[n.getBlock(t,e,i)];if(!o)return!1;let a=n.getBlock(t,e+1,i);if(a!==Kt.AIR&&!jt[a])return!1;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++)if((h||l||c)&&n.getBlock(t+h,e+l,i+c)===o)return s()>=r?!1:(n.setBlock(t,e,i,o),!0);return!1}function xg(n,t,e,i,s,r=Math.random,o=Nt.game.spread.samplesPerChunk){let a=0;for(let l=e-i;l<=e+i;l++)for(let c=t-i;c<=t+i;c++){if(!n.getChunk(c,l))continue;let d=Math.floor(o*s+r());for(let u=0;u<d;u++){let f=c*16+Math.floor(r()*16),m=l*16+Math.floor(r()*16),x=63;for(;x>0;){let g=n.getBlock(f,x,m);if(g!==Kt.AIR&&!jt[g])break;x--}Lb(n,f,x,m,r)&&a++}}return a}function _g(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.hydrating.size===0))for(let h of[...c.hydrating]){let d=Ua.get(c.data[h]);if(!d)continue;let u=l*16+h%16,f=a*16+Math.floor(h/16)%16,m=Math.floor(h/256),x=n.nearWater(u,m,f);x&&d.wet?(n.setBlock(u,m,f,d.wet),o++):!x&&d.dry?(n.setBlock(u,m,f,d.dry),o++):!x&&d.decayInto&&n.getBlock(u,m+1,f)===Kt.AIR&&r()<d.decayRate*s&&(n.setBlock(u,m,f,d.decayInto),o++)}}return o}var Nb=28,zh=n=>n===Kt.AIR||jt[n]>0||de[n]===1,Hh=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,this.falling=[],t.addChangeListener((i,s,r)=>this.touch(i,s,r))}touch(t,e,i){(ro[this.world.getBlock(t,e,i)]||ro[this.world.getBlock(t,e+1,i)])&&(this.queue.add(t+","+e+","+i),this.queue.add(t+","+(e+1)+","+i))}startColumn(t,e,i){let s=this.world,r=[];for(let l=e;l<64&&ro[s.getBlock(t,l,i)];l++)r.push([l,s.getBlock(t,l,i)]);let o=e-1;for(;o>=0&&zh(s.getBlock(t,o,i));)o--;let a=o+1;r.forEach(([l,c],h)=>{s.setBlock(t,l,i,Kt.AIR);let d={id:c,x:t,z:i,y:l,rest:a+h,vy:0};this.falling.push(d),this.hooks.onSpawn?.(d)})}update(t){if(this.queue.size){let i=[...this.queue];this.queue.clear();for(let s of i){let[r,o,a]=s.split(",").map(Number);o<0||o>=64||!this.world.isLoaded(r,a)||ro[this.world.getBlock(r,o,a)]&&o>0&&zh(this.world.getBlock(r,o-1,a))&&this.startColumn(r,o,a)}}if(!this.falling.length)return;this.falling.sort((i,s)=>i.y-s.y);let e=[];for(let i of this.falling)i.vy+=Nb*t,i.y-=i.vy*t,i.y<=i.rest&&e.push(i);for(let i of e){this.falling.splice(this.falling.indexOf(i),1);let s=this.world.getBlock(i.x,i.rest,i.z);zh(s)?(this.world.setBlock(i.x,i.rest,i.z,i.id),this.hooks.onLand?.(i)):this.hooks.onDrop?.(i)}}flush(){for(let t of this.falling.splice(0))zh(this.world.getBlock(t.x,t.rest,t.z))?(this.world.setBlock(t.x,t.rest,t.z,t.id),this.hooks.onLand?.(t)):this.hooks.onDrop?.(t)}settle(t=.02,e=2e3){for(let i=0;i<e;i++)if(this.update(t),!this.falling.length&&!this.queue.size)return i;return e}};var Db=[[0,0,0],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Vh=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,t.addChangeListener((i,s,r)=>{for(let[o,a,l]of Db)La[t.getBlock(i+o,s+a,r+l)]&&this.queue.add(i+o+","+(s+a)+","+(r+l))})}supported(t,e,i){let s=this.world.getBlock(t,e,i);if(!La[s])return!0;let r=t+_i[s*3],o=e+_i[s*3+1],a=i+_i[s*3+2];return Ln[this.world.getBlock(r,o,a)]===1}update(){if(!this.queue.size)return;let t=[...this.queue];this.queue.clear();for(let e of t){let[i,s,r]=e.split(",").map(Number);if(!this.world.isLoaded(i,r))continue;let o=this.world.getBlock(i,s,r);if(!La[o])continue;let a=i+_i[o*3],l=r+_i[o*3+2];this.world.isLoaded(a,l)&&(this.supported(i,s,r)||(this.world.setBlock(i,s,r,Kt.AIR),this.hooks.onBreak?.(i,s,r,o)))}}};var ri=Nt.game.hunger,vg=Nt.game.player.maxFood,Mg=n=>n>ri.noSprintAtOrBelow,rf=n=>n<=0,yg=Nt.game.equipment;function Sg(n,t){if(n<=0)return 0;let e=n*(1-Math.min(yg.maxArmor,t)*yg.armorReduction);return Math.max(1,Math.round(e))}function bg(n){let t=Nt.game.fall;return n<t.safeDistance-t.tolerance?0:Math.max(0,Math.floor(n-t.damageOffset+t.tolerance))}var wg=n=>n?ri.sprintJumpCost:ri.jumpCost,Ub=n=>n>vg-1;function Eg(n,t,e){n.food=Math.min(vg,n.food+t),n.saturation=Math.min(ri.maxSaturation,n.food,(n.saturation??0)+e)}function Tg(n,t,{moving:e,sprinting:i,mining:s=!1,maxHealth:r}){let o={healed:!1,starved:0};return n.saturation=Math.min(n.saturation??0,n.food),Ub(n.food)&&n.saturation>0&&n.health<r?(n.regenTimer+=t,n.regenTimer>=ri.healEverySeconds&&(n.regenTimer=0,n.health=Math.min(r,n.health+1),n.saturation-=ri.saturationPerHeal,o.healed=!0,n.saturation<=0&&(n.saturation=0,n.food=Math.max(0,n.food-ri.emptySaturationCost)))):n.regenTimer=0,rf(n.food)?(n.starveTimer+=t,n.starveTimer>=ri.starveEverySeconds&&(n.starveTimer=0,o.starved=ri.starveDamage)):n.starveTimer=0,e&&(n.food=Math.max(0,n.food-t*(ri.drainPerSecond+(i?ri.sprintDrainPerSecond:0)))),s&&(n.food=Math.max(0,n.food-t*ri.miningDrainPerSecond)),n.saturation=Math.min(n.saturation,n.food),o}var Fb=Ld,Ag=[[1,0],[-1,0],[0,1],[0,-1]],Ob=.2,Bb=500,kb=n=>n===Kt.AIR||jt[n]===1||jt[n]===2||de[n]===1,zb=n=>!(n===Kt.AIR||jt[n]>0||de[n]===1&&Ds[n]!==7),Gh=class{constructor(t){this.world=t,this.queue=new Set,this.timer=0,this.stats={changed:0},t.addChangeListener((e,i,s)=>this.touch(e,i,s))}key(t,e,i){return((t+32768)*65536+(i+32768))*64+e}unkey(t){let e=t%64,i=Math.floor(t/64);return[Math.floor(i/65536)-32768,e,i%65536-32768]}touch(t,e,i){let s=this.world;if(!(de[s.getBlock(t,e,i)]||de[s.getBlock(t,e+1,i)]||de[s.getBlock(t,e-1,i)]||de[s.getBlock(t+1,e,i)]||de[s.getBlock(t-1,e,i)]||de[s.getBlock(t,e,i+1)]||de[s.getBlock(t,e,i-1)]))return;let r=this.queue;r.add(this.key(t,e,i)),r.add(this.key(t,e+1,i)),e>0&&r.add(this.key(t,e-1,i));for(let[o,a]of Ag)r.add(this.key(t+o,e,i+a))}supplyFor(t,e,i){let s=this.world,r=de[s.getBlock(t,e+1,i)]?6:0;for(let[o,a]of Ag){let l=s.getBlock(t+o,e,i+a);if(!de[l])continue;let c=Ds[l];c<=1||zb(s.getBlock(t+o,e-1,i+a))&&(r=Math.max(r,c-1))}return r}step(){let t=this.world,e=[...this.queue].slice(0,Bb);for(let s of e)this.queue.delete(s);let i=0;for(let s of e){let[r,o,a]=this.unkey(s);if(o<0||o>=64||!t.isLoaded(r,a))continue;let l=t.getBlock(r,o,a);if(Ds[l]===7||!kb(l))continue;let c=de[l]?Ds[l]:0,h=this.supplyFor(r,o,a);h!==c&&(t.setBlock(r,o,a,h>0?Fb[h]:Kt.AIR),i++)}return this.stats.changed=i,i}update(t){return this.timer+=t,this.timer<Ob?0:(this.timer=0,this.queue.size?this.step():0)}settle(t=200){for(let e=0;e<t;e++){if(!this.queue.size)return e;this.step()}return t}};var yo=[120,205,250],of=[14,40,125],Cg=12,Wh=class{constructor(t,e){this.world=t,this.colorOf=e,this.cache=new Map}chunkColumns(t){let e=Wn(t.cx,t.cz),i=this.cache.get(e);if(i&&i.version===t.version)return i;let s=new Uint8Array(256),r=new Uint8Array(256),o=new Uint8Array(256);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=63;for(;h>0;){let f=t.data[he(c,h,l)];if(f!==Kt.AIR&&!jt[f])break;h--}let d=l*16+c,u=t.data[he(c,h,l)];if(s[d]=h,de[u]){let f=0,m=h;for(;m>0&&de[t.data[he(c,m,l)]]&&f<Cg;)m--,f++;u=t.data[he(c,m,l)],o[d]=f}r[d]=u}let a={version:t.version,y:s,id:r,depth:o};return this.cache.set(e,a),a}column(t,e){let i=this.world.getChunk(t>>4,e>>4);if(!i)return null;let s=this.chunkColumns(i),r=(e&15)*16+(t&15);return{y:s.y[r],id:s.id[r],depth:s.depth[r]}}render(t,e,i){let s=2*i+1,r=new Uint8ClampedArray(s*s*4);for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=t-i+a,c=e-i+o,h=this.column(l,c),d=(o*s+a)*4;if(!h)continue;let[u,f,m]=this.colorOf(h.id),x=1;if(h.depth===0){let g=this.column(l-1,c-1);g&&(x=Math.max(.72,Math.min(1.24,1+(h.y-g.y)*.09)))}else{let g=Math.min(1,(h.depth-1)/(Cg-4)),p=.12;u=(yo[0]+(of[0]-yo[0])*g)*(1-p)+u*p,f=(yo[1]+(of[1]-yo[1])*g)*(1-p)+f*p,m=(yo[2]+(of[2]-yo[2])*g)*(1-p)+m*p}r[d]=u*x,r[d+1]=f*x,r[d+2]=m*x,r[d+3]=255}return r}};function Rg(n){let t=(n*24+6)%24,e=Math.floor(t),i=Math.floor((t-e)*60);return`${e%12===0?12:e%12}:${String(i).padStart(2,"0")} ${e<12?"AM":"PM"}`}function Ig(n){let t=Math.sin(n*Math.PI*2);return Math.abs(t)<.14?n<.5?"Sunrise":"Sunset":t<0?"Night":n<.25?"Morning":"Afternoon"}var Xh=class{constructor(t,e,i=28){this.canvas=t,this.ctx=t.getContext("2d"),this.data=e,this.R=i,this.N=2*i+1,this.off=document.createElement("canvas"),this.off.width=this.off.height=this.N,this.offCtx=this.off.getContext("2d"),this.cx=NaN,this.cz=NaN,this.lastBuild=0}refresh(t,e,i){t===this.cx&&e===this.cz&&i-this.lastBuild<500||(this.cx=t,this.cz=e,this.lastBuild=i,this.offCtx.putImageData(new ImageData(this.data.render(t,e,this.R),this.N,this.N),0,0))}draw(t,e,i,s){let r=this.ctx;this.refresh(Math.floor(t),Math.floor(e),s),r.clearRect(0,0,196,196),r.save(),r.beginPath(),r.arc(98,98,80,0,Math.PI*2),r.clip(),r.fillStyle="#0c0f13",r.fillRect(0,0,196,196),r.imageSmoothingEnabled=!1,r.drawImage(this.off,98+(this.cx-this.R-t)*3,98+(this.cz-this.R-e)*3,this.N*3,this.N*3);let o=r.createRadialGradient(98,98,80*.62,98,98,80);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.38)"),r.fillStyle=o,r.fillRect(0,0,196,196),r.restore(),r.lineWidth=5,r.strokeStyle="#14141a",r.beginPath(),r.arc(98,98,80+2.5,0,Math.PI*2),r.stroke(),r.lineWidth=2,r.strokeStyle="#a4a4b0",r.beginPath(),r.arc(98,98,80+.5,0,Math.PI*2),r.stroke(),r.fillStyle="#c8c8d2";for(let a=0;a<8;a++){let l=a*Math.PI/4,c=85;a%2&&(r.beginPath(),r.arc(98+Math.sin(l)*c,98-Math.cos(l)*c,1.8,0,Math.PI*2),r.fill())}r.font="bold 12px Consolas, monospace",r.textAlign="center",r.textBaseline="middle",r.lineWidth=3,r.strokeStyle="#000",[["N",0,"#ff6a5a"],["E",1,"#f0f0f8"],["S",2,"#f0f0f8"],["W",3,"#f0f0f8"]].forEach(([a,l,c])=>{let h=l*Math.PI/2,d=91,u=98+Math.sin(h)*d,f=98-Math.cos(h)*d;r.strokeText(a,u,f),r.fillStyle=c,r.fillText(a,u,f)}),r.save(),r.translate(98,98),r.rotate(-i),r.beginPath(),r.moveTo(0,-9),r.lineTo(6,7),r.lineTo(0,3),r.lineTo(-6,7),r.closePath(),r.lineWidth=2.5,r.strokeStyle="#000",r.stroke(),r.fillStyle="#ffffff",r.fill(),r.restore()}};var Zt=n=>document.getElementById(n),Pg=n=>new Promise(t=>setTimeout(t,n)),af=()=>new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(n))),Hb=20260,Vb=2400;function Gb(n){let t=n.trim();if(!t)return;if(/^-?\d{1,9}$/.test(t))return Number(t);let e=2166136261;for(let i of t)e^=i.codePointAt(0),e=Math.imul(e,16777619);return(e>>>0)%2147483647}function Lg(n,t,e){let i=n.textContent,s=0;n.addEventListener("click",()=>{if(n.dataset.armed){clearTimeout(s),delete n.dataset.armed,n.textContent=i,e();return}n.dataset.armed="1",n.textContent=t,s=setTimeout(()=>{delete n.dataset.armed,n.textContent=i},3e3)}),n.disarm=()=>{clearTimeout(s),delete n.dataset.armed,n.textContent=i}}var lf=class{constructor({scene:t,camera:e,materials:i,sky:s,renderer:r,settings:o,tickAtlas:a}){Object.assign(this,{scene:t,camera:e,materials:i,sky:s,renderer:r,settings:o,tickAtlas:a}),this.world=new co(Hb),this.chunks=new po(t,this.world,i,6);let l=this.world.findSpawn();this.cx=l.x,this.cz=l.z,this.ground=Math.max(this.world.heightAt(Math.floor(l.x),Math.floor(l.z)),30),this.angle=.9,this.dayTime=.12,this.elapsed=0,this.chunks.preload(this.cx,this.cz,3),this.sky.setMoonPhase(3),e.fov=68,e.updateProjectionMatrix()}update(t){this.elapsed+=t,this.angle+=t*.06,this.dayTime=.1+.26*(.5-.5*Math.cos(this.elapsed/55));let e=34,i=Math.sin(this.elapsed*.21)*1.5,s=this.camera;s.position.set(this.cx+Math.cos(this.angle)*e,this.ground+19+i,this.cz+Math.sin(this.angle)*e),s.lookAt(this.cx,this.ground+1,this.cz);let r=68+(this.settings.get("fov")-75);Math.abs(s.fov-r)>.01&&(s.fov+=(r-s.fov)*Math.min(1,8*t),s.updateProjectionMatrix()),this.tickAtlas(this.elapsed),this.chunks.update(this.cx,this.cz,8);let o=this.sky.update(this.dayTime,s.position,this.elapsed);this.materials.tint.value.copy(o.tint),this.materials.sprite.color.copy(o.tint),this.scene.background=this.scene.background||o.sky.clone(),this.scene.background.copy(o.sky),this.scene.fog.color.copy(o.sky);let a=this.chunks.radius*16-4;this.scene.fog.near=a*.55,this.scene.fog.far=a,this.renderer.render(this.scene,s)}dispose(){for(let t of this.world.chunks.values())this.chunks.disposeMeshes(t);this.scene.remove(this.chunks.group)}};async function Ng(n){let{params:t,atlasCanvas:e,titleLogo:i,openOptions:s}=n,{storage:r}=n;if(n.autoplay)return Wb(t,r);let{audio:o}=n;o.setScene("title"),o.start(),o.unlockOnGesture();let a=Zt("music-hint"),l=setInterval(()=>{a.hidden=o.running||!o.musicOn},300),c=new AbortController,h=(g,p)=>window.addEventListener(g,p,{signal:c.signal}),d=new lf(n),u=0,f=performance.now(),m=g=>{u=requestAnimationFrame(m);let p=Math.min(.1,(g-f)/1e3);f=g,n.windTime.value=d.elapsed%1e3,d.update(p)};u=requestAnimationFrame(m),t.has("title")||await Xb(n);let x=await new Promise(g=>{let p={title:Zt("title"),worlds:Zt("worlds")},w=O=>{for(let[$,tt]of Object.entries(p))tt.hidden=$!==O;C=O},C="title",M=Zt("title-logo");M.width=i.width,M.height=i.height,M.getContext("2d").drawImage(i,0,0),Zt("title-credit").textContent=Nt.game.studio.name,Zt("t-play").addEventListener("click",()=>{w("worlds"),P()}),Zt("t-options").addEventListener("click",s),r.kind==="server"?Lg(Zt("t-quit"),"Click again: stop the game server",()=>qb(r)):Zt("t-quit").hidden=!0,w("title");let E=[],v=null,R=!1,y=Zt("world-list"),A=O=>{let $=new Date(O);return isNaN($)?"":$.toLocaleDateString(void 0,{month:"short",day:"numeric"})+" "+$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})};function I(){if(y.replaceChildren(...E.map(O=>{let $=document.createElement("div");$.className="world-item"+(O.id===v?" sel":""),$.dataset.id=O.id;let tt=document.createElement("b");tt.textContent=O.name;let vt=document.createElement("span");return vt.textContent=`${O.mode==="creative"?"Creative":"Survival"} \xB7 Day ${(O.day||0)+1} \xB7 Seed ${O.seed} \xB7 ${A(O.updated)}`,$.append(tt,vt),$.addEventListener("click",()=>{v=O.id,I()}),$.addEventListener("dblclick",()=>z(O.id)),$})),!E.length){let O=document.createElement("p");O.className="world-empty",O.textContent="No worlds yet. Create one to start playing!",y.append(O)}Zt("w-play").disabled=!v||R,Zt("w-del").disabled=!v||R,Zt("w-del").disarm?.()}async function P(){Zt("world-error").textContent="";try{E=await r.list()}catch(O){E=[],Zt("world-error").textContent="Could not read your worlds: "+O.message}r.persistent||(Zt("world-error").textContent="Your browser is not allowing saved games here: worlds will be lost when you close this tab."),E.some(O=>O.id===v)||(v=E[0]?.id??null),I(),!E.length&&!Zt("world-error").textContent&&J()}async function z(O){if(!R){R=!0,Zt("w-play").disabled=!0;try{Zt("loading").hidden=!1,await af();let $=await r.load(O);g({id:O,save:$})}catch($){R=!1,Zt("loading").hidden=!0,Zt("world-error").textContent="Could not load that world: "+$.message,I()}}}Zt("w-play").addEventListener("click",()=>v&&z(v)),Zt("w-back").addEventListener("click",()=>w("title")),Lg(Zt("w-del"),"Click again to delete forever",async()=>{if(v){try{await r.remove(v),v=null}catch(O){Zt("world-error").textContent=O.message}P()}});let H=Zt("world-create"),D="survival",F=O=>{D=O,Zt("wc-mode").textContent="Game mode: "+(O==="creative"?"Creative":"Survival")};function J(){Zt("wc-name").value="New World",Zt("wc-seed").value="",F("survival"),H.hidden=!1,Zt("world-actions").hidden=!0,Zt("wc-name").focus(),Zt("wc-name").select()}function Z(){H.hidden=!0,Zt("world-actions").hidden=!1}Zt("w-new").addEventListener("click",J),Zt("wc-cancel").addEventListener("click",Z),Zt("wc-mode").addEventListener("click",()=>F(D==="survival"?"creative":"survival"));async function rt(){if(!R)try{let O=await r.create({name:Zt("wc-name").value,mode:D,seed:Gb(Zt("wc-seed").value)});await z(O.id)}catch(O){Zt("world-error").textContent="Could not create the world: "+O.message}}Zt("wc-go").addEventListener("click",rt),h("keydown",O=>{if(C!=="worlds"||R)return;if(O.code==="Escape"){!H.hidden&&E.length?Z():H.hidden&&w("title");return}if(!H.hidden){O.code==="Enter"&&rt();return}let $=E.findIndex(tt=>tt.id===v);O.code==="ArrowDown"&&E.length?(v=E[Math.min(E.length-1,$+1)].id,I()):O.code==="ArrowUp"&&E.length?(v=E[Math.max(0,$-1)].id,I()):O.code==="Enter"&&v&&z(v)})});return await af(),cancelAnimationFrame(u),clearInterval(l),a.hidden=!0,c.abort(),d.dispose(),Zt("title").hidden=!0,Zt("worlds").hidden=!0,{...x,done:Dg}}function Dg(){Zt("loading").hidden=!0,document.body.classList.remove("startup")}async function Wb(n,t){let e=n.get("world");if(!e){let i=n.has("seed")?Number(n.get("seed")):void 0;e=(await t.create({name:"Autoplay",mode:n.get("mode")||"survival",seed:i})).id}return{id:e,save:await t.load(e),done:Dg}}async function Xb(n){let t=Zt("intro"),{name:e,tagline:i}=Nt.game.studio,s=Nh(n.atlasCanvas,e.toUpperCase(),4),r=Zt("intro-logo");r.width=s.width,r.height=s.height,r.getContext("2d").drawImage(s,0,0);let o=dr(n.atlasCanvas,Kt.GRASS,112),a=Zt("intro-emblem");a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),Zt("intro-sub").textContent=i;let l,c=new Promise(d=>{l=d}),h=new AbortController;for(let d of["keydown","pointerdown"])window.addEventListener(d,l,{signal:h.signal});t.hidden=!1,await af(),t.classList.add("in"),await Promise.race([Pg(900+Vb),c]),t.classList.remove("in"),await Pg(700),h.abort(),t.hidden=!0}async function qb(n){await n.quitGame(),document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#15110e;color:#fff;font-family:Consolas,monospace;text-align:center"><h1 style="margin:0">Thanks for playing!</h1><p style="color:#bbb;margin:0">The game server has stopped. You can close this tab.<br>Run <b>npm start</b> to play again.</p></div>',window.close()}var $b=/^[a-z0-9-]{1,48}$/,Yb=n=>(typeof n=="string"?n.replace(/\s+/g," ").trim().slice(0,32):"")||"New World",Ug=(n,t)=>({id:n,name:t.name,mode:t.mode==="creative"?"creative":"survival",seed:t.seed,created:t.created,updated:t.updated,day:t.day??0}),cf=n=>typeof n=="string"&&$b.test(n);function Zb(n,t,e){let i=n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,30)||"world";for(;;){let s=i+"-"+e().toString(36).slice(2,6).padEnd(4,"0");if(!t(s))return s}}function Fg(n,{rand:t=Math.random,now:e=()=>new Date().toISOString(),persistent:i=!0}={}){let s=new Set;return{kind:"local",persistent:i,async list(){let r=[];for(let o of await n.keys()){s.add(o);let a=await n.get(o);a&&typeof a=="object"&&r.push(Ug(o,a))}return r.sort((o,a)=>String(a.updated).localeCompare(String(o.updated)))},async create({name:r,mode:o,seed:a}={}){for(let u of await n.keys())s.add(u);let l=Yb(r),c=e(),h={name:l,created:c,updated:c,seed:Number.isInteger(a)?a:Math.floor(t()*2**31),mode:o==="creative"?"creative":"survival"},d=Zb(l,u=>s.has(u),t);return s.add(d),await n.set(d,h),Ug(d,h)},async load(r){let o=cf(r)?await n.get(r):null;if(!o)throw new Error("no such world");return{...o,id:r}},async save(r,o){let a=cf(r)?await n.get(r):null;if(!a)throw new Error("no such world");let l=typeof o=="string"?JSON.parse(o):o;if(typeof l!="object"||l===null||typeof l.seed!="number")throw new Error("bad world payload");await n.set(r,{...l,name:a.name,created:a.created,updated:e()})},async remove(r){cf(r)&&await n.delete(r),s.delete(r)},saveOnExit(r,o){this.save(r,o).catch(()=>{})}}}function Jb(n=(...t)=>fetch(...t)){let t=async(e,i="GET",s)=>{let r=await n(e,{method:i,headers:s===void 0?{}:{"Content-Type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)});if(!r.ok)throw new Error(`${i} ${e}: ${r.status} ${await r.text()}`);return r.json()};return{kind:"server",persistent:!0,list:()=>t("api/worlds"),create:e=>t("api/worlds","POST",e),load:e=>t("api/worlds/"+e),save:(e,i)=>n("api/worlds/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:i}),remove:e=>t("api/worlds/"+e,"DELETE"),saveOnExit(e,i){navigator.sendBeacon("api/worlds/"+e,new Blob([i],{type:"application/json"}))},async quitGame(){try{await n("__voxelcraft/shutdown",{method:"POST",headers:{"x-voxelcraft-stop":"1"}})}catch{}}}}function Kb(n="voxelcraft",t="worlds"){let e=()=>new Promise((o,a)=>{let l=indexedDB.open(n,1);l.onupgradeneeded=()=>l.result.createObjectStore(t),l.onsuccess=()=>o(l.result),l.onerror=()=>a(l.error)}),i=null,s=()=>i??=e(),r=async(o,a)=>{let l=await s();return new Promise((c,h)=>{let d=l.transaction(t,o),u=a(d.objectStore(t));d.oncomplete=()=>c(u?.result),d.onerror=()=>h(d.error),d.onabort=()=>h(d.error)})};return{get:o=>r("readonly",a=>a.get(o)),set:(o,a)=>r("readwrite",l=>l.put(a,o)),delete:o=>r("readwrite",a=>a.delete(o)),keys:()=>r("readonly",o=>o.getAllKeys())}}function jb(){let n=new Map;return{get:async t=>n.has(t)?structuredClone(n.get(t)):void 0,set:async(t,e)=>{n.set(t,structuredClone(e))},delete:async t=>{n.delete(t)},keys:async()=>[...n.keys()]}}async function Og(){try{let n=await fetch("api/ping",{cache:"no-store"});if(n.ok&&(await n.json())?.game==="voxelcraft")return Jb()}catch{}try{let n=Kb();return await n.keys(),navigator.storage?.persist&&navigator.storage.persist().catch(()=>{}),Fg(n)}catch{return Fg(jb(),{persistent:!1})}}var Zn=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),e&&(s.textContent=e),i&&i.appendChild(s),s},hf=[{id:"move",label:"Tap: pick up / place",button:0,shift:!1},{id:"split",label:"Tap: split / place one",button:2,shift:!1},{id:"quick",label:"Tap: quick move / wear",button:0,shift:!0}];function kg(n){let t={strafe:0,forward:0,edge:!1,jump:!1,crouch:!1,sprint:!1},e=!1,i=!1,s=new Set,r={},o={},a=!1,l=null,c=Zn("div");c.id="touch",c.hidden=!0;let h=Zn("div","tz look","",c),d=Zn("div","tz move","",c),u=Zn("div","stick ghost","",c);Zn("i","knob","",u);let f=Zn("div","stick live","",c),m=Zn("i","knob","",f);f.hidden=!0;let x=null,g={x:0,y:0},p=()=>{f.style.left=g.x+"px",f.style.top=g.y+"px"};function w(){x=null,t.strafe=0,t.forward=0,t.edge=!1,f.hidden=!0,u.hidden=!1,n.changed?.()}d.addEventListener("pointerdown",K=>{x===null&&(K.preventDefault(),x=K.pointerId,d.setPointerCapture(K.pointerId),g={x:K.clientX,y:K.clientY},p(),m.style.transform="translate(-50%, -50%)",f.hidden=!1,u.hidden=!0)}),d.addEventListener("pointermove",K=>{if(K.pointerId!==x)return;g=ag(g,{x:K.clientX,y:K.clientY}),p();let xt=K.clientX-g.x,_t=K.clientY-g.y,At=rg(xt,_t);t.strafe=At.strafe,t.forward=At.forward,t.edge=og(At);let W=Math.min(1,Math.hypot(xt,_t)/56)*56,j=Math.atan2(_t,xt);m.style.transform=`translate(calc(-50% + ${Math.cos(j)*W}px), calc(-50% + ${Math.sin(j)*W}px))`,n.changed?.()});for(let K of["pointerup","pointercancel"])d.addEventListener(K,xt=>{xt.pointerId===x&&w()});let C=null,M={x:0,y:0};h.addEventListener("pointerdown",K=>{C===null&&(K.preventDefault(),C=K.pointerId,h.setPointerCapture(K.pointerId),M={x:K.clientX,y:K.clientY})}),h.addEventListener("pointermove",K=>{K.pointerId===C&&(n.look(K.clientX-M.x,K.clientY-M.y),M={x:K.clientX,y:K.clientY})});for(let K of["pointerup","pointercancel"])h.addEventListener(K,xt=>{xt.pointerId===C&&(C=null)});function E(K,xt,_t=c){let At=Zn("div","tb "+K,xt,_t);return At.setAttribute("role","button"),_t===c&&(r[K]=At,R(K,At)),At}function v(K){let xt=r[K],_t=o[K];xt&&Object.assign(xt.style,_t?{left:_t.x*100+"%",top:_t.y*100+"%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)"}:{left:"",top:"",right:"",bottom:"",transform:""})}function R(K,xt){xt.addEventListener("pointerdown",_t=>{if(!a)return;_t.preventDefault(),_t.stopImmediatePropagation();let At=xt.getBoundingClientRect(),W=_t.clientX-(At.left+At.width/2),j=_t.clientY-(At.top+At.height/2),pt=_t.pointerId;xt.setPointerCapture(pt),xt.classList.add("moving");let Dt=Bt=>{Bt.pointerId===pt&&(o={...o,[K]:hg(Bt.clientX-W,Bt.clientY-j,At.width,At.height,window.innerWidth,window.innerHeight)},v(K))},yt=Bt=>{if(Bt.pointerId===pt){for(let ge of["pointermove","pointerup","pointercancel"])xt.removeEventListener(ge,ge==="pointermove"?Dt:yt);xt.classList.remove("moving"),n.layoutChanged?.(o)}};xt.addEventListener("pointermove",Dt),xt.addEventListener("pointerup",yt),xt.addEventListener("pointercancel",yt)})}function y(K,xt,_t,At){let W=E(K,xt),j=null,pt=()=>{j!==null&&(j=null,s.delete(pt),W.classList.remove("on"),At?.())};W.addEventListener("pointerdown",Dt=>{a||j!==null||(Dt.preventDefault(),j=Dt.pointerId,W.setPointerCapture(Dt.pointerId),W.classList.add("on"),s.add(pt),_t())});for(let Dt of["pointerup","pointercancel"])W.addEventListener(Dt,yt=>{yt.pointerId===j&&pt()});return W}function A(K,xt,_t,At=c){let W=E(K,xt,At);return W.addEventListener("pointerdown",j=>{a||(j.preventDefault(),_t())}),W}function I(K,xt,_t){let At=E(K,xt);return At.addEventListener("pointerdown",W=>{a||(W.preventDefault(),t[_t]=!t[_t],At.classList.toggle("on",t[_t]),n.changed?.())}),At}y("attack","Break",()=>n.attack(!0),()=>n.attack(!1)),y("use","Use",()=>n.use(!0),()=>n.use(!1)),y("jump","Jump",()=>{t.jump=!0,n.jump(),n.changed?.()},()=>{t.jump=!1,n.changed?.()});let P=A("fly","Fly",()=>n.fly()),z=I("sprint","Run","sprint"),H=I("crouch","Sneak","crouch");A("inv","Bag",()=>n.inventory()),A("off","Torch",()=>n.offhand()),A("menu","II",()=>n.menu());let D=A("close","\u2715",()=>n.closeScreen(),document.body);D.id="t-close";let F=Zn("div","tb invmode");document.querySelector("#inventory .inv-col").prepend(F),F.id="t-invmode",D.hidden=F.hidden=!0;let J=0,Z=()=>{F.textContent=hf[J].label};Z(),F.addEventListener("pointerdown",K=>{K.preventDefault(),J=(J+1)%hf.length,Z()}),document.getElementById("inventory").addEventListener("mousedown",K=>{let xt=hf[J];!e||!K.isTrusted||xt.id==="move"||(K.stopImmediatePropagation(),K.preventDefault(),K.target.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:xt.button,shiftKey:xt.shift,clientX:K.clientX,clientY:K.clientY})))},!0);let rt=Zn("div","tedit","",document.body);rt.hidden=!0,Zn("span","","Drag the buttons where you want them",rt);let O=Zn("button","small","Reset",rt),$=Zn("button","small","Done",rt);O.addEventListener("click",()=>{o={};for(let K of Object.keys(r))v(K);n.layoutChanged?.(o)}),$.addEventListener("click",()=>tt());function tt(){if(!a)return;a=!1,rt.hidden=!0,c.classList.remove("editing"),document.body.classList.remove("peek"),c.hidden=!i;let K=l;l=null,K?.()}document.body.appendChild(c);function vt(){for(let K of[...s])K();x!==null&&w(),C=null,t.jump=!1,t.crouch=!1,t.sprint=!1,z.classList.remove("on"),H.classList.remove("on"),n.changed?.()}return{state:t,reset:vt,get enabled(){return e},setEnabled(K){e=!!K,e||(tt(),vt(),c.hidden=!0,i=!1,D.hidden=!0,F.hidden=!0)},get editing(){return a},setLayout(K){o=cg(K);for(let xt of Object.keys(r))v(xt)},edit(K){!e||a||(vt(),a=!0,l=K,c.hidden=!1,c.classList.add("editing"),document.body.classList.add("peek"),rt.hidden=!1,P.hidden=!1,P.classList.remove("on"))},sync({show:K,screen:xt,creative:_t,flying:At}){if(!e||a)return;let W=!!K;W!==i&&(i=W,c.hidden=!W,W||vt()),P.hidden=!_t,P.classList.toggle("on",!!At),D.hidden=!xt,F.hidden=xt!=="inv"}}}var Qb=[".inv-panel",".pal-panel",".opt-panel",".world-panel","#menu","#title-menu","#death-box"];function tw(n,t,e,i,s=12){return!(n>0)||!(t>0)?1:Math.max(.25,Math.min(1,(e-s*2)/n,(i-s*2)/t))}function ew(n,t){return Math.max(.55,Math.min(1,n/900,t/560))}var nw=1.8,iw=(n,t,e=1)=>Math.min(nw,ew(n,t)*(Number.isFinite(e)&&e>0?e:1));function zg(n=()=>1){let t=[],e=r=>{let o=r.offsetWidth,a=r.offsetHeight;r.style.setProperty("--fit",String(tw(o,a,window.innerWidth,window.innerHeight)))},i=()=>{document.documentElement.style.setProperty("--hud",iw(window.innerWidth,window.innerHeight,n()).toFixed(3));for(let r of t)e(r)},s=typeof ResizeObserver=="function"?new ResizeObserver(r=>{for(let o of r)e(o.target)}):null;for(let r of Qb)for(let o of document.querySelectorAll(r))t.push(o),s?.observe(o);return window.addEventListener("resize",i),window.addEventListener("orientationchange",i),i(),i}var uf=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Hg=300,df=Nt.game.treeFall.leafReach,ls=(n,t,e)=>n+","+t+","+e,Vg=n=>n.split(",").map(Number),Wg=[];for(let n=-1;n<=1;n++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++){let i=Math.abs(n)+Math.abs(t)+Math.abs(e);(i===1||i===2)&&Wg.push([n,t,e])}function sw(n,t,e,i){if(e<=0||!n.isLoaded(t,i))return!0;let s=n.getBlock(t,e-1,i);return Ln[s]===1&&!ns[s]&&!Us[s]}function Xg(n,t,e,i){let s=new Map,r=[],o=!1,a=n.getBlock(t,e+1,i);for(ns[a]&&(s.set(ls(t,e+1,i),[t,e+1,i,a]),r.push([t,e+1,i]));r.length&&s.size<Hg;){let[C,M,E]=r.pop();sw(n,C,M,E)&&(o=!0);for(let[v,R,y]of Wg){let A=C+v,I=M+R,P=E+y;s.has(ls(A,I,P))||!ns[n.getBlock(A,I,P)]||(s.set(ls(A,I,P),[A,I,P,n.getBlock(A,I,P)]),r.push([A,I,P]))}}if(s.size>=Hg)return null;o&&s.clear();let l=[[t,e,i],...s.values()],c=new Map,h=[];for(let[C,M,E]of l)for(let[v,R,y]of uf){let A=C+v,I=M+R,P=E+y;Us[n.getBlock(A,I,P)]&&!c.has(ls(A,I,P))&&(c.set(ls(A,I,P),1),h.push([A,I,P]))}for(let C=1;C<df+1&&h.length;C++){let M=[];for(let[E,v,R]of h)for(let[y,A,I]of uf){let P=E+y,z=v+A,H=R+I;!Us[n.getBlock(P,z,H)]||c.has(ls(P,z,H))||(c.set(ls(P,z,H),C+1),M.push([P,z,H]))}h=M}let d=new Set,u=1/0,f=-1/0,m=1/0,x=-1/0,g=1/0,p=-1/0;for(let C of c.keys()){let[M,E,v]=Vg(C);u=Math.min(u,M),f=Math.max(f,M),m=Math.min(m,E),x=Math.max(x,E),g=Math.min(g,v),p=Math.max(p,v)}if(c.size){let C=df+1,M=[];for(let E=u-C;E<=f+C;E++)for(let v=m-C;v<=x+C;v++)for(let R=g-C;R<=p+C;R++)ns[n.getBlock(E,v,R)]&&!s.has(ls(E,v,R))&&M.push([E,v,R]);for(let E=1;E<=df&&M.length;E++){let v=[];for(let[R,y,A]of M)for(let[I,P,z]of uf){let H=R+I,D=y+P,F=A+z,J=ls(H,D,F);!Us[n.getBlock(H,D,F)]||d.has(J)||(d.add(J),v.push([H,D,F]))}M=v}}let w=[...c.keys()].filter(C=>!d.has(C)).map(C=>{let M=Vg(C);return[...M,n.getBlock(M[0],M[1],M[2])]});return!s.size&&!w.length?null:{logs:[...s.values()],leaves:w}}function qg(n,t){for(let[e,i,s]of t.logs)n.setBlock(e,i,s,Kt.AIR);for(let[e,i,s]of t.leaves)n.setBlock(e,i,s,Kt.AIR)}function $g(n,t,e,i){let s=n+.5-e,r=t+.5-i;return Math.abs(s)>=Math.abs(r)?{dx:s>=0?1:-1,dz:0}:{dx:0,dz:r>=0?1:-1}}function Yg(n,t,e,i,s,r,o,a){let l=n-i,c=e-r,h=t-s,d=l*o+c*a,u=l*a-c*o;return[i+o*h+a*u,s-d,r+a*h-o*u]}var Gg=n=>n===Kt.AIR||jt[n]>0||de[n]===1;function Zg(n,t,e,i,s){for(let r=0;r<=s;r++){let o=e+r;if(!(o<1||o>=64||!Gg(n.getBlock(t,o,i)))){for(let a=0;a<5&&o>1&&Gg(n.getBlock(t,o-1,i));a++)o--;return o}}return null}function Jg(n,t,e,i,s,r,o){let a=[],l=[];for(let c of[t.logs,t.leaves]){let h=c.slice().sort((d,u)=>d[1]-i-(u[1]-i));for(let[d,u,f,m]of h){let[x,g,p]=Yg(d,u,f,e,i,s,r,o),w=Zg(n,x,g,p,3);if(w===null){l.push({id:m,x,y:g,z:p});continue}n.setBlock(x,w,p,m),a.push({id:m,x,y:w,z:p})}}return{placed:a,lost:l}}function Kg(n,t,e,i,s,r,o){let a=[];for(let l of[t.logs,t.leaves])for(let[c,h,d,u]of l){let[f,m,x]=Yg(c,h,d,e,i,s,r,o),g=Zg(n,f,m,x,6);a.push({id:u,x:f,y:g??i+1,z:x})}return a}var on=Nt.game,nu=on.hunger;re.enabled=!1;var zt=n=>document.getElementById(n),qe=new kh,jg=new URLSearchParams(location.search),rw=jg.has("touch")?!0:jg.has("desktop")?!1:null,xx=()=>rw??!!qe.get("touchControls"),en=xx();document.body.classList.toggle("touch",en);var ow=zg(()=>qe.get("hudSize")),Tf=new URLSearchParams(location.search),Af=!1;function _x(){if(Af){yn("A new version is ready: it loads when you quit to the title.");return}let n=new URL(location.href);n.searchParams.set("title",""),location.replace(n)}window.addEventListener("vc-update",_x);window.__vcUpdated&&_x();async function aw(){if(!navigator.locks)return!0;for(let n=0;n<8;n++){if(await new Promise(e=>{navigator.locks.request("voxelcraft-game",{ifAvailable:!0},i=>{if(!i){e(!1);return}return e(!0),new Promise(()=>{})})}))return!0;await new Promise(e=>setTimeout(e,250))}return!1}await aw()||(document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#1b1410;color:#fff;font-family:Consolas,monospace;text-align:center;padding:24px"><h1 style="margin:0">VoxelCraft is already open</h1><p style="max-width:520px;color:#ccc;margin:0">Only one copy of the game can run at a time. Close the other tab or window, then reload this page.</p></div>',await new Promise(()=>{}));var Zi=Tf.has("autoplay"),{canvas:Yi,avg:yx}=await V0(),lw=G0(yx);document.documentElement.style.setProperty("--dirt",`url(${j0(Yi)})`);var Cf=zt("logo"),iu=Nh(Yi);Cf.width=iu.width;Cf.height=iu.height;Cf.getContext("2d").drawImage(iu,0,0);var Ao=new dh({canvas:zt("game"),antialias:!1,powerPreference:"high-performance"});Ao.outputColorSpace=Qs;Ao.setPixelRatio(Math.min(window.devicePixelRatio,2));var Te=new Qo;Te.fog=new jo(10208511,40,90);var ze=new mn(75,1,.05,700);ze.rotation.order="YXZ";Te.add(ze);function vx(){Ao.setSize(window.innerWidth,window.innerHeight,!1),ze.aspect=window.innerWidth/window.innerHeight,ze.updateProjectionMatrix()}window.addEventListener("resize",vx);vx();var Mx=n=>{let t=new Di(n);return t.magFilter=t.minFilter=We,t.generateMipmaps=!1,t},So=Mx(Yi),Sx=H0(Yi),Si={solid:new ln({map:So,vertexColors:!0,alphaTest:.5}),water:new ln({map:So,vertexColors:!0,transparent:!0,opacity:.74,depthWrite:!1}),sprite:new ln({vertexColors:!0}),plant:new ln({map:So,vertexColors:!0,alphaTest:.5,side:ti})},Rf={value:new Gt(1,1,1)},cw={value:xh},hw={value:new Gt(1,.84,.58)};Si.tint=Rf;function If(n){n.uniforms.uTint=Rf,n.uniforms.uWarm=hw,n.uniforms.uFloor=cw,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aBlk;
uniform vec3 uTint;
uniform vec3 uWarm;
uniform float uFloor;`).replace("#include <color_vertex>",`#include <color_vertex>
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  vColor.rgb = min(vec3(1.0), max(vColor.rgb * uTint, vec3(aBlk.y * uFloor)) + aBlk.x * uWarm);
#endif`)}Si.solid.onBeforeCompile=If;Si.water.onBeforeCompile=If;var Pf={value:0};Si.plant.onBeforeCompile=n=>{If(n),n.uniforms.uTime=Pf,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aSway;
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
      float ph = uTime * 2.1 + wp.x * 0.65 + wp.z * 0.45;
      float gust = sin(ph) + 0.5 * sin(ph * 2.3 + 1.7);
      transformed.x += gust * 0.075 * aSway;
      transformed.z += cos(ph * 0.9 + wp.x * 0.3) * 0.05 * aSway;`)};var Co=new Ah(Te,{sun:W0(),moon:X0(),glow:q0()});Co.setPixelRatio(Ao.getPixelRatio());var bx=new ln({map:So,vertexColors:!0,alphaTest:.5,fog:!1,depthTest:!1,transparent:!0}),wx=new ln({vertexColors:!0,fog:!1,depthTest:!1,transparent:!0}),Lf=new ln({color:13212276,fog:!1,depthTest:!1,transparent:!0}),Ex=new zn(.11,.11,.6),ke=new Pe(Ex,Lf);ke.renderOrder=999;ke.frustumCulled=!1;ze.add(ke);var hs={arm:{pos:[.5,-.5,-.55],rot:[.55,-.35,.15],scale:1},block:{pos:[.5,-.46,-.8],rot:[.25,-.6,.05],scale:.22},sprite:{pos:[.46,-.33,-.7],rot:[.1,-.5,.05],scale:.42},tool:{pos:[.52,-.42,-.8],rot:[.12,2.45,.38],scale:.46,pivot:[.66,-.7,-.45]}};hs.axe={...hs.tool,flip:!0};var Ke=hs.arm,Sf=-1,uw=new In().setFromAxisAngle(new V(1,1,0).normalize(),Math.PI),ff=new In,Qg=new Pi,tx=new V;function Tx(){let n=Io(Ne),t=n?n.id:0;t!==Sf&&(Sf=t,t?Os(t)?(ke.geometry=xo(t),ke.material=bx,Ke=hs.block):(ke.geometry=Dh(t,!0),ke.material=wx,Ke=qn(t)?qn(t).type==="axe"?hs.axe:hs.tool:hs.sprite):(ke.geometry=Ex,ke.material=Lf,Ke=hs.arm))}var zs=new aa(new ua(new zn(1.004,1.004,1.004)),new Yr({color:0,fog:!1}));zs.visible=!1;Te.add(zs);var Nf=Mx($0());Nf.repeat.set(.1,1);var Ka=new Pe(new zn(1.006,1.006,1.006),new ln({map:Nf,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Ka.visible=!1;Te.add(Ka);var Df=256,Mi=new ra(new zn(1,1,1),new ln({color:16777215}),Df);Mi.instanceMatrix.setUsage(ld);Mi.frustumCulled=!1;Mi.count=0;Te.add(Mi);var Hs=[],ex=new be,dw=new In,nx=new V,ix=new V,Ax=new Gt;function bo(n,t,e,i){let s=lw[i]||[.5,.5,.5];for(let r=0;r<14&&Hs.length<Df;r++){let o=.75+Math.random()*.5;Hs.push({x:n+.2+Math.random()*.6,y:t+.2+Math.random()*.6,z:e+.2+Math.random()*.6,vx:(Math.random()-.5)*3.5,vy:Math.random()*3.5+1,vz:(Math.random()-.5)*3.5,life:.55+Math.random()*.5,size:.07+Math.random()*.08,r:s[0]*o,g:s[1]*o,b:s[2]*o})}}var pf=new Map;function fw(n){if(!pf.has(n)){let t=dr(Yi,n,16),e=t.getContext("2d").getImageData(0,0,16,16).data,i=0,s=0,r=0,o=0;for(let a=0;a<e.length;a+=4)e[a+3]>200&&(i+=e[a],s+=e[a+1],r+=e[a+2],o++);pf.set(n,o?[i/o/255,s/o/255,r/o/255]:[.8,.5,.2])}return pf.get(n)}var qh=new V;function pw(n){let t=fw(n);ze.updateMatrixWorld(),ze.localToWorld(qh.set(.02,-.2,-.5));let e=ze.getWorldDirection(tu);for(let i=0;i<9&&Hs.length<Df;i++){let s=i%3===0,r=s?1.25:.8+Math.random()*.3;Hs.push({x:qh.x+(Math.random()-.5)*.08,y:qh.y+(Math.random()-.5)*.06,z:qh.z+(Math.random()-.5)*.08,vx:e.x*.6+(Math.random()-.5)*1.6,vy:.9+Math.random()*1.4,vz:e.z*.6+(Math.random()-.5)*1.6,life:.35+Math.random()*.3,size:.018+Math.random()*.026,r:Math.min(1,t[0]*r+(s?.15:0)),g:Math.min(1,t[1]*r+(s?.15:0)),b:Math.min(1,t[2]*r+(s?.15:0))})}}function mw(n){let t=0;for(let e=Hs.length-1;e>=0;e--){let i=Hs[e];if(i.life-=n,i.life<=0){Hs.splice(e,1);continue}i.vy-=18*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n}for(let e of Hs){ix.set(e.x,e.y,e.z);let i=e.size*Math.min(1,e.life*3);nx.set(i,i,i),ex.compose(ix,dw,nx),Mi.setMatrixAt(t,ex),Mi.setColorAt(t,Ax.setRGB(e.r,e.g,e.b)),t++}Mi.count=t,Mi.instanceMatrix.needsUpdate=!0,Mi.instanceColor&&(Mi.instanceColor.needsUpdate=!0)}var Xs=!1,su=dg(qe,{onClose:()=>{Xs=!1},layout:{available:()=>Af&&en,edit:()=>qs.edit(()=>{Xs=!0,su.open()})}});ke.visible=!1;var oe=new Ih;window.__audio=oe;window.__atlas=Yi;oe.setVolumes(qe.get("musicVolume"),qe.get("sfxVolume"));var Uf=await Og(),Ff=await Ng({params:Tf,autoplay:Zi,atlasCanvas:Yi,titleLogo:iu,openOptions:()=>su.open(),renderer:Ao,scene:Te,camera:ze,materials:Si,sky:Co,windTime:Pf,audio:oe,storage:Uf,settings:qe,tickAtlas:n=>{Sx(n)&&(So.needsUpdate=!0)}});Af=!0;ke.visible=!0;oe.setScene("game");var Of=Ff.id,He=Ff.save,Bf=He?.seed??Math.floor(Math.random()*2**31),Yt=new co(Bf);He?.edits&&Yt.loadEdits(He.edits,He.legacyCaves);var Mn=new po(Te,Yt,Si,He?.radius??6),ht=new Th(Yt),Un=new Uh(Te,Yt,Si.solid,Si.sprite);Un.load(He?.drops);var gw=n=>{let t=yx[Fe[n]?.top];return t?[t[0]*255,t[1]*255,t[2]*255]:[90,90,90]},xw=new Xh(zt("minimap"),new Wh(Yt,gw)),Cx=new Gh(Yt),Mo=new Map,Rx=new Hh(Yt,{onSpawn(n){let t=new Pe(xo(n.id),Si.solid);t.position.set(n.x+.5,n.y+.5,n.z+.5),Te.add(t),Mo.set(n,t)},onLand(n){Te.remove(Mo.get(n)),Mo.delete(n),Mn.remeshNow(vr(n.x,n.z)),oe.block(Fe[n.id].sound,"place")},onDrop(n){if(Te.remove(Mo.get(n)),Mo.delete(n),!ie)for(let t of uo(n.id,!0))Un.spawn(t.id,t.n,n.x+.5,n.rest+.5,n.z+.5);bo(n.x,n.rest,n.z,n.id)}}),Ix=new Vh(Yt,{onBreak(n,t,e,i){if(bo(n,t,e,i),oe.block(Fe[i].sound,"break"),!ie)for(let s of uo(i,!0))Un.spawn(s.id,s.n,n+.5,t+.4,e+.5)}}),Ro=new Oh({onLit(n,t,e,i){if(!Yt.isLoaded(n,e))return!1;let s=Yt.getBlock(n,t,e);if(s!==Kt.FURNACE&&s!==Kt.FURNACE_LIT)return!0;let r=i?Kt.FURNACE_LIT:Kt.FURNACE;return s!==r&&Yt.setBlock(n,t,e,r),!0}});Ro.load(He?.furnaces);var ie=He?.mode==="creative",Se=new Eh;Se.load(He?.inventory);Se.loadEquipment(He?.equipment);var ru=He?.creativeHotbar??[...on.creativeHotbarIds],Jn={collected:new Set(He?.progress?.collected),crafted:new Set(He?.progress?.crafted),flags:new Set(He?.progress?.flags)},Jh=on.player.maxFood,un=Math.min(Jh,He?.food??Jh),xr=Math.min(un,He?.saturation??on.hunger.respawnSaturation),vi=0,ja=on.player.maxHealth,oi=He?.health>0?Math.min(ja,He.health):ja,Sn=!1,Qa=He?.day??0,mf=Number(Tf.get("growth"))||1,Ne=He?.slot??0,$i=He?.time??on.time.startTime;Co.setMoonPhase(Qa);var us=0,Io=n=>ie?{id:ru[n],n:1,d:0}:Se.slots[n],mr=()=>Io(Ne)?.id??0,Vs=He?.spawnPoint??Yt.findSpawn(),Po=He?.player??Vs;ht.pos.x=Po.x;ht.pos.y=Po.y;ht.pos.z=Po.z;ht.yaw=Po.yaw??0;ht.pitch=Po.pitch??0;ht.flying=ie&&!!Po.flying;Mn.preload(ht.pos.x,ht.pos.z,3);for(;ht.collides(ht.pos.x,ht.pos.y,ht.pos.z)&&ht.pos.y<120;)ht.pos.y+=1;var gr=n=>Fe[n]?.sound??"default",Px=()=>Yt.getBlock(Math.floor(ht.pos.x),Math.floor(ht.pos.y-.2),Math.floor(ht.pos.z));ht.events.step=()=>oe.block(Fe[Px()]?.sound||"default","step");ht.events.splash=()=>oe.splash();ht.events.land=()=>oe.block(Fe[Px()]?.sound||"default","place");ht.events.jump=n=>{ie||(un=Math.max(0,un-wg(n)))};ht.events.fall=n=>{let t=bg(n);ie||t<=0||(kf(Sg(t,Se.armor),"You hit the ground too hard"),Sn||(pr.v=-on.fall.kick))};var gf=cr.map(n=>n.done(Jn));function Gs(){let n=cr.map(t=>t.done(Jn));n.forEach((t,e)=>{t&&!gf[e]&&(yn("Goal complete: "+cr[e].text),oe.craft())}),gf=n,ds.renderGoals(gf)}function Kh(n){let t=ht.eye,e=ze.getWorldDirection(tu);Un.spawn(n.id,n.n,t.x+e.x*.5,t.y-.3+e.y*.5,t.z+e.z*.5,{d:n.d||0,delay:1.5,vx:e.x*4,vy:e.y*4+1.5,vz:e.z*4})}var ds=sg({atlas:Yi,inventory:Se,getHotbarStack:Io,onSelect:n=>wo(n),onToss:Kh,onCraft:(n,t)=>{t.ok&&(oe.craft(),Jn.crafted.add(n.out),t.leftover>0&&Kh({id:n.out,n:t.leftover,d:0}),Gs(),hn())},onPalettePick:n=>{ru[Ne]=n,hn(),Lx()},onEquip:()=>{oe.craft(),Jn.flags.add("equipped"),Gs(),hn()},onNotice:n=>yn(n),onSmeltTake:n=>{oe.craft(),Jn.crafted.add(n.id),Gs(),hn()}}),sx=0;function Lx(){let n=Io(Ne),t=zt("blockname");t.textContent=n?_n(n.id):"",t.classList.add("show"),clearTimeout(sx),sx=setTimeout(()=>t.classList.remove("show"),1400)}function hn(){ds.renderHotbar(Ne),Tx()}function wo(n){Ne=(n+9)%9,hn(),Lx()}var tl=-1;function Lo(){let n=zt("health");n.style.display=ie?"none":"flex";let t=Math.ceil(oi);t!==tl&&(tl=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=oi-i*2;return J0(s>=2?2:s>=1?1:0)})),n.classList.toggle("low",oi<=6))}var rx=0;function _w(){let n=zt("hurt");n.classList.add("flash"),clearTimeout(rx),rx=setTimeout(()=>n.classList.remove("flash"),220)}var pr={y:0,v:0};function kf(n,t="You died"){ie||Sn||n<=0||(oi=Math.max(0,oi-n),Lo(),_w(),oe.hurt(),oi<=0&&vw(t))}var yw=1800;function vw(n){Sn=!0,je&&Hf();let t=0,e=ht.pos;for(let i of Se.takeEverything())Un.spawn(i.id,i.n,e.x,e.y+.9,e.z,{d:i.d,delay:1.5,life:yw}),t++;hn(),zt("death-cause").textContent=n+(t?". Your things are where you fell.":""),zt("death").hidden=!1,document.exitPointerLock(),vn(!1)}function Nx(){for(oi=ja,un=Jh,xr=nu.respawnSaturation,Sn=!1,zt("death").hidden=!0,ht.pos.x=Vs.x,ht.pos.y=Vs.y,ht.pos.z=Vs.z,ht.vel.x=ht.vel.y=ht.vel.z=0,ht.stepSmooth=0,ht.fallPeak=null,Mn.preload(ht.pos.x,ht.pos.z,2);ht.collides(ht.pos.x,ht.pos.y,ht.pos.z)&&ht.pos.y<120;)ht.pos.y+=1;tl=nl=-1,Lo(),sl(),Zi?vn(!0):(vn(!0),No())}zt("respawn").addEventListener("click",Nx);var ox=0;function yn(n){let t=zt("toast");t.textContent=n,t.classList.add("show"),clearTimeout(ox),ox=setTimeout(()=>t.classList.remove("show"),2200)}hn();Gs();var _r=new Set,Dn={forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,down:!1},Oe=!1,je=null,bf=!1,jh=0,Fn={left:!1,right:!1},cs=n=>_r.has(qe.key(n));function Dx(n,t){ht.yaw+=n,ht.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,ht.pitch+t))}function Mw(){let n=document.documentElement;document.fullscreenElement||!n.requestFullscreen||matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches||n.requestFullscreen({navigationUI:"hide"}).then(()=>window.screen.orientation?.lock?.("landscape")).catch(()=>{})}var qs=kg({changed:()=>yr(),look:(n,t)=>{if(!Oe)return;let e=lg(n,t,nf*qe.get("sensitivity"),qe.get("invertY"));Dx(e.yaw,e.pitch)},attack:n=>{Oe&&(Fn.left=n,n||il())},use:n=>{Oe&&(Fn.right=n,Ws=n,n&&(Ja=0))},jump:()=>{let n=performance.now();ie&&n-jh<300&&Qh(!ht.flying),jh=n},fly:()=>Qh(!ht.flying),offhand:()=>{Oe&&$x()},inventory:()=>{Oe&&!je&&ou(ie?"palette":"inv")},closeScreen:()=>Vf(),layoutChanged:n=>qe.set("touchLayout",n),menu:()=>{Oe&&(vn(!1),zt("play").textContent="Resume",Do())}});qs.setEnabled(en);function yr(){let n=qs.state;Dn.forward=cs("forward"),Dn.back=cs("back"),Dn.left=cs("left"),Dn.right=cs("right"),Dn.strafe=n.strafe,Dn.ahead=n.forward,Dn.jump=cs("jump")||n.jump,bf=cs("sprint")||n.sprint||n.edge,Dn.sprint=bf&&Wf(),Dn.crouch=cs("crouch")||n.crouch,Dn.down=cs("crouch")||cs("down")||n.crouch}function zf(n){for($i+=n;$i>=1;)$i-=1,Qa++,Co.setMoonPhase(Qa)}function Qh(n){if(!ie){yn("Flying is only available in creative mode");return}ht.flying=n,ht.vel.y=0,yn("Flying: "+(n?"ON":"OFF"))}function ou(n,t="hand",e=null){je=n,n==="inv"?ds.openInventory(Ne,t,e&&za[t]?.furnace?Ro.get(e.x,e.y,e.z):null):ds.openPalette(),document.exitPointerLock(),(Zi||en)&&vn(!1)}function Hf(){je==="inv"?ds.closeInventory():je==="palette"&&ds.closePalette(),je=null,hn()}function Vf(){Hf(),Gf=performance.now()+700,vn(!0),Zi||(No(),el=performance.now())}window.addEventListener("keydown",n=>{if(Xs||n.target instanceof HTMLInputElement&&n.code!=="Escape")return;if(n.code==="Escape"&&Oe&&!Zi&&document.pointerLockElement!==Eo&&!je){vn(!1),zt("play").textContent="Resume",Do();return}if(n.code==="Escape"&&!Oe&&!je&&!Sn&&!n.repeat&&performance.now()-Ux>250){n.preventDefault(),Ox();return}if(n.code!=="Escape"&&Fx(),(n.code==="Tab"||n.code.startsWith("F")&&n.code!=="F11"&&n.code!=="F5"&&n.code!=="F12")&&n.preventDefault(),n.repeat){Oe&&(_r.add(n.code),yr());return}let t=qe.actionFor(n.code);if(je&&(t==="inventory"||n.code==="Escape")){n.preventDefault(),Vf();return}if(t==="inventory"&&Oe){ou(ie?"palette":"inv");return}if(t==="music"){kx();return}if(t==="debug"){zt("debug").hidden=!zt("debug").hidden;return}if(Oe)switch(_r.add(n.code),yr(),t){case"jump":{let e=performance.now();ie&&e-jh<300&&Qh(!ht.flying),jh=e;break}case"fly":Qh(!ht.flying);break;case"offhand":$x();break;case"sprint":Wf()||yn("Too hungry to sprint");break;case"skipTime":zf(.125),yn("Time skipped");break;case"drop":ie||Sw();break;case"renderUp":case"renderDown":{let e=Math.max(3,Math.min(12,Mn.radius+(t==="renderUp"?1:-1)));Mn.setRadius(e),$f(),yn("Render distance: "+e+" chunks");break}default:t&&t.startsWith("slot")&&wo(Number(t.slice(4))-1)}});window.addEventListener("keyup",n=>{_r.delete(n.code),yr()});window.addEventListener("blur",()=>{_r.clear(),yr(),Fn={left:!1,right:!1}});function Sw(){let n=Se.slots[Ne];n&&(Kh({id:n.id,n:1,d:n.d}),--n.n<=0&&(Se.slots[Ne]=null),hn())}window.addEventListener("wheel",n=>{!Oe||en||wo(Ne+(n.deltaY>0?1:-1))},{passive:!0});window.addEventListener("mousemove",n=>{if(!Oe||en)return;let t=nf*qe.get("sensitivity"),e=Math.abs(n.movementX)>500?0:n.movementX,i=Math.abs(n.movementY)>500?0:n.movementY;Dx(-e*t,-i*t*(qe.get("invertY")?-1:1))});window.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("mousedown",n=>{if(!en&&(Fx(),!!Oe&&(n.button===0&&(Fn.left=!0),n.button===2&&(Fn.right=!0,Ws=!0,Ja=0),n.button===1))){n.preventDefault();let t=Xf();if(!t)return;if(ie)gh.includes(t.id)&&(ru[Ne]=t.id,wo(Ne));else{let e=Se.slots.slice(0,9).findIndex(i=>i&&i.id===t.id);e>=0&&wo(e)}}});window.addEventListener("mouseup",n=>{en||(n.button===0&&(Fn.left=!1,il()),n.button===2&&(Fn.right=!1,Ws=!1))});var bw=zt("overlay"),Eo=zt("game");function No(){if(Zi)return;if(en){!je&&!Sn&&!Xs&&vn(!0);return}let n=()=>Eo.requestPointerLock?.();if(!qe.get("rawInput"))return n();try{let t=Eo.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(n)}catch{n()}}var Gf=0,Ux=0,el=0;function Fx(){if(Zi||en||!Oe||Xs||Sn||document.pointerLockElement===Eo)return;let n=performance.now();n-el<500||(el=n,No())}Eo.style.cursor="none";function vn(n){Oe=n,n||(_r.clear(),qs.reset(),yr(),Fn={left:!1,right:!1},il()),bw.classList.toggle("hidden",n||!!je||Sn)}document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===Eo){je&&Hf(),vn(!0);return}if(je){vn(!1);return}performance.now()<Gf||(Ux=performance.now(),vn(!1),zt("play").textContent="Resume",Do())});function Ox(){Oe||Sn||je||Xs||qs.editing||(oe.start(),vn(!0),Zi||(Gf=performance.now()+700,No(),el=performance.now()))}zt("play").addEventListener("click",()=>{oe.start(),en&&Mw(),Zi?vn(!0):No()});var wf=!1;async function Bx(){wf||(wf=!0,zt("quitbtn").disabled=!0,zt("quitbtn").textContent="Saving...",document.exitPointerLock(),Jx(),await Do(),Yf=!0,location.href="?title")}zt("quitbtn").addEventListener("click",Bx);function kx(){oe.setMusic(!oe.musicOn),zt("musicbtn").textContent="Music: "+(oe.musicOn?"On":"Off"),yn("Music "+(oe.musicOn?"on":"off"))}zt("musicbtn").addEventListener("click",kx);function zx(n){ie=n,n||(ht.flying=!1),zt("modebtn").textContent="Mode: "+(n?"Creative":"Survival"),Sf=-1,nl=-1,tl=-1,sl(),Lo(),hn(),Do()}zt("modebtn").addEventListener("click",()=>zx(!ie));zt("modebtn").textContent="Mode: "+(ie?"Creative":"Survival");zt("optionsbtn").addEventListener("click",()=>{Xs=!0,_r.clear(),yr(),su.open()});function ww(){let n=e=>qa(qe.key(e)),t=[[[n("forward"),n("left"),n("back"),n("right")].join(" "),"Move","Mouse","Look"],[n("jump"),"Jump / swim (double-tap to fly in creative)",n("sprint"),"Sprint (not when very hungry)"],[n("crouch"),"Crouch: slower, and you cannot walk off edges","",""],["Left click","Hold to break","Right click","Place / use / till / plant / eat"],[`${n("slot1")}\u2013${n("slot9")} / Wheel`,"Select slot",n("drop"),"Drop one item"],[n("inventory"),"Inventory & crafting",n("music"),"Toggle music"],[n("skipTime"),"Skip time of day",`${n("renderDown")} ${n("renderUp")}`,"Render distance"],[n("fly"),"Fly (creative only)",n("debug"),"Debug info"],[n("offhand"),"Place the torch in your shield slot","",""]];zt("controls").replaceChildren(...t.map(e=>{let i=document.createElement("tr");for(let s of e){let r=document.createElement("td");r.textContent=s,i.appendChild(r)}return i}))}function Hx(){oe.setVolumes(qe.get("musicVolume"),qe.get("sfxVolume")),ow();let n=en?document.body:zt("hud-right");zt("goals").parentNode!==n&&n.appendChild(zt("goals")),qs.setLayout(qe.get("touchLayout"));let t=en;en=xx(),en!==t&&(document.body.classList.toggle("touch",en),qs.setEnabled(en),Fn={left:!1,right:!1},en&&document.exitPointerLock?.()),zt("tagline").textContent=en?"Game paused":"Game paused \u2014 press Esc to resume",ww()}qe.onChange(Hx);Hx();var ax=-1;function Ew(){let n=Se.armor;if(n===ax)return;ax=n;let t=zt("armorbar");t.hidden=n<=0,t.replaceChildren(...Array.from({length:10},(e,i)=>{let s=n-i*2;return Z0(s>=2?2:s>=1?1:0)}))}var Vx=()=>!ie&&rf(un),Wf=()=>ie||Mg(un),nl=-1;function sl(){let n=zt("hunger");n.style.display=ie?"none":"flex",zt("satbar").style.display=ie?"none":"block",zt("satbar").firstElementChild.style.width=Math.min(100,xr/nu.maxSaturation*100)+"%";let t=Math.ceil(un);t!==nl&&(nl=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=t-i*2;return Y0(s>=2?2:s>=1?1:0)})),n.classList.toggle("starving",Vx()))}sl();Lo();var tu=new V;function Xf(){return ze.getWorldDirection(tu),Yd(Yt,ht.eye,tu,on.player.reach)}var Za=new Lh,eu=null,Ef=null,xf=0,Ja=0,Ws=!1,qi=0;function il(){eu=null,Ef=null,Za.reset(),Ka.visible=!1}function vr(n,t){let e=[];for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){let r=Yt.getChunk((n>>4)+s,(t>>4)+i);r&&r.dirty&&e.push(r)}return e}var To=[];function Gx(n){let t=new Set,e=[];for(let[i,,s]of n)for(let r of vr(i,s))t.has(r)||(t.add(r),e.push(r));Mn.remeshNow(e)}function Wx(n,t,e){let i=Xg(Yt,n,t,e);if(!i)return;let s=$g(n,e,ht.pos.x,ht.pos.z);qg(Yt,i),Gx([...i.logs,...i.leaves]);let r=new sn;r.position.set(n+.5,t+.5,e+.5);for(let a of[i.logs,i.leaves])for(let[l,c,h,d]of a){let u=new Pe(xo(d),Si.solid);u.position.set(l-n,c-t,h-e),r.add(u)}Te.add(r);let o=i.logs.reduce((a,l)=>Math.max(a,l[1]-t),1);To.push({group:r,tree:i,bx:n,by:t,bz:e,dir:s,axis:new V(s.dz,0,-s.dx),t:0,T:.9+.08*o}),oe.block(gr(i.logs[0]?.[3]),"break")}function Xx(n){Te.remove(n.group),To.splice(To.indexOf(n),1);let{dx:t,dz:e}=n.dir;if(on.treeFall.mode==="land"){let{placed:r,lost:o}=Jg(Yt,n.tree,n.bx,n.by,n.bz,t,e);if(Gx(r.map(a=>[a.x,a.y,a.z])),!ie)for(let a of o)for(let l of uo(a.id,!0))Un.spawn(l.id,l.n,a.x+.5,a.y+.5,a.z+.5);oe.block(gr(n.tree.logs[0]?.[3]),"place");return}let i=Kg(Yt,n.tree,n.bx,n.by,n.bz,t,e),s=0;for(let r of i){if(!ie)for(let o of x0(r.id))Un.spawn(o.id,o.n,r.x+.5,r.y+.4,r.z+.5,{delay:.5,vx:(Math.random()-.5)*2.5+t*1.2,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*2.5+e*1.2});(ns[r.id]||s++%3===0)&&bo(r.x,r.y,r.z,r.id)}oe.block(gr(n.tree.logs[0]?.[3]),"break"),oe.block(gr(n.tree.logs[0]?.[3]),"place"),n.tree.leaves.length&&oe.block(gr(n.tree.leaves[0][3]),"break")}function Tw(n){for(let t of[...To]){t.t+=n;let e=Math.min(1,t.t/t.T);t.group.quaternion.setFromAxisAngle(t.axis,Math.PI/2*Math.pow(e,2.2)),e>=1&&Xx(t)}}var lx=!1;function Aw(n){let t=wh(n.id,mr()),e=!!jt[n.id];Yt.setBlock(n.x,n.y,n.z,Kt.AIR),bo(n.x,n.y,n.z,n.id),oe.block(Fe[n.id].sound,"break"),qi=1;let i=Yt.getBlock(n.x,n.y+1,n.z);if(!e&&jt[i]&&(Yt.setBlock(n.x,n.y+1,n.z,Kt.AIR),bo(n.x,n.y+1,n.z,i),!ie))for(let r of uo(i,!0))Un.spawn(r.id,r.n,n.x+.5,n.y+1.4,n.z+.5);if(za[oo.get(n.id)]?.furnace)for(let r of Ro.remove(n.x,n.y,n.z))Un.spawn(r.id,r.n,n.x+.5,n.y+.6,n.z+.5,{d:r.d});if(Mn.remeshNow(vr(n.x,n.z)),ns[n.id]&&Wx(n.x,n.y,n.z),ie)return;for(let r of uo(n.id,t.canHarvest))Un.spawn(r.id,r.n,n.x+.5,n.y+.5,n.z+.5);if(e)return;un=Math.max(0,un-nu.miningCost);let s=Se.slots[Ne];if(s&&qn(s.id)){let r=_n(s.id);Se.damage(Ne,m0(n.id,s.id))&&(yn(`Your ${r} broke!`),oe.toolBreak()),hn()}}var qf=(n,t,e)=>Yt.canPlace(n,t,e);function Cw(n){let t=!!jt[n.id],e=t?n.x:n.x+n.nx,i=t?n.y:n.y+n.ny,s=t?n.z:n.z+n.nz;if(!qf(e,i,s))return;let r=Yt.getBlock(e,i,s);if(r!==Kt.AIR&&!de[r]&&!jt[r])return;let o=Io(Ne);!o||!Os(o.id)||jt[o.id]||ht.intersectsBlock(e,i,s)||(Yt.setBlock(e,i,s,o.id),Mn.remeshNow(vr(e,s)),oe.block(Fe[o.id].sound,"place"),qi=1,ie||(--o.n<=0&&(Se.slots[Ne]=null),hn()))}function qx(n,t,e=!1){let i=!!jt[n.id],s=i||n.ny===1?"up":n.nx===1?"east":n.nx===-1?"west":n.nz===1?"south":n.nz===-1?"north":null,r=s&&t[s];if(!r)return;let o=i?n.x:n.x+n.nx,a=i?n.y:n.y+n.ny,l=i?n.z:n.z+n.nz;if(!qf(o,a,l))return;let c=Yt.getBlock(o,a,l);if(!(c!==Kt.AIR&&!de[c]&&!jt[c])&&Ln[Yt.getBlock(o+_i[r*3],a+_i[r*3+1],l+_i[r*3+2])]&&(Yt.setBlock(o,a,l,r),Mn.remeshNow(vr(o,l)),oe.block(Fe[r].sound,"place"),qi=1,!ie)){if(e){let h=Se.equipment.shield;h&&--h.n<=0&&(Se.equipment.shield=null),ds.refreshInventory()}else{let h=Se.slots[Ne];h&&--h.n<=0&&(Se.slots[Ne]=null)}hn()}}var _f=0;function Rw(n){if(_f-=n,_f>0)return;_f=.1;let t=Sn||je==="palette"?0:Math.max(Vd(mr()),Vd(Se.equipment.shield?.id??0)),e=ht.eye;Yt.lighting.setCarried(Math.floor(e.x),Math.floor(e.y),Math.floor(e.z),t)}function $x(){let n=Se.equipment.shield;if(!n||!lr(n.id)||!Ba(n.id))return;let t=Xf();t&&qx(t,Ba(n.id),!0)}function Iw(){let n=Se.slots[Ne];if(ie||!n||!qn(n.id))return;let t=_n(n.id);Se.damage(Ne)&&(yn(`Your ${t} broke!`),oe.toolBreak()),hn()}function Yx(n){if(!n)return null;let t=n.x,e=n.z,i=jt[n.id]?n.y-1:n.y,s=Yt.getBlock(t,i,e);if(!mh[s])return null;let r=Yt.getBlock(t,i+1,e);return r!==Kt.AIR&&!jt[r]?null:{x:t,y:i,z:e,wet:Yt.nearWater(t,i,e)}}function Pw(n,t){let e=Yx(n);if(!e)return;jt[Yt.getBlock(e.x,e.y+1,e.z)]&&Yt.setBlock(e.x,e.y+1,e.z,Kt.AIR);let i=Yt.getBlock(e.x,e.y,e.z),s=mh[i];Yt.setBlock(e.x,e.y,e.z,s);let r=e.wet?Ua.get(s)?.wet:0;r?Yt.setBlock(e.x,e.y,e.z,r):t&&yn(`Dry soil: crops only grow with water within ${on.tilling.radius} blocks, and bare dry soil turns back into dirt`),Mn.remeshNow(vr(e.x,e.z)),bo(e.x,e.y,e.z,i),oe.block(gr(i),"place"),qi=1,Iw(),e.wet&&(Jn.flags.add("tilled"),Gs())}function Lw(n,t){if(!(!t.on.includes(n.id)||n.ny!==1)&&qf(n.x,n.y+1,n.z)&&Yt.getBlock(n.x,n.y+1,n.z)===Kt.AIR){if(Yt.setBlock(n.x,n.y+1,n.z,t.block),Mn.remeshNow(vr(n.x,n.z)),oe.block(gr(t.block),"place"),qi=1,!ie){let e=Se.slots[Ne];e&&--e.n<=0&&(Se.slots[Ne]=null),hn()}Jn.flags.add("planted"),Gs()}}function Nw(n,t){let e=mr(),i=u0(e),s=t&&oo.has(t.id)&&Ws;if(!Fn.right||!i||ie||s){vi=0,zt("eatbar").hidden=!0;return}if(un>=Jh){Ws&&(yn("You're not hungry"),Ws=!1),vi=0,zt("eatbar").hidden=!0;return}let r=Math.floor(vi/.3);if(vi+=n,Math.floor(vi/.3)>r&&(oe.eat(),pw(e)),zt("eatbar").hidden=!1,zt("eatbar").firstElementChild.style.width=Math.min(100,vi/on.eating.seconds*100)+"%",vi>=on.eating.seconds){vi=0;let o=Se.slots[Ne];o&&--o.n<=0&&(Se.slots[Ne]=null);let a={food:un,saturation:xr};Eg(a,i,d0(e)),{food:un,saturation:xr}=a,Jn.flags.add("ate"),yn(`Yum! +${i/2} hunger`),hn(),Gs()}}function Dw(n){return Se.add(n.id,n.n,n.d),Jn.collected.add(n.id),oe.pickup(),hn(),Gs(),!0}function Uw(n){let t=Xf();if(t){zs.visible=!0;let s=jt[t.id]?Ns[t.id]:1,r=jt[t.id]?so[t.id]*2:1;zs.scale.set(r,s,r);let o=jt[t.id]===3&&(ki[t.id*2]||ki[t.id*2+1]);zs.position.set(t.x+.5-(o?ki[t.id*2]*.25:0),t.y+s/2+(o?.2:0),t.z+.5-(o?ki[t.id*2+1]*.25:0))}else zs.visible=!1;let i=qn(mr())?.type==="hoe"?Yx(t):null;if(zs.material.color.setHex(i?i.wet?3407701:16751150:0),Ja-=n,qi=Math.max(0,qi-n*4.5),Fn.left&&t&&t.y>0){let s=t.x+","+t.y+","+t.z;if(s!==Ef){Ef=s;let o=Fe[t.id];!ie&&!wh(t.id,mr()).canHarvest?yn(`You need a ${_0(o.need)} ${o.tool} (or better) to harvest this`):!ie&&!lx&&o.tool==="shovel"&&qn(mr())?.type!=="shovel"&&(lx=!0,yn("Tip: a shovel digs dirt, grass and sand much faster (craft one at a table)"))}eu=t;let r=ie?.25:wh(t.id,mr()).time;xf-=n,xf<=0&&(xf=.24,oe.block(Fe[t.id].sound,"tick"),qi=Math.max(qi,.8)),Za.tick(n,s,r)?(Aw(t),il()):Za.progress>0&&(Ka.visible=!0,Ka.position.copy(zs.position),Nf.offset.x=Za.stage/10)}else Za.idle(n),eu&&il();if(Nw(n,t),Fn.right&&t&&Ja<=0&&!vi){Ja=.22;let s=Ws;Ws=!1;let r=Io(Ne),o=r&&qn(r.id);s&&oo.has(t.id)?(Fn.right=!1,ou("inv",oo.get(t.id),t)):o?.type==="hoe"?Pw(t,s):r&&Bd(r.id)?Lw(t,Bd(r.id)):r&&Ba(r.id)?qx(t,Ba(r.id)):Cw(t)}}var cx=0;function Fw(n){n-cx<250||(cx=n,zt("mm-real").textContent=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}),zt("mm-game").textContent=Rg($i),zt("mm-part").textContent=`${Ig($i)} \xB7 Day ${Qa+1}`,zt("mm-x").textContent=Math.floor(ht.pos.x),zt("mm-y").textContent=Math.floor(ht.pos.y),zt("mm-z").textContent=Math.floor(ht.pos.z))}var yf=new Map,Ow=n=>(yf.has(n)||yf.set(n,(jt[n]?K0(Yi,n):dr(Yi,n,44)).toDataURL()),yf.get(n)),hx=new V,$h=null;function Bw(){let n=zt("lookat");if(!Oe||je||Sn){n.hidden=!0,$h=null;return}ze.getWorldDirection(hx);let t=Yd(Yt,ht.eye,hx,on.player.lookAtReach);if(!t){n.hidden=!0,$h=null;return}if(t.id!==$h){$h=t.id;let e=Gd[t.id];zt("lookat-icon").src=Ow(t.id),zt("lookat-name").textContent=e?e.label:Fe[t.id].name;let i=zt("lookat-sub"),s=zt("lookat-pips");if(i.classList.remove("ready"),s.replaceChildren(),s.classList.remove("ripe"),e){for(let r=1;r<=3;r++){let o=document.createElement("i");r<=e.stage&&(o.className="on"),s.appendChild(o)}s.classList.toggle("ripe",!!e.ripe),e.crop?i.textContent=e.ripe?`${e.name} \u2014 ready to harvest!`:`${e.name} (stage ${e.stage}/3) \u2014 not ready yet`:i.textContent=`${e.name} (stage ${e.stage}/3)${e.ripe?" \u2014 fully grown":" \u2014 still growing"}`,i.classList.toggle("ready",!!e.ripe)}else{let r=Fe[t.id];i.textContent=r.tool?`Best tool: ${r.tool[0].toUpperCase()}${r.tool.slice(1)}`:""}}n.hidden=!1}function $f(){let n=Mn.radius*16-4;Te.fog.near=n*.55,Te.fog.far=n}$f();var kw=new Gt(13212276),zw=new Gt(1,1,1),ux=!1,vf=1,dx=0;function Hw(){let n=Math.min(.25,Math.max(0,us-dx));dx=us;let t=Yt.lighting.levelAt(Math.floor(ze.position.x),Math.floor(ze.position.y),Math.floor(ze.position.z));return vf+=(r0(t)-vf)*Math.min(1,n*4),vf}function Vw(){let n=Co.update($i,ze.position,us),t=Hw();Rf.value.copy(n.tint),Si.sprite.color.copy(n.tint);let e=Ax.copy(n.tint).lerp(zw,.35).multiplyScalar(.25+.75*t);bx.color.copy(e),wx.color.copy(e),Lf.color.copy(kw).multiply(e),Mi.material.color.copy(n.tint),Te.background=Te.background||new Gt,Te.background.copy(n.sky).multiplyScalar(t),Te.fog.color.copy(Te.background);let i=ht.headInWater;i!==ux&&(ux=i,zt("underwater").style.opacity=i?"1":"0"),i?(Te.fog.color.setRGB(.1*n.tint.r*t,.25*n.tint.g*t,.6*n.tint.b*t),Te.background.copy(Te.fog.color),Te.fog.near=1,Te.fog.far=22):$f()}var Yf=!1;function Zx(){return JSON.stringify({seed:Bf,edits:Yt.serializeEdits(),legacyCaves:Yt.serializeLegacy(),player:Sn?{x:Vs.x,y:Vs.y,z:Vs.z,yaw:0,pitch:0,flying:!1}:{x:ht.pos.x,y:ht.pos.y,z:ht.pos.z,yaw:ht.yaw,pitch:ht.pitch,flying:ht.flying},mode:ie?"creative":"survival",inventory:Se.serialize(),equipment:Se.serializeEquipment(),creativeHotbar:ru,food:un,saturation:xr,health:Sn?ja:oi,spawnPoint:Vs,day:Qa,drops:Un.serialize(),furnaces:Ro.serialize(),progress:{collected:[...Jn.collected],crafted:[...Jn.crafted],flags:[...Jn.flags]},slot:Ne,time:$i,radius:Mn.radius})}function Do(){if(Yf)return Promise.resolve();let n=Promise.resolve(Uf.save(Of,Zx())).catch(()=>{});return Yt.editsDirty=!1,n}function Jx(){for(let n of[...To])Xx(n);Rx.flush()}setInterval(()=>{Oe&&Do()},1e4);function Zf(){Yf||wf||(Jx(),Uf.saveOnExit(Of,Zx()))}window.addEventListener("beforeunload",Zf);window.addEventListener("pagehide",Zf);document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Zf()});var fx=performance.now(),px=60,Yh=0,Mf=0,Zh=75,Ya=0,vo=0,mx=0,gx=0,Xi=0;function Kx(n){requestAnimationFrame(Kx);let t=Math.max(0,Math.min(.1,(n-fx)/1e3));if(fx=n,us+=t,Yh+=t,Mf++,Yh>.5&&(px=Math.round(Mf/Yh),Yh=0,Mf=0),qs.sync({show:Oe&&!je&&!Sn&&!Xs,screen:je,creative:ie,flying:ht.flying}),Oe&&(ht.speedMul=Vx()?nu.starvingSpeed:1,Dn.sprint=bf&&Wf(),ht.update(t,Dn),Uw(t),zf(t/on.time.dayLengthSeconds),!ie)){let a=Math.hypot(ht.vel.x,ht.vel.z)>1,l={food:un,saturation:xr,health:oi,regenTimer:mx,starveTimer:gx},c=Tg(l,t,{moving:a,sprinting:Dn.sprint&&a,mining:Fn.left&&!!eu,maxHealth:ja});({food:un,saturation:xr,health:oi,regenTimer:mx,starveTimer:gx}=l),c.healed&&Lo(),c.starved&&kf(c.starved,"You starved to death"),sl()}Pf.value=us%1e3,Cx.update(t),Rx.update(t),Ix.update(),(Oe||je)&&Ro.update(t),ds.tickFurnace();for(let[a,l]of Mo)l.position.y=a.y+.5;Tw(t),vo+=t,vo>=1&&(sf(Yt,Math.floor(ht.pos.x/16),Math.floor(ht.pos.z/16),on.plants.growthChunkRadius,vo*mf),xg(Yt,Math.floor(ht.pos.x/16),Math.floor(ht.pos.z/16),on.spread.chunkRadius,vo*mf),_g(Yt,Math.floor(ht.pos.x/16),Math.floor(ht.pos.z/16),on.plants.growthChunkRadius,vo*mf),vo=0),Un.update(t,ht.pos,a=>!ie&&!Sn&&Se.canFit(a.id,a.n),Dw),Rw(t),Sx(us)&&(So.needsUpdate=!0),Tx();let e=ht.eye;pr.v+=(-140*pr.y-15*pr.v)*t,pr.y+=pr.v*t,ze.position.set(e.x,e.y+pr.y,e.z),ze.rotation.set(ht.pitch,ht.yaw,0);let i=Math.hypot(ht.vel.x,ht.vel.z);Ya+=i*t*(ht.onGround?1.9:.4);let s=qe.get("fov")+(Dn.sprint&&i>5?8:0)+(ht.flying&&i>12?8:0);Zh+=(s-Zh)*Math.min(1,8*t),Math.abs(ze.fov-Zh)>.01&&(ze.fov=Zh,ze.updateProjectionMatrix());let r=Math.sin(qi*Math.PI);Xi+=((vi>0?1:0)-Xi)*Math.min(1,10*t);let o=Math.sin(us*26)*.015*Xi;if(Ke.pivot?(ff.setFromEuler(Qg.set(-r*.62,r*.12,0)),ke.position.set(Ke.pos[0]+Math.sin(Ya)*.01,Ke.pos[1]+Math.abs(Math.cos(Ya))*.012,Ke.pos[2]).sub(tx.fromArray(Ke.pivot)).applyQuaternion(ff).add(tx),ke.position.x-=r*.1,ke.position.y+=r*.1,ke.position.z-=r*.16,ke.quaternion.setFromEuler(Qg.set(Ke.rot[0],Ke.rot[1],Ke.rot[2])),Ke.flip&&ke.quaternion.multiply(uw),ke.quaternion.premultiply(ff)):(ke.position.set(Ke.pos[0]+Math.sin(Ya)*.01-r*.1-Xi*.22,Ke.pos[1]+Math.abs(Math.cos(Ya))*.012-r*.14+Xi*.3+o,Ke.pos[2]-r*.08+Xi*.2),ke.rotation.set(Ke.rot[0]-r*.9+Xi*.5,Ke.rot[1]+r*.25,Ke.rot[2])),ke.scale.setScalar(Ke.scale*(1-.35*Xi*Math.min(1,vi/on.eating.seconds))),Xi>.05&&!Ke.pivot&&(ke.rotation.z+=Math.sin(us*26)*.07*Xi),Mn.update(ht.pos.x,ht.pos.z,Oe?5:10),Bw(),Ew(),xw.draw(ht.pos.x,ht.pos.z,ht.yaw,n),Fw(n),mw(t),Vw(),Ao.render(Te,ze),!zt("debug").hidden){let a=Mn.collectStats();zt("debug").textContent=`VoxelCraft  ${px} fps  [${ie?"creative":"survival"}]
XYZ  ${ht.pos.x.toFixed(2)} / ${ht.pos.y.toFixed(2)} / ${ht.pos.z.toFixed(2)}
Chunk ${Math.floor(ht.pos.x/16)}, ${Math.floor(ht.pos.z/16)}   seed ${Bf}
Chunks ${a.chunks} (meshed ${a.meshed})  quads ${a.quads}  drops ${Un.items.length}
Time ${(($i*24+6)%24).toFixed(1)}h  ${ht.flying?"FLYING":ht.onGround?"ground":ht.inWater?"swimming":"air"}`}}requestAnimationFrame(Kx);window.__vc={world:Yt,player:ht,audio:oe,inventory:Se,drops:Un,ui:ds,progress:Jn,chunkRenderer:Mn,camera:ze,scene:Te,setPlaying:vn,selectSlot:wo,setMode:zx,get elapsed(){return us},POSES:hs,held:ke,furnaces:Ro,attachSim:Ix,worldId:Of,quitToTitle:Bx,resumeGame:Ox,openScreen:ou,closeScreen:Vf,tossStack:Kh,settings:qe,options:su,growPlants:sf,get food(){return un},set food(n){un=n,nl=-1,sl()},get creative(){return ie},REG:Nt,waterSim:Cx,damage:kf,respawn:Nx,advanceTime:zf,fallingTrees:To,startTreeFall:Wx,sky:Co,get health(){return oi},set health(n){oi=n,tl=-1,Lo()},get dead(){return Sn},get playing(){return Oe},get screen(){return je},get dayTime(){return $i},set dayTime(n){$i=n},toggleDebug:()=>zt("debug").hidden=!zt("debug").hidden};Ff.done();Zi?vn(!0):(oe.start(),vn(!0),No(),el=performance.now());
