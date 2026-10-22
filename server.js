// VoxelCraft dev server: serves the game, vendors three.js, and persists the worlds (one JSON file each in worlds/).
// Only one instance may run at a time (see the lock file), and `npm run stop` shuts it down from another terminal.
import http from 'node:http';
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(ROOT, 'public');
const THREE_BUILD = path.join(ROOT, 'node_modules', 'three', 'build');
// The environment overrides exist so automated tests can run a throw-away server without touching a real world.
const WORLDS_DIR = process.env.VOXELCRAFT_WORLDS || path.join(ROOT, 'worlds');
const LEGACY_SAVE = process.env.VOXELCRAFT_SAVE || path.join(ROOT, 'world.json'); // the single-world save of earlier versions
export const LOCK_FILE = process.env.VOXELCRAFT_LOCK || path.join(ROOT, '.voxelcraft.lock');
const PORT = Number(process.env.PORT) || 3000;
const MAX_BODY = 8 * 1024 * 1024;
const STOP_HEADER = 'x-voxelcraft-stop';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(new Error('payload too large'));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function serveFile(res, baseDir, relPath) {
  // Resolve and make sure we never escape baseDir.
  const full = path.normalize(path.join(baseDir, relPath));
  if (!full.startsWith(baseDir)) return send(res, 403, 'Forbidden');
  try {
    const data = await fs.readFile(full);
    send(res, 200, data, MIME[path.extname(full)] || 'application/octet-stream');
  } catch {
    send(res, 404, 'Not found');
  }
}

// ---- worlds ---------------------------------------------------------------------------------
// Each world is worlds/<id>.json: { name, created, updated, seed, mode, ...the game's snapshot }.
const ID_RE = /^[a-z0-9-]{1,48}$/;
const worldPath = (id) => path.join(WORLDS_DIR, id + '.json');
const json = (res, status, obj) => send(res, status, JSON.stringify(obj), MIME['.json']);
const cleanName = (n) => (typeof n === 'string' ? n.replace(/\s+/g, ' ').trim().slice(0, 32) : '') || 'New World';

// What the world list shows (the file can be large, so only these fields are sent)
const summary = (id, w) => ({ id, name: w.name, mode: w.mode === 'creative' ? 'creative' : 'survival', seed: w.seed, created: w.created, updated: w.updated, day: w.day ?? 0 });

function newId(name) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 30) || 'world';
  for (;;) {
    const id = slug + '-' + Math.random().toString(36).slice(2, 6);
    if (!fsSync.existsSync(worldPath(id))) return id;
  }
}

async function writeWorld(id, obj) {
  // Write atomically so a crash mid-save can't corrupt the world.
  const tmp = worldPath(id) + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(obj));
  await fs.rename(tmp, worldPath(id));
}

async function readWorld(id) {
  try { return JSON.parse(await fs.readFile(worldPath(id), 'utf8')); } catch { return null; }
}

// First start with this version: bring the old single world.json in as a world of its own (copied, never deleted).
// The worlds folder existing is what says this has been done, so deleting every world later does not bring it back.
async function prepareWorlds() {
  if (fsSync.existsSync(WORLDS_DIR)) return;
  await fs.mkdir(WORLDS_DIR, { recursive: true });
  try {
    const old = JSON.parse(await fs.readFile(LEGACY_SAVE, 'utf8'));
    if (typeof old?.seed !== 'number') return;
    const stat = await fs.stat(LEGACY_SAVE);
    const name = 'My World';
    await writeWorld(newId(name), { ...old, name, created: stat.birthtime.toISOString(), updated: stat.mtime.toISOString() });
    console.log('  Imported your existing world.json as "' + name + '" (the original file was left in place).');
  } catch { /* no old save: nothing to import */ }
}

