// The quest book: how goals and jobs are laid out on pages, which spread it opens at, and the keys and the phone button that open it.
import assert from 'node:assert/strict';
import { goalPages, jobPages, bookPages, spreadCount, openingSpread, sectionSpread, spreadOf, GOALS_PER_PAGE } from '../src/js/bookmath.js';
import { ACTIONS, Settings } from '../src/js/settings.js';
import { symbolRows, SYMBOLS } from '../src/js/symbols.js';
import { LAYOUT_BUTTONS, cleanLayout } from '../src/js/touchmath.js';
import { HUD_PANELS } from '../src/js/hudmath.js';
import { GOALS } from '../src/js/items.js';

let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };
const goals = Array.from({ length: 29 }, (_, i) => ({ text: 'Goal ' + (i + 1) }));
const none = goals.map(() => false);
const job = (tier = 'easy', have = 0, need = 5) => ({ key: 'k' + Math.random(), who: { name: 'Zed', village: 'Oakford', job: 'farmer' }, offer: { tier, text: 'Bring wheat', type: 'fetch' }, have, need, ready: have >= need });

t('goals fill pages a few at a time, in order, with a tick for each one done and the next one marked', () => {
  const done = goals.map((_, i) => i < 9);
  const pages = goalPages(goals, done);
  assert.equal(pages.length, Math.ceil(29 / GOALS_PER_PAGE));
  assert.deepEqual(pages.flatMap((p) => p.items.map((g) => g.text)), goals.map((g) => g.text), 'every goal appears once, in order');
  assert.equal(pages[0].from, 1); assert.equal(pages[1].from, GOALS_PER_PAGE + 1); assert.ok(pages.every((p) => p.total === 29));
  const marks = pages.flatMap((p) => p.items);
  assert.equal(marks.filter((g) => g.done).length, 9);
  assert.equal(marks.filter((g) => g.next).length, 1, 'exactly one is "next"');
  assert.equal(marks.find((g) => g.next).text, 'Goal 10', 'the first one not done');
  assert.equal(goalPages(goals, goals.map(() => true)).flatMap((p) => p.items).filter((g) => g.next).length, 0, 'nothing is next when all are done');
});

t('the jobs come after the goals; with no jobs the page says so; two to a page', () => {
  assert.deepEqual(jobPages([], 3), [{ kind: 'jobs', items: [], finished: 3 }]);
  assert.equal(jobPages([job(), job(), job()]).length, 2);
  assert.equal(jobPages([job(), job()]).length, 1);
  const pages = bookPages(goals, none, [job('hard', 2, 6)], 1);
  const kinds = pages.map((p) => p.kind);
  assert.deepEqual(kinds.slice(0, 5), ['goals', 'goals', 'goals', 'goals', 'goals']);
  assert.equal(kinds[5], 'jobs');
  assert.equal(pages.length % 2, 0, 'the book always has whole spreads (a blank page fills the last one)');
  assert.equal(bookPages(goals.slice(0, 7), none.slice(0, 7), []).length, 2, 'one page of goals + one of jobs');
  assert.equal(bookPages(goals.slice(0, 14), none.slice(0, 14), [job()]).at(-1).kind, 'blank', 'three pages get a blank fourth');
});

t('it opens at the spread with the next goal to do (the last goals spread when all are done), and the bookmarks go to each section', () => {
  const fresh = bookPages(goals, none, []);
  assert.equal(openingSpread(fresh), 0);
  const midway = bookPages(goals, goals.map((_, i) => i < 16), []);
  assert.equal(spreadOf(midway.findIndex((p) => p.items?.some((g) => g.next))), openingSpread(midway));
  assert.ok(openingSpread(midway) >= 1);
  const all = bookPages(goals, goals.map(() => true), [job()]);
  assert.equal(openingSpread(all), spreadOf(4), 'the last page of goals');
  assert.equal(sectionSpread(all, 'goals'), 0);
  assert.equal(sectionSpread(all, 'jobs'), spreadOf(5));
  assert.equal(spreadCount(all), 3);
  assert.equal(spreadCount([]), 1);
});

t('the real goals fit the book', () => {
  const pages = goalPages(GOALS, GOALS.map(() => false));
  assert.equal(pages.flatMap((p) => p.items).length, GOALS.length);
  assert.ok(GOALS.every((g) => g.text.length < 60), 'short enough to fit a line or two');
});

t('the quest book has a key (L) and so does the HUD window (H); both can be moved, neither clashes with another action', () => {
  const quests = ACTIONS.find((a) => a.id === 'quests'), hud = ACTIONS.find((a) => a.id === 'hudMenu');
  assert.equal(quests.key, 'KeyL'); assert.equal(hud.key, 'KeyH');
  const keys = ACTIONS.map((a) => a.key);
  assert.equal(new Set(keys).size, keys.length, 'no two actions share a default key');
  assert.notEqual(quests.key, ACTIONS.find((a) => a.id === 'drop').key, 'Q still drops an item');
  globalThis.localStorage = { getItem: () => JSON.stringify({ values: {}, binds: { quests: 'KeyJ' } }), setItem() {} };
  const s = new Settings();
  assert.equal(s.key('quests'), 'KeyJ'); assert.equal(s.actionFor('KeyJ'), 'quests'); assert.equal(s.key('hudMenu'), 'KeyH');
  delete globalThis.localStorage;
  const fresh = new Settings();
  assert.equal(fresh.actionFor('KeyL'), 'quests'); assert.equal(fresh.actionFor('KeyH'), 'hudMenu');
});

t('on a phone there is a book button: a symbol that can be drawn, and a button the player can move', () => {
  assert.ok(SYMBOLS.includes('book'));
  const rows = symbolRows('book');
  assert.equal(rows.length, 16);
  const lit = rows.join('').split('#').length - 1;
  assert.ok(lit > 40 && lit < 160, 'a real picture: ' + lit + ' pixels');
  assert.ok(LAYOUT_BUTTONS.includes('book'));
  assert.deepEqual(cleanLayout({ book: { x: 0.2, y: 0.1 } }), { book: { x: 0.2, y: 0.1 } });
});

t('the goals are not a HUD panel any more: only the minimap and the clock panel can be moved or folded', () => {
  assert.deepEqual(HUD_PANELS, ['minimap', 'info']);
});

console.log('book: ' + n + ' checks passed');
