// Player physics (AABB vs voxels) and voxel raycasting. No rendering code.
import { B, SOLID, PLANT, PLANT_H, PLANT_HALF, IS_WATER } from './blocks.js';

const HW = 0.3;        // half width
const HEIGHT = 1.8;
const CROUCH_HEIGHT = 1.5;
export const EYE = 1.62;
const CROUCH_EYE = 1.27;
const CROUCH_SPEED = 0.35; // fraction of walking speed while crouching
const EPS = 1e-4;
const GRAVITY = 30;
const JUMP = 9.2;
const TERMINAL = 40;

export class Player {
  constructor(world) {
    this.world = world;
    this.pos = { x: 0, y: 40, z: 0 };   // feet
    this.vel = { x: 0, y: 0, z: 0 };
    this.yaw = 0;
    this.pitch = 0;
    this.onGround = false;
    this.flying = false;
    this.inWater = false;
    this.headInWater = false;
    this.stepDist = 0;
    this.speedMul = 1; // e.g. slowed while starving
    this.events = { step: null, splash: null, land: null, fall: null, jump: null };
    this.fallPeak = null;   // highest point of the current fall (set on the first update)
    this.stepSmooth = 0;    // how far the camera still lags behind after an automatic step up (eases to 0)
    this.canStep = false;   // step-assist is only allowed while walking on the ground
    this.crouching = false; // lower and slow, and you cannot walk off an edge
    this.height = HEIGHT;
    this.eyeHeight = EYE;   // eases between standing and crouching eye height
  }

  // Unloaded chunks count as solid so the player can never fall out of the world
  solidAt(x, y, z) {
    if (y < 0) return true;
    if (!this.world.isLoaded(x, z)) return true;
    return SOLID[this.world.getBlock(x, y, z)] === 1;
  }

  collides(x, y, z, height = this.height) {
    const x0 = Math.floor(x - HW + 1e-5), x1 = Math.floor(x + HW - 1e-5);
    const y0 = Math.floor(y + 1e-5), y1 = Math.floor(y + height - 1e-5);
    const z0 = Math.floor(z - HW + 1e-5), z1 = Math.floor(z + HW - 1e-5);
    for (let by = y0; by <= y1; by++)
      for (let bz = z0; bz <= z1; bz++)
        for (let bx = x0; bx <= x1; bx++)
          if (this.solidAt(bx, by, bz)) return true;
    return false;
  }

  // Is there solid ground under any part of the feet at this position? (crouching stops you walking off edges)
  supported(x, y, z) {
    const by = Math.floor(y - 0.05);
    for (const dz of [-HW, HW]) for (const dx of [-HW, HW]) if (this.solidAt(Math.floor(x + dx), by, Math.floor(z + dz))) return true;
    return false;
  }

  intersectsBlock(bx, by, bz) {
    const p = this.pos;
    return p.x + HW > bx && p.x - HW < bx + 1 && p.y + this.height > by && p.y < by + 1 && p.z + HW > bz && p.z - HW < bz + 1;
  }

  // Move along one axis in small steps; on impact snap flush against the block.
  moveAxis(axis, delta) {
    if (delta === 0) return false;
    const p = this.pos;
    const steps = Math.ceil(Math.abs(delta) / 0.2);
    const step = delta / steps;
    for (let i = 0; i < steps; i++) {
      p[axis] += step;
      if (!this.collides(p.x, p.y, p.z)) continue;
      // Step-assist: walking into a block that is one level high (with headroom above it) just climbs it
      if (this.canStep && axis !== 'y') {
        const up = Math.floor(p.y + EPS) + 1 + EPS;
        if (up - p.y <= 1.0 + 2 * EPS && !this.collides(p.x, up, p.z)) {
          this.stepSmooth += up - p.y;
          p.y = up;
          continue;
        }
      }
      if (axis === 'x') p.x = step > 0 ? Math.floor(p.x + HW) - HW - EPS : Math.floor(p.x - HW) + 1 + HW + EPS;
      else if (axis === 'z') p.z = step > 0 ? Math.floor(p.z + HW) - HW - EPS : Math.floor(p.z - HW) + 1 + HW + EPS;
      else p.y = step > 0 ? Math.floor(p.y + this.height) - this.height - EPS : Math.floor(p.y) + 1 + EPS;
      this.vel[axis] = 0;
      return true;
    }
    return false;
  }

