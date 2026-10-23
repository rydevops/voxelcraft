// VoxelCraft: game bootstrap, input, interaction, HUD and the main loop.
import * as THREE from 'three';
import { World, LATEST_TERRAIN } from './world.js';
import { B, BLOCKS, STAIRS, DOOR, DOOR_PLACE, DOOR_KINDS, PALETTE, PLANT, PLANT_H, PLANT_HALF, LEAN, SUPPORT, SOLID, IS_WATER, TILLS_INTO, OPENS, ROLE_LOG, HYDRATION, UNBREAKABLE, BED, CHEST, PLACE_ON, AXIS_VARIANTS } from './blocks.js';
import { REG } from './registry.js';
import { I, isBlockItem, itemForBlock, isDoorItem, doorBlockOf, bedOf, upgradeOf, isShears, toolDigs, rollLoot, itemName, toolOf, toolWear, heldLight, isOffhand, foodValue, saturationValue, plantsOf, placesOf, WINDOWS, tierName, miningInfo, dropsFor, shatterDrops, GOALS, GROWTH_INFO } from './items.js';
import { Inventory } from './inventory.js';
import { ChunkRenderer } from './chunks.js';
import { Player, raycast } from './player.js';
import { Sky } from './sky.js';
import { AudioEngine } from './audio.js';
import { Drops } from './drops.js';
import { blockGeometry, spriteGeometry } from './models.js';
import { createUI } from './ui.js';
import { Settings, ACTIONS, BASE_TURN_RATE, keyLabel } from './settings.js';
import { createOptions } from './options.js';
import { growPlants, spreadGrass, updateHydration } from './plants.js';
import { GravitySim } from './gravity.js';
import { AttachSim } from './attach.js';
import { Furnaces } from './furnace.js';
import { canSprint, isStarving as starving, tickHunger, eat as eatFood, reduceDamage, fallDamage, jumpCost, tickBreath, MAX_AIR, weaponDamage, attackWear, xpLevel } from './survival.js';
import { brightness, MIN_BRIGHTNESS } from './light.js';
import { BreakTimer } from './mining.js';
import { buildAtlas, atlasAnimator, blockColors, hungerIcon, heartIcon, armorIcon, bubbleIcon, itemIcon, plantIcon, logoCanvas, dirtBackground, sunTexture, moonTexture, glowTexture, crackTexture } from './textures.js';
import { WaterSim } from './water.js';
import { MinimapData, gameClock, gameDayPart } from './minimap.js';
import { MinimapView } from './minimapview.js';
import { createFullMap } from './fullmap.js';
import { createHudPanels } from './hudpanels.js';
import { createBook } from './book.js';
import { createVillagers } from './villagers.js';
import { villagesNear } from './villages.js';
import { runStartup } from './startup.js';
import { openStorage } from './storage.js';
import { createTouchControls } from './touch.js';
import { lookDelta } from './touchmath.js';
import { installFit } from './fit.js';
import { findFallingTree, removeTree, landTree, shatterTree, fallDirection } from './physics.js';
import { Mobs } from './mobs.js';
import { createMobModels } from './mobmodels.js';
import { weatherNow } from './weather.js';
import { createWeatherFx } from './weatherfx.js';
import { daylight } from './daylight.js';
import { bedCells, bedGroup, bedDrops, bedSpawn, isBed, sleepTime } from './beds.js';
import { Chests, ChestSource, chestTier } from './chests.js';
import { Quests } from './quests.js';
import { createDialog } from './dialog.js';
import { setDoorOpen } from './doors.js';
import { bedtime } from './villagerai.js';

const GAME = REG.game;      // survival rules and tuning numbers from data/game.json
const HUNGER = GAME.hunger;

THREE.ColorManagement.enabled = false; // author colours exactly as written (retro look)

const $ = (id) => document.getElementById(id);
const settings = new Settings();
// Phones and tablets get on-screen controls (?touch / ?desktop in the address force either way; the Options screen has a switch)
const urlParams = new URLSearchParams(location.search);
const forcedTouch = urlParams.has('touch') ? true : urlParams.has('desktop') ? false : null;
const wantsTouch = () => forcedTouch ?? !!settings.get('touchControls');
let touchMode = wantsTouch();
document.body.classList.toggle('touch', touchMode);
const hud = createHudPanels(settings, { onClose: () => { if (screen === 'hud') closeScreen(); } }); // the panels at the top: fold, hide, move (the HUD key; the gear on a touch screen)
const refitHud = installFit(() => settings.get('hudSize'), () => settings.get('hotbarSize'), () => settings.get('touchButtonSize')); // (also called when the HUD size changes, see applySettings)
const params = new URLSearchParams(location.search);

// A newer build of the game was installed (the registration script in the built index.html checks every time the app is
// opened). Before a world is loaded, reload into it straight away, skipping the developer logo; during play just say so:
// quitting to the title reloads the page, which picks it up.
let inWorld = false;
function onUpdate() {
  if (inWorld) { toast('A new version is ready: it loads when you quit to the title.'); return; }
  const url = new URL(location.href);
  url.searchParams.set('title', '');
  location.replace(url);
}
window.addEventListener('vc-update', onUpdate);
if (window.__vcUpdated) onUpdate(); // it arrived before this script ran

// Only one VoxelCraft tab can run at a time: two tabs would fight over the same saved world.
async function claimGameSlot() {
  if (!navigator.locks) return true;
  for (let attempt = 0; attempt < 8; attempt++) {
    const got = await new Promise((resolve) => {
      navigator.locks.request('voxelcraft-game', { ifAvailable: true }, (lock) => {
        if (!lock) { resolve(false); return undefined; }
        resolve(true);
        return new Promise(() => {}); // hold the lock until this tab is closed
      });
    });
    if (got) return true;
    await new Promise((r) => setTimeout(r, 250)); // a tab that is closing or reloading lets go a moment later
  }
  return false;
}
if (!(await claimGameSlot())) {
  document.body.innerHTML = '<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#1b1410;color:#fff;font-family:Consolas,monospace;text-align:center;padding:24px">' +
    '<h1 style="margin:0">VoxelCraft is already open</h1><p style="max-width:520px;color:#ccc;margin:0">Only one copy of the game can run at a time. Close the other tab or window, then reload this page.</p></div>';
  await new Promise(() => {}); // stop here: nothing else may run
}
const AUTOPLAY = params.has('autoplay'); // test hook: skip pointer lock

// ---------------------------------------------------------------------------------------
// Art that doesn't depend on the world
// ---------------------------------------------------------------------------------------
const { canvas: atlasCanvas, avg } = await buildAtlas();
const particleColors = blockColors(avg);
document.documentElement.style.setProperty('--dirt', `url(${dirtBackground(atlasCanvas)})`);
const logo = $('logo');
const logoArt = logoCanvas(atlasCanvas);
logo.width = logoArt.width;
logo.height = logoArt.height;
logo.getContext('2d').drawImage(logoArt, 0, 0);

// ---------------------------------------------------------------------------------------
// Renderer / scene
// ---------------------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ canvas: $('game'), antialias: false, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x9bc4ff, 40, 90);
const camera = new THREE.PerspectiveCamera(75, 1, 0.05, 700);
camera.rotation.order = 'YXZ';
scene.add(camera);

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

const pixelTex = (canvas) => {
  const t = new THREE.CanvasTexture(canvas);
  t.magFilter = t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  return t;
};
const atlasTex = pixelTex(atlasCanvas);
const animateAtlas = atlasAnimator(atlasCanvas);
const materials = {
  solid: new THREE.MeshBasicMaterial({ map: atlasTex, vertexColors: true, alphaTest: 0.5 }),
  water: new THREE.MeshBasicMaterial({ map: atlasTex, vertexColors: true, transparent: true, opacity: 0.74, depthWrite: false }),
  sprite: new THREE.MeshBasicMaterial({ vertexColors: true }), // items lying on the ground
  // grass + crops: cut-out crossed quads that sway in the wind (vertex shader driven by uTime and each vertex's height weight)
  plant: new THREE.MeshBasicMaterial({ map: atlasTex, vertexColors: true, alphaTest: 0.5, side: THREE.DoubleSide }),
  // tree leaves: normal cubes, but with the same wind as the grass so the canopy rustles
  leaves: new THREE.MeshBasicMaterial({ map: atlasTex, vertexColors: true, alphaTest: 0.5 }),
};
// Vertex colours carry the sky light; the time-of-day tint multiplies them in the shader, then the block light
// ("aBlk": torches, a lit furnace) is added on top untinted, so lights still glow at night.
const tintUniform = { value: new THREE.Color(1, 1, 1) };
const floorUniform = { value: MIN_BRIGHTNESS }; // the dimmest a lit-by-nothing face gets
const warmUniform = { value: new THREE.Color(1.0, 0.84, 0.58) }; // the colour of block light
materials.tint = tintUniform;
function withBlockLight(shader) {
  shader.uniforms.uTint = tintUniform;
  shader.uniforms.uWarm = warmUniform;
  shader.uniforms.uFloor = floorUniform;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nattribute vec2 aBlk;\nuniform vec3 uTint;\nuniform vec3 uWarm;\nuniform float uFloor;')
    .replace('#include <color_vertex>', '#include <color_vertex>\n#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n  vColor.rgb = min(vec3(1.0), max(vColor.rgb * uTint, vec3(aBlk.y * uFloor)) + aBlk.x * uWarm);\n#endif');
}
materials.solid.onBeforeCompile = withBlockLight;
materials.water.onBeforeCompile = withBlockLight;
const windTime = { value: 0 };
const windStrength = { value: 1 }; // 1 = a breeze; a storm turns it up (see weatherfx.js)
const withWind = (shader) => {
  withBlockLight(shader);
  shader.uniforms.uTime = windTime;
  shader.uniforms.uWind = windStrength;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nattribute float aSway;\nuniform float uTime;\nuniform float uWind;')
    .replace('#include <begin_vertex>', `#include <begin_vertex>
      vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
      float ph = uTime * 2.1 + wp.x * 0.65 + wp.z * 0.45;
      float gust = sin(ph) + 0.5 * sin(ph * 2.3 + 1.7);
      transformed.x += gust * 0.075 * aSway * uWind;
      transformed.z += cos(ph * 0.9 + wp.x * 0.3) * 0.05 * aSway * uWind;`);
};
materials.plant.onBeforeCompile = withWind;
materials.leaves.onBeforeCompile = withWind;
const sky = new Sky(scene, { sun: sunTexture(), moon: moonTexture(), glow: glowTexture() });
sky.setPixelRatio(renderer.getPixelRatio());

// ---------------------------------------------------------------------------------------
// First-person arms. There is always an arm and a hand at the bottom right (and a left one when something is in the off hand); whatever
// is selected in the hotbar is held in the hand: a block, a tool, food. The arm is drawn from the shoulder (off the screen) to the hand, so
// whenever the held thing swings, bobs or is raised to your mouth, the arm follows. Transparent + no depth test so it is drawn last and
// never clips into walls.
// ---------------------------------------------------------------------------------------
const heldBlockMat = new THREE.MeshBasicMaterial({ map: atlasTex, vertexColors: true, alphaTest: 0.5, fog: false, depthTest: false, transparent: true });
const heldSpriteMat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, depthTest: false, transparent: true });
const heldArmMat = new THREE.MeshBasicMaterial({ color: 0xc99a74, fog: false, depthTest: false, transparent: true });
const sleeveMat = new THREE.MeshBasicMaterial({ color: 0x2f8e9c, fog: false, depthTest: false, transparent: true });
const SLEEVE = new THREE.Color(0x2f8e9c);
const held = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.01, 0.01), heldSpriteMat); // (the thing in the hand; its shape is set in refreshHeld)
held.renderOrder = 999;
held.frustumCulled = false;
held.visible = false;
camera.add(held);
// the offhand: a torch in the shield slot is held in the left hand
const heldOff = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.01, 0.01), heldSpriteMat);
heldOff.renderOrder = 999;
heldOff.frustumCulled = false;
heldOff.visible = false;
camera.add(heldOff);
let heldOffKey = 0;
const OFF_POSE = { pos: [-0.56, -0.2, -0.72], rot: [0.12, 0.5, -0.06], scale: 0.4 };
// an arm: a sleeve from the shoulder and a hand at the end, stretched between two points
function makeArm() {
  const g = new THREE.Group();
  const sleeveGeo = new THREE.BoxGeometry(0.19, 0.19, 1);
  sleeveGeo.translate(0, 0, -0.5); // runs from the shoulder along -z; scaled to the length
  const sleeve = new THREE.Mesh(sleeveGeo, sleeveMat);
  const hand = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.2), heldArmMat);
  for (const m of [sleeve, hand]) { m.renderOrder = 998; m.frustumCulled = false; }
  g.add(sleeve, hand);
  g.visible = false;
  camera.add(g);
  return { g, sleeve, hand };
}
const armRight = makeArm(), armLeft = makeArm();
const SHOULDER_R = new THREE.Vector3(0.78, -1.0, -0.1), SHOULDER_L = new THREE.Vector3(-0.78, -1.0, -0.1);
const _aim = new THREE.Vector3(), _handR = new THREE.Vector3(), _handL = new THREE.Vector3(), NEG_Z = new THREE.Vector3(0, 0, -1);
function aimArm(arm, shoulder, hand) {
  _aim.copy(hand).sub(shoulder);
  const len = _aim.length();
  arm.g.position.copy(shoulder);
  arm.g.quaternion.setFromUnitVectors(NEG_Z, _aim.normalize());
  arm.sleeve.scale.z = Math.max(0.05, len - 0.14);
  arm.hand.position.z = -(len - 0.1);
}
const POSES = {
  arm:    { pos: [0.4, -0.38, -0.7], rot: [0, 0, 0], scale: 1, hold: [0, 0, 0] },
  block:  { pos: [0.5, -0.38, -0.86], rot: [0.25, -0.6, 0.05], scale: 0.17, hold: [0.04, -0.09, 0.15] },
  sprite: { pos: [0.42, -0.3, -0.78], rot: [0.1, -0.5, 0.05], scale: 0.32, hold: [0.03, -0.08, 0.08] },
  // Tools are held like in a first-person game: handle down towards your hand at the lower right, head up and forward, the
  // flat of the blade turned a little towards you so you can see its thickness. Swinging pivots the whole tool about the hand.
  tool:   { pos: [0.5, -0.22, -0.82], rot: [0.12, 2.45, 0.38], scale: 0.44, pivot: [0.6, -0.5, -0.78] },
};
// An axe is held with its blade turned down (the sprite is flipped over about the handle)
POSES.axe = { ...POSES.tool, flip: true };
let pose = POSES.arm;
let heldKey = -1;
const _flipQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 1, 0).normalize(), Math.PI);
const _swingQ = new THREE.Quaternion(), _swingE = new THREE.Euler(), _pivot = new THREE.Vector3();