async function handleWorlds(req, res, pathname) {
  const id = pathname.slice('/api/worlds'.length).replace(/^\//, '');
  if (!id) {
    if (req.method === 'GET') {
      const list = [];
      for (const file of await fs.readdir(WORLDS_DIR)) {
        if (!file.endsWith('.json')) continue;
        const wid = file.slice(0, -5);
        const w = ID_RE.test(wid) ? await readWorld(wid) : null;
        if (w) list.push(summary(wid, w));
      }
      list.sort((a, b) => String(b.updated).localeCompare(String(a.updated)));
      return json(res, 200, list);
    }
    if (req.method === 'POST') {
      let body;
      try { body = JSON.parse((await readBody(req)) || '{}'); } catch { return send(res, 400, 'bad JSON'); }
      const name = cleanName(body.name);
      const seed = Number.isInteger(body.seed) ? body.seed : Math.floor(Math.random() * 2 ** 31);
      const mode = body.mode === 'creative' ? 'creative' : 'survival';
      const now = new Date().toISOString();
      const wid = newId(name);
      const w = { name, created: now, updated: now, seed, mode };
      await writeWorld(wid, w);
      return json(res, 201, summary(wid, w));
    }
    return send(res, 405, 'Method not allowed');
  }
  if (!ID_RE.test(id)) return send(res, 400, 'bad world id');
  const existing = await readWorld(id);
  if (!existing) return send(res, 404, 'no such world');
  if (req.method === 'GET') return json(res, 200, { ...existing, id });
  if (req.method === 'POST') { // save: the game sends its whole snapshot
    try {
      const parsed = JSON.parse(await readBody(req));
      if (typeof parsed !== 'object' || parsed === null || typeof parsed.seed !== 'number') return send(res, 400, 'bad world payload');
      await writeWorld(id, { ...parsed, name: existing.name, created: existing.created, updated: new Date().toISOString() });
      return json(res, 200, { ok: true });
    } catch (err) {
      return send(res, 400, String(err.message));
    }
  }
  if (req.method === 'DELETE') {
    await fs.rm(worldPath(id), { force: true });
    return json(res, 200, { ok: true });
  }
  send(res, 405, 'Method not allowed');
}

const isLoopback = (req) => ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(req.socket.remoteAddress);

// ---- single-instance lock ----------------------------------------------------------------
// Ask whatever is listening on `port` whether it is VoxelCraft.
function ping(port, timeoutMs = 800) {
  return new Promise((resolve) => {
    const req = http.get({ host: '127.0.0.1', port, path: '/api/ping', timeout: timeoutMs }, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => {
        try { resolve(JSON.parse(body)?.game === 'voxelcraft' ? JSON.parse(body) : null); } catch { resolve(null); }
      });
    });
    req.on('timeout', () => { req.destroy(); resolve(null); });
    req.on('error', () => resolve(null));
  });
}

async function readLock() {
  try { return JSON.parse(await fs.readFile(LOCK_FILE, 'utf8')); } catch { return null; }
}

// Returns the running instance's info if one is alive, otherwise clears any stale lock and returns null.
async function findRunningInstance() {
  const lock = await readLock();
  if (!lock) return null;
  const alive = await ping(lock.port);
  if (alive) return { ...lock, ...alive };
  await fs.rm(LOCK_FILE, { force: true }); // the old server crashed or was killed: stale lock
  return null;
}

async function acquireLock() {
  const info = JSON.stringify({ pid: process.pid, port: PORT, started: new Date().toISOString() });
  // 'wx' fails if the file exists, so two servers starting at the same instant cannot both win
  await fs.writeFile(LOCK_FILE, info, { flag: 'wx' });
}

function releaseLock() {
  try {
    // only remove the lock if it is ours
    const lock = JSON.parse(fsSync.readFileSync(LOCK_FILE, 'utf8'));
    if (lock.pid === process.pid) fsSync.rmSync(LOCK_FILE, { force: true });
  } catch { /* already gone */ }
}

// ---- http server -------------------------------------------------------------------------
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname === '/api/ping') return send(res, 200, JSON.stringify({ game: 'voxelcraft', pid: process.pid }), MIME['.json']);
  if (pathname === '/api/shutdown') {
    // POST only, from this machine only, and with a custom header (a web page can't send one cross-origin)
    if (req.method !== 'POST' || !isLoopback(req) || req.headers[STOP_HEADER] !== '1') return send(res, 403, 'Forbidden');
    send(res, 200, '{"ok":true}', MIME['.json']);
    console.log('\n  Stop requested - shutting down.');
    setTimeout(() => shutdown(0), 50);
    return;
  }
  if (pathname === '/api/worlds' || pathname.startsWith('/api/worlds/')) {
    return handleWorlds(req, res, pathname).catch((err) => send(res, 500, String(err.message)));
  }
  if (pathname.startsWith('/vendor/')) {
    return serveFile(res, THREE_BUILD, pathname.slice('/vendor/'.length));
  }
  return serveFile(res, PUBLIC, pathname === '/' ? 'index.html' : pathname.slice(1));
});

function shutdown(code = 0) {
  releaseLock();
  server.closeAllConnections?.();
  server.close(() => process.exit(code));
  setTimeout(() => process.exit(code), 500).unref(); // don't hang on a stuck connection
}

const running = await findRunningInstance();
if (running) {
  console.error(`\n  VoxelCraft is already running (pid ${running.pid}) at http://localhost:${running.port}`);
  console.error('  Only one instance can run at a time. Use "npm run stop" to stop it first.\n');
  process.exit(1);
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n  Port ${PORT} is already in use by another program.`);
    console.error('  If that is an old VoxelCraft, run "npm run stop"; otherwise set a different port, e.g. PORT=3001 npm start\n');
  } else {
    console.error(err);
  }
  process.exit(1);
});

server.listen(PORT, async () => {
  try {
    await prepareWorlds();
    await acquireLock();
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error('\n  Another VoxelCraft instance started at the same moment. Only one can run at a time.\n');
      server.close();
      process.exit(1);
    }
    throw err;
  }
  console.log(`\n  VoxelCraft is running -> http://localhost:${PORT}`);
  console.log('  Stop it from another terminal with: npm run stop\n');
});

for (const sig of ['SIGINT', 'SIGTERM', 'SIGHUP', 'SIGBREAK']) process.on(sig, () => shutdown(0));
process.on('exit', releaseLock);
