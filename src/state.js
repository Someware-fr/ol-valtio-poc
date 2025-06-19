import { proxy, snapshot, subscribe } from 'valtio/vanilla';
import { subscribeKey } from 'valtio/vanilla/utils';

const state = proxy({
  map: {
    zoom: 4,
    center: [0,0],
  },
  layers: [
    {
      name: 'OpenStreetMap',
      key: 'osm',
      visible: true,
    },
    {
      name: 'Plan IGN',
      key: 'plan_ign',
      visible: false,
    },
    {
      name: 'Ortho IGN',
      key: 'ortho',
      visible: false,
      opacity: 0.5,
    },
  ],
});

export { state, snapshot, subscribe, subscribeKey };
