import mapboxgl from 'mapbox-gl';

const mapElement = document.getElementById('map1');

const buildMap = () => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/omacinema/cjxm8qwxn0jim1cocy9oyxv70',
    center: [2.3455562, 48.8753697], // starting position as [lng, lat]
    zoom: 12
  });
};

const contactMapbox = () => {
  if (mapElement) {
    const map = buildMap();
     }
};


export { contactMapbox };

