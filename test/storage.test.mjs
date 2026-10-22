// Browser-side world storage (the installed / GitHub Pages app): same behaviour as the dev server's worlds API.
import assert from 'node:assert/strict';
import { createLocalStorage, memoryKv, cleanName, validId } from '../src/js/storage.js';

let n = 0;
const t = async (name, fn) => { await fn(); n++; };
let clock = 0;
const make = (opts = {}) => createLocalStorage(memoryKv(), { now: () => new Date(Date.UTC(2026, 0, 1, 0, 0, ++clock)).toISOString(), ...opts });

await t('starts empty and reports itself as local, persistent storage', async () => {
  const s = make();
  assert.deepEqual(await s.list(), []);
  assert.equal(s.kind, 'local');
  assert.equal(s.persistent, true);
  assert.equal(make({ persistent: false }).persistent, false);
});

await t('create cleans the name, picks a valid id and a seed, and shows up in the list', async () => {
  const s = make();
  const w = await s.create({ name: '   My   Big\n World  ', mode: 'creative' });
  assert.equal(w.name, 'My Big World');
  assert.equal(w.mode, 'creative');
  assert.ok(validId(w.id), w.id);
  assert.ok(Number.isInteger(w.seed));
  assert.deepEqual((await s.list()).map((x) => x.id), [w.id]);
  assert.equal(cleanName(''), 'New World');
  assert.equal(cleanName('x'.repeat(80)).length, 32);
  assert.equal((await s.create({ name: 'q', mode: 'banana' })).mode, 'survival', 'unknown modes become survival');
  assert.equal((await s.create({ name: 'seeded', seed: 1234 })).seed, 1234);
});

await t('worlds with the same name get different ids', async () => {
  const s = make();
  const ids = new Set();
  for (let i = 0; i < 25; i++) ids.add((await s.create({ name: 'Same' })).id);
  assert.equal(ids.size, 25);
});

await t('save keeps the name and creation date, updates the time, and load returns what was saved', async () => {
  const s = make();
  const w = await s.create({ name: 'Keep', seed: 7 });
  await s.save(w.id, JSON.stringify({ seed: 7, mode: 'survival', name: 'HACKED', created: 'x', day: 3, edits: [[1, 2, 3, 4]] }));
  const back = await s.load(w.id);
  assert.equal(back.name, 'Keep');
  assert.equal(back.created, w.created);
  assert.ok(back.updated > w.updated);
  assert.deepEqual(back.edits, [[1, 2, 3, 4]]);
  assert.equal(back.id, w.id);
  assert.equal((await s.list())[0].day, 3);
});

await t('bad ids and bad payloads are refused', async () => {
  const s = make();
  const w = await s.create({ name: 'Safe' });
  await assert.rejects(() => s.load('../etc/passwd'), /no such world/);
  await assert.rejects(() => s.load('missing-0000'), /no such world/);
  await assert.rejects(() => s.save('missing-0000', '{"seed":1}'), /no such world/);
  await assert.rejects(() => s.save(w.id, '{"nope":1}'), /bad world payload/);
  await assert.rejects(() => s.save(w.id, 'not json'));
  assert.equal((await s.load(w.id)).name, 'Safe', 'a refused save changes nothing');
});

await t('remove deletes the world, and removing twice is harmless', async () => {
  const s = make();
  const a = await s.create({ name: 'A' }), b = await s.create({ name: 'B' });
  await s.remove(a.id);
  await s.remove(a.id);
  await s.remove('../bad');
  assert.deepEqual((await s.list()).map((x) => x.id), [b.id]);
});

await t('list is newest first and a second storage over the same store sees the same worlds', async () => {
  const kv = memoryKv();
  const s1 = createLocalStorage(kv), s2 = createLocalStorage(kv);
  const a = await s1.create({ name: 'Old' });
  await new Promise((r) => setTimeout(r, 5));
  const b = await s1.create({ name: 'New' });
  assert.deepEqual((await s2.list()).map((x) => x.id), [b.id, a.id]);
  const c = await s2.create({ name: 'Old' });
  assert.notEqual(c.id, a.id);
});

await t('stored worlds are copies: changing what load returned does not change the store', async () => {
  const s = make();
  const w = await s.create({ name: 'Copy' });
  const one = await s.load(w.id);
  one.name = 'changed';
  assert.equal((await s.load(w.id)).name, 'Copy');
});

console.log(`storage: ${n} checks passed`);
