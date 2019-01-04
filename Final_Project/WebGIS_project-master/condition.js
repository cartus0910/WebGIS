//condition to load case
var val1, val2, val3, val4;

function condition() {

  id = document.getElementById("city");
  val1 = id.options[id.selectedIndex].text;
  id = document.getElementById("district");
  val2 = id.options[id.selectedIndex].text;
  id = document.getElementById("village");
  val3 = id.options[id.selectedIndex].text;
  id = document.getElementById("ref2");
  val4 = id.options[id.selectedIndex].value;

  // console.log(val1);
  // console.log(val2);
  //console.log(val4);
  if (val1 != '-' && val4 == "7") {
    //console.log(123);
    seven();
  }

}
