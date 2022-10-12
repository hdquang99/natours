/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGRxdWFuZzk5IiwiYSI6ImNsODdjb3F2MTBneW8zdG9oM2VvZW1xeXIifQ.vODgQvKnYBEo7t8gaDU8FQ';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/hdquang99/cl87e08cv001b14pbnsycomh8', // style URL
    center: [-118.201704, 34.255164], // starting position [lng, lat]
    zoom: 4, // starting zoom
    scroolZoom: false,
  });
  map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
  });

  // const bounds = new mapboxgl.LngLatBounds();

  // locations.forEach((loc) => {
  //   // Create Marker
  //   const el = document.createElement('div');
  //   el.className = 'marker';

  //   // Add marker
  //   new mapboxgl.Marker({
  //     element: el,
  //     anchor: 'bottom',
  //   })
  //     .setLnglat(loc.coordinates)
  //     .addTo(map);

  //   // Extend map bounds to include current location
  //   bounds.extend(loc.coordinates);
  // });

  // map.fitBounds(bounds);
};
