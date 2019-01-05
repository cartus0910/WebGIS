var loadvill_check = 0;
var vill_json;

function loadVill() { //load data via ajax
  $("#village option").remove();
  $("#village").append($("<option></option>").attr("value", "none").text("-"));

  if (loadvill_check == 0) {
    var url_load = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified.geojson";
    $.ajax({
      url: url_load,
      dataType: "json",
      success: function(items) {
        //console.log(123);
        //console.log(items);

        vill_json = items;
        vill(items);
      }
    });
  }
  else{
    vill(vill_json);
  }
  loadvill_check = 1;
}

function seven(){    //load data via ajax

  var url7 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case7_vill.txt";
  $.ajax({
    url: url7,
    dataType:"json",
    success: function(items){
      // console.log(val1);
      // console.log(val4);
      // console.log(val2);
      // console.log(val3);

      if(val1 != '-' && val2 == '-' && val3 == '-'){
        city_table(items, "通過");
      }
      if(val1 != '-' && val2 != '-' && val3 == '-'){
        district_table(items, "通過");
      }
      if(val1 != '-' && val2 != '-' && val3 != '-'){
        vill_table(items, "通過");
      }
    }
  });
}
