proj4.defs("EPSG:3824","+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs");
proj4.defs('urn:ogc:def:crs:EPSG::3824',      proj4.defs('EPSG:3824'));

getStyle = function (feature, resolution) {
    if (feature.get('COUNTYCODE') > 50000) {
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: [255, 0, 0, 0.5] // semi-transparent red
            })
        });
    }
    // else if ...
    else {
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: [255, 255, 0, 0.5] // semi-transparent yellow
            })
        });
    }
};
/*
var my_layer = new ol.layer.Vector({
    source:new ol.source.Vector({
    url: 'https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified.geojson',
    format: new ol.format.GeoJSON()
  }),
    style: function (feature, resolution) {
        return getStyle(feature, resolution);
    }
});

console.log(my_layer);*/