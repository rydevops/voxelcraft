// Everything before the game itself: the developer logo, an animated title screen (a slow fly-around of a world),
// and the world selection screen (play, create, delete). Resolves with the chosen world's save.
import { World } from './world.js';
import { ChunkRenderer } from './chunks.js';
import { REG } from './registry.js';
import { B } from './blocks.js';
import { logoCanvas, itemIcon } from './textures.js';

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const nextPaint = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
const TITLE_SEED = 20260;   // the world shown behind the title
const INTRO_HOLD_MS = 2400; // how long the developer logo stays up

// Free-form seed text -> a number: digits are used as they are, anything else is hashed (like Minecraft's seed box)
function seedFromText(text) {
  const t = text.trim();
  if (!t) return undefined;
  if (/^-?\d{1,9}$/.test(t)) return Number(t);
  let h = 2166136261;
  for (const ch of t) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); }
  return (h >>> 0) % 2147483647;
}

// A button that asks for a second click before doing something drastic
function confirmButton(btn, armedLabel, action) {
  const label = btn.textContent;
  let timer = 0;
  btn.addEventListener('click', () => {
    if (btn.dataset.armed) { clearTimeout(timer); delete btn.dataset.armed; btn.textContent = label; action(); return; }
    btn.dataset.armed = '1';
    btn.textContent = armedLabel;
    timer = setTimeout(() => { delete btn.dataset.armed; btn.textContent = label; }, 3000);
  });
  btn.disarm = () => { clearTimeout(timer); delete btn.dataset.armed; btn.textContent = label; };
}

// ---- the world behind the title screen ----
class TitleScene {
  constructor({ scene, camera, materials, sky, renderer }) {
    Object.assign(this, { scene, camera, materials, sky, renderer });
    this.world = new World(TITLE_SEED);
    this.chunks = new ChunkRenderer(scene, this.world, materials, 6);
    const c = this.world.findSpawn();
    this.cx = c.x; this.cz = c.z;
    this.ground = Math.max(this.world.heightAt(Math.floor(c.x), Math.floor(c.z)), 30);
    this.angle = 0.9;
    this.dayTime = 0.12;
    this.elapsed = 0;
    this.chunks.preload(this.cx, this.cz, 3); // the land is already there when the title appears
    this.sky.setMoonPhase(3);
    camera.fov = 68;
    camera.updateProjectionMatrix();
  }

  update(dt) {
    this.elapsed += dt;
    this.angle += dt * 0.06;
    // it stays daytime: the light drifts from morning to late afternoon and back, so the land is never lost in the dark
    this.dayTime = 0.1 + 0.26 * (0.5 - 0.5 * Math.cos(this.elapsed / 55));
    const R = 34, bob = Math.sin(this.elapsed * 0.21) * 1.5; // circle slowly over the middle of the little landscape
    const cam = this.camera;
    cam.position.set(this.cx + Math.cos(this.angle) * R, this.ground + 19 + bob, this.cz + Math.sin(this.angle) * R);
    cam.lookAt(this.cx, this.ground + 1, this.cz); // always looking down at the land, never out at the sky
    this.chunks.update(this.cx, this.cz, 8);

    const env = this.sky.update(this.dayTime, cam.position, this.elapsed);
    this.materials.tint.value.copy(env.tint);
    this.materials.sprite.color.copy(env.tint);
    this.scene.background = this.scene.background || env.sky.clone();
    this.scene.background.copy(env.sky);
    this.scene.fog.color.copy(env.sky);
    const far = this.chunks.radius * 16 - 4;
    this.scene.fog.near = far * 0.55;
    this.scene.fog.far = far;
    this.renderer.render(this.scene, cam);
  }

  dispose() {
    for (const c of this.world.chunks.values()) this.chunks.disposeMeshes(c);
    this.scene.remove(this.chunks.group);
  }
}

