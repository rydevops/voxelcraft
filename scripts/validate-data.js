// `npm run validate`: check the content files in src/data/ (blocks, items, loot, recipes, ...) for mistakes.
import { loadData, buildRegistry, DataError } from '../src/js/registry.js';
import { paintTile, paintSprite } from '../src/js/tilegen.js';

try {
  const data = await loadData();
  const reg = buildRegistry(data);
  // also make sure every texture can actually be painted
  reg.tileNames.forEach((name, i) => paintTile(name, i, reg.tiles, {}));
  for (const it of reg.items) paintSprite(it.key, it, reg.textures, {});
  console.log('Content OK:');
  console.log(`  ${reg.blocks.length} blocks, ${reg.items.length} items, ${reg.tileNames.length} textures,`);
  console.log(`  ${Object.keys(reg.loot).length} loot tables, ${reg.recipes.length} recipes, ${reg.goals.length} goals, ${Object.keys(reg.sounds.materials).length} sound materials`);
} catch (e) {
  console.error(e instanceof DataError ? e.message : e);
  process.exit(1);
}
