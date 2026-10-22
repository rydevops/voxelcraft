// The soundtrack: track data, the shuffled playlist (random order, no repeats) and what each track plays. Run with: npm test
import assert from 'node:assert/strict';
import { MUSIC, GAME_TRACKS, TITLE_TRACK, Playlist, planBar, chordOf, secondsPerBeat, trackSeconds, gapSeconds } from '../src/js/music.js';
import { loadData, buildRegistry, DataError } from '../src/js/registry.js';

// ---- several tracks, plus a title theme ----
assert.ok(GAME_TRACKS.length >= 5, 'a handful of in-game tracks (' + GAME_TRACKS.length + ')');
assert.ok(TITLE_TRACK && TITLE_TRACK.melody, 'the title theme exists and is a written-out melody');
assert.ok(!GAME_TRACKS.includes(TITLE_TRACK), 'and is not part of the in-game shuffle');
assert.equal(new Set(MUSIC.tracks.map((t) => t.key)).size, MUSIC.tracks.length, 'unique keys');
assert.equal(new Set(MUSIC.tracks.map((t) => t.name)).size, MUSIC.tracks.length, 'unique names');
for (const t of MUSIC.tracks) {
  const secs = trackSeconds(t);
  assert.ok(secs >= 40 && secs <= 240, `${t.name} lasts a sensible ${secs.toFixed(0)} s`);
}
// the tracks differ from each other in sound, not just in notes
const sig = (t) => [t.bpm, t.lead?.voice, t.pad, t.bass, !!t.arp].join('/');
assert.ok(new Set(GAME_TRACKS.map(sig)).size >= GAME_TRACKS.length - 1, 'each track has its own tempo / instruments');
assert.ok(new Set(GAME_TRACKS.map((t) => t.bpm)).size >= 4, 'a range of tempos');
assert.ok(MUSIC.gapSeconds[0] > 0 && MUSIC.gapSeconds[1] >= MUSIC.gapSeconds[0], 'a pause between tracks');

// ---- the playlist: every track once in random order before any repeats, never the same twice in a row ----
function lcg(seed) { let s = seed >>> 0; return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296); }
{
  for (const seed of [1, 2, 3, 42, 99, 12345]) {
    const p = new Playlist(GAME_TRACKS, lcg(seed));
    const order = [];
    for (let i = 0; i < GAME_TRACKS.length * 12; i++) order.push(p.next().key);
    for (let i = 1; i < order.length; i++) assert.notEqual(order[i], order[i - 1], `seed ${seed}: no track twice in a row (position ${i})`);
    for (let round = 0; round < 12; round++) {
      const lap = order.slice(round * GAME_TRACKS.length, (round + 1) * GAME_TRACKS.length);
      assert.equal(new Set(lap).size, GAME_TRACKS.length, `seed ${seed}: every track plays once per round`);
    }
    assert.ok(new Set(order.slice(0, GAME_TRACKS.length)).size === GAME_TRACKS.length);
  }
  // it really is random: different seeds give different orders
  const first = (seed) => { const p = new Playlist(GAME_TRACKS, lcg(seed)); return GAME_TRACKS.map(() => p.next().key).join(','); };
  assert.ok(new Set([1, 2, 3, 4, 5, 6, 7, 8].map(first)).size >= 6, 'different orders');
  // two tracks only: they just alternate
  const two = new Playlist(GAME_TRACKS.slice(0, 2), lcg(5));
  const seq = Array.from({ length: 10 }, () => two.next().key);
  assert.ok(seq.every((k, i) => i === 0 || k !== seq[i - 1]));
  // the pause between tracks stays within bounds
  for (const r of [0, 0.5, 0.999]) { const g = gapSeconds(() => r); assert.ok(g >= MUSIC.gapSeconds[0] && g <= MUSIC.gapSeconds[1]); }
}

