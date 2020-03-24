/*var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
searchBox.addListener('places_changed', function() {
	var locale = searchBox.getPlaces()[0]
});

document.querySelector("#latitude").value = place.geometry.location.lat();
document.querySelector("#longitude").value = place.geometry.location.lng();
document.querySelector("#latitude").value = latitude;
document.querySelector("#longitude").value = longitude;
$.getJSON('https://api.darksky.net/forecast/[0e6ae8898e69c00b0e7ca4bc350d44f0]/[latitude],[longitude]', function(forecast) {
	console.log(forecast);
});

$( function() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
      _create: function() {
        this._super();
        this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
      },
      _renderMenu: function( ul, items ) {
        var that = this,
          currentCategory = "";
        $.each( items, function( index, item ) {
          var li;
          if ( item.category != currentCategory ) {
            ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
            currentCategory = item.category;
          }
          li = that._renderItemData( ul, item );
          if ( item.category ) {
            li.attr( "aria-label", item.category + " : " + item.label );
          }
        });
      }
    });
    var data = [
      { label: "anders", category: "" },
      { label: "andreas", category: "" },
      { label: "antal", category: "" },
      { label: "annhhx10", category: "Products" },
      { label: "annk K12", category: "Products" },
      { label: "annttop C13", category: "Products" },
      { label: "anders andersson", category: "People" },
      { label: "andreas andersson", category: "People" },
      { label: "andreas johnson", category: "People" }
    ];
 
    $( "#search" ).catcomplete({
      delay: 0,
      source: data
    });
  } );*/


var URL = "http://api.openweathermap.org/data/2.5/weather?id=";
var API_KEY = "3d3870ac4f9473df26fe1f9f5b46d925";
var Franyk = 707471;

var URI = URL + Franyk +  "&appid=" + API_KEY;
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
	if((XHR.readyState == 4) && (XHR.status == 200)) {
		//console.log(XHR.responseText)
		var data = JSON.parse(XHR.responseText);
		var pressure = data.main.pressure;
		var humidity = data.main.humidity;
		var temperature = (parseFloat(data.main.temp) - 273.15).toFixed(2);

		main.innerHTML = "<h1>Temperature: " + temperature +"<sup>0</sup>C</h1>"
		main.innerHTML += "<h1>Humidity: " + humidity + "%</h1>"
		main.innerHTML += "<h1>Pressure: " + pressure + "hPa</h1>"
 	}
}

XHR.open("GET", URI, true);
XHR.send();