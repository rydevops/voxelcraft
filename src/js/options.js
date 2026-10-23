// The Options screen: mouse / display / audio sliders and the key-binding editor.
import { ACTIONS, keyLabel } from './settings.js';

const $ = (id) => document.getElementById(id);

const SLIDERS = [
  { key: 'sensitivity', label: 'Look sensitivity (mouse / touch)', min: 0.1, max: 3, step: 0.05, fmt: (v) => Math.round(v * 100) + '%' },
  { key: 'fov', label: 'Field of view', min: 60, max: 110, step: 1, fmt: (v) => v + '°', peek: true },
  { key: 'hudSize', label: 'HUD size (hotbar, hearts, map, goals)', min: 0.7, max: 1.8, step: 0.05, fmt: (v) => Math.round(v * 100) + '%', peek: true },
  { key: 'hotbarSize', label: 'Hotbar size (hotbar, hearts, loot bag)', min: 0.4, max: 1.5, step: 0.05, fmt: (v) => Math.round(v * 100) + '%', peek: true },
  { key: 'touchButtonSize', label: 'Touch button size (joystick, buttons, icons)', min: 0.5, max: 1.5, step: 0.05, fmt: (v) => Math.round(v * 100) + '%', peek: true, touchOnly: true },
  { key: 'musicVolume', label: 'Music volume', min: 0, max: 1, step: 0.05, fmt: (v) => Math.round(v * 100) + '%' },
  { key: 'sfxVolume', label: 'Sound effects volume', min: 0, max: 1, step: 0.05, fmt: (v) => Math.round(v * 100) + '%' },
];
const TOGGLES = [
  { key: 'invertY', label: 'Invert mouse Y axis' },
  { key: 'rawInput', label: 'Raw mouse input (no OS acceleration)' },
  { key: 'touchControls', label: 'On-screen touch controls (sticks and buttons)' },
];

