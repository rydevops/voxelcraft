// The quest book: a two-page spread you open with a key (or the book button on a phone) to see what there is to do. The goals come first, a few
// to a page, with a tick for each one you have done and the next one marked; then the jobs villagers have given you, with how far along each is.
// The paging is in bookmath.js; the rules for jobs are in quests.js. This only draws.
import { bookPages, spreadCount, openingSpread, sectionSpread } from './bookmath.js';
import { REG } from './registry.js';

const $ = (id) => document.getElementById(id);
const Q = REG.quests;

const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

// hooks: { goals: [{ text }], jobs(): active jobs (Quests.activeList), finished(): how many jobs are done, onClose() }
export function createBook({ goals, jobs, finished, onClose }) {
  const root = $('book');
  let done = goals.map(() => false);
  let pages = [], spread = 0;

  function pageEl(p, number) {
    const page = el('div', 'bk-page ' + p.kind);
    if (p.kind === 'goals') {
      const last = p.from + p.items.length - 1;
      page.append(el('h3', '', 'Goals'), el('p', 'bk-sub', `${p.from}–${last} of ${p.total}`));
      const ul = el('ul', 'bk-goals');
      for (const g of p.items) {
        const li = el('li', (g.done ? 'done' : g.next ? 'todo next' : 'todo'));
        li.append(el('i', 'bk-box'), el('span', '', g.text));
        if (g.next) li.append(el('em', '', 'next'));
        ul.appendChild(li);
      }
      page.appendChild(ul);
    } else if (p.kind === 'jobs') {
      page.append(el('h3', '', 'Jobs'));
      if (!p.items.length) {
        page.append(el('p', 'bk-empty', 'You have no jobs yet.'), el('p', 'bk-sub', 'Right-click a villager to hear what they need. Accept a job and it is written here.'));
      } else {
        for (const j of p.items) {
          const card = el('div', 'bk-job' + (j.ready ? ' ready' : ''));
          const head = el('div', 'bk-job-head');
          const tier = el('span', 'bk-tier ' + j.offer.tier, Q.tiers[j.offer.tier].label);
          head.append(tier, el('b', '', j.who ? `${j.who.name} the ${j.who.job}` : 'A villager'));
          if (j.who?.village) head.append(el('span', 'bk-sub', 'of ' + j.who.village));
          card.append(head, el('p', 'bk-job-text', j.offer.text));
          const bar = el('div', 'bk-bar');
          const fill = el('i');
          fill.style.width = Math.min(100, (j.have / j.need) * 100) + '%';
          bar.appendChild(fill);
          card.append(bar, el('p', 'bk-job-progress', j.ready ? `${j.have} / ${j.need} — done! Go back to ${j.who?.name ?? 'them'} for your reward.` : `${j.have} / ${j.need}`));
          card.append(el('p', 'bk-sub', `Reward: ${Q.tiers[j.offer.tier].reward}`));
          page.appendChild(card);
        }
      }
      if (p.finished) page.append(el('p', 'bk-sub bk-finished', `Jobs finished: ${p.finished}`));
    } else page.classList.add('blank');
    if (p.kind !== 'blank') page.appendChild(el('span', 'bk-num', String(number)));
    return page;
  }

  function render() {
    pages = bookPages(goals, done, jobs(), finished());
    spread = Math.max(0, Math.min(spreadCount(pages) - 1, spread));
    const l = $('book-left'), r = $('book-right');
    l.replaceChildren(pageEl(pages[spread * 2], spread * 2 + 1));
    r.replaceChildren(pageEl(pages[spread * 2 + 1] ?? { kind: 'blank' }, spread * 2 + 2));
    $('book-prev').disabled = spread <= 0;
    $('book-next').disabled = spread >= spreadCount(pages) - 1;
    $('book-count').textContent = `${done.filter(Boolean).length} / ${goals.length} goals`;
    for (const b of root.querySelectorAll('[data-go]')) b.classList.toggle('on', pages[spread * 2]?.kind === b.dataset.go || pages[spread * 2 + 1]?.kind === b.dataset.go);
  }

  function turn(by) {
    const next = Math.max(0, Math.min(spreadCount(pages) - 1, spread + by));
    if (next === spread) return;
    spread = next;
    const sp = root.querySelector('.bk-spread');
    sp.classList.remove('turning'); void sp.offsetWidth; sp.classList.add('turning'); // (a quick page-turn)
    render();
  }

  const key = (e) => {
    if (root.hidden) return;
    if (e.code === 'ArrowRight' || e.code === 'PageDown') { turn(1); e.preventDefault(); }
    else if (e.code === 'ArrowLeft' || e.code === 'PageUp') { turn(-1); e.preventDefault(); }
  };
  window.addEventListener('keydown', key);
  $('book-prev').addEventListener('click', () => turn(-1));
  $('book-next').addEventListener('click', () => turn(1));
  $('book-close').addEventListener('click', () => onClose?.());
  root.addEventListener('mousedown', (e) => { if (e.target === root) onClose?.(); });
  for (const b of root.querySelectorAll('[data-go]')) b.addEventListener('click', () => { spread = sectionSpread(pages, b.dataset.go); render(); });

  return {
    get open() { return !root.hidden; },
    // goals' new state (called whenever one is done)
    setGoals(d) { done = d.slice(); if (!root.hidden) render(); },
    // open at the page with the next goal to do
    show() { root.hidden = false; pages = bookPages(goals, done, jobs(), finished()); spread = openingSpread(pages); render(); },
    hide() { root.hidden = true; },
    refresh() { if (!root.hidden) render(); },
    turn,
  };
}
