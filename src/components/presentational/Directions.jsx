// import React, {useState, useEffect} from 'react';
// import {DirectionsRenderer} from 'react-google-maps';
// /* global google */

// const Directions = ({ origin, destination, travelMode }) => {
//     const [directions, setDirections] = useState(null);

//     const directionsService = new google.maps.DirectionsService();
//     directionsService.route(
//               {
//                 origin: new google.maps.LatLng(origin.lat, origin.lng),
//                 destination: new google.maps.LatLng(destination.lat, destination.lng),
//                 travelMode: travelMode
//               })
//     console.log(directionsService)
// //     useEffect(() => {
// //     console.log(directionsService)
// //     directionsService.route(
// //       {
// //         origin: new google.maps.LatLng(origin.lat, origin.lng),
// //         destination: new google.maps.LatLng(destination.lat, destination.lng),
// //         travelMode: travelMode
// //       },
// //       (result, status) => {
// //         if (status === google.maps.DirectionsStatus.OK) {
// //           setDirections(result);
// //         } else {
// //           console.error(`error fetching directions ${result}`);
// //         }
// //       }
// //     );
// //   }, [directions, destination.lat, destination.lng, origin.lat, origin.lng, travelMode]);

//   console.log(directions)

//   return (
//     <React.Fragment>
//       {directions && <DirectionsRenderer directions={directions} />}
//     </React.Fragment>
//   );
// }

// export default Directions