function refreshOffhand() {
  const id = inventory.equipment.shield && isOffhand(inventory.equipment.shield.id) ? inventory.equipment.shield.id : 0;
  if (id !== heldOffKey) { heldOffKey = id; if (id) heldOff.geometry = spriteGeometry(id, true); }
  heldOff.visible = !!id && !dead && !creativePalette();
  armLeft.g.visible = heldOff.visible;
  if (!heldOff.visible) return;
  // sways a little with your steps, ahead of the other hand's swing
  heldOff.position.set(OFF_POSE.pos[0] + Math.sin(bob + 1.3) * 0.01, OFF_POSE.pos[1] + Math.abs(Math.cos(bob + 1.3)) * 0.012 + Math.sin(elapsed * 7) * 0.002, OFF_POSE.pos[2]);
  heldOff.rotation.set(OFF_POSE.rot[0], OFF_POSE.rot[1], OFF_POSE.rot[2]);
  heldOff.scale.setScalar(OFF_POSE.scale);
  _handL.set(heldOff.position.x - 0.02, heldOff.position.y - 0.17, heldOff.position.z + 0.14);
  aimArm(armLeft, SHOULDER_L, _handL);
}
const creativePalette = () => screen === 'palette';

function refreshHeld() {
  const st = stackAt(slot);
  const id = st ? st.id : 0;
  if (id === heldKey) return;
  heldKey = id;
  if (!id) { held.visible = false; pose = POSES.arm; }
  else if (isBlockItem(id)) { held.geometry = blockGeometry(id); held.material = heldBlockMat; pose = POSES.block; held.visible = true; }
  else { held.geometry = spriteGeometry(id, true); held.material = heldSpriteMat; pose = !toolOf(id) ? POSES.sprite : toolOf(id).type === 'axe' ? POSES.axe : POSES.tool; held.visible = true; }
}

// ---------------------------------------------------------------------------------------
// Block highlight, crack overlay, particles
// ---------------------------------------------------------------------------------------
const outline = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.004, 1.004, 1.004)),
  new THREE.LineBasicMaterial({ color: 0x000000, fog: false })
);
outline.visible = false;
scene.add(outline);

const crackTex = pixelTex(crackTexture());
crackTex.repeat.set(0.1, 1);
const crack = new THREE.Mesh(
  new THREE.BoxGeometry(1.006, 1.006, 1.006),
  new THREE.MeshBasicMaterial({ map: crackTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })
);
crack.visible = false;
scene.add(crack);

const MAX_PARTICLES = 256;
const pMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff }), MAX_PARTICLES);
pMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
pMesh.frustumCulled = false;
pMesh.count = 0;
scene.add(pMesh);
const particles = [];
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
const _c = new THREE.Color();

function spawnBurst(x, y, z, id) {
  const base = particleColors[id] || [0.5, 0.5, 0.5];
  for (let i = 0; i < 14 && particles.length < MAX_PARTICLES; i++) {
    const v = 0.75 + Math.random() * 0.5;
    particles.push({
      x: x + 0.2 + Math.random() * 0.6, y: y + 0.2 + Math.random() * 0.6, z: z + 0.2 + Math.random() * 0.6,
      vx: (Math.random() - 0.5) * 3.5, vy: Math.random() * 3.5 + 1, vz: (Math.random() - 0.5) * 3.5,
      life: 0.55 + Math.random() * 0.5, size: 0.07 + Math.random() * 0.08,
      r: base[0] * v, g: base[1] * v, b: base[2] * v,
    });
  }
}

// Juice and crumbs flying off the food in your hand each time you take a bite (coloured like the food itself)
const foodColors = new Map();
function foodColor(id) {
  if (!foodColors.has(id)) {
    const c = itemIcon(atlasCanvas, id, 16), px = c.getContext('2d').getImageData(0, 0, 16, 16).data;
    let r = 0, g = 0, b = 0, n = 0;
    for (let i = 0; i < px.length; i += 4) if (px[i + 3] > 200) { r += px[i]; g += px[i + 1]; b += px[i + 2]; n++; }
    foodColors.set(id, n ? [r / n / 255, g / n / 255, b / n / 255] : [0.8, 0.5, 0.2]);
  }
  return foodColors.get(id);
}
const _mouth = new THREE.Vector3();
function spawnJuice(id) {
  const base = foodColor(id);
  camera.updateMatrixWorld();
  camera.localToWorld(_mouth.set(0.02, -0.2, -0.5)); // just in front of the face, where the food is held while eating
  const fwd = camera.getWorldDirection(lookDir);
  for (let i = 0; i < 9 && particles.length < MAX_PARTICLES; i++) {
    const wet = i % 3 === 0; // every third drop is a light, glistening juice droplet
    const k = wet ? 1.25 : 0.8 + Math.random() * 0.3;
    particles.push({
      x: _mouth.x + (Math.random() - 0.5) * 0.08, y: _mouth.y + (Math.random() - 0.5) * 0.06, z: _mouth.z + (Math.random() - 0.5) * 0.08,
      vx: fwd.x * 0.6 + (Math.random() - 0.5) * 1.6, vy: 0.9 + Math.random() * 1.4, vz: fwd.z * 0.6 + (Math.random() - 0.5) * 1.6,
      life: 0.35 + Math.random() * 0.3, size: 0.018 + Math.random() * 0.026,
      r: Math.min(1, base[0] * k + (wet ? 0.15 : 0)), g: Math.min(1, base[1] * k + (wet ? 0.15 : 0)), b: Math.min(1, base[2] * k + (wet ? 0.15 : 0)),
    });
  }
}

function updateParticles(dt) {
  let n = 0;
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    p.vy -= 18 * dt;
    p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
  }
  for (const p of particles) {
    _p.set(p.x, p.y, p.z);
    const s = p.size * Math.min(1, p.life * 3);
    _s.set(s, s, s);
    _m.compose(_p, _q, _s);
    pMesh.setMatrixAt(n, _m);
    pMesh.setColorAt(n, _c.setRGB(p.r, p.g, p.b));
    n++;
  }
  pMesh.count = n;
  pMesh.instanceMatrix.needsUpdate = true;
  if (pMesh.instanceColor) pMesh.instanceColor.needsUpdate = true;
}

// ---------------------------------------------------------------------------------------
// Persistence (the Node server keeps world.json)
// ---------------------------------------------------------------------------------------
// Each world is a file on the server (worlds/<id>.json); the startup screens pick one (or create it).
let optionsOpen = false;
const options = createOptions(settings, {
  onClose: () => { optionsOpen = false; },
  // moving the touch buttons: only in a world on a touch device; afterwards the Options screen comes back
  layout: { available: () => inWorld && touchMode, edit: () => touchCtl.edit(() => { optionsOpen = true; options.open(); }), reset: () => settings.set('touchLayout', {}) },
});
held.visible = false;
armRight.g.visible = false;
// The audio engine exists from the start so the title screen can play its theme. Browsers keep it silent until the first
// click or key press; it starts then.
const audio = new AudioEngine();
window.__audio = audio; // for poking at from the console / tests
window.__atlas = atlasCanvas;
audio.setVolumes(settings.get('musicVolume'), settings.get('sfxVolume'));
const storage = await openStorage(); // the dev server's worlds folder, or this browser's own storage (installed / hosted app)
const startup = await runStartup({
  params, autoplay: AUTOPLAY, atlasCanvas, titleLogo: logoArt, openOptions: () => options.open(),
  renderer, scene, camera, materials, sky, windTime, audio, storage, settings,
  tickAtlas: (t) => { if (animateAtlas(t)) atlasTex.needsUpdate = true; }, // water and flames animate on the title screen too
});
inWorld = true;
heldKey = -1;
audio.setScene('game'); // from here on the shuffled soundtrack plays
const worldId = startup.id;

// ---------------------------------------------------------------------------------------
// Game state
// ---------------------------------------------------------------------------------------
const save = startup.save;
const seed = save?.seed ?? Math.floor(Math.random() * 2 ** 31);
// Worlds that were already played keep the original terrain (their builds sit on it); new worlds get the biome terrain
const world = new World(seed, { terrain: save?.terrain ?? (save?.player ? 1 : LATEST_TERRAIN) });
if (save?.edits) world.loadEdits(save.edits, save.legacyCaves);

const chunkRenderer = new ChunkRenderer(scene, world, materials, save?.radius ?? 6, (c) => mapData.chunkColumns(c)); // the map keeps what a chunk looked like when it unloads
const player = new Player(world);
const drops = new Drops(scene, world, materials.solid, materials.sprite);
drops.load(save?.drops);
// colour a block shows on the map: the average of its top texture
const mapColor = (id) => { const t = avg[BLOCKS[id]?.top]; return t ? [t[0] * 255, t[1] * 255, t[2] * 255] : [90, 90, 90]; };
const mapData = new MinimapData(world, mapColor);
const minimap = new MinimapView($('minimap'), mapData);
// tap the minimap (or press the map key) for the full-screen map
const fullMap = createFullMap({ data: mapData, getPlayer: () => ({ x: player.pos.x, z: player.pos.z, yaw: player.yaw }), onClose: () => closeScreen() });
$('minimap').addEventListener('click', () => { if (playing && !screen && !dead) openScreen('map'); });
const villagers = createVillagers({ scene, world });
const waterSim = new WaterSim(world);
// Blocks with "gravity" (sand) fall when unsupported; each falling block is drawn as a small cube until it lands
const fallingBlockMeshes = new Map();
const gravitySim = new GravitySim(world, {
  onSpawn(e) {
    const m = new THREE.Mesh(blockGeometry(e.id), materials.solid);
    m.position.set(e.x + 0.5, e.y + 0.5, e.z + 0.5);
    scene.add(m);
    fallingBlockMeshes.set(e, m);
  },
  onLand(e) {
    scene.remove(fallingBlockMeshes.get(e));
    fallingBlockMeshes.delete(e);
    chunkRenderer.remeshNow(neighbourChunks(e.x, e.z));
    audio.block(BLOCKS[e.id].sound, 'place');
  },
  onDrop(e) { // it landed on something that was built in its way: it breaks into its loot
    scene.remove(fallingBlockMeshes.get(e));
    fallingBlockMeshes.delete(e);
    if (!creative) for (const d of dropsFor(e.id, true)) drops.spawn(d.id, d.n, e.x + 0.5, e.rest + 0.5, e.z + 0.5);
    spawnBurst(e.x, e.rest, e.z, e.id);
  },
}); // flowing water: wakes up whenever a block next to water changes

// Torches (and anything with "support" in blocks.json) drop off when the block they hang on is removed
const attachSim = new AttachSim(world, {
  onBreak(x, y, z, id) {
    spawnBurst(x, y, z, id);
    audio.block(BLOCKS[id].sound, 'break');
    if (!creative) for (const d of dropsFor(id, true)) drops.spawn(d.id, d.n, x + 0.5, y + 0.4, z + 0.5);
  },
});
// Every furnace that has something in it: smelting carries on while you are away from the window. A burning furnace
// swaps to its lit look (and gives off light); it swaps back when the fire goes out.
const furnaces = new Furnaces({
  onLit(x, y, z, lit) {
    if (!world.isLoaded(x, z)) return false; // try again when the chunk is back
    const cur = world.getBlock(x, y, z);
    if (cur !== B.FURNACE && cur !== B.FURNACE_LIT) return true; // it is gone
    const want = lit ? B.FURNACE_LIT : B.FURNACE;
    if (cur !== want) world.setBlock(x, y, z, want);
    return true;
  },
});
furnaces.load(save?.furnaces);

let creative = save?.mode === 'creative';
const inventory = new Inventory(); // survival: starts completely empty
inventory.load(save?.inventory);
inventory.loadEquipment(save?.equipment);
const creativeHotbar = save?.creativeHotbar ?? [...GAME.creativeHotbarIds];
const progress = {
  collected: new Set(save?.progress?.collected),
  crafted: new Set(save?.progress?.crafted),
  flags: new Set(save?.progress?.flags), // one-off achievements that aren't items: 'tilled', 'planted', 'ate'
};
// ---- what the living world adds: chests, quests, creatures, weather, a bed to wake up in ----
const chests = new Chests();
chests.load(save?.chests);
const quests = new Quests(seed);
quests.load(save?.quests);
let xp = save?.xp ?? 0;                 // experience from monsters (for the armour and tool augments to come)
let spawnBed = save?.bed ?? null;        // { x, y, z }: the bed you last slept in (you come back there after dying, until it is broken)
const mobs = new Mobs(world, { seed });
mobs.load(save?.mobs);
const mobModels = createMobModels({ scene });
const weatherFx = createWeatherFx({ scene, world, audio, windUniform: windStrength });
let weatherState = weatherNow(seed, 0, 'temperate'), biomeNow = { key: null, label: '', climate: 'temperate' }, fogMul = 1;
let air = MAX_AIR, drownTimer = 0;       // breath under water
let sleeping = false, attackTimer = 0, targetMob = null;
const NO_INPUT = {};
const MAX_FOOD = GAME.player.maxFood;
let food = Math.min(MAX_FOOD, save?.food ?? MAX_FOOD);
let saturation = save?.saturation ?? GAME.hunger.respawnSaturation; // the hidden reserve that heals you (see survival.js)
let eating = 0;                                     // seconds spent chewing the current food item
const MAX_HEALTH = GAME.player.maxHealth;
let health = save?.health > 0 ? Math.min(MAX_HEALTH, save.health) : MAX_HEALTH;
let dead = false;
let dayCount = save?.day ?? 0;
const GROWTH_SCALE = Number(params.get('growth')) || 1; // test hook: ?growth=30 makes crops grow 30x faster
let slot = save?.slot ?? 0;
let dayTime = save?.time ?? GAME.time.startTime;
sky.setMoonPhase(dayCount);
let elapsed = 0;

const stackAt = (i) => (creative ? { id: creativeHotbar[i], n: 1, d: 0 } : inventory.slots[i]);
const heldId = () => stackAt(slot)?.id ?? 0;

