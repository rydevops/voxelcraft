// Villagers in the world: the little long-nosed people, drawn as a handful of boxes, spawned when you come near a village and put away when
// you leave it. (What they do is in villagerai.js.) Nothing about them is saved: a village always starts with the same people.
import * as THREE from 'three';
import { REG } from './registry.js';
import { villagesNear } from './villages.js';
import { Villager, pickVillager } from './villagerai.js';
import { hash2 } from './noise.js';

const MAX = REG.worldgen.villages.maxVillagers;
const SPAWN_RANGE = 96;     // a village this close to you gets its people
const KEEP_RANGE = 130;     // and loses them again beyond this
const ACT_RANGE = 70;       // only villagers this near are moved and drawn

const SKIN = [[0.87, 0.67, 0.53], [0.72, 0.53, 0.39], [0.5, 0.35, 0.25]];
const ROBE = { farmer: [0.45, 0.6, 0.27], blacksmith: [0.36, 0.36, 0.4], librarian: [0.9, 0.88, 0.83], cleric: [0.5, 0.3, 0.6], mason: [0.56, 0.44, 0.34] };
const DARK = [0.14, 0.1, 0.09];

// Every colour is one shared material; each frame it is multiplied by the time-of-day tint, like everything else in the world
const materials = new Map();
function mat(rgb) {
  const key = rgb.map((v) => Math.round(v * 255)).join(',');
  let m = materials.get(key);
  if (!m) { m = new THREE.MeshBasicMaterial({ color: new THREE.Color(...rgb) }); m.userData.base = new THREE.Color(...rgb); materials.set(key, m); }
  return m;
}

function box(w, h, d, rgb, x, y, z, pivotTop = false) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (pivotTop) g.translate(0, -h / 2, 0); // the box hangs from its origin (a leg swings from the hip)
  const m = new THREE.Mesh(g, mat(rgb));
  m.position.set(x, y, z);
  return m;
}

// A villager faces -z (like the camera at yaw 0), feet at the origin, 1.8 tall
function buildModel(v) {
  const g = new THREE.Group();
  const skin = SKIN[v.skin], robe = ROBE[v.job];
  const shade = (c, k) => c.map((x) => x * k);
  const legL = box(0.24, 0.66, 0.26, shade(robe, 0.7), -0.13, 0.66, 0, true), legR = box(0.24, 0.66, 0.26, shade(robe, 0.7), 0.13, 0.66, 0, true);
  g.add(legL, legR);
  g.add(box(0.54, 0.74, 0.32, robe, 0, 1.03, 0));
  const arms = box(0.64, 0.2, 0.24, robe, 0, 1.12, -0.2); // arms folded in front
  g.add(arms, box(0.2, 0.2, 0.24, skin, 0, 1.12, -0.2));  // hands
  const head = new THREE.Group();
  head.position.set(0, 1.4, 0);
  head.add(box(0.44, 0.48, 0.44, skin, 0, 0.24, 0));
  head.add(box(0.12, 0.22, 0.14, shade(skin, 0.85), 0, 0.16, -0.28)); // the nose
  head.add(box(0.1, 0.07, 0.03, DARK, -0.11, 0.3, -0.225), box(0.1, 0.07, 0.03, DARK, 0.11, 0.3, -0.225)); // eyes
  head.add(box(0.4, 0.05, 0.03, shade(skin, 0.7), 0, 0.38, -0.225));  // the brow
  if (v.job === 'farmer') { head.add(box(0.8, 0.05, 0.8, [0.86, 0.74, 0.38], 0, 0.5, 0), box(0.46, 0.12, 0.46, [0.8, 0.66, 0.32], 0, 0.56, 0)); }
  if (v.job === 'cleric') head.add(box(0.5, 0.14, 0.5, shade(robe, 0.8), 0, 0.53, 0.02));
  if (v.job === 'mason') head.add(box(0.48, 0.1, 0.48, [0.4, 0.34, 0.3], 0, 0.53, 0));
  g.add(head);
  if (v.job === 'blacksmith') g.add(box(0.5, 0.56, 0.04, [0.22, 0.17, 0.14], 0, 0.9, -0.18)); // a leather apron
  if (v.job === 'librarian') g.add(box(0.1, 0.62, 0.34, [0.6, 0.12, 0.12], 0, 1.02, 0)); // a red stole down the middle
  g.userData = { legL, legR, head };
  return g;
}

