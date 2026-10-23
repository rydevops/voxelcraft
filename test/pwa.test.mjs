// The installable app in the repo root: it is up to date, flat, self-contained, and the PWA files are consistent.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { fitScale, hudScale, hudScaleFor, hotbarScaleFor, MAX_HUD } from '../src/js/fit.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const pkg = JSON.parse(read('package.json'));
let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

t('the built files match the source (run "npm run build" if this fails)', () => {
  const out = execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'build.mjs'), '--check'], { encoding: 'utf8' });
  assert.match(out, /up to date/);
});

const OUTPUTS = ['index.html', 'app.js', 'style.css', 'manifest.webmanifest', 'sw.js', '.nojekyll', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon.png'];

t('every output exists in the root, as a plain file with no folder in its name', () => {
  for (const f of OUTPUTS) {
    assert.ok(!f.includes('/'), f);
    assert.ok(fs.statSync(path.join(ROOT, f)).isFile(), f);
  }
});

t('the page loads only root files: the bundle, the styles, the manifest and icons', () => {
  const html = read('index.html');
  assert.ok(!html.includes('importmap') && !html.includes('js/main.js') && !html.includes('vendor/'), 'no dev-only tags');
  for (const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    assert.ok(!/^(https?:)?\/\//.test(m[1]), 'external reference ' + m[1]);
    assert.ok(!m[1].includes('/'), 'not a root file: ' + m[1]);
    assert.ok(OUTPUTS.includes(m[1]), 'unknown file ' + m[1]);
  }
  assert.match(html, /rel="manifest"/);
  assert.match(html, /name="viewport"[^>]*viewport-fit=cover/);
});

t('the bundle contains the game, three.js and the content, and nothing points at the old layout', () => {
  const js = read('app.js');
  assert.ok(js.includes('__VOXELCRAFT_CONTENT__'));
  assert.ok(js.length > 300_000, 'three.js is bundled in');
  assert.ok(!/from\s*["']three["']/.test(js), 'three.js is not left as an import');
  assert.ok(!js.includes('public/'), 'no reference to the old public/ folder');
});

t('the manifest is installable', () => {
  const m = JSON.parse(read('manifest.webmanifest'));
  assert.equal(m.name, 'VoxelCraft');
  assert.ok(m.start_url === './' && m.scope === './', 'relative, so it works under /<repo>/ on GitHub Pages');
  assert.ok(['fullscreen', 'standalone'].includes(m.display));
  assert.equal(m.orientation, 'landscape');
  const sizes = m.icons.map((i) => i.sizes + ':' + i.purpose);
  assert.ok(sizes.includes('192x192:any') && sizes.includes('512x512:any') && sizes.includes('512x512:maskable'), sizes.join());
  for (const i of m.icons) {
    const png = fs.readFileSync(path.join(ROOT, i.src));
    assert.equal(png.subarray(1, 4).toString(), 'PNG');
    const [w, h] = i.sizes.split('x').map(Number);
    assert.equal(png.readUInt32BE(16), w); assert.equal(png.readUInt32BE(20), h);
  }
});

t('the service worker precaches every file the page needs, and only files that exist', () => {
  const sw = read('sw.js');
  const files = JSON.parse(/const FILES = (\[.*?\]);/s.exec(sw)[1]);
  for (const f of ['./', 'index.html', 'app.js', 'style.css', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png']) assert.ok(files.includes(f), 'not cached: ' + f);
  for (const f of files) if (f !== './') assert.ok(fs.existsSync(path.join(ROOT, f)), 'cached but missing: ' + f);
  assert.ok(!sw.includes('__VERSION__') && !sw.includes('__FILES__'));
  assert.ok(sw.includes(pkg.version), 'the cache name carries the version');
});

t('the title screen shows the build version, and the app checks for an update every time it is opened', () => {
  const html = read('index.html');
  const sw = read('sw.js');
  const version = /const VERSION = '([^']+)'/.exec(sw)[1];
  assert.ok(html.includes(`<p id="title-version">v${version}</p>`), 'the title shows the same version as the service worker');
  assert.match(html, /reg\.update\(\)/, 'asks for a newer build on launch');
  assert.match(html, /visibilitychange/, 'and when the app comes back to the front');
  assert.match(html, /controllerchange[\s\S]*vc-update/, 'tells the game when a new build has taken over');
  assert.match(sw, /cache: 'reload'/, 'a new build is fetched past the HTTP cache');
});

t('the page fits small screens: windows shrink, never grow, and the HUD scales down', () => {
  assert.equal(fitScale(900, 600, 1920, 1080), 1);
  assert.ok(fitScale(900, 600, 740, 340) < 0.6);
  const s = fitScale(900, 600, 740, 340);
  assert.ok(900 * s <= 740 && 600 * s <= 340);
  assert.equal(fitScale(0, 0, 100, 100), 1, 'a hidden window is left alone');
  assert.ok(fitScale(5000, 5000, 100, 100) >= 0.25);
  assert.equal(hudScale(1920, 1080), 1);
  assert.ok(hudScale(740, 340) < 0.7 && hudScale(320, 200) >= 0.55);
});

t('the HUD size setting scales the HUD (and cannot run away or break it)', () => {
  assert.equal(hudScaleFor(1920, 1080, 1), 1);
  assert.ok(Math.abs(hudScaleFor(844, 390, 1.5) - hudScale(844, 390) * 1.5) < 1e-9);
  assert.equal(hudScaleFor(1920, 1080, 5), MAX_HUD);
  assert.equal(hudScaleFor(1920, 1080, NaN), 1); assert.equal(hudScaleFor(1920, 1080, -2), 1);
});

t('on a touch screen the hotbar and loot bag always fit between the joystick and the action buttons', () => {
  for (const [w, h] of [[844, 390], [667, 375], [932, 430], [1024, 768], [1366, 1024], [568, 320]]) {
    const hud = hudScaleFor(w, h, 1.3);
    const s = hotbarScaleFor(w, h, hud, true);
    const vmin = Math.min(w, h), stick = Math.min(176, Math.max(112, vmin * 0.31)), pad = vmin * 0.035;
    assert.ok(s <= hud + 1e-9 && s >= 0.45, `${w}x${h}: scale ${s.toFixed(2)}`);
    if (s > 0.46) assert.ok(608 * s <= w - 2 * (stick + pad) + 1e-6, `${w}x${h}: hotbar + bag (${Math.round(608 * s)} px) fits between the controls`);
  }
  assert.equal(hotbarScaleFor(1920, 1080, 1, false), 1, 'a desktop is left alone');
  assert.equal(hotbarScaleFor(1920, 1080, 1.5, true), 1.5, 'plenty of room: no cap');
});

t('touch: the joystick only walks (sprint is the button), every action button starts on the right, and a stuck finger cannot lock the controls', () => {
  const main = read('src/js/main.js'), touch = read('src/js/touch.js'), css = read('src/style.css');
  assert.ok(!/\bt\.edge\b/.test(main) && !/stickSprints|state\.edge/.test(touch), 'the stick has no say in sprinting');
  for (const b of ['attack', 'use', 'jump', 'sprint', 'crouch', 'fly']) assert.match(css, new RegExp('\\.tb\\.' + b + '[^{]*\\{[^}]*right:'), b + ' is placed from the right edge');
  assert.ok(/\.stick \{[^}]*left:/.test(css), 'the joystick is on the left');
  // a new finger takes over from one whose lift was never reported, and a lost pointer capture ends the touch
  assert.ok(!/if \(lookId !== null\) return/.test(touch) && !/if \(stickId !== null\) return|stickId !== null\) return/.test(touch.replace(/if \(stickId !== null\) stickEnd/g, '')), 'no "already busy" early returns');
  assert.ok((touch.match(/lostpointercapture/g) || []).length >= 4, 'lost captures are handled everywhere');
  assert.ok(/SOFT_LOOK/.test(touch), 'a drag that starts on the HUD or hotbar also turns the camera');
});

t('nothing in the game requires the Pointer Lock API (iPhone Safari has none): Save & Quit and the pause / death screens must still work', () => {
  const main = read('src/js/main.js');
  assert.ok(!/document\.exitPointerLock\(\)/.test(main), 'document.exitPointerLock() must be called as exitPointerLock?.()');
  assert.ok(!/requestPointerLock\(\{/.test(main) || /try \{\s*const p = canvasEl\.requestPointerLock/.test(main), 'requestPointerLock is only called inside try / optional chaining');
  const quit = main.slice(main.indexOf('async function quitToTitle'), main.indexOf("$('quitbtn').addEventListener"));
  assert.ok(/try \{[\s\S]*save_\(\)[\s\S]*\} catch/.test(quit), 'quitToTitle survives a failing save and leaves anyway');
  assert.ok(/setTimeout\(resolve, \d+\)/.test(quit), 'and does not wait forever for a stalled save');
});

t('the project layout: source in src/, dev tools in scripts/, nothing else is loaded from the root but the build', () => {
  for (const d of ['src/js', 'src/data', 'scripts', 'test']) assert.ok(fs.statSync(path.join(ROOT, d)).isDirectory(), d);
  assert.ok(!fs.existsSync(path.join(ROOT, 'public')), 'public/ moved to src/');
  assert.ok(!fs.existsSync(path.join(ROOT, 'server.js')), 'server.js moved to scripts/');
});

console.log(`pwa: ${n} checks passed`);
