// What the creatures look like: boxes with a walking animation, a red flash when hit, and falling over when dead. (What they do is in mobs.js.)
// Cows, pigs and sheep are boxes with painted faces (patches, muzzles, eyes, hooves, wool curls: see mobart.js) plus ears, horns, tails and an udder;
// zombies, skeletons and spiders are plainer boxes of one colour. Like the villagers they are tinted by the time of day.
import * as THREE from 'three';
import { Pix, ANIMAL_ART } from './mobart.js';

const RED = [0.9, 0.12, 0.1];
const materials = new Map(); // "r,g,b" or a texture's id -> { normal, hurt }

// Every colour is a shared pair of materials: the normal one and a reddened one for the flash after a hit
function mat(rgb) {
  const key = rgb.map((v) => Math.round(v * 255)).join(',');
  let m = materials.get(key);
  if (!m) {
    const hurt = rgb.map((v, i) => v * 0.45 + RED[i] * 0.55);
    m = { normal: new THREE.MeshBasicMaterial({ color: new THREE.Color(...rgb) }), hurt: new THREE.MeshBasicMaterial({ color: new THREE.Color(...hurt) }) };
    m.normal.userData.base = new THREE.Color(...rgb);
    m.hurt.userData.base = new THREE.Color(...hurt);
    materials.set(key, m);
  }
  return m;
}
const shade = (c, k) => c.map((x) => Math.min(1, x * k));

// ---- painted faces: a texture per face kind, made once and shared by every animal of that kind ----
const texCache = new Map(); // key -> { tex, pair }
const px = (blocks) => Math.max(2, Math.round(blocks * 16)); // a pixel is a sixteenth of a block
function paintedPair(key, painter, w, h) {
  let t = texCache.get(key);
  if (!t) {
    const p = new Pix(w, h);
    painter(p);
    const tex = new THREE.DataTexture(p.data(), w, h, THREE.RGBAFormat);
    tex.magFilter = tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    const hurtColor = new THREE.Color(1, 0.42, 0.38);
    t = { tex, pair: { normal: new THREE.MeshBasicMaterial({ map: tex }), hurt: new THREE.MeshBasicMaterial({ map: tex, color: hurtColor }) } };
    t.pair.normal.userData.base = new THREE.Color(1, 1, 1);
    t.pair.hurt.userData.base = hurtColor.clone();
    materials.set('tex:' + key, t.pair);
    texCache.set(key, t);
  }
  return t.pair;
}

class Rig {
  constructor() { this.group = new THREE.Group(); this.parts = []; }
  // a box of one colour
  box(w, h, d, rgb, x, y, z, { pivotTop = false, parent = this.group } = {}) {
    const g = new THREE.BoxGeometry(w, h, d);
    if (pivotTop) g.translate(0, -h / 2, 0);
    const pair = mat(rgb);
    const m = new THREE.Mesh(g, pair.normal);
    m.position.set(x, y, z);
    parent.add(m);
    this.parts.push({ mesh: m, normal: pair.normal, hurt: pair.hurt });
    return m;
  }
  // a box with a picture on every face. `art` is { side, end, front?, top, bottom } painters (or one painter for every face); the picture of
  // a face is as many pixels as the face is sixteenths of a block, so every pixel is the same size on every animal.
  tbox(key, art, w, h, d, x, y, z, { pivotTop = false, parent = this.group } = {}) {
    const dims = { side: [d, h], end: [w, h], front: [w, h], top: [w, d], bottom: [w, d] };
    const face = (kind) => {
      const painter = typeof art === 'function' ? art : art[kind] ?? art.end ?? art.side;
      const [fw, fh] = dims[kind];
      return paintedPair(key + ':' + kind + ':' + px(fw) + 'x' + px(fh), painter, px(fw), px(fh));
    };
    const pairs = [face('side'), face('side'), face('top'), face('bottom'), face('end'), face('front')]; // +x -x +y -y +z -z (the front looks along -z)
    const g = new THREE.BoxGeometry(w, h, d);
    if (pivotTop) g.translate(0, -h / 2, 0);
    const m = new THREE.Mesh(g, pairs.map((p) => p.normal));
    m.position.set(x, y, z);
    parent.add(m);
    this.parts.push({ mesh: m, normal: pairs.map((p) => p.normal), hurt: pairs.map((p) => p.hurt) });
    return m;
  }
  group3(x, y, z, parent = this.group) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }
}

