import "bootstrap";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import 'mapbox-gl/dist/mapbox-gl.css';
// internal imports
import { initMapbox } from '../plugins/init_mapbox';

initMapbox();

import { initStarRating } from '../plugins/init_star_rating';

initStarRating();

import { initAutocomplete } from '../plugins/init_autocomplete';

initAutocomplete();
