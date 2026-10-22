// `npm run build`: turn the source in src/ into the installable web app in the repo root, as a FLAT set of files
// (no folders), ready to be served by GitHub Pages straight from the root of the branch:
//
//   index.html            the page (PWA tags added)
//   app.js                the whole game in one file: our code, three.js and every content file from src/data/
//   style.css             the styles
//   manifest.webmanifest  makes it installable ("Add to Home screen" / Install)
//   sw.js                 service worker: caches everything so it works offline and starts instantly
//   icon-*.png ...        app icons (drawn by make-icons.mjs)
//   .nojekyll             tells GitHub Pages to serve the files as they are
//
// The output is deterministic (same source -> same bytes), so CI can check that the committed files are up to date:
//   node scripts/build.mjs --check
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { drawIcon, encodePng, writeIcons } from './make-icons.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const CHECK = process.argv.includes('--check');
const DATA_FILES = ['blocks', 'items', 'loot', 'recipes', 'goals', 'textures', 'sounds', 'worldgen', 'game', 'music'];

// every file the build writes into the root (and nothing else in the root may be touched)
export const OUTPUTS = ['index.html', 'app.js', 'style.css', 'manifest.webmanifest', 'sw.js', '.nojekyll', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon.png'];

const outputs = new Map(); // file name -> Buffer | string

// ---- 1. the game: one bundle with the content files baked in ----
const content = Object.fromEntries(DATA_FILES.map((n) => [n, JSON.parse(fs.readFileSync(path.join(SRC, 'data', n + '.json'), 'utf8'))]));
const bundle = await build({
  entryPoints: [path.join(SRC, 'js', 'main.js')],
  bundle: true, write: false, minify: true, format: 'esm', target: 'es2022', legalComments: 'none', logLevel: 'warning',
  external: ['node:*'], // the registry has a Node-only branch for tests; it is never reached in the browser
  banner: { js: 'globalThis.__VOXELCRAFT_CONTENT__=' + JSON.stringify(content) + ';' },
});
const appJs = Buffer.from(bundle.outputFiles[0].contents);
outputs.set('app.js', appJs);
const hash = crypto.createHash('sha256').update(appJs).digest('hex').slice(0, 10);
const version = `${pkg.version}-${hash}`;

// ---- 2. the page ----
let html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
html = html.replace(/<!--dev:start-->[\s\S]*?<!--dev:end-->\s*/g, ''); // development-only tags (the import map for three.js)
html = html.replace('<!--pwa:head-->', [
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" type="image/png" href="favicon.png">',
  '<link rel="apple-touch-icon" href="apple-touch-icon.png">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="VoxelCraft">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
].join('\n  '));
const register = `<script>
    // offline support + installability: the service worker caches the app; tell the game when a newer one is ready
    if ('serviceWorker' in navigator) {
      const hadController = !!navigator.serviceWorker.controller;
      navigator.serviceWorker.register('sw.js').catch(() => {});
      navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadController) window.dispatchEvent(new Event('vc-update')); });
    }
  </script>`;
html = html.replace('<script type="module" src="js/main.js"></script>', `<script type="module" src="app.js"></script>\n  ${register}`);
if (html.includes('js/main.js') || html.includes('importmap')) throw new Error('index.html still points at the unbundled source');
outputs.set('index.html', html);

// ---- 3. styles, manifest, service worker, icons ----
outputs.set('style.css', fs.readFileSync(path.join(SRC, 'style.css'), 'utf8'));
outputs.set('manifest.webmanifest', JSON.stringify({
  name: 'VoxelCraft', short_name: 'VoxelCraft',
  description: 'A tiny voxel sandbox: gather, craft, survive. Everything is generated in your browser.',
  start_url: './', scope: './', id: './', display: 'fullscreen', display_override: ['fullscreen', 'standalone'], orientation: 'landscape',
  background_color: '#15110e', theme_color: '#15110e', categories: ['games'],
  icons: [
    { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}, null, 2) + '\n');
const precache = OUTPUTS.filter((f) => f !== '.nojekyll' && f !== 'sw.js');
outputs.set('sw.js', fs.readFileSync(path.join(SRC, 'sw.template.js'), 'utf8').replace('__VERSION__', version).replace('__FILES__', JSON.stringify(['./', ...precache])));
outputs.set('.nojekyll', '');
const iconTmp = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || process.env.TMPDIR || '/tmp'), 'vc-icons-'));
for (const name of writeIcons(iconTmp)) outputs.set(name, fs.readFileSync(path.join(iconTmp, name)));
fs.rmSync(iconTmp, { recursive: true, force: true });
void drawIcon; void encodePng;

// ---- 4. write (or check) ----
const missing = OUTPUTS.filter((f) => !outputs.has(f));
if (missing.length) throw new Error('the build did not produce: ' + missing.join(', '));
if (CHECK) {
  const stale = OUTPUTS.filter((f) => { try { return !fs.readFileSync(path.join(ROOT, f)).equals(Buffer.from(outputs.get(f))); } catch { return true; } });
  if (stale.length) { console.error('The built app in the repo root is out of date: ' + stale.join(', ') + '\nRun "npm run build" and commit the result.'); process.exit(1); }
  console.log('The built app is up to date (' + version + ').');
} else {
  for (const f of OUTPUTS) fs.writeFileSync(path.join(ROOT, f), outputs.get(f));
  const kb = (n) => (n / 1024).toFixed(0) + ' KB';
  console.log(`Built ${version}: app.js ${kb(appJs.length)}, ${OUTPUTS.length} files in the repo root.`);
}
