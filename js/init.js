function initMap(){
    var uluru = {lat: 57.048671, lng: 9.9201409};
    var map = new google.maps.Map(document.getElementsByClassName('google-map')[0], {
        zoom: 17,
        scrollwheel: false,
        center: uluru,
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
initMap();