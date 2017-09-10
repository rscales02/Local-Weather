$(document).ready(function() {
  var other = "";
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

     $('#convert').on('click', function(event) {
         /* Act on the event */
         displayWeather();
         if ($('#temperature').hasClass('celcius')) {
             other = f_temp;
         } else {
             other = temperature;
         }
         $('#temperature').html(other);
         $('#temperature').toggleClass('celcius farenheit');
     });

    //weather catcher to return json file
    function displayWeather(lat, long) {
        $.ajax({
            type: 'GET',
            url: 'https://fcc-weather-api.glitch.me/api/current?lat='+ lat + '&lon=' + long,
            dataType: 'json',
            data: {},
            success: function(response) {
                var whereYouIs = response.name;
                $('#whereYouIs').text(whereYouIs); //insert location
                var temperature = response.main.temp;
                f_temp = temperature * 9/5 +32;
                $('#temperature').html(response.main.temp); //insert temp
                var conditions = response.weather[0].description;
                $('#conditions').text(conditions); //insert conditions
                var icon = response.weather[0].icon;
                $('#condition_icon').html('<img src=\"' + icon + '\"/>'); //insert conditions icon
            }
        });
    }
    getLocation();
});