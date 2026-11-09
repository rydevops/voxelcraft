// The HUD panels' settings: what is shown, what is folded, where panels were put, and that junk from storage cannot break anything.
import assert from 'node:assert/strict';
import { HUD_ITEMS, HUD_PANELS, hudShown, cleanHudShow, cleanCollapsed, cleanHudLayout, panelHasContent } from '../src/js/hudmath.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

t('every part of the HUD can be switched off, each belongs to a panel, and everything is shown by default', () => {
  assert.deepEqual(HUD_ITEMS.map((i) => i.key), ['minimap', 'realTime', 'gameTime', 'dayPart', 'weather', 'coords']);
  for (const it of HUD_ITEMS) { assert.ok(it.label.length > 3 && HUD_PANELS.includes(it.panel)); assert.ok(hudShown({}, it.key) && hudShown(undefined, it.key)); }
  assert.deepEqual(HUD_PANELS, ['minimap', 'info'], 'the goals are in the quest book now, not a panel');
  assert.ok(!hudShown({ coords: false }, 'coords') && hudShown({ coords: false }, 'realTime'));
  assert.ok(panelHasContent({}, 'info') && !panelHasContent({ realTime: false, gameTime: false, dayPart: false, weather: false, coords: false }, 'info'));
});

t('saved choices are cleaned: unknown keys and non-booleans are dropped', () => {
  assert.deepEqual(cleanHudShow({ coords: false, minimap: true, bogus: false, goals: false, realTime: 0 }), { coords: false, minimap: true });
  for (const junk of [null, undefined, 5, 'x', []]) { assert.deepEqual(cleanHudShow(junk), {}); assert.deepEqual(cleanCollapsed(junk), {}); assert.deepEqual(cleanHudLayout(junk), {}); }
  assert.deepEqual(cleanCollapsed({ info: true, goals: false, minimap: true, x: true }), { info: true }, 'only the panel that folds (an old saved goals panel is ignored)');
});

t('panel positions stay on the screen and ignore junk', () => {
  const l = cleanHudLayout({ info: { x: 0.3, y: 0.4 }, goals: { x: 9, y: -3 }, minimap: { x: 'a', y: 0.5 }, nope: { x: 0.5, y: 0.5 }, extra: null });
  assert.deepEqual(l, { info: { x: 0.3, y: 0.4 } }, 'the old goals panel position is dropped');
  assert.deepEqual(cleanHudLayout({ minimap: { x: 9, y: -3 } }), { minimap: { x: 1, y: 0 } });
  assert.deepEqual(cleanHudLayout({ info: { x: NaN, y: 0.2 } }), {});
});

console.log(`hud: ${n} checks passed`);
