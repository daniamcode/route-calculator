import React from 'react';
import {GoogleMap} from 'react-google-maps'

const Map = () => {
return (
    <GoogleMap defaultZoom={3} defaultCenter={{lat: 41.3879, lng: 2.16992}}/>
)

}

export default Map