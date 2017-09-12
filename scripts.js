$(document).ready(function() {
<<<<<<< HEAD
=======
var data = "";

>>>>>>> pen-work-git-dont
	var temp;
	//html5 geolocator
    function pos (pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        var coords = lat + ", " + long;
        console.log(coords); //debug catcher
        getWeather(lat, long);
        
    }

     function getLocation() {
     	navigator.geolocation.getCurrentPosition(pos);
     	return false;
     }

     getLocation();

     var now = new Date();
     now = now.toDateString();
     $('#time').html(now);
<<<<<<< HEAD

     $('#convert').on('click', function(event) {
     	/* Act on the event */
     	displayWeather();
     	if ($('#temperature').hasClass('celcius')) {
     		temp = f_temp;
     	} else {
     		temp = temperature;
     	}
     	$('#temperature').html(temperature);
     	$('#temperature').toggleClass('celcius farenheit');
     });
         
=======
      
>>>>>>> pen-work-git-dont
    //weather catcher to return json file
    function getWeather(lat, long) {
    	$.ajax({
    		type: 'GET',
    		url: 'https://fcc-weather-api.glitch.me/api/current?lat='+ lat + '&lon=' + long,
    		dataType: 'json',
    		data: {},
    		success: function(response) {
<<<<<<< HEAD
    			whereYouIs = response.name;
    			$('#whereYouIs').text(whereYouIs); //insert location
    			temperature = response.main.temp;
    			f_temp = temperature * 9/5 +32;
    			$('#temperature').html(temperature); //insert temp
    			conditions = response.weather[0].description;
    			$('#conditions').text(conditions); //insert conditions
    			icon = response.weather[0].icon;
    			$('#condition_icon').html('<img src=\"' + icon + '\"/>'); //insert conditions icon
=======
                data = response;
    			
>>>>>>> pen-work-git-dont
    		}
    	});
    }

    function displayWeather(){
        var whereYouIs = data.name;
        $('#whereYouIs').text(whereYouIs); //insert location
        var temperature = data.main.temp;
        $('#temperature').html(temperature); //insert temp
        var conditions = data.weather[0].description;
        $('#conditions').text(conditions); //insert conditions
        var icon = data.weather[0].icon;
        $('#condition_icon').html('<img src=\"' + icon + '\"/>'); //insert conditions icon
    }

    $('#convert').on('click', function(event) {
        /* Act on the event */
        var tempConvert = data.main.temp;
        if ($('#temperature').hasClass('celcius')) {
            tempConvert = tempConvert * 9/5 + 32;
        } else {
            tempConvert = tempConvert;
        }
        $('#temperature').html(tempConvert);
        $('#temperature').toggleClass('celcius farenheit');
     });
	
});