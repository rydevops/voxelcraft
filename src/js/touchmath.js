// The numbers behind the touch controls (no DOM in here, so it can be tested in Node).

export const STICK_RADIUS = 56;     // px the thumb can pull the stick before its base starts to follow
export const STICK_DEADZONE = 0.14; // fraction of the radius that is ignored (a resting thumb should not creep)
export const SPRINT_EDGE = 0.94;    // pushing the stick (almost) to its rim, forward, makes you sprint
export const LOOK_BOOST = 1.7;      // a thumb drag turns further than the same mouse movement: fingers move less than wrists

// Which way is the thumb pulling? dx, dy are pixels from the stick's centre (screen y grows downwards).
// Returns strafe (+1 = right), forward (+1 = ahead), the strength 0..1 (after the dead zone) and whether it is at the rim.
export function stickVector(dx, dy, radius = STICK_RADIUS, deadzone = STICK_DEADZONE) {
  const raw = Math.hypot(dx, dy) / radius;
  if (!(raw > 0)) return { strafe: 0, forward: 0, mag: 0, edge: false };
  const clamped = Math.min(1, raw);
  const ux = dx / (raw * radius), uy = dy / (raw * radius);   // unit direction
  const mag = clamped <= deadzone ? 0 : (clamped - deadzone) / (1 - deadzone);
  return { strafe: ux * mag, forward: -uy * mag, mag, edge: raw >= SPRINT_EDGE };
}

// The stick wants sprinting when it is at the rim and at least a little forward
export const stickSprints = (v) => v.edge && v.forward > 0.3;

// When the thumb goes past the radius the base follows it, so the stick never "runs out": returns the new base position
export function dragBase(base, point, radius = STICK_RADIUS) {
  const dx = point.x - base.x, dy = point.y - base.y, d = Math.hypot(dx, dy);
  if (d <= radius) return { x: base.x, y: base.y };
  const k = (d - radius) / d;
  return { x: base.x + dx * k, y: base.y + dy * k };
}

// Turn a finger drag into yaw / pitch changes (radians). rate is radians per pixel, as for the mouse.
export function lookDelta(dx, dy, rate, invertY = false) {
  return { yaw: -dx * rate * LOOK_BOOST, pitch: -dy * rate * LOOK_BOOST * (invertY ? -1 : 1) };
}

// ---- where the player has put the buttons ----
// A layout maps a button name to the centre of the button as fractions of the screen ({ x: 0.9, y: 0.8 }), so it survives
// turning the phone or a different screen size. Anything missing keeps the button's built-in place.
export const LAYOUT_BUTTONS = ['attack', 'use', 'jump', 'fly', 'sprint', 'crouch', 'inv', 'menu'];

// Whatever came out of storage -> a layout with only known buttons and sane numbers
export function cleanLayout(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const name of LAYOUT_BUTTONS) {
    const p = raw[name];
    if (p && Number.isFinite(p.x) && Number.isFinite(p.y)) out[name] = { x: Math.min(1, Math.max(0, p.x)), y: Math.min(1, Math.max(0, p.y)) };
  }
  return out;
}

// A button dragged so its centre is at (cx, cy) px: keep the whole button on screen and return the centre as fractions
export function clampCenter(cx, cy, w, h, vw, vh, margin = 4) {
  const lo = (size, view) => Math.min(0.5, (size / 2 + margin) / view), hi = (size, view) => 1 - lo(size, view);
  return {
    x: Math.min(hi(w, vw), Math.max(lo(w, vw), cx / vw)),
    y: Math.min(hi(h, vh), Math.max(lo(h, vh), cy / vh)),
  };
}

// Should the touch controls be on? The primary pointer being coarse (a finger) means a phone or tablet; a laptop with a
// touch screen has a mouse as its primary pointer and keeps the desktop controls. ?touch and ?desktop force either.
export function detectTouch({ coarse = false, search = '' } = {}) {
  const q = new URLSearchParams(search);
  if (q.has('touch')) return true;
  if (q.has('desktop')) return false;
  return !!coarse;
}

// Same, reading the real browser (false when there is none, e.g. in Node)
export function browserWantsTouch() {
  if (typeof window === 'undefined') return false;
  return detectTouch({ coarse: !!window.matchMedia?.('(pointer: coarse)').matches, search: window.location.search });
}
