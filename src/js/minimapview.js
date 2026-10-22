// Draws the minimap into its canvas: a circular, compass-style window onto the terrain around the player.
// North is always up. The picture scrolls smoothly as the player moves and an arrow shows which way they face.

const SIZE = 196;        // canvas size in px
const C = SIZE / 2;      // centre
const MAP_R = 80;        // radius of the map circle in px
const SCALE = 3;         // px per block

export class MinimapView {
  constructor(canvas, data, radiusBlocks = 28) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.data = data;
    this.R = radiusBlocks;                       // blocks kept in the off-screen picture (must cover MAP_R / SCALE)
    this.N = 2 * radiusBlocks + 1;
    this.off = document.createElement('canvas'); // one pixel per block, scaled up when drawn
    this.off.width = this.off.height = this.N;
    this.offCtx = this.off.getContext('2d');
    this.cx = NaN;
    this.cz = NaN;
    this.lastBuild = 0;
  }

  // Rebuild the block-per-pixel picture when the player has stepped to another block, or every half second
  // (so digging, growing crops and flowing water show up).
  refresh(cx, cz, now) {
    if (cx === this.cx && cz === this.cz && now - this.lastBuild < 500) return;
    this.cx = cx;
    this.cz = cz;
    this.lastBuild = now;
    this.offCtx.putImageData(new ImageData(this.data.render(cx, cz, this.R), this.N, this.N), 0, 0);
  }

  draw(px, pz, yaw, now) {
    const ctx = this.ctx;
    this.refresh(Math.floor(px), Math.floor(pz), now);
    ctx.clearRect(0, 0, SIZE, SIZE);

    // the map itself, clipped to a circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(C, C, MAP_R, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = '#0c0f13'; // anything not loaded yet
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.off, C + (this.cx - this.R - px) * SCALE, C + (this.cz - this.R - pz) * SCALE, this.N * SCALE, this.N * SCALE);
    const vignette = ctx.createRadialGradient(C, C, MAP_R * 0.62, C, C, MAP_R);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.38)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.restore();

    // the outline: a dark ring with a light bevel inside it
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#14141a';
    ctx.beginPath(); ctx.arc(C, C, MAP_R + 2.5, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#a4a4b0';
    ctx.beginPath(); ctx.arc(C, C, MAP_R + 0.5, 0, Math.PI * 2); ctx.stroke();

    // compass marks: small diamonds on the diagonals, letters on the main directions
    ctx.fillStyle = '#c8c8d2';
    for (let k = 0; k < 8; k++) {
      const a = (k * Math.PI) / 4, r = MAP_R + 5;
      if (k % 2) { ctx.beginPath(); ctx.arc(C + Math.sin(a) * r, C - Math.cos(a) * r, 1.8, 0, Math.PI * 2); ctx.fill(); }
    }
    ctx.font = 'bold 12px Consolas, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000';
    [['N', 0, '#ff6a5a'], ['E', 1, '#f0f0f8'], ['S', 2, '#f0f0f8'], ['W', 3, '#f0f0f8']].forEach(([ch, q, color]) => {
      const a = (q * Math.PI) / 2, r = MAP_R + 11;
      const x = C + Math.sin(a) * r, y = C - Math.cos(a) * r;
      ctx.strokeText(ch, x, y);
      ctx.fillStyle = color;
      ctx.fillText(ch, x, y);
    });

    // the player: an arrow pointing the way they are facing (yaw 0 faces north, turning left rotates it anticlockwise)
    ctx.save();
    ctx.translate(C, C);
    ctx.rotate(-yaw);
    ctx.beginPath();
    ctx.moveTo(0, -9); ctx.lineTo(6, 7); ctx.lineTo(0, 3); ctx.lineTo(-6, 7); ctx.closePath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();
  }
}
