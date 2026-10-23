// The look of creatures and weather: models build for every species and move, and the weather effects run (rain only falls where there is sky).
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { World, CS, idx } from '../src/js/world.js';
import { B } from '../src/js/blocks.js';
import { Mob, SPECIES } from '../src/js/mobs.js';
import { createMobModels } from '../src/js/mobmodels.js';
import { createWeatherFx } from '../src/js/weatherfx.js';
import { weatherNow, EVENTS } from '../src/js/weather.js';
import { mulberry32 } from '../src/js/noise.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const G = 30;
function field() {
  const w = new World(1337, { terrain: 4 });
  for (let cx = -2; cx <= 2; cx++) for (let cz = -2; cz <= 2; cz++) {
    const c = w.generateChunk(cx, cz);
    c.data.fill(0); c.plants.clear();
    for (let y = 0; y < G; y++) for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, y, z)] = B.STONE;
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) c.data[idx(x, G, z)] = B.GRASS;
  }
  w.lighting.rebuildAll();
  return w;
}

t('every species gets a model made of boxes, which swings its legs when it walks, turns red when hurt and tips over when dead', () => {
  const w = field();
  const scene = new THREE.Scene();
  const models = createMobModels({ scene });
  const tint = new THREE.Color(1, 1, 1);
  const mobs = Object.keys(SPECIES).map((k, i) => new Mob(w, k, 5 + i * 3, G + 1, 5, mulberry32(i + 1)));
  models.update(mobs, [], [], tint, { x: 5, z: 5 }, 0);
  assert.equal(scene.children.length, mobs.length, 'one model each');
  for (const g of scene.children) { let meshes = 0; g.traverse((o) => { if (o.isMesh) meshes++; }); assert.ok(meshes >= 8, 'a handful of boxes: ' + meshes); }
  const cow = mobs[0], group = scene.children[0];
  cow.moving = true; cow.walkPhase = 1.2;
  models.update(mobs, [], [], tint, { x: 5, z: 5 }, 1);
  const legs = [];
  group.traverse((o) => { if (o.isMesh && Math.abs(o.rotation.x) > 0.1) legs.push(o); });
  assert.ok(legs.length >= 4, 'the cow\'s four legs swing');
  cow.hurt = 0.3;
  models.update(mobs, [], [], tint, { x: 5, z: 5 }, 2);
  let red = 0;
  group.traverse((o) => { if (o.isMesh && o.material.color.r > o.material.color.g * 1.5) red++; });
  assert.ok(red >= 4, 'hurt: red all over (' + red + ' boxes)');
  cow.hurt = 0; cow.dead = true; cow.deathTimer = 0.45;
  models.update(mobs, [], [], tint, { x: 5, z: 5 }, 3);
  assert.ok(Math.abs(group.rotation.z) > 0.5, 'tipping over');
  const sheep = mobs.find((m) => m.type === 'sheep'), sg = scene.children[mobs.indexOf(sheep)];
  const woolBoxes = () => { let v = 0; sg.traverse((o) => { if (o.isMesh && o.material.userData.base && o.visible) v++; }); return v; };
  const before = woolBoxes();
  sheep.sheared = true;
  models.update(mobs, [], [], tint, { x: 5, z: 5 }, 4);
  let wool = 0, hidden = 0;
  sg.traverse((o) => { if (o.isMesh && !o.visible) hidden++; if (o.isMesh && o.visible) wool++; });
  assert.ok(hidden >= 2, 'a sheared sheep loses its wool (' + hidden + ' hidden)');
  assert.ok(before > 0 && wool > 0);
  // arrows are drawn and cleared
  const arrow = { x: 2, y: G + 2, z: 2, vx: 10, vy: 0, vz: 0 };
  models.update(mobs, [arrow], [], tint, null, 5);
  assert.equal(scene.children.length, mobs.length + 1, 'an arrow in flight');
  models.update(mobs, [], [], tint, null, 6);
  assert.equal(scene.children.length, mobs.length, 'and it is gone');
  const removed = [cow];
  models.update(mobs, [], removed, tint, null, 7);
  assert.equal(removed.length, 0, 'the list of removed mobs is emptied');
  models.clear();
  assert.equal(scene.children.length, 0);
});

