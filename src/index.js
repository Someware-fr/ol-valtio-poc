import 'ol/ol.css';

import initMap from './map';
import { zoomInControl, zoomOutControl, displayZoomControl } from './zoom';
import { setCenterToMyPlaceControl, displayCenterControl } from './center';
import { layersControl } from './layers';

initMap(document.getElementById('map'));

zoomInControl(document.getElementById('zoom-in'));
zoomOutControl(document.getElementById('zoom-out'));

setCenterToMyPlaceControl(document.getElementById('center-to-my-place'));

displayZoomControl(document.getElementById('display-zoom'));
displayCenterControl(document.getElementById('display-center'));

layersControl(document.getElementById('layers'));
