

var villVisualCheck;
function villVisual(items) {

  if(villVisualCheck == 1){
    villLayer.getSource().clear();
  }

  // console.log(items);
  var count = 0, coor = new Array;
  var new_items = {"type": "FeatureCollection", "name": "TW_Vill_simplified", "crs": {"properties":{"name": "urn:ogc:def:crs:EPSG::3824"}, "type": "name"}, "features":{}};
  console.log(items);

  for(i in items["features"]){
    coor = [];

    for(j in items["features"][i]['geometry']['coordinates'][0]){
      // console.log(i);
      // coor[i]
      coor[j] = ol.proj.fromLonLat(items["features"][i]['geometry']['coordinates'][0][j]);
      // count1 = count1 + 1;
    }

    if (items['features'][i]["properties"]["COUNTYNAME"] == featureName){
      //console.log(items['features'][i]["properties"]["VILLNAME"]);
      new_items['features'][count] = items['features'][i];
      for (j in new_items['features'][count]["geometry"]["coordinates"][0]){
        new_items['features'][count]["geometry"]["coordinates"][0][j] = coor[j]
      }
      count = count + 1;
      //console.log(coor);
    }
}




  new_items["features"] = Object.values(new_items["features"])

  vectorSource.clear();

  var feature = (new ol.format.GeoJSON()).readFeatures(new_items);

  vectorSource = new ol.source.Vector({
    features:feature
  });
  
  villLayer.setSource(vectorSource);

  villVisualCheck = 1;
}
