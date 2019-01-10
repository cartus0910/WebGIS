

var villVisualCheck;
function villVisual(items) {
  
  if(villVisualCheck == 1){
    map.removeLayer(villLayer);
  }
  // console.log(items);
  villVisualCheck = 0;
  var count = 0;
  var new_items = {"type": "FeatureCollection", "name": "TW_Vill_simplified", "crs": {"properties":{"name": "urn:ogc:def:crs:EPSG::3824"}, "type": "name"}, "features":{}};
  // console.log(featureName);

  for(i in items["features"]){

    for(j in items["features"][i]['geometry']['coordinates'][0]){
      items["features"][i]['geometry']['coordinates'][0][j] = ol.proj.fromLonLat(items["features"][i]['geometry']['coordinates'][0][j]);
    }


    if (items['features'][i]["properties"]["COUNTYNAME"] == featureName){
      //console.log(items['features'][i]["properties"]["VILLNAME"]);
      new_items['features'][count] = items['features'][i];
      count = count + 1;
    }

  }

  new_items["features"] = Object.values(new_items["features"])


  console.log(vectorSource);


  vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(new_items)
  });
  // console.log(typeof vectorSource);

  var villLayer = new ol.layer.Vector({
    source: vectorSource
  });

  // console.log(villLayer);
  map.addLayer(villLayer);


  villVisualCheck = 1;
}
