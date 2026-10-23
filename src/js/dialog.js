// The window that opens when you talk to a villager: what they say, the job they have for you (with how hard it is and what it pays), and the
// buttons to accept, decline, hand it in or give up. The rules are in quests.js; this only shows them.
import { describe, rewardNames } from './quests.js';
import { REG } from './registry.js';
import { itemName } from './items.js';

const $ = (id) => document.getElementById(id);
const Q = REG.quests;

// hooks: { quests, inventory, onClose(), onAccept(v), onDecline(v), onComplete(v, result), onAbandon(v) }
export function createDialog({ quests, inventory, onAccept, onDecline, onAbandon, onComplete, onClose }) {
  let villager = null;
  const el = $('talk');

  function render(line) {
    const v = villager;
    $('talk-name').textContent = v.name;
    $('talk-job').textContent = `the ${v.job} of ${v.village.name}`;
    if (line != null) $('talk-line').textContent = '“' + line + '”';
    const s = quests.of(v.key, v.job), o = s.offer, p = quests.progress(v.key, v.job, inventory);
    $('talk-quest').hidden = false;
    const tier = $('talk-tier');
    tier.textContent = Q.tiers[o.tier].label;
    tier.className = o.tier;
    $('talk-xp').textContent = `+${Q.tiers[o.tier].xp} XP`;
    $('talk-text').textContent = o.text;
    const reqs = $('talk-reqs');
    reqs.replaceChildren();
    const li = document.createElement('li');
    const active = s.status === 'active';
    li.className = p.ready ? 'ok' : '';
    li.textContent = active ? `${describe(o)}   (${p.have} / ${p.need})` : describe(o);
    if (!active) li.className = 'ok';
    reqs.appendChild(li);
    const names = rewardNames(o.tier);
    $('talk-reward').textContent = `Reward (${Q.tiers[o.tier].label.toLowerCase()} job): ${Q.tiers[o.tier].reward}. For example: ${names.slice(0, 6).join(', ')}${names.length > 6 ? '...' : ''}`;
    $('talk-accept').hidden = active;
    $('talk-decline').hidden = active;
    $('talk-turnin').hidden = !active;
    $('talk-turnin').disabled = !p.ready;
    $('talk-turnin').textContent = p.ready ? 'Hand it in' : o.type === 'fetch' ? 'Not enough yet' : 'Not done yet';
    $('talk-abandon').hidden = !active;
  }

  function hide() { el.hidden = true; villager = null; }
  function close() { if (el.hidden) return; hide(); onClose?.(); }

  $('talk-accept').addEventListener('click', () => { if (!villager) return; quests.accept(villager.key, villager.job); onAccept?.(villager); render('Thank you. I will be waiting.'); });
  $('talk-decline').addEventListener('click', () => { if (!villager) return; const v = villager; quests.decline(v.key, v.job); onDecline?.(v); render('Another time, then. Perhaps I can find something else for you...'); });
  $('talk-abandon').addEventListener('click', () => { if (!villager) return; const v = villager; quests.abandon(v.key, v.job); onAbandon?.(v); render('I understand. It was a lot to ask.'); });
  $('talk-turnin').addEventListener('click', () => {
    if (!villager) return;
    const v = villager, result = quests.complete(v.key, v.job, inventory);
    if (!result) return;
    onComplete?.(v, result);
    render(`Wonderful! You have earned this: ${result.loot.map((l) => `${l.n} × ${itemName(l.id)}`).join(', ')}.`);
  });
  $('talk-close').addEventListener('click', close);
  el.addEventListener('mousedown', (e) => { if (e.target === el) close(); });

  return {
    get open() { return !el.hidden; },
    // the villager `v` (a Villager from villagerai.js), and what they greet you with
    show(v, greeting) { villager = v; el.hidden = false; render(greeting); },
    refresh() { if (villager) render(null); },
    close, hide,
  };
}
