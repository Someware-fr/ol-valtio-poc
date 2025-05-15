import { proxy, snapshot, subscribe } from 'valtio/vanilla';
import { subscribeKey } from 'valtio/vanilla/utils';

const state = proxy({
  map: {
    zoom: 4,
    center: [0,0],
  }
});

export { state, snapshot, subscribe, subscribeKey };
