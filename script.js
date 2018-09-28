// This isn't necessary but it keeps the editor from thinking L is a typo
/* global L */

var map = L.map('map').setView([38.500893,-98.745117], 5);

// Add base layer
L.tileLayer('https://api.mapbox.com/styles/v1/dcook55/cjmicwu8lo9k62splymlb3ve0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGNvb2s1NSIsImEiOiJjamd6ODh3c2MwMWI2MnFteHI5b2QycjZ5In0.JpZCxOHsG_87QnrbaujA8g', {
  maxZoom: 18
}).addTo(map);