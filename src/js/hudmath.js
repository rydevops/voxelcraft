// The numbers behind the HUD panels (no DOM, so it can be tested in Node): which parts of the HUD there are, which are shown, and
// where the player has put the panels.

// What the player can show or hide with the gear: `key` is what is saved, `panel` which panel it belongs to
export const HUD_ITEMS = [
  { key: 'minimap', label: 'Minimap', panel: 'minimap' },
  { key: 'realTime', label: 'Real-world time', panel: 'info' },
  { key: 'gameTime', label: 'Game time', panel: 'info' },
  { key: 'dayPart', label: 'Time of day and day number', panel: 'info' },
  { key: 'coords', label: 'Coordinates', panel: 'info' },
  { key: 'goals', label: 'Goals', panel: 'goals' },
];
export const HUD_PANELS = ['minimap', 'info', 'goals']; // the three things that can be moved (and, but the minimap, folded away)

// Everything is shown unless it was switched off: a saved choice only ever lists what was changed
export const hudShown = (show, key) => !(show && show[key] === false);

// Whatever came out of storage -> only known keys with real booleans
export function cleanHudShow(raw) {
  const out = {};
  if (raw && typeof raw === 'object') for (const { key } of HUD_ITEMS) if (typeof raw[key] === 'boolean') out[key] = raw[key];
  return out;
}
export function cleanCollapsed(raw) {
  const out = {};
  if (raw && typeof raw === 'object') for (const k of ['info', 'goals']) if (typeof raw[k] === 'boolean') out[k] = raw[k];
  return out;
}

// Where the panels were put: name -> { x, y } (centre, as fractions of the screen). Unknown names and junk numbers are dropped.
export function cleanHudLayout(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const name of HUD_PANELS) {
    const p = raw[name];
    if (p && Number.isFinite(p.x) && Number.isFinite(p.y)) out[name] = { x: Math.min(1, Math.max(0, p.x)), y: Math.min(1, Math.max(0, p.y)) };
  }
  return out;
}

// Is any part of this panel switched on? (the info panel always keeps its gear, so it is never really empty)
export const panelHasContent = (show, panel) => HUD_ITEMS.some((it) => it.panel === panel && hudShown(show, it.key));
