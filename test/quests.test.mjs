// Quests: a villager offers one job at a time (fetch or slay), you accept or decline, harder jobs pay from better loot, and it is all the same
// every time for the same world and villager.
import assert from 'node:assert/strict';
import { Quests, makeOffer, describe, rewardNames } from '../src/js/quests.js';
import { Inventory } from '../src/js/inventory.js';
import { I } from '../src/js/items.js';
import { itemName, rollLoot } from '../src/js/items.js';
import { REG } from '../src/js/registry.js';
import { mulberry32 } from '../src/js/noise.js';
import { JOBS } from '../src/js/villagerai.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const Q = REG.quests;

t('every job has easy, medium and hard quests, and every one of them asks for something real', () => {
  assert.deepEqual(Q.tierOrder, ['easy', 'medium', 'hard']);
  for (const job of JOBS) {
    assert.ok(Q.jobs[job], 'quests for ' + job);
    for (const tier of Q.tierOrder) {
      assert.ok(Q.jobs[job][tier].length >= 2, `${job} ${tier} has a choice`);
      for (const q of Q.jobs[job][tier]) assert.ok(q.type === 'fetch' ? q.item > 0 : !!REG.mobs.species[q.mob]);
    }
  }
});

t('the offer is the same every time for the same world, villager and round; another round or villager gives another', () => {
  const a = makeOffer(7, 'Oakford:3', 'farmer', 0), b = makeOffer(7, 'Oakford:3', 'farmer', 0);
  assert.deepEqual(a, b);
  const seen = new Set();
  for (let round = 0; round < 30; round++) seen.add(JSON.stringify(makeOffer(7, 'Oakford:3', 'farmer', round)));
  assert.ok(seen.size >= 6, 'plenty of different jobs over time: ' + seen.size);
  const tiers = new Set();
  for (let i = 0; i < 80; i++) tiers.add(makeOffer(1, 'v:' + i, 'mason', i % 5).tier);
  assert.equal(tiers.size, 3, 'all three difficulties come up');
  for (const o of [a, makeOffer(9, 'x:1', 'blacksmith', 4), makeOffer(9, 'x:2', 'cleric', 2)]) {
    assert.ok(o.count >= 1 && o.text.length > 10 && !o.text.includes('{n}'), 'a readable request: ' + o.text);
    assert.ok(describe(o).length > 3);
  }
});

t('easy jobs are likelier than hard ones, and harder ones become likelier as you finish jobs', () => {
  const share = (completed) => { const c = { easy: 0, medium: 0, hard: 0 }; for (let i = 0; i < 3000; i++) c[makeOffer(3, 'v:' + i, 'farmer', i % 7, completed).tier]++; return c; };
  const fresh = share(0), veteran = share(12);
  assert.ok(fresh.easy > fresh.medium && fresh.medium > fresh.hard, JSON.stringify(fresh));
  assert.ok(veteran.hard > fresh.hard * 1.6, 'a veteran gets more hard jobs: ' + veteran.hard + ' vs ' + fresh.hard);
  assert.ok(veteran.easy > 0, 'but easy ones remain');
});

t('the harder the job, the better the loot pool: more iron, and armor and weapons only on the hard one', () => {
  const avg = (tier, item) => { let total = 0; const r = mulberry32(5); for (let i = 0; i < 2000; i++) total += rollLoot(Q.tiers[tier].loot, r).filter((x) => x.id === item).reduce((s, x) => s + x.n, 0); return total / 2000; };
  assert.ok(avg('easy', I.IRON_INGOT) === 0 && avg('medium', I.IRON_INGOT) > 0.5 && avg('hard', I.IRON_INGOT) > avg('medium', I.IRON_INGOT) * 1.5, 'iron: ' + ['easy', 'medium', 'hard'].map((k) => avg(k, I.IRON_INGOT).toFixed(2)).join(' < '));
  const has = (tier, item) => Q.tiers[tier].loot && REG.loot[Q.tiers[tier].loot].some((e) => e.id === item);
  for (const gear of [I.IRON_CHESTPLATE, I.IRON_SWORD, I.IRON_HELMET, I.CHEST_UPGRADE_IRON]) assert.ok(has('hard', gear) && !has('easy', gear) && !has('medium', gear), 'only the hard pool: ' + itemName(gear));
  assert.ok(has('easy', I.BREAD) && has('easy', I.COAL));
  assert.ok(Q.tiers.easy.xp < Q.tiers.medium.xp && Q.tiers.medium.xp < Q.tiers.hard.xp, 'and more experience');
  for (const tier of Q.tierOrder) assert.ok(rewardNames(tier).length >= 5, 'a description of the reward for ' + tier);
});