export function createVillagers({ scene, world }) {
  const active = new Map(); // village key -> { village, list: [{ v, mesh }] }
  let timer = 0;

  // Newer villages (terrain 4) have a house and a bed for every villager: that many people, each starting at their own doorstep.
  function spawnVillage(village, night) {
    if (village.homes?.length) return spawnHomes(village, night);
    // wait until the ground the first few of them stand on exists
    const spots = village.spawns;
    const loaded = spots.filter((s) => world.isLoaded(Math.floor(s.x), Math.floor(s.z)));
    if (loaded.length < spots.length) return;
    const count = Math.min(MAX, 2 + Math.floor(village.buildings.length * 0.7));
    // which spots, in an order fixed by the village (not by when you arrived)
    const order = spots.map((s, i) => ({ s, k: hash2(i, village.cx, village.cz) })).sort((a, b) => a.k - b.k).slice(0, count);
    const list = [];
    order.forEach(({ s }, i) => {
      const v = new Villager(world, village, s, i);
      const mesh = buildModel(v);
      mesh.position.set(v.x, v.y, v.z);
      scene.add(mesh);
      list.push({ v, mesh });
    });
    active.set(village.key, { village, list });
  }

  function spawnHomes(village, night) {
    const spots = village.homes.map((h) => h.doorstep);
    if (!spots.every((s) => world.isLoaded(Math.floor(s.x), Math.floor(s.z)))) return; // wait for the ground to exist
    const list = village.homes.map((h, i) => {
      const v = new Villager(world, village, { x: h.doorstep.x, y: h.y, z: h.doorstep.z }, i, h);
      if (night) v.sleepNow();
      const mesh = buildModel(v);
      mesh.rotation.order = 'YXZ'; // (so a sleeper lies down first and is then turned to face the right way)
      const p = v.mode === 'sleeping' ? v.sleepPose() : null;
      if (p) mesh.position.set(p.x, p.y, p.z); else mesh.position.set(v.x, v.y, v.z);
      scene.add(mesh);
      return { v, mesh };
    });
    active.set(village.key, { village, list });
  }

  function removeVillage(key) {
    const a = active.get(key);
    if (!a) return;
    for (const { mesh } of a.list) {
      scene.remove(mesh);
      mesh.traverse((o) => { if (o.isMesh) o.geometry.dispose(); }); // (the materials are shared and stay)
    }
    active.delete(key);
  }

  return {
    get count() { let n = 0; for (const a of active.values()) n += a.list.length; return n; },
    all() { const out = []; for (const a of active.values()) for (const e of a.list) out.push(e.v); return out; },

    // tint: the time-of-day colour the world is multiplied by; player: { x, z }
    // env = { night, setDoor(door, open) }: whether it is bedtime, and a way for villagers to open and shut their own doors
    update(dt, player, tint, now = 0, env = null) {
      for (const m of materials.values()) m.color.copy(m.userData.base).multiply(tint);
      timer -= dt;
      if (timer <= 0) {
        timer = 1;
        const near = villagesNear(world, player.x - SPAWN_RANGE, player.z - SPAWN_RANGE, player.x + SPAWN_RANGE, player.z + SPAWN_RANGE);
        for (const v of near) if (!active.has(v.key) && Math.hypot(v.cx - player.x, v.cz - player.z) < SPAWN_RANGE + 20) spawnVillage(v, !!env?.night);
        for (const [key, a] of [...active]) if (Math.hypot(a.village.cx - player.x, a.village.cz - player.z) > KEEP_RANGE) removeVillage(key);
      }
      for (const a of active.values()) {
        for (const { v, mesh } of a.list) {
          const d = Math.hypot(v.x - player.x, v.z - player.z);
          const on = d < ACT_RANGE && world.isLoaded(Math.floor(v.x), Math.floor(v.z));
          mesh.visible = on;
          if (!on) continue;
          v.update(Math.min(dt, 0.05), player, now, env);
          if (v.mode === 'sleeping') { // lying on the bed, head on the pillow
            const p = v.sleepPose();
            mesh.position.set(p.x, p.y + 0.02, p.z);
            mesh.rotation.set(Math.PI / 2, p.yaw, 0);
            mesh.userData.legL.rotation.x = mesh.userData.legR.rotation.x = 0;
            mesh.userData.head.rotation.y = 0;
            continue;
          }
          mesh.position.set(v.x, v.y, v.z);
          mesh.rotation.set(0, v.yaw, 0);
          const swing = v.moving ? Math.sin(v.walkPhase) * 0.7 : 0;
          mesh.userData.legL.rotation.x = swing;
          mesh.userData.legR.rotation.x = -swing;
          mesh.userData.head.rotation.y = v.headTurn;
        }
      }
    },

    // the villager under the crosshair within reach (nearer than `limit` if given), or null
    pick(origin, dir, maxDist = 4.5) {
      const r = pickVillager(this.all().filter((v) => Math.hypot(v.x - origin.x, v.z - origin.z) < maxDist + 1), origin, dir, maxDist);
      return r;
    },
    removeAll() { for (const key of [...active.keys()]) removeVillage(key); },
  };
}