  update(dt, input) {
    dt = Math.min(dt, 0.05);
    const p = this.pos, v = this.vel;
    const wasOnGround = this.onGround;
    if (this.fallPeak === null || wasOnGround || this.inWater || this.flying) this.fallPeak = p.y;

    const feetBlock = this.world.getBlock(Math.floor(p.x), Math.floor(p.y + 0.3), Math.floor(p.z));
    const wasInWater = this.inWater;
    this.inWater = IS_WATER[feetBlock] === 1;
    this.headInWater = IS_WATER[this.world.getBlock(Math.floor(p.x), Math.floor(p.y + 1.62), Math.floor(p.z))] === 1;
    if (this.inWater && !wasInWater && v.y < -3) this.events.splash?.();

    // crouch: lower the body; standing back up needs headroom
    const wantCrouch = !!input.crouch && !this.flying && !this.inWater;
    if (wantCrouch) { this.crouching = true; this.height = CROUCH_HEIGHT; }
    else if (this.crouching && !this.collides(p.x, p.y, p.z, HEIGHT)) { this.crouching = false; this.height = HEIGHT; }
    this.eyeHeight += ((this.crouching ? CROUCH_EYE : EYE) - this.eyeHeight) * Math.min(1, 16 * dt);

    // desired horizontal direction
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    let mx = 0, mz = 0;
    if (input.forward) { mx -= sin; mz -= cos; }
    if (input.back) { mx += sin; mz += cos; }
    if (input.left) { mx -= cos; mz += sin; }
    if (input.right) { mx += cos; mz -= sin; }
    const len = Math.hypot(mx, mz);
    if (len > 0) { mx /= len; mz /= len; }

    let speed = input.sprint && !this.crouching ? 6.4 : 4.4;
    if (this.crouching) speed *= CROUCH_SPEED;
    if (this.flying) speed = input.sprint ? 22 : 11;
    else if (this.inWater) speed *= 0.55;
    speed *= this.speedMul;

    const accel = this.flying ? 14 : this.onGround ? 46 : this.inWater ? 14 : 12;
    const k = Math.min(1, accel * dt);
    v.x += (mx * speed - v.x) * k;
    v.z += (mz * speed - v.z) * k;

    if (this.flying) {
      const target = (input.jump ? 1 : 0) - (input.down ? 1 : 0);
      v.y += (target * (input.sprint ? 14 : 8) - v.y) * Math.min(1, 10 * dt);
    } else if (this.inWater) {
      v.y -= 8 * dt;
      v.y *= 1 - Math.min(1, 3 * dt);
      if (input.jump) v.y += (3.6 - v.y) * Math.min(1, 8 * dt);
    } else {
      v.y = Math.max(v.y - GRAVITY * dt, -TERMINAL);
      if (input.jump && this.onGround) {
        v.y = JUMP;
        this.onGround = false;
        this.events.jump?.(!!input.sprint && !this.crouching);
      }
    }

    const impactSpeed = v.y;
    this.canStep = this.onGround && !this.flying && !this.inWater && v.y <= 0.01 && len > 0;
    const edgeSafe = this.crouching && this.onGround && !this.flying; // crouching on the ground: do not step off the edge
    const x0 = p.x, z0 = p.z;
    const bumpedX = this.moveAxis('x', v.x * dt);
    if (edgeSafe && !this.supported(p.x, p.y, p.z)) { p.x = x0; v.x = 0; }
    const bumpedZ = this.moveAxis('z', v.z * dt);
    if (edgeSafe && !this.supported(p.x, p.y, p.z)) { p.z = z0; v.z = 0; }
    // Swimming into a bank and holding jump hops you out of the water onto it (a block or so above you)
    if (this.inWater && input.jump && (bumpedX || bumpedZ) && len > 0) {
      for (const up of [Math.floor(p.y) + 1, Math.floor(p.y) + 2]) {
        if (up - p.y > 1.45) break;
        if (!this.collides(p.x + mx * 0.4, up + EPS, p.z + mz * 0.4)) { v.y = Math.max(v.y, Math.sqrt(2 * GRAVITY * (up - p.y + 0.3))); break; }
      }
    }
    const hitY = this.moveAxis('y', v.y * dt);
    this.onGround = hitY && impactSpeed < 0;
    if (this.flying && this.onGround) this.flying = false;
    if (!this.onGround) this.fallPeak = Math.max(this.fallPeak, p.y);
    if (this.onGround && !wasOnGround) {
      if (impactSpeed < -7) this.events.land?.(impactSpeed);
      const wet = this.inWater || IS_WATER[this.world.getBlock(Math.floor(p.x), Math.floor(p.y + 0.3), Math.floor(p.z))] === 1;
      const dist = this.fallPeak - p.y;
      if (!this.flying && !wet && dist > 0.5) this.events.fall?.(dist, impactSpeed); // water breaks a fall
      this.fallPeak = p.y;
    }
    this.stepSmooth = this.stepSmooth < 0.001 ? 0 : this.stepSmooth * Math.exp(-12 * dt);

    // footsteps
    if (this.onGround && !this.flying && len > 0) {
      this.stepDist += Math.hypot(v.x, v.z) * dt;
      if (this.stepDist > (input.sprint && !this.crouching ? 2.2 : 1.7) && !this.crouching) {
        this.stepDist = 0;
        this.events.step?.();
      }
    }
  }