const spawnPoint = save?.spawnPoint ?? world.findSpawn(); // where you respawn
const spawn = save?.player ?? spawnPoint;
player.pos.x = spawn.x; player.pos.y = spawn.y; player.pos.z = spawn.z;
player.yaw = spawn.yaw ?? 0;
player.pitch = spawn.pitch ?? 0;
player.flying = creative && !!spawn.flying;

// Warm up the terrain around the player so they never spawn over a void
chunkRenderer.preload(player.pos.x, player.pos.z, 3);
// If the saved spot is inside terrain, lift the player to the surface
while (player.collides(player.pos.x, player.pos.y, player.pos.z) && player.pos.y < 120) player.pos.y += 1;

const soundOf = (id) => BLOCKS[id]?.sound ?? 'default'; // a block's sound material (data/sounds.json)
const blockUnderFeet = () => world.getBlock(Math.floor(player.pos.x), Math.floor(player.pos.y - 0.2), Math.floor(player.pos.z));
player.events.step = () => audio.block(BLOCKS[blockUnderFeet()]?.sound || 'default', 'step');
player.events.splash = () => audio.splash();
player.events.land = () => audio.block(BLOCKS[blockUnderFeet()]?.sound || 'default', 'place');
// Falling 4 or more blocks hurts: 1 point (half a heart) for the fourth block, then one more per extra block
// Every jump costs a little food, more when sprinting
player.events.jump = (sprinting) => { if (!creative) food = Math.max(0, food - jumpCost(sprinting)); };
player.events.fall = (dist) => {
  const hurt = fallDamage(dist);
  if (creative || hurt <= 0) return;
  damage(reduceDamage(hurt, inventory.armor), 'You hit the ground too hard'); // armor softens the landing
  if (!dead) kick.v = -GAME.fall.kick; // only a hit that hurt makes the view bounce
};

// ---------------------------------------------------------------------------------------
// Crafting stations, goals, UI wiring
// ---------------------------------------------------------------------------------------
let goalDone = GOALS.map((g) => g.done(progress));
function checkGoals() {
  const now = GOALS.map((g) => g.done(progress));
  now.forEach((d, i) => { if (d && !goalDone[i]) { toast('Goal complete: ' + GOALS[i].text); audio.craft(); } });
  goalDone = now;
  book.setGoals(goalDone);
}

function tossStack(st) {
  const e = player.eye;
  const d = camera.getWorldDirection(lookDir);
  drops.spawn(st.id, st.n, e.x + d.x * 0.5, e.y - 0.3 + d.y * 0.5, e.z + d.z * 0.5,
    { d: st.d || 0, delay: 1.5, vx: d.x * 4, vy: d.y * 4 + 1.5, vz: d.z * 4 });
}

const ui = createUI({
  atlas: atlasCanvas,
  inventory,
  getHotbarStack: stackAt,
  onSelect: (i) => selectSlot(i),
  onToss: tossStack,
  onCraft: (recipe, result) => {
    if (!result.ok) return;
    audio.craft();
    progress.crafted.add(recipe.out);
    if (result.leftover > 0) tossStack({ id: recipe.out, n: result.leftover, d: 0 });
    checkGoals();
    refreshHotbar();
  },
  onPalettePick: (id) => { creativeHotbar[slot] = id; refreshHotbar(); showName(); },
  onEquip: () => { // put something on: counts for the goals
    audio.craft();
    progress.flags.add('equipped');
    checkGoals();
    refreshHotbar();
  },
  onNotice: (msg) => toast(msg),
  onSmeltTake: (st) => { // took something out of a furnace: it counts as crafted for the goals
    audio.craft();
    progress.crafted.add(st.id);
    checkGoals();
    refreshHotbar();
  },
});

// A villager's job: accept or decline, hand it in for the reward (the rules are in quests.js)
const dialog = createDialog({
  quests, inventory,
  onClose: () => { if (screen === 'talk') closeScreen(); },
  onAccept: () => { audio.craft(); toast('Quest accepted'); },
  onComplete: (v, result) => {
    for (const l of result.loot) { const left = inventory.add(l.id, l.n); progress.collected.add(l.id); if (left > 0) tossStack({ id: l.id, n: left, d: 0 }); }
    if (!creative) xp += result.xp;
    progress.flags.add('quest');
    audio.craft();
    toast(`Quest complete! +${result.xp} XP`);
    refreshHotbar();
    checkGoals();
  },
});

// The quest book: the goals, then the jobs villagers have given you (key on a computer, a button on a phone)
const book = createBook({ goals: GOALS, jobs: () => quests.activeList(inventory), finished: () => quests.completed, onClose: () => { if (screen === 'book') closeScreen(); } });

let nameTimer = 0;
function showName() {
  const st = stackAt(slot);
  const el = $('blockname');
  el.textContent = st ? itemName(st.id) : '';
  el.classList.add('show');
  clearTimeout(nameTimer);
  nameTimer = setTimeout(() => el.classList.remove('show'), 1400);
}

function refreshHotbar() {
  ui.renderHotbar(slot);
  refreshHeld();
}

function selectSlot(i) {
  slot = (i + 9) % 9;
  refreshHotbar();
  showName();
}

// ---- health ----------------------------------------------------------------------------
let shownHealth = -1;
function renderHealth() {
  const el = $('health');
  el.style.display = creative ? 'none' : 'flex';
  const h = Math.ceil(health);
  if (h === shownHealth) return;
  shownHealth = h;
  el.replaceChildren(...Array.from({ length: 10 }, (_, i) => {
    const v = health - i * 2;
    return heartIcon(v >= 2 ? 2 : v >= 1 ? 1 : 0);
  }));
  el.classList.toggle('low', health <= 6);
}
let hurtTimer = 0;
function flashHurt() { // a red wash over the whole screen that holds for a moment, then fades
  const el = $('hurt');
  el.classList.add('flash');
  clearTimeout(hurtTimer);
  hurtTimer = setTimeout(() => el.classList.remove('flash'), 220);
}
// A short downward jolt of the camera (a damped spring), used when a fall hurts
const kick = { y: 0, v: 0 };
function damage(amount, cause = 'You died') {
  if (creative || dead || amount <= 0) return;
  health = Math.max(0, health - amount);
  renderHealth();
  flashHurt();
  audio.hurt();
  if (health <= 0) die(cause);
}
const DEATH_DROP_LIFE = 1800; // seconds your things stay on the ground
function die(cause) {
  dead = true;
  if (screen) hideScreen(); // gives back whatever the cursor was holding
  // everything you carry spills out where you fell; you come back at your spawn point with nothing
  let spilled = 0;
  const at = player.pos;
  for (const st of inventory.takeEverything()) { // the inventory, the backpack contents and everything you wear
    drops.spawn(st.id, st.n, at.x, at.y + 0.9, at.z, { d: st.d, delay: 1.5, life: DEATH_DROP_LIFE });
    spilled++;
  }
  refreshHotbar();
  $('death-cause').textContent = cause + (spilled ? '. Your things are where you fell.' : '');
  $('death').hidden = false;
  document.exitPointerLock?.(); // (iPhone Safari has no Pointer Lock API at all)
  setPlaying(false);
}
function respawn() {
  health = MAX_HEALTH;
  food = MAX_FOOD;
  saturation = HUNGER.respawnSaturation;
  dead = false;
  air = MAX_AIR; drownTimer = 0;
  $('death').hidden = true;
  let at = spawnPoint, msg = null;
  if (spawnBed) { // back to the bed you slept in: unless it is gone, or there is nowhere to stand beside it
    chunkRenderer.preload(spawnBed.x, spawnBed.z, 2);
    if (isBed(world, spawnBed.x, spawnBed.y, spawnBed.z)) { at = bedSpawn(world, spawnBed.x, spawnBed.y, spawnBed.z) ?? spawnPoint; if (at === spawnPoint) msg = 'Your bed is boxed in: back at the world spawn'; }
    else { spawnBed = null; msg = 'Your bed was gone: back at the world spawn'; }
  }
  player.pos.x = at.x; player.pos.y = at.y; player.pos.z = at.z;
  player.vel.x = player.vel.y = player.vel.z = 0;
  player.stepSmooth = 0; player.fallPeak = null;
  chunkRenderer.preload(player.pos.x, player.pos.z, 2);
  while (player.collides(player.pos.x, player.pos.y, player.pos.z) && player.pos.y < 120) player.pos.y += 1;
  shownHealth = shownFood = -1;
  renderHealth();
  renderHunger();
  if (AUTOPLAY) setPlaying(true); else { setPlaying(true); lock(); }
  if (msg) toast(msg, 3500);
}
$('respawn').addEventListener('click', respawn);

let toastTimer = 0;
function toast(msg, ms = 2200) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), ms);
}

refreshHotbar();
checkGoals();
if (!goalDone.some(Boolean)) setTimeout(() => toast(touchMode ? 'Tap the book button (top left) to see what to do' : `Press ${keyLabel(settings.key('quests'))} to open your quest book: it shows what to do`, 6500), 1800);

// ---------------------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------------------
const keys = new Set();
const input = { forward: false, back: false, left: false, right: false, jump: false, sprint: false, down: false };
let playing = false;
let screen = null; // null | 'inv' | 'palette'
let sprintHeld = false;
let lastJump = 0;
let mouseDown = { left: false, right: false };

// Key bindings live in `settings`, so every check goes through the action name, never a hard-coded key.
const isDown = (action) => keys.has(settings.key(action));

// Touch controls: the buttons do what the mouse and keys do, through the same state the rest of the game already reads
function turnBy(dYaw, dPitch) {
  player.yaw += dYaw;
  player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch + dPitch));
}
function goFullscreen() {
  const de = document.documentElement;
  if (document.fullscreenElement || !de.requestFullscreen || matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches) return;
  de.requestFullscreen({ navigationUI: 'hide' }).then(() => window.screen.orientation?.lock?.('landscape')).catch(() => {});
}
const touchCtl = createTouchControls({
  changed: () => syncInput(),
  look: (dx, dy) => {
    if (!playing) return;
    const r = lookDelta(dx, dy, BASE_TURN_RATE * settings.get('sensitivity'), settings.get('invertY'));
    turnBy(r.yaw, r.pitch);
  },
  attack: (on) => { if (!playing) return; mouseDown.left = on; if (!on) resetBreak(); },
  use: (on) => {
    if (!playing) return;
    mouseDown.right = on;
    rightFresh = on;
    if (on) placeTimer = 0;
  },
  jump: () => {
    const now = performance.now();
    if (creative && now - lastJump < 300) setFlying(!player.flying); // double-tap to fly
    lastJump = now;
  },
  fly: () => setFlying(!player.flying),
  inventory: () => { if (playing && !screen) openScreen(creative ? 'palette' : 'inv'); },
  book: () => { if (playing && !screen && !dead) openScreen('book'); },
  closeScreen: () => closeScreen(),
  layoutChanged: (l) => settings.set('touchLayout', l),
  menu: () => { if (!playing) return; setPlaying(false); $('play').textContent = 'Resume'; save_(); },
});
touchCtl.setEnabled(touchMode);

function syncInput() {
  const t = touchCtl.state;
  input.forward = isDown('forward');
  input.back = isDown('back');
  input.left = isDown('left');
  input.right = isDown('right');
  input.strafe = t.strafe;   // the move stick: -1..1 sideways and ahead, scaled by how far it is pushed
  input.ahead = t.forward;
  input.jump = isDown('jump') || t.jump;
  sprintHeld = isDown('sprint') || t.sprint; // (on a touch screen only the sprint button sprints: the stick just walks, faster or slower)
  input.sprint = sprintHeld && sprintAllowed();
  input.crouch = isDown('crouch') || t.crouch;
  input.down = isDown('crouch') || isDown('down') || t.crouch; // flying: crouch key goes down
}

// Advance the clock; every full day the moon moves on to its next phase
function advanceTime(d) {
  dayTime += d;
  while (dayTime >= 1) { dayTime -= 1; dayCount++; sky.setMoonPhase(dayCount); }
}

function setFlying(on) {
  if (!creative) { toast('Flying is only available in creative mode'); return; }
  player.flying = on;
  player.vel.y = 0;
  toast('Flying: ' + (on ? 'ON' : 'OFF'));
}

// inventory / palette screens
function openScreen(kind, context = 'hand', at = null) {
  screen = kind;
  if (kind === 'inv') {
    inventory.linked = nearbyChests(); // crafting reaches into the chests around you
    ui.openInventory(slot, context, WINDOWS[context]?.chest ? at : at && WINDOWS[context]?.furnace ? furnaces.get(at.x, at.y, at.z) : null);
  } else if (kind === 'map') fullMap.open();
  else if (kind === 'talk') { /* the window is already showing */ }
  else if (kind === 'book') book.show();
  else if (kind === 'hud') hud.openMenu();
  else ui.openPalette();
  document.exitPointerLock?.(); // (iPhone Safari has no Pointer Lock API at all)
  if (AUTOPLAY || touchMode) setPlaying(false); // (no pointer lock to lose, so there is no unlock event to pause us)
}
function hideScreen() {
  if (screen === 'inv') { ui.closeInventory(); inventory.linked = []; } else if (screen === 'palette') ui.closePalette(); else if (screen === 'map') fullMap.close(); else if (screen === 'talk') dialog.hide(); else if (screen === 'book') book.hide(); else if (screen === 'hud') hud.cancel();
  screen = null;
  refreshHotbar();
}
// Closing a window (E or Esc) goes straight back to the game, with no menu and no pop-up. Browsers sometimes
// refuse to re-capture the mouse without a user gesture; we keep playing anyway and capture it on your next
// key press or click (see ensureLock), so nothing ever appears on screen.
function closeScreen() {
  hideScreen();
  suppressUnlockUntil = performance.now() + 700;
  setPlaying(true);
  if (!AUTOPLAY) { lock(); lastLockTry = performance.now(); }
}

