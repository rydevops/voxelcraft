// The soundtrack's brain (pure logic, no audio): which track plays next, and which notes a track plays in each bar.
// The tracks themselves are described in data/music.json; audio.js turns the notes into sound.
import { REG } from './registry.js';

export const MUSIC = REG.music;
export const GAME_TRACKS = MUSIC.tracks.filter((t) => t.key !== MUSIC.title);
export const TITLE_TRACK = MUSIC.tracks.find((t) => t.key === MUSIC.title);

// A shuffled playlist: every track plays once (in random order) before any plays again, and the same track never
// comes round twice in a row, not even across the reshuffle.
export class Playlist {
  constructor(tracks = GAME_TRACKS, rand = Math.random) {
    this.tracks = tracks;
    this.rand = rand;
    this.bag = [];
    this.last = null;
  }

  next() {
    if (!this.bag.length) {
      this.bag = [...this.tracks];
      for (let i = this.bag.length - 1; i > 0; i--) { // Fisher-Yates
        const j = Math.floor(this.rand() * (i + 1));
        [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
      }
      if (this.bag.length > 1 && this.bag[this.bag.length - 1] === this.last) { // the next one popped would repeat: swap it away
        [this.bag[0], this.bag[this.bag.length - 1]] = [this.bag[this.bag.length - 1], this.bag[0]];
      }
    }
    this.last = this.bag.pop();
    return this.last;
  }
}

// Seconds of silence between two tracks
export const gapSeconds = (rand = Math.random) => MUSIC.gapSeconds[0] + rand() * (MUSIC.gapSeconds[1] - MUSIC.gapSeconds[0]);

export const secondsPerBeat = (track) => 60 / track.bpm;
export const trackSeconds = (track) => track.bars * 4 * secondsPerBeat(track);
export const chordOf = (track, bar) => track.chords[Math.floor(bar / track.barsPerChord) % track.chords.length];

const pick = (arr, rand) => arr[Math.floor(rand() * arr.length)];

// The notes of one bar (4 beats) of a track. Each event: { voice, notes: [midi...], beat (0-4), beats (length), vel }.
// Voices: piano bell pluck (melody and arpeggio), pad / strings (sustained chord), bass / drone.
export function planBar(track, bar, rand = Math.random) {
  const ev = [];
  const chord = chordOf(track, bar);
  const firstOfChord = bar % track.barsPerChord === 0;

  if (track.pad) ev.push({ voice: track.pad === 'strings' ? 'strings' : 'pad', notes: chord.tones.slice(0, 4), beat: 0, beats: 4.4, vel: 1 });
  if (track.bass === 'drone') {
    if (firstOfChord) ev.push({ voice: 'drone', notes: [chord.root - 12], beat: 0, beats: 4 * track.barsPerChord + 1, vel: 1 });
  } else if (track.bass) ev.push({ voice: 'bass', notes: [chord.root - 12], beat: 0, beats: 3, vel: 1 });

  if (track.arp) {
    const { voice, pattern, step, vel } = track.arp;
    for (let i = 0, t = 0; t < 4 - 1e-9; i++, t += step) ev.push({ voice, notes: [chord.tones[pattern[i % pattern.length] % chord.tones.length]], beat: t, beats: step * 2, vel });
  }

  if (track.melody) { // written out note by note
    for (const [b, beat, note, beats, vel] of track.melody) if (b === bar) ev.push({ voice: track.lead?.voice ?? 'piano', notes: [note], beat, beats, vel });
  } else if (track.lead) {
    const L = track.lead;
    if (L.rest && bar % L.rest === L.rest - 1 && rand() < 0.6) return ev; // the melody takes a breath
    let last = pick(chord.tones, rand);
    for (let i = 0; i < 8; i++) {
      const chance = i === 0 ? L.density[0] : i % 2 === 0 ? L.density[1] : L.density[2];
      if (rand() > chance) continue;
      // wander: prefer chord tones near the previous note, now and then leap an octave
      const near = chord.tones.filter((n) => Math.abs(n - last) <= 7);
      let note = pick(near.length ? near : chord.tones, rand);
      if (rand() < L.leap) note += 12;
      if (rand() < L.leap * 0.66) note -= 12;
      last = note;
      ev.push({ voice: L.voice, notes: [note], beat: i * 0.5, beats: 1.5, vel: 0.14 + rand() * 0.12 });
    }
  }
  return ev;
}
