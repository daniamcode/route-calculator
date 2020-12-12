import React from "react";
import { GoogleMap, Marker } from "react-google-maps";
// import Directions from "./Directions";
/* global google */

const Map = ({formattedOrigin, formattedDestination}) => {
  return (
    <section className="googleMap">
    <GoogleMap defaultZoom={9} defaultCenter={{ lat: 41.75, lng: 1.8 }}>
      <Marker position={formattedOrigin} />
      <Marker position={formattedDestination} />
      {/* <Directions
        origin={{ lat: 41.2, lng: 2 }}
        destination={{ lat: 45.3, lng: 12 }}
        travelMode={google.maps.TravelMode.DRIVING}
      /> */}
    </GoogleMap>
    </section>
  );
};

export default Map;
