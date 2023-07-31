import React from "react";
import { Typography } from "@mui/material";

const OrderTitles = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: "600",
        marginBottom: "2rem",
        fontSize: { xs: "1.5rem", md: "2.125rem" },
      }}
    >
      {title}
    </Typography>
  );
};

export default OrderTitles;