// `layout` (optional): { available() -> boolean, edit(), reset() } for moving the touch controls around and putting them back
export function createOptions(settings, { onClose, layout }) {
  const root = $('options');
  const general = $('opt-general');
  const keys = $('opt-keys');
  let open = false;
  let capturing = null; // { action, button }

  // "Peek": while a setting that changes the picture (the field of view) is being adjusted, everything but its slider fades
  // away so the world you paused in is in plain view. It lingers a moment after you let go, then the menus come back.
  let peeking = false, peekRow = null, peekTimer = 0;
  const setPeek = (on) => {
    peeking = on;
    document.body.classList.toggle('peek', on);
    peekRow?.classList.toggle('peeking', on);
  };
  const lingerThenRestore = () => { clearTimeout(peekTimer); peekTimer = setTimeout(() => { if (!held) setPeek(false); }, 900); };
  let held = false; // a pointer is down on the slider
  const letGo = () => { if (!held) return; held = false; lingerThenRestore(); };
  window.addEventListener('pointerup', letGo);
  window.addEventListener('pointercancel', letGo);

  // ---- general tab -----------------------------------------------------------------------
  function buildGeneral() {
    general.replaceChildren();
    peekRow = null;
    for (const s of SLIDERS) {
      const row = document.createElement('label');
      row.className = 'opt-row' + (s.touchOnly ? ' touch-only' : '');
      const name = document.createElement('span');
      name.textContent = s.label;
      const input = document.createElement('input');
      input.type = 'range';
      input.min = s.min; input.max = s.max; input.step = s.step;
      input.value = settings.get(s.key);
      const val = document.createElement('output');
      val.textContent = s.fmt(Number(input.value));
      input.addEventListener('input', () => {
        const v = Number(input.value);
        val.textContent = s.fmt(v);
        settings.set(s.key, v);
        if (s.peek) { peekRow = row; setPeek(true); lingerThenRestore(); } // (arrow keys: no pointer is held, so it fades back by itself)
      });
      if (s.peek) input.addEventListener('pointerdown', () => { held = true; peekRow = row; setPeek(true); });
      row.append(name, input, val);
      general.appendChild(row);
    }
    for (const t of TOGGLES) {
      const row = document.createElement('label');
      row.className = 'opt-row toggle';
      const box = document.createElement('input');
      box.type = 'checkbox';
      box.checked = settings.get(t.key);
      box.addEventListener('change', () => settings.set(t.key, box.checked));
      const name = document.createElement('span');
      name.textContent = t.label;
      row.append(box, name);
      general.appendChild(row);
    }
    // phones and tablets: drag the on-screen buttons wherever suits your thumbs (only while a world is open)
    const move = document.createElement('div');
    move.className = 'opt-row touch-only';
    move.style.gridTemplateColumns = '1fr';
    if (layout?.available()) {
      const btn = document.createElement('button');
      btn.className = 'small';
      btn.textContent = 'Move the touch controls...';
      btn.addEventListener('click', () => { close(); layout.edit(); });
      const reset = document.createElement('button');
      reset.className = 'small';
      reset.textContent = 'Reset controls to default';
      reset.addEventListener('click', () => { layout.reset(); reset.textContent = 'Controls reset'; setTimeout(() => { reset.textContent = 'Reset controls to default'; }, 1500); });
      move.style.gridTemplateColumns = '1fr 1fr';
      move.append(btn, reset);
    } else {
      move.append(Object.assign(document.createElement('span'), { className: 'opt-hint', textContent: 'To move the touch controls, open Options from the pause menu while you are in a world.' }));
    }
    general.prepend(move); // (first: the list scrolls on a phone and this is the thing to find)
    const hint = document.createElement('p');
    hint.className = 'opt-hint';
    hint.textContent = 'Tip: sensitivity changes apply instantly. Raw input takes effect the next time you click Resume.';
    general.appendChild(hint);
  }

  // ---- key bindings tab -----------------------------------------------------------------------
  function buildKeys(message = '') {
    keys.replaceChildren();
    const note = document.createElement('p');
    note.className = 'opt-hint';
    note.textContent = message || 'Click a key, then press the new key. Esc cancels. If the key is already used, the two actions swap.';
    keys.appendChild(note);
    let group = '';
    for (const a of ACTIONS) {
      if (a.group !== group) {
        group = a.group;
        const h = document.createElement('h3');
        h.textContent = group;
        keys.appendChild(h);
      }
      const row = document.createElement('div');
      row.className = 'bind-row';
      const name = document.createElement('span');
      name.textContent = a.label;
      const btn = document.createElement('button');
      btn.className = 'bind-btn' + (settings.key(a.id) === a.key ? '' : ' changed');
      btn.textContent = keyLabel(settings.key(a.id));
      btn.addEventListener('click', () => startCapture(a.id, btn));
      row.append(name, btn);
      keys.appendChild(row);
    }
    const mouse = document.createElement('p');
    mouse.className = 'opt-hint';
    mouse.textContent = 'Mouse buttons are fixed: left = break, right = place / use, middle = pick block, wheel = hotbar.';
    const reset = document.createElement('button');
    reset.className = 'small';
    reset.textContent = 'Reset keys to defaults';
    reset.addEventListener('click', () => { settings.resetBinds(); buildKeys('Keys reset to defaults.'); });
    keys.append(mouse, reset);
  }

  function startCapture(action, button) {
    cancelCapture();
    capturing = { action, button };
    button.textContent = 'Press a key…';
    button.classList.add('waiting');
  }
  function cancelCapture() {
    if (!capturing) return;
    capturing = null;
    buildKeys();
  }

  // Runs in the capture phase so the game never sees the key while we are rebinding
  window.addEventListener('keydown', (e) => {
    if (!open) return;
    if (capturing) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (e.code === 'Escape') { cancelCapture(); return; }
      const action = capturing.action;
      capturing = null;
      const swapped = settings.setBind(action, e.code);
      const label = (id) => ACTIONS.find((a) => a.id === id).label;
      buildKeys(swapped ? `"${label(action)}" is now ${keyLabel(e.code)}; swapped with "${label(swapped)}".` : '');
    } else if (e.code === 'Escape') {
      e.stopImmediatePropagation();
      close();
    }
  }, true);

  // ---- tabs + open/close ----------------------------------------------------------------------
  function showTab(name) {
    general.hidden = name !== 'general';
    keys.hidden = name !== 'keys';
    for (const b of root.querySelectorAll('.opt-tabs button')) b.classList.toggle('active', b.dataset.tab === name);
  }
  for (const b of root.querySelectorAll('.opt-tabs button')) b.addEventListener('click', () => { cancelCapture(); showTab(b.dataset.tab); });

  function openPanel() {
    open = true;
    buildGeneral();
    buildKeys();
    showTab('general');
    root.hidden = false;
  }
  function close() {
    cancelCapture();
    held = false; clearTimeout(peekTimer); setPeek(false);
    open = false;
    root.hidden = true;
    onClose();
  }
  $('opt-done').addEventListener('click', close);
  $('opt-reset').addEventListener('click', () => { settings.resetAll(); buildGeneral(); buildKeys('Everything reset to defaults.'); });

  return { open: openPanel, close, get isOpen() { return open; } };
}