// ---- the models (facing -z, feet on the ground at y = 0) ----
const MODELS = {
  cow(rig) {
    const A = ANIMAL_ART.cow;
    rig.legs = [[-0.28, -0.42], [0.28, -0.42], [-0.28, 0.42], [0.28, 0.42]].map(([x, z]) => rig.tbox('cow:leg', A.leg, 0.24, 0.62, 0.24, x, 0.62, z, { pivotTop: true }));
    rig.tbox('cow:body', A.body, 0.84, 0.78, 1.3, 0, 1.0, 0.05);
    rig.tbox('cow:udder', A.udder, 0.3, 0.14, 0.34, 0, 0.56, 0.5);
    rig.tail = rig.group3(0, 1.34, 0.7);
    rig.tbox('cow:tail', A.tail, 0.07, 0.62, 0.07, 0, 0, 0, { pivotTop: true, parent: rig.tail });
    rig.head = rig.group3(0, 1.22, -0.68);
    rig.tbox('cow:head', A.head, 0.58, 0.52, 0.5, 0, 0, -0.1, { parent: rig.head });
    rig.box(0.34, 0.2, 0.1, [0.9, 0.67, 0.64], 0, -0.14, -0.4, { parent: rig.head }); // the muzzle
    rig.box(0.05, 0.05, 0.02, [0.45, 0.28, 0.26], -0.08, -0.15, -0.46, { parent: rig.head }); rig.box(0.05, 0.05, 0.02, [0.45, 0.28, 0.26], 0.08, -0.15, -0.46, { parent: rig.head }); // nostrils
    for (const side of [-1, 1]) {
      rig.tbox('cow:ear', A.ear, 0.16, 0.1, 0.2, side * 0.37, 0.12, -0.1, { parent: rig.head });
      rig.tbox('cow:horn', A.horn, 0.08, 0.2, 0.08, side * 0.3, 0.34, -0.08, { parent: rig.head });
      rig.tbox('cow:horn', A.horn, 0.08, 0.08, 0.08, side * 0.36, 0.46, -0.08, { parent: rig.head }); // the tip
    }
  },
  pig(rig) {
    const A = ANIMAL_ART.pig;
    rig.legs = [[-0.22, -0.3], [0.22, -0.3], [-0.22, 0.3], [0.22, 0.3]].map(([x, z]) => rig.tbox('pig:leg', A.leg, 0.22, 0.34, 0.22, x, 0.34, z, { pivotTop: true }));
    rig.tbox('pig:body', A.body, 0.72, 0.58, 1.0, 0, 0.62, 0);
    rig.tail = rig.group3(0, 0.8, 0.5);
    rig.tbox('pig:tail', A.tail, 0.06, 0.06, 0.14, 0, 0, 0.07, { parent: rig.tail });
    rig.tbox('pig:tail', A.tail, 0.06, 0.12, 0.06, 0, 0.05, 0.14, { parent: rig.tail }); // a curl
    rig.head = rig.group3(0, 0.74, -0.58);
    rig.tbox('pig:head', A.head, 0.5, 0.46, 0.44, 0, 0, -0.1, { parent: rig.head });
    rig.tbox('pig:snout', A.snout, 0.26, 0.2, 0.1, 0, -0.06, -0.36, { parent: rig.head });
    for (const side of [-1, 1]) rig.tbox('pig:ear', A.ear, 0.16, 0.2, 0.04, side * 0.17, 0.28, -0.04, { parent: rig.head });
  },
  sheep(rig) {
    const A = ANIMAL_ART.sheep;
    rig.legs = [[-0.24, -0.34], [0.24, -0.34], [-0.24, 0.34], [0.24, 0.34]].map(([x, z]) => rig.tbox('sheep:leg', A.leg, 0.2, 0.52, 0.2, x, 0.52, z, { pivotTop: true }));
    rig.wool = [rig.tbox('sheep:fleece', A.fleece, 0.86, 0.74, 1.1, 0, 0.9, 0.04)];
    rig.wool.push(rig.tbox('sheep:fleece', A.fleece, 0.5, 0.1, 0.6, 0, 1.3, -0.05), rig.tbox('sheep:fleece', A.fleece, 0.7, 0.12, 0.5, 0, 0.5, 0.04)); // puffs on the back and under the belly
    rig.naked = rig.tbox('sheep:naked', A.naked, 0.6, 0.5, 0.9, 0, 0.82, 0.04);
    rig.tail = rig.group3(0, 1.0, 0.62);
    rig.wool.push(rig.tbox('sheep:fleece', A.fleece, 0.16, 0.16, 0.14, 0, 0, 0.05, { parent: rig.tail }));
    rig.head = rig.group3(0, 1.08, -0.6);
    rig.tbox('sheep:head', A.head, 0.4, 0.44, 0.46, 0, 0, -0.1, { parent: rig.head });
    rig.wool.push(rig.tbox('sheep:fleece', A.fleece, 0.46, 0.18, 0.4, 0, 0.26, -0.02, { parent: rig.head }));
    for (const side of [-1, 1]) rig.tbox('sheep:ear', A.ear, 0.18, 0.08, 0.14, side * 0.28, 0.08, -0.05, { parent: rig.head });
  },
  zombie(rig) {
    const skin = [0.36, 0.55, 0.3], shirt = [0.2, 0.52, 0.58], pants = [0.24, 0.24, 0.52], dark = [0.08, 0.1, 0.06];
    rig.legs = [rig.box(0.28, 0.72, 0.28, pants, -0.15, 0.72, 0, { pivotTop: true }), rig.box(0.28, 0.72, 0.28, pants, 0.15, 0.72, 0, { pivotTop: true })];
    rig.box(0.6, 0.72, 0.32, shirt, 0, 1.08, 0);
    rig.arms = [rig.box(0.26, 0.7, 0.26, skin, -0.43, 1.42, 0, { pivotTop: true }), rig.box(0.26, 0.7, 0.26, skin, 0.43, 1.42, 0, { pivotTop: true })];
    rig.head = rig.group3(0, 1.44, 0);
    rig.box(0.46, 0.46, 0.46, skin, 0, 0.23, 0, { parent: rig.head });
    rig.box(0.1, 0.07, 0.03, dark, -0.11, 0.28, -0.24, { parent: rig.head }); rig.box(0.1, 0.07, 0.03, dark, 0.11, 0.28, -0.24, { parent: rig.head });
    rig.box(0.2, 0.05, 0.03, dark, 0, 0.12, -0.24, { parent: rig.head });
  },
  skeleton(rig) {
    const bone = [0.84, 0.84, 0.78], dark = [0.1, 0.1, 0.1];
    rig.legs = [rig.box(0.14, 0.72, 0.14, shade(bone, 0.9), -0.12, 0.72, 0, { pivotTop: true }), rig.box(0.14, 0.72, 0.14, shade(bone, 0.9), 0.12, 0.72, 0, { pivotTop: true })];
    rig.box(0.44, 0.7, 0.2, bone, 0, 1.08, 0);
    for (const y of [1.2, 1.06, 0.92]) rig.box(0.46, 0.03, 0.22, dark, 0, y, 0);
    rig.arms = [rig.box(0.13, 0.7, 0.13, bone, -0.3, 1.42, 0, { pivotTop: true }), rig.box(0.13, 0.7, 0.13, bone, 0.3, 1.42, 0, { pivotTop: true })];
    rig.bow = rig.box(0.05, 0.5, 0.14, [0.45, 0.3, 0.16], 0.0, -0.55, -0.1, { parent: rig.arms[0] });
    rig.head = rig.group3(0, 1.44, 0);
    rig.box(0.44, 0.44, 0.44, bone, 0, 0.22, 0, { parent: rig.head });
    rig.box(0.1, 0.1, 0.03, dark, -0.1, 0.26, -0.23, { parent: rig.head }); rig.box(0.1, 0.1, 0.03, dark, 0.1, 0.26, -0.23, { parent: rig.head });
    rig.box(0.16, 0.05, 0.03, dark, 0, 0.1, -0.23, { parent: rig.head });
  },
  spider(rig) {
    const fur = [0.2, 0.16, 0.16], red = [0.8, 0.08, 0.08];
    rig.box(0.8, 0.5, 0.9, fur, 0, 0.5, 0.5);
    rig.box(0.5, 0.42, 0.5, shade(fur, 1.15), 0, 0.46, -0.1);
    rig.box(0.1, 0.1, 0.03, red, -0.12, 0.54, -0.36); rig.box(0.1, 0.1, 0.03, red, 0.12, 0.54, -0.36);
    rig.legs = [];
    for (const side of [-1, 1]) for (let i = 0; i < 4; i++) {
      const leg = rig.group3(side * 0.28, 0.5, 0.12 + i * 0.2 - 0.1);
      rig.box(0.7, 0.07, 0.07, shade(fur, 1.3), side * 0.35, 0.0, 0, { parent: leg });
      rig.box(0.07, 0.4, 0.07, shade(fur, 1.3), side * 0.7, -0.2, 0, { parent: leg });
      leg.userData = { side, i };
      rig.legs.push(leg);
    }
  },
};

