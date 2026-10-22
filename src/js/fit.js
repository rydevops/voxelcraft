// Makes the game's windows fit small screens. The menus, inventory and options are laid out for a desktop; on a phone each
// one is shrunk (never enlarged) so that all of it is visible at once. The HUD (hotbar, hearts, minimap...) shrinks with the
// CSS variable --hud. Everything is re-measured whenever a window opens, changes size, or the screen turns.

// the windows that get shrunk (see the matching `transform: scale(var(--fit))` rules in style.css)
const FITTED = ['.inv-panel', '.pal-panel', '.opt-panel', '.world-panel', '#menu', '#title-menu', '#death-box'];
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

// `getSize` returns the current HUD size setting; the returned function re-measures everything (call it when that changes)
export function installFit(getSize = () => 1) {
  const els = [];
  const fit = (el) => {
    const w = el.offsetWidth, h = el.offsetHeight; // layout size: not affected by the transform we apply
    el.style.setProperty('--fit', String(fitScale(w, h, window.innerWidth, window.innerHeight)));
  };
  const all = () => {
    document.documentElement.style.setProperty('--hud', hudScaleFor(window.innerWidth, window.innerHeight, getSize()).toFixed(3));
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
