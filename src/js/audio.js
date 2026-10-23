// Procedural audio via WebAudio: a soundtrack of several generated tracks (data/music.json) that play in a random order
// with a pause between them, a looping theme on the title screen, and synthesized sound effects.
// Nothing is sampled, everything is generated at runtime.

import { REG } from './registry.js';
import { Playlist, planBar, secondsPerBeat, gapSeconds, TITLE_TRACK } from './music.js';
const SOUNDS = REG.sounds;

const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.musicOn = true;
    this.musicVol = 0.8;
    this.sfxVol = 0.9;
    this.nextBarTime = 0;
    this.timer = null;
    this.scene = 'title';            // 'title' loops the theme; 'game' plays the shuffled soundtrack
    this.playlist = new Playlist();
    this.track = null;               // the track being scheduled
    this.trackBar = 0;
    this.bus = null;                 // the current track's own volume (so it can be faded out)
    this.nowPlaying = null;
    this.onTrack = null;             // callback(track) when a new one starts
  }

  // Browsers keep audio silent until you click or press a key. Start (or resume) on the first one.
  unlockOnGesture() {
    const types = ['pointerdown', 'keydown', 'touchstart'];
    const go = () => {
      this.start();
      if (this.ctx.state === 'running') for (const t of types) window.removeEventListener(t, go, true);
      else this.ctx.resume().then(() => { if (this.ctx.state === 'running') for (const t of types) window.removeEventListener(t, go, true); });
    };
    for (const t of types) window.addEventListener(t, go, true);
  }

  get running() { return !!this.ctx && this.ctx.state === 'running'; }

  // Switch between the title theme and the in-game soundtrack (the old track fades out)
  setScene(scene) {
    if (scene === this.scene) return;
    this.scene = scene;
    this.endTrack(1.4);
    if (this.ctx) this.nextBarTime = Math.max(this.nextBarTime, this.ctx.currentTime + 0.8);
  }

  endTrack(fade = 0) {
    if (this.bus && this.ctx) {
      const bus = this.bus, t = this.ctx.currentTime;
      if (fade > 0) bus.gain.setTargetAtTime(0, t, fade / 3);
      setTimeout(() => { try { bus.disconnect(); } catch { /* already gone */ } }, (fade + 12) * 1000);
    }
    this.bus = null;
    this.track = null;
    this.trackBar = 0;
  }

  start() {
    if (this.ctx) {
      this.ctx.resume();
      return;
    }
    const ctx = (this.ctx = new (window.AudioContext || window.webkitAudioContext)());
    this.master = ctx.createGain();
    this.master.gain.value = 0.8;
    this.master.connect(ctx.destination);

    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = this.musicOn ? 0.55 * this.musicVol : 0;
    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = this.sfxVol;
    this.sfxBus.connect(this.master);

    // Lush reverb from a generated impulse response
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(4.2, 2.4);
    const wet = ctx.createGain();
    wet.gain.value = 0.55;
    this.reverb.connect(wet);
    wet.connect(this.master);
    this.musicBus.connect(this.master);
    this.musicBus.connect(this.reverb);

    // Dotted-eighth echo for that shimmering feel
    this.delay = ctx.createDelay(2);
    this.delay.delayTime.value = 0.72;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const dlp = ctx.createBiquadFilter();
    dlp.type = 'lowpass';
    dlp.frequency.value = 2200;
    this.delay.connect(dlp);
    dlp.connect(fb);
    fb.connect(this.delay);
    dlp.connect(this.musicBus);

    // reusable white-noise buffer for effects
    const len = ctx.sampleRate;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    this.nextBarTime = ctx.currentTime + 1.0;
    this.timer = setInterval(() => this.schedule(), 400);
  }

  makeImpulse(seconds, decay) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  setMusic(on) {
    this.musicOn = on;
    this.applyVolumes();
  }

  setVolumes(music, sfx) {
    this.musicVol = music;
    this.sfxVol = sfx;
    this.applyVolumes();
  }

  applyVolumes() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.musicBus.gain.setTargetAtTime(this.musicOn ? 0.55 * this.musicVol : 0, t, 0.15);
    this.sfxBus.gain.setTargetAtTime(this.sfxVol, t, 0.05);
  }

  // ---- music ----------------------------------------------------------------------------
  startTrack() {
    this.track = this.scene === 'title' ? TITLE_TRACK : this.playlist.next();
    this.trackBar = 0;
    this.nowPlaying = this.track;
    this.bus = this.ctx.createGain();
    this.bus.connect(this.musicBus);
    this.onTrack?.(this.track);
  }

  schedule() {
    const ctx = this.ctx;
    while (this.nextBarTime < ctx.currentTime + 1.2) {
      if (!this.track) this.startTrack();
      const spb = secondsPerBeat(this.track);
      this.playBar(this.nextBarTime, spb);
      this.nextBarTime += spb * 4;
      if (++this.trackBar >= this.track.bars) {
        if (this.scene === 'title') this.trackBar = 0; // the theme loops
        else { // the track is over: a pause, then the next one at random
          this.endTrack(0);
          this.nextBarTime += gapSeconds();
        }
      }
    }
  }

  playBar(t, spb) {
    for (const e of planBar(this.track, this.trackBar)) {
      const at = t + e.beat * spb + (e.voice === 'piano' || e.voice === 'bell' || e.voice === 'pluck' ? (Math.random() - 0.5) * 0.03 : 0);
      const dur = e.beats * spb;
      switch (e.voice) {
        case 'piano': this.piano(midi(e.notes[0]), at, e.vel); break;
        case 'bell': this.bell(midi(e.notes[0]), at, e.vel); break;
        case 'pluck': this.pluck(midi(e.notes[0]), at, e.vel); break;
        case 'pad': this.pad(e.notes, at, dur); break;
        case 'strings': this.strings(e.notes, at, dur); break;
        case 'bass': this.bass(e.notes[0], at, dur); break;
        case 'drone': this.drone(e.notes[0], at, dur); break;
        default: break;
      }
    }
  }

  piano(freq, t, vel) {
    const ctx = this.ctx;
    const out = ctx.createGain();
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(freq * 9, 7000), t);
    lp.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.5, 400), t + 2.5);
    out.connect(lp);
    lp.connect(this.bus);
    lp.connect(this.delay);

    // additive partials with individual decay: bright attack that mellows out
    const partials = [[1, 1, 3.2], [2, 0.42, 1.8], [3, 0.2, 1.1], [4, 0.1, 0.7], [5.01, 0.05, 0.4]];
    for (const [mult, amp, dec] of partials) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq * mult;
      o.detune.value = (Math.random() - 0.5) * 6;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vel * amp, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dec * 1.6);
      o.connect(g);
      g.connect(out);
      o.start(t);
      o.stop(t + dec * 1.6 + 0.1);
    }
    // felt hammer thunk
    this.noiseHit(t, 0.03, 'lowpass', freq * 3, 1, vel * 0.5, this.bus);
  }

  // a music-box / glockenspiel: bright, inharmonic partials that ring and die away quickly
  bell(freq, t, vel) {
    const ctx = this.ctx;
    const out = ctx.createGain();
    out.connect(this.bus);
    out.connect(this.delay);
    for (const [mult, amp, dec] of [[1, 1, 2.6], [2.76, 0.32, 1.4], [5.4, 0.12, 0.8], [8.93, 0.05, 0.4]]) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq * 2 * mult; // sits an octave up: it is a high, glassy voice
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vel * amp * 0.8, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dec * 1.7);
      o.connect(g);
      g.connect(out);
      o.start(t);
      o.stop(t + dec * 1.7 + 0.1);
    }
  }

  // a soft plucked string: a triangle wave whose brightness dies away quickly
  pluck(freq, t, vel) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = freq;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(freq * 7, 6000), t);
    lp.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.2, 300), t + 0.7);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vel * 1.4, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    o.connect(lp);
    lp.connect(g);
    g.connect(this.bus);
    g.connect(this.delay);
    o.start(t);
    o.stop(t + 1.2);
  }

  // a soft chord of detuned triangle waves
  pad(notes, t, dur) {
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.05, t + dur * 0.4);
    g.gain.linearRampToValueAtTime(0, t + dur + 1.4);
    lp.connect(g);
    g.connect(this.bus);
    for (const n of notes) {
      for (const det of [-7, 7]) {
        const o = ctx.createOscillator();
        o.type = 'triangle';
        o.frequency.value = midi(n);
        o.detune.value = det;
        o.connect(lp);
        o.start(t);
        o.stop(t + dur + 1.5);
      }
    }
  }

  // a slower, fuller chord of detuned saw waves behind a low-pass: a string-section swell
  strings(notes, t, dur) {
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(500, t);
    lp.frequency.linearRampToValueAtTime(1300, t + dur * 0.6);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.034, t + dur * 0.55);
    g.gain.linearRampToValueAtTime(0, t + dur + 1.8);
    lp.connect(g);
    g.connect(this.bus);
    for (const n of notes) {
      for (const det of [-9, 0, 9]) {
        const o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = midi(n);
        o.detune.value = det;
        o.connect(lp);
        o.start(t);
        o.stop(t + dur + 1.9);
      }
    }
  }

  bass(rootNote, t, dur) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = midi(rootNote);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.16, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.bus);
    o.start(t);
    o.stop(t + dur + 0.1);
  }

  // a long low note with its fifth, swelling in and out
  drone(rootNote, t, dur) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.13, t + dur * 0.35);
    g.gain.linearRampToValueAtTime(0, t + dur);
    g.connect(this.bus);
    for (const [semi, wave] of [[0, 'sine'], [7, 'sine'], [12, 'triangle']]) {
      const o = ctx.createOscillator();
      o.type = wave;
      o.frequency.value = midi(rootNote + semi);
      o.connect(g);
      o.start(t);
      o.stop(t + dur + 0.1);
    }
  }

  // ---- sound effects ----------------------------------------------------------------------
  noiseHit(t, dur, type, freq, q, gain, dest = this.sfxBus) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(dest);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.05);
  }

  tone(t, f0, f1, dur, gain, type = 'sine') {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.sfxBus);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  // Block sounds are described in data/sounds.json: each material is a stack of layers (filtered noise and/or
  // swept tones) and each phase sets loudness and length.
  // kind: a material from sounds.json (a block's "sound")   phase: 'break' | 'place' | 'step' | 'tick'
  block(kind, phase) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const ph = SOUNDS.phases[phase] ?? SOUNDS.phases.break;
    const layers = SOUNDS.materials[kind] ?? SOUNDS.materials.default;
    const jitter = 0.85 + Math.random() * 0.3; // every hit is a little different
    for (const l of layers) {
      if (l.skipPhases?.includes(phase)) continue;
      const dur = l.seconds ?? ph.length * (l.lengthScale ?? 1);
      const j = l.jitter === false ? 1 : jitter;
      const start = t + (l.delayJitter ? Math.random() * l.delayJitter : 0);
      if (l.type === 'noise') this.noiseHit(start, dur, l.filter, l.freq * j, l.q, l.gain * ph.loud);
      else this.tone(start, l.from * j, l.to, dur, l.gain * ph.loud, l.wave ?? 'sine');
    }
  }

  // little rising pop when an item is picked up
  pickup() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const f = 520 + Math.random() * 260;
    this.tone(t, f, f * 2, 0.09, 0.14);
  }

  craft() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(t, 660, 660, 0.12, 0.12, 'triangle');
    this.tone(t + 0.07, 990, 990, 0.16, 0.12, 'triangle');
    this.noiseHit(t, 0.06, 'bandpass', 2400, 1.5, 0.15);
  }

  toolBreak() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noiseHit(t, 0.25, 'bandpass', 1400, 1, 0.5);
    this.tone(t, 300, 80, 0.3, 0.3, 'square');
  }

  // taking damage: a dull thump and a grunt-like burst
  hurt() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(t, 180, 60, 0.22, 0.45, 'triangle');
    this.noiseHit(t, 0.18, 'bandpass', 500, 0.9, 0.35);
  }

  // one crunchy bite
  eat() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noiseHit(t, 0.07, 'bandpass', 1500 + Math.random() * 600, 1.4, 0.45);
    this.noiseHit(t + 0.05, 0.05, 'highpass', 3200, 0.8, 0.18);
  }

  // a villager's "hmm": two short low notes
  villager() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, f = 150 + Math.random() * 40;
    this.tone(t, f, f * 1.15, 0.11, 0.2, 'triangle');
    this.tone(t + 0.14, f * 1.2, f * 0.95, 0.15, 0.18, 'triangle');
  }

  click() {
    if (!this.ctx) return;
    this.tone(this.ctx.currentTime, 900, 700, 0.04, 0.08, 'square');
  }

  splash() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noiseHit(t, 0.5, 'bandpass', 1200, 0.6, 0.5);
    this.noiseHit(t + 0.05, 0.4, 'highpass', 3000, 0.5, 0.2);
  }
}
