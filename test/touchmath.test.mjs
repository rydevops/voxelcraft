// The pure maths of the touch controls: stick, dragging base, look, detection.
import assert from 'node:assert/strict';
import { stickVector, stickSprints, dragBase, lookDelta, detectTouch, STICK_RADIUS, STICK_DEADZONE, LOOK_BOOST } from '../src/js/touchmath.js';

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

console.log(`touchmath: ${n} checks passed`);
