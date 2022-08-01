import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapStyled } from './mapStyle.ts';


// styles
// import './Map.css'
// tokens
mapboxgl.accessToken = process.env.RAZZLE_MAPBOX_TOKEN;


// const Marker = ({ restaurant }) => {
//   return (
//     <div>
//       {restaurant.country === 'spain' && <div className="btn-flag-card">🇪🇸</div>}
//       {restaurant.country === 'mexico' && <div className="btn-flag-card">🇲🇽</div>}
//       {restaurant.country === 'peru' && <div className="btn-flag-card">🇵🇪</div>}
//       {restaurant.country === 'argentina' && <div className="btn-flag-card">🇦🇷</div>}
//       {restaurant.country === 'colombia' && <div className="btn-flag-card">🇨🇴</div>}
//       {restaurant.country === 'cuba' && <div className="btn-flag-card">🇨🇺</div>}
//       {restaurant.country === 'chile' && <div className="btn-flag-card">🇨🇱</div>}
//       {restaurant.country === 'other' && <div className="btn-flag-card">🗺</div>}
//     </div>
//   );
// };


export default function Map({ lon, lat }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',  // light-v10, streets-v11
      center: [lon, lat],
      zoom: 11,
      maxBounds: [
        { lat: 35.195384, lng: 138.718320 }, // SW
        { lat: 35.911546, lng: 140.290738 } // NE
      ]
    });

    //   // Render custom marker components
    //   restaurants.forEach((restaurant) => {
    //     // Create a React ref
    //     const ref = React.createRef();
    //     // Create a new DOM node and save it to the React ref
    //     ref.current = document.createElement("div");
    //     // Render a Marker Component on our new DOM node
    //     const markerRoot = ReactDOM.createRoot(ref.current);
    //     markerRoot.render(
    //       <Marker restaurant={restaurant} />
    //     );

    //     // Create a Mapbox Marker at our new DOM node.
    //     new mapboxgl.Marker(ref.current)
    //       .setLngLat(restaurant.geometry.coordinates)
    //       .setPopup(
    //         new mapboxgl.Popup({ offset: 23 })
    //           .setHTML(`
    //             <div class="popup">
    //               <a href=${restaurant.url} class="text-decoration-none" target="_blank" rel="noreferrer">
    //                 <img src=${restaurant.image} class="img-fluid popup-img" alt="Restaurant's front door" />
    //                   <div class="">
    //                     <h5 class="text-dark text-center fs-5 fw-light mt-1 mb-0 px-2">${restaurant.name}</h5>
    //                     <p class="text-muted text-center fs-6 pb-2 mb-0"> in ${restaurant.location}</p>
    //                   </div>
    //               </a>
    //             </div>
    //         `)
    //       )
    //       .addTo(map);
  });

  //   // Add navigation control (the +/- zoom buttons)
  //   map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
  //   // Clean up on unmount
  //   return () => map.remove();

  // }, [restaurants]);

  return (
    <MapStyled>
      <div ref={mapContainer} className="map-container" />
    </MapStyled>
  )
}
