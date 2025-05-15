import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

import { state, subscribeKey, subscribe, snapshot } from './state';

export default function initMap(target) {

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target,
    view: new View({
      center: [0, 0],
      zoom: state.map.zoom,
    }),
  });

  const view = map.getView();

  view.on('change:resolution', () => {
    state.map.zoom = view.getZoom();
  });

  view.on('change:center', () => {
    state.map.center = view.getCenter();
  });

  subscribe(state.map, () => {
    const { zoom, center } = state.map;
    if (
      view.getZoom() != zoom ||
      (view.getCenter()[0] != center[0] && view.getCenter()[1] != center[1])
    ) {
      console.log('map changed', snapshot(state.map));
      view.animate({
        zoom, center,
        duration: 250,
      });
    }
  });
}

