$(document).ready(function() {
	//html5 geolocator
    function pos (pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        var coords = lat + ", " + long;
        console.log(coords); //debug catcher
        displayWeather(lat, long);
        
    }

     function getLocation() {
     	navigator.geolocation.getCurrentPosition(pos);
     	return false;
     }
    
    //weather catcher to return json file
    function displayWeather(lat, long) {
    	$.ajax({
    		type: 'GET',
    		url: 'https://fcc-weather-api.glitch.me/api/current?lat='+ lat + '&lon=' + long,
    		dataType: 'json',
    		data: {},
    		success: function(response) {
    			location = response.name;
    			$('#location').text(location);
    			temp = response.main.temp;
    			$('#temp').text(temp);
    			conditions = response.weather.description;
    			$('#conditions').text(conditions);

    		}
    	});
    }
	getLocation();
});