import Map from 'ol/Map.js';
import View from 'ol/View.js';

import baseLayers from './baseLayers';
import { state, subscribeKey, subscribe, snapshot } from './state';

import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

function syncLayers(stateLayers, olLayers) {
  stateLayers.forEach((config) => {
    const olLayer = baseLayers[config.key];
    if (olLayer) {
      olLayer.setVisible(config.visible ?? true);
      olLayer.setOpacity(config.opacity ?? 1);
    }
  });
}

export default function initMap(target) {

  const map = new Map({
    layers: state.layers.map((config) => (
      baseLayers[config.key]
    )).filter((olLayer) => !!olLayer),
    view: new View({
      center: state.map.center,
      zoom: state.map.zoom,
    }),
    target,
  });

  syncLayers(state.layers, baseLayers);

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

  subscribe(state.layers, () => {
    syncLayers(state.layers, baseLayers);
  });
}

