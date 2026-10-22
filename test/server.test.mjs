// Single-instance lock and `npm run stop`, tested against throw-away servers on a spare port.
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'voxelcraft-test-'));
const PORT = 3190 + Math.floor(Math.random() * 40);
const env = { ...process.env, PORT: String(PORT), VOXELCRAFT_LOCK: path.join(tmp, 'lock'), VOXELCRAFT_SAVE: path.join(tmp, 'world.json'), VOXELCRAFT_WORLDS: path.join(tmp, 'worlds') };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const get = (route, method = 'GET', headers = {}) => new Promise((resolve) => {
  const req = http.request({ host: '127.0.0.1', port: PORT, path: route, method, headers, timeout: 1500 }, (res) => {
    let body = '';
    res.on('data', (c) => (body += c));
    res.on('end', () => resolve({ status: res.statusCode, body }));
  });
  req.on('error', () => resolve(null));
  req.on('timeout', () => { req.destroy(); resolve(null); });
  req.end();
});
async function waitFor(fn, ms = 5000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) { if (await fn()) return true; await sleep(100); }
  return false;
}
const start = () => {
  const child = spawn(process.execPath, ['scripts/server.js'], { cwd: ROOT, env, stdio: ['ignore', 'pipe', 'pipe'] });
  child.out = '';
  child.stdout.on('data', (d) => (child.out += d));
  child.stderr.on('data', (d) => (child.out += d));
  child.exited = new Promise((r) => child.on('exit', (code) => r(code)));
  return child;
};
const stopCmd = () => spawnSync(process.execPath, ['scripts/stop.js'], { cwd: ROOT, env, encoding: 'utf8' });

try {
  console.log("- first instance starts and writes the lock");
  const a = start();
  assert.ok(await waitFor(async () => (await get('/__voxelcraft/ping'))?.status === 200), 'server came up');
  assert.ok(fs.existsSync(env.VOXELCRAFT_LOCK), 'lock file written');
  assert.equal(JSON.parse(fs.readFileSync(env.VOXELCRAFT_LOCK, 'utf8')).pid, a.pid);

  console.log("- a second instance refuses to start, even on a different port, and says why");
  const b = spawn(process.execPath, ['scripts/server.js'], { cwd: ROOT, env: { ...env, PORT: String(PORT + 100) }, encoding: 'utf8' });
  let bOut = '';
  b.stdout.on('data', (d) => (bOut += d));
  b.stderr.on('data', (d) => (bOut += d));
  const bCode = await new Promise((r) => b.on('exit', r));
  assert.equal(bCode, 1, 'second instance exits with an error');
  assert.match(bOut, /already running/);
  assert.match(bOut, /npm run stop/);
  assert.equal((await get('/__voxelcraft/ping')).status, 200, 'the first instance is unaffected');

  console.log("- the stop endpoint cannot be triggered by a plain web request");
  assert.equal((await get('/__voxelcraft/shutdown')).status, 403, 'GET refused');
  assert.equal((await get('/__voxelcraft/shutdown', 'POST')).status, 403, 'POST without the stop header refused');
  assert.equal((await get('/__voxelcraft/ping')).status, 200, 'still running');

  console.log("- npm run stop (scripts/stop.js) shuts it down from another process");
  const r = stopCmd();
  assert.match(r.stdout, /stopped/);
  assert.ok(await waitFor(async () => (await get('/__voxelcraft/ping')) === null), 'server is gone');
  assert.equal(await Promise.race([a.exited, sleep(3000).then(() => 'timeout')]), 0, 'process exited cleanly');
  assert.ok(!fs.existsSync(env.VOXELCRAFT_LOCK), 'lock removed on shutdown');
  assert.match(stopCmd().stdout, /not running/, 'stopping when nothing runs is harmless');

  console.log("- a stale lock (crashed server) does not block a new start");
  fs.writeFileSync(env.VOXELCRAFT_LOCK, JSON.stringify({ pid: 999999, port: PORT + 200 }));
  const c = start();
  assert.ok(await waitFor(async () => (await get('/__voxelcraft/ping'))?.status === 200), 'starts despite a stale lock');
  assert.equal(JSON.parse(fs.readFileSync(env.VOXELCRAFT_LOCK, 'utf8')).pid, c.pid, 'lock replaced');
  stopCmd();
  await c.exited;

  console.log("- a port held by something else gives a friendly message");
  const blocker = http.createServer((q, s) => s.end('x'));
  await new Promise((r) => blocker.listen(PORT, r)); // all interfaces, like a typical dev server
  const d = start();
  const dCode = await Promise.race([d.exited, sleep(4000).then(() => { d.kill(); return 'timeout'; })]);
  assert.equal(dCode, 1);
  assert.match(d.out, /already in use/);
  await new Promise((r) => blocker.close(r));

  console.log('all server tests passed');
} finally {
  stopCmd();
  fs.rmSync(tmp, { recursive: true, force: true });
}
