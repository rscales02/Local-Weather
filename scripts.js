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
    			whereYouIs = response.name;
    			$('#whereYouIs').text(whereYouIs);
    			temp = response.main[0];
    			$('#temp').data(temp); //problem 1 is here, I can't get this to pull the number from the json file
    			conditions = response.weather[0].description;
    			$('#conditions').text(conditions);
    			icon = response.weather[0].icon;
    			$('#condition_icon').html('<span src=\"' + icon + '\"></span>'); //problem 2 is here it does not load the icon
    		}
    	});
    }
	getLocation();
});