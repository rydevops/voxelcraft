// Hunger rules, sprinting limits, starvation, crouching, and the minimap's water colours. Run with: npm test
import assert from 'node:assert/strict';
import { B } from '../src/js/blocks.js';
import { REG } from '../src/js/registry.js';
import { World, CS, idx } from '../src/js/world.js';
import { Player } from '../src/js/player.js';
import { canSprint, isStarving, tickHunger, eat, barFull, fallDamage, jumpCost } from '../src/js/survival.js';
import { foodValue, saturationValue, I } from '../src/js/items.js';
import { ACTIONS, Settings } from '../src/js/settings.js';
import { MinimapData } from '../src/js/minimap.js';

const H = REG.game.hunger;
const state = (food, health = 20, saturation = 0) => ({ food, saturation, health, regenTimer: 0, starveTimer: 0 });
const run = (s, seconds, ctx, dt = 0.1) => {
  let damage = 0;
  for (let t = 0; t < seconds - 1e-9; t += dt) damage += tickHunger(s, dt, { maxHealth: 20, ...ctx }).starved;
  return damage;
};

// ---- standing still costs nothing; walking and sprinting do ----
{
  const s = state(15);
  run(s, 120, { moving: false, sprinting: false });
  assert.equal(s.food, 15, 'standing still for two minutes uses no food');
  run(s, 60, { moving: true, sprinting: false });
  assert.ok(Math.abs(s.food - (15 - 60 * H.drainPerSecond)) < 1e-6, 'walking drains it slowly');
  const before = s.food;
  run(s, 60, { moving: true, sprinting: true });
  assert.ok(before - s.food > 60 * H.drainPerSecond * 2, 'sprinting drains it faster');
}

// ---- sprinting, jumping and mining use food faster ----
{
  const per = (ctx, secs = 60) => { const s = state(20); run(s, secs, ctx); return (20 - s.food) / secs; };
  const walk = per({ moving: true, sprinting: false }), sprint = per({ moving: true, sprinting: true }), mine = per({ moving: false, sprinting: false, mining: true }), still = per({ moving: false, sprinting: false });
  assert.equal(still, 0, 'standing still: nothing');
  assert.ok(mine > 0, 'mining slowly drains the bar even if you stand still');
  assert.ok(mine < walk * 3, 'but only slowly (' + (mine * 60).toFixed(1) + ' points a minute)');
  assert.ok(sprint > walk * 3, 'sprinting drains it several times faster than walking (' + (sprint * 60).toFixed(1) + ' vs ' + (walk * 60).toFixed(1) + ' points a minute)');
  assert.ok(per({ moving: true, sprinting: true, mining: true }) > sprint, 'and the costs add up');
  assert.ok(jumpCost(false) > 0, 'jumping costs a little');
  assert.ok(jumpCost(true) > jumpCost(false), 'jumping while sprinting costs more');
  // a minute of bunny-hopping (about 70 sprint jumps) is a noticeable chunk of the bar, not a rounding error
  assert.ok(70 * jumpCost(true) >= 3, 'hopping around adds up');
}

// ---- falling: hurts from 4 blocks ----
{
  assert.equal(fallDamage(0), 0);
  assert.equal(fallDamage(3), 0, 'a 3-block drop is fine now');
  assert.equal(fallDamage(3.5), 0);
  assert.equal(fallDamage(4 - 0.02), 1, 'a 4-block drop measures a hair under 4 and costs half a heart');
  assert.equal(fallDamage(5), 2);
  assert.equal(fallDamage(10), 7);
  assert.equal(fallDamage(25), 22);
}

// ---- no sprinting when the bar is at 3 icons (6 points) or below ----
assert.ok(canSprint(20) && canSprint(7) && canSprint(6.5));
assert.ok(!canSprint(6) && !canSprint(3) && !canSprint(0));
assert.ok(!isStarving(1) && isStarving(0));

// ---- starving: half a heart every 15 seconds, and it can kill ----
{
  assert.equal(H.starveEverySeconds, 15);
  assert.equal(H.starveDamage, 1, 'one point is half a heart');
  const s = state(0, 20);
  assert.equal(run(s, 14, { moving: false }), 0, 'nothing in the first 14 seconds');
  assert.equal(run(s, 1.1, { moving: false }), 1, 'then half a heart');
  assert.equal(run(s, 31, { moving: false }), 2, 'and again every 15 seconds');
  // a full bar of 10 hearts is 20 points: 20 ticks of 15 s
  const t = state(0, 20);
  assert.equal(run(t, 310, { moving: false }), 20, 'twenty bites take you from full health to dead, no stopping at half a heart');
  // eating before it bites resets the clock
  const u = state(0, 20);
  run(u, 10, { moving: false });
  u.food = 6;
  run(u, 20, { moving: false });
  assert.equal(u.starveTimer, 0, 'the clock only runs at zero food');
}

