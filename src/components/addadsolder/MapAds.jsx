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
          marginBottom: "24px",
          marginTop: "8px",
          fontSize: { xs: "1.2rem", md: "1.5rem" },
        }}
      >
        {t("user_dashboard.property_location_map.title")}
      </Typography>
      <Typography sx={{ fontWeight: "500" }}>
        {t("user_dashboard.property_location_map.desc")}
      </Typography>
      <Box
        sx={{
          maxWidth: "100%",
          height: "300px",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid black",
          marginTop: "1rem",
        }}
      >
        <Map formData={formData} setFormData={setFormData} />
      </Box>
    </Box>
  );
};

export default MapAds;