t('rain falls in a box round you, only where there is open sky, and lightning flashes with thunder that arrives late', () => {
  const w = field();
  const scene = new THREE.Scene();
  const heard = { thunder: [], rain: 0, wind: 0 };
  const audio = { thunder: (d) => heard.thunder.push(d), setWeatherSound: (r, wi) => { heard.rain = r; heard.wind = wi; } };
  const wind = { value: 1 };
  const fx = createWeatherFx({ scene, world: w, audio, windUniform: wind });
  const cam = { x: 10, y: G + 2, z: 10 };
  const rain = weatherNow(1, 0, 'temperate');
  Object.assign(rain, { particles: 'rain', density: 1.8, darkness: 0.5, wind: 0.9, fog: 0.6, lightning: 6, intensity: 1, sound: 'rain' });
  for (let i = 0; i < 20; i++) fx.update(0.1, rain, cam, { elapsed: i * 0.1 });
  const lines = scene.children.find((o) => o.isLineSegments && o.material.color.getHex() === 0xb4c8ff);
  assert.ok(lines.visible && lines.geometry.drawRange.count > 500, 'streaks of rain: ' + lines.geometry.drawRange.count);
  const pos = lines.geometry.attributes.position, shown = (y0, y1) => { let c = 0; for (let i = 0; i < lines.geometry.drawRange.count; i += 2) { const y = pos.getY(i); if (y > y0 && y < y1) c++; } return c; };
  assert.ok(shown(G, G + 30) > 100, 'streaks in the air above the ground');
  assert.equal(shown(-500, G), 0, 'none under the ground');
  assert.ok(wind.value > 2, 'a storm turns the wind up: ' + wind.value.toFixed(2));
  assert.ok(heard.rain > 0.5 && heard.wind > 0.5, 'and you hear it');
  // a roof: no rain falls under it
  for (let x = 4; x < 17; x++) for (let z = 4; z < 17; z++) w.setBlock(x, G + 6, z, B.PLANKS);
  for (let i = 0; i < 12; i++) fx.update(0.1, rain, cam, { elapsed: 5 + i * 0.1 });
  let under = 0;
  for (let i = 0; i < lines.geometry.drawRange.count; i += 2) { const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i); if (x > 5 && x < 16 && z > 5 && z < 16 && y > G && y < G + 6) under++; }
  assert.equal(under, 0, 'a roof keeps the rain off');
  // lightning: over a minute of storm there are strikes, with thunder after
  let flashed = 0;
  for (let i = 0; i < 600; i++) { fx.update(0.1, rain, cam, { elapsed: 10 + i * 0.1 }); if (fx.flash > 0.5) flashed++; }
  assert.ok(heard.thunder.length >= 2, 'strikes: ' + heard.thunder.length);
  assert.ok(flashed >= 2, 'flashes: ' + flashed);
  assert.ok(heard.thunder.every((d) => d >= 50 && d <= 200), 'thunder from a distance');
  // fair weather: nothing
  const clear = weatherNow(1, 0, 'temperate');
  Object.assign(clear, { particles: null, density: 0, wind: 0, lightning: 0, intensity: 0, sound: null });
  for (let i = 0; i < 40; i++) fx.update(0.1, clear, cam, { elapsed: 80 + i * 0.1 });
  assert.ok(!lines.visible, 'no rain');
  assert.ok(wind.value < 1.3, 'the wind drops again: ' + wind.value.toFixed(2));
  // snow and sand use points
  const snow = { ...clear, particles: 'snow', density: 1.5, intensity: 1 };
  for (let i = 0; i < 5; i++) fx.update(0.1, snow, cam, { elapsed: 90 });
  assert.ok(scene.children.some((o) => o.isPoints && o.visible), 'snowflakes');
  assert.ok(Object.keys(EVENTS).length >= 8);
  fx.dispose();
});

console.log('fx: ' + n + ' checks passed');
