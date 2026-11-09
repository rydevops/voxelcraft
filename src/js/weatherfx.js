// What the weather looks and sounds like: rain streaks, snowflakes or blown sand falling round you (and only where there is sky above them, so a
// roof keeps you dry), bolts of lightning with thunder that arrives a moment later, and the wind that sways the grass harder in a storm.
// Which weather it is comes from weather.js.
import * as THREE from 'three';

const MAX = 2800;      // most particles at once
const BOX = 30;        // they fill a box this wide around the camera
const HEIGHT = 24;     // and this tall
const SKY = 0;

const COLORS = { rain: 0xb4c8ff, snow: 0xffffff, sand: 0xd8b878 };

export function createWeatherFx({ scene, world, audio, windUniform }) {
  // ---- the particles: rain is a line (a streak), snow and sand are points ----
  const rnd = new Float32Array(MAX * 3);
  for (let i = 0; i < rnd.length; i++) rnd[i] = Math.random();
  const rainGeo = new THREE.BufferGeometry();
  rainGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MAX * 6), 3));
  const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: COLORS.rain, transparent: true, opacity: 0.5, depthWrite: false, fog: false }));
  rain.frustumCulled = false; rain.visible = false; rain.renderOrder = 5;
  scene.add(rain);
  const flakeGeo = new THREE.BufferGeometry();
  flakeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MAX * 3), 3));
  const flakes = new THREE.Points(flakeGeo, new THREE.PointsMaterial({ color: COLORS.snow, size: 0.11, sizeAttenuation: true, transparent: true, opacity: 0.9, depthWrite: false, fog: false }));
  flakes.frustumCulled = false; flakes.visible = false; flakes.renderOrder = 5;
  scene.add(flakes);

  // ---- lightning ----
  const boltGeo = new THREE.BufferGeometry();
  boltGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(40 * 6), 3));
  const bolt = new THREE.LineSegments(boltGeo, new THREE.LineBasicMaterial({ color: 0xe8eeff, transparent: true, opacity: 1, fog: false, depthTest: false, blending: THREE.AdditiveBlending }));
  bolt.frustumCulled = false; bolt.visible = false; bolt.renderOrder = 6;
  scene.add(bolt);
  let boltLife = 0, flash = 0, strikeTimer = 8, wind = 1, fall = 0;
  const wrap = (v, m) => ((v % m) + m) % m;

  function strike(cam) {
    const a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 150;
    const x = cam.x + Math.cos(a) * d, z = cam.z + Math.sin(a) * d;
    const ground = world.isLoaded(Math.floor(x), Math.floor(z)) ? world.heightAt(Math.floor(x), Math.floor(z)) : cam.y - 4;
    const pos = boltGeo.attributes.position;
    let px = x, py = 190, pz = z, i = 0;
    const steps = 18, dy = (190 - ground) / steps;
    for (let s = 0; s < steps; s++) {
      const nx = x + (Math.random() - 0.5) * 9 * (1 - s / steps), nz = z + (Math.random() - 0.5) * 9 * (1 - s / steps), ny = py - dy;
      pos.setXYZ(i++, px, py, pz); pos.setXYZ(i++, nx, ny, nz);
      if (s % 5 === 3) { pos.setXYZ(i++, nx, ny, nz); pos.setXYZ(i++, nx + (Math.random() - 0.5) * 14, ny - dy * 2, nz + (Math.random() - 0.5) * 14); } // a branch
      px = nx; py = ny; pz = nz;
    }
    for (; i < 80; i++) pos.setXYZ(i, px, py, pz);
    pos.needsUpdate = true;
    boltGeo.setDrawRange(0, 80);
    bolt.visible = true; boltLife = 0.28; flash = 1;
    audio?.thunder?.(d);
  }

  return {
    get flash() { return flash; },
    // dt seconds; w = weatherNow(...); cam = { x, y, z }; underwater / indoors dim the sound
    update(dt, w, cam, { underwater = false, elapsed = 0 } = {}) {
      // wind: the shader's gusts are scaled up in a storm
      wind += ((1 + w.wind * 2.4) - wind) * Math.min(1, dt * 1.5);
      if (windUniform) windUniform.value = wind;
      const want = underwater ? 0 : Math.round(MAX * Math.min(1, w.density / 2.8 + (w.density > 0 ? 0.05 : 0)));
      const kind = w.particles;
      const isRain = kind === 'rain', isFlake = kind === 'snow' || kind === 'sand';
      rain.visible = isRain && want > 0;
      flakes.visible = isFlake && want > 0;
      if (flakes.visible) { flakes.material.color.setHex(COLORS[kind]); flakes.material.size = kind === 'sand' ? 0.07 : 0.12; }
      if (want > 0 && kind) {
        const speed = isRain ? 24 : kind === 'sand' ? 3 : 3.2;
        const lean = w.wind * (isRain ? 5 : kind === 'sand' ? 16 : 4); // blown sideways
        fall += dt * speed;
        const t = elapsed;
        const rp = rainGeo.attributes.position, fp = flakeGeo.attributes.position;
        let shown = 0;
        for (let i = 0; i < want; i++) {
          const ox = rnd[i * 3], oy = rnd[i * 3 + 1], oz = rnd[i * 3 + 2];
          const sway = isFlake ? Math.sin(t * 1.3 + oy * 40) * (kind === 'sand' ? 0.1 : 0.6) : 0;
          const yy = isRain || kind === 'snow' ? wrap(oy * HEIGHT - fall, HEIGHT) : wrap(oy * HEIGHT - fall * 0.2, HEIGHT);
          const x = cam.x - BOX / 2 + wrap(ox * BOX + lean * t * 0.2 - cam.x, BOX) + sway;
          const z = cam.z - BOX / 2 + wrap(oz * BOX - cam.z, BOX);
          const y = cam.y - HEIGHT / 3 + yy;
          const lit = world.lighting.get(Math.floor(x), Math.floor(y), Math.floor(z), SKY) >= 15; // only where there is open sky above
          if (isRain) {
            if (!lit) { rp.setXYZ(shown * 2, 0, -999, 0); rp.setXYZ(shown * 2 + 1, 0, -999, 0); shown++; continue; }
            const len = 0.55 + oz * 0.4;
            rp.setXYZ(shown * 2, x, y, z);
            rp.setXYZ(shown * 2 + 1, x - lean * 0.04 * len, y + len, z);
            shown++;
          } else {
            fp.setXYZ(shown++, lit ? x : 0, lit ? y : -999, lit ? z : 0);
          }
        }
        if (isRain) { rp.needsUpdate = true; rainGeo.setDrawRange(0, shown * 2); rain.material.opacity = 0.32 + 0.25 * Math.min(1, w.intensity); } else { fp.needsUpdate = true; flakeGeo.setDrawRange(0, shown); }
      }
      // lightning
      if (w.lightning > 0 && !underwater) {
        strikeTimer -= dt;
        if (strikeTimer <= 0) { strike(cam); strikeTimer = (60 / w.lightning) * (0.4 + Math.random() * 1.2); }
      } else strikeTimer = Math.max(strikeTimer, 6);
      flash = Math.max(0, flash - dt * 2.2);
      if (boltLife > 0) { boltLife -= dt; bolt.material.opacity = Math.min(1, boltLife * 6) * (0.6 + 0.4 * Math.sin(boltLife * 90)); if (boltLife <= 0) bolt.visible = false; }
      // sounds: the patter of rain, the howl of wind
      audio?.setWeatherSound?.(underwater ? 0 : w.sound === 'rain' ? Math.min(1, w.intensity * (0.5 + w.density * 0.25)) : 0, underwater ? 0 : Math.min(1, w.wind * 0.8));
    },
    dispose() { scene.remove(rain, flakes, bolt); },
  };
}
