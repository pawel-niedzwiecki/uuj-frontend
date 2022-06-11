import React from "react";
import { GoogleMap, useJsApiLoader, Marker, Polygon } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.7592485,
  lng: 19.4559833,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAvhh1GZHPC8kCwL2pFli-WOAznuWxi08Q",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const position = {
    lat: 51.7592485,
    lng: 19.4559833,
  };
  const position1 = {
    lat: 51.7592485,
    lng: 18.4559833,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker onLoad={onLoad} position={position} />
        <Marker onLoad={onLoad} position={position1} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
