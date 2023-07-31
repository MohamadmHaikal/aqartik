import React from "react";
import { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = ({ formData, setFormData }) => {
  const [selectedMarker, setSelectedMarker] = useState(
    formData.selectedLocation || null
  );

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const mapCenter = { lat: 23.8859, lng: 45.0792 };
  const markers = [
    {
      id: 1,
      position: { lat: 37.7749, lng: -122.4194 },
      title: "Marker 1",
      description: "Details of Marker 1",
    },
    // Add more markers as needed
  ];

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
  return (
    <LoadScript googleMapsApiKey="AIzaSyCUSxdxRLpvkegxpk9-82sUjCylgekfGUk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
          />
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
