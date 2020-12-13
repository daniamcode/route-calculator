import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

const Map = ({formattedOrigin, formattedDestination}) => {
  return (
    <section className="googleMap">
    <GoogleMap defaultZoom={9} defaultCenter={{ lat: 41.75, lng: 1.8 }}>
      <Marker position={formattedOrigin} />
      <Marker position={formattedDestination} />
    </GoogleMap>
    </section>
  );
};

export default Map;
