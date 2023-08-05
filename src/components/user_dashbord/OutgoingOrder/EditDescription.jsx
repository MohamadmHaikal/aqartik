import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const EditDescription = ({ onCancel }) => {
  const [description, setDescription] = useState(" ");
  const { t } = useTranslation();
  const handleDescriptionChange = (event) => {
    const value = event.target.value;
  };
  return (
    <Box>
      <Typography
        sx={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: "1rem" }}
      >
        {t("user_dashboard.incoming_orders.card5.title")}
      </Typography>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "1rem ",
          marginInline: "auto",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        <Button
          type="submit"
          sx={{
            fontWeight: "600",
            borderRadius: "8px",
            minWidth: "186px",
            padding: "0.75rem 2.5rem",
            height: "50px",
            backgroundColor: "var(--green-color)",
            color: "white",
            "&:hover": {
              backgroundColor: "#0b7b5a",
              color: "white",
            },
          }}
        >
          {t("user_dashboard.outgoing_requests.submit_btn")}
        </Button>
        <Button
          sx={{
            fontWeight: "600",
            borderRadius: "8px",

            border: "1px solid var(--green-color)",
            minWidth: "186px",
            padding: "0.75rem 2.5rem",
            height: "50px",
            backgroundColor: "white",
            color: "var(--green-color)",
            "&:hover": {
              backgroundColor: "#e5f9f4",
            },
          }}
          onClick={onCancel}
        >
          {t("user_dashboard.outgoing_requests.cancel_btn")}
        </Button>
      </Box>
    </Box>
  );
};

export default EditDescription;
