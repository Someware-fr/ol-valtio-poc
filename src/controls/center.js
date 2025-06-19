import { state, subscribeKey } from '../state';


const MY_PLACE = {
  zoom: 19,
  center: [542090.5203593693, 5743499.719250314],
};


export function displayCenterControl(target) {
  const display = (center) => target.textContent = JSON.stringify(center);
  subscribeKey(state.map, 'center', display);
  display(state.map.center);
}


export function setCenterToMyPlaceControl(target) {
  target.addEventListener("click", () => {
    state.map.zoom = MY_PLACE.zoom;
    state.map.center = MY_PLACE.center;
  });
}
