// Block-breaking timing and the crack-overlay pattern. Pure logic (no DOM / three.js) so it can be unit-tested.
import { mulberry32 } from './noise.js';

export const CRACK_STAGES = 10;
export const BREAK_COOLDOWN = 0.15; // pause between one block breaking and the next one starting to crack

// Which of the 10 crack frames to show for a progress value in [0, 1). Every stage lasts exactly 10% of the break.
export const crackStage = (progress) => Math.max(0, Math.min(CRACK_STAGES - 1, Math.floor(progress * CRACK_STAGES)));

// Tracks how far through breaking the targeted block we are.
// time is the exact number of seconds the break takes; the block breaks on the very frame that time has elapsed.
export class BreakTimer {
  constructor() {
    this.cooldown = 0;
    this.reset();
  }

  reset() {
    this.key = null;
    this.progress = 0;
  }

  // Not mining this frame: only the post-break cooldown runs down.
  idle(dt) {
    this.cooldown = Math.max(0, this.cooldown - dt);
  }

  // Mining this frame. Returns true if the block should break now.
  tick(dt, key, time) {
    if (key !== this.key) {
      this.key = key;
      this.progress = 0;
    }
    if (this.cooldown > 0) { // leftover time after the cooldown still counts, so no time is lost
      const used = Math.min(dt, this.cooldown);
      this.cooldown -= used;
      dt -= used;
    }
    if (dt <= 0) return false;
    this.progress += dt / Math.max(time, 0.02);
    if (this.progress >= 1) {
      this.reset();
      this.cooldown = BREAK_COOLDOWN;
      return true;
    }
    return false;
  }

  get stage() {
    return crackStage(this.progress);
  }
}

// The crack pattern: jagged arms spreading from the centre of a 16x16 tile. Arms advance by the same
// distance every stage, so the cracks keep visibly growing right up to the final stage instead of
// running out of room halfway. Returns CRACK_STAGES arrays; entry s holds every pixel visible at stage s.
export function crackPixels(size = 16, seed = 4242) {
  const rand = mulberry32(seed);
  const centre = (size - 1) / 2;
  const reach = size * 0.6;                // distance the arms travel by the last stage (past the tile edge)
  const perStage = reach / CRACK_STAGES;
  const arms = Array.from({ length: 8 }, (_, i) => ({
    x: centre + (rand() - 0.5) * 2, y: centre + (rand() - 0.5) * 2,
    a: (i / 8) * Math.PI * 2 + (rand() - 0.5) * 0.5,
    fork: i % 2 === 0 ? 2 + Math.floor(rand() * 3) : 4 + Math.floor(rand() * 3), // every arm splits once, at different times
    life: 1,
  }));
  const stages = [];
  const seen = new Set();
  const all = [];
  for (let s = 0; s < CRACK_STAGES; s++) {
    for (const arm of arms.slice()) {
      const sub = 3; // small sub-steps so the line has no gaps
      for (let k = 0; k < sub; k++) {
        arm.a += (rand() - 0.5) * 0.5;
        arm.x += (Math.cos(arm.a) * perStage * arm.life) / sub;
        arm.y += (Math.sin(arm.a) * perStage * arm.life) / sub;
        const px = Math.round(arm.x), py = Math.round(arm.y);
        const key = px + ',' + py;
        if (px >= 0 && py >= 0 && px < size && py < size && !seen.has(key)) {
          seen.add(key);
          all.push([px, py]);
        }
      }
      if (arm.fork === s) arms.push({ x: arm.x, y: arm.y, a: arm.a + (rand() < 0.5 ? 1 : -1) * 0.9, fork: -1, life: 0.85 });
    }
    stages.push(all.slice());
  }
  return stages;
}
