import React, { useEffect } from "react";
import { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { toast } from "react-hot-toast";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const googleMapsApiKey = "AIzaSyCUSxdxRLpvkegxpk9-82sUjCylgekfGUk";

const Map = ({ formData, setFormData, setError, mapData, setMapData }) => {
  const [userMarkers, setUserMarkers] = useState([]);
  const [cityName, setCityName] = useState();
  const [neighborhoodName, setNeighborhoodName] = useState();
  const [rood, setRood] = useState();

  const [centeredMap, setCenteredMap] = useState({
    lat: 23.8859,
    lng: 45.0792,
  });

  useEffect(() => {
    setError(true);
  }, []);

  const [selectedMarker, setSelectedMarker] = useState(
    formData.selectedLocation || null
  );

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

    //getting the country
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickedPosition.lat},${clickedPosition.lng}&key=${googleMapsApiKey}&language=en`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          let cityName = "";
          let neighborhoodName = "";

          for (const result of data.results) {
            // Extract city name and neighborhood name from address components
            for (const component of result.address_components) {
              if (component.types.includes("locality")) {
                setCityName(component.long_name);
              }
              if (component.types.includes("sublocality")) {
                setNeighborhoodName(component.long_name);
              }
              if (component.types.includes("route")) {
                setRood(component.long_name);
              }
            }
          }
        } else {
          console.log("Unable to retrieve address details.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setMapData((prev) => ({
      ...prev,
      cityName,
      neighborhoodName,
      rood,
    }));
  }, [cityName, neighborhoodName, rood]);

  console.log(mapData);

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centeredMap}
        zoom={10}
        onClick={(event) => handleMapClick(event)}
      >
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