export function createMobModels({ scene }) {
  const entries = new Map(); // mob -> { rig }
  const arrowMeshes = new Map();
  const arrowMat = new THREE.MeshBasicMaterial({ color: 0xd8d0b8 });
  const arrowGeo = new THREE.BoxGeometry(0.05, 0.05, 0.7);

  function build(mob) {
    const rig = new Rig();
    MODELS[mob.type](rig, mob);
    scene.add(rig.group);
    return rig;
  }
  function drop(mob) {
    const e = entries.get(mob);
    if (!e) return;
    scene.remove(e.group);
    e.group.traverse((o) => { if (o.isMesh) o.geometry.dispose(); }); // (the materials are shared and stay)
    entries.delete(mob);
  }

  return {
    // mobs: every creature near enough to draw; tint: the time-of-day colour; removed: creatures that just went
    update(mobs, arrows, removed, tint, player, elapsed) {
      for (const pair of materials.values()) { pair.normal.color.copy(pair.normal.userData.base).multiply(tint); pair.hurt.color.copy(pair.hurt.userData.base).multiply(tint); }
      arrowMat.color.copy(tint);
      for (const m of removed) drop(m);
      removed.length = 0;
      const seen = new Set();
      for (const mob of mobs) {
        const near = !player || Math.hypot(mob.x - player.x, mob.z - player.z) < 80;
        let e = entries.get(mob);
        if (!near) { if (e) e.group.visible = false; continue; }
        if (!e) { e = build(mob); entries.set(mob, e); }
        e.group.visible = true;
        seen.add(mob);
        const g = e.group;
        g.position.set(mob.x, mob.y, mob.z);
        g.rotation.y = mob.yaw;
        // dying: tip over onto the side and sink a little
        if (mob.dead) { const k = 1 - Math.max(0, mob.deathTimer) / 0.9; g.rotation.z = (Math.PI / 2) * Math.min(1, k * 1.4); g.position.y -= 0.1 * k; } else g.rotation.z = 0;
        // swing the legs while walking
        const swing = mob.moving ? Math.sin(mob.walkPhase) * 0.7 : 0;
        if (mob.type === 'spider') {
          e.legs.forEach((leg) => { const { side, i } = leg.userData; leg.rotation.y = side * (0.45 - i * 0.28) + (mob.moving ? Math.sin(mob.walkPhase * 1.6 + i * 1.3) * 0.35 : 0) * side; leg.rotation.z = -side * 0.12; });
        } else if (e.legs) {
          e.legs.forEach((leg, i) => { leg.rotation.x = (e.legs.length === 4 ? (i === 0 || i === 3 ? swing : -swing) : (i ? -swing : swing)); });
        }
        if (e.arms) {
          const reach = mob.type === 'zombie' ? -1.45 : mob.state === 'chase' ? -1.2 : -0.2; // zombie arms out in front
          e.arms[0].rotation.x = reach + (mob.type === 'zombie' ? 0 : -swing * 0.3) + (mob.cooldown < 0.35 && mob.state === 'chase' ? Math.sin(elapsed * 30) * 0.2 : 0);
          e.arms[1].rotation.x = mob.type === 'zombie' ? reach : reach * 0.9 + swing * 0.3;
        }
        if (e.head) { // grazing: the head goes down; looking at you when something is chasing
          const graze = !mob.hostile && mob.state === 'idle' ? Math.max(0, Math.sin(elapsed * 0.9 + mob.id * 1.7)) * 0.7 : 0;
          e.head.rotation.x = graze;
        }
        if (e.tail) e.tail.rotation.x = Math.sin(elapsed * (mob.moving ? 7 : 2.2) + mob.id * 2.1) * (mob.moving ? 0.5 : 0.18); // a wagging tail
        if (e.wool) for (const w of e.wool) w.visible = !mob.sheared;
        if (e.naked) e.naked.visible = mob.sheared;
        const hurt = mob.hurt > 0;
        for (const p of e.parts) p.mesh.material = hurt ? p.hurt : p.normal;
      }
      // arrows: thin sticks pointing the way they fly
      const live = new Set(arrows);
      for (const a of arrows) {
        let m = arrowMeshes.get(a);
        if (!m) { m = new THREE.Mesh(arrowGeo, arrowMat); scene.add(m); arrowMeshes.set(a, m); }
        m.position.set(a.x, a.y, a.z);
        m.lookAt(a.x + a.vx, a.y + a.vy, a.z + a.vz);
      }
      for (const [a, m] of arrowMeshes) if (!live.has(a)) { scene.remove(m); arrowMeshes.delete(a); }
    },
    clear() { for (const mob of [...entries.keys()]) drop(mob); for (const [a, m] of arrowMeshes) { scene.remove(m); arrowMeshes.delete(a); } },
  };
}
