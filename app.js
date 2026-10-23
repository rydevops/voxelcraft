globalThis.__VOXELCRAFT_CONTENT__={"blocks":{"_comment":"Every block in the game. See data/README.md for the fields. ids must be unique (1-255) and never change once worlds exist.","blocks":[{"id":1,"key":"grass","name":"Grass Block","tiles":{"top":"grass_top","bottom":"dirt","side":"grass_side"},"hardness":1,"tool":"shovel","sound":"grass","creative":true,"tillsInto":"farmland","spreadsOnto":"dirt","loot":"grass"},{"id":2,"key":"dirt","name":"Dirt","tiles":{"top":"dirt","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","creative":true,"tillsInto":"farmland"},{"id":3,"key":"stone","name":"Stone","tiles":{"top":"stone","bottom":"stone","side":"stone"},"hardness":3,"tool":"pickaxe","need":1,"sound":"stone","creative":true,"loot":"stone"},{"id":4,"key":"sand","name":"Sand","tiles":{"top":"sand","bottom":"sand","side":"sand"},"hardness":0.9,"tool":"shovel","sound":"sand","creative":true,"gravity":true},{"id":5,"key":"log","name":"Oak Log","tiles":{"top":"log_top","bottom":"log_top","side":"log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":6,"key":"leaves","name":"Leaves","tiles":{"top":"leaves","bottom":"leaves","side":"leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"leaves","shatterLoot":"leaves_shatter","creative":true,"lightFilter":1},{"id":7,"key":"planks","name":"Oak Planks","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","creative":true,"fuel":15},{"id":8,"key":"water","name":"Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":7},"lightFilter":2},{"id":9,"key":"cobble","name":"Cobblestone","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":10,"key":"glass","name":"Glass","tiles":{"top":"glass","bottom":"glass","side":"glass"},"hardness":0.35,"sound":"glass","opaque":false,"loot":"glass","creative":true},{"id":11,"key":"brick","name":"Bricks","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","creative":true},{"id":12,"key":"snow","name":"Snowy Grass","tiles":{"top":"snow_top","bottom":"dirt","side":"snow_side"},"hardness":0.7,"tool":"shovel","sound":"snow","loot":"snow","creative":true},{"id":13,"key":"coal_ore","name":"Coal Ore","tiles":{"top":"coal_ore","bottom":"coal_ore","side":"coal_ore"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","loot":"coal_ore","creative":true,"glow":0.22},{"id":14,"key":"iron_ore","name":"Iron Ore","tiles":{"top":"iron_ore","bottom":"iron_ore","side":"iron_ore"},"hardness":5,"tool":"pickaxe","need":2,"sound":"stone","creative":true,"glow":0.22},{"id":15,"key":"crafting","name":"Crafting Table","tiles":{"top":"crafting_top","bottom":"planks","side":"crafting_side"},"hardness":1.6,"tool":"axe","sound":"wood","opens":"table","creative":true},{"id":16,"key":"furnace","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","creative":true},{"id":17,"key":"farmland","name":"Dry Farmland","tiles":{"top":"farmland_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","creative":true,"hydration":{"wet":"farmland_wet","decay":{"into":"dirt","chancePerSecond":0.012}}},{"id":18,"key":"grass_s","name":"Short Grass","tiles":{"top":"grass_s","bottom":"grass_s","side":"grass_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.35,"growth":{"next":"grass_m","chancePerSecond":0.008333333333333333,"soil":"grass"},"stage":{"label":"Grass","step":1,"name":"Short"}},"loot":"grass_s"},{"id":19,"key":"grass_m","name":"Tall Grass","tiles":{"top":"grass_m","bottom":"grass_m","side":"grass_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.6,"growth":{"next":"grass_l","chancePerSecond":0.0058823529411764705,"soil":"grass"},"stage":{"label":"Grass","step":2,"name":"Tall"}},"loot":"grass_m"},{"id":20,"key":"grass_l","name":"Lush Grass","tiles":{"top":"grass_l","bottom":"grass_l","side":"grass_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"cross","height":0.9,"stage":{"label":"Grass","step":3,"name":"Lush","ripe":true},"spreads":{"block":"grass_s","chancePerSecond":0.002,"onto":"grass","range":2}},"loot":"grass_l"},{"id":21,"key":"wheat_s","name":"Wheat Sprout","tiles":{"top":"wheat_s","bottom":"wheat_s","side":"wheat_s"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.3,"growth":{"next":"wheat_m","chancePerSecond":0.025,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":1,"name":"Sprout","crop":true}},"loot":"wheat_s"},{"id":22,"key":"wheat_m","name":"Young Wheat","tiles":{"top":"wheat_m","bottom":"wheat_m","side":"wheat_m"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.6,"growth":{"next":"wheat_l","chancePerSecond":0.01818181818181818,"soil":"farmland_wet"},"stage":{"label":"Wheat","step":2,"name":"Growing","crop":true}},"loot":"wheat_m"},{"id":23,"key":"wheat_l","name":"Ripe Wheat","tiles":{"top":"wheat_l","bottom":"wheat_l","side":"wheat_l"},"hardness":0.04,"sound":"grass","plant":{"kind":"hash","height":0.9,"stage":{"label":"Wheat","step":3,"name":"Ripe","ripe":true,"crop":true}},"loot":"wheat_l"},{"id":24,"key":"flow1","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":1},"lightFilter":2},{"id":25,"key":"flow2","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":2},"lightFilter":2},{"id":26,"key":"flow3","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":3},"lightFilter":2},{"id":27,"key":"flow4","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":4},"lightFilter":2},{"id":28,"key":"flow5","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":5},"lightFilter":2},{"id":29,"key":"flow6","name":"Flowing Water","tiles":{"top":"water","bottom":"water","side":"water"},"hardness":0,"sound":"water","opaque":false,"solid":false,"water":{"level":6},"lightFilter":2},{"id":30,"key":"farmland_wet","name":"Moist Farmland","tiles":{"top":"farmland_wet_top","bottom":"dirt","side":"dirt"},"hardness":0.9,"tool":"shovel","sound":"dirt","loot":"farmland","hydration":{"dry":"farmland"}},{"id":31,"key":"torch_floor","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75},"support":[0,-1,0]},{"id":32,"key":"torch_e","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[1,0]},"support":[-1,0,0]},{"id":33,"key":"torch_w","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[-1,0]},"support":[1,0,0]},{"id":34,"key":"torch_s","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,1]},"support":[0,0,-1]},{"id":35,"key":"torch_n","name":"Torch","tiles":{"top":"torch","bottom":"torch","side":"torch"},"hardness":0.05,"sound":"wood","solid":false,"opaque":false,"light":14,"loot":"torch_floor","model":{"type":"torch","height":0.75,"lean":[0,-1]},"support":[0,0,1]},{"id":36,"key":"furnace_lit","name":"Furnace","tiles":{"top":"furnace_top","bottom":"furnace_top","side":"furnace_side_lit"},"hardness":4,"tool":"pickaxe","need":1,"sound":"stone","opens":"furnace","light":13},{"id":37,"key":"birch_log","name":"Birch Log","tiles":{"top":"birch_log_top","bottom":"birch_log_top","side":"birch_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":38,"key":"spruce_log","name":"Spruce Log","tiles":{"top":"spruce_log_top","bottom":"spruce_log_top","side":"spruce_log_side"},"hardness":2,"tool":"axe","sound":"wood","role":"log","creative":true,"fuel":20},{"id":39,"key":"birch_leaves","name":"Birch Leaves","tiles":{"top":"birch_leaves","bottom":"birch_leaves","side":"birch_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"birch_leaves","shatterLoot":"birch_leaves_shatter","creative":true,"lightFilter":1},{"id":40,"key":"spruce_leaves","name":"Spruce Leaves","tiles":{"top":"spruce_leaves","bottom":"spruce_leaves","side":"spruce_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"spruce_leaves","shatterLoot":"spruce_leaves_shatter","creative":true,"lightFilter":1},{"id":41,"key":"apple_leaves","name":"Apple Tree Leaves","tiles":{"top":"apple_leaves","bottom":"apple_leaves","side":"apple_leaves"},"hardness":0.25,"sound":"leaves","opaque":false,"role":"leaf","loot":"apple_leaves","shatterLoot":"apple_leaves_shatter","creative":true,"lightFilter":1},{"id":42,"key":"young_oak","name":"Oak Sapling","tiles":{"top":"young_oak","bottom":"young_oak","side":"young_oak"},"hardness":0.04,"sound":"grass","loot":"young_oak","plant":{"kind":"cross","height":0.7,"grows":{"trees":["oak","oak","oak","tall_oak","bush"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Oak Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":43,"key":"young_birch","name":"Birch Sapling","tiles":{"top":"young_birch","bottom":"young_birch","side":"young_birch"},"hardness":0.04,"sound":"grass","loot":"young_birch","plant":{"kind":"cross","height":0.7,"grows":{"trees":["birch"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Birch Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":44,"key":"young_spruce","name":"Spruce Sapling","tiles":{"top":"young_spruce","bottom":"young_spruce","side":"young_spruce"},"hardness":0.04,"sound":"grass","loot":"young_spruce","plant":{"kind":"cross","height":0.7,"grows":{"trees":["spruce"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Spruce Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":45,"key":"young_apple","name":"Apple Sapling","tiles":{"top":"young_apple","bottom":"young_apple","side":"young_apple"},"hardness":0.04,"sound":"grass","loot":"young_apple","plant":{"kind":"cross","height":0.7,"grows":{"trees":["apple"],"chancePerSecond":0.012,"soil":["grass","dirt"]},"stage":{"label":"Apple Sapling","step":1,"name":"Growing","ripe":false,"crop":false}}},{"id":46,"key":"path","name":"Dirt Path","tiles":{"top":"path_top","bottom":"dirt","side":"dirt"},"hardness":0.7,"tool":"shovel","sound":"dirt","creative":true},{"id":47,"key":"planks_stairs","name":"Oak Stairs","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","opaque":false,"model":{"type":"stairs","facing":"n"},"creative":true,"fuel":15},{"id":48,"key":"planks_stairs_e","name":"Oak Stairs","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","opaque":false,"model":{"type":"stairs","facing":"e"},"variantOf":"planks_stairs"},{"id":49,"key":"planks_stairs_s","name":"Oak Stairs","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","opaque":false,"model":{"type":"stairs","facing":"s"},"variantOf":"planks_stairs"},{"id":50,"key":"planks_stairs_w","name":"Oak Stairs","tiles":{"top":"planks","bottom":"planks","side":"planks"},"hardness":1.4,"tool":"axe","sound":"wood","opaque":false,"model":{"type":"stairs","facing":"w"},"variantOf":"planks_stairs"},{"id":51,"key":"cobble_stairs","name":"Cobblestone Stairs","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"n"},"need":1,"creative":true},{"id":52,"key":"cobble_stairs_e","name":"Cobblestone Stairs","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"e"},"need":1,"variantOf":"cobble_stairs"},{"id":53,"key":"cobble_stairs_s","name":"Cobblestone Stairs","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"s"},"need":1,"variantOf":"cobble_stairs"},{"id":54,"key":"cobble_stairs_w","name":"Cobblestone Stairs","tiles":{"top":"cobble","bottom":"cobble","side":"cobble"},"hardness":3.5,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"w"},"need":1,"variantOf":"cobble_stairs"},{"id":55,"key":"brick_stairs","name":"Brick Stairs","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"n"},"need":1,"creative":true},{"id":56,"key":"brick_stairs_e","name":"Brick Stairs","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"e"},"need":1,"variantOf":"brick_stairs"},{"id":57,"key":"brick_stairs_s","name":"Brick Stairs","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"s"},"need":1,"variantOf":"brick_stairs"},{"id":58,"key":"brick_stairs_w","name":"Brick Stairs","tiles":{"top":"brick","bottom":"brick","side":"brick"},"hardness":4,"tool":"pickaxe","sound":"stone","opaque":false,"model":{"type":"stairs","facing":"w"},"need":1,"variantOf":"brick_stairs"},{"id":59,"key":"door_b_x_c","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_bottom"},"hardness":1.2,"tool":"axe","sound":"wood","solid":true,"opaque":false,"loot":"door","model":{"type":"door","axis":"x","half":"bottom","open":false}},{"id":60,"key":"door_t_x_c","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_top"},"hardness":1.2,"tool":"axe","sound":"wood","solid":true,"opaque":false,"loot":"door","model":{"type":"door","axis":"x","half":"top","open":false}},{"id":61,"key":"door_b_z_c","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_bottom"},"hardness":1.2,"tool":"axe","sound":"wood","solid":true,"opaque":false,"loot":"door","model":{"type":"door","axis":"z","half":"bottom","open":false}},{"id":62,"key":"door_t_z_c","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_top"},"hardness":1.2,"tool":"axe","sound":"wood","solid":true,"opaque":false,"loot":"door","model":{"type":"door","axis":"z","half":"top","open":false}},{"id":63,"key":"door_b_x_o","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_bottom"},"hardness":1.2,"tool":"axe","sound":"wood","solid":false,"opaque":false,"loot":"door","model":{"type":"door","axis":"x","half":"bottom","open":true}},{"id":64,"key":"door_t_x_o","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_top"},"hardness":1.2,"tool":"axe","sound":"wood","solid":false,"opaque":false,"loot":"door","model":{"type":"door","axis":"x","half":"top","open":true}},{"id":65,"key":"door_b_z_o","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_bottom"},"hardness":1.2,"tool":"axe","sound":"wood","solid":false,"opaque":false,"loot":"door","model":{"type":"door","axis":"z","half":"bottom","open":true}},{"id":66,"key":"door_t_z_o","name":"Wooden Door","tiles":{"top":"planks","bottom":"planks","side":"door_top"},"hardness":1.2,"tool":"axe","sound":"wood","solid":false,"opaque":false,"loot":"door","model":{"type":"door","axis":"z","half":"top","open":true}}]},"items":{"_comment":"Non-block items (blocks are items automatically). Tools reference a tier below. ids must not clash with any block id.","tiers":{"wood":{"level":1,"speed":2,"durability":30,"head":"wood"},"stone":{"level":2,"speed":3.5,"durability":66,"head":"stone"},"iron":{"level":3,"speed":5.5,"durability":125,"head":"iron"}},"items":[{"id":100,"key":"stick","name":"Stick","fuel":5},{"id":101,"key":"coal","name":"Coal","fuel":80},{"id":102,"key":"iron_ingot","name":"Iron Ingot"},{"id":103,"key":"wheat_seeds","name":"Wheat Seeds","plants":{"block":"wheat_s","on":["farmland","farmland_wet"]}},{"id":104,"key":"wheat","name":"Wheat"},{"id":105,"key":"bread","name":"Bread","food":6,"saturation":7.2},{"id":106,"key":"charcoal","name":"Charcoal","fuel":80},{"id":107,"key":"apple","name":"Apple","food":4,"saturation":2.4},{"id":108,"key":"raw_iron","name":"Raw Iron"},{"id":110,"key":"wood_pickaxe","name":"Wooden Pickaxe","tool":{"type":"pickaxe","tier":"wood"}},{"id":111,"key":"wood_axe","name":"Wooden Axe","tool":{"type":"axe","tier":"wood"}},{"id":112,"key":"wood_shovel","name":"Wooden Shovel","tool":{"type":"shovel","tier":"wood"}},{"id":113,"key":"stone_pickaxe","name":"Stone Pickaxe","tool":{"type":"pickaxe","tier":"stone"}},{"id":114,"key":"stone_axe","name":"Stone Axe","tool":{"type":"axe","tier":"stone"}},{"id":115,"key":"stone_shovel","name":"Stone Shovel","tool":{"type":"shovel","tier":"stone"}},{"id":116,"key":"iron_pickaxe","name":"Iron Pickaxe","tool":{"type":"pickaxe","tier":"iron"}},{"id":117,"key":"iron_axe","name":"Iron Axe","tool":{"type":"axe","tier":"iron"}},{"id":118,"key":"iron_shovel","name":"Iron Shovel","tool":{"type":"shovel","tier":"iron"}},{"id":119,"key":"wood_hoe","name":"Wooden Hoe","tool":{"type":"hoe","tier":"wood"}},{"id":120,"key":"stone_hoe","name":"Stone Hoe","tool":{"type":"hoe","tier":"stone"}},{"id":121,"key":"iron_hoe","name":"Iron Hoe","tool":{"type":"hoe","tier":"iron"}},{"id":122,"key":"torch","name":"Torch","creative":true,"places":{"up":"torch_floor","east":"torch_e","west":"torch_w","south":"torch_s","north":"torch_n"},"offhand":true},{"id":123,"key":"iron_helmet","name":"Iron Helmet","stack":1,"equip":{"slot":"helmet","armor":2}},{"id":124,"key":"iron_chestplate","name":"Iron Chestplate","stack":1,"equip":{"slot":"chestplate","armor":6}},{"id":125,"key":"iron_leggings","name":"Iron Leggings","stack":1,"equip":{"slot":"leggings","armor":5}},{"id":126,"key":"iron_boots","name":"Iron Boots","stack":1,"equip":{"slot":"boots","armor":2}},{"id":127,"key":"iron_shield","name":"Iron Shield","stack":1,"equip":{"slot":"shield","armor":2}},{"id":128,"key":"backpack","name":"Backpack","stack":1,"equip":{"slot":"backpack","slots":9}},{"id":129,"key":"quiver","name":"Quiver","stack":1,"equip":{"slot":"quiver"}},{"id":130,"key":"oak_sapling","name":"Oak Sapling","plants":{"block":"young_oak","on":["grass","dirt"]}},{"id":131,"key":"birch_sapling","name":"Birch Sapling","plants":{"block":"young_birch","on":["grass","dirt"]}},{"id":132,"key":"spruce_sapling","name":"Spruce Sapling","plants":{"block":"young_spruce","on":["grass","dirt"]}},{"id":133,"key":"apple_sapling","name":"Apple Sapling","plants":{"block":"young_apple","on":["grass","dirt"]}},{"id":134,"key":"door","name":"Wooden Door","fuel":10,"creative":true,"door":"door_b_x_c"}]},"loot":{"_comment":"Loot tables. A block with no table (see \"loot\" in blocks.json) drops itself. entry: { item, chance (0-1, default 1), count (number or [min,max], default 1) }. An empty list drops nothing.","tables":{"grass":[{"item":"dirt"}],"snow":[{"item":"dirt"}],"farmland":[{"item":"dirt"}],"stone":[{"item":"cobble"}],"coal_ore":[{"item":"coal"}],"glass":[],"leaves":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"leaves_shatter":[{"item":"stick","chance":0.15},{"item":"oak_sapling","chance":0.1}],"grass_s":[{"item":"wheat_seeds","chance":0.1}],"grass_m":[{"item":"wheat_seeds","chance":0.16}],"grass_l":[{"item":"wheat_seeds","chance":0.28}],"wheat_s":[{"item":"wheat_seeds"}],"wheat_m":[{"item":"wheat_seeds"}],"wheat_l":[{"item":"wheat"},{"item":"wheat_seeds"},{"item":"wheat_seeds","chance":0.5}],"iron_ore":[{"item":"raw_iron"}],"torch_floor":[{"item":"torch"}],"furnace_lit":[{"item":"furnace"}],"apple_leaves":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"apple_leaves_shatter":[{"item":"apple","chance":0.15},{"item":"stick","chance":0.15},{"item":"apple_sapling","chance":0.1}],"birch_leaves":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"birch_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"birch_sapling","chance":0.1}],"spruce_leaves":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"spruce_leaves_shatter":[{"item":"stick","chance":0.15},{"item":"spruce_sapling","chance":0.1}],"young_oak":[{"item":"oak_sapling"}],"young_birch":[{"item":"birch_sapling"}],"young_spruce":[{"item":"spruce_sapling"}],"young_apple":[{"item":"apple_sapling"}],"door":[{"item":"door"}]}},"recipes":{"_comment":"Crafting recipes. in: [item, count] or [\"@group\", count] for any item of a group. at: the station (omit for by-hand). smelting: what a furnace turns one item into (seconds to cook one). Fuel burn times are \"fuel\" (seconds) on items and blocks.","groups":{"coals":["charcoal","coal"],"logs":["log","birch_log","spruce_log"]},"stations":{"table":{"label":"Crafting Table"}},"windows":{"hand":{"title":"Crafting","stations":[null]},"table":{"title":"Crafting Table","stations":[null,"table"]},"furnace":{"title":"Furnace","furnace":true}},"recipes":[{"out":"planks","n":4,"in":[["@logs",1]]},{"out":"stick","n":4,"in":[["planks",2]]},{"out":"crafting","n":1,"in":[["planks",4]]},{"out":"bread","n":1,"in":[["wheat",3]]},{"out":"wood_pickaxe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_axe","n":1,"in":[["planks",3],["stick",2]],"at":"table"},{"out":"wood_shovel","n":1,"in":[["planks",1],["stick",2]],"at":"table"},{"out":"stone_pickaxe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_axe","n":1,"in":[["cobble",3],["stick",2]],"at":"table"},{"out":"stone_shovel","n":1,"in":[["cobble",1],["stick",2]],"at":"table"},{"out":"iron_pickaxe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_axe","n":1,"in":[["iron_ingot",3],["stick",2]],"at":"table"},{"out":"iron_shovel","n":1,"in":[["iron_ingot",1],["stick",2]],"at":"table"},{"out":"wood_hoe","n":1,"in":[["planks",2],["stick",2]],"at":"table"},{"out":"stone_hoe","n":1,"in":[["cobble",2],["stick",2]],"at":"table"},{"out":"iron_hoe","n":1,"in":[["iron_ingot",2],["stick",2]],"at":"table"},{"out":"furnace","n":1,"in":[["cobble",8]],"at":"table"},{"out":"brick","n":4,"in":[["cobble",4]],"at":"table"},{"out":"torch","n":4,"in":[["@coals",1],["stick",1]]},{"out":"iron_helmet","n":1,"in":[["iron_ingot",5]],"at":"table"},{"out":"iron_chestplate","n":1,"in":[["iron_ingot",8]],"at":"table"},{"out":"iron_leggings","n":1,"in":[["iron_ingot",7]],"at":"table"},{"out":"iron_boots","n":1,"in":[["iron_ingot",4]],"at":"table"},{"out":"iron_shield","n":1,"in":[["iron_ingot",1],["planks",6]],"at":"table"},{"out":"backpack","n":1,"in":[["wheat",6],["stick",2]],"at":"table"},{"out":"quiver","n":1,"in":[["planks",3],["stick",3]],"at":"table"},{"out":"planks_stairs","n":4,"in":[["planks",6]],"at":"table"},{"out":"cobble_stairs","n":4,"in":[["cobble",6]],"at":"table"},{"out":"brick_stairs","n":4,"in":[["brick",6]],"at":"table"},{"out":"door","n":3,"in":[["planks",6]],"at":"table"}],"smelting":[{"in":"raw_iron","out":"iron_ingot","seconds":10},{"in":"sand","out":"glass","seconds":8},{"in":"cobble","out":"stone","seconds":8},{"in":"log","out":"charcoal","seconds":10},{"in":"birch_log","out":"charcoal","seconds":10},{"in":"spruce_log","out":"charcoal","seconds":10}]},"goals":{"_comment":"The goals shown in the HUD, in order. Conditions: { collected: item } | { collectedAny: [items] } | { crafted: item } | { craftedAny: [items] } | { flag: \"tilled\" | \"planted\" | \"ate\" }.","goals":[{"text":"Punch a tree to collect Wood","collectedAny":["log","birch_log","spruce_log"]},{"text":"Craft Planks","crafted":"planks"},{"text":"Craft a Crafting Table","crafted":"crafting"},{"text":"Craft a Wooden Pickaxe","crafted":"wood_pickaxe"},{"text":"Mine Cobblestone","collected":"cobble"},{"text":"Craft a Stone Pickaxe","crafted":"stone_pickaxe"},{"text":"Craft a Hoe","craftedAny":["wood_hoe","stone_hoe","iron_hoe"]},{"text":"Find Wheat Seeds in the tall grass","collected":"wheat_seeds"},{"text":"Till soil within 4 blocks of water","flag":"tilled"},{"text":"Plant Wheat Seeds on farmland","flag":"planted"},{"text":"Harvest ripe Wheat","collected":"wheat"},{"text":"Bake Bread and eat it","flag":"ate"},{"text":"Find Coal","collected":"coal"},{"text":"Craft a Furnace","crafted":"furnace"},{"text":"Mine Iron Ore","collected":"raw_iron"},{"text":"Smelt an Iron Ingot","crafted":"iron_ingot"},{"text":"Craft an Iron Pickaxe","crafted":"iron_pickaxe"},{"text":"Forge a piece of Iron Armor","craftedAny":["iron_helmet","iron_chestplate","iron_leggings","iron_boots","iron_shield"]},{"text":"Wear a piece of equipment","flag":"equipped"},{"text":"Find a village","flag":"village"},{"text":"Talk to a villager","flag":"talked"}]},"textures":{"_comment":"Textures. tiles: block faces, in atlas order. Each tile is { type, ...params }; types: noise, capped, bark, rings, planks, cells, waves, bricks, ore, stripes, blades, stalks, pixelart (palette + rows, \".\" = transparent), image (a PNG next to this file), layers (stack of the others), ref (reuse another tile). sprites: item icons; tools are drawn automatically from their type and tier.","tiles":{"grass_top":{"type":"noise","base":[96,160,54],"noise":[{"cells":4,"amp":36}],"jitter":22,"channels":[0.6,1,0.4],"specks":{"dark":{"chance":0.07,"amount":-26},"light":{"chance":0.07,"amount":22}}},"grass_side":{"type":"capped","cap":"grass_top","body":"dirt","depth":{"min":3,"bonus":[{"chance":0.5,"amount":1},{"chance":0.25,"amount":2}]}},"dirt":{"type":"noise","base":[136,98,68],"noise":[{"cells":4,"amp":34}],"jitter":16,"channels":[1,0.8,0.6],"specks":{"dark":{"chance":0.06,"amount":-34},"light":{"chance":0.05,"amount":26}}},"stone":{"type":"noise","base":[128,128,130],"noise":[{"cells":4,"amp":38},{"cells":8,"amp":22}],"jitter":10,"specks":{"dark":{"chance":0.04,"amount":-24}}},"sand":{"type":"noise","base":[222,208,160],"noise":[{"cells":4,"amp":20}],"jitter":12,"channels":[1,1,1.1],"specks":{"dark":{"chance":0.05,"amount":-16}}},"log_side":{"type":"bark","base":[104,82,50],"channels":[1,0.8,0.6],"columnVariance":22,"jitter":12,"grooveEvery":4,"grooveDarken":22,"speckChance":0.04,"speckDarken":20},"log_top":{"type":"rings","bark":[96,74,44],"barkWidth":1.6,"light":[170,136,84],"dark":[140,108,62],"ringScale":0.9,"jitter":12},"leaves":{"type":"noise","base":[52,122,38],"noise":[{"cells":4,"amp":50}],"jitter":24,"channels":[0.5,1,0.4],"holes":0.16},"planks":{"type":"planks","base":[178,142,88],"channels":[1,0.9,0.7],"boardHeight":4,"boardVariance":22,"jitter":10,"gapDarken":38,"seamDarken":30,"grainChance":0.07,"grainDarken":14},"cobble":{"type":"cells","base":[124,124,126],"points":9,"spread":44,"jitter":12,"creviceWidth":1.25,"creviceValue":-52},"water":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":0},"glass":{"type":"pixelart","palette":{"#":[210,238,245],"w":[255,255,255]},"rows":["################","#..............#","#..w...........#","#..ww.......w..#","#...ww.....w...#","#....ww........#","#.....w........#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","#..............#","################"]},"brick":{"type":"bricks","brick":[150,64,50],"mortar":[186,180,168],"brickWidth":8,"rowHeight":4,"variance":22},"snow_top":{"type":"noise","base":[244,248,255],"noise":[],"jitter":14,"channels":[0.4,0.4,0]},"snow_side":{"type":"capped","cap":"snow_top","body":"dirt","depth":{"min":4,"bonus":[{"chance":0.5,"amount":1},{"chance":0.3,"amount":2}]}},"coal_ore":{"type":"ore","base":"stone","color":[26,26,30],"light":[112,112,126],"clusters":7},"iron_ore":{"type":"ore","base":"stone","color":[206,150,120],"light":[236,196,168],"clusters":7},"crafting_top":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[96,66,38]},"rows":["################","################","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","##...+....+...##","##++++++++++++##","##...+....+...##","##...+....+...##","##...+....+...##","################","################"]}]},"crafting_side":{"type":"layers","layers":[{"type":"ref","tile":"planks"},{"type":"pixelart","palette":{"#":[112,78,44],"+":[84,58,32],"s":[200,200,205],"h":[120,120,128],"w":[150,108,60]},"rows":["################","################","################","################","++++++++++++++++","................",".........hhhh...","...sss...hhhh...","...s.s....w.....","...s.s....w.....","...sss....w.....","....s.....w.....","....s.....w.....","................","................","................"]}]},"furnace_top":{"type":"noise","base":[104,104,108],"noise":[],"jitter":14,"edge":{"width":1,"amount":-34}},"furnace_side":{"type":"layers","layers":[{"type":"ref","tile":"cobble"},{"type":"pixelart","palette":{"d":[26,24,26],"r":[140,52,20],"G":[226,120,30],"v":[34,32,34]},"rows":["................","................","................",".....vvvvvv.....",".....vvvvvv.....","................","................","....dddddddd....","....dddddddd....","....dddddddd....","....dddddddd....","....rrrrrrrr....","....GGGGGGGG....","....GGGGGGGG....","................","................"]}]},"farmland_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[146,110,74],"dark":[108,80,54],"jitter":16},"grass_s":{"type":"blades","count":6,"minHeight":3,"maxHeight":6,"dark":[52,118,38],"mid":[80,156,50],"tip":[118,190,72]},"grass_m":{"type":"blades","count":8,"minHeight":6,"maxHeight":10,"dark":[50,112,36],"mid":[82,160,52],"tip":[124,196,76]},"grass_l":{"type":"blades","count":10,"minHeight":9,"maxHeight":14,"dark":[46,106,34],"mid":[80,158,50],"tip":[128,200,80]},"wheat_s":{"type":"blades","count":8,"minHeight":3,"maxHeight":5,"dark":[70,150,50],"mid":[96,178,60],"tip":[130,205,80]},"wheat_m":{"type":"blades","count":8,"minHeight":7,"maxHeight":10,"dark":[84,150,50],"mid":[130,178,62],"tip":[176,196,84]},"wheat_l":{"type":"stalks","spacing":2,"minHeight":11,"maxHeight":14,"stem":[176,158,66],"headLength":4,"headLight":[236,200,90],"headDark":[214,168,52]},"farmland_wet_top":{"type":"stripes","period":4,"darkColumns":[1,2],"light":[72,48,33],"dark":[36,24,18],"jitter":12},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................",".......ff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"furnace_side_lit":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOOORR....","....ROYYYYOR....","....OYYYYYYO....","....OOYYYYOO....","....OOOOOOOO....","................","................"]}]},"birch_log_side":{"type":"layers","layers":[{"type":"bark","base":[226,222,208],"channels":[1,1,1],"columnVariance":8,"jitter":8,"grooveEvery":5,"grooveDarken":10,"speckChance":0.02,"speckDarken":12},{"type":"pixelart","palette":{"d":[44,42,40],"e":[92,88,80]},"rows":["..dd............",".........ee.....","................","....ddd.....dd..","................",".ee.............","........dd......","................","..dd......ee....","................",".....ddd........","...........dd...","................","ee......dd......","................",".....dd........."]}]},"birch_log_top":{"type":"rings","bark":[226,222,208],"barkWidth":1.6,"light":[222,208,166],"dark":[196,180,134],"ringScale":0.9,"jitter":10},"spruce_log_side":{"type":"bark","base":[66,50,34],"channels":[1,0.85,0.7],"columnVariance":20,"jitter":12,"grooveEvery":3,"grooveDarken":26,"speckChance":0.05,"speckDarken":20},"spruce_log_top":{"type":"rings","bark":[62,46,30],"barkWidth":1.6,"light":[150,116,74],"dark":[124,92,56],"ringScale":0.9,"jitter":12},"birch_leaves":{"type":"noise","base":[108,156,52],"noise":[{"cells":4,"amp":46}],"jitter":22,"channels":[0.7,1,0.4],"holes":0.16},"spruce_leaves":{"type":"noise","base":[30,84,58],"noise":[{"cells":4,"amp":40}],"jitter":20,"channels":[0.35,0.9,0.5],"holes":0.14},"apple_leaves":{"type":"layers","layers":[{"type":"ref","tile":"leaves"},{"type":"pixelart","palette":{"r":[212,40,40],"h":[255,130,120]},"rows":["................","................","...rr...........","...rh.....rr....","................","................",".......rr.......",".......rh.......","................",".rr.............",".rh......rr.....",".........rh.....","................",".....rr.........",".....rh.........","................"]}]},"young_oak":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_birch":{"type":"pixelart","palette":{"g":[86,138,40],"G":[140,190,80],"S":[226,222,208]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_spruce":{"type":"pixelart","palette":{"g":[26,74,50],"G":[50,120,80],"S":[84,60,38]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGGgGGg.....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"young_apple":{"type":"pixelart","palette":{"g":[40,100,30],"G":[86,160,52],"S":[110,80,46],"r":[212,40,40]},"rows":["................","................","................","......ggg.......",".....gGGGg......","....gGrgGGg....",".....gGGGg......","......gSg.......",".......S........",".......S........",".......S........","......SSS......."]},"furnace_side_lit_b":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RRYOOORR....","....ROOYYYOR....","....OYYYYOOO....","....OOYYYYYO....","....OOOOOOOO....","................","................"]}]},"furnace_side_lit_c":{"type":"layers","layers":[{"type":"ref","tile":"furnace_side"},{"type":"pixelart","palette":{"Y":[255,236,130],"O":[255,160,40],"R":[214,80,24]},"rows":["................","................","................","................","................","................","................","................",".....RRRRRR.....","....RROOYORR....","....RYYOOYOR....","....OOYYYYYO....","....OYYYOOOO....","....OOOOOOOO....","................","................"]}]},"torch_b":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................","................","......fff.......",".......FF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"torch_c":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......f........",".......ff.......","......FFF.......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS......."]},"water_b":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":0.7854},"water_c":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":1.5708},"water_d":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":2.3562},"water_e":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":3.1416},"water_f":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":3.927},"water_g":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":4.7124},"water_h":{"type":"waves","base":[40,100,210],"amplitude":12,"channels":[0.6,1,0.5],"frequency":0.9,"seed":424242,"phase":5.4978},"path_top":{"type":"noise","base":[158,128,82],"noise":[{"cells":4,"amp":22}],"jitter":14,"channels":[1,0.88,0.62],"specks":{"dark":{"chance":0.07,"amount":-26},"light":{"chance":0.05,"amount":18}}},"door_bottom":{"type":"pixelart","palette":{"#":[84,56,28],"@":[150,104,52],"l":[176,128,68],"g":[120,190,220],"G":[190,230,245],"h":[236,200,70]},"rows":["################","#@@@@@@@@@@@@@@#","#@lllll@@lllll@#","#@l@@@l@@l@@@l@#","#@l@@@l@@l@@@l@#","#@lllll@@lllll@#","#@@@@@@@@@@@@@@#","#@@@@@@@@@@@@@@#","#@lllll@@llllh@#","#@l@@@l@@l@@@h@#","#@l@@@l@@l@@@l@#","#@l@@@l@@l@@@l@#","#@lllll@@lllll@#","#@@@@@@@@@@@@@@#","#@@@@@@@@@@@@@@#","################"]},"door_top":{"type":"pixelart","palette":{"#":[84,56,28],"@":[150,104,52],"l":[176,128,68],"g":[120,190,220],"G":[190,230,245],"h":[236,200,70]},"rows":["################","#@@@@@@@@@@@@@@#","#@@@@@@@@@@@@@@#","#@Ggggg@@Ggggg@#","#@gGggg@@gGggg@#","#@ggggg@@ggggg@#","#@ggggg@@ggggg@#","#@@@@@@@@@@@@@@#","#@@@@@@@@@@@@@@#","#@Ggggg@@Ggggg@#","#@gGggg@@gGggg@#","#@ggggg@@ggggg@#","#@ggggg@@ggggg@#","#@@@@@@@@@@@@@@#","#@@@@@@@@@@@@@@#","################"]}},"toolHeads":{"wood":{"light":[204,162,104],"base":[166,124,72],"dark":[108,76,42]},"stone":{"light":[178,178,180],"base":[132,132,136],"dark":[78,78,84]},"iron":{"light":[244,244,248],"base":[208,208,214],"dark":[132,132,144]}},"toolHandle":[[148,108,58],[104,74,38]],"sprites":{"stick":{"type":"pixelart","palette":{"#":[104,74,38],"@":[148,108,58]},"rows":["................","................","................","............@...","...........#....","..........@.....",".........#......","........@.......",".......#........","......@.........",".....#..........","....@...........","...#............","................","................","................"]},"coal":{"type":"pixelart","palette":{"#":[18,18,22],"@":[40,40,46],"%":[86,86,96]},"rows":["................","................","................","................",".....#####......","....##@@@@##....","...##%%@@@@##...","...#@@@@@@@@#...","..##@@%@@@@@#...","..##%@@%%@%@#...","...#%%@@%@@@#...","...##@@@%%@#....",".....#@@@@##....",".....#.###......","................","................"]},"charcoal":{"type":"pixelart","palette":{"#":[32,24,20],"@":[66,50,40],"%":[112,88,66]},"rows":["................","................","................","................","......##........","....##@@@@##....","...##@@@@@@##...","..##%@%@@@@@#...","...#@@@@@%%@#...","...#@@@%@@@@#...","...#@@@@@%@@#...","...##@@@%@%##...","....##@@@@#.....",".....#.##.......","................","................"]},"iron_ingot":{"type":"pixelart","palette":{"#":[140,140,152],"@":[246,246,250],"%":[208,208,216]},"rows":["................","................","................","................","................","................",".......#@@@@@@#.","......#@@@@@@#..",".....#%%%%%%#...","....#%%%%%%#....","...#%%%%%%#.....","..########......","................","................","................","................"]},"wheat_seeds":{"type":"pixelart","palette":{"#":[158,176,84],"@":[96,112,48],"%":[74,92,40]},"rows":["................","................","................",".......#%.......",".......%%#%.....","....#@...%%.....","....@@..........","................","......#@...#%...","......@@...%%...","................","...#@...........","...@@...#%..#@..","........%%..@@..","................","................"]},"wheat":{"type":"pixelart","palette":{"#":[173,153,62],"@":[175,155,62],"%":[165,145,62],"&":[172,152,62],"$":[163,143,62],"*":[174,154,62],"+":[169,149,62],"=":[239,197,80],"~":[213,167,50],"^":[227,185,74],":":[201,155,50],";":[237,195,79],"-":[211,165,50],"_":[236,194,78],"<":[210,164,50],">":[235,193,77],"|":[209,163,50],"!":[161,141,62],"?":[166,146,62],"a":[177,157,62],"b":[223,181,72],"c":[197,151,50],"d":[227,185,73],"e":[228,186,74],"f":[202,156,50],"g":[225,183,73],"h":[199,153,50],"i":[179,159,62],"j":[162,142,62],"k":[176,156,62],"l":[167,147,62],"m":[168,148,62],"n":[230,188,75],"o":[204,158,50],"p":[239,197,79]},"rows":["................","................","...>|...gh.._<..","..._<...ef..p~..","...;-...d:..d:..","....^:..;-..no..","....=~..bc..ef..","....+...?...i...","....*...*...m...","....&...@..l....","....$...?..k....",".....&..a..j....",".....%..?..%....",".....@..+..i....",".....#..!..+....","................"]},"bread":{"type":"pixelart","palette":{"#":[128,82,36],"@":[214,156,76],"%":[150,96,44],"&":[176,118,52]},"rows":["................","................","................","................","................","...##@@@@@#.....","..#@@%@@%@@%#...","..&&&&&&&@@%@@..","..&&&&&&&&&&&&#.","..#&&&&&&&&&&&&.","...&&&&&&&&&&&&.","....#&&&&&&&&&#.","......#&&&&&##..","................","................","................"]},"apple":{"type":"pixelart","palette":{"r":[150,20,24],"R":[214,40,44],"w":[255,205,205],"s":[100,70,38],"g":[70,150,50]},"rows":["................","..........gg....","......s..ggg....","......s....g....","....rrr.rrr.....","...rRRRrRRRr....","..rRwRRRRRRRr...","..rRwRRRRRRRr...","..rRRRRRRRRRr...","..rRRRRRRRRRr...","...rRRRRRRRr....","...rrRRRRRrr....","....rrRRRrr.....",".....rrrr.......","................","................"]},"raw_iron":{"type":"pixelart","palette":{"#":[96,62,48],"@":[206,150,120],"%":[240,200,172]},"rows":["................","................","................","................",".....#####......","....##@@%@##....","...##@@@@@@@#...","...#@@%%@@@@#...","..##@@@@@%@@##..","..#@%@@@@@@@@#..","..##@@@%@@@@##..","...#@@@@@%@@#...","....##@@@@##....",".....######.....","................","................"]},"torch":{"type":"pixelart","palette":{"f":[255,232,120],"F":[255,150,30],"c":[58,40,30],"s":[150,106,58],"S":[100,68,38]},"rows":["................","................","................",".......ff.......","......ffFf......","......fFFF......",".......cc.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......",".......sS.......","................"]},"iron_helmet":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","....########....","...#@@@@%%%%#...","..#@@@%%oo%%%#..","..#@@%%%ooo%%#..","..#@%%%%oooo%#..","..#@%%%%oooo%#..","..#@%%####oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oox#..#xoo#..","..####....####..","................","................","................"]},"iron_chestplate":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..####....####..",".#@@%#....#o%%#.",".#@%%o####ooo%#.",".#@%%%o##oooo%#.",".#@%%%%oooooo%#.",".#@%%%%oooooo%#.",".#@@%%%ooooo%%#.","..#@%%%ooooo%#..","..#@%%%ooooo%#..","..##@%%oooo%##..","...##@%ooo%##...","....##oooo##....",".....######.....","................","................"]},"iron_leggings":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","..############..","..#@@%%%ooo%%#..","..#@%%%ooooo%#..","..#@%%####oo%#..","..#@%%#..#oo%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#%oo#..#ooo#..","..#oxx#..#xxo#..","..#oxx#..#xxo#..","..####....####..","................","................","................","................"]},"iron_boots":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114]},"rows":["................","................","..###......###..","..#@%#....#o%#..","..#@%o#..#oo%#..","..#@%o#..#oo%#..","..#@%o####oo%#..","..#@%%%ooooo%#..",".#@%%%%oooooo%#.",".#%%oooooooooo#.",".#oxxxxxxxxxxo#.",".####......####.","................","................","................","................"]},"iron_shield":{"type":"pixelart","palette":{"#":[52,52,64],"@":[240,240,250],"%":[196,196,210],"o":[146,146,162],"x":[98,98,114],"g":[150,106,58],"G":[190,142,84]},"rows":["................","..############..",".#@@@@@%o%%%%%#.",".#@%%%%%ooooo%#.",".#@%ggggggggo%#.",".#@%gGGGGGGgo%#.",".#@%ggggggggo%#.",".#@%%%%%ooooo%#.","..#@%%%ooooo%#..","..#@%%oooooo%#..","...#%%oooooo#...","...#@oooooo%#...","....#oooooo#....",".....#xxxx#.....","......####......","................"]},"backpack":{"type":"pixelart","palette":{"#":[50,34,22],"g":[170,120,70],"G":[204,154,94],"x":[112,78,46],"y":[236,204,84]},"rows":["................","....########....","...#gggGGggg#...","..#ggGGGGGGgg#..","..#gGGGGGGGGg#..","..#gGgGGGGgGg#..","..#gggGGGGggg#..","..#gGyGGGGyGg#..","..#gGgGGGGgGg#..","..#ggGGGGGGgg#..","..#gggggggggg#..","..#xxxxxxxxxx#..","..############..","................","................","................"]},"quiver":{"type":"pixelart","palette":{"#":[50,34,22],"g":[150,106,58],"G":[186,138,80],"r":[92,62,36],"f":[244,244,244],"|":[150,120,80]},"rows":["................",".....f..f..f....",".....|..|..|....","....#########...","....#gGgGgGgG#..","....#gGgGgGgG#..","....#gGggGgGg#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....#rrrrrrrr#..","....#gGgGgGgG#..","....#GgGgGgGg#..","....#gGgGgGgG#..","....##########..","................","................"]},"oak_sapling":{"type":"ref","tile":"young_oak"},"birch_sapling":{"type":"ref","tile":"young_birch"},"spruce_sapling":{"type":"ref","tile":"young_spruce"},"apple_sapling":{"type":"ref","tile":"young_apple"},"door":{"type":"pixelart","palette":{"#":[84,56,28],"@":[150,104,52],"l":[176,128,68],"g":[120,190,220],"G":[190,230,245],"h":[236,200,70]},"rows":["................","....########....","....#@@@@@@#....","....#Gg@Gg@#....","....#gg@gg@#....","....#gg@gg@#....","....#@@@@@@#....","....#@@@@@@#....","....#ll@ll@#....","....#ll@ll@#....","....#ll@llh#....","....#ll@ll@#....","....#ll@ll@#....","....#@@@@@@#....","....########....","................"]}},"animations":{"_comment":"Tiles that flicker: the engine swaps these frames into the texture atlas at the given speed (frames per second). The first frame is the tile itself.","furnace_side_lit":{"frames":["furnace_side_lit","furnace_side_lit_b","furnace_side_lit_c"],"fps":7},"torch":{"frames":["torch","torch_b","torch_c"],"fps":8},"water":{"frames":["water","water_b","water_c","water_d","water_e","water_f","water_g","water_h"],"fps":6}}},"sounds":{"_comment":"Block sound materials. Each is a stack of layers played together: filtered noise and/or swept tones. A block picks one with \"sound\". Phases scale loudness and length.","phases":{"break":{"loud":1,"length":0.16},"place":{"loud":0.8,"length":0.16},"tick":{"loud":0.35,"length":0.05},"step":{"loud":0.22,"length":0.07}},"materials":{"default":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"stone":[{"type":"noise","filter":"bandpass","freq":1900,"q":1.2,"gain":0.55},{"type":"tone","from":160,"to":70,"gain":0.3,"lengthScale":1.2}],"wood":[{"type":"noise","filter":"bandpass","freq":700,"q":2,"gain":0.4},{"type":"tone","from":260,"to":110,"gain":0.45,"wave":"triangle","lengthScale":1.4}],"glass":[{"type":"noise","filter":"highpass","freq":4500,"q":1,"gain":0.3},{"type":"tone","from":2600,"to":2340,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":3900,"to":3510,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03},{"type":"tone","from":5200,"to":4680,"gain":0.08,"seconds":0.25,"skipPhases":["step"],"delayJitter":0.03}],"sand":[{"type":"noise","filter":"highpass","freq":1800,"q":0.5,"gain":0.35,"lengthScale":1.3}],"leaves":[{"type":"noise","filter":"highpass","freq":3000,"q":0.4,"gain":0.28,"lengthScale":1.2}],"snow":[{"type":"noise","filter":"lowpass","freq":1500,"q":0.6,"gain":0.4,"lengthScale":1.4}],"water":[{"type":"noise","filter":"bandpass","freq":900,"q":0.8,"gain":0.35,"seconds":0.3}],"grass":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}],"dirt":[{"type":"noise","filter":"lowpass","freq":1000,"q":0.8,"gain":0.55},{"type":"tone","from":120,"to":60,"gain":0.22}]}},"worldgen":{"_comment":"Terrain, ores, caves, trees and ground cover. Block names refer to blocks.json keys. Ores: minY is inclusive, maxY exclusive. beachAboveSea: columns at most this far above the sea are beach.","seaLevel":22,"snowLine":44,"blocks":{"sea":"water","stone":"stone","surface":"grass","filler":"dirt","fillerDepth":3,"beach":"sand","beachFiller":"sand","snowSurface":"snow","snowFiller":"stone"},"terrain":{"continentScale":0.0045,"continentHeight":22,"hillScale":0.014,"hillHeight":7,"ridgeScale":0.011,"ridgeHeight":24,"baseAboveSea":5,"plainsHills":1.3,"rollingHills":9,"mountainHeight":22,"mountainUplift":5,"duneHeight":2.6,"duneScale":0.035,"flatContinent":0.3},"rivers":{"scale":0.0065,"coreWidth":0.016,"bankWidth":0.07,"warp":14,"lowlandFrom":8,"lowlandTo":20,"bedBelowSea":2},"caves":{"scale":[0.045,0.07,0.045],"threshold":0.1,"minY":3,"surfaceDepth":4,"caverns":{"scale":[0.022,0.04,0.022],"threshold":0.4,"minY":4,"maxY":34,"surfaceDepth":6},"entrances":{"scale":0.035,"threshold":0.25}},"ores":[{"block":"iron_ore","scale":0.16,"offset":[40,7,-20],"threshold":0.6,"minY":3,"maxY":36},{"block":"coal_ore","scale":0.14,"offset":[5,0,9],"threshold":0.56,"minY":0,"maxY":64}],"trees":{"_comment":"Trees: every spot that grows a tree picks one variant, weighted by \"weight\" among those whose \"heights\" range (terrain height) fits. shape: round (the classic ball of leaves), tall (a big crown on a long trunk), cone (a spruce) or bush (a low shrub). Saplings grow into these by key (blocks.json plant.grows).","baseDensity":0.003,"forestDensity":0.05,"minAboveSea":2,"belowSnowLine":2,"variants":[{"key":"oak","weight":6,"heights":[24,99],"shape":"round","trunk":[4,6],"log":"log","leaves":"leaves","biomes":["plains","forest","hills"]},{"key":"apple","weight":1.2,"heights":[24,36],"shape":"round","trunk":[3,5],"log":"log","leaves":"apple_leaves","biomes":["plains","forest"]},{"key":"birch","weight":3,"heights":[25,40],"shape":"round","trunk":[5,7],"log":"birch_log","leaves":"birch_leaves","biomes":["plains","forest","hills"]},{"key":"spruce","weight":4,"heights":[26,99],"shape":"cone","trunk":[6,9],"log":"spruce_log","leaves":"spruce_leaves","biomes":["tundra","mountains","hills"]},{"key":"tall_oak","weight":1,"heights":[24,38],"shape":"tall","trunk":[8,11],"log":"log","leaves":"leaves","biomes":["forest"]},{"key":"bush","weight":1.6,"heights":[24,99],"shape":"bush","trunk":[1,2],"log":"log","leaves":"leaves","biomes":["plains","forest","hills","mountains","tundra"]}]},"groundCover":{"chance":0.24,"variants":[{"block":"grass_s","weight":0.45},{"block":"grass_m","weight":0.35},{"block":"grass_l","weight":0.2}]},"spawn":{"minTrees":3,"treeRadius":10,"waterRadius":28},"beachAboveSea":1,"biomes":{"_comment":"Climate decides the biome of every column. Three slow noise fields: temp (cold..hot), wet (dry..wet) and rel (relief: flat..mountainous), each mostly between -0.35 and 0.35; climateScale is how stretched they are (smaller = bigger biomes). select gives the cut-offs: relief above mountainRel is mountains, above hillsRel is hills; hotter than hotTemp and drier than dryWet is desert, colder than coldTemp is tundra, wetter than forestWet is forest, anything else is plains. blend is how wide the smooth change of terrain shape between two biomes is, in climate units. A biome picks its own ground blocks (surface / filler / fillerDepth), rockFrom (the surface turns to bare stone from this height up) and a trees multiplier on the tree density (denseMin: forests are never thinner than this share of the densest).","climateScale":0.0014,"select":{"mountainRel":0.19,"hillsRel":0.07,"hotTemp":0.13,"dryWet":-0.02,"coldTemp":-0.2,"forestWet":0.04,"blend":0.08},"types":{"plains":{"surface":"grass","filler":"dirt","fillerDepth":3,"trees":0.3},"forest":{"surface":"grass","filler":"dirt","fillerDepth":3,"trees":1,"denseMin":0.6},"hills":{"surface":"grass","filler":"dirt","fillerDepth":3,"trees":0.55},"mountains":{"surface":"grass","filler":"dirt","fillerDepth":2,"trees":0.3,"rockFrom":36},"desert":{"surface":"sand","filler":"sand","fillerDepth":5,"trees":0},"tundra":{"surface":"snow","filler":"dirt","fillerDepth":3,"trees":0.4}}},"villages":{"_comment":"Villages: each square region of the world (regionSize blocks) may hold one, with probability chance, on level dry ground in one of biomes (the site must be flatter than flatRange over flatRadius blocks; attempts = how many places are tried). Two roads cross at a well, armLength blocks long each way; houses and farms line them (emptyLot = chance a plot is left bare) and a village needs at least minBuildings. maxStep: ground this far from the village floor is levelled, further is left out. maxVillagers: people per village.","regionSize":192,"chance":0.75,"attempts":30,"flatRadius":20,"flatRange":3,"maxStep":3,"minAboveSea":2,"armLength":33,"emptyLot":0.2,"minBuildings":3,"maxVillagers":8,"biomes":["plains","forest","desert"]}},"game":{"_comment":"Survival rules and tuning numbers.","player":{"maxHealth":20,"maxFood":20,"reach":6,"lookAtReach":5},"hunger":{"drainPerSecond":0.03,"sprintDrainPerSecond":0.12,"jumpCost":0.05,"sprintJumpCost":0.1,"miningCost":0.05,"miningDrainPerSecond":0.06,"maxSaturation":20,"healEverySeconds":1.5,"saturationPerHeal":1,"emptySaturationCost":1,"respawnSaturation":5,"noSprintAtOrBelow":6,"starveEverySeconds":15,"starveDamage":1,"starvingSpeed":0.75},"eating":{"seconds":1.4},"fall":{"safeDistance":4,"damageOffset":3,"tolerance":0.05,"kick":1.3},"tilling":{"radius":4,"waterBelow":4,"waterAbove":1},"time":{"dayLengthSeconds":480,"startTime":0.08},"treeFall":{"mode":"shatter","leafReach":4},"creativeHotbar":["grass","dirt","stone","cobble","planks","log","glass","brick","sand"],"spread":{"chance":0.5,"samplesPerChunk":12,"chunkRadius":3},"plants":{"growthChunkRadius":4},"studio":{"_comment":"The developer logo screen at startup. Letters, digits, space and - . ! & ' only.","name":"Pixel Pilots Studio","tagline":"presents"},"lighting":{"minBrightness":0.14,"gamma":1.5,"skyLevel":15},"equipment":{"_comment":"Equipment slots shown in the inventory (the order here is the order on screen). Armor points reduce damage from falls by armorReduction each (starvation ignores armor).","armorReduction":0.04,"maxArmor":20,"slots":[{"id":"helmet","label":"Helmet"},{"id":"chestplate","label":"Chestplate"},{"id":"leggings","label":"Leggings"},{"id":"boots","label":"Boots"},{"id":"shield","label":"Shield"},{"id":"backpack","label":"Backpack"},{"id":"quiver","label":"Quiver"}]},"tools":{"_comment":"wrongToolWear: how many uses a tool loses when it breaks a block it is not made for (a pickaxe on dirt, a shovel on stone); the right tool loses 1.","wrongToolWear":3}},"music":{"_comment":"The soundtrack. Every track is generated live from this description (nothing is recorded). In the game a random track plays, and when it finishes there is a short pause (gapSeconds) and another one is picked at random, never the same one twice in a row. The title screen plays the track named by \"title\" on a loop. A track: bpm, bars (how long it lasts), chords (root = bass note, tones = the notes the pad and melody use, as MIDI numbers; each chord lasts barsPerChord bars and the list repeats), lead (the melody: voice piano|bell|pluck, density = chance of a note on [the first beat, other even steps, odd steps], leap = chance of an octave jump, rest = every Nth bar the melody takes a breath), pad (triangle|strings|null), bass (sine|drone|null), arp (a repeating broken-chord pattern: voice, pattern = which chord tone each step plays, step = beats per note, vel). \"melody\" instead of a random lead plays exactly these notes: [bar, beat, midi note, beats long, loudness].","gapSeconds":[5,12],"title":"theme","tracks":[{"key":"meadow","name":"Meadow","bpm":58,"bars":16,"barsPerChord":1,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":43,"tones":[59,62,65,67,72]},{"root":40,"tones":[59,62,64,67,71]},{"root":45,"tones":[60,64,67,69,72]},{"root":38,"tones":[57,60,62,65,69]},{"root":43,"tones":[59,62,64,67,71]}],"lead":{"voice":"piano","density":[0.9,0.5,0.28],"leap":0.12,"rest":4},"pad":"triangle","bass":"sine"},{"key":"lantern","name":"Lantern Light","bpm":50,"bars":16,"barsPerChord":2,"chords":[{"root":45,"tones":[57,60,64,67,71]},{"root":41,"tones":[57,60,64,65,69]},{"root":48,"tones":[55,60,64,67,72]},{"root":43,"tones":[55,59,62,67,71]}],"lead":{"voice":"bell","density":[0.8,0.45,0.3],"leap":0.2,"rest":4},"pad":"strings","bass":"sine"},{"key":"slow_tide","name":"Slow Tide","bpm":44,"bars":16,"barsPerChord":2,"chords":[{"root":38,"tones":[57,60,62,64,65]},{"root":43,"tones":[59,62,64,67,71]},{"root":36,"tones":[60,64,67,71,74]},{"root":41,"tones":[57,60,64,65,69]}],"lead":{"voice":"piano","density":[0.55,0.28,0.14],"leap":0.18,"rest":3},"pad":"strings","bass":"drone"},{"key":"hearthside","name":"Hearthside","bpm":66,"bars":16,"barsPerChord":1,"chords":[{"root":41,"tones":[53,57,60,65,69]},{"root":46,"tones":[58,62,65,69,74]},{"root":43,"tones":[55,58,62,65,70]},{"root":48,"tones":[55,58,60,64,67]}],"lead":{"voice":"pluck","density":[0.5,0.25,0.12],"leap":0.1,"rest":4},"arp":{"voice":"piano","pattern":[0,2,1,3,2,4,3,1],"step":0.5,"vel":0.12},"pad":"triangle","bass":"sine"},{"key":"deep_stone","name":"Deep Stone","bpm":40,"bars":16,"barsPerChord":2,"chords":[{"root":40,"tones":[52,55,59,64,67]},{"root":41,"tones":[53,57,60,64,65]},{"root":45,"tones":[52,57,60,64,69]},{"root":38,"tones":[50,53,57,62,65]}],"lead":{"voice":"bell","density":[0.45,0.2,0.1],"leap":0.3,"rest":2},"pad":"strings","bass":"drone"},{"key":"morning_light","name":"Morning Light","bpm":76,"bars":16,"barsPerChord":1,"chords":[{"root":43,"tones":[55,59,62,67,71]},{"root":50,"tones":[57,62,66,69,74]},{"root":40,"tones":[55,59,64,67,71]},{"root":48,"tones":[55,60,64,67,72]}],"lead":{"voice":"piano","density":[0.8,0.55,0.35],"leap":0.1,"rest":4},"arp":{"voice":"pluck","pattern":[0,1,2,3,2,1,4,2],"step":0.5,"vel":0.1},"pad":"triangle","bass":"sine"},{"key":"theme","name":"VoxelCraft Theme","bpm":72,"bars":16,"barsPerChord":2,"chords":[{"root":48,"tones":[60,64,67,71,74]},{"root":43,"tones":[59,62,67,71,74]},{"root":45,"tones":[57,60,64,67,72]},{"root":41,"tones":[57,60,65,69,72]},{"root":48,"tones":[60,64,67,72,76]},{"root":43,"tones":[59,62,67,71,74]},{"root":41,"tones":[57,60,65,69,72]},{"root":43,"tones":[55,59,62,67,71]}],"melody":[[0,0,72,2,0.3],[0,2,76,1,0.26],[0,3,79,1,0.26],[1,0,81,2,0.28],[1,2,79,2,0.24],[2,0,76,2,0.28],[2,2,74,1,0.24],[2,3,72,1,0.24],[3,0,74,4,0.26],[4,0,72,2,0.28],[4,2,69,1,0.24],[4,3,72,1,0.24],[5,0,76,2,0.28],[5,2,74,2,0.24],[6,0,72,2,0.28],[6,2,69,2,0.24],[7,0,67,4,0.26],[8,0,72,2,0.3],[8,2,76,1,0.26],[8,3,79,1,0.26],[9,0,84,2,0.32],[9,2,83,1,0.26],[9,3,79,1,0.26],[10,0,81,2,0.3],[10,2,79,1,0.24],[10,3,76,1,0.24],[11,0,79,4,0.28],[12,0,77,2,0.28],[12,2,76,1,0.24],[12,3,74,1,0.24],[13,0,72,2,0.26],[13,2,74,2,0.24],[14,0,71,2,0.26],[14,2,74,2,0.24],[15,0,72,4,0.3]],"arp":{"voice":"bell","pattern":[0,2,3,2],"step":1,"vel":0.07},"pad":"strings","bass":"sine"}]}};
var lm=0,rd=1,cm=2;var Oa=1,hm=2,ho=3,Fs=0,Un=1,ai=2,Wi=0,uo=1,ur=2,od=3,ad=4,um=5;var dr=100,dm=101,fm=102,pm=103,mm=104,gm=200,xm=201,ym=202,_m=203,ld=204,cd=205,vm=206,Mm=207,bm=208,Sm=209,wm=210,Em=211,Tm=212,Am=213,Cm=214,oc=0,ac=1,lc=2,io=3,cc=4,hc=5,uc=6,dc=7,hd=0,Rm=1,Im=2,bi=0,ud=1,dd=2,fd=3,pd=4,md=5,gd=6,xd=7;var yd=300,Bs=301,fr=302,zc=303,Hc=304,Fa=306,so=1e3,Fi=1001,fc=1002,Ke=1003,Pm=1004;var Ba=1005;var pn=1006,Vc=1007;var ks=1008;var Jn=1009,_d=1010,vd=1011,fo=1012,Gc=1013,Si=1014,li=1015,wi=1016,Wc=1017,Xc=1018,po=1020,Md=35902,bd=35899,Sd=1021,wd=1022,ci=1023,Bi=1026,zs=1027,qc=1028,$c=1029,Hs=1030,Yc=1031;var Zc=1033,ka=33776,za=33777,Ha=33778,Va=33779,Kc=35840,Jc=35841,jc=35842,Qc=35843,th=36196,eh=37492,nh=37496,ih=37488,sh=37489,Ga=37490,rh=37491,oh=37808,ah=37809,lh=37810,ch=37811,hh=37812,uh=37813,dh=37814,fh=37815,ph=37816,mh=37817,gh=37818,xh=37819,yh=37820,_h=37821,vh=36492,Mh=36494,bh=36495,Sh=36283,wh=36284,Wa=36285,Eh=36286;var ha=2300,pc=2301,ic=2302,ju=2303,Qu=2400,td=2401,ed=2402;var Lm=3200;var Ed=0,Nm=1,hi="",Zn="srgb",cr="srgb-linear",ua="linear",be="srgb";var sc=7680;var Dm=519,Um=512,Om=513,Fm=514,Th=515,Bm=516,km=517,Ah=518,zm=519,Td=35044,Ad=35048;var Cd="300 es",Mi=2e3,da=2001;function e_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function n_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hm(){let n=fa("canvas");return n.style.display="block",n}var Np={},ro=null;function pa(...n){let t="THREE."+n.shift();ro?ro("log",t,...n):console.log(t,...n)}function Vm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=Vm(n);let t="THREE."+n.shift();if(ro)ro("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Zt(...n){n=Vm(n);let t="THREE."+n.shift();if(ro)ro("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function lr(...n){let t=n.join(" ");t in Np||(Np[t]=!0,$t(...n))}function Gm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Wm={[oc]:ac,[lc]:uc,[cc]:dc,[io]:hc,[ac]:oc,[uc]:lc,[dc]:cc,[hc]:io},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rc=Math.PI/180,mc=180/Math.PI;function Ps(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function pe(n,t,e){return Math.max(t,Math.min(e,n))}function i_(n,t){return(n%t+t)%t}function Cu(n,t,e){return(1-e)*n+e*t}function Ui(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oe=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let w=Math.acos(g),R=Math.sin(w);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ru.copy(this).projectOnVector(t),this.sub(Ru)}reflect(t){return this.sub(Ru.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ru=new G,Dp=new Hn,jt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],w=s[1],R=s[4],v=s[7],S=s[2],M=s[5],C=s[8];return r[0]=o*x+a*w+l*S,r[3]=o*g+a*R+l*M,r[6]=o*m+a*v+l*C,r[1]=c*x+h*w+d*S,r[4]=c*g+h*R+d*M,r[7]=c*m+h*v+d*C,r[2]=u*x+f*w+p*S,r[5]=u*g+f*R+p*M,r[8]=u*m+f*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Iu.makeScale(t,e)),this}rotate(t){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Iu.makeRotation(-t)),this}translate(t,e){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Iu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Iu=new jt,Up=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Op=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s_(){let n={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=no(s.r),s.g=no(s.g),s.b=no(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cr]:{primaries:t,whitePoint:i,transfer:ua,toXYZ:Up,fromXYZ:Op,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:i,transfer:be,toXYZ:Up,fromXYZ:Op,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),n}var ce=s_();function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function no(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Br,gc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Br===void 0&&(Br=fa("canvas")),Br.width=t.width,Br.height=t.height;let s=Br.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Br}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hs(e[i]/255)*255):e[i]=hs(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},r_=0,oo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pu(s[o].image)):r.push(Pu(s[o]))}else r=Pu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Pu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var o_=0,Lu=new G,Ln=class n extends ki{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Fi,s=Fi,r=pn,o=ks,a=ci,l=Jn,c=n.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Ps(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lu).x}get height(){return this.source.getSize(Lu).y}get depth(){return this.source.getSize(Lu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=yd;Ln.DEFAULT_ANISOTROPY=1;var Ge=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,v=(f+1)/2,S=(m+1)/2,M=(h+u)/4,C=(d+x)/4,_=(p+g)/4;return R>v&&R>S?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=M/i,r=C/i):v>S?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=C/r,s=_/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(g-p)/w,this.y=(d-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ln(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new oo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends xc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ma=class extends Ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Se=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,x,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/kr.setFromMatrixColumn(t,0).length(),r=1/kr.setFromMatrixColumn(t,1).length(),o=1/kr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a_,t,l_)}lookAt(t,e,i){let s=this.elements;return $n.subVectors(t,e),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ts.crossVectors(i,$n),Ts.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ts.crossVectors(i,$n)),Ts.normalize(),Al.crossVectors($n,Ts),s[0]=Ts.x,s[4]=Al.x,s[8]=$n.x,s[1]=Ts.y,s[5]=Al.y,s[9]=$n.y,s[2]=Ts.z,s[6]=Al.z,s[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],w=i[3],R=i[7],v=i[11],S=i[15],M=s[0],C=s[4],_=s[8],T=s[12],I=s[1],P=s[5],U=s[9],B=s[13],D=s[2],F=s[6],q=s[10],J=s[14],j=s[3],k=s[7],W=s[11],Q=s[15];return r[0]=o*M+a*I+l*D+c*j,r[4]=o*C+a*P+l*F+c*k,r[8]=o*_+a*U+l*q+c*W,r[12]=o*T+a*B+l*J+c*Q,r[1]=h*M+d*I+u*D+f*j,r[5]=h*C+d*P+u*F+f*k,r[9]=h*_+d*U+u*q+f*W,r[13]=h*T+d*B+u*J+f*Q,r[2]=p*M+x*I+g*D+m*j,r[6]=p*C+x*P+g*F+m*k,r[10]=p*_+x*U+g*q+m*W,r[14]=p*T+x*B+g*J+m*Q,r[3]=w*M+R*I+v*D+S*j,r[7]=w*C+R*P+v*F+S*k,r[11]=w*_+R*U+v*q+S*W,r[15]=w*T+R*B+v*J+S*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],w=l*f-c*u,R=a*f-c*d,v=a*u-l*d,S=o*f-c*h,M=o*u-l*h,C=o*d-a*h;return e*(x*w-g*R+m*v)-i*(p*w-g*S+m*M)+s*(p*R-x*S+m*C)-r*(p*v-x*M+g*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],w=e*a-i*o,R=e*l-s*o,v=e*c-r*o,S=i*l-s*a,M=i*c-r*a,C=s*c-r*l,_=h*x-d*p,T=h*g-u*p,I=h*m-f*p,P=d*g-u*x,U=d*m-f*x,B=u*m-f*g,D=w*B-R*U+v*P+S*I-M*T+C*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return t[0]=(a*B-l*U+c*P)*F,t[1]=(s*U-i*B-r*P)*F,t[2]=(x*C-g*M+m*S)*F,t[3]=(u*M-d*C-f*S)*F,t[4]=(l*I-o*B-c*T)*F,t[5]=(e*B-s*I+r*T)*F,t[6]=(g*v-p*C-m*R)*F,t[7]=(h*C-u*v+f*R)*F,t[8]=(o*U-a*I+c*_)*F,t[9]=(i*I-e*U-r*_)*F,t[10]=(p*M-x*v+m*w)*F,t[11]=(d*v-h*M-f*w)*F,t[12]=(a*T-o*P-l*_)*F,t[13]=(e*P-i*T+s*_)*F,t[14]=(x*R-p*S-g*w)*F,t[15]=(h*S-d*R+u*w)*F,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,g=o*d,m=a*d,w=l*c,R=l*h,v=l*d,S=i.x,M=i.y,C=i.z;return s[0]=(1-(x+m))*S,s[1]=(f+v)*S,s[2]=(p-R)*S,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(u+m))*M,s[6]=(g+w)*M,s[7]=0,s[8]=(p+R)*C,s[9]=(g-w)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=kr.set(s[0],s[1],s[2]).length(),a=kr.set(s[4],s[5],s[6]).length(),l=kr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xi.copy(this);let c=1/o,h=1/a,d=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,e.setFromRotationMatrix(xi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Mi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Mi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===da)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Mi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Mi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===da)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},kr=new G,xi=new Se,a_=new G(0,0,0),l_=new G(1,1,1),Ts=new G,Al=new G,$n=new G,Fp=new Se,Bp=new Hn,zi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},c_=0,kp=new G,zr=new Hn,rs=new Se,Cl=new G,ta=new G,h_=new G,u_=new Hn,zp=new G(1,0,0),Hp=new G(0,1,0),Vp=new G(0,0,1),Gp={type:"added"},d_={type:"removed"},Hr={type:"childadded",child:null},Nu={type:"childremoved",child:null},Nn=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,e=new zi,i=new Hn,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new jt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(zp,t)}rotateY(t){return this.rotateOnAxis(Hp,t)}rotateZ(t){return this.rotateOnAxis(Vp,t)}translateOnAxis(t,e){return kp.copy(t).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zp,t)}translateY(t){return this.translateOnAxis(Hp,t)}translateZ(t){return this.translateOnAxis(Vp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cl.copy(t):Cl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(ta,Cl,this.up):rs.lookAt(Cl,ta,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(rs),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gp),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d_),Nu.child=t,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gp),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,h_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,u_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new G(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},f_={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function Du(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=i_(t,1),e=pe(e,0,1),i=pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Du(o,r,t+1/3),this.g=Du(o,r,t),this.b=Du(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Zn){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){let i=Xm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return ce.workingToColorSpace(vn.copy(this),t),Math.round(pe(vn.r*255,0,255))*65536+Math.round(pe(vn.g*255,0,255))*256+Math.round(pe(vn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(vn.copy(this),e);let i=vn.r,s=vn.g,r=vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Zn){ce.workingToColorSpace(vn.copy(this),t);let e=vn.r,i=vn.g,s=vn.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(As),this.setHSL(As.h+t,As.s+e,As.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(As),t.getHSL(Rl);let i=Cu(As.h,Rl.h,e),s=Cu(As.s,Rl.s,e),r=Cu(As.l,Rl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Wt;Wt.NAMES=Xm;var xa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ya=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yi=new G,os=new G,Uu=new G,as=new G,Vr=new G,Gr=new G,Wp=new G,Ou=new G,Fu=new G,Bu=new G,ku=new Ge,zu=new Ge,Hu=new Ge,Oi=class n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yi.subVectors(t,e),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yi.subVectors(s,e),os.subVectors(i,e),Uu.subVectors(t,e);let o=yi.dot(yi),a=yi.dot(os),l=yi.dot(Uu),c=os.dot(os),h=os.dot(Uu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(o,as.y),l.addScaledVector(a,as.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ku.setScalar(0),zu.setScalar(0),Hu.setScalar(0),ku.fromBufferAttribute(t,e),zu.fromBufferAttribute(t,i),Hu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ku,r.x),o.addScaledVector(zu,r.y),o.addScaledVector(Hu,r.z),o}static isFrontFacing(t,e,i,s){return yi.subVectors(i,e),os.subVectors(t,e),yi.cross(os).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),os.subVectors(this.a,this.b),yi.cross(os).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,i),Gr.subVectors(r,i),Ou.subVectors(t,i);let l=Vr.dot(Ou),c=Gr.dot(Ou);if(l<=0&&c<=0)return e.copy(i);Fu.subVectors(t,s);let h=Vr.dot(Fu),d=Gr.dot(Fu);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Vr,o);Bu.subVectors(t,r);let f=Vr.dot(Bu),p=Gr.dot(Bu);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Gr,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Wp.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Wp,a);let m=1/(g+x+u);return o=x*m,a=u*m,e.copy(i).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Il.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Il.copy(i.boundingBox)),Il.applyMatrix4(t.matrixWorld),this.union(Il)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),Pl.subVectors(this.max,ea),Wr.subVectors(t.a,ea),Xr.subVectors(t.b,ea),qr.subVectors(t.c,ea),Cs.subVectors(Xr,Wr),Rs.subVectors(qr,Xr),sr.subVectors(Wr,qr);let e=[0,-Cs.z,Cs.y,0,-Rs.z,Rs.y,0,-sr.z,sr.y,Cs.z,0,-Cs.x,Rs.z,0,-Rs.x,sr.z,0,-sr.x,-Cs.y,Cs.x,0,-Rs.y,Rs.x,0,-sr.y,sr.x,0];return!Vu(e,Wr,Xr,qr,Pl)||(e=[1,0,0,0,1,0,0,0,1],!Vu(e,Wr,Xr,qr,Pl))?!1:(Ll.crossVectors(Cs,Rs),e=[Ll.x,Ll.y,Ll.z],Vu(e,Wr,Xr,qr,Pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ls=[new G,new G,new G,new G,new G,new G,new G,new G],_i=new G,Il=new Hi,Wr=new G,Xr=new G,qr=new G,Cs=new G,Rs=new G,sr=new G,ea=new G,Pl=new G,Ll=new G,rr=new G;function Vu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rr.fromArray(n,r);let a=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=t.dot(rr),c=e.dot(rr),h=i.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qe=new G,Nl=new oe,p_=0,ye=class extends ki{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Td,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nl.fromBufferAttribute(this,e),Nl.applyMatrix3(t),this.setXY(e,Nl.x,Nl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var _a=class extends ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var va=class extends ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ln=class extends ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},m_=new Hi,na=new G,Gu=new G,oi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):m_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);let e=na.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(na,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add(Gu)),this.expandByPoint(na.copy(t.center).sub(Gu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},g_=0,ri=new Se,Wu=new Nn,$r=new G,Yn=new Hi,ia=new Hi,an=new G,qe=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e_(t)?va:_a)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,i){return ri.makeTranslation(t,e,i),this.applyMatrix4(ri),this}scale(t,e,i){return ri.makeScale(t,e,i),this.applyMatrix4(ri),this}lookAt(t){return Wu.lookAt(t),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Yn.min,ia.min),Yn.expandByPoint(an),an.addVectors(Yn.max,ia.max),Yn.expandByPoint(an)):(Yn.expandByPoint(ia.min),Yn.expandByPoint(ia.max))}Yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(t,c),an.add($r)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new G,l[_]=new G;let c=new G,h=new G,d=new G,u=new oe,f=new oe,p=new oe,x=new G,g=new G;function m(_,T,I){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[_].add(x),a[T].add(x),a[I].add(x),l[_].add(g),l[T].add(g),l[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,T=w.length;_<T;++_){let I=w[_],P=I.start,U=I.count;for(let B=P,D=P+U;B<D;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let R=new G,v=new G,S=new G,M=new G;function C(_){S.fromBufferAttribute(s,_),M.copy(S);let T=a[_];R.copy(T),R.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(M,T);let P=v.dot(l[_])<0?-1:1;o.setXYZW(_,R.x,R.y,R.z,P)}for(let _=0,T=w.length;_<T;++_){let I=w[_],P=I.start,U=I.count;for(let B=P,D=P+U;B<D;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new ye(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_c=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Td,this.updateRanges=[],this.version=0,this.uuid=Ps()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ps()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ps()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Pn=new G,Ma=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ui(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xu=new G,x_=new G,y_=new jt,vi=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Xu.subVectors(i,e).cross(x_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Xu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||y_.getNormalMatrix(t),s=this.coplanarPoint(Xu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},__=0,Vi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=uo,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new vi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ls=class extends Vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yr,sa=new G,Zr=new G,Kr=new G,Jr=new oe,ra=new oe,qm=new Se,Dl=new G,oa=new G,Ul=new G,Xp=new oe,qu=new oe,qp=new oe,hr=class extends Nn{constructor(t=new Ls){if(super(),this.isSprite=!0,this.type="Sprite",Yr===void 0){Yr=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _c(e,5);Yr.setIndex([0,1,2,0,2,3]),Yr.setAttribute("position",new Ma(i,3,0,!1)),Yr.setAttribute("uv",new Ma(i,2,3,!1))}this.geometry=Yr,this.material=t,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),qm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Kr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ol(Dl.set(-.5,-.5,0),Kr,o,Zr,s,r),Ol(oa.set(.5,-.5,0),Kr,o,Zr,s,r),Ol(Ul.set(.5,.5,0),Kr,o,Zr,s,r),Xp.set(0,0),qu.set(1,0),qp.set(1,1);let a=t.ray.intersectTriangle(Dl,oa,Ul,!1,sa);if(a===null&&(Ol(oa.set(-.5,.5,0),Kr,o,Zr,s,r),qu.set(0,1),a=t.ray.intersectTriangle(Dl,Ul,oa,!1,sa),a===null))return;let l=t.ray.origin.distanceTo(sa);l<t.near||l>t.far||e.push({distance:l,point:sa.clone(),uv:Oi.getInterpolation(sa,Dl,oa,Ul,Xp,qu,qp,new oe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ol(n,t,e,i,s,r){Jr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ra.x=r*Jr.x-s*Jr.y,ra.y=s*Jr.x+r*Jr.y):ra.copy(Jr),n.copy(t),n.x+=ra.x,n.y+=ra.y,n.applyMatrix4(qm)}var cs=new G,$u=new G,Fl=new G,Bl=new G,lo=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cs.copy(this.origin).addScaledVector(this.direction,e),cs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){$u.copy(t).add(e).multiplyScalar(.5),Fl.copy(e).sub(t).normalize(),Bl.copy(this.origin).sub($u);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fl),a=Bl.dot(this.direction),l=-Bl.dot(Fl),c=Bl.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($u).addScaledVector(Fl,u),f}intersectSphere(t,e){if(t.radius<0)return null;cs.subVectors(t.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,cs)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=i.x-o.x,w=i.y-o.y,R=i.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(h),C,_,T,I,P,U,B,D,F,q,J,j;if(v>=S&&v>=M?(T=l,U=d,F=p,j=m,l>=0?(C=c,_=h,I=u,P=f,B=x,D=g,q=w,J=R):(C=h,_=c,I=f,P=u,B=g,D=x,q=R,J=w)):S>=M?(T=c,U=u,F=x,j=w,c>=0?(C=h,_=l,I=f,P=d,B=g,D=p,q=R,J=m):(C=l,_=h,I=d,P=f,B=p,D=g,q=m,J=R)):(T=h,U=f,F=g,j=R,h>=0?(C=l,_=c,I=d,P=u,B=p,D=x,q=m,J=w):(C=c,_=l,I=u,P=d,B=x,D=p,q=w,J=m)),T===0)return null;let k=C/T,W=_/T,Q=1/T,Mt=I-k*U,yt=P-W*U,ot=B-k*F,dt=D-W*F,bt=q-k*j,V=J-W*j,Z=bt*dt-V*ot,pt=Mt*V-yt*bt,Ut=ot*yt-dt*Mt;if(s){if(Z<0||pt<0||Ut<0)return null}else if((Z<0||pt<0||Ut<0)&&(Z>0||pt>0||Ut>0))return null;let _t=Z+pt+Ut;if(_t===0)return null;let zt=Q*(Z*U+pt*F+Ut*j);return(_t>0?zt<0:zt>0)?null:this.at(zt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$p=new Se,or=new lo,kl=new oi,Yp=new G,zl=new G,Hl=new G,Vl=new G,Yu=new G,Gl=new G,Zp=new G,Wl=new G,we=class extends Nn{constructor(t=new qe,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Gl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Yu.fromBufferAttribute(d,t),o?Gl.addScaledVector(Yu,h):Gl.addScaledVector(Yu.sub(e),h))}e.add(Gl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(r),or.copy(t.ray).recast(t.near),!(kl.containsPoint(or.origin)===!1&&(or.intersectSphere(kl,Yp)===null||or.origin.distanceToSquared(Yp)>(t.far-t.near)**2))&&($p.copy(r).invert(),or.copy(t.ray).applyMatrix4($p),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,or)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),R=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,S=R;v<S;v+=3){let M=a.getX(v),C=a.getX(v+1),_=a.getX(v+2);s=Xl(this,m,t,i,c,h,d,M,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let w=a.getX(g),R=a.getX(g+1),v=a.getX(g+2);s=Xl(this,o,t,i,c,h,d,w,R,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,S=R;v<S;v+=3){let M=v,C=v+1,_=v+2;s=Xl(this,m,t,i,c,h,d,M,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let w=g,R=g+1,v=g+2;s=Xl(this,o,t,i,c,h,d,w,R,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function v_(n,t,e,i,s,r,o,a){let l;if(t.side===Un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fs,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wl);return c<e.near||c>e.far?null:{distance:c,point:Wl.clone(),object:n}}function Xl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,zl),n.getVertexPosition(l,Hl),n.getVertexPosition(c,Vl);let h=v_(n,t,e,i,zl,Hl,Vl,Zp);if(h){let d=new G;Oi.getBarycoord(Zp,zl,Hl,Vl,d),s&&(h.uv=Oi.getInterpolatedAttribute(s,a,l,c,d,new oe)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,a,l,c,d,new oe)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};Oi.getNormal(zl,Hl,Vl,u.normal),h.face=u,h.barycoord=d}return h}var ba=class extends Ln{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ke,h=Ke,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sa=class extends ye{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},jr=new Se,Kp=new Se,ql=[],Jp=new Hi,M_=new Se,aa=new we,la=new oi,wa=class extends we{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,M_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,jr),Jp.copy(t.boundingBox).applyMatrix4(jr),this.boundingBox.union(Jp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,jr),la.copy(t.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(la)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),t.ray.intersectsSphere(la)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,jr),Kp.multiplyMatrices(i,jr),aa.matrixWorld=Kp,aa.raycast(t,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,e.push(l)}ql.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(s*this.count),s,this.count,qc,li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new oi,b_=new oe(.5,.5),$l=new G,Ea=class{constructor(t=new vi,e=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],w=r[12],R=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,m-p,S-w).normalize(),s[1].setComponents(c+o,f+h,m+p,S+w).normalize(),s[2].setComponents(c+a,f+d,m+x,S+R).normalize(),s[3].setComponents(c-a,f-d,m-x,S-R).normalize(),i)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,f-u,m-g,S-v).normalize();else if(s[4].setComponents(c-l,f-u,m-g,S-v).normalize(),e===Mi)s[5].setComponents(c+l,f+u,m+g,S+v).normalize();else if(e===da)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);let e=b_.distanceTo(t.center);return ar.radius=.7071067811865476+e,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if($l.x=s.normal.x>0?t.max.x:t.min.x,$l.y=s.normal.y>0?t.max.y:t.min.y,$l.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($l)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var co=class extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},vc=new G,Mc=new G,jp=new Se,ca=new lo,Yl=new oi,Zu=new G,Qp=new G,bc=class extends Nn{constructor(t=new qe,e=new co){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)vc.fromBufferAttribute(e,s-1),Mc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=vc.distanceTo(Mc);t.setAttribute("lineDistance",new ln(i,1))}else $t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),Yl.radius+=r,t.ray.intersectsSphere(Yl)===!1)return;jp.copy(s).invert(),ca.copy(t.ray).applyMatrix4(jp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),w=h.getX(x+1),R=Zl(this,t,ca,l,m,w,x);R&&e.push(R)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Zl(this,t,ca,l,x,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=Zl(this,t,ca,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Zl(this,t,ca,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zl(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(vc.fromBufferAttribute(a,s),Mc.fromBufferAttribute(a,r),e.distanceSqToSegment(vc,Mc,Zu,Qp)>i)return;Zu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Zu);if(!(c<t.near||c>t.far))return{distance:c,point:Qp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var tm=new G,em=new G,Ta=class extends bc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)tm.fromBufferAttribute(e,s),em.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tm.distanceTo(em);t.setAttribute("lineDistance",new ln(i,1))}else $t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sc=class extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nm=new Se,nd=new lo,Kl=new oi,Jl=new G,Aa=class extends Nn{constructor(t=new qe,e=new Sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=r,t.ray.intersectsSphere(Kl)===!1)return;nm.copy(s).invert(),nd.copy(t.ray).applyMatrix4(nm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);Jl.fromBufferAttribute(d,g),im(Jl,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Jl.fromBufferAttribute(d,p),im(Jl,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function im(n,t,e,i,s,r,o){let a=nd.distanceSqToPoint(n);if(a<e){let l=new G;nd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ca=class extends Ln{constructor(t=[],e=Bs,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gi=class extends Ln{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ns=class extends Ln{constructor(t,e,i=Si,s,r,o,a=Ke,l=Ke,c,h=Bi,d=1){if(h!==Bi&&h!==zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},wc=class extends Ns{constructor(t,e=Si,i=Bs,s,r,o=Ke,a=Ke,l,c=Bi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ra=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Dn=class n extends qe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(d,2));function p(x,g,m,w,R,v,S,M,C,_,T){let I=v/C,P=S/_,U=v/2,B=S/2,D=M/2,F=C+1,q=_+1,J=0,j=0,k=new G;for(let W=0;W<q;W++){let Q=W*P-B;for(let Mt=0;Mt<F;Mt++){let yt=Mt*I-U;k[x]=yt*w,k[g]=Q*R,k[m]=D,c.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[m]=M>0?1:-1,h.push(k.x,k.y,k.z),d.push(Mt/C),d.push(1-W/_),J+=1}}for(let W=0;W<_;W++)for(let Q=0;Q<C;Q++){let Mt=u+Q+F*W,yt=u+Q+F*(W+1),ot=u+(Q+1)+F*(W+1),dt=u+(Q+1)+F*W;l.push(Mt,yt,dt),l.push(yt,ot,dt),j+=6}a.addGroup(f,j,T),f+=j,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var jl=new G,Ql=new G,Ku=new G,tc=new Oi,Ia=class extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(rc*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=tc;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),tc.getNormal(Ku),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){let R=(w+1)%3,v=d[w],S=d[R],M=tc[h[w]],C=tc[h[R]],_=`${v}_${S}`,T=`${S}_${v}`;T in u&&u[T]?(Ku.dot(u[T].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(C.x,C.y,C.z)),u[T]=null):_ in u||(u[_]={index0:c[w],index1:c[R],normal:Ku.clone()})}}for(let p in u)if(u[p]){let{index0:x,index1:g}=u[p];jl.fromBufferAttribute(a,x),Ql.fromBufferAttribute(a,g),f.push(jl.x,jl.y,jl.z),f.push(Ql.x,Ql.y,Ql.z)}this.setAttribute("position",new ln(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Pa=class n extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let w=m*u-o;for(let R=0;R<c;R++){let v=R*d-r;p.push(v,-w,0),x.push(0,0,1),g.push(R/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let R=w+c*m,v=w+c*(m+1),S=w+1+c*(m+1),M=w+1+c*m;f.push(R,v,M),f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var La=class n extends qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new G,u=new G,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let w=[],R=m/i,v=o+R*a,S=t*Math.cos(v),M=Math.sqrt(t*t-S*S),C=0;m===0&&o===0?C=.5/e:m===i&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let T=_/e,I=s+T*r;d.x=-M*Math.cos(I),d.y=S,d.z=M*Math.sin(I),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+C,1-R),w.push(c++)}h.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){let R=h[m][w+1],v=h[m][w],S=h[m+1][w],M=h[m+1][w+1];(m!==0||o>0)&&f.push(R,v,M),(m!==i-1||l<Math.PI)&&f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function pr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(sm(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(sm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Sn(n){let t={};for(let e=0;e<n.length;e++){let i=pr(n[e]);for(let s in i)t[s]=i[s]}return t}function sm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function S_(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var $m={clone:pr,merge:Sn},w_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=S_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ec=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Tc=class extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ac=class extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ju(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ds=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cc=class extends Ds{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qu,endingEnd:Qu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case td:r=t,a=2*e-i;break;case ed:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case td:o=t,l=2*i-e;break;case ed:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,w=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,R=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+w*o[c+S]+R*o[l+S]+v*o[d+S];return r}},Rc=class extends Ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ic=class extends Ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pc=class extends Ds{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(s-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*u+p*2,w=d[m],R=d[m+1],v=t*u+p*2,S=h[v],M=h[v+1],C=A_(i,e,w,S,s);r[p]=Ym(C,x,R,M,g)}return r}};function Ym(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function T_(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function A_(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ym(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=T_(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ju(t.settings)&&(i.settings={inTangents:Qr(t.settings.inTangents,Array),outTangents:Qr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ha:e=this.InterpolantFactoryMethodDiscrete;break;case pc:e=this.InterpolantFactoryMethodLinear;break;case ic:e=this.InterpolantFactoryMethodSmooth;break;case ju:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $t("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return ic;case this.InterpolantFactoryMethodBezier:return ju}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ju(this.settings)&&(rm(this.settings.inTangents,t),rm(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&n_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ic,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ju(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rm(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=pc;var Us=class extends Kn{constructor(t,e,i){super(t,e,i)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=ha;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}};Lc.prototype.ValueTypeName="color";var Nc=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}};Nc.prototype.ValueTypeName="number";var Dc=class extends Ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Na=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends Kn{constructor(t,e,i){super(t,e,i)}};Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=ha;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}};Uc.prototype.ValueTypeName="vector";var Oc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zm=new Oc,Fc=class{constructor(t){this.manager=t!==void 0?t:Zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ec=new G,nc=new Hn,Di=new G,Da=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ec,nc,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,nc,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ec,nc,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,nc,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Is=new G,om=new oe,am=new oe,Mn=class extends Da{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Is.x,Is.y).multiplyScalar(-t/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Is.x,Is.y).multiplyScalar(-t/Is.z)}getViewSize(t,e){return this.getViewBounds(t,om,am),e.subVectors(am,om)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ua=class extends Da{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var to=-90,eo=1,Bc=class extends Nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(to,eo,t,e);s.layers=this.layers,this.add(s);let r=new Mn(to,eo,t,e);r.layers=this.layers,this.add(r);let o=new Mn(to,eo,t,e);o.layers=this.layers,this.add(o);let a=new Mn(to,eo,t,e);a.layers=this.layers,this.add(a);let l=new Mn(to,eo,t,e);l.layers=this.layers,this.add(l);let c=new Mn(to,eo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},kc=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Id="\\[\\]\\.:\\/",C_=new RegExp("["+Id+"]","g"),Pd="[^"+Id+"]",R_="[^"+Id.replace("\\.","")+"]",I_=/((?:WC+[\/:])*)/.source.replace("WC",Pd),P_=/(WCOD+)?/.source.replace("WCOD",R_),L_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),N_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),D_=new RegExp("^"+I_+P_+L_+N_+"$"),U_=["material","materials","bones","map"],id=class{constructor(t,e,i){let s=i||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Fe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(C_,"")}static parseTrackName(t){let e=D_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);U_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=id;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uT=new Float32Array(1);var sd=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Ld(n,t,e,i){let s=O_(i);switch(e){case Sd:return n*t;case qc:return n*t/s.components*s.byteLength;case $c:return n*t/s.components*s.byteLength;case Hs:return n*t*2/s.components*s.byteLength;case Yc:return n*t*2/s.components*s.byteLength;case wd:return n*t*3/s.components*s.byteLength;case ci:return n*t*4/s.components*s.byteLength;case Zc:return n*t*4/s.components*s.byteLength;case ka:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jc:case Qc:return Math.max(n,16)*Math.max(t,8)/4;case Kc:case jc:return Math.max(n,8)*Math.max(t,8)/2;case th:case eh:case ih:case sh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nh:case Ga:case rh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case hh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vh:case Mh:case bh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sh:case wh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wa:case Eh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O_(n){switch(n){case Jn:case _d:return{byteLength:1,components:1};case fo:case vd:case wi:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Si:case Gc:case li:return{byteLength:4,components:1};case Md:case bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function x0(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function B_(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
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
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X_=`#ifdef USE_AOMAP
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
#endif`,q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
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
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
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
} // validated`,j_=`#ifdef USE_IRIDESCENCE
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
#endif`,Q_=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lv=`#define PI 3.141592653589793
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
} // validated`,cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hv=`vec3 transformedNormal = objectNormal;
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
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
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
#endif`,Fv=`uniform sampler2D dfgLUT;
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
}`,Bv=`
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zv=`#if defined( USE_POINTS_UV )
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
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
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
#endif`,n1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l1=`#ifdef USE_NORMALMAP
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
#endif`,c1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w1=`float getShadowMask() {
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
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
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
}`,q1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,Y1=`#define DISTANCE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,tM=`uniform vec3 diffuse;
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
}`,eM=`#define LAMBERT
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define MATCAP
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
}`,sM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,oM=`#define NORMAL
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
}`,aM=`#define PHONG
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
}`,lM=`#define PHONG
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
}`,cM=`#define STANDARD
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
}`,hM=`#define STANDARD
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
}`,uM=`#define TOON
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
}`,dM=`#define TOON
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
}`,fM=`uniform float size;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 color;
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
}`,xM=`uniform float rotation;
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
}`,yM=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:k_,alphahash_pars_fragment:z_,alphamap_fragment:H_,alphamap_pars_fragment:V_,alphatest_fragment:G_,alphatest_pars_fragment:W_,aomap_fragment:X_,aomap_pars_fragment:q_,batching_pars_vertex:$_,batching_vertex:Y_,begin_vertex:Z_,beginnormal_vertex:K_,bsdfs:J_,iridescence_fragment:j_,bumpmap_pars_fragment:Q_,clipping_planes_fragment:tv,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:sv,color_pars_fragment:rv,color_pars_vertex:ov,color_vertex:av,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:hv,displacementmap_pars_vertex:uv,displacementmap_vertex:dv,emissivemap_fragment:fv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:xv,envmap_common_pars_fragment:yv,envmap_pars_fragment:_v,envmap_pars_vertex:vv,envmap_physical_pars_fragment:Pv,envmap_vertex:Mv,fog_vertex:bv,fog_pars_vertex:Sv,fog_fragment:wv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Av,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Iv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Nv,lights_phong_fragment:Dv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Fv,lights_fragment_begin:Bv,lights_fragment_maps:kv,lights_fragment_end:zv,lightprobes_pars_fragment:Hv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Wv,logdepthbuf_vertex:Xv,map_fragment:qv,map_pars_fragment:$v,map_particle_fragment:Yv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:jv,morphcolor_vertex:Qv,morphnormal_vertex:t1,morphtarget_pars_vertex:e1,morphtarget_vertex:n1,normal_fragment_begin:i1,normal_fragment_maps:s1,normal_pars_fragment:r1,normal_pars_vertex:o1,normal_vertex:a1,normalmap_pars_fragment:l1,clearcoat_normal_fragment_begin:c1,clearcoat_normal_fragment_maps:h1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:d1,opaque_fragment:f1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:g1,dithering_fragment:x1,dithering_pars_fragment:y1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:b1,shadowmap_vertex:S1,shadowmask_pars_fragment:w1,skinbase_vertex:E1,skinning_pars_vertex:T1,skinning_vertex:A1,skinnormal_vertex:C1,specularmap_fragment:R1,specularmap_pars_fragment:I1,tonemapping_fragment:P1,tonemapping_pars_fragment:L1,transmission_fragment:N1,transmission_pars_fragment:D1,uv_pars_fragment:U1,uv_pars_vertex:O1,uv_vertex:F1,worldpos_vertex:B1,background_vert:k1,background_frag:z1,backgroundCube_vert:H1,backgroundCube_frag:V1,cube_vert:G1,cube_frag:W1,depth_vert:X1,depth_frag:q1,distance_vert:$1,distance_frag:Y1,equirect_vert:Z1,equirect_frag:K1,linedashed_vert:J1,linedashed_frag:j1,meshbasic_vert:Q1,meshbasic_frag:tM,meshlambert_vert:eM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:sM,meshnormal_vert:rM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:hM,meshtoon_vert:uM,meshtoon_frag:dM,points_vert:fM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:xM,sprite_frag:yM},Tt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},qi={basic:{uniforms:Sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Sn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Sn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Sn([Tt.points,Tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Sn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Sn([Tt.common,Tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Sn([Tt.sprite,Tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Sn([Tt.common,Tt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Sn([Tt.lights,Tt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};qi.physical={uniforms:Sn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Ch={r:0,b:0,g:0},_M=new Se,y0=new jt;y0.set(-1,0,0,0,1,0,0,0,1);function vM(n,t,e,i,s,r){let o=new Wt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let v=w.backgroundBlurriness>0;R=t.get(R,v)}return R}function p(w){let R=!1,v=f(w);v===null?g(o,a):v&&v.isColor&&(g(v,1),R=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(w,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===Fa)?(c===void 0&&(c=new we(new Dn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:pr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_M.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(y0),c.material.toneMapped=ce.getTransfer(v.colorSpace)!==be,(h!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new we(new Pa(2,2),new bn({name:"BackgroundMaterial",uniforms:pr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,R){w.getRGB(Ch,Rd(n)),e.buffers.color.setClear(Ch.r,Ch.g,Ch.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,R=1){o.set(w),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:p,addToRenderList:x,dispose:m}}function MM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(P,U,B,D,F){let q=!1,J=d(P,D,B,U);r!==J&&(r=J,c(r.object)),q=f(P,D,B,F),q&&p(P,D,B,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(P,U,B,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,U,B,D){let F=D.wireframe===!0,q=i[U.id];q===void 0&&(q={},i[U.id]=q);let J=P.isInstancedMesh===!0?P.id:0,j=q[J];j===void 0&&(j={},q[J]=j);let k=j[B.id];k===void 0&&(k={},j[B.id]=k);let W=k[F];return W===void 0&&(W=u(l()),k[F]=W),W}function u(P){let U=[],B=[],D=[];for(let F=0;F<e;F++)U[F]=0,B[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,U,B,D){let F=r.attributes,q=U.attributes,J=0,j=B.getAttributes();for(let k in j)if(j[k].location>=0){let Q=F[k],Mt=q[k];if(Mt===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Mt=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Mt=P.instanceColor)),Q===void 0||Q.attribute!==Mt||Mt&&Q.data!==Mt.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function p(P,U,B,D){let F={},q=U.attributes,J=0,j=B.getAttributes();for(let k in j)if(j[k].location>=0){let Q=q[k];Q===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let Mt={};Mt.attribute=Q,Q&&Q.data&&(Mt.data=Q.data),F[k]=Mt,J++}r.attributes=F,r.attributesNum=J,r.index=D}function x(){let P=r.newAttributes;for(let U=0,B=P.length;U<B;U++)P[U]=0}function g(P){m(P,0)}function m(P,U){let B=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;B[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),F[P]!==U&&(n.vertexAttribDivisor(P,U),F[P]=U)}function w(){let P=r.newAttributes,U=r.enabledAttributes;for(let B=0,D=U.length;B<D;B++)U[B]!==P[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function R(P,U,B,D,F,q,J){J===!0?n.vertexAttribIPointer(P,U,B,F,q):n.vertexAttribPointer(P,U,B,D,F,q)}function v(P,U,B,D){x();let F=D.attributes,q=B.getAttributes(),J=U.defaultAttributeValues;for(let j in q){let k=q[j];if(k.location>=0){let W=F[j];if(W===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let Q=W.normalized,Mt=W.itemSize,yt=t.get(W);if(yt===void 0)continue;let ot=yt.buffer,dt=yt.type,bt=yt.bytesPerElement,V=dt===n.INT||dt===n.UNSIGNED_INT||W.gpuType===Gc;if(W.isInterleavedBufferAttribute){let Z=W.data,pt=Z.stride,Ut=W.offset;if(Z.isInstancedInterleavedBuffer){for(let _t=0;_t<k.locationSize;_t++)m(k.location+_t,Z.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _t=0;_t<k.locationSize;_t++)g(k.location+_t);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let _t=0;_t<k.locationSize;_t++)R(k.location+_t,Mt/k.locationSize,dt,Q,pt*bt,(Ut+Mt/k.locationSize*_t)*bt,V)}else{if(W.isInstancedBufferAttribute){for(let Z=0;Z<k.locationSize;Z++)m(k.location+Z,W.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Z=0;Z<k.locationSize;Z++)g(k.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Z=0;Z<k.locationSize;Z++)R(k.location+Z,Mt/k.locationSize,dt,Q,Mt*bt,Mt/k.locationSize*Z*bt,V)}}else if(J!==void 0){let Q=J[j];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(k.location,Q);break;case 3:n.vertexAttrib3fv(k.location,Q);break;case 4:n.vertexAttrib4fv(k.location,Q);break;default:n.vertexAttrib1fv(k.location,Q)}}}}w()}function S(){T();for(let P in i){let U=i[P];for(let B in U){let D=U[B];for(let F in D){let q=D[F];for(let J in q)h(q[J].object),delete q[J];delete D[F]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;let U=i[P.id];for(let B in U){let D=U[B];for(let F in D){let q=D[F];for(let J in q)h(q[J].object),delete q[J];delete D[F]}}delete i[P.id]}function C(P){for(let U in i){let B=i[U];for(let D in B){let F=B[D];if(F[P.id]===void 0)continue;let q=F[P.id];for(let J in q)h(q[J].object),delete q[J];delete F[P.id]}}}function _(P){for(let U in i){let B=i[U],D=P.isInstancedMesh===!0?P.id:0,F=B[D];if(F!==void 0){for(let q in F){let J=F[q];for(let j in J)h(J[j].object),delete J[j];delete F[q]}delete B[D],Object.keys(B).length===0&&delete i[U]}}}function T(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function bM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function SM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ci&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let _=C===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Jn&&C!==li&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:v,maxSamples:S,samples:M}}function wM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new vi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let w=r?0:i,R=w*4,v=m.clippingState||null;l.value=v,v=h(p,u,R,f);for(let S=0;S!==R;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,v=f;R!==x;++R,v+=4)o.copy(d[R]).applyMatrix4(w,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var go=4,EM=6,TM=20,AM=256,Xa=new Ua,Km=new Wt,Nd=null,Dd=0,Ud=0,Od=!1,CM=new G,mr=new G,Ih=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=CM}=r;Nd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nd,Dd,Ud),this._renderer.xr.enabled=Od,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:wi,format:ci,colorSpace:cr,depthBuffer:!1},s=Jm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RM(r)),this._blurMaterial=PM(r,t,e),this._ggxMaterial=IM(r,t,e)}return s}_compileMaterial(t){let e=new we(new qe,t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,i,s,r){let l=new Mn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Km),d.toneMapping=bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new Dn,new tn({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,m=!0):(g.color.copy(Km),m=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):v===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;mo(s,v*S,R>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Bs||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;mo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Xa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-go?i-p+go:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,mo(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,mo(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(a,Xa)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-go?s-this._lodMax+go:0),u=4*(this._cubeSize-h);mo(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Xa)}};function RM(n){let t=[],e=[],i=n,s=n-go+1+EM;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let w=m%3*2/3-1,R=m>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];p.set(v,f*u*m);for(let S=0;S<u;S++){let M=h[S*2]*2-1,C=h[S*2+1]*2-1;m===0?mr.set(1,C,M):m===1?mr.set(-M,1,-C):m===2?mr.set(-M,C,1):m===3?mr.set(-1,C,-M):m===4?mr.set(-M,-1,C):mr.set(M,C,-1),mr.toArray(x,(m*u+S)*f)}}let g=new qe;g.setAttribute("position",new ye(p,f)),g.setAttribute("outputDirection",new ye(x,f)),e.push(new we(g,null)),i>go&&i--}return{lodMeshes:e,sizeLods:t}}function Jm(n,t,e){let i=new Vn(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function IM(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function PM(n,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:TM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function jm(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Qm(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Nh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ph=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ca(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dn(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:Wi});r.uniforms.tEquirect.value=e;let o=new we(s,r),a=e.minFilter;return e.minFilter===ks&&(e.minFilter=pn),new Bc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function LM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===zc||f===Hc)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ph(p.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===zc||f===Hc,x=f===Bs||f===fr;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Ih(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let w=u.image;return p&&w&&w.height>0||x&&w&&l(w)?(i===null&&(i=new Ih(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===zc?u.mapping=Bs:f===Hc&&(u.mapping=fr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function NM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&lr("WebGLRenderer: "+i+" extension not supported."),s}}}function DM(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let w=f.array;x=f.version;for(let R=0,v=w.length;R<v;R+=3){let S=w[R+0],M=w[R+1],C=w[R+2];u.push(S,M,M,C,C,S)}}else{let w=p.array;x=p.version;for(let R=0,v=w.length/3-1;R<v;R+=3){let S=R+0,M=R+1,C=R+2;u.push(S,M,M,C,C,S)}}let g=new(p.count>=65535?va:_a)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function UM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function OM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function FM(n,t,e){let i=new WeakMap,s=new Ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],R=0;f===!0&&(R=1),p===!0&&(R=2),x===!0&&(R=3);let v=a.attributes.position.count*R,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*d),C=new ma(M,v,S,d);C.type=li,C.needsUpdate=!0;let _=R*4;for(let I=0;I<d;I++){let P=g[I],U=m[I],B=w[I],D=v*S*4*I;for(let F=0;F<P.count;F++){let q=F*_;f===!0&&(s.fromBufferAttribute(P,F),M[D+q+0]=s.x,M[D+q+1]=s.y,M[D+q+2]=s.z,M[D+q+3]=0),p===!0&&(s.fromBufferAttribute(U,F),M[D+q+4]=s.x,M[D+q+5]=s.y,M[D+q+6]=s.z,M[D+q+7]=0),x===!0&&(s.fromBufferAttribute(B,F),M[D+q+8]=s.x,M[D+q+9]=s.y,M[D+q+10]=s.z,M[D+q+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new oe(v,S)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function BM(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var kM={[ud]:"LINEAR_TONE_MAPPING",[dd]:"REINHARD_TONE_MAPPING",[fd]:"CINEON_TONE_MAPPING",[pd]:"ACES_FILMIC_TONE_MAPPING",[gd]:"AGX_TONE_MAPPING",[xd]:"NEUTRAL_TONE_MAPPING",[md]:"CUSTOM_TONE_MAPPING"};function zM(n,t,e,i,s,r){let o=new Vn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new qe;c.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ln([0,2,0,0,2,0],2));let h=new Ec({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new we(c,h),u=new Ua(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,w=[],R=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<w.length;M++){let C=w[M];C.setSize&&C.setSize(v,S)}},this.setEffects=function(v){w=v,R=w.length>0&&w[0].isRenderPass===!0;let S=o.width,M=o.height;w.length>0&&a===null&&(a=new Vn(S,M,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new Vn(S,M,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let _=w[C];_.setSize&&_.setSize(S,M)}},this.begin=function(v,S){if(x||v.toneMapping===bi&&w.length===0)return!1;if(m=S,S!==null){let M=S.width,C=S.height;(o.width!==M||o.height!==C)&&this.setSize(M,C)}return R===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=bi,!0},this.hasRenderPass=function(){return R},this.end=function(v,S){v.toneMapping=g,x=!0;let M=o,C=a;for(let _=0;_<w.length;_++){let T=w[_];T.enabled!==!1&&(T.render(v,C,M,S),T.needsSwap!==!1&&(M=C,C=C===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},ce.getTransfer(f)===be&&(h.defines.SRGB_TRANSFER="");let _=kM[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(m),v.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var _0=new Ln,kd=new Ns(1,1),v0=new ma,M0=new yc,b0=new Ca,t0=[],e0=[],n0=new Float32Array(16),i0=new Float32Array(9),s0=new Float32Array(4);function yo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=t0[s];if(r===void 0&&(r=new Float32Array(s),t0[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dh(n,t){let e=e0[t];e===void 0&&(e=new Int32Array(t),e0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function HM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function VM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function GM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function WM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function XM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;s0.set(i),n.uniformMatrix2fv(this.addr,!1,s0),sn(e,i)}}function qM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;i0.set(i),n.uniformMatrix3fv(this.addr,!1,i0),sn(e,i)}}function $M(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;n0.set(i),n.uniformMatrix4fv(this.addr,!1,n0),sn(e,i)}}function YM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ZM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function KM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function JM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function jM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function QM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function tb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function eb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function nb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kd.compareFunction=e.isReversedDepthBuffer()?Ah:Th,r=kd):r=_0,e.setTexture2D(t||r,s)}function ib(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||M0,s)}function sb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||b0,s)}function rb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||v0,s)}function ob(n){switch(n){case 5126:return HM;case 35664:return VM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return $M;case 5124:case 35670:return YM;case 35667:case 35671:return ZM;case 35668:case 35672:return KM;case 35669:case 35673:return JM;case 5125:return jM;case 36294:return QM;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}function ab(n,t){n.uniform1fv(this.addr,t)}function lb(n,t){let e=yo(t,this.size,2);n.uniform2fv(this.addr,e)}function cb(n,t){let e=yo(t,this.size,3);n.uniform3fv(this.addr,e)}function hb(n,t){let e=yo(t,this.size,4);n.uniform4fv(this.addr,e)}function ub(n,t){let e=yo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function db(n,t){let e=yo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function fb(n,t){let e=yo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function pb(n,t){n.uniform1iv(this.addr,t)}function mb(n,t){n.uniform2iv(this.addr,t)}function gb(n,t){n.uniform3iv(this.addr,t)}function xb(n,t){n.uniform4iv(this.addr,t)}function yb(n,t){n.uniform1uiv(this.addr,t)}function _b(n,t){n.uniform2uiv(this.addr,t)}function vb(n,t){n.uniform3uiv(this.addr,t)}function Mb(n,t){n.uniform4uiv(this.addr,t)}function bb(n,t,e){let i=this.cache,s=t.length,r=Dh(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=kd:o=_0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Sb(n,t,e){let i=this.cache,s=t.length,r=Dh(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||M0,r[o])}function wb(n,t,e){let i=this.cache,s=t.length,r=Dh(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||b0,r[o])}function Eb(n,t,e){let i=this.cache,s=t.length,r=Dh(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||v0,r[o])}function Tb(n){switch(n){case 5126:return ab;case 35664:return lb;case 35665:return cb;case 35666:return hb;case 35674:return ub;case 35675:return db;case 35676:return fb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return xb;case 5125:return yb;case 36294:return _b;case 36295:return vb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Eb}}var zd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ob(e.type)}},Hd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tb(e.type)}},Vd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Fd=/(\w+)(\])?(\[|\.)?/g;function r0(n,t){n.seq.push(t),n.map[t.id]=t}function Ab(n,t,e){let i=n.name,s=i.length;for(Fd.lastIndex=0;;){let r=Fd.exec(i),o=Fd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){r0(e,c===void 0?new zd(a,n,t):new Hd(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Vd(a),r0(e,d)),e=d}}}var xo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ab(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function o0(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Cb=37297,Rb=0;function Ib(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var a0=new jt;function Pb(n){ce._getMatrix(a0,ce.workingColorSpace,n);let t=`mat3( ${a0.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case ua:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function l0(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ib(n.getShaderSource(t),a)}else return r}function Lb(n,t){let e=Pb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Nb={[ud]:"Linear",[dd]:"Reinhard",[fd]:"Cineon",[pd]:"ACESFilmic",[gd]:"AgX",[xd]:"Neutral",[md]:"Custom"};function Db(n,t){let e=Nb[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rh=new G;function Ub(){ce.getLuminanceCoefficients(Rh);let n=Rh.x.toFixed(4),t=Rh.y.toFixed(4),e=Rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function Fb(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bb(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function $a(n){return n!==""}function c0(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(n){return n.replace(kb,Hb)}var zb=new Map;function Hb(n,t){let e=se[t];if(e===void 0){let i=zb.get(t);if(i!==void 0)e=se[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Gd(e)}var Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(n){return n.replace(Vb,Gb)}function Gb(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function d0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Wb={[Oa]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function Xb(n){return Wb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qb={[Bs]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function $b(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":qb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yb={[fr]:"ENVMAP_MODE_REFRACTION"};function Zb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kb={[hd]:"ENVMAP_BLENDING_MULTIPLY",[Rm]:"ENVMAP_BLENDING_MIX",[Im]:"ENVMAP_BLENDING_ADD"};function Jb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Kb[n.combine]||"ENVMAP_BLENDING_NONE"}function jb(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Qb(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Xb(e),c=$b(e),h=Zb(e),d=Jb(e),u=jb(e),f=Ob(e),p=Fb(r),x=s.createProgram(),g,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter($a).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter($a).join(`
`),m.length>0&&(m+=`
`)):(g=[d0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),m=[d0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?se.tonemapping_pars_fragment:"",e.toneMapping!==bi?Db("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Lb("linearToOutputTexel",e.outputColorSpace),Ub(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($a).join(`
`)),o=Gd(o),o=c0(o,e),o=h0(o,e),a=Gd(a),a=c0(a,e),a=h0(a,e),o=u0(o),a=u0(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=w+g+o,v=w+m+a,S=o0(s,s.VERTEX_SHADER,R),M=o0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(M)||"",F=U.trim(),q=B.trim(),J=D.trim(),j=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,M);else{let W=l0(s,S,"vertex"),Q=l0(s,M,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+W+`
`+Q)}else F!==""?$t("WebGLProgram: Program Info Log:",F):(q===""||J==="")&&(k=!1);k&&(P.diagnostics={runnable:j,programLog:F,vertexShader:{log:q,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(S),s.deleteShader(M),_=new xo(s,x),T=Bb(s,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,Cb)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var tS=0,Wd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xd(t),e.set(t,i)),i}},Xd=class{constructor(t){this.id=tS++,this.code=t,this.usedTimes=0}};function eS(n){return n===Hs||n===Ga||n===Wa}function nS(n,t,e,i,s,r){let o=new ga,a=new Wd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,I,P,U,B){let D=P.fog,F=U.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||q,J),k=j&&j.mapping===Fa?j.image.height:null,W=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&$t("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Mt=Q!==void 0?Q.length:0,yt=0;F.morphAttributes.position!==void 0&&(yt=1),F.morphAttributes.normal!==void 0&&(yt=2),F.morphAttributes.color!==void 0&&(yt=3);let ot,dt,bt,V;if(W){let Le=qi[W];ot=Le.vertexShader,dt=Le.fragmentShader}else{ot=_.vertexShader,dt=_.fragmentShader;let Le=a.getVertexShaderStage(_),ve=a.getFragmentShaderStage(_);a.update(_,Le,ve),bt=Le.id,V=ve.id}let Z=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Ut=U.isInstancedMesh===!0,_t=U.isBatchedMesh===!0,zt=!!_.map,fe=!!_.matcap,qt=!!j,Qt=!!_.aoMap,ge=!!_.lightMap,ne=!!_.bumpMap&&_.wireframe===!1,b=!!_.normalMap,et=!!_.displacementMap,nt=!!_.emissiveMap,mt=!!_.metalnessMap,at=!!_.roughnessMap,L=_.anisotropy>0,_e=_.clearcoat>0,de=_.dispersion>0,E=_.retroreflectivity>0,y=_.iridescence>0,N=_.sheen>0,O=_.transmission>0,X=L&&!!_.anisotropyMap,st=_e&&!!_.clearcoatMap,ht=_e&&!!_.clearcoatNormalMap,K=_e&&!!_.clearcoatRoughnessMap,it=y&&!!_.iridescenceMap,vt=y&&!!_.iridescenceThicknessMap,Nt=N&&!!_.sheenColorMap,xt=N&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Dt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,Yt=O&&!!_.transmissionMap,H=O&&!!_.thicknessMap,St=!!_.gradientMap,rt=!!_.alphaMap,wt=_.alphaTest>0,Rt=!!_.alphaHash,ut=!!_.extensions,Gt=bi;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let Bt={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:dt,defines:_.defines,customVertexShaderID:bt,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_t,batchingColor:_t&&U._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&U.instanceColor!==null,instancingMorph:Ut&&U.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:fe,envMap:qt,envMapMode:qt&&j.mapping,envMapCubeUVHeight:k,aoMap:Qt,lightMap:ge,bumpMap:ne,normalMap:b,displacementMap:et,emissiveMap:nt,normalMapObjectSpace:b&&_.normalMapType===Nm,normalMapTangentSpace:b&&_.normalMapType===Ed,packedNormalMap:b&&_.normalMapType===Ed&&eS(_.normalMap.format),metalnessMap:mt,roughnessMap:at,anisotropy:L,anisotropyMap:X,clearcoat:_e,clearcoatMap:st,clearcoatNormalMap:ht,clearcoatRoughnessMap:K,dispersion:de,retroreflection:E,iridescence:y,iridescenceMap:it,iridescenceThicknessMap:vt,sheen:N,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:gt,specularColorMap:Dt,specularIntensityMap:Xt,transmission:O,transmissionMap:Yt,thicknessMap:H,gradientMap:St,opaque:_.transparent===!1&&_.blending===uo&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:wt,alphaHash:Rt,combine:_.combine,mapUv:zt&&p(_.map.channel),aoMapUv:Qt&&p(_.aoMap.channel),lightMapUv:ge&&p(_.lightMap.channel),bumpMapUv:ne&&p(_.bumpMap.channel),normalMapUv:b&&p(_.normalMap.channel),displacementMapUv:et&&p(_.displacementMap.channel),emissiveMapUv:nt&&p(_.emissiveMap.channel),metalnessMapUv:mt&&p(_.metalnessMap.channel),roughnessMapUv:at&&p(_.roughnessMap.channel),anisotropyMapUv:X&&p(_.anisotropyMap.channel),clearcoatMapUv:st&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:xt&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:Dt&&p(_.specularColorMap.channel),specularIntensityMapUv:Xt&&p(_.specularIntensityMap.channel),transmissionMapUv:Yt&&p(_.transmissionMap.channel),thicknessMapUv:H&&p(_.thicknessMap.channel),alphaMapUv:rt&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(b||L),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(zt||rt),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&b===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:nt&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ai,flipSided:_.side===Un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(T,_),w(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function R(_){let T=f[_.type],I;if(T){let P=qi[T];I=$m.clone(P.uniforms)}else I=_.uniforms;return I}function v(_,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Qb(n,T,_,s),c.push(I),h.set(T,I)),I}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:C}}function iS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function sS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function f0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function p0(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let w=n[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},n[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=p,w.materialVariant=o(u),w.groupOrder=x,w.renderOrder=u.renderOrder,w.z=g,w.group=m),t++,w}function l(u,f,p,x,g,m,w){w.reversedDepth===!0&&(g=-g);let R=a(u,f,p,x,g,m);p.transmission>0?i.push(R):p.transparent===!0?s.push(R):e.push(R)}function c(u,f,p,x,g,m){let w=a(u,f,p,x,g,m);p.transmission>0?i.unshift(w):p.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,f){e.length>1&&e.sort(u||sS),i.length>1&&i.sort(f||f0),s.length>1&&s.sort(f||f0)}function d(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function rS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new p0,n.set(i,[o])):s>=r.length?(o=new p0,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function oS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Wt};break;case"SpotLight":e={position:new G,direction:new G,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function aS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var lS=0;function cS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function hS(n){let t=new oS,e=aS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new Se,o=new Se;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,w=0,R=0,v=0,S=0,M=0,C=0,_=0,T=0,I=0;c.sort(cS);for(let U=0,B=c.length;U<B;U++){let D=c[U],F=D.color,q=D.intensity,J=D.distance,j=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hs?j=D.shadow.map.texture:j=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=F.r*q,d+=F.g*q,u+=F.b*q;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],q);I++}else if(D.isSunLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,Q=e.get(D);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[p]=Q,i.sunShadowMap[p]=j;let Mt=W.getViewportCount();for(let yt=0;yt<Mt;yt++)i.sunShadowMatrix[x+yt]=W.getMatrix(yt),i.sunShadowCascade[x+yt]=W._cascadeData[yt];x+=Mt,p++}i.sun[f]=k,f++}else if(D.isDirectionalLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,Q=e.get(D);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=D.shadow.matrix,S++}i.directional[g]=k,g++}else if(D.isSpotLight){let k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(F).multiplyScalar(q),k.distance=J,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[w]=k;let W=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,W.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[w]=W.matrix,D.castShadow){let Q=e.get(D);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,i.spotShadow[w]=Q,i.spotShadowMap[w]=j,C++}w++}else if(D.isRectAreaLight){let k=t.get(D);k.color.copy(F).multiplyScalar(q),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[R]=k,R++}else if(D.isPointLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let W=D.shadow,Q=e.get(D);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=k,m++}else if(D.isHemisphereLight){let k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(q),k.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[v]=k,v++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==w||P.rectAreaLength!==R||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==C||P.numSpotMaps!==_||P.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=g,i.spot.length=w,i.rectArea.length=R,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,P.sunLength=f,P.directionalLength=g,P.pointLength=m,P.spotLength=w,P.rectAreaLength=R,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=C,P.numSpotMaps=_,P.numLightProbes=I,i.version=lS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let v=c[w];if(v.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(v.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function m0(n){let t=new hS(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function uS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new m0(n),t.set(s,[a])):r>=o.length?(a=new m0(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fS=`uniform sampler2D shadow_pass;
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
}`,pS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],mS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],g0=new Se,qa=new G,Bd=new G;function gS(n,t,e){let i=new Ea,s=new oe,r=new oe,o=new Ge,a=new Tc,l=new Ac,c={},h=e.maxTextureSize,d={[Fs]:Un,[Un]:Fs,[ai]:ai},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:dS,fragmentShader:fS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new qe;p.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let m=this.type;this.render=function(M,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===hm&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oa);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Wi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=m!==this.type;B&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(F=>F.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,F=M.length;D<F;D++){let q=M[D],J=q.shadow;if(J===void 0){$t("WebGLShadowMap:",q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();s.multiply(j),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,J.mapSize.y=r.y));let k=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=k,J.map===null||B===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ho){if(q.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Vn(s.x,s.y,{format:Hs,type:wi,minFilter:pn,magFilter:pn,generateMipmaps:!1}),J.map.texture.name=q.name+".shadowMap",J.map.depthTexture=new Ns(s.x,s.y,li),J.map.depthTexture.name=q.name+".shadowMapDepth",J.map.depthTexture.format=Bi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ke,J.map.depthTexture.magFilter=Ke}else q.isPointLight?(J.map=new Ph(s.x),J.map.depthTexture=new wc(s.x,Si)):(J.map=new Vn(s.x,s.y),J.map.depthTexture=new Ns(s.x,s.y,Si)),J.map.depthTexture.name=q.name+".shadowMap",J.map.depthTexture.format=Bi,this.type===Oa?(J.map.depthTexture.compareFunction=k?Ah:Th,J.map.depthTexture.minFilter=pn,J.map.depthTexture.magFilter=pn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ke,J.map.depthTexture.magFilter=Ke);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let W=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();q.isPointLight!==!0&&J.updateMatrices(q,_);for(let Q=0;Q<W;Q++){let Mt=J.getCamera(Q);if(q.isPointLight){let yt=J.camera,ot=J.matrix,dt=q.distance||yt.far;dt!==yt.far&&(yt.far=dt,yt.updateProjectionMatrix()),qa.setFromMatrixPosition(q.matrixWorld),yt.position.copy(qa),Bd.copy(yt.position),Bd.add(pS[Q]),yt.up.copy(mS[Q]),yt.lookAt(Bd),yt.updateMatrixWorld(),ot.makeTranslation(-qa.x,-qa.y,-qa.z),g0.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(g0,yt.coordinateSystem,yt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(J.map),n.clear());let yt=J.getViewport(Q);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),U.viewport(o)}i=J.getFrustum(Q),v(C,_,Mt,q,this.type)}J.isPointLightShadow!==!0&&this.type===ho&&w(J,_),J.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,I,P)};function w(M,C){let _=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Vn(s.x,s.y,{format:Hs,type:wi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,_,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,_,f,x,null)}function R(M,C,_,T){let I=null,P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)I=P;else if(I=_.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=I.uuid,B=C.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let F=D[B];F===void 0&&(F=I.clone(),D[B]=F,C.addEventListener("dispose",S)),I=F}if(I.visible=C.visible,I.wireframe=C.wireframe,T===ho?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let U=n.properties.get(I);U.light=_}return I}function v(M,C,_,T,I){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===ho)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let B=t.update(M),D=M.material;if(Array.isArray(D)){let F=B.groups;for(let q=0,J=F.length;q<J;q++){let j=F[q],k=D[j.materialIndex];if(k&&k.visible){let W=R(M,k,T,I);M.onBeforeShadow(n,M,C,_,B,W,j),n.renderBufferDirect(_,null,B,W,M,j),M.onAfterShadow(n,M,C,_,B,W,j)}}}else if(D.visible){let F=R(M,D,T,I);M.onBeforeShadow(n,M,C,_,B,F,null),n.renderBufferDirect(_,null,B,F,M,null),M.onAfterShadow(n,M,C,_,B,F,null)}}let U=M.children;for(let B=0,D=U.length;B<D;B++)v(U[B],C,_,T,I)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],I=M.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function xS(n,t){function e(){let H=!1,St=new Ge,rt=null,wt=new Ge(0,0,0,0);return{setMask:function(Rt){rt!==Rt&&!H&&(n.colorMask(Rt,Rt,Rt,Rt),rt=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,ut,Gt,Bt,Le){Le===!0&&(Rt*=Bt,ut*=Bt,Gt*=Bt),St.set(Rt,ut,Gt,Bt),wt.equals(St)===!1&&(n.clearColor(Rt,ut,Gt,Bt),wt.copy(St))},reset:function(){H=!1,rt=null,wt.set(-1,0,0,0)}}}function i(){let H=!1,St=!1,rt=null,wt=null,Rt=null;return{setReversed:function(ut){if(St!==ut){let Gt=t.get("EXT_clip_control");ut?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),St=ut;let Bt=Rt;Rt=null,this.setClear(Bt)}},getReversed:function(){return St},setTest:function(ut){ut?Z(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ut){rt!==ut&&!H&&(n.depthMask(ut),rt=ut)},setFunc:function(ut){if(St&&(ut=Wm[ut]),wt!==ut){switch(ut){case oc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case io:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case hc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=ut}},setLocked:function(ut){H=ut},setClear:function(ut){Rt!==ut&&(Rt=ut,St&&(ut=1-ut),n.clearDepth(ut))},reset:function(){H=!1,rt=null,wt=null,Rt=null,St=!1}}}function s(){let H=!1,St=null,rt=null,wt=null,Rt=null,ut=null,Gt=null,Bt=null,Le=null;return{setTest:function(ve){H||(ve?Z(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(ve){St!==ve&&!H&&(n.stencilMask(ve),St=ve)},setFunc:function(ve,gi,Li){(rt!==ve||wt!==gi||Rt!==Li)&&(n.stencilFunc(ve,gi,Li),rt=ve,wt=gi,Rt=Li)},setOp:function(ve,gi,Li){(ut!==ve||Gt!==gi||Bt!==Li)&&(n.stencilOp(ve,gi,Li),ut=ve,Gt=gi,Bt=Li)},setLocked:function(ve){H=ve},setClear:function(ve){Le!==ve&&(n.clearStencil(ve),Le=ve)},reset:function(){H=!1,St=null,rt=null,wt=null,Rt=null,ut=null,Gt=null,Bt=null,Le=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,w=null,R=null,v=null,S=null,M=null,C=null,_=new Wt(0,0,0),T=0,I=!1,P=null,U=null,B=null,D=null,F=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=j>=2);let W=null,Q={},Mt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),ot=new Ge().fromArray(Mt),dt=new Ge().fromArray(yt);function bt(H,St,rt,wt){let Rt=new Uint8Array(4),ut=n.createTexture();n.bindTexture(H,ut),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<rt;Gt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(St+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return ut}let V={};V[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(io),ne(!1),b(rd),Z(n.CULL_FACE),Qt(Wi);function Z(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function pt(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Ut(H,St){return u[H]!==St?(n.bindFramebuffer(H,St),u[H]=St,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=St),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=St),!0):!1}function _t(H,St){let rt=p,wt=!1;if(H){rt=f.get(St),rt===void 0&&(rt=[],f.set(St,rt));let Rt=H.textures;if(rt.length!==Rt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Gt=Rt.length;ut<Gt;ut++)rt[ut]=n.COLOR_ATTACHMENT0+ut;rt.length=Rt.length,wt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,wt=!0);wt&&n.drawBuffers(rt)}function zt(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let fe={[dr]:n.FUNC_ADD,[dm]:n.FUNC_SUBTRACT,[fm]:n.FUNC_REVERSE_SUBTRACT};fe[pm]=n.MIN,fe[mm]=n.MAX;let qt={[gm]:n.ZERO,[xm]:n.ONE,[ym]:n.SRC_COLOR,[ld]:n.SRC_ALPHA,[wm]:n.SRC_ALPHA_SATURATE,[bm]:n.DST_COLOR,[vm]:n.DST_ALPHA,[_m]:n.ONE_MINUS_SRC_COLOR,[cd]:n.ONE_MINUS_SRC_ALPHA,[Sm]:n.ONE_MINUS_DST_COLOR,[Mm]:n.ONE_MINUS_DST_ALPHA,[Em]:n.CONSTANT_COLOR,[Tm]:n.ONE_MINUS_CONSTANT_COLOR,[Am]:n.CONSTANT_ALPHA,[Cm]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(H,St,rt,wt,Rt,ut,Gt,Bt,Le,ve){if(H===Wi){g===!0&&(pt(n.BLEND),g=!1);return}if(g===!1&&(Z(n.BLEND),g=!0),H!==um){if(H!==m||ve!==I){if((w!==dr||S!==dr)&&(n.blendEquation(n.FUNC_ADD),w=dr,S=dr),ve)switch(H){case uo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFunc(n.ONE,n.ONE);break;case od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ad:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Zt("WebGLState: Invalid blending: ",H);break}else switch(H){case uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case od:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ad:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",H);break}R=null,v=null,M=null,C=null,_.set(0,0,0),T=0,m=H,I=ve}return}Rt=Rt||St,ut=ut||rt,Gt=Gt||wt,(St!==w||Rt!==S)&&(n.blendEquationSeparate(fe[St],fe[Rt]),w=St,S=Rt),(rt!==R||wt!==v||ut!==M||Gt!==C)&&(n.blendFuncSeparate(qt[rt],qt[wt],qt[ut],qt[Gt]),R=rt,v=wt,M=ut,C=Gt),(Bt.equals(_)===!1||Le!==T)&&(n.blendColor(Bt.r,Bt.g,Bt.b,Le),_.copy(Bt),T=Le),m=H,I=!1}function ge(H,St){H.side===ai?pt(n.CULL_FACE):Z(n.CULL_FACE);let rt=H.side===Un;St&&(rt=!rt),ne(rt),H.blending===uo&&H.transparent===!1?Qt(Wi):Qt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let wt=H.stencilWrite;a.setTest(wt),wt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),nt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(H){P!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),P=H)}function b(H){H!==lm?(Z(n.CULL_FACE),H!==U&&(H===rd?n.cullFace(n.BACK):H===cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),U=H}function et(H){H!==B&&(J&&n.lineWidth(H),B=H)}function nt(H,St,rt){H?(Z(n.POLYGON_OFFSET_FILL),(D!==St||F!==rt)&&(D=St,F=rt,o.getReversed()&&(St=-St),n.polygonOffset(St,rt))):pt(n.POLYGON_OFFSET_FILL)}function mt(H){H?Z(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function at(H){H===void 0&&(H=n.TEXTURE0+q-1),W!==H&&(n.activeTexture(H),W=H)}function L(H,St,rt){rt===void 0&&(W===null?rt=n.TEXTURE0+q-1:rt=W);let wt=Q[rt];wt===void 0&&(wt={type:void 0,texture:void 0},Q[rt]=wt),(wt.type!==H||wt.texture!==St)&&(W!==rt&&(n.activeTexture(rt),W=rt),n.bindTexture(H,St||V[H]),wt.type=H,wt.texture=St)}function _e(){let H=Q[W];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function de(){try{n.compressedTexImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function y(){try{n.texSubImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function N(){try{n.texSubImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function st(){try{n.texStorage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function ht(){try{n.texStorage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function K(){try{n.texImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function it(){try{n.texImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function vt(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function Nt(H,St){d[H]!==St&&(n.pixelStorei(H,St),d[H]=St)}function xt(H){ot.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ot.copy(H))}function gt(H){dt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),dt.copy(H))}function Dt(H,St){let rt=c.get(St);rt===void 0&&(rt=new WeakMap,c.set(St,rt));let wt=rt.get(H);wt===void 0&&(wt=n.getUniformBlockIndex(St,H.name),rt.set(H,wt))}function Xt(H,St){let wt=c.get(St).get(H);l.get(St)!==wt&&(n.uniformBlockBinding(St,wt,H.__bindingPointIndex),l.set(St,wt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},W=null,Q={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,w=null,R=null,v=null,S=null,M=null,C=null,_=new Wt(0,0,0),T=0,I=!1,P=null,U=null,B=null,D=null,F=null,ot.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:pt,bindFramebuffer:Ut,drawBuffers:_t,useProgram:zt,setBlending:Qt,setMaterial:ge,setFlipSided:ne,setCullFace:b,setLineWidth:et,setPolygonOffset:nt,setScissorTest:mt,activeTexture:at,bindTexture:L,unbindTexture:_e,compressedTexImage2D:de,compressedTexImage3D:E,texImage2D:K,texImage3D:it,pixelStorei:Nt,getParameter:vt,updateUBOMapping:Dt,uniformBlockBinding:Xt,texStorage2D:st,texStorage3D:ht,texSubImage2D:y,texSubImage3D:N,compressedTexSubImage2D:O,compressedTexSubImage3D:X,scissor:xt,viewport:gt,reset:Yt}}function yS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,y){return p?new OffscreenCanvas(E,y):fa("canvas")}function g(E,y,N){let O=1,X=de(E);if((X.width>N||X.height>N)&&(O=N/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let st=Math.floor(O*X.width),ht=Math.floor(O*X.height);u===void 0&&(u=x(st,ht));let K=y?x(st,ht):u;return K.width=st,K.height=ht,K.getContext("2d").drawImage(E,0,0,st,ht),$t("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+st+"x"+ht+")."),K}else return"data"in E&&$t("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function m(E){return E.generateMipmaps}function w(E){n.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(E,y,N,O,X,st=!1){if(E!==null){if(n[E]!==void 0)return n[E];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ht;O&&(ht=t.get("EXT_texture_norm16"),ht||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===n.RED&&(N===n.FLOAT&&(K=n.R32F),N===n.HALF_FLOAT&&(K=n.R16F),N===n.UNSIGNED_BYTE&&(K=n.R8),N===n.UNSIGNED_SHORT&&ht&&(K=ht.R16_EXT),N===n.SHORT&&ht&&(K=ht.R16_SNORM_EXT)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.R8UI),N===n.UNSIGNED_SHORT&&(K=n.R16UI),N===n.UNSIGNED_INT&&(K=n.R32UI),N===n.BYTE&&(K=n.R8I),N===n.SHORT&&(K=n.R16I),N===n.INT&&(K=n.R32I)),y===n.RG&&(N===n.FLOAT&&(K=n.RG32F),N===n.HALF_FLOAT&&(K=n.RG16F),N===n.UNSIGNED_BYTE&&(K=n.RG8),N===n.UNSIGNED_SHORT&&ht&&(K=ht.RG16_EXT),N===n.SHORT&&ht&&(K=ht.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.RG8UI),N===n.UNSIGNED_SHORT&&(K=n.RG16UI),N===n.UNSIGNED_INT&&(K=n.RG32UI),N===n.BYTE&&(K=n.RG8I),N===n.SHORT&&(K=n.RG16I),N===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.RGB8UI),N===n.UNSIGNED_SHORT&&(K=n.RGB16UI),N===n.UNSIGNED_INT&&(K=n.RGB32UI),N===n.BYTE&&(K=n.RGB8I),N===n.SHORT&&(K=n.RGB16I),N===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),N===n.UNSIGNED_INT&&(K=n.RGBA32UI),N===n.BYTE&&(K=n.RGBA8I),N===n.SHORT&&(K=n.RGBA16I),N===n.INT&&(K=n.RGBA32I)),y===n.RGB&&(N===n.UNSIGNED_SHORT&&ht&&(K=ht.RGB16_EXT),N===n.SHORT&&ht&&(K=ht.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),y===n.RGBA){let it=st?ua:ce.getTransfer(X);N===n.FLOAT&&(K=n.RGBA32F),N===n.HALF_FLOAT&&(K=n.RGBA16F),N===n.UNSIGNED_BYTE&&(K=it===be?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&ht&&(K=ht.RGBA16_EXT),N===n.SHORT&&ht&&(K=ht.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(E,y){let N;return E?y===null||y===Si||y===po?N=n.DEPTH24_STENCIL8:y===li?N=n.DEPTH32F_STENCIL8:y===fo&&(N=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Si||y===po?N=n.DEPTH_COMPONENT24:y===li?N=n.DEPTH_COMPONENT32F:y===fo&&(N=n.DEPTH_COMPONENT16),N}function M(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ke&&E.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){let y=E.target;y.removeEventListener("dispose",C),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function _(E){let y=E.target;y.removeEventListener("dispose",_),P(y)}function T(E){let y=i.get(E);if(y.__webglInit===void 0)return;let N=E.source,O=f.get(N);if(O){let X=O[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(E),Object.keys(O).length===0&&f.delete(N)}i.remove(E)}function I(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let N=E.source,O=f.get(N);delete O[y.__cacheKey],o.memory.textures--}function P(E){let y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(y.__webglFramebuffer[O]))for(let X=0;X<y.__webglFramebuffer[O].length;X++)n.deleteFramebuffer(y.__webglFramebuffer[O][X]);else n.deleteFramebuffer(y.__webglFramebuffer[O]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[O])}else{if(Array.isArray(y.__webglFramebuffer))for(let O=0;O<y.__webglFramebuffer.length;O++)n.deleteFramebuffer(y.__webglFramebuffer[O]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let O=0;O<y.__webglColorRenderbuffer.length;O++)y.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[O]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let N=E.textures;for(let O=0,X=N.length;O<X;O++){let st=i.get(N[O]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),o.memory.textures--),i.remove(N[O])}i.remove(E)}let U=0;function B(){U=0}function D(){return U}function F(E){U=E}function q(){let E=U;return E>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function J(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function j(E,y){let N=i.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let O=E.image;if(O===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(N,E,y);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function k(E,y){let N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){pt(N,E,y);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function W(E,y){let N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){pt(N,E,y);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function Q(E,y){let N=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Ut(N,E,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}let Mt={[so]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[fc]:n.MIRRORED_REPEAT},yt={[Ke]:n.NEAREST,[Pm]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Vc]:n.LINEAR_MIPMAP_NEAREST,[ks]:n.LINEAR_MIPMAP_LINEAR},ot={[Um]:n.NEVER,[zm]:n.ALWAYS,[Om]:n.LESS,[Th]:n.LEQUAL,[Fm]:n.EQUAL,[Ah]:n.GEQUAL,[Bm]:n.GREATER,[km]:n.NOTEQUAL};function dt(E,y){if(y.type===li&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===Vc||y.magFilter===Ba||y.magFilter===ks||y.minFilter===pn||y.minFilter===Vc||y.minFilter===Ba||y.minFilter===ks)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Mt[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Mt[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Mt[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,yt[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ke||y.minFilter!==Ba&&y.minFilter!==ks||y.type===li&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function bt(E,y){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",C));let O=y.source,X=f.get(O);X===void 0&&(X={},f.set(O,X));let st=J(y);if(st!==E.__cacheKey){X[st]===void 0&&(X[st]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),X[st].usedTimes++;let ht=X[E.__cacheKey];ht!==void 0&&(X[E.__cacheKey].usedTimes--,ht.usedTimes===0&&I(y)),E.__cacheKey=st,E.__webglTexture=X[st].texture}return N}function V(E,y,N){return Math.floor(Math.floor(E/N)/y)}function Z(E,y,N,O){let st=E.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,N,O,y.data);else{st.sort((Nt,xt)=>Nt.start-xt.start);let ht=0;for(let Nt=1;Nt<st.length;Nt++){let xt=st[ht],gt=st[Nt],Dt=xt.start+xt.count,Xt=V(gt.start,y.width,4),Yt=V(xt.start,y.width,4);gt.start<=Dt+1&&Xt===Yt&&V(gt.start+gt.count-1,y.width,4)===Xt?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++ht,st[ht]=gt)}st.length=ht+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Nt=0,xt=st.length;Nt<xt;Nt++){let gt=st[Nt],Dt=Math.floor(gt.start/4),Xt=Math.ceil(gt.count/4),Yt=Dt%y.width,H=Math.floor(Dt/y.width),St=Xt,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,Yt,H,St,rt,N,O,y.data)}E.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function pt(E,y,N){let O=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(O=n.TEXTURE_3D);let X=bt(E,y),st=y.source;e.bindTexture(O,E.__webglTexture,n.TEXTURE0+N);let ht=i.get(st);if(st.version!==ht.__version||X===!0){if(e.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let rt=ce.getPrimaries(ce.workingColorSpace),wt=y.colorSpace===hi?null:ce.getPrimaries(y.colorSpace),Rt=y.colorSpace===hi||rt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let it=g(y.image,!1,s.maxTextureSize);it=_e(y,it);let vt=r.convert(y.format,y.colorSpace),Nt=r.convert(y.type),xt=v(y.internalFormat,vt,Nt,y.normalized,y.colorSpace,y.isVideoTexture);dt(O,y);let gt,Dt=y.mipmaps,Xt=y.isVideoTexture!==!0,Yt=ht.__version===void 0||X===!0,H=st.dataReady,St=M(y,it);if(y.isDepthTexture)xt=S(y.format===zs,y.type),Yt&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,xt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,xt,it.width,it.height,0,vt,Nt,null));else if(y.isDataTexture)if(Dt.length>0){Xt&&Yt&&e.texStorage2D(n.TEXTURE_2D,St,xt,Dt[0].width,Dt[0].height);for(let rt=0,wt=Dt.length;rt<wt;rt++)gt=Dt[rt],Xt?H&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,Nt,gt.data):e.texImage2D(n.TEXTURE_2D,rt,xt,gt.width,gt.height,0,vt,Nt,gt.data);y.generateMipmaps=!1}else Xt?(Yt&&e.texStorage2D(n.TEXTURE_2D,St,xt,it.width,it.height),H&&Z(y,it,vt,Nt)):e.texImage2D(n.TEXTURE_2D,0,xt,it.width,it.height,0,vt,Nt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,xt,Dt[0].width,Dt[0].height,it.depth);for(let rt=0,wt=Dt.length;rt<wt;rt++)if(gt=Dt[rt],y.format!==ci)if(vt!==null)if(Xt){if(H)if(y.layerUpdates.size>0){let Rt=Ld(gt.width,gt.height,y.format,y.type);for(let ut of y.layerUpdates){let Gt=gt.data.subarray(ut*Rt/gt.data.BYTES_PER_ELEMENT,(ut+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,ut,gt.width,gt.height,1,vt,Gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,it.depth,vt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,xt,gt.width,gt.height,it.depth,0,gt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,it.depth,vt,Nt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,xt,gt.width,gt.height,it.depth,0,vt,Nt,gt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Xt&&Yt&&e.texStorage2D(n.TEXTURE_2D,St,xt,Dt[0].width,Dt[0].height);for(let rt=0,wt=Dt.length;rt<wt;rt++)gt=Dt[rt],y.format!==ci?vt!==null?Xt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,xt,gt.width,gt.height,0,gt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?H&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,Nt,gt.data):e.texImage2D(n.TEXTURE_2D,rt,xt,gt.width,gt.height,0,vt,Nt,gt.data)}else if(y.isDataArrayTexture)if(Xt){if(Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,xt,it.width,it.height,it.depth),H)if(y.layerUpdates.size>0){let rt=Ld(it.width,it.height,y.format,y.type);for(let wt of y.layerUpdates){let Rt=it.data.subarray(wt*rt/it.data.BYTES_PER_ELEMENT,(wt+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,it.width,it.height,1,vt,Nt,Rt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Nt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,it.width,it.height,it.depth,0,vt,Nt,it.data);else if(y.isData3DTexture)Xt?(Yt&&e.texStorage3D(n.TEXTURE_3D,St,xt,it.width,it.height,it.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Nt,it.data)):e.texImage3D(n.TEXTURE_3D,0,xt,it.width,it.height,it.depth,0,vt,Nt,it.data);else if(y.isFramebufferTexture){if(Yt)if(Xt)e.texStorage2D(n.TEXTURE_2D,St,xt,it.width,it.height);else{let rt=it.width,wt=it.height;for(let Rt=0;Rt<St;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,xt,rt,wt,0,vt,Nt,null),rt>>=1,wt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),it.parentNode!==rt){rt.appendChild(it),d.add(y),rt.onpaint=wt=>{let Rt=wt.changedElements;for(let ut of d)Rt.includes(ut.image)&&(ut.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Rt=n.RGBA,ut=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,ut,Gt,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Xt&&Yt){let rt=de(Dt[0]);e.texStorage2D(n.TEXTURE_2D,St,xt,rt.width,rt.height)}for(let rt=0,wt=Dt.length;rt<wt;rt++)gt=Dt[rt],Xt?H&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,vt,Nt,gt):e.texImage2D(n.TEXTURE_2D,rt,xt,vt,Nt,gt);y.generateMipmaps=!1}else if(Xt){if(Yt){let rt=de(it);e.texStorage2D(n.TEXTURE_2D,St,xt,rt.width,rt.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Nt,it)}else e.texImage2D(n.TEXTURE_2D,0,xt,vt,Nt,it);m(y)&&w(O),ht.__version=st.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ut(E,y,N){if(y.image.length!==6)return;let O=bt(E,y),X=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);let st=i.get(X);if(X.version!==st.__version||O===!0){e.activeTexture(n.TEXTURE0+N);let ht=ce.getPrimaries(ce.workingColorSpace),K=y.colorSpace===hi?null:ce.getPrimaries(y.colorSpace),it=y.colorSpace===hi||ht===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=y.isCompressedTexture||y.image[0].isCompressedTexture,Nt=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let ut=0;ut<6;ut++)!vt&&!Nt?xt[ut]=g(y.image[ut],!0,s.maxCubemapSize):xt[ut]=Nt?y.image[ut].image:y.image[ut],xt[ut]=_e(y,xt[ut]);let gt=xt[0],Dt=r.convert(y.format,y.colorSpace),Xt=r.convert(y.type),Yt=v(y.internalFormat,Dt,Xt,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,St=st.__version===void 0||O===!0,rt=X.dataReady,wt=M(y,gt);dt(n.TEXTURE_CUBE_MAP,y);let Rt;if(vt){H&&St&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,gt.width,gt.height);for(let ut=0;ut<6;ut++){Rt=xt[ut].mipmaps;for(let Gt=0;Gt<Rt.length;Gt++){let Bt=Rt[Gt];y.format!==ci?Dt!==null?H?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt,0,0,Bt.width,Bt.height,Dt,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt,Yt,Bt.width,Bt.height,0,Bt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt,0,0,Bt.width,Bt.height,Dt,Xt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt,Yt,Bt.width,Bt.height,0,Dt,Xt,Bt.data)}}}else{if(Rt=y.mipmaps,H&&St){Rt.length>0&&wt++;let ut=de(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Nt){H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,xt[ut].width,xt[ut].height,Dt,Xt,xt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Yt,xt[ut].width,xt[ut].height,0,Dt,Xt,xt[ut].data);for(let Gt=0;Gt<Rt.length;Gt++){let Le=Rt[Gt].image[ut].image;H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt+1,0,0,Le.width,Le.height,Dt,Xt,Le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt+1,Yt,Le.width,Le.height,0,Dt,Xt,Le.data)}}else{H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Dt,Xt,xt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Yt,Dt,Xt,xt[ut]);for(let Gt=0;Gt<Rt.length;Gt++){let Bt=Rt[Gt];H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt+1,0,0,Dt,Xt,Bt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Gt+1,Yt,Dt,Xt,Bt.image[ut])}}}m(y)&&w(n.TEXTURE_CUBE_MAP),st.__version=X.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function _t(E,y,N,O,X,st){let ht=r.convert(N.format,N.colorSpace),K=r.convert(N.type),it=v(N.internalFormat,ht,K,N.normalized,N.colorSpace),vt=i.get(y),Nt=i.get(N);if(Nt.__renderTarget=y,!vt.__hasExternalTextures){let xt=Math.max(1,y.width>>st),gt=Math.max(1,y.height>>st);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?e.texImage3D(X,st,it,xt,gt,y.depth,0,ht,K,null):e.texImage2D(X,st,it,xt,gt,0,ht,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),at(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,X,Nt.__webglTexture,0,mt(y)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,X,Nt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(E,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){let O=y.depthTexture,X=O&&O.isDepthTexture?O.type:null,st=S(y.stencilBuffer,X),ht=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;at(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(y),st,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(y),st,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,st,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,E)}else{let O=y.textures;for(let X=0;X<O.length;X++){let st=O[X],ht=r.convert(st.format,st.colorSpace),K=r.convert(st.type),it=v(st.internalFormat,ht,K,st.normalized,st.colorSpace);at(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(y),it,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(y),it,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,it,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(E,y,N){let O=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(y.depthTexture);if(X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O){if(X.__webglInit===void 0&&(X.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),dt(n.TEXTURE_CUBE_MAP,y.depthTexture);let vt=r.convert(y.depthTexture.format),Nt=r.convert(y.depthTexture.type),xt;y.depthTexture.format===Bi?xt=n.DEPTH_COMPONENT24:y.depthTexture.format===zs&&(xt=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,y.width,y.height,0,vt,Nt,null)}}else j(y.depthTexture,0);let st=X.__webglTexture,ht=mt(y),K=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,it=y.depthTexture.format===zs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Bi)at(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,K,st,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,it,K,st,0);else if(y.depthTexture.format===zs)at(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,K,st,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,it,K,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(E){let y=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let O=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),O){let X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,O.removeEventListener("dispose",X)};O.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=O}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(N)for(let O=0;O<6;O++)fe(y.__webglFramebuffer[O],E,O);else{let O=E.texture.mipmaps;O&&O.length>0?fe(y.__webglFramebuffer[0],E,0):fe(y.__webglFramebuffer,E,0)}else if(N){y.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[O]),y.__webglDepthbuffer[O]===void 0)y.__webglDepthbuffer[O]=n.createRenderbuffer(),zt(y.__webglDepthbuffer[O],E,!1);else{let X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=y.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,st)}}else{let O=E.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),zt(y.__webglDepthbuffer,E,!1);else{let X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(E,y,N){let O=i.get(E);y!==void 0&&_t(O.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&qt(E)}function ge(E){let y=E.texture,N=i.get(E),O=i.get(y);E.addEventListener("dispose",_);let X=E.textures,st=E.isWebGLCubeRenderTarget===!0,ht=X.length>1;if(ht||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=y.version,o.memory.textures++),st){N.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[K]=[];for(let it=0;it<y.mipmaps.length;it++)N.__webglFramebuffer[K][it]=n.createFramebuffer()}else N.__webglFramebuffer[K]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)N.__webglFramebuffer[K]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ht)for(let K=0,it=X.length;K<it;K++){let vt=i.get(X[K]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&at(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){let it=X[K];N.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[K]);let vt=r.convert(it.format,it.colorSpace),Nt=r.convert(it.type),xt=v(it.internalFormat,vt,Nt,it.normalized,it.colorSpace,E.isXRRenderTarget===!0),gt=mt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,xt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,N.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),dt(n.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)_t(N.__webglFramebuffer[K][it],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it);else _t(N.__webglFramebuffer[K],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(y)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let K=0,it=X.length;K<it;K++){let vt=X[K],Nt=i.get(vt),xt=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,Nt.__webglTexture),dt(xt,vt),_t(N.__webglFramebuffer,E,vt,n.COLOR_ATTACHMENT0+K,xt,0),m(vt)&&w(xt)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,O.__webglTexture),dt(K,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)_t(N.__webglFramebuffer[it],E,y,n.COLOR_ATTACHMENT0,K,it);else _t(N.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,K,0);m(y)&&w(K),e.unbindTexture()}E.depthBuffer&&qt(E)}function ne(E){let y=E.textures;for(let N=0,O=y.length;N<O;N++){let X=y[N];if(m(X)){let st=R(E),ht=i.get(X).__webglTexture;e.bindTexture(st,ht),w(st),e.unbindTexture()}}}let b=[],et=[];function nt(E){if(E.samples>0){if(at(E)===!1){let y=E.textures,N=E.width,O=E.height,X=n.COLOR_BUFFER_BIT,st=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(E),K=y.length>1;if(K)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let it=E.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[vt]);let Nt=i.get(y[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,N,O,0,0,N,O,X,n.NEAREST),l===!0&&(b.length=0,et.length=0,b.push(n.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(b.push(st),et.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[vt]);let Nt=i.get(y[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function mt(E){return Math.min(s.maxSamples,E.samples)}function at(E){let y=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function _e(E,y){let N=E.colorSpace,O=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==cr&&N!==hi&&(ce.getTransfer(N)===be?(O!==ci||X!==Jn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",N)),y}function de(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=Qt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _S(n,t){function e(i,s=hi){let r,o=ce.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_d)return n.BYTE;if(i===vd)return n.SHORT;if(i===fo)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===Sd)return n.ALPHA;if(i===wd)return n.RGB;if(i===ci)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===qc)return n.RED;if(i===$c)return n.RED_INTEGER;if(i===Hs)return n.RG;if(i===Yc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===ka||i===za||i===Ha||i===Va)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===Jc||i===jc||i===Qc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===eh||i===nh||i===ih||i===sh||i===Ga||i===rh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===th||i===eh)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ih)return r.COMPRESSED_R11_EAC;if(i===sh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ga)return r.COMPRESSED_RG11_EAC;if(i===rh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===xh||i===yh||i===_h)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vh||i===Mh||i===bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===vh)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sh||i===wh||i===Wa||i===Eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var vS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
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

}`,qd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ra(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new bn({vertexShader:vS,fragmentShader:MS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$d=class extends ki{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new qd,m={},w=e.getContextAttributes(),R=null,v=null,S=[],M=[],C=new oe,_=null,T=null,I=new Mn;I.viewport=new Ge;let P=new Mn;P.viewport=new Ge;let U=[I,P],B=new kc,D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=S[V];return Z===void 0&&(Z=new ao,S[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=S[V];return Z===void 0&&(Z=new ao,S[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=S[V];return Z===void 0&&(Z=new ao,S[V]=Z),Z.getHandSpace()};function q(V){let Z=M.indexOf(V.inputSource);if(Z===-1)return;let pt=S[Z];pt!==void 0&&(pt.update(V.inputSource,V.frame,c||o),pt.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",j);for(let V=0;V<S.length;V++){let Z=M[V];Z!==null&&(M[V]=null,S[V].disconnect(Z))}D=null,F=null,g.reset();for(let V in m)delete m[V];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,v=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),T!==null){let V=T.camera;V.fov=T.fov,V.zoom=T.zoom,V.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,_t=null;w.depth&&(_t=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?zs:Bi,Ut=w.stencil?po:Si);let zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Vn(u.textureWidth,u.textureHeight,{format:ci,type:Jn,depthTexture:new Ns(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Vn(f.framebufferWidth,f.framebufferHeight,{format:ci,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(V){for(let Z=0;Z<V.removed.length;Z++){let pt=V.removed[Z],Ut=M.indexOf(pt);Ut>=0&&(M[Ut]=null,S[Ut].disconnect(pt))}for(let Z=0;Z<V.added.length;Z++){let pt=V.added[Z],Ut=M.indexOf(pt);if(Ut===-1){for(let zt=0;zt<S.length;zt++)if(zt>=M.length){M.push(pt),Ut=zt;break}else if(M[zt]===null){M[zt]=pt,Ut=zt;break}if(Ut===-1)break}let _t=S[Ut];_t&&_t.connect(pt)}}let k=new G,W=new G;function Q(V,Z,pt){k.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(pt.matrixWorld);let Ut=k.distanceTo(W),_t=Z.projectionMatrix.elements,zt=pt.projectionMatrix.elements,fe=_t[14]/(_t[10]-1),qt=_t[14]/(_t[10]+1),Qt=(_t[9]+1)/_t[5],ge=(_t[9]-1)/_t[5],ne=(_t[8]-1)/_t[0],b=(zt[8]+1)/zt[0],et=fe*ne,nt=fe*b,mt=Ut/(-ne+b),at=mt*-ne;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(at),V.translateZ(mt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),_t[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let L=fe+mt,_e=qt+mt,de=et-at,E=nt+(Ut-at),y=Qt*qt/_e*L,N=ge*qt/_e*L;V.projectionMatrix.makePerspective(de,E,y,N,L,_e),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Mt(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Z=V.near,pt=V.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),B.near=P.near=I.near=Z,B.far=P.far=I.far=pt,(D!==B.near||F!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,F=B.far),B.layers.mask=V.layers.mask|6,I.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Ut=V.parent,_t=B.cameras;Mt(B,Ut);for(let zt=0;zt<_t.length;zt++)Mt(_t[zt],Ut);_t.length===2?Q(B,I,P):B.projectionMatrix.copy(I.projectionMatrix),T===null&&V.isPerspectiveCamera&&(T={camera:V,fov:V.fov,zoom:V.zoom}),yt(V,B,Ut)};function yt(V,Z,pt){pt===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(pt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=mc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(V){return m[V]};let ot=null;function dt(V,Z){if(h=Z.getViewerPose(c||o),p=Z,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ut=!1;pt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let qt=0;qt<pt.length;qt++){let Qt=pt[qt],ge=null;if(f!==null)ge=f.getViewport(Qt);else{let b=d.getViewSubImage(u,Qt);ge=b.viewport,qt===0&&(t.setRenderTargetTextures(v,b.colorTexture,b.depthStencilTexture),t.setRenderTarget(v))}let ne=U[qt];ne===void 0&&(ne=new Mn,ne.layers.enable(qt),ne.viewport=new Ge,U[qt]=ne),ne.matrix.fromArray(Qt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Qt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ge.x,ge.y,ge.width,ge.height),qt===0&&(B.matrix.copy(ne.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(ne)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let qt=d.getDepthInformation(pt[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<pt.length;qt++){let Qt=pt[qt].camera;if(Qt){let ge=m[Qt];ge||(ge=new Ra,m[Qt]=ge);let ne=d.getCameraImage(Qt);ge.sourceTexture=ne}}}}for(let pt=0;pt<S.length;pt++){let Ut=M[pt],_t=S[pt];Ut!==null&&_t!==void 0&&_t.update(Ut,Z,c||o)}ot&&ot(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),p=null}let bt=new x0;bt.setAnimationLoop(dt),this.setAnimationLoop=function(V){ot=V},this.dispose=function(){}}},bS=new Se,S0=new jt;S0.set(-1,0,0,0,1,0,0,0,1);function SS(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Rd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,R,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=t.get(m),R=w.envMap,v=w.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(bS.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(S0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=R*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let w=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;i.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",w));let C=S.program;i.updateUBOMapping(v,C);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let S=d();v.__bindingPointIndex=S;let M=n.createBuffer(),C=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=s[v.id],M=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,T=M.length;_<T;_++){let I=M[_];if(Array.isArray(I))for(let P=0,U=I.length;P<U;P++)f(I[P],_,P,C);else f(I,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,S,M,C){if(x(v,S,M,C)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let P=0;P<T.length;P++){let U=T[P],B=m(U);p(U,v.__data,I),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(I+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function p(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function x(v,S,M,C){let _=v.value,T=S+"_"+M;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let I=C[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(v){let S=v.uniforms,M=0,C=16;for(let T=0,I=S.length;T<I;T++){let P=Array.isArray(S[T])?S[T]:[S[T]];for(let U=0,B=P.length;U<B;U++){let D=P[U],F=Array.isArray(D.value)?D.value:[D.value];for(let q=0,J=F.length;q<J;q++){let j=F[q],k=m(j),W=M%C,Q=W%k.boundary,Mt=W+Q;M+=Q,Mt!==0&&C-Mt<k.storage&&(M+=C-Mt),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=k.storage}}}let _=M%C;return _>0&&(M+=C-_),v.__size=M,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),S}function w(v){let S=v.target;S.removeEventListener("dispose",w);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var ES=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function TS(){return Xi===null&&(Xi=new ba(ES,16,16,Hs,wi),Xi.name="DFG_LUT",Xi.minFilter=pn,Xi.magFilter=pn,Xi.wrapS=Fi,Xi.wrapT=Fi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Lh=class{constructor(t={}){let{canvas:e=Hm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Jn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,g=new Set([Zc,Yc,$c]),m=new Set([Jn,Si,fo,po,Wc,Xc]),w=new Uint32Array(4),R=new Int32Array(4),v=new G,S=null,M=null,C=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,U=null,B=null,D=null,F=null;this._outputColorSpace=Zn;let q=0,J=0,j=null,k=-1,W=null,Q=new Ge,Mt=new Ge,yt=null,ot=new Wt(0),dt=0,bt=e.width,V=e.height,Z=1,pt=null,Ut=null,_t=new Ge(0,0,bt,V),zt=new Ge(0,0,bt,V),fe=!1,qt=new Ea,Qt=!1,ge=!1,ne=new Se,b=new G,et=new Ge,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function at(){return j===null?Z:1}let L=i;function _e(A,z){return e.getContext(A,z)}let de,E,y,N,O,X,st,ht,K,it,vt,Nt,xt,gt,Dt,Xt,Yt,H,St,rt,wt,Rt,ut;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",gi,!1),L===null){let z="webgl2";if(L=_e(z,A),L===null)throw _e(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(A){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",gi,!1),Zt("WebGLRenderer: "+A.message),A}function Gt(){de=new NM(L),de.init(),wt=new _S(L,de),E=new SM(L,de,t,wt),y=new xS(L,de),E.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=L.createFramebuffer(),D=L.createFramebuffer(),F=L.createFramebuffer(),N=new OM(L),O=new iS,X=new yS(L,de,y,O,E,wt,N),st=new LM(I),ht=new B_(L),Rt=new MM(L,ht),K=new DM(L,ht,N,Rt),it=new BM(L,K,ht,Rt,N),H=new FM(L,E,X),Dt=new wM(O),vt=new nS(I,st,de,E,Rt,Dt),Nt=new SS(I,O),xt=new rS,gt=new uS(de),Yt=new vM(I,st,y,it,p,l),Xt=new gS(I,it,E),ut=new wS(L,N,E,y),St=new bM(L,de,N),rt=new UM(L,de,N),N.programs=vt.programs,I.capabilities=E,I.extensions=de,I.properties=O,I.renderLists=xt,I.shadowMap=Xt,I.state=y,I.info=N}x!==Jn&&(T=new zM(x,e.width,e.height,a,s,r));let Bt=new $d(I,L);this.xr=Bt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(bt,V,!1))},this.getSize=function(A){return A.set(bt,V)},this.setSize=function(A,z,tt=!0){if(Bt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=A,V=z,e.width=Math.floor(A*Z),e.height=Math.floor(z*Z),tt===!0&&(e.style.width=A+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(bt*Z,V*Z).floor()},this.setDrawingBufferSize=function(A,z,tt){bt=A,V=z,Z=tt,e.width=Math.floor(A*tt),e.height=Math.floor(z*tt),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===Jn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Q)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,z,tt,$){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,z,tt,$),y.viewport(Q.copy(_t).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(zt)},this.setScissor=function(A,z,tt,$){A.isVector4?zt.set(A.x,A.y,A.z,A.w):zt.set(A,z,tt,$),y.scissor(Mt.copy(zt).multiplyScalar(Z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){y.setScissorTest(fe=A)},this.setOpaqueSort=function(A){pt=A},this.setTransparentSort=function(A){Ut=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,tt=!0){let $=0;if(A){let Y=!1;if(j!==null){let Ct=j.texture.format;Y=g.has(Ct)}if(Y){let Ct=j.texture.type,Lt=m.has(Ct),At=Yt.getClearColor(),Ot=Yt.getClearAlpha(),Ht=At.r,ie=At.g,ue=At.b;Lt?(w[0]=Ht,w[1]=ie,w[2]=ue,w[3]=Ot,L.clearBufferuiv(L.COLOR,0,w)):(R[0]=Ht,R[1]=ie,R[2]=ue,R[3]=Ot,L.clearBufferiv(L.COLOR,0,R))}else $|=L.COLOR_BUFFER_BIT}z&&($|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",gi,!1),Yt.dispose(),xt.dispose(),gt.dispose(),O.dispose(),st.dispose(),it.dispose(),Rt.dispose(),ut.dispose(),vt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",wp),Bt.removeEventListener("sessionend",Ep),ir.stop()};function Le(A){A.preventDefault(),pa("WebGLRenderer: Context Lost."),P=!0}function ve(){pa("WebGLRenderer: Context Restored."),P=!1;let A=N.autoReset,z=Xt.enabled,tt=Xt.autoUpdate,$=Xt.needsUpdate,Y=Xt.type;Gt(),N.autoReset=A,Xt.enabled=z,Xt.autoUpdate=tt,Xt.needsUpdate=$,Xt.type=Y}function gi(A){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Li(A){let z=A.target;z.removeEventListener("dispose",Li),Yy(z)}function Yy(A){Zy(A),O.remove(A)}function Zy(A){let z=O.get(A).programs;z!==void 0&&(z.forEach(function(tt){vt.releaseProgram(tt)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,tt,$,Y,Ct){z===null&&(z=nt);let Lt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,At=jy(A,z,tt,$,Y);y.setMaterial($,Lt);let Ot=tt.index,Ht=1;if($.wireframe===!0){if(Ot=K.getWireframeAttribute(tt),Ot===void 0)return;Ht=2}let ie=tt.drawRange,ue=tt.attributes.position,Ft=ie.start*Ht,Me=(ie.start+ie.count)*Ht;Ct!==null&&(Ft=Math.max(Ft,Ct.start*Ht),Me=Math.min(Me,(Ct.start+Ct.count)*Ht)),Ot!==null?(Ft=Math.max(Ft,0),Me=Math.min(Me,Ot.count)):ue!=null&&(Ft=Math.max(Ft,0),Me=Math.min(Me,ue.count));let je=Me-Ft;if(je<0||je===1/0)return;Rt.setup(Y,$,At,tt,Ot);let Oe,Ie=St;if(Ot!==null&&(Oe=ht.get(Ot),Ie=rt,Ie.setIndex(Oe)),Y.isMesh)$.wireframe===!0?(y.setLineWidth($.wireframeLinewidth*at()),Ie.setMode(L.LINES)):Ie.setMode(L.TRIANGLES);else if(Y.isLine){let yn=$.linewidth;yn===void 0&&(yn=1),y.setLineWidth(yn*at()),Y.isLineSegments?Ie.setMode(L.LINES):Y.isLineLoop?Ie.setMode(L.LINE_LOOP):Ie.setMode(L.LINE_STRIP)}else Y.isPoints?Ie.setMode(L.POINTS):Y.isSprite&&Ie.setMode(L.TRIANGLES);if(Y.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let yn=Y._multiDrawStarts,Pt=Y._multiDrawCounts,In=Y._multiDrawCount,xe=Ot?ht.get(Ot).bytesPerElement:1,si=O.get($).currentProgram.getUniforms();for(let Ni=0;Ni<In;Ni++)si.setValue(L,"_gl_DrawID",Ni),Ie.render(yn[Ni]/xe,Pt[Ni])}else if(Y.isInstancedMesh)Ie.renderInstances(Ft,je,Y.count);else if(tt.isInstancedBufferGeometry){let yn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Pt=Math.min(tt.instanceCount,yn);Ie.renderInstances(Ft,je,Pt)}else Ie.render(Ft,je)};function Sp(A,z,tt,$){U!==null&&A.isNodeMaterial&&U.setObject($,A),Qt===!0&&Dt.setState(A,tt,!1),A.transparent===!0&&A.side===ai&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,Tl(A,z,$),A.side=Fs,A.needsUpdate=!0,Tl(A,z,$),A.side=ai):Tl(A,z,$)}this.compile=function(A,z,tt=null){tt===null&&(tt=A),U!==null&&U.renderStart(A,z,tt),M=gt.get(tt),M.init(z),_.push(M),tt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),A!==tt&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights(),U!==null&&U.updateLights(M.state.lightsArray),ge=this.localClippingEnabled,Qt=Dt.init(this.clippingPlanes,ge),Qt===!0&&Dt.setGlobalState(this.clippingPlanes,z),U!==null&&Xt.render(M.state.shadowsArray,tt,z);let $=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let Lt=0;Lt<Ct.length;Lt++){let At=Ct[Lt];Sp(At,tt,z,Y),$.add(At)}else Sp(Ct,tt,z,Y),$.add(Ct)}),M=_.pop(),U!==null&&U.renderEnd(),$},this.compileAsync=function(A,z,tt=null){let $=this.compile(A,z,tt);return new Promise(Y=>{function Ct(){if($.forEach(function(Lt){let Ot=O.get(Lt).currentProgram;(Ot===void 0||Ot.isReady())&&$.delete(Lt)}),$.size===0){Y(A);return}setTimeout(Ct,10)}de.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Tu=null;function Ky(A){Tu&&Tu(A)}function wp(){ir.stop()}function Ep(){ir.start()}let ir=new x0;ir.setAnimationLoop(Ky),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(A){Tu=A,Bt.setAnimationLoop(A),A===null?ir.stop():ir.start()},Bt.addEventListener("sessionstart",wp),Bt.addEventListener("sessionend",Ep),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(A,z);let tt=Bt.enabled===!0&&Bt.isPresenting===!0,$=T!==null&&(j===null||tt)&&T.begin(I,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(z),z=Bt.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,z,j),M=gt.get(A,_.length),M.init(z),M.state.textureUnits=X.getTextureUnits(),_.push(M),ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),qt.setFromProjectionMatrix(ne,Mi,z.reversedDepth),ge=this.localClippingEnabled,Qt=Dt.init(this.clippingPlanes,ge),S=xt.get(A,C.length),S.init(),C.push(S),Bt.enabled===!0&&Bt.isPresenting===!0){let Lt=I.xr.getDepthSensingMesh();Lt!==null&&Au(Lt,z,-1/0,I.sortObjects)}Au(A,z,0,I.sortObjects),S.finish(),U!==null&&U.updateLights(M.state.lightsArray),I.sortObjects===!0&&S.sort(pt,Ut),mt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,mt&&Yt.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&Dt.beginShadows();let Y=M.state.shadowsArray;if(Xt.render(Y,A,z),Qt===!0&&Dt.endShadows(),($&&T.hasRenderPass())===!1){let Lt=S.opaque,At=S.transmissive;if(M.setupLights(),z.isArrayCamera){let Ot=z.cameras;if(At.length>0)for(let Ht=0,ie=Ot.length;Ht<ie;Ht++){let ue=Ot[Ht];Ap(Lt,At,A,ue)}mt&&Yt.render(A);for(let Ht=0,ie=Ot.length;Ht<ie;Ht++){let ue=Ot[Ht];Tp(S,A,ue,ue.viewport)}}else At.length>0&&Ap(Lt,At,A,z),mt&&Yt.render(A),Tp(S,A,z)}j!==null&&J===0&&(X.updateMultisampleRenderTarget(j),X.updateRenderTargetMipmap(j)),$&&T.end(I),A.isScene===!0&&A.onAfterRender(I,A,z),Rt.resetDefaultState(),k=-1,W=null,_.pop(),_.length>0?(M=_[_.length-1],X.setTextureUnits(M.state.textureUnits),Qt===!0&&Dt.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,U!==null&&U.renderEnd()};function Au(A,z,tt,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(qt)){$&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);let Lt=it.update(A),At=A.material;At.visible&&S.push(A,Lt,At,tt,et.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(qt))){let Lt=it.update(A),At=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),et.copy(Lt.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(At)){let Ot=Lt.groups;for(let Ht=0,ie=Ot.length;Ht<ie;Ht++){let ue=Ot[Ht],Ft=At[ue.materialIndex];Ft&&Ft.visible&&S.push(A,Lt,Ft,tt,et.z,ue,z)}}else At.visible&&S.push(A,Lt,At,tt,et.z,null,z)}}let Ct=A.children;for(let Lt=0,At=Ct.length;Lt<At;Lt++)Au(Ct[Lt],z,tt,$)}function Tp(A,z,tt,$){let{opaque:Y,transmissive:Ct,transparent:Lt}=A;M.setupLightsView(tt),Qt===!0&&Dt.setGlobalState(I.clippingPlanes,tt),$&&y.viewport(Q.copy($)),Y.length>0&&El(Y,z,tt),Ct.length>0&&El(Ct,z,tt),Lt.length>0&&El(Lt,z,tt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ap(A,z,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[$.id]===void 0){let Ft=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[$.id]=new Vn(1,1,{generateMipmaps:!0,type:Ft?wi:Jn,minFilter:ks,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Ct=M.state.transmissionRenderTarget[$.id],Lt=$.viewport||Q;Ct.setSize(Lt.z*I.transmissionResolutionScale,Lt.w*I.transmissionResolutionScale);let At=I.getRenderTarget(),Ot=I.getActiveCubeFace(),Ht=I.getActiveMipmapLevel();I.setRenderTarget(Ct),I.getClearColor(ot),dt=I.getClearAlpha(),dt<1&&I.setClearColor(16777215,.5),I.clear(),mt&&Yt.render(tt);let ie=I.toneMapping;I.toneMapping=bi;let ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),M.setupLightsView($),Qt===!0&&Dt.setGlobalState(I.clippingPlanes,$),El(A,tt,$),X.updateMultisampleRenderTarget(Ct),X.updateRenderTargetMipmap(Ct),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Me=0,je=z.length;Me<je;Me++){let Oe=z[Me],{object:Ie,geometry:yn,material:Pt,group:In}=Oe;if(Pt.side===ai&&Ie.layers.test($.layers)){let xe=Pt.side;Pt.side=Un,Pt.needsUpdate=!0,Cp(Ie,tt,$,yn,Pt,In),Pt.side=xe,Pt.needsUpdate=!0,Ft=!0}}Ft===!0&&(X.updateMultisampleRenderTarget(Ct),X.updateRenderTargetMipmap(Ct))}I.setRenderTarget(At,Ot,Ht),I.setClearColor(ot,dt),ue!==void 0&&($.viewport=ue),I.toneMapping=ie}function El(A,z,tt){let $=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Ct=A.length;Y<Ct;Y++){let Lt=A[Y],{object:At,geometry:Ot,group:Ht}=Lt,ie=Lt.material;ie.allowOverride===!0&&$!==null&&(ie=$),At.layers.test(tt.layers)&&Cp(At,z,tt,Ot,ie,Ht)}}function Cp(A,z,tt,$,Y,Ct){U!==null&&Y.isNodeMaterial&&U.setObject(A,Y),A.onBeforeRender(I,z,tt,$,Y,Ct),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(I,z,tt,$,A,Ct),Y.transparent===!0&&Y.side===ai&&Y.forceSinglePass===!1?(Y.side=Un,Y.needsUpdate=!0,I.renderBufferDirect(tt,z,$,Y,A,Ct),Y.side=Fs,Y.needsUpdate=!0,I.renderBufferDirect(tt,z,$,Y,A,Ct),Y.side=ai):I.renderBufferDirect(tt,z,$,Y,A,Ct),A.onAfterRender(I,z,tt,$,Y,Ct)}function Tl(A,z,tt){z.isScene!==!0&&(z=nt);let $=O.get(A),Y=M.state.lights,Ct=M.state.shadowsArray,Lt=Y.state.version,At=vt.getParameters(A,Y.state,Ct,z,tt,M.state.lightProbeGridArray),Ot=vt.getProgramCacheKey(At),Ht=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;let ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=st.get(A.envMap||$.environment,ie),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",Li),Ht=new Map,$.programs=Ht);let ue=Ht.get(Ot);if(ue!==void 0){if($.currentProgram===ue&&$.lightsStateVersion===Lt)return Ip(A,At),ue}else At.uniforms=vt.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,tt,At),A.onBeforeCompile(At,I),ue=vt.acquireProgram(At,Ot),Ht.set(Ot,ue),$.uniforms=At.uniforms;let Ft=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=Dt.uniform),Ip(A,At),$.needsLights=t_(A),$.lightsStateVersion=Lt,$.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.sunLights.value=Y.state.sun,Ft.sunLightShadows.value=Y.state.sunShadow,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ft.sunShadowCascade.value=Y.state.sunShadowCascade,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=M.state.lightProbeGridArray.length>0,$.currentProgram=ue,$.uniformsList=null,ue}function Rp(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=xo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ip(A,z){let tt=O.get(A);tt.outputColorSpace=z.outputColorSpace,tt.batching=z.batching,tt.batchingColor=z.batchingColor,tt.instancing=z.instancing,tt.instancingColor=z.instancingColor,tt.instancingMorph=z.instancingMorph,tt.skinning=z.skinning,tt.morphTargets=z.morphTargets,tt.morphNormals=z.morphNormals,tt.morphColors=z.morphColors,tt.morphTargetsCount=z.morphTargetsCount,tt.numClippingPlanes=z.numClippingPlanes,tt.numIntersection=z.numClipIntersection,tt.vertexAlphas=z.vertexAlphas,tt.vertexTangents=z.vertexTangents,tt.toneMapping=z.toneMapping}function Jy(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let tt=0,$=A.length;tt<$;tt++){let Y=A[tt];if(Y.texture!==null&&Y.boundingBox.containsPoint(v))return Y}return null}function jy(A,z,tt,$,Y){z.isScene!==!0&&(z=nt),X.resetTextureUnits();let Ct=z.fog,Lt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,At=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ce.workingColorSpace,Ot=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ht=st.get($.envMap||Lt,Ot),ie=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ue=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!tt.morphAttributes.position,Me=!!tt.morphAttributes.normal,je=!!tt.morphAttributes.color,Oe=bi;$.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=I.toneMapping);let Ie=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,yn=Ie!==void 0?Ie.length:0,Pt=O.get($),In=M.state.lights;if(Qt===!0&&(ge===!0||A!==W)){let Ne=A===W&&$.id===k;Dt.setState($,A,Ne)}let xe=!1;$.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==In.state.version||Pt.outputColorSpace!==At||Y.isBatchedMesh&&Pt.batching===!1||!Y.isBatchedMesh&&Pt.batching===!0||Y.isBatchedMesh&&Pt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Pt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Pt.instancing===!1||!Y.isInstancedMesh&&Pt.instancing===!0||Y.isSkinnedMesh&&Pt.skinning===!1||!Y.isSkinnedMesh&&Pt.skinning===!0||Y.isInstancedMesh&&Pt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Pt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Pt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Pt.instancingMorph===!1&&Y.morphTexture!==null||Pt.envMap!==Ht||$.fog===!0&&Pt.fog!==Ct||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Dt.numPlanes||Pt.numIntersection!==Dt.numIntersection)||Pt.vertexAlphas!==ie||Pt.vertexTangents!==ue||Pt.morphTargets!==Ft||Pt.morphNormals!==Me||Pt.morphColors!==je||Pt.toneMapping!==Oe||Pt.morphTargetsCount!==yn||!!Pt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Pt.__version=$.version);let si=Pt.currentProgram;xe===!0&&(si=Tl($,z,Y),U&&$.isNodeMaterial&&U.onUpdateProgram($,si,Pt));let Ni=!1,Ss=!1,Or=!1,Ae=si.getUniforms(),Ye=Pt.uniforms;if(y.useProgram(si.program)&&(Ni=!0,Ss=!0,Or=!0),$.id!==k&&(k=$.id,Ss=!0),Pt.needsLights){let Ne=Jy(M.state.lightProbeGridArray,Y);Pt.lightProbeGrid!==Ne&&(Pt.lightProbeGrid=Ne,Ss=!0)}if(Ni||W!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ae.setValue(L,"projectionMatrix",A.projectionMatrix),Ae.setValue(L,"viewMatrix",A.matrixWorldInverse);let Es=Ae.map.cameraPosition;Es!==void 0&&Es.setValue(L,b.setFromMatrixPosition(A.matrixWorld)),E.logarithmicDepthBuffer&&Ae.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ae.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,Ss=!0,Or=!0)}if(Pt.needsLights&&(In.state.sunShadowMap.length>0&&Ae.setValue(L,"sunShadowMap",In.state.sunShadowMap,X),In.state.directionalShadowMap.length>0&&Ae.setValue(L,"directionalShadowMap",In.state.directionalShadowMap,X),In.state.spotShadowMap.length>0&&Ae.setValue(L,"spotShadowMap",In.state.spotShadowMap,X),In.state.pointShadowMap.length>0&&Ae.setValue(L,"pointShadowMap",In.state.pointShadowMap,X)),Y.isSkinnedMesh){Ae.setOptional(L,Y,"bindMatrix"),Ae.setOptional(L,Y,"bindMatrixInverse");let Ne=Y.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ae.setValue(L,"boneTexture",Ne.boneTexture,X))}Y.isBatchedMesh&&(Ae.setOptional(L,Y,"batchingTexture"),Ae.setValue(L,"batchingTexture",Y._matricesTexture,X),Ae.setOptional(L,Y,"batchingIdTexture"),Ae.setValue(L,"batchingIdTexture",Y._indirectTexture,X),Ae.setOptional(L,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ae.setValue(L,"batchingColorTexture",Y._colorsTexture,X));let ws=tt.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&H.update(Y,tt,si),(Ss||Pt.receiveShadow!==Y.receiveShadow)&&(Pt.receiveShadow=Y.receiveShadow,Ae.setValue(L,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(Ye.envMapIntensity.value=z.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=TS()),Ss){if(Ae.setValue(L,"toneMappingExposure",I.toneMappingExposure),Pt.needsLights&&Qy(Ye,Or),Ct&&$.fog===!0&&Nt.refreshFogUniforms(Ye,Ct),Nt.refreshMaterialUniforms(Ye,$,Z,V,M.state.transmissionRenderTarget[A.id]),Pt.needsLights&&Pt.lightProbeGrid){let Ne=Pt.lightProbeGrid;Ye.probesSH.value=Ne.texture,Ye.probesMin.value.copy(Ne.boundingBox.min),Ye.probesMax.value.copy(Ne.boundingBox.max),Ye.probesResolution.value.copy(Ne.resolution)}xo.upload(L,Rp(Pt),Ye,X)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(xo.upload(L,Rp(Pt),Ye,X),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ae.setValue(L,"center",Y.center),Ae.setValue(L,"modelViewMatrix",Y.modelViewMatrix),Ae.setValue(L,"normalMatrix",Y.normalMatrix),Ae.setValue(L,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){let Ne=$.uniformsGroups;for(let Es=0,Fr=Ne.length;Es<Fr;Es++){let Lp=Ne[Es];ut.update(Lp,si),ut.bind(Lp,si)}}return si}function Qy(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function t_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,z,tt){let $=O.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=z,O.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let tt=O.get(A);tt.__webglFramebuffer=z,tt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,tt=0){j=A,q=z,J=tt;let $=null,Y=!1,Ct=!1;if(A){let At=O.get(A);if(At.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,At.__webglFramebuffer),Q.copy(A.viewport),Mt.copy(A.scissor),yt=A.scissorTest,y.viewport(Q),y.scissor(Mt),y.setScissorTest(yt),k=-1;return}else if(At.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(At.__hasExternalTextures)X.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ie=A.depthTexture;if(At.__boundDepthTexture!==ie){if(ie!==null&&O.has(ie)&&(A.width!==ie.image.width||A.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}let Ot=A.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Ct=!0);let Ht=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?$=Ht[z][tt]:$=Ht[z],Y=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?$=O.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?$=Ht[tt]:$=Ht,Q.copy(A.viewport),Mt.copy(A.scissor),yt=A.scissorTest}else Q.copy(_t).multiplyScalar(Z).floor(),Mt.copy(zt).multiplyScalar(Z).floor(),yt=fe;if(tt!==0&&($=B),y.bindFramebuffer(L.FRAMEBUFFER,$)&&y.drawBuffers(A,$),y.viewport(Q),y.scissor(Mt),y.setScissorTest(yt),Y){let At=O.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,tt)}else if(Ct){let At=z;for(let Ot=0;Ot<A.textures.length;Ot++){let Ht=O.get(A.textures[Ot]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ot,Ht.__webglTexture,tt,At)}}else if(A!==null&&tt!==0){let At=O.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,At.__webglTexture,tt)}k=-1};function Pp(A){let z=O.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=E.textureFormatReadable(A.format),z.__typeReadable=E.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,tt,$,Y,Ct,Lt,At=0){if(!(A&&A.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){y.bindFramebuffer(L.FRAMEBUFFER,Ot);try{let Ht=A.textures[At],ie=Ht.format,ue=Ht.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At);let Ft=Pp(Ht);if(Ft.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&tt>=0&&tt<=A.height-Y&&L.readPixels(z,tt,$,Y,wt.convert(ie),wt.convert(ue),Ct)}finally{let Ht=j!==null?O.get(j).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,z,tt,$,Y,Ct,Lt,At=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(z>=0&&z<=A.width-$&&tt>=0&&tt<=A.height-Y){y.bindFramebuffer(L.FRAMEBUFFER,Ot);let Ht=A.textures[At],ie=Ht.format,ue=Ht.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At);let Ft=Pp(Ht);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,Ct.byteLength,L.STREAM_READ),L.readPixels(z,tt,$,Y,wt.convert(ie),wt.convert(ue),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let je=j!==null?O.get(j).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,je);let Oe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gm(L,Oe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ct),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Me),L.deleteSync(Oe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,tt=0){let $=Math.pow(2,-tt),Y=Math.floor(A.image.width*$),Ct=Math.floor(A.image.height*$),Lt=z!==null?z.x:0,At=z!==null?z.y:0;X.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,tt,0,0,Lt,At,Y,Ct),y.unbindTexture()},this.copyTextureToTexture=function(A,z,tt=null,$=null,Y=0,Ct=0){let Lt,At,Ot,Ht,ie,ue,Ft,Me,je,Oe=A.isCompressedTexture?A.mipmaps[Ct]:A.image;if(tt!==null)Lt=tt.max.x-tt.min.x,At=tt.max.y-tt.min.y,Ot=tt.isBox3?tt.max.z-tt.min.z:1,Ht=tt.min.x,ie=tt.min.y,ue=tt.isBox3?tt.min.z:0;else{let Ye=Math.pow(2,-Y);Lt=Math.floor(Oe.width*Ye),At=Math.floor(Oe.height*Ye),A.isDataArrayTexture?Ot=Oe.depth:A.isData3DTexture?Ot=Math.floor(Oe.depth*Ye):Ot=1,Ht=0,ie=0,ue=0}$!==null?(Ft=$.x,Me=$.y,je=$.z):(Ft=0,Me=0,je=0);let Ie=wt.convert(z.format),yn=wt.convert(z.type),Pt;z.isData3DTexture?(X.setTexture3D(z,0),Pt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(X.setTexture2DArray(z,0),Pt=L.TEXTURE_2D_ARRAY):(X.setTexture2D(z,0),Pt=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let In=y.getParameter(L.UNPACK_ROW_LENGTH),xe=y.getParameter(L.UNPACK_IMAGE_HEIGHT),si=y.getParameter(L.UNPACK_SKIP_PIXELS),Ni=y.getParameter(L.UNPACK_SKIP_ROWS),Ss=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Oe.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oe.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),y.pixelStorei(L.UNPACK_SKIP_ROWS,ie),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ue);let Or=A.isDataArrayTexture||A.isData3DTexture,Ae=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Ye=O.get(A),ws=O.get(z),Ne=O.get(Ye.__renderTarget),Es=O.get(ws.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Ne.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Es.__webglFramebuffer);for(let Fr=0;Fr<Ot;Fr++)Or&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,O.get(A).__webglTexture,Y,ue+Fr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,O.get(z).__webglTexture,Ct,je+Fr)),L.blitFramebuffer(Ht,ie,Lt,At,Ft,Me,Lt,At,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||O.has(A)){let Ye=O.get(A),ws=O.get(z);y.bindFramebuffer(L.READ_FRAMEBUFFER,D),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let Ne=0;Ne<Ot;Ne++)Or?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,Y,ue+Ne):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,Y),Ae?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ws.__webglTexture,Ct,je+Ne):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ws.__webglTexture,Ct),Y!==0?L.blitFramebuffer(Ht,ie,Lt,At,Ft,Me,Lt,At,L.COLOR_BUFFER_BIT,L.NEAREST):Ae?L.copyTexSubImage3D(Pt,Ct,Ft,Me,je+Ne,Ht,ie,Lt,At):L.copyTexSubImage2D(Pt,Ct,Ft,Me,Ht,ie,Lt,At);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ae?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Pt,Ct,Ft,Me,je,Lt,At,Ot,Ie,yn,Oe.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,Ct,Ft,Me,je,Lt,At,Ot,Ie,Oe.data):L.texSubImage3D(Pt,Ct,Ft,Me,je,Lt,At,Ot,Ie,yn,Oe):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ct,Ft,Me,Lt,At,Ie,yn,Oe.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ct,Ft,Me,Oe.width,Oe.height,Ie,Oe.data):L.texSubImage2D(L.TEXTURE_2D,Ct,Ft,Me,Lt,At,Ie,yn,Oe);y.pixelStorei(L.UNPACK_ROW_LENGTH,In),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe),y.pixelStorei(L.UNPACK_SKIP_PIXELS,si),y.pixelStorei(L.UNPACK_SKIP_ROWS,Ni),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Ss),Ct===0&&z.generateMipmaps&&L.generateMipmap(Pt),y.unbindTexture()},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){q=0,J=0,j=null,y.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function On(n){let t=n|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function rn(n,t,e){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}var Ya=n=>n*n*n*(n*(n*6-15)+10),$i=(n,t,e)=>n+(t-n)*e,AS=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],CS=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Za=class{constructor(t=1){let e=On(t),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise2(t,e){let i=this.perm,s=Math.floor(t),r=Math.floor(e),o=t-s,a=e-r,l=s&255,c=r&255,h=(f,p,x,g)=>{let m=AS[i[i[f]+p]&7];return m[0]*x+m[1]*g},d=Ya(o),u=Ya(a);return $i($i(h(l,c,o,a),h(l+1,c,o-1,a),d),$i(h(l,c+1,o,a-1),h(l+1,c+1,o-1,a-1),d),u)}noise3(t,e,i){let s=this.perm,r=Math.floor(t),o=Math.floor(e),a=Math.floor(i),l=t-r,c=e-o,h=i-a,d=r&255,u=o&255,f=a&255,p=(w,R,v,S,M,C)=>{let _=CS[s[s[s[w]+R]+v]%12];return _[0]*S+_[1]*M+_[2]*C},x=Ya(l),g=Ya(c),m=Ya(h);return $i($i($i(p(d,u,f,l,c,h),p(d+1,u,f,l-1,c,h),x),$i(p(d,u+1,f,l,c-1,h),p(d+1,u+1,f,l-1,c-1,h),x),g),$i($i(p(d,u,f+1,l,c,h-1),p(d+1,u,f+1,l-1,c,h-1),x),$i(p(d,u+1,f+1,l,c-1,h-1),p(d+1,u+1,f+1,l-1,c-1,h-1),x),g),m)}fbm2(t,e,i=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise2(t*a,e*a),c+=o,o*=r,a*=s;return l/c}};var Yd={" ":["00000","00000","00000","00000","00000","00000","00000"],A:["01110","10001","10001","11111","10001","10001","10001"],B:["11110","10001","10001","11110","10001","10001","11110"],C:["01110","10001","10000","10000","10000","10001","01110"],D:["11110","10001","10001","10001","10001","10001","11110"],E:["11111","10000","10000","11110","10000","10000","11111"],F:["11111","10000","10000","11110","10000","10000","10000"],G:["01110","10001","10000","10111","10001","10001","01111"],H:["10001","10001","10001","11111","10001","10001","10001"],I:["01110","00100","00100","00100","00100","00100","01110"],J:["00111","00010","00010","00010","00010","10010","01100"],K:["10001","10010","10100","11000","10100","10010","10001"],L:["10000","10000","10000","10000","10000","10000","11111"],M:["10001","11011","10101","10101","10001","10001","10001"],N:["10001","11001","10101","10011","10001","10001","10001"],O:["01110","10001","10001","10001","10001","10001","01110"],P:["11110","10001","10001","11110","10000","10000","10000"],Q:["01110","10001","10001","10001","10101","10010","01101"],R:["11110","10001","10001","11110","10100","10010","10001"],S:["01111","10000","10000","01110","00001","00001","11110"],T:["11111","00100","00100","00100","00100","00100","00100"],U:["10001","10001","10001","10001","10001","10001","01110"],V:["10001","10001","10001","10001","10001","01010","00100"],W:["10001","10001","10001","10101","10101","11011","10001"],X:["10001","10001","01010","00100","01010","10001","10001"],Y:["10001","10001","01010","00100","00100","00100","00100"],Z:["11111","00001","00010","00100","01000","10000","11111"],0:["01110","10001","10011","10101","11001","10001","01110"],1:["00100","01100","00100","00100","00100","00100","01110"],2:["01110","10001","00001","00010","00100","01000","11111"],3:["11110","00001","00001","01110","00001","00001","11110"],4:["00010","00110","01010","10010","11111","00010","00010"],5:["11111","10000","11110","00001","00001","10001","01110"],6:["00110","01000","10000","11110","10001","10001","01110"],7:["11111","00001","00010","00100","01000","01000","01000"],8:["01110","10001","10001","01110","10001","10001","01110"],9:["01110","10001","10001","01111","00001","00010","01100"],"-":["00000","00000","00000","11111","00000","00000","00000"],".":["00000","00000","00000","00000","00000","01100","01100"],"!":["00100","00100","00100","00100","00100","00000","00100"],"&":["01100","10010","10100","01000","10101","10010","01101"],"'":["00100","00100","01000","00000","00000","00000","00000"]};function w0(n){let t=[];return[...n.toUpperCase()].forEach((e,i)=>{let s=Yd[e];s&&s.forEach((r,o)=>[...r].forEach((a,l)=>{a==="1"&&t.push([i*6+l,o])}))}),t}var Vs=class extends Error{},E0=["blocks","items","loot","recipes","goals","textures","sounds","worldgen","game","music"],T0=["tilled","planted","ate","equipped","village","talked"],A0=["noise","capped","bark","rings","planks","cells","waves","bricks","ore","stripes","blades","stalks","pixelart","image","layers","ref"],C0=/^[a-z][a-z0-9_]*$/,R0=typeof window>"u"&&typeof process<"u"&&!!process.versions?.node;async function RS(){if(globalThis.__VOXELCRAFT_CONTENT__)return structuredClone(globalThis.__VOXELCRAFT_CONTENT__);let n={},t=new URL("../data/",import.meta.url);if(R0){let e=await import("node:fs/promises"),i=await import("node:path"),{fileURLToPath:s}=await import("node:url"),r=process.env.VOXELCRAFT_DATA||s(t);for(let o of E0){let a=i.join(r,o+".json"),l;try{l=await e.readFile(a,"utf8")}catch{throw new Vs(`Cannot read ${a}`)}try{n[o]=JSON.parse(l)}catch(c){throw new Vs(`${o}.json is not valid JSON: ${c.message}`)}}return n}return await Promise.all(E0.map(async e=>{let i=await fetch(new URL(e+".json",t),{cache:"no-cache"});if(!i.ok)throw new Vs(`Cannot load data/${e}.json (HTTP ${i.status})`);let s=await i.text();try{n[e]=JSON.parse(s)}catch(r){throw new Vs(`data/${e}.json is not valid JSON: ${r.message}`)}})),n}function IS(n){let t=[],e=b=>t.push(b),i=b=>typeof b=="number"&&Number.isFinite(b),s=Array.isArray,r=n.blocks?.blocks,o=n.items?.items,a=n.items?.tiers||{},l=n.textures?.tiles||{},c=n.textures?.sprites||{},h=n.loot?.tables||{},d=n.sounds?.materials||{},u=n.recipes?.recipes,f=n.recipes?.groups||{},p=n.recipes?.stations||{},x=n.recipes?.windows||{};if(s(r)||e('blocks.json: "blocks" must be a list'),s(o)||e('items.json: "items" must be a list'),s(u)||e('recipes.json: "recipes" must be a list'),s(n.goals?.goals)||e('goals.json: "goals" must be a list'),t.length)throw new Vs(t.join(`
`));let g=new Map,m=new Map,w=new Set,R=new Set,v=(b,et,nt)=>{if(typeof b!="string"||!C0.test(b)){e(`${nt}: key "${b}" must be lowercase letters, digits and underscores, starting with a letter`);return}if(!Number.isInteger(et)||et<1){e(`${nt}: "id" must be a positive whole number`);return}g.has(b)&&e(`${nt}: key "${b}" is used twice`),m.has(et)&&e(`${nt}: id ${et} is already used by "${m.get(et)}"`),g.set(b,et),m.set(et,b)};r.forEach((b,et)=>{v(b.key,b.id,`blocks.json #${et+1} (${b.key})`),Number.isInteger(b.id)&&b.id>255&&e(`blocks.json "${b.key}": block ids must be 1-255 (they are stored in one byte per block)`),w.add(b.key)}),o.forEach((b,et)=>{v(b.key,b.id,`items.json #${et+1} (${b.key})`),R.add(b.key)});let S=(b,et)=>g.has(b)?g.get(b):(e(`${et}: unknown block/item "${b}"`),0),M=(b,et)=>w.has(b)?g.get(b):(e(`${et}: "${b}" is not a block`),0),C=Object.keys(l);C.length||e("textures.json: no tiles defined");let _=(b,et,nt)=>{if(!et||typeof et!="object")return e(`textures.json tile "${nt}": must be an object`);if(!A0.includes(et.type))return e(`textures.json tile "${nt}": unknown type "${et.type}" (use one of ${A0.join(", ")})`);let mt=(at,L)=>{l[at]||e(`textures.json tile "${nt}": ${L} "${at}" is not a tile`)};et.type==="capped"&&(mt(et.cap,"cap"),mt(et.body,"body")),et.type==="ore"&&mt(et.base,"base"),et.type==="ref"&&mt(et.tile,"tile"),et.type==="layers"&&(et.layers||[]).forEach((at,L)=>_(b,at,`${nt}.layers[${L}]`)),et.type==="pixelart"&&T(et,`tile "${nt}"`),et.type==="image"&&typeof et.src!="string"&&e(`textures.json tile "${nt}": image needs "src"`)};function T(b,et){if(!s(b.rows)||!b.rows.length)return e(`textures.json ${et}: pixelart needs "rows"`);(b.rows.length>16||b.rows.some(nt=>typeof nt!="string"||nt.length>16))&&e(`textures.json ${et}: pixelart is at most 16 rows of 16 characters`);for(let nt of b.rows)for(let mt of nt)if(mt!=="."&&!b.palette?.[mt]){e(`textures.json ${et}: character "${mt}" is not in the palette`);return}}for(let b of C)_(b,l[b],b);let I=Object.keys(x),P=r.map((b,et)=>{let nt=`blocks.json "${b.key}"`;for(let at of["top","bottom","side"])l[b.tiles?.[at]]||e(`${nt}: tiles.${at} "${b.tiles?.[at]}" is not defined in textures.json`);if((!i(b.hardness)||b.hardness<0)&&e(`${nt}: "hardness" must be a number >= 0`),b.tool!=null&&typeof b.tool!="string"&&e(`${nt}: "tool" must be a string (pickaxe, axe, shovel, ...) or omitted`),b.loot!=null&&!h[b.loot]&&e(`${nt}: loot table "${b.loot}" is not defined in loot.json`),b.shatterLoot!=null&&!h[b.shatterLoot]&&e(`${nt}: shatterLoot table "${b.shatterLoot}" is not defined in loot.json`),b.role!=null&&!["log","leaf"].includes(b.role)&&e(`${nt}: "role" must be "log" or "leaf"`),b.opens!=null&&!x[b.opens]&&e(`${nt}: opens "${b.opens}" is not a window in recipes.json`),b.model!=null){let at=b.model;at.type==="torch"?i(at.height)&&at.height>0&&at.height<=1||e(`${nt}: a torch "model" needs "height": 0-1 (and "lean": [dx, dz])`):at.type==="stairs"?["n","e","s","w"].includes(at.facing)||e(`${nt}: a stairs "model" needs "facing": n, e, s or w (the side the tall back is on)`):at.type==="door"?["x","z"].includes(at.axis)&&["bottom","top"].includes(at.half)&&typeof at.open=="boolean"||e(`${nt}: a door "model" needs "axis": x or z, "half": bottom or top and "open": true or false`):e(`${nt}: "model" type must be torch, stairs or door`)}b.model?.lean!=null&&!(s(b.model.lean)&&b.model.lean.length===2&&b.model.lean.every(Number.isInteger))&&e(`${nt}: model.lean must be [dx, dz]`),b.support!=null&&!(s(b.support)&&b.support.length===3&&b.support.every(Number.isInteger))&&e(`${nt}: "support" must be [dx, dy, dz]: where the block it hangs on is`),b.fuel!=null&&!(i(b.fuel)&&b.fuel>0)&&e(`${nt}: "fuel" must be the seconds it burns in a furnace`),b.glow!=null&&!(i(b.glow)&&b.glow>=0&&b.glow<=1)&&e(`${nt}: "glow" must be 0-1 (how much the block shines for itself, even in the dark)`);for(let at of["light","lightFilter"])b[at]!=null&&!(Number.isInteger(b[at])&&b[at]>=0&&b[at]<=15)&&e(`${nt}: "${at}" must be a whole number 0-15`);b.water&&!(Number.isInteger(b.water.level)&&b.water.level>=1&&b.water.level<=7)&&e(`${nt}: water.level must be 1-7 (7 = source)`);let mt={id:b.id,key:b.key,name:b.name??b.key,top:b.tiles?.top,bottom:b.tiles?.bottom,side:b.tiles?.side,hard:b.hardness??0,tool:b.tool??null,need:b.need??0,sound:b.sound??"default",solid:b.solid??!b.plant,opaque:b.opaque??!b.plant,creative:!!b.creative,waterLevel:b.water?b.water.level:0,role:b.role??null,opens:b.opens??null,gravity:!!b.gravity,model:b.model?{type:b.model.type,height:b.model.height,lean:b.model.lean??[0,0],facing:b.model.facing,axis:b.model.axis,half:b.model.half,open:!!b.model.open}:null,variantOf:b.variantOf?M(b.variantOf,`${nt} variantOf`):0,support:b.support??null,fuel:b.fuel??0,glow:b.glow??0,light:b.light??0,lightFilter:b.lightFilter??0,hydration:null,loot:b.loot??(h[b.key]?b.key:null),shatterLoot:b.shatterLoot??null,tillsInto:b.tillsInto?M(b.tillsInto,`${nt} tillsInto`):0,spreadsOnto:b.spreadsOnto?M(b.spreadsOnto,`${nt} spreadsOnto`):0,plant:null};if(b.hydration){let at=b.hydration;mt.hydration={wet:at.wet?M(at.wet,`${nt} hydration.wet`):0,dry:at.dry?M(at.dry,`${nt} hydration.dry`):0,decayInto:at.decay?M(at.decay.into,`${nt} hydration.decay.into`):0,decayRate:at.decay?.chancePerSecond??0},!mt.hydration.wet&&!mt.hydration.dry&&e(`${nt}: hydration needs "wet" (the damp version) or "dry" (the dry version)`)}if(b.plant){let at=b.plant;["cross","hash"].includes(at.kind)||e(`${nt}: plant.kind must be "cross" or "hash"`),(!i(at.height)||at.height<=0||at.height>1)&&e(`${nt}: plant.height must be between 0 and 1`),mt.plant={kind:at.kind==="hash"?2:1,height:at.height,growth:at.growth?{next:M(at.growth.next,`${nt} plant.growth.next`),rate:at.growth.chancePerSecond??0,soil:M(at.growth.soil,`${nt} plant.growth.soil`)}:null,stage:at.stage?{label:at.stage.label??mt.name,step:at.stage.step??1,name:at.stage.name??"",ripe:!!at.stage.ripe,crop:!!at.stage.crop}:null,grows:at.grows?{trees:s(at.grows.trees)?at.grows.trees:[],rate:at.grows.chancePerSecond??0,soil:(s(at.grows.soil)?at.grows.soil:[at.grows.soil]).map(L=>M(L,`${nt} plant.grows.soil`))}:null,spreads:at.spreads?{block:M(at.spreads.block,`${nt} plant.spreads.block`),rate:at.spreads.chancePerSecond??0,onto:M(at.spreads.onto,`${nt} plant.spreads.onto`),range:at.spreads.range??2}:null}}return mt}),U=(n.game?.equipment?.slots||[]).map(b=>b.id);U.length||e('game.json: "equipment.slots" must list the equipment slots');let B=o.map(b=>{let et=`items.json "${b.key}"`,nt=null;if(b.tool){let mt=a[b.tool.tier];mt||e(`${et}: tier "${b.tool.tier}" is not defined in items.json "tiers"`),typeof b.tool.type!="string"&&e(`${et}: tool.type is required`),nt={type:b.tool.type,tier:mt?.level??1,speed:mt?.speed??1,uses:mt?.durability??100,head:mt?.head??b.tool.tier}}return!c[b.key]&&!nt&&e(`${et}: no sprite - add "${b.key}" to textures.json "sprites"`),b.equip&&!U.includes(b.equip.slot)&&e(`${et}: equip.slot "${b.equip.slot}" is not one of the slots in game.json equipment (${U.join(", ")})`),b.equip&&![b.equip.armor??0,b.equip.slots??0].every(mt=>Number.isInteger(mt)&&mt>=0)&&e(`${et}: equip.armor and equip.slots must be whole numbers`),b.fuel!=null&&!(i(b.fuel)&&b.fuel>0)&&e(`${et}: "fuel" must be the seconds it burns in a furnace`),{id:b.id,key:b.key,name:b.name??b.key,stack:b.stack??(nt?1:64),tool:nt,food:b.food??0,fuel:b.fuel??0,creative:!!b.creative,offhand:!!b.offhand,equip:b.equip?{slot:b.equip.slot,armor:b.equip.armor??0,slots:b.equip.slots??0}:null,saturation:b.saturation??(b.food??0)*.6,places:b.places?Object.fromEntries(Object.entries(b.places).map(([mt,at])=>(["up","north","south","east","west"].includes(mt)||e(`${et}: places.${mt} must be up, north, south, east or west (the face you click)`),[mt,M(at,`${et} places.${mt}`)]))):null,door:b.door?M(b.door,`${et} door`):0,plants:b.plants?{block:M(b.plants.block,`${et} plants.block`),on:[].concat(b.plants.on).map(mt=>M(mt,`${et} plants.on`))}:null}});for(let[b,et]of Object.entries(c))R.has(b)?et.type==="pixelart"&&T(et,`sprite "${b}"`):e(`textures.json sprite "${b}" does not match any item in items.json`);for(let[b,et]of Object.entries(n.textures?.toolHeads||{}))(!et.light||!et.base||!et.dark)&&e(`textures.json toolHeads "${b}" needs light, base and dark colours`);for(let b of o)b.tool&&!n.textures?.toolHeads?.[a[b.tool.tier]?.head??b.tool.tier]&&e(`items.json "${b.key}": no toolHeads colours for head "${a[b.tool.tier]?.head??b.tool.tier}" in textures.json`);let D={};for(let[b,et]of Object.entries(h)){if(!s(et)){e(`loot.json "${b}": must be a list of entries`);continue}D[b]=et.map((nt,mt)=>{let at=`loot.json "${b}" #${mt+1}`,L=nt.chance??1;(!i(L)||L<0||L>1)&&e(`${at}: chance must be 0-1`);let _e=nt.count??1,[de,E]=s(_e)?_e:[_e,_e];return(!Number.isInteger(de)||!Number.isInteger(E)||de<0||E<de)&&e(`${at}: count must be a whole number or [min, max]`),{id:S(nt.item,at),chance:L,min:de,max:E}})}let F={};for(let[b,et]of Object.entries(f))F[b]=et.map(nt=>S(nt,`recipes.json group "${b}"`));let q={};for(let[b,et]of Object.entries(p))q[b]={label:et.label??b};let J=u.map((b,et)=>{let nt=`recipes.json #${et+1} (${b.out})`;return b.at!=null&&!q[b.at]&&e(`${nt}: station "${b.at}" is not defined in "stations"`),(!s(b.in)||!b.in.length)&&e(`${nt}: "in" needs at least one ingredient`),{out:S(b.out,nt),n:b.n??1,station:b.at??null,label:b.label??null,ins:(b.in||[]).map(([mt,at])=>((!Number.isInteger(at)||at<1)&&e(`${nt}: ingredient counts must be whole numbers >= 1`),typeof mt=="string"&&mt.startsWith("@")?F[mt.slice(1)]?[F[mt.slice(1)],at]:(e(`${nt}: unknown group "${mt}"`),[0,at]):[S(mt,nt),at]))}}),j={};for(let[b,et]of Object.entries(x)){for(let nt of et.stations||[])nt!==null&&!q[nt]&&e(`recipes.json window "${b}": station "${nt}" is not defined`);j[b]={title:et.title??b,sub:et.sub??"",stations:et.stations??[null],furnace:!!et.furnace}}let k=(n.recipes.smelting||[]).map((b,et)=>{let nt=`recipes.json smelting #${et+1} (${b.in})`,mt=b.seconds??10;return(!i(mt)||mt<=0)&&e(`${nt}: "seconds" must be more than 0`),{in:S(b.in,nt),out:S(b.out,nt),seconds:mt}}),W=new Set;for(let b of k)W.has(b.in)&&e(`recipes.json smelting: "${m.get(b.in)}" is smelted twice`),W.add(b.in);let Q=new Map;for(let b of P)b.fuel&&Q.set(b.id,b.fuel);for(let b of B)b.fuel&&Q.set(b.id,b.fuel);j.hand||e('recipes.json: a "hand" window is required (the inventory)');let Mt=n.goals.goals.map((b,et)=>{let nt=`goals.json #${et+1}`;if(typeof b.text!="string"&&e(`${nt}: "text" is required`),b.collectedAny){let mt=b.collectedAny.map(at=>S(at,nt));return{text:b.text,done:at=>mt.some(L=>at.collected.has(L))}}if(b.collected){let mt=S(b.collected,nt);return{text:b.text,done:at=>at.collected.has(mt)}}if(b.crafted){let mt=S(b.crafted,nt);return{text:b.text,done:at=>at.crafted.has(mt)}}if(b.craftedAny){let mt=b.craftedAny.map(at=>S(at,nt));return{text:b.text,done:at=>mt.some(L=>at.crafted.has(L))}}return b.flag?(T0.includes(b.flag)||e(`${nt}: flag "${b.flag}" is not one the game sets (${T0.join(", ")})`),{text:b.text,done:mt=>mt.flags.has(b.flag)}):(e(`${nt}: needs one of collected / collectedAny / crafted / craftedAny / flag`),{text:b.text,done:()=>!1})}),yt=n.worldgen||{},ot={};for(let[b,et]of Object.entries(yt.blocks||{}))b!=="fillerDepth"&&(ot[b]=M(et,`worldgen.json blocks.${b}`));let dt={...yt,ids:ot,ores:(yt.ores||[]).map((b,et)=>({...b,id:M(b.block,`worldgen.json ores[${et}]`)})),trees:{...yt.trees,variants:(yt.trees?.variants||[]).map((b,et)=>{let nt=`worldgen.json trees.variants[${et}] (${b.key})`;typeof b.key!="string"&&e(`${nt}: "key" is required`),["round","tall","cone","bush"].includes(b.shape)||e(`${nt}: shape must be round, tall, cone or bush`),(!i(b.weight)||b.weight<=0)&&e(`${nt}: weight must be more than 0`),s(b.trunk)&&b.trunk.length===2&&b.trunk.every(Number.isInteger)&&b.trunk[0]>=1&&b.trunk[1]>=b.trunk[0]||e(`${nt}: trunk must be [min, max] whole numbers`);let mt=b.heights??[0,99];return s(mt)&&mt.length===2&&mt[1]>=mt[0]||e(`${nt}: heights must be [lowest, highest] terrain height`),{key:b.key,weight:b.weight,shape:b.shape,trunk:b.trunk,heights:mt,biomes:s(b.biomes)?b.biomes:null,logId:M(b.log,`${nt} log`),leavesId:M(b.leaves,`${nt} leaves`)}})},biomes:yt.biomes&&{...yt.biomes,types:Object.fromEntries(Object.entries(yt.biomes.types||{}).filter(([b])=>!b.startsWith("_")).map(([b,et])=>[b,{...et,surfaceId:M(et.surface,`worldgen.json biomes.types.${b} surface`),fillerId:M(et.filler,`worldgen.json biomes.types.${b} filler`)}]))},groundCover:{...yt.groundCover,variants:(yt.groundCover?.variants||[]).map((b,et)=>({...b,id:M(b.block,`worldgen.json groundCover.variants[${et}]`)}))}};if(dt.trees.variants.length||e("worldgen.json: trees.variants needs at least one tree"),dt.biomes){let b=Object.keys(dt.biomes.types);for(let et of["plains","forest","hills","mountains","desert","tundra"])b.includes(et)||e(`worldgen.json biomes.types needs "${et}"`);for(let et of dt.trees.variants)for(let nt of et.biomes??[])b.includes(nt)||e(`worldgen.json tree "${et.key}": biome "${nt}" is not in biomes.types`)}let bt=new Set(dt.trees.variants.map(b=>b.key));for(let b of P)for(let et of b.plant?.grows?.trees??[])bt.has(et)||e(`blocks.json "${b.key}": plant.grows.trees "${et}" is not a tree variant in worldgen.json`);let V={...n.game};V.creativeHotbarIds=(n.game?.creativeHotbar||[]).map(b=>M(b,"game.json creativeHotbar"));for(let b of["name","tagline"]){let et=V.studio?.[b];if(typeof et!="string"||!et.trim())e(`game.json studio.${b} must be some text`);else for(let nt of et.toUpperCase())Yd[nt]||e(`game.json studio.${b}: the logo font has no "${nt}" (letters, digits, space and - . ! & ' work)`)}["shatter","land"].includes(V.treeFall?.mode)||e('game.json treeFall.mode must be "shatter" or "land"');for(let b of Object.keys(d))s(d[b])||e(`sounds.json material "${b}" must be a list of layers`);for(let b of P)b.sound!=="default"&&!d[b.sound]&&e(`blocks.json "${b.key}": sound "${b.sound}" is not defined in sounds.json (using "default" is fine)`);let Z={};for(let[b,et]of Object.entries(n.textures?.animations??{})){if(b.startsWith("_"))continue;let nt=`textures.json animations "${b}"`;l[b]||e(`${nt}: "${b}" is not a tile`),(!s(et.frames)||et.frames.length<2||et.frames[0]!==b||et.frames.some(mt=>!l[mt]))&&e(`${nt}: frames must list at least two tiles, starting with "${b}" itself`),(!i(et.fps)||et.fps<=0||et.fps>30)&&e(`${nt}: fps must be 1-30`),Z[b]={frames:et.frames,fps:et.fps}}let pt=["piano","bell","pluck"],Ut=["triangle","strings"],_t=["sine","drone"],zt=n.music??{},fe=b=>Number.isInteger(b)&&b>=24&&b<=100;(!s(zt.tracks)||zt.tracks.length<2)&&e('music.json: "tracks" must list at least two tracks');let qt=zt.gapSeconds??[5,12];s(qt)&&qt.length===2&&qt.every(i)&&qt[0]>=0&&qt[1]>=qt[0]||e('music.json: "gapSeconds" must be [min, max] seconds of silence between tracks');let Qt=new Set,ge=(s(zt.tracks)?zt.tracks:[]).map((b,et)=>{let nt=`music.json track #${et+1} (${b.key})`;(typeof b.key!="string"||!C0.test(b.key))&&e(`${nt}: "key" must be lowercase letters, digits and underscores`),Qt.has(b.key)&&e(`${nt}: key used twice`),Qt.add(b.key),typeof b.name!="string"&&e(`${nt}: "name" is required`),(!i(b.bpm)||b.bpm<30||b.bpm>160)&&e(`${nt}: bpm must be 30-160`),(!Number.isInteger(b.bars)||b.bars<4||b.bars>128)&&e(`${nt}: bars must be a whole number 4-128`);let mt=b.barsPerChord??1;(!Number.isInteger(mt)||mt<1)&&e(`${nt}: barsPerChord must be a whole number >= 1`),(!s(b.chords)||!b.chords.length)&&e(`${nt}: "chords" needs at least one chord`);for(let[L,_e]of(s(b.chords)?b.chords:[]).entries())fe(_e.root)||e(`${nt} chord #${L+1}: root must be a MIDI note 24-100`),(!s(_e.tones)||_e.tones.length<3||!_e.tones.every(fe))&&e(`${nt} chord #${L+1}: tones must be at least three MIDI notes 24-100`);b.pad!=null&&!Ut.includes(b.pad)&&e(`${nt}: pad must be one of ${Ut.join(", ")}`),b.bass!=null&&!_t.includes(b.bass)&&e(`${nt}: bass must be one of ${_t.join(", ")}`),b.lead&&!pt.includes(b.lead.voice)&&e(`${nt}: lead.voice must be one of ${pt.join(", ")}`),!b.lead&&!b.melody&&!b.arp&&e(`${nt}: needs a lead, a melody or an arp (something to play)`),b.arp&&(pt.includes(b.arp.voice)||e(`${nt}: arp.voice must be one of ${pt.join(", ")}`),(!s(b.arp.pattern)||!b.arp.pattern.length||!b.arp.pattern.every(L=>Number.isInteger(L)&&L>=0))&&e(`${nt}: arp.pattern must be a list of chord-tone numbers`),(!i(b.arp.step)||b.arp.step<=0||b.arp.step>4)&&e(`${nt}: arp.step must be 0-4 beats`)),b.melody&&!(s(b.melody)&&b.melody.every(L=>s(L)&&L.length===5&&Number.isInteger(L[0])&&L[0]>=0&&L[0]<b.bars&&i(L[1])&&L[1]>=0&&L[1]<4&&fe(L[2])&&i(L[3])&&L[3]>0&&i(L[4])))&&e(`${nt}: melody entries must be [bar, beat, midi note, beats, loudness] inside the track`);let at=b.lead?.density??[.8,.45,.3];return s(at)&&at.length===3&&at.every(L=>i(L)&&L>=0&&L<=1)||e(`${nt}: lead.density must be three chances 0-1`),{key:b.key,name:b.name,bpm:b.bpm,bars:b.bars,barsPerChord:mt,chords:b.chords??[],lead:b.lead?{voice:b.lead.voice,density:at,leap:b.lead.leap??.1,rest:b.lead.rest??0}:null,pad:b.pad??null,bass:b.bass??null,arp:b.arp??null,melody:b.melody??null}});Qt.has(zt.title)||e('music.json: "title" must name one of the tracks (the one the title screen plays)'),ge.filter(b=>b.key!==zt.title).length<2&&e("music.json: the game needs at least two tracks besides the title theme, so there is something to shuffle");let ne={gapSeconds:qt,title:zt.title,tracks:ge};if(t.length)throw new Vs(`Content data problems:
 - `+t.join(`
 - `));return{music:ne,animations:Z,smelting:k,fuelTime:Q,data:n,blocks:P,items:B,idOfKey:g,keyOfId:m,tileNames:C,tiles:l,sprites:c,loot:D,groups:F,stations:q,recipes:J,windows:j,goals:Mt,worldgen:dt,game:V,sounds:n.sounds,textures:n.textures,blockById:new Map(P.map(b=>[b.id,b])),itemById:new Map(B.map(b=>[b.id,b]))}}var I0;try{I0=IS(await RS())}catch(n){throw!R0&&typeof document<"u"&&(document.body.innerHTML=`<pre style="margin:0;padding:24px;min-height:100vh;box-sizing:border-box;background:#1b0f0f;color:#ffd6d6;font:14px/1.5 Consolas,monospace;white-space:pre-wrap"><b style="font-size:18px">VoxelCraft could not load its content files</b>

`+String(n.message).replace(/</g,"&lt;")+`

Fix the file(s) under src/data/ and reload. See src/data/README.md.</pre>`,await new Promise(()=>{})),n}var It=I0;var ft={AIR:0};for(let n of It.blocks)ft[n.key.toUpperCase()]=n.id;var Ei=It.tileNames,Ee=8,qs=Math.max(8,Math.ceil(Ei.length/Ee)),Zd=n=>Ei.indexOf(n),Be={};for(let n of It.blocks)Be[n.id]={key:n.key,name:n.name,top:n.top,bottom:n.bottom,side:n.side,hard:n.hard,sound:n.sound,tool:n.tool,need:n.need,...n.plant?{plant:n.plant.kind===2?"hash":"cross",h:n.plant.height}:{}};var Xe=256,gr=new Uint16Array(Xe*3),$e=new Uint8Array(Xe),We=new Uint8Array(Xe),ae=new Uint8Array(Xe),$s=new Uint8Array(Xe),Kt=new Uint8Array(Xe),vo=new Float32Array(Xe),Yi=new Int8Array(Xe*2),Ti=new Int8Array(Xe*3),Ka=new Uint8Array(Xe),Ws=new Float32Array(Xe),ds=new Uint8Array(Xe),Zi=new Uint8Array(Xe),Uh=new Uint8Array(Xe),Ja=new Uint8Array(Xe),bo=new Uint8Array(Xe),Ki=new Uint8Array(Xe),Kd=new Float32Array(Xe),Ai=new Uint8Array(Xe),ja=new Uint8Array(Xe),Qa=new Map,us=new Uint8Array(Xe),PS=new Uint8Array(Xe),Gs=new Map,LS=new Int8Array(Xe).fill(-1),Mo=new Map,Xs=new Map,tl={},So=new Map,Jd=[0,0,0,0,0,0,0],NS=["n","e","s","w"],P0=.40625,L0=.59375,N0=.1875;for(let n of It.blocks){if(gr[n.id*3]=Zd(n.top),gr[n.id*3+1]=Zd(n.bottom),gr[n.id*3+2]=Zd(n.side),We[n.id]=n.solid?1:0,$e[n.id]=n.opaque?1:0,n.waterLevel&&(ae[n.id]=1,$s[n.id]=n.waterLevel,n.waterLevel<7&&(Jd[n.waterLevel]=n.id)),n.plant&&(Kt[n.id]=n.plant.kind,Ws[n.id]=n.plant.height,vo[n.id]=.4,We[n.id]=0,$e[n.id]=0),n.model?.type==="torch"&&(Kt[n.id]=3,Ws[n.id]=n.model.height,vo[n.id]=.16,We[n.id]=0,$e[n.id]=0,Yi[n.id*2]=n.model.lean[0],Yi[n.id*2+1]=n.model.lean[1]),PS[n.id]=n.variantOf||n.id,n.model?.type==="stairs"){us[n.id]=1,We[n.id]=2;let t=NS.indexOf(n.model.facing);LS[n.id]=t;let e=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]][t];Mo.set(n.id,[[0,0,0,1,.5,1],e]);let i=n.variantOf||n.id;Gs.has(i)||Gs.set(i,[0,0,0,0]),Gs.get(i)[t]=n.id}if(n.model?.type==="door"){us[n.id]=2;let{axis:t,half:e,open:i}=n.model;Mo.set(n.id,[i?t==="x"?[0,0,0,N0,1,1]:[0,0,0,1,1,N0]:t==="x"?[0,0,P0,1,1,L0]:[P0,0,0,L0,1,1]]),Xs.set(n.id,{top:e==="top",open:!!i,axis:t,partner:0,toggled:0})}n.support&&(Ka[n.id]=1,Ti.set(n.support,n.id*3)),n.role==="log"&&(ds[n.id]=1),n.role==="leaf"&&(Zi[n.id]=1),n.tillsInto&&(Uh[n.id]=n.tillsInto),n.spreadsOnto&&(Ja[n.id]=n.spreadsOnto),n.opens&&So.set(n.id,n.opens),n.gravity&&(bo[n.id]=1),Ki[n.id]=n.light,Kd[n.id]=n.glow,Ai[n.id]=n.lightFilter,n.hydration&&(Qa.set(n.id,n.hydration),ja[n.id]=1)}{let n=(t,e,i)=>{for(let[s,r]of Xs)if(r.axis===t&&r.top===e&&r.open===i)return s;return 0};for(let[t,e]of Xs)e.partner=n(e.axis,!e.top,e.open),e.toggled=n(e.axis,e.top,!e.open);for(let t of["x","z"])tl[t]=[n(t,!1,!1),n(t,!0,!1)]}var Oh=[...It.blocks.filter(n=>n.creative).map(n=>n.id),...It.items.filter(n=>n.creative).map(n=>n.id)];var mn=(n,t)=>(n+32768)*65536+(t+32768),re=(n,t,e)=>(t*16+e)*16+n;var jn=0,Ys=1,el=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,-1,0],[0,1,0]],jd=It.game.lighting,Gn=jd.skyLevel,Fh=jd.minBrightness;function xr(n){let t=Math.max(0,Math.min(Gn,n))/Gn;return Math.pow(t,jd.gamma)}function U0(n){return Fh+(1-Fh)*xr(n)}function nl(n){return Math.pow(Math.max(0,Math.min(Gn,n))/Gn,1.25)}var Bh=32768,Fn=(n,t,e)=>((n+Bh)*65536+(e+Bh))*64+t;function D0(n,t){t[1]=n%64;let e=Math.floor(n/64);t[0]=Math.floor(e/65536)-Bh,t[2]=e%65536-Bh}var kh=class{constructor(t){this.world=t,this.tmp=[0,0,0],this.carried=null,t.addChangeListener((e,i,s,r,o)=>this.onBlockChanged(e,i,s,r,o))}get hasEmitters(){return Ki.some(t=>t>0)}emitAt(t,e,i,s){let r=this.carried;return Math.max(Ki[s],r&&r.x===t&&r.y===e&&r.z===i?r.level:0)}setCarried(t,e,i,s){let r=this.carried;r&&s>0&&r.x===t&&r.y===e&&r.z===i&&r.level===s||!r&&!(s>0)||(this.carried=null,r&&this.refreshBlockLight(r.x,r.y,r.z),s>0&&this.world.getChunk(t>>4,i>>4)&&e>=0&&e<64&&!$e[this.world.getBlock(t,e,i)]&&(this.carried={x:t,y:e,z:i,level:s},this.refreshBlockLight(t,e,i)))}refreshBlockLight(t,e,i){let s=this.world.getBlock(t,e,i),r=[],o=[],a=this.get(t,e,i,Ys);a>0&&(r.push([Fn(t,e,i),a]),this.set(t,e,i,Ys,0));let l=this.emitAt(t,e,i,s);l>0&&(this.set(t,e,i,Ys,l),o.push(Fn(t,e,i)));for(let[c,h,d]of el)this.get(t+c,e+h,i+d,Ys)>0&&o.push(Fn(t+c,e+h,i+d));o.push(...this.unspread(Ys,r)),this.propagate(Ys,o)}get(t,e,i,s){if(e<0||e>=64)return-1;let r=this.world.getChunk(t>>4,i>>4);if(!r)return-1;let o=r.light[re(t&15,e,i&15)];return s===jn?o>>4:o&15}levelAt(t,e,i){if(e>=64)return Gn;if(e<0)return 0;let s=this.world.getChunk(t>>4,i>>4);if(!s)return Gn;let r=s.light[re(t&15,e,i&15)];return Math.max(r>>4,r&15)}set(t,e,i,s,r){let o=this.world.getChunk(t>>4,i>>4),a=re(t&15,e,i&15),l=o.light[a];o.light[a]=s===jn?r<<4|l&15:l&240|r,o.dirty=!0;let c=t&15,h=i&15,d=t>>4,u=i>>4,f=(p,x)=>{let g=this.world.getChunk(p,x);g&&(g.dirty=!0)};c===0?f(d-1,u):c===15&&f(d+1,u),h===0?f(d,u-1):h===15&&f(d,u+1)}propagate(t,e){let i=this.world,s=this.tmp;for(let r=0;r<e.length;r++){D0(e[r],s);let o=s[0],a=s[1],l=s[2],c=this.get(o,a,l,t);if(!(c<=1))for(let[h,d,u]of el){let f=o+h,p=a+d,x=l+u;if(p<0||p>=64)continue;let g=i.getChunk(f>>4,x>>4);if(!g)continue;let m=g.data[re(f&15,p,x&15)];if($e[m])continue;let w=t===jn&&d===-1&&c===Gn&&Ai[m]===0?Gn:c-Math.max(1,Ai[m]);w>this.get(f,p,x,t)&&(this.set(f,p,x,t,w),e.push(Fn(f,p,x)))}}}unspread(t,e){let i=this.world,s=this.tmp,r=[];for(let o=0;o<e.length;o++){let[a,l]=e[o];D0(a,s);let c=s[0],h=s[1],d=s[2];for(let[u,f,p]of el){let x=c+u,g=h+f,m=d+p,w=this.get(x,g,m,t);if(w<=0)continue;let R=i.getBlock(x,g,m);if(w<l||t===jn&&f===-1&&l===Gn&&w===Gn&&Ai[R]===0){if(t===Ys&&this.emitAt(x,g,m,R)>0){this.set(x,g,m,t,this.emitAt(x,g,m,R)),r.push(Fn(x,g,m));continue}this.set(x,g,m,t,0),e.push([Fn(x,g,m),w])}else r.push(Fn(x,g,m))}}return r}directColumn(t,e,i=-1,s=0){let r=new Int8Array(64),o=this.world.getChunk(t>>4,e>>4),a=Gn;for(let l=63;l>=0;l--){let c=l===i?s:o.data[re(t&15,l,e&15)];$e[c]?a=0:a=Math.max(0,a-Ai[c]),r[l]=a}return r}initChunk(t,{clear:e=!0}={}){let i=this.world,s=t.data,r=t.cx*16,o=t.cz*16;e&&t.light.fill(0);let a=this.hasEmitters;for(let u=0;u<16;u++)for(let f=0;f<16;f++){let p=Gn;for(let x=63;x>=0;x--){let g=re(f,x,u),m=s[g];$e[m]?p=0:p=Math.max(0,p-Ai[m]);let w=p<<4;a&&Ki[m]>0&&(w|=Ki[m]),t.light[g]=w}}let l=this.carried;if(l&&l.x>=r&&l.x<r+16&&l.z>=o&&l.z<o+16&&!$e[s[re(l.x-r,l.y,l.z-o)]]){let u=re(l.x-r,l.y,l.z-o),f=t.light[u];(f&15)<l.level&&(t.light[u]=f&240|l.level)}let c=[],h=[],d=(u,f)=>u===0||f===0||u===15||f===15;for(let u=0;u<64;u++)for(let f=0;f<16;f++)for(let p=0;p<16;p++){let x=t.light[re(p,u,f)],g=x>>4,m=x&15;if(g<=1&&m<=1)continue;let w=d(p,f);if(!w)for(let[R,v,S]of el){let M=u+v;if(M<0||M>=64)continue;let C=re(p+R,M,f+S);if($e[s[C]])continue;let _=t.light[C];if(_>>4<g-1||(_&15)<m-1){w=!0;break}}w&&(g>1&&c.push(Fn(r+p,u,o+f)),m>1&&h.push(Fn(r+p,u,o+f)))}for(let[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){let p=i.getChunk(t.cx+u,t.cz+f);if(p)for(let x=0;x<64;x++)for(let g=0;g<16;g++){let m=u===1?0:u===-1?15:g,w=f===1?0:f===-1?15:g,R=p.light[re(m,x,w)];R>>4>1&&c.push(Fn(p.cx*16+m,x,p.cz*16+w)),(R&15)>1&&h.push(Fn(p.cx*16+m,x,p.cz*16+w))}}this.propagate(jn,c),this.propagate(Ys,h)}rebuildAll(){let t=[...this.world.chunks.values()];for(let e of t)e.light.fill(0);for(let e of t)this.initChunk(e,{clear:!1});for(let e of t)e.dirty=!0}onBlockChanged(t,e,i,s,r){if(!this.world.getChunk(t>>4,i>>4)||e<0||e>=64||!($e[s]!==$e[r]||Ai[s]!==Ai[r]||Ki[s]!==Ki[r]))return;let l=this.directColumn(t,i,e,s),c=this.directColumn(t,i),h=[],d=[];for(let f=0;f<64;f++){if(c[f]===l[f])continue;let p=this.get(t,f,i,jn);c[f]<l[f]?p>0&&(h.push([Fn(t,f,i),p]),this.set(t,f,i,jn,0)):(c[f]>p&&this.set(t,f,i,jn,c[f]),d.push(Fn(t,f,i)))}let u=this.get(t,e,i,jn);u>0&&($e[r]||Ai[r]>Ai[s])&&c[e]===l[e]&&(h.push([Fn(t,e,i),u]),this.set(t,e,i,jn,0));for(let[f,p,x]of el)this.get(t+f,e+p,i+x,jn)>0&&d.push(Fn(t+f,e+p,i+x));d.push(...this.unspread(jn,h)),this.propagate(jn,d),this.hasEmitters&&this.refreshBlockLight(t,e,i)}};var DS=It.worldgen.trees,Qd=DS.variants,F0=n=>Qd.find(t=>t.key===n),O0=F0("oak")??Qd[0];function B0(n,t,e,i,s=!1,r=null){if(s)return O0;let o=Qd.filter(l=>i>=l.heights[0]&&i<=l.heights[1]&&(!r||!l.biomes||l.biomes.includes(r)));if(!o.length)return O0;let a=rn(t,e,n+13)*o.reduce((l,c)=>l+c.weight,0);for(let l of o){if(a<l.weight)return l;a-=l.weight}return o[o.length-1]}var US=(n,t,e,i)=>n.trunk[0]+Math.floor(rn(e,i,t+7)*(n.trunk[1]-n.trunk[0]+1));function wo(n,t,e,i,s,r,o,a){for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++)Math.abs(c)===s&&Math.abs(l)===s&&s>0&&(s===1||a==="always"||rn(t+c,i+l+e,o)<.5)||n.push({x:t+c,y:e,z:i+l,id:r,leaf:!0})}function tf(n,t,e,i,s){let r=US(n,t,e,s),o=i+r,a=[];if(n.shape==="round")for(let l=o-2;l<=o+1;l++)wo(a,e,l,s,l>=o?1:2,n.leavesId,t,"random");else if(n.shape==="tall")[2,3,3,2,1,1].forEach((c,h)=>wo(a,e,o-3+h,s,c,n.leavesId,t,c>=3?"always":"random"));else if(n.shape==="cone"){let l=[0,1,1,2,2,3,3],c=Math.min(l.length,r-1);for(let h=0;h<c;h++)wo(a,e,o+1-h,s,l[h],n.leavesId,t,"always")}else wo(a,e,o,s,1,n.leavesId,t,"random"),wo(a,e,o+1,s,1,n.leavesId,t,"random"),wo(a,e,o-1,s,2,n.leavesId,t,"always");for(let l=i+1;l<=o;l++)a.push({x:e,y:l,z:s,id:n.logId,leaf:!1});return a}function k0(n,t,e,i,s,r=1,o=Math.random){let a=F0(s[Math.floor(o()*s.length)]);if(!a)return!1;let l=tf(a,r+Math.floor(o()*1e3),t,e-1,i),c=h=>h===ft.AIR||Kt[h]>0||Zi[h]===1;for(let h of l)if(!(h.x===t&&h.y===e&&h.z===i)&&!c(n.getBlock(h.x,h.y,h.z)))return!1;for(let h of l)n.setBlock(h.x,h.y,h.z,h.id);return!0}var G0=It.worldgen,Bn=G0.villages,W0=G0.seaLevel,OS=0,z0=["Oak","Birch","Stone","River","Green","Mill","Wheat","Amber","Clay","Fern","High","Low","Sun","Moss","Elder","Red","Pine","Brook"],H0=["ford","ton","wick","field","haven","stead","brook","hollow","vale","bridge","meadow","crest","dale","mere"],V0=()=>Gs.get(ft.PLANKS_STAIRS);function zh(n,t,e,i){let s=e-1,r=t-1>>1;for(let l=0;l<t;l++)for(let c=0;c<e;c++)n.put(l,0,c,l===0||c===0||l===t-1||c===e-1?ft.COBBLE:ft.PLANKS);for(let l=1;l<=3;l++)for(let c=0;c<t;c++)for(let h=0;h<e;h++){if(!(c===0||h===0||c===t-1||h===e-1))continue;let d=(c===0||c===t-1)&&(h===0||h===e-1);n.put(c,l,h,d?ft.LOG:ft.PLANKS)}let o=(l,c)=>n.put(l,2,c,ft.GLASS);o(1,s),o(t-2,s),o(r,0),o(0,e>>1),o(t-1,e>>1),t>=9&&(o(2,0),o(t-3,0)),n.door(r,1,s);let a=e-1>>1;for(let l=0;l<=a;l++){let c=4+l;for(let h=-1;h<=t;h++)if(n.stairs(h,c,-1+l,V0(),2),n.stairs(h,c,e-l,V0(),0),l===a)for(let d=l;d<=e-1-l;d++)n.put(h,c,d,ft.PLANKS);if(l>=1)for(let h=l;h<=e-1-l;h++)n.put(0,c,h,ft.PLANKS),n.put(t-1,c,h,ft.PLANKS)}for(let l=0;l<t;l++)for(let c=0;c<e;c++)n.put(l,4,c,ft.PLANKS);n.put(1,1,1,i==="hall"||i==="long"?ft.FURNACE:ft.CRAFTING),n.put(1,2,1,ft.TORCH_FLOOR),i==="hall"&&(n.put(t-2,1,1,ft.CRAFTING),n.put(t-2,2,1,ft.TORCH_FLOOR))}function FS(n,t,e){let i=e>>1,s=[ft.WHEAT_L,ft.WHEAT_L,ft.WHEAT_M,ft.WHEAT_L,ft.WHEAT_S];for(let r=0;r<t;r++)for(let o=0;o<e;o++){if(o===i){n.put(r,0,o,ft.WATER);continue}if(r===0||r===t-1){n.put(r,0,o,ft.PLANKS);continue}n.put(r,0,o,ft.FARMLAND_WET),n.put(r,1,o,s[(r*7+o*3)%s.length])}for(let[r,o]of[[0,0],[t-1,0],[0,e-1],[t-1,e-1]])n.put(r,1,o,ft.LOG);n.put(0,2,e-1,ft.TORCH_FLOOR)}var Eo={hut:{w:5,d:5,weight:3,build:n=>zh(n,5,5,"hut")},house:{w:7,d:5,weight:4,build:n=>zh(n,7,5,"house")},long:{w:9,d:5,weight:2,build:n=>zh(n,9,5,"long")},hall:{w:9,d:7,weight:1.5,build:n=>zh(n,9,7,"hall")},farm:{w:9,d:7,weight:2.5,build:n=>FS(n,9,7)}},ef=class{constructor(){this.blocks=new Map,this.columns=new Map,this.buildings=[],this.spawns=[],this.doors=[]}put(t,e,i,s){this.blocks.set(t+","+e+","+i,s)}ground(t,e,i,s){this.columns.set(t+","+e,{top:i,under:s})}has(t,e){return this.columns.has(t+","+e)}};function BS(n,t,e,i,s,r,o){let a=(c,h)=>{switch(o){case 0:return[e+c,i+h];case 2:return[e+(s-1-c),i+(r-1-h)];case 1:return[e+h,i+(s-1-c)];default:return[e+(r-1-h),i+c]}},l=(c,h,d,u)=>{let[f,p]=a(c,d);n.put(f,t+h,p,u)};return{toWorld:a,put:l,stairs(c,h,d,u,f){l(c,h,d,u[(f+[0,3,2,1][o])%4])},door(c,h,d){let[u,f]=tl[o%2===0?"x":"z"];l(c,h,d,u),l(c,h+1,d,f);let[p,x]=a(c,d);n.doors.push({x:p,y:t+h,z:x})}}}var kS=(n,t,e)=>e%2===0?[n,t]:[t,n];function zS(n,t,e,i,s,r){let o=new ef,a=r==="desert"?ft.SAND:ft.GRASS,l=r==="desert"?ft.SAND:ft.DIRT,c=(v,S)=>{let M=n.heightAt(v,S);return M>W0+1&&Math.abs(M-i)<=Bn.maxStep},h=(v,S)=>!o.has(v,S),d=Bn.armLength;for(let v=-1;v<=1;v++)for(let S=-1;S<=1;S++)o.ground(t+v,e+S,ft.COBBLE,ft.COBBLE),o.put(t+v,i,e+S,ft.COBBLE),(v||S)&&o.put(t+v,i+1,e+S,ft.COBBLE);o.put(t,i,e,ft.WATER),o.put(t,i-1,e,ft.WATER);for(let[v,S]of[[-1,-1],[1,-1],[-1,1],[1,1]])for(let M=2;M<=3;M++)o.put(t+v,i+M,e+S,ft.LOG);for(let v=-1;v<=1;v++)for(let S=-1;S<=1;S++)o.put(t+v,i+4,e+S,ft.PLANKS);let u={east:0,west:0,south:0,north:0},f=(v,S)=>{h(v,S)&&o.ground(v,S,ft.PATH,l)};for(let[v,S,M]of[["east",1,0],["west",-1,0],["south",0,1],["north",0,-1]])for(let C=2;C<=d;C++){let _=t+S*C,T=e+M*C,I=S?[[0,-1],[0,0],[0,1]]:[[-1,0],[0,0],[1,0]];if(!I.every(([P,U])=>c(_+P,T+U)))break;for(let[P,U]of I)f(_+P,T+U);u[v]=C}for(let[v,S]of[[-1,0],[1,0],[0,-1],[0,1]])for(let M=2;M<=2;M++)f(t+v*M,e+S*M);let p=Object.keys(Eo),x=p.reduce((v,S)=>v+Eo[S].weight,0),g=()=>{let v=s()*x;for(let S of p)if(v-=Eo[S].weight,v<=0)return S;return p[0]},m=[8,19,30],w=[{arm:"east",ax:1,az:0,sx:0,sz:-1,front:0},{arm:"east",ax:1,az:0,sx:0,sz:1,front:2},{arm:"west",ax:-1,az:0,sx:0,sz:-1,front:0},{arm:"west",ax:-1,az:0,sx:0,sz:1,front:2},{arm:"south",ax:0,az:1,sx:1,sz:0,front:3},{arm:"south",ax:0,az:1,sx:-1,sz:0,front:1},{arm:"north",ax:0,az:-1,sx:1,sz:0,front:3},{arm:"north",ax:0,az:-1,sx:-1,sz:0,front:1}],R=0;for(let v of w)for(let S of m){if(S+4>u[v.arm]||s()<Bn.emptyLot)continue;let M=Eo[g()],[C,_]=kS(M.w,M.d,v.front),T=t+v.ax*S,I=e+v.az*S,P,U;v.sx===0?(P=T-(C>>1),U=v.sz<0?I-3-(_-1):I+3):(U=I-(_>>1),P=v.sx<0?T-3-(C-1):T+3);let B=!0;for(let j=P-1;j<=P+C&&B;j++)for(let k=U-1;k<=U+_;k++)if(!c(j,k)||!h(j,k)){B=!1;break}if(!B)continue;for(let j=P-1;j<=P+C;j++)for(let k=U-1;k<=U+_;k++)o.ground(j,k,a,l);let D=BS(o,i,P,U,M.w,M.d,v.front);M.build(D);let F=[];for(let j=0;j<M.w;j++){let[k,W]=D.toWorld(j,M.d);F.push([k,W])}for(let[j,k]of F)c(j,k)&&o.ground(j,k,ft.PATH,l);o.buildings.push({kind:Object.keys(Eo).find(j=>Eo[j]===M),x0:P,z0:U,w:C,d:_,front:v.front});let[q,J]=D.toWorld(M.w-1>>1,M.d+1);o.spawns.push({x:q+.5,y:i+1,z:J+.5}),R++}for(let[v,S,M]of[["east",1,0],["west",-1,0],["south",0,1],["north",0,-1]])for(let C of[13,24])if(!(C+2>u[v]))for(let _ of[-1,1]){let T=t+S*C+(S?0:_*2),I=e+M*C+(M?0:_*2);!h(T,I)&&o.columns.get(T+","+I)?.top!==ft.PATH||(o.ground(T,I,a,l),o.put(T,i+1,I,ft.LOG),o.put(T,i+2,I,ft.LOG),o.put(T,i+3,I,ft.TORCH_FLOOR))}for(let v=0;v<4;v++)o.spawns.push({x:t+.5+[3,-3,0,0][v],y:i+1,z:e+.5+[0,0,3,-3][v]});return o.placed=R,o}function HS(n,t,e,i){let s=Bn.regionSize,r=Bn.flatRadius,o=Bn.armLength+10;for(let a=0;a<Bn.attempts;a++){let l=t*s+o+Math.floor(i()*(s-2*o)),c=e*s+o+Math.floor(i()*(s-2*o)),h=n.biomeAt(l,c);if(!Bn.biomes.includes(h))continue;let d=64,u=0,f=!1,p=[];for(let x=-r;x<=r&&!f;x+=4)for(let g=-r;g<=r;g+=4){let m=n.heightAt(l+x,c+g);if(m<=W0+Bn.minAboveSea||!Bn.biomes.includes(n.biomeAt(l+x,c+g))){f=!0;break}d=Math.min(d,m),u=Math.max(u,m),p.push(m)}if(!(f||u-d>Bn.flatRange))return p.sort((x,g)=>x-g),{cx:l,cz:c,y0:p[p.length>>1],biome:h}}return null}function VS(n,t,e){if(n.terrain<3)return null;let i=n.villageCache??=new Map,s=t+","+e;if(i.has(s))return i.get(s);let r=null,o=On(rn(t,e,n.seed+7919)*4294967296|0);if(o()<Bn.chance){let a=HS(n,t,e,o);if(a){let l=zS(n,a.cx,a.cz,a.y0,o,a.biome);l.placed>=Bn.minBuildings&&(r=GS(l,a,t,e,o))}}return i.set(s,r),r}function GS(n,t,e,i,s){let r=new Map,o=(u,f)=>{let p=mn(u>>4,f>>4),x=r.get(p);return x||r.set(p,x={columns:[],blocks:[]}),x},a=1/0,l=-1/0,c=1/0,h=-1/0;for(let[u,f]of n.columns){let[p,x]=u.split(",").map(Number);o(p,x).columns.push({x:p,z:x,top:f.top,under:f.under}),a=Math.min(a,p),l=Math.max(l,p),c=Math.min(c,x),h=Math.max(h,x)}for(let[u,f]of n.blocks){let[p,x,g]=u.split(",").map(Number);o(p,g).blocks.push({x:p,y:x,z:g,id:f}),a=Math.min(a,p),l=Math.max(l,p),c=Math.min(c,g),h=Math.max(h,g)}let d=z0[Math.floor(s()*z0.length)]+H0[Math.floor(s()*H0.length)];return{key:e+","+i,name:d,cx:t.cx,cz:t.cz,y0:t.y0,biome:t.biome,bounds:{x0:a,x1:l,z0:c,z1:h},byChunk:r,buildings:n.buildings,spawns:n.spawns,doors:n.doors}}function To(n,t,e,i,s,r=0){let o=Bn.regionSize,a=[],l=Bn.armLength+14;for(let c=Math.floor((e-l)/o);c<=Math.floor((s+l)/o);c++)for(let h=Math.floor((t-l)/o);h<=Math.floor((i+l)/o);h++){let d=VS(n,h,c);d&&d.bounds.x1+r>=t&&d.bounds.x0-r<=i&&d.bounds.z1+r>=e&&d.bounds.z0-r<=s&&a.push(d)}return a}var Hh=(n,t,e,i=0)=>To(n,t,e,t,e,i).length>0;function X0(n,t){let e=mn(t.cx,t.cz),i=t.cx*16,s=t.cz*16,r=t.data;for(let o of To(n,i,s,i+15,s+15)){let a=o.byChunk.get(e);if(a){for(let l of a.columns){let c=l.x-i,h=l.z-s;for(let d=o.y0+1;d<Math.min(64,o.y0+24);d++)r[re(c,d,h)]=OS;r[re(c,o.y0,h)]=l.top;for(let d=o.y0-1;d>=Math.max(0,o.y0-3);d--)r[re(c,d,h)]=l.under}for(let l of a.blocks)r[re(l.x-i,l.y,l.z-s)]=l.id}}}var nf=It.game.tilling,le=It.worldgen,Qn=le.ids;var wn=le.seaLevel,Vh=le.snowLine,sf=(n,t,e)=>Math.max(t,Math.min(e,n)),q0=(n,t,e)=>n+(t-n)*e,Ji=(n,t,e)=>{let i=sf((e-n)/(t-n),0,1);return i*i*(3-2*i)},rf=class{constructor(t,e){this.cx=t,this.cz=e,this.data=new Uint8Array(1024*16),this.dirty=!0,this.meshes=null,this.plants=new Set,this.hydrating=new Set,this.version=0,this.light=new Uint8Array(1024*16)}},Ao=class{constructor(t,{terrain:e=3}={}){this.seed=t,this.terrain=e,this.noise=new Za(t),this.noiseB=new Za(t^1540483477),this.chunks=new Map,this.edits=new Map,this.legacyCaves=new Set,this.editsDirty=!1,this.listeners=[],this.lighting=new kh(this)}climate(t,e){let i=le.biomes.climateScale;return{temp:this.noiseB.fbm2(t*i+900,e*i-400,2),wet:this.noiseB.fbm2(t*i-700,e*i+250,2),rel:this.noise.fbm2(t*i*1.15+1300,e*i*1.15-800,2)}}biomeAt(t,e){return this.terrain<2?null:this.biomeOf(this.climate(t,e))}biomeOf(t){let e=le.biomes.select;return t.rel>e.mountainRel?"mountains":t.temp>e.hotTemp&&t.wet<e.dryWet?"desert":t.temp<e.coldTemp?"tundra":t.rel>e.hillsRel?"hills":t.wet>e.forestWet?"forest":"plains"}heightBiomes(t,e){let i=this.noise,s=le.terrain,r=le.biomes.select,o=this.climate(t,e),a=i.fbm2(t*s.continentScale,e*s.continentScale,3),l=i.fbm2(t*s.hillScale+100,e*s.hillScale+100,4),c=1-Math.abs(i.noise2(t*s.ridgeScale-50,e*s.ridgeScale-50)),h=r.blend,d=Ji(r.hillsRel-h,r.hillsRel+h,o.rel),u=Ji(r.mountainRel-h,r.mountainRel+h*1.2,o.rel),f=Ji(r.hotTemp-h*.5,r.hotTemp+h,o.temp)*(1-Ji(r.dryWet-h,r.dryWet+h*.5,o.wet))*(1-u),p=a>0?a*q0(s.flatContinent,1,Math.max(d*.7,u)):a,x=wn+s.baseAboveSea+p*s.continentHeight;return x+=l*q0(s.plainsHills,s.rollingHills,d)*(1-.45*f),x+=f*(i.noise2(t*s.duneScale+40,e*s.duneScale-90)*.5+.5)*s.duneHeight,x+=u*s.mountainUplift+Math.pow(c,2.4)*u*s.mountainHeight,this.carveRivers(t,e,x)}carveRivers(t,e,i){let s=this.noise,r=le.rivers,o=t+r.warp*s.noise2(t*.02+11,e*.02+7),a=e+r.warp*s.noise2(t*.02-31,e*.02+53),l=Math.abs(this.noiseB.noise2(o*r.scale+300,a*r.scale-120)),c=1-Ji(wn+r.lowlandFrom,wn+r.lowlandTo,i),h=(1-Ji(r.coreWidth,r.bankWidth,l))*c,d=wn-r.bedBelowSea;return h>0&&i>d&&(i-=(i-d)*h),Math.floor(sf(i,3,58))}heightAt(t,e){if(this.terrain>=2)return this.heightBiomes(t,e);let i=this.noise,s=le.terrain,r=i.fbm2(t*s.continentScale,e*s.continentScale,3),o=i.fbm2(t*s.hillScale+100,e*s.hillScale+100,4),a=1-Math.abs(i.noise2(t*s.ridgeScale-50,e*s.ridgeScale-50)),l=Ji(.08,.55,r),c=wn+s.baseAboveSea+r*s.continentHeight+o*s.hillHeight;c+=Math.pow(a,3)*l*s.ridgeHeight;let h=le.rivers,d=t+h.warp*i.noise2(t*.02+11,e*.02+7),u=e+h.warp*i.noise2(t*.02-31,e*.02+53),f=Math.abs(this.noiseB.noise2(d*h.scale+300,u*h.scale-120)),p=1-Ji(wn+h.lowlandFrom,wn+h.lowlandTo,c),x=(1-Ji(h.coreWidth,h.bankWidth,f))*p,g=wn-h.bedBelowSea;return x>0&&c>g&&(c-=(c-g)*x),Math.floor(sf(c,3,58))}forestDensity(t,e,i=null){let s=this.noiseB.fbm2(t*.02,e*.02,2),r=i&&le.biomes.types[i],o=Math.max(Ji(0,.45,s),r?.denseMin??0);return(le.trees.baseDensity+le.trees.forestDensity*o)*(r?.trees??1)}isCavern(t,e,i){let s=le.caves.caverns;if(!s||e<s.minY||e>s.maxY)return!1;let[r,o,a]=s.scale;return this.noiseB.noise3(t*r+211,e*o+57,i*a-93)>s.threshold}isEntrance(t,e){let i=le.caves.entrances;return!!i&&this.noiseB.noise3(t*i.scale+500,.5,e*i.scale-500)>i.threshold}isCave(t,e,i){let s=this.noiseB,[r,o,a]=le.caves.scale,l=le.caves.threshold;return Math.abs(s.noise3(t*r,e*o,i*a))>l?!1:Math.abs(s.noise3(t*r+77,e*o+31,i*a+13))<l}oreAt(t,e,i){let s=this.noiseB;for(let r of le.ores)if(!(e<r.minY||e>=r.maxY)&&s.noise3(t*r.scale+r.offset[0],e*r.scale+r.offset[1],i*r.scale+r.offset[2])>r.threshold)return r.id;return Qn.stone}hasTree(t,e){let i=rn(t,e,this.seed);if(i>=le.trees.baseDensity+le.trees.forestDensity||i>=this.forestDensity(t,e,this.biomeAt(t,e))||this.terrain>=3&&Hh(this,t,e,5))return!1;let s=this.heightAt(t,e);return s>=wn+le.trees.minAboveSea&&s<Vh-le.trees.belowSnowLine}treesNear(t,e,i){let s=0;for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)this.hasTree(t+o,e+r)&&s++;return s}generateChunk(t,e){let i=new rf(t,e),s=i.data,r=!this.legacyCaves.has(mn(t,e)),o=t*16,a=e*16;for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=o+c,d=a+l,u=this.heightAt(h,d),f=u<=wn+le.beachAboveSea,p=u>=Vh,x=le.biomes?.types[this.biomeAt(h,d)],g=x&&x.rockFrom!=null&&u>=x.rockFrom,m=f?Qn.beach:p?Qn.snowSurface:g?Qn.stone:x?x.surfaceId:Qn.surface,w=f?Qn.beachFiller:p?Qn.snowFiller:g?Qn.stone:x?x.fillerId:Qn.filler,R=x&&!f&&!p?x.fillerDepth:le.blocks.fillerDepth,v=le.caves,S=r&&this.isEntrance(h,d);for(let M=0;M<=u;M++){let C=Qn.stone;M===u?C=m:M>=u-R&&(C=w),M>=v.minY&&(M<u-v.surfaceDepth||u>wn+1&&M<=u&&S?this.isCave(h,M,d):!1)||r&&M<u-(v.caverns?.surfaceDepth??6)&&this.isCavern(h,M,d)?C=ft.AIR:C===Qn.stone&&(C=this.oreAt(h,M,d)),s[re(c,M,l)]=C}for(let M=u+1;M<=wn;M++)s[re(c,M,l)]=Qn.sea;if(m===Qn.surface&&u+1<64&&s[re(c,u,l)]!==ft.AIR&&rn(h,d,this.seed+97)<le.groundCover.chance){let M=rn(h,d,this.seed+131),C=le.groundCover.variants.reduce((T,I)=>T+I.weight,0),_=le.groundCover.variants[le.groundCover.variants.length-1].id;for(let T of le.groundCover.variants){if(M<T.weight/C){_=T.id;break}M-=T.weight/C}s[re(c,u+1,l)]=_}}this.growTrees(i),this.terrain>=3&&X0(this,i),this.applyEdits(i);for(let l=0;l<s.length;l++)Kt[s[l]]&&i.plants.add(l),ja[s[l]]&&i.hydrating.add(l);return this.chunks.set(mn(t,e),i),this.lighting.initChunk(i),i}growTrees(t){let e=t.cx*16,i=t.cz*16,s=t.data,r=(a,l,c,h,d)=>{let u=a-e,f=c-i;if(u<0||u>=16||f<0||f>=16||l<0||l>=64)return;let p=re(u,l,f);d&&s[p]!==ft.AIR||(s[p]=h)},o=this.legacyCaves.has(mn(t.cx,t.cz));for(let a=i-2;a<i+16+2;a++)for(let l=e-2;l<e+16+2;l++){let c=rn(l,a,this.seed);if(c>=le.trees.baseDensity+le.trees.forestDensity)continue;let h=this.biomeAt(l,a);if(c>=this.forestDensity(l,a,h)||this.terrain>=3&&Hh(this,l,a,5))continue;let d=this.heightAt(l,a);if(d<wn+le.trees.minAboveSea||d>=Vh-le.trees.belowSnowLine)continue;let u=B0(this.seed,l,a,d,o,h);for(let f of tf(u,this.seed,l,d,a))r(f.x,f.y,f.z,f.id,f.leaf)}}applyEdits(t){let e=this.edits.get(mn(t.cx,t.cz));if(e)for(let[i,s]of e)t.data[i]=s}getChunk(t,e){return this.chunks.get(mn(t,e))}getBlock(t,e,i){if(e<0||e>=64)return ft.AIR;let s=this.chunks.get(mn(t>>4,i>>4));return s?s.data[re(t&15,e,i&15)]:ft.AIR}nearWater(t,e,i,s=nf.radius){for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(!(o*o+r*r>s*s)){for(let a=-nf.waterBelow;a<=nf.waterAbove;a++)if(ae[this.getBlock(t+o,e+a,i+r)])return!0}return!1}addChangeListener(t){this.listeners.push(t)}canPlace(t,e,i){return e>=0&&e<64&&this.isLoaded(t,i)}isLoaded(t,e){return this.chunks.has(mn(t>>4,e>>4))}setBlock(t,e,i,s){if(e<0||e>=64)return[];let r=t>>4,o=i>>4,a=this.getChunk(r,o);if(!a)return[];let l=t&15,c=i&15,h=a.data[re(l,e,c)];a.data[re(l,e,c)]=s,a.version++,Kt[h]&&a.plants.delete(re(l,e,c)),Kt[s]&&a.plants.add(re(l,e,c)),ja[h]&&a.hydrating.delete(re(l,e,c)),ja[s]&&a.hydrating.add(re(l,e,c));let d=mn(r,o),u=this.edits.get(d);u||this.edits.set(d,u=new Map),u.set(re(l,e,c),s),this.editsDirty=!0;let f=[a],p=(x,g)=>{let m=this.getChunk(x,g);m&&f.push(m)};l===0&&p(r-1,o),l===15&&p(r+1,o),c===0&&p(r,o-1),c===15&&p(r,o+1);for(let x of f)x.dirty=!0;for(let x of this.listeners)x(t,e,i,h,s);return f}hasWaterNear(t,e,i){for(let s=-i;s<=i;s+=3)for(let r=-i;r<=i;r+=3)if(this.heightAt(t+r,e+s)<wn)return!0;return!1}findSpawn(){for(let[t,e]of[[!0,!0],[!0,!1],[!1,!1]])for(let i=0;i<300;i+=4)for(let s=0;s<8;s++){let r=Math.round(Math.cos(s*Math.PI/4)*i),o=Math.round(Math.sin(s*Math.PI/4)*i),a=this.heightAt(r,o);if(!(a<=wn+le.beachAboveSea||a>=Vh-4)&&!(this.terrain>=3&&Hh(this,r,o,12))&&!(t&&this.treesNear(r,o,le.spawn.treeRadius)<le.spawn.minTrees)&&!(e&&!this.hasWaterNear(r,o,le.spawn.waterRadius)))return{x:r+.5,y:a+1,z:o+.5}}return{x:.5,y:wn+10,z:.5}}serializeLegacy(){return[...this.legacyCaves].map(t=>`${Math.floor(t/65536)-32768},${t%65536-32768}`)}serializeEdits(){let t={};for(let[e,i]of this.edits){let s=Math.floor(e/65536)-32768,r=e%65536-32768;t[`${s},${r}`]=Object.fromEntries(i)}return t}loadEdits(t,e=null){for(let i of e??Object.keys(t||{})){let[s,r]=i.split(",").map(Number);this.legacyCaves.add(mn(s,r))}for(let[i,s]of Object.entries(t||{})){let[r,o]=i.split(",").map(Number),a=new Map;for(let[l,c]of Object.entries(s))a.set(Number(l),c);this.edits.set(mn(r,o),a)}}};var WS={};for(let n of It.items)WS[n.key.toUpperCase()]=n.id;var Ci=new Map(It.items.map(n=>[n.id,n])),Zs=n=>It.blockById.has(n),En=n=>Zs(n)?Be[n].name:Ci.get(n)?.name??"Unknown",ti=n=>Ci.get(n)?.tool??null,Y0=n=>Ci.get(n)?.food??0,Z0=n=>Ci.get(n)?.saturation??0,Wn=n=>Ci.get(n)?.stack??64,il=n=>ti(n)?.uses??0,of=n=>Ci.get(n)?.plants??null,K0=n=>It.keyOfId.get(n);var yr=n=>Array.isArray(n)?n:[n],af=n=>yr(n).map(En).join(" or "),g2=It.groups.coals||[],Ks=n=>It.fuelTime.get(n)??0,XS=new Map(It.smelting.map(n=>[n.in,n])),lf=n=>XS.get(n)??null,Gh=It.smelting,J0=[...It.fuelTime.keys()],fs=n=>Ci.get(n)?.equip??null,Co=It.game.equipment.slots;var Ri=n=>!!Ci.get(n)?.offhand,cf=(n,t)=>fs(n)?.slot===t||t==="shield"&&Ri(n);function hf(n){let t=Ci.get(n)?.places;return t?Math.max(0,...Object.values(t).map(e=>Ki[e])):0}function j0(n,t){let e=ti(t);return e?Be[n]?.tool===e.type?1:It.game.tools.wrongToolWear:0}var $0=It.items.find(n=>n.door)?.id??0;function uf(n){let t=It.blockById.get(n);return t?.model?.type==="door"&&$0?$0:t?.variantOf||n}var Q0=n=>!!Ci.get(n)?.door,sl=n=>Ci.get(n)?.places??null;function tg(n,t){let e=[];for(let i of n){if(t()>=i.chance)continue;let s=i.min+Math.floor(t()*(i.max-i.min+1));s>0&&e.push({id:i.id,n:s})}return e}function Ro(n,t,e=Math.random){if(!t)return[];let i=It.blockById.get(n),s=i?.loot?It.loot[i.loot]:null;return s?tg(s,e):[{id:i?.variantOf||n,n:1}]}function eg(n,t=Math.random){let e=It.blockById.get(n),i=e?.shatterLoot?It.loot[e.shatterLoot]:e?.loot?It.loot[e.loot]:null;return i?tg(i,t):[{id:e?.variantOf||n,n:1}]}function Wh(n,t){let e=Be[n],i=ti(t),s=!!i&&e.tool===i.type,r=e.need===0||s&&i.tier>=e.need,o=e.hard;return s&&(o/=i.speed),r||(o*=3.3),{time:o,canHarvest:r,matches:s}}var ng=n=>Object.entries(It.data.items.tiers).find(([,t])=>t.level===n)?.[0]??"",rl=It.recipes,ig=Object.fromEntries(Object.entries(It.stations).map(([n,t])=>[n,t.label])),ol=It.windows,_r=It.goals,df={};for(let n of It.blocks){let t=n.plant?.stage;t&&(df[n.id]={label:t.label,stage:t.step,name:t.name,ripe:t.ripe,crop:t.crop})}var ps=36,sg=9,ff=ps+sg,Io=9,Xh=class{constructor(){this.slots=Array(ff).fill(null),this.equipment=Object.fromEntries(Co.map(t=>[t.id,null]))}get capacity(){let t=this.equipment.backpack;return ps+(t?Math.min(sg,fs(t.id)?.slots??0):0)}get armor(){let t=0;for(let e of Object.values(this.equipment))e&&(t+=fs(e.id)?.armor??0);return t}clickEquip(t,e,i=0){let s=this.equipment[t];if(e){if(!cf(e.id,t))return{cursor:e,refused:null};if(Ri(e.id)){let a=Wn(e.id);if(s&&s.id===e.id){let l=Math.min(a-s.n,i===2?1:e.n);return s.n+=l,{cursor:e.n-l>0?{...e,n:e.n-l}:null,refused:null}}return i===2&&!s?(this.equipment[t]={id:e.id,n:1,d:e.d},{cursor:e.n>1?{...e,n:e.n-1}:null,refused:null}):(this.equipment[t]=e,{cursor:s,refused:null})}if(t==="backpack"&&s&&this.slots.slice(ps).some(Boolean))return{cursor:e,refused:"Empty the backpack first"};let r={id:e.id,n:1,d:e.d},o=e.n>1?{...e,n:e.n-1}:null;return s&&o?{cursor:e,refused:null}:(this.equipment[t]=r,{cursor:o??s,refused:null})}return s?t==="backpack"&&this.slots.slice(ps).some(Boolean)?{cursor:null,refused:"Empty the backpack first"}:(this.equipment[t]=null,{cursor:s,refused:null}):{cursor:null,refused:null}}quickEquip(t){let e=this.slots[t];if(e&&Ri(e.id))return this.quickOffhand(t);let i=e&&fs(e.id)?.slot;if(!i||t>=this.capacity||this.equipment[i]&&Ri(this.equipment[i].id))return!1;let s=this.equipment[i];if(s&&i==="backpack"&&this.slots.slice(ps).some(Boolean))return!1;let r={id:e.id,n:1,d:e.d};if(e.n>1){if(s)return!1;e.n-=1}else this.slots[t]=s;return this.equipment[i]=r,!0}quickOffhand(t){let e=this.slots[t],i=this.equipment.shield;if(!e||t>=this.capacity)return!1;if(!i)return this.equipment.shield={...e},this.slots[t]=null,!0;if(i.id!==e.id)return!1;let s=Math.min(Wn(e.id)-i.n,e.n);return s<=0?!1:(i.n+=s,s===e.n?this.slots[t]=null:e.n-=s,!0)}takeEverything(){let t=[];for(let e=0;e<this.slots.length;e++)this.slots[e]&&(t.push(this.slots[e]),this.slots[e]=null);for(let e of Object.keys(this.equipment))this.equipment[e]&&(t.push(this.equipment[e]),this.equipment[e]=null);return t}add(t,e=1,i=0){let s=Wn(t);if(s>1)for(let r of this.slots.slice(0,this.capacity)){if(e<=0)break;if(r&&r.id===t&&r.n<s){let o=Math.min(s-r.n,e);r.n+=o,e-=o}}for(let r=0;r<this.capacity&&e>0;r++){if(this.slots[r])continue;let o=Math.min(s,e);this.slots[r]={id:t,n:o,d:i},e-=o}return e}count(t){let e=0;for(let i of this.slots)i&&i.id===t&&(e+=i.n);return e}remove(t,e=1){if(this.count(t)<e)return!1;for(let i=this.slots.length-1;i>=0&&e>0;i--){let s=this.slots[i];if(!s||s.id!==t)continue;let r=Math.min(s.n,e);s.n-=r,e-=r,s.n===0&&(this.slots[i]=null)}return!0}canFit(t,e=1){let i=Wn(t),s=0;for(let r of this.slots.slice(0,this.capacity))if(r?r.id===t&&i>1&&(s+=i-r.n):s+=i,s>=e)return!0;return!1}countSpec(t){return yr(t).reduce((e,i)=>e+this.count(i),0)}removeSpec(t,e){for(let i of yr(t)){let s=Math.min(e,this.count(i));s>0&&this.remove(i,s),e-=s}return e===0}canCraft(t,e={}){return t.station&&!e[t.station]?!1:t.ins.every(([i,s])=>this.countSpec(i)>=s)}craft(t,e={}){if(!this.canCraft(t,e))return{ok:!1,leftover:0};for(let[s,r]of t.ins)this.removeSpec(s,r);return{ok:!0,leftover:this.add(t.out,t.n)}}damage(t,e=1){let i=this.slots[t];return!i||!il(i.id)?!1:(i.d+=e,i.d>=il(i.id)?(this.slots[t]=null,!0):!1)}clickSlot(t,e,i=0){return pf(this.slots,t,e,i)}quickMove(t){let e=this.slots[t];if(!e)return;let[i,s]=t<Io?[Io,this.capacity]:[0,Io],r=Wn(e.id),o=e.n;for(let a=i;a<s&&o>0;a++){let l=this.slots[a];if(l&&l.id===e.id&&r>1&&l.n<r){let c=Math.min(r-l.n,o);l.n+=c,o-=c}}for(let a=i;a<s&&o>0;a++)this.slots[a]||(this.slots[a]={id:e.id,n:o,d:e.d},o=0);o===0?this.slots[t]=null:e.n=o}serialize(){return this.slots.map(t=>t?[t.id,t.n,t.d]:null)}load(t){this.slots=Array(ff).fill(null),(t||[]).slice(0,ff).forEach((e,i)=>{e&&(this.slots[i]={id:e[0],n:e[1],d:e[2]||0})})}serializeEquipment(){return Object.fromEntries(Object.entries(this.equipment).filter(([,t])=>t).map(([t,e])=>[t,[e.id,e.n,e.d]]))}loadEquipment(t){for(let e of Object.keys(this.equipment)){let i=t?.[e];this.equipment[e]=i&&cf(i[0],e)?{id:i[0],n:Ri(i[0])?Math.max(1,Math.min(Wn(i[0]),i[1]||1)):1,d:i[2]||0}:null}}};function pf(n,t,e,i=0,s=()=>!0){let r=n[t];if(e&&!s(e.id))return e;let o=e?Wn(e.id):1;if(i===0){if(!e)return n[t]=null,r;if(!r)return n[t]=e,null;if(r.id===e.id&&o>1){let a=Math.min(o-r.n,e.n);return r.n+=a,e.n-=a,e.n>0?e:null}return n[t]=e,r}if(!e){if(!r)return null;let a=Math.ceil(r.n/2);r.n-=a;let l={id:r.id,n:a,d:r.d};return r.n===0&&(n[t]=null),l}if(!r)n[t]={id:e.id,n:1,d:e.d},e.n-=1;else if(r.id===e.id&&r.n<o)r.n+=1,e.n-=1;else return n[t]=e,r;return e.n>0?e:null}var Js=18,mf=66,ui=(n,t,e)=>(t*Js+e)*Js+n,lg=[{n:[1,0,0],t1:[0,0,-1],t2:[0,1,0],o:[1,0,1],shade:.82,k:2},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0],o:[0,0,0],shade:.82,k:2},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0],o:[0,0,1],shade:.68,k:2},{n:[0,0,-1],t1:[-1,0,0],t2:[0,1,0],o:[1,0,0],shade:.68,k:2},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0],o:[0,1,0],shade:1,k:0},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1],o:[0,0,0],shade:.5,k:1}],Po=[[0,0],[1,0],[1,1],[0,1]],rg=[.5,.68,.84,1],og=(n,t,e,i,s)=>ae[n[ui(t,e+1,i)]]?1:$s[s]/8;function qS(n,t){let e=new Uint8Array(Js*mf*Js),i=new Uint8Array(Js*mf*Js).fill(Gn),s=new Uint8Array(Js*mf*Js);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){let a=o===0&&r===0?t:n.getChunk(t.cx+o,t.cz+r);if(!a)continue;let l=o<0?15:(o>0,0),c=o<0?15:o>0?0:15,h=r<0?15:(r>0,0),d=r<0?15:r>0?0:15;for(let u=0;u<64;u++)for(let f=h;f<=d;f++)for(let p=l;p<=c;p++){let x=a.light[re(p,u,f)],g=ui(p+o*16+1,u+1,f+r*16+1);e[g]=a.data[re(p,u,f)],i[g]=x>>4,s[g]=x&15}}return{pad:e,sky:i,blk:s}}var Lo=class{constructor(){this.pos=[],this.uv=[],this.col=[],this.blk=[],this.ind=[],this.sway=[],this.n=0}get empty(){return this.n===0}finish(){return{sway:new Float32Array(this.sway),positions:new Float32Array(this.pos),uvs:new Float32Array(this.uv),colors:new Float32Array(this.col),blocklight:new Float32Array(this.blk),indices:this.n>65535?new Uint32Array(this.ind):new Uint16Array(this.ind)}}};function $S(n,t,e,i,s,r,o,a,l,c,h,d,u){let f=t===2?[[.25,0,.25,.25,0,.75],[.75,0,.25,.75,0,.75],[.25,0,.25,.75,0,.25],[.25,0,.75,.75,0,.75]]:[[.08,0,.08,.92,0,.92],[.92,0,.08,.08,0,.92]],p=t===1?(rn(c,h,5)-.5)*.3:0,x=t===1?(rn(c,h,6)-.5)*.3:0,g=.88+rn(c,h,7)*.16,m=g*xr(d),w=g*nl(u);for(let[R,,v,S,,M]of f){let C=n.n,_=[[R,0,v,0,0],[S,0,M,1,0],[S,1,M,1,1],[R,1,v,0,1]];for(let[T,I,P,U,B]of _)n.pos.push(e+T+p,i+I,s+P+x),n.uv.push(r+U*a,o+B*l),n.col.push(m,m,m),n.blk.push(w,g),n.sway.push(I);n.ind.push(C,C+1,C+2,C,C+2,C+3),n.n+=4}}var ag=[[-1,-1],[1,-1],[1,1],[-1,1]],YS=.78,ZS=.85;function KS(n,t,e,i,s,r,o,a,l,c,h){let f=s[0]!==0||s[1]!==0?.2:0,p=f+r,x=.5-s[0]*.38,g=.5-s[1]*.38,m=.5-s[0]*.12,w=.5-s[1]*.12,R=xr(h)*.9,v=o+l*(7/16),S=o+l*(9/16),M=a,C=a+c*(12/16),_=(U,B,D,F,q)=>{n.pos.push(t+U,e+B,i+D),n.uv.push(F,q),n.col.push(R,R,R),n.blk.push(YS,.9),n.sway.push(0)};for(let U=0;U<4;U++){let B=ag[U],D=ag[(U+1)%4],F=n.n;_(x+B[0]*.0625,f,g+B[1]*.0625,v,M),_(x+D[0]*.0625,f,g+D[1]*.0625,S,M),_(m+D[0]*.0625,p,w+D[1]*.0625,S,C),_(m+B[0]*.0625,p,w+B[1]*.0625,v,C),n.ind.push(F,F+2,F+1,F,F+3,F+2),n.n+=4}let T=n.n,I=a+c*(10/16),P=a+c*(12/16);_(m-.0625,p,w+.0625,v,I),_(m+.0625,p,w+.0625,S,I),_(m+.0625,p,w-.0625,S,P),_(m-.0625,p,w-.0625,v,P),n.ind.push(T,T+1,T+2,T,T+2,T+3),n.n+=4}function JS(n,t,e,i,s,r,o,a,l,c,h){let d=Mo.get(t),u=1/Ee,f=1/qs,p=4e-4,x=xr(c),g=nl(h);d.forEach((m,w)=>{for(let R=0;R<6;R++){let v=lg[R],S=v.n[0]?0:v.n[1]?1:2,M=v.n[S]>0;if(us[t]===1&&w===1&&R===5||(M?m[S+3]===1:m[S]===0)&&$e[r[ui(o+v.n[0],a+v.n[1],l+v.n[2])]])continue;let C=gr[t*3+v.k],_=C%Ee*u+p,T=1-(Math.floor(C/Ee)+1)*f+p,I=u-p*2,P=f-p*2,U=v.t1[0]?0:v.t1[1]?1:2,B=v.t2[0]?0:v.t2[1]?1:2,D=v.t1[U],F=v.t2[B],q=n.n;for(let[J,j]of Po){let k=[0,1,2].map(Q=>m[Q]+(v.o[Q]+v.t1[Q]*J+v.t2[Q]*j)*(m[Q+3]-m[Q]));n.pos.push(e+k[0],i+k[1],s+k[2]),n.uv.push(_+I*D*(k[U]-v.o[U]),T+P*F*(k[B]-v.o[B]));let W=v.shade*x;n.col.push(W,W,W),n.blk.push(v.shade*g,v.shade)}n.ind.push(q,q+1,q+2,q,q+2,q+3),n.n+=4}})}function cg(n,t){let{pad:e,sky:i,blk:s}=qS(n,t),r=new Lo,o=new Lo,a=new Lo,l=new Lo,c=4e-4,h=1/Ee,d=1/qs;for(let u=0;u<64;u++)for(let f=0;f<16;f++)for(let p=0;p<16;p++){let x=t.data[re(p,u,f)];if(x===ft.AIR)continue;if(Kt[x]){let M=gr[x*3+2],C=M%Ee*h+c,_=1-(Math.floor(M/Ee)+1)*d+c,T=ui(p+1,u+1,f+1);Kt[x]===3?KS(r,p,u,f,[Yi[x*2],Yi[x*2+1]],Ws[x],C,_,h-c*2,d-c*2,i[T]):$S(a,Kt[x],p,u,f,C,_,h-c*2,d-c*2,t.cx*16+p,t.cz*16+f,i[T],s[T]);continue}if(us[x]){let M=ui(p+1,u+1,f+1);JS(r,x,p,u,f,e,p+1,u+1,f+1,i[M],s[M]);continue}let g=ae[x]===1,m=g?o:Zi[x]?l:r,w=p+1,R=u+1,v=f+1,S=g?og(e,w,R,v,x):1;for(let M=0;M<6;M++){let C=lg[M],_=e[ui(w+C.n[0],R+C.n[1],v+C.n[2])],T=0;if(g){if($e[_])continue;if(ae[_]){if(M>=4)continue;let W=og(e,w+C.n[0],R,v+C.n[2],_);if(W>=S-1e-6)continue;T=W}}else if($e[_]||_===x&&!$e[x])continue;let I=gr[x*3+C.k],P=I%Ee*h+c,U=1-(Math.floor(I/Ee)+1)*d+c,B=h-c*2,D=d-c*2,F=[1,1,1,1];if(!g)for(let W=0;W<4;W++){let Q=Po[W][0]?1:-1,Mt=Po[W][1]?1:-1,yt=w+C.n[0],ot=R+C.n[1],dt=v+C.n[2],bt=$e[e[ui(yt+C.t1[0]*Q,ot+C.t1[1]*Q,dt+C.t1[2]*Q)]],V=$e[e[ui(yt+C.t2[0]*Mt,ot+C.t2[1]*Mt,dt+C.t2[2]*Mt)]],Z=$e[e[ui(yt+C.t1[0]*Q+C.t2[0]*Mt,ot+C.t1[1]*Q+C.t2[1]*Mt,dt+C.t1[2]*Q+C.t2[2]*Mt)]];F[W]=bt&&V?0:3-(bt+V+Z)}let q=[1,1,1,1],J=[0,0,0,0];for(let W=0;W<4;W++){if(g){q[W]=xr(i[ui(w,R,v)]),J[W]=nl(s[ui(w,R,v)]);continue}let Q=Po[W][0]?1:-1,Mt=Po[W][1]?1:-1,yt=w+C.n[0],ot=R+C.n[1],dt=v+C.n[2],bt=[[yt,ot,dt],[yt+C.t1[0]*Q,ot+C.t1[1]*Q,dt+C.t1[2]*Q],[yt+C.t2[0]*Mt,ot+C.t2[1]*Mt,dt+C.t2[2]*Mt],[yt+C.t1[0]*Q+C.t2[0]*Mt,ot+C.t1[1]*Q+C.t2[1]*Mt,dt+C.t1[2]*Q+C.t2[2]*Mt]],V=0,Z=0,pt=0;for(let Ut=0;Ut<4;Ut++){let _t=ui(bt[Ut][0],bt[Ut][1],bt[Ut][2]);Ut>0&&$e[e[_t]]||(V+=i[_t],Z+=s[_t],pt++)}q[W]=xr(V/pt),J[W]=Math.max(nl(Z/pt),Kd[x])}let j=m.n;for(let W=0;W<4;W++){let[Q,Mt]=Po[W],yt=C.o[0]+C.t1[0]*Q+C.t2[0]*Mt,ot=C.o[1]+C.t1[1]*Q+C.t2[1]*Mt,dt=C.o[2]+C.t1[2]*Q+C.t2[2]*Mt;g&&(ot=ot===1?S:T&&M<4?T:ot),m.pos.push(p+yt,u+ot,f+dt),m.uv.push(P+Q*B,U+Mt*D);let bt=C.shade*(g?1:rg[F[W]]),V=bt*q[W];m.col.push(V,V,V),m.blk.push(bt*J[W],bt),m===l&&m.sway.push(ZS)}let k=W=>(g?0:rg[F[W]])*(q[W]+J[W]);k(0)+k(2)<k(1)+k(3)?m.ind.push(j+1,j+2,j+3,j+1,j+3,j):m.ind.push(j,j+1,j+2,j,j+2,j+3),m.n+=4}}return{solid:r.empty?null:r.finish(),water:o.empty?null:o.finish(),plants:a.empty?null:a.finish(),leaves:l.empty?null:l.finish()}}var jS=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function QS(n){let t=new qe;return t.setAttribute("position",new ye(n.positions,3)),t.setAttribute("uv",new ye(n.uvs,2)),t.setAttribute("color",new ye(n.colors,3)),n.sway.length&&t.setAttribute("aSway",new ye(n.sway,1)),t.setAttribute("aBlk",new ye(n.blocklight,2)),t.setIndex(new ye(n.indices,1)),t.computeBoundingSphere(),t}var No=class{constructor(t,e,i,s=6,r=null){this.onUnload=r,this.world=e,this.mats=i,this.radius=s,this.group=new Ze,t.add(this.group),this.wanted=[],this.lastCx=null,this.lastCz=null,this.stats={chunks:0,meshed:0,quads:0}}setRadius(t){this.radius=t,this.lastCx=null}rebuildWanted(t,e){let i=this.radius+1;this.wanted=[];for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++){let a=o*o+r*r;a<=i*i+1&&this.wanted.push({cx:t+o,cz:e+r,d:a})}this.wanted.sort((r,o)=>r.d-o.d);let s=i+2;for(let[r,o]of this.world.chunks)Math.max(Math.abs(o.cx-t),Math.abs(o.cz-e))>s&&(this.onUnload?.(o),this.disposeMeshes(o),this.world.chunks.delete(r))}disposeMeshes(t){if(t.meshes){for(let e of t.meshes)this.group.remove(e),e.geometry.dispose();t.meshes=null}}ready(t){for(let[e,i]of jS)if(!this.world.getChunk(t.cx+e,t.cz+i))return!1;return!0}mesh(t){this.disposeMeshes(t);let e=cg(this.world,t);t.meshes=[];let i=(s,r,o)=>{if(!s)return;let a=new we(QS(s),r);a.position.set(t.cx*16,0,t.cz*16),a.renderOrder=o,a.matrixAutoUpdate=!1,a.updateMatrix(),this.group.add(a),t.meshes.push(a)};i(e.solid,this.mats.solid,0),i(e.plants,this.mats.plant,0),i(e.leaves,this.mats.leaves,0),i(e.water,this.mats.water,1),t.dirty=!1}remeshNow(t){for(let e of t)this.ready(e)&&this.mesh(e)}update(t,e,i=6){let s=Math.floor(t/16),r=Math.floor(e/16);(s!==this.lastCx||r!==this.lastCz)&&(this.lastCx=s,this.lastCz=r,this.rebuildWanted(s,r));let o=performance.now(),a=this.world;for(let c of this.wanted)if(!a.getChunk(c.cx,c.cz)&&(a.generateChunk(c.cx,c.cz),performance.now()-o>i))return;let l=this.radius*this.radius+1;for(let c of this.wanted){if(c.d>l)break;let h=a.getChunk(c.cx,c.cz);if(h&&h.dirty&&this.ready(h)&&(this.mesh(h),performance.now()-o>i))return}}preload(t,e,i=3){let s=this.radius;this.radius=i,this.lastCx=null;for(let r=0;r<4;r++)this.update(t,e,1/0);this.radius=s,this.lastCx=null}collectStats(){let t=0,e=0;for(let i of this.world.chunks.values())if(i.meshes){t++;for(let s of i.meshes)e+=s.geometry.index.count/6}return this.stats={chunks:this.world.chunks.size,meshed:t,quads:e},this.stats}};var gf=[[0,0,0,1,1,1]],De=.3,xf=1.8,tw=1.5,hg=1.62,ew=1.27,nw=.35,Tn=1e-4,ug=30,iw=9.2,sw=40,Do=class{constructor(t){this.world=t,this.pos={x:0,y:40,z:0},this.vel={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headInWater=!1,this.stepDist=0,this.speedMul=1,this.events={step:null,splash:null,land:null,fall:null,jump:null},this.fallPeak=null,this.stepSmooth=0,this.canStep=!1,this.crouching=!1,this.height=xf,this.eyeHeight=hg}solidAt(t,e,i){return e<0||!this.world.isLoaded(t,i)?!0:We[this.world.getBlock(t,e,i)]>=1}boxesAt(t,e,i){if(e<0||!this.world.isLoaded(t,i))return gf;let s=this.world.getBlock(t,e,i),r=We[s];return r===1?gf:r===2?Mo.get(s):null}overlapping(t,e,i,s,r){let o=Math.floor(t-De+1e-5),a=Math.floor(t+De-1e-5),l=Math.floor(e+1e-5),c=Math.floor(e+s-1e-5),h=Math.floor(i-De+1e-5),d=Math.floor(i+De-1e-5);for(let u=l;u<=c;u++)for(let f=h;f<=d;f++)for(let p=o;p<=a;p++){let x=this.boxesAt(p,u,f);if(x){for(let g of x)if(!(x!==gf&&!(t+De-1e-5>p+g[0]&&t-De+1e-5<p+g[3]&&e+s-1e-5>u+g[1]&&e+1e-5<u+g[4]&&i+De-1e-5>f+g[2]&&i-De+1e-5<f+g[5]))&&r(p+g[0],u+g[1],f+g[2],p+g[3],u+g[4],f+g[5]))return!0}}return!1}collides(t,e,i,s=this.height){return this.overlapping(t,e,i,s,()=>!0)}limit(t,e){let i=this.pos,s=t==="x"?0:t==="y"?1:2,r=null;return this.overlapping(i.x,i.y,i.z,this.height,(o,a,l,c,h,d)=>{let u=[o,a,l][s],f=[c,h,d][s];return e?r=r===null?u:Math.min(r,u):r=r===null?f:Math.max(r,f),!1}),r}supported(t,e,i){let s=Math.floor(e-.05);for(let r of[-De,De])for(let o of[-De,De])if(this.solidAt(Math.floor(t+o),s,Math.floor(i+r)))return!0;return!1}intersectsBlock(t,e,i){let s=this.pos;return s.x+De>t&&s.x-De<t+1&&s.y+this.height>e&&s.y<e+1&&s.z+De>i&&s.z-De<i+1}moveAxis(t,e){if(e===0)return!1;let i=this.pos,s=Math.ceil(Math.abs(e)/.2),r=e/s;for(let o=0;o<s;o++){if(i[t]+=r,!this.collides(i.x,i.y,i.z))continue;if(this.canStep&&t!=="y"){let l=Math.floor(i.y+Tn),c=!1;for(let h of[l+.5+Tn,l+1+Tn])if(!(h<=i.y+Tn||h-i.y>1+2*Tn||this.collides(i.x,h,i.z))){this.stepSmooth+=h-i.y,i.y=h,c=!0;break}if(c)continue}let a=this.limit(t,r>0);return t==="y"?a!==null?i.y=r>0?a-this.height-Tn:a+Tn:i.y=r>0?Math.floor(i.y+this.height)-this.height-Tn:Math.floor(i.y)+1+Tn:a!==null?i[t]=r>0?a-De-Tn:a+De+Tn:t==="x"?i.x=r>0?Math.floor(i.x+De)-De-Tn:Math.floor(i.x-De)+1+De+Tn:i.z=r>0?Math.floor(i.z+De)-De-Tn:Math.floor(i.z-De)+1+De+Tn,this.vel[t]=0,!0}return!1}update(t,e){t=Math.min(t,.05);let i=this.pos,s=this.vel,r=this.onGround;(this.fallPeak===null||r||this.inWater||this.flying)&&(this.fallPeak=i.y);let o=this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z)),a=this.inWater;this.inWater=ae[o]===1,this.headInWater=ae[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+1.62),Math.floor(i.z))]===1,this.inWater&&!a&&s.y<-3&&this.events.splash?.(),!!e.crouch&&!this.flying&&!this.inWater?(this.crouching=!0,this.height=tw):this.crouching&&!this.collides(i.x,i.y,i.z,xf)&&(this.crouching=!1,this.height=xf),this.eyeHeight+=((this.crouching?ew:hg)-this.eyeHeight)*Math.min(1,16*t);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),d=0,u=0;e.forward&&(d-=c,u-=h),e.back&&(d+=c,u+=h),e.left&&(d-=h,u+=c),e.right&&(d+=h,u-=c),e.ahead&&(d-=c*e.ahead,u-=h*e.ahead),e.strafe&&(d+=h*e.strafe,u-=c*e.strafe);let f=Math.hypot(d,u);f>1&&(d/=f,u/=f);let p=e.sprint&&!this.crouching?6.4:4.4;this.crouching&&(p*=nw),this.flying?p=e.sprint?22:11:this.inWater&&(p*=.55),p*=this.speedMul;let x=this.flying?14:this.onGround?46:this.inWater?14:12,g=Math.min(1,x*t);if(s.x+=(d*p-s.x)*g,s.z+=(u*p-s.z)*g,this.flying){let _=(e.jump?1:0)-(e.down?1:0);s.y+=(_*(e.sprint?14:8)-s.y)*Math.min(1,10*t)}else this.inWater?(s.y-=8*t,s.y*=1-Math.min(1,3*t),e.jump&&(s.y+=(3.6-s.y)*Math.min(1,8*t))):(s.y=Math.max(s.y-ug*t,-sw),e.jump&&this.onGround&&(s.y=iw,this.onGround=!1,this.events.jump?.(!!e.sprint&&!this.crouching)));let m=s.y;this.canStep=this.onGround&&!this.flying&&!this.inWater&&s.y<=.01&&f>0;let w=this.crouching&&this.onGround&&!this.flying,R=i.x,v=i.z,S=this.moveAxis("x",s.x*t);w&&!this.supported(i.x,i.y,i.z)&&(i.x=R,s.x=0);let M=this.moveAxis("z",s.z*t);if(w&&!this.supported(i.x,i.y,i.z)&&(i.z=v,s.z=0),this.inWater&&e.jump&&(S||M)&&f>0)for(let _ of[Math.floor(i.y)+1,Math.floor(i.y)+2]){if(_-i.y>1.45)break;if(!this.collides(i.x+d*.4,_+Tn,i.z+u*.4)){s.y=Math.max(s.y,Math.sqrt(2*ug*(_-i.y+.3)));break}}let C=this.moveAxis("y",s.y*t);if(this.onGround=C&&m<0,this.flying&&this.onGround&&(this.flying=!1),this.onGround||(this.fallPeak=Math.max(this.fallPeak,i.y)),this.onGround&&!r){m<-7&&this.events.land?.(m);let _=this.inWater||ae[this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.3),Math.floor(i.z))]===1,T=this.fallPeak-i.y;!this.flying&&!_&&T>.5&&this.events.fall?.(T,m),this.fallPeak=i.y}this.stepSmooth=this.stepSmooth<.001?0:this.stepSmooth*Math.exp(-12*t),this.onGround&&!this.flying&&f>0&&(this.stepDist+=Math.hypot(s.x,s.z)*t,this.stepDist>(e.sprint&&!this.crouching?2.2:1.7)&&!this.crouching&&(this.stepDist=0,this.events.step?.()))}get eye(){return{x:this.pos.x,y:this.pos.y+this.eyeHeight-this.stepSmooth,z:this.pos.z}}};function rw(n,t,e,i,s,r,o){let a=[e+.5-o,i,s+.5-o],l=[e+.5+o,i+r,s+.5+o],c=[n.x,n.y,n.z],h=[t.x,t.y,t.z],d=-1/0,u=1/0,f=-1,p=0;for(let x=0;x<3;x++){if(Math.abs(h[x])<1e-9){if(c[x]<a[x]||c[x]>l[x])return null;continue}let g=(a[x]-c[x])/h[x],m=(l[x]-c[x])/h[x],w=Math.min(g,m),R=Math.max(g,m);if(w>d&&(d=w,f=x,p=h[x]>0?-1:1),R<u&&(u=R),d>u)return null}return u<0?null:{t:d,axis:f,sign:p}}function yf(n,t,e,i=6){let s=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z),a=Math.sign(e.x),l=Math.sign(e.y),c=Math.sign(e.z),h=e.x!==0?Math.abs(1/e.x):1/0,d=e.y!==0?Math.abs(1/e.y):1/0,u=e.z!==0?Math.abs(1/e.z):1/0,f=e.x!==0?(a>0?s+1-t.x:t.x-s)*h:1/0,p=e.y!==0?(l>0?r+1-t.y:t.y-r)*d:1/0,x=e.z!==0?(c>0?o+1-t.z:t.z-o)*u:1/0,g=0,m=0,w=0,R=0;for(;R<=i;){let v=n.getBlock(s,r,o);if(We[v]||us[v]===2)return{x:s,y:r,z:o,nx:g,ny:m,nz:w,id:v};if(Kt[v]){let S=rw(t,e,s,r,o,Ws[v],vo[v]);if(S&&S.t<=i){let M=S.t<0||S.axis<0?[0,0,0]:[S.axis===0?S.sign:0,S.axis===1?S.sign:0,S.axis===2?S.sign:0];return{x:s,y:r,z:o,nx:M[0],ny:M[1],nz:M[2],id:v}}}f<p&&f<x?(s+=a,R=f,f+=h,g=-a,m=0,w=0):p<x?(r+=l,R=p,p+=d,g=0,m=-l,w=0):(o+=c,R=x,x+=u,g=0,m=0,w=-c)}return null}var dg=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};var ow=new Wt(.47,.68,1),aw=new Wt(.015,.025,.07),lw=new Wt(1,.52,.28),cw=new Wt(.36,.42,.7),hw=new Wt(1,1,1),uw=new Wt(1,.82,.7),gn=64,al=12,ms=gn*al,dw=82;function _f(n,t){let e=Array.from({length:n*n},t);return(i,s)=>{let r=i*n,o=s*n,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(p,x)=>e[(x%n+n)%n*n+(p%n+n)%n],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}function fw(n=9){let t=On(n),e=_f(6,t),i=_f(14,t),s=_f(30,t),r=new Float32Array(gn*gn),o=.56;for(let a=0;a<gn;a++)for(let l=0;l<gn;l++){let c=l/gn,h=a/gn,d=e(c,h)*.55+i(c,h)*.3+s(c,h)*.15;if(d<=o)continue;let u=Math.min(1,(d-o)/.18);r[a*gn+l]=4+Math.round(u*3)*2.2}return r}function pw(){let n=fw(),t=[],e=[],i=[],s=(l,c)=>n[(c%gn+gn)%gn*gn+(l%gn+gn)%gn],r=0,o=(l,c,h,d,u)=>{for(let f of[l,c,h,d])t.push(f[0],f[1],f[2]),e.push(u,u,u);i.push(r,r+1,r+2,r,r+2,r+3),r+=4};for(let l=0;l<gn;l++)for(let c=0;c<gn;c++){let h=s(c,l);if(!h)continue;let d=c*al,u=d+al,f=l*al,p=f+al;o([d,h,p],[u,h,p],[u,h,f],[d,h,f],1),o([d,0,f],[u,0,f],[u,0,p],[d,0,p],.8);let x=s(c+1,l),g=s(c-1,l),m=s(c,l+1),w=s(c,l-1);x<h&&o([u,x,p],[u,x,f],[u,h,f],[u,h,p],.92),g<h&&o([d,g,f],[d,g,p],[d,h,p],[d,h,f],.92),m<h&&o([d,m,p],[u,m,p],[u,h,p],[d,h,p],.84),w<h&&o([u,w,f],[d,w,f],[d,h,f],[u,h,f],.84)}let a=new qe;return a.setAttribute("position",new ye(new Float32Array(t),3)),a.setAttribute("color",new ye(new Float32Array(e),3)),a.setIndex(new ye(r>65535?new Uint32Array(i):new Uint16Array(i),1)),a.boundingSphere=new oi(new G(ms/2,4,ms/2),ms*.75),a}var mw=`
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
  }`,gw=`
  uniform float uOpacity;
  varying float vTw;
  varying vec3 vCol;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    gl_FragColor = vec4(vCol, a * vTw * uOpacity);
  }`,xw=`
  uniform float uShift;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vN = normalize(normal);
    vUv = uv + vec2(uShift, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,yw=`
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
  }`,qh=class{constructor(t,e){this.group=new Ze,t.add(this.group);let i=new Ze;i.rotation.y=.45,this.group.add(i),this.pivot=new Ze,i.add(this.pivot);let s=new Gi(e.sun);s.colorSpace=hi;let r=new hr(new Ls({map:s,transparent:!0,fog:!1,depthWrite:!1}));r.scale.set(92,92,1),r.position.x=320,this.pivot.add(r),this.sun=r;let o=new hr(new Ls({map:new Gi(e.glow),color:16764778,transparent:!0,depthWrite:!1,fog:!1,blending:ur,opacity:.5}));o.scale.set(210,210,1),o.position.x=318,this.pivot.add(o),this.sunHalo=o;let a=new Gi(e.moon);a.wrapS=so,a.colorSpace=hi,this.moonMat=new bn({uniforms:{uMap:{value:a},uLight:{value:new G(1,0,0)},uAlpha:{value:1},uShift:{value:.31}},vertexShader:xw,fragmentShader:yw,transparent:!0,depthWrite:!1,fog:!1}),this.moon=new we(new La(26,48,32),this.moonMat),this.moon.position.x=-320,this.pivot.add(this.moon);let l=new hr(new Ls({map:new Gi(e.glow),transparent:!0,depthWrite:!1,fog:!1,blending:ur,opacity:.4}));l.scale.set(150,150,1),l.position.x=-318,this.pivot.add(l),this.halo=l;let c=On(31337),h=900,d=new Float32Array(h*3),u=new Float32Array(h),f=new Float32Array(h),p=new Float32Array(h*3);for(let m=0;m<h;m++){let w=c()*2-1,R=c()*Math.PI*2,v=Math.sqrt(1-w*w);d.set([Math.cos(R)*v*400,w*400,Math.sin(R)*v*400],m*3),u[m]=c();let S=c()<.07;f[m]=S?4.5+c()*2:1.6+c()*1.8;let M=c();p.set(M<.25?[.7,.8,1]:M<.8?[1,1,1]:[1,.9,.7],m*3)}let x=new qe;x.setAttribute("position",new ye(d,3)),x.setAttribute("aPhase",new ye(u,1)),x.setAttribute("aSize",new ye(f,1)),x.setAttribute("aColor",new ye(p,3)),this.starMat=new bn({uniforms:{uTime:{value:0},uOpacity:{value:1},uScale:{value:1}},vertexShader:mw,fragmentShader:gw,transparent:!0,depthWrite:!1,fog:!1,blending:ur}),this.stars=new Aa(x,this.starMat),this.stars.frustumCulled=!1,this.pivot.add(this.stars);let g=pw();this.cloudMat=new tn({vertexColors:!0,transparent:!0,opacity:.93,fog:!1}),this.clouds=[],this.cloudRoot=new Ze,t.add(this.cloudRoot);for(let m=0;m<9;m++){let w=new we(g,this.cloudMat);w.matrixAutoUpdate=!0,this.cloudRoot.add(w),this.clouds.push(w)}this.skyColor=new Wt,this.tint=new Wt,this.sunHeight=1,this.setMoonPhase(0)}setPixelRatio(t){this.starMat.uniforms.uScale.value=t}setMoonPhase(t){let e=t%8/8*Math.PI*2;this.moonMat.uniforms.uLight.value.set(Math.cos(e),.12,Math.sin(e)),this.phaseName=["Full Moon","Waning Gibbous","Last Quarter","Waning Crescent","New Moon","Waxing Crescent","First Quarter","Waxing Gibbous"][t%8]}update(t,e,i){let s=t*Math.PI*2;this.pivot.rotation.z=s,this.group.position.copy(e);let r=this.sunHeight=Math.sin(s),o=dg(-.1,.26,r);this.skyColor.copy(aw).lerp(ow,o);let a=Math.pow(Math.max(0,1-Math.abs(r)/.24),1.1)*.92;a>0&&this.skyColor.lerp(lw,a),this.tint.copy(cw).lerp(hw,o),a>0&&this.tint.lerp(uw,a*.35);let l=1-dg(-.18,.1,r);this.starMat.uniforms.uTime.value=i,this.starMat.uniforms.uOpacity.value=l,this.stars.visible=l>.01,this.moonMat.uniforms.uAlpha.value=.3+.7*l,this.halo.material.opacity=.4*l,this.sunHalo.material.opacity=.5*(1-l);let c=i*1.6,h=Math.floor((e.x-c)/ms)*ms,d=Math.floor(e.z/ms)*ms,u=0;for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++)this.clouds[u++].position.set(h+p*ms+c,dw,d+f*ms);return this.cloudMat.color.copy(this.tint).multiplyScalar(.62+.38*o),{sky:this.skyColor,tint:this.tint,day:o}}};var vr=It.music,_w=vr.tracks.filter(n=>n.key!==vr.title),pg=vr.tracks.find(n=>n.key===vr.title),$h=class{constructor(t=_w,e=Math.random){this.tracks=t,this.rand=e,this.bag=[],this.last=null}next(){if(!this.bag.length){this.bag=[...this.tracks];for(let t=this.bag.length-1;t>0;t--){let e=Math.floor(this.rand()*(t+1));[this.bag[t],this.bag[e]]=[this.bag[e],this.bag[t]]}this.bag.length>1&&this.bag[this.bag.length-1]===this.last&&([this.bag[0],this.bag[this.bag.length-1]]=[this.bag[this.bag.length-1],this.bag[0]])}return this.last=this.bag.pop(),this.last}},mg=(n=Math.random)=>vr.gapSeconds[0]+n()*(vr.gapSeconds[1]-vr.gapSeconds[0]),gg=n=>60/n.bpm;var vw=(n,t)=>n.chords[Math.floor(t/n.barsPerChord)%n.chords.length],fg=(n,t)=>n[Math.floor(t()*n.length)];function xg(n,t,e=Math.random){let i=[],s=vw(n,t),r=t%n.barsPerChord===0;if(n.pad&&i.push({voice:n.pad==="strings"?"strings":"pad",notes:s.tones.slice(0,4),beat:0,beats:4.4,vel:1}),n.bass==="drone"?r&&i.push({voice:"drone",notes:[s.root-12],beat:0,beats:4*n.barsPerChord+1,vel:1}):n.bass&&i.push({voice:"bass",notes:[s.root-12],beat:0,beats:3,vel:1}),n.arp){let{voice:o,pattern:a,step:l,vel:c}=n.arp;for(let h=0,d=0;d<4-1e-9;h++,d+=l)i.push({voice:o,notes:[s.tones[a[h%a.length]%s.tones.length]],beat:d,beats:l*2,vel:c})}if(n.melody)for(let[o,a,l,c,h]of n.melody)o===t&&i.push({voice:n.lead?.voice??"piano",notes:[l],beat:a,beats:c,vel:h});else if(n.lead){let o=n.lead;if(o.rest&&t%o.rest===o.rest-1&&e()<.6)return i;let a=fg(s.tones,e);for(let l=0;l<8;l++){let c=l===0?o.density[0]:l%2===0?o.density[1]:o.density[2];if(e()>c)continue;let h=s.tones.filter(u=>Math.abs(u-a)<=7),d=fg(h.length?h:s.tones,e);e()<o.leap&&(d+=12),e()<o.leap*.66&&(d-=12),a=d,i.push({voice:o.voice,notes:[d],beat:l*.5,beats:1.5,vel:.14+e()*.12})}}return i}var Yh=It.sounds,Mr=n=>440*Math.pow(2,(n-69)/12);var Zh=class{constructor(){this.ctx=null,this.musicOn=!0,this.musicVol=.8,this.sfxVol=.9,this.nextBarTime=0,this.timer=null,this.scene="title",this.playlist=new $h,this.track=null,this.trackBar=0,this.bus=null,this.nowPlaying=null,this.onTrack=null}unlockOnGesture(){let t=["pointerdown","keydown","touchstart"],e=()=>{if(this.start(),this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0);else this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(let i of t)window.removeEventListener(i,e,!0)})};for(let i of t)window.addEventListener(i,e,!0)}get running(){return!!this.ctx&&this.ctx.state==="running"}setScene(t){t!==this.scene&&(this.scene=t,this.endTrack(1.4),this.ctx&&(this.nextBarTime=Math.max(this.nextBarTime,this.ctx.currentTime+.8)))}endTrack(t=0){if(this.bus&&this.ctx){let e=this.bus,i=this.ctx.currentTime;t>0&&e.gain.setTargetAtTime(0,i,t/3),setTimeout(()=>{try{e.disconnect()}catch{}},(t+12)*1e3)}this.bus=null,this.track=null,this.trackBar=0}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=.8,this.master.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicOn?.55*this.musicVol:0,this.sfxBus=t.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(4.2,2.4);let e=t.createGain();e.gain.value=.55,this.reverb.connect(e),e.connect(this.master),this.musicBus.connect(this.master),this.musicBus.connect(this.reverb),this.delay=t.createDelay(2),this.delay.delayTime.value=.72;let i=t.createGain();i.gain.value=.32;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this.delay.connect(s),s.connect(i),i.connect(this.delay),s.connect(this.musicBus);let r=t.sampleRate;this.noise=t.createBuffer(1,r,t.sampleRate);let o=this.noise.getChannelData(0);for(let a=0;a<r;a++)o[a]=Math.random()*2-1;this.nextBarTime=t.currentTime+1,this.timer=setInterval(()=>this.schedule(),400)}makeImpulse(t,e){let i=this.ctx,s=Math.floor(i.sampleRate*t),r=i.createBuffer(2,s,i.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}setMusic(t){this.musicOn=t,this.applyVolumes()}setVolumes(t,e){this.musicVol=t,this.sfxVol=e,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.musicOn?.55*this.musicVol:0,t,.15),this.sfxBus.gain.setTargetAtTime(this.sfxVol,t,.05)}startTrack(){this.track=this.scene==="title"?pg:this.playlist.next(),this.trackBar=0,this.nowPlaying=this.track,this.bus=this.ctx.createGain(),this.bus.connect(this.musicBus),this.onTrack?.(this.track)}schedule(){let t=this.ctx;for(;this.nextBarTime<t.currentTime+1.2;){this.track||this.startTrack();let e=gg(this.track);this.playBar(this.nextBarTime,e),this.nextBarTime+=e*4,++this.trackBar>=this.track.bars&&(this.scene==="title"?this.trackBar=0:(this.endTrack(0),this.nextBarTime+=mg()))}}playBar(t,e){for(let i of xg(this.track,this.trackBar)){let s=t+i.beat*e+(i.voice==="piano"||i.voice==="bell"||i.voice==="pluck"?(Math.random()-.5)*.03:0),r=i.beats*e;switch(i.voice){case"piano":this.piano(Mr(i.notes[0]),s,i.vel);break;case"bell":this.bell(Mr(i.notes[0]),s,i.vel);break;case"pluck":this.pluck(Mr(i.notes[0]),s,i.vel);break;case"pad":this.pad(i.notes,s,r);break;case"strings":this.strings(i.notes,s,r);break;case"bass":this.bass(i.notes[0],s,r);break;case"drone":this.drone(i.notes[0],s,r);break;default:break}}}piano(t,e,i){let s=this.ctx,r=s.createGain(),o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*9,7e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.5,400),e+2.5),r.connect(o),o.connect(this.bus),o.connect(this.delay);let a=[[1,1,3.2],[2,.42,1.8],[3,.2,1.1],[4,.1,.7],[5.01,.05,.4]];for(let[l,c,h]of a){let d=s.createOscillator();d.type="sine",d.frequency.value=t*l,d.detune.value=(Math.random()-.5)*6;let u=s.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(i*c,e+.008),u.gain.exponentialRampToValueAtTime(1e-4,e+h*1.6),d.connect(u),u.connect(r),d.start(e),d.stop(e+h*1.6+.1)}this.noiseHit(e,.03,"lowpass",t*3,1,i*.5,this.bus)}bell(t,e,i){let s=this.ctx,r=s.createGain();r.connect(this.bus),r.connect(this.delay);for(let[o,a,l]of[[1,1,2.6],[2.76,.32,1.4],[5.4,.12,.8],[8.93,.05,.4]]){let c=s.createOscillator();c.type="sine",c.frequency.value=t*2*o;let h=s.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(i*a*.8,e+.004),h.gain.exponentialRampToValueAtTime(1e-4,e+l*1.7),c.connect(h),h.connect(r),c.start(e),c.stop(e+l*1.7+.1)}}pluck(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=t;let o=s.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(Math.min(t*7,6e3),e),o.frequency.exponentialRampToValueAtTime(Math.max(t*1.2,300),e+.7);let a=s.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(i*1.4,e+.006),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1),r.connect(o),o.connect(a),a.connect(this.bus),a.connect(this.delay),r.start(e),r.stop(e+1.2)}pad(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=900;let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.05,e+i*.4),o.gain.linearRampToValueAtTime(0,e+i+1.4),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-7,7]){let c=s.createOscillator();c.type="triangle",c.frequency.value=Mr(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.5)}}strings(t,e,i){let s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,e),r.frequency.linearRampToValueAtTime(1300,e+i*.6);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.034,e+i*.55),o.gain.linearRampToValueAtTime(0,e+i+1.8),r.connect(o),o.connect(this.bus);for(let a of t)for(let l of[-9,0,9]){let c=s.createOscillator();c.type="sawtooth",c.frequency.value=Mr(a),c.detune.value=l,c.connect(r),c.start(e),c.stop(e+i+1.9)}}bass(t,e,i){let s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=Mr(t);let o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.16,e+.06),o.gain.exponentialRampToValueAtTime(1e-4,e+i),r.connect(o),o.connect(this.bus),r.start(e),r.stop(e+i+.1)}drone(t,e,i){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.13,e+i*.35),r.gain.linearRampToValueAtTime(0,e+i),r.connect(this.bus);for(let[o,a]of[[0,"sine"],[7,"sine"],[12,"triangle"]]){let l=s.createOscillator();l.type=a,l.frequency.value=Mr(t+o),l.connect(r),l.start(e),l.stop(e+i+.1)}}noiseHit(t,e,i,s,r,o,a=this.sfxBus){let l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loop=!0;let h=l.createBiquadFilter();h.type=i,h.frequency.value=s,h.Q.value=r;let d=l.createGain();d.gain.setValueAtTime(o,t),d.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(d),d.connect(a),c.start(t,Math.random()*.5),c.stop(t+e+.05)}tone(t,e,i,s,r,o="sine"){let a=this.ctx,l=a.createOscillator();l.type=o,l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(i,t+s);let c=a.createGain();c.gain.setValueAtTime(r,t),c.gain.exponentialRampToValueAtTime(1e-4,t+s),l.connect(c),c.connect(this.sfxBus),l.start(t),l.stop(t+s+.05)}block(t,e){if(!this.ctx)return;let i=this.ctx.currentTime,s=Yh.phases[e]??Yh.phases.break,r=Yh.materials[t]??Yh.materials.default,o=.85+Math.random()*.3;for(let a of r){if(a.skipPhases?.includes(e))continue;let l=a.seconds??s.length*(a.lengthScale??1),c=a.jitter===!1?1:o,h=i+(a.delayJitter?Math.random()*a.delayJitter:0);a.type==="noise"?this.noiseHit(h,l,a.filter,a.freq*c,a.q,a.gain*s.loud):this.tone(h,a.from*c,a.to,l,a.gain*s.loud,a.wave??"sine")}}pickup(){if(!this.ctx)return;let t=this.ctx.currentTime,e=520+Math.random()*260;this.tone(t,e,e*2,.09,.14)}craft(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,660,660,.12,.12,"triangle"),this.tone(t+.07,990,990,.16,.12,"triangle"),this.noiseHit(t,.06,"bandpass",2400,1.5,.15)}toolBreak(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.25,"bandpass",1400,1,.5),this.tone(t,300,80,.3,.3,"square")}hurt(){if(!this.ctx)return;let t=this.ctx.currentTime;this.tone(t,180,60,.22,.45,"triangle"),this.noiseHit(t,.18,"bandpass",500,.9,.35)}eat(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.07,"bandpass",1500+Math.random()*600,1.4,.45),this.noiseHit(t+.05,.05,"highpass",3200,.8,.18)}villager(){if(!this.ctx)return;let t=this.ctx.currentTime,e=150+Math.random()*40;this.tone(t,e,e*1.15,.11,.2,"triangle"),this.tone(t+.14,e*1.2,e*.95,.15,.18,"triangle")}click(){this.ctx&&this.tone(this.ctx.currentTime,900,700,.04,.08,"square")}splash(){if(!this.ctx)return;let t=this.ctx.currentTime;this.noiseHit(t,.5,"bandpass",1200,.6,.5),this.noiseHit(t+.05,.4,"highpass",3e3,.5,.2)}};var lt=16,Kh=n=>Math.max(0,Math.min(255,Math.round(n))),ll=[0,0,0,0];function yg(n,t){let e=Array.from({length:t*t},n);return(i,s)=>{let r=i/lt*t,o=s/lt*t,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=(p,x)=>e[x%t*t+p%t],u=c*c*(3-2*c),f=h*h*(3-2*h);return(d(a,l)*(1-u)+d(a+1,l)*u)*(1-f)+(d(a,l+1)*(1-u)+d(a+1,l+1)*u)*f}}var ei=(n,t,e=[1,1,1])=>[n[0]+t*e[0],n[1]+t*e[1],n[2]+t*e[2],255],Mw={noise(n,t){let e=(n.noise||[]).map(o=>({f:yg(t,o.cells),amp:o.amp})),i=n.channels||[1,1,1],s=n.specks||{},r=n.edge?.width??0;return(o,a)=>{if(n.holes&&t()<n.holes)return ll;let l=0;for(let{f:c,amp:h}of e)l+=(c(o,a)-.5)*h;if(l+=(t()-.5)*(n.jitter||0),s.dark||s.light){let c=t();s.dark&&c<s.dark.chance?l+=s.dark.amount:s.light&&c>1-s.light.chance&&(l+=s.light.amount)}return r&&(o<r||a<r||o>lt-1-r||a>lt-1-r)&&(l+=n.edge.amount),ei(n.base,l,i)}},capped(n,t,e){let i=e.sub(n.cap,t),s=e.sub(n.body,t),r=n.depth||{min:3},o=Array.from({length:lt},()=>(r.min??3)+(r.bonus||[]).reduce((a,l)=>a+(t()<l.chance?l.amount:0),0));return(a,l)=>l<o[a]?i(a,l):s(a,l)},bark(n,t){let e=Array.from({length:lt},()=>(t()-.5)*n.columnVariance),i=n.channels||[1,1,1];return(s,r)=>{let o=e[s]+(t()-.5)*n.jitter;return n.grooveEvery&&s%n.grooveEvery===0&&(o-=n.grooveDarken),t()<(n.speckChance||0)&&(o-=n.speckDarken||0),ei(n.base,o,i)}},rings(n,t){return(e,i)=>{let s=e-7.5,r=i-7.5;if(Math.max(Math.abs(s),Math.abs(r))>8-(n.barkWidth??1.6))return ei(n.bark,(t()-.5)*(n.jitter??12));let o=Math.floor(Math.hypot(s,r)*(n.ringScale??.9))%2;return ei(o?n.light:n.dark,(t()-.5)*(n.jitter??12))}},planks(n,t){let e=n.boardHeight||4,i=Math.ceil(lt/e),s=Array.from({length:i},()=>(t()-.5)*n.boardVariance),r=Array.from({length:i},()=>Math.floor(t()*12+2)),o=n.channels||[1,1,1];return(a,l)=>{let c=Math.floor(l/e),h=s[c]+(t()-.5)*n.jitter;return l%e===e-1&&(h-=n.gapDarken),r[c]===a&&(h-=n.seamDarken),t()<(n.grainChance||0)&&(h-=n.grainDarken||0),ei(n.base,h,o)}},cells(n,t){let e=Array.from({length:n.points},()=>({x:t()*lt,y:t()*lt,shade:(t()-.5)*n.spread}));return(i,s)=>{let r=1e9,o=1e9,a=0;for(let c of e)for(let h of[-lt,0,lt])for(let d of[-lt,0,lt]){let u=Math.hypot(i-(c.x+h),s-(c.y+d));u<r?(o=r,r=u,a=c.shade):u<o&&(o=u)}let l=a+(t()-.5)*n.jitter;return o-r<n.creviceWidth&&(l=n.creviceValue),ei(n.base,l)}},waves(n,t){let e=yg(n.seed!=null?On(n.seed):t,4),i=n.channels||[1,1,1],s=n.phase||0;return(r,o)=>ei(n.base,Math.sin((r+o*.7)*n.frequency+e(r,o)*4+s)*n.amplitude,i)},bricks(n,t){let e=n.brickWidth||8,i=n.rowHeight||4;return(s,r)=>{let o=Math.floor(r/i)%2?e/2:0,a=r%i===i-1||(s+o)%e===e-1,l=(t()-.5)*(n.variance??22);return a?ei(n.mortar,l*.4):ei(n.brick,l,[1,.5,.4])}},ore(n,t,e){let i=e.sub(n.base,t),s=new Map,r=[];for(let l=0,c=n.clusters??6;r.length<c&&l<80;l++){let h=2+Math.floor(t()*11),d=2+Math.floor(t()*11);if(r.some(([p,x])=>Math.abs(p-h)<4&&Math.abs(x-d)<4))continue;let u=2+Math.floor(t()*2),f=2+Math.floor(t()*2);r.push([h,d]);for(let p=0;p<f;p++)for(let x=0;x<u;x++)(x===0||x===u-1)&&(p===0||p===f-1)&&u+f>4&&t()<.6||s.set(h+x+","+(d+p),1)}let o=(l,c)=>s.has(l+","+c),a=(l,c)=>l.map(h=>h*c);return(l,c)=>{if(o(l,c))return!o(l,c-1)||!o(l-1,c)?ei(n.light,(t()-.5)*14):!o(l,c+1)||!o(l+1,c)?ei(a(n.color,.8),(t()-.5)*10):ei(n.color,(t()-.5)*14);let h=!1;for(let u=-1;u<=1&&!h;u++)for(let f=-1;f<=1;f++)if((f||u)&&o(l+f,c+u)){h=!0;break}let d=i(l,c);return h?[d[0]*.62,d[1]*.62,d[2]*.62,d[3]??255]:d}},stripes(n,t){let e=n.darkColumns||[1,2];return i=>ei(e.includes(i%n.period)?n.dark:n.light,(t()-.5)*n.jitter,[1,.8,.6])},blades(n,t){let e=new Map;for(let i=0;i<n.count;i++){let s=Math.round((i+.5)*lt/n.count+(t()-.5)*1.5),r=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1)),o=t()<.5?-1:1;for(let a=0;a<r;a++){let l=a/r,c=(t()-.5)*22,h=l<.35?n.dark:l<.75?n.mid:n.tip;e.set(`${s+(a>r*.6?o:0)},${lt-1-a}`,[h[0]+c,h[1]+c,h[2]+c*.5,255])}}return(i,s)=>e.get(i+","+s)??ll},stalks(n,t){let e=new Map;for(let i=0;i<lt;i+=n.spacing||2){let s=n.minHeight+Math.floor(t()*(n.maxHeight-n.minHeight+1));for(let r=0;r<s;r++){let o=(t()-.5)*16;e.set(`${i},${lt-1-r}`,[n.stem[0]+o,n.stem[1]+o,n.stem[2]+o*.5,255])}for(let r=0;r<n.headLength;r++){let o=lt-s-1+r;for(let a of r===0?[0]:[0,1]){let l=(t()-.5)*24,c=r%2?n.headDark:n.headLight;e.set(`${Math.min(lt-1,i+a)},${o}`,[c[0]+l,c[1]+l,c[2]+l*.5,255])}}}return(i,s)=>e.get(i+","+s)??ll},pixelart(n){return(t,e)=>{let i=n.rows[e]?.[t],s=i&&i!=="."?n.palette[i]:null;return s?[s[0],s[1],s[2],s[3]??255]:ll}},image(n,t,e){let i=e.images?.[n.src];return(s,r)=>{if(!i)return[255,0,255,255];let o=(r*lt+s)*4;return[i[o],i[o+1],i[o+2],i[o+3]]}},layers(n,t,e){let i=n.layers.map(s=>vf(s,t,e));return(s,r)=>{let o=ll;for(let a of i){let l=a(s,r);l[3]>0&&(o=l)}return o}},ref(n,t,e){return e.sub(n.tile,t)}};function vf(n,t,e){let i=Mw[n.type];if(!i)throw new Error(`unknown texture type "${n.type}"`);return i(n,t,e)}function bw(n,t){let e={tiles:n,images:t,depth:0,sub(i,s){let r=n[i];if(!r)throw new Error(`texture "${i}" is not defined`);if(e.depth>8)throw new Error(`texture "${i}" refers to itself`);e.depth++;try{return vf(r,s,e)}finally{e.depth--}}};return e}function vg(n,t,e={},i={}){let s=bw(e,i),r=vf(n,On(t),s),o=new Uint8ClampedArray(lt*lt*4);for(let a=0;a<lt;a++)for(let l=0;l<lt;l++){let c=r(l,a),h=(a*lt+l)*4;o[h]=Kh(c[0]),o[h+1]=Kh(c[1]),o[h+2]=Kh(c[2]),o[h+3]=Kh(c[3])}return o}var Mg=n=>12648430+n*7919,bg=(n,t,e,i)=>vg(e[n],Mg(t),e,i),_g={pickaxe:["....dddddd....","..ddLLllbbdd..",".dLllbbbbbbbd.","dLlbd....hHobd","dlbd....hHo.dd","dbd....hHo....","dd....hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"],axe:["........dd...","......ddLLd..",".....dlLbld..","....dLlbbbhh.","....dLllbmbo.",".....dddhbmld","......hhhdbbd","......hhhhbbd",".....hhHo.dd.","....hhoo.....","...hho.......","..hHo........",".hho.........","hHo..........","oo..........."],shovel:["..........ddd.",".........dLLbd","........dLlbLd","......ddLlblLd","........hblLd.","......hhHoLd..",".....hHHo.d...",".....hHHo.d...","....hhoo......","...hHo........","..hho.........","ohHo..........","hHo...........","ho............"],hoe:["...ddddd......","..dLLllbbd....","..dLllbbbbd...","..ddddddbbd...","........dbhHo.",".......hHbo...","......hHo.....",".....hHo......","....hHo.......","...hHo........","..hHo.........",".hHo..........","hHo...........","oo............"]},Sw={shovel:["........dddd....","......ddLLLLdd..",".....dLLllbbLd..","....dLllllbbbld.","....dLllllbbbbd.","....dllllbbbbmd.",".....dlllbbbbmd.","......dlbbbbmd..",".....hhddbbmd...","....hHHod.dd....","...hHHo.........","..hhHo..........",".hHHo...........","hHHo............","hHo.............","oo.............."]};function ww(n,t,e,i=!1){let s=i&&Sw[n]||_g[n]||_g.shovel,r=t.light.map(h=>h+(255-h)*.45),o={d:t.dark,b:t.base,m:t.base.map(h=>h*.8),l:t.light,L:r,H:e[0],h:e[1],o:e[1].map(h=>h*.5)},a=lt-s.length,l=Math.min(1,lt-s[0].length),c=new Map;return s.forEach((h,d)=>[...h].forEach((u,f)=>{o[u]&&c.set(f+l+","+(d+a),o[u])})),c}function Sg(n,t,e,i={},s=!1){let r=e.sprites?.[n];if(r)return vg(r,Mg(900),e.tiles,i);if(t?.tool){let o=e.toolHeads[t.tool.head],a=ww(t.tool.type,o,e.toolHandle||[[148,108,58],[104,74,38]],s),l=new Uint8ClampedArray(lt*lt*4);for(let[c,h]of a){let[d,u]=c.split(",").map(Number);if(d<0||u<0||d>=lt||u>=lt)continue;let f=(u*lt+d)*4;l[f]=h[0],l[f+1]=h[1],l[f+2]=h[2],l[f+3]=255}return l}throw new Error(`item "${n}" has no sprite`)}function wg(n){let t=new Set,e=i=>{if(i){i.type==="image"&&t.add(i.src);for(let s of i.layers||[])e(s)}};return Object.values(n.tiles||{}).forEach(e),Object.values(n.sprites||{}).forEach(e),[...t]}var Uo=10,Ew=.15,Tw=n=>Math.max(0,Math.min(Uo-1,Math.floor(n*Uo))),Jh=class{constructor(){this.cooldown=0,this.reset()}reset(){this.key=null,this.progress=0}idle(t){this.cooldown=Math.max(0,this.cooldown-t)}tick(t,e,i){if(e!==this.key&&(this.key=e,this.progress=0),this.cooldown>0){let s=Math.min(t,this.cooldown);this.cooldown-=s,t-=s}return t<=0?!1:(this.progress+=t/Math.max(i,.02),this.progress>=1?(this.reset(),this.cooldown=Ew,!0):!1)}get stage(){return Tw(this.progress)}};function Eg(n=16,t=4242){let e=On(t),i=(n-1)/2,r=n*.6/Uo,o=Array.from({length:8},(h,d)=>({x:i+(e()-.5)*2,y:i+(e()-.5)*2,a:d/8*Math.PI*2+(e()-.5)*.5,fork:d%2===0?2+Math.floor(e()*3):4+Math.floor(e()*3),life:1})),a=[],l=new Set,c=[];for(let h=0;h<Uo;h++){for(let d of o.slice()){for(let f=0;f<3;f++){d.a+=(e()-.5)*.5,d.x+=Math.cos(d.a)*r*d.life/3,d.y+=Math.sin(d.a)*r*d.life/3;let p=Math.round(d.x),x=Math.round(d.y),g=p+","+x;p>=0&&x>=0&&p<n&&x<n&&!l.has(g)&&(l.add(g),c.push([p,x]))}d.fork===h&&o.push({x:d.x,y:d.y,a:d.a+(e()<.5?1:-1)*.9,fork:-1,life:.85})}a.push(c.slice())}return a}var Mf=n=>Math.max(0,Math.min(255,n|0));function kn(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}var Sf={};async function Aw(){let n=new URL("../data/",import.meta.url);for(let t of wg(It.textures))try{let e=new Image;e.src=new URL(t,n).href,await e.decode();let i=kn(lt,lt),s=i.getContext("2d");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0,lt,lt),Sf[t]=s.getImageData(0,0,lt,lt).data}catch{console.warn("textures.json: could not load image",t)}}function Tg(n){let t=n.getContext("2d"),e=s=>{let r=Ei.indexOf(s);return[r%Ee*lt,Math.floor(r/Ee)*lt]},i=Object.entries(It.animations).map(([s,r])=>({at:e(s),fps:r.fps,shown:0,frames:r.frames.map(o=>{let[a,l]=e(o);return t.getImageData(a,l,lt,lt)})}));return s=>{let r=!1;for(let o of i){let a=Math.floor(Math.max(0,s)*o.fps)%o.frames.length;a!==o.shown&&(t.putImageData(o.frames[a],o.at[0],o.at[1]),o.shown=a,r=!0)}return r}}async function Ag(){await Aw();let n=kn(Ee*lt,qs*lt),t=n.getContext("2d"),e={};return Ei.forEach((i,s)=>{let r=bg(i,s,It.tiles,Sf);t.putImageData(new ImageData(r,lt,lt),s%Ee*lt,Math.floor(s/Ee)*lt);let o=0,a=0,l=0,c=0;for(let h=0;h<r.length;h+=4)r[h+3]>0&&(o+=r[h],a+=r[h+1],l+=r[h+2],c++);e[i]=c?[o/c/255,a/c/255,l/c/255]:[.5,.5,.5]}),{canvas:n,avg:e}}function Cg(n){let t={};for(let[e,i]of Object.entries(Be))t[e]=n[i.side];return t}function Rg(){let t=kn(128,128),e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"#ffffff"),i.addColorStop(.35,"#fffbd0"),i.addColorStop(.72,"#ffe45c"),i.addColorStop(.94,"#ffb92e"),i.addColorStop(1,"rgba(255, 170, 40, 0)"),e.fillStyle=i,e.beginPath(),e.arc(128/2,128/2,128/2,0,Math.PI*2),e.fill(),t}function Ig(){let e=kn(512,256),i=e.getContext("2d"),s=On(2024),r=i.createImageData(512,256),o=32,a=16,l=Array.from({length:o*a},s),c=(h,d)=>{let u=h*o,f=d*(a-1),p=Math.floor(u),x=Math.floor(f),g=u-p,m=f-x,w=(S,M)=>l[Math.min(a-1,M)*o+(S%o+o)%o],R=g*g*(3-2*g),v=m*m*(3-2*m);return(w(p,x)*(1-R)+w(p+1,x)*R)*(1-v)+(w(p,x+1)*(1-R)+w(p+1,x+1)*R)*v};for(let h=0;h<256;h++)for(let d=0;d<512;d++){let u=d/512,f=h/256,p=c(u*4%1,f)*.5+c(u*8%1,f)*.3+s()*.12,x=c(u*1%1,f),g=Math.max(0,Math.min(1,(x-.5)*3.2)),m=196+(p-.45)*46;m=m*(1-g*.42);let w=(h*512+d)*4;r.data[w]=m,r.data[w+1]=m*.995,r.data[w+2]=m*1.02,r.data[w+3]=255}i.putImageData(r,0,0);for(let h=0;h<90;h++){let d=s()*512,u=256*(.15+s()*.7),f=2+Math.pow(s(),2.2)*15,p=f*(1+Math.abs(u/256-.5)*.9),x=i.createRadialGradient(d-f*.25,u-f*.25,f*.1,d,u,f);x.addColorStop(0,"rgba(70,72,82,0.55)"),x.addColorStop(.72,"rgba(90,92,102,0.35)"),x.addColorStop(.88,"rgba(235,235,240,0.5)"),x.addColorStop(1,"rgba(235,235,240,0)"),i.save(),i.translate(d,u),i.scale(p/f,1),i.translate(-d,-u),i.fillStyle=x,i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill(),i.restore()}return e}function Pg(){let n=kn(128,128),t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.25,"rgba(220,228,255,0.35)"),e.addColorStop(.6,"rgba(190,205,255,0.1)"),e.addColorStop(1,"rgba(190,205,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),n}function Lg(){let n=kn(lt*Uo,lt),t=n.getContext("2d");return Eg(lt).forEach((e,i)=>{t.fillStyle="rgba(0,0,0,0.72)";for(let[s,r]of e)t.fillRect(i*lt+s,r,1,1)}),n}function Cw(n,t,e=44){let i=Be[t],s=kn(e,e),r=s.getContext("2d");r.imageSmoothingEnabled=!1;let o=e/2,a=o/2,l=o,c=u=>{let f=Ei.indexOf(u);return[f%Ee*lt,Math.floor(f/Ee)*lt]},h=(u,f,p)=>{let[x,g]=c(u);r.save(),r.transform(...f),r.drawImage(n,x,g,lt,lt,0,0,lt,lt),r.fillStyle=`rgba(0,0,0,${p})`,r.fillRect(0,0,lt,lt),r.restore()},d=o;if(us[t]===1){let u=(f,p,x,g,m,w)=>{let R=(v,S,M,C,_,T,I)=>{let[P,U]=c(v);r.save(),r.transform(...S),r.drawImage(n,P+M*lt,U+C*lt,(_-M)*lt,(T-C)*lt,M*lt,C*lt,(_-M)*lt,(T-C)*lt),r.fillStyle=`rgba(0,0,0,${I})`,r.fillRect(M*lt,C*lt,(_-M)*lt,(T-C)*lt),r.restore()};R(i.top,[o/lt,a/lt,-o/lt,a/lt,d,(1-w)*l],f,x,p,g,0),R(i.side,[o/lt,a/lt,0,l/lt,d-o,a],f,1-w,p,1-m,.25),R(i.side,[o/lt,-a/lt,0,l/lt,d+(p-1)*o,2*a+(p-1)*a],1-g,1-w,1-x,1-m,.45)};return u(0,1,0,1,0,.5),u(0,.5,0,1,.5,1),s}return h(i.top,[o/lt,a/lt,-o/lt,a/lt,d,0],0),h(i.side,[o/lt,a/lt,0,l/lt,d-o,a],.25),h(i.side,[o/lt,-a/lt,0,l/lt,d,2*a],.45),s}var bf=new Map;function wf(n,t=!1){let e=t?"h"+n:n;if(bf.has(e))return bf.get(e);let i=Sg(K0(n),It.itemById.get(n),It.textures,Sf,t),s=kn(lt,lt);return s.getContext("2d").putImageData(new ImageData(i,lt,lt),0,0),bf.set(e,s),s}function Ng(n,t=3){let e=kn(9*t,9*t),i=e.getContext("2d");i.imageSmoothingEnabled=!1;for(let s=1;s<8;s++)for(let r=0;r<9;r++){let o=((r-4)/4.4)**2+((s-4.3)/3.2)**2;if(o>1)continue;let a=o>.7,l=n===2||n===1&&r<5;i.fillStyle=l?a?"#7a4a1e":s<4?"#e2a24e":"#c0782e":a?"#2a2a2e":"#4a4a52",i.fillRect(r*t,s*t,t,t)}return e}var Rw=["#########","#@@@@@%%#","#@@%%%%%#","#@%%%%%o#","#@%%%%%o#",".#%%%%o#.","..#%%o#..","...#o#...","....#...."];function Dg(n,t=3){let e=kn(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,Rw.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;i.fillStyle=o==="#"?l?"#4a4a58":"#2a2a2e":l?o==="@"?"#f2f2fa":o==="%"?"#c4c4d4":"#8e8ea4":"#4a4a52",i.fillRect(a*t,r*t,t,t)})),e}var Iw=[".##...##.","#@@#.#@@#","#@@@#@@@#","#@@@@@@@#",".#@@@@@#.","..#@@@#..","...#@#...","....#...."];function Ug(n,t=3){let e=kn(9*t,9*t),i=e.getContext("2d");return i.imageSmoothingEnabled=!1,Iw.forEach((s,r)=>[...s].forEach((o,a)=>{if(o===".")return;let l=n===2||n===1&&a<5;o==="#"?i.fillStyle=l?"#7a0f12":"#2a2a2e":i.fillStyle=l?r<3?"#ff5a5a":"#d92a2a":"#4a4a52",i.fillRect(a*t,(r+1)*t,t,t)})),n>0&&(i.fillStyle="rgba(255,255,255,0.65)",i.fillRect(2*t,2*t,t,t)),e}function Og(n,t,e=44){let i=Be[t].side,s=Ei.indexOf(i),r=kn(e,e),o=r.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(n,s%Ee*lt,Math.floor(s/Ee)*lt,lt,lt,0,0,e,e),r}function br(n,t,e=44){if(Zs(t))return Cw(n,t,e);let i=kn(e,e),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(wf(t),0,0,e,e),i}function jh(n,t="VOXELCRAFT",e=6){let r=(t.length*6+1)*e+e*2,o=9*e+e,a=kn(r,o),l=a.getContext("2d");l.imageSmoothingEnabled=!1;let c=n.getContext("2d"),h=Math.max(0,Ei.indexOf("stone")),[d,u]=[h%Ee*lt,Math.floor(h/Ee)*lt],f=c.getImageData(d,u,lt,lt).data,p=w0(t),x=new Set(p.map(([g,m])=>g+","+m));l.fillStyle="rgba(0,0,0,0.45)";for(let[g,m]of p)l.fillRect(g*e+e+4,m*e+e+4,e,e);for(let[g,m]of p){let w=(m%lt*lt+g%lt)*4,R=1.15;l.fillStyle=`rgb(${Mf(f[w]*R)},${Mf(f[w+1]*R)},${Mf(f[w+2]*R)})`,l.fillRect(g*e+e,m*e+e,e,e);let v=g*e+e,S=m*e+e;l.fillStyle="rgba(255,255,255,0.35)",x.has(g+","+(m-1))||l.fillRect(v,S,e,2),x.has(g-1+","+m)||l.fillRect(v,S,2,e),l.fillStyle="rgba(0,0,0,0.45)",x.has(g+","+(m+1))||l.fillRect(v,S+e-2,e,2),x.has(g+1+","+m)||l.fillRect(v+e-2,S,2,e)}return a}function Fg(n,t=4){let e=Math.max(0,Ei.indexOf("dirt")),i=kn(lt*t,lt*t),s=i.getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(n,e%Ee*lt,Math.floor(e/Ee)*lt,lt,lt,0,0,lt*t,lt*t),i.toDataURL()}var Oo=new Map;function Fo(n){let t="b"+n;if(Oo.has(t))return Oo.get(t);let e=Be[n],i=new Dn(1,1,1),s=i.attributes.uv,r=[e.side,e.side,e.top,e.bottom,e.side,e.side],o=[.82,.82,1,.5,.68,.68],a=new Float32Array(72);return r.forEach((l,c)=>{let h=Ei.indexOf(l),d=h%Ee/Ee,u=1-(Math.floor(h/Ee)+1)/qs;for(let f=0;f<4;f++){let p=c*4+f;s.setXY(p,d+s.getX(p)/Ee,u+s.getY(p)/qs),a.set([o[c],o[c],o[c]],p*3)}}),i.setAttribute("color",new ye(a,3)),Oo.set(t,i),i}function cl(n,t=!1){let e=(t?"sh":"s")+n;if(Oo.has(e))return Oo.get(e);let s=wf(n,t).getContext("2d").getImageData(0,0,16,16).data,r=(d,u)=>d>=0&&u>=0&&d<16&&u<16&&s[(u*16+d)*4+3]>0,o=[],a=[],l=(ti(n)?3.4:1.5)/16,c=(d,u,f,p,x,g)=>{for(let m of[d,u,f,d,f,p])o.push(...m),a.push(x[0]*g,x[1]*g,x[2]*g)};for(let d=0;d<16;d++)for(let u=0;u<16;u++){if(!r(u,d))continue;let f=(d*16+u)*4,p=[s[f]/255,s[f+1]/255,s[f+2]/255],x=u/16-.5,g=(u+1)/16-.5,m=.5-d/16,w=.5-(d+1)/16,R=l/2,v=-l/2;c([x,w,R],[g,w,R],[g,m,R],[x,m,R],p,1),c([g,w,v],[x,w,v],[x,m,v],[g,m,v],p,.78),r(u+1,d)||c([g,w,R],[g,w,v],[g,m,v],[g,m,R],p,.85),r(u-1,d)||c([x,w,v],[x,w,R],[x,m,R],[x,m,v],p,.85),r(u,d-1)||c([x,m,R],[g,m,R],[g,m,v],[x,m,v],p,.95),r(u,d+1)||c([x,w,v],[g,w,v],[g,w,R],[x,w,R],p,.6)}let h=new qe;return h.setAttribute("position",new ye(new Float32Array(o),3)),h.setAttribute("color",new ye(new Float32Array(a),3)),Oo.set(e,h),h}var Pw=160,Lw=300,Qh=class{constructor(t,e,i,s){this.world=e,this.blockMat=i,this.spriteMat=s,this.group=new Ze,t.add(this.group),this.items=[]}spawn(t,e,i,s,r,{d:o=0,delay:a=.5,vx:l,vy:c,vz:h,life:d=Lw,age:u=0}={}){this.items.length>=Pw&&this.remove(0);let f=Zs(t),p=new we(f?Fo(t):cl(t),f?this.blockMat:this.spriteMat);p.scale.setScalar(f?.28:.5),this.group.add(p),this.items.push({id:t,n:e,d:o,mesh:p,x:i,y:s,z:r,age:u,life:d,delay:a,vx:l??(Math.random()-.5)*2.4,vy:c??3+Math.random()*1.5,vz:h??(Math.random()-.5)*2.4,spin:Math.random()*6,block:f})}serialize(){return this.items.map(t=>({id:t.id,n:t.n,d:t.d,x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),age:Math.round(t.age),life:t.life}))}load(t){for(let e of Array.isArray(t)?t:[])this.spawn(e.id,e.n,e.x,e.y,e.z,{d:e.d,delay:.3,vx:0,vy:0,vz:0,life:e.life,age:e.age})}remove(t){let e=this.items[t];this.group.remove(e.mesh),this.items.splice(t,1)}solid(t,e,i){return We[this.world.getBlock(Math.floor(t),Math.floor(e),Math.floor(i))]>0}update(t,e,i,s){for(let r=this.items.length-1;r>=0;r--){let o=this.items[r];if(o.age+=t,o.age>o.life){this.remove(r);continue}if(!this.world.isLoaded(o.x,o.z))continue;let a=o.block?.14:.2,l=e.x-o.x,c=e.y+.7-o.y,h=e.z-o.z,d=Math.hypot(l,c,h),u=o.age>o.delay&&i(o);if(u&&d<.9&&s(o)){this.remove(r);continue}if(u&&d<2.6){let m=14*t/Math.max(d,.3);o.vx+=l*m,o.vy+=c*m,o.vz+=h*m,o.vx*=.9,o.vy*=.9,o.vz*=.9}else o.vy-=20*t;let f=o.x+o.vx*t,p=o.y+o.vy*t,x=o.z+o.vz*t;this.solid(f,o.y,o.z)&&(f=o.x,o.vx=0),this.solid(f,o.y,x)&&(x=o.z,o.vz=0),this.solid(f,p-a,x)?(p=Math.floor(p-a)+1+a,o.vy<0&&(o.vy=0),o.vx*=.8,o.vz*=.8):this.solid(f,p+a,x)&&o.vy>0&&(o.vy=0,p=o.y),o.x=f,o.y=p,o.z=x;let g=Math.sin(o.age*3+o.spin)*.05+.1;o.mesh.position.set(o.x,o.y+g,o.z),o.mesh.rotation.y=o.age*1.8+o.spin}}};var gs=0,Sr=1,xs=2,hl=n=>Ks(n)>0,kg=n=>!!lf(n);function Bg(){return{slots:[null,null,null],burn:0,burnMax:0,progress:0,working:0}}function tu(n){let t=n.slots[gs],e=n.slots[xs],i=t?lf(t.id):null,s=!!i&&(!e||e.id===i.out&&e.n<Wn(i.out));return{rec:i,can:s}}function Nw(n,t){let{rec:e,can:i}=tu(n),s=n.slots[gs],r=n.slots[Sr];if(n.working!==(e?e.in:0)&&(n.working=e?e.in:0,n.progress=0),n.burn<=0&&i&&r&&hl(r.id)&&(n.burn=n.burnMax=Ks(r.id),--r.n<=0&&(n.slots[Sr]=null)),n.burn>0){if(n.burn=Math.max(0,n.burn-t),n.burn<=0){let o=tu(n),a=n.slots[Sr];o.can&&a&&hl(a.id)&&(n.burnMax=n.burn=Ks(a.id),--a.n<=0&&(n.slots[Sr]=null))}i?(n.progress+=t,n.progress>=e.seconds&&(n.progress-=e.seconds,--s.n<=0&&(n.slots[gs]=null,n.progress=0),n.slots[xs]?n.slots[xs].n+=1:n.slots[xs]={id:e.out,n:1,d:0})):n.progress=Math.max(0,n.progress-2*t)}else n.progress=Math.max(0,n.progress-2*t)}var Dw=n=>n.burn>0,Uw=n=>n.slots.every(t=>!t)&&n.burn<=0&&n.progress<=0;function zg(n,t,e,i=0){if(t===xs){let r=n.slots[xs];if(!r)return{cursor:e,took:null};if(e&&(e.id!==r.id||e.n+r.n>Wn(r.id)))return{cursor:e,took:null};let o={...r};return n.slots[xs]=null,{cursor:e?{...e,n:e.n+r.n}:r,took:o}}let s=t===gs?kg:hl;return{cursor:pf(n.slots,t,e,i,s),took:null}}function Hg(n,t){let e=kg(t.id)?gs:hl(t.id)?Sr:-1;if(e<0)return t.n;let i=n.slots[e],s=Wn(t.id);if(!i)return n.slots[e]={id:t.id,n:t.n,d:t.d},0;if(i.id!==t.id)return t.n;let r=Math.min(s-i.n,t.n);return i.n+=r,t.n-r}function Vg(n,t,e){let i={input:0,fuel:0},s=n.slots[gs];if(s&&s.id!==e.in)return i;let r=Wn(e.in)-(s?s.n:0),o=Math.min(r,t.count(e.in));if(o>0&&(t.remove(e.in,o),s?s.n+=o:n.slots[gs]={id:e.in,n:o,d:0},i.input=o),!n.slots[Sr]&&n.burn<=0&&n.slots[gs]){let a=n.slots[gs].n*e.seconds,l=u=>t.count(u),c=[...new Set(t.slots.filter(u=>u&&hl(u.id)&&u.id!==e.in).map(u=>u.id))].map(u=>({id:u,per:Ks(u),total:l(u)*Ks(u)})),d=c.filter(u=>u.total>=a).sort((u,f)=>u.per-f.per)[0]??c.sort((u,f)=>f.total-u.total)[0];if(d){let u=Math.min(Wn(d.id),l(d.id),Math.ceil(a/d.per));t.remove(d.id,u),n.slots[Sr]={id:d.id,n:u,d:0},i.fuel=u}}return i}var eu=class n{constructor(t={}){this.map=new Map,this.hooks=t}static key(t,e,i){return t+","+e+","+i}get(t,e,i){let s=n.key(t,e,i);if(!this.map.has(s)){let r=Bg();r.lit=null,this.map.set(s,r)}return this.map.get(s)}has(t,e,i){return this.map.has(n.key(t,e,i))}remove(t,e,i){let s=n.key(t,e,i),r=this.map.get(s);return this.map.delete(s),r?r.slots.filter(Boolean):[]}update(t){for(let[e,i]of this.map){Nw(i,t);let s=Dw(i);if(s!==i.lit){let[r,o,a]=e.split(",").map(Number);this.hooks.onLit?.(r,o,a,s)!==!1&&(i.lit=s)}}}serialize(){let t={};for(let[e,i]of this.map)Uw(i)||(t[e]={slots:i.slots.map(s=>s?[s.id,s.n,s.d||0]:null),burn:i.burn,burnMax:i.burnMax,progress:i.progress});return t}load(t){this.map.clear();for(let[e,i]of Object.entries(t||{})){let s=Bg();s.slots=[0,1,2].map(r=>i.slots?.[r]?{id:i.slots[r][0],n:i.slots[r][1],d:i.slots[r][2]||0}:null),s.burn=i.burn||0,s.burnMax=i.burnMax||0,s.progress=i.progress||0,s.lit=null,this.map.set(e,s)}}};var Pe=n=>document.getElementById(n);function Gg({atlas:n,inventory:t,getHotbarStack:e,onCraft:i,onToss:s,onPalettePick:r,onSelect:o,onSmeltTake:a,onEquip:l,onNotice:c}){let h=new Map,d=E=>(h.has(E)||h.set(E,br(n,E,44).toDataURL()),h.get(E));function u(E,y=""){let N=document.createElement("div");if(N.className="slot "+y,E){let O=document.createElement("img");if(O.src=d(E.id),O.draggable=!1,N.appendChild(O),E.n>1){let ht=document.createElement("span");ht.className="count",ht.textContent=E.n,N.appendChild(ht)}let X=il(E.id);if(X&&E.d>0){let ht=document.createElement("div");ht.className="dura";let K=1-E.d/X;ht.innerHTML=`<i style="width:${Math.max(6,K*100)}%;background:hsl(${K*120},80%,48%)"></i>`,N.appendChild(ht)}N.dataset.tip=En(E.id),X&&(N.dataset.tipSub=`Durability ${X-E.d} / ${X}`);let st=fs(E.id);st&&(N.dataset.tipSub=st.armor?`Armor +${st.armor}  (${Co.find(ht=>ht.id===st.slot)?.label})`:st.slots?`Backpack: adds ${st.slots} inventory slots`:`Wear it in the ${Co.find(ht=>ht.id===st.slot)?.label} slot`)}return N}let f=Pe("hotbar");function p(E){f.replaceChildren();for(let y=0;y<Io;y++){let N=u(e(y),y===E?"sel":""),O=document.createElement("span");O.className="num",O.textContent=y+1,N.appendChild(O),N.addEventListener("mousedown",X=>{X.stopPropagation(),o(y)}),f.appendChild(N)}}let x=Pe("inventory"),g=Pe("inv-grid"),m=Pe("inv-hotbar"),w=Pe("recipes"),R=Pe("cursor-item"),v=null,S=!1;function M(E){let y=u(t.slots[E]);return y.addEventListener("mousedown",N=>{N.preventDefault(),N.stopPropagation();let O=t.slots[E];if(N.shiftKey&&N.button===0&&O&&(fs(O.id)||Ri(O.id))&&t.quickEquip(E))l?.();else if(N.shiftKey&&N.button===0&&F){if(O){let X=Hg(F,O);X<=0?t.slots[E]=null:O.n=X}}else N.shiftKey&&N.button===0?t.quickMove(E):v=t.clickSlot(E,v,N.button===2?2:0);zt()}),y}let C=Pe("equip-row"),_={};function T(){C.replaceChildren();for(let E of Co){let y=t.equipment[E.id],N=document.createElement("div");N.className="equip-cell";let O=u(y,"equip"+(y?" worn":""));if(!y){let st=I(E.id);if(st){let ht=document.createElement("img");ht.src=d(st),ht.className="ghost",ht.draggable=!1,O.appendChild(ht)}O.dataset.tip=E.label,O.dataset.tipSub=E.id==="shield"?"A shield, or torches to hold in your off hand (G places one)":"Drop a "+E.label.toLowerCase()+" here to wear it"}O.addEventListener("mousedown",st=>{if(st.preventDefault(),st.stopPropagation(),st.shiftKey&&st.button===0)y&&t.canFit(y.id,1)&&!(E.id==="backpack"&&t.slots.slice(ps).some(Boolean))?(t.equipment[E.id]=null,t.add(y.id,1,y.d)):y&&E.id==="backpack"&&c?.("Empty the backpack first");else{let ht=!t.equipment[E.id],K=t.clickEquip(E.id,v,st.button===2?2:0);K.refused&&c?.(K.refused),v=K.cursor,ht&&t.equipment[E.id]&&l?.()}zt()});let X=document.createElement("small");X.textContent=E.label,N.append(O,X),C.appendChild(N)}}function I(E){if(_[E]===void 0){_[E]=null;for(let y=100;y<400;y++)if(fs(y)?.slot===E){_[E]=y;break}}return _[E]}function P(){g.replaceChildren(),m.replaceChildren(),Pe("backpack-grid").replaceChildren();let E=t.capacity;for(let y=0;y<E;y++){let N=M(y);(y<Io?m:y<ps?g:Pe("backpack-grid")).appendChild(N)}Pe("backpack-box").hidden=E<=ps,T(),U(),Q(),b()}function U(){v?(R.hidden=!1,R.replaceChildren(...u(v,"bare").childNodes)):R.hidden=!0}let B=ol,D="hand",F=null,q=Pe("recipe-search"),J=Pe("recipe-only");try{J.checked=localStorage.getItem("voxelcraft.recipeOnly")==="1"}catch{}let j=()=>({table:D==="table",furnace:D==="furnace"}),k=()=>!!B[D].furnace,W=E=>{let y=q.value.trim().toLowerCase().split(/\s+/).filter(Boolean),N=E.toLowerCase();return y.every(O=>N.includes(O))};function Q(){pt();let E=B[D],y=!!E.furnace;Pe("craft-title").textContent=E.title,Pe("recipe-only-label").textContent=y?"Smeltable only":"Craftable only",Pe("furnace-panel").hidden=!y,y&&bt();let N=J.checked;w.replaceChildren();let O=0,X=(st,ht,K,it,vt,Nt,xt)=>{let gt=document.createElement("div");gt.className="recipe"+(Nt?" can":""),gt.dataset.kind=st,gt.dataset.index=ht;let Dt=u(K,"bare"),Xt=document.createElement("div");if(Xt.className="rtext",Xt.innerHTML=`<b>${it}</b><div class="ings">${vt}</div>`,gt.append(Dt,Xt),xt){let Yt=document.createElement("span");Yt.className="secs",Yt.textContent=xt,gt.appendChild(Yt)}gt.addEventListener("mousedown",Yt=>{if(Yt.preventDefault(),Yt.stopPropagation(),st==="smelt"){Vg(F,t,Gh[ht]),zt();return}let H=rl[ht];t.canCraft(H,j())&&(i(H,t.craft(H,j())),zt())}),w.appendChild(gt),O++};if(y)Gh.forEach((st,ht)=>{let K=t.count(st.in);if(N&&K<1||!W(En(st.out)+" "+En(st.in)))return;let it=`<span class="ing ${K>=1?"ok":"no"}"><img src="${d(st.in)}" draggable="false">${K}/1</span>`;X("smelt",ht,{id:st.out,n:1,d:0},En(st.out),it,K>=1,st.seconds+" s")});else{let st=j();for(let ht of E.stations)rl.forEach((K,it)=>{if(K.station!==ht)return;let vt=t.canCraft(K,st);if(N&&!vt||!W((K.label||"")+" "+En(K.out)+" "+K.ins.map(([xt])=>af(xt)).join(" ")))return;let Nt=K.ins.map(([xt,gt])=>{let Dt=t.countSpec(xt);return`<span class="ing ${Dt>=gt?"ok":"no"}"><img src="${d(yr(xt)[0])}" draggable="false">${Dt}/${gt}</span>`}).join("");X("craft",it,{id:K.out,n:K.n,d:0},K.label||En(K.out),Nt,vt)})}if(!O){let st=document.createElement("p");st.className="recipe-empty",st.textContent=q.value.trim()?"Nothing matches that search.":N?y?"Nothing in your inventory can be smelted yet.":"You cannot craft anything here yet. Untick the box to see every recipe.":"No recipes.",w.appendChild(st)}}q.addEventListener("input",Q),J.addEventListener("change",()=>{try{localStorage.setItem("voxelcraft.recipeOnly",J.checked?"1":"0")}catch{}Q()});let Mt=[Pe("fur-input"),Pe("fur-fuel"),Pe("fur-output")],yt=["Put something to smelt here","Fuel: coal, charcoal, logs, planks...","The finished items appear here"],ot="",dt=E=>E.slots.map(y=>y?y.id+":"+y.n:"-").join("|");function bt(){F&&(ot=dt(F),Mt.forEach((E,y)=>{let N=F.slots[y],O=u(N);E.replaceChildren(...O.childNodes),N?(E.dataset.tip=O.dataset.tip,delete E.dataset.tipSub):(E.dataset.tip=yt[y],delete E.dataset.tipSub)}),V())}function V(){if(!F)return;let{rec:E}=tu(F);Pe("fur-flame").classList.toggle("lit",F.burn>0),Pe("fur-flame").firstElementChild.style.height=(F.burnMax>0?Math.min(100,F.burn/F.burnMax*100):0)+"%",Pe("fur-arrow").firstElementChild.style.width=(E&&F.progress>0?Math.min(100,F.progress/E.seconds*100):0)+"%"}Mt.forEach((E,y)=>{E.addEventListener("mousedown",N=>{if(N.preventDefault(),N.stopPropagation(),!!F){if(N.shiftKey&&N.button===0){let O=F.slots[y];if(O){let X=t.add(O.id,O.n,O.d);y===xs&&X<O.n&&a?.({id:O.id,n:O.n-X}),F.slots[y]=X>0?{...O,n:X}:null}}else{let O=zg(F,y,v,N.button===2?2:0);v=O.cursor,O.took&&a?.(O.took)}zt()}})});let Z=Pe("recipe-tip");function pt(){Z.hidden=!0}function Ut(E,y,N){let O=Gh[Number(E.dataset.index)],X=t.count(O.in),st=J0.map(ht=>`${En(ht)} (${Ks(ht)} s)`).join(", ");Z.innerHTML=`<h4>${En(O.out)}</h4><div class="tip-head">Smelts:</div>
      <div class="tip-ing ${X>=1?"ok":"no"}"><img src="${d(O.in)}" draggable="false"><span>1\xD7 ${En(O.in)}</span><em>${X>=1?"\u2714":"\u2718"} you have ${X}</em></div>
      <div class="tip-station">Takes ${O.seconds} seconds per item and needs fuel</div>
      <div class="tip-station">Burns: ${st}</div>
      ${X>=1?'<div class="tip-ok">Click to load it into the furnace</div>':'<div class="tip-no">You have none to smelt</div>'}`,Z.hidden=!1,Z.style.left=Math.min(y+18,window.innerWidth-Z.offsetWidth-8)+"px",Z.style.top=Math.min(N+14,window.innerHeight-Z.offsetHeight-8)+"px"}function _t(E,y,N){if(E.dataset.kind==="smelt")return Ut(E,y,N);let O=rl[Number(E.dataset.index)],X=t.canCraft(O,j()),st=O.ins.map(([Nt,xt])=>{let gt=t.countSpec(Nt),Dt=gt>=xt;return`<div class="tip-ing ${Dt?"ok":"no"}"><img src="${d(yr(Nt)[0])}" draggable="false">
        <span>${xt}\xD7 ${af(Nt)}</span><em>${Dt?"\u2714":"\u2718"} you have ${gt}</em></div>`}).join(""),ht=O.station?`<div class="tip-station">Made at: ${ig[O.station]}</div>`:'<div class="tip-station">Made by hand</div>',K=X?'<div class="tip-ok">Click to craft</div>':'<div class="tip-no">Missing materials</div>';Z.innerHTML=`<h4>${O.label||En(O.out)} \xD7${O.n}</h4><div class="tip-head">Requires:</div>${st}${ht}${K}`,Z.hidden=!1;let it=Z.offsetWidth,vt=Z.offsetHeight;Z.style.left=Math.min(y+18,window.innerWidth-it-8)+"px",Z.style.top=Math.min(N+14,window.innerHeight-vt-8)+"px"}w.addEventListener("mousemove",E=>{let y=E.target.closest(".recipe");y?_t(y,E.clientX,E.clientY):pt()}),w.addEventListener("mouseleave",pt);function zt(){P(),p(et)}let fe=Pe("item-tip"),qt=0,Qt=0,ge=()=>{fe.hidden=!0};function ne(E,y,N){E.hidden=!1,E.style.left=Math.min(y+16,window.innerWidth-E.offsetWidth-8)+"px",E.style.top=Math.min(N+14,window.innerHeight-E.offsetHeight-8)+"px"}function b(){if(!S&&at.hidden){ge();return}let E=document.elementFromPoint(qt,Qt),y=E?.closest?.(".slot[data-tip]");y&&!v&&y.closest("#inventory, #palette")?(fe.innerHTML=`<b></b>${y.dataset.tipSub?"<span></span>":""}`,fe.firstChild.textContent=y.dataset.tip,y.dataset.tipSub&&(fe.lastChild.textContent=y.dataset.tipSub),ne(fe,qt,Qt)):ge();let N=E?.closest?.(".recipe");N&&S?_t(N,qt,Qt):pt()}document.addEventListener("mousemove",E=>{qt=E.clientX,Qt=E.clientY,b()});let et=0;x.addEventListener("mousemove",E=>{R.style.left=E.clientX+"px",R.style.top=E.clientY+"px"}),x.addEventListener("mousedown",E=>{E.target!==x||!v||(E.button===2&&v.n>1?(s({...v,n:1}),v.n-=1):(s(v),v=null),U())});function nt(E,y="hand",N=null){et=E,D=B[y]?y:"hand",F=B[D].furnace?N:null,q.value="",S=!0,x.hidden=!1,P()}function mt(){if(pt(),ge(),v){let E=t.add(v.id,v.n,v.d);E>0&&s({...v,n:E}),v=null}F=null,S=!1,x.hidden=!0,p(et)}let at=Pe("palette"),L=Pe("palette-grid");for(let E of Oh){let y=u({id:E,n:1,d:0});y.addEventListener("click",()=>r(E)),L.appendChild(y)}let _e=Pe("goal-list");function de(E){_e.replaceChildren(),Pe("goal-count").textContent=`${E.filter(Boolean).length}/${_r.length}`;let y=E.lastIndexOf(!0),N=0;if(_r.forEach((O,X)=>{if(!(E[X]?X===y:++N<=2))return;let ht=document.createElement("li");ht.className=E[X]?"done":"todo",ht.textContent=O.text,_e.appendChild(ht)}),E.every(Boolean)){let O=document.createElement("li");O.className="done",O.textContent="All goals complete!",_e.appendChild(O)}}return{renderHotbar:E=>{et=E,p(E),S&&P()},refreshInventory:()=>{S&&P()},tickFurnace:()=>{!S||!F||(dt(F)!==ot?bt():V())},openInventory:nt,closeInventory:mt,renderGoals:de,openPalette:()=>{at.hidden=!1},closePalette:()=>{at.hidden=!0,ge()},get invOpen(){return S},get paletteOpen(){return!at.hidden}}}function Wg(n,t,e=56,i=.14){let s=Math.hypot(n,t)/e;if(!(s>0))return{strafe:0,forward:0,mag:0,edge:!1};let r=Math.min(1,s),o=n/(s*e),a=t/(s*e),l=r<=i?0:(r-i)/(1-i);return{strafe:o*l,forward:-a*l,mag:l,edge:s>=.94}}var Xg=n=>n.edge&&n.forward>.3;function qg(n,t,e=56){let i=t.x-n.x,s=t.y-n.y,r=Math.hypot(i,s);if(r<=e)return{x:n.x,y:n.y};let o=(r-e)/r;return{x:n.x+i*o,y:n.y+s*o}}function $g(n,t,e,i=!1){return{yaw:-n*e*1.7,pitch:-t*e*1.7*(i?-1:1)}}var Ow=["attack","use","jump","fly","sprint","crouch","inv","menu"];function Yg(n){let t={};if(!n||typeof n!="object")return t;for(let e of Ow){let i=n[e];i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&(t[e]={x:Math.min(1,Math.max(0,i.x)),y:Math.min(1,Math.max(0,i.y))})}return t}function Zg(n,t,e,i,s,r,o=4){let a=(c,h)=>Math.min(.5,(c/2+o)/h),l=(c,h)=>1-a(c,h);return{x:Math.min(l(e,s),Math.max(a(e,s),n/s)),y:Math.min(l(i,r),Math.max(a(i,r),t/r))}}function Fw({coarse:n=!1,search:t=""}={}){let e=new URLSearchParams(t);return e.has("touch")?!0:e.has("desktop")?!1:!!n}function Ef(){return typeof window>"u"?!1:Fw({coarse:!!window.matchMedia?.("(pointer: coarse)").matches,search:window.location.search})}var Bo=[{id:"forward",label:"Move forward",group:"Movement",key:"KeyW"},{id:"back",label:"Move backward",group:"Movement",key:"KeyS"},{id:"left",label:"Move left",group:"Movement",key:"KeyA"},{id:"right",label:"Move right",group:"Movement",key:"KeyD"},{id:"jump",label:"Jump / swim up / fly up",group:"Movement",key:"Space"},{id:"sprint",label:"Sprint",group:"Movement",key:"Tab"},{id:"crouch",label:"Crouch / fly down",group:"Movement",key:"ShiftLeft"},{id:"down",label:"Fly down (extra key)",group:"Movement",key:"KeyC"},{id:"inventory",label:"Inventory & crafting",group:"Actions",key:"KeyE"},{id:"drop",label:"Drop item",group:"Actions",key:"KeyQ"},{id:"fly",label:"Toggle flight (creative)",group:"Actions",key:"KeyF"},{id:"offhand",label:"Use offhand item (place a torch from the shield slot)",group:"Actions",key:"KeyG"},...Array.from({length:9},(n,t)=>({id:"slot"+(t+1),label:"Hotbar slot "+(t+1),group:"Hotbar",key:"Digit"+(t+1)})),{id:"map",label:"Full-screen map (or tap the minimap)",group:"Actions",key:"KeyN"},{id:"music",label:"Toggle music",group:"Other",key:"KeyM"},{id:"skipTime",label:"Skip time of day",group:"Other",key:"KeyT"},{id:"renderUp",label:"Render distance +",group:"Other",key:"BracketRight"},{id:"renderDown",label:"Render distance -",group:"Other",key:"BracketLeft"},{id:"debug",label:"Debug info",group:"Other",key:"F3"}],nu={sensitivity:1,invertY:!1,rawInput:!0,fov:75,musicVolume:.8,sfxVolume:.9,touchControls:Ef(),hudSize:Ef()?1.3:1,touchLayout:{}},Tf=.0022,Kg="voxelcraft.settings.v1";function ul(n){return n?n.startsWith("Key")?n.slice(3):n.startsWith("Digit")?n.slice(5):n.startsWith("Numpad")?"Num "+n.slice(6):{Space:"Space",ShiftLeft:"Left Shift",ShiftRight:"Right Shift",ControlLeft:"Left Ctrl",ControlRight:"Right Ctrl",AltLeft:"Left Alt",AltRight:"Right Alt",Tab:"Tab",CapsLock:"Caps Lock",Enter:"Enter",Backspace:"Backspace",ArrowUp:"Up Arrow",ArrowDown:"Down Arrow",ArrowLeft:"Left Arrow",ArrowRight:"Right Arrow",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",Minus:"-",Equal:"=",Backquote:"`"}[n]||n:"Unbound"}var iu=class{constructor(){this.values={...nu},this.binds=Object.fromEntries(Bo.map(t=>[t.id,t.key])),this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem(Kg)||"null");if(t){for(let e of Object.keys(nu))typeof t.values?.[e]==typeof nu[e]&&t.values[e]!==null&&(this.values[e]=t.values[e]);for(let e of Bo)t.binds&&e.id in t.binds&&(this.binds[e.id]=t.binds[e.id]);t.binds&&!("crouch"in t.binds)&&t.binds.sprint==="ShiftLeft"&&(this.binds.sprint="Tab")}}catch{}this.rebuild()}rebuild(){this.reverse=new Map;for(let[t,e]of Object.entries(this.binds))e&&this.reverse.set(e,t)}save(){try{localStorage.setItem(Kg,JSON.stringify({values:this.values,binds:this.binds}))}catch{}for(let t of this.listeners)t(this)}get(t){return this.values[t]}set(t,e){this.values[t]=e,this.save()}onChange(t){this.listeners.add(t)}key(t){return this.binds[t]}actionFor(t){return this.reverse.get(t)}setBind(t,e){let i=this.reverse.get(e),s=null;return i&&i!==t&&(this.binds[i]=this.binds[t],s=i),this.binds[t]=e,this.rebuild(),this.save(),s}resetBinds(){this.binds=Object.fromEntries(Bo.map(t=>[t.id,t.key])),this.rebuild(),this.save()}resetAll(){this.values={...nu,touchLayout:{}},this.resetBinds()}};var dl=n=>document.getElementById(n),Bw=[{key:"sensitivity",label:"Look sensitivity (mouse / touch)",min:.1,max:3,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"fov",label:"Field of view",min:60,max:110,step:1,fmt:n=>n+"\xB0",peek:!0},{key:"hudSize",label:"HUD size (hotbar, hearts, map, goals)",min:.7,max:1.8,step:.05,fmt:n=>Math.round(n*100)+"%",peek:!0},{key:"musicVolume",label:"Music volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"},{key:"sfxVolume",label:"Sound effects volume",min:0,max:1,step:.05,fmt:n=>Math.round(n*100)+"%"}],kw=[{key:"invertY",label:"Invert mouse Y axis"},{key:"rawInput",label:"Raw mouse input (no OS acceleration)"},{key:"touchControls",label:"On-screen touch controls (sticks and buttons)"}];function Jg(n,{onClose:t,layout:e}){let i=dl("options"),s=dl("opt-general"),r=dl("opt-keys"),o=!1,a=null,l=!1,c=null,h=0,d=M=>{l=M,document.body.classList.toggle("peek",M),c?.classList.toggle("peeking",M)},u=()=>{clearTimeout(h),h=setTimeout(()=>{f||d(!1)},900)},f=!1,p=()=>{f&&(f=!1,u())};window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p);function x(){s.replaceChildren(),c=null;for(let _ of Bw){let T=document.createElement("label");T.className="opt-row";let I=document.createElement("span");I.textContent=_.label;let P=document.createElement("input");P.type="range",P.min=_.min,P.max=_.max,P.step=_.step,P.value=n.get(_.key);let U=document.createElement("output");U.textContent=_.fmt(Number(P.value)),P.addEventListener("input",()=>{let B=Number(P.value);U.textContent=_.fmt(B),n.set(_.key,B),_.peek&&(c=T,d(!0),u())}),_.peek&&P.addEventListener("pointerdown",()=>{f=!0,c=T,d(!0)}),T.append(I,P,U),s.appendChild(T)}for(let _ of kw){let T=document.createElement("label");T.className="opt-row toggle";let I=document.createElement("input");I.type="checkbox",I.checked=n.get(_.key),I.addEventListener("change",()=>n.set(_.key,I.checked));let P=document.createElement("span");P.textContent=_.label,T.append(I,P),s.appendChild(T)}let M=document.createElement("div");if(M.className="opt-row touch-only",M.style.gridTemplateColumns="1fr",e?.available()){let _=document.createElement("button");_.className="small",_.textContent="Move the touch controls...",_.addEventListener("click",()=>{S(),e.edit()}),M.append(_)}else M.append(Object.assign(document.createElement("span"),{className:"opt-hint",textContent:"To move the touch buttons, open Options from the pause menu while you are in a world."}));s.prepend(M);let C=document.createElement("p");C.className="opt-hint",C.textContent="Tip: sensitivity changes apply instantly. Raw input takes effect the next time you click Resume.",s.appendChild(C)}function g(M=""){r.replaceChildren();let C=document.createElement("p");C.className="opt-hint",C.textContent=M||"Click a key, then press the new key. Esc cancels. If the key is already used, the two actions swap.",r.appendChild(C);let _="";for(let P of Bo){if(P.group!==_){_=P.group;let F=document.createElement("h3");F.textContent=_,r.appendChild(F)}let U=document.createElement("div");U.className="bind-row";let B=document.createElement("span");B.textContent=P.label;let D=document.createElement("button");D.className="bind-btn"+(n.key(P.id)===P.key?"":" changed"),D.textContent=ul(n.key(P.id)),D.addEventListener("click",()=>m(P.id,D)),U.append(B,D),r.appendChild(U)}let T=document.createElement("p");T.className="opt-hint",T.textContent="Mouse buttons are fixed: left = break, right = place / use, middle = pick block, wheel = hotbar.";let I=document.createElement("button");I.className="small",I.textContent="Reset keys to defaults",I.addEventListener("click",()=>{n.resetBinds(),g("Keys reset to defaults.")}),r.append(T,I)}function m(M,C){w(),a={action:M,button:C},C.textContent="Press a key\u2026",C.classList.add("waiting")}function w(){a&&(a=null,g())}window.addEventListener("keydown",M=>{if(o)if(a){if(M.preventDefault(),M.stopImmediatePropagation(),M.code==="Escape"){w();return}let C=a.action;a=null;let _=n.setBind(C,M.code),T=I=>Bo.find(P=>P.id===I).label;g(_?`"${T(C)}" is now ${ul(M.code)}; swapped with "${T(_)}".`:"")}else M.code==="Escape"&&(M.stopImmediatePropagation(),S())},!0);function R(M){s.hidden=M!=="general",r.hidden=M!=="keys";for(let C of i.querySelectorAll(".opt-tabs button"))C.classList.toggle("active",C.dataset.tab===M)}for(let M of i.querySelectorAll(".opt-tabs button"))M.addEventListener("click",()=>{w(),R(M.dataset.tab)});function v(){o=!0,x(),g(),R("general"),i.hidden=!1}function S(){w(),f=!1,clearTimeout(h),d(!1),o=!1,i.hidden=!0,t()}return dl("opt-done").addEventListener("click",S),dl("opt-reset").addEventListener("click",()=>{n.resetAll(),x(),g("Everything reset to defaults.")}),{open:v,close:S,get isOpen(){return o}}}var jg={},Qg={},tx={};for(let n of It.blocks)n.plant?.growth&&(jg[n.id]={next:n.plant.growth.next,rate:n.plant.growth.rate,soil:n.plant.growth.soil}),n.plant?.spreads&&(Qg[n.id]=n.plant.spreads),n.plant?.grows&&(tx[n.id]=n.plant.grows);var ex={};for(let n=1;n<Ja.length;n++)Ja[n]&&(ex[Ja[n]]=n);function Af(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.plants.size===0))for(let h of[...c.plants]){let d=c.data[h],u=l*16+h%16,f=a*16+Math.floor(h/16)%16,p=Math.floor(h/256),x=jg[d],g=Qg[d],m=tx[d];if(m)r()<m.rate*s&&m.soil.includes(n.getBlock(u,p-1,f))&&k0(n,u,p,f,m.trees,n.seed,r)&&o++;else if(x)r()<x.rate*s&&n.getBlock(u,p-1,f)===x.soil&&(n.setBlock(u,p,f,x.next),o++);else if(g&&r()<g.rate*s){let w=g.range*2+1,R=u+Math.floor(r()*w)-g.range,v=f+Math.floor(r()*w)-g.range;n.getBlock(R,p,v)===ft.AIR&&n.getBlock(R,p-1,v)===g.onto&&(n.setBlock(R,p,v,g.block),o++)}}}return o}function zw(n,t,e,i,s=Math.random,r=It.game.spread.chance){let o=ex[n.getBlock(t,e,i)];if(!o)return!1;let a=n.getBlock(t,e+1,i);if(a!==ft.AIR&&!Kt[a])return!1;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++)if((h||l||c)&&n.getBlock(t+h,e+l,i+c)===o)return s()>=r?!1:(n.setBlock(t,e,i,o),!0);return!1}function nx(n,t,e,i,s,r=Math.random,o=It.game.spread.samplesPerChunk){let a=0;for(let l=e-i;l<=e+i;l++)for(let c=t-i;c<=t+i;c++){if(!n.getChunk(c,l))continue;let d=Math.floor(o*s+r());for(let u=0;u<d;u++){let f=c*16+Math.floor(r()*16),p=l*16+Math.floor(r()*16),x=63;for(;x>0;){let g=n.getBlock(f,x,p);if(g!==ft.AIR&&!Kt[g])break;x--}zw(n,f,x,p,r)&&a++}}return a}function ix(n,t,e,i,s,r=Math.random){let o=0;for(let a=e-i;a<=e+i;a++)for(let l=t-i;l<=t+i;l++){let c=n.getChunk(l,a);if(!(!c||c.hydrating.size===0))for(let h of[...c.hydrating]){let d=Qa.get(c.data[h]);if(!d)continue;let u=l*16+h%16,f=a*16+Math.floor(h/16)%16,p=Math.floor(h/256),x=n.nearWater(u,p,f);x&&d.wet?(n.setBlock(u,p,f,d.wet),o++):!x&&d.dry?(n.setBlock(u,p,f,d.dry),o++):!x&&d.decayInto&&n.getBlock(u,p+1,f)===ft.AIR&&r()<d.decayRate*s&&(n.setBlock(u,p,f,d.decayInto),o++)}}return o}var Hw=28,su=n=>n===ft.AIR||Kt[n]>0||ae[n]===1,ru=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,this.falling=[],t.addChangeListener((i,s,r)=>this.touch(i,s,r))}touch(t,e,i){(bo[this.world.getBlock(t,e,i)]||bo[this.world.getBlock(t,e+1,i)])&&(this.queue.add(t+","+e+","+i),this.queue.add(t+","+(e+1)+","+i))}startColumn(t,e,i){let s=this.world,r=[];for(let l=e;l<64&&bo[s.getBlock(t,l,i)];l++)r.push([l,s.getBlock(t,l,i)]);let o=e-1;for(;o>=0&&su(s.getBlock(t,o,i));)o--;let a=o+1;r.forEach(([l,c],h)=>{s.setBlock(t,l,i,ft.AIR);let d={id:c,x:t,z:i,y:l,rest:a+h,vy:0};this.falling.push(d),this.hooks.onSpawn?.(d)})}update(t){if(this.queue.size){let i=[...this.queue];this.queue.clear();for(let s of i){let[r,o,a]=s.split(",").map(Number);o<0||o>=64||!this.world.isLoaded(r,a)||bo[this.world.getBlock(r,o,a)]&&o>0&&su(this.world.getBlock(r,o-1,a))&&this.startColumn(r,o,a)}}if(!this.falling.length)return;this.falling.sort((i,s)=>i.y-s.y);let e=[];for(let i of this.falling)i.vy+=Hw*t,i.y-=i.vy*t,i.y<=i.rest&&e.push(i);for(let i of e){this.falling.splice(this.falling.indexOf(i),1);let s=this.world.getBlock(i.x,i.rest,i.z);su(s)?(this.world.setBlock(i.x,i.rest,i.z,i.id),this.hooks.onLand?.(i)):this.hooks.onDrop?.(i)}}flush(){for(let t of this.falling.splice(0))su(this.world.getBlock(t.x,t.rest,t.z))?(this.world.setBlock(t.x,t.rest,t.z,t.id),this.hooks.onLand?.(t)):this.hooks.onDrop?.(t)}settle(t=.02,e=2e3){for(let i=0;i<e;i++)if(this.update(t),!this.falling.length&&!this.queue.size)return i;return e}};var Vw=[[0,0,0],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],ou=class{constructor(t,e={}){this.world=t,this.hooks=e,this.queue=new Set,t.addChangeListener((i,s,r)=>{for(let[o,a,l]of Vw)Ka[t.getBlock(i+o,s+a,r+l)]&&this.queue.add(i+o+","+(s+a)+","+(r+l))})}supported(t,e,i){let s=this.world.getBlock(t,e,i);if(!Ka[s])return!0;let r=t+Ti[s*3],o=e+Ti[s*3+1],a=i+Ti[s*3+2];return We[this.world.getBlock(r,o,a)]>0}update(){if(!this.queue.size)return;let t=[...this.queue];this.queue.clear();for(let e of t){let[i,s,r]=e.split(",").map(Number);if(!this.world.isLoaded(i,r))continue;let o=this.world.getBlock(i,s,r);if(!Ka[o])continue;let a=i+Ti[o*3],l=r+Ti[o*3+2];this.world.isLoaded(a,l)&&(this.supported(i,s,r)||(this.world.setBlock(i,s,r,ft.AIR),this.hooks.onBreak?.(i,s,r,o)))}}};var di=It.game.hunger,rx=It.game.player.maxFood,ox=n=>n>di.noSprintAtOrBelow,Cf=n=>n<=0,sx=It.game.equipment;function ax(n,t){if(n<=0)return 0;let e=n*(1-Math.min(sx.maxArmor,t)*sx.armorReduction);return Math.max(1,Math.round(e))}function lx(n){let t=It.game.fall;return n<t.safeDistance-t.tolerance?0:Math.max(0,Math.floor(n-t.damageOffset+t.tolerance))}var cx=n=>n?di.sprintJumpCost:di.jumpCost,Gw=n=>n>rx-1;function hx(n,t,e){n.food=Math.min(rx,n.food+t),n.saturation=Math.min(di.maxSaturation,n.food,(n.saturation??0)+e)}function ux(n,t,{moving:e,sprinting:i,mining:s=!1,maxHealth:r}){let o={healed:!1,starved:0};return n.saturation=n.saturation??0,Gw(n.food)&&n.saturation>0&&n.health<r?(n.regenTimer+=t,n.regenTimer>=di.healEverySeconds&&(n.regenTimer=0,n.health=Math.min(r,n.health+1),n.saturation-=di.saturationPerHeal,o.healed=!0,n.saturation<=0&&(n.saturation=0,n.food=Math.max(0,n.food-di.emptySaturationCost)))):n.regenTimer=0,Cf(n.food)?(n.starveTimer+=t,n.starveTimer>=di.starveEverySeconds&&(n.starveTimer=0,o.starved=di.starveDamage)):n.starveTimer=0,e&&(n.food=Math.max(0,n.food-t*(di.drainPerSecond+(i?di.sprintDrainPerSecond:0)))),s&&(n.food=Math.max(0,n.food-t*di.miningDrainPerSecond)),o}var Ww=Jd,dx=[[1,0],[-1,0],[0,1],[0,-1]],Xw=.2,qw=500,$w=n=>n===ft.AIR||Kt[n]===1||Kt[n]===2||ae[n]===1,Yw=n=>!(n===ft.AIR||Kt[n]>0||ae[n]===1&&$s[n]!==7),au=class{constructor(t){this.world=t,this.queue=new Set,this.timer=0,this.stats={changed:0},t.addChangeListener((e,i,s)=>this.touch(e,i,s))}key(t,e,i){return((t+32768)*65536+(i+32768))*64+e}unkey(t){let e=t%64,i=Math.floor(t/64);return[Math.floor(i/65536)-32768,e,i%65536-32768]}touch(t,e,i){let s=this.world;if(!(ae[s.getBlock(t,e,i)]||ae[s.getBlock(t,e+1,i)]||ae[s.getBlock(t,e-1,i)]||ae[s.getBlock(t+1,e,i)]||ae[s.getBlock(t-1,e,i)]||ae[s.getBlock(t,e,i+1)]||ae[s.getBlock(t,e,i-1)]))return;let r=this.queue;r.add(this.key(t,e,i)),r.add(this.key(t,e+1,i)),e>0&&r.add(this.key(t,e-1,i));for(let[o,a]of dx)r.add(this.key(t+o,e,i+a))}supplyFor(t,e,i){let s=this.world,r=ae[s.getBlock(t,e+1,i)]?6:0;for(let[o,a]of dx){let l=s.getBlock(t+o,e,i+a);if(!ae[l])continue;let c=$s[l];c<=1||Yw(s.getBlock(t+o,e-1,i+a))&&(r=Math.max(r,c-1))}return r}step(){let t=this.world,e=[...this.queue].slice(0,qw);for(let s of e)this.queue.delete(s);let i=0;for(let s of e){let[r,o,a]=this.unkey(s);if(o<0||o>=64||!t.isLoaded(r,a))continue;let l=t.getBlock(r,o,a);if($s[l]===7||!$w(l))continue;let c=ae[l]?$s[l]:0,h=this.supplyFor(r,o,a);h!==c&&(t.setBlock(r,o,a,h>0?Ww[h]:ft.AIR),i++)}return this.stats.changed=i,i}update(t){return this.timer+=t,this.timer<Xw?0:(this.timer=0,this.queue.size?this.step():0)}settle(t=200){for(let e=0;e<t;e++){if(!this.queue.size)return e;this.step()}return t}};var ko=[120,205,250],Rf=[14,40,125],fx=12,lu=class{constructor(t,e){this.world=t,this.colorOf=e,this.cache=new Map}chunkColumns(t){let e=mn(t.cx,t.cz),i=this.cache.get(e);if(i&&i.version===t.version)return i;let s=new Uint8Array(256),r=new Uint8Array(256),o=new Uint8Array(256);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=63;for(;h>0;){let f=t.data[re(c,h,l)];if(f!==ft.AIR&&!Kt[f])break;h--}let d=l*16+c,u=t.data[re(c,h,l)];if(s[d]=h,ae[u]){let f=0,p=h;for(;p>0&&ae[t.data[re(c,p,l)]]&&f<fx;)p--,f++;u=t.data[re(c,p,l)],o[d]=f}r[d]=u}let a={version:t.version,y:s,id:r,depth:o};return this.cache.set(e,a),a}column(t,e){let i=this.world.getChunk(t>>4,e>>4),s=i?this.chunkColumns(i):this.cache.get(mn(t>>4,e>>4));if(!s)return null;let r=(e&15)*16+(t&15);return{y:s.y[r],id:s.id[r],depth:s.depth[r]}}render(t,e,i){let s=2*i+1,r=new Uint8ClampedArray(s*s*4);for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=t-i+a,c=e-i+o,h=this.column(l,c),d=(o*s+a)*4;if(!h)continue;let[u,f,p]=this.colorOf(h.id),x=1;if(h.depth===0){let g=this.column(l-1,c-1);g&&(x=Math.max(.72,Math.min(1.24,1+(h.y-g.y)*.09)))}else{let g=Math.min(1,(h.depth-1)/(fx-4)),m=.12;u=(ko[0]+(Rf[0]-ko[0])*g)*(1-m)+u*m,f=(ko[1]+(Rf[1]-ko[1])*g)*(1-m)+f*m,p=(ko[2]+(Rf[2]-ko[2])*g)*(1-m)+p*m}r[d]=u*x,r[d+1]=f*x,r[d+2]=p*x,r[d+3]=255}return r}};function px(n){let t=(n*24+6)%24,e=Math.floor(t),i=Math.floor((t-e)*60);return`${e%12===0?12:e%12}:${String(i).padStart(2,"0")} ${e<12?"AM":"PM"}`}function If(n){let t=Math.sin(n*Math.PI*2);return Math.abs(t)<.14?n<.5?"Sunrise":"Sunset":t<0?"Night":n<.25?"Morning":"Afternoon"}var cu=class{constructor(t,e,i=28){this.canvas=t,this.ctx=t.getContext("2d"),this.data=e,this.R=i,this.N=2*i+1,this.off=document.createElement("canvas"),this.off.width=this.off.height=this.N,this.offCtx=this.off.getContext("2d"),this.cx=NaN,this.cz=NaN,this.lastBuild=0}refresh(t,e,i){t===this.cx&&e===this.cz&&i-this.lastBuild<500||(this.cx=t,this.cz=e,this.lastBuild=i,this.offCtx.putImageData(new ImageData(this.data.render(t,e,this.R),this.N,this.N),0,0))}draw(t,e,i,s){let r=this.ctx;this.refresh(Math.floor(t),Math.floor(e),s),r.clearRect(0,0,196,196),r.save(),r.beginPath(),r.arc(98,98,80,0,Math.PI*2),r.clip(),r.fillStyle="#0c0f13",r.fillRect(0,0,196,196),r.imageSmoothingEnabled=!1,r.drawImage(this.off,98+(this.cx-this.R-t)*3,98+(this.cz-this.R-e)*3,this.N*3,this.N*3);let o=r.createRadialGradient(98,98,80*.62,98,98,80);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.38)"),r.fillStyle=o,r.fillRect(0,0,196,196),r.restore(),r.lineWidth=5,r.strokeStyle="#14141a",r.beginPath(),r.arc(98,98,80+2.5,0,Math.PI*2),r.stroke(),r.lineWidth=2,r.strokeStyle="#a4a4b0",r.beginPath(),r.arc(98,98,80+.5,0,Math.PI*2),r.stroke(),r.fillStyle="#c8c8d2";for(let a=0;a<8;a++){let l=a*Math.PI/4,c=85;a%2&&(r.beginPath(),r.arc(98+Math.sin(l)*c,98-Math.cos(l)*c,1.8,0,Math.PI*2),r.fill())}r.font="bold 12px Consolas, monospace",r.textAlign="center",r.textBaseline="middle",r.lineWidth=3,r.strokeStyle="#000",[["N",0,"#ff6a5a"],["E",1,"#f0f0f8"],["S",2,"#f0f0f8"],["W",3,"#f0f0f8"]].forEach(([a,l,c])=>{let h=l*Math.PI/2,d=91,u=98+Math.sin(h)*d,f=98-Math.cos(h)*d;r.strokeText(a,u,f),r.fillStyle=c,r.fillText(a,u,f)}),r.save(),r.translate(98,98),r.rotate(-i),r.beginPath(),r.moveTo(0,-9),r.lineTo(6,7),r.lineTo(0,3),r.lineTo(-6,7),r.closePath(),r.lineWidth=2.5,r.strokeStyle="#000",r.stroke(),r.fillStyle="#ffffff",r.fill(),r.restore()}};var Pf=n=>Math.min(16,Math.max(1,Number.isFinite(n)?n:3));function mx(n,t,e){return Math.min(300,Math.ceil(Math.max(n,t)/(2*e))+48)}function gx(n,t,e,i){let s=Pf(t),r=n.cx+e/n.zoom,o=n.cz+i/n.zoom;return{zoom:s,cx:r-e/s,cz:o-i/s}}var wr=n=>document.getElementById(n);function xx({data:n,getPlayer:t,onClose:e}){let i=wr("fullmap"),s=wr("fullmap-canvas"),r=s.getContext("2d"),o=wr("fullmap-pos"),a=document.createElement("canvas"),l=a.getContext("2d"),c=!1,h=3,d=0,u=0,f=null,p=0,x=0,g=()=>{let _=Math.max(1,Math.floor(window.innerWidth)),T=Math.max(1,Math.floor(window.innerHeight));return(s.width!==_||s.height!==T)&&(s.width=_,s.height=T,f=null),{w:_,h:T}};function m(_,T,I){let P=mx(_,T,h);if(f&&f.R===P&&Math.abs(f.x-d)<40&&Math.abs(f.z-u)<40&&I-p<2e3)return;let B=Math.round(d),D=Math.round(u),F=2*P+1;a.width=a.height=F,l.putImageData(new ImageData(n.render(B,D,P),F,F),0,0),f={x:B,z:D,R:P},p=I}function w(_){if(!c)return;x=requestAnimationFrame(w);let{w:T,h:I}=g();m(T,I,_),r.fillStyle="#0c0f13",r.fillRect(0,0,T,I),r.imageSmoothingEnabled=!1;let P=T/2+(f.x-f.R-d)*h,U=I/2+(f.z-f.R-u)*h;r.drawImage(a,P,U,(2*f.R+1)*h,(2*f.R+1)*h);let B=t(),D=T/2+(B.x-d)*h,F=I/2+(B.z-u)*h;r.save(),r.translate(D,F),r.rotate(-B.yaw),r.beginPath(),r.moveTo(0,-12),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.lineWidth=3,r.strokeStyle="#000",r.stroke(),r.fillStyle="#fff",r.fill(),r.restore(),r.font="bold 18px Consolas, monospace",r.textAlign="center",r.textBaseline="middle",r.lineWidth=4,r.strokeStyle="#000",r.strokeText("N",T-28,90),r.fillStyle="#ff6a5a",r.fillText("N",T-28,90),o.textContent=`You: ${Math.floor(B.x)}, ${Math.floor(B.z)}   Zoom ${Math.round(h*100/3)}%`}let R=new Map,v=0;s.addEventListener("pointerdown",_=>{if(s.setPointerCapture(_.pointerId),R.set(_.pointerId,{x:_.clientX,y:_.clientY}),s.classList.add("drag"),R.size===2){let[T,I]=[...R.values()];v=Math.hypot(T.x-I.x,T.y-I.y)}}),s.addEventListener("pointermove",_=>{let T=R.get(_.pointerId);if(!T)return;let I={x:_.clientX,y:_.clientY};if(R.set(_.pointerId,I),R.size===1)d-=(I.x-T.x)/h,u-=(I.y-T.y)/h;else if(R.size===2){let[P,U]=[...R.values()],B=Math.hypot(P.x-U.x,P.y-U.y);v>0&&B>0&&M(h*B/v,(P.x+U.x)/2,(P.y+U.y)/2),v=B}});let S=_=>{R.delete(_.pointerId),v=0,R.size||s.classList.remove("drag")};s.addEventListener("pointerup",S),s.addEventListener("pointercancel",S),s.addEventListener("wheel",_=>{_.preventDefault(),M(h*(_.deltaY<0?1.2:1/1.2),_.clientX,_.clientY)},{passive:!1});function M(_,T,I){let P=gx({zoom:h,cx:d,cz:u},_,T-window.innerWidth/2,I-window.innerHeight/2);h=P.zoom,d=P.cx,u=P.cz}let C=_=>M(h*_,window.innerWidth/2,window.innerHeight/2);return wr("fm-in").addEventListener("click",()=>C(1.5)),wr("fm-out").addEventListener("click",()=>C(1/1.5)),wr("fm-here").addEventListener("click",()=>{let _=t();d=_.x,u=_.z}),wr("fm-close").addEventListener("click",()=>e()),{get isOpen(){return c},open(){if(c)return;c=!0;let _=t();d=_.x,u=_.z,h=Pf(h),f=null,i.hidden=!1,x=requestAnimationFrame(w)},close(){c=!1,R.clear(),cancelAnimationFrame(x),i.hidden=!0}}}var yx=new Set([ft.FARMLAND,ft.FARMLAND_WET]),_x=["farmer","blacksmith","librarian","cleric","mason"],vx=["Alder","Bram","Cora","Dilys","Edda","Finn","Gwen","Hob","Ivo","Jory","Kit","Lark","Mabel","Ned","Orla","Pip","Quill","Rowan","Sage","Tam","Una","Wren","Yarrow","Zed"],Zw={farmer:{day:["The wheat is looking fine this year.","Bread is the best thing there is. Do you have any?","Keep the water close to your fields and they will never dry out.","Welcome to {village}!"],night:["It is late. The crops will keep.","Mind the dark, traveller."]},blacksmith:{day:["Iron is all about patience: ore, fire, then ingots.","A stone pickaxe will not get you iron. Smelt it first.","I have been at this furnace since sunrise.","Welcome to {village}!"],night:["The fire keeps me warm. Go and light a torch.","Not a good time to be out and about."]},librarian:{day:["Glass comes from sand and a hot furnace.","Stairs take six planks, and you get four.","A door is six planks at a crafting table. Three of them, in fact.","Welcome to {village}!"],night:["I read by torchlight. You should try it.","Shh. The books are sleeping."]},cleric:{day:["May your roads be flat and your pickaxe sharp.","There is a good view from the top of the hill.","Welcome to {village}."],night:["The night is long, but morning comes.","Stay near the lamp posts, friend."]},mason:{day:["Cobblestone and brick, that is what lasts.","Every stair in {village} was laid by hand.","Look at that roof. Not a single leak.","Welcome to {village}!"],night:["Even stone needs its rest.","Come back in the morning."]}},hu=class{constructor(t,e,i,s){this.world=t,this.village=e,this.index=s;let r=o=>rn(Math.floor(i.x),Math.floor(i.z),e.cx*31+o);this.rng=On(r(3)*4294967296|0),this.name=vx[Math.floor(r(1)*vx.length)],this.job=_x[Math.floor(r(2)*_x.length)],this.skin=Math.floor(r(4)*3),this.body=new Do(t),this.body.pos={x:i.x,y:i.y,z:i.z},this.body.yaw=r(5)*Math.PI*2,this.home={x:i.x,z:i.z},this.timer=.5+this.rng()*3,this.target=null,this.moving=!1,this.walkPhase=0,this.headTurn=0,this.progressAt={x:i.x,z:i.z,t:0},this.talkedAt=-99}get x(){return this.body.pos.x}get y(){return this.body.pos.y}get z(){return this.body.pos.z}get yaw(){return this.body.yaw}goodSpot(t,e){let i=this.world,s=this.village,r=s.y0,o=Math.floor(t),a=Math.floor(e);if(!i.isLoaded(o,a)||Math.hypot(t-(s.cx+.5),e-(s.cz+.5))<2.8)return!1;let l=i.getBlock(o,r,a),c=i.getBlock(o,r+1,a),h=i.getBlock(o,r+2,a);return!(!(We[l]>0)||ae[l]||We[c]||We[h]||Kt[c]||yx.has(l))}safeAhead(){let t=this.world,e=this.x-Math.sin(this.yaw)*.75,i=this.z-Math.cos(this.yaw)*.75,s=Math.floor(e),r=Math.floor(i);if(!t.isLoaded(s,r))return!1;let o=Math.floor(this.y+.2)-1,a=t.getBlock(s,o,r),l=t.getBlock(s,o+1,r);if(ae[a]||ae[l]||yx.has(a)||Kt[l])return!1;if(!(We[a]>0)){let c=t.getBlock(s,o-1,r);if(!(We[c]>0)||ae[c])return!1}return Math.hypot(e-(this.village.cx+.5),i-(this.village.cz+.5))>2.2}turnTo(t,e,i=5){let s=t-this.body.yaw;return s=Math.atan2(Math.sin(s),Math.cos(s)),this.body.yaw+=Math.max(-i*e,Math.min(i*e,s)),Math.abs(s)}update(t,e=null,i=0){let s=this.body;s.pos.y<this.village.y0-4&&(s.pos={x:this.home.x,y:this.village.y0+1,z:this.home.z},s.vel={x:0,y:0,z:0},this.target=null);let r=e?Math.hypot(e.x-this.x,e.z-this.z):1/0,o=0;if(this.target){let l=this.target.x-this.x,c=this.target.z-this.z;Math.hypot(l,c)<.5?(this.target=null,this.timer=2+this.rng()*6):(this.turnTo(Math.atan2(-l,-c),t,6)<.5&&(o=s.inWater?.45:.28),o>0&&!s.inWater&&!this.safeAhead()&&(o=0,this.target=null,this.timer=.3+this.rng()*1.5),this.progressAt.t+=t,this.progressAt.t>1.6&&(Math.hypot(this.x-this.progressAt.x,this.z-this.progressAt.z)<.35&&(this.target=null,this.timer=.4+this.rng()),this.progressAt={x:this.x,z:this.z,t:0}))}else if(this.timer-=t,r<5&&this.turnTo(Math.atan2(-(e.x-this.x),-(e.z-this.z)),t,3.5),this.timer<=0){for(let l=0;l<6&&!this.target;l++){let c=this.rng()*Math.PI*2,h=2+this.rng()*12,d=this.home.x+Math.cos(c)*h,u=this.home.z+Math.sin(c)*h;this.goodSpot(d,u)&&(this.target={x:d,z:u},this.progressAt={x:this.x,z:this.z,t:0})}this.target||(this.timer=1+this.rng()*2)}s.update(t,{ahead:o}),this.moving=o>0,this.moving&&(this.walkPhase+=t*5.5);let a=0;if(!this.moving&&r<6){let l=Math.atan2(-(e.x-this.x),-(e.z-this.z))-s.yaw;a=Math.max(-.9,Math.min(.9,Math.atan2(Math.sin(l),Math.cos(l))))}this.headTurn+=(a-this.headTurn)*Math.min(1,6*t)}speak(t,e=Math.random){let i=Zw[this.job][t?"night":"day"];return i[Math.floor(e()*i.length)].replace("{village}",this.village.name)}};function Mx(n,t,e,i=4.5){let s=null;for(let r of n){let o=[r.x-.35,r.y,r.z-.35],a=[r.x+.35,r.y+1.8,r.z+.35],l=[t.x,t.y,t.z],c=[e.x,e.y,e.z],h=0,d=i,u=!0;for(let f=0;f<3&&u;f++){if(Math.abs(c[f])<1e-9){(l[f]<o[f]||l[f]>a[f])&&(u=!1);continue}let p=(o[f]-l[f])/c[f],x=(a[f]-l[f])/c[f];h=Math.max(h,Math.min(p,x)),d=Math.min(d,Math.max(p,x)),h>d&&(u=!1)}u&&(!s||h<s.dist)&&(s={villager:r,dist:h})}return s}var Kw=It.worldgen.villages.maxVillagers,fl=96,Jw=130,jw=70,Qw=[[.87,.67,.53],[.72,.53,.39],[.5,.35,.25]],tE={farmer:[.45,.6,.27],blacksmith:[.36,.36,.4],librarian:[.9,.88,.83],cleric:[.5,.3,.6],mason:[.56,.44,.34]},bx=[.14,.1,.09],Lf=new Map;function eE(n){let t=n.map(i=>Math.round(i*255)).join(","),e=Lf.get(t);return e||(e=new tn({color:new Wt(...n)}),e.userData.base=new Wt(...n),Lf.set(t,e)),e}function An(n,t,e,i,s,r,o,a=!1){let l=new Dn(n,t,e);a&&l.translate(0,-t/2,0);let c=new we(l,eE(i));return c.position.set(s,r,o),c}function nE(n){let t=new Ze,e=Qw[n.skin],i=tE[n.job],s=(c,h)=>c.map(d=>d*h),r=An(.24,.66,.26,s(i,.7),-.13,.66,0,!0),o=An(.24,.66,.26,s(i,.7),.13,.66,0,!0);t.add(r,o),t.add(An(.54,.74,.32,i,0,1.03,0));let a=An(.64,.2,.24,i,0,1.12,-.2);t.add(a,An(.2,.2,.24,e,0,1.12,-.2));let l=new Ze;return l.position.set(0,1.4,0),l.add(An(.44,.48,.44,e,0,.24,0)),l.add(An(.12,.22,.14,s(e,.85),0,.16,-.28)),l.add(An(.1,.07,.03,bx,-.11,.3,-.225),An(.1,.07,.03,bx,.11,.3,-.225)),l.add(An(.4,.05,.03,s(e,.7),0,.38,-.225)),n.job==="farmer"&&l.add(An(.8,.05,.8,[.86,.74,.38],0,.5,0),An(.46,.12,.46,[.8,.66,.32],0,.56,0)),n.job==="cleric"&&l.add(An(.5,.14,.5,s(i,.8),0,.53,.02)),n.job==="mason"&&l.add(An(.48,.1,.48,[.4,.34,.3],0,.53,0)),t.add(l),n.job==="blacksmith"&&t.add(An(.5,.56,.04,[.22,.17,.14],0,.9,-.18)),n.job==="librarian"&&t.add(An(.1,.62,.34,[.6,.12,.12],0,1.02,0)),t.userData={legL:r,legR:o,head:l},t}function Sx({scene:n,world:t}){let e=new Map,i=0;function s(o){let a=o.spawns;if(a.filter(u=>t.isLoaded(Math.floor(u.x),Math.floor(u.z))).length<a.length)return;let c=Math.min(Kw,2+Math.floor(o.buildings.length*.7)),h=a.map((u,f)=>({s:u,k:rn(f,o.cx,o.cz)})).sort((u,f)=>u.k-f.k).slice(0,c),d=[];h.forEach(({s:u},f)=>{let p=new hu(t,o,u,f),x=nE(p);x.position.set(p.x,p.y,p.z),n.add(x),d.push({v:p,mesh:x})}),e.set(o.key,{village:o,list:d})}function r(o){let a=e.get(o);if(a){for(let{mesh:l}of a.list)n.remove(l),l.traverse(c=>{c.isMesh&&c.geometry.dispose()});e.delete(o)}}return{get count(){let o=0;for(let a of e.values())o+=a.list.length;return o},all(){let o=[];for(let a of e.values())for(let l of a.list)o.push(l.v);return o},update(o,a,l,c=0){for(let h of Lf.values())h.color.copy(h.userData.base).multiply(l);if(i-=o,i<=0){i=1;let h=To(t,a.x-fl,a.z-fl,a.x+fl,a.z+fl);for(let d of h)!e.has(d.key)&&Math.hypot(d.cx-a.x,d.cz-a.z)<fl+20&&s(d);for(let[d,u]of[...e])Math.hypot(u.village.cx-a.x,u.village.cz-a.z)>Jw&&r(d)}for(let h of e.values())for(let{v:d,mesh:u}of h.list){let p=Math.hypot(d.x-a.x,d.z-a.z)<jw&&t.isLoaded(Math.floor(d.x),Math.floor(d.z));if(u.visible=p,!p)continue;d.update(Math.min(o,.05),a,c),u.position.set(d.x,d.y,d.z),u.rotation.y=d.yaw;let x=d.moving?Math.sin(d.walkPhase)*.7:0;u.userData.legL.rotation.x=x,u.userData.legR.rotation.x=-x,u.userData.head.rotation.y=d.headTurn}},pick(o,a,l=4.5){return Mx(this.all().filter(h=>Math.hypot(h.x-o.x,h.z-o.z)<l+1),o,a,l)},removeAll(){for(let o of[...e.keys()])r(o)}}}var Jt=n=>document.getElementById(n),wx=n=>new Promise(t=>setTimeout(t,n)),Nf=()=>new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(n))),iE=20260,sE=2400;function rE(n){let t=n.trim();if(!t)return;if(/^-?\d{1,9}$/.test(t))return Number(t);let e=2166136261;for(let i of t)e^=i.codePointAt(0),e=Math.imul(e,16777619);return(e>>>0)%2147483647}function Ex(n,t,e){let i=n.textContent,s=0;n.addEventListener("click",()=>{if(n.dataset.armed){clearTimeout(s),delete n.dataset.armed,n.textContent=i,e();return}n.dataset.armed="1",n.textContent=t,s=setTimeout(()=>{delete n.dataset.armed,n.textContent=i},3e3)}),n.disarm=()=>{clearTimeout(s),delete n.dataset.armed,n.textContent=i}}var Df=class{constructor({scene:t,camera:e,materials:i,sky:s,renderer:r,settings:o,tickAtlas:a}){Object.assign(this,{scene:t,camera:e,materials:i,sky:s,renderer:r,settings:o,tickAtlas:a}),this.world=new Ao(iE),this.chunks=new No(t,this.world,i,6);let l=this.world.findSpawn();this.cx=l.x,this.cz=l.z,this.ground=Math.max(this.world.heightAt(Math.floor(l.x),Math.floor(l.z)),30),this.angle=.9,this.dayTime=.12,this.elapsed=0,this.chunks.preload(this.cx,this.cz,3),this.sky.setMoonPhase(3),e.fov=68,e.updateProjectionMatrix()}update(t){this.elapsed+=t,this.angle+=t*.06,this.dayTime=.1+.26*(.5-.5*Math.cos(this.elapsed/55));let e=34,i=Math.sin(this.elapsed*.21)*1.5,s=this.camera;s.position.set(this.cx+Math.cos(this.angle)*e,this.ground+19+i,this.cz+Math.sin(this.angle)*e),s.lookAt(this.cx,this.ground+1,this.cz);let r=68+(this.settings.get("fov")-75);Math.abs(s.fov-r)>.01&&(s.fov+=(r-s.fov)*Math.min(1,8*t),s.updateProjectionMatrix()),this.tickAtlas(this.elapsed),this.chunks.update(this.cx,this.cz,8);let o=this.sky.update(this.dayTime,s.position,this.elapsed);this.materials.tint.value.copy(o.tint),this.materials.sprite.color.copy(o.tint),this.scene.background=this.scene.background||o.sky.clone(),this.scene.background.copy(o.sky),this.scene.fog.color.copy(o.sky);let a=this.chunks.radius*16-4;this.scene.fog.near=a*.55,this.scene.fog.far=a,this.renderer.render(this.scene,s)}dispose(){for(let t of this.world.chunks.values())this.chunks.disposeMeshes(t);this.scene.remove(this.chunks.group)}};async function Tx(n){let{params:t,atlasCanvas:e,titleLogo:i,openOptions:s}=n,{storage:r}=n;if(n.autoplay)return oE(t,r);let{audio:o}=n;o.setScene("title"),o.start(),o.unlockOnGesture();let a=Jt("music-hint"),l=setInterval(()=>{a.hidden=o.running||!o.musicOn},300),c=new AbortController,h=(g,m)=>window.addEventListener(g,m,{signal:c.signal}),d=new Df(n),u=0,f=performance.now(),p=g=>{u=requestAnimationFrame(p);let m=Math.min(.1,(g-f)/1e3);f=g,n.windTime.value=d.elapsed%1e3,d.update(m)};u=requestAnimationFrame(p),t.has("title")||await aE(n);let x=await new Promise(g=>{let m={title:Jt("title"),worlds:Jt("worlds")},w=k=>{for(let[W,Q]of Object.entries(m))Q.hidden=W!==k;R=k},R="title",v=Jt("title-logo");v.width=i.width,v.height=i.height,v.getContext("2d").drawImage(i,0,0),Jt("title-credit").textContent=It.game.studio.name,Jt("t-play").addEventListener("click",()=>{w("worlds"),P()}),Jt("t-options").addEventListener("click",s),r.kind==="server"?Ex(Jt("t-quit"),"Click again: stop the game server",()=>lE(r)):Jt("t-quit").hidden=!0,w("title");let S=[],M=null,C=!1,_=Jt("world-list"),T=k=>{let W=new Date(k);return isNaN(W)?"":W.toLocaleDateString(void 0,{month:"short",day:"numeric"})+" "+W.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})};function I(){if(_.replaceChildren(...S.map(k=>{let W=document.createElement("div");W.className="world-item"+(k.id===M?" sel":""),W.dataset.id=k.id;let Q=document.createElement("b");Q.textContent=k.name;let Mt=document.createElement("span");return Mt.textContent=`${k.mode==="creative"?"Creative":"Survival"} \xB7 Day ${(k.day||0)+1} \xB7 Seed ${k.seed} \xB7 ${T(k.updated)}`,W.append(Q,Mt),W.addEventListener("click",()=>{M=k.id,I()}),W.addEventListener("dblclick",()=>U(k.id)),W})),!S.length){let k=document.createElement("p");k.className="world-empty",k.textContent="No worlds yet. Create one to start playing!",_.append(k)}Jt("w-play").disabled=!M||C,Jt("w-del").disabled=!M||C,Jt("w-del").disarm?.()}async function P(){Jt("world-error").textContent="";try{S=await r.list()}catch(k){S=[],Jt("world-error").textContent="Could not read your worlds: "+k.message}r.persistent||(Jt("world-error").textContent="Your browser is not allowing saved games here: worlds will be lost when you close this tab."),S.some(k=>k.id===M)||(M=S[0]?.id??null),I(),!S.length&&!Jt("world-error").textContent&&q()}async function U(k){if(!C){C=!0,Jt("w-play").disabled=!0;try{Jt("loading").hidden=!1,await Nf();let W=await r.load(k);g({id:k,save:W})}catch(W){C=!1,Jt("loading").hidden=!0,Jt("world-error").textContent="Could not load that world: "+W.message,I()}}}Jt("w-play").addEventListener("click",()=>M&&U(M)),Jt("w-back").addEventListener("click",()=>w("title")),Ex(Jt("w-del"),"Click again to delete forever",async()=>{if(M){try{await r.remove(M),M=null}catch(k){Jt("world-error").textContent=k.message}P()}});let B=Jt("world-create"),D="survival",F=k=>{D=k,Jt("wc-mode").textContent="Game mode: "+(k==="creative"?"Creative":"Survival")};function q(){Jt("wc-name").value="New World",Jt("wc-seed").value="",F("survival"),B.hidden=!1,Jt("world-actions").hidden=!0,Jt("wc-name").focus(),Jt("wc-name").select()}function J(){B.hidden=!0,Jt("world-actions").hidden=!1}Jt("w-new").addEventListener("click",q),Jt("wc-cancel").addEventListener("click",J),Jt("wc-mode").addEventListener("click",()=>F(D==="survival"?"creative":"survival"));async function j(){if(!C)try{let k=await r.create({name:Jt("wc-name").value,mode:D,seed:rE(Jt("wc-seed").value)});await U(k.id)}catch(k){Jt("world-error").textContent="Could not create the world: "+k.message}}Jt("wc-go").addEventListener("click",j),h("keydown",k=>{if(R!=="worlds"||C)return;if(k.code==="Escape"){!B.hidden&&S.length?J():B.hidden&&w("title");return}if(!B.hidden){k.code==="Enter"&&j();return}let W=S.findIndex(Q=>Q.id===M);k.code==="ArrowDown"&&S.length?(M=S[Math.min(S.length-1,W+1)].id,I()):k.code==="ArrowUp"&&S.length?(M=S[Math.max(0,W-1)].id,I()):k.code==="Enter"&&M&&U(M)})});return await Nf(),cancelAnimationFrame(u),clearInterval(l),a.hidden=!0,c.abort(),d.dispose(),Jt("title").hidden=!0,Jt("worlds").hidden=!0,{...x,done:Ax}}function Ax(){Jt("loading").hidden=!0,document.body.classList.remove("startup")}async function oE(n,t){let e=n.get("world");if(!e){let i=n.has("seed")?Number(n.get("seed")):void 0;e=(await t.create({name:"Autoplay",mode:n.get("mode")||"survival",seed:i})).id}return{id:e,save:await t.load(e),done:Ax}}async function aE(n){let t=Jt("intro"),{name:e,tagline:i}=It.game.studio,s=jh(n.atlasCanvas,e.toUpperCase(),4),r=Jt("intro-logo");r.width=s.width,r.height=s.height,r.getContext("2d").drawImage(s,0,0);let o=br(n.atlasCanvas,ft.GRASS,112),a=Jt("intro-emblem");a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),Jt("intro-sub").textContent=i;let l,c=new Promise(d=>{l=d}),h=new AbortController;for(let d of["keydown","pointerdown"])window.addEventListener(d,l,{signal:h.signal});t.hidden=!1,await Nf(),t.classList.add("in"),await Promise.race([wx(900+sE),c]),t.classList.remove("in"),await wx(700),h.abort(),t.hidden=!0}async function lE(n){await n.quitGame(),document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#15110e;color:#fff;font-family:Consolas,monospace;text-align:center"><h1 style="margin:0">Thanks for playing!</h1><p style="color:#bbb;margin:0">The game server has stopped. You can close this tab.<br>Run <b>npm start</b> to play again.</p></div>',window.close()}var cE=/^[a-z0-9-]{1,48}$/,hE=n=>(typeof n=="string"?n.replace(/\s+/g," ").trim().slice(0,32):"")||"New World",Cx=(n,t)=>({id:n,name:t.name,mode:t.mode==="creative"?"creative":"survival",seed:t.seed,created:t.created,updated:t.updated,day:t.day??0}),Uf=n=>typeof n=="string"&&cE.test(n);function uE(n,t,e){let i=n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,30)||"world";for(;;){let s=i+"-"+e().toString(36).slice(2,6).padEnd(4,"0");if(!t(s))return s}}function Rx(n,{rand:t=Math.random,now:e=()=>new Date().toISOString(),persistent:i=!0}={}){let s=new Set;return{kind:"local",persistent:i,async list(){let r=[];for(let o of await n.keys()){s.add(o);let a=await n.get(o);a&&typeof a=="object"&&r.push(Cx(o,a))}return r.sort((o,a)=>String(a.updated).localeCompare(String(o.updated)))},async create({name:r,mode:o,seed:a}={}){for(let u of await n.keys())s.add(u);let l=hE(r),c=e(),h={name:l,created:c,updated:c,seed:Number.isInteger(a)?a:Math.floor(t()*2**31),mode:o==="creative"?"creative":"survival"},d=uE(l,u=>s.has(u),t);return s.add(d),await n.set(d,h),Cx(d,h)},async load(r){let o=Uf(r)?await n.get(r):null;if(!o)throw new Error("no such world");return{...o,id:r}},async save(r,o){let a=Uf(r)?await n.get(r):null;if(!a)throw new Error("no such world");let l=typeof o=="string"?JSON.parse(o):o;if(typeof l!="object"||l===null||typeof l.seed!="number")throw new Error("bad world payload");await n.set(r,{...l,name:a.name,created:a.created,updated:e()})},async remove(r){Uf(r)&&await n.delete(r),s.delete(r)},saveOnExit(r,o){this.save(r,o).catch(()=>{})}}}function dE(n=(...t)=>fetch(...t)){let t=async(e,i="GET",s)=>{let r=await n(e,{method:i,headers:s===void 0?{}:{"Content-Type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)});if(!r.ok)throw new Error(`${i} ${e}: ${r.status} ${await r.text()}`);return r.json()};return{kind:"server",persistent:!0,list:()=>t("api/worlds"),create:e=>t("api/worlds","POST",e),load:e=>t("api/worlds/"+e),save:(e,i)=>n("api/worlds/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:i}),remove:e=>t("api/worlds/"+e,"DELETE"),saveOnExit(e,i){navigator.sendBeacon("api/worlds/"+e,new Blob([i],{type:"application/json"}))},async quitGame(){try{await n("__voxelcraft/shutdown",{method:"POST",headers:{"x-voxelcraft-stop":"1"}})}catch{}}}}function fE(n="voxelcraft",t="worlds"){let e=()=>new Promise((o,a)=>{let l=indexedDB.open(n,1);l.onupgradeneeded=()=>l.result.createObjectStore(t),l.onsuccess=()=>o(l.result),l.onerror=()=>a(l.error)}),i=null,s=()=>i??=e(),r=async(o,a)=>{let l=await s();return new Promise((c,h)=>{let d=l.transaction(t,o),u=a(d.objectStore(t));d.oncomplete=()=>c(u?.result),d.onerror=()=>h(d.error),d.onabort=()=>h(d.error)})};return{get:o=>r("readonly",a=>a.get(o)),set:(o,a)=>r("readwrite",l=>l.put(a,o)),delete:o=>r("readwrite",a=>a.delete(o)),keys:()=>r("readonly",o=>o.getAllKeys())}}function pE(){let n=new Map;return{get:async t=>n.has(t)?structuredClone(n.get(t)):void 0,set:async(t,e)=>{n.set(t,structuredClone(e))},delete:async t=>{n.delete(t)},keys:async()=>[...n.keys()]}}async function Ix(){try{let n=await fetch("api/ping",{cache:"no-store"});if(n.ok&&(await n.json())?.game==="voxelcraft")return dE()}catch{}try{let n=fE();return await n.keys(),navigator.storage?.persist&&navigator.storage.persist().catch(()=>{}),Rx(n)}catch{return Rx(pE(),{persistent:!1})}}var ni=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),e&&(s.textContent=e),i&&i.appendChild(s),s},Of=[{id:"move",label:"Tap: pick up / place",button:0,shift:!1},{id:"split",label:"Tap: split / place one",button:2,shift:!1},{id:"quick",label:"Tap: quick move / wear",button:0,shift:!0}];function Lx(n){let t={strafe:0,forward:0,edge:!1,jump:!1,crouch:!1,sprint:!1},e=!1,i=!1,s=new Set,r={},o={},a=!1,l=null,c=ni("div");c.id="touch",c.hidden=!0;let h=ni("div","tz look","",c),d=ni("div","tz move","",c),u=ni("div","stick ghost","",c);ni("i","knob","",u);let f=ni("div","stick live","",c),p=ni("i","knob","",f);f.hidden=!0;let x=null,g={x:0,y:0},m=()=>{f.style.left=g.x+"px",f.style.top=g.y+"px"};function w(){x=null,t.strafe=0,t.forward=0,t.edge=!1,f.hidden=!0,u.hidden=!1,n.changed?.()}d.addEventListener("pointerdown",ot=>{x===null&&(ot.preventDefault(),x=ot.pointerId,d.setPointerCapture(ot.pointerId),g={x:ot.clientX,y:ot.clientY},m(),p.style.transform="translate(-50%, -50%)",f.hidden=!1,u.hidden=!0)}),d.addEventListener("pointermove",ot=>{if(ot.pointerId!==x)return;g=qg(g,{x:ot.clientX,y:ot.clientY}),m();let dt=ot.clientX-g.x,bt=ot.clientY-g.y,V=Wg(dt,bt);t.strafe=V.strafe,t.forward=V.forward,t.edge=Xg(V);let Z=Math.min(1,Math.hypot(dt,bt)/56)*56,pt=Math.atan2(bt,dt);p.style.transform=`translate(calc(-50% + ${Math.cos(pt)*Z}px), calc(-50% + ${Math.sin(pt)*Z}px))`,n.changed?.()});for(let ot of["pointerup","pointercancel"])d.addEventListener(ot,dt=>{dt.pointerId===x&&w()});let R=null,v={x:0,y:0};h.addEventListener("pointerdown",ot=>{R===null&&(ot.preventDefault(),R=ot.pointerId,h.setPointerCapture(ot.pointerId),v={x:ot.clientX,y:ot.clientY})}),h.addEventListener("pointermove",ot=>{ot.pointerId===R&&(n.look(ot.clientX-v.x,ot.clientY-v.y),v={x:ot.clientX,y:ot.clientY})});for(let ot of["pointerup","pointercancel"])h.addEventListener(ot,dt=>{dt.pointerId===R&&(R=null)});function S(ot,dt,bt=c){let V=ni("div","tb "+ot,dt,bt);return V.setAttribute("role","button"),bt===c&&(r[ot]=V,C(ot,V),_(V)),V}function M(ot){let dt=r[ot],bt=o[ot];dt&&Object.assign(dt.style,bt?{left:bt.x*100+"%",top:bt.y*100+"%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)"}:{left:"",top:"",right:"",bottom:"",transform:""})}function C(ot,dt){dt.addEventListener("pointerdown",bt=>{if(!a)return;bt.preventDefault(),bt.stopImmediatePropagation();let V=dt.getBoundingClientRect(),Z=bt.clientX-(V.left+V.width/2),pt=bt.clientY-(V.top+V.height/2),Ut=bt.pointerId;dt.setPointerCapture(Ut),dt.classList.add("moving");let _t=fe=>{fe.pointerId===Ut&&(o={...o,[ot]:Zg(fe.clientX-Z,fe.clientY-pt,V.width,V.height,window.innerWidth,window.innerHeight)},M(ot))},zt=fe=>{if(fe.pointerId===Ut){for(let qt of["pointermove","pointerup","pointercancel"])dt.removeEventListener(qt,qt==="pointermove"?_t:zt);dt.classList.remove("moving"),n.layoutChanged?.(o)}};dt.addEventListener("pointermove",_t),dt.addEventListener("pointerup",zt),dt.addEventListener("pointercancel",zt)})}function _(ot){let dt=null,bt={x:0,y:0};ot.addEventListener("pointerdown",V=>{dt===null&&(dt=V.pointerId,bt={x:V.clientX,y:V.clientY},ot.setPointerCapture(V.pointerId))}),ot.addEventListener("pointermove",V=>{V.pointerId===dt&&(n.look(V.clientX-bt.x,V.clientY-bt.y),bt={x:V.clientX,y:V.clientY})});for(let V of["pointerup","pointercancel"])ot.addEventListener(V,Z=>{Z.pointerId===dt&&(dt=null)})}function T(ot,dt,bt,V){let Z=S(ot,dt),pt=null,Ut=()=>{pt!==null&&(pt=null,s.delete(Ut),Z.classList.remove("on"),V?.())};Z.addEventListener("pointerdown",_t=>{a||pt!==null||(_t.preventDefault(),pt=_t.pointerId,Z.setPointerCapture(_t.pointerId),Z.classList.add("on"),s.add(Ut),bt())});for(let _t of["pointerup","pointercancel"])Z.addEventListener(_t,zt=>{zt.pointerId===pt&&Ut()});return Z}function I(ot,dt,bt,V=c){let Z=S(ot,dt,V);return Z.addEventListener("pointerdown",pt=>{a||(pt.preventDefault(),bt())}),Z}function P(ot,dt,bt){let V=S(ot,dt);return V.addEventListener("pointerdown",Z=>{a||(Z.preventDefault(),t[bt]=!t[bt],V.classList.toggle("on",t[bt]),n.changed?.())}),V}T("attack","Break",()=>n.attack(!0),()=>n.attack(!1)),T("use","Use",()=>n.use(!0),()=>n.use(!1)),T("jump","Jump",()=>{t.jump=!0,n.jump(),n.changed?.()},()=>{t.jump=!1,n.changed?.()});let U=I("fly","Fly",()=>n.fly()),B=P("sprint","Run","sprint"),D=P("crouch","Sneak","crouch");I("inv","Bag",()=>n.inventory()),I("menu","II",()=>n.menu());let F=I("close","\u2715",()=>n.closeScreen(),document.body);F.id="t-close";let q=ni("div","tb invmode");document.querySelector("#inventory .inv-col").prepend(q),q.id="t-invmode",F.hidden=q.hidden=!0;let J=0,j=()=>{q.textContent=Of[J].label};j(),q.addEventListener("pointerdown",ot=>{ot.preventDefault(),J=(J+1)%Of.length,j()}),document.getElementById("inventory").addEventListener("mousedown",ot=>{let dt=Of[J];!e||!ot.isTrusted||dt.id==="move"||(ot.stopImmediatePropagation(),ot.preventDefault(),ot.target.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:dt.button,shiftKey:dt.shift,clientX:ot.clientX,clientY:ot.clientY})))},!0);let k=ni("div","tedit","",document.body);k.hidden=!0,ni("span","","Drag the buttons where you want them",k);let W=ni("button","small","Reset",k),Q=ni("button","small","Done",k);W.addEventListener("click",()=>{o={};for(let ot of Object.keys(r))M(ot);n.layoutChanged?.(o)}),Q.addEventListener("click",()=>Mt());function Mt(){if(!a)return;a=!1,k.hidden=!0,c.classList.remove("editing"),document.body.classList.remove("peek"),c.hidden=!i;let ot=l;l=null,ot?.()}document.body.appendChild(c);function yt(){for(let ot of[...s])ot();x!==null&&w(),R=null,t.jump=!1,t.crouch=!1,t.sprint=!1,B.classList.remove("on"),D.classList.remove("on"),n.changed?.()}return{state:t,reset:yt,get enabled(){return e},setEnabled(ot){e=!!ot,e||(Mt(),yt(),c.hidden=!0,i=!1,F.hidden=!0,q.hidden=!0)},get editing(){return a},setLayout(ot){o=Yg(ot);for(let dt of Object.keys(r))M(dt)},edit(ot){!e||a||(yt(),a=!0,l=ot,c.hidden=!1,c.classList.add("editing"),document.body.classList.add("peek"),k.hidden=!1,U.hidden=!1,U.classList.remove("on"))},sync({show:ot,screen:dt,creative:bt,flying:V}){if(!e||a)return;let Z=!!ot;Z!==i&&(i=Z,c.hidden=!Z,Z||yt()),U.hidden=!bt,U.classList.toggle("on",!!V),F.hidden=!dt,q.hidden=dt!=="inv"}}}var mE=[".inv-panel",".pal-panel",".opt-panel",".world-panel","#menu","#title-menu","#death-box"];function gE(n,t,e,i,s=12){return!(n>0)||!(t>0)?1:Math.max(.25,Math.min(1,(e-s*2)/n,(i-s*2)/t))}function xE(n,t){return Math.max(.55,Math.min(1,n/900,t/560))}var yE=1.8,_E=(n,t,e=1)=>Math.min(yE,xE(n,t)*(Number.isFinite(e)&&e>0?e:1));function Nx(n=()=>1){let t=[],e=r=>{let o=r.offsetWidth,a=r.offsetHeight;r.style.setProperty("--fit",String(gE(o,a,window.innerWidth,window.innerHeight)))},i=()=>{document.documentElement.style.setProperty("--hud",_E(window.innerWidth,window.innerHeight,n()).toFixed(3));for(let r of t)e(r)},s=typeof ResizeObserver=="function"?new ResizeObserver(r=>{for(let o of r)e(o.target)}):null;for(let r of mE)for(let o of document.querySelectorAll(r))t.push(o),s?.observe(o);return window.addEventListener("resize",i),window.addEventListener("orientationchange",i),i(),i}var Ff=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Dx=300,Bf=It.game.treeFall.leafReach,ys=(n,t,e)=>n+","+t+","+e,Ux=n=>n.split(",").map(Number),Fx=[];for(let n=-1;n<=1;n++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++){let i=Math.abs(n)+Math.abs(t)+Math.abs(e);(i===1||i===2)&&Fx.push([n,t,e])}function vE(n,t,e,i){if(e<=0||!n.isLoaded(t,i))return!0;let s=n.getBlock(t,e-1,i);return We[s]>0&&!ds[s]&&!Zi[s]}function Bx(n,t,e,i){let s=new Map,r=[],o=!1,a=n.getBlock(t,e+1,i);for(ds[a]&&(s.set(ys(t,e+1,i),[t,e+1,i,a]),r.push([t,e+1,i]));r.length&&s.size<Dx;){let[R,v,S]=r.pop();vE(n,R,v,S)&&(o=!0);for(let[M,C,_]of Fx){let T=R+M,I=v+C,P=S+_;s.has(ys(T,I,P))||!ds[n.getBlock(T,I,P)]||(s.set(ys(T,I,P),[T,I,P,n.getBlock(T,I,P)]),r.push([T,I,P]))}}if(s.size>=Dx)return null;o&&s.clear();let l=[[t,e,i],...s.values()],c=new Map,h=[];for(let[R,v,S]of l)for(let[M,C,_]of Ff){let T=R+M,I=v+C,P=S+_;Zi[n.getBlock(T,I,P)]&&!c.has(ys(T,I,P))&&(c.set(ys(T,I,P),1),h.push([T,I,P]))}for(let R=1;R<Bf+1&&h.length;R++){let v=[];for(let[S,M,C]of h)for(let[_,T,I]of Ff){let P=S+_,U=M+T,B=C+I;!Zi[n.getBlock(P,U,B)]||c.has(ys(P,U,B))||(c.set(ys(P,U,B),R+1),v.push([P,U,B]))}h=v}let d=new Set,u=1/0,f=-1/0,p=1/0,x=-1/0,g=1/0,m=-1/0;for(let R of c.keys()){let[v,S,M]=Ux(R);u=Math.min(u,v),f=Math.max(f,v),p=Math.min(p,S),x=Math.max(x,S),g=Math.min(g,M),m=Math.max(m,M)}if(c.size){let R=Bf+1,v=[];for(let S=u-R;S<=f+R;S++)for(let M=p-R;M<=x+R;M++)for(let C=g-R;C<=m+R;C++)ds[n.getBlock(S,M,C)]&&!s.has(ys(S,M,C))&&v.push([S,M,C]);for(let S=1;S<=Bf&&v.length;S++){let M=[];for(let[C,_,T]of v)for(let[I,P,U]of Ff){let B=C+I,D=_+P,F=T+U,q=ys(B,D,F);!Zi[n.getBlock(B,D,F)]||d.has(q)||(d.add(q),M.push([B,D,F]))}v=M}}let w=[...c.keys()].filter(R=>!d.has(R)).map(R=>{let v=Ux(R);return[...v,n.getBlock(v[0],v[1],v[2])]});return!s.size&&!w.length?null:{logs:[...s.values()],leaves:w}}function kx(n,t){for(let[e,i,s]of t.logs)n.setBlock(e,i,s,ft.AIR);for(let[e,i,s]of t.leaves)n.setBlock(e,i,s,ft.AIR)}function zx(n,t,e,i){let s=n+.5-e,r=t+.5-i;return Math.abs(s)>=Math.abs(r)?{dx:s>=0?1:-1,dz:0}:{dx:0,dz:r>=0?1:-1}}function Hx(n,t,e,i,s,r,o,a){let l=n-i,c=e-r,h=t-s,d=l*o+c*a,u=l*a-c*o;return[i+o*h+a*u,s-d,r+a*h-o*u]}var Ox=n=>n===ft.AIR||Kt[n]>0||ae[n]===1;function Vx(n,t,e,i,s){for(let r=0;r<=s;r++){let o=e+r;if(!(o<1||o>=64||!Ox(n.getBlock(t,o,i)))){for(let a=0;a<5&&o>1&&Ox(n.getBlock(t,o-1,i));a++)o--;return o}}return null}function Gx(n,t,e,i,s,r,o){let a=[],l=[];for(let c of[t.logs,t.leaves]){let h=c.slice().sort((d,u)=>d[1]-i-(u[1]-i));for(let[d,u,f,p]of h){let[x,g,m]=Hx(d,u,f,e,i,s,r,o),w=Vx(n,x,g,m,3);if(w===null){l.push({id:p,x,y:g,z:m});continue}n.setBlock(x,w,m,p),a.push({id:p,x,y:w,z:m})}}return{placed:a,lost:l}}function Wx(n,t,e,i,s,r,o){let a=[];for(let l of[t.logs,t.leaves])for(let[c,h,d,u]of l){let[f,p,x]=Hx(c,h,d,e,i,s,r,o),g=Vx(n,f,p,x,6);a.push({id:u,x:f,y:g??i+1,z:x})}return a}var cn=It.game,vu=cn.hunger;ce.enabled=!1;var Vt=n=>document.getElementById(n),Je=new iu,Xx=new URLSearchParams(location.search),ME=Xx.has("touch")?!0:Xx.has("desktop")?!1:null,fy=()=>ME??!!Je.get("touchControls"),on=fy();document.body.classList.toggle("touch",on);var bE=Nx(()=>Je.get("hudSize")),jf=new URLSearchParams(location.search),Qf=!1;function py(){if(Qf){un("A new version is ready: it loads when you quit to the title.");return}let n=new URL(location.href);n.searchParams.set("title",""),location.replace(n)}window.addEventListener("vc-update",py);window.__vcUpdated&&py();async function SE(){if(!navigator.locks)return!0;for(let n=0;n<8;n++){if(await new Promise(e=>{navigator.locks.request("voxelcraft-game",{ifAvailable:!0},i=>{if(!i){e(!1);return}return e(!0),new Promise(()=>{})})}))return!0;await new Promise(e=>setTimeout(e,250))}return!1}await SE()||(document.body.innerHTML='<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#1b1410;color:#fff;font-family:Consolas,monospace;text-align:center;padding:24px"><h1 style="margin:0">VoxelCraft is already open</h1><p style="max-width:520px;color:#ccc;margin:0">Only one copy of the game can run at a time. Close the other tab or window, then reload this page.</p></div>',await new Promise(()=>{}));var ss=jf.has("autoplay"),{canvas:is,avg:my}=await Ag(),wE=Cg(my);document.documentElement.style.setProperty("--dirt",`url(${Fg(is)})`);var tp=Vt("logo"),Mu=jh(is);tp.width=Mu.width;tp.height=Mu.height;tp.getContext("2d").drawImage(Mu,0,0);var qo=new Lh({canvas:Vt("game"),antialias:!1,powerPreference:"high-performance"});qo.outputColorSpace=cr;qo.setPixelRatio(Math.min(window.devicePixelRatio,2));var Te=new ya;Te.fog=new xa(10208511,40,90);var He=new Mn(75,1,.05,700);He.rotation.order="YXZ";Te.add(He);function gy(){qo.setSize(window.innerWidth,window.innerHeight,!1),He.aspect=window.innerWidth/window.innerHeight,He.updateProjectionMatrix()}window.addEventListener("resize",gy);gy();var xy=n=>{let t=new Gi(n);return t.magFilter=t.minFilter=Ke,t.generateMipmaps=!1,t},Rr=xy(is),yy=Tg(is),mi={solid:new tn({map:Rr,vertexColors:!0,alphaTest:.5}),water:new tn({map:Rr,vertexColors:!0,transparent:!0,opacity:.74,depthWrite:!1}),sprite:new tn({vertexColors:!0}),plant:new tn({map:Rr,vertexColors:!0,alphaTest:.5,side:ai}),leaves:new tn({map:Rr,vertexColors:!0,alphaTest:.5})},bu={value:new Wt(1,1,1)},EE={value:Fh},TE={value:new Wt(1,.84,.58)};mi.tint=bu;function ep(n){n.uniforms.uTint=bu,n.uniforms.uWarm=TE,n.uniforms.uFloor=EE,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aBlk;
uniform vec3 uTint;
uniform vec3 uWarm;
uniform float uFloor;`).replace("#include <color_vertex>",`#include <color_vertex>
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  vColor.rgb = min(vec3(1.0), max(vColor.rgb * uTint, vec3(aBlk.y * uFloor)) + aBlk.x * uWarm);
#endif`)}mi.solid.onBeforeCompile=ep;mi.water.onBeforeCompile=ep;var np={value:0},_y=n=>{ep(n),n.uniforms.uTime=np,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aSway;
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
      float ph = uTime * 2.1 + wp.x * 0.65 + wp.z * 0.45;
      float gust = sin(ph) + 0.5 * sin(ph * 2.3 + 1.7);
      transformed.x += gust * 0.075 * aSway;
      transformed.z += cos(ph * 0.9 + wp.x * 0.3) * 0.05 * aSway;`)};mi.plant.onBeforeCompile=_y;mi.leaves.onBeforeCompile=_y;var $o=new qh(Te,{sun:Rg(),moon:Ig(),glow:Pg()});$o.setPixelRatio(qo.getPixelRatio());var vy=new tn({map:Rr,vertexColors:!0,alphaTest:.5,fog:!1,depthTest:!1,transparent:!0}),ip=new tn({vertexColors:!0,fog:!1,depthTest:!1,transparent:!0}),sp=new tn({color:13212276,fog:!1,depthTest:!1,transparent:!0}),rp=new Dn(.11,.11,.6),ze=new we(rp,sp);ze.renderOrder=999;ze.frustumCulled=!1;He.add(ze);var Qi=new we(rp,ip);Qi.renderOrder=999;Qi.frustumCulled=!1;Qi.visible=!1;He.add(Qi);var qx=0,Er={pos:[-.56,-.2,-.72],rot:[.12,.5,-.06],scale:.4},vs={arm:{pos:[.5,-.5,-.55],rot:[.55,-.35,.15],scale:1},block:{pos:[.5,-.46,-.8],rot:[.25,-.6,.05],scale:.22},sprite:{pos:[.46,-.33,-.7],rot:[.1,-.5,.05],scale:.42},tool:{pos:[.52,-.42,-.8],rot:[.12,2.45,.38],scale:.46,pivot:[.66,-.7,-.45]}};vs.axe={...vs.tool,flip:!0};var en=vs.arm,Yf=-1,AE=new Hn().setFromAxisAngle(new G(1,1,0).normalize(),Math.PI),kf=new Hn,$x=new zi,Yx=new G;function CE(){let n=me.equipment.shield&&Ri(me.equipment.shield.id)?me.equipment.shield.id:0;n!==qx&&(qx=n,n&&(Qi.geometry=cl(n,!0))),Qi.visible=!!n&&ze.visible&&!fn,Qi.visible&&(Qi.position.set(Er.pos[0]+Math.sin(Cr+1.3)*.01,Er.pos[1]+Math.abs(Math.cos(Cr+1.3))*.012+Math.sin(ts*7)*.002,Er.pos[2]),Qi.rotation.set(Er.rot[0],Er.rot[1],Er.rot[2]),Qi.scale.setScalar(Er.scale))}function My(){let n=Zo(Re),t=n?n.id:0;t!==Yf&&(Yf=t,t?Zs(t)?(ze.geometry=Fo(t),ze.material=vy,en=vs.block):(ze.geometry=cl(t,!0),ze.material=ip,en=ti(t)?ti(t).type==="axe"?vs.axe:vs.tool:vs.sprite):(ze.geometry=rp,ze.material=sp,en=vs.arm))}var js=new Ta(new Ia(new Dn(1.004,1.004,1.004)),new co({color:0,fog:!1}));js.visible=!1;Te.add(js);var op=xy(Lg());op.repeat.set(.1,1);var ml=new we(new Dn(1.006,1.006,1.006),new tn({map:op,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));ml.visible=!1;Te.add(ml);var ap=256,Ii=new wa(new Dn(1,1,1),new tn({color:16777215}),ap);Ii.instanceMatrix.setUsage(Ad);Ii.frustumCulled=!1;Ii.count=0;Te.add(Ii);var Qs=[],Zx=new Se,RE=new Hn,Kx=new G,Jx=new G,by=new Wt;function Lr(n,t,e,i){let s=wE[i]||[.5,.5,.5];for(let r=0;r<14&&Qs.length<ap;r++){let o=.75+Math.random()*.5;Qs.push({x:n+.2+Math.random()*.6,y:t+.2+Math.random()*.6,z:e+.2+Math.random()*.6,vx:(Math.random()-.5)*3.5,vy:Math.random()*3.5+1,vz:(Math.random()-.5)*3.5,life:.55+Math.random()*.5,size:.07+Math.random()*.08,r:s[0]*o,g:s[1]*o,b:s[2]*o})}}var zf=new Map;function IE(n){if(!zf.has(n)){let t=br(is,n,16),e=t.getContext("2d").getImageData(0,0,16,16).data,i=0,s=0,r=0,o=0;for(let a=0;a<e.length;a+=4)e[a+3]>200&&(i+=e[a],s+=e[a+1],r+=e[a+2],o++);zf.set(n,o?[i/o/255,s/o/255,r/o/255]:[.8,.5,.2])}return zf.get(n)}var uu=new G;function PE(n){let t=IE(n);He.updateMatrixWorld(),He.localToWorld(uu.set(.02,-.2,-.5));let e=He.getWorldDirection(Ml);for(let i=0;i<9&&Qs.length<ap;i++){let s=i%3===0,r=s?1.25:.8+Math.random()*.3;Qs.push({x:uu.x+(Math.random()-.5)*.08,y:uu.y+(Math.random()-.5)*.06,z:uu.z+(Math.random()-.5)*.08,vx:e.x*.6+(Math.random()-.5)*1.6,vy:.9+Math.random()*1.4,vz:e.z*.6+(Math.random()-.5)*1.6,life:.35+Math.random()*.3,size:.018+Math.random()*.026,r:Math.min(1,t[0]*r+(s?.15:0)),g:Math.min(1,t[1]*r+(s?.15:0)),b:Math.min(1,t[2]*r+(s?.15:0))})}}function LE(n){let t=0;for(let e=Qs.length-1;e>=0;e--){let i=Qs[e];if(i.life-=n,i.life<=0){Qs.splice(e,1);continue}i.vy-=18*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n}for(let e of Qs){Jx.set(e.x,e.y,e.z);let i=e.size*Math.min(1,e.life*3);Kx.set(i,i,i),Zx.compose(Jx,RE,Kx),Ii.setMatrixAt(t,Zx),Ii.setColorAt(t,by.setRGB(e.r,e.g,e.b)),t++}Ii.count=t,Ii.instanceMatrix.needsUpdate=!0,Ii.instanceColor&&(Ii.instanceColor.needsUpdate=!0)}var er=!1,Su=Jg(Je,{onClose:()=>{er=!1},layout:{available:()=>Qf&&on,edit:()=>nr.edit(()=>{er=!0,Su.open()})}});ze.visible=!1;var te=new Zh;window.__audio=te;window.__atlas=is;te.setVolumes(Je.get("musicVolume"),Je.get("sfxVolume"));var lp=await Ix(),cp=await Tx({params:jf,autoplay:ss,atlasCanvas:is,titleLogo:Mu,openOptions:()=>Su.open(),renderer:qo,scene:Te,camera:He,materials:mi,sky:$o,windTime:np,audio:te,storage:lp,settings:Je,tickAtlas:n=>{yy(n)&&(Rr.needsUpdate=!0)}});Qf=!0;ze.visible=!0;te.setScene("game");var hp=cp.id,ke=cp.save,up=ke?.seed??Math.floor(Math.random()*2**31),kt=new Ao(up,{terrain:ke?.terrain??(ke?.player?1:3)});ke?.edits&&kt.loadEdits(ke.edits,ke.legacyCaves);var dn=new No(Te,kt,mi,ke?.radius??6,n=>dp.chunkColumns(n)),ct=new Do(kt),qn=new Qh(Te,kt,mi.solid,mi.sprite);qn.load(ke?.drops);var NE=n=>{let t=my[Be[n]?.top];return t?[t[0]*255,t[1]*255,t[2]*255]:[90,90,90]},dp=new lu(kt,NE),DE=new cu(Vt("minimap"),dp),Sy=xx({data:dp,getPlayer:()=>({x:ct.pos.x,z:ct.pos.z,yaw:ct.yaw}),onClose:()=>Eu()});Vt("minimap").addEventListener("click",()=>{Ue&&!Ve&&!fn&&Go("map")});var fp=Sx({scene:Te,world:kt}),wy=new au(kt),Ho=new Map,Ey=new ru(kt,{onSpawn(n){let t=new we(Fo(n.id),mi.solid);t.position.set(n.x+.5,n.y+.5,n.z+.5),Te.add(t),Ho.set(n,t)},onLand(n){Te.remove(Ho.get(n)),Ho.delete(n),dn.remeshNow(bs(n.x,n.z)),te.block(Be[n.id].sound,"place")},onDrop(n){if(Te.remove(Ho.get(n)),Ho.delete(n),!ee)for(let t of Ro(n.id,!0))qn.spawn(t.id,t.n,n.x+.5,n.rest+.5,n.z+.5);Lr(n.x,n.rest,n.z,n.id)}}),Ty=new ou(kt,{onBreak(n,t,e,i){if(Lr(n,t,e,i),te.block(Be[i].sound,"break"),!ee)for(let s of Ro(i,!0))qn.spawn(s.id,s.n,n+.5,t+.4,e+.5)}}),Yo=new eu({onLit(n,t,e,i){if(!kt.isLoaded(n,e))return!1;let s=kt.getBlock(n,t,e);if(s!==ft.FURNACE&&s!==ft.FURNACE_LIT)return!0;let r=i?ft.FURNACE_LIT:ft.FURNACE;return s!==r&&kt.setBlock(n,t,e,r),!0}});Yo.load(ke?.furnaces);var ee=ke?.mode==="creative",me=new Xh;me.load(ke?.inventory);me.loadEquipment(ke?.equipment);var wu=ke?.creativeHotbar??[...cn.creativeHotbarIds],zn={collected:new Set(ke?.progress?.collected),crafted:new Set(ke?.progress?.crafted),flags:new Set(ke?.progress?.flags)},mu=cn.player.maxFood,Cn=Math.min(mu,ke?.food??mu),Nr=ke?.saturation??cn.hunger.respawnSaturation,fi=0,gl=cn.player.maxHealth,pi=ke?.health>0?Math.min(gl,ke.health):gl,fn=!1,xl=ke?.day??0,Hf=Number(jf.get("growth"))||1,Re=ke?.slot??0,Pi=ke?.time??cn.time.startTime;$o.setMoonPhase(xl);var ts=0,Zo=n=>ee?{id:wu[n],n:1,d:0}:me.slots[n],Ir=()=>Zo(Re)?.id??0,tr=ke?.spawnPoint??kt.findSpawn(),Ko=ke?.player??tr;ct.pos.x=Ko.x;ct.pos.y=Ko.y;ct.pos.z=Ko.z;ct.yaw=Ko.yaw??0;ct.pitch=Ko.pitch??0;ct.flying=ee&&!!Ko.flying;dn.preload(ct.pos.x,ct.pos.z,3);for(;ct.collides(ct.pos.x,ct.pos.y,ct.pos.z)&&ct.pos.y<120;)ct.pos.y+=1;var Pr=n=>Be[n]?.sound??"default",Ay=()=>kt.getBlock(Math.floor(ct.pos.x),Math.floor(ct.pos.y-.2),Math.floor(ct.pos.z));ct.events.step=()=>te.block(Be[Ay()]?.sound||"default","step");ct.events.splash=()=>te.splash();ct.events.land=()=>te.block(Be[Ay()]?.sound||"default","place");ct.events.jump=n=>{ee||(Cn=Math.max(0,Cn-cx(n)))};ct.events.fall=n=>{let t=lx(n);ee||t<=0||(pp(ax(t,me.armor),"You hit the ground too hard"),fn||(Tr.v=-cn.fall.kick))};var Vf=_r.map(n=>n.done(zn));function ns(){let n=_r.map(t=>t.done(zn));n.forEach((t,e)=>{t&&!Vf[e]&&(un("Goal complete: "+_r[e].text),te.craft())}),Vf=n,Ms.renderGoals(Vf)}function gu(n){let t=ct.eye,e=He.getWorldDirection(Ml);qn.spawn(n.id,n.n,t.x+e.x*.5,t.y-.3+e.y*.5,t.z+e.z*.5,{d:n.d||0,delay:1.5,vx:e.x*4,vy:e.y*4+1.5,vz:e.z*4})}var Ms=Gg({atlas:is,inventory:me,getHotbarStack:Zo,onSelect:n=>Vo(n),onToss:gu,onCraft:(n,t)=>{t.ok&&(te.craft(),zn.crafted.add(n.out),t.leftover>0&&gu({id:n.out,n:t.leftover,d:0}),ns(),hn())},onPalettePick:n=>{wu[Re]=n,hn(),Cy()},onEquip:()=>{te.craft(),zn.flags.add("equipped"),ns(),hn()},onNotice:n=>un(n),onSmeltTake:n=>{te.craft(),zn.crafted.add(n.id),ns(),hn()}}),jx=0;function Cy(){let n=Zo(Re),t=Vt("blockname");t.textContent=n?En(n.id):"",t.classList.add("show"),clearTimeout(jx),jx=setTimeout(()=>t.classList.remove("show"),1400)}function hn(){Ms.renderHotbar(Re),My()}function Vo(n){Re=(n+9)%9,hn(),Cy()}var yl=-1;function Jo(){let n=Vt("health");n.style.display=ee?"none":"flex";let t=Math.ceil(pi);t!==yl&&(yl=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=pi-i*2;return Ug(s>=2?2:s>=1?1:0)})),n.classList.toggle("low",pi<=6))}var Qx=0;function UE(){let n=Vt("hurt");n.classList.add("flash"),clearTimeout(Qx),Qx=setTimeout(()=>n.classList.remove("flash"),220)}var Tr={y:0,v:0};function pp(n,t="You died"){ee||fn||n<=0||(pi=Math.max(0,pi-n),Jo(),UE(),te.hurt(),pi<=0&&FE(t))}var OE=1800;function FE(n){fn=!0,Ve&&gp();let t=0,e=ct.pos;for(let i of me.takeEverything())qn.spawn(i.id,i.n,e.x,e.y+.9,e.z,{d:i.d,delay:1.5,life:OE}),t++;hn(),Vt("death-cause").textContent=n+(t?". Your things are where you fell.":""),Vt("death").hidden=!1,document.exitPointerLock?.(),Rn(!1)}function Ry(){for(pi=gl,Cn=mu,Nr=vu.respawnSaturation,fn=!1,Vt("death").hidden=!0,ct.pos.x=tr.x,ct.pos.y=tr.y,ct.pos.z=tr.z,ct.vel.x=ct.vel.y=ct.vel.z=0,ct.stepSmooth=0,ct.fallPeak=null,dn.preload(ct.pos.x,ct.pos.z,2);ct.collides(ct.pos.x,ct.pos.y,ct.pos.z)&&ct.pos.y<120;)ct.pos.y+=1;yl=vl=-1,Jo(),wl(),ss?Rn(!0):(Rn(!0),jo())}Vt("respawn").addEventListener("click",Ry);var ty=0;function un(n,t=2200){let e=Vt("toast");e.textContent=n,e.classList.add("show"),clearTimeout(ty),ty=setTimeout(()=>e.classList.remove("show"),t)}hn();ns();var Dr=new Set,Xn={forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,down:!1},Ue=!1,Ve=null,Zf=!1,xu=0,xn={left:!1,right:!1},_s=n=>Dr.has(Je.key(n));function Iy(n,t){ct.yaw+=n,ct.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,ct.pitch+t))}function BE(){let n=document.documentElement;document.fullscreenElement||!n.requestFullscreen||matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches||n.requestFullscreen({navigationUI:"hide"}).then(()=>window.screen.orientation?.lock?.("landscape")).catch(()=>{})}var nr=Lx({changed:()=>Ur(),look:(n,t)=>{if(!Ue)return;let e=$g(n,t,Tf*Je.get("sensitivity"),Je.get("invertY"));Iy(e.yaw,e.pitch)},attack:n=>{Ue&&(xn.left=n,n||bl())},use:n=>{Ue&&(xn.right=n,es=n,n&&(Ar=0))},jump:()=>{let n=performance.now();ee&&n-xu<300&&yu(!ct.flying),xu=n},fly:()=>yu(!ct.flying),inventory:()=>{Ue&&!Ve&&Go(ee?"palette":"inv")},closeScreen:()=>Eu(),layoutChanged:n=>Je.set("touchLayout",n),menu:()=>{Ue&&(Rn(!1),Vt("play").textContent="Resume",Qo())}});nr.setEnabled(on);function Ur(){let n=nr.state;Xn.forward=_s("forward"),Xn.back=_s("back"),Xn.left=_s("left"),Xn.right=_s("right"),Xn.strafe=n.strafe,Xn.ahead=n.forward,Xn.jump=_s("jump")||n.jump,Zf=_s("sprint")||n.sprint||n.edge,Xn.sprint=Zf&&yp(),Xn.crouch=_s("crouch")||n.crouch,Xn.down=_s("crouch")||_s("down")||n.crouch}function mp(n){for(Pi+=n;Pi>=1;)Pi-=1,xl++,$o.setMoonPhase(xl)}function yu(n){if(!ee){un("Flying is only available in creative mode");return}ct.flying=n,ct.vel.y=0,un("Flying: "+(n?"ON":"OFF"))}function Go(n,t="hand",e=null){Ve=n,n==="inv"?Ms.openInventory(Re,t,e&&ol[t]?.furnace?Yo.get(e.x,e.y,e.z):null):n==="map"?Sy.open():Ms.openPalette(),document.exitPointerLock?.(),(ss||on)&&Rn(!1)}function gp(){Ve==="inv"?Ms.closeInventory():Ve==="palette"?Ms.closePalette():Ve==="map"&&Sy.close(),Ve=null,hn()}function Eu(){gp(),xp=performance.now()+700,Rn(!0),ss||(jo(),_l=performance.now())}window.addEventListener("keydown",n=>{if(er||n.target instanceof HTMLInputElement&&n.code!=="Escape")return;if(n.code==="Escape"&&Ue&&!ss&&document.pointerLockElement!==Wo&&!Ve){Rn(!1),Vt("play").textContent="Resume",Qo();return}if(n.code==="Escape"&&!Ue&&!Ve&&!fn&&!n.repeat&&performance.now()-Py>250){n.preventDefault(),Ny();return}if(n.code!=="Escape"&&Ly(),(n.code==="Tab"||n.code.startsWith("F")&&n.code!=="F11"&&n.code!=="F5"&&n.code!=="F12")&&n.preventDefault(),n.repeat){Ue&&(Dr.add(n.code),Ur());return}let t=Je.actionFor(n.code);if(Ve&&(t==="inventory"||t==="map"&&Ve==="map"||n.code==="Escape")){n.preventDefault(),Eu();return}if(t==="map"&&Ue){Go("map");return}if(t==="inventory"&&Ue){Go(ee?"palette":"inv");return}if(t==="music"){Uy();return}if(t==="debug"){Vt("debug").hidden=!Vt("debug").hidden;return}if(Ue)switch(Dr.add(n.code),Ur(),t){case"jump":{let e=performance.now();ee&&e-xu<300&&yu(!ct.flying),xu=e;break}case"fly":yu(!ct.flying);break;case"offhand":ZE();break;case"sprint":yp()||un("Too hungry to sprint");break;case"skipTime":mp(.125),un("Time skipped");break;case"drop":ee||kE();break;case"renderUp":case"renderDown":{let e=Math.max(3,Math.min(12,dn.radius+(t==="renderUp"?1:-1)));dn.setRadius(e),vp(),un("Render distance: "+e+" chunks");break}default:t&&t.startsWith("slot")&&Vo(Number(t.slice(4))-1)}});window.addEventListener("keyup",n=>{Dr.delete(n.code),Ur()});window.addEventListener("blur",()=>{Dr.clear(),Ur(),xn={left:!1,right:!1}});function kE(){let n=me.slots[Re];n&&(gu({id:n.id,n:1,d:n.d}),--n.n<=0&&(me.slots[Re]=null),hn())}window.addEventListener("wheel",n=>{!Ue||on||Vo(Re+(n.deltaY>0?1:-1))},{passive:!0});window.addEventListener("mousemove",n=>{if(!Ue||on)return;let t=Tf*Je.get("sensitivity"),e=Math.abs(n.movementX)>500?0:n.movementX,i=Math.abs(n.movementY)>500?0:n.movementY;Iy(-e*t,-i*t*(Je.get("invertY")?-1:1))});window.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("mousedown",n=>{if(!on&&(Ly(),!!Ue&&(n.button===0&&(xn.left=!0),n.button===2&&(xn.right=!0,es=!0,Ar=0),n.button===1))){n.preventDefault();let t=_p();if(!t)return;let e=uf(t.id);if(ee)Oh.includes(e)&&(wu[Re]=e,Vo(Re));else{let i=me.slots.slice(0,9).findIndex(s=>s&&s.id===e);i>=0&&Vo(i)}}});window.addEventListener("mouseup",n=>{on||(n.button===0&&(xn.left=!1,bl()),n.button===2&&(xn.right=!1,es=!1))});var zE=Vt("overlay"),Wo=Vt("game");function jo(){if(ss)return;if(on){!Ve&&!fn&&!er&&Rn(!0);return}let n=()=>Wo.requestPointerLock?.();if(!Je.get("rawInput"))return n();try{let t=Wo.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(n)}catch{n()}}var xp=0,Py=0,_l=0;function Ly(){if(ss||on||!Ue||er||fn||document.pointerLockElement===Wo)return;let n=performance.now();n-_l<500||(_l=n,jo())}Wo.style.cursor="none";function Rn(n){Ue=n,n||(Dr.clear(),nr.reset(),Ur(),xn={left:!1,right:!1},bl()),zE.classList.toggle("hidden",n||!!Ve||fn)}document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===Wo){Ve&&gp(),Rn(!0);return}if(Ve){Rn(!1);return}performance.now()<xp||(Py=performance.now(),Rn(!1),Vt("play").textContent="Resume",Qo())});function Ny(){Ue||fn||Ve||er||nr.editing||(te.start(),Rn(!0),ss||(xp=performance.now()+700,jo(),_l=performance.now()))}Vt("play").addEventListener("click",()=>{te.start(),on&&BE(),ss?Rn(!0):jo()});var Kf=!1;async function Dy(){if(!Kf){Kf=!0,Vt("quitbtn").disabled=!0,Vt("quitbtn").textContent="Saving...",document.exitPointerLock?.();try{qy(),await Promise.race([Qo(),new Promise(n=>setTimeout(n,8e3))])}catch(n){console.error("Save & Quit: could not save before leaving",n)}Mp=!0,location.href="?title"}}Vt("quitbtn").addEventListener("click",Dy);function Uy(){te.setMusic(!te.musicOn),Vt("musicbtn").textContent="Music: "+(te.musicOn?"On":"Off"),un("Music "+(te.musicOn?"on":"off"))}Vt("musicbtn").addEventListener("click",Uy);function Oy(n){ee=n,n||(ct.flying=!1),Vt("modebtn").textContent="Mode: "+(n?"Creative":"Survival"),Yf=-1,vl=-1,yl=-1,wl(),Jo(),hn(),Qo()}Vt("modebtn").addEventListener("click",()=>Oy(!ee));Vt("modebtn").textContent="Mode: "+(ee?"Creative":"Survival");Vt("optionsbtn").addEventListener("click",()=>{er=!0,Dr.clear(),Ur(),Su.open()});function HE(){let n=e=>ul(Je.key(e)),t=[[[n("forward"),n("left"),n("back"),n("right")].join(" "),"Move","Mouse","Look"],[n("jump"),"Jump / swim (double-tap to fly in creative)",n("sprint"),"Sprint (not when very hungry)"],[n("crouch"),"Crouch: slower, and you cannot walk off edges","",""],["Left click","Hold to break","Right click","Place / use / till / plant / eat"],[`${n("slot1")}\u2013${n("slot9")} / Wheel`,"Select slot",n("drop"),"Drop one item"],[n("inventory"),"Inventory & crafting",n("music"),"Toggle music"],[n("skipTime"),"Skip time of day",`${n("renderDown")} ${n("renderUp")}`,"Render distance"],[n("fly"),"Fly (creative only)",n("debug"),"Debug info"],[n("offhand"),"Place the torch held in your shield slot",n("map"),"Full-screen map (or tap the minimap)"]];Vt("controls").replaceChildren(...t.map(e=>{let i=document.createElement("tr");for(let s of e){let r=document.createElement("td");r.textContent=s,i.appendChild(r)}return i}))}function Fy(){te.setVolumes(Je.get("musicVolume"),Je.get("sfxVolume")),bE();let n=on?document.body:Vt("hud-right");Vt("goals").parentNode!==n&&n.appendChild(Vt("goals")),nr.setLayout(Je.get("touchLayout"));let t=on;on=fy(),on!==t&&(document.body.classList.toggle("touch",on),nr.setEnabled(on),xn={left:!1,right:!1},on&&document.exitPointerLock?.()),Vt("tagline").textContent=on?"Game paused":"Game paused \u2014 press Esc to resume",HE()}Je.onChange(Fy);Fy();var ey=-1;function VE(){let n=me.armor;if(n===ey)return;ey=n;let t=Vt("armorbar");t.hidden=n<=0,t.replaceChildren(...Array.from({length:10},(e,i)=>{let s=n-i*2;return Dg(s>=2?2:s>=1?1:0)}))}var By=()=>!ee&&Cf(Cn),yp=()=>ee||ox(Cn),vl=-1;function wl(){let n=Vt("hunger");n.style.display=ee?"none":"flex",Vt("satbar").style.display=ee?"none":"block",Vt("satbar").firstElementChild.style.width=Math.min(100,Nr/vu.maxSaturation*100)+"%";let t=Math.ceil(Cn);t!==vl&&(vl=t,n.replaceChildren(...Array.from({length:10},(e,i)=>{let s=t-i*2;return Ng(s>=2?2:s>=1?1:0)})),n.classList.toggle("starving",By()))}wl();Jo();var Ml=new G;function _p(){return He.getWorldDirection(Ml),yf(kt,ct.eye,Ml,cn.player.reach)}var pl=new Jh,_u=null,Jf=null,Gf=0,Ar=0,es=!1,ii=0;function bl(){_u=null,Jf=null,pl.reset(),ml.visible=!1}function bs(n,t){let e=[];for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){let r=kt.getChunk((n>>4)+s,(t>>4)+i);r&&r.dirty&&e.push(r)}return e}var Xo=[];function ky(n){let t=new Set,e=[];for(let[i,,s]of n)for(let r of bs(i,s))t.has(r)||(t.add(r),e.push(r));dn.remeshNow(e)}function zy(n,t,e){let i=Bx(kt,n,t,e);if(!i)return;let s=zx(n,e,ct.pos.x,ct.pos.z);kx(kt,i),ky([...i.logs,...i.leaves]);let r=new Ze;r.position.set(n+.5,t+.5,e+.5);for(let a of[i.logs,i.leaves])for(let[l,c,h,d]of a){let u=new we(Fo(d),mi.solid);u.position.set(l-n,c-t,h-e),r.add(u)}Te.add(r);let o=i.logs.reduce((a,l)=>Math.max(a,l[1]-t),1);Xo.push({group:r,tree:i,bx:n,by:t,bz:e,dir:s,axis:new G(s.dz,0,-s.dx),t:0,T:.9+.08*o}),te.block(Pr(i.logs[0]?.[3]),"break")}function Hy(n){Te.remove(n.group),Xo.splice(Xo.indexOf(n),1);let{dx:t,dz:e}=n.dir;if(cn.treeFall.mode==="land"){let{placed:r,lost:o}=Gx(kt,n.tree,n.bx,n.by,n.bz,t,e);if(ky(r.map(a=>[a.x,a.y,a.z])),!ee)for(let a of o)for(let l of Ro(a.id,!0))qn.spawn(l.id,l.n,a.x+.5,a.y+.5,a.z+.5);te.block(Pr(n.tree.logs[0]?.[3]),"place");return}let i=Wx(kt,n.tree,n.bx,n.by,n.bz,t,e),s=0;for(let r of i){if(!ee)for(let o of eg(r.id))qn.spawn(o.id,o.n,r.x+.5,r.y+.4,r.z+.5,{delay:.5,vx:(Math.random()-.5)*2.5+t*1.2,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*2.5+e*1.2});(ds[r.id]||s++%3===0)&&Lr(r.x,r.y,r.z,r.id)}te.block(Pr(n.tree.logs[0]?.[3]),"break"),te.block(Pr(n.tree.logs[0]?.[3]),"place"),n.tree.leaves.length&&te.block(Pr(n.tree.leaves[0][3]),"break")}function GE(n){for(let t of[...Xo]){t.t+=n;let e=Math.min(1,t.t/t.T);t.group.quaternion.setFromAxisAngle(t.axis,Math.PI/2*Math.pow(e,2.2)),e>=1&&Hy(t)}}var ny=!1;function WE(n){let t=Wh(n.id,Ir()),e=!!Kt[n.id];kt.setBlock(n.x,n.y,n.z,ft.AIR),Lr(n.x,n.y,n.z,n.id),te.block(Be[n.id].sound,"break"),ii=1;let i=kt.getBlock(n.x,n.y+1,n.z);if(!e&&Kt[i]&&(kt.setBlock(n.x,n.y+1,n.z,ft.AIR),Lr(n.x,n.y+1,n.z,i),!ee))for(let o of Ro(i,!0))qn.spawn(o.id,o.n,n.x+.5,n.y+1.4,n.z+.5);let s=Xs.get(n.id);if(s){let o=s.top?n.y-1:n.y+1;kt.getBlock(n.x,o,n.z)===s.partner&&(kt.setBlock(n.x,o,n.z,ft.AIR),Lr(n.x,o,n.z,n.id))}if(ol[So.get(n.id)]?.furnace)for(let o of Yo.remove(n.x,n.y,n.z))qn.spawn(o.id,o.n,n.x+.5,n.y+.6,n.z+.5,{d:o.d});if(dn.remeshNow(bs(n.x,n.z)),ds[n.id]&&zy(n.x,n.y,n.z),ee)return;for(let o of Ro(n.id,t.canHarvest))qn.spawn(o.id,o.n,n.x+.5,n.y+.5,n.z+.5);if(e)return;Cn=Math.max(0,Cn-vu.miningCost);let r=me.slots[Re];if(r&&ti(r.id)){let o=En(r.id);me.damage(Re,j0(n.id,r.id))&&(un(`Your ${o} broke!`),te.toolBreak()),hn()}}var Sl=(n,t,e)=>kt.canPlace(n,t,e);function XE(n){let t=!!Kt[n.id],e=t?n.x:n.x+n.nx,i=t?n.y:n.y+n.ny,s=t?n.z:n.z+n.nz;if(!Sl(e,i,s))return;let r=kt.getBlock(e,i,s);if(r!==ft.AIR&&!ae[r]&&!Kt[r])return;let o=Zo(Re);if(!o||!Zs(o.id)||Kt[o.id]||ct.intersectsBlock(e,i,s))return;let a=Gs.has(o.id)?Gs.get(o.id)[Vy()]:o.id;kt.setBlock(e,i,s,a),dn.remeshNow(bs(e,s)),te.block(Be[o.id].sound,"place"),ii=1,ee||(--o.n<=0&&(me.slots[Re]=null),hn())}function Vy(){let n=-Math.sin(ct.yaw),t=-Math.cos(ct.yaw);return Math.abs(t)>=Math.abs(n)?t<0?0:2:n>0?1:3}function qE(n){let t=!!Kt[n.id],e=t?n.x:n.x+n.nx,i=t?n.y:n.y+n.ny,s=t?n.z:n.z+n.nz;if(!Sl(e,i,s)||!Sl(e,i+1,s))return;let r=c=>{let h=kt.getBlock(e,c,s);return h===ft.AIR||!!Kt[h]};if(!r(i)||!r(i+1)||!We[kt.getBlock(e,i-1,s)]||ct.intersectsBlock(e,i,s)||ct.intersectsBlock(e,i+1,s))return;let o=Vy(),[a,l]=tl[o%2===0?"x":"z"];if(kt.setBlock(e,i,s,a),kt.setBlock(e,i+1,s,l),dn.remeshNow(bs(e,s)),te.block("wood","place"),ii=1,!ee){let c=me.slots[Re];c&&--c.n<=0&&(me.slots[Re]=null),hn()}}function $E(n){let t=Xs.get(n.id);if(!t)return;let e=t.top?n.y-1:n.y+1,i=kt.getBlock(n.x,e,n.z)===t.partner;!t.open&&(ct.intersectsBlock(n.x,n.y,n.z)||i&&ct.intersectsBlock(n.x,e,n.z))||(kt.setBlock(n.x,n.y,n.z,t.toggled),i&&kt.setBlock(n.x,e,n.z,Xs.get(t.partner).toggled),dn.remeshNow(bs(n.x,n.z)),te.block("wood",t.open?"break":"place"),ii=1)}function Gy(n,t,e=!1){let i=!!Kt[n.id],s=i||n.ny===1?"up":n.nx===1?"east":n.nx===-1?"west":n.nz===1?"south":n.nz===-1?"north":null,r=s&&t[s];if(!r)return;let o=i?n.x:n.x+n.nx,a=i?n.y:n.y+n.ny,l=i?n.z:n.z+n.nz;if(!Sl(o,a,l))return;let c=kt.getBlock(o,a,l);if(!(c!==ft.AIR&&!ae[c]&&!Kt[c])&&We[kt.getBlock(o+Ti[r*3],a+Ti[r*3+1],l+Ti[r*3+2])]&&(kt.setBlock(o,a,l,r),dn.remeshNow(bs(o,l)),te.block(Be[r].sound,"place"),ii=1,!ee)){if(e){let h=me.equipment.shield;h&&--h.n<=0&&(me.equipment.shield=null),Ms.refreshInventory()}else{let h=me.slots[Re];h&&--h.n<=0&&(me.slots[Re]=null)}hn()}}var Wf=0;function YE(n){if(Wf-=n,Wf>0)return;Wf=.1;let t=fn||Ve==="palette"?0:Math.max(hf(Ir()),hf(me.equipment.shield?.id??0)),e=ct.eye;kt.lighting.setCarried(Math.floor(e.x),Math.floor(e.y),Math.floor(e.z),t)}function ZE(){let n=me.equipment.shield;if(!n||!Ri(n.id)||!sl(n.id))return;let t=_p();t&&Gy(t,sl(n.id),!0)}function KE(){let n=me.slots[Re];if(ee||!n||!ti(n.id))return;let t=En(n.id);me.damage(Re)&&(un(`Your ${t} broke!`),te.toolBreak()),hn()}function Wy(n){if(!n)return null;let t=n.x,e=n.z,i=Kt[n.id]?n.y-1:n.y,s=kt.getBlock(t,i,e);if(!Uh[s])return null;let r=kt.getBlock(t,i+1,e);return r!==ft.AIR&&!Kt[r]?null:{x:t,y:i,z:e,wet:kt.nearWater(t,i,e)}}function JE(n,t){let e=Wy(n);if(!e)return;Kt[kt.getBlock(e.x,e.y+1,e.z)]&&kt.setBlock(e.x,e.y+1,e.z,ft.AIR);let i=kt.getBlock(e.x,e.y,e.z),s=Uh[i];kt.setBlock(e.x,e.y,e.z,s);let r=e.wet?Qa.get(s)?.wet:0;r?kt.setBlock(e.x,e.y,e.z,r):t&&un(`Dry soil: crops only grow with water within ${cn.tilling.radius} blocks, and bare dry soil turns back into dirt`),dn.remeshNow(bs(e.x,e.z)),Lr(e.x,e.y,e.z,i),te.block(Pr(i),"place"),ii=1,KE(),e.wet&&(zn.flags.add("tilled"),ns())}function jE(n,t){if(!(!t.on.includes(n.id)||n.ny!==1)&&Sl(n.x,n.y+1,n.z)&&kt.getBlock(n.x,n.y+1,n.z)===ft.AIR){if(kt.setBlock(n.x,n.y+1,n.z,t.block),dn.remeshNow(bs(n.x,n.z)),te.block(Pr(t.block),"place"),ii=1,!ee){let e=me.slots[Re];e&&--e.n<=0&&(me.slots[Re]=null),hn()}zn.flags.add("planted"),ns()}}function QE(n,t){let e=Ir(),i=Y0(e),s=t&&So.has(t.id)&&es;if(!xn.right||!i||ee||s){fi=0,Vt("eatbar").hidden=!0;return}if(Cn>=mu){es&&(un("You're not hungry"),es=!1),fi=0,Vt("eatbar").hidden=!0;return}let r=Math.floor(fi/.3);if(fi+=n,Math.floor(fi/.3)>r&&(te.eat(),PE(e)),Vt("eatbar").hidden=!1,Vt("eatbar").firstElementChild.style.width=Math.min(100,fi/cn.eating.seconds*100)+"%",fi>=cn.eating.seconds){fi=0;let o=me.slots[Re];o&&--o.n<=0&&(me.slots[Re]=null);let a={food:Cn,saturation:Nr};hx(a,i,Z0(e)),{food:Cn,saturation:Nr}=a,zn.flags.add("ate"),un(`Yum! +${i/2} hunger`),hn(),ns()}}function tT(n){return me.add(n.id,n.n,n.d),zn.collected.add(n.id),te.pickup(),hn(),ns(),!0}function eT(n){let t=_p();if(t){js.visible=!0;let s=Kt[t.id]?Ws[t.id]:1,r=Kt[t.id]?vo[t.id]*2:1;js.scale.set(r,s,r);let o=Kt[t.id]===3&&(Yi[t.id*2]||Yi[t.id*2+1]);js.position.set(t.x+.5-(o?Yi[t.id*2]*.25:0),t.y+s/2+(o?.2:0),t.z+.5-(o?Yi[t.id*2+1]*.25:0))}else js.visible=!1;let i=ti(Ir())?.type==="hoe"?Wy(t):null;if(js.material.color.setHex(i?i.wet?3407701:16751150:0),Ar-=n,ii=Math.max(0,ii-n*4.5),xn.left&&t&&t.y>0){let s=t.x+","+t.y+","+t.z;if(s!==Jf){Jf=s;let o=Be[t.id];!ee&&!Wh(t.id,Ir()).canHarvest?un(`You need a ${ng(o.need)} ${o.tool} (or better) to harvest this`):!ee&&!ny&&o.tool==="shovel"&&ti(Ir())?.type!=="shovel"&&(ny=!0,un("Tip: a shovel digs dirt, grass and sand much faster (craft one at a table)"))}_u=t;let r=ee?.25:Wh(t.id,Ir()).time;Gf-=n,Gf<=0&&(Gf=.24,te.block(Be[t.id].sound,"tick"),ii=Math.max(ii,.8)),pl.tick(n,s,r)?(WE(t),bl()):pl.progress>0&&(ml.visible=!0,ml.position.copy(js.position),op.offset.x=pl.stage/10)}else pl.idle(n),_u&&bl();if(xn.right&&es&&Ar<=0&&!fi){let s=ct.eye,r=fp.pick(s,Ml,4.5);r&&r.dist<(t?Math.hypot(t.x+.5-s.x,t.y+.5-s.y,t.z+.5-s.z)-.6:1/0)&&(nT(r.villager),xn.right=!1,es=!1,Ar=.6)}if(QE(n,t),xn.right&&t&&Ar<=0&&!fi){Ar=.22;let s=es;es=!1;let r=Zo(Re),o=r&&ti(r.id);s&&So.has(t.id)?(xn.right=!1,Go("inv",So.get(t.id),t)):s&&Xs.has(t.id)?(xn.right=!1,$E(t)):r&&Q0(r.id)?qE(t):o?.type==="hoe"?JE(t,s):r&&of(r.id)?jE(t,of(r.id)):r&&sl(r.id)?Gy(t,sl(r.id)):XE(t)}}function nT(n){n.target=null,n.timer=4,un(`${n.name} the ${n.job}: \u201C${n.speak(If(Pi)==="Night")}\u201D`,4500),te.villager(),ii=1,zn.flags.add("talked"),ns()}var iy=null,sy=0;function iT(n){if(n-sy<700)return;sy=n;let t=To(kt,ct.pos.x,ct.pos.z,ct.pos.x,ct.pos.z,3)[0],e=t?t.key:null;e!==iy&&(iy=e,t&&(un(`Welcome to ${t.name}`,3e3),zn.flags.add("village"),ns()))}var ry=0;function sT(n){n-ry<250||(ry=n,Vt("mm-real").textContent=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}),Vt("mm-game").textContent=px(Pi),Vt("mm-part").textContent=`${If(Pi)} \xB7 Day ${xl+1}`,Vt("mm-x").textContent=Math.floor(ct.pos.x),Vt("mm-y").textContent=Math.floor(ct.pos.y),Vt("mm-z").textContent=Math.floor(ct.pos.z))}var Xf=new Map,rT=n=>(Xf.has(n)||Xf.set(n,(Kt[n]?Og(is,n):br(is,uf(n),44)).toDataURL()),Xf.get(n)),oy=new G,du=null;function oT(){let n=Vt("lookat");if(!Ue||Ve||fn){n.hidden=!0,du=null;return}He.getWorldDirection(oy);let t=yf(kt,ct.eye,oy,cn.player.lookAtReach);if(!t){n.hidden=!0,du=null;return}if(t.id!==du){du=t.id;let e=df[t.id];Vt("lookat-icon").src=rT(t.id),Vt("lookat-name").textContent=e?e.label:Be[t.id].name;let i=Vt("lookat-sub"),s=Vt("lookat-pips");if(i.classList.remove("ready"),s.replaceChildren(),s.classList.remove("ripe"),e){for(let r=1;r<=3;r++){let o=document.createElement("i");r<=e.stage&&(o.className="on"),s.appendChild(o)}s.classList.toggle("ripe",!!e.ripe),e.crop?i.textContent=e.ripe?`${e.name} \u2014 ready to harvest!`:`${e.name} (stage ${e.stage}/3) \u2014 not ready yet`:i.textContent=`${e.name} (stage ${e.stage}/3)${e.ripe?" \u2014 fully grown":" \u2014 still growing"}`,i.classList.toggle("ready",!!e.ripe)}else{let r=Be[t.id];i.textContent=r.tool?`Best tool: ${r.tool[0].toUpperCase()}${r.tool.slice(1)}`:""}}n.hidden=!1}function vp(){let n=dn.radius*16-4;Te.fog.near=n*.55,Te.fog.far=n}vp();var aT=new Wt(13212276),lT=new Wt(1,1,1),ay=!1,qf=1,ly=0;function cT(){let n=Math.min(.25,Math.max(0,ts-ly));ly=ts;let t=kt.lighting.levelAt(Math.floor(He.position.x),Math.floor(He.position.y),Math.floor(He.position.z));return qf+=(U0(t)-qf)*Math.min(1,n*4),qf}function hT(){let n=$o.update(Pi,He.position,ts),t=cT();bu.value.copy(n.tint),mi.sprite.color.copy(n.tint);let e=by.copy(n.tint).lerp(lT,.35).multiplyScalar(.25+.75*t);vy.color.copy(e),ip.color.copy(e),sp.color.copy(aT).multiply(e),Ii.material.color.copy(n.tint),Te.background=Te.background||new Wt,Te.background.copy(n.sky).multiplyScalar(t),Te.fog.color.copy(Te.background);let i=ct.headInWater;i!==ay&&(ay=i,Vt("underwater").style.opacity=i?"1":"0"),i?(Te.fog.color.setRGB(.1*n.tint.r*t,.25*n.tint.g*t,.6*n.tint.b*t),Te.background.copy(Te.fog.color),Te.fog.near=1,Te.fog.far=22):vp()}var Mp=!1;function Xy(){return JSON.stringify({seed:up,terrain:kt.terrain,edits:kt.serializeEdits(),legacyCaves:kt.serializeLegacy(),player:fn?{x:tr.x,y:tr.y,z:tr.z,yaw:0,pitch:0,flying:!1}:{x:ct.pos.x,y:ct.pos.y,z:ct.pos.z,yaw:ct.yaw,pitch:ct.pitch,flying:ct.flying},mode:ee?"creative":"survival",inventory:me.serialize(),equipment:me.serializeEquipment(),creativeHotbar:wu,food:Cn,saturation:Nr,health:fn?gl:pi,spawnPoint:tr,day:xl,drops:qn.serialize(),furnaces:Yo.serialize(),progress:{collected:[...zn.collected],crafted:[...zn.crafted],flags:[...zn.flags]},slot:Re,time:Pi,radius:dn.radius})}function Qo(){if(Mp)return Promise.resolve();let n=Promise.resolve(lp.save(hp,Xy())).catch(()=>{});return kt.editsDirty=!1,n}function qy(){for(let n of[...Xo])Hy(n);Ey.flush()}setInterval(()=>{Ue&&Qo()},1e4);function bp(){Mp||Kf||(qy(),lp.saveOnExit(hp,Xy()))}window.addEventListener("beforeunload",bp);window.addEventListener("pagehide",bp);document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&bp()});var cy=performance.now(),hy=60,fu=0,$f=0,pu=75,Cr=0,zo=0,uy=0,dy=0,ji=0;function $y(n){requestAnimationFrame($y);let t=Math.max(0,Math.min(.1,(n-cy)/1e3));if(cy=n,ts+=t,fu+=t,$f++,fu>.5&&(hy=Math.round($f/fu),fu=0,$f=0),nr.sync({show:Ue&&!Ve&&!fn&&!er,screen:Ve,creative:ee,flying:ct.flying}),Ue&&(ct.speedMul=By()?vu.starvingSpeed:1,Xn.sprint=Zf&&yp(),ct.update(t,Xn),eT(t),mp(t/cn.time.dayLengthSeconds),!ee)){let a=Math.hypot(ct.vel.x,ct.vel.z)>1,l={food:Cn,saturation:Nr,health:pi,regenTimer:uy,starveTimer:dy},c=ux(l,t,{moving:a,sprinting:Xn.sprint&&a,mining:xn.left&&!!_u,maxHealth:gl});({food:Cn,saturation:Nr,health:pi,regenTimer:uy,starveTimer:dy}=l),c.healed&&Jo(),c.starved&&pp(c.starved,"You starved to death"),wl()}np.value=ts%1e3,wy.update(t),Ey.update(t),Ty.update(),(Ue||Ve)&&Yo.update(t),Ms.tickFurnace();for(let[a,l]of Ho)l.position.y=a.y+.5;GE(t),zo+=t,zo>=1&&(Af(kt,Math.floor(ct.pos.x/16),Math.floor(ct.pos.z/16),cn.plants.growthChunkRadius,zo*Hf),nx(kt,Math.floor(ct.pos.x/16),Math.floor(ct.pos.z/16),cn.spread.chunkRadius,zo*Hf),ix(kt,Math.floor(ct.pos.x/16),Math.floor(ct.pos.z/16),cn.plants.growthChunkRadius,zo*Hf),zo=0),qn.update(t,ct.pos,a=>!ee&&!fn&&me.canFit(a.id,a.n),tT),YE(t),yy(ts)&&(Rr.needsUpdate=!0),My();let e=ct.eye;Tr.v+=(-140*Tr.y-15*Tr.v)*t,Tr.y+=Tr.v*t,He.position.set(e.x,e.y+Tr.y,e.z),He.rotation.set(ct.pitch,ct.yaw,0);let i=Math.hypot(ct.vel.x,ct.vel.z);Cr+=i*t*(ct.onGround?1.9:.4);let s=Je.get("fov")+(Xn.sprint&&i>5?8:0)+(ct.flying&&i>12?8:0);pu+=(s-pu)*Math.min(1,8*t),Math.abs(He.fov-pu)>.01&&(He.fov=pu,He.updateProjectionMatrix());let r=Math.sin(ii*Math.PI);ji+=((fi>0?1:0)-ji)*Math.min(1,10*t);let o=Math.sin(ts*26)*.015*ji;if(en.pivot?(kf.setFromEuler($x.set(-r*.62,r*.12,0)),ze.position.set(en.pos[0]+Math.sin(Cr)*.01,en.pos[1]+Math.abs(Math.cos(Cr))*.012,en.pos[2]).sub(Yx.fromArray(en.pivot)).applyQuaternion(kf).add(Yx),ze.position.x-=r*.1,ze.position.y+=r*.1,ze.position.z-=r*.16,ze.quaternion.setFromEuler($x.set(en.rot[0],en.rot[1],en.rot[2])),en.flip&&ze.quaternion.multiply(AE),ze.quaternion.premultiply(kf)):(ze.position.set(en.pos[0]+Math.sin(Cr)*.01-r*.1-ji*.22,en.pos[1]+Math.abs(Math.cos(Cr))*.012-r*.14+ji*.3+o,en.pos[2]-r*.08+ji*.2),ze.rotation.set(en.rot[0]-r*.9+ji*.5,en.rot[1]+r*.25,en.rot[2])),CE(),ze.scale.setScalar(en.scale*(1-.35*ji*Math.min(1,fi/cn.eating.seconds))),ji>.05&&!en.pivot&&(ze.rotation.z+=Math.sin(ts*26)*.07*ji),dn.update(ct.pos.x,ct.pos.z,Ue?5:10),oT(),VE(),DE.draw(ct.pos.x,ct.pos.z,ct.yaw,n),sT(n),LE(t),hT(),fp.update(Ue||Ve?t:0,{x:ct.pos.x,z:ct.pos.z},bu.value,n),iT(n),qo.render(Te,He),!Vt("debug").hidden){let a=dn.collectStats();Vt("debug").textContent=`VoxelCraft  ${hy} fps  [${ee?"creative":"survival"}]
XYZ  ${ct.pos.x.toFixed(2)} / ${ct.pos.y.toFixed(2)} / ${ct.pos.z.toFixed(2)}
Chunk ${Math.floor(ct.pos.x/16)}, ${Math.floor(ct.pos.z/16)}   seed ${up}
Chunks ${a.chunks} (meshed ${a.meshed})  quads ${a.quads}  drops ${qn.items.length}
Time ${((Pi*24+6)%24).toFixed(1)}h  ${ct.flying?"FLYING":ct.onGround?"ground":ct.inWater?"swimming":"air"}`}}requestAnimationFrame($y);window.__vc={world:kt,player:ct,audio:te,inventory:me,drops:qn,ui:Ms,progress:zn,chunkRenderer:dn,camera:He,scene:Te,setPlaying:Rn,selectSlot:Vo,setMode:Oy,get elapsed(){return ts},POSES:vs,held:ze,furnaces:Yo,attachSim:Ty,worldId:hp,quitToTitle:Dy,resumeGame:Ny,openScreen:Go,closeScreen:Eu,tossStack:gu,settings:Je,options:Su,growPlants:Af,get food(){return Cn},set food(n){Cn=n,vl=-1,wl()},get creative(){return ee},REG:It,villagers:fp,waterSim:wy,damage:pp,respawn:Ry,advanceTime:mp,fallingTrees:Xo,startTreeFall:zy,sky:$o,get health(){return pi},set health(n){pi=n,yl=-1,Jo()},get dead(){return fn},get playing(){return Ue},get screen(){return Ve},get dayTime(){return Pi},set dayTime(n){Pi=n},toggleDebug:()=>Vt("debug").hidden=!Vt("debug").hidden};cp.done();ss?Rn(!0):(te.start(),Rn(!0),jo(),_l=performance.now());
