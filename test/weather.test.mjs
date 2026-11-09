// Weather: the same every time for a world, eased in and out, turned into what the place allows (snow in the cold, sandstorms in the desert,
// hurricanes only at sea), and not too much of it.
import assert from 'node:assert/strict';
import { spellAt, eventFor, weatherNow, EVENTS } from '../src/js/weather.js';
import { REG } from '../src/js/registry.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const P = REG.weather.periodDays;

t('the weather of a world is the same every time, and differs between worlds', () => {
  for (const d of [0, 0.3, 1.7, 12.2, 80.9]) assert.deepEqual(spellAt(7, d), spellAt(7, d));
  let different = 0;
  for (let i = 0; i < 60; i++) if (spellAt(1, i * P).key !== spellAt(2, i * P).key) different++;
  assert.ok(different > 10, 'another seed, another weather (' + different + ')');
});

t('a spell eases in and out, so rain never starts with a bang', () => {
  for (let spell = 0; spell < 40; spell++) {
    const at = (f) => spellAt(3, (spell + f) * P).intensity;
    assert.ok(at(0.001) < 0.05 && at(0.999) < 0.05, 'nothing at the very edges');
    assert.ok(at(0.5) > 0.99, 'full in the middle');
    assert.ok(at(0.08) > at(0.02) && at(0.98) < at(0.9), 'rising then falling');
  }
});

t('over a long time: mostly fair, plenty of rain, storms rare, hurricanes rarer, none before their day', () => {
  const count = {};
  for (let i = 0; i < 4000; i++) { const s = spellAt(11, 5 + i * P); count[s.key] = (count[s.key] || 0) + 1; }
  const frac = (k) => (count[k] || 0) / 4000;
  assert.ok(frac('clear') > 0.35 && frac('clear') < 0.65, 'clear ' + frac('clear'));
  assert.ok(frac('rain') > 0.12 && frac('rain') < 0.3, 'rain ' + frac('rain'));
  assert.ok(frac('storm') > 0.03 && frac('storm') < 0.14, 'storm ' + frac('storm'));
  assert.ok(frac('hurricane') > 0 && frac('hurricane') < 0.04, 'hurricane ' + frac('hurricane'));
  for (let i = 0; i < 400; i++) assert.notEqual(spellAt(11, i * P * 0.99 % (EVENTS.hurricane.minDay)).key, 'hurricane', 'not before its day');
  assert.ok(!('snow' in count) && !('blizzard' in count) && !('sandstorm' in count), 'those only come from rain and storms in the right place');
});

t('rain is snow in the cold, a storm is a blizzard in the cold and a sandstorm in the heat, a hurricane stays at sea', () => {
  assert.equal(eventFor('rain', 'temperate'), 'rain');
  assert.equal(eventFor('rain', 'cold'), 'snow');
  assert.equal(eventFor('rain', 'hot'), 'clear', 'it does not rain on the desert');
  assert.equal(eventFor('storm', 'cold'), 'blizzard');
  assert.equal(eventFor('storm', 'hot'), 'sandstorm');
  assert.equal(eventFor('hurricane', 'ocean'), 'hurricane');
  assert.equal(eventFor('hurricane', 'coast'), 'hurricane');
  assert.equal(eventFor('hurricane', 'temperate'), 'storm', 'inland it is only a storm');
  assert.equal(eventFor('hurricane', 'cold'), 'blizzard');
  assert.equal(eventFor('clear', 'cold'), 'clear');
  for (const k of Object.keys(EVENTS)) for (const c of ['cold', 'hot', 'temperate', 'ocean', 'coast']) assert.ok(EVENTS[eventFor(k, c)], `${k} in ${c} is a real event`);
});

t('weatherNow: effects scale with intensity; storms are darker, windier and foggier than rain; lightning only in storms', () => {
  const rain = EVENTS.rain, storm = EVENTS.storm, hurricane = EVENTS.hurricane;
  assert.ok(storm.darkness > rain.darkness && storm.wind > rain.wind && storm.fog < rain.fog && storm.density > rain.density);
  assert.ok(hurricane.wind > storm.wind && hurricane.lightning > storm.lightning && hurricane.fog <= storm.fog);
  assert.equal(rain.lightning, 0);
  assert.ok(storm.lightning > 0);
  // find a stormy and a clear moment and look at what they give
  let stormy = null, clear = null;
  for (let i = 0; i < 400 && !(stormy && clear); i++) { const s = spellAt(5, 3 + i * P + P / 2); if (s.key === 'storm') stormy = 3 + i * P + P / 2; if (s.key === 'clear') clear = 3 + i * P + P / 2; }
  const w = weatherNow(5, stormy, 'temperate'), c = weatherNow(5, clear, 'temperate');
  assert.equal(w.key, 'storm'); assert.ok(w.darkness > 0.4 && w.particles === 'rain' && w.lightning > 3 && w.wet);
  assert.equal(c.particles, null); assert.equal(c.darkness, 0); assert.equal(c.fog, 1);
  const snowy = weatherNow(5, stormy, 'cold');
  assert.equal(snowy.key, 'blizzard'); assert.equal(snowy.particles, 'snow');
});

console.log(`weather: ${n} checks passed`);
