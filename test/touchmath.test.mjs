// The pure maths of the touch controls: stick, dragging base, look, detection.
import assert from 'node:assert/strict';
import { stickVector, stickSprints, dragBase, lookDelta, detectTouch, cleanLayout, clampCenter, LAYOUT_BUTTONS, STICK_RADIUS, STICK_DEADZONE, LOOK_BOOST } from '../src/js/touchmath.js';

let n = 0;
const t = (name, fn) => { fn(); n++; };
const close = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);

t('a thumb at rest does nothing', () => {
  assert.deepEqual(stickVector(0, 0), { strafe: 0, forward: 0, mag: 0, edge: false });
  const v = stickVector(2, -2);
  assert.equal(v.mag, 0); assert.equal(v.forward, 0); assert.equal(v.strafe, 0);
});

t('up is forward, right is strafe right', () => {
  const up = stickVector(0, -STICK_RADIUS * 0.6);
  assert.ok(up.forward > 0 && Math.abs(up.strafe) < 1e-9);
  const right = stickVector(STICK_RADIUS * 0.6, 0);
  assert.ok(right.strafe > 0 && Math.abs(right.forward) < 1e-9);
  assert.ok(stickVector(0, 30).forward < 0, 'down is backwards');
  assert.ok(stickVector(-30, 0).strafe < 0, 'left is left');
});

t('strength grows smoothly from the dead zone to the rim and never exceeds 1', () => {
  let last = 0;
  for (let px = 0; px <= STICK_RADIUS * 3; px += 2) {
    const v = stickVector(0, -px);
    assert.ok(v.mag >= last - 1e-12, 'monotonic');
    assert.ok(v.mag <= 1 + 1e-12);
    assert.ok(Math.hypot(v.strafe, v.forward) <= 1 + 1e-9);
    last = v.mag;
  }
  close(stickVector(0, -STICK_RADIUS * 5).mag, 1);
  close(stickVector(0, -STICK_RADIUS * STICK_DEADZONE).mag, 0);
});

t('diagonals are not faster than straight lines', () => {
  const v = stickVector(100, -100);
  close(Math.hypot(v.strafe, v.forward), 1);
});

t('sprinting needs the rim and a forward push', () => {
  assert.equal(stickSprints(stickVector(0, -STICK_RADIUS * 0.5)), false);
  assert.equal(stickSprints(stickVector(0, -STICK_RADIUS)), true);
  assert.equal(stickSprints(stickVector(STICK_RADIUS, 0)), false, 'sideways at the rim does not sprint');
  assert.equal(stickSprints(stickVector(0, STICK_RADIUS)), false, 'backwards does not sprint');
});

t('the stick base follows a thumb that goes past the rim', () => {
  const base = { x: 100, y: 100 };
  assert.deepEqual(dragBase(base, { x: 100 + STICK_RADIUS - 1, y: 100 }), base);
  const moved = dragBase(base, { x: 100 + STICK_RADIUS + 40, y: 100 });
  close(moved.x, 140); close(moved.y, 100);
  const after = stickVector(100 + STICK_RADIUS + 40 - moved.x, 0);
  assert.ok(after.edge, 'the thumb stays on the rim');
});

t('look: dragging right turns right (yaw falls like a mouse), dragging up looks up', () => {
  const r = lookDelta(10, 0, 0.002);
  assert.ok(r.yaw < 0 && r.pitch === 0 || Object.is(r.pitch, -0));
  close(r.yaw, -10 * 0.002 * LOOK_BOOST);
  assert.ok(lookDelta(0, -10, 0.002).pitch > 0);
  assert.ok(lookDelta(0, -10, 0.002, true).pitch < 0, 'invert flips it');
});

t('detecting a touch device', () => {
  assert.equal(detectTouch({ coarse: true }), true);
  assert.equal(detectTouch({ coarse: false }), false);
  assert.equal(detectTouch({}), false);
  assert.equal(detectTouch({ coarse: false, search: '?touch' }), true);
  assert.equal(detectTouch({ coarse: true, search: '?desktop' }), false);
  assert.equal(detectTouch({ coarse: true, search: '?world=abc' }), true);
});

t('a saved layout keeps only known buttons and sane numbers', () => {
  assert.deepEqual(cleanLayout(null), {});
  assert.deepEqual(cleanLayout('junk'), {});
  const l = cleanLayout({ attack: { x: 0.3, y: 0.4 }, jump: { x: 5, y: -2 }, bogus: { x: 0.5, y: 0.5 }, use: { x: 'a', y: 1 }, fly: null });
  assert.deepEqual(l, { attack: { x: 0.3, y: 0.4 }, jump: { x: 1, y: 0 } });
  assert.deepEqual(cleanLayout({ off: { x: 0.5, y: 0.5 } }), {}, 'the removed Torch button is forgotten');
  for (const n of ['stick', 'attack', 'use', 'jump', 'fly', 'sprint', 'crouch', 'menu']) assert.ok(LAYOUT_BUTTONS.includes(n), n);
  assert.ok(!LAYOUT_BUTTONS.includes('inv'), 'the loot bag is part of the hotbar and cannot be moved');
  assert.deepEqual(cleanLayout({ inv: { x: 0.5, y: 0.5 }, stick: { x: 0.2, y: 0.8 } }), { stick: { x: 0.2, y: 0.8 } }, 'a saved position for the old Bag button is dropped');
});

t('a dragged button always stays fully on screen', () => {
  const c = clampCenter(-50, 9999, 60, 60, 800, 400);
  assert.ok(c.x >= (30 + 4) / 800 - 1e-12 && c.y <= 1 - (30 + 4) / 400 + 1e-12, JSON.stringify(c));
  assert.deepEqual(clampCenter(400, 200, 60, 60, 800, 400), { x: 0.5, y: 0.5 });
  const big = clampCenter(1, 1, 5000, 5000, 800, 400); // wider than the screen: centred, not NaN
  assert.deepEqual(big, { x: 0.5, y: 0.5 });
});

console.log(`touchmath: ${n} checks passed`);
