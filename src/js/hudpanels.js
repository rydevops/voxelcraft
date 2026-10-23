// The HUD panels at the top of the screen: the minimap and the clock-and-coordinates panel.
//  - click or tap the clock panel to fold it away (and again to open it): more of the world to see
//  - a window switches each part of the HUD on or off and moves the panels: the HUD key opens it on a computer, the gear on the clock panel on a touch screen
//  - moving: each panel can be dragged anywhere (the panels leave the column they normally stack in)
// Everything is saved with the settings (hudShow, hudCollapsed, hudLayout; see hudmath.js).
import { HUD_ITEMS, HUD_PANELS, hudShown, cleanHudShow, cleanCollapsed, cleanHudLayout } from './hudmath.js';
import { clampCenter } from './touchmath.js';
import { symbolURL } from './symbols.js';

const $ = (id) => document.getElementById(id);

// hooks.onClose() is called when the window (or the moving that follows it) is finished, so the game can carry on
export function createHudPanels(settings, hooks = {}) {
  const column = $('hud-right');
  const els = { minimap: $('minimap'), info: $('mm-info') };
  let editing = false, editBar = null, shield = null, editDone = null;

  // the gear's picture
  const gear = $('hud-gear');
  const gearImg = document.createElement('img');
  gearImg.src = symbolURL('gear'); gearImg.alt = '';
  gear.appendChild(gearImg);

  // ---- where a panel lives when it is not moved: the column at the top right ----
  function putHome(name) {
    const el = els[name];
    // back in the column, in its usual order: before the first panel that comes after it
    const after = HUD_PANELS.slice(HUD_PANELS.indexOf(name) + 1).map((n) => els[n]).find((e) => e.parentNode === column);
    if (el.parentNode !== column || (after && el.nextElementSibling !== after)) column.insertBefore(el, after ?? null);
  }

  // put a panel at a spot of the screen (centre as fractions) and keep all of it on screen
  function free(name, pos) {
    const el = els[name];
    if (el.parentNode !== document.body) document.body.appendChild(el);
    el.classList.add('hud-free');
    el.style.left = pos.x * 100 + '%';
    el.style.top = pos.y * 100 + '%';
    const r = el.getBoundingClientRect();
    if (r.width > 0) {
      const c = clampCenter(r.left + r.width / 2, r.top + r.height / 2, r.width, r.height, window.innerWidth, window.innerHeight, 2);
      el.style.left = c.x * 100 + '%';
      el.style.top = c.y * 100 + '%';
    }
  }
  function unfree(name) {
    const el = els[name];
    el.classList.remove('hud-free');
    el.style.left = el.style.top = '';
    putHome(name);
  }

  // Bring the screen in line with the settings: what is shown, what is folded, where things are
  function apply() {
    const show = cleanHudShow(settings.get('hudShow')), folded = cleanCollapsed(settings.get('hudCollapsed')), layout = cleanHudLayout(settings.get('hudLayout'));
    els.minimap.hidden = !hudShown(show, 'minimap');
    for (const row of els.info.querySelectorAll('[data-hud]')) row.hidden = !hudShown(show, row.dataset.hud);
    els.info.classList.toggle('collapsed', !!folded.info);
    if (editing) return; // (the panels are being dragged: leave them where the finger put them)
    for (const name of HUD_PANELS) layout[name] ? free(name, layout[name]) : unfree(name);
  }

  // ---- tap to fold / unfold ----
  function toggleFold(name) {
    if (editing) return;
    const cur = cleanCollapsed(settings.get('hudCollapsed'));
    settings.set('hudCollapsed', { ...cur, [name]: !cur[name] });
  }
  els.info.addEventListener('click', (e) => { if (!e.target.closest('#hud-gear')) toggleFold('info'); });

  // ---- the window: the HUD key (computer) or the gear (touch screen) opens it ----
  const menu = $('hud-menu'), list = $('hud-menu-list');
  function buildMenu() {
    list.replaceChildren();
    const show = cleanHudShow(settings.get('hudShow'));
    for (const it of HUD_ITEMS) {
      const row = document.createElement('label');
      row.className = 'opt-row toggle';
      const box = document.createElement('input');
      box.type = 'checkbox';
      box.checked = hudShown(show, it.key);
      box.addEventListener('change', () => settings.set('hudShow', { ...cleanHudShow(settings.get('hudShow')), [it.key]: box.checked }));
      const name = document.createElement('span');
      name.textContent = it.label;
      row.append(box, name);
      list.appendChild(row);
    }
  }
  const openMenu = () => { buildMenu(); menu.hidden = false; };
  const closeMenu = (notify = true) => { const was = !menu.hidden; menu.hidden = true; if (notify && was) hooks.onClose?.(); };
  gear.addEventListener('click', (e) => { e.stopPropagation(); if (!editing) openMenu(); });
  $('hud-close').addEventListener('click', () => closeMenu());
  menu.addEventListener('click', (e) => { if (e.target === menu) closeMenu(); });
  $('hud-reset').addEventListener('click', () => {
    settings.set('hudShow', {}); settings.set('hudCollapsed', {}); settings.set('hudLayout', {});
    buildMenu();
  });
  $('hud-move').addEventListener('click', () => { closeMenu(false); startEdit(() => hooks.onClose?.()); });

  // ---- moving the panels ----
  const positions = () => Object.fromEntries(HUD_PANELS.filter((n) => !els[n].hidden).map((n) => { const r = els[n].getBoundingClientRect(); return [n, { x: (r.left + r.width / 2) / window.innerWidth, y: (r.top + r.height / 2) / window.innerHeight }]; }));
  function freezeAll() { // every panel stays exactly where it is now, so moving one does not make the others jump into its gap
    const at = positions();
    for (const n of HUD_PANELS) if (!els[n].hidden) free(n, at[n]);
  }
  function startEdit(done) {
    if (editing) return;
    editing = true; editDone = done ?? null;
    document.body.classList.add('hudedit');
    shield = document.createElement('div');
    shield.id = 'hud-shield';
    document.body.appendChild(shield);
    editBar = document.createElement('div');
    editBar.className = 'tedit';
    const text = document.createElement('div');
    text.className = 'tedit-text';
    text.innerHTML = '<b>Move the HUD</b><span>Drag a panel where you want it</span>';
    const reset = document.createElement('button'); reset.className = 'small'; reset.textContent = 'Reset';
    const doneBtn = document.createElement('button'); doneBtn.className = 'small'; doneBtn.textContent = 'Done';
    editBar.append(text, reset, doneBtn);
    document.body.appendChild(editBar);
    reset.addEventListener('click', () => { settings.set('hudLayout', {}); for (const n of HUD_PANELS) unfree(n); freezeAll(); });
    doneBtn.addEventListener('click', endEdit);
    freezeAll();
  }
  function endEdit() {
    if (!editing) return;
    editing = false;
    document.body.classList.remove('hudedit');
    shield?.remove(); editBar?.remove(); shield = editBar = null;
    apply();
    const done = editDone; editDone = null;
    done?.();
  }
  for (const name of HUD_PANELS) {
    const el = els[name];
    el.addEventListener('pointerdown', (e) => {
      if (!editing) return;
      e.preventDefault(); e.stopPropagation();
      const r = el.getBoundingClientRect();
      const gx = e.clientX - (r.left + r.width / 2), gy = e.clientY - (r.top + r.height / 2);
      const id = e.pointerId;
      el.setPointerCapture(id);
      const move = (ev) => {
        if (ev.pointerId !== id) return;
        const b = el.getBoundingClientRect();
        const c = clampCenter(ev.clientX - gx, ev.clientY - gy, b.width, b.height, window.innerWidth, window.innerHeight, 2);
        free(name, c);
      };
      const end = (ev) => {
        if (ev.pointerId !== id) return;
        for (const t of ['pointermove', 'pointerup', 'pointercancel']) el.removeEventListener(t, t === 'pointermove' ? move : end);
        settings.set('hudLayout', positions()); // (all the panels: they were all frozen in place when the move began)
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    });
    el.addEventListener('click', (e) => { if (editing) { e.stopPropagation(); e.preventDefault(); } }, true);
  }
  window.addEventListener('resize', () => { if (!editing) apply(); });

  // Leave whatever is open (the window, or the moving) without calling onClose: the game is already closing it
  function cancel() { editDone = null; endEdit(); closeMenu(false); }

  return { apply, openMenu, closeMenu, startEdit, cancel, get open() { return !menu.hidden || editing; }, get editing() { return editing; } };
}
