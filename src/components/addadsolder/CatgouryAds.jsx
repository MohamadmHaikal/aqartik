import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const CatgouryAds = ({ formData, setFormData, setError, error, onNext }) => {
  const categories = [
    { id: 1, name: "استراحة" },
    { id: 2, name: "شقة" },
    { id: 3, name: "فيلا" },
    { id: 4, name: "مزرعة" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
    { id: 9, name: "Category 9" },
    { id: 10, name: "Category 10" },
    { id: 11, name: "Category 11" },
    { id: 12, name: "Category 12" },
    { id: 13, name: "Category 13" },
    { id: 14, name: "Category 14" },
    { id: 15, name: "Category 15" },
    { id: 16, name: "Category 16" },

    // ... and so on, add all 21 categories here
  ];

  const handleNameChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input value contains only Arabic and English letters
    const pattern = /^[\u0600-\u06FF\sA-Za-z]+$/;
    const isValidInput = pattern.test(inputValue);

    // Check if the input value is empty or contains invalid characters
    if (inputValue.trim() !== "" && isValidInput) {
      setError(false);
    } else {
      setError(true);
    }

    setFormData((prevFormData) => ({ ...prevFormData, name: inputValue }));
  };
  const handleCategoryChange = (selectedCategory) => {
    const selectedCategoryObject = categories.find(
      (category) => category.name === selectedCategory
    );
    if (selectedCategoryObject) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: {
          value: selectedCategoryObject.name,
          id: selectedCategoryObject.id,
        },
      }));
    }
  };

  useEffect(() => {
    // Set the default category value to the first category in the list
    if (!formData.category && categories.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: categories[0],
      }));
    }
  }, []);
  // console.log("Selected Category:", formData.category);
  // console.log("Entered Name:", formData.name);

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "600", marginBottom: "2rem" , fontSize:{xs:"1.5rem" , md:"2.25rem"} }}>
        معلومات العقار
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="my-text-field"
          style={{ fontWeight: "600", marginBottom: "1rem" }}
        >
          اسم عقارك
        </label>
        <TextField
          id="my-text-field"
          type="text"
          value={formData.name || ""}
          onChange={handleNameChange}
          error={error}
          helperText={error ? "الرجاء ادخال اسم عقار صحيح" : ""}
          placeholder="ادخل اسم عقارك الذي سيظهر للضيوف"
          sx={{ borderRadius: "12px" }}
        />
      </Box>
      <Typography sx={{ fontWeight: "600", marginTop: "2rem" }}>
        تصنيف عقارك
      </Typography>
      <Typography sx={{ color: "gray", marginTop: "0.5rem" }}>
        حدد التصنيف المناسب
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: {xs:"space-evenly" , md:"space-between"},
          flexWrap: "wrap",
          height: { xs: "26rem", sm: "20rem" },
          overflowY: "scroll",
          marginTop: "2rem",
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
              padding: "0.5rem",
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
                  : "1px solid black",
            }}
            onClick={() => handleCategoryChange(category.name)}
          >
            <input type="hidden" value={category.id} onChange={() => {}} />
            <Typography sx={{ margin: "auto" }}>{category.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CatgouryAds;
