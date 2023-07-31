import React from "react";
import { Box, Typography } from "@mui/material";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import BusinessIcon from "@mui/icons-material/Business";

import HomeRooms from "./HomeRooms";
const DetailsFeaturesBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: " right",
        borderRadius: "20px",
        border: "1px solid #eee",
        flexWrap: "wrap",
        overflow: "hidden",
      }}
    >
      <HomeRooms
        iconRoom={<BedIcon />}
        titleRoom="غرف النوم"
        numRoom="3"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<ChairIcon />}
        titleRoom="غرف الجلوس"
        numRoom="3"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<BathtubIcon />}
        titleRoom=" عدد الحمامات "
        numRoom="4"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<AddRoadIcon />}
        titleRoom=" المساحة  "
        numRoom="300 م"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<BusinessIcon />}
        titleRoom=" الطابق  "
        numRoom="2"
      ></HomeRooms>

      {/* if there is update show it */}
      <Box sx={{ display: "flex", padding: "5px", alignItems: "center" }}>
        <Typography sx={{ marginX: "5px", minWidth:{md:"7rem"} }}>
          أخر تحديث:
        </Typography>
        <Typography sx={{ color: "gray", marginX: "5px" }}>منذ ساعة</Typography>
      </Box>
    </Box>
  );
};

export default DetailsFeaturesBox;
