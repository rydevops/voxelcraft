// Multi-world save API (create / list / load / save / delete) and import of the old single-world save.
// Runs a throw-away server on a spare port with its own folders, so it never touches real worlds.
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'voxelcraft-worlds-'));
const PORT = 3240 + Math.floor(Math.random() * 40);
const env = { ...process.env, PORT: String(PORT), VOXELCRAFT_LOCK: path.join(tmp, 'lock'), VOXELCRAFT_SAVE: path.join(tmp, 'world.json'), VOXELCRAFT_WORLDS: path.join(tmp, 'worlds') };
const URL = `http://127.0.0.1:${PORT}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const api = async (route, method = 'GET', body) => {
  const r = await fetch(URL + route, { method, headers: body === undefined ? {} : { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
  const text = await r.text();
  let data = null;
  try { data = JSON.parse(text); } catch { /* plain text */ }
  return { status: r.status, data, text };
};
async function up() {
  const child = spawn(process.execPath, ['server.js'], { cwd: ROOT, env, stdio: ['ignore', 'pipe', 'pipe'] });
  child.out = '';
  child.stdout.on('data', (d) => (child.out += d));
  child.stderr.on('data', (d) => (child.out += d));
  child.exited = new Promise((r) => child.on('exit', r));
  for (let i = 0; i < 60; i++) { try { if ((await fetch(URL + '/api/ping')).ok) return child; } catch { /* not yet */ } await sleep(100); }
  throw new Error('server did not start: ' + child.out);
}
const down = async (child) => { spawnSync(process.execPath, ['scripts/stop.js'], { cwd: ROOT, env }); await child.exited; };

try {
  console.log('- the old single world.json is imported once (and left in place)');
  const legacy = JSON.stringify({ seed: 4242, mode: 'creative', edits: { '0,0': 'x' }, day: 3 });
  fs.writeFileSync(env.VOXELCRAFT_SAVE, legacy);
  let s = await up();
  assert.match(s.out, /Imported your existing world/);
  let list = (await api('/api/worlds')).data;
  assert.equal(list.length, 1);
  assert.equal(list[0].name, 'My World');
  assert.equal(list[0].seed, 4242);
  assert.equal(list[0].mode, 'creative');
  assert.equal(list[0].day, 3);
  assert.equal(fs.readFileSync(env.VOXELCRAFT_SAVE, 'utf8'), legacy, 'original save untouched');
  const legacyId = list[0].id;

  console.log('- creating worlds');
  const made = await api('/api/worlds', 'POST', { name: '  Cool   Place  ', mode: 'creative', seed: 99 });
  assert.equal(made.status, 201);
  assert.equal(made.data.name, 'Cool Place', 'name is tidied');
  assert.equal(made.data.seed, 99);
  assert.equal(made.data.mode, 'creative');
  assert.match(made.data.id, /^cool-place-[a-z0-9]{4}$/);
  const dflt = (await api('/api/worlds', 'POST', {})).data;
  assert.equal(dflt.name, 'New World');
  assert.equal(dflt.mode, 'survival');
  assert.ok(Number.isInteger(dflt.seed), 'a random seed is picked');
  assert.equal((await api('/api/worlds', 'POST', { name: 'Cool Place' })).data.name, 'Cool Place', 'same name twice is fine');
  assert.equal((await api('/api/worlds')).data.length, 4);

  console.log('- load and save');
  const loaded = await api('/api/worlds/' + made.data.id);
  assert.equal(loaded.data.seed, 99);
  assert.equal(loaded.data.edits, undefined, 'a new world has no edits yet');
  const snap = { seed: 99, edits: { '1,1': 'abc' }, mode: 'creative', day: 7, name: 'hacked', created: 'x', player: { x: 1, y: 2, z: 3 } };
  assert.equal((await api('/api/worlds/' + made.data.id, 'POST', snap)).status, 200);
  const again = (await api('/api/worlds/' + made.data.id)).data;
  assert.deepEqual(again.edits, { '1,1': 'abc' });
  assert.equal(again.name, 'Cool Place', 'saving cannot rename or backdate a world');
  assert.notEqual(again.created, 'x');
  assert.equal((await api('/api/worlds')).data.find((w) => w.id === made.data.id).day, 7, 'the list shows progress');
  assert.equal((await api('/api/worlds/' + made.data.id, 'POST', { nope: 1 })).status, 400, 'garbage is rejected');
  assert.equal((await api('/api/worlds/' + made.data.id)).data.seed, 99, 'and does not damage the save');

  console.log('- most recently played first');
  assert.equal((await api('/api/worlds')).data[0].id, made.data.id);

  console.log('- unknown / unsafe ids');
  assert.equal((await api('/api/worlds/nope-1234')).status, 404);
  assert.equal((await api('/api/worlds/nope-1234', 'POST', { seed: 1 })).status, 404, 'saving cannot resurrect a deleted world');
  assert.equal((await api('/api/worlds/..%2F..%2Fserver')).status, 400, 'no path tricks');
  assert.equal((await api('/api/worlds/A_B')).status, 400);

  console.log('- delete');
  assert.equal((await api('/api/worlds/' + made.data.id, 'DELETE')).status, 200);
  assert.equal((await api('/api/worlds/' + made.data.id)).status, 404);
  assert.equal((await api('/api/worlds')).data.length, 3);

  console.log('- deleting everything does not bring the old world back after a restart');
  for (const w of (await api('/api/worlds')).data) await api('/api/worlds/' + w.id, 'DELETE');
  await down(s);
  s = await up();
  assert.deepEqual((await api('/api/worlds')).data, []);
  assert.ok(legacyId);
  await down(s);

  console.log('- a fresh install with no old save starts with no worlds');
  fs.rmSync(env.VOXELCRAFT_WORLDS, { recursive: true });
  fs.rmSync(env.VOXELCRAFT_SAVE);
  s = await up();
  assert.deepEqual((await api('/api/worlds')).data, []);
  await down(s);
} finally {
  spawnSync(process.execPath, ['scripts/stop.js'], { cwd: ROOT, env });
  fs.rmSync(tmp, { recursive: true, force: true });
}
console.log('all worlds API tests passed');
