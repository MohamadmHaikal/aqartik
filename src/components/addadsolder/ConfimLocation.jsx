import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "./confirmLocation.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import { cities } from "../../cities";

const ConfimLocation = ({ formData, setFormData, interfaces }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [selectedCity, setSelectedCity] = useState(
    formData.selectedCity || null
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    formData.selectedDistrict || null
  );
  const [selectedInterface, setSelectedInterface] = useState(
    formData.selectedInterface || null
  );

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedCity: event.target.value,
    }));
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedDistrict: event.target.value,
    }));
  };

  const handleStreetChange = (event) => {
    setSelectedInterface(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedInterface: event.target.value,
    }));
  };

  // const isFormValid = selectedCity && selectedDistrict && selectedStreet;

  const selectedCityData = cities.find((city) => city.name_en === selectedCity);

  const neighborhoods = selectedCityData ? selectedCityData.neighborhoods : [];
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
        {t("user_dashboard.property_location.title")}
      </Typography>

      <InputLabel sx={{ color: "black", fontWeight: "500", marginTop: "1rem" }}>
        {t("user_dashboard.property_location.label1")}
      </InputLabel>

      <Select
        value={selectedCity}
        onChange={handleCityChange}
        label=""
        required
        IconComponent={ArrowDropDownIcon}
        className={`${styles.select} select`}
        classes={lang === "ar" && { icon: styles.selectIcon }}
        sx={{
          borderRadius: "12px !important",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
          border: "1px solid rgba(0, 0, 0, 0.06) !important",
          paddingBlock: "5px",
          height: "48px",
          width: "100%",
          marginBlock: "4px 12px",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              borderRadius: "1rem",
            },
          },
        }}
      >
        {cities.map((city) => (
          <MenuItem
            value={city.name_en}
            className={
              selectedCity === city.name_en ? styles.selectedMenuItem : ""
            }
          >
            {city.name_en}
          </MenuItem>
        ))}
      </Select>

      <InputLabel
        sx={{
          color: "black",
          fontWeight: "400",
        }}
      >
        {t("user_dashboard.property_location.label2")}
      </InputLabel>
      <Select
        value={selectedDistrict}
        onChange={handleDistrictChange}
        label=""
        required
        IconComponent={ArrowDropDownIcon}
        className={`${styles.select} select`}
        classes={lang === "ar" && { icon: styles.selectIcon }}
        sx={{
          borderRadius: "12px !important",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
          border: "1px solid rgba(0, 0, 0, 0.06) !important",
          paddingBlock: "5px",
          height: "48px",
          width: "100%",
          marginBlock: "4px 12px",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              borderRadius: "1rem",
            },
          },
        }}
      >
        {neighborhoods.map((nei) => (
          <MenuItem
            value={nei.name_en}
            className={
              selectedInterface === nei.name_en ? styles.selectedMenuItem : ""
            }
          >
            {nei.name_en}
          </MenuItem>
        ))}
      </Select>

      <InputLabel
        sx={{
          color: "black",
          fontWeight: "500",
        }}
      >
        {t("user_dashboard.property_location.label3")}
      </InputLabel>
      <Typography sx={{ color: "gray", fontSize: "14px" }}>
        {t("user_dashboard.property_location.hint")}
      </Typography>
      <Select
        value={selectedInterface}
        onChange={handleStreetChange}
        label=""
        required
        IconComponent={ArrowDropDownIcon}
        className={`${styles.select} select`}
        classes={lang === "ar" && { icon: styles.selectIcon }}
        sx={{
          borderRadius: "12px !important",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
          border: "1px solid rgba(0, 0, 0, 0.06) !important",
          paddingBlock: "5px",
          height: "48px",
          width: "100%",
          marginBlock: "4px 12px",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              borderRadius: "1rem",
            },
          },
        }}
      >
        {interfaces.map((interface_item) => (
          <MenuItem
            value={interface_item.id}
            className={
              selectedInterface === interface_item.en_name
                ? styles.selectedMenuItem
                : ""
            }
          >
            {interface_item.en_name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ConfimLocation;
