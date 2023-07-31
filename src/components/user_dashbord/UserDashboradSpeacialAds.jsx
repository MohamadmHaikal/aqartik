import React from "react";
import SpecialAds from "../Filter/SpecialAds";
import { Box } from "@mui/material";

const UserDashboradSpeacialAds = () => {
  return (
    <Box sx={{ maxWidth: "90%" }}>
      <SpecialAds
        title="شقة شقة شقة شقة"
        location="الرياض"
        ratings={10}
        price={20000}
        isNew={1}
      />
    </Box>
  );
};

export default UserDashboradSpeacialAds;
