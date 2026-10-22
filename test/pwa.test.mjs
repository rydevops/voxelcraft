// The installable app in the repo root: it is up to date, flat, self-contained, and the PWA files are consistent.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { fitScale, hudScale, hudScaleFor, MAX_HUD } from '../src/js/fit.js';

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

t('the project layout: source in src/, dev tools in scripts/, nothing else is loaded from the root but the build', () => {
  for (const d of ['src/js', 'src/data', 'scripts', 'test']) assert.ok(fs.statSync(path.join(ROOT, d)).isDirectory(), d);
  assert.ok(!fs.existsSync(path.join(ROOT, 'public')), 'public/ moved to src/');
  assert.ok(!fs.existsSync(path.join(ROOT, 'server.js')), 'server.js moved to scripts/');
});

console.log(`pwa: ${n} checks passed`);
