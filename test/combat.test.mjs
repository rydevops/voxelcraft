// Fighting and swimming rules: air under water, weapon damage, armor, experience.
import assert from 'node:assert/strict';
import { tickBreath, MAX_AIR, weaponDamage, attackWear, xpLevel, reduceDamage } from '../src/js/survival.js';
import { toolOf, I } from '../src/js/items.js';
import { REG } from '../src/js/registry.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

t('air lasts a while under water, refills on the surface, and drowning hurts every second once it is gone', () => {
  const s = { air: MAX_AIR };
  assert.equal(tickBreath(s, 5, false), 0);
  assert.equal(s.air, MAX_AIR, 'full on dry land');
  let damage = 0, t0 = 0;
  while (s.air > 0 && t0 < 100) { damage += tickBreath(s, 0.1, true); t0 += 0.1; }
  assert.ok(Math.abs(t0 - MAX_AIR / REG.game.breath.drainPerSecond) < 0.3, `about ${MAX_AIR} s of air (${t0.toFixed(1)})`);
  assert.equal(damage, 0, 'no damage while there is air');
  for (let i = 0; i < 25; i++) damage += tickBreath(s, 0.1, true); // 2.5 s with no air
  assert.equal(damage, 2 * REG.game.breath.drownDamage, 'drowning: damage at 1 s and 2 s');
  const low = s.air;
  tickBreath(s, 0.5, false);
  assert.ok(s.air > low + 3, 'coming up refills quickly');
  assert.equal(tickBreath(s, 0.5, false), 0);
});

t('better weapons hit harder: fist < pickaxe < axe < sword, and iron beats wood', () => {
  const dmg = (id) => weaponDamage(toolOf(id));
  assert.equal(weaponDamage(null), REG.game.combat.handDamage);
  assert.ok(dmg(I.WOOD_SWORD) > dmg(I.WOOD_AXE) && dmg(I.WOOD_AXE) > dmg(I.WOOD_PICKAXE) && dmg(I.WOOD_PICKAXE) > weaponDamage(null));
  assert.ok(dmg(I.IRON_SWORD) > dmg(I.STONE_SWORD) && dmg(I.STONE_SWORD) > dmg(I.WOOD_SWORD));
  assert.ok(dmg(I.IRON_HAMMER) > dmg(I.IRON_SWORD) || dmg(I.IRON_HAMMER) >= 5, 'a hammer is heavy');
  assert.equal(attackWear(toolOf(I.IRON_SWORD)), 1);
  assert.equal(attackWear(toolOf(I.IRON_AXE)), 2);
  assert.equal(attackWear(null), 0);
});

t('armor takes damage off every hit, but a blow that lands still hurts', () => {
  assert.equal(reduceDamage(3, 0), 3);
  assert.ok(reduceDamage(10, 15) < reduceDamage(10, 5) && reduceDamage(10, 5) < 10);
  assert.ok(reduceDamage(1, 20) >= 1, 'never below one');
});

t('experience: each level takes a little longer', () => {
  const per = REG.game.xp.perLevel;
  assert.deepEqual(xpLevel(0), { level: 0, into: 0, need: per });
  assert.equal(xpLevel(per).level, 1);
  assert.equal(xpLevel(per - 1).level, 0);
  assert.equal(xpLevel(per + per * 2).level, 2);
  assert.equal(xpLevel(per * 3 + 5).level, 2);
  assert.ok(xpLevel(per * 6).level === 3);
});

console.log(`combat: ${n} checks passed`);
