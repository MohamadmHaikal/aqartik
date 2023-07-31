import React, { useState } from "react";

import { Tabs, Tab, Box, Typography, TextField, Button } from "@mui/material";
import DetailsTabContent from "./DetailsTabContent";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import WifiIcon from "@mui/icons-material/Wifi";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import DescriptionIcon from "@mui/icons-material/Description";

import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import CheckIcon from "@mui/icons-material/Check";
import Map from "../../assets/map.jpg";
import HomeRooms from "./HomeRooms";

import { DetailsFeaturesBox, FiveStars } from "../Detailsfolder";

const DetailsTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const tabStyles = {
    color: "black",
    fontSize: { xs: "12px", md: "15px" },
    width: "33%",
    padding: { xs: "0 0.5rem", md: "0 3rem" },
    "&.Mui-selected": {
      backgroundColor: "var(--green-color)",
      color: "white",
      borderRadius: "25px",
      padding: { xs: "0 0.5rem", md: "0 3rem" },
    },
    "&::before": {
      content: '""',
      width: "4px",
      height: "4px",
      backgroundColor: "rgba(0, 0, 0, 0.16)",
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      right: "2px",
      transform: "translateX(50%)",
    },
  };
  const tabIndicatorStyles = {
    display: "none", // Hide the default tab indicator
  };
  const handleToggleCommentForm = () => {
    setShowCommentForm((prevShowCommentForm) => !prevShowCommentForm);
  };

  return (
    <Box>
      <Box
        sx={{
          padding: "4px",
          border: "1px solid rgba(121, 141, 174, 0.16)",
          borderRadius: "30px",
          // maxWidth: "37rem",
          width: "100%",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: tabIndicatorStyles,
          }}
          sx={{ width: "100%" }}
        >
          <Tab label="المواصفات والميزات" sx={tabStyles} />
          <Tab label="الموقع والخريطة" sx={tabStyles} />
          <Tab label="تقييمات  المعلن" sx={tabStyles} />
        </Tabs>
      </Box>
      <Box hidden={selectedTab !== 0}>
        <DetailsTabContent title="المواصفات والميزات " />
        <DetailsFeaturesBox />
      </Box>
      <Box hidden={selectedTab !== 1}>
        <DetailsTabContent title=" الموقع والخريطة " />
        <Box sx={{ display: "flex", color: "gray" }}>
          <ErrorOutlineIcon sx={{ marginX: "0.3rem" }} />
          <Typography>تظهر معلومات الموقع الدقيقة بعد تأكيد الحجز.</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            objectFit: "cover",
            border: "1px solid transparent",
            borderRadius: "2rem",
          }}
        >
          <img src={Map} alt="mapImg" style={{ width: "100%" }} />
        </Box>
      </Box>
      <Box hidden={selectedTab !== 2}>
        <DetailsTabContent title=" تقييمات الضيوف" />
        {showCommentForm && ( // Render the box conditionally based on the showCommentForm variable
          <Box
            sx={{
              border: "1px solid gray",
              borderRadius: "18px",
              padding: "1rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              اترك تعليق
            </Typography>
            <Typography sx={{ color: "gray" }}>
              *لن يتم نشر البريد الالكتروني الحقول المطلوبة محددة
            </Typography>
            <Box sx={{ display: "flex", marginY: "1rem" }}>
              <Box sx={{ width: "50%" }}>
                <TextField
                  fullWidth
                  placeholder="عنوان تعليق*"
                  required
                  InputProps={{
                    sx: {
                      borderRadius: "2rem", // Apply the desired border radius
                    },
                  }}
                />
              </Box>
              <FiveStars />
            </Box>
            <Box>
              <TextField
                fullWidth
                multiline
                rows={4} // Specify the number of rows for the multiline input
                placeholder=" تعليق*"
                required
                InputProps={{
                  sx: {
                    borderRadius: "2rem", // Apply the desired border radius
                  },
                }}
              />
            </Box>
            <Button
              sx={{
                backgroundColor: "var(--green-color)",
                color: "white",
                borderRadius: "1rem",
                paddingX: "1rem",
                marginY: "1rem",
                "&:hover": {
                  backgroundColor: "var(--green-color)",
                  color: "white",
                  transform: "scale(1.05)", // Apply scale transform on hover
                  transition: "transform 0.3s ease",
                },
              }}
            >
              ارسال تعليق
            </Button>
          </Box>
        )}
        {!showCommentForm && (
          <Box
            sx={{
              border: "1px solid #d2cdcd",
              padding: "1rem",
              width: "15rem",
              borderRadius: "1rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold", color: "gray" }}>
              ماهو تقييمك..
            </Typography>
            <FiveStars />
          </Box>
        )}
        {/* Render the FiveStars component if showCommentForm is false */}
      </Box>
    </Box>
  );
};

export default DetailsTabs;
