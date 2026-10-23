// Hunger and healing rules, as pure functions so they can be tested without the game running
// (tuning is in game.json "hunger").
//
//  food        the hunger bar, 0-20 points (2 points = one icon)
//  saturation  a hidden reserve that eating tops up (capped at maxSaturation and, when you eat, at the food you then have).
//              It only goes down when it is spent on healing: hunger draining from walking or sprinting never touches it.
//              It is what heals you: once the hunger bar is full, healing spends saturation, one half-heart at a time.
//              When that reserve runs dry half an icon of hunger disappears, and healing stops until you eat again.
//              An empty reserve on its own never drains the hunger bar.
import { REG } from './registry.js';

const H = REG.game.hunger;
const MAX_FOOD = REG.game.player.maxFood;

// Too hungry to sprint once the bar is at or below this many points (6 points = 3 icons)
export const canSprint = (food) => food > H.noSprintAtOrBelow;
export const isStarving = (food) => food <= 0;
// Damage after armor: each armor point takes armorReduction (4%) off, up to maxArmor points. A hit that got through at all
// still does at least 1. Used for falls; starvation ignores armor.
const EQ = REG.game.equipment;
export function reduceDamage(amount, armorPoints) {
  if (amount <= 0) return 0;
  const reduced = amount * (1 - Math.min(EQ.maxArmor, armorPoints) * EQ.armorReduction);
  return Math.max(1, Math.round(reduced));
}

// Damage from landing after falling `dist` blocks: nothing under safeDistance (4), then 1 point (half a heart) for the
// fourth block and 1 more per extra block. (Armor is applied on top, by reduceDamage.)
export function fallDamage(dist) {
  const F = REG.game.fall;
  if (dist < F.safeDistance - F.tolerance) return 0; // (a 4-block drop measures a hair under 4.0)
  return Math.max(0, Math.floor(dist - F.damageOffset + F.tolerance));
}

// Food a single jump costs (jumping while sprinting costs more)
export const jumpCost = (sprinting) => (sprinting ? H.sprintJumpCost : H.jumpCost);

// The bar counts as full while all ten icons are drawn full (walking drains it a hair at a time)
export const barFull = (food) => food > MAX_FOOD - 1;

// Eat something worth `foodPoints` of hunger and `saturationPoints` of saturation. `s` = { food, saturation } is updated in place.
export function eat(s, foodPoints, saturationPoints) {
  s.food = Math.min(MAX_FOOD, s.food + foodPoints);
  s.saturation = Math.min(H.maxSaturation, s.food, (s.saturation ?? 0) + saturationPoints);
}

// Advance the hunger state by dt seconds. `s` = { food, saturation, health, regenTimer, starveTimer } is updated in place.
// Standing still costs nothing; walking costs a little, sprinting and mining more (and each jump, see jumpCost).
// At zero food you lose starveDamage health every starveEverySeconds, and it can kill you.
// Returns { healed, starved } where starved is the damage to apply now (0 = none).
export function tickHunger(s, dt, { moving, sprinting, mining = false, maxHealth }) {
  const out = { healed: false, starved: 0 };
  s.saturation = s.saturation ?? 0;

  // healing: a full hunger bar, something in the reserve and some health to win back
  if (barFull(s.food) && s.saturation > 0 && s.health < maxHealth) {
    s.regenTimer += dt;
    if (s.regenTimer >= H.healEverySeconds) {
      s.regenTimer = 0;
      s.health = Math.min(maxHealth, s.health + 1);
      s.saturation -= H.saturationPerHeal;
      out.healed = true;
      if (s.saturation <= 0) { // the reserve ran dry: half an icon goes, and the bar is no longer full
        s.saturation = 0;
        s.food = Math.max(0, s.food - H.emptySaturationCost);
      }
    }
  } else s.regenTimer = 0;

  if (isStarving(s.food)) {
    s.starveTimer += dt;
    if (s.starveTimer >= H.starveEverySeconds) { s.starveTimer = 0; out.starved = H.starveDamage; }
  } else s.starveTimer = 0;

  if (moving) s.food = Math.max(0, s.food - dt * (H.drainPerSecond + (sprinting ? H.sprintDrainPerSecond : 0)));
  if (mining) s.food = Math.max(0, s.food - dt * H.miningDrainPerSecond); // working at a block, even while standing still
  // (saturation is left alone here: walking, sprinting and mining only ever cost food. The reserve is spent on nothing but healing.)
  return out;
}

// ---- air under water -----------------------------------------------------------------------------
// While your head is under water the air runs out (game.json "breath"); when it is gone you take drowning damage every second.
// Come up and it fills again, quickly. `s` = { air, drownTimer } is updated in place; returns the damage to apply now (0 = none).
const BR = REG.game.breath;
export const MAX_AIR = BR.max;
export function tickBreath(s, dt, submerged) {
  s.air = s.air ?? MAX_AIR;
  s.drownTimer = s.drownTimer ?? 0;
  if (!submerged) {
    s.air = Math.min(MAX_AIR, s.air + dt * BR.refillPerSecond);
    s.drownTimer = 0;
    return 0;
  }
  if (s.air > 0) { s.air = Math.max(0, s.air - dt * BR.drainPerSecond); s.drownTimer = 0; return 0; }
  s.drownTimer += dt;
  if (s.drownTimer >= BR.drownEverySeconds) { s.drownTimer = 0; return BR.drownDamage; }
  return 0;
}

// ---- fighting -----------------------------------------------------------------------------------
// Damage one blow of a held item does: the weapon's own (swords hit hardest) plus a bonus for the metal it is made of; bare hands do handDamage.
const C = REG.game.combat;
export function weaponDamage(tool) {
  if (!tool) return C.handDamage;
  const base = C.weapons[tool.type];
  if (base == null) return C.handDamage;
  return base + (C.tierBonus[tool.name] ?? 0);
}
// How many uses a tool loses hitting something: swords 1, anything else 2 (see combat.weaponWear)
export const attackWear = (tool) => (tool ? C.weaponWear?.[tool.type] ?? 2 : 0);

// ---- experience ---------------------------------------------------------------------------------
// Level n needs perLevel * n points to reach level n + 1, so each level takes a little longer. Returns { level, into, need }.
export function xpLevel(xp) {
  const per = REG.game.xp.perLevel;
  let level = 0, left = Math.max(0, xp);
  while (left >= per * (level + 1)) { left -= per * (level + 1); level++; }
  return { level, into: left, need: per * (level + 1) };
}
