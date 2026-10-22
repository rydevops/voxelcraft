// Day/night cycle: sun, a real 3D moon with phases, twinkling stars, volumetric clouds, sky + fog colours.
import * as THREE from 'three';
import { mulberry32 } from './noise.js';

const smooth = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function pixelTexture(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  return t;
}

const DAY = new THREE.Color(0.47, 0.68, 1.0);
const NIGHT = new THREE.Color(0.015, 0.025, 0.07);
const DUSK = new THREE.Color(1.0, 0.52, 0.28);
const NIGHT_TINT = new THREE.Color(0.36, 0.42, 0.7);
const WHITE = new THREE.Color(1, 1, 1);
const DUSK_TINT = new THREE.Color(1, 0.82, 0.7);

// ---- clouds: chunky puffs with real thickness ---------------------------------------------------
const CLOUD_GRID = 64;                   // cells per side of one repeating tile
const CLOUD_CELL = 12;                   // blocks per cell
const CLOUD_PERIOD = CLOUD_GRID * CLOUD_CELL; // 768 blocks: the pattern repeats seamlessly
const CLOUD_Y = 82;                      // underside height

// seamless (wrapping) value noise
function periodicNoise(cells, rand) {
  const g = Array.from({ length: cells * cells }, rand);
  return (u, v) => {
    const fx = u * cells, fy = v * cells, x0 = Math.floor(fx), y0 = Math.floor(fy);
    const tx = fx - x0, ty = fy - y0;
    const at = (i, j) => g[(((j % cells) + cells) % cells) * cells + (((i % cells) + cells) % cells)];
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    return (at(x0, y0) * (1 - sx) + at(x0 + 1, y0) * sx) * (1 - sy) + (at(x0, y0 + 1) * (1 - sx) + at(x0 + 1, y0 + 1) * sx) * sy;
  };
}

// Column heights (in blocks) for every cell: 0 = clear sky, thicker towards the heart of a cloud
function cloudHeights(seed = 9) {
  const rand = mulberry32(seed);
  const n1 = periodicNoise(6, rand), n2 = periodicNoise(14, rand), n3 = periodicNoise(30, rand);
  const out = new Float32Array(CLOUD_GRID * CLOUD_GRID);
  const thr = 0.56;
  for (let j = 0; j < CLOUD_GRID; j++) {
    for (let i = 0; i < CLOUD_GRID; i++) {
      const u = i / CLOUD_GRID, v = j / CLOUD_GRID;
      const val = n1(u, v) * 0.55 + n2(u, v) * 0.3 + n3(u, v) * 0.15;
      if (val <= thr) continue;
      const k = Math.min(1, (val - thr) / 0.18);          // 0 at the edge .. 1 in the core
      out[j * CLOUD_GRID + i] = 4 + Math.round(k * 3) * 2.2; // 4, 6.2, 8.4, 10.6 blocks: a domed profile
    }
  }
  return out;
}

function buildCloudGeometry() {
  const H = cloudHeights();
  const pos = [], col = [], ind = [];
  const at = (i, j) => H[(((j % CLOUD_GRID) + CLOUD_GRID) % CLOUD_GRID) * CLOUD_GRID + (((i % CLOUD_GRID) + CLOUD_GRID) % CLOUD_GRID)];
  let n = 0;
  const quad = (a, b, c, d, shade) => {
    for (const p of [a, b, c, d]) { pos.push(p[0], p[1], p[2]); col.push(shade, shade, shade); }
    ind.push(n, n + 1, n + 2, n, n + 2, n + 3);
    n += 4;
  };
  for (let j = 0; j < CLOUD_GRID; j++) {
    for (let i = 0; i < CLOUD_GRID; i++) {
      const h = at(i, j);
      if (!h) continue;
      const x0 = i * CLOUD_CELL, x1 = x0 + CLOUD_CELL, z0 = j * CLOUD_CELL, z1 = z0 + CLOUD_CELL;
      quad([x0, h, z1], [x1, h, z1], [x1, h, z0], [x0, h, z0], 1.0);   // top, brightest
      quad([x0, 0, z0], [x1, 0, z0], [x1, 0, z1], [x0, 0, z1], 0.8);   // underside, in soft shade
      // sides: only the strip that stands above the neighbouring column
      const hE = at(i + 1, j), hW = at(i - 1, j), hS = at(i, j + 1), hN = at(i, j - 1);
      if (hE < h) quad([x1, hE, z1], [x1, hE, z0], [x1, h, z0], [x1, h, z1], 0.92);
      if (hW < h) quad([x0, hW, z0], [x0, hW, z1], [x0, h, z1], [x0, h, z0], 0.92);
      if (hS < h) quad([x0, hS, z1], [x1, hS, z1], [x1, h, z1], [x0, h, z1], 0.84);
      if (hN < h) quad([x1, hN, z0], [x0, hN, z0], [x0, h, z0], [x1, h, z0], 0.84);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(col), 3));
  g.setIndex(new THREE.BufferAttribute(n > 65535 ? new Uint32Array(ind) : new Uint16Array(ind), 1));
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(CLOUD_PERIOD / 2, 4, CLOUD_PERIOD / 2), CLOUD_PERIOD * 0.75);
  return g;
}

