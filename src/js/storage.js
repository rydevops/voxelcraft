// Where worlds are kept. Two homes behind one interface:
//   "server"  the Node dev server's worlds/ folder (npm start): the files you can see, back up and copy
//   "local"   this browser's own IndexedDB (the installed / GitHub Pages app, which has no server)
// The game picks one at startup (see openStorage); everything else just calls list / create / load / save / remove.
// A world is { name, created, updated, seed, mode, ...the game's snapshot }; list() returns short summaries.

const ID_RE = /^[a-z0-9-]{1,48}$/;
export const cleanName = (n) => (typeof n === 'string' ? n.replace(/\s+/g, ' ').trim().slice(0, 32) : '') || 'New World';
export const summary = (id, w) => ({ id, name: w.name, mode: w.mode === 'creative' ? 'creative' : 'survival', seed: w.seed, created: w.created, updated: w.updated, day: w.day ?? 0 });
export const validId = (id) => typeof id === 'string' && ID_RE.test(id);

function makeId(name, exists, rand) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 30) || 'world';
  for (;;) {
    const id = slug + '-' + rand().toString(36).slice(2, 6).padEnd(4, '0');
    if (!exists(id)) return id;
  }
}

// ---- a home for worlds made from any async key-value store: { get(id), set(id, value), delete(id), keys() } ----
export function createLocalStorage(kv, { rand = Math.random, now = () => new Date().toISOString(), persistent = true } = {}) {
  const known = new Set(); // ids seen so far, so a fresh id can be picked without waiting on the store
  return {
    kind: 'local',
    persistent, // false when the browser would not give us IndexedDB: worlds then last only until the tab closes
    async list() {
      const out = [];
      for (const id of await kv.keys()) {
        known.add(id);
        const w = await kv.get(id);
        if (w && typeof w === 'object') out.push(summary(id, w));
      }
      return out.sort((a, b) => String(b.updated).localeCompare(String(a.updated)));
    },
    async create({ name, mode, seed } = {}) {
      for (const id of await kv.keys()) known.add(id);
      const clean = cleanName(name);
      const t = now();
      const w = { name: clean, created: t, updated: t, seed: Number.isInteger(seed) ? seed : Math.floor(rand() * 2 ** 31), mode: mode === 'creative' ? 'creative' : 'survival' };
      const id = makeId(clean, (x) => known.has(x), rand);
      known.add(id);
      await kv.set(id, w);
      return summary(id, w);
    },
    async load(id) {
      const w = validId(id) ? await kv.get(id) : null;
      if (!w) throw new Error('no such world');
      return { ...w, id };
    },
    // text is the game's whole snapshot as JSON; the name and creation date stay what they were
    async save(id, text) {
      const existing = validId(id) ? await kv.get(id) : null;
      if (!existing) throw new Error('no such world');
      const parsed = typeof text === 'string' ? JSON.parse(text) : text;
      if (typeof parsed !== 'object' || parsed === null || typeof parsed.seed !== 'number') throw new Error('bad world payload');
      await kv.set(id, { ...parsed, name: existing.name, created: existing.created, updated: now() });
    },
    async remove(id) {
      if (validId(id)) await kv.delete(id);
      known.delete(id);
    },
    // Called while the page is going away: start the write and let the browser finish it if it can
    saveOnExit(id, text) { this.save(id, text).catch(() => {}); },
  };
}

// ---- the dev server's API (relative URLs, so it works from any path) ----
export function createServerStorage(fetchFn = (...a) => fetch(...a)) {
  const call = async (route, method = 'GET', body) => {
    const r = await fetchFn(route, { method, headers: body === undefined ? {} : { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
    if (!r.ok) throw new Error(`${method} ${route}: ${r.status} ${await r.text()}`);
    return r.json();
  };
  return {
    kind: 'server',
    persistent: true,
    list: () => call('api/worlds'),
    create: (opts) => call('api/worlds', 'POST', opts),
    load: (id) => call('api/worlds/' + id),
    save: (id, text) => fetchFn('api/worlds/' + id, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: text }),
    remove: (id) => call('api/worlds/' + id, 'DELETE'),
    saveOnExit(id, text) { navigator.sendBeacon('api/worlds/' + id, new Blob([text], { type: 'application/json' })); },
    async quitGame() { try { await fetchFn('__voxelcraft/shutdown', { method: 'POST', headers: { 'x-voxelcraft-stop': '1' } }); } catch { /* already gone */ } },
  };
}

// ---- IndexedDB as an async key-value store ----
function indexedDbKv(dbName = 'voxelcraft', storeName = 'worlds') {
  const open = () => new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(storeName);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  let dbPromise = null;
  const db = () => (dbPromise ??= open());
  const run = async (mode, fn) => {
    const d = await db();
    return new Promise((resolve, reject) => {
      const tx = d.transaction(storeName, mode);
      const out = fn(tx.objectStore(storeName));
      tx.oncomplete = () => resolve(out?.result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  };
  return {
    get: (id) => run('readonly', (s) => s.get(id)),
    set: (id, value) => run('readwrite', (s) => s.put(value, id)),
    delete: (id) => run('readwrite', (s) => s.delete(id)),
    keys: () => run('readonly', (s) => s.getAllKeys()),
  };
}

// A store that lives in memory only (used when IndexedDB is not allowed, e.g. some private-browsing modes)
export function memoryKv() {
  const m = new Map();
  return { get: async (id) => (m.has(id) ? structuredClone(m.get(id)) : undefined), set: async (id, v) => { m.set(id, structuredClone(v)); }, delete: async (id) => { m.delete(id); }, keys: async () => [...m.keys()] };
}

// Choose the home for worlds: the dev server if one answers, otherwise this browser's storage.
export async function openStorage() {
  try {
    const r = await fetch('api/ping', { cache: 'no-store' });
    if (r.ok && (await r.json())?.game === 'voxelcraft') return createServerStorage();
  } catch { /* no server: this is the installed / hosted app */ }
  try {
    const kv = indexedDbKv();
    await kv.keys(); // fails right here if the browser refuses IndexedDB
    if (navigator.storage?.persist) navigator.storage.persist().catch(() => {}); // ask the browser not to evict our saves
    return createLocalStorage(kv);
  } catch {
    return createLocalStorage(memoryKv(), { persistent: false });
  }
}
