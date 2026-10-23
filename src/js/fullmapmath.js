// The numbers behind the full-screen map (no DOM, so it can be tested in Node).

export const MIN_ZOOM = 1;   // px per block
export const MAX_ZOOM = 16;
export const MAX_RADIUS = 300; // blocks kept in the picture: caps the work when zoomed far out

export const clampZoom = (z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number.isFinite(z) ? z : 3));

// How many blocks from the middle the picture must reach to cover a w x h screen at this zoom (with some spare to pan into)
export function viewRadius(w, h, zoom) {
  return Math.min(MAX_RADIUS, Math.ceil(Math.max(w, h) / (2 * zoom)) + 48);
}

// Zoom to `next` keeping the world point under the screen position (dx, dy px from the screen middle) in place.
// view = { zoom, cx, cz } (cx, cz: the world point at the screen middle). Returns the new view.
export function zoomAbout(view, next, dx, dy) {
  const zoom = clampZoom(next);
  const wx = view.cx + dx / view.zoom, wz = view.cz + dy / view.zoom; // the point under the finger
  return { zoom, cx: wx - dx / zoom, cz: wz - dy / zoom };
}
