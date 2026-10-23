// The full-screen map: opens when the minimap is tapped (or with the map key). The terrain you have seen is drawn flat from above,
// north up, with an arrow for you. Drag to move around, scroll or pinch to zoom; unexplored ground stays dark.
import { clampZoom, zoomAbout, viewRadius } from './fullmapmath.js';

const $ = (id) => document.getElementById(id);

export function createFullMap({ data, getPlayer, onClose }) {
  const root = $('fullmap'), canvas = $('fullmap-canvas'), ctx = canvas.getContext('2d');
  const posEl = $('fullmap-pos');
  const off = document.createElement('canvas');   // one pixel per block, scaled up when drawn
  const offCtx = off.getContext('2d');
  let open = false;
  let zoom = 3;                                   // px per block
  let cx = 0, cz = 0;                             // world point at the middle of the screen
  let built = null;                               // { x, z, R }: what the off-screen picture covers
  let builtAt = 0;
  let raf = 0;

  const size = () => { // draw at the screen's size (not the device's: it is a map of blocks, a crisp pixel is not needed)
    const w = Math.max(1, Math.floor(window.innerWidth)), h = Math.max(1, Math.floor(window.innerHeight));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; built = null; }
    return { w, h };
  };

  // (Re)build the block-per-pixel picture when it no longer covers the screen, or every couple of seconds (water, digging)
  function rebuild(w, h, now) {
    const R = viewRadius(w, h, zoom);
    const fresh = built && built.R === R && Math.abs(built.x - cx) < 40 && Math.abs(built.z - cz) < 40 && now - builtAt < 2000;
    if (fresh) return;
    const bx = Math.round(cx), bz = Math.round(cz);
    const N = 2 * R + 1;
    off.width = off.height = N;
    offCtx.putImageData(new ImageData(data.render(bx, bz, R), N, N), 0, 0);
    built = { x: bx, z: bz, R };
    builtAt = now;
  }

  function draw(now) {
    if (!open) return;
    raf = requestAnimationFrame(draw);
    const { w, h } = size();
    rebuild(w, h, now);
    ctx.fillStyle = '#0c0f13';
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = false;
    const left = w / 2 + (built.x - built.R - cx) * zoom, top = h / 2 + (built.z - built.R - cz) * zoom;
    ctx.drawImage(off, left, top, (2 * built.R + 1) * zoom, (2 * built.R + 1) * zoom);

    // you: an arrow facing the way you look (yaw 0 faces north)
    const p = getPlayer();
    const sx = w / 2 + (p.x - cx) * zoom, sz = h / 2 + (p.z - cz) * zoom;
    ctx.save();
    ctx.translate(sx, sz);
    ctx.rotate(-p.yaw);
    ctx.beginPath();
    ctx.moveTo(0, -12); ctx.lineTo(8, 9); ctx.lineTo(0, 4); ctx.lineTo(-8, 9); ctx.closePath();
    ctx.lineWidth = 3; ctx.strokeStyle = '#000'; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.fill();
    ctx.restore();

    // north marker
    ctx.font = 'bold 18px Consolas, monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineWidth = 4; ctx.strokeStyle = '#000'; ctx.strokeText('N', w - 28, 90); ctx.fillStyle = '#ff6a5a'; ctx.fillText('N', w - 28, 90);

    posEl.textContent = `You: ${Math.floor(p.x)}, ${Math.floor(p.z)}   Zoom ${Math.round(zoom * 100 / 3)}%`;
  }

  // ---- looking around: drag to pan, wheel or pinch to zoom ----
  const pointers = new Map();
  let pinch = 0;
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    canvas.classList.add('drag');
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinch = Math.hypot(a.x - b.x, a.y - b.y); }
  });
  canvas.addEventListener('pointermove', (e) => {
    const was = pointers.get(e.pointerId);
    if (!was) return;
    const now = { x: e.clientX, y: e.clientY };
    pointers.set(e.pointerId, now);
    if (pointers.size === 1) { cx -= (now.x - was.x) / zoom; cz -= (now.y - was.y) / zoom; }
    else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch > 0 && d > 0) applyZoom(zoom * d / pinch, (a.x + b.x) / 2, (a.y + b.y) / 2);
      pinch = d;
    }
  });
  const lift = (e) => { pointers.delete(e.pointerId); pinch = 0; if (!pointers.size) canvas.classList.remove('drag'); };
  canvas.addEventListener('pointerup', lift);
  canvas.addEventListener('pointercancel', lift);
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); applyZoom(zoom * (e.deltaY < 0 ? 1.2 : 1 / 1.2), e.clientX, e.clientY); }, { passive: false });

  // zoom keeping the point under (px, py) where it is
  function applyZoom(next, px, py) {
    const r = zoomAbout({ zoom, cx, cz }, next, px - window.innerWidth / 2, py - window.innerHeight / 2);
    zoom = r.zoom; cx = r.cx; cz = r.cz;
  }
  const centreZoom = (f) => applyZoom(zoom * f, window.innerWidth / 2, window.innerHeight / 2);
  $('fm-in').addEventListener('click', () => centreZoom(1.5));
  $('fm-out').addEventListener('click', () => centreZoom(1 / 1.5));
  $('fm-here').addEventListener('click', () => { const p = getPlayer(); cx = p.x; cz = p.z; });
  $('fm-close').addEventListener('click', () => onClose());

  return {
    get isOpen() { return open; },
    open() {
      if (open) return;
      open = true;
      const p = getPlayer();
      cx = p.x; cz = p.z; zoom = clampZoom(zoom); built = null;
      root.hidden = false;
      raf = requestAnimationFrame(draw);
    },
    close() {
      open = false;
      pointers.clear();
      cancelAnimationFrame(raf);
      root.hidden = true;
    },
  };
}
