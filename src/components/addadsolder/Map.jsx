import React from "react";
import { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};
const Map = ({ formData, setFormData }) => {
  const [userMarkers, setUserMarkers] = useState([]);
  const [centeredMap, setCenteredMap] = useState({
    lat: 23.8859,
    lng: 45.0792,
  });

  const [selectedMarker, setSelectedMarker] = useState(
    formData.selectedLocation || null
  );

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setFormData((prevData) => ({
      ...prevData,
      selectedLocation: marker,
    }));
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
    setFormData((prevData) => ({
      ...prevData,
      selectedLocation: null,
    }));
  };

  const handleMapClick = (event) => {
    const clickedPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    const newMarker = {
      position: clickedPosition,
      id: new Date().getTime(), // Generate a unique ID
    };

    setCenteredMap({ lat: clickedPosition.lat, lng: clickedPosition.lng });

    setFormData((prevData) => ({
      ...prevData,
      selectedLocation: clickedPosition,
    }));

    setUserMarkers([newMarker]);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCUSxdxRLpvkegxpk9-82sUjCylgekfGUk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centeredMap}
        zoom={10}
        onClick={(event) => handleMapClick(event)}
      >
        {/* {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
          />
        ))} */}
        {userMarkers.map((marker, index) => (
          <Marker key={index} position={marker.position} />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={handleCloseInfoWindow}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              <p>{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
