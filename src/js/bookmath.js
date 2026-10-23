// The quest book's pages (no DOM, so it can be tested in Node). The book is a spread of two pages; the goals come first, a few to a page, then
// the jobs villagers have given you. This works out what goes on which page and which spread to open at.

export const GOALS_PER_PAGE = 7;
export const JOBS_PER_PAGE = 2;

// goals: [{ text }], done: [bool]. Returns one page per GOALS_PER_PAGE goals: { kind: 'goals', items: [{ text, done, next }], from, total }
// (`next` marks the first goal still to do: what to work on now)
export function goalPages(goals, done, perPage = GOALS_PER_PAGE) {
  const nextIndex = done.findIndex((d) => !d);
  const pages = [];
  for (let i = 0; i < goals.length; i += perPage) {
    pages.push({ kind: 'goals', from: i + 1, total: goals.length, items: goals.slice(i, i + perPage).map((g, k) => ({ text: g.text, done: !!done[i + k], next: i + k === nextIndex })) });
  }
  return pages;
}

// jobs: what Quests.activeList() gives. One page per JOBS_PER_PAGE, or a single page saying there are none.
export function jobPages(jobs, finished = 0, perPage = JOBS_PER_PAGE) {
  if (!jobs.length) return [{ kind: 'jobs', items: [], finished }];
  const pages = [];
  for (let i = 0; i < jobs.length; i += perPage) pages.push({ kind: 'jobs', items: jobs.slice(i, i + perPage), finished });
  return pages;
}

// All the pages in order. The book always has an even number so every spread is full (the last page of an odd book is left blank).
export function bookPages(goals, done, jobs, finished = 0) {
  const pages = [...goalPages(goals, done), ...jobPages(jobs, finished)];
  if (pages.length % 2) pages.push({ kind: 'blank' });
  return pages;
}

export const spreadCount = (pages) => Math.max(1, Math.ceil(pages.length / 2));
// The spread that shows page number `index`
export const spreadOf = (index) => Math.floor(index / 2);
// The spread to open the book at: the one with the first goal still to do (the last one with goals if they are all done)
export function openingSpread(pages) {
  const at = pages.findIndex((p) => p.kind === 'goals' && p.items.some((g) => g.next));
  if (at >= 0) return spreadOf(at);
  const lastGoals = pages.map((p) => p.kind).lastIndexOf('goals');
  return spreadOf(Math.max(0, lastGoals));
}
// The first spread of a section (the bookmarks): 'goals' or 'jobs'
export const sectionSpread = (pages, kind) => spreadOf(Math.max(0, pages.findIndex((p) => p.kind === kind)));
