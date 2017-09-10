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

     var now = new Date();
     now = now.toDateString();
     $('#time').html(now);

     function convertTemp() {

     }
    
    //weather catcher to return json file
    function displayWeather(lat, long) {
    	$.ajax({
    		type: 'GET',
    		url: 'https://fcc-weather-api.glitch.me/api/current?lat='+ lat + '&lon=' + long,
    		dataType: 'json',
    		data: {},
    		success: function(response) {
    			whereYouIs = response.name;
    			$('#whereYouIs').text(whereYouIs); //insert location
    			temp = response.main.temp;
    			$('#temperature').text(temp); //insert temp
    			conditions = response.weather[0].description;
    			$('#conditions').text(conditions); //insert conditions
    			icon = response.weather[0].icon;
    			$('#condition_icon').html('<img src=\"' + icon + '\"/>'); //insert conditions icon
    		}
    	});
    }
	getLocation();
});