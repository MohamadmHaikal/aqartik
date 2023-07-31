import React, { useState } from "react";
import { Box, Typography, TextField, Button, Tooltip } from "@mui/material";
import styles from "./confirmLocation.module.css";

const HomeDescription = ({ formData, setFormData }) => {
  const [description, setDescription] = useState(formData.description || "");

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    setDescription(inputValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: inputValue,
    }));
  };
  const tooltipStyles = {
    tooltip: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  };
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "600", marginBottom: "3rem" ,  fontSize:{xs:"1.5rem" , md:"2.25rem"}}}>
        وصف العقار
      </Typography>
      <Typography
        sx={{
          color: "rgb(118, 118, 118)",
          marginBottom: "2rem",
        }}
      >
        أضف وصف مميز لعقارك و ايش يتوقع الضيف أن يجد فيه
      </Typography>
      <Typography sx={{ color: "rgb(118, 118, 118)" }}>
        73% من المضيفين المميزين (الذين لديهم حجوزات ومبيعات عالية) يكتبوا وصف
        مميز و واضح
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: "1rem",
            alignItems: "center",
          }}
        >
          <Typography
            variant="label"
            sx={{
              fontSize: "18px",
              color: "rgb(17, 17, 17)",
              fontWeight: "bold",
            }}
          >
            أكتب وصف مميز لعقارك
          </Typography>
          <Tooltip
            title={
              <div
                style={{
                  border: "1px solid rgb(212,205,299)",
                  borderRadius: "12px",
                  padding: "1rem",

                  backgroundColor: "white",
                  zIndex: "1",
                  fontSize: "1rem",
                  boxShadow: "none",
                  color: "inherit",
                  overflow: "hidden",
                }}
              >
                {/* Content to show when hovering */}
                <p
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  وصف مميز لعقارك
                </p>
                <p style={{ color: "rgb(118, 118, 118)" }}>
                  تقع في شمال الرياض مطلة على بوليفارد الرياض قريبة من شارع تركي
                  الأول. صُممت بألوان مريحة مؤثثة بأثاث مودرن. يوجد شاشة 85 بوصة
                  واشتراك بين سبورت لمتابعة المباريات. تتميز بمساحتها الواسعة
                  وخصوصية تامة بدخول ذكي. أتمنى لك إقامة سعيدة و حياك الله ضيفي.
                </p>
              </div>
            }
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "transparent",
                  maxWidth: "360px",
                },
              },
            }}
          >
            <Button sx={{ color: "var(--green-color)", fontSize: "17px" }}>
              مثال
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <TextField
        fullWidth
        multiline
        rows={9}
        placeholder=" اكتب هنا"
        required
        value={description}
        onChange={handleDescriptionChange}
        InputProps={{
          sx: {
            borderRadius: "1rem",
          },
        }}
      />
    </Box>
  );
};

export default HomeDescription;
