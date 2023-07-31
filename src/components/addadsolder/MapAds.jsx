import React from "react";
import { Box, Typography } from "@mui/material";
import Map from "./Map";
const MapAds = ({ formData, setFormData }) => {
  const handleMapChange = (mapData) => {
    setFormData({ ...formData, mapData });
  };
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          marginBottom: "2rem",
          fontSize: { xs: "1.5rem", md: "2.25rem" },
        }}
      >
        عنوان العقار
      </Typography>
      <Typography sx={{ fontWeight: "600" }}>الموقع على الخريطة</Typography>
      <Box
        sx={{
          maxWidth: "430px",
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid black",
          marginTop: "2rem",
        }}
      >
        <Map formData={formData} setFormData={setFormData} />
      </Box>
    </Box>
  );
};

export default MapAds;
