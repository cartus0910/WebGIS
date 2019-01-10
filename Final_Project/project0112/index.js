/*proj4.defs("EPSG:3824","+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs");
proj4.defs('urn:ogc:def:crs:EPSG::3824',      proj4.defs('EPSG:3824'));*/

var view = new ol.View({
  center: ol.proj.fromLonLat([121, 23.5]),
  // minZoom: 7.2,
  zoom: 7.5
})

var raster = new ol.layer.Tile({
  source: new ol.source.XYZ({
    crossOrigin: 'anonymous',
    url: 'https://mt{0-3}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
  }),
})

var vector = new ol.layer.Vector({
  renderMode: 'image',
  source: new ol.source.Vector({
    url: 'https://raw.githubusercontent.com/Bourbon0212/Diana-Visualization/master/assets/twCounty.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#c7daf3',
      width: 1
    }),
  }),
})


var vectorSource = new ol.source.Vector({
});
var villLayer = new ol.layer.Vector({
  source: vectorSource
});


//generate map
var map = new ol.Map({
  target: 'map',
  layers: [raster, vector,villLayer],
  // stop zooming with scroll
  view: view
});

//---------------------------------------------
$(function() {

  // Failed to connect
  if (navigator.onLine) {
    console.log('online');
  } else {
    console.log('offline');
    var network = document.getElementById("network");
    network.style.visibility = 'visible';
  }
})
