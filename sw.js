// VoxelCraft service worker (the build fills in the version and the file list).
// The whole game is a handful of static files, so they are all cached when the app is first opened: after that it starts
// instantly and works with no network. A new build has a new version, which makes the browser install the new worker; it
// takes over at once and removes the old cache; the page reloads into it if you are still on the title screen, otherwise the
// next launch (or quitting to the title) runs the new game. The files are fetched past the browser's HTTP cache so a new
// version never caches stale copies.
const VERSION = '1.0.0-c32390cd66';
const CACHE = 'voxelcraft-' + VERSION;
const FILES = ["./","index.html","app.js","style.css","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png","favicon.png"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n.startsWith('voxelcraft-') && n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => (req.mode === 'navigate' ? caches.match('index.html') : Response.error()));
    })
  );
});
