

function draw() {
  //console.log("123");
  var vSource1 = new ol.source.Vector({
    url: 'https://raw.githubusercontent.com/Bourbon0212/Diana-Visualization/master/assets/twCounty.geojson',
    format: new ol.format.GeoJSON()
  });

  var features = vSource1.getFeatures();

  //console.log(features);

}