// ---- what each track plays ----
const NOTE_OK = (n) => Number.isInteger(n) && n >= 24 && n <= 108;
for (const t of MUSIC.tracks) {
  const rand = lcg(7);
  let melodyNotes = 0, bars = 0;
  for (let bar = 0; bar < t.bars; bar++) {
    const ev = planBar(t, bar, rand);
    bars++;
    for (const e of ev) {
      assert.ok(['piano', 'bell', 'pluck', 'pad', 'strings', 'bass', 'drone'].includes(e.voice), `${t.name}: known voice ${e.voice}`);
      assert.ok(e.notes.length >= 1 && e.notes.every(NOTE_OK), `${t.name}: notes are playable MIDI notes`);
      assert.ok(e.beat >= 0 && e.beat < 4 && e.beats > 0, `${t.name}: inside the bar`);
      if (e.voice === 'piano' || e.voice === 'bell' || e.voice === 'pluck') melodyNotes++;
    }
    assert.ok(ev.some((e) => e.voice === 'pad' || e.voice === 'strings' || e.voice === 'bass' || e.voice === 'drone' || t.arp), `${t.name}: bar ${bar} has a bed under the melody`);
  }
  assert.ok(melodyNotes > t.bars * 0.8, `${t.name} has a melody (${melodyNotes} notes in ${bars} bars)`);
  assert.equal(chordOf(t, 0), t.chords[0]);
  assert.equal(chordOf(t, t.barsPerChord * t.chords.length), t.chords[0], 'the chords repeat');
  assert.ok(secondsPerBeat(t) === 60 / t.bpm);
}
// generated melodies are random but reproducible for a given random source, and different between plays
{
  const t = GAME_TRACKS[0];
  assert.deepEqual(planBar(t, 3, lcg(1)), planBar(t, 3, lcg(1)));
  assert.notDeepEqual(planBar(t, 0, lcg(1)), planBar(t, 0, lcg(2)));
}
// the title theme plays exactly what is written, every time
{
  const a = JSON.stringify(TITLE_TRACK.melody.map((m) => m[0]));
  for (let bar = 0; bar < TITLE_TRACK.bars; bar++) {
    const ev = planBar(TITLE_TRACK, bar, lcg(bar));
    const written = TITLE_TRACK.melody.filter((m) => m[0] === bar);
    assert.deepEqual(ev.filter((e) => e.voice === (TITLE_TRACK.lead?.voice ?? 'piano')).map((e) => e.notes[0]).sort(), written.map((m) => m[2]).sort(), `bar ${bar} of the theme`);
    assert.deepEqual(planBar(TITLE_TRACK, bar, lcg(1)), planBar(TITLE_TRACK, bar, lcg(999)), 'the theme does not change between plays');
  }
  assert.ok(a.length > 10);
}

// ---- bad music data is explained ----
const fresh = async () => structuredClone(await loadData());
const bad = (data, pattern, why) => assert.throws(() => buildRegistry(data), (e) => e instanceof DataError && pattern.test(e.message), why);
{ const d = await fresh(); d.music.title = 'nope'; bad(d, /"title" must name one of the tracks/, 'unknown title track'); }
{ const d = await fresh(); d.music.tracks[0].bpm = 5; bad(d, /bpm must be 30-160/, 'silly tempo'); }
{ const d = await fresh(); d.music.tracks[0].chords[0].tones = [1, 2, 3]; bad(d, /tones must be at least three MIDI notes/, 'out of range notes'); }
{ const d = await fresh(); d.music.tracks[0].lead.voice = 'kazoo'; bad(d, /lead\.voice must be one of/, 'unknown instrument'); }
{ const d = await fresh(); d.music.tracks[1].key = d.music.tracks[0].key; bad(d, /key used twice/, 'duplicate key'); }
{ const d = await fresh(); d.music.tracks = d.music.tracks.filter((t) => t.key === 'theme' || t.key === 'meadow'); bad(d, /at least two tracks besides the title theme/, 'needs something to shuffle'); }
{ const d = await fresh(); delete d.music.tracks[0].lead; delete d.music.tracks[0].arp; bad(d, /needs a lead, a melody or an arp/, 'a track with nothing to play'); }
{ const d = await fresh(); d.music.tracks.at(-1).melody[0][0] = 99; bad(d, /melody entries must be/, 'a melody note outside the track'); }

console.log('all music tests passed');
