var map = L.map('map').fitWorld();

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    
    // var locationMarker = L.marker(e.latlng).addTo(map)
    // .bindPopup('You are within ' + radius + ' meters from this point').openPopup();
    var locationMarker = L.marker([51.17093580502315, 71.40193107526649], {icon: redIcon}).addTo(map)
    .bindPopup('Штаб-квартира EcoVision').openPopup();
    var locationMarker = L.marker([51.1593417, 71.4380066], {icon: greenIcon}).addTo(map)
    .bindPopup('АО «Казвторчермет»').openPopup();
    var locationMarker = L.marker([51.174981, 71.384696], {icon: greenIcon}).addTo(map)
    .bindPopup('Eco.Start.Ast').openPopup();
    var locationMarker = L.marker([51.145998, 71.475983], {icon: greenIcon}).addTo(map)
    .bindPopup('ТОО «НПФ Azia Group»').openPopup();
    var locationMarker = L.marker([51.06716309869847, 71.38736369778269], {icon: greenIcon}).addTo(map)
    .bindPopup('Малина').openPopup();
    
    // navigator.geolocation.getCurrentPosition(getPosition)
    // var locationCircle = L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

function onAccuratePositionProgress (e) {
    console.log(e.accuracy);
    console.log(e.latlng);
}

function onAccuratePositionFound (e) {
    console.log(e.accuracy);
    console.log(e.latlng);
}

function onAccuratePositionError (e) {
    console.log(e.message)
}

map.on('accuratepositionprogress', onAccuratePositionProgress);
map.on('accuratepositionfound', onAccuratePositionFound);
map.on('accuratepositionerror', onAccuratePositionError);


map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});

L.control.locate().addTo(map);
L.Control.geocoder().addTo(map);

map.findAccuratePosition({
    maxWait: 15000, // defaults to 10000
    desiredAccuracy: 30 // defaults to 20
});