t('accept, decline and give up: declining brings a different job next time, accepting makes it yours', () => {
  const q = new Quests(11);
  const first = q.of('V:0', 'farmer').offer;
  assert.equal(q.of('V:0', 'farmer').status, 'offered');
  q.decline('V:0', 'farmer');
  const second = q.of('V:0', 'farmer').offer;
  assert.notDeepEqual(second, first, 'they come up with something else');
  q.accept('V:0', 'farmer');
  assert.equal(q.of('V:0', 'farmer').status, 'active');
  assert.equal(q.activeCount, 1);
  const kept = q.of('V:0', 'farmer').offer;
  q.decline('V:0', 'farmer'); // (cannot decline what you accepted)
  assert.deepEqual(q.of('V:0', 'farmer').offer, kept);
  q.abandon('V:0', 'farmer');
  assert.equal(q.of('V:0', 'farmer').status, 'offered');
  assert.equal(q.activeCount, 0);
});

t('a fetch job: have enough and hand it in and the items are taken, the loot and experience given, and a new job comes next', () => {
  const q = new Quests(21);
  const inv = new Inventory();
  // find a fetch quest
  let key = null;
  for (let i = 0; i < 60 && !key; i++) if (q.of('F:' + i, 'mason').offer.type === 'fetch') key = 'F:' + i;
  const s = q.accept(key, 'mason'), o = s.offer;
  assert.equal(q.progress(key, 'mason', inv).ready, false);
  assert.equal(q.complete(key, 'mason', inv), null, 'not yet');
  inv.add(o.item, o.count - 1);
  assert.equal(q.progress(key, 'mason', inv).have, o.count - 1);
  assert.equal(q.complete(key, 'mason', inv), null, 'one short');
  inv.add(o.item, 5 + o.count);
  const done = q.complete(key, 'mason', inv, mulberry32(3));
  assert.ok(done && done.loot.length >= 1 && done.xp === Q.tiers[o.tier].xp && done.tier === o.tier);
  assert.equal(inv.count(o.item), o.count + 4, 'exactly what was asked was taken (2n + 4 held, n taken)');
  assert.equal(q.of(key, 'mason').status, 'offered');
  assert.notDeepEqual(q.of(key, 'mason').offer, o, 'a new job');
  assert.equal(q.completed, 1);
});

t('a slay job counts only what you defeat after accepting, and only the right monster', () => {
  const q = new Quests(31);
  let key = null;
  for (let i = 0; i < 80 && !key; i++) if (q.of('S:' + i, 'cleric').offer.type === 'slay') key = 'S:' + i;
  assert.ok(key, 'a slay job exists');
  const o = q.of(key, 'cleric').offer;
  q.recordKill(o.mob);
  q.accept(key, 'cleric');
  assert.equal(q.progress(key, 'cleric', new Inventory()).have, 0, 'kills before accepting do not count');
  const other = o.mob === 'zombie' ? 'spider' : 'zombie';
  q.recordKill(other);
  assert.equal(q.progress(key, 'cleric', new Inventory()).have, 0, 'the wrong monster does not count');
  for (let i = 0; i < o.count; i++) q.recordKill(o.mob);
  const p = q.progress(key, 'cleric', new Inventory());
  assert.ok(p.ready && p.have === o.count);
  const done = q.complete(key, 'cleric', new Inventory(), mulberry32(8));
  assert.ok(done && done.loot.length >= 1);
});

t('the quest book can list the jobs you have taken, with whose they are and how far along', () => {
  const q = new Quests(51), inv = new Inventory();
  let key = null;
  for (let i = 0; i < 60 && !key; i++) if (q.of('B:' + i, 'mason').offer.type === 'fetch') key = 'B:' + i;
  assert.deepEqual(q.activeList(inv), [], 'nothing taken yet');
  q.accept(key, 'mason', { name: 'Rowan', village: 'Oakford' });
  q.accept('B:other', 'cleric'); // (accepted without saying who: an older save)
  const list = q.activeList(inv);
  assert.equal(list.length, 2);
  const mine = list.find((j) => j.key === key);
  assert.deepEqual(mine.who, { name: 'Rowan', village: 'Oakford', job: 'mason' });
  assert.equal(mine.have, 0); assert.equal(mine.ready, false); assert.equal(mine.need, mine.offer.count);
  assert.equal(list.find((j) => j.key === 'B:other').who, null);
  inv.add(mine.offer.item, mine.offer.count);
  assert.equal(q.activeList(inv).find((j) => j.key === key).ready, true, 'ready when you carry it');
  q.complete(key, 'mason', inv);
  assert.equal(q.activeList(inv).some((j) => j.key === key), false, 'a finished job leaves the book');
});

t('quests are saved with the world', () => {
  const q = new Quests(41);
  q.accept('A:1', 'blacksmith'); q.of('A:2', 'librarian'); q.recordKill('zombie');
  const back = new Quests(41);
  back.load(JSON.parse(JSON.stringify(q.serialize())));
  assert.deepEqual(back.of('A:1', 'blacksmith'), q.of('A:1', 'blacksmith'));
  assert.equal(back.activeCount, q.activeCount);
});

console.log('quests: ' + n + ' checks passed');
