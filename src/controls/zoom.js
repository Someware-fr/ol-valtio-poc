import { state, subscribeKey } from '../state';


export function displayZoomControl(target) {
  const display = (zoom) => target.textContent = JSON.stringify(zoom);
  subscribeKey(state.map, 'zoom', display);
  display(state.map.zoom);
}

export function zoomInControl(target) {
  target.addEventListener("click", () => zoomByDelta(1));
}

export function zoomOutControl(target) {
  target.addEventListener("click", () => zoomByDelta(-1));
}

function zoomByDelta(delta) {
  state.map.zoom = state.map.zoom + delta;
}