window.addEventListener('keydown', (e) => {
  if (optionsOpen) return; // the options screen handles its own keys (it is rebinding them)
  if (e.target instanceof HTMLInputElement && e.code !== 'Escape') return; // typing in the recipe search box: these are not game keys
  if (sleeping) { e.preventDefault(); return; } // (asleep: nothing to press)
  if (e.code === 'Escape' && playing && !AUTOPLAY && document.pointerLockElement !== canvasEl && !screen) {
    // playing without the mouse captured (just after closing a window): Esc pauses as usual
    setPlaying(false);
    $('play').textContent = 'Resume';
    save_();
    return;
  }
  if (e.code === 'Escape' && !playing && !screen && !dead && !e.repeat && performance.now() - lastUnlockAt > 250) {
    e.preventDefault();
    resumeGame(); // Esc again closes the pause menu
    return;
  }
  if (e.code !== 'Escape') ensureLock();
  if (e.code === 'Tab' || (e.code.startsWith('F') && e.code !== 'F11' && e.code !== 'F5' && e.code !== 'F12')) e.preventDefault();
  if (e.repeat) { if (playing) { keys.add(e.code); syncInput(); } return; }

  const action = settings.actionFor(e.code);
  if (screen && (action === 'inventory' || (action === 'map' && screen === 'map') || (action === 'quests' && screen === 'book') || (action === 'hudMenu' && screen === 'hud') || e.code === 'Escape')) { e.preventDefault(); closeScreen(); return; }
  if (action === 'map' && playing) { openScreen('map'); return; }
  if (action === 'quests' && playing) { openScreen('book'); return; }
  if (action === 'hudMenu' && playing) { openScreen('hud'); return; }
  if (action === 'inventory' && playing) { openScreen(creative ? 'palette' : 'inv'); return; }
  if (action === 'music') { toggleMusic(); return; }
  if (action === 'debug') { $('debug').hidden = !$('debug').hidden; return; }
  if (!playing) return;

  keys.add(e.code);
  syncInput();
  switch (action) {
    case 'jump': {
      const now = performance.now();
      if (creative && now - lastJump < 300) setFlying(!player.flying); // double-tap to fly
      lastJump = now;
      break;
    }
    case 'fly': setFlying(!player.flying); break;
    case 'offhand': useOffhand(); break;
    case 'sprint': if (!sprintAllowed()) toast('Too hungry to sprint'); break;
    case 'skipTime': advanceTime(0.125); toast('Time skipped'); break;
    case 'drop': if (!creative) dropOne(); break;
    case 'renderUp':
    case 'renderDown': {
      const r = Math.max(3, Math.min(12, chunkRenderer.radius + (action === 'renderUp' ? 1 : -1)));
      chunkRenderer.setRadius(r);
      updateFog();
      toast('Render distance: ' + r + ' chunks');
      break;
    }
    default:
      if (action && action.startsWith('slot')) selectSlot(Number(action.slice(4)) - 1);
  }
});
window.addEventListener('keyup', (e) => { keys.delete(e.code); syncInput(); });
window.addEventListener('blur', () => { keys.clear(); syncInput(); mouseDown = { left: false, right: false }; });

function dropOne() {
  const st = inventory.slots[slot];
  if (!st) return;
  tossStack({ id: st.id, n: 1, d: st.d });
  if (--st.n <= 0) inventory.slots[slot] = null;
  refreshHotbar();
}

window.addEventListener('wheel', (e) => {
  if (!playing || touchMode) return;
  selectSlot(slot + (e.deltaY > 0 ? 1 : -1));
}, { passive: true });

window.addEventListener('mousemove', (e) => {
  if (!playing || touchMode) return;
  const rate = BASE_TURN_RATE * settings.get('sensitivity');
  // browsers occasionally report one huge bogus delta when the pointer lock engages; ignore those
  const mx = Math.abs(e.movementX) > 500 ? 0 : e.movementX;
  const my = Math.abs(e.movementY) > 500 ? 0 : e.movementY;
  turnBy(-mx * rate, -my * rate * (settings.get('invertY') ? -1 : 1));
});

window.addEventListener('contextmenu', (e) => e.preventDefault());
window.addEventListener('mousedown', (e) => {
  if (touchMode) return; // taps are handled by the on-screen controls
  ensureLock();
  if (!playing) return;
  if (e.button === 0) { mouseDown.left = true; }
  if (e.button === 2) { mouseDown.right = true; rightFresh = true; placeTimer = 0; }
  if (e.button === 1) {
    e.preventDefault();
    const hit = lookTarget();
    if (!hit) return;
    const want = itemForBlock(hit.id);
    if (creative) {
      if (PALETTE.includes(want)) { creativeHotbar[slot] = want; selectSlot(slot); }
    } else {
      const i = inventory.slots.slice(0, 9).findIndex((s) => s && s.id === want);
      if (i >= 0) selectSlot(i);
    }
  }
});
window.addEventListener('mouseup', (e) => {
  if (touchMode) return;
  if (e.button === 0) { mouseDown.left = false; resetBreak(); }
  if (e.button === 2) { mouseDown.right = false; rightFresh = false; }
});

// pointer lock + menu
const overlay = $('overlay');
const canvasEl = $('game');
function lock() {
  if (AUTOPLAY) return;
  if (touchMode) { if (!screen && !dead && !optionsOpen) setPlaying(true); return; } // nothing to capture on a touch screen
  // "unadjustedMovement" asks for raw mouse deltas, bypassing OS pointer acceleration (much more consistent aim)
  const plain = () => canvasEl.requestPointerLock?.();
  if (!settings.get('rawInput')) return plain();
  try {
    const p = canvasEl.requestPointerLock({ unadjustedMovement: true });
    if (p && p.catch) p.catch(plain); // not supported on this platform: fall back
  } catch {
    plain();
  }
}
let suppressUnlockUntil = 0; // an unlock right after closing a window is not a real pause
let lastUnlockAt = 0;        // when the mouse was last released (the Esc that did it must not also count as "Esc to resume")
let lastLockTry = 0;
// If the mouse is not captured while we are playing, capture it on the next key press or click
// (those are the user gestures browsers require). Retries at most twice a second.
function ensureLock() {
  if (AUTOPLAY || touchMode || !playing || optionsOpen || dead || document.pointerLockElement === canvasEl) return;
  const now = performance.now();
  if (now - lastLockTry < 500) return;
  lastLockTry = now;
  lock();
}
canvasEl.style.cursor = 'none';
function setPlaying(on) {
  playing = on;
  if (!on) { keys.clear(); touchCtl.reset(); syncInput(); mouseDown = { left: false, right: false }; resetBreak(); }
  overlay.classList.toggle('hidden', on || !!screen || dead);
}
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvasEl;
  if (locked) {
    if (screen) hideScreen();
    setPlaying(true);
    return;
  }
  if (screen) { setPlaying(false); return; }               // we let go of the mouse on purpose to show a window
  if (performance.now() < suppressUnlockUntil) return;     // spurious unlock right after closing one: keep playing
  lastUnlockAt = performance.now();
  setPlaying(false);
  $('play').textContent = 'Resume';
  save_();
});

// Back into the game from the pause menu. Browsers want a click or key press to capture the mouse again, and Esc
// does not count, so we resume right away and capture it on the next key press or click (see ensureLock).
function resumeGame() {
  if (playing || dead || screen || optionsOpen || touchCtl.editing) return;
  audio.start();
  setPlaying(true);
  if (!AUTOPLAY) { suppressUnlockUntil = performance.now() + 700; lock(); lastLockTry = performance.now(); }
}
$('play').addEventListener('click', () => {
  audio.start();
  if (touchMode) goFullscreen();
  if (AUTOPLAY) setPlaying(true); else lock();
});

// Save, then go back to the title screen (the page reloads there, which also frees everything the world used)
let quitting = false;
async function quitToTitle() {
  if (quitting) return;
  quitting = true;
  $('quitbtn').disabled = true;
  $('quitbtn').textContent = 'Saving...';
  document.exitPointerLock?.(); // (iPhone Safari has no Pointer Lock API at all)
  // Whatever goes wrong while saving, leave anyway: a stuck "Saving..." button traps the player. (The world is also saved every 10 s
  // and whenever the page is hidden, so waiting longer than a few seconds for a stalled storage would gain little.)
  try {
    flushWorld();
    await Promise.race([save_(), new Promise((resolve) => setTimeout(resolve, 8000))]);
  } catch (err) { console.error('Save & Quit: could not save before leaving', err); }
  skipSave = true; // nothing may write to the world again after this
  location.href = '?title';
}
$('quitbtn').addEventListener('click', quitToTitle);
function toggleMusic() {
  audio.setMusic(!audio.musicOn);
  $('musicbtn').textContent = 'Music: ' + (audio.musicOn ? 'On' : 'Off');
  toast('Music ' + (audio.musicOn ? 'on' : 'off'));
}
$('musicbtn').addEventListener('click', toggleMusic);

function setMode(c) {
  creative = c;
  if (!c) player.flying = false;
  $('modebtn').textContent = 'Mode: ' + (c ? 'Creative' : 'Survival');
  heldKey = -1;
  shownFood = -1;
  shownHealth = -1;
  renderHunger();
  renderHealth();
  refreshHotbar();
  save_();
}
$('modebtn').addEventListener('click', () => setMode(!creative));
$('modebtn').textContent = 'Mode: ' + (creative ? 'Creative' : 'Survival');

// ---- options screen + settings -----------------------------------------------------------
$('optionsbtn').addEventListener('click', () => { optionsOpen = true; keys.clear(); syncInput(); options.open(); });

function renderControlsTable() {
  const k = (a) => keyLabel(settings.key(a));
  const rows = [
    [[k('forward'), k('left'), k('back'), k('right')].join(' '), 'Move', 'Mouse', 'Look'],
    [k('jump'), 'Jump / swim (double-tap to fly in creative)', k('sprint'), 'Sprint (not when very hungry)'],
    [k('crouch'), 'Crouch: slower, and you cannot walk off edges', '', ''],
    ['Left click', 'Hold to break', 'Right click', 'Place / use / till / plant / eat'],
    [`${k('slot1')}–${k('slot9')} / Wheel`, 'Select slot', k('drop'), 'Drop one item'],
    [k('inventory'), 'Inventory & crafting', k('music'), 'Toggle music'],
    [k('skipTime'), 'Skip time of day', `${k('renderDown')} ${k('renderUp')}`, 'Render distance'],
    [k('fly'), 'Fly (creative only)', k('debug'), 'Debug info'],
    [k('offhand'), 'Place the torch held in your shield slot', k('map'), 'Full-screen map (drag to explore; or click the minimap)'],
    [k('quests'), 'Quest book: goals and jobs', k('hudMenu'), 'HUD settings: show, hide and move the panels'],
  ];
  $('controls').replaceChildren(...rows.map((r) => {
    const tr = document.createElement('tr');
    for (const cell of r) { const td = document.createElement('td'); td.textContent = cell; tr.appendChild(td); }
    return tr;
  }));
}

function applySettings() {
  audio.setVolumes(settings.get('musicVolume'), settings.get('sfxVolume'));
  touchCtl.setLayout(settings.get('touchLayout'));
  const was = touchMode;
  touchMode = wantsTouch();
  if (touchMode !== was) {
    document.body.classList.toggle('touch', touchMode);
    touchCtl.setEnabled(touchMode);
    mouseDown = { left: false, right: false };
    if (touchMode) document.exitPointerLock?.();
  }
  hud.apply(); // (after the touch class above)
  refitHud(); // (after the touch class above: on a touch screen the hotbar is sized to fit between the controls)
  $('tagline').textContent = touchMode ? 'Game paused' : 'Game paused \u2014 press Esc to resume';
  renderControlsTable();
}
settings.onChange(applySettings);
applySettings();

// ---- armor: a row of shield icons above the health bar, one icon per two armor points worn ----
let shownArmor = -1;
function renderArmor() {
  const a = inventory.armor;
  if (a === shownArmor) return;
  shownArmor = a;
  const el = $('armorbar');
  el.hidden = a <= 0;
  el.replaceChildren(...Array.from({ length: 10 }, (_, i) => {
    const v = a - i * 2;
    return armorIcon(v >= 2 ? 2 : v >= 1 ? 1 : 0);
  }));
}

// ---- hunger -----------------------------------------------------------------------------
const isStarving = () => !creative && starving(food);
const sprintAllowed = () => creative || canSprint(food);
let shownFood = -1;
function renderHunger() {
  const el = $('hunger');
  el.style.display = creative ? 'none' : 'flex';
  $('satbar').style.display = creative ? 'none' : 'block';
  $('satbar').firstElementChild.style.width = Math.min(100, (saturation / HUNGER.maxSaturation) * 100) + '%';
  const f = Math.ceil(food);
  if (f === shownFood) return;
  shownFood = f;
  el.replaceChildren(...Array.from({ length: 10 }, (_, i) => {
    const v = f - i * 2; // f is food rounded up: 19.98 still shows a full bar
    return hungerIcon(v >= 2 ? 2 : v >= 1 ? 1 : 0);
  }));
  el.classList.toggle('starving', isStarving());
}
renderHunger();
renderHealth();

// ---- air: a row of bubbles over the hunger bar while you are under water (and while it fills again) ----
let shownAir = -1;
function renderAir() {
  const el = $('airbar');
  const show = !creative && (player.headInWater || air < MAX_AIR - 0.01);
  el.hidden = !show;
  if (!show) { shownAir = -1; return; }
  const a = Math.ceil(air);
  if (a === shownAir) return;
  shownAir = a;
  el.replaceChildren(...Array.from({ length: 10 }, (_, i) => { const v = air - i * 2; return bubbleIcon(v >= 2 ? 2 : v > 0 ? 1 : 0); }));
}
// ---- experience: a thin bar over the hotbar and the level it has reached ----
let shownXp = -1;
function renderXp() {
  const el = $('xpbar');
  el.style.display = creative ? 'none' : '';
  if (creative || xp === shownXp) return;
  shownXp = xp;
  const l = xpLevel(xp);
  el.firstElementChild.style.width = Math.min(100, (l.into / l.need) * 100) + '%';
  $('xplevel').textContent = l.level > 0 ? String(l.level) : '';
}

// ---------------------------------------------------------------------------------------
// Block interaction
// ---------------------------------------------------------------------------------------
const lookDir = new THREE.Vector3();
function lookTarget() {
  camera.getWorldDirection(lookDir);
  return raycast(world, player.eye, lookDir, GAME.player.reach);
}

const breakTimer = new BreakTimer(); // exact timing; see mining.js
let breakTarget = null;
let breakKey = null;
let tickTimer = 0;
let placeTimer = 0;
let rightFresh = false; // true for the first tick after a right-button press (using a block needs a fresh click)
let swing = 0;

function resetBreak() {
  breakTarget = null;
  breakKey = null;
  breakTimer.reset();
  crack.visible = false;
}

