import mapboxgl from 'mapbox-gl';

const mapElement = document.getElementById('map1');

const buildMap = () => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [2.3455562, 48.8753697], // starting position as [lng, lat]
    zoom: 5
  });
};

const contactMapbox = () => {
  if (mapElement) {
    const map = buildMap();
     }
};


export { contactMapbox };