// ---- twinkling stars -------------------------------------------------------------------------------
const STAR_VERT = `
  attribute float aPhase;
  attribute float aSize;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uScale;
  varying float vTw;
  varying vec3 vCol;
  void main() {
    float speed = 1.2 + aPhase * 3.0;
    // two out-of-step sine waves give an irregular shimmer, and a few stars flicker deeply
    float tw = 0.5 + 0.5 * sin(uTime * speed + aPhase * 60.0);
    tw = mix(tw, 0.5 + 0.5 * sin(uTime * speed * 2.7 + aPhase * 17.0), 0.4);
    vTw = 0.25 + 0.75 * tw;
    vCol = aColor;
    gl_PointSize = aSize * uScale * (0.75 + 0.5 * vTw);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
const STAR_FRAG = `
  uniform float uOpacity;
  varying float vTw;
  varying vec3 vCol;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    gl_FragColor = vec4(vCol, a * vTw * uOpacity);
  }`;

// ---- the moon ----------------------------------------------------------------------------------------
const MOON_VERT = `
  uniform float uShift;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vN = normalize(normal);
    vUv = uv + vec2(uShift, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
const MOON_FRAG = `
  uniform sampler2D uMap;
  uniform vec3 uLight;
  uniform float uAlpha;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vec3 tex = texture2D(uMap, vUv).rgb;
    float d = dot(normalize(vN), normalize(uLight));
    float lit = smoothstep(-0.06, 0.28, d);                 // soft terminator between night and day side
    vec3 sunlit = tex * vec3(1.0, 0.98, 0.92) * (0.42 + 0.42 * max(d, 0.0));
    vec3 earthshine = tex * vec3(0.10, 0.12, 0.2) * 0.55;    // the dark side is faintly visible
    gl_FragColor = vec4(mix(earthshine, sunlit, lit), uAlpha);
  }`;

export class Sky {
  constructor(scene, art) {
    this.group = new THREE.Group();
    scene.add(this.group);

    const tilt = new THREE.Group();
    tilt.rotation.y = 0.45;
    this.group.add(tilt);
    this.pivot = new THREE.Group();
    tilt.add(this.pivot);

    // sun: the classic square
    const sun = new THREE.Mesh(
      new THREE.PlaneGeometry(90, 90),
      new THREE.MeshBasicMaterial({ map: pixelTexture(art.sun), fog: false, depthWrite: false })
    );
    sun.position.x = 320;
    sun.rotation.y = -Math.PI / 2;
    this.pivot.add(sun);
    this.sun = sun;

    // moon: a lit sphere with a crater texture, a soft halo, and phases
    const moonTex = new THREE.CanvasTexture(art.moon);
    moonTex.wrapS = THREE.RepeatWrapping;
    moonTex.colorSpace = THREE.NoColorSpace;
    this.moonMat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: moonTex }, uLight: { value: new THREE.Vector3(1, 0, 0) }, uAlpha: { value: 1 }, uShift: { value: 0.31 } },
      vertexShader: MOON_VERT, fragmentShader: MOON_FRAG,
      transparent: true, depthWrite: false, fog: false,
    });
    this.moon = new THREE.Mesh(new THREE.SphereGeometry(26, 48, 32), this.moonMat);
    this.moon.position.x = -320;
    this.pivot.add(this.moon);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(art.glow), transparent: true, depthWrite: false, fog: false,
      blending: THREE.AdditiveBlending, opacity: 0.4,
    }));
    halo.scale.set(150, 150, 1);
    halo.position.x = -318;
    this.pivot.add(halo);
    this.halo = halo;

    // stars: shader points that shimmer
    const rand = mulberry32(31337);
    const N = 900;
    const pts = new Float32Array(N * 3), phase = new Float32Array(N), size = new Float32Array(N), color = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const u = rand() * 2 - 1, a = rand() * Math.PI * 2, r = Math.sqrt(1 - u * u);
      pts.set([Math.cos(a) * r * 400, u * 400, Math.sin(a) * r * 400], i * 3);
      phase[i] = rand();
      const big = rand() < 0.07;
      size[i] = big ? 4.5 + rand() * 2 : 1.6 + rand() * 1.8;
      const t = rand(); // a range of star colours: blue-white to warm
      color.set(t < 0.25 ? [0.7, 0.8, 1.0] : t < 0.8 ? [1, 1, 1] : [1.0, 0.9, 0.7], i * 3);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    sg.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    sg.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    sg.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
    this.starMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uOpacity: { value: 1 }, uScale: { value: 1 } },
      vertexShader: STAR_VERT, fragmentShader: STAR_FRAG,
      transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending,
    });
    this.stars = new THREE.Points(sg, this.starMat);
    this.stars.frustumCulled = false;
    this.pivot.add(this.stars);

    // clouds: one shared tile geometry drawn in a 3x3 block so the layer never ends
    const cg = buildCloudGeometry();
    this.cloudMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.93, fog: false });
    this.clouds = [];
    this.cloudRoot = new THREE.Group();
    scene.add(this.cloudRoot);
    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(cg, this.cloudMat);
      m.matrixAutoUpdate = true;
      this.cloudRoot.add(m);
      this.clouds.push(m);
    }

    this.skyColor = new THREE.Color();
    this.tint = new THREE.Color();
    this.sunHeight = 1;
    this.setMoonPhase(0);
  }

  setPixelRatio(r) {
    this.starMat.uniforms.uScale.value = r;
  }

  // phase 0 = full moon, 4 = new moon (8 phases per cycle, one step per in-game day)
  setMoonPhase(phase) {
    const a = ((phase % 8) / 8) * Math.PI * 2;
    // the light comes from the side of the moon facing us at full moon, swinging round to behind it
    this.moonMat.uniforms.uLight.value.set(Math.cos(a), 0.12, Math.sin(a));
    this.phaseName = ['Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent', 'New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous'][phase % 8];
  }

  // t in [0,1): 0 = sunrise, .25 = noon, .5 = sunset, .75 = midnight
  update(t, camPos, elapsed) {
    const theta = t * Math.PI * 2;
    this.pivot.rotation.z = theta;
    this.group.position.copy(camPos);
    const s = (this.sunHeight = Math.sin(theta));

    const day = smooth(-0.1, 0.26, s);
    this.skyColor.copy(NIGHT).lerp(DAY, day);
    const dusk = Math.pow(Math.max(0, 1 - Math.abs(s) / 0.24), 1.1) * 0.92;
    if (dusk > 0) this.skyColor.lerp(DUSK, dusk);

    this.tint.copy(NIGHT_TINT).lerp(WHITE, day);
    if (dusk > 0) this.tint.lerp(DUSK_TINT, dusk * 0.35);

    const night = 1 - smooth(-0.18, 0.1, s);
    this.starMat.uniforms.uTime.value = elapsed;
    this.starMat.uniforms.uOpacity.value = night;
    this.stars.visible = night > 0.01;
    // the moon is faintly visible by day and brilliant at night
    this.moonMat.uniforms.uAlpha.value = 0.3 + 0.7 * night;
    this.halo.material.opacity = 0.4 * night;

    // clouds drift with the wind but stay locked to world space
    const wind = elapsed * 1.6;
    const bx = Math.floor((camPos.x - wind) / CLOUD_PERIOD) * CLOUD_PERIOD;
    const bz = Math.floor(camPos.z / CLOUD_PERIOD) * CLOUD_PERIOD;
    let k = 0;
    for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
      this.clouds[k++].position.set(bx + dx * CLOUD_PERIOD + wind, CLOUD_Y, bz + dz * CLOUD_PERIOD);
    }
    this.cloudMat.color.copy(this.tint).multiplyScalar(0.62 + 0.38 * day);
    return { sky: this.skyColor, tint: this.tint, day };
  }
}
