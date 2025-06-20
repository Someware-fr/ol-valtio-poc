
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import OSM from 'ol/source/OSM.js';



export default {
  osm: new TileLayer({
    source: new OSM(),
  }),
  plan_ign: new TileLayer({
    source: new XYZ({
      url: 'https://data.geopf.fr/wmts?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&STYLE=normal&TILEMATRIX={z}&TILEMATRIXSET=PM&TILEROW={y}&TILECOL={x}&FORMAT=image/png&TRANSPARENT=true',
      attributions: '© IGN',
    }),
  }),
  ortho: new TileLayer({
    source: new XYZ({
      url: 'https://data.geopf.fr/wmts?&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=HR.ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIX={z}&TILEMATRIXSET=PM&TILEROW={y}&TILECOL={x}&FORMAT=image/jpeg&TRANSPARENT=true',
      attributions: '© IGN',
    }),
  }),
};