function neighbourChunks(x, z) {
  const out = [];
  for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
    const c = world.getChunk(((x >> 4) + dx), ((z >> 4) + dz));
    if (c && c.dirty) out.push(c);
  }
  return out;
}

// ---- falling trees ---------------------------------------------------------------------------
// Breaking a log topples everything above it. The blocks leave the world, tip over as one rigid piece
// (hinged on the cut), and are put back where they land.
const fallingTrees = [];
function remeshBlocks(list) {
  const seen = new Set(), dirty = [];
  for (const [x, , z] of list) {
    for (const c of neighbourChunks(x, z)) if (!seen.has(c)) { seen.add(c); dirty.push(c); }
  }
  chunkRenderer.remeshNow(dirty);
}
function startTreeFall(bx, by, bz) {
  const tree = findFallingTree(world, bx, by, bz);
  if (!tree) return;
  const dir = fallDirection(bx, bz, player.pos.x, player.pos.z);
  removeTree(world, tree);
  remeshBlocks([...tree.logs, ...tree.leaves]);
  const group = new THREE.Group();
  group.position.set(bx + 0.5, by + 0.5, bz + 0.5);
  for (const list of [tree.logs, tree.leaves]) {
    for (const [x, y, z, id] of list) {
      const m = new THREE.Mesh(blockGeometry(id), materials.solid);
      m.position.set(x - bx, y - by, z - bz);
      group.add(m);
    }
  }
  scene.add(group);
  const height = tree.logs.reduce((m, l) => Math.max(m, l[1] - by), 1);
  fallingTrees.push({ group, tree, bx, by, bz, dir, axis: new THREE.Vector3(dir.dz, 0, -dir.dx), t: 0, T: 0.9 + 0.08 * height });
  audio.block(soundOf(tree.logs[0]?.[3]), 'break');
}
// What happens when the tree has finished tipping over (data/game.json "treeFall.mode"):
//   "shatter": it smashes apart: every log drops as logs and every leaf rolls its shatter loot (see loot.json),
//              scattered where it landed, all there to pick up.
//   "land":    it comes to rest as blocks lying on the ground.
function finishFall(f) {
  scene.remove(f.group);
  fallingTrees.splice(fallingTrees.indexOf(f), 1);
  const { dx, dz } = f.dir;
  if (GAME.treeFall.mode === 'land') {
    const { placed, lost } = landTree(world, f.tree, f.bx, f.by, f.bz, dx, dz);
    remeshBlocks(placed.map((p) => [p.x, p.y, p.z]));
    if (!creative) for (const p of lost) for (const d of dropsFor(p.id, true)) drops.spawn(d.id, d.n, p.x + 0.5, p.y + 0.5, p.z + 0.5);
    audio.block(soundOf(f.tree.logs[0]?.[3]), 'place');
    return;
  }
  const pieces = shatterTree(world, f.tree, f.bx, f.by, f.bz, dx, dz);
  let n = 0;
  for (const p of pieces) {
    if (!creative) {
      for (const d of shatterDrops(p.id)) {
        // flung outwards, away from where the tree stood, so the loot spreads over the ground
        drops.spawn(d.id, d.n, p.x + 0.5, p.y + 0.4, p.z + 0.5, {
          delay: 0.5, vx: (Math.random() - 0.5) * 2.5 + dx * 1.2, vy: 2 + Math.random() * 2.5, vz: (Math.random() - 0.5) * 2.5 + dz * 1.2,
        });
      }
    }
    if (ROLE_LOG[p.id] || n++ % 3 === 0) spawnBurst(p.x, p.y, p.z, p.id); // splinters, and a puff of leaves for every third leaf
  }
  audio.block(soundOf(f.tree.logs[0]?.[3]), 'break');
  audio.block(soundOf(f.tree.logs[0]?.[3]), 'place');
  if (f.tree.leaves.length) audio.block(soundOf(f.tree.leaves[0][3]), 'break');
}
function updateFallingTrees(dt) {
  for (const f of [...fallingTrees]) {
    f.t += dt;
    const k = Math.min(1, f.t / f.T);
    f.group.quaternion.setFromAxisAngle(f.axis, (Math.PI / 2) * Math.pow(k, 2.2)); // starts slowly, accelerates
    if (k >= 1) finishFall(f);
  }
}

let shovelHinted = false;

function breakBlock(hit) {
  if (UNBREAKABLE[hit.id]) return; // the bottom of the world
  if (BED.has(hit.id)) { breakBed(hit); return; }
  const info = miningInfo(hit.id, heldId());
  const isPlant = !!PLANT[hit.id];
  world.setBlock(hit.x, hit.y, hit.z, B.AIR);
  spawnBurst(hit.x, hit.y, hit.z, hit.id);
  audio.block(BLOCKS[hit.id].sound, 'break');
  swing = 1;

  // a plant standing on the removed block has nothing to grow from: uproot it too
  const above = world.getBlock(hit.x, hit.y + 1, hit.z);
  if (!isPlant && PLANT[above]) {
    world.setBlock(hit.x, hit.y + 1, hit.z, B.AIR);
    spawnBurst(hit.x, hit.y + 1, hit.z, above);
    if (!creative) for (const d of dropsFor(above, true)) drops.spawn(d.id, d.n, hit.x + 0.5, hit.y + 1.4, hit.z + 0.5);
  }
  const door = DOOR.get(hit.id);
  if (door) { // the other half of a door goes with it
    const oy = door.top ? hit.y - 1 : hit.y + 1;
    if (world.getBlock(hit.x, oy, hit.z) === door.partner) { world.setBlock(hit.x, oy, hit.z, B.AIR); spawnBurst(hit.x, oy, hit.z, hit.id); }
  }
  if (WINDOWS[OPENS.get(hit.id)]?.furnace) { // whatever was in the furnace falls out
    for (const st of furnaces.remove(hit.x, hit.y, hit.z)) drops.spawn(st.id, st.n, hit.x + 0.5, hit.y + 0.6, hit.z + 0.5, { d: st.d });
  }
  if (CHEST.has(hit.id)) { // whatever was in the chest falls out
    for (const st of chests.remove(hit.x, hit.y, hit.z)) drops.spawn(st.id, st.n, hit.x + 0.5, hit.y + 0.6, hit.z + 0.5, { d: st.d });
  }
  chunkRenderer.remeshNow(neighbourChunks(hit.x, hit.z));
  if (ROLE_LOG[hit.id]) startTreeFall(hit.x, hit.y, hit.z); // the tree above the cut comes down
  const extra = isPlant ? 0 : hammerExtras(hit);                 // a hammer takes the stone around it too
  if (creative) return;

  for (const d of dropsFor(hit.id, info.canHarvest)) drops.spawn(d.id, d.n, hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
  if (isPlant) return; // plucking grass is free: no tool wear, no hunger
  food = Math.max(0, food - HUNGER.miningCost); // physical work
  const st = inventory.slots[slot];
  if (st && toolOf(st.id)) {
    const name = itemName(st.id);
    if (inventory.damage(slot, toolWear(hit.id, st.id) + Math.floor(extra / 3))) { toast(`Your ${name} broke!`); audio.toolBreak(); } // a pickaxe on dirt wears three times as fast; a hammer a little more for the extra blocks
    refreshHotbar();
  }
}

// Can a block go here? The world is a fixed height and only loaded chunks can be changed.
const canPlaceAt = (x, y, z) => world.canPlace(x, y, z);

function placeBlock(hit) {
  // aiming at a plant means "put the block where the plant is" (it gets replaced); otherwise place against the face
  const replacing = !!PLANT[hit.id];
  const x = replacing ? hit.x : hit.x + hit.nx, y = replacing ? hit.y : hit.y + hit.ny, z = replacing ? hit.z : hit.z + hit.nz;
  if (!canPlaceAt(x, y, z)) return; // off the top (or bottom) of the world: nothing is placed, so nothing is used up
  const here = world.getBlock(x, y, z);
  if (here !== B.AIR && !IS_WATER[here] && !PLANT[here]) return;
  const st = stackAt(slot);
  if (!st || !isBlockItem(st.id) || PLANT[st.id]) return;
  if (player.intersectsBlock(x, y, z)) return;
  const id = STAIRS.has(st.id) ? STAIRS.get(st.id)[lookFacing()] // stairs climb away from you, whichever way you face
    : AXIS_VARIANTS.has(st.id) ? AXIS_VARIANTS.get(st.id)[lookFacing() % 2 === 0 ? 'x' : 'z'] // a window spans the way you are not looking
    : st.id;
  world.setBlock(x, y, z, id);
  chunkRenderer.remeshNow(neighbourChunks(x, z));
  audio.block(BLOCKS[st.id].sound, 'place');
  swing = 1;
  if (!creative) {
    if (--st.n <= 0) inventory.slots[slot] = null;
    refreshHotbar();
  }
}

// Which way you are looking, as 0-3 = north, east, south, west (yaw 0 looks north, towards -z)
function lookFacing() {
  const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw);
  return Math.abs(fz) >= Math.abs(fx) ? (fz < 0 ? 0 : 2) : (fx > 0 ? 1 : 3);
}

// A door: two blocks tall, a plate that spans the way you are NOT looking (so you walk through it), standing on something solid
function placeDoor(hit) {
  const replacing = !!PLANT[hit.id];
  const x = replacing ? hit.x : hit.x + hit.nx, y = replacing ? hit.y : hit.y + hit.ny, z = replacing ? hit.z : hit.z + hit.nz;
  if (!canPlaceAt(x, y, z) || !canPlaceAt(x, y + 1, z)) return;
  const free = (yy) => { const b = world.getBlock(x, yy, z); return b === B.AIR || !!PLANT[b]; };
  if (!free(y) || !free(y + 1)) return;
  if (!SOLID[world.getBlock(x, y - 1, z)]) return; // nothing to stand on
  if (player.intersectsBlock(x, y, z) || player.intersectsBlock(x, y + 1, z)) return;
  const f = lookFacing();
  const kind = REG.blockById.get(doorBlockOf(heldId()))?.model?.kind || 'wood';
  const [lower, upper] = DOOR_KINDS[kind][f % 2 === 0 ? 'x' : 'z']; // looking north / south: the plate runs east-west
  world.setBlock(x, y, z, lower);
  world.setBlock(x, y + 1, z, upper);
  chunkRenderer.remeshNow(neighbourChunks(x, z));
  audio.block('wood', 'place');
  swing = 1;
  if (!creative) {
    const st = inventory.slots[slot];
    if (st && --st.n <= 0) inventory.slots[slot] = null;
    refreshHotbar();
  }
}

// Right-click an existing door: it swings open or shut (both halves together). It will not shut on top of you.
function toggleDoor(hit) {
  const d = DOOR.get(hit.id);
  if (!d) return;
  const oy = d.top ? hit.y - 1 : hit.y + 1;
  const hasPartner = world.getBlock(hit.x, oy, hit.z) === d.partner;
  if (!d.open && (player.intersectsBlock(hit.x, hit.y, hit.z) || (hasPartner && player.intersectsBlock(hit.x, oy, hit.z)))) return;
  world.setBlock(hit.x, hit.y, hit.z, d.toggled);
  if (hasPartner) world.setBlock(hit.x, oy, hit.z, DOOR.get(d.partner).toggled);
  chunkRenderer.remeshNow(neighbourChunks(hit.x, hit.z));
  audio.block('wood', d.open ? 'break' : 'place');
  swing = 1;
}

// ---- hammers ---------------------------------------------------------------------------------
// A hammer breaks a 3x3 patch of stone at once: the block you hit and the eight round it, in the plane you are facing. Only what it
// could mine on its own goes (stone, ores it is good enough for), never chests, beds, doors or the bottom of the world. Returns how many
// extra blocks went.
function hammerExtras(hit) {
  const tool = toolOf(heldId());
  if (!tool || tool.area < 2 || !toolDigs(tool, BLOCKS[hit.id]?.tool)) return 0;
  const r = (tool.area - 1) / 2, nx = Math.abs(hit.nx), ny = Math.abs(hit.ny);
  const cells = [];
  for (let a = -r; a <= r; a++) {
    for (let b = -r; b <= r; b++) {
      if (!a && !b) continue;
      const x = hit.x + (nx ? 0 : a), y = hit.y + (nx ? a : ny ? 0 : b), z = hit.z + (nx ? b : ny ? b : 0);
      if (y <= 0 || !world.isLoaded(x, z)) continue;
      const id = world.getBlock(x, y, z);
      if (id === B.AIR || PLANT[id] || IS_WATER[id] || UNBREAKABLE[id] || OPENS.has(id) || DOOR.has(id) || BED.has(id) || BLOCKS[id].tool !== 'pickaxe') continue;
      if (!creative && !miningInfo(id, heldId()).canHarvest) continue;
      world.setBlock(x, y, z, B.AIR);
      spawnBurst(x, y, z, id);
      if (!creative) for (const d of dropsFor(id, true)) drops.spawn(d.id, d.n, x + 0.5, y + 0.5, z + 0.5);
      const above = world.getBlock(x, y + 1, z);
      if (PLANT[above]) { world.setBlock(x, y + 1, z, B.AIR); spawnBurst(x, y + 1, z, above); }
      cells.push([x, y, z]);
    }
  }
  if (cells.length) { remeshBlocks(cells); audio.block(soundOf(hit.id), 'break'); }
  return cells.length;
}

