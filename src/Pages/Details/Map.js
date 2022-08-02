// Remeber to npn i mapbox-gl and include script/css in the index.html. Check REACT version, here 17
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import { useEffect, useRef } from 'react';
import React from 'react';
import ReactDOM from "react-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MapStyled, MarkerContent } from './mapStyle.ts';

// tokens
mapboxgl.accessToken = process.env.RAZZLE_MAPBOX_TOKEN;


function Marker() {
  return (
    <MarkerContent>
      <FaMapMarkerAlt />
    </MarkerContent>
  );
}

export default function Map({ lon, lat }) {
  // console.log(region);
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lon, lat],
      zoom: 15,
    });


    // Create a React ref
    const ref = React.createRef();
    // Create a new DOM node and save it to the React ref
    ref.current = document.createElement("div");
    // Render a Marker Component on our new DOM node
    ReactDOM.render(
      <Marker />,
      ref.current
    );

    // Create a Mapbox Marker at our new DOM node
    new mapboxgl.Marker(ref.current)
      .setLngLat([lon, lat])
      .addTo(map);

    // new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map)
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    // Clean up on unmount
    return () => map.remove();

  }, [lon, lat]);

  return (
    <MapStyled>
      <div ref={mapContainer} className="map-container" />
    </MapStyled>
  )
}
