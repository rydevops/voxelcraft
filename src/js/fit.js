// Makes the game's windows fit small screens. The menus, inventory and options are laid out for a desktop; on a phone each
// one is shrunk (never enlarged) so that all of it is visible at once. The HUD (hotbar, hearts, minimap...) shrinks with the
// CSS variable --hud (the hotbar has its own, --hotbar, and the touch buttons --btn). Everything is re-measured whenever a window opens, changes size, or the screen turns.

// the windows that get shrunk (see the matching `transform: scale(var(--fit))` rules in style.css)
const FITTED = ['.bk-wrap', '.talk-panel', '.hud-menu-panel', '.inv-panel', '.pal-panel', '.opt-panel', '.world-panel', '#menu', '#title-menu', '#death-box'];
const MARGIN = 12; // px kept free around a window

// 1 when it fits, smaller when it does not (never below a quarter)
export function fitScale(w, h, vw, vh, margin = MARGIN) {
  if (!(w > 0) || !(h > 0)) return 1;
  return Math.max(0.25, Math.min(1, (vw - margin * 2) / w, (vh - margin * 2) / h));
}

// the HUD scale: 1 on a desktop-sized window, down to 0.55 on a small phone
export function hudScale(vw, vh) {
  return Math.max(0.55, Math.min(1, vw / 900, vh / 560));
}

// The HUD scale with the player's "HUD size" setting applied (1 = as designed, up to 1.8 on any screen)
export const MAX_HUD = 1.8;
export const hudScaleFor = (vw, vh, size = 1) => Math.min(MAX_HUD, hudScale(vw, vh) * (Number.isFinite(size) && size > 0 ? size : 1));

// On a touch screen the hotbar (with the loot bag button beside it, 608 px at scale 1) must fit between the joystick on the left and the
// action buttons on the right, however large the HUD size is: its scale is the HUD scale, but no more than what fits
export const HOTBAR_WIDTH = 538; // the hotbar (534) and the gap before the loot bag button (4); the button itself adds 70 (see style.css)
// `size` is the player's "hotbar size" setting: it scales the result, so it can shrink the hotbar below what fits (or grow it back, to the fit)
export const MIN_HOTBAR = 0.25;
export function hotbarScaleFor(vw, vh, hud, touch = false, size = 1) {
  const k = Number.isFinite(size) && size > 0 ? size : 1;
  if (!touch) return Math.max(MIN_HOTBAR, hud * k);
  const vmin = Math.min(vw, vh);
  const stick = Math.min(176, Math.max(112, vmin * 0.31)), pad = vmin * 0.035;
  const room = vw - 2 * (stick + pad + 8);
  return Math.max(MIN_HOTBAR, Math.max(0.45, Math.min(hud, room / (HOTBAR_WIDTH + 70))) * Math.min(k, 1.5));
}

// the touch buttons' scale (--btn): the player's "touch button size" setting, kept within sane bounds
export const buttonScaleFor = (size = 1) => (Number.isFinite(size) && size > 0 ? Math.min(1.5, Math.max(0.4, size)) : 1);

// `getSize` returns the current HUD size setting; the returned function re-measures everything (call it when that changes)
export function installFit(getSize = () => 1, getHotbarSize = () => 1, getButtonSize = () => 1) {
  const els = [];
  const fit = (el) => {
    const w = el.offsetWidth, h = el.offsetHeight; // layout size: not affected by the transform we apply
    el.style.setProperty('--fit', String(fitScale(w, h, window.innerWidth, window.innerHeight)));
  };
  const all = () => {
    const hud = hudScaleFor(window.innerWidth, window.innerHeight, getSize());
    document.documentElement.style.setProperty('--hud', hud.toFixed(3));
    document.documentElement.style.setProperty('--hotbar', hotbarScaleFor(window.innerWidth, window.innerHeight, hud, document.body.classList.contains('touch'), getHotbarSize()).toFixed(3));
    document.documentElement.style.setProperty('--btn', buttonScaleFor(getButtonSize()).toFixed(3));
    for (const el of els) fit(el);
  };
  const ro = typeof ResizeObserver === 'function' ? new ResizeObserver((entries) => { for (const e of entries) fit(e.target); }) : null;
  for (const sel of FITTED) {
    for (const el of document.querySelectorAll(sel)) { els.push(el); ro?.observe(el); }
  }
  window.addEventListener('resize', all);
  window.addEventListener('orientationchange', all);
  all();
  return all;
}
