// On-screen controls for phones and tablets: a joystick fixed in the bottom left corner, drag-to-look anywhere else, and buttons
// (drawn as symbols, see symbols.js) for what the mouse and keyboard do: attack / dig / mine, interact / use, jump, sprint,
// crouch, fly (creative) and pause, plus a loot bag button on the right of the hotbar that opens the inventory. The player can
// drag every one of them (but the bag) to where their thumbs like them. This file only handles fingers and drawing; main.js
// decides what the buttons mean (the `hooks`) and reads the stick / held buttons from `state`.
import { stickVector, cleanLayout, clampCenter } from './touchmath.js';
import { symbolURL } from './symbols.js';

const el = (tag, cls, text, parent) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
};

// How the inventory treats a tap: a touch screen has no right button or Shift key, so the player picks the "click" here
const INV_MODES = [
  { id: 'move', label: 'Tap: pick up / place', button: 0, shift: false },
  { id: 'split', label: 'Tap: split / place one', button: 2, shift: false },
  { id: 'quick', label: 'Tap: quick move / wear', button: 0, shift: true },
];

export function createTouchControls(hooks) {
  const state = { strafe: 0, forward: 0, jump: false, crouch: false, sprint: false };
  let enabled = false;
  let shown = false;
  const held = new Set(); // hold-buttons currently pressed (so a reset can release them)
  const buttons = {};     // name -> element, for the buttons the player can move
  let layout = {};        // name -> { x, y } centre as fractions of the screen; missing = the built-in place (style.css)
  let editing = false, editDone = null;

  const root = el('div');
  root.id = 'touch';
  root.hidden = true;
  const lookZone = el('div', 'tz look', '', root);

  // ---- the stick: a joystick that stays where it is (bottom left unless the player moved it) ----
  const stick = el('div', 'stick', '', root);
  const knob = el('i', 'knob', '', stick);
  buttons.stick = stick;
  makeMovable('stick', stick); // (first, so that while the layout is being edited it stops the stick from steering)
  let stickId = null;
  const knobTravel = () => stick.getBoundingClientRect().width * 0.34; // how far the knob can go from the middle
  function steer(e) {
    const r = stick.getBoundingClientRect();
    const R = knobTravel();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const v = stickVector(dx, dy, R);
    state.strafe = v.strafe; state.forward = v.forward; // (sprinting is the sprint button's job, never the stick's)
    const k = Math.min(1, Math.hypot(dx, dy) / R) * R, a = Math.atan2(dy, dx);
    knob.style.transform = `translate(calc(-50% + ${Math.cos(a) * k}px), calc(-50% + ${Math.sin(a) * k}px))`;
    hooks.changed?.();
  }
  function stickEnd() {
    stickId = null;
    state.strafe = 0; state.forward = 0;
    knob.style.transform = '';
    hooks.changed?.();
  }
  stick.addEventListener('pointerdown', (e) => {
    if (editing) return;
    e.preventDefault();
    stickId = e.pointerId; // (a new finger always takes over: an old one whose lift was never reported must not lock the stick)
    stick.setPointerCapture(e.pointerId);
    steer(e);
  });
  stick.addEventListener('pointermove', (e) => { if (e.pointerId === stickId) steer(e); });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) stick.addEventListener(type, (e) => { if (e.pointerId === stickId) stickEnd(); });

  // ---- looking: drag a finger over anything that is not a control ----
  let lookId = null, last = { x: 0, y: 0 };
  lookZone.addEventListener('pointerdown', (e) => {
    if (editing) return;
    e.preventDefault();
    lookId = e.pointerId; // (a new finger takes over from one whose lift was never reported)
    lookZone.setPointerCapture(e.pointerId);
    last = { x: e.clientX, y: e.clientY };
  });
  lookZone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== lookId) return;
    hooks.look(e.clientX - last.x, e.clientY - last.y);
    last = { x: e.clientX, y: e.clientY };
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) lookZone.addEventListener(type, (e) => { if (e.pointerId === lookId) lookId = null; });

  // A finger that starts on the minimap, the info panels or the hotbar is a tap there, until it moves: then it is a look drag too,
  // so no part of the screen is a dead spot for turning around.
  const SOFT_LOOK = '#hotbar, #minimap, #hud-right, #mm-info, #bagbtn';
  let soft = null;
  window.addEventListener('pointerdown', (e) => {
    if (!enabled || !shown || editing || e.pointerType === 'mouse' || document.body.classList.contains('hudedit') || !e.target.closest?.(SOFT_LOOK)) return;
    soft = { id: e.pointerId, x: e.clientX, y: e.clientY, dragging: false };
  }, true);
  window.addEventListener('pointermove', (e) => {
    if (!soft || e.pointerId !== soft.id) return;
    if (!soft.dragging) {
      if (Math.hypot(e.clientX - soft.x, e.clientY - soft.y) < 10) return;
      soft.dragging = true;
      soft.x = e.clientX; soft.y = e.clientY;
      return;
    }
    hooks.look(e.clientX - soft.x, e.clientY - soft.y);
    soft.x = e.clientX; soft.y = e.clientY;
  }, true);
  for (const type of ['pointerup', 'pointercancel']) window.addEventListener(type, (e) => { if (soft && e.pointerId === soft.id) soft = null; }, true);

  // ---- buttons ----
  // `symbol` is a name from symbols.js (or text, for the plain close button); the label is for screen readers
  function button(name, symbol, parent = root, label = name) {
    const b = el('div', 'tb ' + name, '', parent);
    b.setAttribute('role', 'button');
    b.setAttribute('aria-label', label);
    if (symbol) {
      const url = symbolURL(symbol);
      if (url) { const img = el('img', '', '', b); img.src = url; img.alt = ''; img.draggable = false; } else b.textContent = label;
    }
    if (parent === root) { buttons[name] = b; makeMovable(name, b); lookWhileHeld(b); } // (the editor's handler is first: it stops the event while buttons are being placed)
    return b;
  }

  // ---- moving the buttons (layout edit mode, see edit() below) ----
  function place(name) {
    const b = buttons[name], p = layout[name];
    if (!b) return;
    // (the transform centres the button on the point; the built-in right/bottom anchoring is switched off)
    Object.assign(b.style, p ? { left: p.x * 100 + '%', top: p.y * 100 + '%', right: 'auto', bottom: 'auto', transform: 'translate(-50%, -50%)' } : { left: '', top: '', right: '', bottom: '', transform: '' });
  }
  function makeMovable(name, b) {
    b.addEventListener('pointerdown', (e) => {
      if (!editing) return;
      e.preventDefault();
      e.stopImmediatePropagation(); // the button does nothing while it is being placed
      const r = b.getBoundingClientRect();
      const grabX = e.clientX - (r.left + r.width / 2), grabY = e.clientY - (r.top + r.height / 2);
      const id = e.pointerId;
      b.setPointerCapture(id);
      b.classList.add('moving');
      const move = (ev) => {
        if (ev.pointerId !== id) return;
        layout = { ...layout, [name]: clampCenter(ev.clientX - grabX, ev.clientY - grabY, r.width, r.height, window.innerWidth, window.innerHeight) };
        place(name);
      };
      const end = (ev) => {
        if (ev.pointerId !== id) return;
        for (const t of ['pointermove', 'pointerup', 'pointercancel']) b.removeEventListener(t, t === 'pointermove' ? move : end);
        b.classList.remove('moving');
        hooks.layoutChanged?.(layout);
      };
      b.addEventListener('pointermove', move);
      b.addEventListener('pointerup', end);
      b.addEventListener('pointercancel', end);
    });
  }
  // A finger resting on a button can still turn the camera: while it is down, moving it looks around (the button stays pressed)
  function lookWhileHeld(b) {
    let id = null, at = { x: 0, y: 0 };
    b.addEventListener('pointerdown', (e) => {
      id = e.pointerId;
      at = { x: e.clientX, y: e.clientY };
      b.setPointerCapture(e.pointerId);
    });
    b.addEventListener('pointermove', (e) => {
      if (e.pointerId !== id) return;
      hooks.look(e.clientX - at.x, e.clientY - at.y);
      at = { x: e.clientX, y: e.clientY };
    });
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(type, (e) => { if (e.pointerId === id) id = null; });
  }
  // pressed while a finger is on it
  function holdButton(name, symbol, label, onDown, onUp) {
    const b = button(name, symbol, root, label);
    let id = null;
    const release = () => { if (id === null) return; id = null; held.delete(release); b.classList.remove('on'); onUp?.(); };
    b.addEventListener('pointerdown', (e) => {
      if (editing) return;
      e.preventDefault();
      if (id !== null) release(); // (the earlier press never reported its lift: let go of it first)
      id = e.pointerId;
      b.setPointerCapture(e.pointerId);
      b.classList.add('on');
      held.add(release);
      onDown();
    });
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(type, (e) => { if (e.pointerId === id) release(); });
    return b;
  }
  // one tap does one thing
  function tapButton(name, symbol, label, fn, parent = root) {
    const b = button(name, symbol, parent, label);
    b.addEventListener('pointerdown', (e) => { if (editing) return; e.preventDefault(); fn(); });
    return b;
  }
  // tap to switch on, tap again to switch off
  function toggleButton(name, symbol, label, key) {
    const b = button(name, symbol, root, label);
    b.addEventListener('pointerdown', (e) => {
      if (editing) return;
      e.preventDefault();
      state[key] = !state[key];
      b.classList.toggle('on', state[key]);
      hooks.changed?.();
    });
    return b;
  }

  holdButton('attack', 'attack', 'Attack, dig and mine', () => hooks.attack(true), () => hooks.attack(false));
  holdButton('use', 'use', 'Interact and use', () => hooks.use(true), () => hooks.use(false));
  holdButton('jump', 'jump', 'Jump', () => { state.jump = true; hooks.jump(); hooks.changed?.(); }, () => { state.jump = false; hooks.changed?.(); });
  const flyBtn = tapButton('fly', 'fly', 'Fly', () => hooks.fly());
  const sprintBtn = toggleButton('sprint', 'sprint', 'Sprint', 'sprint');
  const crouchBtn = toggleButton('crouch', 'crouch', 'Crouch', 'crouch');
  tapButton('menu', 'menu', 'Pause', () => hooks.menu());
  tapButton('book', 'book', 'Quest book', () => hooks.book());

  // the loot bag, attached to the right of the hotbar (it moves with the hotbar, so it is not part of the layout the player edits)
  const bagBtn = el('div', 'bagbtn', '', document.body);
  bagBtn.id = 'bagbtn';
  bagBtn.setAttribute('role', 'button');
  bagBtn.setAttribute('aria-label', 'Inventory');
  const bagImg = el('img', '', '', bagBtn);
  bagImg.src = symbolURL('bag'); bagImg.alt = ''; bagImg.draggable = false;
  bagBtn.hidden = true;
  bagBtn.addEventListener('pointerdown', (e) => { if (editing) return; e.preventDefault(); hooks.inventory(); });

  // ---- inventory / palette helpers: the close button sits above those windows, the tap-mode button inside the inventory ----
  const closeBtn = tapButton('close', null, '\u2715', () => hooks.closeScreen(), document.body);
  closeBtn.id = 't-close';
  const modeBtn = el('div', 'tb invmode');
  document.querySelector('#inventory .inv-col').prepend(modeBtn); // inside the window, so it scales with it
  modeBtn.id = 't-invmode';
  closeBtn.hidden = modeBtn.hidden = true;
  let mode = 0;
  const showMode = () => { modeBtn.textContent = INV_MODES[mode].label; };
  showMode();
  modeBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); mode = (mode + 1) % INV_MODES.length; showMode(); });
  // A real tap on an inventory slot is re-sent as the click the chosen mode stands for (a right click, or a Shift-click)
  document.getElementById('inventory').addEventListener('mousedown', (e) => {
    const m = INV_MODES[mode];
    if (!enabled || !e.isTrusted || m.id === 'move') return;
    e.stopImmediatePropagation();
    e.preventDefault();
    e.target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, button: m.button, shiftKey: m.shift, clientX: e.clientX, clientY: e.clientY }));
  }, true);

  // ---- the layout editor's window (top centre): the controls and the world stay in view behind it ----
  const bar = el('div', 'tedit', '', document.body);
  bar.hidden = true;
  const title = el('div', 'tedit-text', '', bar);
  el('b', '', 'Move the controls', title);
  el('span', '', 'Drag any button or the joystick where you want it', title);
  const resetBtn = el('button', 'small', 'Reset', bar);
  const doneBtn = el('button', 'small', 'Done', bar);
  resetBtn.addEventListener('click', () => { layout = {}; for (const n of Object.keys(buttons)) place(n); hooks.layoutChanged?.(layout); });
  doneBtn.addEventListener('click', () => endEdit());
  function endEdit() {
    if (!editing) return;
    editing = false;
    bar.hidden = true;
    root.classList.remove('editing');
    document.body.classList.remove('peek');
    root.hidden = !shown;
    bagBtn.hidden = !shown;
    const done = editDone; editDone = null;
    done?.();
  }

  document.body.appendChild(root);

  function reset() {
    for (const release of [...held]) release();
    if (stickId !== null) stickEnd();
    lookId = null;
    state.jump = false; state.crouch = false; state.sprint = false;
    sprintBtn.classList.remove('on'); crouchBtn.classList.remove('on');
    hooks.changed?.();
  }

  return {
    state,
    reset,
    get enabled() { return enabled; },
    setEnabled(on) {
      enabled = !!on;
      if (!enabled) { endEdit(); reset(); root.hidden = true; shown = false; closeBtn.hidden = true; modeBtn.hidden = true; bagBtn.hidden = true; }
    },
    get editing() { return editing; },
    // the saved layout (see touchmath.js cleanLayout)
    setLayout(raw) {
      layout = cleanLayout(raw);
      for (const n of Object.keys(buttons)) place(n);
    },
    // Layout edit mode: every button is shown (even Fly) and can be dragged; the pause menu fades away so the screen is free.
    // `done` runs when the player taps Done.
    edit(done) {
      if (!enabled || editing) return;
      reset();
      editing = true; editDone = done;
      root.hidden = false;
      bagBtn.hidden = false;
      root.classList.add('editing');
      document.body.classList.add('peek');
      bar.hidden = false;
      flyBtn.hidden = false; flyBtn.classList.remove('on');
    },
    // called every frame with what the game is doing; cheap when nothing changed
    sync({ show, screen, creative, flying }) {
      if (!enabled || editing) return;
      const want = !!show;
      if (want !== shown) { shown = want; root.hidden = !want; bagBtn.hidden = !want; if (!want) reset(); }
      flyBtn.hidden = !creative;
      flyBtn.classList.toggle('on', !!flying);
      closeBtn.hidden = !screen;
      modeBtn.hidden = screen !== 'inv';
    },
  };
}
