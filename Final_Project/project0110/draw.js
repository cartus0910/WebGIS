getStyle = function (feature, resolution) {
    if (feature.get('COUNTYSN') > 50000000) {
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

var my_layer = new ol.layer.Vector({
    source:new ol.source.Vector({
    url: 'https://raw.githubusercontent.com/Bourbon0212/Diana-Visualization/master/assets/twCounty.geojson',
    format: new ol.format.GeoJSON()
  }),
    style: function (feature, resolution) {
        return getStyle(feature, resolution);
    }
});