// ---- saturation: eating fills a reserve that heals you once the hunger bar is full ----
{
  assert.ok(foodValue(I.BREAD) > 0 && saturationValue(I.BREAD) > 0 && saturationValue(I.APPLE) > 0, 'food items have saturation');
  assert.ok(saturationValue(I.BREAD) > saturationValue(I.APPLE), 'bread is more filling');
  const e = { food: 10, saturation: 0 };
  eat(e, 6, 7.2);
  assert.equal(e.food, 16);
  assert.equal(e.saturation, 7.2, 'eating adds saturation');
  eat(e, 6, 7.2);
  assert.equal(e.food, 20, 'the bar caps at full');
  assert.ok(e.saturation <= 14.4 + 1e-9 && e.saturation <= e.food);
  eat(e, 6, 100);
  assert.equal(e.saturation, H.maxSaturation, 'and saturation caps out too');
  const low = { food: 4, saturation: 0 };
  eat(low, 2, 50);
  assert.equal(low.saturation, 6, 'saturation can never be more than the food you have');

  assert.ok(barFull(20) && barFull(19.98) && !barFull(19) && !barFull(15));

  // no healing while the bar is not full, however much saturation there is
  const hungry = state(15, 10, 10);
  run(hungry, 60, { moving: false, sprinting: false });
  assert.equal(hungry.health, 10, 'a bar that is not full does not heal you');
  assert.equal(hungry.food, 15);
  assert.equal(hungry.saturation, 10, 'and saturation is left alone');

  // full bar + saturation: heal half a heart at a time, spending saturation
  const s1 = state(20, 10, 6);
  run(s1, H.healEverySeconds * 3 + 0.2, { moving: false, sprinting: false });
  assert.equal(s1.health, 13, 'three half-hearts');
  assert.equal(s1.saturation, 6 - 3 * H.saturationPerHeal, 'each one cost saturation');
  assert.equal(s1.food, 20, 'hunger untouched while there is still saturation');

  // run the reserve dry: half an icon of hunger goes, and healing stops
  const s2 = state(20, 5, 2);
  run(s2, 60, { moving: false, sprinting: false });
  assert.equal(s2.health, 5 + 2 / H.saturationPerHeal, 'healed once per unit of saturation');
  assert.equal(s2.saturation, 0);
  assert.equal(s2.food, 20 - H.emptySaturationCost, 'half an icon of hunger paid when the reserve ran dry');
  const before = s2.health;
  run(s2, 120, { moving: false, sprinting: false });
  assert.equal(s2.health, before, 'no more healing with no saturation');
  assert.equal(s2.food, 20 - H.emptySaturationCost, 'and an empty reserve does not drain the hunger bar');

  // already at full health: nothing is spent
  const s3 = state(20, 20, 8);
  run(s3, 60, { moving: false, sprinting: false });
  assert.equal(s3.saturation, 8);
  assert.equal(s3.food, 20);

  // saturation never exceeds food as food drops while walking
  const s4 = state(20, 20, 20);
  run(s4, 100, { moving: true, sprinting: true });
  assert.ok(s4.saturation <= s4.food + 1e-9);
  // eating bread to full and then being hurt: a few seconds of healing, not an endless supply
  const meal = { food: 18, saturation: 0 };
  eat(meal, foodValue(I.BREAD), saturationValue(I.BREAD));
  const hurt = { ...state(meal.food, 10, meal.saturation) };
  run(hurt, 120, { moving: false, sprinting: false });
  assert.ok(hurt.health > 10 && hurt.health < 20, 'one loaf heals a few hearts, then runs out (' + hurt.health + ')');
}

// ---- keys: Tab sprints, Shift crouches; old saved settings move over ----
{
  const act = Object.fromEntries(ACTIONS.map((a) => [a.id, a.key]));
  assert.equal(act.sprint, 'Tab');
  assert.equal(act.crouch, 'ShiftLeft');
  globalThis.localStorage = { getItem: () => JSON.stringify({ values: {}, binds: { sprint: 'ShiftLeft', forward: 'KeyW' } }), setItem() {} };
  const old = new Settings();
  assert.equal(old.key('sprint'), 'Tab', 'a saved "sprint = Shift" becomes Tab so Shift can crouch');
  assert.equal(old.key('crouch'), 'ShiftLeft');
  globalThis.localStorage = { getItem: () => JSON.stringify({ values: {}, binds: { sprint: 'KeyR', crouch: 'KeyZ' } }), setItem() {} };
  const custom = new Settings();
  assert.equal(custom.key('sprint'), 'KeyR', 'custom bindings are kept');
  assert.equal(custom.key('crouch'), 'KeyZ');
  delete globalThis.localStorage;
}

