import { state, subscribe } from '../state';



export function layersControl(target) {
  state.layers.forEach((config) => {
    createLayerRow(target, config);
  });
  
  syncState(target, state.layers);

  subscribe(state.layers, () => {
    syncState(target, state.layers);
  });
}


function createLayerRow(target, config) {

  const row = document.createElement('li');

  const label = document.createElement('label');
  label.appendChild(
    document.createTextNode(config.name)
  );

  const visibilityCheck = document.createElement('input');
  visibilityCheck.type = "checkbox";
  visibilityCheck.name =  `layer-${config.key}-visible`;
  visibilityCheck.checked = config.visible ?? true;
  visibilityCheck.addEventListener('change', (evt) => {
    config.visible = evt.target.checked;
  });

  label.appendChild(visibilityCheck);

  row.appendChild(label);

  const opacityInput = document.createElement('input');
  opacityInput.type = 'range';
  opacityInput.name = `layer-${config.key}-opacity`;
  opacityInput.min = 0;
  opacityInput.max = 1;
  opacityInput.step = 0.1;
  opacityInput.value = config.opacity ?? 1;
  opacityInput.addEventListener('input', (evt) => {
    config.opacity = Number(evt.target.value);
  });

  row.appendChild(opacityInput);

  target.appendChild(row);
}


function syncState(target, stateLayers) {
  stateLayers.forEach((config) => {
    const opacityInput = document.getElementsByName(`layer-${config.key}-opacity`)[0];
    if (opacityInput) {
      opacityInput.disabled = !(config.visible ?? true);
    }
  });
}
