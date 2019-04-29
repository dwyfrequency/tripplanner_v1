const mapbox = require('mapbox-gl');
const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords) {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

  // console.log(iconURLs[type]);

  // console.log(markerDomEl);

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

// const marker = buildMarker('activity', [-74.009151, 40.705086]); // or [-87.6354, 41.8885]

module.exports = buildMarker;
