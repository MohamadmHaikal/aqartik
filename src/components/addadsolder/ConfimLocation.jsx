import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "./confirmLocation.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";

const ConfimLocation = ({ formData, setFormData }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedCity, setSelectedCity] = useState(
    formData.selectedCity || "option1"
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    formData.selectedDistrict || "option1"
  );
  const [selectedStreet, setSelectedStreet] = useState(
    formData.selectedStreet || "option1"
  );

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedCity: event.target.value,
    }));
    console.log("Selected City:", selectedValue);
  };

  const handleDistrictChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDistrict(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedDistrict: event.target.value,
    }));
    console.log("Selected District:", selectedValue);
  };

  const handleStreetChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStreet(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedStreet: event.target.value,
    }));
    console.log("Selected Street:", selectedValue);
  };

  const isFormValid = selectedCity && selectedDistrict && selectedStreet;

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", fontSize: { xs: "1.5rem", md: "2.25rem" } }}
      >
        {t("user_dashboard.property_location.title")}
      </Typography>
      <InputLabel sx={{ color: "black", fontWeight: "600", marginTop: "3rem" }}>
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
          marginBlock: "1rem 40px",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              borderRadius: "1rem",
            },
          },
        }}
      >
        <MenuItem
          value="option1"
          className={selectedCity === "option1" ? styles.selectedMenuItem : ""}
        >
          Option 1
        </MenuItem>
        <MenuItem
          value="option2"
          className={selectedCity === "option2" ? styles.selectedMenuItem : ""}
        >
          Option 2
        </MenuItem>
        <MenuItem
          value="option3"
          className={selectedCity === "option3" ? styles.selectedMenuItem : ""}
        >
          Option 3
        </MenuItem>
      </Select>

      <InputLabel
        sx={{
          color: "black",
          fontWeight: "600",
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
          marginBlock: "1rem 40px",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              borderRadius: "1rem",
            },
          },
        }}
      >
        <MenuItem
          value="option1"
          className={
            selectedDistrict === "option1" ? styles.selectedMenuItem : ""
          }
        >
          Option 1
        </MenuItem>
        <MenuItem
          value="option2"
          className={
            selectedDistrict === "option2" ? styles.selectedMenuItem : ""
          }
        >
          Option 2
        </MenuItem>
        <MenuItem
          value="option3"
          className={
            selectedDistrict === "option3" ? styles.selectedMenuItem : ""
          }
        >
          Option 3
        </MenuItem>
      </Select>

      <InputLabel
        sx={{
          color: "black",
          fontWeight: "600",
        }}
      >
        {t("user_dashboard.property_location.label3")}
      </InputLabel>
      <Typography sx={{ color: "gray" }}>
        {t("user_dashboard.property_location.hint")}
      </Typography>
      <Select
        value={selectedStreet}
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
          marginBlock: "1rem 40px",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              borderRadius: "1rem",
            },
          },
        }}
      >
        <MenuItem
          value="option1"
          className={
            selectedStreet === "option1" ? styles.selectedMenuItem : ""
          }
        >
          Option 1
        </MenuItem>
        <MenuItem
          value="option2"
          className={
            selectedStreet === "option2" ? styles.selectedMenuItem : ""
          }
        >
          Option 2
        </MenuItem>
        <MenuItem
          value="option3"
          className={
            selectedStreet === "option3" ? styles.selectedMenuItem : ""
          }
        >
          Option 3
        </MenuItem>
      </Select>

      {isFormValid ? null : (
        <Typography variant="body2" sx={{ color: "red", marginTop: "1rem" }}>
          Please select all options.
        </Typography>
      )}
    </Box>
  );
};

export default ConfimLocation;
