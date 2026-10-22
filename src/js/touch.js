// On-screen controls for phones and tablets: a floating move stick on the left, drag-to-look on the right, and buttons for
// everything the mouse and keyboard do. This file only handles fingers and drawing; main.js decides what the buttons mean
// (the `hooks`) and reads the stick / held buttons from `state`.
import { stickVector, stickSprints, dragBase, STICK_RADIUS } from './touchmath.js';

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
  const state = { strafe: 0, forward: 0, edge: false, jump: false, crouch: false, sprint: false };
  let enabled = false;
  let shown = false;
  const held = new Set(); // hold-buttons currently pressed (so a reset can release them)

  const root = el('div');
  root.id = 'touch';
  root.hidden = true;
  const lookZone = el('div', 'tz look', '', root);
  const moveZone = el('div', 'tz move', '', root);
  const ghost = el('div', 'stick ghost', '', root);       // where the stick will appear when idle
  el('i', 'knob', '', ghost);
  const base = el('div', 'stick live', '', root);          // the stick while a thumb is on it
  const knob = el('i', 'knob', '', base);
  base.hidden = true;

  // ---- the stick ----
  let stickId = null, origin = { x: 0, y: 0 };
  const placeBase = () => { base.style.left = origin.x + 'px'; base.style.top = origin.y + 'px'; };
  function stickEnd() {
    stickId = null;
    state.strafe = 0; state.forward = 0; state.edge = false;
    base.hidden = true;
    ghost.hidden = false;
    hooks.changed?.();
  }
  moveZone.addEventListener('pointerdown', (e) => {
    if (stickId !== null) return;
    e.preventDefault();
    stickId = e.pointerId;
    moveZone.setPointerCapture(e.pointerId);
    origin = { x: e.clientX, y: e.clientY };
    placeBase();
    knob.style.transform = 'translate(-50%, -50%)';
    base.hidden = false;
    ghost.hidden = true;
  });
  moveZone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== stickId) return;
    origin = dragBase(origin, { x: e.clientX, y: e.clientY });
    placeBase();
    const dx = e.clientX - origin.x, dy = e.clientY - origin.y;
    const v = stickVector(dx, dy);
    state.strafe = v.strafe; state.forward = v.forward; state.edge = stickSprints(v);
    const k = Math.min(1, Math.hypot(dx, dy) / STICK_RADIUS) * STICK_RADIUS, a = Math.atan2(dy, dx);
    knob.style.transform = `translate(calc(-50% + ${Math.cos(a) * k}px), calc(-50% + ${Math.sin(a) * k}px))`;
    hooks.changed?.();
  });
  for (const type of ['pointerup', 'pointercancel']) moveZone.addEventListener(type, (e) => { if (e.pointerId === stickId) stickEnd(); });

  // ---- looking ----
  let lookId = null, last = { x: 0, y: 0 };
  lookZone.addEventListener('pointerdown', (e) => {
    if (lookId !== null) return;
    e.preventDefault();
    lookId = e.pointerId;
    lookZone.setPointerCapture(e.pointerId);
    last = { x: e.clientX, y: e.clientY };
  });
  lookZone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== lookId) return;
    hooks.look(e.clientX - last.x, e.clientY - last.y);
    last = { x: e.clientX, y: e.clientY };
  });
  for (const type of ['pointerup', 'pointercancel']) lookZone.addEventListener(type, (e) => { if (e.pointerId === lookId) lookId = null; });

  // ---- buttons ----
  function button(name, label, parent = root) {
    const b = el('div', 'tb ' + name, label, parent);
    b.setAttribute('role', 'button');
    return b;
  }
  // pressed while a finger is on it
  function holdButton(name, label, onDown, onUp) {
    const b = button(name, label);
    let id = null;
    const release = () => { if (id === null) return; id = null; held.delete(release); b.classList.remove('on'); onUp?.(); };
    b.addEventListener('pointerdown', (e) => {
      if (id !== null) return;
      e.preventDefault();
      id = e.pointerId;
      b.setPointerCapture(e.pointerId);
      b.classList.add('on');
      held.add(release);
      onDown();
    });
    for (const type of ['pointerup', 'pointercancel']) b.addEventListener(type, (e) => { if (e.pointerId === id) release(); });
    return b;
  }
  // one tap does one thing
  function tapButton(name, label, fn, parent = root) {
    const b = button(name, label, parent);
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); fn(); });
    return b;
  }
  // tap to switch on, tap again to switch off
  function toggleButton(name, label, key) {
    const b = button(name, label);
    b.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      state[key] = !state[key];
      b.classList.toggle('on', state[key]);
      hooks.changed?.();
    });
    return b;
  }

  holdButton('attack', 'Break', () => hooks.attack(true), () => hooks.attack(false));
  holdButton('use', 'Use', () => hooks.use(true), () => hooks.use(false));
  holdButton('jump', 'Jump', () => { state.jump = true; hooks.jump(); hooks.changed?.(); }, () => { state.jump = false; hooks.changed?.(); });
  const flyBtn = tapButton('fly', 'Fly', () => hooks.fly());
  const sprintBtn = toggleButton('sprint', 'Run', 'sprint');
  const crouchBtn = toggleButton('crouch', 'Sneak', 'crouch');
  tapButton('inv', 'Bag', () => hooks.inventory());
  tapButton('off', 'Torch', () => hooks.offhand());
  tapButton('menu', 'II', () => hooks.menu());

  // ---- inventory / palette helpers: the close button sits above those windows, the tap-mode button inside the inventory ----
  const closeBtn = tapButton('close', '✕', () => hooks.closeScreen(), document.body);
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
      if (!enabled) { reset(); root.hidden = true; shown = false; closeBtn.hidden = true; modeBtn.hidden = true; }
    },
    // called every frame with what the game is doing; cheap when nothing changed
    sync({ show, screen, creative, flying }) {
      if (!enabled) return;
      const want = !!show;
      if (want !== shown) { shown = want; root.hidden = !want; if (!want) reset(); }
      flyBtn.hidden = !creative;
      flyBtn.classList.toggle('on', !!flying);
      closeBtn.hidden = !screen;
      modeBtn.hidden = screen !== 'inv';
    },
  };
}