// ---- creatures ---------------------------------------------------------------------------------
function spawnColorBurst(x, y, z, rgb, n = 8) {
  for (let i = 0; i < n && particles.length < MAX_PARTICLES; i++) {
    particles.push({ x: x + (Math.random() - 0.5) * 0.5, y: y + Math.random() * 0.9, z: z + (Math.random() - 0.5) * 0.5, vx: (Math.random() - 0.5) * 3, vy: Math.random() * 3 + 1, vz: (Math.random() - 0.5) * 3,
      life: 0.4 + Math.random() * 0.4, size: 0.06 + Math.random() * 0.06, r: rgb[0], g: rgb[1], b: rgb[2] });
  }
}
// A blow at a creature: what you hold decides the damage (swords hit hardest, a fist hardly at all)
function attackMob(m) {
  attackTimer = GAME.combat.attackCooldown;
  const st = stackAt(slot), tool = st && toolOf(st.id);
  const killed = m.damage(weaponDamage(tool), player.pos.x, player.pos.z, GAME.combat.knockback);
  swing = 1;
  audio.mobHit();
  spawnColorBurst(m.x, m.y + m.def.size.height * 0.5, m.z, [0.8, 0.12, 0.1]);
  if (!creative && tool) {
    const name = itemName(st.id);
    if (inventory.damage(slot, attackWear(tool))) { toast(`Your ${name} broke!`); audio.toolBreak(); }
    refreshHotbar();
  }
  if (killed) onMobKilled(m);
}
function onMobKilled(m) {
  if (!creative) {
    for (const d of rollLoot(m.def.loot)) drops.spawn(d.id, d.n, m.x, m.y + 0.5, m.z, { delay: 0.4 });
    if (m.hostile) { xp += m.def.xp; toast(`+${m.def.xp} XP`, 1200); }
  }
  if (m.hostile) { quests.recordKill(m.type); progress.flags.add('slain'); checkGoals(); }
}
function shearSheep(m) {
  const st = inventory.slots[slot];
  if (!mobs.shear(m)) { toast('It has no wool right now'); return; }
  for (const d of rollLoot(m.def.shear.loot)) drops.spawn(d.id, d.n, m.x, m.y + 0.8, m.z, { delay: 0.3 });
  audio.block('cloth', 'break');
  swing = 1;
  if (!creative && st && toolOf(st.id) && inventory.damage(slot, 1)) { toast('Your shears broke!'); audio.toolBreak(); }
  refreshHotbar();
}
function mobHitsPlayer(dmg, src) {
  if (creative || dead || sleeping) return;
  const name = REG.mobs.species[src.type]?.name ?? 'monster';
  const dx = player.pos.x - src.x, dz = player.pos.z - src.z, d = Math.hypot(dx, dz) || 1;
  player.vel.x += (dx / d) * 5; player.vel.z += (dz / d) * 5; player.vel.y = Math.max(player.vel.y, 3);
  damage(reduceDamage(dmg, inventory.armor), src.arrow ? `Shot by a ${name}` : `Slain by a ${name}`); // armor takes damage off every blow
}
function mobCalls(m) {
  const d = Math.hypot(m.x - player.pos.x, m.z - player.pos.z);
  if (d < 30) audio.creature(m.def.call, 1 - d / 32);
}
function mobBurns(m) { spawnBurst(m.x - 0.5, m.y, m.z - 0.5, B.COBBLE); }

// ---- beds and sleep ----------------------------------------------------------------------------
function placeBed(hit, spec) {
  const replacing = !!PLANT[hit.id];
  const x = replacing ? hit.x : hit.x + hit.nx, y = replacing ? hit.y : hit.y + hit.ny, z = replacing ? hit.z : hit.z + hit.nz;
  const cells = bedCells(world, x, y, z, lookFacing(), spec);
  if (!cells) { toast('A bed needs a flat, solid floor with room for it'); return; }
  if (cells.some((c) => player.intersectsBlock(c.x, c.y, c.z))) return;
  for (const c of cells) world.setBlock(c.x, c.y, c.z, c.id);
  remeshBlocks(cells.map((c) => [c.x, c.y, c.z]));
  audio.block('cloth', 'place');
  swing = 1;
  if (!creative) { const st = inventory.slots[slot]; if (st && --st.n <= 0) inventory.slots[slot] = null; refreshHotbar(); }
}
// Taking a bed apart: every square goes and you get the bed back (or beds: two singles side by side give a double)
function breakBed(hit) {
  const group = bedGroup(world, hit.x, hit.y, hit.z);
  const color = BED.get(hit.id).color;
  for (const c of group) { world.setBlock(c.x, c.y, c.z, B.AIR); spawnBurst(c.x, c.y, c.z, c.id); }
  remeshBlocks(group.map((c) => [c.x, c.y, c.z]));
  audio.block('cloth', 'break');
  swing = 1;
  if (spawnBed && group.some((c) => c.x === spawnBed.x && c.y === spawnBed.y && c.z === spawnBed.z)) { spawnBed = null; toast('Your bed is gone: you will come back at the world spawn again', 3500); }
  if (!creative) for (const d of bedDrops(color, group.length)) drops.spawn(d.item, d.n, hit.x + 0.5, hit.y + 0.6, hit.z + 0.5);
}
// Right-click a bed: it becomes where you come back after dying, and you go to sleep (if no monster is near): day becomes night and night day
function useBed(hit) {
  spawnBed = { x: hit.x, y: hit.y, z: hit.z };
  const near = !creative && mobs.nearest(player.pos.x, player.pos.z, GAME.sleep.monsterRadius);
  if (near) { toast('Respawn point set. You cannot sleep now: a monster is nearby', 3200); return; }
  startSleep();
}
function startSleep() {
  if (sleeping) return;
  sleeping = true;
  keys.clear(); syncInput(); mouseDown = { left: false, right: false }; resetBreak();
  const el = $('sleep'), secs = GAME.sleep.fadeSeconds;
  $('sleep-text').textContent = gameDayPart(dayTime) === 'Night' ? 'Sleeping until morning...' : 'Sleeping until evening...';
  el.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('on')));
  audio.sleep();
  setTimeout(() => { // in the dark: the clock jumps twelve hours
    const t = sleepTime(dayTime, dayCount);
    dayTime = t.dayTime;
    if (t.dayCount !== dayCount) { dayCount = t.dayCount; sky.setMoonPhase(dayCount); }
    health = Math.max(health, Math.min(MAX_HEALTH, GAME.sleep.healTo));
    shownHealth = -1; renderHealth();
    for (const m of mobs.monsters) { m.dead = true; m.deathTimer = 0; m.vanished = true; }
    progress.flags.add('slept');
    checkGoals();
  }, secs * 450);
  setTimeout(() => {
    el.classList.remove('on');
    setTimeout(() => { el.hidden = true; sleeping = false; toast(gameDayPart(dayTime) === 'Night' ? 'You slept through the day' : 'You slept through the night: good morning!', 2800); }, 950);
  }, secs * 1000);
}

// ---- chests ------------------------------------------------------------------------------------
function nearbyChests() {
  return chests.near(player.pos.x, player.pos.y, player.pos.z).map((c) => new ChestSource([c]));
}
function openChest(hit) {
  const tier = chestTier(hit.id);
  openScreen('inv', 'chest', { chest: chests.get(hit.x, hit.y, hit.z, tier), tier, name: BLOCKS[hit.id].name });
}
// An upgrade item turns a chest into the next one and keeps what is inside
function upgradeChest(hit, st) {
  const up = upgradeOf(st.id);
  if (hit.id !== up.from) { toast(`This upgrade is for a ${BLOCKS[up.from].name}`); return; }
  world.setBlock(hit.x, hit.y, hit.z, up.to);
  chests.get(hit.x, hit.y, hit.z, chestTier(up.to));
  chunkRenderer.remeshNow(neighbourChunks(hit.x, hit.z));
  audio.block('metal', 'place');
  swing = 1;
  toast(`Upgraded to a ${BLOCKS[up.to].name}`);
  if (!creative) { if (--st.n <= 0) inventory.slots[slot] = null; refreshHotbar(); }
}

// ---- flowers: pick them, plant them on grass for the look of it, or turn them into dye ----
function placeFlower(hit) {
  const st = stackAt(slot), soils = PLACE_ON.get(st.id);
  const replacing = !!PLANT[hit.id];
  const x = hit.x, y = replacing ? hit.y : hit.y + 1, z = hit.z;
  if (!replacing && hit.ny !== 1) return;
  const below = world.getBlock(x, y - 1, z);
  if (!soils.includes(below) || !canPlaceAt(x, y, z)) return;
  const here = world.getBlock(x, y, z);
  if (here !== B.AIR && !PLANT[here]) return;
  world.setBlock(x, y, z, st.id);
  chunkRenderer.remeshNow(neighbourChunks(x, z));
  audio.block(soundOf(st.id), 'place');
  swing = 1;
  if (!creative) { if (--st.n <= 0) inventory.slots[slot] = null; refreshHotbar(); }
}

// Villagers open and shut their own doors on their way to bed (and never shut one on you)
function setDoorFor(door, open) {
  const x = Math.floor(door.x), z = Math.floor(door.z);
  if (!open && (player.intersectsBlock(x, door.y, z) || player.intersectsBlock(x, door.y + 1, z))) return;
  const changed = setDoorOpen(world, x, door.y, z, open);
  if (changed) { remeshBlocks(changed); if (Math.hypot(x - player.pos.x, z - player.pos.z) < 24) audio.block('wood', open ? 'place' : 'break'); }
}

// Torches: the block you get depends on the face you click (up = standing on the floor, a side = hanging on that wall).
// There is none for the underside: a torch cannot hang from a ceiling.
function placeHung(hit, places, fromOffhand = false) {
  const replacing = !!PLANT[hit.id];
  const face = replacing || hit.ny === 1 ? 'up' : hit.nx === 1 ? 'east' : hit.nx === -1 ? 'west' : hit.nz === 1 ? 'south' : hit.nz === -1 ? 'north' : null;
  const id = face && places[face];
  if (!id) return;
  const x = replacing ? hit.x : hit.x + hit.nx, y = replacing ? hit.y : hit.y + hit.ny, z = replacing ? hit.z : hit.z + hit.nz;
  if (!canPlaceAt(x, y, z)) return;
  const here = world.getBlock(x, y, z);
  if (here !== B.AIR && !IS_WATER[here] && !PLANT[here]) return;
  if (!SOLID[world.getBlock(x + SUPPORT[id * 3], y + SUPPORT[id * 3 + 1], z + SUPPORT[id * 3 + 2])]) return; // nothing to hang it on
  world.setBlock(x, y, z, id);
  chunkRenderer.remeshNow(neighbourChunks(x, z));
  audio.block(BLOCKS[id].sound, 'place');
  swing = 1;
  if (!creative) {
    if (fromOffhand) {
      const st = inventory.equipment.shield;
      if (st && --st.n <= 0) inventory.equipment.shield = null;
      ui.refreshInventory();
    } else {
      const st = inventory.slots[slot];
      if (st && --st.n <= 0) inventory.slots[slot] = null;
    }
    refreshHotbar();
  }
}

// The offhand (shield slot) can hold torches: the offhand key places one where you are looking
// A torch in your hand (or in the offhand slot) lights up the cell you stand in as if it were placed there
let carryTimer = 0;
function carryLight(dt) {
  carryTimer -= dt;
  if (carryTimer > 0) return;
  carryTimer = 0.1;
  const level = dead || screen === 'palette' ? 0 : Math.max(heldLight(heldId()), heldLight(inventory.equipment.shield?.id ?? 0));
  const e = player.eye;
  world.lighting.setCarried(Math.floor(e.x), Math.floor(e.y), Math.floor(e.z), level);
}

function useOffhand() {
  const st = inventory.equipment.shield;
  if (!st || !isOffhand(st.id) || !placesOf(st.id)) return;
  const hit = lookTarget();
  if (hit) placeHung(hit, placesOf(st.id), true);
}

// ---- farming ------------------------------------------------------------------------------
function wearHeldTool() {
  const st = inventory.slots[slot];
  if (creative || !st || !toolOf(st.id)) return;
  const name = itemName(st.id);
  if (inventory.damage(slot)) { toast(`Your ${name} broke!`); audio.toolBreak(); }
  refreshHotbar();
}

// Is this the soil block a hoe would act on? Returns { x, y, z, wet } or null.
function soilTarget(hit) {
  if (!hit) return null;
  const x = hit.x, z = hit.z, y = PLANT[hit.id] ? hit.y - 1 : hit.y; // aiming at grass on top of soil still means that soil
  const id = world.getBlock(x, y, z);
  if (!TILLS_INTO[id]) return null; // only blocks that list "tillsInto" can be tilled
  const above = world.getBlock(x, y + 1, z);
  if (above !== B.AIR && !PLANT[above]) return null;
  return { x, y, z, wet: world.nearWater(x, y, z) };
}

function tillBlock(hit, announce) {
  const t = soilTarget(hit);
  if (!t) return;
  if (PLANT[world.getBlock(t.x, t.y + 1, t.z)]) world.setBlock(t.x, t.y + 1, t.z, B.AIR); // clear the grass on top
  const before = world.getBlock(t.x, t.y, t.z);
  const tilled = TILLS_INTO[before];
  world.setBlock(t.x, t.y, t.z, tilled);
  const damp = t.wet ? HYDRATION.get(tilled)?.wet : 0; // near water: it is moist from the start
  if (damp) world.setBlock(t.x, t.y, t.z, damp);
  else if (announce) toast(`Dry soil: crops only grow with water within ${GAME.tilling.radius} blocks, and bare dry soil turns back into dirt`);
  chunkRenderer.remeshNow(neighbourChunks(t.x, t.z));
  spawnBurst(t.x, t.y, t.z, before);
  audio.block(soundOf(before), 'place');
  swing = 1;
  wearHeldTool();
  if (t.wet) { progress.flags.add('tilled'); checkGoals(); } // the goal is about *watered* soil
}

// Seeds (any item with "plants" in items.json) go on the block named in "on" and become the plant block named in "block"
function plantSeeds(hit, plants) {
  if (!plants.on.includes(hit.id) || hit.ny !== 1) return; // seeds can go on any of the listed soils (dry or moist farmland)
  if (!canPlaceAt(hit.x, hit.y + 1, hit.z)) return;
  if (world.getBlock(hit.x, hit.y + 1, hit.z) !== B.AIR) return;
  world.setBlock(hit.x, hit.y + 1, hit.z, plants.block);
  chunkRenderer.remeshNow(neighbourChunks(hit.x, hit.z));
  audio.block(soundOf(plants.block), 'place');
  swing = 1;
  if (!creative) {
    const st = inventory.slots[slot];
    if (st && --st.n <= 0) inventory.slots[slot] = null;
    refreshHotbar();
  }
  progress.flags.add('planted');
  checkGoals();
}

