// How much daylight there is (0 = deep night, 1 = full day) for a time of day t (0 = sunrise, .25 = noon, .5 = sunset, .75 = midnight).
// The same curve the sky uses for its colours, so "it is dark" means the same thing to the sky, the monsters and the beds.
const smooth = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
export const sunHeight = (t) => Math.sin(t * Math.PI * 2);
export const dayAmount = (t) => smooth(-0.1, 0.26, sunHeight(t));
// The share of sky light a creature feels: a little even at night (moonlight), all of it at noon. Storms dim it further (`dark` 0-1).
export const daylight = (t, dark = 0) => (0.2 + 0.8 * dayAmount(t)) * (1 - 0.5 * dark);
export const isDay = (t) => ((t % 1) + 1) % 1 < 0.5; // sunrise to sunset
