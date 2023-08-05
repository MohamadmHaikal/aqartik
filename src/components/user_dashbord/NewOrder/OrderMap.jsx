import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { OrderTitles } from ".";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

const OrderMap = () => {
  const { t } = useTranslation();

  const containerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "12px",
  };

  const mapCenter = { lat: 23.8859, lng: 45.0792 };
  const markers = [
    {
      id: 1,
      position: { lat: 37.7749, lng: -122.4194 },
      title: "Marker 1",
      description: "Details of Marker 1",
    },
  ];
  return (
    <Box>
      <OrderTitles title={t("user_dashboard.property_location_map.title")} />
      <Typography
        sx={{
          color: "rgb(118, 118, 118)",
          marginBottom: "2rem",
        }}
      >
        {t("user_dashboard.property_location_map.desc")}{" "}
      </Typography>
      <LoadScript googleMapsApiKey="AIzaSyDH04vPsEUMOgZT_yMXKQXptu01oSQnV-E">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={10}
        >
          {/* {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
          />
        ))} */}

          {/* {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={handleCloseInfoWindow}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              <p>{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )} */}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default OrderMap;
