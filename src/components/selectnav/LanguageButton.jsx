import React from "react";

import { Typography, Button } from "@mui/material";

const LanguageButton = () => {
  return (
    <Button
      sx={{
        backgroundColor: "transparent",
        display: {
          xs: "none",
          md: "inline-flex",
        },
      }}
    >
      <Typography
        variant="label"
        sx={{
          display: "grid",
          color: "rgb(120, 120, 131)",
          fontSize: "11px",
        }}
      >
        Browse In
        <Typography
          variant="span"
          sx={{
            color: "black",
            textDecoration: "underline",
            fontWeight: "bold",
            fonstSize: "14px",
          }}
        >
          English
        </Typography>
      </Typography>
    </Button>
  );
};

export default LanguageButton;
