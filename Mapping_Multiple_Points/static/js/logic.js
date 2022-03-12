// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("mapid", {
  center: [45.52, -122.67],
  zoom: 13
});

let cityData =cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius:city.population/100000,
    color : "orange"
  })
  .bindPopup("<h2>"+ city.city+","+city.state+"</h2> <hr> <h3> Population "+ city.population.toLocaleString()+ "</h3>")
  .addTo(myMap);
 });

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
streets.addTo(myMap);