// ---- crouching ----
const G = 30;
function flat() {
  const w = new World(5);
  for (let cx = -1; cx <= 1; cx++) for (let cz = -1; cz <= 1; cz++) {
    const c = w.generateChunk(cx, cz);
    c.data.fill(0);
    c.plants.clear();
    for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
  }
  return w;
}
const idle = { forward: false, back: false, left: false, right: false, jump: false, sprint: false, crouch: false, down: false };
function settle(p, input = idle, seconds = 0.5) { for (let t = 0; t < seconds; t += 1 / 60) p.update(1 / 60, input); }
{
  const w = flat();
  const p = new Player(w);
  p.pos = { x: 4.5, y: G + 1, z: 4.5 };
  settle(p);
  const standingEye = p.eye.y - p.pos.y;
  settle(p, { ...idle, crouch: true });
  assert.ok(p.crouching);
  assert.ok(p.eye.y - p.pos.y < standingEye - 0.25, 'the eyes drop when crouching');
  assert.ok(p.height < 1.8);
  settle(p);
  assert.ok(!p.crouching, 'letting go stands you up');
  assert.ok(Math.abs(p.eye.y - p.pos.y - standingEye) < 0.01);

  // speed
  const walk = new Player(w); walk.pos = { x: 2.5, y: G + 1, z: 12.5 }; walk.yaw = -Math.PI / 2; // facing +x
  const sneak = new Player(w); sneak.pos = { x: 2.5, y: G + 1, z: 2.5 }; sneak.yaw = -Math.PI / 2;
  settle(walk, { ...idle, forward: true }, 1);
  settle(sneak, { ...idle, forward: true, crouch: true }, 1);
  assert.ok(sneak.pos.x - 2.5 < (walk.pos.x - 2.5) * 0.5, 'crouch-walking is much slower');

  // sprint is ignored while crouching
  const fast = new Player(w); fast.pos = { x: 2.5, y: G + 1, z: 6.5 }; fast.yaw = -Math.PI / 2;
  settle(fast, { ...idle, forward: true, crouch: true, sprint: true }, 1);
  assert.ok(Math.abs(fast.pos.x - sneak.pos.x) < 0.2, 'no sprinting while crouched');
}
{ // you cannot walk off a ledge while crouching, but you can standing
  const w = flat();
  for (let x = 9; x < 16; x++) for (let z = 0; z < CS; z++) { w.setBlock(x, G, z, B.AIR); w.setBlock(x, G - 1, z, B.AIR); } // a drop from x=9 on
  const edge = (crouch) => {
    const p = new Player(w);
    p.pos = { x: 6.5, y: G + 1, z: 6.5 };
    p.yaw = -Math.PI / 2; // +x
    settle(p, idle, 0.3);
    settle(p, { ...idle, forward: true, crouch }, 2.5);
    return p;
  };
  const careful = edge(true);
  assert.ok(careful.pos.x < 9.3 && careful.pos.y >= G + 1 - 0.01, 'crouching stops at the edge (x=' + careful.pos.x.toFixed(2) + ')');
  const brave = edge(false);
  assert.ok(brave.pos.y < G + 0.5 || brave.pos.x > 9.4, 'walking normally goes over');
}
// ---- minimap water: light blue shallow, dark blue deep ----
{
  const w = flat();
  const colors = { [B.GRASS]: [80, 160, 60], [B.STONE]: [120, 120, 125], [B.WATER]: [40, 100, 210], [B.DIRT]: [130, 95, 65] };
  const map = new MinimapData(w, (id) => colors[id] ?? [90, 90, 90]);
  for (let x = -6; x <= -3; x++) for (let z = -6; z <= -3; z++) { w.setBlock(x, G, z, B.WATER); }       // 1 deep (the grass block became water)
  for (let x = -6; x <= -5; x++) for (let z = -6; z <= -3; z++) for (let y = G - 8; y < G; y++) w.setBlock(x, y, z, B.WATER); // a deep end
  const px = map.render(-4, -4, 3);
  const at = (x, z) => { const i = ((z + 4 + 3) * 7 + (x + 4 + 3)) * 4; return [px[i], px[i + 1], px[i + 2]]; };
  const shallow = at(-3, -4), deep = at(-6, -4);
  assert.ok(shallow[2] > 200 && shallow[1] > 150 && shallow[0] > 90, 'shallow water is a light blue: ' + shallow.map(Math.round));
  assert.ok(deep[2] > deep[1] && deep[2] > deep[0] && deep[2] < 160 && deep[0] < 40 && deep[1] < 70, 'deep water is a dark blue: ' + deep.map(Math.round));
  assert.ok(deep[0] + deep[1] + deep[2] < (shallow[0] + shallow[1] + shallow[2]) * 0.5, 'much darker');
}

console.log('all survival tests passed');
