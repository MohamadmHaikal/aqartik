import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const CatgouryAds = ({ formData, setFormData, categories }) => {
  const { t, i18n } = useTranslation();

  const [nameError, setNameError] = useState();

  useEffect(() => {
    // Set the default category value to the first category in the list
    if (!formData.category && categories.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: categories[0],
      }));
    }
  }, []);

  const handleNameChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input value contains only Arabic and English letters
    const pattern = /^[\u0600-\u06FF\sA-Za-z]+$/;
    const isValidInput = pattern.test(inputValue);

    // Check if the input value is empty or contains invalid characters
    if (inputValue.trim() !== "" && isValidInput) {
      setNameError(false);
    } else {
      setNameError(true);
    }

    setFormData((prevFormData) => ({ ...prevFormData, name: inputValue }));
  };

  const handleCategoryChange = (selectedCategory) => {
    const selectedCategoryObject = categories.find(
      (category) => category.id === selectedCategory
    );
    if (selectedCategoryObject) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: {
          id: selectedCategoryObject.id,
        },
      }));
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          marginBottom: "16px",
          marginTop: "8px",
          fontSize: { xs: "1.2rem", md: "1.5rem" },
        }}
      >
        {t("user_dashboard.new_order.order_info.main_title")}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="my-text-field"
          style={{ fontWeight: "500", marginBottom: "4px" }}
        >
          {t("user_dashboard.new_order.order_info.label1")}
        </label>
        <TextField
          id="my-text-field"
          type="text"
          value={formData.name || ""}
          onChange={handleNameChange}
          error={nameError}
          helperText={nameError ? "الرجاء ادخال اسم عقار صحيح" : ""}
          placeholder={t("user_dashboard.new_order.order_info.placeholder1")}
          sx={{ borderRadius: "12px" }}
        />
      </Box>
      <Typography sx={{ fontWeight: "500", marginTop: "18px" }}>
        {t("user_dashboard.new_order.order_info.title")}
      </Typography>
      <Typography sx={{ color: "gray", marginTop: "4px" }}>
        {t("user_dashboard.new_order.order_info.desc")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-evenly", md: "space-between" },
          flexWrap: "wrap",
          height: { xs: "26rem", sm: "20rem" },
          marginTop: "16px",
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",

              borderRadius: "5px",
              minWidth: "6rem",
              height: "2rem",
              margin: "10px",
              backgroundColor:
                formData.category && formData.category.id === category.id
                  ? "var(--green-color)"
                  : "transparent",
              color:
                formData.category && formData.category.id === category.id
                  ? "white"
                  : "black",
              border:
                formData.category && formData.category.id === category.id
                  ? ""
                  : "1px solid gray",
            }}
            onClick={() => handleCategoryChange(category.id)}
          >
            <input type="hidden" value={category.id} onChange={() => {}} />
            <Typography sx={{ margin: "auto" }}>
              {i18n.language === "ar" ? category.ar_name : category.en_name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CatgouryAds;
