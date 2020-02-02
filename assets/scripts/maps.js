function initMap () {
    var map= new google.maps.Map(document.getElementById("map"), {
zoom: 3,
center: {
    lat: 46.619261,
    lng: -33.134766
}
    });


var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
            var locations = [{
                lat: 43.7696, 
                lng: 11.2558
            }, {
                lat: 50.6292,
                lng: 3.0573
            }, {
                lat: 53.3501, 
                lng: -6.2661 },
                
                ];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}    