import React, { useState } from "react";
import { OrderTitles } from ".";
import { Box, Typography, TextField } from "@mui/material";

const OrderDetails = ({ inputValues, onInputChange }) => {
  const homedata2 = [
    {
      title: "السعر",
      subtitle: "ريال سعودي",
      placeholder: "الرجاء كتابة السعر...",
    },
    {
      title: "المساحة",
      subtitle: "متر مربع",
      placeholder: "الرجاء كتابة المساحة...",
    },
    { title: "العرض", subtitle: "متر", placeholder: "الرجاء كتابة العرض..." },
    { title: "طول", subtitle: "متر", placeholder: "الرجاء كتابة طول..." },
  ];
 
  return (
    <Box>
      <OrderTitles title="معلومات العقار" />
      {homedata2.map((item, index) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
          }}
          key={index}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <label
              htmlFor={`my-text-field-${index}`}
              style={{ fontWeight: "600", marginBottom: "0.5rem" }}
            >
              {item.title}
            </label>
            <span
              style={{
                color: "#999",
                marginRight: "0.5rem",
                fontSize: "12px",
              }}
            >
              ({item.subtitle}){" "}
            </span>
          </Box>
          <TextField
            type="text"
            name={`input-${index}`}
            placeholder={item.placeholder}
            sx={{
              borderRadius: "12px",
              textAlign: "right",
              "& input[type=number]": {
                " WebkitAppearance": "textfield",
              },
            }}
            value={inputValues[index] || ""}
            onChange={(event) => onInputChange(index, event)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default OrderDetails;
