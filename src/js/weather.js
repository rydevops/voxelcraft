// The weather: spells of rain, thunderstorms, snow, blizzards, sandstorms and now and then a hurricane. Which spell it is at any moment is a pure
// function of the world's seed and the game time (so it is the same every time you come back and nothing has to be saved), and what you
// actually get depends on where you stand: rain in a cold biome is snow, a storm over the desert is a sandstorm, a hurricane only blows at sea
// (inland it is just a very bad storm). The events themselves are data: weather.json.
import { REG } from './registry.js';
import { hash2 } from './noise.js';

const W = REG.weather;
export const EVENTS = W.events;
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// The spell going on at game time `day` (days since the start, fractions allowed): { key, intensity 0-1, spell (its number) }.
// A spell eases in over the first sixth of its length and out over the last sixth, so rain never starts with a bang.
export function spellAt(seed, day) {
  const spell = Math.floor(day / W.periodDays);
  const t = day / W.periodDays - spell;
  const ok = Object.values(EVENTS).filter((e) => e.weight > 0 && day >= e.minDay);
  let r = hash2(spell, 7, seed + 31) * ok.reduce((s, e) => s + e.weight, 0), key = 'clear';
  for (const e of ok) { if (r < e.weight) { key = e.key; break; } r -= e.weight; }
  const intensity = Math.min(smooth(0, 1 / 6, t), 1 - smooth(5 / 6, 1, t));
  return { key, intensity, spell };
}

// What it means where you are. climate: 'cold' | 'hot' | 'temperate' | 'ocean' | 'coast' (World.biomeInfo). Returns the event key that applies.
export function eventFor(key, climate) {
  let e = EVENTS[key] ?? EVENTS.clear;
  if (e.climates && !e.climates.includes(climate)) e = EVENTS[e.fallback] ?? EVENTS.rain;
  if (climate === 'cold' && e.cold) e = EVENTS[e.cold];
  else if (climate === 'hot' && e.hot) e = EVENTS[e.hot];
  return e.key;
}

// The weather to show: the event for this place, scaled by how far into the spell we are. A number of 0-1 for each effect.
export function weatherNow(seed, day, climate) {
  const s = spellAt(seed, day);
  const e = EVENTS[eventFor(s.key, climate)];
  const k = s.intensity;
  return {
    key: e.key, label: e.label, intensity: k, wet: e.wet && k > 0.3, particles: k > 0.05 ? e.particles : null, sound: e.sound,
    density: e.density * k, darkness: e.darkness * k, wind: e.wind * k, fog: 1 - (1 - e.fog) * k, lightning: e.lightning * k, speed: 1 - (1 - e.speed) * k,
  };
}
