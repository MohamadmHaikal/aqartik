import React from "react";
import { Box, Typography } from "@mui/material";
import Map from "./Map";
import { useTranslation } from "react-i18next";
const MapAds = ({ formData, setFormData }) => {
  const { t } = useTranslation();
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
        {t("user_dashboard.property_location_map.title")}
      </Typography>
      <Typography sx={{ fontWeight: "600" }}>
        {t("user_dashboard.property_location_map.desc")}
      </Typography>
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
