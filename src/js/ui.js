// DOM user interface: hotbar, inventory + crafting screen, creative palette and the goals tracker.
import { PALETTE } from './blocks.js';
import { itemName, maxDamage, equipOf, isOffhand, EQUIP_SLOTS, RECIPES, STATION_LABEL, GOALS, WINDOWS, specIds, specName, SMELTING, fuelSeconds, FUEL_ITEMS } from './items.js';
import { INPUT, FUEL, OUTPUT, clickFurnaceSlot, quickInsert, autoFill, cooking, isLit } from './furnace.js';
import { itemIcon } from './textures.js';
import { SLOTS, HOTBAR, TOTAL_SLOTS } from './inventory.js';

const $ = (id) => document.getElementById(id);

export function createUI({ atlas, inventory, getHotbarStack, onCraft, onToss, onPalettePick, onSelect, onSmeltTake, onEquip, onNotice }) {
  // ---- icons (cached as data URLs so slots are cheap to re-render) -----------------------
  const urls = new Map();
  const iconURL = (id) => {
    if (!urls.has(id)) urls.set(id, itemIcon(atlas, id, 44).toDataURL());
    return urls.get(id);
  };

  function makeSlot(stack, extraClass = '') {
    const el = document.createElement('div');
    el.className = 'slot ' + extraClass;
    if (stack) {
      const img = document.createElement('img');
      img.src = iconURL(stack.id);
      img.draggable = false;
      el.appendChild(img);
      if (stack.n > 1) {
        const c = document.createElement('span');
        c.className = 'count';
        c.textContent = stack.n;
        el.appendChild(c);
      }
      const max = maxDamage(stack.id);
      if (max && stack.d > 0) {
        const bar = document.createElement('div');
        bar.className = 'dura';
        const frac = 1 - stack.d / max;
        bar.innerHTML = `<i style="width:${Math.max(6, frac * 100)}%;background:hsl(${frac * 120},80%,48%)"></i>`;
        el.appendChild(bar);
      }
      el.dataset.tip = itemName(stack.id); // shown instantly by the tooltip code below (not the slow native "title")
      if (max) el.dataset.tipSub = `Durability ${max - stack.d} / ${max}`;
      const eq = equipOf(stack.id);
      if (eq) el.dataset.tipSub = eq.armor ? `Armor +${eq.armor}  (${EQUIP_SLOTS.find((q) => q.id === eq.slot)?.label})` : eq.slots ? `Backpack: adds ${eq.slots} inventory slots` : `Wear it in the ${EQUIP_SLOTS.find((q) => q.id === eq.slot)?.label} slot`;
    }
    return el;
  }

  // ---- hotbar -------------------------------------------------------------------------------
  const hotbarEl = $('hotbar');
  function renderHotbar(selected) {
    hotbarEl.replaceChildren();
    for (let i = 0; i < HOTBAR; i++) {
      const el = makeSlot(getHotbarStack(i), i === selected ? 'sel' : '');
      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = i + 1;
      el.appendChild(num);
      el.addEventListener('mousedown', (e) => { e.stopPropagation(); onSelect(i); });
      hotbarEl.appendChild(el);
    }
  }

  // ---- inventory screen ------------------------------------------------------------------------
  const invEl = $('inventory');
  const gridEl = $('inv-grid');
  const invHotbarEl = $('inv-hotbar');
  const recipesEl = $('recipes');
  const cursorEl = $('cursor-item');
  let cursor = null;
  let invOpen = false;

  // one inventory slot (index into inventory.slots): click to pick up / place, shift-click to move or wear it
  function inventorySlot(i) {
    const el = makeSlot(inventory.slots[i]);
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const st = inventory.slots[i];
      if (e.shiftKey && e.button === 0 && st && (equipOf(st.id) || isOffhand(st.id)) && inventory.quickEquip(i)) {
        onEquip?.();
      } else if (e.shiftKey && e.button === 0 && furnace) { // furnace window open: shift-click sends smeltable items / fuel into it
        if (st) { const left = quickInsert(furnace, st); if (left <= 0) inventory.slots[i] = null; else st.n = left; }
      } else if (e.shiftKey && e.button === 0) inventory.quickMove(i);
      else cursor = inventory.clickSlot(i, cursor, e.button === 2 ? 2 : 0);
      changed();
    });
    return el;
  }

  // the equipment row: helmet, chestplate, leggings, boots, shield, backpack, quiver
  const equipRow = $('equip-row');
  const ghostIcon = {}; // slot id -> an item of that kind, drawn faintly in the empty slot
  function renderEquipment() {
    equipRow.replaceChildren();
    for (const slot of EQUIP_SLOTS) {
      const st = inventory.equipment[slot.id];
      const cell = document.createElement('div');
      cell.className = 'equip-cell';
      const el = makeSlot(st, 'equip' + (st ? ' worn' : ''));
      if (!st) {
        const g = ghostItemFor(slot.id);
        if (g) { const img = document.createElement('img'); img.src = iconURL(g); img.className = 'ghost'; img.draggable = false; el.appendChild(img); }
        el.dataset.tip = slot.label;
        el.dataset.tipSub = slot.id === 'shield' ? 'A shield, or torches to hold in your off hand (G places one)' : 'Drop a ' + slot.label.toLowerCase() + ' here to wear it';
      }
      el.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.shiftKey && e.button === 0) { // take it off into the inventory
          if (st && inventory.canFit(st.id, 1) && !(slot.id === 'backpack' && inventory.slots.slice(SLOTS).some(Boolean))) {
            inventory.equipment[slot.id] = null;
            inventory.add(st.id, 1, st.d);
          } else if (st && slot.id === 'backpack') onNotice?.('Empty the backpack first');
        } else {
          const wasEmpty = !inventory.equipment[slot.id];
          const r = inventory.clickEquip(slot.id, cursor, e.button === 2 ? 2 : 0);
          if (r.refused) onNotice?.(r.refused);
          cursor = r.cursor;
          if (wasEmpty && inventory.equipment[slot.id]) onEquip?.();
        }
        changed();
      });
      const label = document.createElement('small');
      label.textContent = slot.label;
      cell.append(el, label);
      equipRow.appendChild(cell);
    }
  }
  function ghostItemFor(slotId) {
    if (ghostIcon[slotId] === undefined) {
      ghostIcon[slotId] = null;
      for (let id = 100; id < 400; id++) if (equipOf(id)?.slot === slotId) { ghostIcon[slotId] = id; break; }
    }
    return ghostIcon[slotId];
  }

  function renderInventory() {
    gridEl.replaceChildren();
    invHotbarEl.replaceChildren();
    $('backpack-grid').replaceChildren();
    const cap = inventory.capacity;
    for (let i = 0; i < cap; i++) {
      const el = inventorySlot(i);
      (i < HOTBAR ? invHotbarEl : i < SLOTS ? gridEl : $('backpack-grid')).appendChild(el);
    }
    $('backpack-box').hidden = cap <= SLOTS;
    renderEquipment();
    renderCursor();
    renderRecipes();
    updateTips();
  }

  // main inventory slots 9..35 go in the grid, hotbar 0..8 below it (matches Minecraft's layout)
  function renderCursor() {
    if (cursor) {
      cursorEl.hidden = false;
      cursorEl.replaceChildren(...makeSlot(cursor, 'bare').childNodes);
    } else {
      cursorEl.hidden = true;
    }
  }

  // The recipe book only lists what the window you opened can do: your own hands (inventory key),
  // a crafting table, or a furnace (right-click on them). The windows and which stations' recipes each one lists
  // come from data/recipes.json ("windows"), so a new crafting station needs no code. All of a window's recipes
  // are in one list; the search box and the "craftable only" toggle narrow it down.
  const CONTEXTS = WINDOWS;
  let ctx = 'hand';
  let furnace = null; // the state of the furnace whose window is open (see furnace.js)
  const searchEl = $('recipe-search');
  const onlyEl = $('recipe-only');
  try { onlyEl.checked = localStorage.getItem('voxelcraft.recipeOnly') === '1'; } catch { /* no storage: fine */ }
  const currentStations = () => ({ table: ctx === 'table', furnace: ctx === 'furnace' });
  const isFurnaceWindow = () => !!CONTEXTS[ctx].furnace;

  // does a recipe match what was typed? every word must appear in the name, label or an ingredient
  const matchesSearch = (text) => {
    const words = searchEl.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const hay = text.toLowerCase();
    return words.every((w) => hay.includes(w));
  };

  function renderRecipes() {
    hideTip();
    const info = CONTEXTS[ctx];
    const smelt = !!info.furnace;
    $('craft-title').textContent = info.title;
    $('recipe-only-label').textContent = smelt ? 'Smeltable only' : 'Craftable only';
    $('furnace-panel').hidden = !smelt;
    if (smelt) renderFurnace();
    const only = onlyEl.checked;
    recipesEl.replaceChildren();
    let shown = 0;

    const addRow = (kind, index, outStack, title, ingsHtml, can, extra) => {
      const row = document.createElement('div');
      row.className = 'recipe' + (can ? ' can' : '');
      row.dataset.kind = kind;
      row.dataset.index = index;
      const out = makeSlot(outStack, 'bare');
      const text = document.createElement('div');
      text.className = 'rtext';
      text.innerHTML = `<b>${title}</b><div class="ings">${ingsHtml}</div>`;
      row.append(out, text);
      if (extra) { const e = document.createElement('span'); e.className = 'secs'; e.textContent = extra; row.appendChild(e); }
      row.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (kind === 'smelt') { autoFill(furnace, inventory, SMELTING[index]); changed(); return; }
        const r = RECIPES[index];
        if (!inventory.canCraft(r, currentStations())) return;
        onCraft(r, inventory.craft(r, currentStations()));
        changed();
      });
      recipesEl.appendChild(row);
      shown++;
    };

    if (smelt) {
      SMELTING.forEach((r, index) => {
        const have = inventory.count(r.in);
        if (only && have < 1) return;
        if (!matchesSearch(itemName(r.out) + ' ' + itemName(r.in))) return;
        const ing = `<span class="ing ${have >= 1 ? 'ok' : 'no'}"><img src="${iconURL(r.in)}" draggable="false">${have}/1</span>`;
        addRow('smelt', index, { id: r.out, n: 1, d: 0 }, itemName(r.out), ing, have >= 1, r.seconds + ' s');
      });
    } else {
      const stations = currentStations();
      for (const st of info.stations) {
        RECIPES.forEach((r, index) => {
          if (r.station !== st) return;
          const can = inventory.canCraft(r, stations);
          if (only && !can) return;
          if (!matchesSearch((r.label || '') + ' ' + itemName(r.out) + ' ' + r.ins.map(([spec]) => specName(spec)).join(' '))) return;
          const ings = r.ins.map(([spec, n]) => {
            const have = inventory.countSpec(spec);
            return `<span class="ing ${have >= n ? 'ok' : 'no'}"><img src="${iconURL(specIds(spec)[0])}" draggable="false">${have}/${n}</span>`;
          }).join('');
          addRow('craft', index, { id: r.out, n: r.n, d: 0 }, r.label || itemName(r.out), ings, can);
        });
      }
    }
    if (!shown) {
      const p = document.createElement('p');
      p.className = 'recipe-empty';
      p.textContent = searchEl.value.trim() ? 'Nothing matches that search.' : only ? (smelt ? 'Nothing in your inventory can be smelted yet.' : 'You cannot craft anything here yet. Untick the box to see every recipe.') : 'No recipes.';
      recipesEl.appendChild(p);
    }
  }
  searchEl.addEventListener('input', renderRecipes);
  onlyEl.addEventListener('change', () => {
    try { localStorage.setItem('voxelcraft.recipeOnly', onlyEl.checked ? '1' : '0'); } catch { /* ignore */ }
    renderRecipes();
  });

  // ---- the furnace window: input, fuel and result slots, a flame and a progress arrow ----------------
  const furnaceSlotEls = [$('fur-input'), $('fur-fuel'), $('fur-output')];
  const SLOT_HINT = ['Put something to smelt here', 'Fuel: coal, charcoal, logs, planks...', 'The finished items appear here'];
  let furnaceSig = '';
  const sigOf = (f) => f.slots.map((st) => (st ? st.id + ':' + st.n : '-')).join('|');
  function renderFurnace() {
    if (!furnace) return;
    furnaceSig = sigOf(furnace);
    furnaceSlotEls.forEach((el, which) => {
      const st = furnace.slots[which];
      const made = makeSlot(st);
      el.replaceChildren(...made.childNodes);
      if (st) { el.dataset.tip = made.dataset.tip; delete el.dataset.tipSub; } else { el.dataset.tip = SLOT_HINT[which]; delete el.dataset.tipSub; }
    });
    updateFurnaceBars();
  }
  function updateFurnaceBars() {
    if (!furnace) return;
    const { rec } = cooking(furnace);
    $('fur-flame').classList.toggle('lit', furnace.burn > 0);
    $('fur-flame').firstElementChild.style.height = (furnace.burnMax > 0 ? Math.min(100, (furnace.burn / furnace.burnMax) * 100) : 0) + '%';
    $('fur-arrow').firstElementChild.style.width = (rec && furnace.progress > 0 ? Math.min(100, (furnace.progress / rec.seconds) * 100) : 0) + '%';
  }
  furnaceSlotEls.forEach((el, which) => {
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!furnace) return;
      if (e.shiftKey && e.button === 0) { // send the stack back to the inventory
        const st = furnace.slots[which];
        if (st) {
          const left = inventory.add(st.id, st.n, st.d);
          if (which === OUTPUT && left < st.n) onSmeltTake?.({ id: st.id, n: st.n - left });
          furnace.slots[which] = left > 0 ? { ...st, n: left } : null;
        }
      } else {
        const r = clickFurnaceSlot(furnace, which, cursor, e.button === 2 ? 2 : 0);
        cursor = r.cursor;
        if (r.took) onSmeltTake?.(r.took);
      }
      changed();
    });
  });

  // ---- recipe pop-out: hover a recipe to see exactly what it needs and what is missing ----------
  const tipEl = $('recipe-tip');
  function hideTip() { tipEl.hidden = true; }
  function showSmeltTip(row, x, y) {
    const r = SMELTING[Number(row.dataset.index)];
    const have = inventory.count(r.in);
    const fuels = FUEL_ITEMS.map((id) => `${itemName(id)} (${fuelSeconds(id)} s)`).join(', ');
    tipEl.innerHTML = `<h4>${itemName(r.out)}</h4><div class="tip-head">Smelts:</div>
      <div class="tip-ing ${have >= 1 ? 'ok' : 'no'}"><img src="${iconURL(r.in)}" draggable="false"><span>1× ${itemName(r.in)}</span><em>${have >= 1 ? '✔' : '✘'} you have ${have}</em></div>
      <div class="tip-station">Takes ${r.seconds} seconds per item and needs fuel</div>
      <div class="tip-station">Burns: ${fuels}</div>
      ${have >= 1 ? '<div class="tip-ok">Click to load it into the furnace</div>' : '<div class="tip-no">You have none to smelt</div>'}`;
    tipEl.hidden = false;
    tipEl.style.left = Math.min(x + 18, window.innerWidth - tipEl.offsetWidth - 8) + 'px';
    tipEl.style.top = Math.min(y + 14, window.innerHeight - tipEl.offsetHeight - 8) + 'px';
  }
  function showTip(row, x, y) {
    if (row.dataset.kind === 'smelt') return showSmeltTip(row, x, y);
    const r = RECIPES[Number(row.dataset.index)];
    const have = inventory.canCraft(r, currentStations());
    const rows = r.ins.map(([spec, n]) => {
      const got = inventory.countSpec(spec);
      const ok = got >= n;
      return `<div class="tip-ing ${ok ? 'ok' : 'no'}"><img src="${iconURL(specIds(spec)[0])}" draggable="false">
        <span>${n}× ${specName(spec)}</span><em>${ok ? '✔' : '✘'} you have ${got}</em></div>`;
    }).join('');
    const where = r.station ? `<div class="tip-station">Made at: ${STATION_LABEL[r.station]}</div>` : '<div class="tip-station">Made by hand</div>';
    const status = have ? '<div class="tip-ok">Click to craft</div>' : '<div class="tip-no">Missing materials</div>';
    tipEl.innerHTML = `<h4>${r.label || itemName(r.out)} ×${r.n}</h4><div class="tip-head">Requires:</div>${rows}${where}${status}`;
    tipEl.hidden = false;
    // keep the pop-out on screen
    const w = tipEl.offsetWidth, h = tipEl.offsetHeight;
    tipEl.style.left = Math.min(x + 18, window.innerWidth - w - 8) + 'px';
    tipEl.style.top = Math.min(y + 14, window.innerHeight - h - 8) + 'px';
  }
  recipesEl.addEventListener('mousemove', (e) => {
    const row = e.target.closest('.recipe');
    if (row) showTip(row, e.clientX, e.clientY); else hideTip();
  });
  recipesEl.addEventListener('mouseleave', hideTip);

  function changed() {
    renderInventory();
    renderHotbar(currentSelected);
  }

  // ---- instant item tooltips: shown the moment the pointer is over a slot in the inventory or palette ------------
  const itemTip = $('item-tip');
  let lastX = 0, lastY = 0;
  const hideItemTip = () => { itemTip.hidden = true; };
  function placeTip(el, x, y) {
    el.hidden = false;
    el.style.left = Math.min(x + 16, window.innerWidth - el.offsetWidth - 8) + 'px';
    el.style.top = Math.min(y + 14, window.innerHeight - el.offsetHeight - 8) + 'px';
  }
  // Work out what is under the pointer right now and show / hide the right tooltip. Also called after every
  // re-render, because the element under a stationary pointer may just have been replaced.
  function updateTips() {
    if (!invOpen && paletteEl.hidden) { hideItemTip(); return; }
    const under = document.elementFromPoint(lastX, lastY);
    const slotEl = under?.closest?.('.slot[data-tip]');
    if (slotEl && !cursor && slotEl.closest('#inventory, #palette')) {
      itemTip.innerHTML = `<b></b>${slotEl.dataset.tipSub ? '<span></span>' : ''}`;
      itemTip.firstChild.textContent = slotEl.dataset.tip;
      if (slotEl.dataset.tipSub) itemTip.lastChild.textContent = slotEl.dataset.tipSub;
      placeTip(itemTip, lastX, lastY);
    } else {
      hideItemTip();
    }
    const row = under?.closest?.('.recipe');
    if (row && invOpen) showTip(row, lastX, lastY); else hideTip();
  }
  document.addEventListener('mousemove', (e) => { lastX = e.clientX; lastY = e.clientY; updateTips(); });
  let currentSelected = 0;

  invEl.addEventListener('mousemove', (e) => {
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top = e.clientY + 'px';
  });
  // clicking the dim background throws the held stack into the world
  invEl.addEventListener('mousedown', (e) => {
    if (e.target !== invEl || !cursor) return;
    if (e.button === 2 && cursor.n > 1) {
      onToss({ ...cursor, n: 1 });
      cursor.n -= 1;
    } else {
      onToss(cursor);
      cursor = null;
    }
    renderCursor();
  });

  function openInventory(selected, context = 'hand', furnaceState = null) {
    currentSelected = selected;
    ctx = CONTEXTS[context] ? context : 'hand';
    furnace = CONTEXTS[ctx].furnace ? furnaceState : null;
    searchEl.value = '';
    invOpen = true;
    invEl.hidden = false;
    renderInventory();
  }

  function closeInventory() {
    hideTip();
    hideItemTip();
    if (cursor) {
      const left = inventory.add(cursor.id, cursor.n, cursor.d);
      if (left > 0) onToss({ ...cursor, n: left });
      cursor = null;
    }
    furnace = null;
    invOpen = false;
    invEl.hidden = true;
    renderHotbar(currentSelected);
  }

  // ---- creative palette ----------------------------------------------------------------------
  const paletteEl = $('palette');
  const paletteGrid = $('palette-grid');
  for (const id of PALETTE) {
    const el = makeSlot({ id, n: 1, d: 0 });
    el.addEventListener('click', () => onPalettePick(id));
    paletteGrid.appendChild(el);
  }

  // ---- goals ---------------------------------------------------------------------------------
  const goalList = $('goal-list');
  function renderGoals(done) {
    goalList.replaceChildren();
    $('goal-count').textContent = `${done.filter(Boolean).length}/${GOALS.length}`;
    // show the most recent achievement plus the next couple of goals (no spoilers)
    const lastDone = done.lastIndexOf(true);
    let pending = 0;
    GOALS.forEach((g, i) => {
      const show = done[i] ? i === lastDone : ++pending <= 2;
      if (!show) return;
      const li = document.createElement('li');
      li.className = done[i] ? 'done' : 'todo';
      li.textContent = g.text;
      goalList.appendChild(li);
    });
    if (done.every(Boolean)) {
      const li = document.createElement('li');
      li.className = 'done';
      li.textContent = 'All goals complete!';
      goalList.appendChild(li);
    }
  }

  return {
    renderHotbar: (selected) => { currentSelected = selected; renderHotbar(selected); if (invOpen) renderInventory(); },
    refreshInventory: () => { if (invOpen) renderInventory(); },
    // called every frame: keep the furnace window's flame and arrow moving, and redraw it when its contents change
    tickFurnace: () => {
      if (!invOpen || !furnace) return;
      if (sigOf(furnace) !== furnaceSig) renderFurnace(); // (the recipe list does not depend on the furnace, so it is left alone)
      else updateFurnaceBars();
    },
    openInventory, closeInventory, renderGoals,
    openPalette: () => { paletteEl.hidden = false; },
    closePalette: () => { paletteEl.hidden = true; hideItemTip(); },
    get invOpen() { return invOpen; },
    get paletteOpen() { return !paletteEl.hidden; },
  };
}
