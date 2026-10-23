globalThis.__VOXELCRAFT_CONTENT__={"blocks":{"_comment":"Every block in the game. See data/README.md for the fields. ids must be unique (1-255) and never change once worlds exist.","blocks":[{"id":1,"key":"grass","name":"Grass Block","tiles":{"top":"grass_top","bottom":"dirt","side":"grass_side"},"hardness":1,"tool":"shovel","sound":"grass","creative":true,"tillsInto":"farmland","spreadsOnto":"dirt","loot":"grass"},{"id":2,"key":"dirt","name":"Dirt","tiles":{"top":"dirt","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","creative":true,"tillsInto":"farmland"},{"id":3,"key":"stone","name":"Stone","tiles":{"top":"stone","bottom":"stone","side":"stone"},"hardness":3,"tool":"pickaxe","need":1,"sound":"stone","creative":true,"loot":"stone"},{"id":4,"key":"sand","name":"Sand","tiles":{"top":"sand","bottom":"sand","side":"sand"},"hardness":0.9,"tool":"shovel","sound":"sand","creative":true,"gravity":true},{"id":5,"key":"log","name":"Oak Log","tiles":{"top":"log_top","bottom":"log_top","side":"log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":6,"key":"leaves","name":"Leaves","tiles":{"top":"leaves","bottom":"leaves","side":"leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"leaves","shatterLoot":"leaves_shatter","creative":true,"lightFilter":1},{"id":7,"key":"planks","name":"Oak Planks","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","creative":true,"fuel":15},{"id":8,"key":"water","name":"Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":7},"lightFilter":2},{"id":9,"key":"cobble","name":"Cobblestone","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":10,"key":"glass","name":"Glass","tiles":{"top":"glass","bottom":"glass","side":"glass"},"hardness":0.35,"sound":"glass","opaque":false,"loot":"glass","creative":true},{"id":11,"key":"brick","name":"Bricks","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":12,"key":"snow","name":"Snowy Grass","tiles":{"top":"snow_top","bottom":"dirt","side":"snow_side"},"hardness":0.7,"tool":"shovel","sound":"snow","loot":"snow","creative":true},{"id":13,"key":"coal_ore","name":"Coal Ore","tiles":{"top":"coal_ore","bottom":"coal_ore","side":"coal_ore"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","loot":"coal_ore","creative":true,"glow":0.22},{"id":14,"key":"iron_ore","name":"Iron Ore","tiles":{"top":"iron_ore","bottom":"iron_ore","side":"iron_ore"},"hardness":5,"tool":"pickaxe","need":2,"sound":"stone","creative":true,"glow":0.22},{"id":15,"key":"crafting","name":"Crafting Table","tiles":{"top":"crafting_top","bottom":"planks","side":"crafting_side"},"hardness":1.6,"tool":"axe","sound":"wood","opens":"table","creative":true},{"id":16,"key":"furnace","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","creative":true},{"id":17,"key":"farmland","name":"Dry Farmland","tiles":{"top":"farmland_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","creative":true,"hydration":{"wet":"farmland_wet","decay":{"into":"dirt","chancePerSecond":0.012}}},{"id":18,"key":"grass_s","name":"Short Grass","tiles":{"top":"grass_s","bottom":"grass_s","side":"grass_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.35,"growth":{"next":"grass_m","chancePerSecond":0.008333333333333333,"soil":"grass"},"stage":{"label":"Grass","step":1,"name":"Short"}},"loot":"grass_s"},{"id":19,"key":"grass_m","name":"Tall Grass","tiles":{"top":"grass_m","bottom":"grass_m","side":"grass_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.6,"growth":{"next":"grass_l","chancePerSecond":0.0058823529411764705,"soil":"grass"},"stage":{"label":"Grass","step":2,"name":"Tall"}},"loot":"grass_m"},{"id":20,"key":"grass_l","name":"Lush Grass","tiles":{"top":"grass_l","bottom":"grass_l","side":"grass_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.9,"stage":{"label":"Grass","step":3,"name":"Lush","ripe":true},"spreads":{"block":"grass_s","chancePerSecond":0.002,"onto":"grass","range":2}},"loot":"grass_l"},{"id":21,"key":"wheat_s","name":"Wheat Sprout","tiles":{"top":"wheat_s","bottom":"wheat_s","side":"wheat_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.3,"growth":{"next":"wheat_m","chancePerSecond":0.025,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":1,"name":"Sprout","crop":true}},"loot":"wheat_s"},{"id":22,"key":"wheat_m","name":"Young Wheat","tiles":{"top":"wheat_m","bottom":"wheat_m","side":"wheat_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.6,"growth":{"next":"wheat_l","chancePerSecond":0.01818181818181818,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":2,"name":"Growing","crop":true}},"loot":"wheat_m"},{"id":23,"key":"wheat_l","name":"Ripe Wheat","tiles":{"top":"wheat_l","bottom":"wheat_l","side":"wheat_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.9,"stage":{"label":"Wheat","step":3,"name":"Ripe","ripe":true,"crop":true}},"loot":"wheat_l"},{"id":24,"key":"flow1","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":1},"lightFilter":2},{"id":25,"key":"flow2","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":2},"lightFilter":2},{"id":26,"key":"flow3","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":3},"lightFilter":2},{"id":27,"key":"flow4","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":4},"lightFilter":2},{"id":28,"key":"flow5","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":5},"lightFilter":2},{"id":29,"key":"flow6","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":6},"lightFilter":2},{"id":30,"key":"farmland_wet","name":"Moist Farmland","tiles":{"top":"farmland_wet_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","hydration":{"dry":"farmland"}},{"id":31,"key":"torch_floor","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75},"support":[0,-1,0]},{"id":32,"key":"torch_e","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[1,0]},"support":[-1,0,0]},{"id":33,"key":"torch_w","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[-1,0]},"support":[1,0,0]},{"id":34,"key":"torch_s","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,1]},"support":[0,0,-1]},{"id":35,"key":"torch_n","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,-1]},"support":[0,0,1]},{"id":36,"key":"furnace_lit","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side_lit"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","light":13},{"id":37,"key":"birch_log","name":"Birch Log","tiles":{"top":"birch_log_top","bottom":"birch_log_top","side":"birch_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":38,"key":"spruce_log","name":"Spruce Log","tiles":{"top":"spruce_log_top","bottom":"spruce_log_top","side":"spruce_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":39,"key":"birch_leaves","name":"Birch Leaves","tiles":{"top":"birch_leaves","bottom":"birch_leaves","side":"birch_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"birch_leaves","shatterLoot":"birch_leaves_shatter","creative":true,"lightFilter":1},{"id":40,"key":"spruce_leaves","name":"Spruce Leaves","tiles":{"top":"spruce_leaves","bottom":"spruce_leaves","side":"spruce_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"spruce_leaves","shatterLoot":"spruce_leaves_shatter","creative":true,"lightFilter":1},{"id":41,"key":"apple_leaves","name":"Apple Tree Leaves","tiles":{"top":"apple_leaves","bottom":"apple_leaves","side":"apple_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"apple_leaves","shatterLoot":"apple_leaves_shatter","creative":true,"lightFilter":1},{"id":42,"key":"young_oak","name":"Oak Sapling","tiles":{"top":"young_oak","bottom":"young_oak","side":"young_oak"},"hardness":0.04,"sound":"grass","loot":"young_oak","plant":{"kind":"cross","height":0.7,"grows":{"trees":["oak","oak","oak","tall_oak","bush"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Oak Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":43,"key":"young_birch","name":"Birch Sapling","tiles":{"top":"young_birch","bottom":"young_birch","side":"young_birch"},"hardness":0.04,"sound":"grass","loot":"young_birch","plant":{"kind":"cross","height":0.7,"grows":{"trees":["birch"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Birch Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":44,"key":"young_spruce","name":"Spruce Sapling","tiles":{"top":"young_spruce","bottom":"young_spruce","side":"young_spruce"},"hardness":0.04,"sound":"grass","loot":"young_spruce","plant":{"kind":"cross","height":0.7,"grows":{"trees":["spruce"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Spruce Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":45,"key":"young_apple","name":"Apple Sapling","tiles":{"top":"young_apple","bottom":"young_apple","side":"young_apple"},"hardness":0.04,"sound":"grass","loot":"young_apple","plant":{"kind":"cross","height":0.7,"grows":{"trees":["apple"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Apple Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}}]},"items":{"_comment":"Non-block items (blocks are items automatically). Tools reference a tier below. ids must not clash with any block id.","tiers":{"wood":{"level":1,"speed":2,"durability":30,"head":"wood"},"stone":{"level":2,"speed":3.5,"durability":66,"head":"stone"},"iron":{"level":3,"speed":5.5,"durability":125,"head":"iron"}},"items":[{"id":100,"key":"stick","name":"Stick","fuel":5},{"id":101,"key":"coal","name":"Coal","fuel":80},{"id":102,"key":"iron_ingot","name":"Iron Ingot"},{"id":103,"key":"wheat_seeds","name":"Wheat Seeds","plants":{"block":"wheat_s","on":["farmland","farmland_wet"]}},{"id":104,"key":"wheat","name":"Wheat"},{"id":105,"key":"bread","name":"Bread","food":6,"saturation":7.2},{"id":106,"key":"charcoal","name":"Charcoal","fuel":80},{"id":107,"key":"apple","name":"Apple","food":4,"saturation":2.4},{"id":108,"key":"raw_iron","name":"Raw Iron"},{"id":110,"key":"wood_pickaxe","name":"Wooden Pickaxe","tool":{"type":"pickaxe","tier":"wood"}},{"id":111,"key":"wood_axe","name":"Wooden Axe","tool":{"type":"axe","tier":"wood"}},{"id":112,"key":"wood_shovel","name":"Wooden Shovel","tool":{"type":"shovel","tier":"wood"}},{"id":113,"key":"stone_pickaxe","name":"Stone Pickaxe","tool":{"type":"pickaxe","tier":"stone"}},{"id":114,"key":"stone_axe","name":"Stone Axe","tool":{"type":"axe","tier":"stone"}},{"id":115,"key":"stone_shovel","name":"Stone Shovel","tool":{"type":"shovel","tier":"stone"}},{"id":116,"key":"iron_pickaxe","name":"Iron Pickaxe","tool":{"type":"pickaxe","tier":"iron"}},{"id":117,"key":"iron_axe","name":"Iron Axe","tool":{"type":"axe","tier":"iron"}},{"id":118,"key":"iron_shovel","name":"Iron Shovel","tool":{"type":"shovel","tier":"iron"}},{"id":119,"key":"wood_hoe","name":"Wooden Hoe","tool":{"type":"hoe","tier":"wood"}},{"id":120,"key":"stone_hoe","name":"Stone Hoe","tool":{"type":"hoe","tier":"stone"}},{"id":121,"key":"iron_hoe","name":"Iron Hoe","tool":{"type":"hoe","tier":"iron"}},{"id":122,"key":"torch","name":"Torch","creative":true,"places":{"up":"torch_floor","east":"torch_e","west":"torch_w","south":"torch_s","north":"torch_n"},"offhand":true},{"id":123,"key":"iron_helmet","name":"Iron Helmet","stack":1,"equip":{"slot":"helmet","armor":2}},{"id":124,"key":"iron_chestplate","name":"Iron Chestplate","stack":1,"equip":{"slot":"chestplate","armor":6}},{"id":125,"key":"iron_leggings","name":"Iron Leggings","stack":1,"equip":{"slot":"leggings","armor":5}},{"id":126,"key":"iron_boots","name":"Iron Boots","stack":1,"equip":{"slot":"boots","armor":2}},{"id":127,"key":"iron_shield","name":"Iron Shield","stack":1,"equip":{"slot":"shield","armor":2}},{"id":128,"key":"backpack","name":"Backpack","stack":1,"equip":{"slot":"backpack","slots":9}},{"id":129,"key":"quiver","name":"Quiver","stack":1,"equip":{"slot":"quiver"}},{"id":130,"key":"oak_sapling","name":"Oak Sapling","plants":{"block":"young_oak","on":["grass","dirt"]}},{"id":131,"key":"birch_sapling","name":"Birch Sapling","plants":{"block":"young_birch","on":["grass","dirt"]}},{"id":132,"key":"spruce_sapling","name":"Spruce Sapling","plants":{"block":"young_spruce","on":["grass","dirt"]}},{"id":133,"key":"apple_sapling","name":"Apple Sapling","plants":{"block":"young_apple","on":["grass","dirt"]}}]},"loot":{"_comment":"Loot tables. A block with no table (see \"loot\" in blocks.json) drops itself. entry: { item, chance (0-1, default 1), count (number or [min,max], default 1) }. An empty list drops nothing.","tables":{"grass":[{"item":"dirt"}],"snow":[{"item":"dirt"}],"farmland":[{"item":"dirt"}],"stone":[{"item":"cobble"}],"coal_ore":[{"item":"coal"}],"glass":[],"leaves":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"leaves_shatter":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"grass_s":[{"item":"wheat_seeds","chance":0.1}],"grass_m":[{"item":"wheat_seeds","chance":0.16}],"grass_l":[{"item":"wheat_seeds","chance":0.28}],"wheat_s":[{"item":"wheat_seeds"}],"wheat_m":[{"item":"wheat_seeds"}],"wheat_l":[{"item":"wheat"},{"item":"wheat_seeds"},{"item":"wheat_seeds","chance":0.5}],"iron_ore":[{"item":"raw_iron"}],"torch_floor":[{"item":"torch"}],"furnace_lit":[{"item":"furnace"}],"apple_leaves":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"apple_leaves_shatter":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"birch_leaves":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"birch_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"spruce_leaves":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"spruce_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"young_oak":[{"item":"oak_sapling"}],"young_birch":[{"item":"birch_sapling"}],"young_spruce":[{"item":"spruce_sapling"}],"young_apple":[{"item":"apple_sapling"}]}},"recipes":{"_comment":"Crafting recipes. in: [item, count] or [\"@group\", count] for any item of a group. at: the station (omit for by-hand). smelting: what a furnace turns one item into (seconds to cook one). Fuel burn times are \"fuel\" (seconds) on items and blocks.","groups":{"coals":["charcoal","coal"],"logs":["log","birch_log","spruce_log"]},"stations":{"table":{"label":"Crafting Table"}},"windows":{"hand":{"title":"Crafting","stations":[null]},"table":{"title":"Crafting Table","stations":[null,"table"]},"furnace":{"title":"Furnace","furnace":true}},"recipes":[{"out":"planks","n":4,"in":[["@logs",1]]},{"out":"stick","n":4,"in":[["planks",2]]},{"out":"crafting","n":1,"in":[["planks",4]]},{"out":"bread","n":1,"in":[["wheat",3]]},{"out":"wood_pickaxe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_axe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_shovel","n":1,"in":[["planks",1],["stick",2]],"at":"table"},{"out":"stone_pickaxe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_axe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_shovel","n":1,"in":[["cobble",1],["stick",2]],"at":"table"},{"out":"iron_pickaxe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_axe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_shovel","n":1,"in":[["iron_ingot",1],["stick",2]],"at":"table"},{"out":"wood_hoe","n":1,"in":[["planks",2],["stick",2]],"at":"table"},{"out":"stone_hoe","n":1,"in":[["cobble",2],["stick",2]],"at":"table"},{"out":"iron_hoe","n":1,"in":[["iron_ingot",2],["stick",2]],"at":"table"},{"out":"furnace","n":1,"in":[["cobble",8]],"at":"table"},{"out":"brick","n":4,"in":[["cobble",4]],"at":"table"},{"out":"torch","n":4,"in":[["@coals",1],["stick",1]]},{"out":"iron_helmet","n":1,"in":[["iron_ingot",5]],"at":"table"},{"out":"iron_chestplate","n":1,"in":[["iron_ingot",8]],"at":"table"},{"out":"iron_leggings","n":1,"in":[["iron_ingot",7]],"at":"table"},{"out":"iron_boots","n":1,"in":[["iron_ingot",4]],"at":"table"},{"out":"iron_shield","n":1,"in":[["iron_ingot",1],["planks",6]],"at":"table"},{"out":"backpack","n":1,"in":[["wheat",6],["stick",2]],"at":"table"},{"out":"quiver","n":1,"in":[["planks",3],["stick",3]],"at":"table"}],"smelting":[{"in":"raw_iron","out":"iron_ingot","seconds":10},{"in":"sand","out":"glass","seconds":8},{"in":"cobble","out":"stone","seconds":8},{"in":"log","out":"charcoal","seconds":10},{"in":"birch_log","out":"charcoal","seconds":10},{"in":"spruce_log","out":"charcoal","seconds":10}]},"goals":{"_comment":"The goals shown in the HUD, in order. Conditions: { collected: item } | { collectedAny: [items] } | { crafted: item } | { craftedAny: [items] } | { flag: \"tilled\" | \"planted\" | \"ate\" }.","goals":[{"text":"Punch a tree to collect Wood","collectedAny":["log","birch_log","spruce_log"]},{"text":"Craft Planks","crafted":"planks"},{"text":"Craft a Crafting Table","crafted":"crafting"},{"text":"Craft a Wooden Pickaxe","crafted":"wood_pickaxe"},{"text":"Mine Cobblestone","collected":"cobble"},{"text":"Craft a Stone Pickaxe","crafted":"stone_pickaxe"},{"text":"Craft a Hoe","craftedAny":["wood_hoe","stone_hoe","iron_hoe"]},{"text":"Find Wheat Seeds in the tall grass","collected":"wheat_seeds"},{"text":"Till soil within 4 blocks of water","flag":"tilled"},{"text":"Plant Wheat Seeds on farmland","flag":"planted"},{"text":"Harvest ripe Wheat","collected":"wheat"},{"text":"Bake Bread and eat it","flag":"ate"},{"text":"Find Coal","collected":"coal"},{"text":"Craft a Furnace","crafted":"furnace"},{"text":"Mine Iron Ore","collected":"raw_iron"},{"text":"Smelt an Iron Ingot","crafted":"iron_ingot"},{"text":"Craft an Iron Pickaxe","crafted":"iron_pickaxe"},{"text":"Forge a piece of Iron Armor","craftedAny":["iron_helmet","iron_chestplate","iron_leggings","iron_boots","iron_shield"]},{"text":"Wear a piece of equipment","flag":"equipped"}]},"textures":{"_comment":"Textures. tiles: block faces, in atlas order. Each tile is { type, ...params }; types: noise, capped, bark, rings, planks, cells, waves, bricks, ore, stripes, blades, stalks, pixelart (palette + rows, \".\" = transparent), image (a PNG next to this file), layers (stack of the others), ref (reuse another tile). sprites: item icons; tools are drawn automatically from their type and tier.","tiles":{"grass_top":{"type":"noise","base":[96,160,54],"noise":[{"cells":4,"amp":36}],"jitter":22,"channels":[0.6,1,0.4],"specks":{"dark":{"chance":0.07,"amount":-26},"light":{"chance":0.07,"amount":22}}},"grass_side":{"type":"capped","cap":"grass_top","body":"dirt","depth":{"min":3,"bonus":[{"chance":0.5,"amount":1},{"chance":0.25,"amount":2}]}},"dirt":{"type":"noise","base":[136,98,68],"noise":[{"cells":4,"amp":34}],"jitter":16,"channels":[1,0.8,0.6],"specks":{"dark":{"chance":0.06,"amount":-34},"light":{"chance":0.05,"amount":26}}},"stone":{"type":"noise","base":[128,128,130],"noise":[{"cells":4,"amp":38},{"cells":8,"amp":22}],"jitter":10,"specks":{"dark":{"chance":0.04,"amount":-24}}},"sand":{"type":"noise","base":[222,208,160],"noise":[{"cells":4,"amp":20}],"jitter":12,"channels":[1,1,1.1],"specks":{"dark":{"chance":0.05,"amount":-16}}},"log_side":{"type":"bark","base":[104,82,50],"channels":[1,0.8,0.6],"columnVariance":22,"jitter":12,"grooveEvery":4,"grooveDarken":22,"speckChance":0.04,"speckDarken":20},"log_top":{"type":"rings","bark":[96,74,44],"barkWidth":1.6,"light":[170,136,84],"dark":[140,108,62],"ringScale":0.9,"jitter":12},"leaves":{"type":"noise","base":[52,122,38],"noise":[{"cells":4,"amp":50}],"jitter":24,"channels":[0.5,1,0.4],"holes":0.16},"planks":{"type":"planks","base":[178,142,88],"channels":[1,0.9,0.7],"boardHeight":4,"boardVariance":22,"jitter":10,"gapDarken":38,"seamDarken":30,"grainChance":0.07,"grainDarken":14},"cobble":{"type":"cells","base":[124,124,126],"points":9,"spread":44,"jitter":12,"creviceWidth":1.25,"creviceValue":-52},"water":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":0},"glass":{"type":"pixelart","palette":{"#":[210,238,245],"w":[255,255,255]},"rows":["################","#..............#","#..w...........#","#..ww.......w..#","#...ww.....w...#","#....ww........#","#.....w........#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","################"]},"brick":{"type":"bricks","brick":[150,64,50],"mortar":[186,180,168],"brickWidth":8,"rowHeight":4,"variance":22},"snow_top":{"type":"noise","base":[244,248,255],"noise":[],"jitter":14,"channels":[0.4,0.4,0]},"snow_side":{"type":"capped","cap":"snow_top","body":"dirt","depth":{"min":4,"bonus":[{"chance":0.5,"amount":1},{"chance":0.3,"amount":2}]}},"coal_ore":{"type":"ore","base":"stone","color":[26,26,30],"light":[112,112,126],"clusters":7},"iron_ore":{"type":"ore","base":"stone","color":[206,150,120],"light":[236,196,168],"clusters":7},"crafting_top":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[96,66,38]},"rows":["################","################","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","################","################"]}]},"crafting_side":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[84,58,32],"s":[200,200,205],"h":[120,120,128],"w":[150,108,60]},"rows":["################","################","################","################","++++++++++++++++","................",".........hhhh...","...sss...hhhh...","...s.s....w.....","...s.s....w.....","...sss....w.....","....s.....w.....","....s.....w.....","................","................","................"]}]},"furnace_top":{"type":"noise","base":[104,104,108],"noise":[],"jitter":14,"edge":{"width":1,"amount":-34}},"furnace_side":{"type":"layers","layers":[{"type":"ref","tile":"cobble"},{"type":"pixelart","palette":{"d":[26,24,26],"r":[140,52,20],"G":[226,120,30],"v":[34,32,34]},"rows":["................","................","................",".....vvvvvv.....",".....vvvvvv.....","................","................","....dddddddd....","....dddddddd....","....dddddddd....","....dddddddd....","....rrrrrrrr....","....GGGGGGGG....","....GGGGGGGG....","................","................"]}]},"farmland_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[146,110,74],"dark":[108,80,54],"jitter":16},"grass_s":{"type":"blades","count":6,"minHeight":3,"maxHeight":6,"dark":[52,118,38],"mid":[80,156,50],"tip":[118,190,72]},"grass_m":{"type":"blades","count":8,"minHeight":6,"maxHeight":10,"dark":[50,112,36],"mid":[82,160,52],"tip":[124,196,76]},"grass_l":{"type":"blades","count":10,"minHeight":9,"maxHeight":14,"dark":[46,106,34],"mid":[80,158,50],"tip":[128,200,80]},"wheat_s":{"type":"blades","count":8,"minHeight":3,"maxHeight":5,"dark":[70,150,50],"mid":[96,178,60],"tip":[130,205,80]},"wheat_m":{"type":"blades","count":8,"minHeight":7,"maxHeight":10,"dark":[84,150,50],"mid":[130,178,62],"tip":[176,196,84]},"wheat_l":{"type":"stalks","spacing":2,"minHeight":11,"maxHeight":14,"stem":[176,158,66],"headLength":4,"headLight":[236,200,90],"headDark":[214,168,52]},"farmland_wet_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[72,48,33],"dark":[36,24,18],"jitter":12},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................",".......ff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"furnace_side_lit":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOOORR....","....ROYYYYOR....","....OYYYYYYO....","....OOYYYYOO....","....OOOOOOOO....","................","................"]}]},"birch_log_side":{"type":"layers","layers":[{"type":"bark","base":[226,222,208],"channels":[1,1,1],"columnVariance":8,"jitter":8,"grooveEvery":5,"grooveDarken":10,"speckChance":0.02,"speckDarken":12},{"type":"pixelart","palette":{"d":[44,42,40],"e":[92,88,80]},"rows":["..dd............",".........ee.....","................","....ddd.....dd..","................",".ee.............","........dd......","................","..dd......ee....","................",".....ddd........","...........dd...","................","ee......dd......","................",".....dd........."]}]},"birch_log_top":{"type":"rings","bark":[226,222,208],"barkWidth":1.6,"light":[222,208,166],"dark":[196,180,134],"ringScale":0.9,"jitter":10},"spruce_log_side":{"type":"bark","base":[66,50,34],"channels":[1,0.85,0.7],"columnVariance":20,"jitter":12,"grooveEvery":3,"grooveDarken":26,"speckChance":0.05,"speckDarken":20},"spruce_log_top":{"type":"rings","bark":[62,46,30],"barkWidth":1.6,"light":[150,116,74],"dark":[124,92,56],"ringScale":0.9,"jitter":12},"birch_leaves":{"type":"noise","base":[108,156,52],"noise":[{"cells":4,"amp":46}],"jitter":22,"channels":[0.7,1,0.4],"holes":0.16},"spruce_leaves":{"type":"noise","base":[30,84,58],"noise":[{"cells":4,"amp":40}],"jitter":20,"channels":[0.35,0.9,0.5],"holes":0.14},"apple_leaves":{"type":"layers","layers":[{"type":"ref","tile":"leaves"},{"type":"pixelart","palette":{"r":[212,40,40],"h":[255,130,120]},"rows":["................","................","...rr...........","...rh.....rr....","................","................",".......rr.......",".......rh.......","................",".rr.............",".rh......rr.....",".........rh.....","................",".....rr.........",".....rh.........","................"]}]},"young_oak":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_birch":{"type":"pixelart","palette":{"g":[86,138,40],"G":[140,190,80],"S":[226,222,208]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_spruce":{"type":"pixelart","palette":{"g":[26,74,50],"G":[50,120,80],"S":[84,60,38]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_apple":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46],"r":[212,40,40]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGrgGGg....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"furnace_side_lit_b":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RRYOOORR....","....ROOYYYOR....","....OYYYYOOO....","....OOYYYYYO....","....OOOOOOOO....","................","................"]}]},"furnace_side_lit_c":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOYORR....","....RYYOOYOR....","....OOYYYYYO....","....OYYYOOOO....","....OOOOOOOO....","................","................"]}]},"torch_b":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................","......fff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"torch_c":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......f........",".......ff.......","......FFF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"water_b":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":0.7854},"water_c":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":1.5708},"water_d":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":2.3562},"water_e":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":3.1416},"water_f":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":3.927},"water_g":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":4.7124},"water_h":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":5.4978}},"toolHeads":{"wood":{"light":[204,162,104],"base":[166,124,72],"dark":[108,76,42]},"stone":{"light":[178,178,180],"base":[132,132,136],"dark":[78,78,84]},"iron":{"light":[244,244,248],"base":[208,208,214],"dark":[132,132,144]}},"toolHandle":[[148,108,58],[104,74,38]],"sprites":{"stick":{"type":"pixelart","palette":{"#":[104,74,38],"@":[148,108,58]},"rows":["................","................","................","............@...","...........#....","..........@.....",".........#......","........@.......",".......#........","......@.........",".....#..........","....@...........","...#............","................","................","................"]},"coal":{"type":"pixelart","palette":{"#":[18,18,22],"@":[40,40,46],"%":[86,86,96]},"rows":["................","................","................","................",".....#####......","....##@@@@##....","...##%%@@@@##...","...#@@@@@@@@#...","..##@@%@@@@@#...","..##%@@%%@%@#...","...#%%@@%@@@#...","...##@@@%%@#....",".....#@@@@##....",".....#.###......","................","................"]},"charcoal":{"type":"pixelart","palette":{"#":[32,24,20],"@":[66,50,40],"%":[112,88,66]},"rows":["................","................","................","................","......##........","....##@@@@##....","...##@@@@@@##...","..##%@%@@@@@#...","...#@@@@@%%@#...","...#@@@%@@@@#...","...#@@@@@%@@#...","...##@@@%@%##...","....##@@@@#.....",".....#.##.......","................","................"]},"iron_ingot":{"type":"pixelart","palette":{"#":[140,140,152],"@":[246,246,250],"%":[208,208,216]},"rows":["................","................","................","................","................","................",".......#@@@@@@#.","......#@@@@@@#..",".....#%%%%%%#...","....#%%%%%%#....","...#%%%%%%#.....","..########......","................","................","................","................"]},"wheat_seeds":{"type":"pixelart","palette":{"#":[158,176,84],"@":[96,112,48],"%":[74,92,40]},"rows":["................","................","................",".......#%.......",".......%%#%.....","....#@...%%.....","....@@..........","................","......#@...#%...","......@@...%%...","................","...#@...........","...@@...#%..#@..","........%%..@@..","................","................"]},"wheat":{"type":"pixelart","palette":{"#":[173,153,62],"@":[175,155,62],"%":[165,145,62],"&":[172,152,62],"$":[163,143,62],"*":[174,154,62],"+":[169,149,62],"=":[239,197,80],"~":[213,167,50],"^":[227,185,74],":":[201,155,50],";":[237,195,79],"-":[211,165,50],"_":[236,194,78],"<":[210,164,50],">":[235,193,77],"|":[209,163,50],"!":[161,141,62],"?":[166,146,62],"a":[177,157,62],"b":[223,181,72],"c":[197,151,50],"d":[227,185,73],"e":[228,186,74],"f":[202,156,50],"g":[225,183,73],"h":[199,153,50],"i":[179,159,62],"j":[162,142,62],"k":[176,156,62],"l":[167,147,62],"m":[168,148,62],"n":[230,188,75],"o":[204,158,50],"p":[239,197,79]},"rows":["................","................","...>|...gh.._<..","..._<...ef..p~..","...;-...d:..d:..","....^:..;-..no..","....=~..bc..ef..","....+...?...i...","....*...*...m...","....&...@..l....","....$...?..k....",".....&..a..j....",".....%..?..%....",".....@..+..i....",".....#..!..+....","................"]},"bread":{"type":"pixelart","palette":{"#":[128,82,36],"@":[214,156,76],"%":[150,96,44],"&":[176,118,52]},"rows":["................","................","................","................","................","...##@@@@@#.....","..#@@%@@%@@%#...","..&&&&&&&@@%@@..","..&&&&&&&&&&&&#.","..#&&&&&&&&&&&&.","...&&&&&&&&&&&&.","....#&&&&&&&&&#.","......#&&&&&##..","................","................","................"]},"apple":{"type":"pixelart","palette":{"r":[150,20,24],"R":[214,40,44],"w":[255,205,205],"s":[100,70,38],"g":[70,150,50]},"rows":["................","..........gg....","......s..ggg....","......s....g....","....rrr.rrr.....","...rRRRrRRRr....","..rRwRRRRRRRr...","..rRwRRRRRRRr...","..rRRRRRRRRRr...","..rRRRRRRRRRr...","...rRRRRRRRr....","...rrRRRRRrr....","....rrRRRrr.....",".....rrrr.......","................","................"]},"raw_iron":{"type":"pixelart","palette":{"#":[96,62,48],"@":[206,150,120],"%":[240,200,172]},"rows":["................","................","................","................",".....#####......","....##@@%@##....","...##@@@@@@@#...","...#@@%%@@@@#...","..##@@@@@%@@##..","..#@%@@@@@@@@#..","..##@@@%@@@@##..","...#@@@@@%@@#...","....##@@@@##....",".....######.....","................","................"]},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......ff.......","......ffFf......","......fFFF......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......","................"]},"iron_helmet":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","....########....","...#@@@@%%%%#...","..#@@@%%oo%%%#..","..#@@%%%ooo%%#..","..#@%%%%oooo%#..","..#@%%%%oooo%#..","..#@%%####oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oox#..#xoo#..","..####....####..","................","................","................"]},"iron_chestplate":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..####....####..",".#@@%#....#o%%#.",".#@%%o####ooo%#.",".#@%%%o##oooo%#.",".#@%%%%oooooo%#.",".#@%%%%oooooo%#.",".#@@%%%ooooo%%#.","..#@%%%ooooo%#..","..#@%%%ooooo%#..","..##@%%oooo%##..","...##@%ooo%##...","....##oooo##....",".....######.....","................","................"]},"iron_leggings":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..############..","..#@@%%%ooo%%#..","..#@%%%ooooo%#..","..#@%%####oo%#..","..#@%%#..#oo%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oxx#..#xxo#..","..#oxx#..#xxo#..","..####....####..","................","................","................","................"]},"iron_boots":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","..###......###..","..#@%#....#o%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#@%o####oo%#..","..#@%%%ooooo%#..",".#@%%%%oooooo%#.",".#%%oooooooooo#.",".#oxxxxxxxxxxo#.",".####......####.","................","................","................","................"]},"iron_shield":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114],"g":[150,106,58],"G":[190,142,84]},"rows":["................","..############..",".#@@@@@%o%%%%%#.",".#@%%%%%ooooo%#.",".#@%ggggggggo%#.",".#@%gGGGGGGgo%#.",".#@%ggggggggo%#.",".#@%%%%%ooooo%#.","..#@%%%ooooo%#..","..#@%%oooooo%#..","...#%%oooooo#...","...#@oooooo%#...","....#oooooo#....",".....#xxxx#.....","......####......","................"]},"backpack":{"type":"pixelart","palette":{"#":[50,34,22],"g":[170,120,70],"G":[204,154,94],"x":[112,78,46],"y":[236,204,84]},"rows":["................","....########....","...#gggGGggg#...","..#ggGGGGGGgg#..","..#gGGGGGGGGg#..","..#gGgGGGGgGg#..","..#gggGGGGggg#..","..#gGyGGGGyGg#..","..#gGgGGGGgGg#..","..#ggGGGGGGgg#..","..#gggggggggg#..","..#xxxxxxxxxx#..","..############..","................","................","................"]},"quiver":{"type":"pixelart","palette":{"#":[50,34,22],"g":[150,106,58],"G":[186,138,80],"r":[92,62,36],"f":[244,244,244],"|":[150,120,80]},"rows":["................",".....f..f..f....",".....|..|..|....","....#########...","....#gGgGgGgG#..","....#gGgGgGgG#..","....#gGggGgGg#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....#rrrrrrrr#..","....#gGgGgGgG#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....##########..","................","................"]},"oak_sapling":{"type":"ref","tile":"young_oak"},"birch_sapling":{"type":"ref","tile":"young_birch"},"spruce_sapling":{"type":"ref","tile":"young_spruce"},"apple_sapling":{"type":"ref","tile":"young_apple"}},"animations":{"_comment":"Tiles that flicker: the engine swaps these frames into the texture atlas at the given speed (frames per second). The first frame is the tile itself.","furnace_side_lit":{"frames":["furnace_side_lit","furnace_side_lit_b","furnace_side_lit_c"],"fps":7},"torch":{"frames":["torch","torch_b","torch_c"],"fps":8},"water":{"frames":["water","water_b","water_c","water_d","water_e","water_f","water_g","water_h"],"fps":6}}},"sounds":{"_comment":"Block sound materials. Each is a stack of layers played together: filtered noise and/or swept tones. A block picks one with \"sound\". Phases scale loudness and length.","phases":{"break":{"loud":1,"length":0.16},"place":{"loud":0.8,"length":0.16},"tick":{"loud":0.35,"length":0.05},"step":{"loud":0.22,"length":0.07}},"materials":{"default":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"stone":[{"type":"noise","filter":"bandpass","freq":1900,"q":1.2,"gain":0.55},{"type":"tone","from":160,"to":70,"gain":0.3,"lengthScale":1.2}],"wood":[{"type":"noise","filter":"bandpass","freq":700,"q":2,"gain":0.4},{"type":"tone","from":260,"to":110,"gain":0.45,"wave":"triangle","lengthScale":1.4}],"glass":[{"type":"noise","filter":"highpass","freq":4500,"q":1,"gain":0.3},{"type":"tone","from":2600,"to":2340,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":3900,"to":3510,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":5200,"to":4680,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03}],"sand":[{"type":"noise","filter":"highpass","freq":1800,"q":0.5,"gain":0.35,"lengthScale":1.3}],"leaves":[{"type":"noise","filter":"highpass","freq":3000,"q":0.4,"gain":0.28,"lengthScale":1.2}],"snow":[{"type":"noise","filter":"lowpass","freq":1500,"q":0.6,"gain":0.4,"lengthScale":1.4}],"water":[{"type":"noise","filter":"bandpass","freq":900,"q":0.8,"gain":0.35,"seconds":0.3}],"grass":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"dirt":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}]}},"worldgen":{"_comment":"Terrain, ores, caves, trees and ground cover. Block names refer to blocks.json keys. Ores: minY is inclusive, maxY exclusive. beachAboveSea: columns at most this far above the sea are beach.","seaLevel":22,"snowLine":44,"blocks":{"sea":"water","stone":"stone","surface":"grass","filler":"dirt","fillerDepth":3,"beach":"sand","beachFiller":"sand","snowSurface":"snow","snowFiller":"stone"},"terrain":{"continentScale":0.0045,"continentHeight":22,"hillScale":0.014,"hillHeight":7,"ridgeScale":0.011,"ridgeHeight":24,"baseAboveSea":5,"plainsHills":1.3,"rollingHills":9,"mountainHeight":22,"mountainUplift":5,"duneHeight":2.6,"duneScale":0.035,"flatContinent":0.3},"rivers":{"scale":0.0065,"coreWidth":0.016,"bankWidth":0.07,"warp":14,"lowlandFrom":8,"lowlandTo":20,"bedBelowSea":2},"caves":{"scale":[0.045,0.07,0.045],"threshold":0.1,"minY":3,"surfaceDepth":4,"caverns":{"scale":[0.022,0.04,0.022],"threshold":0.4,"minY":4,"maxY":34,"surfaceDepth":6},"entrances":{"scale":0.035,"threshold":0.25}},"ores":[{"block":"iron_ore","scale":0.16,"offset":[40,7,-20],"threshold":0.6,"minY":3,"maxY":36},{"block":"coal_ore","scale":0.14,"offset":[5,0,9],"threshold":0.56,"minY":0,"maxY":64}],"trees":{"_comment":"Trees: every spot that grows a tree picks one variant, weighted by \"weight\" among those whose \"heights\" range (terrain height) fits. shape: round (the classic ball of leaves), tall (a big crown on a long trunk), cone (a spruce) or bush (a low shrub). Saplings grow into these by key (blocks.json plant.grows).","baseDensity":0.003,"forestDensity":0.05,"minAboveSea":2,"belowSnowLine":2,"variants":[{"key":"oak","weight":6,"heights":[24,99],"shape":"round","trunk":[4,6],"log":"log","leaves":"leaves","biomes":["plains","forest","hills"]},{"key":"apple","weight":1.2,"heights":[24,36],"shape":"round","trunk":[3,5],"log":"log","leaves":"apple_leaves","biomes":["plains","forest"]},{"key":"birch","weight":3,"heights":[25,40],"shape":"round","trunk":[5,7],"log":"birch_log","leaves":"birch_leaves","biomes":["plains","forest","hills"]},{"key":"spruce","weight":4,"heights":[26,99],"shape":"cone","trunk":[6,9],"log":"spruce_log","leaves":"spruce_leaves","biomes":["tundra","mountains","hills"]},{"key":"tall_oak","weight":1,"heights":[24,38],"shape":"tall","trunk":[8,11],"log":"log","leaves":"leaves","biomes":["forest"]},{"key":"bush","weight":1.6,"heights":[24,99],"shape":"bush","trunk":[1,2],"log":"log","leaves":"leaves","biomes":["plains","forest","hills","mountains","tundra"]}]},"groundCover":{"chance":0.24,"variants":[{"block":"grass_s","weight":0.45},{"block":"grass_m","weight":0.35},{"block":"grass_l","weight":0.2}]},"spawn":{"minTrees":3,"treeRadius":10,"waterRadius":28},"beachAboveSea":1,"biomes":{"_comment":"Climate decides the biome of every column. Three slow noise fields: temp (cold..hot), wet (dry..wet) and rel (relief: flat..mountainous), each mostly between -0.35 and 0.35; climateScale is how stretched they are (smaller = bigger biomes). select gives the cut-offs: relief above mountainRel is mountains, above hillsRel is hills; hotter than hotTemp and drier than dryWet is desert, colder than coldTemp is tundra, wetter than forestWet is forest, anything else is plains. blend is how wide the smooth change of terrain shape between two biomes is, in climate units. A biome picks its own ground blocks (surface / filler / fillerDepth), rockFrom (the surface turns to bare stone from this height up) and a trees multiplier on the tree density (denseMin: forests are never thinner than this share of the densest).","climateScale":0.0014,"select":{"mountainRel":0.19,"hillsRel":0.07,"hotTemp":0.13,"dryWet":-0.02,"coldTemp":-0.2,"forestWet":0.04,"blend":0.08},"types":{"plains":{"surface":"grass","filler":"dirt","fillerDepth":3,"trees":0.3},"forest":{"surface":"grass","filler":"dirt","fillerDepth":3,"trees":1,"denseMin":0.6},"hills":{"surface":"grass","filler":"dirt","fillerDepth":3,"trees":0.55},"mountains":{"surface":"grass","filler":"dirt","fillerDepth":2,"trees":0.3,"rockFrom":36},"desert":{"surface":"sand","filler":"sand","fillerDepth":5,"trees":0},"tundra":{"surface":"snow","filler":"dirt","fillerDepth":3,"trees":0.4}}}},"game":{"_comment":"Survival rules and tuning numbers.","player":{"maxHealth":20,"maxFood":20,"reach":6,"lookAtReach":5},"hunger":{"drainPerSecond":0.03,"sprintDrainPerSecond":0.12,"jumpCost":0.05,"sprintJumpCost":0.1,"miningCost":0.05,"miningDrainPerSecond":0.06,"maxSaturation":20,"healEverySeconds":1.5,"saturationPerHeal":1,"emptySaturationCost":1,"respawnSaturation":5,"noSprintAtOrBelow":6,"starveEverySeconds":15,"starveDamage":1,"starvingSpeed":0.75},"eating":{"seconds":1.4},"fall":{"safeDistance":4,"damageOffset":3,"tolerance":0.05,"kick":1.3},"tilling":{"radius":4,"waterBelow":4,"waterAbove":1},"time":{"dayLengthSeconds":480,"startTime":0.08},"treeFall":{"mode":"shatter","leafReach":4},"creativeHotbar":["grass","dirt","stone","cobble","planks","log","glass","brick","sand"],"spread":{"chance":0.5,"samplesPerChunk":12,"chunkRadius":3},"plants":{"growthChunkRadius":4},"studio":{"_comment":"The developer logo screen at startup. Letters, digits, space and - . ! & ' only.","name":"Pixel Pilots Studio","tagline":"presents"},"lighting":{"minBrightness":0.14,"gamma":1.5,"skyLevel":15},"equipment":{"_comment":"Equipment slots shown in the inventory (the order here is the order on screen). Armor points reduce damage from falls by armorReduction each (starvation ignores armor).","armorReduction":0.04,"maxArmor":20,"slots":[{"id":"helmet","label":"Helmet"},{"id":"chestplate","label":"Chestplate"},{"id":"leggings","label":"Leggings"},{"id":"boots","label":"Boots"},{"id":"shield","label":"Shield"},{"id":"backpack","label":"Backpack"},{"id":"quiver","label":"Quiver"}]},"tools":{"_comment":"wrongToolWear: how many uses a tool loses when it breaks a block it is not made for (a pickaxe on dirt, a shovel on stone); the right tool loses 1.","wrongToolWear":3}},"music":{"_comment":"The soundtrack. Every track is generated live from this description (nothing is recorded). In the game a random track plays, and when it finishes there is a short pause (gapSeconds) and another one is picked at random, never the same one twice in a row. The title screen plays the track named by \"title\" on a loop. A track: bpm, bars (how long it lasts), chords (root = bass note, tones = the notes the pad and melody use, as MIDI numbers; each chord lasts barsPerChord bars and the list repeats), lead (the melody: voice piano|bell|pluck, density = chance of a note on [the first beat, other even steps, odd steps], leap = chance of an octave jump, rest = every Nth bar the melody takes a breath), pad (triangle|strings|null), bass (sine|drone|null), arp (a repeating broken-chord pattern: voice, pattern = which chord tone each step plays, step = beats per note, vel). \"melody\" instead of a random lead plays exactly these notes: [bar, beat, midi note, beats long, loudness].","gapSeconds":[5,12],"title":"theme","tracks":[{"key":"meadow","name":"Meadow","bpm":58,"bars":16,"barsPerChord":1,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":43,"tones":[59,62,65,67,72]},{"root":40,"tones":[59,62,64,67,71]},{"root":45,"tones":[60,64,67,69,72]},{"root":38,"tones":[57,60,62,65,69]},{"root":43,"tones":[59,62,64,67,71]}],"lead":{"voice":"piano","density":[0.9,0.5,0.28],"leap":0.12,"rest":4},"pad":"triangle","bass":"sine"},{"key":"lantern","name":"Lantern Light","bpm":50,"bars":16,"barsPerChord":2,"chords":[{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":48,"tones":[55,60,64,67,72]},{"root":43,"tones":[55,59,62,67,71]}],"lead":{"voice":"bell","density":[0.8,0.45,0.3],"leap":0.2,"rest":4},"pad":"strings","bass":"sine"},{"key":"slow_tide","name":"Slow Tide","bpm":44,"bars":16,"barsPerChord":2,"chords":[{"root":38,"tones":[57,60,62,64,65]},{"root":43,"tones":[59,62,64,67,71]},{"root":36,"tones":[60,64,67,71,74]},{"root":41,"tones":[57,60,64,65,69]}],"lead":{"voice":"piano","density":[0.55,0.28,0.14],"leap":0.18,"rest":3},"pad":"strings","bass":"drone"},{"key":"hearthside","name":"Hearthside","bpm":66,"bars":16,"barsPerChord":1,"chords":[{"root":41,"tones":[53,57,60,65,69]},{"root":46,"tones":[58,62,65,69,74]},{"root":43,"tones":[55,58,62,65,70]},{"root":48,"tones":[55,58,60,64,67]}],"lead":{"voice":"pluck","density":[0.5,0.25,0.12],"leap":0.1,"rest":4},"arp":{"voice":"piano","pattern":[0,2,1,3,2,4,3,1],"step":0.5,"vel":0.12},"pad":"triangle","bass":"sine"},{"key":"deep_stone","name":"Deep Stone","bpm":40,"bars":16,"barsPerChord":2,"chords":[{"root":40,"tones":[52,55,59,64,67]},{"root":41,"tones":[53,57,60,64,65]},{"root":45,"tones":[52,57,60,64,69]},{"root":38,"tones":[50,53,57,62,65]}],"lead":{"voice":"bell","density":[0.45,0.2,0.1],"leap":0.3,"rest":2},"pad":"strings","bass":"drone"},{"key":"morning_light","name":"Morning Light","bpm":76,"bars":16,"barsPerChord":1,"chords":[{"root":43,"tones":[55,59,62,67,71]},{"root":50,"tones":[57,62,66,69,74]},{"root":40,"tones":[55,59,64,67,71]},{"root":48,"tones":[55,60,64,67,72]}],"lead":{"voice":"piano","density":[0.8,0.55,0.35],"leap":0.1,"rest":4},"arp":{"voice":"pluck","pattern":[0,1,2,3,2,1,4,2],"step":0.5,"vel":0.1},"pad":"triangle","bass":"sine"},{"key":"theme","name":"VoxelCraft Theme","bpm":72,"bars":16,"barsPerChord":2,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":43,"tones":[59,62,67,71,74]},{"root":45,"tones":[57,60,64,67,72]},{"root":41,"tones":[57,60,65,69,72]},{"root":48,"tones":[60,64,67,72,76]},{"root":43,"tones":[59,62,67,71,74]},{"root":41,"tones":[57,60,65,69,72]},{"root":43,"tones":[55,59,62,67,71]}],"melody":[[0,0,72,2,0.3],[0,2,76,1,0.26],[0,3,79,1,0.26],[1,0,81,2,0.28],[1,2,79,2,0.24],[2,0,76,2,0.28],[2,2,74,1,0.24],[2,3,72,1,0.24],[3,0,74,4,0.26],[4,0,72,2,0.28],[4,2,69,1,0.24],[4,3,72,1,0.24],[5,0,76,2,0.28],[5,2,74,2,0.24],[6,0,72,2,0.28],[6,2,69,2,0.24],[7,0,67,4,0.26],[8,0,72,2,0.3],[8,2,76,1,0.26],[8,3,79,1,0.26],[9,0,84,2,0.32],[9,2,83,1,0.26],[9,3,79,1,0.26],[10,0,81,2,0.3],[10,2,79,1,0.24],[10,3,76,1,0.24],[11,0,79,4,0.28],[12,0,77,2,0.28],[12,2,76,1,0.24],[12,3,74,1,0.24],[13,0,72,2,0.26],[13,2,74,2,0.24],[14,0,71,2,0.26],[14,2,74,2,0.24],[15,0,72,4,0.3]],"arp":{"voice":"bell","pattern":[0,2,3,2],"step":1,"vel":0.07},"pad":"strings","bass":"sine"}]}};
var Gp=0,Wu=1,Wp=2;var wa=1,Xp=2,eo=3,Ps=0,Cn=1,ni=2,Fi=0,no=1,sr=2,Xu=3,qu=4,qp=5;var rr=100,$p=101,Yp=102,Zp=103,Jp=104,Kp=200,jp=201,Qp=202,tm=203,$u=204,Yu=205,em=206,nm=207,im=208,sm=209,rm=210,om=211,am=212,lm=213,cm=214,ql=0,$l=1,Yl=2,Yr=3,Zl=4,Jl=5,Kl=6,jl=7,Zu=0,hm=1,um=2,mi=0,Ju=1,Ku=2,ju=3,Qu=4,td=5,ed=6,nd=7;var id=300,Ls=301,or=302,Tc=303,Ac=304,Ea=306,Zr=1e3,Ii=1001,Ql=1002,Xe=1003,dm=1004;var Ta=1005;var cn=1006,Cc=1007;var Ns=1008;var Xn=1009,sd=1010,rd=1011,io=1012,Rc=1013,gi=1014,ii=1015,xi=1016,Ic=1017,Pc=1018,so=1020,od=35902,ad=35899,ld=1021,cd=1022,si=1023,Pi=1026,Ds=1027,Lc=1028,Nc=1029,Us=1030,Dc=1031;var Uc=1033,Aa=33776,Ca=33777,Ra=33778,Ia=33779,Oc=35840,Fc=35841,Bc=35842,kc=35843,zc=36196,Hc=37492,Vc=37496,Gc=37488,Wc=37489,Pa=37490,Xc=37491,qc=37808,$c=37809,Yc=37810,Zc=37811,Jc=37812,Kc=37813,jc=37814,Qc=37815,th=37816,eh=37817,nh=37818,ih=37819,sh=37820,rh=37821,oh=36492,ah=36494,lh=36495,ch=36283,hh=36284,La=36285,uh=36286;var jo=2300,tc=2301,Gl=2302,Fu=2303,Bu=2400,ku=2401,zu=2402;var fm=3200;var hd=0,pm=1,ri="",Vn="srgb",nr="srgb-linear",Qo="linear",Se="srgb";var Wl=7680;var mm=519,gm=512,xm=513,_m=514,dh=515,ym=516,vm=517,fh=518,Mm=519,ud=35044,dd=35048;var fd="300 es",pi=2e3,ta=2001;function g_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function x_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sm(){let n=ea("canvas");return n.style.display="block",n}var pp={},Jr=null;function na(...n){let t="THREE."+n.shift();Jr?Jr("log",t,...n):console.log(t,...n)}function bm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=bm(n);let t="THREE."+n.shift();if(Jr)Jr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function $t(...n){n=bm(n);let t="THREE."+n.shift();if(Jr)Jr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function er(...n){let t=n.join(" ");t in pp||(pp[t]=!0,Wt(...n))}function wm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Em={[ql]:$l,[Yl]:Kl,[Zl]:jl,[Yr]:Jl,[$l]:ql,[Kl]:Yl,[jl]:Zl,[Jl]:Yr},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xl=Math.PI/180,ec=180/Math.PI;function Es(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function he(n,t,e){return Math.max(t,Math.min(e,n))}function __(n,t){return(n%t+t)%t}function fu(n,t,e){return(1-e)*n+e*t}function Ci(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var se=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let w=Math.acos(g),R=Math.sin(w);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pu.copy(this).projectOnVector(t),this.sub(pu)}reflect(t){return this.sub(pu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pu=new V,mp=new Pn,Jt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],w=s[1],R=s[4],v=s[7],E=s[2],M=s[5],C=s[8];return r[0]=o*x+a*w+l*E,r[3]=o*g+a*R+l*M,r[6]=o*p+a*v+l*C,r[1]=c*x+h*w+d*E,r[4]=c*g+h*R+d*M,r[7]=c*p+h*v+d*C,r[2]=u*x+f*w+m*E,r[5]=u*g+f*R+m*M,r[8]=u*p+f*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mu.makeScale(t,e)),this}rotate(t){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mu.makeRotation(-t)),this}translate(t,e){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mu=new Jt,gp=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xp=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){let n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:t,whitePoint:i,transfer:Qo,toXYZ:gp,fromXYZ:xp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:gp,fromXYZ:xp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),n}var oe=y_();function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rr,nc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rr===void 0&&(Rr=ea("canvas")),Rr.width=t.width,Rr.height=t.height;let s=Rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Rr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ea("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(os(e[i]/255)*255):e[i]=os(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},v_=0,Kr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gu(s[o].image)):r.push(gu(s[o]))}else r=gu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function gu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var M_=0,xu=new V,Tn=class n extends Li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ii,s=Ii,r=cn,o=Ns,a=si,l=Xn,c=n.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Es(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Ql:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Ql:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=id;Tn.DEFAULT_ANISOTROPY=1;var He=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,v=(f+1)/2,E=(p+1)/2,M=(h+u)/4,C=(d+x)/4,y=(m+g)/4;return R>v&&R>E?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=M/i,r=C/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=y/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=C/r,s=y/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(d-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends Li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Kr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends ic{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ia=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sc=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var be=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ir.setFromMatrixColumn(t,0).length(),r=1/Ir.setFromMatrixColumn(t,1).length(),o=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(S_,t,b_)}lookAt(t,e,i){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),vs.crossVectors(i,zn),vs.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),vs.crossVectors(i,zn)),vs.normalize(),fl.crossVectors(zn,vs),s[0]=vs.x,s[4]=fl.x,s[8]=zn.x,s[1]=vs.y,s[5]=fl.y,s[9]=zn.y,s[2]=vs.z,s[6]=fl.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],w=i[3],R=i[7],v=i[11],E=i[15],M=s[0],C=s[4],y=s[8],A=s[12],I=s[1],P=s[5],F=s[9],k=s[13],D=s[2],O=s[6],Z=s[10],Q=s[14],it=s[3],H=s[7],G=s[11],tt=s[15];return r[0]=o*M+a*I+l*D+c*it,r[4]=o*C+a*P+l*O+c*H,r[8]=o*y+a*F+l*Z+c*G,r[12]=o*A+a*k+l*Q+c*tt,r[1]=h*M+d*I+u*D+f*it,r[5]=h*C+d*P+u*O+f*H,r[9]=h*y+d*F+u*Z+f*G,r[13]=h*A+d*k+u*Q+f*tt,r[2]=m*M+x*I+g*D+p*it,r[6]=m*C+x*P+g*O+p*H,r[10]=m*y+x*F+g*Z+p*G,r[14]=m*A+x*k+g*Q+p*tt,r[3]=w*M+R*I+v*D+E*it,r[7]=w*C+R*P+v*O+E*H,r[11]=w*y+R*F+v*Z+E*G,r[15]=w*A+R*k+v*Q+E*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],w=l*f-c*u,R=a*f-c*d,v=a*u-l*d,E=o*f-c*h,M=o*u-l*h,C=o*d-a*h;return e*(x*w-g*R+p*v)-i*(m*w-g*E+p*M)+s*(m*R-x*E+p*C)-r*(m*v-x*M+g*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],w=e*a-i*o,R=e*l-s*o,v=e*c-r*o,E=i*l-s*a,M=i*c-r*a,C=s*c-r*l,y=h*x-d*m,A=h*g-u*m,I=h*p-f*m,P=d*g-u*x,F=d*p-f*x,k=u*p-f*g,D=w*k-R*F+v*P+E*I-M*A+C*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=(a*k-l*F+c*P)*O,t[1]=(s*F-i*k-r*P)*O,t[2]=(x*C-g*M+p*E)*O,t[3]=(u*M-d*C-f*E)*O,t[4]=(l*I-o*k-c*A)*O,t[5]=(e*k-s*I+r*A)*O,t[6]=(g*v-m*C-p*R)*O,t[7]=(h*C-u*v+f*R)*O,t[8]=(o*F-a*I+c*y)*O,t[9]=(i*I-e*F-r*y)*O,t[10]=(m*M-x*v+p*w)*O,t[11]=(d*v-h*M-f*w)*O,t[12]=(a*A-o*P-l*y)*O,t[13]=(e*P-i*A+s*y)*O,t[14]=(x*R-m*E-g*w)*O,t[15]=(h*E-d*R+u*w)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,w=l*c,R=l*h,v=l*d,E=i.x,M=i.y,C=i.z;return s[0]=(1-(x+p))*E,s[1]=(f+v)*E,s[2]=(m-R)*E,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(u+p))*M,s[6]=(g+w)*M,s[7]=0,s[8]=(m+R)*C,s[9]=(g-w)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ir.set(s[0],s[1],s[2]).length(),a=Ir.set(s[4],s[5],s[6]).length(),l=Ir.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hi.copy(this);let c=1/o,h=1/a,d=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,e.setFromRotationMatrix(hi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=pi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===pi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ta)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===pi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===ta)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ir=new V,hi=new be,S_=new V(0,0,0),b_=new V(1,1,1),vs=new V,fl=new V,zn=new V,_p=new be,yp=new Pn,Ni=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _p.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_p,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yp.setFromEuler(this),this.setFromQuaternion(yp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},w_=0,vp=new V,Pr=new Pn,es=new be,pl=new V,Vo=new V,E_=new V,T_=new Pn,Mp=new V(1,0,0),Sp=new V(0,1,0),bp=new V(0,0,1),wp={type:"added"},A_={type:"removed"},Lr={type:"childadded",child:null},_u={type:"childremoved",child:null},An=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new Ni,i=new Pn,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(Mp,t)}rotateY(t){return this.rotateOnAxis(Sp,t)}rotateZ(t){return this.rotateOnAxis(bp,t)}translateOnAxis(t,e){return vp.copy(t).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mp,t)}translateY(t){return this.translateOnAxis(Sp,t)}translateZ(t){return this.translateOnAxis(bp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pl.copy(t):pl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(Vo,pl,this.up):es.lookAt(pl,Vo,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),Pr.setFromRotationMatrix(es),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wp),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(A_),_u.child=t,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),es.multiply(t.parent.matrixWorld)),t.applyMatrix4(es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wp),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,E_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,T_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new V(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},C_={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},ml={h:0,s:0,l:0};function yu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=__(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=yu(o,r,t+1/3),this.g=yu(o,r,t),this.b=yu(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Vn){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Vn){let i=Tm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return oe.workingToColorSpace(mn.copy(this),t),Math.round(he(mn.r*255,0,255))*65536+Math.round(he(mn.g*255,0,255))*256+Math.round(he(mn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(mn.copy(this),e);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Vn){oe.workingToColorSpace(mn.copy(this),t);let e=mn.r,i=mn.g,s=mn.b;return t!==Vn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+e,Ms.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ms),t.getHSL(ml);let i=fu(Ms.h,ml.h,e),s=fu(Ms.s,ml.s,e),r=fu(Ms.l,ml.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Gt;Gt.NAMES=Tm;var ra=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oa=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new V,ns=new V,vu=new V,is=new V,Nr=new V,Dr=new V,Ep=new V,Mu=new V,Su=new V,bu=new V,wu=new He,Eu=new He,Tu=new He,Ri=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ui.subVectors(s,e),ns.subVectors(i,e),vu.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(ns),l=ui.dot(vu),c=ns.dot(ns),h=ns.dot(vu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,is.x),l.addScaledVector(o,is.y),l.addScaledVector(a,is.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return wu.setScalar(0),Eu.setScalar(0),Tu.setScalar(0),wu.fromBufferAttribute(t,e),Eu.fromBufferAttribute(t,i),Tu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wu,r.x),o.addScaledVector(Eu,r.y),o.addScaledVector(Tu,r.z),o}static isFrontFacing(t,e,i,s){return ui.subVectors(i,e),ns.subVectors(t,e),ui.cross(ns).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),ui.cross(ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Nr.subVectors(s,i),Dr.subVectors(r,i),Mu.subVectors(t,i);let l=Nr.dot(Mu),c=Dr.dot(Mu);if(l<=0&&c<=0)return e.copy(i);Su.subVectors(t,s);let h=Nr.dot(Su),d=Dr.dot(Su);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Nr,o);bu.subVectors(t,r);let f=Nr.dot(bu),m=Dr.dot(bu);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Dr,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Ep.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Ep,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(Nr,o).addScaledVector(Dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Di=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(t.matrixWorld),this.union(gl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),xl.subVectors(this.max,Go),Ur.subVectors(t.a,Go),Or.subVectors(t.b,Go),Fr.subVectors(t.c,Go),Ss.subVectors(Or,Ur),bs.subVectors(Fr,Or),Ks.subVectors(Ur,Fr);let e=[0,-Ss.z,Ss.y,0,-bs.z,bs.y,0,-Ks.z,Ks.y,Ss.z,0,-Ss.x,bs.z,0,-bs.x,Ks.z,0,-Ks.x,-Ss.y,Ss.x,0,-bs.y,bs.x,0,-Ks.y,Ks.x,0];return!Au(e,Ur,Or,Fr,xl)||(e=[1,0,0,0,1,0,0,0,1],!Au(e,Ur,Or,Fr,xl))?!1:(_l.crossVectors(Ss,bs),e=[_l.x,_l.y,_l.z],Au(e,Ur,Or,Fr,xl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ss=[new V,new V,new V,new V,new V,new V,new V,new V],di=new V,gl=new Di,Ur=new V,Or=new V,Fr=new V,Ss=new V,bs=new V,Ks=new V,Go=new V,xl=new V,_l=new V,js=new V;function Au(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){js.fromArray(n,r);let a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=t.dot(js),c=e.dot(js),h=i.dot(js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new V,yl=new se,R_=0,ge=class extends Li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yl.fromBufferAttribute(this,e),yl.applyMatrix3(t),this.setXY(e,yl.x,yl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var aa=class extends ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var la=class extends ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var rn=class extends ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},I_=new Di,Wo=new V,Cu=new V,ei=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):I_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);let e=Wo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Wo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(Cu)),this.expandByPoint(Wo.copy(t.center).sub(Cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},P_=0,ti=new be,Ru=new An,Br=new V,Hn=new Di,Xo=new Di,nn=new V,Ge=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g_(t)?la:aa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return Ru.lookAt(t),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Hn.min,Xo.min),Hn.expandByPoint(nn),nn.addVectors(Hn.max,Xo.max),Hn.expandByPoint(nn)):(Hn.expandByPoint(Xo.min),Hn.expandByPoint(Xo.max))}Hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(t,c),nn.add(Br)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ge(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new V,l[y]=new V;let c=new V,h=new V,d=new V,u=new se,f=new se,m=new se,x=new V,g=new V;function p(y,A,I){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[y].add(x),a[A].add(x),a[I].add(x),l[y].add(g),l[A].add(g),l[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let y=0,A=w.length;y<A;++y){let I=w[y],P=I.start,F=I.count;for(let k=P,D=P+F;k<D;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let R=new V,v=new V,E=new V,M=new V;function C(y){E.fromBufferAttribute(s,y),M.copy(E);let A=a[y];R.copy(A),R.sub(E.multiplyScalar(E.dot(A))).normalize(),v.crossVectors(M,A);let P=v.dot(l[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,P)}for(let y=0,A=w.length;y<A;++y){let I=w[y],P=I.start,F=I.count;for(let k=P,D=P+F;k<D;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new ge(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},rc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ud,this.updateRanges=[],this.version=0,this.uuid=Es()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new V,ca=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ci(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Iu=new V,L_=new V,N_=new Jt,fi=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Iu.subVectors(i,e).cross(L_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||N_.getNormalMatrix(t),s=this.coplanarPoint(Iu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},D_=0,Ui=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=no,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Yu,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wl,this.stencilZFail=Wl,this.stencilZPass=Wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new fi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ts=class extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kr,qo=new V,zr=new V,Hr=new V,Vr=new se,$o=new se,Am=new be,vl=new V,Yo=new V,Ml=new V,Tp=new se,Pu=new se,Ap=new se,ir=class extends An{constructor(t=new Ts){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rc(e,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new ca(i,3,0,!1)),kr.setAttribute("uv",new ca(i,2,3,!1))}this.geometry=kr,this.material=t,this.center=new se(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),Am.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Hr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Sl(vl.set(-.5,-.5,0),Hr,o,zr,s,r),Sl(Yo.set(.5,-.5,0),Hr,o,zr,s,r),Sl(Ml.set(.5,.5,0),Hr,o,zr,s,r),Tp.set(0,0),Pu.set(1,0),Ap.set(1,1);let a=t.ray.intersectTriangle(vl,Yo,Ml,!1,qo);if(a===null&&(Sl(Yo.set(-.5,.5,0),Hr,o,zr,s,r),Pu.set(0,1),a=t.ray.intersectTriangle(vl,Ml,Yo,!1,qo),a===null))return;let l=t.ray.origin.distanceTo(qo);l<t.near||l>t.far||e.push({distance:l,point:qo.clone(),uv:Ri.getInterpolation(qo,vl,Yo,Ml,Tp,Pu,Ap,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Sl(n,t,e,i,s,r){Vr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?($o.x=r*Vr.x-s*Vr.y,$o.y=s*Vr.x+r*Vr.y):$o.copy(Vr),n.copy(t),n.x+=$o.x,n.y+=$o.y,n.applyMatrix4(Am)}var rs=new V,Lu=new V,bl=new V,wl=new V,Qr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rs.copy(this.origin).addScaledVector(this.direction,e),rs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Lu.copy(t).add(e).multiplyScalar(.5),bl.copy(e).sub(t).normalize(),wl.copy(this.origin).sub(Lu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bl),a=wl.dot(this.direction),l=-wl.dot(bl),c=wl.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lu).addScaledVector(bl,u),f}intersectSphere(t,e){if(t.radius<0)return null;rs.subVectors(t.center,this.origin);let i=rs.dot(this.direction),s=rs.dot(rs)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,rs)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=i.x-o.x,w=i.y-o.y,R=i.z-o.z,v=Math.abs(l),E=Math.abs(c),M=Math.abs(h),C,y,A,I,P,F,k,D,O,Z,Q,it;if(v>=E&&v>=M?(A=l,F=d,O=m,it=p,l>=0?(C=c,y=h,I=u,P=f,k=x,D=g,Z=w,Q=R):(C=h,y=c,I=f,P=u,k=g,D=x,Z=R,Q=w)):E>=M?(A=c,F=u,O=x,it=w,c>=0?(C=h,y=l,I=f,P=d,k=g,D=m,Z=R,Q=p):(C=l,y=h,I=d,P=f,k=m,D=g,Z=p,Q=R)):(A=h,F=f,O=g,it=R,h>=0?(C=l,y=c,I=d,P=u,k=m,D=x,Z=p,Q=w):(C=c,y=l,I=u,P=d,k=x,D=m,Z=w,Q=p)),A===0)return null;let H=C/A,G=y/A,tt=1/A,gt=I-H*F,J=P-G*F,xt=k-H*O,yt=D-G*O,Tt=Z-H*it,W=Q-G*it,K=Tt*yt-W*xt,pt=gt*W-J*Tt,Pt=xt*J-yt*gt;if(s){if(K<0||pt<0||Pt<0)return null}else if((K<0||pt<0||Pt<0)&&(K>0||pt>0||Pt>0))return null;let vt=K+pt+Pt;if(vt===0)return null;let Bt=tt*(K*F+pt*O+Pt*it);return(vt>0?Bt<0:Bt>0)?null:this.at(Bt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cp=new be,Qs=new Qr,El=new ei,Rp=new V,Tl=new V,Al=new V,Cl=new V,Nu=new V,Rl=new V,Ip=new V,Il=new V,Ce=class extends An{constructor(t=new Ge,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Nu.fromBufferAttribute(d,t),o?Rl.addScaledVector(Nu,h):Rl.addScaledVector(Nu.sub(e),h))}e.add(Rl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),Qs.copy(t.ray).recast(t.near),!(El.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(El,Rp)===null||Qs.origin.distanceToSquared(Rp)>(t.far-t.near)**2))&&(Cp.copy(r).invert(),Qs.copy(t.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),R=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,E=R;v<E;v+=3){let M=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);s=Pl(this,p,t,i,c,h,d,M,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let w=a.getX(g),R=a.getX(g+1),v=a.getX(g+2);s=Pl(this,o,t,i,c,h,d,w,R,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,E=R;v<E;v+=3){let M=v,C=v+1,y=v+2;s=Pl(this,p,t,i,c,h,d,M,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let w=g,R=g+1,v=g+2;s=Pl(this,o,t,i,c,h,d,w,R,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function U_(n,t,e,i,s,r,o,a){let l;if(t.side===Cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ps,a),l===null)return null;Il.copy(a),Il.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Il);return c<e.near||c>e.far?null:{distance:c,point:Il.clone(),object:n}}function Pl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Tl),n.getVertexPosition(l,Al),n.getVertexPosition(c,Cl);let h=U_(n,t,e,i,Tl,Al,Cl,Ip);if(h){let d=new V;Ri.getBarycoord(Ip,Tl,Al,Cl,d),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,l,c,d,new se)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,l,c,d,new se)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new V,materialIndex:0};Ri.getNormal(Tl,Al,Cl,u.normal),h.face=u,h.barycoord=d}return h}var ha=class extends Tn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Xe,h=Xe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ua=class extends ge{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gr=new be,Pp=new be,Ll=[],Lp=new Di,O_=new be,Zo=new Ce,Jo=new ei,da=class extends Ce{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,O_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gr),Lp.copy(t.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Lp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gr),Jo.copy(t.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(Jo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(i),t.ray.intersectsSphere(Jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gr),Pp.multiplyMatrices(i,Gr),Zo.matrixWorld=Pp,Zo.raycast(t,Ll);for(let o=0,a=Ll.length;o<a;o++){let l=Ll[o];l.instanceId=r,l.object=this,e.push(l)}Ll.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(s*this.count),s,this.count,Lc,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tr=new ei,F_=new se(.5,.5),Nl=new V,fa=class{constructor(t=new fi,e=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],w=r[12],R=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-m,E-w).normalize(),s[1].setComponents(c+o,f+h,p+m,E+w).normalize(),s[2].setComponents(c+a,f+d,p+x,E+R).normalize(),s[3].setComponents(c-a,f-d,p-x,E-R).normalize(),i)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,f-u,p-g,E-v).normalize();else if(s[4].setComponents(c-l,f-u,p-g,E-v).normalize(),e===pi)s[5].setComponents(c+l,f+u,p+g,E+v).normalize();else if(e===ta)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);let e=F_.distanceTo(t.center);return tr.radius=.7071067811865476+e,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Nl.x=s.normal.x>0?t.max.x:t.min.x,Nl.y=s.normal.y>0?t.max.y:t.min.y,Nl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var to=class extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},oc=new V,ac=new V,Np=new be,Ko=new Qr,Dl=new ei,Du=new V,Dp=new V,lc=class extends An{constructor(t=new Ge,e=new to){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)oc.fromBufferAttribute(e,s-1),ac.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=oc.distanceTo(ac);t.setAttribute("lineDistance",new rn(i,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,t.ray.intersectsSphere(Dl)===!1)return;Np.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),w=h.getX(x+1),R=Ul(this,t,Ko,l,p,w,x);R&&e.push(R)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Ul(this,t,Ko,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Ul(this,t,Ko,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ul(this,t,Ko,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ul(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(oc.fromBufferAttribute(a,s),ac.fromBufferAttribute(a,r),e.distanceSqToSegment(oc,ac,Du,Dp)>i)return;Du.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Du);if(!(c<t.near||c>t.far))return{distance:c,point:Dp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Up=new V,Op=new V,pa=class extends lc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Up.fromBufferAttribute(e,s),Op.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Up.distanceTo(Op);t.setAttribute("lineDistance",new rn(i,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var cc=class extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fp=new be,Hu=new Qr,Ol=new ei,Fl=new V,ma=class extends An{constructor(t=new Ge,e=new cc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Ol.radius+=r,t.ray.intersectsSphere(Ol)===!1)return;Fp.copy(s).invert(),Hu.copy(t.ray).applyMatrix4(Fp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Fl.fromBufferAttribute(d,g),Bp(Fl,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Fl.fromBufferAttribute(d,m),Bp(Fl,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bp(n,t,e,i,s,r,o){let a=Hu.distanceSqToPoint(n);if(a<e){let l=new V;Hu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ga=class extends Tn{constructor(t=[],e=Ls,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oi=class extends Tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class extends Tn{constructor(t,e,i=gi,s,r,o,a=Xe,l=Xe,c,h=Pi,d=1){if(h!==Pi&&h!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},hc=class extends As{constructor(t,e=gi,i=Ls,s,r,o=Xe,a=Xe,l,c=Pi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xa=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gn=class n extends Ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(d,2));function m(x,g,p,w,R,v,E,M,C,y,A){let I=v/C,P=E/y,F=v/2,k=E/2,D=M/2,O=C+1,Z=y+1,Q=0,it=0,H=new V;for(let G=0;G<Z;G++){let tt=G*P-k;for(let gt=0;gt<O;gt++){let J=gt*I-F;H[x]=J*w,H[g]=tt*R,H[p]=D,c.push(H.x,H.y,H.z),H[x]=0,H[g]=0,H[p]=M>0?1:-1,h.push(H.x,H.y,H.z),d.push(gt/C),d.push(1-G/y),Q+=1}}for(let G=0;G<y;G++)for(let tt=0;tt<C;tt++){let gt=u+tt+O*G,J=u+tt+O*(G+1),xt=u+(tt+1)+O*(G+1),yt=u+(tt+1)+O*G;l.push(gt,J,yt),l.push(J,xt,yt),it+=6}a.addGroup(f,it,A),f+=it,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bl=new V,kl=new V,Uu=new V,zl=new Ri,_a=class extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Xl*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=zl;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),zl.getNormal(Uu),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){let R=(w+1)%3,v=d[w],E=d[R],M=zl[h[w]],C=zl[h[R]],y=`${v}_${E}`,A=`${E}_${v}`;A in u&&u[A]?(Uu.dot(u[A].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(C.x,C.y,C.z)),u[A]=null):y in u||(u[y]={index0:c[w],index1:c[R],normal:Uu.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:g}=u[m];Bl.fromBufferAttribute(a,x),kl.fromBufferAttribute(a,g),f.push(Bl.x,Bl.y,Bl.z),f.push(kl.x,kl.y,kl.z)}this.setAttribute("position",new rn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ya=class n extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let w=p*u-o;for(let R=0;R<c;R++){let v=R*d-r;m.push(v,-w,0),x.push(0,0,1),g.push(R/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let R=w+c*p,v=w+c*(p+1),E=w+1+c*(p+1),M=w+1+c*p;f.push(R,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var va=class n extends Ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,u=new V,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let w=[],R=p/i,v=o+R*a,E=t*Math.cos(v),M=Math.sqrt(t*t-E*E),C=0;p===0&&o===0?C=.5/e:p===i&&l===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let A=y/e,I=s+A*r;d.x=-M*Math.cos(I),d.y=E,d.z=M*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(A+C,1-R),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){let R=h[p][w+1],v=h[p][w],E=h[p+1][w],M=h[p+1][w+1];(p!==0||o>0)&&f.push(R,v,M),(p!==i-1||l<Math.PI)&&f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ar(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(kp(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(kp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function _n(n){let t={};for(let e=0;e<n.length;e++){let i=ar(n[e]);for(let s in i)t[s]=i[s]}return t}function kp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function B_(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Cm={clone:ar,merge:_n},k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=B_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new He().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},uc=class extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var dc=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ou(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Cs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pc=class extends Cs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ku:r=t,a=2*e-i;break;case zu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:o=t,l=2*i-e;break;case zu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,w=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,R=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+w*o[c+E]+R*o[l+E]+v*o[d+E];return r}},mc=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},gc=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xc=class extends Cs{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*u+m*2,w=d[p],R=d[p+1],v=t*u+m*2,E=h[v],M=h[v+1],C=V_(i,e,w,E,s);r[m]=Rm(C,x,R,M,g)}return r}};function Rm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function H_(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function V_(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Rm(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=H_(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Wn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ou(t.settings)&&(i.settings={inTangents:Wr(t.settings.inTangents,Array),outTangents:Wr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case jo:e=this.InterpolantFactoryMethodDiscrete;break;case tc:e=this.InterpolantFactoryMethodLinear;break;case Gl:e=this.InterpolantFactoryMethodSmooth;break;case Fu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Gl;case this.InterpolantFactoryMethodBezier:return Fu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ou(this.settings)&&(zp(this.settings.inTangents,t),zp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&x_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ou(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=tc;var Rs=class extends Wn{constructor(t,e,i){super(t,e,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=jo;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};_c.prototype.ValueTypeName="color";var yc=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};yc.prototype.ValueTypeName="number";var vc=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ma=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Wn{constructor(t,e,i){super(t,e,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=jo;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};Mc.prototype.ValueTypeName="vector";var Sc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Im=new Sc,bc=class{constructor(t){this.manager=t!==void 0?t:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hl=new V,Vl=new Pn,Ai=new V,Sa=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hl,Vl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Hl,Vl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ws=new V,Hp=new se,Vp=new se,gn=class extends Sa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ws.x,ws.y).multiplyScalar(-t/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-t/ws.z)}getViewSize(t,e){return this.getViewBounds(t,Hp,Vp),e.subVectors(Vp,Hp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ba=class extends Sa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Xr=-90,qr=1,wc=class extends An{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Xr,qr,t,e);s.layers=this.layers,this.add(s);let r=new gn(Xr,qr,t,e);r.layers=this.layers,this.add(r);let o=new gn(Xr,qr,t,e);o.layers=this.layers,this.add(o);let a=new gn(Xr,qr,t,e);a.layers=this.layers,this.add(a);let l=new gn(Xr,qr,t,e);l.layers=this.layers,this.add(l);let c=new gn(Xr,qr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ec=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var md="\\[\\]\\.:\\/",G_=new RegExp("["+md+"]","g"),gd="[^"+md+"]",W_="[^"+md.replace("\\.","")+"]",X_=/((?:WC+[\/:])*)/.source.replace("WC",gd),q_=/(WCOD+)?/.source.replace("WCOD",W_),$_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gd),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gd),Z_=new RegExp("^"+X_+q_+$_+Y_+"$"),J_=["material","materials","bones","map"],Vu=class{constructor(t,e,i){let s=i||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G_,"")}static parseTrackName(t){let e=Z_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);J_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Vu;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iE=new Float32Array(1);var Gu=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function xd(n,t,e,i){let s=K_(i);switch(e){case ld:return n*t;case Lc:return n*t/s.components*s.byteLength;case Nc:return n*t/s.components*s.byteLength;case Us:return n*t*2/s.components*s.byteLength;case Dc:return n*t*2/s.components*s.byteLength;case cd:return n*t*3/s.components*s.byteLength;case si:return n*t*4/s.components*s.byteLength;case Uc:return n*t*4/s.components*s.byteLength;case Aa:case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fc:case kc:return Math.max(n,16)*Math.max(t,8)/4;case Oc:case Bc:return Math.max(n,8)*Math.max(t,8)/2;case zc:case Hc:case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vc:case Pa:case Xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case th:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case oh:case ah:case lh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ch:case hh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case La:case uh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(n){switch(n){case Xn:case sd:return{byteLength:1,components:1};case io:case rd:case xi:return{byteLength:2,components:1};case Ic:case Pc:return{byteLength:2,components:4};case gi:case Rc:case ii:return{byteLength:4,components:1};case od:case ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Q_(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ey=`#ifdef USE_ALPHAHASH
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
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
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
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
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
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fy=`#ifdef USE_IRIDESCENCE
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
#endif`,py=`#ifdef USE_BUMPMAP
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,by=`#define PI 3.141592653589793
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
} // validated`,wy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ey=`vec3 transformedNormal = objectNormal;
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
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hy=`#ifdef USE_GRADIENTMAP
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
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qy=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ky=`PhysicalMaterial material;
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
#endif`,jy=`uniform sampler2D dfgLUT;
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
}`,Qy=`
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ev=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
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
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kv=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$v=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,aM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,vM=`#define NORMAL
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
}`,MM=`#define NORMAL
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
}`,SM=`#define PHONG
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
}`,bM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,EM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,AM=`#define TOON
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
}`,CM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,PM=`uniform vec3 color;
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
}`,LM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:ty,alphahash_pars_fragment:ey,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:sy,alphatest_pars_fragment:ry,aomap_fragment:oy,aomap_pars_fragment:ay,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:hy,beginnormal_vertex:uy,bsdfs:dy,iridescence_fragment:fy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:_y,color_fragment:yy,color_pars_fragment:vy,color_pars_vertex:My,color_vertex:Sy,common:by,cube_uv_reflection_fragment:wy,defaultnormal_vertex:Ey,displacementmap_pars_vertex:Ty,displacementmap_vertex:Ay,emissivemap_fragment:Cy,emissivemap_pars_fragment:Ry,colorspace_fragment:Iy,colorspace_pars_fragment:Py,envmap_fragment:Ly,envmap_common_pars_fragment:Ny,envmap_pars_fragment:Dy,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:qy,envmap_vertex:Oy,fog_vertex:Fy,fog_pars_vertex:By,fog_fragment:ky,fog_pars_fragment:zy,gradientmap_pars_fragment:Hy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Xy,lights_toon_fragment:$y,lights_toon_pars_fragment:Yy,lights_phong_fragment:Zy,lights_phong_pars_fragment:Jy,lights_physical_fragment:Ky,lights_physical_pars_fragment:jy,lights_fragment_begin:Qy,lights_fragment_maps:tv,lights_fragment_end:ev,lightprobes_pars_fragment:nv,logdepthbuf_fragment:iv,logdepthbuf_pars_fragment:sv,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:ov,map_fragment:av,map_pars_fragment:lv,map_particle_fragment:cv,map_particle_pars_fragment:hv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:dv,morphinstance_vertex:fv,morphcolor_vertex:pv,morphnormal_vertex:mv,morphtarget_pars_vertex:gv,morphtarget_vertex:xv,normal_fragment_begin:_v,normal_fragment_maps:yv,normal_pars_fragment:vv,normal_pars_vertex:Mv,normal_vertex:Sv,normalmap_pars_fragment:bv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Ev,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Av,opaque_fragment:Cv,packing:Rv,premultiplied_alpha_fragment:Iv,project_vertex:Pv,dithering_fragment:Lv,dithering_pars_fragment:Nv,roughnessmap_fragment:Dv,roughnessmap_pars_fragment:Uv,shadowmap_pars_fragment:Ov,shadowmap_pars_vertex:Fv,shadowmap_vertex:Bv,shadowmask_pars_fragment:kv,skinbase_vertex:zv,skinning_pars_vertex:Hv,skinning_vertex:Vv,skinnormal_vertex:Gv,specularmap_fragment:Wv,specularmap_pars_fragment:Xv,tonemapping_fragment:qv,tonemapping_pars_fragment:$v,transmission_fragment:Yv,transmission_pars_fragment:Zv,uv_pars_fragment:Jv,uv_pars_vertex:Kv,uv_vertex:jv,worldpos_vertex:Qv,background_vert:tM,background_frag:eM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:sM,cube_frag:rM,depth_vert:oM,depth_frag:aM,distance_vert:lM,distance_frag:cM,equirect_vert:hM,equirect_frag:uM,linedashed_vert:dM,linedashed_frag:fM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:xM,meshmatcap_vert:_M,meshmatcap_frag:yM,meshnormal_vert:vM,meshnormal_frag:MM,meshphong_vert:SM,meshphong_frag:bM,meshphysical_vert:wM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:CM,points_frag:RM,shadow_vert:IM,shadow_frag:PM,sprite_vert:LM,sprite_frag:NM},wt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ki={basic:{uniforms:_n([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:_n([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:_n([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:_n([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:_n([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:_n([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:_n([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:_n([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:_n([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:_n([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:_n([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:_n([wt.common,wt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:_n([wt.lights,wt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ki.physical={uniforms:_n([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var ph={r:0,b:0,g:0},DM=new be,Qm=new Jt;Qm.set(-1,0,0,0,1,0,0,0,1);function UM(n,t,e,i,s,r){let o=new Gt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let v=w.backgroundBlurriness>0;R=t.get(R,v)}return R}function m(w){let R=!1,v=f(w);v===null?g(o,a):v&&v.isColor&&(g(v,1),R=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(w,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===Ea)?(c===void 0&&(c=new Ce(new Gn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ar(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(DM.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qm),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==Se,(h!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ce(new ya(2,2),new xn({name:"BackgroundMaterial",uniforms:ar(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,R){w.getRGB(ph,pd(n)),e.buffers.color.setClear(ph.r,ph.g,ph.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,R=1){o.set(w),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:m,addToRenderList:x,dispose:p}}function OM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(P,F,k,D,O){let Z=!1,Q=d(P,D,k,F);r!==Q&&(r=Q,c(r.object)),Z=f(P,D,k,O),Z&&m(P,D,k,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(P,F,k,D),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,F,k,D){let O=D.wireframe===!0,Z=i[F.id];Z===void 0&&(Z={},i[F.id]=Z);let Q=P.isInstancedMesh===!0?P.id:0,it=Z[Q];it===void 0&&(it={},Z[Q]=it);let H=it[k.id];H===void 0&&(H={},it[k.id]=H);let G=H[O];return G===void 0&&(G=u(l()),H[O]=G),G}function u(P){let F=[],k=[],D=[];for(let O=0;O<e;O++)F[O]=0,k[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,F,k,D){let O=r.attributes,Z=F.attributes,Q=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let tt=O[H],gt=Z[H];if(gt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),tt===void 0||tt.attribute!==gt||gt&&tt.data!==gt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==D}function m(P,F,k,D){let O={},Z=F.attributes,Q=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let tt=Z[H];tt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor));let gt={};gt.attribute=tt,tt&&tt.data&&(gt.data=tt.data),O[H]=gt,Q++}r.attributes=O,r.attributesNum=Q,r.index=D}function x(){let P=r.newAttributes;for(let F=0,k=P.length;F<k;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){let k=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;k[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),O[P]!==F&&(n.vertexAttribDivisor(P,F),O[P]=F)}function w(){let P=r.newAttributes,F=r.enabledAttributes;for(let k=0,D=F.length;k<D;k++)F[k]!==P[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function R(P,F,k,D,O,Z,Q){Q===!0?n.vertexAttribIPointer(P,F,k,O,Z):n.vertexAttribPointer(P,F,k,D,O,Z)}function v(P,F,k,D){x();let O=D.attributes,Z=k.getAttributes(),Q=F.defaultAttributeValues;for(let it in Z){let H=Z[it];if(H.location>=0){let G=O[it];if(G===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let tt=G.normalized,gt=G.itemSize,J=t.get(G);if(J===void 0)continue;let xt=J.buffer,yt=J.type,Tt=J.bytesPerElement,W=yt===n.INT||yt===n.UNSIGNED_INT||G.gpuType===Rc;if(G.isInterleavedBufferAttribute){let K=G.data,pt=K.stride,Pt=G.offset;if(K.isInstancedInterleavedBuffer){for(let vt=0;vt<H.locationSize;vt++)p(H.location+vt,K.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let vt=0;vt<H.locationSize;vt++)g(H.location+vt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let vt=0;vt<H.locationSize;vt++)R(H.location+vt,gt/H.locationSize,yt,tt,pt*Tt,(Pt+gt/H.locationSize*vt)*Tt,W)}else{if(G.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)p(H.location+K,G.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let K=0;K<H.locationSize;K++)g(H.location+K);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let K=0;K<H.locationSize;K++)R(H.location+K,gt/H.locationSize,yt,tt,gt*Tt,gt/H.locationSize*K*Tt,W)}}else if(Q!==void 0){let tt=Q[it];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(H.location,tt);break;case 3:n.vertexAttrib3fv(H.location,tt);break;case 4:n.vertexAttrib4fv(H.location,tt);break;default:n.vertexAttrib1fv(H.location,tt)}}}}w()}function E(){A();for(let P in i){let F=i[P];for(let k in F){let D=F[k];for(let O in D){let Z=D[O];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete D[O]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;let F=i[P.id];for(let k in F){let D=F[k];for(let O in D){let Z=D[O];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete D[O]}}delete i[P.id]}function C(P){for(let F in i){let k=i[F];for(let D in k){let O=k[D];if(O[P.id]===void 0)continue;let Z=O[P.id];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete O[P.id]}}}function y(P){for(let F in i){let k=i[F],D=P.isInstancedMesh===!0?P.id:0,O=k[D];if(O!==void 0){for(let Z in O){let Q=O[Z];for(let it in Q)h(Q[it].object),delete Q[it];delete O[Z]}delete k[D],Object.keys(k).length===0&&delete i[F]}}}function A(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function FM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function BM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==si&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Xn&&C!==ii&&!y&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:v,maxSamples:E,samples:M}}function kM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new fi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let w=r?0:i,R=w*4,v=p.clippingState||null;l.value=v,v=h(m,u,R,f);for(let E=0;E!==R;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,v=f;R!==x;++R,v+=4)o.copy(d[R]).applyMatrix4(w,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var oo=4,zM=6,HM=20,VM=256,Na=new ba,Pm=new Gt,_d=null,yd=0,vd=0,Md=!1,GM=new V,lr=new V,gh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=GM}=r;_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_d,yd,vd),this._renderer.xr.enabled=Md,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:xi,format:si,colorSpace:nr,depthBuffer:!1},s=Lm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=WM(r)),this._blurMaterial=qM(r,t,e),this._ggxMaterial=XM(r,t,e)}return s}_compileMaterial(t){let e=new Ce(new Ge,t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,i,s,r){let l=new gn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Pm),d.toneMapping=mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new Gn,new on({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,p=!0):(g.color.copy(Pm),p=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):v===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let E=this._cubeSize;ro(s,v*E,R>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ls||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Na)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-oo?i-m+oo:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,ro(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,ro(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Na)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-oo?s-this._lodMax+oo:0),u=4*(this._cubeSize-h);ro(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Na)}};function WM(n){let t=[],e=[],i=n,s=n-oo+1+zM;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,R=p>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];m.set(v,f*u*p);for(let E=0;E<u;E++){let M=h[E*2]*2-1,C=h[E*2+1]*2-1;p===0?lr.set(1,C,M):p===1?lr.set(-M,1,-C):p===2?lr.set(-M,C,1):p===3?lr.set(-1,C,-M):p===4?lr.set(-M,-1,C):lr.set(M,C,-1),lr.toArray(x,(p*u+E)*f)}}let g=new Ge;g.setAttribute("position",new ge(m,f)),g.setAttribute("outputDirection",new ge(x,f)),e.push(new Ce(g,null)),i>oo&&i--}return{lodMeshes:e,sizeLods:t}}function Lm(n,t,e){let i=new Ln(n,t,e);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function XM(n,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function qM(n,t,e){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:HM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Nm(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Dm(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xh=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ga(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Fi});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=cn),new wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function $M(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Tc||f===Ac)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new xh(m.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Tc||f===Ac,x=f===Ls||f===or;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new gh(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let w=u.image;return m&&w&&w.height>0||x&&w&&l(w)?(i===null&&(i=new gh(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Tc?u.mapping=Ls:f===Ac&&(u.mapping=or),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function YM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&er("WebGLRenderer: "+i+" extension not supported."),s}}}function ZM(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let w=f.array;x=f.version;for(let R=0,v=w.length;R<v;R+=3){let E=w[R+0],M=w[R+1],C=w[R+2];u.push(E,M,M,C,C,E)}}else{let w=m.array;x=m.version;for(let R=0,v=w.length/3-1;R<v;R+=3){let E=R+0,M=R+1,C=R+2;u.push(E,M,M,C,C,E)}}let g=new(m.count>=65535?la:aa)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function JM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function KM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function jM(n,t,e){let i=new WeakMap,s=new He;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],R=0;f===!0&&(R=1),m===!0&&(R=2),x===!0&&(R=3);let v=a.attributes.position.count*R,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*E*4*d),C=new ia(M,v,E,d);C.type=ii,C.needsUpdate=!0;let y=R*4;for(let I=0;I<d;I++){let P=g[I],F=p[I],k=w[I],D=v*E*4*I;for(let O=0;O<P.count;O++){let Z=O*y;f===!0&&(s.fromBufferAttribute(P,O),M[D+Z+0]=s.x,M[D+Z+1]=s.y,M[D+Z+2]=s.z,M[D+Z+3]=0),m===!0&&(s.fromBufferAttribute(F,O),M[D+Z+4]=s.x,M[D+Z+5]=s.y,M[D+Z+6]=s.z,M[D+Z+7]=0),x===!0&&(s.fromBufferAttribute(k,O),M[D+Z+8]=s.x,M[D+Z+9]=s.y,M[D+Z+10]=s.z,M[D+Z+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new se(v,E)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function QM(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var t1={[Ju]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[ju]:"CINEON_TONE_MAPPING",[Qu]:"ACES_FILMIC_TONE_MAPPING",[ed]:"AGX_TONE_MAPPING",[nd]:"NEUTRAL_TONE_MAPPING",[td]:"CUSTOM_TONE_MAPPING"};function e1(n,t,e,i,s,r){let o=new Ln(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ge;c.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new rn([0,2,0,0,2,0],2));let h=new uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ce(c,h),u=new ba(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,w=[],R=!1;this.setSize=function(v,E){o.setSize(v,E),a!==null&&a.setSize(v,E),l!==null&&l.setSize(v,E);for(let M=0;M<w.length;M++){let C=w[M];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){w=v,R=w.length>0&&w[0].isRenderPass===!0;let E=o.width,M=o.height;w.length>0&&a===null&&(a=new Ln(E,M,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(E,M,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let y=w[C];y.setSize&&y.setSize(E,M)}},this.begin=function(v,E){if(x||v.toneMapping===mi&&w.length===0)return!1;if(p=E,E!==null){let M=E.width,C=E.height;(o.width!==M||o.height!==C)&&this.setSize(M,C)}return R===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return R},this.end=function(v,E){v.toneMapping=g,x=!0;let M=o,C=a;for(let y=0;y<w.length;y++){let A=w[y];A.enabled!==!1&&(A.render(v,C,M,E),A.needsSwap!==!1&&(M=C,C=C===a?l:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},oe.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let y=t1[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var t0=new Tn,wd=new As(1,1),e0=new ia,n0=new sc,i0=new ga,Um=[],Om=[],Fm=new Float32Array(16),Bm=new Float32Array(9),km=new Float32Array(4);function lo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Um[s];if(r===void 0&&(r=new Float32Array(s),Um[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vh(n,t){let e=Om[t];e===void 0&&(e=new Int32Array(t),Om[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function n1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function i1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function s1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function r1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function o1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;km.set(i),n.uniformMatrix2fv(this.addr,!1,km),tn(e,i)}}function a1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Bm.set(i),n.uniformMatrix3fv(this.addr,!1,Bm),tn(e,i)}}function l1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Fm.set(i),n.uniformMatrix4fv(this.addr,!1,Fm),tn(e,i)}}function c1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function h1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function u1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function d1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function f1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function p1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function m1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function g1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function x1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wd.compareFunction=e.isReversedDepthBuffer()?fh:dh,r=wd):r=t0,e.setTexture2D(t||r,s)}function _1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||n0,s)}function y1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||i0,s)}function v1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||e0,s)}function M1(n){switch(n){case 5126:return n1;case 35664:return i1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return a1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return h1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return v1}}function S1(n,t){n.uniform1fv(this.addr,t)}function b1(n,t){let e=lo(t,this.size,2);n.uniform2fv(this.addr,e)}function w1(n,t){let e=lo(t,this.size,3);n.uniform3fv(this.addr,e)}function E1(n,t){let e=lo(t,this.size,4);n.uniform4fv(this.addr,e)}function T1(n,t){let e=lo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function A1(n,t){let e=lo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function C1(n,t){let e=lo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function R1(n,t){n.uniform1iv(this.addr,t)}function I1(n,t){n.uniform2iv(this.addr,t)}function P1(n,t){n.uniform3iv(this.addr,t)}function L1(n,t){n.uniform4iv(this.addr,t)}function N1(n,t){n.uniform1uiv(this.addr,t)}function D1(n,t){n.uniform2uiv(this.addr,t)}function U1(n,t){n.uniform3uiv(this.addr,t)}function O1(n,t){n.uniform4uiv(this.addr,t)}function F1(n,t,e){let i=this.cache,s=t.length,r=vh(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=wd:o=t0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function B1(n,t,e){let i=this.cache,s=t.length,r=vh(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||n0,r[o])}function k1(n,t,e){let i=this.cache,s=t.length,r=vh(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||i0,r[o])}function z1(n,t,e){let i=this.cache,s=t.length,r=vh(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||e0,r[o])}function H1(n){switch(n){case 5126:return S1;case 35664:return b1;case 35665:return w1;case 35666:return E1;case 35674:return T1;case 35675:return A1;case 35676:return C1;case 5124:case 35670:return R1;case 35667:case 35671:return I1;case 35668:case 35672:return P1;case 35669:case 35673:return L1;case 5125:return N1;case 36294:return D1;case 36295:return U1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return z1}}var Ed=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=M1(e.type)}},Td=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H1(e.type)}},Ad=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Sd=/(\w+)(\])?(\[|\.)?/g;function zm(n,t){n.seq.push(t),n.map[t.id]=t}function V1(n,t,e){let i=n.name,s=i.length;for(Sd.lastIndex=0;;){let r=Sd.exec(i),o=Sd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zm(e,c===void 0?new Ed(a,n,t):new Td(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Ad(a),zm(e,d)),e=d}}}var ao=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);V1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Hm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var G1=37297,W1=0;function X1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Vm=new Jt;function q1(n){oe._getMatrix(Vm,oe.workingColorSpace,n);let t=`mat3( ${Vm.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Qo:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+X1(n.getShaderSource(t),a)}else return r}function $1(n,t){let e=q1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Y1={[Ju]:"Linear",[Ku]:"Reinhard",[ju]:"Cineon",[Qu]:"ACESFilmic",[ed]:"AgX",[nd]:"Neutral",[td]:"Custom"};function Z1(n,t){let e=Y1[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mh=new V;function J1(){oe.getLuminanceCoefficients(mh);let n=mh.x.toFixed(4),t=mh.y.toFixed(4),e=mh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function j1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Q1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ua(n){return n!==""}function Wm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(n){return n.replace(tS,nS)}var eS=new Map;function nS(n,t){let e=ne[t];if(e===void 0){let i=eS.get(t);if(i!==void 0)e=ne[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cd(e)}var iS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(n){return n.replace(iS,sS)}function sS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $m(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var rS={[wa]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function oS(n){return rS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var aS={[Ls]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function lS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":aS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var cS={[or]:"ENVMAP_MODE_REFRACTION"};function hS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uS={[Zu]:"ENVMAP_BLENDING_MULTIPLY",[hm]:"ENVMAP_BLENDING_MIX",[um]:"ENVMAP_BLENDING_ADD"};function dS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uS[n.combine]||"ENVMAP_BLENDING_NONE"}function fS(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pS(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=oS(e),c=lS(e),h=hS(e),d=dS(e),u=fS(e),f=K1(e),m=j1(r),x=s.createProgram(),g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ua).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(g=[$m(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[$m(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ne.tonemapping_pars_fragment:"",e.toneMapping!==mi?Z1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,$1("linearToOutputTexel",e.outputColorSpace),J1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ua).join(`
`)),o=Cd(o),o=Wm(o,e),o=Xm(o,e),a=Cd(a),a=Wm(a,e),a=Xm(a,e),o=qm(o),a=qm(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=w+g+o,v=w+p+a,E=Hm(s,s.VERTEX_SHADER,R),M=Hm(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(M)||"",O=F.trim(),Z=k.trim(),Q=D.trim(),it=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,M);else{let G=Gm(s,E,"vertex"),tt=Gm(s,M,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+G+`
`+tt)}else O!==""?Wt("WebGLProgram: Program Info Log:",O):(Z===""||Q==="")&&(H=!1);H&&(P.diagnostics={runnable:it,programLog:O,vertexShader:{log:Z,prefix:g},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(E),s.deleteShader(M),y=new ao(s,x),A=Q1(s,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,G1)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=M,this}var mS=0,Rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Id(t),e.set(t,i)),i}},Id=class{constructor(t){this.id=mS++,this.code=t,this.usedTimes=0}};function gS(n){return n===Us||n===Pa||n===La}function xS(n,t,e,i,s,r){let o=new sa,a=new Rd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,I,P,F,k){let D=P.fog,O=F.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,it=t.get(y.envMap||Z,Q),H=it&&it.mapping===Ea?it.image.height:null,G=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Wt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,gt=tt!==void 0?tt.length:0,J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let xt,yt,Tt,W;if(G){let Ie=ki[G];xt=Ie.vertexShader,yt=Ie.fragmentShader}else{xt=y.vertexShader,yt=y.fragmentShader;let Ie=a.getVertexShaderStage(y),ve=a.getFragmentShaderStage(y);a.update(y,Ie,ve),Tt=Ie.id,W=ve.id}let K=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Pt=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,Bt=!!y.map,_e=!!y.matcap,Xt=!!it,Qt=!!y.aoMap,fe=!!y.lightMap,te=!!y.bumpMap&&y.wireframe===!1,S=!!y.normalMap,et=!!y.displacementMap,nt=!!y.emissiveMap,dt=!!y.metalnessMap,lt=!!y.roughnessMap,L=y.anisotropy>0,ye=y.clearcoat>0,ce=y.dispersion>0,b=y.retroreflectivity>0,_=y.iridescence>0,N=y.sheen>0,U=y.transmission>0,X=L&&!!y.anisotropyMap,rt=ye&&!!y.clearcoatMap,at=ye&&!!y.clearcoatNormalMap,Y=ye&&!!y.clearcoatRoughnessMap,st=_&&!!y.iridescenceMap,_t=_&&!!y.iridescenceThicknessMap,Lt=N&&!!y.sheenColorMap,mt=N&&!!y.sheenRoughnessMap,ft=!!y.specularMap,Nt=!!y.specularColorMap,Vt=!!y.specularIntensityMap,qt=U&&!!y.transmissionMap,z=U&&!!y.thicknessMap,Mt=!!y.gradientMap,ot=!!y.alphaMap,St=y.alphaTest>0,Ct=!!y.alphaHash,ct=!!y.extensions,Ht=mi;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let Ft={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:xt,fragmentShader:yt,defines:y.defines,customVertexShaderID:Tt,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&F.instanceColor!==null,instancingMorph:Pt&&F.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:_e,envMap:Xt,envMapMode:Xt&&it.mapping,envMapCubeUVHeight:H,aoMap:Qt,lightMap:fe,bumpMap:te,normalMap:S,displacementMap:et,emissiveMap:nt,normalMapObjectSpace:S&&y.normalMapType===pm,normalMapTangentSpace:S&&y.normalMapType===hd,packedNormalMap:S&&y.normalMapType===hd&&gS(y.normalMap.format),metalnessMap:dt,roughnessMap:lt,anisotropy:L,anisotropyMap:X,clearcoat:ye,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:Y,dispersion:ce,retroreflection:b,iridescence:_,iridescenceMap:st,iridescenceThicknessMap:_t,sheen:N,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:ft,specularColorMap:Nt,specularIntensityMap:Vt,transmission:U,transmissionMap:qt,thicknessMap:z,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===no&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:Ct,combine:y.combine,mapUv:Bt&&m(y.map.channel),aoMapUv:Qt&&m(y.aoMap.channel),lightMapUv:fe&&m(y.lightMap.channel),bumpMapUv:te&&m(y.bumpMap.channel),normalMapUv:S&&m(y.normalMap.channel),displacementMapUv:et&&m(y.displacementMap.channel),emissiveMapUv:nt&&m(y.emissiveMap.channel),metalnessMapUv:dt&&m(y.metalnessMap.channel),roughnessMapUv:lt&&m(y.roughnessMap.channel),anisotropyMapUv:X&&m(y.anisotropyMap.channel),clearcoatMapUv:rt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&m(y.sheenRoughnessMap.channel),specularMapUv:ft&&m(y.specularMap.channel),specularColorMapUv:Nt&&m(y.specularColorMap.channel),specularIntensityMapUv:Vt&&m(y.specularIntensityMap.channel),transmissionMapUv:qt&&m(y.transmissionMap.channel),thicknessMapUv:z&&m(y.thicknessMap.channel),alphaMapUv:ot&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(S||L),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Bt||ot),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&S===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:J,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ni,flipSided:y.side===Cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(A,y),w(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function w(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function R(y){let A=f[y.type],I;if(A){let P=ki[A];I=Cm.clone(P.uniforms)}else I=y.uniforms;return I}function v(y,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new pS(n,A,y,s),c.push(I),h.set(A,I)),I}function E(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:v,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:C}}function _S(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function yS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ym(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,g,p){let w=n[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},n[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=m,w.materialVariant=o(u),w.groupOrder=x,w.renderOrder=u.renderOrder,w.z=g,w.group=p),t++,w}function l(u,f,m,x,g,p,w){w.reversedDepth===!0&&(g=-g);let R=a(u,f,m,x,g,p);m.transmission>0?i.push(R):m.transparent===!0?s.push(R):e.push(R)}function c(u,f,m,x,g,p){let w=a(u,f,m,x,g,p);m.transmission>0?i.unshift(w):m.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,f){e.length>1&&e.sort(u||yS),i.length>1&&i.sort(f||Ym),s.length>1&&s.sort(f||Ym)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function vS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Zm,n.set(i,[o])):s>=r.length?(o=new Zm,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function MS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Gt};break;case"SpotLight":e={position:new V,direction:new V,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function SS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var bS=0;function wS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ES(n){let t=new MS,e=SS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,w=0,R=0,v=0,E=0,M=0,C=0,y=0,A=0,I=0;c.sort(wS);for(let F=0,k=c.length;F<k;F++){let D=c[F],O=D.color,Z=D.intensity,Q=D.distance,it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Us?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*Z,d+=O.g*Z,u+=O.b*Z;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],Z);I++}else if(D.isSunLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let G=D.shadow,tt=e.get(D);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[m]=tt,i.sunShadowMap[m]=it;let gt=G.getViewportCount();for(let J=0;J<gt;J++)i.sunShadowMatrix[x+J]=G.getMatrix(J),i.sunShadowCascade[x+J]=G._cascadeData[J];x+=gt,m++}i.sun[f]=H,f++}else if(D.isDirectionalLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let G=D.shadow,tt=e.get(D);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=D.shadow.matrix,E++}i.directional[g]=H,g++}else if(D.isSpotLight){let H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(O).multiplyScalar(Z),H.distance=Q,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[w]=H;let G=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,G.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[w]=G.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,i.spotShadow[w]=tt,i.spotShadowMap[w]=it,C++}w++}else if(D.isRectAreaLight){let H=t.get(D);H.color.copy(O).multiplyScalar(Z),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[R]=H,R++}else if(D.isPointLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let G=D.shadow,tt=e.get(D);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,tt.shadowCameraNear=G.camera.near,tt.shadowCameraFar=G.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=H,p++}else if(D.isHemisphereLight){let H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(Z),H.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[v]=H,v++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==w||P.rectAreaLength!==R||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==E||P.numPointShadows!==M||P.numSpotShadows!==C||P.numSpotMaps!==y||P.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=g,i.spot.length=w,i.rectArea.length=R,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=w,P.rectAreaLength=R,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=E,P.numPointShadows=M,P.numSpotShadows=C,P.numSpotMaps=y,P.numLightProbes=I,i.version=bS++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let v=c[w];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Jm(n){let t=new ES(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function TS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Jm(n),t.set(s,[a])):r>=o.length?(a=new Jm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var AS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
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
}`,RS=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],IS=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Km=new be,Da=new V,bd=new V;function PS(n,t,e){let i=new fa,s=new se,r=new se,o=new He,a=new dc,l=new fc,c={},h=e.maxTextureSize,d={[Ps]:Cn,[Cn]:Ps,[ni]:ni},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:AS,fragmentShader:CS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ce(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(M,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Xp&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wa);let A=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Fi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=M.length;D<O;D++){let Z=M[D],Q=Z.shadow;if(Q===void 0){Wt("WebGLShadowMap:",Z,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let it=Q.getFrameExtents();s.multiply(it),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,Q.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=H,Q.map===null||k===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===eo){if(Z.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Ln(s.x,s.y,{format:Us,type:xi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),Q.map.texture.name=Z.name+".shadowMap",Q.map.depthTexture=new As(s.x,s.y,ii),Q.map.depthTexture.name=Z.name+".shadowMapDepth",Q.map.depthTexture.format=Pi,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Xe,Q.map.depthTexture.magFilter=Xe}else Z.isPointLight?(Q.map=new xh(s.x),Q.map.depthTexture=new hc(s.x,gi)):(Q.map=new Ln(s.x,s.y),Q.map.depthTexture=new As(s.x,s.y,gi)),Q.map.depthTexture.name=Z.name+".shadowMap",Q.map.depthTexture.format=Pi,this.type===wa?(Q.map.depthTexture.compareFunction=H?fh:dh,Q.map.depthTexture.minFilter=cn,Q.map.depthTexture.magFilter=cn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Xe,Q.map.depthTexture.magFilter=Xe);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let G=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();Z.isPointLight!==!0&&Q.updateMatrices(Z,y);for(let tt=0;tt<G;tt++){let gt=Q.getCamera(tt);if(Z.isPointLight){let J=Q.camera,xt=Q.matrix,yt=Z.distance||J.far;yt!==J.far&&(J.far=yt,J.updateProjectionMatrix()),Da.setFromMatrixPosition(Z.matrixWorld),J.position.copy(Da),bd.copy(J.position),bd.add(RS[tt]),J.up.copy(IS[tt]),J.lookAt(bd),J.updateMatrixWorld(),xt.makeTranslation(-Da.x,-Da.y,-Da.z),Km.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Km,J.coordinateSystem,J.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)n.setRenderTarget(Q.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(Q.map),n.clear());let J=Q.getViewport(tt);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),F.viewport(o)}i=Q.getFrustum(tt),v(C,y,gt,Z,this.type)}Q.isPointLightShadow!==!0&&this.type===eo&&w(Q,y),Q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(A,I,P)};function w(M,C){let y=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ln(s.x,s.y,{format:Us,type:xi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,y,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,y,f,x,null)}function R(M,C,y,A){let I=null,P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=I.uuid,k=C.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let O=D[k];O===void 0&&(O=I.clone(),D[k]=O,C.addEventListener("dispose",E)),I=O}if(I.visible=C.visible,I.wireframe=C.wireframe,A===eo?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=n.properties.get(I);F.light=y}return I}function v(M,C,y,A,I){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===eo)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let k=t.update(M),D=M.material;if(Array.isArray(D)){let O=k.groups;for(let Z=0,Q=O.length;Z<Q;Z++){let it=O[Z],H=D[it.materialIndex];if(H&&H.visible){let G=R(M,H,A,I);M.onBeforeShadow(n,M,C,y,k,G,it),n.renderBufferDirect(y,null,k,G,M,it),M.onAfterShadow(n,M,C,y,k,G,it)}}}else if(D.visible){let O=R(M,D,A,I);M.onBeforeShadow(n,M,C,y,k,O,null),n.renderBufferDirect(y,null,k,O,M,null),M.onAfterShadow(n,M,C,y,k,O,null)}}let F=M.children;for(let k=0,D=F.length;k<D;k++)v(F[k],C,y,A,I)}function E(M){M.target.removeEventListener("dispose",E);for(let y in c){let A=c[y],I=M.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function LS(n,t){function e(){let z=!1,Mt=new He,ot=null,St=new He(0,0,0,0);return{setMask:function(Ct){ot!==Ct&&!z&&(n.colorMask(Ct,Ct,Ct,Ct),ot=Ct)},setLocked:function(Ct){z=Ct},setClear:function(Ct,ct,Ht,Ft,Ie){Ie===!0&&(Ct*=Ft,ct*=Ft,Ht*=Ft),Mt.set(Ct,ct,Ht,Ft),St.equals(Mt)===!1&&(n.clearColor(Ct,ct,Ht,Ft),St.copy(Mt))},reset:function(){z=!1,ot=null,St.set(-1,0,0,0)}}}function i(){let z=!1,Mt=!1,ot=null,St=null,Ct=null;return{setReversed:function(ct){if(Mt!==ct){let Ht=t.get("EXT_clip_control");ct?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;let Ft=Ct;Ct=null,this.setClear(Ft)}},getReversed:function(){return Mt},setTest:function(ct){ct?K(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ct){ot!==ct&&!z&&(n.depthMask(ct),ot=ct)},setFunc:function(ct){if(Mt&&(ct=Em[ct]),St!==ct){switch(ct){case ql:n.depthFunc(n.NEVER);break;case $l:n.depthFunc(n.ALWAYS);break;case Yl:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case Zl:n.depthFunc(n.EQUAL);break;case Jl:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=ct}},setLocked:function(ct){z=ct},setClear:function(ct){Ct!==ct&&(Ct=ct,Mt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){z=!1,ot=null,St=null,Ct=null,Mt=!1}}}function s(){let z=!1,Mt=null,ot=null,St=null,Ct=null,ct=null,Ht=null,Ft=null,Ie=null;return{setTest:function(ve){z||(ve?K(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(ve){Mt!==ve&&!z&&(n.stencilMask(ve),Mt=ve)},setFunc:function(ve,ci,Ei){(ot!==ve||St!==ci||Ct!==Ei)&&(n.stencilFunc(ve,ci,Ei),ot=ve,St=ci,Ct=Ei)},setOp:function(ve,ci,Ei){(ct!==ve||Ht!==ci||Ft!==Ei)&&(n.stencilOp(ve,ci,Ei),ct=ve,Ht=ci,Ft=Ei)},setLocked:function(ve){z=ve},setClear:function(ve){Ie!==ve&&(n.clearStencil(ve),Ie=ve)},reset:function(){z=!1,Mt=null,ot=null,St=null,Ct=null,ct=null,Ht=null,Ft=null,Ie=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,w=null,R=null,v=null,E=null,M=null,C=null,y=new Gt(0,0,0),A=0,I=!1,P=null,F=null,k=null,D=null,O=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,it=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=it>=1):H.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=it>=2);let G=null,tt={},gt=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),xt=new He().fromArray(gt),yt=new He().fromArray(J);function Tt(z,Mt,ot,St){let Ct=new Uint8Array(4),ct=n.createTexture();n.bindTexture(z,ct),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<ot;Ht++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(Mt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return ct}let W={};W[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Yr),te(!1),S(Wu),K(n.CULL_FACE),Qt(Fi);function K(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function pt(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Pt(z,Mt){return u[z]!==Mt?(n.bindFramebuffer(z,Mt),u[z]=Mt,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function vt(z,Mt){let ot=m,St=!1;if(z){ot=f.get(Mt),ot===void 0&&(ot=[],f.set(Mt,ot));let Ct=z.textures;if(ot.length!==Ct.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Ht=Ct.length;ct<Ht;ct++)ot[ct]=n.COLOR_ATTACHMENT0+ct;ot.length=Ct.length,St=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,St=!0);St&&n.drawBuffers(ot)}function Bt(z){return x!==z?(n.useProgram(z),x=z,!0):!1}let _e={[rr]:n.FUNC_ADD,[$p]:n.FUNC_SUBTRACT,[Yp]:n.FUNC_REVERSE_SUBTRACT};_e[Zp]=n.MIN,_e[Jp]=n.MAX;let Xt={[Kp]:n.ZERO,[jp]:n.ONE,[Qp]:n.SRC_COLOR,[$u]:n.SRC_ALPHA,[rm]:n.SRC_ALPHA_SATURATE,[im]:n.DST_COLOR,[em]:n.DST_ALPHA,[tm]:n.ONE_MINUS_SRC_COLOR,[Yu]:n.ONE_MINUS_SRC_ALPHA,[sm]:n.ONE_MINUS_DST_COLOR,[nm]:n.ONE_MINUS_DST_ALPHA,[om]:n.CONSTANT_COLOR,[am]:n.ONE_MINUS_CONSTANT_COLOR,[lm]:n.CONSTANT_ALPHA,[cm]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(z,Mt,ot,St,Ct,ct,Ht,Ft,Ie,ve){if(z===Fi){g===!0&&(pt(n.BLEND),g=!1);return}if(g===!1&&(K(n.BLEND),g=!0),z!==qp){if(z!==p||ve!==I){if((w!==rr||E!==rr)&&(n.blendEquation(n.FUNC_ADD),w=rr,E=rr),ve)switch(z){case no:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sr:n.blendFunc(n.ONE,n.ONE);break;case Xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$t("WebGLState: Invalid blending: ",z);break}else switch(z){case no:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xu:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",z);break}R=null,v=null,M=null,C=null,y.set(0,0,0),A=0,p=z,I=ve}return}Ct=Ct||Mt,ct=ct||ot,Ht=Ht||St,(Mt!==w||Ct!==E)&&(n.blendEquationSeparate(_e[Mt],_e[Ct]),w=Mt,E=Ct),(ot!==R||St!==v||ct!==M||Ht!==C)&&(n.blendFuncSeparate(Xt[ot],Xt[St],Xt[ct],Xt[Ht]),R=ot,v=St,M=ct,C=Ht),(Ft.equals(y)===!1||Ie!==A)&&(n.blendColor(Ft.r,Ft.g,Ft.b,Ie),y.copy(Ft),A=Ie),p=z,I=!1}function fe(z,Mt){z.side===ni?pt(n.CULL_FACE):K(n.CULL_FACE);let ot=z.side===Cn;Mt&&(ot=!ot),te(ot),z.blending===no&&z.transparent===!1?Qt(Fi):Qt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let St=z.stencilWrite;a.setTest(St),St&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),nt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){P!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),P=z)}function S(z){z!==Gp?(K(n.CULL_FACE),z!==F&&(z===Wu?n.cullFace(n.BACK):z===Wp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),F=z}function et(z){z!==k&&(Q&&n.lineWidth(z),k=z)}function nt(z,Mt,ot){z?(K(n.POLYGON_OFFSET_FILL),(D!==Mt||O!==ot)&&(D=Mt,O=ot,o.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,ot))):pt(n.POLYGON_OFFSET_FILL)}function dt(z){z?K(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function lt(z){z===void 0&&(z=n.TEXTURE0+Z-1),G!==z&&(n.activeTexture(z),G=z)}function L(z,Mt,ot){ot===void 0&&(G===null?ot=n.TEXTURE0+Z-1:ot=G);let St=tt[ot];St===void 0&&(St={type:void 0,texture:void 0},tt[ot]=St),(St.type!==z||St.texture!==Mt)&&(G!==ot&&(n.activeTexture(ot),G=ot),n.bindTexture(z,Mt||W[z]),St.type=z,St.texture=Mt)}function ye(){let z=tt[G];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function _(){try{n.texSubImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function N(){try{n.texSubImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function rt(){try{n.texStorage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function at(){try{n.texStorage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function Y(){try{n.texImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function st(){try{n.texImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function _t(z){return d[z]!==void 0?d[z]:n.getParameter(z)}function Lt(z,Mt){d[z]!==Mt&&(n.pixelStorei(z,Mt),d[z]=Mt)}function mt(z){xt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),xt.copy(z))}function ft(z){yt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),yt.copy(z))}function Nt(z,Mt){let ot=c.get(Mt);ot===void 0&&(ot=new WeakMap,c.set(Mt,ot));let St=ot.get(z);St===void 0&&(St=n.getUniformBlockIndex(Mt,z.name),ot.set(z,St))}function Vt(z,Mt){let St=c.get(Mt).get(z);l.get(Mt)!==St&&(n.uniformBlockBinding(Mt,St,z.__bindingPointIndex),l.set(Mt,St))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,tt={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,w=null,R=null,v=null,E=null,M=null,C=null,y=new Gt(0,0,0),A=0,I=!1,P=null,F=null,k=null,D=null,O=null,xt.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:pt,bindFramebuffer:Pt,drawBuffers:vt,useProgram:Bt,setBlending:Qt,setMaterial:fe,setFlipSided:te,setCullFace:S,setLineWidth:et,setPolygonOffset:nt,setScissorTest:dt,activeTexture:lt,bindTexture:L,unbindTexture:ye,compressedTexImage2D:ce,compressedTexImage3D:b,texImage2D:Y,texImage3D:st,pixelStorei:Lt,getParameter:_t,updateUBOMapping:Nt,uniformBlockBinding:Vt,texStorage2D:rt,texStorage3D:at,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:U,compressedTexSubImage3D:X,scissor:mt,viewport:ft,reset:qt}}function NS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,_){return m?new OffscreenCanvas(b,_):ea("canvas")}function g(b,_,N){let U=1,X=ce(b);if((X.width>N||X.height>N)&&(U=N/Math.max(X.width,X.height)),U<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let rt=Math.floor(U*X.width),at=Math.floor(U*X.height);u===void 0&&(u=x(rt,at));let Y=_?x(rt,at):u;return Y.width=rt,Y.height=at,Y.getContext("2d").drawImage(b,0,0,rt,at),Wt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+rt+"x"+at+")."),Y}else return"data"in b&&Wt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function p(b){return b.generateMipmaps}function w(b){n.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(b,_,N,U,X,rt=!1){if(b!==null){if(n[b]!==void 0)return n[b];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let at;U&&(at=t.get("EXT_texture_norm16"),at||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(N===n.FLOAT&&(Y=n.R32F),N===n.HALF_FLOAT&&(Y=n.R16F),N===n.UNSIGNED_BYTE&&(Y=n.R8),N===n.UNSIGNED_SHORT&&at&&(Y=at.R16_EXT),N===n.SHORT&&at&&(Y=at.R16_SNORM_EXT)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.R8UI),N===n.UNSIGNED_SHORT&&(Y=n.R16UI),N===n.UNSIGNED_INT&&(Y=n.R32UI),N===n.BYTE&&(Y=n.R8I),N===n.SHORT&&(Y=n.R16I),N===n.INT&&(Y=n.R32I)),_===n.RG&&(N===n.FLOAT&&(Y=n.RG32F),N===n.HALF_FLOAT&&(Y=n.RG16F),N===n.UNSIGNED_BYTE&&(Y=n.RG8),N===n.UNSIGNED_SHORT&&at&&(Y=at.RG16_EXT),N===n.SHORT&&at&&(Y=at.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RG8UI),N===n.UNSIGNED_SHORT&&(Y=n.RG16UI),N===n.UNSIGNED_INT&&(Y=n.RG32UI),N===n.BYTE&&(Y=n.RG8I),N===n.SHORT&&(Y=n.RG16I),N===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),N===n.UNSIGNED_INT&&(Y=n.RGB32UI),N===n.BYTE&&(Y=n.RGB8I),N===n.SHORT&&(Y=n.RGB16I),N===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),N===n.UNSIGNED_INT&&(Y=n.RGBA32UI),N===n.BYTE&&(Y=n.RGBA8I),N===n.SHORT&&(Y=n.RGBA16I),N===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_SHORT&&at&&(Y=at.RGB16_EXT),N===n.SHORT&&at&&(Y=at.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let st=rt?Qo:oe.getTransfer(X);N===n.FLOAT&&(Y=n.RGBA32F),N===n.HALF_FLOAT&&(Y=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Y=st===Se?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&at&&(Y=at.RGBA16_EXT),N===n.SHORT&&at&&(Y=at.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function E(b,_){let N;return b?_===null||_===gi||_===so?N=n.DEPTH24_STENCIL8:_===ii?N=n.DEPTH32F_STENCIL8:_===io&&(N=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===so?N=n.DEPTH_COMPONENT24:_===ii?N=n.DEPTH_COMPONENT32F:_===io&&(N=n.DEPTH_COMPONENT16),N}function M(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xe&&b.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function C(b){let _=b.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(b){let _=b.target;_.removeEventListener("dispose",y),P(_)}function A(b){let _=i.get(b);if(_.__webglInit===void 0)return;let N=b.source,U=f.get(N);if(U){let X=U[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(b),Object.keys(U).length===0&&f.delete(N)}i.remove(b)}function I(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let N=b.source,U=f.get(N);delete U[_.__cacheKey],o.memory.textures--}function P(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(_.__webglFramebuffer[U]))for(let X=0;X<_.__webglFramebuffer[U].length;X++)n.deleteFramebuffer(_.__webglFramebuffer[U][X]);else n.deleteFramebuffer(_.__webglFramebuffer[U]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[U])}else{if(Array.isArray(_.__webglFramebuffer))for(let U=0;U<_.__webglFramebuffer.length;U++)n.deleteFramebuffer(_.__webglFramebuffer[U]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let U=0;U<_.__webglColorRenderbuffer.length;U++)_.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[U]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=b.textures;for(let U=0,X=N.length;U<X;U++){let rt=i.get(N[U]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(N[U])}i.remove(b)}let F=0;function k(){F=0}function D(){return F}function O(b){F=b}function Z(){let b=F;return b>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,b}function Q(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function it(b,_){let N=i.get(b);if(b.isVideoTexture&&L(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let U=b.image;if(U===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(N,b,_);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function H(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){pt(N,b,_);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function G(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){pt(N,b,_);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function tt(b,_){let N=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&N.__version!==b.version){Pt(N,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}let gt={[Zr]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[Ql]:n.MIRRORED_REPEAT},J={[Xe]:n.NEAREST,[dm]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Cc]:n.LINEAR_MIPMAP_NEAREST,[Ns]:n.LINEAR_MIPMAP_LINEAR},xt={[gm]:n.NEVER,[Mm]:n.ALWAYS,[xm]:n.LESS,[dh]:n.LEQUAL,[_m]:n.EQUAL,[fh]:n.GEQUAL,[ym]:n.GREATER,[vm]:n.NOTEQUAL};function yt(b,_){if(_.type===ii&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===Cc||_.magFilter===Ta||_.magFilter===Ns||_.minFilter===cn||_.minFilter===Cc||_.minFilter===Ta||_.minFilter===Ns)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,gt[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,gt[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,gt[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,J[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,J[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xe||_.minFilter!==Ta&&_.minFilter!==Ns||_.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Tt(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",C));let U=_.source,X=f.get(U);X===void 0&&(X={},f.set(U,X));let rt=Q(_);if(rt!==b.__cacheKey){X[rt]===void 0&&(X[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),X[rt].usedTimes++;let at=X[b.__cacheKey];at!==void 0&&(X[b.__cacheKey].usedTimes--,at.usedTimes===0&&I(_)),b.__cacheKey=rt,b.__webglTexture=X[rt].texture}return N}function W(b,_,N){return Math.floor(Math.floor(b/N)/_)}function K(b,_,N,U){let rt=b.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,U,_.data);else{rt.sort((Lt,mt)=>Lt.start-mt.start);let at=0;for(let Lt=1;Lt<rt.length;Lt++){let mt=rt[at],ft=rt[Lt],Nt=mt.start+mt.count,Vt=W(ft.start,_.width,4),qt=W(mt.start,_.width,4);ft.start<=Nt+1&&Vt===qt&&W(ft.start+ft.count-1,_.width,4)===Vt?mt.count=Math.max(mt.count,ft.start+ft.count-mt.start):(++at,rt[at]=ft)}rt.length=at+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Lt=0,mt=rt.length;Lt<mt;Lt++){let ft=rt[Lt],Nt=Math.floor(ft.start/4),Vt=Math.ceil(ft.count/4),qt=Nt%_.width,z=Math.floor(Nt/_.width),Mt=Vt,ot=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,qt,z,Mt,ot,N,U,_.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function pt(b,_,N){let U=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=n.TEXTURE_3D);let X=Tt(b,_),rt=_.source;e.bindTexture(U,b.__webglTexture,n.TEXTURE0+N);let at=i.get(rt);if(rt.version!==at.__version||X===!0){if(e.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ot=oe.getPrimaries(oe.workingColorSpace),St=_.colorSpace===ri?null:oe.getPrimaries(_.colorSpace),Ct=_.colorSpace===ri||ot===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let st=g(_.image,!1,s.maxTextureSize);st=ye(_,st);let _t=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),mt=v(_.internalFormat,_t,Lt,_.normalized,_.colorSpace,_.isVideoTexture);yt(U,_);let ft,Nt=_.mipmaps,Vt=_.isVideoTexture!==!0,qt=at.__version===void 0||X===!0,z=rt.dataReady,Mt=M(_,st);if(_.isDepthTexture)mt=E(_.format===Ds,_.type),qt&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,mt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,mt,st.width,st.height,0,_t,Lt,null));else if(_.isDataTexture)if(Nt.length>0){Vt&&qt&&e.texStorage2D(n.TEXTURE_2D,Mt,mt,Nt[0].width,Nt[0].height);for(let ot=0,St=Nt.length;ot<St;ot++)ft=Nt[ot],Vt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,ft.width,ft.height,_t,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,ot,mt,ft.width,ft.height,0,_t,Lt,ft.data);_.generateMipmaps=!1}else Vt?(qt&&e.texStorage2D(n.TEXTURE_2D,Mt,mt,st.width,st.height),z&&K(_,st,_t,Lt)):e.texImage2D(n.TEXTURE_2D,0,mt,st.width,st.height,0,_t,Lt,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,mt,Nt[0].width,Nt[0].height,st.depth);for(let ot=0,St=Nt.length;ot<St;ot++)if(ft=Nt[ot],_.format!==si)if(_t!==null)if(Vt){if(z)if(_.layerUpdates.size>0){let Ct=xd(ft.width,ft.height,_.format,_.type);for(let ct of _.layerUpdates){let Ht=ft.data.subarray(ct*Ct/ft.data.BYTES_PER_ELEMENT,(ct+1)*Ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,ct,ft.width,ft.height,1,_t,Ht)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,ft.width,ft.height,st.depth,_t,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,mt,ft.width,ft.height,st.depth,0,ft.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,ft.width,ft.height,st.depth,_t,Lt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,mt,ft.width,ft.height,st.depth,0,_t,Lt,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Vt&&qt&&e.texStorage2D(n.TEXTURE_2D,Mt,mt,Nt[0].width,Nt[0].height);for(let ot=0,St=Nt.length;ot<St;ot++)ft=Nt[ot],_.format!==si?_t!==null?Vt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,ft.width,ft.height,_t,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,mt,ft.width,ft.height,0,ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,ft.width,ft.height,_t,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,ot,mt,ft.width,ft.height,0,_t,Lt,ft.data)}else if(_.isDataArrayTexture)if(Vt){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,mt,st.width,st.height,st.depth),z)if(_.layerUpdates.size>0){let ot=xd(st.width,st.height,_.format,_.type);for(let St of _.layerUpdates){let Ct=st.data.subarray(St*ot/st.data.BYTES_PER_ELEMENT,(St+1)*ot/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,st.width,st.height,1,_t,Lt,Ct)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Lt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,st.width,st.height,st.depth,0,_t,Lt,st.data);else if(_.isData3DTexture)Vt?(qt&&e.texStorage3D(n.TEXTURE_3D,Mt,mt,st.width,st.height,st.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Lt,st.data)):e.texImage3D(n.TEXTURE_3D,0,mt,st.width,st.height,st.depth,0,_t,Lt,st.data);else if(_.isFramebufferTexture){if(qt)if(Vt)e.texStorage2D(n.TEXTURE_2D,Mt,mt,st.width,st.height);else{let ot=st.width,St=st.height;for(let Ct=0;Ct<Mt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,mt,ot,St,0,_t,Lt,null),ot>>=1,St>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let ot=n.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),st.parentNode!==ot){ot.appendChild(st),d.add(_),ot.onpaint=St=>{let Ct=St.changedElements;for(let ct of d)Ct.includes(ct.image)&&(ct.needsUpdate=!0)},ot.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let Ct=n.RGBA,ct=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ct,ct,Ht,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Vt&&qt){let ot=ce(Nt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,mt,ot.width,ot.height)}for(let ot=0,St=Nt.length;ot<St;ot++)ft=Nt[ot],Vt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,_t,Lt,ft):e.texImage2D(n.TEXTURE_2D,ot,mt,_t,Lt,ft);_.generateMipmaps=!1}else if(Vt){if(qt){let ot=ce(st);e.texStorage2D(n.TEXTURE_2D,Mt,mt,ot.width,ot.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Lt,st)}else e.texImage2D(n.TEXTURE_2D,0,mt,_t,Lt,st);p(_)&&w(U),at.__version=rt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Pt(b,_,N){if(_.image.length!==6)return;let U=Tt(b,_),X=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);let rt=i.get(X);if(X.version!==rt.__version||U===!0){e.activeTexture(n.TEXTURE0+N);let at=oe.getPrimaries(oe.workingColorSpace),Y=_.colorSpace===ri?null:oe.getPrimaries(_.colorSpace),st=_.colorSpace===ri||at===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let _t=_.isCompressedTexture||_.image[0].isCompressedTexture,Lt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let ct=0;ct<6;ct++)!_t&&!Lt?mt[ct]=g(_.image[ct],!0,s.maxCubemapSize):mt[ct]=Lt?_.image[ct].image:_.image[ct],mt[ct]=ye(_,mt[ct]);let ft=mt[0],Nt=r.convert(_.format,_.colorSpace),Vt=r.convert(_.type),qt=v(_.internalFormat,Nt,Vt,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,Mt=rt.__version===void 0||U===!0,ot=X.dataReady,St=M(_,ft);yt(n.TEXTURE_CUBE_MAP,_);let Ct;if(_t){z&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,qt,ft.width,ft.height);for(let ct=0;ct<6;ct++){Ct=mt[ct].mipmaps;for(let Ht=0;Ht<Ct.length;Ht++){let Ft=Ct[Ht];_.format!==si?Nt!==null?z?ot&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,Ft.width,Ft.height,Nt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,qt,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,Ft.width,Ft.height,Nt,Vt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,qt,Ft.width,Ft.height,0,Nt,Vt,Ft.data)}}}else{if(Ct=_.mipmaps,z&&Mt){Ct.length>0&&St++;let ct=ce(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,qt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Lt){z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,mt[ct].width,mt[ct].height,Nt,Vt,mt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,mt[ct].width,mt[ct].height,0,Nt,Vt,mt[ct].data);for(let Ht=0;Ht<Ct.length;Ht++){let Ie=Ct[Ht].image[ct].image;z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,Ie.width,Ie.height,Nt,Vt,Ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,qt,Ie.width,Ie.height,0,Nt,Vt,Ie.data)}}else{z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,Vt,mt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,Nt,Vt,mt[ct]);for(let Ht=0;Ht<Ct.length;Ht++){let Ft=Ct[Ht];z?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,Nt,Vt,Ft.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,qt,Nt,Vt,Ft.image[ct])}}}p(_)&&w(n.TEXTURE_CUBE_MAP),rt.__version=X.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function vt(b,_,N,U,X,rt){let at=r.convert(N.format,N.colorSpace),Y=r.convert(N.type),st=v(N.internalFormat,at,Y,N.normalized,N.colorSpace),_t=i.get(_),Lt=i.get(N);if(Lt.__renderTarget=_,!_t.__hasExternalTextures){let mt=Math.max(1,_.width>>rt),ft=Math.max(1,_.height>>rt);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?e.texImage3D(X,rt,st,mt,ft,_.depth,0,at,Y,null):e.texImage2D(X,rt,st,mt,ft,0,at,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),lt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,X,Lt.__webglTexture,0,dt(_)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,X,Lt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(b,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let U=_.depthTexture,X=U&&U.isDepthTexture?U.type:null,rt=E(_.stencilBuffer,X),at=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;lt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(_),rt,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(_),rt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,rt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,b)}else{let U=_.textures;for(let X=0;X<U.length;X++){let rt=U[X],at=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),st=v(rt.internalFormat,at,Y,rt.normalized,rt.colorSpace);lt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(_),st,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(_),st,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,st,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(b,_,N){let U=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),yt(n.TEXTURE_CUBE_MAP,_.depthTexture);let _t=r.convert(_.depthTexture.format),Lt=r.convert(_.depthTexture.type),mt;_.depthTexture.format===Pi?mt=n.DEPTH_COMPONENT24:_.depthTexture.format===Ds&&(mt=n.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,mt,_.width,_.height,0,_t,Lt,null)}}else it(_.depthTexture,0);let rt=X.__webglTexture,at=dt(_),Y=U?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,st=_.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Pi)lt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,Y,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,st,Y,rt,0);else if(_.depthTexture.format===Ds)lt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,Y,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,st,Y,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(b){let _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let U=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),U){let X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,U.removeEventListener("dispose",X)};U.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=U}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let U=0;U<6;U++)_e(_.__webglFramebuffer[U],b,U);else{let U=b.texture.mipmaps;U&&U.length>0?_e(_.__webglFramebuffer[0],b,0):_e(_.__webglFramebuffer,b,0)}else if(N){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]===void 0)_.__webglDepthbuffer[U]=n.createRenderbuffer(),Bt(_.__webglDepthbuffer[U],b,!1);else{let X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,rt)}}else{let U=b.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Bt(_.__webglDepthbuffer,b,!1);else{let X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(b,_,N){let U=i.get(b);_!==void 0&&vt(U.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Xt(b)}function fe(b){let _=b.texture,N=i.get(b),U=i.get(_);b.addEventListener("dispose",y);let X=b.textures,rt=b.isWebGLCubeRenderTarget===!0,at=X.length>1;if(at||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=_.version,o.memory.textures++),rt){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let st=0;st<_.mipmaps.length;st++)N.__webglFramebuffer[Y][st]=n.createFramebuffer()}else N.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)N.__webglFramebuffer[Y]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(at)for(let Y=0,st=X.length;Y<st;Y++){let _t=i.get(X[Y]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&lt(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){let st=X[Y];N.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let _t=r.convert(st.format,st.colorSpace),Lt=r.convert(st.type),mt=v(st.internalFormat,_t,Lt,st.normalized,st.colorSpace,b.isXRRenderTarget===!0),ft=dt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,mt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),yt(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)vt(N.__webglFramebuffer[Y][st],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st);else vt(N.__webglFramebuffer[Y],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Y=0,st=X.length;Y<st;Y++){let _t=X[Y],Lt=i.get(_t),mt=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,Lt.__webglTexture),yt(mt,_t),vt(N.__webglFramebuffer,b,_t,n.COLOR_ATTACHMENT0+Y,mt,0),p(_t)&&w(mt)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,U.__webglTexture),yt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)vt(N.__webglFramebuffer[st],b,_,n.COLOR_ATTACHMENT0,Y,st);else vt(N.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,Y,0);p(_)&&w(Y),e.unbindTexture()}b.depthBuffer&&Xt(b)}function te(b){let _=b.textures;for(let N=0,U=_.length;N<U;N++){let X=_[N];if(p(X)){let rt=R(b),at=i.get(X).__webglTexture;e.bindTexture(rt,at),w(rt),e.unbindTexture()}}}let S=[],et=[];function nt(b){if(b.samples>0){if(lt(b)===!1){let _=b.textures,N=b.width,U=b.height,X=n.COLOR_BUFFER_BIT,rt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(b),Y=_.length>1;if(Y)for(let _t=0;_t<_.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let st=b.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[_t]);let Lt=i.get(_[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,N,U,0,0,N,U,X,n.NEAREST),l===!0&&(S.length=0,et.length=0,S.push(n.COLOR_ATTACHMENT0+_t),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(S.push(rt),et.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let _t=0;_t<_.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,at.__webglColorRenderbuffer[_t]);let Lt=i.get(_[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function dt(b){return Math.min(s.maxSamples,b.samples)}function lt(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(b){let _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function ye(b,_){let N=b.colorSpace,U=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==nr&&N!==ri&&(oe.getTransfer(N)===Se?(U!==si||X!==Xn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",N)),_}function ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Qt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function DS(n,t){function e(i,s=ri){let r,o=oe.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sd)return n.BYTE;if(i===rd)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===Rc)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===ld)return n.ALPHA;if(i===cd)return n.RGB;if(i===si)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===Lc)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===Us)return n.RG;if(i===Dc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===Aa||i===Ca||i===Ra||i===Ia)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===Fc||i===Bc||i===kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Hc||i===Vc||i===Gc||i===Wc||i===Pa||i===Xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Hc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gc)return r.COMPRESSED_R11_EAC;if(i===Wc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Pa)return r.COMPRESSED_RG11_EAC;if(i===Xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qc||i===$c||i===Yc||i===Zc||i===Jc||i===Kc||i===jc||i===Qc||i===th||i===eh||i===nh||i===ih||i===sh||i===rh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$c)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ih)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===ah||i===lh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===oh)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ch||i===hh||i===La||i===uh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ch)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var US=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
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

}`,Pd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new xa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new xn({vertexShader:US,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ld=class extends Li{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Pd,p={},w=e.getContextAttributes(),R=null,v=null,E=[],M=[],C=new se,y=null,A=null,I=new gn;I.viewport=new He;let P=new gn;P.viewport=new He;let F=[I,P],k=new Ec,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=E[W];return K===void 0&&(K=new jr,E[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=E[W];return K===void 0&&(K=new jr,E[W]=K),K.getGripSpace()},this.getHand=function(W){let K=E[W];return K===void 0&&(K=new jr,E[W]=K),K.getHandSpace()};function Z(W){let K=M.indexOf(W.inputSource);if(K===-1)return;let pt=E[K];pt!==void 0&&(pt.update(W.inputSource,W.frame,c||o),pt.dispatchEvent({type:W.type,data:W.inputSource}))}function Q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",it);for(let W=0;W<E.length;W++){let K=M[W];K!==null&&(M[W]=null,E[W].disconnect(K))}D=null,O=null,g.reset();for(let W in p)delete p[W];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,v=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),A!==null){let W=A.camera;W.fov=A.fov,W.zoom=A.zoom,W.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",it),w.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Pt=null,vt=null;w.depth&&(vt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?Ds:Pi,Pt=w.stencil?so:gi);let Bt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ln(u.textureWidth,u.textureHeight,{format:si,type:Xn,depthTexture:new As(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ln(f.framebufferWidth,f.framebufferHeight,{format:si,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(W){for(let K=0;K<W.removed.length;K++){let pt=W.removed[K],Pt=M.indexOf(pt);Pt>=0&&(M[Pt]=null,E[Pt].disconnect(pt))}for(let K=0;K<W.added.length;K++){let pt=W.added[K],Pt=M.indexOf(pt);if(Pt===-1){for(let Bt=0;Bt<E.length;Bt++)if(Bt>=M.length){M.push(pt),Pt=Bt;break}else if(M[Bt]===null){M[Bt]=pt,Pt=Bt;break}if(Pt===-1)break}let vt=E[Pt];vt&&vt.connect(pt)}}let H=new V,G=new V;function tt(W,K,pt){H.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(pt.matrixWorld);let Pt=H.distanceTo(G),vt=K.projectionMatrix.elements,Bt=pt.projectionMatrix.elements,_e=vt[14]/(vt[10]-1),Xt=vt[14]/(vt[10]+1),Qt=(vt[9]+1)/vt[5],fe=(vt[9]-1)/vt[5],te=(vt[8]-1)/vt[0],S=(Bt[8]+1)/Bt[0],et=_e*te,nt=_e*S,dt=Pt/(-te+S),lt=dt*-te;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(lt),W.translateZ(dt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),vt[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let L=_e+dt,ye=Xt+dt,ce=et-lt,b=nt+(Pt-lt),_=Qt*Xt/ye*L,N=fe*Xt/ye*L;W.projectionMatrix.makePerspective(ce,b,_,N,L,ye),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function gt(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let K=W.near,pt=W.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),k.near=P.near=I.near=K,k.far=P.far=I.far=pt,(D!==k.near||O!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,O=k.far),k.layers.mask=W.layers.mask|6,I.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Pt=W.parent,vt=k.cameras;gt(k,Pt);for(let Bt=0;Bt<vt.length;Bt++)gt(vt[Bt],Pt);vt.length===2?tt(k,I,P):k.projectionMatrix.copy(I.projectionMatrix),A===null&&W.isPerspectiveCamera&&(A={camera:W,fov:W.fov,zoom:W.zoom}),J(W,k,Pt)};function J(W,K,pt){pt===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(pt.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ec*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(W){return p[W]};let xt=null;function yt(W,K){if(h=K.getViewerPose(c||o),m=K,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Pt=!1;pt.length!==k.cameras.length&&(k.cameras.length=0,Pt=!0);for(let Xt=0;Xt<pt.length;Xt++){let Qt=pt[Xt],fe=null;if(f!==null)fe=f.getViewport(Qt);else{let S=d.getViewSubImage(u,Qt);fe=S.viewport,Xt===0&&(t.setRenderTargetTextures(v,S.colorTexture,S.depthStencilTexture),t.setRenderTarget(v))}let te=F[Xt];te===void 0&&(te=new gn,te.layers.enable(Xt),te.viewport=new He,F[Xt]=te),te.matrix.fromArray(Qt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(fe.x,fe.y,fe.width,fe.height),Xt===0&&(k.matrix.copy(te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pt===!0&&k.cameras.push(te)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Xt=d.getDepthInformation(pt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,s.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Xt=0;Xt<pt.length;Xt++){let Qt=pt[Xt].camera;if(Qt){let fe=p[Qt];fe||(fe=new xa,p[Qt]=fe);let te=d.getCameraImage(Qt);fe.sourceTexture=te}}}}for(let pt=0;pt<E.length;pt++){let Pt=M[pt],vt=E[pt];Pt!==null&&vt!==void 0&&vt.update(Pt,K,c||o)}xt&&xt(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}let Tt=new jm;Tt.setAnimationLoop(yt),this.setAnimationLoop=function(W){xt=W},this.dispose=function(){}}},FS=new be,s0=new Jt;s0.set(-1,0,0,0,1,0,0,0,1);function BS(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,pd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,R,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,w,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),R=w.envMap,v=w.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(FS.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(s0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=R*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let M=E.program;i.uniformBlockBinding(v,M)}function c(v,E){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",w));let C=E.program;i.updateUBOMapping(v,C);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let E=d();v.__bindingPointIndex=E;let M=n.createBuffer(),C=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],M=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,A=M.length;y<A;y++){let I=M[y];if(Array.isArray(I))for(let P=0,F=I.length;P<F;P++)f(I[P],y,P,C);else f(I,y,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,E,M,C){if(x(v,E,M,C)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let I=0;for(let P=0;P<A.length;P++){let F=A[P],k=p(F);m(F,v.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,v.__data)}}function m(v,E,M){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,M)}function x(v,E,M,C){let y=v.value,A=E+"_"+M;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{let I=C[A];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(v){let E=v.uniforms,M=0,C=16;for(let A=0,I=E.length;A<I;A++){let P=Array.isArray(E[A])?E[A]:[E[A]];for(let F=0,k=P.length;F<k;F++){let D=P[F],O=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,Q=O.length;Z<Q;Z++){let it=O[Z],H=p(it),G=M%C,tt=G%H.boundary,gt=G+tt;M+=tt,gt!==0&&C-gt<H.storage&&(M+=C-gt),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=H.storage}}}let y=M%C;return y>0&&(M+=C-y),v.__size=M,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",v),E}function w(v){let E=v.target;E.removeEventListener("dispose",w);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var zS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function HS(){return Bi===null&&(Bi=new ha(zS,16,16,Us,xi),Bi.name="DFG_LUT",Bi.minFilter=cn,Bi.magFilter=cn,Bi.wrapS=Ii,Bi.wrapT=Ii,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var _h=class{constructor(t={}){let{canvas:e=Sm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Xn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=f,g=new Set([Uc,Dc,Nc]),p=new Set([Xn,gi,io,so,Ic,Pc]),w=new Uint32Array(4),R=new Int32Array(4),v=new V,E=null,M=null,C=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,F=null,k=null,D=null,O=null;this._outputColorSpace=Vn;let Z=0,Q=0,it=null,H=-1,G=null,tt=new He,gt=new He,J=null,xt=new Gt(0),yt=0,Tt=e.width,W=e.height,K=1,pt=null,Pt=null,vt=new He(0,0,Tt,W),Bt=new He(0,0,Tt,W),_e=!1,Xt=new fa,Qt=!1,fe=!1,te=new be,S=new V,et=new He,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function lt(){return it===null?K:1}let L=i;function ye(T,B){return e.getContext(T,B)}let ce,b,_,N,U,X,rt,at,Y,st,_t,Lt,mt,ft,Nt,Vt,qt,z,Mt,ot,St,Ct,ct;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",ci,!1),L===null){let B="webgl2";if(L=ye(B,T),L===null)throw ye(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(T){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",ci,!1),$t("WebGLRenderer: "+T.message),T}function Ht(){ce=new YM(L),ce.init(),St=new DS(L,ce),b=new BM(L,ce,t,St),_=new LS(L,ce),b.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),k=L.createFramebuffer(),D=L.createFramebuffer(),O=L.createFramebuffer(),N=new KM(L),U=new _S,X=new NS(L,ce,_,U,b,St,N),rt=new $M(I),at=new Q_(L),Ct=new OM(L,at),Y=new ZM(L,at,N,Ct),st=new QM(L,Y,at,Ct,N),z=new jM(L,b,X),Nt=new kM(U),_t=new xS(I,rt,ce,b,Ct,Nt),Lt=new BS(I,U),mt=new vS,ft=new TS(ce),qt=new UM(I,rt,_,st,m,l),Vt=new PS(I,st,b),ct=new kS(L,N,b,_),Mt=new FM(L,ce,N),ot=new JM(L,ce,N),N.programs=_t.programs,I.capabilities=b,I.extensions=ce,I.properties=U,I.renderLists=mt,I.shadowMap=Vt,I.state=_,I.info=N}x!==Xn&&(A=new e1(x,e.width,e.height,a,s,r));let Ft=new Ld(I,L);this.xr=Ft,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(Tt,W,!1))},this.getSize=function(T){return T.set(Tt,W)},this.setSize=function(T,B,j=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=T,W=B,e.width=Math.floor(T*K),e.height=Math.floor(B*K),j===!0&&(e.style.width=T+"px",e.style.height=B+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Tt*K,W*K).floor()},this.setDrawingBufferSize=function(T,B,j){Tt=T,W=B,K=j,e.width=Math.floor(T*j),e.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===Xn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,B,j,q){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,B,j,q),_.viewport(tt.copy(vt).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,B,j,q){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,B,j,q),_.scissor(gt.copy(Bt).multiplyScalar(K).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){_.setScissorTest(_e=T)},this.setOpaqueSort=function(T){pt=T},this.setTransparentSort=function(T){Pt=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,j=!0){let q=0;if(T){let $=!1;if(it!==null){let At=it.texture.format;$=g.has(At)}if($){let At=it.texture.type,It=p.has(At),Et=qt.getClearColor(),Ut=qt.getClearAlpha(),kt=Et.r,ee=Et.g,le=Et.b;It?(w[0]=kt,w[1]=ee,w[2]=le,w[3]=Ut,L.clearBufferuiv(L.COLOR,0,w)):(R[0]=kt,R[1]=ee,R[2]=le,R[3]=Ut,L.clearBufferiv(L.COLOR,0,R))}else q|=L.COLOR_BUFFER_BIT}B&&(q|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",ci,!1),qt.dispose(),mt.dispose(),ft.dispose(),U.dispose(),rt.dispose(),st.dispose(),Ct.dispose(),ct.dispose(),_t.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",rp),Ft.removeEventListener("sessionend",op),Js.stop()};function Ie(T){T.preventDefault(),na("WebGLRenderer: Context Lost."),P=!0}function ve(){na("WebGLRenderer: Context Restored."),P=!1;let T=N.autoReset,B=Vt.enabled,j=Vt.autoUpdate,q=Vt.needsUpdate,$=Vt.type;Ht(),N.autoReset=T,Vt.enabled=B,Vt.autoUpdate=j,Vt.needsUpdate=q,Vt.type=$}function ci(T){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ei(T){let B=T.target;B.removeEventListener("dispose",Ei),c_(B)}function c_(T){h_(T),U.remove(T)}function h_(T){let B=U.get(T).programs;B!==void 0&&(B.forEach(function(j){_t.releaseProgram(j)}),T.isShaderMaterial&&_t.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,q,$,At){B===null&&(B=nt);let It=$.isMesh&&$.matrixWorld.determinantAffine()<0,Et=f_(T,B,j,q,$);_.setMaterial(q,It);let Ut=j.index,kt=1;if(q.wireframe===!0){if(Ut=Y.getWireframeAttribute(j),Ut===void 0)return;kt=2}let ee=j.drawRange,le=j.attributes.position,Ot=ee.start*kt,Me=(ee.start+ee.count)*kt;At!==null&&(Ot=Math.max(Ot,At.start*kt),Me=Math.min(Me,(At.start+At.count)*kt)),Ut!==null?(Ot=Math.max(Ot,0),Me=Math.min(Me,Ut.count)):le!=null&&(Ot=Math.max(Ot,0),Me=Math.min(Me,le.count));let Ye=Me-Ot;if(Ye<0||Ye===1/0)return;Ct.setup($,q,Et,j,Ut);let De,Ae=Mt;if(Ut!==null&&(De=at.get(Ut),Ae=ot,Ae.setIndex(De)),$.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*lt()),Ae.setMode(L.LINES)):Ae.setMode(L.TRIANGLES);else if($.isLine){let fn=q.linewidth;fn===void 0&&(fn=1),_.setLineWidth(fn*lt()),$.isLineSegments?Ae.setMode(L.LINES):$.isLineLoop?Ae.setMode(L.LINE_LOOP):Ae.setMode(L.LINE_STRIP)}else $.isPoints?Ae.setMode(L.POINTS):$.isSprite&&Ae.setMode(L.TRIANGLES);if($.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Ae.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let fn=$._multiDrawStarts,Rt=$._multiDrawCounts,wn=$._multiDrawCount,me=Ut?at.get(Ut).bytesPerElement:1,Qn=U.get(q).currentProgram.getUniforms();for(let Ti=0;Ti<wn;Ti++)Qn.setValue(L,"_gl_DrawID",Ti),Ae.render(fn[Ti]/me,Rt[Ti])}else if($.isInstancedMesh)Ae.renderInstances(Ot,Ye,$.count);else if(j.isInstancedBufferGeometry){let fn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Rt=Math.min(j.instanceCount,fn);Ae.renderInstances(Ot,Ye,Rt)}else Ae.render(Ot,Ye)};function sp(T,B,j,q){F!==null&&T.isNodeMaterial&&F.setObject(q,T),Qt===!0&&Nt.setState(T,j,!1),T.transparent===!0&&T.side===ni&&T.forceSinglePass===!1?(T.side=Cn,T.needsUpdate=!0,dl(T,B,q),T.side=Ps,T.needsUpdate=!0,dl(T,B,q),T.side=ni):dl(T,B,q)}this.compile=function(T,B,j=null){j===null&&(j=T),F!==null&&F.renderStart(T,B,j),M=ft.get(j),M.init(B),y.push(M),j.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),T!==j&&T.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),fe=this.localClippingEnabled,Qt=Nt.init(this.clippingPlanes,fe),Qt===!0&&Nt.setGlobalState(this.clippingPlanes,B),F!==null&&Vt.render(M.state.shadowsArray,j,B);let q=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let At=$.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let Et=At[It];sp(Et,j,B,$),q.add(Et)}else sp(At,j,B,$),q.add(At)}),M=y.pop(),F!==null&&F.renderEnd(),q},this.compileAsync=function(T,B,j=null){let q=this.compile(T,B,j);return new Promise($=>{function At(){if(q.forEach(function(It){let Ut=U.get(It).currentProgram;(Ut===void 0||Ut.isReady())&&q.delete(It)}),q.size===0){$(T);return}setTimeout(At,10)}ce.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let uu=null;function u_(T){uu&&uu(T)}function rp(){Js.stop()}function op(){Js.start()}let Js=new jm;Js.setAnimationLoop(u_),typeof self<"u"&&Js.setContext(self),this.setAnimationLoop=function(T){uu=T,Ft.setAnimationLoop(T),T===null?Js.stop():Js.start()},Ft.addEventListener("sessionstart",rp),Ft.addEventListener("sessionend",op),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(T,B);let j=Ft.enabled===!0&&Ft.isPresenting===!0,q=A!==null&&(it===null||j)&&A.begin(I,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(B),B=Ft.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,it),M=ft.get(T,y.length),M.init(B),M.state.textureUnits=X.getTextureUnits(),y.push(M),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Xt.setFromProjectionMatrix(te,pi,B.reversedDepth),fe=this.localClippingEnabled,Qt=Nt.init(this.clippingPlanes,fe),E=mt.get(T,C.length),E.init(),C.push(E),Ft.enabled===!0&&Ft.isPresenting===!0){let It=I.xr.getDepthSensingMesh();It!==null&&du(It,B,-1/0,I.sortObjects)}du(T,B,0,I.sortObjects),E.finish(),F!==null&&F.updateLights(M.state.lightsArray),I.sortObjects===!0&&E.sort(pt,Pt),dt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,dt&&qt.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&Nt.beginShadows();let $=M.state.shadowsArray;if(Vt.render($,T,B),Qt===!0&&Nt.endShadows(),(q&&A.hasRenderPass())===!1){let It=E.opaque,Et=E.transmissive;if(M.setupLights(),B.isArrayCamera){let Ut=B.cameras;if(Et.length>0)for(let kt=0,ee=Ut.length;kt<ee;kt++){let le=Ut[kt];lp(It,Et,T,le)}dt&&qt.render(T);for(let kt=0,ee=Ut.length;kt<ee;kt++){let le=Ut[kt];ap(E,T,le,le.viewport)}}else Et.length>0&&lp(It,Et,T,B),dt&&qt.render(T),ap(E,T,B)}it!==null&&Q===0&&(X.updateMultisampleRenderTarget(it),X.updateRenderTargetMipmap(it)),q&&A.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),Ct.resetDefaultState(),H=-1,G=null,y.pop(),y.length>0?(M=y[y.length-1],X.setTextureUnits(M.state.textureUnits),Qt===!0&&Nt.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function du(T,B,j,q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Xt)){q&&et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);let It=st.update(T),Et=T.material;Et.visible&&E.push(T,It,Et,j,et.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Xt))){let It=st.update(T),Et=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),et.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),et.copy(It.boundingSphere.center)),et.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Et)){let Ut=It.groups;for(let kt=0,ee=Ut.length;kt<ee;kt++){let le=Ut[kt],Ot=Et[le.materialIndex];Ot&&Ot.visible&&E.push(T,It,Ot,j,et.z,le,B)}}else Et.visible&&E.push(T,It,Et,j,et.z,null,B)}}let At=T.children;for(let It=0,Et=At.length;It<Et;It++)du(At[It],B,j,q)}function ap(T,B,j,q){let{opaque:$,transmissive:At,transparent:It}=T;M.setupLightsView(j),Qt===!0&&Nt.setGlobalState(I.clippingPlanes,j),q&&_.viewport(tt.copy(q)),$.length>0&&ul($,B,j),At.length>0&&ul(At,B,j),It.length>0&&ul(It,B,j),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function lp(T,B,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){let Ot=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Ln(1,1,{generateMipmaps:!0,type:Ot?xi:Xn,minFilter:Ns,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let At=M.state.transmissionRenderTarget[q.id],It=q.viewport||tt;At.setSize(It.z*I.transmissionResolutionScale,It.w*I.transmissionResolutionScale);let Et=I.getRenderTarget(),Ut=I.getActiveCubeFace(),kt=I.getActiveMipmapLevel();I.setRenderTarget(At),I.getClearColor(xt),yt=I.getClearAlpha(),yt<1&&I.setClearColor(16777215,.5),I.clear(),dt&&qt.render(j);let ee=I.toneMapping;I.toneMapping=mi;let le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),Qt===!0&&Nt.setGlobalState(I.clippingPlanes,q),ul(T,j,q),X.updateMultisampleRenderTarget(At),X.updateRenderTargetMipmap(At),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Me=0,Ye=B.length;Me<Ye;Me++){let De=B[Me],{object:Ae,geometry:fn,material:Rt,group:wn}=De;if(Rt.side===ni&&Ae.layers.test(q.layers)){let me=Rt.side;Rt.side=Cn,Rt.needsUpdate=!0,cp(Ae,j,q,fn,Rt,wn),Rt.side=me,Rt.needsUpdate=!0,Ot=!0}}Ot===!0&&(X.updateMultisampleRenderTarget(At),X.updateRenderTargetMipmap(At))}I.setRenderTarget(Et,Ut,kt),I.setClearColor(xt,yt),le!==void 0&&(q.viewport=le),I.toneMapping=ee}function ul(T,B,j){let q=B.isScene===!0?B.overrideMaterial:null;for(let $=0,At=T.length;$<At;$++){let It=T[$],{object:Et,geometry:Ut,group:kt}=It,ee=It.material;ee.allowOverride===!0&&q!==null&&(ee=q),Et.layers.test(j.layers)&&cp(Et,B,j,Ut,ee,kt)}}function cp(T,B,j,q,$,At){F!==null&&$.isNodeMaterial&&F.setObject(T,$),T.onBeforeRender(I,B,j,q,$,At),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(I,B,j,q,T,At),$.transparent===!0&&$.side===ni&&$.forceSinglePass===!1?($.side=Cn,$.needsUpdate=!0,I.renderBufferDirect(j,B,q,$,T,At),$.side=Ps,$.needsUpdate=!0,I.renderBufferDirect(j,B,q,$,T,At),$.side=ni):I.renderBufferDirect(j,B,q,$,T,At),T.onAfterRender(I,B,j,q,$,At)}function dl(T,B,j){B.isScene!==!0&&(B=nt);let q=U.get(T),$=M.state.lights,At=M.state.shadowsArray,It=$.state.version,Et=_t.getParameters(T,$.state,At,B,j,M.state.lightProbeGridArray),Ut=_t.getProgramCacheKey(Et),kt=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=rt.get(T.envMap||q.environment,ee),q.envMapRotation=q.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",Ei),kt=new Map,q.programs=kt);let le=kt.get(Ut);if(le!==void 0){if(q.currentProgram===le&&q.lightsStateVersion===It)return up(T,Et),le}else Et.uniforms=_t.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,j,Et),T.onBeforeCompile(Et,I),le=_t.acquireProgram(Et,Ut),kt.set(Ut,le),q.uniforms=Et.uniforms;let Ot=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=Nt.uniform),up(T,Et),q.needsLights=m_(T),q.lightsStateVersion=It,q.needsLights&&(Ot.ambientLightColor.value=$.state.ambient,Ot.lightProbe.value=$.state.probe,Ot.sunLights.value=$.state.sun,Ot.sunLightShadows.value=$.state.sunShadow,Ot.directionalLights.value=$.state.directional,Ot.directionalLightShadows.value=$.state.directionalShadow,Ot.spotLights.value=$.state.spot,Ot.spotLightShadows.value=$.state.spotShadow,Ot.rectAreaLights.value=$.state.rectArea,Ot.ltc_1.value=$.state.rectAreaLTC1,Ot.ltc_2.value=$.state.rectAreaLTC2,Ot.pointLights.value=$.state.point,Ot.pointLightShadows.value=$.state.pointShadow,Ot.hemisphereLights.value=$.state.hemi,Ot.sunShadowMatrix.value=$.state.sunShadowMatrix,Ot.sunShadowCascade.value=$.state.sunShadowCascade,Ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ot.spotLightMatrix.value=$.state.spotLightMatrix,Ot.spotLightMap.value=$.state.spotLightMap,Ot.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=le,q.uniformsList=null,le}function hp(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=ao.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function up(T,B){let j=U.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function d_(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let j=0,q=T.length;j<q;j++){let $=T[j];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function f_(T,B,j,q,$){B.isScene!==!0&&(B=nt),X.resetTextureUnits();let At=B.fog,It=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,Et=it===null?I.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oe.workingColorSpace,Ut=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,kt=rt.get(q.envMap||It,Ut),ee=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,le=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!j.morphAttributes.position,Me=!!j.morphAttributes.normal,Ye=!!j.morphAttributes.color,De=mi;q.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(De=I.toneMapping);let Ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,fn=Ae!==void 0?Ae.length:0,Rt=U.get(q),wn=M.state.lights;if(Qt===!0&&(fe===!0||T!==G)){let Pe=T===G&&q.id===H;Nt.setState(q,T,Pe)}let me=!1;q.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==wn.state.version||Rt.outputColorSpace!==Et||$.isBatchedMesh&&Rt.batching===!1||!$.isBatchedMesh&&Rt.batching===!0||$.isBatchedMesh&&Rt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Rt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||$.isInstancedMesh&&Rt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Rt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Rt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Rt.instancingMorph===!1&&$.morphTexture!==null||Rt.envMap!==kt||q.fog===!0&&Rt.fog!==At||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Nt.numPlanes||Rt.numIntersection!==Nt.numIntersection)||Rt.vertexAlphas!==ee||Rt.vertexTangents!==le||Rt.morphTargets!==Ot||Rt.morphNormals!==Me||Rt.morphColors!==Ye||Rt.toneMapping!==De||Rt.morphTargetsCount!==fn||!!Rt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Rt.__version=q.version);let Qn=Rt.currentProgram;me===!0&&(Qn=dl(q,B,$),F&&q.isNodeMaterial&&F.onUpdateProgram(q,Qn,Rt));let Ti=!1,xs=!1,Ar=!1,we=Qn.getUniforms(),We=Rt.uniforms;if(_.useProgram(Qn.program)&&(Ti=!0,xs=!0,Ar=!0),q.id!==H&&(H=q.id,xs=!0),Rt.needsLights){let Pe=d_(M.state.lightProbeGridArray,$);Rt.lightProbeGrid!==Pe&&(Rt.lightProbeGrid=Pe,xs=!0)}if(Ti||G!==T){_.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(L,"projectionMatrix",T.projectionMatrix),we.setValue(L,"viewMatrix",T.matrixWorldInverse);let ys=we.map.cameraPosition;ys!==void 0&&ys.setValue(L,S.setFromMatrixPosition(T.matrixWorld)),b.logarithmicDepthBuffer&&we.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&we.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,xs=!0,Ar=!0)}if(Rt.needsLights&&(wn.state.sunShadowMap.length>0&&we.setValue(L,"sunShadowMap",wn.state.sunShadowMap,X),wn.state.directionalShadowMap.length>0&&we.setValue(L,"directionalShadowMap",wn.state.directionalShadowMap,X),wn.state.spotShadowMap.length>0&&we.setValue(L,"spotShadowMap",wn.state.spotShadowMap,X),wn.state.pointShadowMap.length>0&&we.setValue(L,"pointShadowMap",wn.state.pointShadowMap,X)),$.isSkinnedMesh){we.setOptional(L,$,"bindMatrix"),we.setOptional(L,$,"bindMatrixInverse");let Pe=$.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),we.setValue(L,"boneTexture",Pe.boneTexture,X))}$.isBatchedMesh&&(we.setOptional(L,$,"batchingTexture"),we.setValue(L,"batchingTexture",$._matricesTexture,X),we.setOptional(L,$,"batchingIdTexture"),we.setValue(L,"batchingIdTexture",$._indirectTexture,X),we.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&we.setValue(L,"batchingColorTexture",$._colorsTexture,X));let _s=j.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&z.update($,j,Qn),(xs||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,we.setValue(L,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(We.envMapIntensity.value=B.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=HS()),xs){if(we.setValue(L,"toneMappingExposure",I.toneMappingExposure),Rt.needsLights&&p_(We,Ar),At&&q.fog===!0&&Lt.refreshFogUniforms(We,At),Lt.refreshMaterialUniforms(We,q,K,W,M.state.transmissionRenderTarget[T.id]),Rt.needsLights&&Rt.lightProbeGrid){let Pe=Rt.lightProbeGrid;We.probesSH.value=Pe.texture,We.probesMin.value.copy(Pe.boundingBox.min),We.probesMax.value.copy(Pe.boundingBox.max),We.probesResolution.value.copy(Pe.resolution)}ao.upload(L,hp(Rt),We,X)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ao.upload(L,hp(Rt),We,X),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&we.setValue(L,"center",$.center),we.setValue(L,"modelViewMatrix",$.modelViewMatrix),we.setValue(L,"normalMatrix",$.normalMatrix),we.setValue(L,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){let Pe=q.uniformsGroups;for(let ys=0,Cr=Pe.length;ys<Cr;ys++){let fp=Pe[ys];ct.update(fp,Qn),ct.bind(fp,Qn)}}return Qn}function p_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function m_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,B,j){let q=U.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),U.get(T.texture).__webglTexture=B,U.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let j=U.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,j=0){it=T,Z=B,Q=j;let q=null,$=!1,At=!1;if(T){let Et=U.get(T);if(Et.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,Et.__webglFramebuffer),tt.copy(T.viewport),gt.copy(T.scissor),J=T.scissorTest,_.viewport(tt),_.scissor(gt),_.setScissorTest(J),H=-1;return}else if(Et.__webglFramebuffer===void 0)X.setupRenderTarget(T);else if(Et.__hasExternalTextures)X.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ee=T.depthTexture;if(Et.__boundDepthTexture!==ee){if(ee!==null&&U.has(ee)&&(T.width!==ee.image.width||T.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(T)}}let Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(At=!0);let kt=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?q=kt[B][j]:q=kt[B],$=!0):T.samples>0&&X.useMultisampledRTT(T)===!1?q=U.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?q=kt[j]:q=kt,tt.copy(T.viewport),gt.copy(T.scissor),J=T.scissorTest}else tt.copy(vt).multiplyScalar(K).floor(),gt.copy(Bt).multiplyScalar(K).floor(),J=_e;if(j!==0&&(q=k),_.bindFramebuffer(L.FRAMEBUFFER,q)&&_.drawBuffers(T,q),_.viewport(tt),_.scissor(gt),_.setScissorTest(J),$){let Et=U.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,j)}else if(At){let Et=B;for(let Ut=0;Ut<T.textures.length;Ut++){let kt=U.get(T.textures[Ut]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ut,kt.__webglTexture,j,Et)}}else if(T!==null&&j!==0){let Et=U.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,j)}H=-1};function dp(T){let B=U.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=b.textureFormatReadable(T.format),B.__typeReadable=b.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,j,q,$,At,It,Et=0){if(!(T&&T.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){_.bindFramebuffer(L.FRAMEBUFFER,Ut);try{let kt=T.textures[Et],ee=kt.format,le=kt.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et);let Ot=dp(kt);if(Ot.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-q&&j>=0&&j<=T.height-$&&L.readPixels(B,j,q,$,St.convert(ee),St.convert(le),At)}finally{let kt=it!==null?U.get(it).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,B,j,q,$,At,It,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(B>=0&&B<=T.width-q&&j>=0&&j<=T.height-$){_.bindFramebuffer(L.FRAMEBUFFER,Ut);let kt=T.textures[Et],ee=kt.format,le=kt.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et);let Ot=dp(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,At.byteLength,L.STREAM_READ),L.readPixels(B,j,q,$,St.convert(ee),St.convert(le),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ye=it!==null?U.get(it).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ye);let De=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wm(L,De,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,At),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Me),L.deleteSync(De),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,j=0){let q=Math.pow(2,-j),$=Math.floor(T.image.width*q),At=Math.floor(T.image.height*q),It=B!==null?B.x:0,Et=B!==null?B.y:0;X.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,It,Et,$,At),_.unbindTexture()},this.copyTextureToTexture=function(T,B,j=null,q=null,$=0,At=0){let It,Et,Ut,kt,ee,le,Ot,Me,Ye,De=T.isCompressedTexture?T.mipmaps[At]:T.image;if(j!==null)It=j.max.x-j.min.x,Et=j.max.y-j.min.y,Ut=j.isBox3?j.max.z-j.min.z:1,kt=j.min.x,ee=j.min.y,le=j.isBox3?j.min.z:0;else{let We=Math.pow(2,-$);It=Math.floor(De.width*We),Et=Math.floor(De.height*We),T.isDataArrayTexture?Ut=De.depth:T.isData3DTexture?Ut=Math.floor(De.depth*We):Ut=1,kt=0,ee=0,le=0}q!==null?(Ot=q.x,Me=q.y,Ye=q.z):(Ot=0,Me=0,Ye=0);let Ae=St.convert(B.format),fn=St.convert(B.type),Rt;B.isData3DTexture?(X.setTexture3D(B,0),Rt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(X.setTexture2DArray(B,0),Rt=L.TEXTURE_2D_ARRAY):(X.setTexture2D(B,0),Rt=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let wn=_.getParameter(L.UNPACK_ROW_LENGTH),me=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=_.getParameter(L.UNPACK_SKIP_PIXELS),Ti=_.getParameter(L.UNPACK_SKIP_ROWS),xs=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),_.pixelStorei(L.UNPACK_SKIP_ROWS,ee),_.pixelStorei(L.UNPACK_SKIP_IMAGES,le);let Ar=T.isDataArrayTexture||T.isData3DTexture,we=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let We=U.get(T),_s=U.get(B),Pe=U.get(We.__renderTarget),ys=U.get(_s.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Pe.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,ys.__webglFramebuffer);for(let Cr=0;Cr<Ut;Cr++)Ar&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,U.get(T).__webglTexture,$,le+Cr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,U.get(B).__webglTexture,At,Ye+Cr)),L.blitFramebuffer(kt,ee,It,Et,Ot,Me,It,Et,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||U.has(T)){let We=U.get(T),_s=U.get(B);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Pe=0;Pe<Ut;Pe++)Ar?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,$,le+Pe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,$),we?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_s.__webglTexture,At,Ye+Pe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_s.__webglTexture,At),$!==0?L.blitFramebuffer(kt,ee,It,Et,Ot,Me,It,Et,L.COLOR_BUFFER_BIT,L.NEAREST):we?L.copyTexSubImage3D(Rt,At,Ot,Me,Ye+Pe,kt,ee,It,Et):L.copyTexSubImage2D(Rt,At,Ot,Me,kt,ee,It,Et);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Rt,At,Ot,Me,Ye,It,Et,Ut,Ae,fn,De.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Rt,At,Ot,Me,Ye,It,Et,Ut,Ae,De.data):L.texSubImage3D(Rt,At,Ot,Me,Ye,It,Et,Ut,Ae,fn,De):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,At,Ot,Me,It,Et,Ae,fn,De.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,At,Ot,Me,De.width,De.height,Ae,De.data):L.texSubImage2D(L.TEXTURE_2D,At,Ot,Me,It,Et,Ae,fn,De);_.pixelStorei(L.UNPACK_ROW_LENGTH,wn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),_.pixelStorei(L.UNPACK_SKIP_ROWS,Ti),_.pixelStorei(L.UNPACK_SKIP_IMAGES,xs),At===0&&B.generateMipmaps&&L.generateMipmap(Rt),_.unbindTexture()},this.initRenderTarget=function(T){U.get(T).__webglFramebuffer===void 0&&X.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?X.setTextureCube(T,0):T.isData3DTexture?X.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?X.setTexture2DArray(T,0):X.setTexture2D(T,0),_.unbindTexture()},this.resetState=function(){Z=0,Q=0,it=null,_.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function _i(n){let t=n|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function qn(n,t,e){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}var Fa=n=>n*n*n*(n*(n*6-15)+10),zi=(n,t,e)=>n+(t-n)*e,VS=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],GS=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Ba=class{constructor(t=1){let e=_i(t),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise2(t,e){let i=this.perm,s=Math.floor(t),r=Math.floor(e),o=t-s,a=e-r,l=s&255,c=r&255,h=(f,m,x,g)=>{let p=VS[i[i[f]+m]&7];return p[0]*x+p[1]*g},d=Fa(o),u=Fa(a);return zi(zi(h(l,c,o,a),h(l+1,c,o-1,a),d),zi(h(l,c+1,o,a-1),h(l+1,c+1,o-1,a-1),d),u)}noise3(t,e,i){let s=this.perm,r=Math.floor(t),o=Math.floor(e),a=Math.floor(i),l=t-r,c=e-o,h=i-a,d=r&255,u=o&255,f=a&255,m=(w,R,v,E,M,C)=>{let y=GS[s[s[s[w]+R]+v]%12];return y[0]*E+y[1]*M+y[2]*C},x=Fa(l),g=Fa(c),p=Fa(h);return zi(zi(zi(m(d,u,f,l,c,h),m(d+1,u,f,l-1,c,h),x),zi(m(d,u+1,f,l,c-1,h),m(d+1,u+1,f,l-1,c-1,h),x),g),zi(zi(m(d,u,f+1,l,c,h-1),m(d+1,u,f+1,l-1,c,h-1),x),zi(m(d,u+1,f+1,l,c-1,h-1),m(d+1,u+1,f+1,l-1,c-1,h-1),x),g),p)}fbm2(t,e,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise2(t*a,e*a),c+=o,o*=r,a*=s;return l/c}};var Nd={" ":["00000","00000","00000","00000","00000","00000","00000"],A:["01110","10001","10001","11111","10001","10001","10001"],B:["11110","10001","10001","11110","10001","10001","11110"],C:["01110","10001","10000","10000","10000","10001","01110"],D:["11110","10001","10001","10001","10001","10001","11110"],E:["11111","10000","10000","11110","10000","10000","11111"],F:["11111","10000","10000","11110","10000","10000","10000"],G:["01110","10001","10000","10111","10001","10001","01111"],H:["10001","10001","10001","11111","10001","10001","10001"],I:["01110","00100","00100","00100","00100","00100","01110"],J:["00111","00010","00010","00010","00010","10010","01100"],K:["10001","10010","10100","11000","10100","10010","10001"],L:["10000","10000","10000","10000","10000","10000","11111"],M:["10001","11011","10101","10101","10001","10001","10001"],N:["10001","11001","10101","10011","10001","10001","10001"],O:["01110","10001","10001","10001","10001","10001","01110"],P:["11110","10001","10001","11110","10000","10000","10000"],Q:["01110","10001","10001","10001","10101","10010","01101"],R:["11110","10001","10001","11110","10100","10010","10001"],S:["01111","10000","10000","01110","00001","00001","11110"],T:["11111","00100","00100","00100","00100","00100","00100"],U:["10001","10001","10001","10001","10001","10001","01110"],V:["10001","10001","10001","10001","10001","01010","00100"],W:["10001","10001","10001","10101","10101","11011","10001"],X:["10001","10001","01010","00100","01010","10001","10001"],Y:["10001","10001","01010","00100","00100","00100","00100"],Z:["11111","00001","00010","00100","01000","10000","11111"],0:["01110","10001","10011","10101","11001","10001","01110"],1:["00100","01100","00100","00100","00100","00100","01110"],2:["01110","10001","00001","00010","00100","01000","11111"],3:["11110","00001","00001","01110","00001","00001","11110"],4:["00010","00110","01010","10010","11111","00010","00010"],5:["11111","10000","11110","00001","00001","10001","01110"],6:["00110","01000","10000","11110","10001","10001","01110"],7:["11111","00001","00010","00100","01000","01000","01000"],8:["01110","10001","10001","01110","10001","10001","01110"],9:["01110","10001","10001","01111","00001","00010","01100"],"-":["00000","00000","00000","11111","00000","00000","00000"],".":["00000","00000","00000","00000","00000","01100","01100"],"!":["00100","00100","00100","00100","00100","00000","00100"],"&":["01100","10010","10100","01000","10101","10010","01101"],"'":["00100","00100","01000","00000","00000","00000","00000"]};function r0(n){let t=[];return[...n.toUpperCase()].forEach((e,i)=>{let s=Nd[e];s&&s.forEach((r,o)=>[...r].forEach((a,l)=>{a==="1"&&t.push([i*6+l,o])}))}),t}var Os=class extends Error{},o0=["blocks","items","loot","recipes","goals","textures","sounds","worldgen","game","music"],a0=["tilled","planted","ate","equipped"],l0=["noise","capped","bark","rings","planks","cells","waves","bricks","ore","stripes","blades","stalks","pixelart","image","layers","ref"],c0=/^[a-z][a-z0-9_]*$/,h0=typeof window>"u"&&typeof process<"u"&&!!process.versions?.node;async function WS(){if(globalThis.__VOXELCRAFT_CONTENT__)return structuredClone(globalThis.__VOXELCRAFT_CONTENT__);let n={},t=new URL("../data/",import.meta.url);if(h0){let e=await import("node:fs/promises"),i=await import("node:path"),{fileURLToPath:s}=await import("node:url"),r=process.env.VOXELCRAFT_DATA||s(t);for(let o of o0){let a=i.join(r,o+".json"),l;try{l=await e.readFile(a,"utf8")}catch{throw new Os(`Cannot read ${a}`)}try{n[o]=JSON.parse(l)}catch(c){throw new Os(`${o}.json is not valid JSON: ${c.message}`)}}return n}return await Promise.all(o0.map(async e=>{let i=await fetch(new URL(e+".json",t),{cache:"no-cache"});if(!i.ok)throw new Os(`Cannot load data/${e}.json (HTTP ${i.status})`);let s=await i.text();try{n[e]=JSON.parse(s)}catch(r){throw new Os(`data/${e}.json is not valid JSON: ${r.message}`)}})),n}function XS(n){let t=[],e=S=>t.push(S),i=S=>typeof S=="number"&&Number.isFinite(S),s=Array.isArray,r=n.blocks?.blocks,o=n.items?.items,a=n.items?.tiers||{},l=n.textures?.tiles||{},c=n.textures?.sprites||{},h=n.loot?.tables||{},d=n.sounds?.materials||{},u=n.recipes?.recipes,f=n.recipes?.groups||{},m=n.recipes?.stations||{},x=n.recipes?.windows||{};if(s(r)||e('blocks.json: "blocks" must be a list'),s(o)||e('items.json: "items" must be a list'),s(u)||e('recipes.json: "recipes" must be a list'),s(n.goals?.goals)||e('goals.json: "goals" must be a list'),t.length)throw new Os(t.join(`
`));let g=new Map,p=new Map,w=new Set,R=new Set,v=(S,et,nt)=>{if(typeof S!="string"||!c0.test(S)){e(`${nt}: key "${S}" must be lowercase letters, digits and underscores, starting with a letter`);return}if(!Number.isInteger(et)||et<1){e(`${nt}: "id" must be a positive whole number`);return}g.has(S)&&e(`${nt}: key "${S}" is used twice`),p.has(et)&&e(`${nt}: id ${et} is already used by "${p.get(et)}"`),g.set(S,et),p.set(et,S)};r.forEach((S,et)=>{v(S.key,S.id,`blocks.json #${et+1} (${S.key})`),Number.isInteger(S.id)&&S.id>255&&e(`blocks.json "${S.key}": block ids must be 1-255 (they are stored in one byte per block)`),w.add(S.key)}),o.forEach((S,et)=>{v(S.key,S.id,`items.json #${et+1} (${S.key})`),R.add(S.key)});let E=(S,et)=>g.has(S)?g.get(S):(e(`${et}: unknown block/item "${S}"`),0),M=(S,et)=>w.has(S)?g.get(S):(e(`${et}: "${S}" is not a block`),0),C=Object.keys(l);C.length||e("textures.json: no tiles defined");let y=(S,et,nt)=>{if(!et||typeof et!="object")return e(`textures.json tile "${nt}": must be an object`);if(!l0.includes(et.type))return e(`textures.json tile "${nt}": unknown type "${et.type}" (use one of ${l0.join(", ")})`);let dt=(lt,L)=>{l[lt]||e(`textures.json tile "${nt}": ${L} "${lt}" is not a tile`)};et.type==="capped"&&(dt(et.cap,"cap"),dt(et.body,"body")),et.type==="ore"&&dt(et.base,"base"),et.type==="ref"&&dt(et.tile,"tile"),et.type==="layers"&&(et.layers||[]).forEach((lt,L)=>y(S,lt,`${nt}.layers[${L}]`)),et.type==="pixelart"&&A(et,`tile "${nt}"`),et.type==="image"&&typeof et.src!="string"&&e(`textures.json tile "${nt}": image needs "src"`)};function A(S,et){if(!s(S.rows)||!S.rows.length)return e(`textures.json ${et}: pixelart needs "rows"`);(S.rows.length>16||S.rows.some(nt=>typeof nt!="string"||nt.length>16))&&e(`textures.json ${et}: pixelart is at most 16 rows of 16 characters`);for(let nt of S.rows)for(let dt of nt)if(dt!=="."&&!S.palette?.[dt]){e(`textures.json ${et}: character "${dt}" is not in the palette`);return}}for(let S of C)y(S,l[S],S);let I=Object.keys(x),P=r.map((S,et)=>{let nt=`blocks.json "${S.key}"`;for(let lt of["top","bottom","side"])l[S.tiles?.[lt]]||e(`${nt}: tiles.${lt} "${S.tiles?.[lt]}" is not defined in textures.json`);(!i(S.hardness)||S.hardness<0)&&e(`${nt}: "hardness" must be a number >= 0`),S.tool!=null&&typeof S.tool!="string"&&e(`${nt}: "tool" must be a string (pickaxe, axe, shovel, ...) or omitted`),S.loot!=null&&!h[S.loot]&&e(`${nt}: loot table "${S.loot}" is not defined in loot.json`),S.shatterLoot!=null&&!h[S.shatterLoot]&&e(`${nt}: shatterLoot table "${S.shatterLoot}" is not defined in loot.json`),S.role!=null&&!["log","leaf"].includes(S.role)&&e(`${nt}: "role" must be "log" or "leaf"`),S.opens!=null&&!x[S.opens]&&e(`${nt}: opens "${S.opens}" is not a window in recipes.json`),S.model!=null&&!(S.model.type==="torch"&&i(S.model.height)&&S.model.height>0&&S.model.height<=1)&&e(`${nt}: "model" must be { "type": "torch", "height": 0-1, "lean": [dx, dz] }`),S.model?.lean!=null&&!(s(S.model.lean)&&S.model.lean.length===2&&S.model.lean.every(Number.isInteger))&&e(`${nt}: model.lean must be [dx, dz]`),S.support!=null&&!(s(S.support)&&S.support.length===3&&S.support.every(Number.isInteger))&&e(`${nt}: "support" must be [dx, dy, dz]: where the block it hangs on is`),S.fuel!=null&&!(i(S.fuel)&&S.fuel>0)&&e(`${nt}: "fuel" must be the seconds it burns in a furnace`),S.glow!=null&&!(i(S.glow)&&S.glow>=0&&S.glow<=1)&&e(`${nt}: "glow" must be 0-1 (how much the block shines for itself, even in the dark)`);for(let lt of["light","lightFilter"])S[lt]!=null&&!(Number.isInteger(S[lt])&&S[lt]>=0&&S[lt]<=15)&&e(`${nt}: "${lt}" must be a whole number 0-15`);S.water&&!(Number.isInteger(S.water.level)&&S.water.level>=1&&S.water.level<=7)&&e(`${nt}: water.level must be 1-7 (7 = source)`);let dt={id:S.id,key:S.key,name:S.name??S.key,top:S.tiles?.top,bottom:S.tiles?.bottom,side:S.tiles?.side,hard:S.hardness??0,tool:S.tool??null,need:S.need??0,sound:S.sound??"default",solid:S.solid??!S.plant,opaque:S.opaque??!S.plant,creative:!!S.creative,waterLevel:S.water?S.water.level:0,role:S.role??null,opens:S.opens??null,gravity:!!S.gravity,model:S.model?{type:S.model.type,height:S.model.height,lean:S.model.lean??[0,0]}:null,support:S.support??null,fuel:S.fuel??0,glow:S.glow??0,light:S.light??0,lightFilter:S.lightFilter??0,hydration:null,loot:S.loot??(h[S.key]?S.key:null),shatterLoot:S.shatterLoot??null,tillsInto:S.tillsInto?M(S.tillsInto,`${nt} tillsInto`):0,spreadsOnto:S.spreadsOnto?M(S.spreadsOnto,`${nt} spreadsOnto`):0,plant:null};if(S.hydration){let lt=S.hydration;dt.hydration={wet:lt.wet?M(lt.wet,`${nt} hydration.wet`):0,dry:lt.dry?M(lt.dry,`${nt} hydration.dry`):0,decayInto:lt.decay?M(lt.decay.into,`${nt} hydration.decay.into`):0,decayRate:lt.decay?.chancePerSecond??0},!dt.hydration.wet&&!dt.hydration.dry&&e(`${nt}: hydration needs "wet" (the damp version) or "dry" (the dry version)`)}if(S.plant){let lt=S.plant;["cross","hash"].includes(lt.kind)||e(`${nt}: plant.kind must be "cross" or "hash"`),(!i(lt.height)||lt.height<=0||lt.height>1)&&e(`${nt}: plant.height must be between 0 and 1`),dt.plant={kind:lt.kind==="hash"?2:1,height:lt.height,growth:lt.growth?{next:M(lt.growth.next,`${nt} plant.growth.next`),rate:lt.growth.chancePerSecond??0,soil:M(lt.growth.soil,`${nt} plant.growth.soil`)}:null,stage:lt.stage?{label:lt.stage.label??dt.name,step:lt.stage.step??1,name:lt.stage.name??"",ripe:!!lt.stage.ripe,crop:!!lt.stage.crop}:null,grows:lt.grows?{trees:s(lt.grows.trees)?lt.grows.trees:[],rate:lt.grows.chancePerSecond??0,soil:(s(lt.grows.soil)?lt.grows.soil:[lt.grows.soil]).map(L=>M(L,`${nt} plant.grows.soil`))}:null,spreads:lt.spreads?{block:M(lt.spreads.block,`${nt} plant.spreads.block`),rate:lt.spreads.chancePerSecond??0,onto:M(lt.spreads.onto,`${nt} plant.spreads.onto`),range:lt.spreads.range??2}:null}}return dt}),F=(n.game?.equipment?.slots||[]).map(S=>S.id);F.length||e('game.json: "equipment.slots" must list the equipment slots');let k=o.map(S=>{let et=`items.json "${S.key}"`,nt=null;if(S.tool){let dt=a[S.tool.tier];dt||e(`${et}: tier "${S.tool.tier}" is not defined in items.json "tiers"`),typeof S.tool.type!="string"&&e(`${et}: tool.type is required`),nt={type:S.tool.type,tier:dt?.level??1,speed:dt?.speed??1,uses:dt?.durability??100,head:dt?.head??S.tool.tier}}return!c[S.key]&&!nt&&e(`${et}: no sprite - add "${S.key}" to textures.json "sprites"`),S.equip&&!F.includes(S.equip.slot)&&e(`${et}: equip.slot "${S.equip.slot}" is not one of the slots in game.json equipment (${F.join(", ")})`),S.equip&&![S.equip.armor??0,S.equip.slots??0].every(dt=>Number.isInteger(dt)&&dt>=0)&&e(`${et}: equip.armor and equip.slots must be whole numbers`),S.fuel!=null&&!(i(S.fuel)&&S.fuel>0)&&e(`${et}: "fuel" must be the seconds it burns in a furnace`),{id:S.id,key:S.key,name:S.name??S.key,stack:S.stack??(nt?1:64),tool:nt,food:S.food??0,fuel:S.fuel??0,creative:!!S.creative,offhand:!!S.offhand,equip:S.equip?{slot:S.equip.slot,armor:S.equip.armor??0,slots:S.equip.slots??0}:null,saturation:S.saturation??(S.food??0)*.6,places:S.places?Object.fromEntries(Object.entries(S.places).map(([dt,lt])=>(["up","north","south","east","west"].includes(dt)||e(`${et}: places.${dt} must be up, north, south, east or west (the face you click)`),[dt,M(lt,`${et} places.${dt}`)]))):null,plants:S.plants?{block:M(S.plants.block,`${et} plants.block`),on:[].concat(S.plants.on).map(dt=>M(dt,`${et} plants.on`))}:null}});for(let[S,et]of Object.entries(c))R.has(S)?et.type==="pixelart"&&A(et,`sprite "${S}"`):e(`textures.json sprite "${S}" does not match any item in items.json`);for(let[S,et]of Object.entries(n.textures?.toolHeads||{}))(!et.light||!et.base||!et.dark)&&e(`textures.json toolHeads "${S}" needs light, base and dark colours`);for(let S of o)S.tool&&!n.textures?.toolHeads?.[a[S.tool.tier]?.head??S.tool.tier]&&e(`items.json "${S.key}": no toolHeads colours for head "${a[S.tool.tier]?.head??S.tool.tier}" in textures.json`);let D={};for(let[S,et]of Object.entries(h)){if(!s(et)){e(`loot.json "${S}": must be a list of entries`);continue}D[S]=et.map((nt,dt)=>{let lt=`loot.json "${S}" #${dt+1}`,L=nt.chance??1;(!i(L)||L<0||L>1)&&e(`${lt}: chance must be 0-1`);let ye=nt.count??1,[ce,b]=s(ye)?ye:[ye,ye];return(!Number.isInteger(ce)||!Number.isInteger(b)||ce<0||b<ce)&&e(`${lt}: count must be a whole number or [min, max]`),{id:E(nt.item,lt),chance:L,min:ce,max:b}})}let O={};for(let[S,et]of Object.entries(f))O[S]=et.map(nt=>E(nt,`recipes.json group "${S}"`));let Z={};for(let[S,et]of Object.entries(m))Z[S]={label:et.label??S};let Q=u.map((S,et)=>{let nt=`recipes.json #${et+1} (${S.out})`;return S.at!=null&&!Z[S.at]&&e(`${nt}: station "${S.at}" is not defined in "stations"`),(!s(S.in)||!S.in.length)&&e(`${nt}: "in" needs at least one ingredient`),{out:E(S.out,nt),n:S.n??1,station:S.at??null,label:S.label??null,ins:(S.in||[]).map(([dt,lt])=>((!Number.isInteger(lt)||lt<1)&&e(`${nt}: ingredient counts must be whole numbers >= 1`),typeof dt=="string"&&dt.startsWith("@")?O[dt.slice(1)]?[O[dt.slice(1)],lt]:(e(`${nt}: unknown group "${dt}"`),[0,lt]):[E(dt,nt),lt]))}}),it={};for(let[S,et]of Object.entries(x)){for(let nt of et.stations||[])nt!==null&&!Z[nt]&&e(`recipes.json window "${S}": station "${nt}" is not defined`);it[S]={title:et.title??S,sub:et.sub??"",stations:et.stations??[null],furnace:!!et.furnace}}let H=(n.recipes.smelting||[]).map((S,et)=>{let nt=`recipes.json smelting #${et+1} (${S.in})`,dt=S.seconds??10;return(!i(dt)||dt<=0)&&e(`${nt}: "seconds" must be more than 0`),{in:E(S.in,nt),out:E(S.out,nt),seconds:dt}}),G=new Set;for(let S of H)G.has(S.in)&&e(`recipes.json smelting: "${p.get(S.in)}" is smelted twice`),G.add(S.in);let tt=new Map;for(let S of P)S.fuel&&tt.set(S.id,S.fuel);for(let S of k)S.fuel&&tt.set(S.id,S.fuel);it.hand||e('recipes.json: a "hand" window is required (the inventory)');let gt=n.goals.goals.map((S,et)=>{let nt=`goals.json #${et+1}`;if(typeof S.text!="string"&&e(`${nt}: "text" is required`),S.collectedAny){let dt=S.collectedAny.map(lt=>E(lt,nt));return{text:S.text,done:lt=>dt.some(L=>lt.collected.has(L))}}if(S.collected){let dt=E(S.collected,nt);return{text:S.text,done:lt=>lt.collected.has(dt)}}if(S.crafted){let dt=E(S.crafted,nt);return{text:S.text,done:lt=>lt.crafted.has(dt)}}if(S.craftedAny){let dt=S.craftedAny.map(lt=>E(lt,nt));return{text:S.text,done:lt=>dt.some(L=>lt.crafted.has(L))}}return S.flag?(a0.includes(S.flag)||e(`${nt}: flag "${S.flag}" is not one the game sets (${a0.join(", ")})`),{text:S.text,done:dt=>dt.flags.has(S.flag)}):(e(`${nt}: needs one of collected / collectedAny / crafted / craftedAny / flag`),{text:S.text,done:()=>!1})}),J=n.worldgen||{},xt={};for(let[S,et]of Object.entries(J.blocks||{}))S!=="fillerDepth"&&(xt[S]=M(et,`worldgen.json blocks.${S}`));let yt={...J,ids:xt,ores:(J.ores||[]).map((S,et)=>({...S,id:M(S.block,`worldgen.json ores[${et}]`)})),trees:{...J.trees,variants:(J.trees?.variants||[]).map((S,et)=>{let nt=`worldgen.json trees.variants[${et}] (${S.key})`;typeof S.key!="string"&&e(`${nt}: "key" is required`),["round","tall","cone","bush"].includes(S.shape)||e(`${nt}: shape must be round, tall, cone or bush`),(!i(S.weight)||S.weight<=0)&&e(`${nt}: weight must be more than 0`),s(S.trunk)&&S.trunk.length===2&&S.trunk.every(Number.isInteger)&&S.trunk[0]>=1&&S.trunk[1]>=S.trunk[0]||e(`${nt}: trunk must be [min, max] whole numbers`);let dt=S.heights??[0,99];return s(dt)&&dt.length===2&&dt[1]>=dt[0]||e(`${nt}: heights must be [lowest, highest] terrain height`),{key:S.key,weight:S.weight,shape:S.shape,trunk:S.trunk,heights:dt,biomes:s(S.biomes)?S.biomes:null,logId:M(S.log,`${nt} log`),leavesId:M(S.leaves,`${nt} leaves`)}})},biomes:J.biomes&&{...J.biomes,types:Object.fromEntries(Object.entries(J.biomes.types||{}).filter(([S])=>!S.startsWith("_")).map(([S,et])=>[S,{...et,surfaceId:M(et.surface,`worldgen.json biomes.types.${S} surface`),fillerId:M(et.filler,`worldgen.json biomes.types.${S} filler`)}]))},groundCover:{...J.groundCover,variants:(J.groundCover?.variants||[]).map((S,et)=>({...S,id:M(S.block,`worldgen.json groundCover.variants[${et}]`)}))}};if(yt.trees.variants.length||e("worldgen.json: trees.variants needs at least one tree"),yt.biomes){let S=Object.keys(yt.biomes.types);for(let et of["plains","forest","hills","mountains","desert","tundra"])S.includes(et)||e(`worldgen.json biomes.types needs "${et}"`);for(let et of yt.trees.variants)for(let nt of et.biomes??[])S.includes(nt)||e(`worldgen.json tree "${et.key}": biome "${nt}" is not in biomes.types`)}let Tt=new Set(yt.trees.variants.map(S=>S.key));for(let S of P)for(let et of S.plant?.grows?.trees??[])Tt.has(et)||e(`blocks.json "${S.key}": plant.grows.trees "${et}" is not a tree variant in worldgen.json`);let W={...n.game};W.creativeHotbarIds=(n.game?.creativeHotbar||[]).map(S=>M(S,"game.json creativeHotbar"));for(let S of["name","tagline"]){let et=W.studio?.[S];if(typeof et!="string"||!et.trim())e(`game.json studio.${S} must be some text`);else for(let nt of et.toUpperCase())Nd[nt]||e(`game.json studio.${S}: the logo font has no "${nt}" (letters, digits, space and - . ! & ' work)`)}["shatter","land"].includes(W.treeFall?.mode)||e('game.json treeFall.mode must be "shatter" or "land"');for(let S of Object.keys(d))s(d[S])||e(`sounds.json material "${S}" must be a list of layers`);for(let S of P)S.sound!=="default"&&!d[S.sound]&&e(`blocks.json "${S.key}": sound "${S.sound}" is not defined in sounds.json (using "default" is fine)`);let K={};for(let[S,et]of Object.entries(n.textures?.animations??{})){if(S.startsWith("_"))continue;let nt=`textures.json animations "${S}"`;l[S]||e(`${nt}: "${S}" is not a tile`),(!s(et.frames)||et.frames.length<2||et.frames[0]!==S||et.frames.some(dt=>!l[dt]))&&e(`${nt}: frames must list at least two tiles, starting with "${S}" itself`),(!i(et.fps)||et.fps<=0||et.fps>30)&&e(`${nt}: fps must be 1-30`),K[S]={frames:et.frames,fps:et.fps}}let pt=["piano","bell","pluck"],Pt=["triangle","strings"],vt=["sine","drone"],Bt=n.music??{},_e=S=>Number.isInteger(S)&&S>=24&&S<=100;(!s(Bt.tracks)||Bt.tracks.length<2)&&e('music.json: "tracks" must list at least two tracks');let Xt=Bt.gapSeconds??[5,12];s(Xt)&&Xt.length===2&&Xt.every(i)&&Xt[0]>=0&&Xt[1]>=Xt[0]||e('music.json: "gapSeconds" must be [min, max] seconds of silence between tracks');let Qt=new Set,fe=(s(Bt.tracks)?Bt.tracks:[]).map((S,et)=>{let nt=`music.json track #${et+1} (${S.key})`;(typeof S.key!="string"||!c0.test(S.key))&&e(`${nt}: "key" must be lowercase letters, digits and underscores`),Qt.has(S.key)&&e(`${nt}: key used twice`),Qt.add(S.key),typeof S.name!="string"&&e(`${nt}: "name" is required`),(!i(S.bpm)||S.bpm<30||S.bpm>160)&&e(`${nt}: bpm must be 30-160`),(!Number.isInteger(S.bars)||S.bars<4||S.bars>128)&&e(`${nt}: bars must be a whole number 4-128`);let dt=S.barsPerChord??1;(!Number.isInteger(dt)||dt<1)&&e(`${nt}: barsPerChord must be a whole number >= 1`),(!s(S.chords)||!S.chords.length)&&e(`${nt}: "chords" needs at least one chord`);for(let[L,ye]of(s(S.chords)?S.chords:[]).entries())_e(ye.root)||e(`${nt} chord #${L+1}: root must be a MIDI note 24-100`),(!s(ye.tones)||ye.tones.length<3||!ye.tones.every(_e))&&e(`${nt} chord #${L+1}: tones must be at least three MIDI notes 24-100`);S.pad!=null&&!Pt.includes(S.pad)&&e(`${nt}: pad must be one of ${Pt.join(", ")}`),S.bass!=null&&!vt.includes(S.bass)&&e(`${nt}: bass must be one of ${vt.join(", ")}`),S.lead&&!pt.includes(S.lead.voice)&&e(`${nt}: lead.voice must be one of ${pt.join(", ")}`),!S.lead&&!S.melody&&!S.arp&&e(`${nt}: needs a lead, a melody or an arp (something to play)`),S.arp&&(pt.includes(S.arp.voice)||e(`${nt}: arp.voice must be one of ${pt.join(", ")}`),(!s(S.arp.pattern)||!S.arp.pattern.length||!S.arp.pattern.every(L=>Number.isInteger(L)&&L>=0))&&e(`${nt}: arp.pattern must be a list of chord-tone numbers`),(!i(S.arp.step)||S.arp.step<=0||S.arp.step>4)&&e(`${nt}: arp.step must be 0-4 beats`)),S.melody&&!(s(S.melody)&&S.melody.every(L=>s(L)&&L.length===5&&Number.isInteger(L[0])&&L[0]>=0&&L[0]<S.bars&&i(L[1])&&L[1]>=0&&L[1]<4&&_e(L[2])&&i(L[3])&&L[3]>0&&i(L[4])))&&e(`${nt}: melody entries must be [bar, beat, midi note, beats, loudness] inside the track`);let lt=S.lead?.density??[.8,.45,.3];return s(lt)&&lt.length===3&&lt.every(L=>i(L)&&L>=0&&L<=1)||e(`${nt}: lead.density must be three chances 0-1`),{key:S.key,name:S.name,bpm:S.bpm,bars:S.bars,barsPerChord:dt,chords:S.chords??[],lead:S.lead?{voice:S.lead.voice,density:lt,leap:S.lead.leap??.1,rest:S.lead.rest??0}:null,pad:S.pad??null,bass:S.bass??null,arp:S.arp??null,melody:S.melody??null}});Qt.has(Bt.title)||e('music.json: "title" must name one of the tracks (the one the title screen plays)'),fe.filter(S=>S.key!==Bt.title).length<2&&e("music.json: the game needs at least two tracks besides the title theme, so there is something to shuffle");let te={gapSeconds:Xt,title:Bt.title,tracks:fe};if(t.length)throw new Os(`Content data problems:
 - `+t.join(`
 - `));return{music:te,animations:K,smelting:H,fuelTime:tt,data:n,blocks:P,items:k,idOfKey:g,keyOfId:p,tileNames:C,tiles:l,sprites:c,loot:D,groups:O,stations:Z,recipes:Q,windows:it,goals:gt,worldgen:yt,game:W,sounds:n.sounds,textures:n.textures,blockById:new Map(P.map(S=>[S.id,S])),itemById:new Map(k.map(S=>[S.id,S]))}}var u0;try{u0=XS(await WS())}catch(n){throw!h0&&typeof document<"u"&&(document.body.innerHTML=`<pre style="margin:0;padding:24px;min-height:100vh;box-sizing:border-box;background:#1b0f0f;color:#ffd6d6;font:14px/1.5 Consolas,monospace;white-space:pre-wrap"><b style="font-size:18px">VoxelCraft could not load its content files</b>

`+String(n.message).replace(/</g,"&lt;")+`

Fix the file(s) under src/data/ and reload. See src/data/README.md.</pre>`,await new Promise(()=>{})),n}var Dt=u0;var Kt={AIR:0};for(let n of Dt.blocks)Kt[n.key.toUpperCase()]=n.id;var yi=Dt.tileNames,Le=8,cr=Math.max(8,Math.ceil(yi.length/Le)),Dd=n=>yi.indexOf(n),Oe={};for(let n of Dt.blocks)Oe[n.id]={key:n.key,name:n.name,top:n.top,bottom:n.bottom,side:n.side,hard:n.hard,sound:n.sound,tool:n.tool,need:n.need,...n.plant?{plant:n.plant.kind===2?"hash":"cross",h:n.plant.height}:{}};var Je=256,co=new Uint16Array(Je*3),qe=new Uint8Array(Je),Nn=new Uint8Array(Je),pe=new Uint8Array(Je),Bs=new Uint8Array(Je),jt=new Uint8Array(Je),ho=new Float32Array(Je),Hi=new Int8Array(Je*2),vi=new Int8Array(Je*3),ka=new Uint8Array(Je),Fs=new Float32Array(Je),as=new Uint8Array(Je),Vi=new Uint8Array(Je),Mh=new Uint8Array(Je),za=new Uint8Array(Je),uo=new Uint8Array(Je),Gi=new Uint8Array(Je),Ud=new Float32Array(Je),Mi=new Uint8Array(Je),Ha=new Uint8Array(Je),Va=new Map,fo=new Map,Od=[0,0,0,0,0,0,0];for(let n of Dt.blocks)co[n.id*3]=Dd(n.top),co[n.id*3+1]=Dd(n.bottom),co[n.id*3+2]=Dd(n.side),Nn[n.id]=n.solid?1:0,qe[n.id]=n.opaque?1:0,n.waterLevel&&(pe[n.id]=1,Bs[n.id]=n.waterLevel,n.waterLevel<7&&(Od[n.waterLevel]=n.id)),n.plant&&(jt[n.id]=n.plant.kind,Fs[n.id]=n.plant.height,ho[n.id]=.4,Nn[n.id]=0,qe[n.id]=0),n.model?.type==="torch"&&(jt[n.id]=3,Fs[n.id]=n.model.height,ho[n.id]=.16,Nn[n.id]=0,qe[n.id]=0,Hi[n.id*2]=n.model.lean[0],Hi[n.id*2+1]=n.model.lean[1]),n.support&&(ka[n.id]=1,vi.set(n.support,n.id*3)),n.role==="log"&&(as[n.id]=1),n.role==="leaf"&&(Vi[n.id]=1),n.tillsInto&&(Mh[n.id]=n.tillsInto),n.spreadsOnto&&(za[n.id]=n.spreadsOnto),n.opens&&fo.set(n.id,n.opens),n.gravity&&(uo[n.id]=1),Gi[n.id]=n.light,Ud[n.id]=n.glow,Mi[n.id]=n.lightFilter,n.hydration&&(Va.set(n.id,n.hydration),Ha[n.id]=1);var Sh=[...Dt.blocks.filter(n=>n.creative).map(n=>n.id),...Dt.items.filter(n=>n.creative).map(n=>n.id)];var Dn=(n,t)=>(n+32768)*65536+(t+32768),ue=(n,t,e)=>(t*16+e)*16+n;var $n=0,ks=1,Ga=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,-1,0],[0,1,0]],Fd=Dt.game.lighting,Un=Fd.skyLevel,bh=Fd.minBrightness;function po(n){let t=Math.max(0,Math.min(Un,n))/Un;return Math.pow(t,Fd.gamma)}function f0(n){return bh+(1-bh)*po(n)}function Th(n){return Math.pow(Math.max(0,Math.min(Un,n))/Un,1.25)}var wh=32768,Rn=(n,t,e)=>((n+wh)*65536+(e+wh))*64+t;function d0(n,t){t[1]=n%64;let e=Math.floor(n/64);t[0]=Math.floor(e/65536)-wh,t[2]=e%65536-wh}var Eh=class{constructor(t){this.world=t,this.tmp=[0,0,0],this.carried=null,t.addChangeListener((e,i,s,r,o)=>this.onBlockChanged(e,i,s,r,o))}get hasEmitters(){return Gi.some(t=>t>0)}emitAt(t,e,i,s){let r=this.carried;return Math.max(Gi[s],r&&r.x===t&&r.y===e&&r.z===i?r.level:0)}setCarried(t,e,i,s){let r=this.carried;r&&s>0&&r.x===t&&r.y===e&&r.z===i&&r.level===s||!r&&!(s>0)||(this.carried=null,r&&this.refreshBlockLight(r.x,r.y,r.z),s>0&&this.world.getChunk(t>>4,i>>4)&&e>=0&&e<64&&!qe[this.world.getBlock(t,e,i)]&&(this.carried={x:t,y:e,z:i,level:s},this.refreshBlockLight(t,e,i)))}refreshBlockLight(t,e,i){let s=this.world.getBlock(t,e,i),r=[],o=[],a=this.get(t,e,i,ks);a>0&&(r.push([Rn(t,e,i),a]),this.set(t,e,i,ks,0));let l=this.emitAt(t,e,i,s);l>0&&(this.set(t,e,i,ks,l),o.push(Rn(t,e,i)));for(let[c,h,d]of Ga)this.get(t+c,e+h,i+d,ks)>0&&o.push(Rn(t+c,e+h,i+d));o.push(...this.unspread(ks,r)),this.propagate(ks,o)}get(t,e,i,s){if(e<0||e>=64)return-1;let r=this.world.getChunk(t>>4,i>>4);if(!r)return-1;let o=r.light[ue(t&15,e,i&15)];return s===$n?o>>4:o&15}levelAt(t,e,i){if(e>=64)return Un;if(e<0)return 0;let s=this.world.getChunk(t>>4,i>>4);if(!s)return Un;let r=s.light[ue(t&15,e,i&15)];return Math.max(r>>4,r&15)}set(t,e,i,s,r){let o=this.world.getChunk(t>>4,i>>4),a=ue(t&15,e,i&15),l=o.light[a];o.light[a]=s===$n?r<<4|l&15:l&240|r,o.dirty=!0;let c=t&15,h=i&15,d=t>>4,u=i>>4,f=(m,x)=>{let g=this.world.getChunk(m,x);g&&(g.dirty=!0)};c===0?f(d-1,u):c===15&&f(d+1,u),h===0?f(d,u-1):h===15&&f(d,u+1)}propagate(t,e){let i=this.world,s=this.tmp;for(let r=0;r<e.length;r++){d0(e[r],s);let o=s[0],a=s[1],l=s[2],c=this.get(o,a,l,t);if(!(c<=1))for(let[h,d,u]of Ga){let f=o+h,m=a+d,x=l+u;if(m<0||m>=64)continue;let g=i.getChunk(f>>4,x>>4);if(!g)continue;let p=g.data[ue(f&15,m,x&15)];if(qe[p])continue;let w=t===$n&&d===-1&&c===Un&&Mi[p]===0?Un:c-Math.max(1,Mi[p]);w>this.get(f,m,x,t)&&(this.set(f,m,x,t,w),e.push(Rn(f,m,x)))}}}unspread(t,e){let i=this.world,s=this.tmp,r=[];for(let o=0;o<e.length;o++){let[a,l]=e[o];d0(a,s);let c=s[0],h=s[1],d=s[2];for(let[u,f,m]of Ga){let x=c+u,g=h+f,p=d+m,w=this.get(x,g,p,t);if(w<=0)continue;let R=i.getBlock(x,g,p);if(w<l||t===$n&&f===-1&&l===Un&&w===Un&&Mi[R]===0){if(t===ks&&this.emitAt(x,g,p,R)>0){this.set(x,g,p,t,this.emitAt(x,g,p,R)),r.push(Rn(x,g,p));continue}this.set(x,g,p,t,0),e.push([Rn(x,g,p),w])}else r.push(Rn(x,g,p))}}return r}directColumn(t,e,i=-1,s=0){let r=new Int8Array(64),o=this.world.getChunk(t>>4,e>>4),a=Un;for(let l=63;l>=0;l--){let c=l===i?s:o.data[ue(t&15,l,e&15)];qe[c]?a=0:a=Math.max(0,a-Mi[c]),r[l]=a}return r}initChunk(t,{clear:e=!0}={}){let i=this.world,s=t.data,r=t.cx*16,o=t.cz*16;e&&t.light.fill(0);let a=this.hasEmitters;for(let u=0;u<16;u++)for(let f=0;f<16;f++){let m=Un;for(let x=63;x>=0;x--){let g=ue(f,x,u),p=s[g];qe[p]?m=0:m=Math.max(0,m-Mi[p]);let w=m<<4;a&&Gi[p]>0&&(w|=Gi[p]),t.light[g]=w}}let l=this.carried;if(l&&l.x>=r&&l.x<r+16&&l.z>=o&&l.z<o+16&&!qe[s[ue(l.x-r,l.y,l.z-o)]]){let u=ue(l.x-r,l.y,l.z-o),f=t.light[u];(f&15)<l.level&&(t.light[u]=f&240|l.level)}let c=[],h=[],d=(u,f)=>u===0||f===0||u===15||f===15;for(let u=0;u<64;u++)for(let f=0;f<16;f++)for(let m=0;m<16;m++){let x=t.light[ue(m,u,f)],g=x>>4,p=x&15;if(g<=1&&p<=1)continue;let w=d(m,f);if(!w)for(let[R,v,E]of Ga){let M=u+v;if(M<0||M>=64)continue;let C=ue(m+R,M,f+E);if(qe[s[C]])continue;let y=t.light[C];if(y>>4<g-1||(y&15)<p-1){w=!0;break}}w&&(g>1&&c.push(Rn(r+m,u,o+f)),p>1&&h.push(Rn(r+m,u,o+f)))}for(let[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){let m=i.getChunk(t.cx+u,t.cz+f);if(m)for(let x=0;x<64;x++)for(let g=0;g<16;g++){let p=u===1?0:u===-1?15:g,w=f===1?0:f===-1?15:g,R=m.light[ue(p,x,w)];R>>4>1&&c.push(Rn(m.cx*16+p,x,m.cz*16+w)),(R&15)>1&&h.push(Rn(m.cx*16+p,x,m.cz*16+w))}}this.propagate($n,c),this.propagate(ks,h)}rebuildAll(){let t=[...this.world.chunks.values()];for(let e of t)e.light.fill(0);for(let e of t)this.initChunk(e,{clear:!1});for(let e of t)e.dirty=!0}onBlockChanged(t,e,i,s,r){if(!this.world.getChunk(t>>4,i>>4)||e<0||e>=64||!(qe[s]!==qe[r]||Mi[s]!==Mi[r]||Gi[s]!==Gi[r]))return;let l=this.directColumn(t,i,e,s),c=this.directColumn(t,i),h=[],d=[];for(let f=0;f<64;f++){if(c[f]===l[f])continue;let m=this.get(t,f,i,$n);c[f]<l[f]?m>0&&(h.push([Rn(t,f,i),m]),this.set(t,f,i,$n,0)):(c[f]>m&&this.set(t,f,i,$n,c[f]),d.push(Rn(t,f,i)))}let u=this.get(t,e,i,$n);u>0&&(qe[r]||Mi[r]>Mi[s])&&c[e]===l[e]&&(h.push([Rn(t,e,i),u]),this.set(t,e,i,$n,0));for(let[f,m,x]of Ga)this.get(t+f,e+m,i+x,$n)>0&&d.push(Rn(t+f,e+m,i+x));d.push(...this.unspread($n,h)),this.propagate($n,d),this.hasEmitters&&this.refreshBlockLight(t,e,i)}};var qS=Dt.worldgen.trees,Bd=qS.variants,m0=n=>Bd.find(t=>t.key===n),p0=m0("oak")??Bd[0];function g0(n,t,e,i,s=!1,r=null){if(s)return p0;let o=Bd.filter(l=>i>=l.heights[0]&&i<=l.heights[1]&&(!r||!l.biomes||l.biomes.includes(r)));if(!o.length)return p0;let a=qn(t,e,n+13)*o.reduce((l,c)=>l+c.weight,0);for(let l of o){if(a<l.weight)return l;a-=l.weight}return o[o.length-1]}var $S=(n,t,e,i)=>n.trunk[0]+Math.floor(qn(e,i,t+7)*(n.trunk[1]-n.trunk[0]+1));function mo(n,t,e,i,s,r,o,a){for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++)Math.abs(c)===s&&Math.abs(l)===s&&s>0&&(s===1||a==="always"||qn(t+c,i+l+e,o)<.5)||n.push({x:t+c,y:e,z:i+l,id:r,leaf:!0})}function kd(n,t,e,i,s){let r=$S(n,t,e,s),o=i+r,a=[];if(n.shape==="round")for(let l=o-2;l<=o+1;l++)mo(a,e,l,s,l>=o?1:2,n.leavesId,t,"random");else if(n.shape==="tall")[2,3,3,2,1,1].forEach((c,h)=>mo(a,e,o-3+h,s,c,n.leavesId,t,c>=3?"always":"random"));else if(n.shape==="cone"){let l=[0,1,1,2,2,3,3],c=Math.min(l.length,r-1);for(let h=0;h<c;h++)mo(a,e,o+1-h,s,l[h],n.leavesId,t,"always")}else mo(a,e,o,s,1,n.leavesId,t,"random"),mo(a,e,o+1,s,1,n.leavesId,t,"random"),mo(a,e,o-1,s,2,n.leavesId,t,"always");for(let l=i+1;l<=o;l++)a.push({x:e,y:l,z:s,id:n.logId,leaf:!1});return a}function x0(n,t,e,i,s,r=1,o=Math.random){let a=m0(s[Math.floor(o()*s.length)]);if(!a)return!1;let l=kd(a,r+Math.floor(o()*1e3),t,e-1,i),c=h=>h===Kt.AIR||jt[h]>0||Vi[h]===1;for(let h of l)if(!(h.x===t&&h.y===e&&h.z===i)&&!c(n.getBlock(h.x,h.y,h.z)))return!1;for(let h of l)n.setBlock(h.x,h.y,h.z,h.id);return!0}var zd=Dt.game.tilling,re=Dt.worldgen,Yn=re.ids;var yn=re.seaLevel,Ah=re.snowLine,Hd=(n,t,e)=>Math.max(t,Math.min(e,n)),_0=(n,t,e)=>n+(t-n)*e,Wi=(n,t,e)=>{let i=Hd((e-n)/(t-n),0,1);return i*i*(3-2*i)},Vd=class{constructor(t,e){this.cx=t,this.cz=e,this.data=new Uint8Array(1024*16),this.dirty=!0,this.meshes=null,this.plants=new Set,this.hydrating=new Set,this.version=0,this.light=new Uint8Array(1024*16)}},go=class{constructor(t,{terrain:e=2}={}){this.seed=t,this.terrain=e,this.noise=new Ba(t),this.noiseB=new Ba(t^1540483477),this.chunks=new Map,this.edits=new Map,this.legacyCaves=new Set,this.editsDirty=!1,this.listeners=[],this.lighting=new Eh(this)}climate(t,e){let i=re.biomes.climateScale;return{temp:this.noiseB.fbm2(t*i+900,e*i-400,2),wet:this.noiseB.fbm2(t*i-700,e*i+250,2),rel:this.noise.fbm2(t*i*1.15+1300,e*i*1.15-800,2)}}biomeAt(t,e){return this.terrain<2?null:this.biomeOf(this.climate(t,e))}biomeOf(t){let e=re.biomes.select;return t.rel>e.mountainRel?"mountains":t.temp>e.hotTemp&&t.wet<e.dryWet?"desert":t.temp<e.coldTemp?"tundra":t.rel>e.hillsRel?"hills":t.wet>e.forestWet?"forest":"plains"}heightBiomes(t,e){let i=this.noise,s=re.terrain,r=re.biomes.select,o=this.climate(t,e),a=i.fbm2(t*s.continentScale,e*s.continentScale,3),l=i.fbm2(t*s.hillScale+100,e*s.hillScale+100,4),c=1-Math.abs(i.noise2(t*s.ridgeScale-50,e*s.ridgeScale-50)),h=r.blend,d=Wi(r.hillsRel-h,r.hillsRel+h,o.rel),u=Wi(r.mountainRel-h,r.mountainRel+h*1.2,o.rel),f=Wi(r.hotTemp-h*.5,r.hotTemp+h,o.temp)*(1-Wi(r.dryWet-h,r.dryWet+h*.5,o.wet))*(1-u),m=a>0?a*_0(s.flatContinent,1,Math.max(d*.7,u)):a,x=yn+s.baseAboveSea+m*s.continentHeight;return x+=l*_0(s.plainsHills,s.rollingHills,d)*(1-.45*f),x+=f*(i.noise2(t*s.duneScale+40,e*s.duneScale-90)*.5+.5)*s.duneHeight,x+=u*s.mountainUplift+Math.pow(c,2.4)*u*s.mountainHeight,this.carveRivers(t,e,x)}carveRivers(t,e,i){let s=this.noise,r=re.rivers,o=t+r.warp*s.noise2(t*.02+11,e*.02+7),a=e+r.warp*s.noise2(t*.02-31,e*.02+53),l=Math.abs(this.noiseB.noise2(o*r.scale+300,a*r.scale-120)),c=1-Wi(yn+r.lowlandFrom,yn+r.lowlandTo,i),h=(1-Wi(r.coreWidth,r.bankWidth,l))*c,d=yn-r.bedBelowSea;return h>0&&i>d&&(i-=(i-d)*h),Math.floor(Hd(i,3,58))}heightAt(t,e){if(this.terrain>=2)return this.heightBiomes(t,e);let i=this.noise,s=re.terrain,r=i.fbm2(t*s.continentScale,e*s.continentScale,3),o=i.fbm2(t*s.hillScale+100,e*s.hillScale+100,4),a=1-Math.abs(i.noise2(t*s.ridgeScale-50,e*s.ridgeScale-50)),l=Wi(.08,.55,r),c=yn+s.baseAboveSea+r*s.continentHeight+o*s.hillHeight;c+=Math.pow(a,3)*l*s.ridgeHeight;let h=re.rivers,d=t+h.warp*i.noise2(t*.02+11,e*.02+7),u=e+h.warp*i.noise2(t*.02-31,e*.02+53),f=Math.abs(this.noiseB.noise2(d*h.scale+300,u*h.scale-120)),m=1-Wi(yn+h.lowlandFrom,yn+h.lowlandTo,c),x=(1-Wi(h.coreWidth,h.bankWidth,f))*m,g=yn-h.bedBelowSea;return x>0&&c>g&&(c-=(c-g)*x),Math.floor(Hd(c,3,58))}forestDensity(t,e,i=null){let s=this.noiseB.fbm2(t*.02,e*.02,2),r=i&&re.biomes.types[i],o=Math.max(Wi(0,.45,s),r?.denseMin??0);return(re.trees.baseDensity+re.trees.forestDensity*o)*(r?.trees??1)}isCavern(t,e,i){let s=re.caves.caverns;if(!s||e<s.minY||e>s.maxY)return!1;let[r,o,a]=s.scale;return this.noiseB.noise3(t*r+211,e*o+57,i*a-93)>s.threshold}isEntrance(t,e){let i=re.caves.entrances;return!!i&&this.noiseB.noise3(t*i.scale+500,.5,e*i.scale-500)>i.threshold}isCave(t,e,i){let s=this.noiseB,[r,o,a]=re.caves.scale,l=re.caves.threshold;return Math.abs(s.noise3(t*r,e*o,i*a))>l?!1:Math.abs(s.noise3(t*r+77,e*o+31,i*a+13))<l}oreAt(t,e,i){let s=this.noiseB;for(let r of re.ores)if(!(e<r.minY||e>=r.maxY)&&s.noise3(t*r.scale+r.offset[0],e*r.scale+r.offset[1],i*r.scale+r.offset[2])>r.threshold)return r.id;return Yn.stone}hasTree(t,e){let i=qn(t,e,this.seed);if(i>=re.trees.baseDensity+re.trees.forestDensity||i>=this.forestDensity(t,e,this.biomeAt(t,e)))return!1;let s=this.heightAt(t,e);return s>=yn+re.trees.minAboveSea&&s<Ah-re.trees.belowSnowLine}treesNear(t,e,i){let s=0;for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)this.hasTree(t+o,e+r)&&s++;return s}generateChunk(t,e){let i=new Vd(t,e),s=i.data,r=!this.legacyCaves.has(Dn(t,e)),o=t*16,a=e*16;for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=o+c,d=a+l,u=this.heightAt(h,d),f=u<=yn+re.beachAboveSea,m=u>=Ah,x=re.biomes?.types[this.biomeAt(h,d)],g=x&&x.rockFrom!=null&&u>=x.rockFrom,p=f?Yn.beach:m?Yn.snowSurface:g?Yn.stone:x?x.surfaceId:Yn.surface,w=f?Yn.beachFiller:m?Yn.snowFiller:g?Yn.stone:x?x.fillerId:Yn.filler,R=x&&!f&&!m?x.fillerDepth:re.blocks.fillerDepth,v=re.caves,E=r&&this.isEntrance(h,d);for(let M=0;M<=u;M++){let C=Yn.stone;M===u?C=p:M>=u-R&&(C=w),M>=v.minY&&(M<u-v.surfaceDepth||u>yn+1&&M<=u&&E?this.isCave(h,M,d):!1)||r&&M<u-(v.caverns?.surfaceDepth??6)&&this.isCavern(h,M,d)?C=Kt.AIR:C===Yn.stone&&(C=this.oreAt(h,M,d)),s[ue(c,M,l)]=C}for(let M=u+1;M<=yn;M++)s[ue(c,M,l)]=Yn.sea;if(p===Yn.surface&&u+1<64&&s[ue(c,u,l)]!==Kt.AIR&&qn(h,d,this.seed+97)<re.groundCover.chance){let M=qn(h,d,this.seed+131),C=re.groundCover.variants.reduce((A,I)=>A+I.weight,0),y=re.groundCover.variants[re.groundCover.variants.length-1].id;for(let A of re.groundCover.variants){if(M<A.weight/C){y=A.id;break}M-=A.weight/C}s[ue(c,u+1,l)]=y}}this.growTrees(i),this.applyEdits(i);for(let l=0;l<s.length;l++)jt[s[l]]&&i.plants.add(l),Ha[s[l]]&&i.hydrating.add(l);return this.chunks.set(Dn(t,e),i),this.lighting.initChunk(i),i}growTrees(t){let e=t.cx*16,i=t.cz*16,s=t.data,r=(a,l,c,h,d)=>{let u=a-e,f=c-i;if(u<0||u>=16||f<0||f>=16||l<0||l>=64)return;let m=ue(u,l,f);d&&s[m]!==Kt.AIR||(s[m]=h)},o=this.legacyCaves.has(Dn(t.cx,t.cz));for(let a=i-2;a<i+16+2;a++)for(let l=e-2;l<e+16+2;l++){let c=qn(l,a,this.seed);if(c>=re.trees.baseDensity+re.trees.forestDensity)continue;let h=this.biomeAt(l,a);if(c>=this.forestDensity(l,a,h))continue;let d=this.heightAt(l,a);if(d<yn+re.trees.minAboveSea||d>=Ah-re.trees.belowSnowLine)continue;let u=g0(this.seed,l,a,d,o,h);for(let f of kd(u,this.seed,l,d,a))r(f.x,f.y,f.z,f.id,f.leaf)}}applyEdits(t){let e=this.edits.get(Dn(t.cx,t.cz));if(e)for(let[i,s]of e)t.data[i]=s}getChunk(t,e){return this.chunks.get(Dn(t,e))}getBlock(t,e,i){if(e<0||e>=64)return Kt.AIR;let s=this.chunks.get(Dn(t>>4,i>>4));return s?s.data[ue(t&15,e,i&15)]:Kt.AIR}nearWater(t,e,i,s=zd.radius){for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(!(o*o+r*r>s*s)){for(let a=-zd.waterBelow;a<=zd.waterAbove;a++)if(pe[this.getBlock(t+o,e+a,i+r)])return!0}return!1}addChangeListener(t){this.listeners.push(t)}canPlace(t,e,i){return e>=0&&e<64&&this.isLoaded(t,i)}isLoaded(t,e){return this.chunks.has(Dn(t>>4,e>>4))}setBlock(t,e,i,s){if(e<0||e>=64)return[];let r=t>>4,o=i>>4,a=this.getChunk(r,o);if(!a)return[];let l=t&15,c=i&15,h=a.data[ue(l,e,c)];a.data[ue(l,e,c)]=s,a.version++,jt[h]&&a.plants.delete(ue(l,e,c)),jt[s]&&a.plants.add(ue(l,e,c)),Ha[h]&&a.hydrating.delete(ue(l,e,c)),Ha[s]&&a.hydrating.add(ue(l,e,c));let d=Dn(r,o),u=this.edits.get(d);u||this.edits.set(d,u=new Map),u.set(ue(l,e,c),s),this.editsDirty=!0;let f=[a],m=(x,g)=>{let p=this.getChunk(x,g);p&&f.push(p)};l===0&&m(r-1,o),l===15&&m(r+1,o),c===0&&m(r,o-1),c===15&&m(r,o+1);for(let x of f)x.dirty=!0;for(let x of this.listeners)x(t,e,i,h,s);return f}hasWaterNear(t,e,i){for(let s=-i;s<=i;s+=3)for(let r=-i;r<=i;r+=3)if(this.heightAt(t+r,e+s)<yn)return!0;return!1}findSpawn(){for(let[t,e]of[[!0,!0],[!0,!1],[!1,!1]])for(let i=0;i<300;i+=4)for(let s=0;s<8;s++){let r=Math.round(Math.cos(s*Math.PI/4)*i),o=Math.round(Math.sin(s*Math.PI/4)*i),a=this.heightAt(r,o);if(!(a<=yn+re.beachAboveSea||a>=Ah-4)&&!(t&&this.treesNear(r,o,re.spawn.treeRadius)<re.spawn.minTrees)&&!(e&&!this.hasWaterNear(r,o,re.spawn.waterRadius)))return{x:r+.5,y:a+1,z:o+.5}}return{x:.5,y:yn+10,z:.5}}serializeLegacy(){return[...this.legacyCaves].map(t=>`${Math.floor(t/65536)-32768},${t%65536-32768}`)}serializeEdits(){let t={};for(let[e,i]of this.edits){let s=Math.floor(e/65536)-32768,r=e%65536-32768;t[`${s},${r}`]=Object.fromEntries(i)}return t}loadEdits(t,e=null){for(let i of e??Object.keys(t||{})){let[s,r]=i.split(",").map(Number);this.legacyCaves.add(Dn(s,r))}for(let[i,s]of Object.entries(t||{})){let[r,o]=i.split(",").map(Number),a=new Map;for(let[l,c]of Object.entries(s))a.set(Number(l),c);this.edits.set(Dn(r,o),a)}}};var YS={};for(let n of Dt.items)YS[n.key.toUpperCase()]=n.id;var Xi=new Map(Dt.items.map(n=>[n.id,n])),zs=n=>Dt.blockById.has(n),vn=n=>zs(n)?Oe[n].name:Xi.get(n)?.name??"Unknown",Zn=n=>Xi.get(n)?.tool??null,y0=n=>Xi.get(n)?.food??0,v0=n=>Xi.get(n)?.saturation??0,On=n=>Xi.get(n)?.stack??64,Wa=n=>Zn(n)?.uses??0,Gd=n=>Xi.get(n)?.plants??null,M0=n=>Dt.keyOfId.get(n);var hr=n=>Array.isArray(n)?n:[n],Wd=n=>hr(n).map(vn).join(" or "),nR=Dt.groups.coals||[],Hs=n=>Dt.fuelTime.get(n)??0,ZS=new Map(Dt.smelting.map(n=>[n.in,n])),Xd=n=>ZS.get(n)??null,Ch=Dt.smelting,S0=[...Dt.fuelTime.keys()],ls=n=>Xi.get(n)?.equip??null,xo=Dt.game.equipment.slots;var Si=n=>!!Xi.get(n)?.offhand,qd=(n,t)=>ls(n)?.slot===t||t==="shield"&&Si(n);function $d(n){let t=Xi.get(n)?.places;return t?Math.max(0,...Object.values(t).map(e=>Gi[e])):0}function b0(n,t){let e=Zn(t);return e?Oe[n]?.tool===e.type?1:Dt.game.tools.wrongToolWear:0}var Xa=n=>Xi.get(n)?.places??null;function w0(n,t){let e=[];for(let i of n){if(t()>=i.chance)continue;let s=i.min+Math.floor(t()*(i.max-i.min+1));s>0&&e.push({id:i.id,n:s})}return e}function _o(n,t,e=Math.random){if(!t)return[];let i=Dt.blockById.get(n),s=i?.loot?Dt.loot[i.loot]:null;return s?w0(s,e):[{id:n,n:1}]}function E0(n,t=Math.random){let e=Dt.blockById.get(n),i=e?.shatterLoot?Dt.loot[e.shatterLoot]:e?.loot?Dt.loot[e.loot]:null;return i?w0(i,t):[{id:n,n:1}]}function Rh(n,t){let e=Oe[n],i=Zn(t),s=!!i&&e.tool===i.type,r=e.need===0||s&&i.tier>=e.need,o=e.hard;return s&&(o/=i.speed),r||(o*=3.3),{time:o,canHarvest:r,matches:s}}var T0=n=>Object.entries(Dt.data.items.tiers).find(([,t])=>t.level===n)?.[0]??"",qa=Dt.recipes,A0=Object.fromEntries(Object.entries(Dt.stations).map(([n,t])=>[n,t.label])),$a=Dt.windows,ur=Dt.goals,Yd={};for(let n of Dt.blocks){let t=n.plant?.stage;t&&(Yd[n.id]={label:t.label,stage:t.step,name:t.name,ripe:t.ripe,crop:t.crop})}var cs=36,C0=9,Zd=cs+C0,yo=9,Ih=class{constructor(){this.slots=Array(Zd).fill(null),this.equipment=Object.fromEntries(xo.map(t=>[t.id,null]))}get capacity(){let t=this.equipment.backpack;return cs+(t?Math.min(C0,ls(t.id)?.slots??0):0)}get armor(){let t=0;for(let e of Object.values(this.equipment))e&&(t+=ls(e.id)?.armor??0);return t}clickEquip(t,e,i=0){let s=this.equipment[t];if(e){if(!qd(e.id,t))return{cursor:e,refused:null};if(Si(e.id)){let a=On(e.id);if(s&&s.id===e.id){let l=Math.min(a-s.n,i===2?1:e.n);return s.n+=l,{cursor:e.n-l>0?{...e,n:e.n-l}:null,refused:null}}return i===2&&!s?(this.equipment[t]={id:e.id,n:1,d:e.d},{cursor:e.n>1?{...e,n:e.n-1}:null,refused:null}):(this.equipment[t]=e,{cursor:s,refused:null})}if(t==="backpack"&&s&&this.slots.slice(cs).some(Boolean))return{cursor:e,refused:"Empty the backpack first"};let r={id:e.id,n:1,d:e.d},o=e.n>1?{...e,n:e.n-1}:null;return s&&o?{cursor:e,refused:null}:(this.equipment[t]=r,{cursor:o??s,refused:null})}return s?t==="backpack"&&this.slots.slice(cs).some(Boolean)?{cursor:null,refused:"Empty the backpack first"}:(this.equipment[t]=null,{cursor:s,refused:null}):{cursor:null,refused:null}}quickEquip(t){let e=this.slots[t];if(e&&Si(e.id))return this.quickOffhand(t);let i=e&&ls(e.id)?.slot;if(!i||t>=this.capacity||this.equipment[i]&&Si(this.equipment[i].id))return!1;let s=this.equipment[i];if(s&&i==="backpack"&&this.slots.slice(cs).some(Boolean))return!1;let r={id:e.id,n:1,d:e.d};if(e.n>1){if(s)return!1;e.n-=1}else this.slots[t]=s;return this.equipment[i]=r,!0}quickOffhand(t){let e=this.slots[t],i=this.equipment.shield;if(!e||t>=this.capacity)return!1;if(!i)return this.equipment.shield={...e},this.slots[t]=null,!0;if(i.id!==e.id)return!1;let s=Math.min(On(e.id)-i.n,e.n);return s<=0?!1:(i.n+=s,s===e.n?this.slots[t]=null:e.n-=s,!0)}takeEverything(){let t=[];for(let e=0;e<this.slots.length;e++)this.slots[e]&&(t.push(this.slots[e]),this.slots[e]=null);for(let e of Object.keys(this.equipment))this.equipment[e]&&(t.push(this.equipment[e]),this.equipment[e]=null);return t}add(t,e=1,i=0){let s=On(t);if(s>1)for(let r of this.slots.slice(0,this.capacity)){if(e<=0)break;if(r&&r.id===t&&r.n<s){let o=Math.min(s-r.n,e);r.n+=o,e-=o}}for(let r=0;r<this.capacity&&e>0;r++){if(this.slots[r])continue;let o=Math.min(s,e);this.slots[r]={id:t,n:o,d:i},e-=o}return e}count(t){let e=0;for(let i of this.slots)i&&i.id===t&&(e+=i.n);return e}remove(t,e=1){if(this.count(t)<e)return!1;for(let i=this.slots.length-1;i>=0&&e>0;i--){let s=this.slots[i];if(!s||s.id!==t)continue;let r=Math.min(s.n,e);s.n-=r,e-=r,s.n===0&&(this.slots[i]=null)}return!0}canFit(t,e=1){let i=On(t),s=0;for(let r of this.slots.slice(0,this.capacity))if(r?r.id===t&&i>1&&(s+=i-r.n):s+=i,s>=e)return!0;return!1}countSpec(t){return hr(t).reduce((e,i)=>e+this.count(i),0)}removeSpec(t,e){for(let i of hr(t)){let s=Math.min(e,this.count(i));s>0&&this.remove(i,s),e-=s}return e===0}canCraft(t,e={}){return t.station&&!e[t.station]?!1:t.ins.every(([i,s])=>this.countSpec(i)>=s)}craft(t,e={}){if(!this.canCraft(t,e))return{ok:!1,leftover:0};for(let[s,r]of t.ins)this.removeSpec(s,r);return{ok:!0,leftover:this.add(t.out,t.n)}}damage(t,e=1){let i=this.slots[t];return!i||!Wa(i.id)?!1:(i.d+=e,i.d>=Wa(i.id)?(this.slots[t]=null,!0):!1)}clickSlot(t,e,i=0){return Jd(this.slots,t,e,i)}quickMove(t){let e=this.slots[t];if(!e)return;let[i,s]=t<yo?[yo,this.capacity]:[0,yo],r=On(e.id),o=e.n;for(let a=i;a<s&&o>0;a++){let l=this.slots[a];if(l&&l.id===e.id&&r>1&&l.n<r){let c=Math.min(r-l.n,o);l.n+=c,o-=c}}for(let a=i;a<s&&o>0;a++)this.slots[a]||(this.slots[a]={id:e.id,n:o,d:e.d},o=0);o===0?this.slots[t]=null:e.n=o}serialize(){return this.slots.map(t=>t?[t.id,t.n,t.d]:null)}load(t){this.slots=Array(Zd).fill(null),(t||[]).slice(0,Zd).forEach((e,i)=>{e&&(this.slots[i]={id:e[0],n:e[1],d:e[2]||0})})}serializeEquipment(){return Object.fromEntries(Object.entries(this.equipment).filter(([,t])=>t).map(([t,e])=>[t,[e.id,e.n,e.d]]))}loadEquipment(t){for(let e of Object.keys(this.equipment)){let i=t?.[e];this.equipment[e]=i&&qd(i[0],e)?{id:i[0],n:Si(i[0])?Math.max(1,Math.min(On(i[0]),i[1]||1)):1,d:i[2]||0}:null}}};function Jd(n,t,e,i=0,s=()=>!0){let r=n[t];if(e&&!s(e.id))return e;let o=e?On(e.id):1;if(i===0){if(!e)return n[t]=null,r;if(!r)return n[t]=e,null;if(r.id===e.id&&o>1){let a=Math.min(o-r.n,e.n);return r.n+=a,e.n-=a,e.n>0?e:null}return n[t]=e,r}if(!e){if(!r)return null;let a=Math.ceil(r.n/2);r.n-=a;let l={id:r.id,n:a,d:r.d};return r.n===0&&(n[t]=null),l}if(!r)n[t]={id:e.id,n:1,d:e.d},e.n-=1;else if(r.id===e.id&&r.n<o)r.n+=1,e.n-=1;else return n[t]=e,r;return e.n>0?e:null}var Vs=18,Kd=66,qi=(n,t,e)=>(t*Vs+e)*Vs+n,JS=[{n:[1,0,0],t1:[0,0,-1],t2:[0,1,0],o:[1,0,1],shade:.82,k:2},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0],o:[0,0,0],shade:.82,k:2},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0],o:[0,0,1],shade:.68,k:2},{n:[0,0,-1],t1:[-1,0,0],t2:[0,1,0],o:[1,0,0],shade:.68,k:2},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0],o:[0,1,0],shade:1,k:0},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1],o:[0,0,0],shade:.5,k:1}],Ya=[[0,0],[1,0],[1,1],[0,1]],R0=[.5,.68,.84,1],I0=(n,t,e,i,s)=>pe[n[qi(t,e+1,i)]]?1:Bs[s]/8;function KS(n,t){let e=new Uint8Array(Vs*Kd*Vs),i=new Uint8Array(Vs*Kd*Vs).fill(Un),s=new Uint8Array(Vs*Kd*Vs);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){let a=o===0&&r===0?t:n.getChunk(t.cx+o,t.cz+r);if(!a)continue;let l=o<0?15:(o>0,0),c=o<0?15:o>0?0:15,h=r<0?15:(r>0,0),d=r<0?15:r>0?0:15;for(let u=0;u<64;u++)for(let f=h;f<=d;f++)for(let m=l;m<=c;m++){let x=a.light[ue(m,u,f)],g=qi(m+o*16+1,u+1,f+r*16+1);e[g]=a.data[ue(m,u,f)],i[g]=x>>4,s[g]=x&15}}return{pad:e,sky:i,blk:s}}var vo=class{constructor(){this.pos=[],this.uv=[],this.col=[],this.blk=[],this.ind=[],this.sway=[],this.n=0}get empty(){return this.n===0}finish(){return{sway:new Float32Array(this.sway),positions:new Float32Array(this.pos),uvs:new Float32Array(this.uv),colors:new Float32Array(this.col),blocklight:new Float32Array(this.blk),indices:this.n>65535?new Uint32Array(this.ind):new Uint16Array(this.ind)}}};function jS(n,t,e,i,s,r,o,a,l,c,h,d,u){let f=t===2?[[.25,0,.25,.25,0,.75],[.75,0,.25,.75,0,.75],[.25,0,.25,.75,0,.25],[.25,0,.75,.75,0,.75]]:[[.08,0,.08,.92,0,.92],[.92,0,.08,.08,0,.92]],m=t===1?(qn(c,h,5)-.5)*.3:0,x=t===1?(qn(c,h,6)-.5)*.3:0,g=.88+qn(c,h,7)*.16,p=g*po(d),w=g*Th(u);for(let[R,,v,E,,M]of f){let C=n.n,y=[[R,0,v,0,0],[E,0,M,1,0],[E,1,M,1,1],[R,1,v,0,1]];for(let[A,I,P,F,k]of y)n.pos.push(e+A+m,i+I,s+P+x),n.uv.push(r+F*a,o+k*l),n.col.push(p,p,p),n.blk.push(w,g),n.sway.push(I);n.ind.push(C,C+1,C+2,C,C+2,C+3),n.n+=4}}var P0=[[-1,-1],[1,-1],[1,1],[-1,1]],QS=.78,tb=.85;function eb(n,t,e,i,s,r,o,a,l,c,h){let f=s[0]!==0||s[1]!==0?.2:0,m=f+r,x=.5-s[0]*.38,g=.5-s[1]*.38,p=.5-s[0]*.12,w=.5-s[1]*.12,R=po(h)*.9,v=o+l*(7/16),E=o+l*(9/16),M=a,C=a+c*(12/16),y=(F,k,D,O,Z)=>{n.pos.push(t+F,e+k,i+D),n.uv.push(O,Z),n.col.push(R,R,R),n.blk.push(QS,.9),n.sway.push(0)};for(let F=0;F<4;F++){let k=P0[F],D=P0[(F+1)%4],O=n.n;y(x+k[0]*.0625,f,g+k[1]*.0625,v,M),y(x+D[0]*.0625,f,g+D[1]*.0625,E,M),y(p+D[0]*.0625,m,w+D[1]*.0625,E,C),y(p+k[0]*.0625,m,w+k[1]*.0625,v,C),n.ind.push(O,O+2,O+1,O,O+3,O+2),n.n+=4}let A=n.n,I=a+c*(10/16),P=a+c*(12/16);y(p-.0625,m,w+.0625,v,I),y(p+.0625,m,w+.0625,E,I),y(p+.0625,m,w-.0625,E,P),y(p-.0625,m,w-.0625,v,P),n.ind.push(A,A+1,A+2,A,A+2,A+3),n.n+=4}function L0(n,t){let{pad:e,sky:i,blk:s}=KS(n,t),r=new vo,o=new vo,a=new vo,l=new vo,c=4e-4,h=1/Le,d=1/cr;for(let u=0;u<64;u++)for(let f=0;f<16;f++)for(let m=0;m<16;m++){let x=t.data[ue(m,u,f)];if(x===Kt.AIR)continue;if(jt[x]){let M=co[x*3+2],C=M%Le*h+c,y=1-(Math.floor(M/Le)+1)*d+c,A=qi(m+1,u+1,f+1);jt[x]===3?eb(r,m,u,f,[Hi[x*2],Hi[x*2+1]],Fs[x],C,y,h-c*2,d-c*2,i[A]):jS(a,jt[x],m,u,f,C,y,h-c*2,d-c*2,t.cx*16+m,t.cz*16+f,i[A],s[A]);continue}let g=pe[x]===1,p=g?o:Vi[x]?l:r,w=m+1,R=u+1,v=f+1,E=g?I0(e,w,R,v,x):1;for(let M=0;M<6;M++){let C=JS[M],y=e[qi(w+C.n[0],R+C.n[1],v+C.n[2])],A=0;if(g){if(qe[y])continue;if(pe[y]){if(M>=4)continue;let G=I0(e,w+C.n[0],R,v+C.n[2],y);if(G>=E-1e-6)continue;A=G}}else if(qe[y]||y===x&&!qe[x])continue;let I=co[x*3+C.k],P=I%Le*h+c,F=1-(Math.floor(I/Le)+1)*d+c,k=h-c*2,D=d-c*2,O=[1,1,1,1];if(!g)for(let G=0;G<4;G++){let tt=Ya[G][0]?1:-1,gt=Ya[G][1]?1:-1,J=w+C.n[0],xt=R+C.n[1],yt=v+C.n[2],Tt=qe[e[qi(J+C.t1[0]*tt,xt+C.t1[1]*tt,yt+C.t1[2]*tt)]],W=qe[e[qi(J+C.t2[0]*gt,xt+C.t2[1]*gt,yt+C.t2[2]*gt)]],K=qe[e[qi(J+C.t1[0]*tt+C.t2[0]*gt,xt+C.t1[1]*tt+C.t2[1]*gt,yt+C.t1[2]*tt+C.t2[2]*gt)]];O[G]=Tt&&W?0:3-(Tt+W+K)}let Z=[1,1,1,1],Q=[0,0,0,0];for(let G=0;G<4;G++){if(g){Z[G]=po(i[qi(w,R,v)]),Q[G]=Th(s[qi(w,R,v)]);continue}let tt=Ya[G][0]?1:-1,gt=Ya[G][1]?1:-1,J=w+C.n[0],xt=R+C.n[1],yt=v+C.n[2],Tt=[[J,xt,yt],[J+C.t1[0]*tt,xt+C.t1[1]*tt,yt+C.t1[2]*tt],[J+C.t2[0]*gt,xt+C.t2[1]*gt,yt+C.t2[2]*gt],[J+C.t1[0]*tt+C.t2[0]*gt,xt+C.t1[1]*tt+C.t2[1]*gt,yt+C.t1[2]*tt+C.t2[2]*gt]],W=0,K=0,pt=0;for(let Pt=0;Pt<4;Pt++){let vt=qi(Tt[Pt][0],Tt[Pt][1],Tt[Pt][2]);Pt>0&&qe[e[vt]]||(W+=i[vt],K+=s[vt],pt++)}Z[G]=po(W/pt),Q[G]=Math.max(Th(K/pt),Ud[x])}let it=p.n;for(let G=0;G<4;G++){let[tt,gt]=Ya[G],J=C.o[0]+C.t1[0]*tt+C.t2[0]*gt,xt=C.o[1]+C.t1[1]*tt+C.t2[1]*gt,yt=C.o[2]+C.t1[2]*tt+C.t2[2]*gt;g&&(xt=xt===1?E:A&&M<4?A:xt),p.pos.push(m+J,u+xt,f+yt),p.uv.push(P+tt*k,F+gt*D);let Tt=C.shade*(g?1:R0[O[G]]),W=Tt*Z[G];p.col.push(W,W,W),p.blk.push(Tt*Q[G],Tt),p===l&&p.sway.push(tb)}let H=G=>(g?0:R0[O[G]])*(Z[G]+Q[G]);H(0)+H(2)<H(1)+H(3)?p.ind.push(it+1,it+2,it+3,it+1,it+3,it):p.ind.push(it,it+1,it+2,it,it+2,it+3),p.n+=4}}return{solid:r.empty?null:r.finish(),water:o.empty?null:o.finish(),plants:a.empty?null:a.finish(),leaves:l.empty?null:l.finish()}}var nb=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function ib(n){let t=new Ge;return t.setAttribute("position",new ge(n.positions,3)),t.setAttribute("uv",new ge(n.uvs,2)),t.setAttribute("color",new ge(n.colors,3)),n.sway.length&&t.setAttribute("aSway",new ge(n.sway,1)),t.setAttribute("aBlk",new ge(n.blocklight,2)),t.setIndex(new ge(n.indices,1)),t.computeBoundingSphere(),t}var Mo=class{constructor(t,e,i,s=6,r=null){this.onUnload=r,this.world=e,this.mats=i,this.radius=s,this.group=new sn,t.add(this.group),this.wanted=[],this.lastCx=null,this.lastCz=null,this.stats={chunks:0,meshed:0,quads:0}}setRadius(t){this.radius=t,this.lastCx=null}rebuildWanted(t,e){let i=this.radius+1;this.wanted=[];for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++){let a=o*o+r*r;a<=i*i+1&&this.wanted.push({cx:t+o,cz:e+r,d:a})}this.wanted.sort((r,o)=>r.d-o.d);let s=i+2;for(let[r,o]of this.world.chunks)Math.max(Math.abs(o.cx-t),Math.abs(o.cz-e))>s&&(this.onUnload?.(o),this.disposeMeshes(o),this.world.chunks.delete(r))}disposeMeshes(t){if(t.meshes){for(let e of t.meshes)this.group.remove(e),e.geometry.dispose();t.meshes=null}}ready(t){for(let[e,i]of nb)if(!this.world.getChunk(t.cx+e,t.cz+i))return!1;return!0}mesh(t){this.disposeMeshes(t);let e=L0(this.world,t);t.meshes=[];let i=(s,r,o)=>{if(!s)return;let a=new Ce(ib(s),r);a.position.set(t.cx*16,0,t.cz*16),a.renderOrder=o,a.matrixAutoUpdate=!1,a.updateMatrix(),this.group.add(a),t.meshes.push(a)};i(e.solid,this.mats.solid,0),i(e.plants,this.mats.plant,0),i(e.leaves,this.mats.leaves,0),i(e.water,this.mats.water,1),t.dirty=!1}remeshNow(t){for(let e of t)this.ready(e)&&this.mesh(e)}update(t,e,i=6){let s=Math.floor(t/16),r=Math.floor(e/16);(s!==this.lastCx||r!==this.lastCz)&&(this.lastCx=s,this.lastCz=r,this.rebuildWanted(s,r));let o=performance.now(),a=this.world;for(let c of this.wanted)if(!a.getChunk(c.cx,c.cz)&&(a.generateChunk(c.cx,c.cz),performance.now()-o>i))return;let l=this.radius*this.radius+1;for(let c of this.wanted){if(c.d>l)break;let h=a.getChunk(c.cx,c.cz);if(h&&h.dirty&&this.ready(h)&&(this.mesh(h),performance.now()-o>i))return}}preload(t,e,i=3){let s=this.radius;this.radius=i,this.lastCx=null;for(let r=0;r<4;r++)this.update(t,e,1/0);this.radius=s,this.lastCx=null}collectStats(){let t=0,e=0;for(let i of this.world.chunks.values())if(i.meshes){t++;for(let s of i.meshes)e+=s.geometry.index.count/6}return this.stats={chunks:this.world.chunks.size,meshed:t,quads:e},this.stats}};var Ke=.3,jd=1.8,sb=1.5,N0=1.62,rb=1.27,ob=.35,$i=1e-4,D0=30,ab=9.2,lb=40,Ph=class{constructor(t){this.world=t,this.pos={x:0,y:40,z:0},this.vel={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headInWater=!1,this.stepDist=0,this.speedMul=1,this.events={step:null,splash:null,land:null,fall:null,jump:null},this.fallPeak=null,this.stepSmooth=0,this.canStep=!1,this.crouching=!1,this.height=jd,this.eyeHeight=N0}solidAt(t,e,i){return e<0||!this.world.isLoaded(t,i)?!0:Nn[this.world.getBlock(t,e,i)]===1}collides(t,e,i,s=this.height){let r=Math.floor(t-Ke+1e-5),o=Math.floor(t+Ke-1e-5),a=Math.floor(e+1e-5),l=Math.floor(e+s-1e-5),c=Math.floor(i-Ke+1e-5),h=Math.floor(i+Ke-1e-5);for(let d=a;d<=l;d++)for(let u=c;u<=h;u++)for(let f=r;f<=o;f++)if(this.solidAt(f,d,u))return!0;return!1}supported(t,e,i){let s=Math.floor(e-.05);for(let r of[-Ke,Ke])for(let o of[-Ke,Ke])if(this.solidAt(Math.floor(t+o),s,Math.floor(i+r)))return!0;return!1}intersectsBlock(t,e,i){let s=this.pos;return s.x+Ke>t&&s.x-Ke<t+1&&s.y+this.height>e&&s.y<e+1&&s.z+Ke>i&&s.z-Ke<i+1}moveAxis(t,e){if(e===0)return!1;let i=this.pos,s=Math.ceil(Math.abs(e)/.2),r=e/s;for(let o=0;o<s;o++)if(i[t]+=r,!!this.collides(i.x,i.y,i.z)){if(this.canStep&&t!=="y"){let a=Math.floor(i.y+$i)+1+$i;if(a-i.y<=1+2*$i&&!this.collides(i.x,a,i.z)){this.stepSmooth+=a-i.y,i.y=a;continue}}return t==="x"?i.x=r>0?Math.floor(i.x+Ke)-Ke-$i:Math.floor(i.x-Ke)+1+Ke+$i:t==="z"?i.z=r>0?Math.floor(i.z+Ke)-Ke-$i:Math.floor(i.z-Ke)+1+Ke+$i:i.y=r>0?Math.floor(i.y+this.height)-this.height-$i:Math.floor(i.y)+1+$i,this.vel[t]=0,!0}return!1}update(t,e){t=Math.min(t,.05);let i=this.pos,s=this.vel,r=this.onGround;(this.fallPeak===null||r||this.inWater||this.flying)&&(this.fallPeak=i.y);let o=this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z)),a=this.inWater;this.inWater=pe[o]===1,this.headInWater=pe[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+1.62),Math.floor(i.z))]===1,this.inWater&&!a&&s.y<-3&&this.events.splash?.(),!!e.crouch&&!this.flying&&!this.inWater?(this.crouching=!0,this.height=sb):this.crouching&&!this.collides(i.x,i.y,i.z,jd)&&(this.crouching=!1,this.height=jd),this.eyeHeight+=((this.crouching?rb:N0)-this.eyeHeight)*Math.min(1,16*t);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),d=0,u=0;e.forward&&(d-=c,u-=h),e.back&&(d+=c,u+=h),e.left&&(d-=h,u+=c),e.right&&(d+=h,u-=c),e.ahead&&(d-=c*e.ahead,u-=h*e.ahead),e.strafe&&(d+=h*e.strafe,u-=c*e.strafe);let f=Math.hypot(d,u);f>1&&(d/=f,u/=f);let m=e.sprint&&!this.crouching?6.4:4.4;this.crouching&&(m*=ob),this.flying?m=e.sprint?22:11:this.inWater&&(m*=.55),m*=this.speedMul;let x=this.flying?14:this.onGround?46:this.inWater?14:12,g=Math.min(1,x*t);if(s.x+=(d*m-s.x)*g,s.z+=(u*m-s.z)*g,this.flying){let y=(e.jump?1:0)-(e.down?1:0);s.y+=(y*(e.sprint?14:8)-s.y)*Math.min(1,10*t)}else this.inWater?(s.y-=8*t,s.y*=1-Math.min(1,3*t),e.jump&&(s.y+=(3.6-s.y)*Math.min(1,8*t))):(s.y=Math.max(s.y-D0*t,-lb),e.jump&&this.onGround&&(s.y=ab,this.onGround=!1,this.events.jump?.(!!e.sprint&&!this.crouching)));let p=s.y;this.canStep=this.onGround&&!this.flying&&!this.inWater&&s.y<=.01&&f>0;let w=this.crouching&&this.onGround&&!this.flying,R=i.x,v=i.z,E=this.moveAxis("x",s.x*t);w&&!this.supported(i.x,i.y,i.z)&&(i.x=R,s.x=0);let M=this.moveAxis("z",s.z*t);if(w&&!this.supported(i.x,i.y,i.z)&&(i.z=v,s.z=0),this.inWater&&e.jump&&(E||M)&&f>0)for(let y of[Math.floor(i.y)+1,Math.floor(i.y)+2]){if(y-i.y>1.45)break;if(!this.collides(i.x+d*.4,y+$i,i.z+u*.4)){s.y=Math.max(s.y,Math.sqrt(2*D0*(y-i.y+.3)));break}}let C=this.moveAxis("y",s.y*t);if(this.onGround=C&&p<0,this.flying&&this.onGround&&(this.flying=!1),this.onGround||(this.fallPeak=Math.max(this.fallPeak,i.y)),this.onGround&&!r){p<-7&&this.events.land?.(p);let y=this.inWater||pe[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z))]===1,A=this.fallPeak-i.y;!this.flying&&!y&&A>.5&&this.events.fall?.(A,p),this.fallPeak=i.y}this.stepSmooth=this.stepSmooth<.001?0:this.stepSmooth*Math.exp(-12*t),this.onGround&&!this.flying&&f>0&&(this.stepDist+=Math.hypot(s.x,s.z)*t,this.stepDist>(e.sprint&&!this.crouching?2.2:1.7)&&!this.crouching&&(this.stepDist=0,this.events.step?.()))}get eye(){return{x:this.pos.x,y:this.pos.y+this.eyeHeight-this.stepSmooth,z:this.pos.z}}};function cb(n,t,e,i,s,r,o){let a=[e+.5-o,i,s+.5-o],l=[e+.5+o,i+r,s+.5+o],c=[n.x,n.y,n.z],h=[t.x,t.y,t.z],d=-1/0,u=1/0,f=-1,m=0;for(let x=0;x<3;x++){if(Math.abs(h[x])<1e-9){if(c[x]<a[x]||c[x]>l[x])return null;continue}let g=(a[x]-c[x])/h[x],p=(l[x]-c[x])/h[x],w=Math.min(g,p),R=Math.max(g,p);if(w>d&&(d=w,f=x,m=h[x]>0?-1:1),R<u&&(u=R),d>u)return null}return u<0?null:{t:d,axis:f,sign:m}}function Qd(n,t,e,i=6){let s=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z),a=Math.sign(e.x),l=Math.sign(e.y),c=Math.sign(e.z),h=e.x!==0?Math.abs(1/e.x):1/0,d=e.y!==0?Math.abs(1/e.y):1/0,u=e.z!==0?Math.abs(1/e.z):1/0,f=e.x!==0?(a>0?s+1-t.x:t.x-s)*h:1/0,m=e.y!==0?(l>0?r+1-t.y:t.y-r)*d:1/0,x=e.z!==0?(c>0?o+1-t.z:t.z-o)*u:1/0,g=0,p=0,w=0,R=0;for(;R<=i;){let v=n.getBlock(s,r,o);if(Nn[v])return{x:s,y:r,z:o,nx:g,ny:p,nz:w,id:v};if(jt[v]){let E=cb(t,e,s,r,o,Fs[v],ho[v]);if(E&&E.t<=i){let M=E.t<0||E.axis<0?[0,0,0]:[E.axis===0?E.sign:0,E.axis===1?E.sign:0,E.axis===2?E.sign:0];return{x:s,y:r,z:o,nx:M[0],ny:M[1],nz:M[2],id:v}}}f<m&&f<x?(s+=a,R=f,f+=h,g=-a,p=0,w=0):m<x?(r+=l,R=m,m+=d,g=0,p=-l,w=0):(o+=c,R=x,x+=u,g=0,p=0,w=-c)}return null}var U0=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};var hb=new Gt(.47,.68,1),ub=new Gt(.015,.025,.07),db=new Gt(1,.52,.28),fb=new Gt(.36,.42,.7),pb=new Gt(1,1,1),mb=new Gt(1,.82,.7),hn=64,Za=12,hs=hn*Za,gb=82;function tf(n,t){let e=Array.from({length:n*n},t);return(i,s)=>{let r=i*n,o=s*n,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(m,x)=>e[(x%n+n)%n*n+(m%n+n)%n],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}function xb(n=9){let t=_i(n),e=tf(6,t),i=tf(14,t),s=tf(30,t),r=new Float32Array(hn*hn),o=.56;for(let a=0;a<hn;a++)for(let l=0;l<hn;l++){let c=l/hn,h=a/hn,d=e(c,h)*.55+i(c,h)*.3+s(c,h)*.15;if(d<=o)continue;let u=Math.min(1,(d-o)/.18);r[a*hn+l]=4+Math.round(u*3)*2.2}return r}function _b(){let n=xb(),t=[],e=[],i=[],s=(l,c)=>n[(c%hn+hn)%hn*hn+(l%hn+hn)%hn],r=0,o=(l,c,h,d,u)=>{for(let f of[l,c,h,d])t.push(f[0],f[1],f[2]),e.push(u,u,u);i.push(r,r+1,r+2,r,r+2,r+3),r+=4};for(let l=0;l<hn;l++)for(let c=0;c<hn;c++){let h=s(c,l);if(!h)continue;let d=c*Za,u=d+Za,f=l*Za,m=f+Za;o([d,h,m],[u,h,m],[u,h,f],[d,h,f],1),o([d,0,f],[u,0,f],[u,0,m],[d,0,m],.8);let x=s(c+1,l),g=s(c-1,l),p=s(c,l+1),w=s(c,l-1);x<h&&o([u,x,m],[u,x,f],[u,h,f],[u,h,m],.92),g<h&&o([d,g,f],[d,g,m],[d,h,m],[d,h,f],.92),p<h&&o([d,p,m],[u,p,m],[u,h,m],[d,h,m],.84),w<h&&o([u,w,f],[d,w,f],[d,h,f],[u,h,f],.84)}let a=new Ge;return a.setAttribute("position",new ge(new Float32Array(t),3)),a.setAttribute("color",new ge(new Float32Array(e),3)),a.setIndex(new ge(r>65535?new Uint32Array(i):new Uint16Array(i),1)),a.boundingSphere=new ei(new V(hs/2,4,hs/2),hs*.75),a}var yb=`
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
  }`,vb=`
  uniform float uOpacity;
  varying float vTw;
  varying vec3 vCol;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    gl_FragColor = vec4(vCol, a * vTw * uOpacity);
  }`,Mb=`
  uniform float uShift;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vN = normalize(normal);
    vUv = uv + vec2(uShift, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,Sb=`
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
  }`,Lh=class{constructor(t,e){this.group=new sn,t.add(this.group);let i=new sn;i.rotation.y=.45,this.group.add(i),this.pivot=new sn,i.add(this.pivot);let s=new Oi(e.sun);s.colorSpace=ri;let r=new ir(new Ts({map:s,transparent:!0,fog:!1,depthWrite:!1}));r.scale.set(92,92,1),r.position.x=320,this.pivot.add(r),this.sun=r;let o=new ir(new Ts({map:new Oi(e.glow),color:16764778,transparent:!0,depthWrite:!1,fog:!1,blending:sr,opacity:.5}));o.scale.set(210,210,1),o.position.x=318,this.pivot.add(o),this.sunHalo=o;let a=new Oi(e.moon);a.wrapS=Zr,a.colorSpace=ri,this.moonMat=new xn({uniforms:{uMap:{value:a},uLight:{value:new V(1,0,0)},uAlpha:{value:1},uShift:{value:.31}},vertexShader:Mb,fragmentShader:Sb,transparent:!0,depthWrite:!1,fog:!1}),this.moon=new Ce(new va(26,48,32),this.moonMat),this.moon.position.x=-320,this.pivot.add(this.moon);let l=new ir(new Ts({map:new Oi(e.glow),transparent:!0,depthWrite:!1,fog:!1,blending:sr,opacity:.4}));l.scale.set(150,150,1),l.position.x=-318,this.pivot.add(l),this.halo=l;let c=_i(31337),h=900,d=new Float32Array(h*3),u=new Float32Array(h),f=new Float32Array(h),m=new Float32Array(h*3);for(let p=0;p<h;p++){let w=c()*2-1,R=c()*Math.PI*2,v=Math.sqrt(1-w*w);d.set([Math.cos(R)*v*400,w*400,Math.sin(R)*v*400],p*3),u[p]=c();let E=c()<.07;f[p]=E?4.5+c()*2:1.6+c()*1.8;let M=c();m.set(M<.25?[.7,.8,1]:M<.8?[1,1,1]:[1,.9,.7],p*3)}let x=new Ge;x.setAttribute("position",new ge(d,3)),x.setAttribute("aPhase",new ge(u,1)),x.setAttribute("aSize",new ge(f,1)),x.setAttribute("aColor",new ge(m,3)),this.starMat=new xn({uniforms:{uTime:{value:0},uOpacity:{value:1},uScale:{value:1}},vertexShader:yb,fragmentShader:vb,transparent:!0,depthWrite:!1,fog:!1,blending:sr}),this.stars=new ma(x,this.starMat),this.stars.frustumCulled=!1,this.pivot.add(this.stars);let g=_b();this.cloudMat=new on({vertexColors:!0,transparent:!0,opacity:.93,fog:!1}),this.clouds=[],this.cloudRoot=new sn,t.add(this.cloudRoot);for(let p=0;p<9;p++){let w=new Ce(g,this.cloudMat);w.matrixAutoUpdate=!0,this.cloudRoot.add(w),this.clouds.push(w)}this.skyColor=new Gt,this.tint=new Gt,this.sunHeight=1,this.setMoonPhase(0)}setPixelRatio(t){this.starMat.uniforms.uScale.value=t}setMoonPhase(t){let e=t%8/8*Math.PI*2;this.moonMat.uniforms.uLight.value.set(Math.cos(e),.12,Math.sin(e)),this.phaseName=["Full Moon","Waning Gibbous","Last Quarter","Waning Crescent","New Moon","Waxing Crescent","First Quarter","Waxing Gibbous"][t%8]}update(t,e,i){let s=t*Math.PI*2;this.pivot.rotation.z=s,this.group.position.copy(e);let r=this.sunHeight=Math.sin(s),o=U0(-.1,.26,r);this.skyColor.copy(ub).lerp(hb,o);let a=Math.pow(Math.max(0,1-Math.abs(r)/.24),1.1)*.92;a>0&&this.skyColor.lerp(db,a),this.tint.copy(fb).lerp(pb,o),a>0&&this.tint.lerp(mb,a*.35);let l=1-U0(-.18,.1,r);this.starMat.uniforms.uTime.value=i,this.starMat.uniforms.uOpacity.value=l,this.stars.visible=l>.01,this.moonMat.uniforms.uAlpha.value=.3+.7*l,this.halo.material.opacity=.4*l,this.sunHalo.material.opacity=.5*(1-l);let c=i*1.6,h=Math.floor((e.x-c)/hs)*hs,d=Math.floor(e.z/hs)*hs,u=0;for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++)this.clouds[u++].position.set(h+m*hs+c,gb,d+f*hs);return this.cloudMat.color.copy(this.tint).multiplyScalar(.62+.38*o),{sky:this.skyColor,tint:this.tint,day:o}}};var dr=Dt.music,bb=dr.tracks.filter(n=>n.key!==dr.title),F0=dr.tracks.find(n=>n.key===dr.title),Nh=class{constructor(t=bb,e=Math.random){this.tracks=t,this.rand=e,this.bag=[],this.last=null}next(){if(!this.bag.length){this.bag=[...this.tracks];for(let t=this.bag.length-1;t>0;t--){let e=Math.floor(this.rand()*(t+1));[this.bag[t],this.bag[e]]=[this.bag[e],this.bag[t]]}this.bag.length>1&&this.bag[this.bag.length-1]===this.last&&([this.bag[0],this.bag[this.bag.length-1]]=[this.bag[this.bag.length-1],this.bag[0]])}return this.last=this.bag.pop(),this.last}},B0=(n=Math.random)=>dr.gapSeconds[0]+n()*(dr.gapSeconds[1]-dr.gapSeconds[0]),k0=n=>60/n.bpm;var wb=(n,t)=>n.chords[Math.floor(t/n.barsPerChord)%n.chords.length],O0=(n,t)=>n[Math.floor(t()*n.length)];function z0(n,t,e=Math.random){let i=[],s=wb(n,t),r=t%n.barsPerChord===0;if(n.pad&&i.push({voice:n.pad==="strings"?"strings":"pad",notes:s.tones.slice(0,4),beat:0,beats:4.4,vel:1}),n.bass==="drone"?r&&i.push({voice:"drone",notes:[s.root-12],beat:0,beats:4*n.barsPerChord+1,vel:1}):n.bass&&i.push({voice:"bass",notes:[s.root-12],beat:0,beats:3,vel:1}),n.arp){let{voice:o,pattern:a,step:l,vel:c}=n.arp;for(let h=0,d=0;d<4-1e-9;h++,d+=l)i.push({voice:o,notes:[s.tones[a[h%a.length]%s.tones.length]],beat:d,beats:l*2,vel:c})}if(n.melody)for(let[o,a,l,c,h]of n.melody)o===t&&i.push({voice:n.lead?.voice??"piano",notes:[l],beat:a,beats:c,vel:h});else if(n.lead){let o=n.lead;if(o.rest&&t%o.rest===o.rest-1&&e()<.6)return i;let a=O0(s.tones,e);for(let l=0;l<8;l++){let c=l===0?o.density[0]:l%2===0?o.density[1]:o.density[2];if(e()>c)continue;let h=s.tones.filter(u=>Math.abs(u-a)<=7),d=O0(h.length?h:s.tones,e);e()<o.leap&&(d+=12),e()<o.leap*.66&&(d-=12),a=d,i.push({voice:o.voice,notes:[d],beat:l*.5,beats:1.5,vel:.14+e()*.12})}}return i}var Dh=Dt.sounds,fr=n=>440*Math.pow(2,(n-69)/12);var Uh=class{constructor(){this.ctx=null,this.musicOn=!0,this.musicVol=.8,this.sfxVol=.9,this.nextBarTime=0,this.timer=null,this.scene="title",this.playlist=new Nh,this.track=null,this.trackBar=0,this.bus=null,this.nowPlaying=null,this.onTrack=null}unlockOnGesture(){let t=["pointerdown","keydown","touchstart"],e=()=>{if(this.start(),this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0);else this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0)})};for(let i of t)window.addEventListener(i,e,!0)}get running(){return!!this.ctx&&this.ctx.state==="running"}setScene(t){t!==this.scene&&(this.scene=t,this.endTrack(1.4),this.ctx&&(this.nextBarTime=Math.max(this.nextBarTime,this.ctx.currentTime+.8)))}endTrack(t=0){if(this.bus&&this.ctx){let e=this.bus,i=this.ctx.currentTime;t>0&&e.gain.setTargetAtTime(0,i,t/3),setTimeout(()=>{try{e.disconnect()}catch{}},(t+12)*1e3)}this.bus=null,this.track=null,this.trackBar=0}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=.8,this.master.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicOn?.55*this.musicVol:0,this.sfxBus=t.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(4.2,2.4);let e=t.createGain();e.gain.value=.55,this.reverb.connect(e),e.connect(this.master),this.musicBus.connect(this.master),this.musicBus.connect(this.reverb),this.delay=t.createDelay(2),this.delay.delayTime.value=.72;let i=t.createGain();i.gain.value=.32;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this.delay.connect(s),s.connect(i),i.connect(this.delay),s.connect(this.musicBus);let r=t.sampleRate;this.noise=t.createBuffer(1,r,t.sampleRate);let o=this.noise.getChannelData(0);for(let a=0;a<r;a++)o[a]=Math.random()*2-1;this.nextBarTime=t.currentTime+1,this.timer=setInterval(()=>this.schedule(),400)}makeImpulse(t,e){let i=this.ctx,s=Math.floor(i.sampleRate*t),r=i.createBuffer(2,s,i.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}setMusic(t){this.musicOn=t,this.applyVolumes()}setVolumes(t,e){this.musicVol=t,this.sfxVol=e,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.musicOn?.55*this.musicVol:0,t,.15),this.sfxBus.gain.setTargetAtTime(this.sfxVol,t,.05)}startTrack(){this.track=this.scene==="title"?F0:this.playlist.next(),this.trackBar=0,this.nowPlaying=this.track,this.bus=this.ctx.createGain(),this.bus.connect(this.musicBus),this.onTrack?.(this.track)}schedule(){let t=this.ctx;for(;this.nextBarTime<t.currentTime+1.2;){this.track||this.startTrack();let e=k0(this.track);this.playBar(this.nextBarTime,e),this.nextBarTime+=e*4,++this.trackBar>=this.track.bars&&(this.scene==="title"?this.trackBar=0:(this.endTrack(0),this.nextBarTime+=B0()))}}playBar(t,e){for(let i of z0(this.track,this.trackBar)){let s=t+i.beat*e+(i.voice==="piano"||i.voice==="bell"||i.voice==="pluck"?(Math.random()-.5)*.03:0),r=i.beats*e;switch(i.voice){case"piano":this.piano(fr(i.notes[0]),s,i.vel);break;case"bell":this.bell(fr(i.notes[0]),s,i.vel);break;case"pluck":this.pluck(fr(i.notes[0]),s,i.vel);break;case"pad":this.pad(i.notes,s,r);break;case"strings":this.strings(i.notes,s,r);break;case"bass":this.bass(i.notes[0],s,r);break;case"drone":this.drone(i.notes[0],s,r);break;default:break}}}piano(t,e,i){let s=this.ctx,r=s.createGain(),o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*9,7e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.5,400),e+2.5),r.connect(o),o.connect(this.bus),o.connect(this.delay);let a=[[1,1,3.2],[2,.42,1.8],[3,.2,1.1],[4,.1,.7],[5.01,.05,.4]];for(let[l,c,h]of a){let d=s.createOscillator();d.type="sine",d.frequency.value=t*l,d.detune.value=(Math.random()-.5)*6;let u=s.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(i*c,e+.008),u.gain.exponentialRampToValueAtTime(1e-4,e+h*1.6),d.connect(u),u.connect(r),d.start(e),d.stop(e+h*1.6+.1)}this.noiseHit(e,.03,"lowpass",t*3,1,i*.5,this.bus)}bell(t,e,i){let s=this.ctx,r=s.createGain();r.connect(this.bus),r.connect(this.delay);for(let[o,a,l]of[[1,1,2.6],[2.76,.32,1.4],[5.4,.12,.8],[8.93,.05,.4]]){let c=s.createOscillator();c.type="sine",c.frequency.value=t*2*o;let h=s.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(i*a*.8,e+.004),h.gain.exponentialRampToValueAtTime(1e-4,e+l*1.7),c.connect(h),h.connect(r),c.start(e),c.stop(e+l*1.7+.1)}}pluck(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=t;let o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*7,6e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.2,300),e+.7);let a=s.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(i*1.4,e+.006),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1),r.connect(o),o.connect(a),a.connect(this.bus),a.connect(this.delay),r.start(e),r.stop(e+1.2)}pad(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=900;let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.05,e+i*.4),o.gain.linearRampToValueAtTime(0,e+i+1.4),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-7,7]){let c=s.createOscillator();c.type="triangle",c.frequency.value=fr(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.5)}}strings(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,e),r.frequency.linearRampToValueAtTime(1300,e+i*.6);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.034,e+i*.55),o.gain.linearRampToValueAtTime(0,e+i+1.8),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-9,0,9]){let c=s.createOscillator();c.type="sawtooth",c.frequency.value=fr(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.9)}}bass(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=fr(t);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.16,e+.06),o.gain.exponentialRampToValueAtTime(1e-4,e+i),r.connect(o),o.connect(this.bus),r.start(e),r.stop(e+i+.1)}drone(t,e,i){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.13,e+i*.35),r.gain.linearRampToValueAtTime(0,e+i),r.connect(this.bus);for(let[o,a]of[[0,"sine"],[7,"sine"],[12,"triangle"]]){let l=s.createOscillator();l.type=a,l.frequency.value=fr(t+o),l.connect(r),l.start(e),l.stop(e+i+.1)}}noiseHit(t,e,i,s,r,o,a=this.sfxBus){let l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loop=!0;let h=l.createBiquadFilter();h.type=i,h.frequency.value=s,h.Q.value=r;let d=l.createGain();d.gain.setValueAtTime(o,t),d.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(d),d.connect(a),c.start(t,Math.random()*.5),c.stop(t+e+.05)}tone(t,e,i,s,r,o="sine"){let a=this.ctx,l=a.createOscillator();l.type=o,l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(i,t+s);let c=a.createGain();c.gain.setValueAtTime(r,t),c.gain.exponentialRampToValueAtTime(1e-4,t+s),l.connect(c),c.connect(this.sfxBus),l.start(t),l.stop(t+s+.05)}block(t,e){if(!this.ctx)return;let i=this.ctx.currentTime,s=Dh.phases[e]??Dh.phases.break,r=Dh.materials[t]??Dh.materials.default,o=.85+Math.random()*.3;for(let a of r){if(a.skipPhases?.includes(e))continue;let l=a.seconds??s.length*(a.lengthScale??1),c=a.jitter===!1?1:o,h=i+(a.delayJitter?Math.random()*a.delayJitter:0);a.type==="noise"?this.noiseHit(h,l,a.filter,a.freq*c,a.q,a.gain*s.loud):this.tone(h,a.from*c,a.to,l,a.gain*s.loud,a.wave??"sine")}}pickup(){if(!this.ctx)return;let t=this.ctx.currentTime,e=520+Math.random()*260;this.tone(t,e,e*2,.09,.14)}craft(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,660,660,.12,.12,"triangle"),this.tone(t+.07,990,990,.16,.12,"triangle"),this.noiseHit(t,.06,"bandpass",2400,1.5,.15)}toolBreak(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.25,"bandpass",1400,1,.5),this.tone(t,300,80,.3,.3,"square")}hurt(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,180,60,.22,.45,"triangle"),this.noiseHit(t,.18,"bandpass",500,.9,.35)}eat(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.07,"bandpass",1500+Math.random()*600,1.4,.45),this.noiseHit(t+.05,.05,"highpass",3200,.8,.18)}click(){this.ctx&&this.tone(this.ctx.currentTime,900,700,.04,.08,"square")}splash(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.5,"bandpass",1200,.6,.5),this.noiseHit(t+.05,.4,"highpass",3e3,.5,.2)}};var ut=16,Oh=n=>Math.max(0,Math.min(255,Math.round(n))),Ja=[0,0,0,0];function H0(n,t){let e=Array.from({length:t*t},n);return(i,s)=>{let r=i/ut*t,o=s/ut*t,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(m,x)=>e[x%t*t+m%t],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}var Jn=(n,t,e=[1,1,1])=>[n[0]+t*e[0],n[1]+t*e[1],n[2]+t*e[2],255],Eb={noise(n,t){let e=(n.noise||[]).map(o=>({f:H0(t,o.cells),amp:o.amp})),i=n.channels||[1,1,1],s=n.specks||{},r=n.edge?.width??0;return(o,a)=>{if(n.holes&&t()<n.holes)return Ja;let l=0;for(let{f:c,amp:h}of e)l+=(c(o,a)-.5)*h;if(l+=(t()-.5)*(n.jitter||0),s.dark||s.light){let c=t();s.dark&&c<s.dark.chance?l+=s.dark.amount:s.light&&c>1-s.light.chance&&(l+=s.light.amount)}return r&&(o<r||a<r||o>ut-1-r||a>ut-1-r)&&(l+=n.edge.amount),Jn(n.base,l,i)}},capped(n,t,e){let i=e.sub(n.cap,t),s=e.sub(n.body,t),r=n.depth||{min:3},o=Array.from({length:ut},()=>(r.min??3)+(r.bonus||[]).reduce((a,l)=>a+(t()<l.chance?l.amount:0),0));return(a,l)=>l<o[a]?i(a,l):s(a,l)},bark(n,t){let e=Array.from({length:ut},()=>(t()-.5)*n.columnVariance),i=n.channels||[1,1,1];return(s,r)=>{let o=e[s]+(t()-.5)*n.jitter;return n.grooveEvery&&s%n.grooveEvery===0&&(o-=n.grooveDarken),t()<(n.speckChance||0)&&(o-=n.speckDarken||0),Jn(n.base,o,i)}},rings(n,t){return(e,i)=>{let s=e-7.5,r=i-7.5;if(Math.max(Math.abs(s),Math.abs(r))>8-(n.barkWidth??1.6))return Jn(n.bark,(t()-.5)*(n.jitter??12));let o=Math.floor(Math.hypot(s,r)*(n.ringScale??.9))%2;return Jn(o?n.light:n.dark,(t()-.5)*(n.jitter??12))}},planks(n,t){let e=n.boardHeight||4,i=Math.ceil(ut/e),s=Array.from({length:i},()=>(t()-.5)*n.boardVariance),r=Array.from({length:i},()=>Math.floor(t()*12+2)),o=n.channels||[1,1,1];return(a,l)=>{let c=Math.floor(l/e),h=s[c]+(t()-.5)*n.jitter;return l%e===e-1&&(h-=n.gapDarken),r[c]===a&&(h-=n.seamDarken),t()<(n.grainChance||0)&&(h-=n.grainDarken||0),Jn(n.base,h,o)}},cells(n,t){let e=Array.from({length:n.points},()=>({x:t()*ut,y:t()*ut,shade:(t()-.5)*n.spread}));return(i,s)=>{let r=1e9,o=1e9,a=0;for(let c of e)for(let h of[-ut,0,ut])for(let d of[-ut,0,ut]){let u=Math.hypot(i-(c.x+h),s-(c.y+d));u<r?(o=r,r=u,a=c.shade):u<o&&(o=u)}let l=a+(t()-.5)*n.jitter;return o-r<n.creviceWidth&&(l=n.creviceValue),Jn(n.base,l)}},waves(n,t){let e=H0(n.seed!=null?_i(n.seed):t,4),i=n.channels||[1,1,1],s=n.phase||0;return(r,o)=>Jn(n.base,Math.sin((r+o*.7)*n.frequency+e(r,o)*4+s)*n.amplitude,i)},bricks(n,t){let e=n.brickWidth||8,i=n.rowHeight||4;return(s,r)=>{let o=Math.floor(r/i)%2?e/2:0,a=r%i===i-1||(s+o)%e===e-1,l=(t()-.5)*(n.variance??22);return a?Jn(n.mortar,l*.4):Jn(n.brick,l,[1,.5,.4])}},ore(n,t,e){let i=e.sub(n.base,t),s=new Map,r=[];for(let l=0,c=n.clusters??6;r.length<c&&l<80;l++){let h=2+Math.floor(t()*11),d=2+Math.floor(t()*11);if(r.some(([m,x])=>Math.abs(m-h)<4&&Math.abs(x-d)<4))continue;let u=2+Math.floor(t()*2),f=2+Math.floor(t()*2);r.push([h,d]);for(let m=0;m<f;m++)for(let x=0;x<u;x++)(x===0||x===u-1)&&(m===0||m===f-1)&&u+f>4&&t()<.6||s.set(h+x+","+(d+m),1)}let o=(l,c)=>s.has(l+","+c),a=(l,c)=>l.map(h=>h*c);return(l,c)=>{if(o(l,c))return!o(l,c-1)||!o(l-1,c)?Jn(n.light,(t()-.5)*14):!o(l,c+1)||!o(l+1,c)?Jn(a(n.color,.8),(t()-.5)*10):Jn(n.color,(t()-.5)*14);let h=!1;for(let u=-1;u<=1&&!h;u++)for(let f=-1;f<=1;f++)if((f||u)&&o(l+f,c+u)){h=!0;break}let d=i(l,c);return h?[d[0]*.62,d[1]*.62,d[2]*.62,d[3]??255]:d}},stripes(n,t){let e=n.darkColumns||[1,2];return i=>Jn(e.includes(i%n.period)?n.dark:n.light,(t()-.5)*n.jitter,[1,.8,.6])},blades(n,t){let e=new Map;for(let i=0;i<n.count;i++){let s=Math.round((i+.5)*ut/n.count+(t()-.5)*1.5),r=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1)),o=t()<.5?-1:1;for(let a=0;a<r;a++){let l=a/r,c=(t()-.5)*22,h=l<.35?n.dark:l<.75?n.mid:n.tip;e.set(`${s+(a>r*.6?o:0)},${ut-1-a}`,[h[0]+c,h[1]+c,h[2]+c*.5,255])}}return(i,s)=>e.get(i+","+s)??Ja},stalks(n,t){let e=new Map;for(let i=0;i<ut;i+=n.spacing||2){let s=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1));for(let r=0;r<s;r++){let o=(t()-.5)*16;e.set(`${i},${ut-1-r}`,[n.stem[0]+o,n.stem[1]+o,n.stem[2]+o*.5,255])}for(let r=0;r<n.headLength;r++){let o=ut-s-1+r;for(let a of r===0?[0]:[0,1]){let l=(t()-.5)*24,c=r%2?n.headDark:n.headLight;e.set(`${Math.min(ut-1,i+a)},${o}`,[c[0]+l,c[1]+l,c[2]+l*.5,255])}}}return(i,s)=>e.get(i+","+s)??Ja},pixelart(n){return(t,e)=>{let i=n.rows[e]?.[t],s=i&&i!=="."?n.palette[i]:null;return s?[s[0],s[1],s[2],s[3]??255]:Ja}},image(n,t,e){let i=e.images?.[n.src];return(s,r)=>{if(!i)return[255,0,255,255];let o=(r*ut+s)*4;return[i[o],i[o+1],i[o+2],i[o+3]]}},layers(n,t,e){let i=n.layers.map(s=>ef(s,t,e));return(s,r)=>{let o=Ja;for(let a of i){let l=a(s,r);l[3]>0&&(o=l)}return o}},ref(n,t,e){return e.sub(n.tile,t)}};function ef(n,t,e){let i=Eb[n.type];if(!i)throw new Error(`unknown texture type "${n.type}"`);return i(n,t,e)}function Tb(n,t){let e={tiles:n,images:t,depth:0,sub(i,s){let r=n[i];if(!r)throw new Error(`texture "${i}" is not defined`);if(e.depth>8)throw new Error(`texture "${i}" refers to itself`);e.depth++;try{return ef(r,s,e)}finally{e.depth--}}};return e}function G0(n,t,e={},i={}){let s=Tb(e,i),r=ef(n,_i(t),s),o=new Uint8ClampedArray(ut*ut*4);for(let a=0;a<ut;a++)for(let l=0;l<ut;l++){let c=r(l,a),h=(a*ut+l)*4;o[h]=Oh(c[0]),o[h+1]=Oh(c[1]),o[h+2]=Oh(c[2]),o[h+3]=Oh(c[3])}return o}var W0=n=>12648430+n*7919,X0=(n,t,e,i)=>G0(e[n],W0(t),e,i),V0={pickaxe:["....dddddd....","..ddLLllbbdd..",".dLllbbbbbbbd.","dLlbd....hHobd","dlbd....hHo.dd","dbd....hHo....","dd....hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"],axe:["........dd...","......ddLLd..",".....dlLbld..","....dLlbbbhh.","....dLllbmbo.",".....dddhbmld","......hhhdbbd","......hhhhbbd",".....hhHo.dd.","....hhoo.....","...hho.......","..hHo........",".hho.........","hHo..........","oo..........."],shovel:["..........ddd.",".........dLLbd","........dLlbLd","......ddLlblLd","........hblLd.","......hhHoLd..",".....hHHo.d...",".....hHHo.d...","....hhoo......","...hHo........","..hho.........","ohHo..........","hHo...........","ho............"],hoe:["...ddddd......","..dLLllbbd....","..dLllbbbbd...","..ddddddbbd...","........dbhHo.",".......hHbo...","......hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"]},Ab={shovel:["........dddd....","......ddLLLLdd..",".....dLLllbbLd..","....dLllllbbbld.","....dLllllbbbbd.","....dllllbbbbmd.",".....dlllbbbbmd.","......dlbbbbmd..",".....hhddbbmd...","....hHHod.dd....","...hHHo.........","..hhHo..........",".hHHo...........","hHHo............","hHo.............","oo.............."]};function Cb(n,t,e,i=!1){let s=i&&Ab[n]||V0[n]||V0.shovel,r=t.light.map(h=>h+(255-h)*.45),o={d:t.dark,b:t.base,m:t.base.map(h=>h*.8),l:t.light,L:r,H:e[0],h:e[1],o:e[1].map(h=>h*.5)},a=ut-s.length,l=Math.min(1,ut-s[0].length),c=new Map;return s.forEach((h,d)=>[...h].forEach((u,f)=>{o[u]&&c.set(f+l+","+(d+a),o[u])})),c}function q0(n,t,e,i={},s=!1){let r=e.sprites?.[n];if(r)return G0(r,W0(900),e.tiles,i);if(t?.tool){let o=e.toolHeads[t.tool.head],a=Cb(t.tool.type,o,e.toolHandle||[[148,108,58],[104,74,38]],s),l=new Uint8ClampedArray(ut*ut*4);for(let[c,h]of a){let[d,u]=c.split(",").map(Number);if(d<0||u<0||d>=ut||u>=ut)continue;let f=(u*ut+d)*4;l[f]=h[0],l[f+1]=h[1],l[f+2]=h[2],l[f+3]=255}return l}throw new Error(`item "${n}" has no sprite`)}function $0(n){let t=new Set,e=i=>{if(i){i.type==="image"&&t.add(i.src);for(let s of i.layers||[])e(s)}};return Object.values(n.tiles||{}).forEach(e),Object.values(n.sprites||{}).forEach(e),[...t]}var So=10,Rb=.15,Ib=n=>Math.max(0,Math.min(So-1,Math.floor(n*So))),Fh=class{constructor(){this.cooldown=0,this.reset()}reset(){this.key=null,this.progress=0}idle(t){this.cooldown=Math.max(0,this.cooldown-t)}tick(t,e,i){if(e!==this.key&&(this.key=e,this.progress=0),this.cooldown>0){let s=Math.min(t,this.cooldown);this.cooldown-=s,t-=s}return t<=0?!1:(this.progress+=t/Math.max(i,.02),this.progress>=1?(this.reset(),this.cooldown=Rb,!0):!1)}get stage(){return Ib(this.progress)}};function Y0(n=16,t=4242){let e=_i(t),i=(n-1)/2,r=n*.6/So,o=Array.from({length:8},(h,d)=>({x:i+(e()-.5)*2,y:i+(e()-.5)*2,a:d/8*Math.PI*2+(e()-.5)*.5,fork:d%2===0?2+Math.floor(e()*3):4+Math.floor(e()*3),life:1})),a=[],l=new Set,c=[];for(let h=0;h<So;h++){for(let d of o.slice()){for(let f=0;f<3;f++){d.a+=(e()-.5)*.5,d.x+=Math.cos(d.a)*r*d.life/3,d.y+=Math.sin(d.a)*r*d.life/3;let m=Math.round(d.x),x=Math.round(d.y),g=m+","+x;m>=0&&x>=0&&m<n&&x<n&&!l.has(g)&&(l.add(g),c.push([m,x]))}d.fork===h&&o.push({x:d.x,y:d.y,a:d.a+(e()<.5?1:-1)*.9,fork:-1,life:.85})}a.push(c.slice())}return a}var nf=n=>Math.max(0,Math.min(255,n|0));function In(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}var rf={};async function Pb(){let n=new URL("../data/",import.meta.url);for(let t of $0(Dt.textures))try{let e=new Image;e.src=new URL(t,n).href,await e.decode();let i=In(ut,ut),s=i.getContext("2d");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0,ut,ut),rf[t]=s.getImageData(0,0,ut,ut).data}catch{console.warn("textures.json: could not load image",t)}}function Z0(n){let t=n.getContext("2d"),e=s=>{let r=yi.indexOf(s);return[r%Le*ut,Math.floor(r/Le)*ut]},i=Object.entries(Dt.animations).map(([s,r])=>({at:e(s),fps:r.fps,shown:0,frames:r.frames.map(o=>{let[a,l]=e(o);return t.getImageData(a,l,ut,ut)})}));return s=>{let r=!1;for(let o of i){let a=Math.floor(Math.max(0,s)*o.fps)%o.frames.length;a!==o.shown&&(t.putImageData(o.frames[a],o.at[0],o.at[1]),o.shown=a,r=!0)}return r}}async function J0(){await Pb();let n=In(Le*ut,cr*ut),t=n.getContext("2d"),e={};return yi.forEach((i,s)=>{let r=X0(i,s,Dt.tiles,rf);t.putImageData(new ImageData(r,ut,ut),s%Le*ut,Math.floor(s/Le)*ut);let o=0,a=0,l=0,c=0;for(let h=0;h<r.length;h+=4)r[h+3]>0&&(o+=r[h],a+=r[h+1],l+=r[h+2],c++);e[i]=c?[o/c/255,a/c/255,l/c/255]:[.5,.5,.5]}),{canvas:n,avg:e}}function K0(n){let t={};for(let[e,i]of Object.entries(Oe))t[e]=n[i.side];return t}function j0(){let t=In(128,128),e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"#ffffff"),i.addColorStop(.35,"#fffbd0"),i.addColorStop(.72,"#ffe45c"),i.addColorStop(.94,"#ffb92e"),i.addColorStop(1,"rgba(255, 170, 40, 0)"),e.fillStyle=i,e.beginPath(),e.arc(128/2,128/2,128/2,0,Math.PI*2),e.fill(),t}function Q0(){let e=In(512,256),i=e.getContext("2d"),s=_i(2024),r=i.createImageData(512,256),o=32,a=16,l=Array.from({length:o*a},s),c=(h,d)=>{let u=h*o,f=d*(a-1),m=Math.floor(u),x=Math.floor(f),g=u-m,p=f-x,w=(E,M)=>l[Math.min(a-1,M)*o+(E%o+o)%o],R=g*g*(3-2*g),v=p*p*(3-2*p);return(w(m,x)*(1-R)+w(m+1,x)*R)*(1-v)+(w(m,x+1)*(1-R)+w(m+1,x+1)*R)*v};for(let h=0;h<256;h++)for(let d=0;d<512;d++){let u=d/512,f=h/256,m=c(u*4%1,f)*.5+c(u*8%1,f)*.3+s()*.12,x=c(u*1%1,f),g=Math.max(0,Math.min(1,(x-.5)*3.2)),p=196+(m-.45)*46;p=p*(1-g*.42);let w=(h*512+d)*4;r.data[w]=p,r.data[w+1]=p*.995,r.data[w+2]=p*1.02,r.data[w+3]=255}i.putImageData(r,0,0);for(let h=0;h<90;h++){let d=s()*512,u=256*(.15+s()*.7),f=2+Math.pow(s(),2.2)*15,m=f*(1+Math.abs(u/256-.5)*.9),x=i.createRadialGradient(d-f*.25,u-f*.25,f*.1,d,u,f);x.addColorStop(0,"rgba(70,72,82,0.55)"),x.addColorStop(.72,"rgba(90,92,102,0.35)"),x.addColorStop(.88,"rgba(235,235,240,0.5)"),x.addColorStop(1,"rgba(235,235,240,0)"),i.save(),i.translate(d,u),i.scale(m/f,1),i.translate(-d,-u),i.fillStyle=x,i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill(),i.restore()}return e}function tg(){let n=In(128,128),t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.25,"rgba(220,228,255,0.35)"),e.addColorStop(.6,"rgba(190,205,255,0.1)"),e.addColorStop(1,"rgba(190,205,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),n}function eg(){let n=In(ut*So,ut),t=n.getContext("2d");return Y0(ut).forEach((e,i)=>{t.fillStyle="rgba(0,0,0,0.72)";for(let[s,r]of e)t.fillRect(i*ut+s,r,1,1)}),n}function Lb(n,t,e=44){let i=Oe[t],s=In(e,e),r=s.getContext("2d");r.imageSmoothingEnabled=!1;let o=e/2,a=o/2,l=o,c=u=>{let f=yi.indexOf(u);return[f%Le*ut,Math.floor(f/Le)*ut]},h=(u,f,m)=>{let[x,g]=c(u);r.save(),r.transform(...f),r.drawImage(n,x,g,ut,ut,0,0,ut,ut),r.fillStyle=`rgba(0,0,0,${m})`,r.fillRect(0,0,ut,ut),r.restore()},d=o;return h(i.top,[o/ut,a/ut,-o/ut,a/ut,d,0],0),h(i.side,[o/ut,a/ut,0,l/ut,d-o,a],.25),h(i.side,[o/ut,-a/ut,0,l/ut,d,2*a],.45),s}var sf=new Map;function of(n,t=!1){let e=t?"h"+n:n;if(sf.has(e))return sf.get(e);let i=q0(M0(n),Dt.itemById.get(n),Dt.textures,rf,t),s=In(ut,ut);return s.getContext("2d").putImageData(new ImageData(i,ut,ut),0,0),sf.set(e,s),s}function ng(n,t=3){let e=In(9*t,9*t),i=e.getContext("2d");i.imageSmoothingEnabled=!1;for(let s=1;s<8;s++)for(let r=0;r<9;r++){let o=((r-4)/4.4)**2+((s-4.3)/3.2)**2;if(o>1)continue;let a=o>.7,l=n===2||n===1&&r<5;i.fillStyle=l?a?"#7a4a1e":s<4?"#e2a24e":"#c0782e":a?"#2a2a2e":"#4a4a52",i.fillRect(r*t,s*t,t,t)}return e}var Nb=["#########","#@@@@@%%#","#@@%%%%%#","#@%%%%%o#","#@%%%%%o#",".#%%%%o#.","..#%%o#..","...#o#...","....#...."];function ig(n,t=3){let e=In(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,Nb.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;i.fillStyle=o==="#"?l?"#4a4a58":"#2a2a2e":l?o==="@"?"#f2f2fa":o==="%"?"#c4c4d4":"#8e8ea4":"#4a4a52",i.fillRect(a*t,r*t,t,t)})),e}var Db=[".##...##.","#@@#.#@@#","#@@@#@@@#","#@@@@@@@#",".#@@@@@#.","..#@@@#..","...#@#...","....#...."];function sg(n,t=3){let e=In(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,Db.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;o==="#"?i.fillStyle=l?"#7a0f12":"#2a2a2e":i.fillStyle=l?r<3?"#ff5a5a":"#d92a2a":"#4a4a52",i.fillRect(a*t,(r+1)*t,t,t)})),n>0&&(i.fillStyle="rgba(255,255,255,0.65)",i.fillRect(2*t,2*t,t,t)),e}function rg(n,t,e=44){let i=Oe[t].side,s=yi.indexOf(i),r=In(e,e),o=r.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(n,s%Le*ut,Math.floor(s/Le)*ut,ut,ut,0,0,e,e),r}function pr(n,t,e=44){if(zs(t))return Lb(n,t,e);let i=In(e,e),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(of(t),0,0,e,e),i}function Bh(n,t="VOXELCRAFT",e=6){let r=(t.length*6+1)*e+e*2,o=9*e+e,a=In(r,o),l=a.getContext("2d");l.imageSmoothingEnabled=!1;let c=n.getContext("2d"),h=Math.max(0,yi.indexOf("stone")),[d,u]=[h%Le*ut,Math.floor(h/Le)*ut],f=c.getImageData(d,u,ut,ut).data,m=r0(t),x=new Set(m.map(([g,p])=>g+","+p));l.fillStyle="rgba(0,0,0,0.45)";for(let[g,p]of m)l.fillRect(g*e+e+4,p*e+e+4,e,e);for(let[g,p]of m){let w=(p%ut*ut+g%ut)*4,R=1.15;l.fillStyle=`rgb(${nf(f[w]*R)},${nf(f[w+1]*R)},${nf(f[w+2]*R)})`,l.fillRect(g*e+e,p*e+e,e,e);let v=g*e+e,E=p*e+e;l.fillStyle="rgba(255,255,255,0.35)",x.has(g+","+(p-1))||l.fillRect(v,E,e,2),x.has(g-1+","+p)||l.fillRect(v,E,2,e),l.fillStyle="rgba(0,0,0,0.45)",x.has(g+","+(p+1))||l.fillRect(v,E+e-2,e,2),x.has(g+1+","+p)||l.fillRect(v+e-2,E,2,e)}return a}function og(n,t=4){let e=Math.max(0,yi.indexOf("dirt")),i=In(ut*t,ut*t),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(n,e%Le*ut,Math.floor(e/Le)*ut,ut,ut,0,0,ut*t,ut*t),i.toDataURL()}var bo=new Map;function wo(n){let t="b"+n;if(bo.has(t))return bo.get(t);let e=Oe[n],i=new Gn(1,1,1),s=i.attributes.uv,r=[e.side,e.side,e.top,e.bottom,e.side,e.side],o=[.82,.82,1,.5,.68,.68],a=new Float32Array(72);return r.forEach((l,c)=>{let h=yi.indexOf(l),d=h%Le/Le,u=1-(Math.floor(h/Le)+1)/cr;for(let f=0;f<4;f++){let m=c*4+f;s.setXY(m,d+s.getX(m)/Le,u+s.getY(m)/cr),a.set([o[c],o[c],o[c]],m*3)}}),i.setAttribute("color",new ge(a,3)),bo.set(t,i),i}function Ka(n,t=!1){let e=(t?"sh":"s")+n;if(bo.has(e))return bo.get(e);let s=of(n,t).getContext("2d").getImageData(0,0,16,16).data,r=(d,u)=>d>=0&&u>=0&&d<16&&u<16&&s[(u*16+d)*4+3]>0,o=[],a=[],l=(Zn(n)?3.4:1.5)/16,c=(d,u,f,m,x,g)=>{for(let p of[d,u,f,d,f,m])o.push(...p),a.push(x[0]*g,x[1]*g,x[2]*g)};for(let d=0;d<16;d++)for(let u=0;u<16;u++){if(!r(u,d))continue;let f=(d*16+u)*4,m=[s[f]/255,s[f+1]/255,s[f+2]/255],x=u/16-.5,g=(u+1)/16-.5,p=.5-d/16,w=.5-(d+1)/16,R=l/2,v=-l/2;c([x,w,R],[g,w,R],[g,p,R],[x,p,R],m,1),c([g,w,v],[x,w,v],[x,p,v],[g,p,v],m,.78),r(u+1,d)||c([g,w,R],[g,w,v],[g,p,v],[g,p,R],m,.85),r(u-1,d)||c([x,w,v],[x,w,R],[x,p,R],[x,p,v],m,.85),r(u,d-1)||c([x,p,R],[g,p,R],[g,p,v],[x,p,v],m,.95),r(u,d+1)||c([x,w,v],[g,w,v],[g,w,R],[x,w,R],m,.6)}let h=new Ge;return h.setAttribute("position",new ge(new Float32Array(o),3)),h.setAttribute("color",new ge(new Float32Array(a),3)),bo.set(e,h),h}var Ub=160,Ob=300,kh=class{constructor(t,e,i,s){this.world=e,this.blockMat=i,this.spriteMat=s,this.group=new sn,t.add(this.group),this.items=[]}spawn(t,e,i,s,r,{d:o=0,delay:a=.5,vx:l,vy:c,vz:h,life:d=Ob,age:u=0}={}){this.items.length>=Ub&&this.remove(0);let f=zs(t),m=new Ce(f?wo(t):Ka(t),f?this.blockMat:this.spriteMat);m.scale.setScalar(f?.28:.5),this.group.add(m),this.items.push({id:t,n:e,d:o,mesh:m,x:i,y:s,z:r,age:u,life:d,delay:a,vx:l??(Math.random()-.5)*2.4,vy:c??3+Math.random()*1.5,vz:h??(Math.random()-.5)*2.4,spin:Math.random()*6,block:f})}serialize(){return this.items.map(t=>({id:t.id,n:t.n,d:t.d,x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),age:Math.round(t.age),life:t.life}))}load(t){for(let e of Array.isArray(t)?t:[])this.spawn(e.id,e.n,e.x,e.y,e.z,{d:e.d,delay:.3,vx:0,vy:0,vz:0,life:e.life,age:e.age})}remove(t){let e=this.items[t];this.group.remove(e.mesh),this.items.splice(t,1)}solid(t,e,i){return Nn[this.world.getBlock(Math.floor(t),Math.floor(e),Math.floor(i))]===1}update(t,e,i,s){for(let r=this.items.length-1;r>=0;r--){let o=this.items[r];if(o.age+=t,o.age>o.life){this.remove(r);continue}if(!this.world.isLoaded(o.x,o.z))continue;let a=o.block?.14:.2,l=e.x-o.x,c=e.y+.7-o.y,h=e.z-o.z,d=Math.hypot(l,c,h),u=o.age>o.delay&&i(o);if(u&&d<.9&&s(o)){this.remove(r);continue}if(u&&d<2.6){let p=14*t/Math.max(d,.3);o.vx+=l*p,o.vy+=c*p,o.vz+=h*p,o.vx*=.9,o.vy*=.9,o.vz*=.9}else o.vy-=20*t;let f=o.x+o.vx*t,m=o.y+o.vy*t,x=o.z+o.vz*t;this.solid(f,o.y,o.z)&&(f=o.x,o.vx=0),this.solid(f,o.y,x)&&(x=o.z,o.vz=0),this.solid(f,m-a,x)?(m=Math.floor(m-a)+1+a,o.vy<0&&(o.vy=0),o.vx*=.8,o.vz*=.8):this.solid(f,m+a,x)&&o.vy>0&&(o.vy=0,m=o.y),o.x=f,o.y=m,o.z=x;let g=Math.sin(o.age*3+o.spin)*.05+.1;o.mesh.position.set(o.x,o.y+g,o.z),o.mesh.rotation.y=o.age*1.8+o.spin}}};var us=0,mr=1,ds=2,ja=n=>Hs(n)>0,lg=n=>!!Xd(n);function ag(){return{slots:[null,null,null],burn:0,burnMax:0,progress:0,working:0}}function zh(n){let t=n.slots[us],e=n.slots[ds],i=t?Xd(t.id):null,s=!!i&&(!e||e.id===i.out&&e.n<On(i.out));return{rec:i,can:s}}function Fb(n,t){let{rec:e,can:i}=zh(n),s=n.slots[us],r=n.slots[mr];if(n.working!==(e?e.in:0)&&(n.working=e?e.in:0,n.progress=0),n.burn<=0&&i&&r&&ja(r.id)&&(n.burn=n.burnMax=Hs(r.id),--r.n<=0&&(n.slots[mr]=null)),n.burn>0){if(n.burn=Math.max(0,n.burn-t),n.burn<=0){let o=zh(n),a=n.slots[mr];o.can&&a&&ja(a.id)&&(n.burnMax=n.burn=Hs(a.id),--a.n<=0&&(n.slots[mr]=null))}i?(n.progress+=t,n.progress>=e.seconds&&(n.progress-=e.seconds,--s.n<=0&&(n.slots[us]=null,n.progress=0),n.slots[ds]?n.slots[ds].n+=1:n.slots[ds]={id:e.out,n:1,d:0})):n.progress=Math.max(0,n.progress-2*t)}else n.progress=Math.max(0,n.progress-2*t)}var Bb=n=>n.burn>0,kb=n=>n.slots.every(t=>!t)&&n.burn<=0&&n.progress<=0;function cg(n,t,e,i=0){if(t===ds){let r=n.slots[ds];if(!r)return{cursor:e,took:null};if(e&&(e.id!==r.id||e.n+r.n>On(r.id)))return{cursor:e,took:null};let o={...r};return n.slots[ds]=null,{cursor:e?{...e,n:e.n+r.n}:r,took:o}}let s=t===us?lg:ja;return{cursor:Jd(n.slots,t,e,i,s),took:null}}function hg(n,t){let e=lg(t.id)?us:ja(t.id)?mr:-1;if(e<0)return t.n;let i=n.slots[e],s=On(t.id);if(!i)return n.slots[e]={id:t.id,n:t.n,d:t.d},0;if(i.id!==t.id)return t.n;let r=Math.min(s-i.n,t.n);return i.n+=r,t.n-r}function ug(n,t,e){let i={input:0,fuel:0},s=n.slots[us];if(s&&s.id!==e.in)return i;let r=On(e.in)-(s?s.n:0),o=Math.min(r,t.count(e.in));if(o>0&&(t.remove(e.in,o),s?s.n+=o:n.slots[us]={id:e.in,n:o,d:0},i.input=o),!n.slots[mr]&&n.burn<=0&&n.slots[us]){let a=n.slots[us].n*e.seconds,l=u=>t.count(u),c=[...new Set(t.slots.filter(u=>u&&ja(u.id)&&u.id!==e.in).map(u=>u.id))].map(u=>({id:u,per:Hs(u),total:l(u)*Hs(u)})),d=c.filter(u=>u.total>=a).sort((u,f)=>u.per-f.per)[0]??c.sort((u,f)=>f.total-u.total)[0];if(d){let u=Math.min(On(d.id),l(d.id),Math.ceil(a/d.per));t.remove(d.id,u),n.slots[mr]={id:d.id,n:u,d:0},i.fuel=u}}return i}var Hh=class n{constructor(t={}){this.map=new Map,this.hooks=t}static key(t,e,i){return t+","+e+","+i}get(t,e,i){let s=n.key(t,e,i);if(!this.map.has(s)){let r=ag();r.lit=null,this.map.set(s,r)}return this.map.get(s)}has(t,e,i){return this.map.has(n.key(t,e,i))}remove(t,e,i){let s=n.key(t,e,i),r=this.map.get(s);return this.map.delete(s),r?r.slots.filter(Boolean):[]}update(t){for(let[e,i]of this.map){Fb(i,t);let s=Bb(i);if(s!==i.lit){let[r,o,a]=e.split(",").map(Number);this.hooks.onLit?.(r,o,a,s)!==!1&&(i.lit=s)}}}serialize(){let t={};for(let[e,i]of this.map)kb(i)||(t[e]={slots:i.slots.map(s=>s?[s.id,s.n,s.d||0]:null),burn:i.burn,burnMax:i.burnMax,progress:i.progress});return t}load(t){this.map.clear();for(let[e,i]of Object.entries(t||{})){let s=ag();s.slots=[0,1,2].map(r=>i.slots?.[r]?{id:i.slots[r][0],n:i.slots[r][1],d:i.slots[r][2]||0}:null),s.burn=i.burn||0,s.burnMax=i.burnMax||0,s.progress=i.progress||0,s.lit=null,this.map.set(e,s)}}};var Re=n=>document.getElementById(n);function dg({atlas:n,inventory:t,getHotbarStack:e,onCraft:i,onToss:s,onPalettePick:r,onSelect:o,onSmeltTake:a,onEquip:l,onNotice:c}){let h=new Map,d=b=>(h.has(b)||h.set(b,pr(n,b,44).toDataURL()),h.get(b));function u(b,_=""){let N=document.createElement("div");if(N.className="slot "+_,b){let U=document.createElement("img");if(U.src=d(b.id),U.draggable=!1,N.appendChild(U),b.n>1){let at=document.createElement("span");at.className="count",at.textContent=b.n,N.appendChild(at)}let X=Wa(b.id);if(X&&b.d>0){let at=document.createElement("div");at.className="dura";let Y=1-b.d/X;at.innerHTML=`<i style="width:${Math.max(6,Y*100)}%;background:hsl(${Y*120},80%,48%)"></i>`,N.appendChild(at)}N.dataset.tip=vn(b.id),X&&(N.dataset.tipSub=`Durability ${X-b.d} / ${X}`);let rt=ls(b.id);rt&&(N.dataset.tipSub=rt.armor?`Armor +${rt.armor}  (${xo.find(at=>at.id===rt.slot)?.label})`:rt.slots?`Backpack: adds ${rt.slots} inventory slots`:`Wear it in the ${xo.find(at=>at.id===rt.slot)?.label} slot`)}return N}let f=Re("hotbar");function m(b){f.replaceChildren();for(let _=0;_<yo;_++){let N=u(e(_),_===b?"sel":""),U=document.createElement("span");U.className="num",U.textContent=_+1,N.appendChild(U),N.addEventListener("mousedown",X=>{X.stopPropagation(),o(_)}),f.appendChild(N)}}let x=Re("inventory"),g=Re("inv-grid"),p=Re("inv-hotbar"),w=Re("recipes"),R=Re("cursor-item"),v=null,E=!1;function M(b){let _=u(t.slots[b]);return _.addEventListener("mousedown",N=>{N.preventDefault(),N.stopPropagation();let U=t.slots[b];if(N.shiftKey&&N.button===0&&U&&(ls(U.id)||Si(U.id))&&t.quickEquip(b))l?.();else if(N.shiftKey&&N.button===0&&O){if(U){let X=hg(O,U);X<=0?t.slots[b]=null:U.n=X}}else N.shiftKey&&N.button===0?t.quickMove(b):v=t.clickSlot(b,v,N.button===2?2:0);Bt()}),_}let C=Re("equip-row"),y={};function A(){C.replaceChildren();for(let b of xo){let _=t.equipment[b.id],N=document.createElement("div");N.className="equip-cell";let U=u(_,"equip"+(_?" worn":""));if(!_){let rt=I(b.id);if(rt){let at=document.createElement("img");at.src=d(rt),at.className="ghost",at.draggable=!1,U.appendChild(at)}U.dataset.tip=b.label,U.dataset.tipSub=b.id==="shield"?"A shield, or torches to hold in your off hand (G places one)":"Drop a "+b.label.toLowerCase()+" here to wear it"}U.addEventListener("mousedown",rt=>{if(rt.preventDefault(),rt.stopPropagation(),rt.shiftKey&&rt.button===0)_&&t.canFit(_.id,1)&&!(b.id==="backpack"&&t.slots.slice(cs).some(Boolean))?(t.equipment[b.id]=null,t.add(_.id,1,_.d)):_&&b.id==="backpack"&&c?.("Empty the backpack first");else{let at=!t.equipment[b.id],Y=t.clickEquip(b.id,v,rt.button===2?2:0);Y.refused&&c?.(Y.refused),v=Y.cursor,at&&t.equipment[b.id]&&l?.()}Bt()});let X=document.createElement("small");X.textContent=b.label,N.append(U,X),C.appendChild(N)}}function I(b){if(y[b]===void 0){y[b]=null;for(let _=100;_<400;_++)if(ls(_)?.slot===b){y[b]=_;break}}return y[b]}function P(){g.replaceChildren(),p.replaceChildren(),Re("backpack-grid").replaceChildren();let b=t.capacity;for(let _=0;_<b;_++){let N=M(_);(_<yo?p:_<cs?g:Re("backpack-grid")).appendChild(N)}Re("backpack-box").hidden=b<=cs,A(),F(),tt(),S()}function F(){v?(R.hidden=!1,R.replaceChildren(...u(v,"bare").childNodes)):R.hidden=!0}let k=$a,D="hand",O=null,Z=Re("recipe-search"),Q=Re("recipe-only");try{Q.checked=localStorage.getItem("voxelcraft.recipeOnly")==="1"}catch{}let it=()=>({table:D==="table",furnace:D==="furnace"}),H=()=>!!k[D].furnace,G=b=>{let _=Z.value.trim().toLowerCase().split(/\s+/).filter(Boolean),N=b.toLowerCase();return _.every(U=>N.includes(U))};function tt(){pt();let b=k[D],_=!!b.furnace;Re("craft-title").textContent=b.title,Re("recipe-only-label").textContent=_?"Smeltable only":"Craftable only",Re("furnace-panel").hidden=!_,_&&Tt();let N=Q.checked;w.replaceChildren();let U=0,X=(rt,at,Y,st,_t,Lt,mt)=>{let ft=document.createElement("div");ft.className="recipe"+(Lt?" can":""),ft.dataset.kind=rt,ft.dataset.index=at;let Nt=u(Y,"bare"),Vt=document.createElement("div");if(Vt.className="rtext",Vt.innerHTML=`<b>${st}</b><div class="ings">${_t}</div>`,ft.append(Nt,Vt),mt){let qt=document.createElement("span");qt.className="secs",qt.textContent=mt,ft.appendChild(qt)}ft.addEventListener("mousedown",qt=>{if(qt.preventDefault(),qt.stopPropagation(),rt==="smelt"){ug(O,t,Ch[at]),Bt();return}let z=qa[at];t.canCraft(z,it())&&(i(z,t.craft(z,it())),Bt())}),w.appendChild(ft),U++};if(_)Ch.forEach((rt,at)=>{let Y=t.count(rt.in);if(N&&Y<1||!G(vn(rt.out)+" "+vn(rt.in)))return;let st=`<span class="ing ${Y>=1?"ok":"no"}"><img src="${d(rt.in)}" draggable="false">${Y}/1</span>`;X("smelt",at,{id:rt.out,n:1,d:0},vn(rt.out),st,Y>=1,rt.seconds+" s")});else{let rt=it();for(let at of b.stations)qa.forEach((Y,st)=>{if(Y.station!==at)return;let _t=t.canCraft(Y,rt);if(N&&!_t||!G((Y.label||"")+" "+vn(Y.out)+" "+Y.ins.map(([mt])=>Wd(mt)).join(" ")))return;let Lt=Y.ins.map(([mt,ft])=>{let Nt=t.countSpec(mt);return`<span class="ing ${Nt>=ft?"ok":"no"}"><img src="${d(hr(mt)[0])}" draggable="false">${Nt}/${ft}</span>`}).join("");X("craft",st,{id:Y.out,n:Y.n,d:0},Y.label||vn(Y.out),Lt,_t)})}if(!U){let rt=document.createElement("p");rt.className="recipe-empty",rt.textContent=Z.value.trim()?"Nothing matches that search.":N?_?"Nothing in your inventory can be smelted yet.":"You cannot craft anything here yet. Untick the box to see every recipe.":"No recipes.",w.appendChild(rt)}}Z.addEventListener("input",tt),Q.addEventListener("change",()=>{try{localStorage.setItem("voxelcraft.recipeOnly",Q.checked?"1":"0")}catch{}tt()});let gt=[Re("fur-input"),Re("fur-fuel"),Re("fur-output")],J=["Put something to smelt here","Fuel: coal, charcoal, logs, planks...","The finished items appear here"],xt="",yt=b=>b.slots.map(_=>_?_.id+":"+_.n:"-").join("|");function Tt(){O&&(xt=yt(O),gt.forEach((b,_)=>{let N=O.slots[_],U=u(N);b.replaceChildren(...U.childNodes),N?(b.dataset.tip=U.dataset.tip,delete b.dataset.tipSub):(b.dataset.tip=J[_],delete b.dataset.tipSub)}),W())}function W(){if(!O)return;let{rec:b}=zh(O);Re("fur-flame").classList.toggle("lit",O.burn>0),Re("fur-flame").firstElementChild.style.height=(O.burnMax>0?Math.min(100,O.burn/O.burnMax*100):0)+"%",Re("fur-arrow").firstElementChild.style.width=(b&&O.progress>0?Math.min(100,O.progress/b.seconds*100):0)+"%"}gt.forEach((b,_)=>{b.addEventListener("mousedown",N=>{if(N.preventDefault(),N.stopPropagation(),!!O){if(N.shiftKey&&N.button===0){let U=O.slots[_];if(U){let X=t.add(U.id,U.n,U.d);_===ds&&X<U.n&&a?.({id:U.id,n:U.n-X}),O.slots[_]=X>0?{...U,n:X}:null}}else{let U=cg(O,_,v,N.button===2?2:0);v=U.cursor,U.took&&a?.(U.took)}Bt()}})});let K=Re("recipe-tip");function pt(){K.hidden=!0}function Pt(b,_,N){let U=Ch[Number(b.dataset.index)],X=t.count(U.in),rt=S0.map(at=>`${vn(at)} (${Hs(at)} s)`).join(", ");K.innerHTML=`<h4>${vn(U.out)}</h4><div class="tip-head">Smelts:</div>
      <div class="tip-ing ${X>=1?"ok":"no"}"><img src="${d(U.in)}" draggable="false"><span>1\xD7 ${vn(U.in)}</span><em>${X>=1?"\u2714":"\u2718"} you have ${X}</em></div>
      <div class="tip-station">Takes ${U.seconds} seconds per item and needs fuel</div>
      <div class="tip-station">Burns: ${rt}</div>
      ${X>=1?'<div class="tip-ok">Click to load it into the furnace</div>':'<div class="tip-no">You have none to smelt</div>'}`,K.hidden=!1,K.style.left=Math.min(_+18,window.innerWidth-K.offsetWidth-8)+"px",K.style.top=Math.min(N+14,window.innerHeight-K.offsetHeight-8)+"px"}function vt(b,_,N){if(b.dataset.kind==="smelt")return Pt(b,_,N);let U=qa[Number(b.dataset.index)],X=t.canCraft(U,it()),rt=U.ins.map(([Lt,mt])=>{let ft=t.countSpec(Lt),Nt=ft>=mt;return`<div class="tip-ing ${Nt?"ok":"no"}"><img src="${d(hr(Lt)[0])}" draggable="false">
        <span>${mt}\xD7 ${Wd(Lt)}</span><em>${Nt?"\u2714":"\u2718"} you have ${ft}</em></div>`}).join(""),at=U.station?`<div class="tip-station">Made at: ${A0[U.station]}</div>`:'<div class="tip-station">Made by hand</div>',Y=X?'<div class="tip-ok">Click to craft</div>':'<div class="tip-no">Missing materials</div>';K.innerHTML=`<h4>${U.label||vn(U.out)} \xD7${U.n}</h4><div class="tip-head">Requires:</div>${rt}${at}${Y}`,K.hidden=!1;let st=K.offsetWidth,_t=K.offsetHeight;K.style.left=Math.min(_+18,window.innerWidth-st-8)+"px",K.style.top=Math.min(N+14,window.innerHeight-_t-8)+"px"}w.addEventListener("mousemove",b=>{let _=b.target.closest(".recipe");_?vt(_,b.clientX,b.clientY):pt()}),w.addEventListener("mouseleave",pt);function Bt(){P(),m(et)}let _e=Re("item-tip"),Xt=0,Qt=0,fe=()=>{_e.hidden=!0};function te(b,_,N){b.hidden=!1,b.style.left=Math.min(_+16,window.innerWidth-b.offsetWidth-8)+"px",b.style.top=Math.min(N+14,window.innerHeight-b.offsetHeight-8)+"px"}function S(){if(!E&&lt.hidden){fe();return}let b=document.elementFromPoint(Xt,Qt),_=b?.closest?.(".slot[data-tip]");_&&!v&&_.closest("#inventory, #palette")?(_e.innerHTML=`<b></b>${_.dataset.tipSub?"<span></span>":""}`,_e.firstChild.textContent=_.dataset.tip,_.dataset.tipSub&&(_e.lastChild.textContent=_.dataset.tipSub),te(_e,Xt,Qt)):fe();let N=b?.closest?.(".recipe");N&&E?vt(N,Xt,Qt):pt()}document.addEventListener("mousemove",b=>{Xt=b.clientX,Qt=b.clientY,S()});let et=0;x.addEventListener("mousemove",b=>{R.style.left=b.clientX+"px",R.style.top=b.clientY+"px"}),x.addEventListener("mousedown",b=>{b.target!==x||!v||(b.button===2&&v.n>1?(s({...v,n:1}),v.n-=1):(s(v),v=null),F())});function nt(b,_="hand",N=null){et=b,D=k[_]?_:"hand",O=k[D].furnace?N:null,Z.value="",E=!0,x.hidden=!1,P()}function dt(){if(pt(),fe(),v){let b=t.add(v.id,v.n,v.d);b>0&&s({...v,n:b}),v=null}O=null,E=!1,x.hidden=!0,m(et)}let lt=Re("palette"),L=Re("palette-grid");for(let b of Sh){let _=u({id:b,n:1,d:0});_.addEventListener("click",()=>r(b)),L.appendChild(_)}let ye=Re("goal-list");function ce(b){ye.replaceChildren(),Re("goal-count").textContent=`${b.filter(Boolean).length}/${ur.length}`;let _=b.lastIndexOf(!0),N=0;if(ur.forEach((U,X)=>{if(!(b[X]?X===_:++N<=2))return;let at=document.createElement("li");at.className=b[X]?"done":"todo",at.textContent=U.text,ye.appendChild(at)}),b.every(Boolean)){let U=document.createElement("li");U.className="done",U.textContent="All goals complete!",ye.appendChild(U)}}return{renderHotbar:b=>{et=b,m(b),E&&P()},refreshInventory:()=>{E&&P()},tickFurnace:()=>{!E||!O||(yt(O)!==xt?Tt():W())},openInventory:nt,closeInventory:dt,renderGoals:ce,openPalette:()=>{lt.hidden=!1},closePalette:()=>{lt.hidden=!0,fe()},get invOpen(){return E},get paletteOpen(){return!lt.hidden}}}function fg(n,t,e=56,i=.14){let s=Math.hypot(n,t)/e;if(!(s>0))return{strafe:0,forward:0,mag:0,edge:!1};let r=Math.min(1,s),o=n/(s*e),a=t/(s*e),l=r<=i?0:(r-i)/(1-i);return{strafe:o*l,forward:-a*l,mag:l,edge:s>=.94}}var pg=n=>n.edge&&n.forward>.3;function mg(n,t,e=56){let i=t.x-n.x,s=t.y-n.y,r=Math.hypot(i,s);if(r<=e)return{x:n.x,y:n.y};let o=(r-e)/r;return{x:n.x+i*o,y:n.y+s*o}}function gg(n,t,e,i=!1){return{yaw:-n*e*1.7,pitch:-t*e*1.7*(i?-1:1)}}var zb=["attack","use","jump","fly","sprint","crouch","inv","menu"];function xg(n){let t={};if(!n||typeof n!="object")return t;for(let e of zb){let i=n[e];i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&(t[e]={x:Math.min(1,Math.max(0,i.x)),y:Math.min(1,Math.max(0,i.y))})}return t}function _g(n,t,e,i,s,r,o=4){let a=(c,h)=>Math.min(.5,(c/2+o)/h),l=(c,h)=>1-a(c,h);return{x:Math.min(l(e,s),Math.max(a(e,s),n/s)),y:Math.min(l(i,r),Math.max(a(i,r),t/r))}}function Hb({coarse:n=!1,search:t=""}={}){let e=new URLSearchParams(t);return e.has("touch")?!0:e.has("desktop")?!1:!!n}function af(){return typeof window>"u"?!1:Hb({coarse:!!window.matchMedia?.("(pointer: coarse)").matches,search:window.location.search})}var Eo=[{id:"forward",label:"Move forward",group:"Movement",key:"KeyW"},{id:"back",label:"Move backward",group:"Movement",key:"KeyS"},{id:"left",label:"Move left",group:"Movement",key:"KeyA"},{id:"right",label:"Move right",group:"Movement",key:"KeyD"},{id:"jump",label:"Jump / swim up / fly up",group:"Movement",key:"Space"},{id:"sprint",label:"Sprint",group:"Movement",key:"Tab"},{id:"crouch",label:"Crouch / fly down",group:"Movement",key:"ShiftLeft"},{id:"down",label:"Fly down (extra key)",group:"Movement",key:"KeyC"},{id:"inventory",label:"Inventory & crafting",group:"Actions",key:"KeyE"},{id:"drop",label:"Drop item",group:"Actions",key:"KeyQ"},{id:"fly",label:"Toggle flight (creative)",group:"Actions",key:"KeyF"},{id:"offhand",label:"Use offhand item (place a torch from the shield slot)",group:"Actions",key:"KeyG"},...Array.from({length:9},(n,t)=>({id:"slot"+(t+1),label:"Hotbar slot "+(t+1),group:"Hotbar",key:"Digit"+(t+1)})),{id:"map",label:"Full-screen map (or tap the minimap)",group:"Actions",key:"KeyN"},{id:"music",label:"Toggle music",group:"Other",key:"KeyM"},{id:"skipTime",label:"Skip time of day",group:"Other",key:"KeyT"},{id:"renderUp",label:"Render distance +",group:"Other",key:"BracketRight"},{id:"renderDown",label:"Render distance -",group:"Other",key:"BracketLeft"},{id:"debug",label:"Debug info",group:"Other",key:"F3"}],Vh={sensitivity:1,invertY:!1,rawInput:!0,fov:75,musicVolume:.8,sfxVolume:.9,touchControls:af(),hudSize:af()?1.3:1,touchLayout:{}},lf=.0022,yg="voxelcraft.settings.v1";function Qa(n){return n?n.startsWith("Key")?n.slice(3):n.startsWith("Digit")?n.slice(5):n.startsWith("Numpad")?"Num "+n.slice(6):{Space:"Space",ShiftLeft:"Left Shift",ShiftRight:"Right Shift",ControlLeft:"Left Ctrl",ControlRight:"Right Ctrl",AltLeft:"Left Alt",AltRight:"Right Alt",Tab:"Tab",CapsLock:"Caps Lock",Enter:"Enter",Backspace:"Backspace",ArrowUp:"Up Arrow",ArrowDown:"Down Arrow",ArrowLeft:"Left Arrow",ArrowRight:"Right Arrow",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",Minus:"-",Equal:"=",Backquote:"`"}[n]||n:"Unbound"}var Gh=class{constructor(){this.values={...Vh},this.binds=Object.fromEntries(Eo.map(t=>[t.id,t.key])),this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem(yg)||"null");if(t){for(let e of Object.keys(Vh))typeof t.values?.[e]==typeof Vh[e]&&t.values[e]!==null&&(this.values[e]=t.values[e]);for(let e of Eo)t.binds&&e.id in t.binds&&(this.binds[e.id]=t.binds[e.id]);t.binds&&!("crouch"in t.binds)&&t.binds.sprint==="ShiftLeft"&&(this.binds.sprint="Tab")}}catch{}this.rebuild()}rebuild(){this.reverse=new Map;for(let[t,e]of Object.entries(this.binds))e&&this.reverse.set(e,t)}save(){try{localStorage.setItem(yg,JSON.stringify({values:this.values,binds:this.binds}))}catch{}for(let t of this.listeners)t(this)}get(t){return this.values[t]}set(t,e){this.values[t]=e,this.save()}onChange(t){this.listeners.add(t)}key(t){return this.binds[t]}actionFor(t){return this.reverse.get(t)}setBind(t,e){let i=this.reverse.get(e),s=null;return i&&i!==t&&(this.binds[i]=this.binds[t],s=i),this.binds[t]=e,this.rebuild(),this.save(),s}resetBinds(){this.binds=Object.fromEntries(Eo.map(t=>[t.id,t.key])),this.rebuild(),this.save()}resetAll(){this.values={...Vh,touchLayout:{}},this.resetBinds()}};var tl=n=>document.getElementById(n),Vb=[{key:"sensitivity",label:"Look sensitivity (mouse / touch)",min:.1,max:3,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"fov",label:"Field of view",min:60,max:110,step:1,fmt:n=>n+"\xB0",peek:!0},{key:"hudSize",label:"HUD size (hotbar, hearts, map, goals)",min:.7,max:1.8,step:.05,fmt:n=>Math.round(n*100)+"%",peek:!0},{key:"musicVolume",label:"Music volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"sfxVolume",label:"Sound effects volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"}],Gb=[{key:"invertY",label:"Invert mouse Y axis"},{key:"rawInput",label:"Raw mouse input (no OS acceleration)"},{key:"touchControls",label:"On-screen touch controls (sticks and buttons)"}];function vg(n,{onClose:t,layout:e}){let i=tl("options"),s=tl("opt-general"),r=tl("opt-keys"),o=!1,a=null,l=!1,c=null,h=0,d=M=>{l=M,document.body.classList.toggle("peek",M),c?.classList.toggle("peeking",M)},u=()=>{clearTimeout(h),h=setTimeout(()=>{f||d(!1)},900)},f=!1,m=()=>{f&&(f=!1,u())};window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m);function x(){s.replaceChildren(),c=null;for(let y of Vb){let A=document.createElement("label");A.className="opt-row";let I=document.createElement("span");I.textContent=y.label;let P=document.createElement("input");P.type="range",P.min=y.min,P.max=y.max,P.step=y.step,P.value=n.get(y.key);let F=document.createElement("output");F.textContent=y.fmt(Number(P.value)),P.addEventListener("input",()=>{let k=Number(P.value);F.textContent=y.fmt(k),n.set(y.key,k),y.peek&&(c=A,d(!0),u())}),y.peek&&P.addEventListener("pointerdown",()=>{f=!0,c=A,d(!0)}),A.append(I,P,F),s.appendChild(A)}for(let y of Gb){let A=document.createElement("label");A.className="opt-row toggle";let I=document.createElement("input");I.type="checkbox",I.checked=n.get(y.key),I.addEventListener("change",()=>n.set(y.key,I.checked));let P=document.createElement("span");P.textContent=y.label,A.append(I,P),s.appendChild(A)}let M=document.createElement("div");if(M.className="opt-row touch-only",M.style.gridTemplateColumns="1fr",e?.available()){let y=document.createElement("button");y.className="small",y.textContent="Move the touch controls...",y.addEventListener("click",()=>{E(),e.edit()}),M.append(y)}else M.append(Object.assign(document.createElement("span"),{className:"opt-hint",textContent:"To move the touch buttons, open Options from the pause menu while you are in a world."}));s.prepend(M);let C=document.createElement("p");C.className="opt-hint",C.textContent="Tip: sensitivity changes apply instantly. Raw input takes effect the next time you click Resume.",s.appendChild(C)}function g(M=""){r.replaceChildren();let C=document.createElement("p");C.className="opt-hint",C.textContent=M||"Click a key, then press the new key. Esc cancels. If the key is already used, the two actions swap.",r.appendChild(C);let y="";for(let P of Eo){if(P.group!==y){y=P.group;let O=document.createElement("h3");O.textContent=y,r.appendChild(O)}let F=document.createElement("div");F.className="bind-row";let k=document.createElement("span");k.textContent=P.label;let D=document.createElement("button");D.className="bind-btn"+(n.key(P.id)===P.key?"":" changed"),D.textContent=Qa(n.key(P.id)),D.addEventListener("click",()=>p(P.id,D)),F.append(k,D),r.appendChild(F)}let A=document.createElement("p");A.className="opt-hint",A.textContent="Mouse buttons are fixed: left = break, right = place / use, middle = pick block, wheel = hotbar.";let I=document.createElement("button");I.className="small",I.textContent="Reset keys to defaults",I.addEventListener("click",()=>{n.resetBinds(),g("Keys reset to defaults.")}),r.append(A,I)}function p(M,C){w(),a={action:M,button:C},C.textContent="Press a key\u2026",C.classList.add("waiting")}function w(){a&&(a=null,g())}window.addEventListener("keydown",M=>{if(o)if(a){if(M.preventDefault(),M.stopImmediatePropagation(),M.code==="Escape"){w();return}let C=a.action;a=null;let y=n.setBind(C,M.code),A=I=>Eo.find(P=>P.id===I).label;g(y?`"${A(C)}" is now ${Qa(M.code)}; swapped with "${A(y)}".`:"")}else M.code==="Escape"&&(M.stopImmediatePropagation(),E())},!0);function R(M){s.hidden=M!=="general",r.hidden=M!=="keys";for(let C of i.querySelectorAll(".opt-tabs button"))C.classList.toggle("active",C.dataset.tab===M)}for(let M of i.querySelectorAll(".opt-tabs button"))M.addEventListener("click",()=>{w(),R(M.dataset.tab)});function v(){o=!0,x(),g(),R("general"),i.hidden=!1}function E(){w(),f=!1,clearTimeout(h),d(!1),o=!1,i.hidden=!0,t()}return tl("opt-done").addEventListener("click",E),tl("opt-reset").addEventListener("click",()=>{n.resetAll(),x(),g("Everything reset to defaults.")}),{open:v,close:E,get isOpen(){return o}}}var Mg={},Sg={},bg={};for(let n of Dt.blocks)n.plant?.growth&&(Mg[n.id]={next:n.plant.growth.next,rate:n.plant.growth.rate,soil:n.plant.growth.soil}),n.plant?.spreads&&(Sg[n.id]=n.plant.spreads),n.plant?.grows&&(bg[n.id]=n.plant.grows);var wg={};for(let n=1;n<za.length;n++)za[n]&&(wg[za[n]]=n);function cf(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.plants.size===0))for(let h of[...c.plants]){let d=c.data[h],u=l*16+h%16,f=a*16+Math.floor(h/16)%16,m=Math.floor(h/256),x=Mg[d],g=Sg[d],p=bg[d];if(p)r()<p.rate*s&&p.soil.includes(n.getBlock(u,m-1,f))&&x0(n,u,m,f,p.trees,n.seed,r)&&o++;else if(x)r()<x.rate*s&&n.getBlock(u,m-1,f)===x.soil&&(n.setBlock(u,m,f,x.next),o++);else if(g&&r()<g.rate*s){let w=g.range*2+1,R=u+Math.floor(r()*w)-g.range,v=f+Math.floor(r()*w)-g.range;n.getBlock(R,m,v)===Kt.AIR&&n.getBlock(R,m-1,v)===g.onto&&(n.setBlock(R,m,v,g.block),o++)}}}return o}function Wb(n,t,e,i,s=Math.random,r=Dt.game.spread.chance){let o=wg[n.getBlock(t,e,i)];if(!o)return!1;let a=n.getBlock(t,e+1,i);if(a!==Kt.AIR&&!jt[a])return!1;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++)if((h||l||c)&&n.getBlock(t+h,e+l,i+c)===o)return s()>=r?!1:(n.setBlock(t,e,i,o),!0);return!1}function Eg(n,t,e,i,s,r=Math.random,o=Dt.game.spread.samplesPerChunk){let a=0;for(let l=e-i;l<=e+i;l++)for(let c=t-i;c<=t+i;c++){if(!n.getChunk(c,l))continue;let d=Math.floor(o*s+r());for(let u=0;u<d;u++){let f=c*16+Math.floor(r()*16),m=l*16+Math.floor(r()*16),x=63;for(;x>0;){let g=n.getBlock(f,x,m);if(g!==Kt.AIR&&!jt[g])break;x--}Wb(n,f,x,m,r)&&a++}}return a}function Tg(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.hydrating.size===0))for(let h of[...c.hydrating]){let d=Va.get(c.data[h]);if(!d)continue;let u=l*16+h%16,f=a*16+Math.floor(h/16)%16,m=Math.floor(h/256),x=n.nearWater(u,m,f);x&&d.wet?(n.setBlock(u,m,f,d.wet),o++):!x&&d.dry?(n.setBlock(u,m,f,d.dry),o++):!x&&d.decayInto&&n.getBlock(u,m+1,f)===Kt.AIR&&r()<d.decayRate*s&&(n.setBlock(u,m,f,d.decayInto),o++)}}return o}var Xb=28,Wh=n=>n===Kt.AIR||jt[n]>0||pe[n]===1,Xh=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,this.falling=[],t.addChangeListener((i,s,r)=>this.touch(i,s,r))}touch(t,e,i){(uo[this.world.getBlock(t,e,i)]||uo[this.world.getBlock(t,e+1,i)])&&(this.queue.add(t+","+e+","+i),this.queue.add(t+","+(e+1)+","+i))}startColumn(t,e,i){let s=this.world,r=[];for(let l=e;l<64&&uo[s.getBlock(t,l,i)];l++)r.push([l,s.getBlock(t,l,i)]);let o=e-1;for(;o>=0&&Wh(s.getBlock(t,o,i));)o--;let a=o+1;r.forEach(([l,c],h)=>{s.setBlock(t,l,i,Kt.AIR);let d={id:c,x:t,z:i,y:l,rest:a+h,vy:0};this.falling.push(d),this.hooks.onSpawn?.(d)})}update(t){if(this.queue.size){let i=[...this.queue];this.queue.clear();for(let s of i){let[r,o,a]=s.split(",").map(Number);o<0||o>=64||!this.world.isLoaded(r,a)||uo[this.world.getBlock(r,o,a)]&&o>0&&Wh(this.world.getBlock(r,o-1,a))&&this.startColumn(r,o,a)}}if(!this.falling.length)return;this.falling.sort((i,s)=>i.y-s.y);let e=[];for(let i of this.falling)i.vy+=Xb*t,i.y-=i.vy*t,i.y<=i.rest&&e.push(i);for(let i of e){this.falling.splice(this.falling.indexOf(i),1);let s=this.world.getBlock(i.x,i.rest,i.z);Wh(s)?(this.world.setBlock(i.x,i.rest,i.z,i.id),this.hooks.onLand?.(i)):this.hooks.onDrop?.(i)}}flush(){for(let t of this.falling.splice(0))Wh(this.world.getBlock(t.x,t.rest,t.z))?(this.world.setBlock(t.x,t.rest,t.z,t.id),this.hooks.onLand?.(t)):this.hooks.onDrop?.(t)}settle(t=.02,e=2e3){for(let i=0;i<e;i++)if(this.update(t),!this.falling.length&&!this.queue.size)return i;return e}};var qb=[[0,0,0],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],qh=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,t.addChangeListener((i,s,r)=>{for(let[o,a,l]of qb)ka[t.getBlock(i+o,s+a,r+l)]&&this.queue.add(i+o+","+(s+a)+","+(r+l))})}supported(t,e,i){let s=this.world.getBlock(t,e,i);if(!ka[s])return!0;let r=t+vi[s*3],o=e+vi[s*3+1],a=i+vi[s*3+2];return Nn[this.world.getBlock(r,o,a)]===1}update(){if(!this.queue.size)return;let t=[...this.queue];this.queue.clear();for(let e of t){let[i,s,r]=e.split(",").map(Number);if(!this.world.isLoaded(i,r))continue;let o=this.world.getBlock(i,s,r);if(!ka[o])continue;let a=i+vi[o*3],l=r+vi[o*3+2];this.world.isLoaded(a,l)&&(this.supported(i,s,r)||(this.world.setBlock(i,s,r,Kt.AIR),this.hooks.onBreak?.(i,s,r,o)))}}};var oi=Dt.game.hunger,Cg=Dt.game.player.maxFood,Rg=n=>n>oi.noSprintAtOrBelow,hf=n=>n<=0,Ag=Dt.game.equipment;function Ig(n,t){if(n<=0)return 0;let e=n*(1-Math.min(Ag.maxArmor,t)*Ag.armorReduction);return Math.max(1,Math.round(e))}function Pg(n){let t=Dt.game.fall;return n<t.safeDistance-t.tolerance?0:Math.max(0,Math.floor(n-t.damageOffset+t.tolerance))}var Lg=n=>n?oi.sprintJumpCost:oi.jumpCost,$b=n=>n>Cg-1;function Ng(n,t,e){n.food=Math.min(Cg,n.food+t),n.saturation=Math.min(oi.maxSaturation,n.food,(n.saturation??0)+e)}function Dg(n,t,{moving:e,sprinting:i,mining:s=!1,maxHealth:r}){let o={healed:!1,starved:0};return n.saturation=Math.min(n.saturation??0,n.food),$b(n.food)&&n.saturation>0&&n.health<r?(n.regenTimer+=t,n.regenTimer>=oi.healEverySeconds&&(n.regenTimer=0,n.health=Math.min(r,n.health+1),n.saturation-=oi.saturationPerHeal,o.healed=!0,n.saturation<=0&&(n.saturation=0,n.food=Math.max(0,n.food-oi.emptySaturationCost)))):n.regenTimer=0,hf(n.food)?(n.starveTimer+=t,n.starveTimer>=oi.starveEverySeconds&&(n.starveTimer=0,o.starved=oi.starveDamage)):n.starveTimer=0,e&&(n.food=Math.max(0,n.food-t*(oi.drainPerSecond+(i?oi.sprintDrainPerSecond:0)))),s&&(n.food=Math.max(0,n.food-t*oi.miningDrainPerSecond)),n.saturation=Math.min(n.saturation,n.food),o}var Yb=Od,Ug=[[1,0],[-1,0],[0,1],[0,-1]],Zb=.2,Jb=500,Kb=n=>n===Kt.AIR||jt[n]===1||jt[n]===2||pe[n]===1,jb=n=>!(n===Kt.AIR||jt[n]>0||pe[n]===1&&Bs[n]!==7),$h=class{constructor(t){this.world=t,this.queue=new Set,this.timer=0,this.stats={changed:0},t.addChangeListener((e,i,s)=>this.touch(e,i,s))}key(t,e,i){return((t+32768)*65536+(i+32768))*64+e}unkey(t){let e=t%64,i=Math.floor(t/64);return[Math.floor(i/65536)-32768,e,i%65536-32768]}touch(t,e,i){let s=this.world;if(!(pe[s.getBlock(t,e,i)]||pe[s.getBlock(t,e+1,i)]||pe[s.getBlock(t,e-1,i)]||pe[s.getBlock(t+1,e,i)]||pe[s.getBlock(t-1,e,i)]||pe[s.getBlock(t,e,i+1)]||pe[s.getBlock(t,e,i-1)]))return;let r=this.queue;r.add(this.key(t,e,i)),r.add(this.key(t,e+1,i)),e>0&&r.add(this.key(t,e-1,i));for(let[o,a]of Ug)r.add(this.key(t+o,e,i+a))}supplyFor(t,e,i){let s=this.world,r=pe[s.getBlock(t,e+1,i)]?6:0;for(let[o,a]of Ug){let l=s.getBlock(t+o,e,i+a);if(!pe[l])continue;let c=Bs[l];c<=1||jb(s.getBlock(t+o,e-1,i+a))&&(r=Math.max(r,c-1))}return r}step(){let t=this.world,e=[...this.queue].slice(0,Jb);for(let s of e)this.queue.delete(s);let i=0;for(let s of e){let[r,o,a]=this.unkey(s);if(o<0||o>=64||!t.isLoaded(r,a))continue;let l=t.getBlock(r,o,a);if(Bs[l]===7||!Kb(l))continue;let c=pe[l]?Bs[l]:0,h=this.supplyFor(r,o,a);h!==c&&(t.setBlock(r,o,a,h>0?Yb[h]:Kt.AIR),i++)}return this.stats.changed=i,i}update(t){return this.timer+=t,this.timer<Zb?0:(this.timer=0,this.queue.size?this.step():0)}settle(t=200){for(let e=0;e<t;e++){if(!this.queue.size)return e;this.step()}return t}};var To=[120,205,250],uf=[14,40,125],Og=12,Yh=class{constructor(t,e){this.world=t,this.colorOf=e,this.cache=new Map}chunkColumns(t){let e=Dn(t.cx,t.cz),i=this.cache.get(e);if(i&&i.version===t.version)return i;let s=new Uint8Array(256),r=new Uint8Array(256),o=new Uint8Array(256);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=63;for(;h>0;){let f=t.data[ue(c,h,l)];if(f!==Kt.AIR&&!jt[f])break;h--}let d=l*16+c,u=t.data[ue(c,h,l)];if(s[d]=h,pe[u]){let f=0,m=h;for(;m>0&&pe[t.data[ue(c,m,l)]]&&f<Og;)m--,f++;u=t.data[ue(c,m,l)],o[d]=f}r[d]=u}let a={version:t.version,y:s,id:r,depth:o};return this.cache.set(e,a),a}column(t,e){let i=this.world.getChunk(t>>4,e>>4),s=i?this.chunkColumns(i):this.cache.get(Dn(t>>4,e>>4));if(!s)return null;let r=(e&15)*16+(t&15);return{y:s.y[r],id:s.id[r],depth:s.depth[r]}}render(t,e,i){let s=2*i+1,r=new Uint8ClampedArray(s*s*4);for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=t-i+a,c=e-i+o,h=this.column(l,c),d=(o*s+a)*4;if(!h)continue;let[u,f,m]=this.colorOf(h.id),x=1;if(h.depth===0){let g=this.column(l-1,c-1);g&&(x=Math.max(.72,Math.min(1.24,1+(h.y-g.y)*.09)))}else{let g=Math.min(1,(h.depth-1)/(Og-4)),p=.12;u=(To[0]+(uf[0]-To[0])*g)*(1-p)+u*p,f=(To[1]+(uf[1]-To[1])*g)*(1-p)+f*p,m=(To[2]+(uf[2]-To[2])*g)*(1-p)+m*p}r[d]=u*x,r[d+1]=f*x,r[d+2]=m*x,r[d+3]=255}return r}};function Fg(n){let t=(n*24+6)%24,e=Math.floor(t),i=Math.floor((t-e)*60);return`${e%12===0?12:e%12}:${String(i).padStart(2,"0")} ${e<12?"AM":"PM"}`}function Bg(n){let t=Math.sin(n*Math.PI*2);return Math.abs(t)<.14?n<.5?"Sunrise":"Sunset":t<0?"Night":n<.25?"Morning":"Afternoon"}var Zh=class{constructor(t,e,i=28){this.canvas=t,this.ctx=t.getContext("2d"),this.data=e,this.R=i,this.N=2*i+1,this.off=document.createElement("canvas"),this.off.width=this.off.height=this.N,this.offCtx=this.off.getContext("2d"),this.cx=NaN,this.cz=NaN,this.lastBuild=0}refresh(t,e,i){t===this.cx&&e===this.cz&&i-this.lastBuild<500||(this.cx=t,this.cz=e,this.lastBuild=i,this.offCtx.putImageData(new ImageData(this.data.render(t,e,this.R),this.N,this.N),0,0))}draw(t,e,i,s){let r=this.ctx;this.refresh(Math.floor(t),Math.floor(e),s),r.clearRect(0,0,196,196),r.save(),r.beginPath(),r.arc(98,98,80,0,Math.PI*2),r.clip(),r.fillStyle="#0c0f13",r.fillRect(0,0,196,196),r.imageSmoothingEnabled=!1,r.drawImage(this.off,98+(this.cx-this.R-t)*3,98+(this.cz-this.R-e)*3,this.N*3,this.N*3);let o=r.createRadialGradient(98,98,80*.62,98,98,80);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.38)"),r.fillStyle=o,r.fillRect(0,0,196,196),r.restore(),r.lineWidth=5,r.strokeStyle="#14141a",r.beginPath(),r.arc(98,98,80+2.5,0,Math.PI*2),r.stroke(),r.lineWidth=2,r.strokeStyle="#a4a4b0",r.beginPath(),r.arc(98,98,80+.5,0,Math.PI*2),r.stroke(),r.fillStyle="#c8c8d2";for(let a=0;a<8;a++){let l=a*Math.PI/4,c=85;a%2&&(r.beginPath(),r.arc(98+Math.sin(l)*c,98-Math.cos(l)*c,1.8,0,Math.PI*2),r.fill())}r.font="bold 12px Consolas, monospace",r.textAlign="center",r.textBaseline="middle",r.lineWidth=3,r.strokeStyle="#000",[["N",0,"#ff6a5a"],["E",1,"#f0f0f8"],["S",2,"#f0f0f8"],["W",3,"#f0f0f8"]].forEach(([a,l,c])=>{let h=l*Math.PI/2,d=91,u=98+Math.sin(h)*d,f=98-Math.cos(h)*d;r.strokeText(a,u,f),r.fillStyle=c,r.fillText(a,u,f)}),r.save(),r.translate(98,98),r.rotate(-i),r.beginPath(),r.moveTo(0,-9),r.lineTo(6,7),r.lineTo(0,3),r.lineTo(-6,7),r.closePath(),r.lineWidth=2.5,r.strokeStyle="#000",r.stroke(),r.fillStyle="#ffffff",r.fill(),r.restore()}};var df=n=>Math.min(16,Math.max(1,Number.isFinite(n)?n:3));function kg(n,t,e){return Math.min(300,Math.ceil(Math.max(n,t)/(2*e))+48)}function zg(n,t,e,i){let s=df(t),r=n.cx+e/n.zoom,o=n.cz+i/n.zoom;return{zoom:s,cx:r-e/s,cz:o-i/s}}var gr=n=>document.getElementById(n);function Hg({data:n,getPlayer:t,onClose:e}){let i=gr("fullmap"),s=gr("fullmap-canvas"),r=s.getContext("2d"),o=gr("fullmap-pos"),a=document.createElement("canvas"),l=a.getContext("2d"),c=!1,h=3,d=0,u=0,f=null,m=0,x=0,g=()=>{let y=Math.max(1,Math.floor(window.innerWidth)),A=Math.max(1,Math.floor(window.innerHeight));return(s.width!==y||s.height!==A)&&(s.width=y,s.height=A,f=null),{w:y,h:A}};function p(y,A,I){let P=kg(y,A,h);if(f&&f.R===P&&Math.abs(f.x-d)<40&&Math.abs(f.z-u)<40&&I-m<2e3)return;let k=Math.round(d),D=Math.round(u),O=2*P+1;a.width=a.height=O,l.putImageData(new ImageData(n.render(k,D,P),O,O),0,0),f={x:k,z:D,R:P},m=I}function w(y){if(!c)return;x=requestAnimationFrame(w);let{w:A,h:I}=g();p(A,I,y),r.fillStyle="#0c0f13",r.fillRect(0,0,A,I),r.imageSmoothingEnabled=!1;let P=A/2+(f.x-f.R-d)*h,F=I/2+(f.z-f.R-u)*h;r.drawImage(a,P,F,(2*f.R+1)*h,(2*f.R+1)*h);let k=t(),D=A/2+(k.x-d)*h,O=I/2+(k.z-u)*h;r.save(),r.translate(D,O),r.rotate(-k.yaw),r.beginPath(),r.moveTo(0,-12),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.lineWidth=3,r.strokeStyle="#000",r.stroke(),r.fillStyle="#fff",r.fill(),r.restore(),r.font="bold 18px Consolas, monospace",r.textAlign="center",r.textBaseline="middle",r.lineWidth=4,r.strokeStyle="#000",r.strokeText("N",A-28,90),r.fillStyle="#ff6a5a",r.fillText("N",A-28,90),o.textContent=`You: ${Math.floor(k.x)}, ${Math.floor(k.z)}   Zoom ${Math.round(h*100/3)}%`}let R=new Map,v=0;s.addEventListener("pointerdown",y=>{if(s.setPointerCapture(y.pointerId),R.set(y.pointerId,{x:y.clientX,y:y.clientY}),s.classList.add("drag"),R.size===2){let[A,I]=[...R.values()];v=Math.hypot(A.x-I.x,A.y-I.y)}}),s.addEventListener("pointermove",y=>{let A=R.get(y.pointerId);if(!A)return;let I={x:y.clientX,y:y.clientY};if(R.set(y.pointerId,I),R.size===1)d-=(I.x-A.x)/h,u-=(I.y-A.y)/h;else if(R.size===2){let[P,F]=[...R.values()],k=Math.hypot(P.x-F.x,P.y-F.y);v>0&&k>0&&M(h*k/v,(P.x+F.x)/2,(P.y+F.y)/2),v=k}});let E=y=>{R.delete(y.pointerId),v=0,R.size||s.classList.remove("drag")};s.addEventListener("pointerup",E),s.addEventListener("pointercancel",E),s.addEventListener("wheel",y=>{y.preventDefault(),M(h*(y.deltaY<0?1.2:1/1.2),y.clientX,y.clientY)},{passive:!1});function M(y,A,I){let P=zg({zoom:h,cx:d,cz:u},y,A-window.innerWidth/2,I-window.innerHeight/2);h=P.zoom,d=P.cx,u=P.cz}let C=y=>M(h*y,window.innerWidth/2,window.innerHeight/2);return gr("fm-in").addEventListener("click",()=>C(1.5)),gr("fm-out").addEventListener("click",()=>C(1/1.5)),gr("fm-here").addEventListener("click",()=>{let y=t();d=y.x,u=y.z}),gr("fm-close").addEventListener("click",()=>e()),{get isOpen(){return c},open(){if(c)return;c=!0;let y=t();d=y.x,u=y.z,h=df(h),f=null,i.hidden=!1,x=requestAnimationFrame(w)},close(){c=!1,R.clear(),cancelAnimationFrame(x),i.hidden=!0}}}var Zt=n=>document.getElementById(n),Vg=n=>new Promise(t=>setTimeout(t,n)),ff=()=>new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(n))),Qb=20260,tw=2400;function ew(n){let t=n.trim();if(!t)return;if(/^-?\d{1,9}$/.test(t))return Number(t);let e=2166136261;for(let i of t)e^=i.codePointAt(0),e=Math.imul(e,16777619);return(e>>>0)%2147483647}function Gg(n,t,e){let i=n.textContent,s=0;n.addEventListener("click",()=>{if(n.dataset.armed){clearTimeout(s),delete n.dataset.armed,n.textContent=i,e();return}n.dataset.armed="1",n.textContent=t,s=setTimeout(()=>{delete n.dataset.armed,n.textContent=i},3e3)}),n.disarm=()=>{clearTimeout(s),delete n.dataset.armed,n.textContent=i}}var pf=class{constructor({scene:t,camera:e,materials:i,sky:s,renderer:r,settings:o,tickAtlas:a}){Object.assign(this,{scene:t,camera:e,materials:i,sky:s,renderer:r,settings:o,tickAtlas:a}),this.world=new go(Qb),this.chunks=new Mo(t,this.world,i,6);let l=this.world.findSpawn();this.cx=l.x,this.cz=l.z,this.ground=Math.max(this.world.heightAt(Math.floor(l.x),Math.floor(l.z)),30),this.angle=.9,this.dayTime=.12,this.elapsed=0,this.chunks.preload(this.cx,this.cz,3),this.sky.setMoonPhase(3),e.fov=68,e.updateProjectionMatrix()}update(t){this.elapsed+=t,this.angle+=t*.06,this.dayTime=.1+.26*(.5-.5*Math.cos(this.elapsed/55));let e=34,i=Math.sin(this.elapsed*.21)*1.5,s=this.camera;s.position.set(this.cx+Math.cos(this.angle)*e,this.ground+19+i,this.cz+Math.sin(this.angle)*e),s.lookAt(this.cx,this.ground+1,this.cz);let r=68+(this.settings.get("fov")-75);Math.abs(s.fov-r)>.01&&(s.fov+=(r-s.fov)*Math.min(1,8*t),s.updateProjectionMatrix()),this.tickAtlas(this.elapsed),this.chunks.update(this.cx,this.cz,8);let o=this.sky.update(this.dayTime,s.position,this.elapsed);this.materials.tint.value.copy(o.tint),this.materials.sprite.color.copy(o.tint),this.scene.background=this.scene.background||o.sky.clone(),this.scene.background.copy(o.sky),this.scene.fog.color.copy(o.sky);let a=this.chunks.radius*16-4;this.scene.fog.near=a*.55,this.scene.fog.far=a,this.renderer.render(this.scene,s)}dispose(){for(let t of this.world.chunks.values())this.chunks.disposeMeshes(t);this.scene.remove(this.chunks.group)}};async function Wg(n){let{params:t,atlasCanvas:e,titleLogo:i,openOptions:s}=n,{storage:r}=n;if(n.autoplay)return nw(t,r);let{audio:o}=n;o.setScene("title"),o.start(),o.unlockOnGesture();let a=Zt("music-hint"),l=setInterval(()=>{a.hidden=o.running||!o.musicOn},300),c=new AbortController,h=(g,p)=>window.addEventListener(g,p,{signal:c.signal}),d=new pf(n),u=0,f=performance.now(),m=g=>{u=requestAnimationFrame(m);let p=Math.min(.1,(g-f)/1e3);f=g,n.windTime.value=d.elapsed%1e3,d.update(p)};u=requestAnimationFrame(m),t.has("title")||await iw(n);let x=await new Promise(g=>{let p={title:Zt("title"),worlds:Zt("worlds")},w=H=>{for(let[G,tt]of Object.entries(p))tt.hidden=G!==H;R=H},R="title",v=Zt("title-logo");v.width=i.width,v.height=i.height,v.getContext("2d").drawImage(i,0,0),Zt("title-credit").textContent=Dt.game.studio.name,Zt("t-play").addEventListener("click",()=>{w("worlds"),P()}),Zt("t-options").addEventListener("click",s),r.kind==="server"?Gg(Zt("t-quit"),"Click again: stop the game server",()=>sw(r)):Zt("t-quit").hidden=!0,w("title");let E=[],M=null,C=!1,y=Zt("world-list"),A=H=>{let G=new Date(H);return isNaN(G)?"":G.toLocaleDateString(void 0,{month:"short",day:"numeric"})+" "+G.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})};function I(){if(y.replaceChildren(...E.map(H=>{let G=document.createElement("div");G.className="world-item"+(H.id===M?" sel":""),G.dataset.id=H.id;let tt=document.createElement("b");tt.textContent=H.name;let gt=document.createElement("span");return gt.textContent=`${H.mode==="creative"?"Creative":"Survival"} \xB7 Day ${(H.day||0)+1} \xB7 Seed ${H.seed} \xB7 ${A(H.updated)}`,G.append(tt,gt),G.addEventListener("click",()=>{M=H.id,I()}),G.addEventListener("dblclick",()=>F(H.id)),G})),!E.length){let H=document.createElement("p");H.className="world-empty",H.textContent="No worlds yet. Create one to start playing!",y.append(H)}Zt("w-play").disabled=!M||C,Zt("w-del").disabled=!M||C,Zt("w-del").disarm?.()}async function P(){Zt("world-error").textContent="";try{E=await r.list()}catch(H){E=[],Zt("world-error").textContent="Could not read your worlds: "+H.message}r.persistent||(Zt("world-error").textContent="Your browser is not allowing saved games here: worlds will be lost when you close this tab."),E.some(H=>H.id===M)||(M=E[0]?.id??null),I(),!E.length&&!Zt("world-error").textContent&&Z()}async function F(H){if(!C){C=!0,Zt("w-play").disabled=!0;try{Zt("loading").hidden=!1,await ff();let G=await r.load(H);g({id:H,save:G})}catch(G){C=!1,Zt("loading").hidden=!0,Zt("world-error").textContent="Could not load that world: "+G.message,I()}}}Zt("w-play").addEventListener("click",()=>M&&F(M)),Zt("w-back").addEventListener("click",()=>w("title")),Gg(Zt("w-del"),"Click again to delete forever",async()=>{if(M){try{await r.remove(M),M=null}catch(H){Zt("world-error").textContent=H.message}P()}});let k=Zt("world-create"),D="survival",O=H=>{D=H,Zt("wc-mode").textContent="Game mode: "+(H==="creative"?"Creative":"Survival")};function Z(){Zt("wc-name").value="New World",Zt("wc-seed").value="",O("survival"),k.hidden=!1,Zt("world-actions").hidden=!0,Zt("wc-name").focus(),Zt("wc-name").select()}function Q(){k.hidden=!0,Zt("world-actions").hidden=!1}Zt("w-new").addEventListener("click",Z),Zt("wc-cancel").addEventListener("click",Q),Zt("wc-mode").addEventListener("click",()=>O(D==="survival"?"creative":"survival"));async function it(){if(!C)try{let H=await r.create({name:Zt("wc-name").value,mode:D,seed:ew(Zt("wc-seed").value)});await F(H.id)}catch(H){Zt("world-error").textContent="Could not create the world: "+H.message}}Zt("wc-go").addEventListener("click",it),h("keydown",H=>{if(R!=="worlds"||C)return;if(H.code==="Escape"){!k.hidden&&E.length?Q():k.hidden&&w("title");return}if(!k.hidden){H.code==="Enter"&&it();return}let G=E.findIndex(tt=>tt.id===M);H.code==="ArrowDown"&&E.length?(M=E[Math.min(E.length-1,G+1)].id,I()):H.code==="ArrowUp"&&E.length?(M=E[Math.max(0,G-1)].id,I()):H.code==="Enter"&&M&&F(M)})});return await ff(),cancelAnimationFrame(u),clearInterval(l),a.hidden=!0,c.abort(),d.dispose(),Zt("title").hidden=!0,Zt("worlds").hidden=!0,{...x,done:Xg}}function Xg(){Zt("loading").hidden=!0,document.body.classList.remove("startup")}async function nw(n,t){let e=n.get("world");if(!e){let i=n.has("seed")?Number(n.get("seed")):void 0;e=(await t.create({name:"Autoplay",mode:n.get("mode")||"survival",seed:i})).id}return{id:e,save:await t.load(e),done:Xg}}async function iw(n){let t=Zt("intro"),{name:e,tagline:i}=Dt.game.studio,s=Bh(n.atlasCanvas,e.toUpperCase(),4),r=Zt("intro-logo");r.width=s.width,r.height=s.height,r.getContext("2d").drawImage(s,0,0);let o=pr(n.atlasCanvas,Kt.GRASS,112),a=Zt("intro-emblem");a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),Zt("intro-sub").textContent=i;let l,c=new Promise(d=>{l=d}),h=new AbortController;for(let d of["keydown","pointerdown"])window.addEventListener(d,l,{signal:h.signal});t.hidden=!1,await ff(),t.classList.add("in"),await Promise.race([Vg(900+tw),c]),t.classList.remove("in"),await Vg(700),h.abort(),t.hidden=!0}async function sw(n){await n.quitGame(),document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#15110e;color:#fff;font-family:Consolas,monospace;text-align:center"><h1 style="margin:0">Thanks for playing!</h1><p style="color:#bbb;margin:0">The game server has stopped. You can close this tab.<br>Run <b>npm start</b> to play again.</p></div>',window.close()}var rw=/^[a-z0-9-]{1,48}$/,ow=n=>(typeof n=="string"?n.replace(/\s+/g," ").trim().slice(0,32):"")||"New World",qg=(n,t)=>({id:n,name:t.name,mode:t.mode==="creative"?"creative":"survival",seed:t.seed,created:t.created,updated:t.updated,day:t.day??0}),mf=n=>typeof n=="string"&&rw.test(n);function aw(n,t,e){let i=n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,30)||"world";for(;;){let s=i+"-"+e().toString(36).slice(2,6).padEnd(4,"0");if(!t(s))return s}}function $g(n,{rand:t=Math.random,now:e=()=>new Date().toISOString(),persistent:i=!0}={}){let s=new Set;return{kind:"local",persistent:i,async list(){let r=[];for(let o of await n.keys()){s.add(o);let a=await n.get(o);a&&typeof a=="object"&&r.push(qg(o,a))}return r.sort((o,a)=>String(a.updated).localeCompare(String(o.updated)))},async create({name:r,mode:o,seed:a}={}){for(let u of await n.keys())s.add(u);let l=ow(r),c=e(),h={name:l,created:c,updated:c,seed:Number.isInteger(a)?a:Math.floor(t()*2**31),mode:o==="creative"?"creative":"survival"},d=aw(l,u=>s.has(u),t);return s.add(d),await n.set(d,h),qg(d,h)},async load(r){let o=mf(r)?await n.get(r):null;if(!o)throw new Error("no such world");return{...o,id:r}},async save(r,o){let a=mf(r)?await n.get(r):null;if(!a)throw new Error("no such world");let l=typeof o=="string"?JSON.parse(o):o;if(typeof l!="object"||l===null||typeof l.seed!="number")throw new Error("bad world payload");await n.set(r,{...l,name:a.name,created:a.created,updated:e()})},async remove(r){mf(r)&&await n.delete(r),s.delete(r)},saveOnExit(r,o){this.save(r,o).catch(()=>{})}}}function lw(n=(...t)=>fetch(...t)){let t=async(e,i="GET",s)=>{let r=await n(e,{method:i,headers:s===void 0?{}:{"Content-Type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)});if(!r.ok)throw new Error(`${i} ${e}: ${r.status} ${await r.text()}`);return r.json()};return{kind:"server",persistent:!0,list:()=>t("api/worlds"),create:e=>t("api/worlds","POST",e),load:e=>t("api/worlds/"+e),save:(e,i)=>n("api/worlds/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:i}),remove:e=>t("api/worlds/"+e,"DELETE"),saveOnExit(e,i){navigator.sendBeacon("api/worlds/"+e,new Blob([i],{type:"application/json"}))},async quitGame(){try{await n("__voxelcraft/shutdown",{method:"POST",headers:{"x-voxelcraft-stop":"1"}})}catch{}}}}function cw(n="voxelcraft",t="worlds"){let e=()=>new Promise((o,a)=>{let l=indexedDB.open(n,1);l.onupgradeneeded=()=>l.result.createObjectStore(t),l.onsuccess=()=>o(l.result),l.onerror=()=>a(l.error)}),i=null,s=()=>i??=e(),r=async(o,a)=>{let l=await s();return new Promise((c,h)=>{let d=l.transaction(t,o),u=a(d.objectStore(t));d.oncomplete=()=>c(u?.result),d.onerror=()=>h(d.error),d.onabort=()=>h(d.error)})};return{get:o=>r("readonly",a=>a.get(o)),set:(o,a)=>r("readwrite",l=>l.put(a,o)),delete:o=>r("readwrite",a=>a.delete(o)),keys:()=>r("readonly",o=>o.getAllKeys())}}function hw(){let n=new Map;return{get:async t=>n.has(t)?structuredClone(n.get(t)):void 0,set:async(t,e)=>{n.set(t,structuredClone(e))},delete:async t=>{n.delete(t)},keys:async()=>[...n.keys()]}}async function Yg(){try{let n=await fetch("api/ping",{cache:"no-store"});if(n.ok&&(await n.json())?.game==="voxelcraft")return lw()}catch{}try{let n=cw();return await n.keys(),navigator.storage?.persist&&navigator.storage.persist().catch(()=>{}),$g(n)}catch{return $g(hw(),{persistent:!1})}}var Kn=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),e&&(s.textContent=e),i&&i.appendChild(s),s},gf=[{id:"move",label:"Tap: pick up / place",button:0,shift:!1},{id:"split",label:"Tap: split / place one",button:2,shift:!1},{id:"quick",label:"Tap: quick move / wear",button:0,shift:!0}];function Jg(n){let t={strafe:0,forward:0,edge:!1,jump:!1,crouch:!1,sprint:!1},e=!1,i=!1,s=new Set,r={},o={},a=!1,l=null,c=Kn("div");c.id="touch",c.hidden=!0;let h=Kn("div","tz look","",c),d=Kn("div","tz move","",c),u=Kn("div","stick ghost","",c);Kn("i","knob","",u);let f=Kn("div","stick live","",c),m=Kn("i","knob","",f);f.hidden=!0;let x=null,g={x:0,y:0},p=()=>{f.style.left=g.x+"px",f.style.top=g.y+"px"};function w(){x=null,t.strafe=0,t.forward=0,t.edge=!1,f.hidden=!0,u.hidden=!1,n.changed?.()}d.addEventListener("pointerdown",J=>{x===null&&(J.preventDefault(),x=J.pointerId,d.setPointerCapture(J.pointerId),g={x:J.clientX,y:J.clientY},p(),m.style.transform="translate(-50%, -50%)",f.hidden=!1,u.hidden=!0)}),d.addEventListener("pointermove",J=>{if(J.pointerId!==x)return;g=mg(g,{x:J.clientX,y:J.clientY}),p();let xt=J.clientX-g.x,yt=J.clientY-g.y,Tt=fg(xt,yt);t.strafe=Tt.strafe,t.forward=Tt.forward,t.edge=pg(Tt);let W=Math.min(1,Math.hypot(xt,yt)/56)*56,K=Math.atan2(yt,xt);m.style.transform=`translate(calc(-50% + ${Math.cos(K)*W}px), calc(-50% + ${Math.sin(K)*W}px))`,n.changed?.()});for(let J of["pointerup","pointercancel"])d.addEventListener(J,xt=>{xt.pointerId===x&&w()});let R=null,v={x:0,y:0};h.addEventListener("pointerdown",J=>{R===null&&(J.preventDefault(),R=J.pointerId,h.setPointerCapture(J.pointerId),v={x:J.clientX,y:J.clientY})}),h.addEventListener("pointermove",J=>{J.pointerId===R&&(n.look(J.clientX-v.x,J.clientY-v.y),v={x:J.clientX,y:J.clientY})});for(let J of["pointerup","pointercancel"])h.addEventListener(J,xt=>{xt.pointerId===R&&(R=null)});function E(J,xt,yt=c){let Tt=Kn("div","tb "+J,xt,yt);return Tt.setAttribute("role","button"),yt===c&&(r[J]=Tt,C(J,Tt)),Tt}function M(J){let xt=r[J],yt=o[J];xt&&Object.assign(xt.style,yt?{left:yt.x*100+"%",top:yt.y*100+"%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)"}:{left:"",top:"",right:"",bottom:"",transform:""})}function C(J,xt){xt.addEventListener("pointerdown",yt=>{if(!a)return;yt.preventDefault(),yt.stopImmediatePropagation();let Tt=xt.getBoundingClientRect(),W=yt.clientX-(Tt.left+Tt.width/2),K=yt.clientY-(Tt.top+Tt.height/2),pt=yt.pointerId;xt.setPointerCapture(pt),xt.classList.add("moving");let Pt=Bt=>{Bt.pointerId===pt&&(o={...o,[J]:_g(Bt.clientX-W,Bt.clientY-K,Tt.width,Tt.height,window.innerWidth,window.innerHeight)},M(J))},vt=Bt=>{if(Bt.pointerId===pt){for(let _e of["pointermove","pointerup","pointercancel"])xt.removeEventListener(_e,_e==="pointermove"?Pt:vt);xt.classList.remove("moving"),n.layoutChanged?.(o)}};xt.addEventListener("pointermove",Pt),xt.addEventListener("pointerup",vt),xt.addEventListener("pointercancel",vt)})}function y(J,xt,yt,Tt){let W=E(J,xt),K=null,pt=()=>{K!==null&&(K=null,s.delete(pt),W.classList.remove("on"),Tt?.())};W.addEventListener("pointerdown",Pt=>{a||K!==null||(Pt.preventDefault(),K=Pt.pointerId,W.setPointerCapture(Pt.pointerId),W.classList.add("on"),s.add(pt),yt())});for(let Pt of["pointerup","pointercancel"])W.addEventListener(Pt,vt=>{vt.pointerId===K&&pt()});return W}function A(J,xt,yt,Tt=c){let W=E(J,xt,Tt);return W.addEventListener("pointerdown",K=>{a||(K.preventDefault(),yt())}),W}function I(J,xt,yt){let Tt=E(J,xt);return Tt.addEventListener("pointerdown",W=>{a||(W.preventDefault(),t[yt]=!t[yt],Tt.classList.toggle("on",t[yt]),n.changed?.())}),Tt}y("attack","Break",()=>n.attack(!0),()=>n.attack(!1)),y("use","Use",()=>n.use(!0),()=>n.use(!1)),y("jump","Jump",()=>{t.jump=!0,n.jump(),n.changed?.()},()=>{t.jump=!1,n.changed?.()});let P=A("fly","Fly",()=>n.fly()),F=I("sprint","Run","sprint"),k=I("crouch","Sneak","crouch");A("inv","Bag",()=>n.inventory()),A("menu","II",()=>n.menu());let D=A("close","\u2715",()=>n.closeScreen(),document.body);D.id="t-close";let O=Kn("div","tb invmode");document.querySelector("#inventory .inv-col").prepend(O),O.id="t-invmode",D.hidden=O.hidden=!0;let Z=0,Q=()=>{O.textContent=gf[Z].label};Q(),O.addEventListener("pointerdown",J=>{J.preventDefault(),Z=(Z+1)%gf.length,Q()}),document.getElementById("inventory").addEventListener("mousedown",J=>{let xt=gf[Z];!e||!J.isTrusted||xt.id==="move"||(J.stopImmediatePropagation(),J.preventDefault(),J.target.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:xt.button,shiftKey:xt.shift,clientX:J.clientX,clientY:J.clientY})))},!0);let it=Kn("div","tedit","",document.body);it.hidden=!0,Kn("span","","Drag the buttons where you want them",it);let H=Kn("button","small","Reset",it),G=Kn("button","small","Done",it);H.addEventListener("click",()=>{o={};for(let J of Object.keys(r))M(J);n.layoutChanged?.(o)}),G.addEventListener("click",()=>tt());function tt(){if(!a)return;a=!1,it.hidden=!0,c.classList.remove("editing"),document.body.classList.remove("peek"),c.hidden=!i;let J=l;l=null,J?.()}document.body.appendChild(c);function gt(){for(let J of[...s])J();x!==null&&w(),R=null,t.jump=!1,t.crouch=!1,t.sprint=!1,F.classList.remove("on"),k.classList.remove("on"),n.changed?.()}return{state:t,reset:gt,get enabled(){return e},setEnabled(J){e=!!J,e||(tt(),gt(),c.hidden=!0,i=!1,D.hidden=!0,O.hidden=!0)},get editing(){return a},setLayout(J){o=xg(J);for(let xt of Object.keys(r))M(xt)},edit(J){!e||a||(gt(),a=!0,l=J,c.hidden=!1,c.classList.add("editing"),document.body.classList.add("peek"),it.hidden=!1,P.hidden=!1,P.classList.remove("on"))},sync({show:J,screen:xt,creative:yt,flying:Tt}){if(!e||a)return;let W=!!J;W!==i&&(i=W,c.hidden=!W,W||gt()),P.hidden=!yt,P.classList.toggle("on",!!Tt),D.hidden=!xt,O.hidden=xt!=="inv"}}}var uw=[".inv-panel",".pal-panel",".opt-panel",".world-panel","#menu","#title-menu","#death-box"];function dw(n,t,e,i,s=12){return!(n>0)||!(t>0)?1:Math.max(.25,Math.min(1,(e-s*2)/n,(i-s*2)/t))}function fw(n,t){return Math.max(.55,Math.min(1,n/900,t/560))}var pw=1.8,mw=(n,t,e=1)=>Math.min(pw,fw(n,t)*(Number.isFinite(e)&&e>0?e:1));function Kg(n=()=>1){let t=[],e=r=>{let o=r.offsetWidth,a=r.offsetHeight;r.style.setProperty("--fit",String(dw(o,a,window.innerWidth,window.innerHeight)))},i=()=>{document.documentElement.style.setProperty("--hud",mw(window.innerWidth,window.innerHeight,n()).toFixed(3));for(let r of t)e(r)},s=typeof ResizeObserver=="function"?new ResizeObserver(r=>{for(let o of r)e(o.target)}):null;for(let r of uw)for(let o of document.querySelectorAll(r))t.push(o),s?.observe(o);return window.addEventListener("resize",i),window.addEventListener("orientationchange",i),i(),i}var xf=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],jg=300,_f=Dt.game.treeFall.leafReach,fs=(n,t,e)=>n+","+t+","+e,Qg=n=>n.split(",").map(Number),ex=[];for(let n=-1;n<=1;n++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++){let i=Math.abs(n)+Math.abs(t)+Math.abs(e);(i===1||i===2)&&ex.push([n,t,e])}function gw(n,t,e,i){if(e<=0||!n.isLoaded(t,i))return!0;let s=n.getBlock(t,e-1,i);return Nn[s]===1&&!as[s]&&!Vi[s]}function nx(n,t,e,i){let s=new Map,r=[],o=!1,a=n.getBlock(t,e+1,i);for(as[a]&&(s.set(fs(t,e+1,i),[t,e+1,i,a]),r.push([t,e+1,i]));r.length&&s.size<jg;){let[R,v,E]=r.pop();gw(n,R,v,E)&&(o=!0);for(let[M,C,y]of ex){let A=R+M,I=v+C,P=E+y;s.has(fs(A,I,P))||!as[n.getBlock(A,I,P)]||(s.set(fs(A,I,P),[A,I,P,n.getBlock(A,I,P)]),r.push([A,I,P]))}}if(s.size>=jg)return null;o&&s.clear();let l=[[t,e,i],...s.values()],c=new Map,h=[];for(let[R,v,E]of l)for(let[M,C,y]of xf){let A=R+M,I=v+C,P=E+y;Vi[n.getBlock(A,I,P)]&&!c.has(fs(A,I,P))&&(c.set(fs(A,I,P),1),h.push([A,I,P]))}for(let R=1;R<_f+1&&h.length;R++){let v=[];for(let[E,M,C]of h)for(let[y,A,I]of xf){let P=E+y,F=M+A,k=C+I;!Vi[n.getBlock(P,F,k)]||c.has(fs(P,F,k))||(c.set(fs(P,F,k),R+1),v.push([P,F,k]))}h=v}let d=new Set,u=1/0,f=-1/0,m=1/0,x=-1/0,g=1/0,p=-1/0;for(let R of c.keys()){let[v,E,M]=Qg(R);u=Math.min(u,v),f=Math.max(f,v),m=Math.min(m,E),x=Math.max(x,E),g=Math.min(g,M),p=Math.max(p,M)}if(c.size){let R=_f+1,v=[];for(let E=u-R;E<=f+R;E++)for(let M=m-R;M<=x+R;M++)for(let C=g-R;C<=p+R;C++)as[n.getBlock(E,M,C)]&&!s.has(fs(E,M,C))&&v.push([E,M,C]);for(let E=1;E<=_f&&v.length;E++){let M=[];for(let[C,y,A]of v)for(let[I,P,F]of xf){let k=C+I,D=y+P,O=A+F,Z=fs(k,D,O);!Vi[n.getBlock(k,D,O)]||d.has(Z)||(d.add(Z),M.push([k,D,O]))}v=M}}let w=[...c.keys()].filter(R=>!d.has(R)).map(R=>{let v=Qg(R);return[...v,n.getBlock(v[0],v[1],v[2])]});return!s.size&&!w.length?null:{logs:[...s.values()],leaves:w}}function ix(n,t){for(let[e,i,s]of t.logs)n.setBlock(e,i,s,Kt.AIR);for(let[e,i,s]of t.leaves)n.setBlock(e,i,s,Kt.AIR)}function sx(n,t,e,i){let s=n+.5-e,r=t+.5-i;return Math.abs(s)>=Math.abs(r)?{dx:s>=0?1:-1,dz:0}:{dx:0,dz:r>=0?1:-1}}function rx(n,t,e,i,s,r,o,a){let l=n-i,c=e-r,h=t-s,d=l*o+c*a,u=l*a-c*o;return[i+o*h+a*u,s-d,r+a*h-o*u]}var tx=n=>n===Kt.AIR||jt[n]>0||pe[n]===1;function ox(n,t,e,i,s){for(let r=0;r<=s;r++){let o=e+r;if(!(o<1||o>=64||!tx(n.getBlock(t,o,i)))){for(let a=0;a<5&&o>1&&tx(n.getBlock(t,o-1,i));a++)o--;return o}}return null}function ax(n,t,e,i,s,r,o){let a=[],l=[];for(let c of[t.logs,t.leaves]){let h=c.slice().sort((d,u)=>d[1]-i-(u[1]-i));for(let[d,u,f,m]of h){let[x,g,p]=rx(d,u,f,e,i,s,r,o),w=ox(n,x,g,p,3);if(w===null){l.push({id:m,x,y:g,z:p});continue}n.setBlock(x,w,p,m),a.push({id:m,x,y:w,z:p})}}return{placed:a,lost:l}}function lx(n,t,e,i,s,r,o){let a=[];for(let l of[t.logs,t.leaves])for(let[c,h,d,u]of l){let[f,m,x]=rx(c,h,d,e,i,s,r,o),g=ox(n,f,m,x,6);a.push({id:u,x:f,y:g??i+1,z:x})}return a}var an=Dt.game,ou=an.hunger;oe.enabled=!1;var zt=n=>document.getElementById(n),$e=new Gh,cx=new URLSearchParams(location.search),xw=cx.has("touch")?!0:cx.has("desktop")?!1:null,Rx=()=>xw??!!$e.get("touchControls"),en=Rx();document.body.classList.toggle("touch",en);var _w=Kg(()=>$e.get("hudSize")),Lf=new URLSearchParams(location.search),Nf=!1;function Ix(){if(Nf){Mn("A new version is ready: it loads when you quit to the title.");return}let n=new URL(location.href);n.searchParams.set("title",""),location.replace(n)}window.addEventListener("vc-update",Ix);window.__vcUpdated&&Ix();async function yw(){if(!navigator.locks)return!0;for(let n=0;n<8;n++){if(await new Promise(e=>{navigator.locks.request("voxelcraft-game",{ifAvailable:!0},i=>{if(!i){e(!1);return}return e(!0),new Promise(()=>{})})}))return!0;await new Promise(e=>setTimeout(e,250))}return!1}await yw()||(document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#1b1410;color:#fff;font-family:Consolas,monospace;text-align:center;padding:24px"><h1 style="margin:0">VoxelCraft is already open</h1><p style="max-width:520px;color:#ccc;margin:0">Only one copy of the game can run at a time. Close the other tab or window, then reload this page.</p></div>',await new Promise(()=>{}));var ts=Lf.has("autoplay"),{canvas:Qi,avg:Px}=await J0(),vw=K0(Px);document.documentElement.style.setProperty("--dirt",`url(${og(Qi)})`);var Df=zt("logo"),au=Bh(Qi);Df.width=au.width;Df.height=au.height;Df.getContext("2d").drawImage(au,0,0);var Do=new _h({canvas:zt("game"),antialias:!1,powerPreference:"high-performance"});Do.outputColorSpace=nr;Do.setPixelRatio(Math.min(window.devicePixelRatio,2));var Te=new oa;Te.fog=new ra(10208511,40,90);var ze=new gn(75,1,.05,700);ze.rotation.order="YXZ";Te.add(ze);function Lx(){Do.setSize(window.innerWidth,window.innerHeight,!1),ze.aspect=window.innerWidth/window.innerHeight,ze.updateProjectionMatrix()}window.addEventListener("resize",Lx);Lx();var Nx=n=>{let t=new Oi(n);return t.magFilter=t.minFilter=Xe,t.generateMipmaps=!1,t},vr=Nx(Qi),Dx=Z0(Qi),li={solid:new on({map:vr,vertexColors:!0,alphaTest:.5}),water:new on({map:vr,vertexColors:!0,transparent:!0,opacity:.74,depthWrite:!1}),sprite:new on({vertexColors:!0}),plant:new on({map:vr,vertexColors:!0,alphaTest:.5,side:ni}),leaves:new on({map:vr,vertexColors:!0,alphaTest:.5})},Uf={value:new Gt(1,1,1)},Mw={value:bh},Sw={value:new Gt(1,.84,.58)};li.tint=Uf;function Of(n){n.uniforms.uTint=Uf,n.uniforms.uWarm=Sw,n.uniforms.uFloor=Mw,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aBlk;
uniform vec3 uTint;
uniform vec3 uWarm;
uniform float uFloor;`).replace("#include <color_vertex>",`#include <color_vertex>
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  vColor.rgb = min(vec3(1.0), max(vColor.rgb * uTint, vec3(aBlk.y * uFloor)) + aBlk.x * uWarm);
#endif`)}li.solid.onBeforeCompile=Of;li.water.onBeforeCompile=Of;var Ff={value:0},Ux=n=>{Of(n),n.uniforms.uTime=Ff,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aSway;
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
      float ph = uTime * 2.1 + wp.x * 0.65 + wp.z * 0.45;
      float gust = sin(ph) + 0.5 * sin(ph * 2.3 + 1.7);
      transformed.x += gust * 0.075 * aSway;
      transformed.z += cos(ph * 0.9 + wp.x * 0.3) * 0.05 * aSway;`)};li.plant.onBeforeCompile=Ux;li.leaves.onBeforeCompile=Ux;var Uo=new Lh(Te,{sun:j0(),moon:Q0(),glow:tg()});Uo.setPixelRatio(Do.getPixelRatio());var Ox=new on({map:vr,vertexColors:!0,alphaTest:.5,fog:!1,depthTest:!1,transparent:!0}),Bf=new on({vertexColors:!0,fog:!1,depthTest:!1,transparent:!0}),kf=new on({color:13212276,fog:!1,depthTest:!1,transparent:!0}),zf=new Gn(.11,.11,.6),ke=new Ce(zf,kf);ke.renderOrder=999;ke.frustumCulled=!1;ze.add(ke);var Zi=new Ce(zf,Bf);Zi.renderOrder=999;Zi.frustumCulled=!1;Zi.visible=!1;ze.add(Zi);var hx=0,xr={pos:[-.56,-.2,-.72],rot:[.12,.5,-.06],scale:.4},ms={arm:{pos:[.5,-.5,-.55],rot:[.55,-.35,.15],scale:1},block:{pos:[.5,-.46,-.8],rot:[.25,-.6,.05],scale:.22},sprite:{pos:[.46,-.33,-.7],rot:[.1,-.5,.05],scale:.42},tool:{pos:[.52,-.42,-.8],rot:[.12,2.45,.38],scale:.46,pivot:[.66,-.7,-.45]}};ms.axe={...ms.tool,flip:!0};var je=ms.arm,Cf=-1,bw=new Pn().setFromAxisAngle(new V(1,1,0).normalize(),Math.PI),yf=new Pn,ux=new Ni,dx=new V;function ww(){let n=xe.equipment.shield&&Si(xe.equipment.shield.id)?xe.equipment.shield.id:0;n!==hx&&(hx=n,n&&(Zi.geometry=Ka(n,!0))),Zi.visible=!!n&&ke.visible&&!ln,Zi.visible&&(Zi.position.set(xr.pos[0]+Math.sin(yr+1.3)*.01,xr.pos[1]+Math.abs(Math.cos(yr+1.3))*.012+Math.sin(Ji*7)*.002,xr.pos[2]),Zi.rotation.set(xr.rot[0],xr.rot[1],xr.rot[2]),Zi.scale.setScalar(xr.scale))}function Fx(){let n=Fo(Ne),t=n?n.id:0;t!==Cf&&(Cf=t,t?zs(t)?(ke.geometry=wo(t),ke.material=Ox,je=ms.block):(ke.geometry=Ka(t,!0),ke.material=Bf,je=Zn(t)?Zn(t).type==="axe"?ms.axe:ms.tool:ms.sprite):(ke.geometry=zf,ke.material=kf,je=ms.arm))}var Gs=new pa(new _a(new Gn(1.004,1.004,1.004)),new to({color:0,fog:!1}));Gs.visible=!1;Te.add(Gs);var Hf=Nx(eg());Hf.repeat.set(.1,1);var il=new Ce(new Gn(1.006,1.006,1.006),new on({map:Hf,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));il.visible=!1;Te.add(il);var Vf=256,wi=new da(new Gn(1,1,1),new on({color:16777215}),Vf);wi.instanceMatrix.setUsage(dd);wi.frustumCulled=!1;wi.count=0;Te.add(wi);var Ws=[],fx=new be,Ew=new Pn,px=new V,mx=new V,Bx=new Gt;function Ro(n,t,e,i){let s=vw[i]||[.5,.5,.5];for(let r=0;r<14&&Ws.length<Vf;r++){let o=.75+Math.random()*.5;Ws.push({x:n+.2+Math.random()*.6,y:t+.2+Math.random()*.6,z:e+.2+Math.random()*.6,vx:(Math.random()-.5)*3.5,vy:Math.random()*3.5+1,vz:(Math.random()-.5)*3.5,life:.55+Math.random()*.5,size:.07+Math.random()*.08,r:s[0]*o,g:s[1]*o,b:s[2]*o})}}var vf=new Map;function Tw(n){if(!vf.has(n)){let t=pr(Qi,n,16),e=t.getContext("2d").getImageData(0,0,16,16).data,i=0,s=0,r=0,o=0;for(let a=0;a<e.length;a+=4)e[a+3]>200&&(i+=e[a],s+=e[a+1],r+=e[a+2],o++);vf.set(n,o?[i/o/255,s/o/255,r/o/255]:[.8,.5,.2])}return vf.get(n)}var Jh=new V;function Aw(n){let t=Tw(n);ze.updateMatrixWorld(),ze.localToWorld(Jh.set(.02,-.2,-.5));let e=ze.getWorldDirection(su);for(let i=0;i<9&&Ws.length<Vf;i++){let s=i%3===0,r=s?1.25:.8+Math.random()*.3;Ws.push({x:Jh.x+(Math.random()-.5)*.08,y:Jh.y+(Math.random()-.5)*.06,z:Jh.z+(Math.random()-.5)*.08,vx:e.x*.6+(Math.random()-.5)*1.6,vy:.9+Math.random()*1.4,vz:e.z*.6+(Math.random()-.5)*1.6,life:.35+Math.random()*.3,size:.018+Math.random()*.026,r:Math.min(1,t[0]*r+(s?.15:0)),g:Math.min(1,t[1]*r+(s?.15:0)),b:Math.min(1,t[2]*r+(s?.15:0))})}}function Cw(n){let t=0;for(let e=Ws.length-1;e>=0;e--){let i=Ws[e];if(i.life-=n,i.life<=0){Ws.splice(e,1);continue}i.vy-=18*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n}for(let e of Ws){mx.set(e.x,e.y,e.z);let i=e.size*Math.min(1,e.life*3);px.set(i,i,i),fx.compose(mx,Ew,px),wi.setMatrixAt(t,fx),wi.setColorAt(t,Bx.setRGB(e.r,e.g,e.b)),t++}wi.count=t,wi.instanceMatrix.needsUpdate=!0,wi.instanceColor&&(wi.instanceColor.needsUpdate=!0)}var Ys=!1,lu=vg($e,{onClose:()=>{Ys=!1},layout:{available:()=>Nf&&en,edit:()=>Zs.edit(()=>{Ys=!0,lu.open()})}});ke.visible=!1;var ae=new Uh;window.__audio=ae;window.__atlas=Qi;ae.setVolumes($e.get("musicVolume"),$e.get("sfxVolume"));var Gf=await Yg(),Wf=await Wg({params:Lf,autoplay:ts,atlasCanvas:Qi,titleLogo:au,openOptions:()=>lu.open(),renderer:Do,scene:Te,camera:ze,materials:li,sky:Uo,windTime:Ff,audio:ae,storage:Gf,settings:$e,tickAtlas:n=>{Dx(n)&&(vr.needsUpdate=!0)}});Nf=!0;ke.visible=!0;ae.setScene("game");var Xf=Wf.id,Be=Wf.save,qf=Be?.seed??Math.floor(Math.random()*2**31),Yt=new go(qf,{terrain:Be?.terrain??(Be?.player?1:2)});Be?.edits&&Yt.loadEdits(Be.edits,Be.legacyCaves);var bn=new Mo(Te,Yt,li,Be?.radius??6,n=>$f.chunkColumns(n)),ht=new Ph(Yt),Bn=new kh(Te,Yt,li.solid,li.sprite);Bn.load(Be?.drops);var Rw=n=>{let t=Px[Oe[n]?.top];return t?[t[0]*255,t[1]*255,t[2]*255]:[90,90,90]},$f=new Yh(Yt,Rw),Iw=new Zh(zt("minimap"),$f),kx=Hg({data:$f,getPlayer:()=>({x:ht.pos.x,z:ht.pos.z,yaw:ht.yaw}),onClose:()=>hu()});zt("minimap").addEventListener("click",()=>{Fe&&!Ve&&!ln&&Po("map")});var zx=new $h(Yt),Co=new Map,Hx=new Xh(Yt,{onSpawn(n){let t=new Ce(wo(n.id),li.solid);t.position.set(n.x+.5,n.y+.5,n.z+.5),Te.add(t),Co.set(n,t)},onLand(n){Te.remove(Co.get(n)),Co.delete(n),bn.remeshNow(Tr(n.x,n.z)),ae.block(Oe[n.id].sound,"place")},onDrop(n){if(Te.remove(Co.get(n)),Co.delete(n),!ie)for(let t of _o(n.id,!0))Bn.spawn(t.id,t.n,n.x+.5,n.rest+.5,n.z+.5);Ro(n.x,n.rest,n.z,n.id)}}),Vx=new qh(Yt,{onBreak(n,t,e,i){if(Ro(n,t,e,i),ae.block(Oe[i].sound,"break"),!ie)for(let s of _o(i,!0))Bn.spawn(s.id,s.n,n+.5,t+.4,e+.5)}}),Oo=new Hh({onLit(n,t,e,i){if(!Yt.isLoaded(n,e))return!1;let s=Yt.getBlock(n,t,e);if(s!==Kt.FURNACE&&s!==Kt.FURNACE_LIT)return!0;let r=i?Kt.FURNACE_LIT:Kt.FURNACE;return s!==r&&Yt.setBlock(n,t,e,r),!0}});Oo.load(Be?.furnaces);var ie=Be?.mode==="creative",xe=new Ih;xe.load(Be?.inventory);xe.loadEquipment(Be?.equipment);var cu=Be?.creativeHotbar??[...an.creativeHotbarIds],jn={collected:new Set(Be?.progress?.collected),crafted:new Set(Be?.progress?.crafted),flags:new Set(Be?.progress?.flags)},tu=an.player.maxFood,dn=Math.min(tu,Be?.food??tu),br=Math.min(dn,Be?.saturation??an.hunger.respawnSaturation),bi=0,sl=an.player.maxHealth,ai=Be?.health>0?Math.min(sl,Be.health):sl,ln=!1,rl=Be?.day??0,Mf=Number(Lf.get("growth"))||1,Ne=Be?.slot??0,ji=Be?.time??an.time.startTime;Uo.setMoonPhase(rl);var Ji=0,Fo=n=>ie?{id:cu[n],n:1,d:0}:xe.slots[n],Mr=()=>Fo(Ne)?.id??0,Xs=Be?.spawnPoint??Yt.findSpawn(),Bo=Be?.player??Xs;ht.pos.x=Bo.x;ht.pos.y=Bo.y;ht.pos.z=Bo.z;ht.yaw=Bo.yaw??0;ht.pitch=Bo.pitch??0;ht.flying=ie&&!!Bo.flying;bn.preload(ht.pos.x,ht.pos.z,3);for(;ht.collides(ht.pos.x,ht.pos.y,ht.pos.z)&&ht.pos.y<120;)ht.pos.y+=1;var Sr=n=>Oe[n]?.sound??"default",Gx=()=>Yt.getBlock(Math.floor(ht.pos.x),Math.floor(ht.pos.y-.2),Math.floor(ht.pos.z));ht.events.step=()=>ae.block(Oe[Gx()]?.sound||"default","step");ht.events.splash=()=>ae.splash();ht.events.land=()=>ae.block(Oe[Gx()]?.sound||"default","place");ht.events.jump=n=>{ie||(dn=Math.max(0,dn-Lg(n)))};ht.events.fall=n=>{let t=Pg(n);ie||t<=0||(Yf(Ig(t,xe.armor),"You hit the ground too hard"),ln||(_r.v=-an.fall.kick))};var Sf=ur.map(n=>n.done(jn));function qs(){let n=ur.map(t=>t.done(jn));n.forEach((t,e)=>{t&&!Sf[e]&&(Mn("Goal complete: "+ur[e].text),ae.craft())}),Sf=n,gs.renderGoals(Sf)}function eu(n){let t=ht.eye,e=ze.getWorldDirection(su);Bn.spawn(n.id,n.n,t.x+e.x*.5,t.y-.3+e.y*.5,t.z+e.z*.5,{d:n.d||0,delay:1.5,vx:e.x*4,vy:e.y*4+1.5,vz:e.z*4})}var gs=dg({atlas:Qi,inventory:xe,getHotbarStack:Fo,onSelect:n=>Io(n),onToss:eu,onCraft:(n,t)=>{t.ok&&(ae.craft(),jn.crafted.add(n.out),t.leftover>0&&eu({id:n.out,n:t.leftover,d:0}),qs(),un())},onPalettePick:n=>{cu[Ne]=n,un(),Wx()},onEquip:()=>{ae.craft(),jn.flags.add("equipped"),qs(),un()},onNotice:n=>Mn(n),onSmeltTake:n=>{ae.craft(),jn.crafted.add(n.id),qs(),un()}}),gx=0;function Wx(){let n=Fo(Ne),t=zt("blockname");t.textContent=n?vn(n.id):"",t.classList.add("show"),clearTimeout(gx),gx=setTimeout(()=>t.classList.remove("show"),1400)}function un(){gs.renderHotbar(Ne),Fx()}function Io(n){Ne=(n+9)%9,un(),Wx()}var ol=-1;function ko(){let n=zt("health");n.style.display=ie?"none":"flex";let t=Math.ceil(ai);t!==ol&&(ol=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=ai-i*2;return sg(s>=2?2:s>=1?1:0)})),n.classList.toggle("low",ai<=6))}var xx=0;function Pw(){let n=zt("hurt");n.classList.add("flash"),clearTimeout(xx),xx=setTimeout(()=>n.classList.remove("flash"),220)}var _r={y:0,v:0};function Yf(n,t="You died"){ie||ln||n<=0||(ai=Math.max(0,ai-n),ko(),Pw(),ae.hurt(),ai<=0&&Nw(t))}var Lw=1800;function Nw(n){ln=!0,Ve&&Jf();let t=0,e=ht.pos;for(let i of xe.takeEverything())Bn.spawn(i.id,i.n,e.x,e.y+.9,e.z,{d:i.d,delay:1.5,life:Lw}),t++;un(),zt("death-cause").textContent=n+(t?". Your things are where you fell.":""),zt("death").hidden=!1,document.exitPointerLock(),Sn(!1)}function Xx(){for(ai=sl,dn=tu,br=ou.respawnSaturation,ln=!1,zt("death").hidden=!0,ht.pos.x=Xs.x,ht.pos.y=Xs.y,ht.pos.z=Xs.z,ht.vel.x=ht.vel.y=ht.vel.z=0,ht.stepSmooth=0,ht.fallPeak=null,bn.preload(ht.pos.x,ht.pos.z,2);ht.collides(ht.pos.x,ht.pos.y,ht.pos.z)&&ht.pos.y<120;)ht.pos.y+=1;ol=ll=-1,ko(),hl(),ts?Sn(!0):(Sn(!0),zo())}zt("respawn").addEventListener("click",Xx);var _x=0;function Mn(n){let t=zt("toast");t.textContent=n,t.classList.add("show"),clearTimeout(_x),_x=setTimeout(()=>t.classList.remove("show"),2200)}un();qs();var wr=new Set,Fn={forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,down:!1},Fe=!1,Ve=null,Rf=!1,nu=0,kn={left:!1,right:!1},ps=n=>wr.has($e.key(n));function qx(n,t){ht.yaw+=n,ht.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,ht.pitch+t))}function Dw(){let n=document.documentElement;document.fullscreenElement||!n.requestFullscreen||matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches||n.requestFullscreen({navigationUI:"hide"}).then(()=>window.screen.orientation?.lock?.("landscape")).catch(()=>{})}var Zs=Jg({changed:()=>Er(),look:(n,t)=>{if(!Fe)return;let e=gg(n,t,lf*$e.get("sensitivity"),$e.get("invertY"));qx(e.yaw,e.pitch)},attack:n=>{Fe&&(kn.left=n,n||cl())},use:n=>{Fe&&(kn.right=n,$s=n,n&&(nl=0))},jump:()=>{let n=performance.now();ie&&n-nu<300&&iu(!ht.flying),nu=n},fly:()=>iu(!ht.flying),inventory:()=>{Fe&&!Ve&&Po(ie?"palette":"inv")},closeScreen:()=>hu(),layoutChanged:n=>$e.set("touchLayout",n),menu:()=>{Fe&&(Sn(!1),zt("play").textContent="Resume",Ho())}});Zs.setEnabled(en);function Er(){let n=Zs.state;Fn.forward=ps("forward"),Fn.back=ps("back"),Fn.left=ps("left"),Fn.right=ps("right"),Fn.strafe=n.strafe,Fn.ahead=n.forward,Fn.jump=ps("jump")||n.jump,Rf=ps("sprint")||n.sprint||n.edge,Fn.sprint=Rf&&jf(),Fn.crouch=ps("crouch")||n.crouch,Fn.down=ps("crouch")||ps("down")||n.crouch}function Zf(n){for(ji+=n;ji>=1;)ji-=1,rl++,Uo.setMoonPhase(rl)}function iu(n){if(!ie){Mn("Flying is only available in creative mode");return}ht.flying=n,ht.vel.y=0,Mn("Flying: "+(n?"ON":"OFF"))}function Po(n,t="hand",e=null){Ve=n,n==="inv"?gs.openInventory(Ne,t,e&&$a[t]?.furnace?Oo.get(e.x,e.y,e.z):null):n==="map"?kx.open():gs.openPalette(),document.exitPointerLock(),(ts||en)&&Sn(!1)}function Jf(){Ve==="inv"?gs.closeInventory():Ve==="palette"?gs.closePalette():Ve==="map"&&kx.close(),Ve=null,un()}function hu(){Jf(),Kf=performance.now()+700,Sn(!0),ts||(zo(),al=performance.now())}window.addEventListener("keydown",n=>{if(Ys||n.target instanceof HTMLInputElement&&n.code!=="Escape")return;if(n.code==="Escape"&&Fe&&!ts&&document.pointerLockElement!==Lo&&!Ve){Sn(!1),zt("play").textContent="Resume",Ho();return}if(n.code==="Escape"&&!Fe&&!Ve&&!ln&&!n.repeat&&performance.now()-$x>250){n.preventDefault(),Zx();return}if(n.code!=="Escape"&&Yx(),(n.code==="Tab"||n.code.startsWith("F")&&n.code!=="F11"&&n.code!=="F5"&&n.code!=="F12")&&n.preventDefault(),n.repeat){Fe&&(wr.add(n.code),Er());return}let t=$e.actionFor(n.code);if(Ve&&(t==="inventory"||t==="map"&&Ve==="map"||n.code==="Escape")){n.preventDefault(),hu();return}if(t==="map"&&Fe){Po("map");return}if(t==="inventory"&&Fe){Po(ie?"palette":"inv");return}if(t==="music"){Kx();return}if(t==="debug"){zt("debug").hidden=!zt("debug").hidden;return}if(Fe)switch(wr.add(n.code),Er(),t){case"jump":{let e=performance.now();ie&&e-nu<300&&iu(!ht.flying),nu=e;break}case"fly":iu(!ht.flying);break;case"offhand":Gw();break;case"sprint":jf()||Mn("Too hungry to sprint");break;case"skipTime":Zf(.125),Mn("Time skipped");break;case"drop":ie||Uw();break;case"renderUp":case"renderDown":{let e=Math.max(3,Math.min(12,bn.radius+(t==="renderUp"?1:-1)));bn.setRadius(e),ep(),Mn("Render distance: "+e+" chunks");break}default:t&&t.startsWith("slot")&&Io(Number(t.slice(4))-1)}});window.addEventListener("keyup",n=>{wr.delete(n.code),Er()});window.addEventListener("blur",()=>{wr.clear(),Er(),kn={left:!1,right:!1}});function Uw(){let n=xe.slots[Ne];n&&(eu({id:n.id,n:1,d:n.d}),--n.n<=0&&(xe.slots[Ne]=null),un())}window.addEventListener("wheel",n=>{!Fe||en||Io(Ne+(n.deltaY>0?1:-1))},{passive:!0});window.addEventListener("mousemove",n=>{if(!Fe||en)return;let t=lf*$e.get("sensitivity"),e=Math.abs(n.movementX)>500?0:n.movementX,i=Math.abs(n.movementY)>500?0:n.movementY;qx(-e*t,-i*t*($e.get("invertY")?-1:1))});window.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("mousedown",n=>{if(!en&&(Yx(),!!Fe&&(n.button===0&&(kn.left=!0),n.button===2&&(kn.right=!0,$s=!0,nl=0),n.button===1))){n.preventDefault();let t=Qf();if(!t)return;if(ie)Sh.includes(t.id)&&(cu[Ne]=t.id,Io(Ne));else{let e=xe.slots.slice(0,9).findIndex(i=>i&&i.id===t.id);e>=0&&Io(e)}}});window.addEventListener("mouseup",n=>{en||(n.button===0&&(kn.left=!1,cl()),n.button===2&&(kn.right=!1,$s=!1))});var Ow=zt("overlay"),Lo=zt("game");function zo(){if(ts)return;if(en){!Ve&&!ln&&!Ys&&Sn(!0);return}let n=()=>Lo.requestPointerLock?.();if(!$e.get("rawInput"))return n();try{let t=Lo.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(n)}catch{n()}}var Kf=0,$x=0,al=0;function Yx(){if(ts||en||!Fe||Ys||ln||document.pointerLockElement===Lo)return;let n=performance.now();n-al<500||(al=n,zo())}Lo.style.cursor="none";function Sn(n){Fe=n,n||(wr.clear(),Zs.reset(),Er(),kn={left:!1,right:!1},cl()),Ow.classList.toggle("hidden",n||!!Ve||ln)}document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===Lo){Ve&&Jf(),Sn(!0);return}if(Ve){Sn(!1);return}performance.now()<Kf||($x=performance.now(),Sn(!1),zt("play").textContent="Resume",Ho())});function Zx(){Fe||ln||Ve||Ys||Zs.editing||(ae.start(),Sn(!0),ts||(Kf=performance.now()+700,zo(),al=performance.now()))}zt("play").addEventListener("click",()=>{ae.start(),en&&Dw(),ts?Sn(!0):zo()});var If=!1;async function Jx(){If||(If=!0,zt("quitbtn").disabled=!0,zt("quitbtn").textContent="Saving...",document.exitPointerLock(),a_(),await Ho(),np=!0,location.href="?title")}zt("quitbtn").addEventListener("click",Jx);function Kx(){ae.setMusic(!ae.musicOn),zt("musicbtn").textContent="Music: "+(ae.musicOn?"On":"Off"),Mn("Music "+(ae.musicOn?"on":"off"))}zt("musicbtn").addEventListener("click",Kx);function jx(n){ie=n,n||(ht.flying=!1),zt("modebtn").textContent="Mode: "+(n?"Creative":"Survival"),Cf=-1,ll=-1,ol=-1,hl(),ko(),un(),Ho()}zt("modebtn").addEventListener("click",()=>jx(!ie));zt("modebtn").textContent="Mode: "+(ie?"Creative":"Survival");zt("optionsbtn").addEventListener("click",()=>{Ys=!0,wr.clear(),Er(),lu.open()});function Fw(){let n=e=>Qa($e.key(e)),t=[[[n("forward"),n("left"),n("back"),n("right")].join(" "),"Move","Mouse","Look"],[n("jump"),"Jump / swim (double-tap to fly in creative)",n("sprint"),"Sprint (not when very hungry)"],[n("crouch"),"Crouch: slower, and you cannot walk off edges","",""],["Left click","Hold to break","Right click","Place / use / till / plant / eat"],[`${n("slot1")}\u2013${n("slot9")} / Wheel`,"Select slot",n("drop"),"Drop one item"],[n("inventory"),"Inventory & crafting",n("music"),"Toggle music"],[n("skipTime"),"Skip time of day",`${n("renderDown")} ${n("renderUp")}`,"Render distance"],[n("fly"),"Fly (creative only)",n("debug"),"Debug info"],[n("offhand"),"Place the torch held in your shield slot",n("map"),"Full-screen map (or tap the minimap)"]];zt("controls").replaceChildren(...t.map(e=>{let i=document.createElement("tr");for(let s of e){let r=document.createElement("td");r.textContent=s,i.appendChild(r)}return i}))}function Qx(){ae.setVolumes($e.get("musicVolume"),$e.get("sfxVolume")),_w();let n=en?document.body:zt("hud-right");zt("goals").parentNode!==n&&n.appendChild(zt("goals")),Zs.setLayout($e.get("touchLayout"));let t=en;en=Rx(),en!==t&&(document.body.classList.toggle("touch",en),Zs.setEnabled(en),kn={left:!1,right:!1},en&&document.exitPointerLock?.()),zt("tagline").textContent=en?"Game paused":"Game paused \u2014 press Esc to resume",Fw()}$e.onChange(Qx);Qx();var yx=-1;function Bw(){let n=xe.armor;if(n===yx)return;yx=n;let t=zt("armorbar");t.hidden=n<=0,t.replaceChildren(...Array.from({length:10},(e,i)=>{let s=n-i*2;return ig(s>=2?2:s>=1?1:0)}))}var t_=()=>!ie&&hf(dn),jf=()=>ie||Rg(dn),ll=-1;function hl(){let n=zt("hunger");n.style.display=ie?"none":"flex",zt("satbar").style.display=ie?"none":"block",zt("satbar").firstElementChild.style.width=Math.min(100,br/ou.maxSaturation*100)+"%";let t=Math.ceil(dn);t!==ll&&(ll=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=t-i*2;return ng(s>=2?2:s>=1?1:0)})),n.classList.toggle("starving",t_()))}hl();ko();var su=new V;function Qf(){return ze.getWorldDirection(su),Qd(Yt,ht.eye,su,an.player.reach)}var el=new Fh,ru=null,Pf=null,bf=0,nl=0,$s=!1,Ki=0;function cl(){ru=null,Pf=null,el.reset(),il.visible=!1}function Tr(n,t){let e=[];for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){let r=Yt.getChunk((n>>4)+s,(t>>4)+i);r&&r.dirty&&e.push(r)}return e}var No=[];function e_(n){let t=new Set,e=[];for(let[i,,s]of n)for(let r of Tr(i,s))t.has(r)||(t.add(r),e.push(r));bn.remeshNow(e)}function n_(n,t,e){let i=nx(Yt,n,t,e);if(!i)return;let s=sx(n,e,ht.pos.x,ht.pos.z);ix(Yt,i),e_([...i.logs,...i.leaves]);let r=new sn;r.position.set(n+.5,t+.5,e+.5);for(let a of[i.logs,i.leaves])for(let[l,c,h,d]of a){let u=new Ce(wo(d),li.solid);u.position.set(l-n,c-t,h-e),r.add(u)}Te.add(r);let o=i.logs.reduce((a,l)=>Math.max(a,l[1]-t),1);No.push({group:r,tree:i,bx:n,by:t,bz:e,dir:s,axis:new V(s.dz,0,-s.dx),t:0,T:.9+.08*o}),ae.block(Sr(i.logs[0]?.[3]),"break")}function i_(n){Te.remove(n.group),No.splice(No.indexOf(n),1);let{dx:t,dz:e}=n.dir;if(an.treeFall.mode==="land"){let{placed:r,lost:o}=ax(Yt,n.tree,n.bx,n.by,n.bz,t,e);if(e_(r.map(a=>[a.x,a.y,a.z])),!ie)for(let a of o)for(let l of _o(a.id,!0))Bn.spawn(l.id,l.n,a.x+.5,a.y+.5,a.z+.5);ae.block(Sr(n.tree.logs[0]?.[3]),"place");return}let i=lx(Yt,n.tree,n.bx,n.by,n.bz,t,e),s=0;for(let r of i){if(!ie)for(let o of E0(r.id))Bn.spawn(o.id,o.n,r.x+.5,r.y+.4,r.z+.5,{delay:.5,vx:(Math.random()-.5)*2.5+t*1.2,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*2.5+e*1.2});(as[r.id]||s++%3===0)&&Ro(r.x,r.y,r.z,r.id)}ae.block(Sr(n.tree.logs[0]?.[3]),"break"),ae.block(Sr(n.tree.logs[0]?.[3]),"place"),n.tree.leaves.length&&ae.block(Sr(n.tree.leaves[0][3]),"break")}function kw(n){for(let t of[...No]){t.t+=n;let e=Math.min(1,t.t/t.T);t.group.quaternion.setFromAxisAngle(t.axis,Math.PI/2*Math.pow(e,2.2)),e>=1&&i_(t)}}var vx=!1;function zw(n){let t=Rh(n.id,Mr()),e=!!jt[n.id];Yt.setBlock(n.x,n.y,n.z,Kt.AIR),Ro(n.x,n.y,n.z,n.id),ae.block(Oe[n.id].sound,"break"),Ki=1;let i=Yt.getBlock(n.x,n.y+1,n.z);if(!e&&jt[i]&&(Yt.setBlock(n.x,n.y+1,n.z,Kt.AIR),Ro(n.x,n.y+1,n.z,i),!ie))for(let r of _o(i,!0))Bn.spawn(r.id,r.n,n.x+.5,n.y+1.4,n.z+.5);if($a[fo.get(n.id)]?.furnace)for(let r of Oo.remove(n.x,n.y,n.z))Bn.spawn(r.id,r.n,n.x+.5,n.y+.6,n.z+.5,{d:r.d});if(bn.remeshNow(Tr(n.x,n.z)),as[n.id]&&n_(n.x,n.y,n.z),ie)return;for(let r of _o(n.id,t.canHarvest))Bn.spawn(r.id,r.n,n.x+.5,n.y+.5,n.z+.5);if(e)return;dn=Math.max(0,dn-ou.miningCost);let s=xe.slots[Ne];if(s&&Zn(s.id)){let r=vn(s.id);xe.damage(Ne,b0(n.id,s.id))&&(Mn(`Your ${r} broke!`),ae.toolBreak()),un()}}var tp=(n,t,e)=>Yt.canPlace(n,t,e);function Hw(n){let t=!!jt[n.id],e=t?n.x:n.x+n.nx,i=t?n.y:n.y+n.ny,s=t?n.z:n.z+n.nz;if(!tp(e,i,s))return;let r=Yt.getBlock(e,i,s);if(r!==Kt.AIR&&!pe[r]&&!jt[r])return;let o=Fo(Ne);!o||!zs(o.id)||jt[o.id]||ht.intersectsBlock(e,i,s)||(Yt.setBlock(e,i,s,o.id),bn.remeshNow(Tr(e,s)),ae.block(Oe[o.id].sound,"place"),Ki=1,ie||(--o.n<=0&&(xe.slots[Ne]=null),un()))}function s_(n,t,e=!1){let i=!!jt[n.id],s=i||n.ny===1?"up":n.nx===1?"east":n.nx===-1?"west":n.nz===1?"south":n.nz===-1?"north":null,r=s&&t[s];if(!r)return;let o=i?n.x:n.x+n.nx,a=i?n.y:n.y+n.ny,l=i?n.z:n.z+n.nz;if(!tp(o,a,l))return;let c=Yt.getBlock(o,a,l);if(!(c!==Kt.AIR&&!pe[c]&&!jt[c])&&Nn[Yt.getBlock(o+vi[r*3],a+vi[r*3+1],l+vi[r*3+2])]&&(Yt.setBlock(o,a,l,r),bn.remeshNow(Tr(o,l)),ae.block(Oe[r].sound,"place"),Ki=1,!ie)){if(e){let h=xe.equipment.shield;h&&--h.n<=0&&(xe.equipment.shield=null),gs.refreshInventory()}else{let h=xe.slots[Ne];h&&--h.n<=0&&(xe.slots[Ne]=null)}un()}}var wf=0;function Vw(n){if(wf-=n,wf>0)return;wf=.1;let t=ln||Ve==="palette"?0:Math.max($d(Mr()),$d(xe.equipment.shield?.id??0)),e=ht.eye;Yt.lighting.setCarried(Math.floor(e.x),Math.floor(e.y),Math.floor(e.z),t)}function Gw(){let n=xe.equipment.shield;if(!n||!Si(n.id)||!Xa(n.id))return;let t=Qf();t&&s_(t,Xa(n.id),!0)}function Ww(){let n=xe.slots[Ne];if(ie||!n||!Zn(n.id))return;let t=vn(n.id);xe.damage(Ne)&&(Mn(`Your ${t} broke!`),ae.toolBreak()),un()}function r_(n){if(!n)return null;let t=n.x,e=n.z,i=jt[n.id]?n.y-1:n.y,s=Yt.getBlock(t,i,e);if(!Mh[s])return null;let r=Yt.getBlock(t,i+1,e);return r!==Kt.AIR&&!jt[r]?null:{x:t,y:i,z:e,wet:Yt.nearWater(t,i,e)}}function Xw(n,t){let e=r_(n);if(!e)return;jt[Yt.getBlock(e.x,e.y+1,e.z)]&&Yt.setBlock(e.x,e.y+1,e.z,Kt.AIR);let i=Yt.getBlock(e.x,e.y,e.z),s=Mh[i];Yt.setBlock(e.x,e.y,e.z,s);let r=e.wet?Va.get(s)?.wet:0;r?Yt.setBlock(e.x,e.y,e.z,r):t&&Mn(`Dry soil: crops only grow with water within ${an.tilling.radius} blocks, and bare dry soil turns back into dirt`),bn.remeshNow(Tr(e.x,e.z)),Ro(e.x,e.y,e.z,i),ae.block(Sr(i),"place"),Ki=1,Ww(),e.wet&&(jn.flags.add("tilled"),qs())}function qw(n,t){if(!(!t.on.includes(n.id)||n.ny!==1)&&tp(n.x,n.y+1,n.z)&&Yt.getBlock(n.x,n.y+1,n.z)===Kt.AIR){if(Yt.setBlock(n.x,n.y+1,n.z,t.block),bn.remeshNow(Tr(n.x,n.z)),ae.block(Sr(t.block),"place"),Ki=1,!ie){let e=xe.slots[Ne];e&&--e.n<=0&&(xe.slots[Ne]=null),un()}jn.flags.add("planted"),qs()}}function $w(n,t){let e=Mr(),i=y0(e),s=t&&fo.has(t.id)&&$s;if(!kn.right||!i||ie||s){bi=0,zt("eatbar").hidden=!0;return}if(dn>=tu){$s&&(Mn("You're not hungry"),$s=!1),bi=0,zt("eatbar").hidden=!0;return}let r=Math.floor(bi/.3);if(bi+=n,Math.floor(bi/.3)>r&&(ae.eat(),Aw(e)),zt("eatbar").hidden=!1,zt("eatbar").firstElementChild.style.width=Math.min(100,bi/an.eating.seconds*100)+"%",bi>=an.eating.seconds){bi=0;let o=xe.slots[Ne];o&&--o.n<=0&&(xe.slots[Ne]=null);let a={food:dn,saturation:br};Ng(a,i,v0(e)),{food:dn,saturation:br}=a,jn.flags.add("ate"),Mn(`Yum! +${i/2} hunger`),un(),qs()}}function Yw(n){return xe.add(n.id,n.n,n.d),jn.collected.add(n.id),ae.pickup(),un(),qs(),!0}function Zw(n){let t=Qf();if(t){Gs.visible=!0;let s=jt[t.id]?Fs[t.id]:1,r=jt[t.id]?ho[t.id]*2:1;Gs.scale.set(r,s,r);let o=jt[t.id]===3&&(Hi[t.id*2]||Hi[t.id*2+1]);Gs.position.set(t.x+.5-(o?Hi[t.id*2]*.25:0),t.y+s/2+(o?.2:0),t.z+.5-(o?Hi[t.id*2+1]*.25:0))}else Gs.visible=!1;let i=Zn(Mr())?.type==="hoe"?r_(t):null;if(Gs.material.color.setHex(i?i.wet?3407701:16751150:0),nl-=n,Ki=Math.max(0,Ki-n*4.5),kn.left&&t&&t.y>0){let s=t.x+","+t.y+","+t.z;if(s!==Pf){Pf=s;let o=Oe[t.id];!ie&&!Rh(t.id,Mr()).canHarvest?Mn(`You need a ${T0(o.need)} ${o.tool} (or better) to harvest this`):!ie&&!vx&&o.tool==="shovel"&&Zn(Mr())?.type!=="shovel"&&(vx=!0,Mn("Tip: a shovel digs dirt, grass and sand much faster (craft one at a table)"))}ru=t;let r=ie?.25:Rh(t.id,Mr()).time;bf-=n,bf<=0&&(bf=.24,ae.block(Oe[t.id].sound,"tick"),Ki=Math.max(Ki,.8)),el.tick(n,s,r)?(zw(t),cl()):el.progress>0&&(il.visible=!0,il.position.copy(Gs.position),Hf.offset.x=el.stage/10)}else el.idle(n),ru&&cl();if($w(n,t),kn.right&&t&&nl<=0&&!bi){nl=.22;let s=$s;$s=!1;let r=Fo(Ne),o=r&&Zn(r.id);s&&fo.has(t.id)?(kn.right=!1,Po("inv",fo.get(t.id),t)):o?.type==="hoe"?Xw(t,s):r&&Gd(r.id)?qw(t,Gd(r.id)):r&&Xa(r.id)?s_(t,Xa(r.id)):Hw(t)}}var Mx=0;function Jw(n){n-Mx<250||(Mx=n,zt("mm-real").textContent=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}),zt("mm-game").textContent=Fg(ji),zt("mm-part").textContent=`${Bg(ji)} \xB7 Day ${rl+1}`,zt("mm-x").textContent=Math.floor(ht.pos.x),zt("mm-y").textContent=Math.floor(ht.pos.y),zt("mm-z").textContent=Math.floor(ht.pos.z))}var Ef=new Map,Kw=n=>(Ef.has(n)||Ef.set(n,(jt[n]?rg(Qi,n):pr(Qi,n,44)).toDataURL()),Ef.get(n)),Sx=new V,Kh=null;function jw(){let n=zt("lookat");if(!Fe||Ve||ln){n.hidden=!0,Kh=null;return}ze.getWorldDirection(Sx);let t=Qd(Yt,ht.eye,Sx,an.player.lookAtReach);if(!t){n.hidden=!0,Kh=null;return}if(t.id!==Kh){Kh=t.id;let e=Yd[t.id];zt("lookat-icon").src=Kw(t.id),zt("lookat-name").textContent=e?e.label:Oe[t.id].name;let i=zt("lookat-sub"),s=zt("lookat-pips");if(i.classList.remove("ready"),s.replaceChildren(),s.classList.remove("ripe"),e){for(let r=1;r<=3;r++){let o=document.createElement("i");r<=e.stage&&(o.className="on"),s.appendChild(o)}s.classList.toggle("ripe",!!e.ripe),e.crop?i.textContent=e.ripe?`${e.name} \u2014 ready to harvest!`:`${e.name} (stage ${e.stage}/3) \u2014 not ready yet`:i.textContent=`${e.name} (stage ${e.stage}/3)${e.ripe?" \u2014 fully grown":" \u2014 still growing"}`,i.classList.toggle("ready",!!e.ripe)}else{let r=Oe[t.id];i.textContent=r.tool?`Best tool: ${r.tool[0].toUpperCase()}${r.tool.slice(1)}`:""}}n.hidden=!1}function ep(){let n=bn.radius*16-4;Te.fog.near=n*.55,Te.fog.far=n}ep();var Qw=new Gt(13212276),tE=new Gt(1,1,1),bx=!1,Tf=1,wx=0;function eE(){let n=Math.min(.25,Math.max(0,Ji-wx));wx=Ji;let t=Yt.lighting.levelAt(Math.floor(ze.position.x),Math.floor(ze.position.y),Math.floor(ze.position.z));return Tf+=(f0(t)-Tf)*Math.min(1,n*4),Tf}function nE(){let n=Uo.update(ji,ze.position,Ji),t=eE();Uf.value.copy(n.tint),li.sprite.color.copy(n.tint);let e=Bx.copy(n.tint).lerp(tE,.35).multiplyScalar(.25+.75*t);Ox.color.copy(e),Bf.color.copy(e),kf.color.copy(Qw).multiply(e),wi.material.color.copy(n.tint),Te.background=Te.background||new Gt,Te.background.copy(n.sky).multiplyScalar(t),Te.fog.color.copy(Te.background);let i=ht.headInWater;i!==bx&&(bx=i,zt("underwater").style.opacity=i?"1":"0"),i?(Te.fog.color.setRGB(.1*n.tint.r*t,.25*n.tint.g*t,.6*n.tint.b*t),Te.background.copy(Te.fog.color),Te.fog.near=1,Te.fog.far=22):ep()}var np=!1;function o_(){return JSON.stringify({seed:qf,terrain:Yt.terrain,edits:Yt.serializeEdits(),legacyCaves:Yt.serializeLegacy(),player:ln?{x:Xs.x,y:Xs.y,z:Xs.z,yaw:0,pitch:0,flying:!1}:{x:ht.pos.x,y:ht.pos.y,z:ht.pos.z,yaw:ht.yaw,pitch:ht.pitch,flying:ht.flying},mode:ie?"creative":"survival",inventory:xe.serialize(),equipment:xe.serializeEquipment(),creativeHotbar:cu,food:dn,saturation:br,health:ln?sl:ai,spawnPoint:Xs,day:rl,drops:Bn.serialize(),furnaces:Oo.serialize(),progress:{collected:[...jn.collected],crafted:[...jn.crafted],flags:[...jn.flags]},slot:Ne,time:ji,radius:bn.radius})}function Ho(){if(np)return Promise.resolve();let n=Promise.resolve(Gf.save(Xf,o_())).catch(()=>{});return Yt.editsDirty=!1,n}function a_(){for(let n of[...No])i_(n);Hx.flush()}setInterval(()=>{Fe&&Ho()},1e4);function ip(){np||If||(a_(),Gf.saveOnExit(Xf,o_()))}window.addEventListener("beforeunload",ip);window.addEventListener("pagehide",ip);document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ip()});var Ex=performance.now(),Tx=60,jh=0,Af=0,Qh=75,yr=0,Ao=0,Ax=0,Cx=0,Yi=0;function l_(n){requestAnimationFrame(l_);let t=Math.max(0,Math.min(.1,(n-Ex)/1e3));if(Ex=n,Ji+=t,jh+=t,Af++,jh>.5&&(Tx=Math.round(Af/jh),jh=0,Af=0),Zs.sync({show:Fe&&!Ve&&!ln&&!Ys,screen:Ve,creative:ie,flying:ht.flying}),Fe&&(ht.speedMul=t_()?ou.starvingSpeed:1,Fn.sprint=Rf&&jf(),ht.update(t,Fn),Zw(t),Zf(t/an.time.dayLengthSeconds),!ie)){let a=Math.hypot(ht.vel.x,ht.vel.z)>1,l={food:dn,saturation:br,health:ai,regenTimer:Ax,starveTimer:Cx},c=Dg(l,t,{moving:a,sprinting:Fn.sprint&&a,mining:kn.left&&!!ru,maxHealth:sl});({food:dn,saturation:br,health:ai,regenTimer:Ax,starveTimer:Cx}=l),c.healed&&ko(),c.starved&&Yf(c.starved,"You starved to death"),hl()}Ff.value=Ji%1e3,zx.update(t),Hx.update(t),Vx.update(),(Fe||Ve)&&Oo.update(t),gs.tickFurnace();for(let[a,l]of Co)l.position.y=a.y+.5;kw(t),Ao+=t,Ao>=1&&(cf(Yt,Math.floor(ht.pos.x/16),Math.floor(ht.pos.z/16),an.plants.growthChunkRadius,Ao*Mf),Eg(Yt,Math.floor(ht.pos.x/16),Math.floor(ht.pos.z/16),an.spread.chunkRadius,Ao*Mf),Tg(Yt,Math.floor(ht.pos.x/16),Math.floor(ht.pos.z/16),an.plants.growthChunkRadius,Ao*Mf),Ao=0),Bn.update(t,ht.pos,a=>!ie&&!ln&&xe.canFit(a.id,a.n),Yw),Vw(t),Dx(Ji)&&(vr.needsUpdate=!0),Fx();let e=ht.eye;_r.v+=(-140*_r.y-15*_r.v)*t,_r.y+=_r.v*t,ze.position.set(e.x,e.y+_r.y,e.z),ze.rotation.set(ht.pitch,ht.yaw,0);let i=Math.hypot(ht.vel.x,ht.vel.z);yr+=i*t*(ht.onGround?1.9:.4);let s=$e.get("fov")+(Fn.sprint&&i>5?8:0)+(ht.flying&&i>12?8:0);Qh+=(s-Qh)*Math.min(1,8*t),Math.abs(ze.fov-Qh)>.01&&(ze.fov=Qh,ze.updateProjectionMatrix());let r=Math.sin(Ki*Math.PI);Yi+=((bi>0?1:0)-Yi)*Math.min(1,10*t);let o=Math.sin(Ji*26)*.015*Yi;if(je.pivot?(yf.setFromEuler(ux.set(-r*.62,r*.12,0)),ke.position.set(je.pos[0]+Math.sin(yr)*.01,je.pos[1]+Math.abs(Math.cos(yr))*.012,je.pos[2]).sub(dx.fromArray(je.pivot)).applyQuaternion(yf).add(dx),ke.position.x-=r*.1,ke.position.y+=r*.1,ke.position.z-=r*.16,ke.quaternion.setFromEuler(ux.set(je.rot[0],je.rot[1],je.rot[2])),je.flip&&ke.quaternion.multiply(bw),ke.quaternion.premultiply(yf)):(ke.position.set(je.pos[0]+Math.sin(yr)*.01-r*.1-Yi*.22,je.pos[1]+Math.abs(Math.cos(yr))*.012-r*.14+Yi*.3+o,je.pos[2]-r*.08+Yi*.2),ke.rotation.set(je.rot[0]-r*.9+Yi*.5,je.rot[1]+r*.25,je.rot[2])),ww(),ke.scale.setScalar(je.scale*(1-.35*Yi*Math.min(1,bi/an.eating.seconds))),Yi>.05&&!je.pivot&&(ke.rotation.z+=Math.sin(Ji*26)*.07*Yi),bn.update(ht.pos.x,ht.pos.z,Fe?5:10),jw(),Bw(),Iw.draw(ht.pos.x,ht.pos.z,ht.yaw,n),Jw(n),Cw(t),nE(),Do.render(Te,ze),!zt("debug").hidden){let a=bn.collectStats();zt("debug").textContent=`VoxelCraft  ${Tx} fps  [${ie?"creative":"survival"}]
XYZ  ${ht.pos.x.toFixed(2)} / ${ht.pos.y.toFixed(2)} / ${ht.pos.z.toFixed(2)}
Chunk ${Math.floor(ht.pos.x/16)}, ${Math.floor(ht.pos.z/16)}   seed ${qf}
Chunks ${a.chunks} (meshed ${a.meshed})  quads ${a.quads}  drops ${Bn.items.length}
Time ${((ji*24+6)%24).toFixed(1)}h  ${ht.flying?"FLYING":ht.onGround?"ground":ht.inWater?"swimming":"air"}`}}requestAnimationFrame(l_);window.__vc={world:Yt,player:ht,audio:ae,inventory:xe,drops:Bn,ui:gs,progress:jn,chunkRenderer:bn,camera:ze,scene:Te,setPlaying:Sn,selectSlot:Io,setMode:jx,get elapsed(){return Ji},POSES:ms,held:ke,furnaces:Oo,attachSim:Vx,worldId:Xf,quitToTitle:Jx,resumeGame:Zx,openScreen:Po,closeScreen:hu,tossStack:eu,settings:$e,options:lu,growPlants:cf,get food(){return dn},set food(n){dn=n,ll=-1,hl()},get creative(){return ie},REG:Dt,waterSim:zx,damage:Yf,respawn:Xx,advanceTime:Zf,fallingTrees:No,startTreeFall:n_,sky:Uo,get health(){return ai},set health(n){ai=n,ol=-1,ko()},get dead(){return ln},get playing(){return Fe},get screen(){return Ve},get dayTime(){return ji},set dayTime(n){ji=n},toggleDebug:()=>zt("debug").hidden=!zt("debug").hidden};Wf.done();ts?Sn(!0):(ae.start(),Sn(!0),zo(),al=performance.now());
