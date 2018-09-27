$.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBt7LID-yiMyjdM55ytjy0hsbVX9VOQZos&callback=initMap');

// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
       function initMap() {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position)
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };


          }, function() {

          });
        } else {

        }
      }

    

function returnStateCode(map, infowindow){
  var geocoder = new google.maps.Geocoder;

  geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
             console.log(results[0].formatted_address);
           }
         }
       })
}