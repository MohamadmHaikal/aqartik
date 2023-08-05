import React, { useState } from "react";
import { OrderTitles } from ".";
import { Box, Typography, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const OrderDetails = ({ inputValues, onInputChange }) => {
  const { t } = useTranslation();
  const homedata2 = [
    {
      title: t("user_dashboard.order_details.label1"),
      subtitle: t("user_dashboard.order_details.hint1"),
      placeholder: t("user_dashboard.order_details.placeholder1"),
    },
    {
      title: t("user_dashboard.order_details.label2"),
      subtitle: t("user_dashboard.order_details.hint2"),
      placeholder: t("user_dashboard.order_details.placeholder2"),
    },
    {
      title: t("user_dashboard.order_details.label3"),
      subtitle: t("user_dashboard.order_details.hint3"),
      placeholder: t("user_dashboard.order_details.placeholder3"),
    },
    {
      title: t("user_dashboard.order_details.label4"),
      subtitle: t("user_dashboard.order_details.hint4"),
      placeholder: t("user_dashboard.order_details.placeholder4"),
    },
  ];

  return (
    <Box>
      <OrderTitles title={t("user_dashboard.order_details.title")} />
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
