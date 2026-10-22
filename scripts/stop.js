// `npm run stop`: ask the running VoxelCraft server to shut down (from any terminal).
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCK_FILE = process.env.VOXELCRAFT_LOCK || path.join(ROOT, '.voxelcraft.lock');

const request = (port, method, route, headers = {}) =>
  new Promise((resolve) => {
    const req = http.request({ host: '127.0.0.1', port, path: route, method, headers, timeout: 1500 }, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('timeout', () => { req.destroy(); resolve(null); });
    req.on('error', () => resolve(null));
    req.end();
  });

const alive = async (port) => {
  const r = await request(port, 'GET', '/__voxelcraft/ping');
  try { return JSON.parse(r?.body)?.game === 'voxelcraft'; } catch { return false; }
};

let lock = null;
try { lock = JSON.parse(await fs.readFile(LOCK_FILE, 'utf8')); } catch { /* no lock file */ }

if (!lock) {
  console.log('VoxelCraft is not running.');
  process.exit(0);
}
if (!(await alive(lock.port))) {
  await fs.rm(LOCK_FILE, { force: true });
  console.log('VoxelCraft was not running (removed a stale lock file).');
  process.exit(0);
}

await request(lock.port, 'POST', '/__voxelcraft/shutdown', { 'x-voxelcraft-stop': '1' });
for (let i = 0; i < 30; i++) { // wait up to ~3s for it to go away
  await new Promise((r) => setTimeout(r, 100));
  if (!(await alive(lock.port))) {
    await fs.rm(LOCK_FILE, { force: true });
    console.log(`VoxelCraft stopped (pid ${lock.pid}).`);
    process.exit(0);
  }
}
// It ignored the polite request: end the process directly.
try { process.kill(lock.pid); } catch { /* already gone */ }
await fs.rm(LOCK_FILE, { force: true });
console.log(`VoxelCraft did not respond; ended process ${lock.pid}.`);
