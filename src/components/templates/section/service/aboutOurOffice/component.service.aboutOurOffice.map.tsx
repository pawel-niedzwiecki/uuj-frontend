import React from "react";
import { MainAddressType, BrancheType } from "database/contact";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.7592485,
  lng: 19.4559833,
};

function GoogleMaps({ data }: { data?: { lat?: number; lng?: number } }) {
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

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9} onLoad={onLoad} onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {data?.lat && data?.lng && (
          <Marker
            onLoad={onLoad}
            position={{
              lat: data.lat,
              lng: data.lng,
            }}
          />
        )}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