// Hold right-click with food in hand to eat it
function updateEating(dt, hit) {
  const id = heldId();
  const value = foodValue(id);
  const usingStation = hit && OPENS.has(hit.id) && rightFresh;
  if (!mouseDown.right || !value || creative || usingStation) {
    eating = 0;
    $('eatbar').hidden = true;
    return;
  }
  if (food >= MAX_FOOD) {
    if (rightFresh) { toast("You're not hungry"); rightFresh = false; }
    eating = 0;
    $('eatbar').hidden = true;
    return;
  }
  const before = Math.floor(eating / 0.3);
  eating += dt;
  if (Math.floor(eating / 0.3) > before) { audio.eat(); spawnJuice(id); }
  $('eatbar').hidden = false;
  $('eatbar').firstElementChild.style.width = Math.min(100, (eating / GAME.eating.seconds) * 100) + '%';
  if (eating >= GAME.eating.seconds) {
    eating = 0;
    const st = inventory.slots[slot];
    if (st && --st.n <= 0) inventory.slots[slot] = null;
    const hs = { food, saturation };
    eatFood(hs, value, saturationValue(id));
    ({ food, saturation } = hs);
    progress.flags.add('ate');
    toast(`Yum! +${value / 2} hunger`);
    refreshHotbar();
    checkGoals();
  }
}

function pickUp(it) {
  inventory.add(it.id, it.n, it.d);
  progress.collected.add(it.id);
  audio.pickup();
  refreshHotbar();
  checkGoals();
  return true;
}

function updateInteraction(dt) {
  const hit = lookTarget();
  if (hit) {
    outline.visible = true;
    // plants get a box that matches their size; everything else a full block
    const ph = PLANT[hit.id] ? PLANT_H[hit.id] : 1;
    const w = PLANT[hit.id] ? PLANT_HALF[hit.id] * 2 : 1;
    outline.scale.set(w, ph, w);
    // a torch hanging on a wall sits low and close to the wall
    const wallTorch = PLANT[hit.id] === 3 && (LEAN[hit.id * 2] || LEAN[hit.id * 2 + 1]);
    outline.position.set(hit.x + 0.5 - (wallTorch ? LEAN[hit.id * 2] * 0.25 : 0), hit.y + ph / 2 + (wallTorch ? 0.2 : 0), hit.z + 0.5 - (wallTorch ? LEAN[hit.id * 2 + 1] * 0.25 : 0));
  } else {
    outline.visible = false;
  }
  // holding a hoe: the outline turns green over soil that can be tilled, orange if it is too far from water
  const holdingHoe = toolOf(heldId())?.type === 'hoe';
  const soil = holdingHoe ? soilTarget(hit) : null;
  outline.material.color.setHex(soil ? (soil.wet ? 0x33ff55 : 0xff9a2e) : 0x000000);

  placeTimer -= dt;
  swing = Math.max(0, swing - dt * 4.5);

  // a creature in reach and nearer than the block behind it: the left button hits it instead of digging
  attackTimer = Math.max(0, attackTimer - dt);
  const mobHit = !sleeping ? mobs.pick(player.eye, lookDir, GAME.combat.reach) : null;
  const blockDist = hit ? Math.hypot(hit.x + 0.5 - player.eye.x, hit.y + 0.5 - player.eye.y, hit.z + 0.5 - player.eye.z) - 0.5 : Infinity;
  targetMob = mobHit && mobHit.dist < blockDist ? mobHit.mob : null;
  if (mouseDown.left && targetMob) {
    resetBreak();
    breakTimer.idle(dt);
    if (attackTimer <= 0) attackMob(targetMob);
  } else if (mouseDown.left && hit && !UNBREAKABLE[hit.id]) {
    const key = hit.x + ',' + hit.y + ',' + hit.z;
    if (key !== breakKey) { // started on a new block
      breakKey = key;
      const b = BLOCKS[hit.id];
      if (!creative && !miningInfo(hit.id, heldId()).canHarvest) {
        toast(`You need a ${tierName(b.need)} ${b.tool} (or better) to harvest this`);
      } else if (!creative && !shovelHinted && b.tool === 'shovel' && toolOf(heldId())?.type !== 'shovel') {
        shovelHinted = true;
        toast('Tip: a shovel digs dirt, grass and sand much faster (craft one at a table)');
      }
    }
    breakTarget = hit;
    const time = creative ? 0.25 : miningInfo(hit.id, heldId()).time;
    tickTimer -= dt;
    if (tickTimer <= 0) { tickTimer = 0.24; audio.block(BLOCKS[hit.id].sound, 'tick'); swing = Math.max(swing, 0.8); }
    if (breakTimer.tick(dt, key, time)) {
      breakBlock(hit); // breaks on exactly the frame the time is up
      resetBreak();
    } else if (breakTimer.progress > 0) {
      crack.visible = true;
      crack.position.copy(outline.position);
      crackTex.offset.x = breakTimer.stage / 10;
    }
  } else {
    breakTimer.idle(dt);
    if (breakTarget) resetBreak();
  }

  // right-click (or Use) on a villager in reach, nearer than whatever block is behind it: they say something
  if (mouseDown.right && rightFresh && placeTimer <= 0 && !eating) {
    const e = player.eye;
    const vh = villagers.pick(e, lookDir, 4.5);
    if (vh && vh.dist < (hit ? Math.hypot(hit.x + 0.5 - e.x, hit.y + 0.5 - e.y, hit.z + 0.5 - e.z) - 0.6 : Infinity)) {
      talkTo(vh.villager);
      mouseDown.right = false; rightFresh = false; placeTimer = 0.6;
    }
  }

  if (mouseDown.right && rightFresh && placeTimer <= 0 && !eating && targetMob?.def.shear && isShears(heldId())) { // shears on a sheep
    shearSheep(targetMob);
    mouseDown.right = false; rightFresh = false; placeTimer = 0.5;
  }

  updateEating(dt, hit);

  if (mouseDown.right && hit && placeTimer <= 0 && !eating) {
    placeTimer = 0.22;
    const fresh = rightFresh;
    rightFresh = false;
    const heldStack = stackAt(slot);
    const tool = heldStack && toolOf(heldStack.id);
    if (fresh && OPENS.has(hit.id)) {
      mouseDown.right = false;
      if (WINDOWS[OPENS.get(hit.id)]?.chest) {
        if (heldStack && upgradeOf(heldStack.id) && CHEST.has(hit.id)) upgradeChest(hit, heldStack); // holding an upgrade: use it on the chest
        else openChest(hit);
      } else openScreen('inv', OPENS.get(hit.id), hit); // use the station instead of placing a block against it
    } else if (fresh && BED.has(hit.id)) {
      mouseDown.right = false;
      useBed(hit);
    } else if (fresh && DOOR.has(hit.id)) {
      mouseDown.right = false;
      toggleDoor(hit); // use a door instead of placing a block against it
    } else if (heldStack && isDoorItem(heldStack.id)) {
      placeDoor(hit);
    } else if (heldStack && bedOf(heldStack.id)) {
      placeBed(hit, bedOf(heldStack.id));
    } else if (heldStack && PLACE_ON.has(heldStack.id)) {
      placeFlower(hit);
    } else if (tool?.type === 'hoe') {
      tillBlock(hit, fresh);
    } else if (heldStack && plantsOf(heldStack.id)) {
      plantSeeds(hit, plantsOf(heldStack.id));
    } else if (heldStack && placesOf(heldStack.id)) {
      placeHung(hit, placesOf(heldStack.id));
    } else {
      placeBlock(hit);
    }
  }
}

// A villager answers: something about their job, or the night. (They turn to look at you and stand still for a moment.)
function talkTo(v) {
  v.target = null; v.timer = 4;
  audio.villager();
  swing = 1;
  progress.flags.add('talked');
  checkGoals();
  dialog.show(v, v.speak(gameDayPart(dayTime) === 'Night')); // their job for you, to accept or decline
  openScreen('talk');
}

// Walking into a village says so (once per visit); finding the first one is a goal
let inVillageKey = null, villageCheckAt = 0;
function checkVillage(now) {
  if (now - villageCheckAt < 700) return;
  villageCheckAt = now;
  const here = villagesNear(world, player.pos.x, player.pos.z, player.pos.x, player.pos.z, 3)[0];
  const key = here ? here.key : null;
  if (key === inVillageKey) return;
  inVillageKey = key;
  if (here) {
    toast(`Welcome to ${here.name}`, 3000);
    progress.flags.add('village');
    checkGoals();
  }
}

// ---- clocks and coordinates under the minimap ----------------------------------------------------
let clockAt = 0;
function updateClocks(now) {
  if (now - clockAt < 250) return;
  clockAt = now;
  $('mm-real').textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' });
  $('mm-game').textContent = gameClock(dayTime);
  $('mm-part').textContent = `${gameDayPart(dayTime)} · Day ${dayCount + 1}`;
  $('mm-env').textContent = [biomeNow.label, weatherState.key === 'clear' ? '' : weatherState.label].filter(Boolean).join(' · ') || 'Clear';
  $('mm-x').textContent = Math.floor(player.pos.x);
  $('mm-y').textContent = Math.floor(player.pos.y);
  $('mm-z').textContent = Math.floor(player.pos.z);
}

// ---- "what am I looking at" HUD (top centre) ------------------------------------------------
const lookIcons = new Map();
const lookIcon = (id) => {
  if (!lookIcons.has(id)) lookIcons.set(id, (PLANT[id] ? plantIcon(atlasCanvas, id) : itemIcon(atlasCanvas, itemForBlock(id), 44)).toDataURL());
  return lookIcons.get(id);
};
const _look = new THREE.Vector3();
let lookSig = null;
function updateLookAt() {
  const el = $('lookat');
  if (!playing || screen || dead) { el.hidden = true; lookSig = null; return; }
  camera.getWorldDirection(_look);
  const hit = raycast(world, player.eye, _look, GAME.player.lookAtReach); // only things within reach of the HUD
  const mh = mobs.pick(player.eye, _look, GAME.player.lookAtReach);
  if (mh && (!hit || mh.dist < Math.hypot(hit.x + 0.5 - player.eye.x, hit.y + 0.5 - player.eye.y, hit.z + 0.5 - player.eye.z) - 0.5)) { // a creature in the way
    const m = mh.mob;
    lookSig = null;
    $('lookat-icon').style.visibility = 'hidden';
    $('lookat-name').textContent = m.def.name;
    $('lookat-sub').classList.remove('ready');
    $('lookat-sub').textContent = `${'\u2665'.repeat(Math.max(1, Math.ceil(m.hp / 2)))} ${Math.ceil(m.hp / 2)} / ${Math.ceil(m.def.health / 2)}${m.def.shear ? (m.sheared ? ' \u2014 sheared' : ' \u2014 shears get wool') : ''}`;
    $('lookat-pips').replaceChildren();
    el.hidden = false;
    return;
  }
  if (!hit) { el.hidden = true; lookSig = null; return; }
  $('lookat-icon').style.visibility = '';
  if (hit.id !== lookSig) {
    lookSig = hit.id;
    const g = GROWTH_INFO[hit.id];
    $('lookat-icon').src = lookIcon(hit.id);
    $('lookat-name').textContent = g ? g.label : BLOCKS[hit.id].name;
    const sub = $('lookat-sub'), pips = $('lookat-pips');
    sub.classList.remove('ready');
    pips.replaceChildren();
    pips.classList.remove('ripe');
    if (g) { // growable: show how far along it is, so you know when it can be harvested
      for (let i = 1; i <= 3; i++) { const p = document.createElement('i'); if (i <= g.stage) p.className = 'on'; pips.appendChild(p); }
      pips.classList.toggle('ripe', !!g.ripe);
      if (g.crop) {
        sub.textContent = g.ripe ? `${g.name} \u2014 ready to harvest!` : `${g.name} (stage ${g.stage}/3) \u2014 not ready yet`;
      } else {
        sub.textContent = `${g.name} (stage ${g.stage}/3)${g.ripe ? ' \u2014 fully grown' : ' \u2014 still growing'}`;
      }
      sub.classList.toggle('ready', !!g.ripe);
    } else {
      const b = BLOCKS[hit.id];
      sub.textContent = b.tool ? `Best tool: ${b.tool[0].toUpperCase()}${b.tool.slice(1)}` : '';
    }
  }
  el.hidden = false;
}

// ---------------------------------------------------------------------------------------
// Fog / time of day
// ---------------------------------------------------------------------------------------
function updateFog() {
  const far = (chunkRenderer.radius * 16 - 4) * fogMul; // (a storm or a blizzard closes the view in)
  scene.fog.near = far * 0.55;
  scene.fog.far = far;
}
updateFog();

const SKIN = new THREE.Color(0xc99a74);
const WHITE = new THREE.Color(1, 1, 1);
let underwater = false;
// How bright it is where the player's eyes are (0-1, from the light level of that cell), eased so stepping into a
// tunnel or sealing a hole fades the view down rather than snapping. Dims the fog/sky colour (so far walls fade to
// dark, not to bright sky blue) and the hand.
let eyeLight = 1, lastEnvTime = 0;
function updateEyeLight() {
  const dt = Math.min(0.25, Math.max(0, elapsed - lastEnvTime));
  lastEnvTime = elapsed;
  const level = world.lighting.levelAt(Math.floor(camera.position.x), Math.floor(camera.position.y), Math.floor(camera.position.z));
  eyeLight += (brightness(level) - eyeLight) * Math.min(1, dt * 4);
  return eyeLight;
}
// Weather: refresh where you are now and what the weather is there, then show it (particles, thunder, wind)
let envAt = 0;
function updateWeather(dt) {
  if (elapsed - envAt > 0.5) {
    envAt = elapsed;
    biomeNow = world.biomeInfo(player.pos.x, player.pos.z, player.pos.y);
    if (biomeNow.climate === 'ocean' && !progress.flags.has('ocean')) { progress.flags.add('ocean'); checkGoals(); }
  }
  weatherState = weatherNow(seed, dayCount + dayTime, biomeNow.climate);
  weatherFx.update(dt, weatherState, camera.position, { underwater: player.headInWater, elapsed });
}
// Blizzards, sandstorms and hurricanes slow you down, out in the open
function stormSlowdown() {
  if (weatherState.speed >= 1) return 1;
  const sky = world.lighting.get(Math.floor(player.pos.x), Math.floor(player.pos.y + 1.6), Math.floor(player.pos.z), 0);
  return sky >= 14 ? weatherState.speed : 1;
}
// Storm clouds darken the sky and hide the sun; a flash of lightning whitens everything for a moment
function applyWeatherLook(env) {
  const wd = weatherState.darkness, fl = weatherFx.flash;
  if (wd > 0.001) {
    _c.setRGB(0.44, 0.47, 0.52).multiplyScalar(0.1 + 0.9 * env.day);
    env.sky.lerp(_c, Math.min(1, wd * 1.3));
    env.tint.multiplyScalar(1 - 0.38 * wd);
    sky.cloudMat.color.multiplyScalar(1 - 0.5 * wd);
    sky.sun.material.opacity = 1 - 0.95 * wd;
    sky.sunHalo.material.opacity *= 1 - wd;
    sky.moonMat.uniforms.uAlpha.value *= 1 - 0.85 * wd;
    sky.halo.material.opacity *= 1 - wd;
    sky.starMat.uniforms.uOpacity.value *= 1 - wd;
  } else sky.sun.material.opacity = 1;
  if (fl > 0.01) { env.sky.lerp(WHITE, fl * 0.55); env.tint.lerp(WHITE, fl * 0.5); }
  fogMul = weatherState.fog;
}

