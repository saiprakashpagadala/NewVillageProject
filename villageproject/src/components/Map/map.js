import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBongLkrGUCcqr92pQoOGV9yiqJgVPSAVI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div style={{ height: `300px`, width: `500px`, paddingTop: `15px` }} />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 17.44262230465897, lng: 78.38329498138981 }}
  >
    {true && (
      <Marker position={{ lat: 17.44262230465897, lng: 78.38329498138981 }} />
    )}
  </GoogleMap>
));

export default Map;
