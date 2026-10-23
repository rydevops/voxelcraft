// Player settings (mouse sensitivity, FOV, volume...) and remappable key bindings.
// Stored in the browser's localStorage so they follow the player between worlds.
import { browserWantsTouch } from './touchmath.js';

// Every rebindable action: id, label shown in the options panel, group, default key (KeyboardEvent.code)
export const ACTIONS = [
  { id: 'forward', label: 'Move forward', group: 'Movement', key: 'KeyW' },
  { id: 'back', label: 'Move backward', group: 'Movement', key: 'KeyS' },
  { id: 'left', label: 'Move left', group: 'Movement', key: 'KeyA' },
  { id: 'right', label: 'Move right', group: 'Movement', key: 'KeyD' },
  { id: 'jump', label: 'Jump / swim up / fly up', group: 'Movement', key: 'Space' },
  { id: 'sprint', label: 'Sprint', group: 'Movement', key: 'Tab' },
  { id: 'crouch', label: 'Crouch / fly down', group: 'Movement', key: 'ShiftLeft' },
  { id: 'down', label: 'Fly down (extra key)', group: 'Movement', key: 'KeyC' },
  { id: 'inventory', label: 'Inventory & crafting', group: 'Actions', key: 'KeyE' },
  { id: 'drop', label: 'Drop item', group: 'Actions', key: 'KeyQ' },
  { id: 'fly', label: 'Toggle flight (creative)', group: 'Actions', key: 'KeyF' },
  { id: 'offhand', label: 'Use offhand item (place a torch from the shield slot)', group: 'Actions', key: 'KeyG' },
  ...Array.from({ length: 9 }, (_, i) => ({ id: 'slot' + (i + 1), label: 'Hotbar slot ' + (i + 1), group: 'Hotbar', key: 'Digit' + (i + 1) })),
  { id: 'map', label: 'Full-screen map (or tap the minimap)', group: 'Actions', key: 'KeyM' },
  { id: 'music', label: 'Toggle music', group: 'Other', key: 'KeyN' },
  { id: 'skipTime', label: 'Skip time of day', group: 'Other', key: 'KeyT' },
  { id: 'renderUp', label: 'Render distance +', group: 'Other', key: 'BracketRight' },
  { id: 'renderDown', label: 'Render distance -', group: 'Other', key: 'BracketLeft' },
  { id: 'debug', label: 'Debug info', group: 'Other', key: 'F3' },
];

const DEFAULTS = {
  sensitivity: 1.0,   // multiplier on the base turn rate
  invertY: false,
  rawInput: true,     // ask the browser for unaccelerated mouse movement
  fov: 75,
  musicVolume: 0.8,
  sfxVolume: 0.9,
  touchControls: browserWantsTouch(), // on-screen sticks and buttons: on by default on phones and tablets
  hudSize: browserWantsTouch() ? 1.3 : 1, // multiplier on the HUD (hotbar, hearts, minimap, clock, goals): bigger by default on a phone
  hotbarSize: browserWantsTouch() ? 0.75 : 1, // multiplier on the hotbar (and the hearts and loot bag attached to it): smaller by default on a phone
  touchButtonSize: browserWantsTouch() ? 0.8 : 1, // multiplier on the on-screen joystick and buttons (and their icons)
  hudShow: {},      // parts of the HUD the player switched off (see hudmath.js HUD_ITEMS); empty = everything shown
  hudCollapsed: {}, // panels folded away by tapping them: { info: true, goals: true }
  hudLayout: {},    // where the player dragged the HUD panels to (see hudmath.js cleanHudLayout); empty = the built-in places
  touchLayout: {}, // where the player moved the touch buttons to (see touchmath.js cleanLayout); empty = the built-in places
};

export const BASE_TURN_RATE = 0.0022; // radians of rotation per pixel of mouse movement at sensitivity 1.0

const STORAGE_KEY = 'voxelcraft.settings.v1';

export function keyLabel(code) {
  if (!code) return 'Unbound';
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  const names = {
    Space: 'Space', ShiftLeft: 'Left Shift', ShiftRight: 'Right Shift', ControlLeft: 'Left Ctrl', ControlRight: 'Right Ctrl',
    AltLeft: 'Left Alt', AltRight: 'Right Alt', Tab: 'Tab', CapsLock: 'Caps Lock', Enter: 'Enter', Backspace: 'Backspace',
    ArrowUp: 'Up Arrow', ArrowDown: 'Down Arrow', ArrowLeft: 'Left Arrow', ArrowRight: 'Right Arrow',
    BracketLeft: '[', BracketRight: ']', Semicolon: ';', Quote: "'", Comma: ',', Period: '.', Slash: '/', Backslash: '\\',
    Minus: '-', Equal: '=', Backquote: '`',
  };
  return names[code] || code;
}

export class Settings {
  constructor() {
    this.values = { ...DEFAULTS };
    this.binds = Object.fromEntries(ACTIONS.map((a) => [a.id, a.key]));
    this.listeners = new Set();
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (raw) {
        for (const k of Object.keys(DEFAULTS)) if (typeof raw.values?.[k] === typeof DEFAULTS[k] && raw.values[k] !== null) this.values[k] = raw.values[k];
        for (const a of ACTIONS) if (raw.binds && a.id in raw.binds) this.binds[a.id] = raw.binds[a.id];
        // before crouching existed Shift was the sprint key: move saved settings to the new layout (Tab sprints, Shift crouches)
        if (raw.binds && !('crouch' in raw.binds) && raw.binds.sprint === 'ShiftLeft') this.binds.sprint = 'Tab';
        // the map used to be N and the music M: the map is M now (move anyone still on the old pair over)
        if (raw.binds && raw.binds.map === 'KeyN' && raw.binds.music === 'KeyM') { this.binds.map = 'KeyM'; this.binds.music = 'KeyN'; }
      }
    } catch { /* private mode / corrupt data: just use defaults */ }
    this.rebuild();
  }

  rebuild() {
    this.reverse = new Map();
    for (const [action, code] of Object.entries(this.binds)) if (code) this.reverse.set(code, action);
  }

  save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ values: this.values, binds: this.binds })); } catch { /* ignore */ }
    for (const fn of this.listeners) fn(this);
  }

  get(key) { return this.values[key]; }
  set(key, value) { this.values[key] = value; this.save(); }
  onChange(fn) { this.listeners.add(fn); }

  key(action) { return this.binds[action]; }
  actionFor(code) { return this.reverse.get(code); }

  // Bind a key to an action. If another action already uses it, the two swap keys.
  // Returns the id of the action that was swapped, or null.
  setBind(action, code) {
    const other = this.reverse.get(code);
    let swapped = null;
    if (other && other !== action) {
      this.binds[other] = this.binds[action];
      swapped = other;
    }
    this.binds[action] = code;
    this.rebuild();
    this.save();
    return swapped;
  }

  resetBinds() {
    this.binds = Object.fromEntries(ACTIONS.map((a) => [a.id, a.key]));
    this.rebuild();
    this.save();
  }

  resetAll() {
    this.values = { ...DEFAULTS, touchLayout: {}, hudShow: {}, hudCollapsed: {}, hudLayout: {} };
    this.resetBinds();
  }
}
