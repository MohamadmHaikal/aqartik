import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { OrderTitles } from ".";
import { useTranslation } from "react-i18next";

const OrderInfo = ({ selectedCategoryId, onUpdate, onSelect }) => {
  const { t } = useTranslation();
  const categoriess = [
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

  const handleCategoryChange = (categoryId, categoryName) => {
    onSelect();
    onUpdate({
      selectedCategoryId: categoryId,
      selectedCategoryName: categoryName,
    });
    console.log("Selected Category:", categoryId, categoryName);
  };
  return (
    <>
      <OrderTitles
        title={t("user_dashboard.new_order.order_info.main_title")}
      />
      <Box>
        <Typography sx={{ fontWeight: "600" }}>
          {t("user_dashboard.new_order.order_info.title")}
        </Typography>
        <Typography sx={{ color: "gray" }}>
          {t("user_dashboard.new_order.order_info.desc")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-evenly", md: "space-between" },
          flexWrap: "wrap",
          height: { xs: "26rem", sm: "30rem" },
          overflowY: "scroll",
          marginTop: "2rem",
        }}
      >
        {categoriess.map((category) => (
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
              cursor: "pointer",
              backgroundColor:
                selectedCategoryId === category.id
                  ? "var(--green-color)"
                  : "transparent",
              color: selectedCategoryId === category.id ? "white" : "black",
              border:
                selectedCategoryId === category.id ? "" : "1px solid black",
            }}
            onClick={() => handleCategoryChange(category.id)}
          >
            <input type="hidden" value={category.id} onChange={() => {}} />
            <Typography sx={{ margin: "auto" }}>{category.name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default OrderInfo;