// ---- the screens ----
export async function runStartup(ctx) {
  const { params, atlasCanvas, titleLogo, openOptions } = ctx;
  const { storage } = ctx; // where worlds live: the dev server's folder or this browser's storage (see storage.js)
  if (ctx.autoplay) return directStart(params, storage);

  // the title theme (silent until your first click or key press: browsers do not allow sound before that)
  const { audio } = ctx;
  audio.setScene('title');
  audio.start();
  audio.unlockOnGesture();
  const hint = $('music-hint');
  const hintTimer = setInterval(() => { hint.hidden = audio.running || !audio.musicOn; }, 300);

  const abort = new AbortController();
  const on = (type, fn) => window.addEventListener(type, fn, { signal: abort.signal });
  const scene = new TitleScene(ctx);
  let raf = 0, last = performance.now();
  const loop = (now) => {
    raf = requestAnimationFrame(loop);
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    ctx.windTime.value = scene.elapsed % 1000;
    scene.update(dt);
  };
  raf = requestAnimationFrame(loop);

  // 1. developer logo (any key or click skips it)
  if (!params.has('title')) await intro(ctx);

  // 2./3. title -> worlds
  const chosen = await new Promise((resolve) => {
    const screens = { title: $('title'), worlds: $('worlds') };
    const show = (name) => { for (const [k, el] of Object.entries(screens)) el.hidden = k !== name; current = name; };
    let current = 'title';

    // --- title ---
    const tl = $('title-logo');
    tl.width = titleLogo.width; tl.height = titleLogo.height;
    tl.getContext('2d').drawImage(titleLogo, 0, 0);
    $('title-credit').textContent = REG.game.studio.name;
    $('t-play').addEventListener('click', () => { show('worlds'); refresh(); });
    $('t-options').addEventListener('click', openOptions);
    // Quit Game only makes sense with the local dev server (it stops it); an installed or hosted app is just closed like any app
    if (storage.kind === 'server') confirmButton($('t-quit'), 'Click again: stop the game server', () => quitGame(storage)); else $('t-quit').hidden = true;
    show('title');

    // --- worlds ---
    let worlds = [], selected = null, busy = false;
    const list = $('world-list');
    const fmtDate = (iso) => { const d = new Date(iso); return isNaN(d) ? '' : d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ' ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }); };
    function render() {
      list.replaceChildren(...worlds.map((w) => {
        const el = document.createElement('div');
        el.className = 'world-item' + (w.id === selected ? ' sel' : '');
        el.dataset.id = w.id;
        const name = document.createElement('b'); name.textContent = w.name;
        const info = document.createElement('span');
        info.textContent = `${w.mode === 'creative' ? 'Creative' : 'Survival'} · Day ${(w.day || 0) + 1} · Seed ${w.seed} · ${fmtDate(w.updated)}`;
        el.append(name, info);
        el.addEventListener('click', () => { selected = w.id; render(); });
        el.addEventListener('dblclick', () => start(w.id));
        return el;
      }));
      if (!worlds.length) { const p = document.createElement('p'); p.className = 'world-empty'; p.textContent = 'No worlds yet. Create one to start playing!'; list.append(p); }
      $('w-play').disabled = !selected || busy;
      $('w-del').disabled = !selected || busy;
      $('w-del').disarm?.();
    }
    async function refresh() {
      $('world-error').textContent = '';
      try { worlds = await storage.list(); } catch (e) { worlds = []; $('world-error').textContent = 'Could not read your worlds: ' + e.message; }
      if (!storage.persistent) $('world-error').textContent = 'Your browser is not allowing saved games here: worlds will be lost when you close this tab.';
      if (!worlds.some((w) => w.id === selected)) selected = worlds[0]?.id ?? null;
      render();
      if (!worlds.length && !$('world-error').textContent) openCreate();
    }
    async function start(id) {
      if (busy) return;
      busy = true;
      $('w-play').disabled = true;
      try {
        $('loading').hidden = false;
        await nextPaint();
        const save = await storage.load(id);
        resolve({ id, save });
      } catch (e) {
        busy = false;
        $('loading').hidden = true;
        $('world-error').textContent = 'Could not load that world: ' + e.message;
        render();
      }
    }
    $('w-play').addEventListener('click', () => selected && start(selected));
    $('w-back').addEventListener('click', () => show('title'));
    confirmButton($('w-del'), 'Click again to delete forever', async () => {
      if (!selected) return;
      try { await storage.remove(selected); selected = null; } catch (e) { $('world-error').textContent = e.message; }
      refresh();
    });

    // --- create form ---
    const form = $('world-create');
    let mode = 'survival';
    const setMode = (m) => { mode = m; $('wc-mode').textContent = 'Game mode: ' + (m === 'creative' ? 'Creative' : 'Survival'); };
    function openCreate() {
      $('wc-name').value = 'New World';
      $('wc-seed').value = '';
      setMode('survival');
      form.hidden = false;
      $('world-actions').hidden = true;
      $('wc-name').focus();
      $('wc-name').select();
    }
    function closeCreate() { form.hidden = true; $('world-actions').hidden = false; }
    $('w-new').addEventListener('click', openCreate);
    $('wc-cancel').addEventListener('click', closeCreate);
    $('wc-mode').addEventListener('click', () => setMode(mode === 'survival' ? 'creative' : 'survival'));
    async function create() {
      if (busy) return;
      try {
        const made = await storage.create({ name: $('wc-name').value, mode, seed: seedFromText($('wc-seed').value) });
        await start(made.id);
      } catch (e) { $('world-error').textContent = 'Could not create the world: ' + e.message; }
    }
    $('wc-go').addEventListener('click', create);

    // --- keys ---
    on('keydown', (e) => {
      if (current !== 'worlds' || busy) return;
      if (e.code === 'Escape') { if (!form.hidden && worlds.length) closeCreate(); else if (form.hidden) show('title'); return; }
      if (!form.hidden) { if (e.code === 'Enter') create(); return; }
      const i = worlds.findIndex((w) => w.id === selected);
      if (e.code === 'ArrowDown' && worlds.length) { selected = worlds[Math.min(worlds.length - 1, i + 1)].id; render(); }
      else if (e.code === 'ArrowUp' && worlds.length) { selected = worlds[Math.max(0, i - 1)].id; render(); }
      else if (e.code === 'Enter' && selected) start(selected);
    });
  });

  // hand over to the game: the loading cover stays up until the game says it is ready
  await nextPaint();
  cancelAnimationFrame(raf);
  clearInterval(hintTimer);
  hint.hidden = true;
  abort.abort();
  scene.dispose();
  $('title').hidden = true;
  $('worlds').hidden = true;
  return { ...chosen, done: finish };
}

function finish() {
  $('loading').hidden = true;
  document.body.classList.remove('startup');
}

// Test hook: ?autoplay[&world=<id>][&mode=creative][&seed=n] goes straight into a world with no menus
async function directStart(params, storage) {
  let id = params.get('world');
  if (!id) {
    const seed = params.has('seed') ? Number(params.get('seed')) : undefined;
    id = (await storage.create({ name: 'Autoplay', mode: params.get('mode') || 'survival', seed })).id;
  }
  return { id, save: await storage.load(id), done: finish };
}

async function intro(ctx) {
  const el = $('intro');
  const { name, tagline } = REG.game.studio;
  const logo = logoCanvas(ctx.atlasCanvas, name.toUpperCase(), 4);
  const target = $('intro-logo');
  target.width = logo.width; target.height = logo.height;
  target.getContext('2d').drawImage(logo, 0, 0);
  const emblem = itemIcon(ctx.atlasCanvas, B.GRASS, 112);
  const em = $('intro-emblem');
  em.width = emblem.width; em.height = emblem.height;
  em.getContext('2d').drawImage(emblem, 0, 0);
  $('intro-sub').textContent = tagline;

  let skip;
  const skipped = new Promise((r) => { skip = r; });
  const ac = new AbortController();
  for (const type of ['keydown', 'pointerdown']) window.addEventListener(type, skip, { signal: ac.signal });
  el.hidden = false;
  await nextPaint();
  el.classList.add('in');
  await Promise.race([sleep(900 + INTRO_HOLD_MS), skipped]);
  el.classList.remove('in');
  await sleep(700);
  ac.abort();
  el.hidden = true;
}

// Stop the game server (it is a local dev server: quitting the game means closing it down), then say goodbye
async function quitGame(storage) {
  await storage.quitGame();
  document.body.innerHTML = '<div style="position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#15110e;color:#fff;font-family:Consolas,monospace;text-align:center"><h1 style="margin:0">Thanks for playing!</h1><p style="color:#bbb;margin:0">The game server has stopped. You can close this tab.<br>Run <b>npm start</b> to play again.</p></div>';
  window.close();
}
