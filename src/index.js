import 'ol/ol.css';

import initMap from './map';
import { zoomInControl, zoomOutControl, displayZoomControl } from './controls/zoom';
import { setCenterToMyPlaceControl, displayCenterControl } from './controls/center';
import { layersControl } from './controls/layers';

initMap(document.getElementById('map'));

zoomInControl(document.getElementById('zoom-in'));
zoomOutControl(document.getElementById('zoom-out'));

setCenterToMyPlaceControl(document.getElementById('center-to-my-place'));

displayZoomControl(document.getElementById('display-zoom'));
displayCenterControl(document.getElementById('display-center'));

layersControl(document.getElementById('layers'));