function updateEnvironment() {
  const env = sky.update(dayTime, camera.position, elapsed);
  applyWeatherLook(env);
  const dim = updateEyeLight();
  tintUniform.value.copy(env.tint); // solid, water and plants tint through the shader (see withBlockLight)
  materials.sprite.color.copy(env.tint);
  const handTint = _c.copy(env.tint).lerp(WHITE, 0.35).multiplyScalar(0.25 + 0.75 * dim);
  heldBlockMat.color.copy(handTint);
  heldSpriteMat.color.copy(handTint);
  heldArmMat.color.copy(SKIN).multiply(handTint);
  sleeveMat.color.copy(SLEEVE).multiply(handTint);
  pMesh.material.color.copy(env.tint);
  scene.background = scene.background || new THREE.Color();
  scene.background.copy(env.sky).multiplyScalar(dim);
  scene.fog.color.copy(scene.background);

  const under = player.headInWater;
  if (under !== underwater) {
    underwater = under;
    $('underwater').style.opacity = under ? '1' : '0';
  }
  if (under) {
    scene.fog.color.setRGB(0.1 * env.tint.r * dim, 0.25 * env.tint.g * dim, 0.6 * env.tint.b * dim);
    scene.background.copy(scene.fog.color);
    scene.fog.near = 1;
    scene.fog.far = 22;
  } else {
    updateFog();
  }
}

// ---------------------------------------------------------------------------------------
// Saving
// ---------------------------------------------------------------------------------------
let skipSave = false;
function snapshot() {
  return JSON.stringify({
    seed,
    terrain: world.terrain,
    edits: world.serializeEdits(),
    legacyCaves: world.serializeLegacy(),
    player: dead ? { x: spawnPoint.x, y: spawnPoint.y, z: spawnPoint.z, yaw: 0, pitch: 0, flying: false } : { x: player.pos.x, y: player.pos.y, z: player.pos.z, yaw: player.yaw, pitch: player.pitch, flying: player.flying },
    mode: creative ? 'creative' : 'survival',
    inventory: inventory.serialize(),
    equipment: inventory.serializeEquipment(),
    creativeHotbar,
    food, saturation,
    health: dead ? MAX_HEALTH : health, spawnPoint, day: dayCount, drops: drops.serialize(), furnaces: furnaces.serialize(),
    progress: { collected: [...progress.collected], crafted: [...progress.crafted], flags: [...progress.flags] },
    chests: chests.serialize(), quests: quests.serialize(), xp, bed: spawnBed, mobs: mobs.serialize(),
    slot, time: dayTime, radius: chunkRenderer.radius,
  });
}
function save_() {
  if (skipSave) return Promise.resolve();
  const p = Promise.resolve(storage.save(worldId, snapshot())).catch(() => {});
  world.editsDirty = false;
  return p;
}
// Put things that are mid-air back into the world (a toppling tree, falling sand) so a save cannot lose them
function flushWorld() {
  for (const f of [...fallingTrees]) finishFall(f);
  gravitySim.flush();
}
setInterval(() => { if (playing) save_(); }, 10000);
// Leaving: browsers give a page little time, so save as soon as it is hidden (switching apps on a phone) and again on unload
function saveOnLeave() {
  if (skipSave || quitting) return;
  flushWorld();
  storage.saveOnExit(worldId, snapshot());
}
window.addEventListener('beforeunload', saveOnLeave);
window.addEventListener('pagehide', saveOnLeave);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') saveOnLeave(); });

// ---------------------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------------------
let last = performance.now();
let fps = 60, fpsAcc = 0, fpsN = 0;
let fov = 75;
let bob = 0;
let plantTimer = 0;
let regenTimer = 0, starveTimer = 0;
let eatBlend = 0; // 0..1: how far the held item is raised to the mouth

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.max(0, Math.min(0.1, (now - last) / 1000)); // (the very first frame can report a time just before ours)
  last = now;
  elapsed += dt;
  fpsAcc += dt; fpsN++;
  if (fpsAcc > 0.5) { fps = Math.round(fpsN / fpsAcc); fpsAcc = 0; fpsN = 0; }

  touchCtl.sync({ show: playing && !screen && !dead && !optionsOpen, screen, creative, flying: player.flying });
  if (playing) {
    player.speedMul = (isStarving() ? HUNGER.starvingSpeed : 1) * stormSlowdown();
    input.sprint = sprintHeld && sprintAllowed();
    player.update(dt, sleeping ? NO_INPUT : input);
    if (!sleeping) updateInteraction(dt);
    advanceTime(dt / GAME.time.dayLengthSeconds);
    if (!creative) {
      // regeneration when well fed; starvation costs half a heart every 15 s until you are dead; standing still is free
      const moving = Math.hypot(player.vel.x, player.vel.z) > 1;
      const hs = { food, saturation, health, regenTimer, starveTimer };
      const r = tickHunger(hs, dt, { moving, sprinting: input.sprint && moving, mining: mouseDown.left && !!breakTarget, maxHealth: MAX_HEALTH });
      ({ food, saturation, health, regenTimer, starveTimer } = hs);
      if (r.healed) renderHealth();
      if (r.starved) damage(r.starved, 'You starved to death');
      renderHunger();
      // breath: the air runs out under water, and then it hurts
      const bs = { air, drownTimer };
      const drown = tickBreath(bs, dt, player.headInWater);
      ({ air, drownTimer } = bs);
      if (drown) damage(drown, 'You drowned');
    }
    // the creatures: animals wander, monsters come out where it is dark and come for you
    mobs.update(dt, {
      player: dead ? null : { x: player.pos.x, y: player.pos.y, z: player.pos.z }, creative, daylight: daylight(dayTime, weatherState.darkness),
      hitPlayer: mobHitsPlayer, call: mobCalls, onSunBurn: mobBurns,
    });
  }
  renderAir();
  renderXp();
  mobModels.update(mobs.all, mobs.arrows, mobs.removed, tintUniform.value, player.pos, elapsed);
  updateWeather(dt);
  windTime.value = elapsed % 1000;
  waterSim.update(dt);
  gravitySim.update(dt);
  attachSim.update();
  if (playing || screen) furnaces.update(dt);
  ui.tickFurnace();
  for (const [e, m] of fallingBlockMeshes) m.position.y = e.y + 0.5;
  updateFallingTrees(dt);
  plantTimer += dt;
  if (plantTimer >= 1) {
    growPlants(world, Math.floor(player.pos.x / 16), Math.floor(player.pos.z / 16), GAME.plants.growthChunkRadius, plantTimer * GROWTH_SCALE);
    spreadGrass(world, Math.floor(player.pos.x / 16), Math.floor(player.pos.z / 16), GAME.spread.chunkRadius, plantTimer * GROWTH_SCALE);
    updateHydration(world, Math.floor(player.pos.x / 16), Math.floor(player.pos.z / 16), GAME.plants.growthChunkRadius, plantTimer * GROWTH_SCALE);
    plantTimer = 0;
  }
  drops.update(dt, player.pos, (it) => !creative && !dead && inventory.canFit(it.id, it.n), pickUp); // (nothing is picked up while you are on the death screen)
  carryLight(dt);
  if (animateAtlas(elapsed)) atlasTex.needsUpdate = true; // flickering furnace and torch flames
  refreshHeld();

  // camera + hand
  const e = player.eye;
  kick.v += (-140 * kick.y - 15 * kick.v) * dt;
  kick.y += kick.v * dt;
  camera.position.set(e.x, e.y + kick.y, e.z);
  camera.rotation.set(player.pitch, player.yaw, 0);
  const speed = Math.hypot(player.vel.x, player.vel.z);
  bob += speed * dt * (player.onGround ? 1.9 : 0.4);
  const targetFov = settings.get('fov') + (input.sprint && speed > 5 ? 8 : 0) + (player.flying && speed > 12 ? 8 : 0);
  fov += (targetFov - fov) * Math.min(1, 8 * dt);
  if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
  const sw = Math.sin(swing * Math.PI);
  eatBlend += ((eating > 0 ? 1 : 0) - eatBlend) * Math.min(1, 10 * dt);
  const chew = Math.sin(elapsed * 26) * 0.015 * eatBlend;
  if (pose.pivot) { // a tool: swing the whole thing forward about the hand, so the head comes down onto the block
    _swingQ.setFromEuler(_swingE.set(-sw * 0.62, sw * 0.12, 0));
    held.position.set(pose.pos[0] + Math.sin(bob) * 0.01, pose.pos[1] + Math.abs(Math.cos(bob)) * 0.012, pose.pos[2])
      .sub(_pivot.fromArray(pose.pivot)).applyQuaternion(_swingQ).add(_pivot);
    held.position.x -= sw * 0.1; held.position.y += sw * 0.1; held.position.z -= sw * 0.16; // and the whole arm reaches out towards the block
    held.quaternion.setFromEuler(_swingE.set(pose.rot[0], pose.rot[1], pose.rot[2]));
    if (pose.flip) held.quaternion.multiply(_flipQ);
    held.quaternion.premultiply(_swingQ);
  } else {
    held.position.set(
      pose.pos[0] + Math.sin(bob) * 0.01 - sw * 0.1 - eatBlend * 0.22,
      pose.pos[1] + Math.abs(Math.cos(bob)) * 0.012 - sw * 0.14 + eatBlend * 0.3 + chew,
      pose.pos[2] - sw * 0.08 + eatBlend * 0.2);
    held.rotation.set(pose.rot[0] - sw * 0.9 + eatBlend * 0.5, pose.rot[1] + sw * 0.25, pose.rot[2]);
  }
  // the right arm reaches from the shoulder to the hand: the held thing's own motion (bob, swing, raised to the mouth) moves it
  if (pose.pivot) _handR.set(pose.pivot[0] + Math.sin(bob) * 0.01 - sw * 0.1, pose.pivot[1] + Math.abs(Math.cos(bob)) * 0.012 + sw * 0.1, pose.pivot[2] - sw * 0.16);
  else _handR.set(held.position.x + pose.hold[0], held.position.y + pose.hold[1], held.position.z + pose.hold[2]);
  aimArm(armRight, SHOULDER_R, _handR);
  armRight.g.visible = !dead && !sleeping;
  refreshOffhand();
  held.scale.setScalar(pose.scale * (1 - 0.35 * eatBlend * Math.min(1, eating / GAME.eating.seconds))); // it gets eaten away
  if (eatBlend > 0.05 && !pose.pivot) held.rotation.z += Math.sin(elapsed * 26) * 0.07 * eatBlend; // chewing wobble

  chunkRenderer.update(player.pos.x, player.pos.z, playing ? 5 : 10);
  updateLookAt();
  renderArmor();
  minimap.draw(player.pos.x, player.pos.z, player.yaw, now);
  updateClocks(now);
  updateParticles(dt);
  updateEnvironment();
  villagers.update(playing || screen ? dt : 0, { x: player.pos.x, z: player.pos.z }, tintUniform.value, now, { night: bedtime(dayTime), setDoor: setDoorFor });
  checkVillage(now);
  renderer.render(scene, camera);

  if (!$('debug').hidden) {
    const s = chunkRenderer.collectStats();
    $('debug').textContent =
      `VoxelCraft  ${fps} fps  [${creative ? 'creative' : 'survival'}]\n` +
      `XYZ  ${player.pos.x.toFixed(2)} / ${player.pos.y.toFixed(2)} / ${player.pos.z.toFixed(2)}\n` +
      `Chunk ${Math.floor(player.pos.x / 16)}, ${Math.floor(player.pos.z / 16)}   seed ${seed}\n` +
      `Chunks ${s.chunks} (meshed ${s.meshed})  quads ${s.quads}  drops ${drops.items.length}\n` +
      `Time ${((dayTime * 24 + 6) % 24).toFixed(1)}h  ${player.flying ? 'FLYING' : player.onGround ? 'ground' : player.inWater ? 'swimming' : 'air'}`;
  }
}
requestAnimationFrame(frame);

// Handy for poking at the game from the console / automated tests
window.__vc = {
  world, player, audio, inventory, drops, ui, progress, chunkRenderer, camera, scene, setPlaying, selectSlot, setMode,
  get elapsed() { return elapsed; }, POSES, held, furnaces, attachSim, worldId, quitToTitle, resumeGame, openScreen, closeScreen, tossStack, settings, options, growPlants,
  get food() { return food; }, set food(v) { food = v; shownFood = -1; renderHunger(); },
  get creative() { return creative; },
  REG, villagers, waterSim, damage, respawn, advanceTime, fallingTrees, startTreeFall, sky,
  mobs, chests, quests, dialog, book, hud, mobModels, weatherFx, startSleep, useBed, openChest, attackMob, breakBlock, placeBed, hammerExtras, setDoorFor, mobHitsPlayer,
  get weather() { return weatherState; }, get biome() { return biomeNow; }, get spawnBed() { return spawnBed; }, set spawnBed(v) { spawnBed = v; }, get xp() { return xp; }, set xp(v) { xp = v; },
  get air() { return air; }, set air(v) { air = v; shownAir = -1; }, get sleeping() { return sleeping; },
  get health() { return health; }, set health(v) { health = v; shownHealth = -1; renderHealth(); },
  get dead() { return dead; }, get playing() { return playing; }, get screen() { return screen; },
  get dayTime() { return dayTime; }, set dayTime(v) { dayTime = v; }, get dayCount() { return dayCount; }, set dayCount(v) { dayCount = v; },
  toggleDebug: () => ($('debug').hidden = !$('debug').hidden),
};

// The world is ready: drop the loading cover and start playing. The mouse is captured now if the browser still
// counts the click that chose the world, otherwise on your next key press or click.
startup.done();
if (AUTOPLAY) setPlaying(true);
else { audio.start(); setPlaying(true); lock(); lastLockTry = performance.now(); }