  get eye() {
    return { x: this.pos.x, y: this.pos.y + this.eyeHeight - this.stepSmooth, z: this.pos.z };
  }
}

// Ray vs a plant's small selection box (so you can aim at the soil between tufts of grass).
function rayPlant(o, d, x, y, z, h, half) {
  const lo = [x + 0.5 - half, y, z + 0.5 - half], hi = [x + 0.5 + half, y + h, z + 0.5 + half];
  const oo = [o.x, o.y, o.z], dd = [d.x, d.y, d.z];
  let tmin = -Infinity, tmax = Infinity, axis = -1, sign = 0;
  for (let i = 0; i < 3; i++) {
    if (Math.abs(dd[i]) < 1e-9) {
      if (oo[i] < lo[i] || oo[i] > hi[i]) return null;
      continue;
    }
    const t1 = (lo[i] - oo[i]) / dd[i], t2 = (hi[i] - oo[i]) / dd[i];
    const near = Math.min(t1, t2), far = Math.max(t1, t2);
    if (near > tmin) { tmin = near; axis = i; sign = dd[i] > 0 ? -1 : 1; }
    if (far < tmax) tmax = far;
    if (tmin > tmax) return null;
  }
  if (tmax < 0) return null;
  return { t: tmin, axis, sign };
}

// Amanatides & Woo voxel traversal. Returns the first solid block and the face we entered through.
export function raycast(world, o, d, maxDist = 6) {
  let x = Math.floor(o.x), y = Math.floor(o.y), z = Math.floor(o.z);
  const sx = Math.sign(d.x), sy = Math.sign(d.y), sz = Math.sign(d.z);
  const tdx = d.x !== 0 ? Math.abs(1 / d.x) : Infinity;
  const tdy = d.y !== 0 ? Math.abs(1 / d.y) : Infinity;
  const tdz = d.z !== 0 ? Math.abs(1 / d.z) : Infinity;
  let tx = d.x !== 0 ? (sx > 0 ? x + 1 - o.x : o.x - x) * tdx : Infinity;
  let ty = d.y !== 0 ? (sy > 0 ? y + 1 - o.y : o.y - y) * tdy : Infinity;
  let tz = d.z !== 0 ? (sz > 0 ? z + 1 - o.z : o.z - z) * tdz : Infinity;
  let nx = 0, ny = 0, nz = 0, t = 0;

  while (t <= maxDist) {
    const id = world.getBlock(x, y, z);
    if (SOLID[id]) return { x, y, z, nx, ny, nz, id };
    if (PLANT[id]) {
      const p = rayPlant(o, d, x, y, z, PLANT_H[id], PLANT_HALF[id]);
      if (p && p.t <= maxDist) {
        const n = p.t < 0 || p.axis < 0 ? [0, 0, 0] : [p.axis === 0 ? p.sign : 0, p.axis === 1 ? p.sign : 0, p.axis === 2 ? p.sign : 0];
        return { x, y, z, nx: n[0], ny: n[1], nz: n[2], id };
      }
    }
    if (tx < ty && tx < tz) { x += sx; t = tx; tx += tdx; nx = -sx; ny = 0; nz = 0; }
    else if (ty < tz) { y += sy; t = ty; ty += tdy; nx = 0; ny = -sy; nz = 0; }
    else { z += sz; t = tz; tz += tdz; nx = 0; ny = 0; nz = -sz; }
  }
  return null;
}
