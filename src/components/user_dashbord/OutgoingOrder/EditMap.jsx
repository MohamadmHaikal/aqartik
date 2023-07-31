import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const EditMap = ({ onCancel }) => {
  const mapCenter = { lat: 23.8859, lng: 45.0792 };
  return (
    <Box>
      <form>
        <Box
          sx={{
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            marginInline: "auto",
          }}
        >
          <LoadScript googleMapsApiKey="AIzaSyDH04vPsEUMOgZT_yMXKQXptu01oSQnV-E">
            <GoogleMap
              center={mapCenter}
              zoom={10}
              sx={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
                margin: "0px",
                padding: "0px",
                position: "relative",
              }}
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
        <Box
          sx={{
            borderWidth: "0px 0px thin",
            borderStyle: "solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            margin: "2rem 4rem",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "1rem ",
            marginInline: "auto",
            flexWrap: "wrap",
          }}
        >
          <Button
            type="submit"
            sx={{
              fontWeight: "600",
              borderRadius: "8px",
              minWidth: "186px",
              padding: "0.75rem 2.5rem",
              height: "50px",
              backgroundColor: "var(--green-color)",
              color: "white",
              "&:hover": {
                backgroundColor: "#0b7b5a",
                color: "white",
              },
            }}
          >
            حفظ التعديلات
          </Button>
          <Button
            sx={{
              fontWeight: "600",
              borderRadius: "8px",

              border: "1px solid var(--green-color)",
              minWidth: "186px",
              padding: "0.75rem 2.5rem",
              height: "50px",
              backgroundColor: "white",
              color: "var(--green-color)",
              "&:hover": {
                backgroundColor: "#e5f9f4",
              },
            }}
            onClick={onCancel}
          >
            إلغاء
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditMap;
