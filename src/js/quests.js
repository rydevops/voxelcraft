// Quests: every villager can ask for one thing at a time: bring them some items, or defeat some monsters. You can accept or decline; the
// harder the job, the better the loot they pay from (quests.json: tiers, and what each job asks for). Which job a villager offers is a pure
// function of the world's seed, the villager and how many they have already given you, so it is the same every time you ask.
// No DOM here (the window is dialog.js), so it is all testable.
import { REG } from './registry.js';
import { hash2 } from './noise.js';
import { rollLoot, itemName } from './items.js';

const Q = REG.quests;

// A string worth hashing: stable for a villager
const strHash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

// The job a villager (key, profession `job`) would ask now, when they have already given you `round` of them.
// Returns { tier, type, item?, mob?, count, text, label }.
export function makeOffer(seed, key, job, round, completed = 0) {
  const base = strHash(key) + round * 7919;
  const r = (salt) => hash2(base % 100003, salt, seed + 17);
  // harder jobs become likelier as you finish more of them (but easy ones never vanish)
  const weights = Q.tierOrder.map((k, i) => Q.tiers[k].weight * (1 + completed * 0.18 * i));
  let pick = r(1) * weights.reduce((a, b) => a + b, 0), ti = 0;
  for (let i = 0; i < weights.length; i++) { pick -= weights[i]; if (pick <= 0) { ti = i; break; } ti = i; }
  const tier = Q.tierOrder[ti];
  const list = Q.jobs[job]?.[tier] ?? Q.jobs.farmer[tier];
  const t = list[Math.floor(r(2) * list.length)];
  const count = t.min + Math.floor(r(3) * (t.max - t.min + 1));
  const offer = { tier, type: t.type, count };
  if (t.type === 'fetch') offer.item = t.item; else offer.mob = t.mob;
  offer.text = (t.text ?? defaultText(offer)).replace('{n}', String(count));
  return offer;
}
const defaultText = (o) => (o.type === 'fetch' ? `Bring me {n} ${itemName(o.item)}.` : `Defeat {n} ${REG.mobs.species[o.mob].name}s.`);

// What the job asks, in words: "6 x Wheat" or "Defeat 4 Zombies"
export const describe = (o) => (o.type === 'fetch' ? `${o.count} × ${itemName(o.item)}` : `Defeat ${o.count} ${REG.mobs.species[o.mob].name}${o.count === 1 ? '' : 's'}`);
// What the reward could be: the names of what its loot table can give
export const rewardNames = (tier) => [...new Set(REG.loot[Q.tiers[tier].loot].map((e) => itemName(e.id)))];

export class Quests {
  constructor(seed) {
    this.seed = seed;
    this.state = {}; // villager key -> { round, offer, status: 'offered' | 'active', kills, done }
    this.completed = 0;
  }

  // The state of one villager's quest, making their first offer when needed. Returns { round, offer, status, kills, done }.
  of(key, job) {
    let s = this.state[key];
    if (!s) s = this.state[key] = { round: 0, offer: null, status: 'offered', kills: 0, done: 0 };
    if (!s.offer) s.offer = makeOffer(this.seed, key, job, s.round, this.completed);
    return s;
  }

  // How far along it is: { have, need, ready } (fetch: what you carry; slay: what you have defeated since accepting)
  progress(key, job, inventory) {
    const s = this.of(key, job), o = s.offer;
    if (s.status !== 'active') return { have: 0, need: o.count, ready: false };
    const have = o.type === 'fetch' ? Math.min(o.count, inventory.countAll ? inventory.countAll(o.item) : inventory.count(o.item)) : Math.min(o.count, s.kills);
    return { have, need: o.count, ready: have >= o.count };
  }

  // `who` is { name, village } of the villager, kept so the quest book can say whose job it is
  accept(key, job, who = null) { const s = this.of(key, job); if (s.status === 'offered') { s.status = 'active'; s.kills = 0; s.who = who ? { name: who.name, village: who.village, job } : null; } return s; }
  // Turning them down: they will come up with something else next time
  decline(key, job) { const s = this.of(key, job); if (s.status === 'offered') { s.round++; s.offer = null; } }
  abandon(key, job) { const s = this.of(key, job); s.status = 'offered'; s.kills = 0; s.round++; s.offer = null; }

  // Hand it in. Takes the items, rolls the reward from the tier's loot table; returns { tier, loot: [{ id, n }], xp } or null if not done yet.
  complete(key, job, inventory, rand = Math.random) {
    const s = this.of(key, job);
    if (s.status !== 'active' || !this.progress(key, job, inventory).ready) return null;
    const o = s.offer, tier = Q.tiers[o.tier];
    if (o.type === 'fetch') inventory.take ? inventory.take(o.item, o.count) : inventory.remove(o.item, o.count);
    const loot = rollLoot(tier.loot, rand);
    if (!loot.length) loot.push(...rollLoot(tier.loot, () => 0)); // (a bad roll still pays something)
    s.status = 'offered'; s.kills = 0; s.round++; s.offer = null; s.done++;
    this.completed++;
    return { tier: o.tier, loot, xp: tier.xp };
  }

  // A monster was defeated: counts towards every open "defeat" quest for that kind
  recordKill(mobType) {
    for (const s of Object.values(this.state)) if (s.status === 'active' && s.offer?.type === 'slay' && s.offer.mob === mobType) s.kills++;
  }

  // The jobs you have taken on, for the quest book: [{ key, who: { name, village, job } | null, offer, have, need, ready }]
  activeList(inventory) {
    const out = [];
    for (const [key, s] of Object.entries(this.state)) {
      if (s.status !== 'active' || !s.offer) continue;
      const o = s.offer;
      const have = o.type === 'fetch' ? Math.min(o.count, inventory.countAll ? inventory.countAll(o.item) : inventory.count(o.item)) : Math.min(o.count, s.kills);
      out.push({ key, who: s.who ?? null, offer: o, have, need: o.count, ready: have >= o.count });
    }
    return out;
  }

  get activeCount() { return Object.values(this.state).filter((s) => s.status === 'active').length; }

  serialize() { return { completed: this.completed, state: JSON.parse(JSON.stringify(this.state)) }; }
  load(obj) { this.completed = obj?.completed ?? 0; this.state = obj?.state ?? {}; }
}
