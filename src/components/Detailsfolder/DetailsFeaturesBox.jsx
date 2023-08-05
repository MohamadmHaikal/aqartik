import React from "react";
import { Box, Typography } from "@mui/material";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import BusinessIcon from "@mui/icons-material/Business";

import HomeRooms from "./HomeRooms";
import { useTranslation } from "react-i18next";

const DetailsFeaturesBox = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: lang === "ar" ? "right" : "left",
        borderRadius: "20px",
        border: "1px solid #eee",
        flexWrap: "wrap",
        overflow: "hidden",
      }}
    >
      <HomeRooms
        iconRoom={<BedIcon />}
        titleRoom={t(
          "details_page.details_tabs.specifications_and_features_tab.bedrooms"
        )}
        numRoom="3"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<ChairIcon />}
        titleRoom={t(
          "details_page.details_tabs.specifications_and_features_tab.living_rooms"
        )}
        numRoom="3"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<BathtubIcon />}
        titleRoom={t(
          "details_page.details_tabs.specifications_and_features_tab.bathrooms_nums"
        )}
        numRoom="4"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<AddRoadIcon />}
        titleRoom={t(
          "details_page.details_tabs.specifications_and_features_tab.area"
        )}
        numRoom="300 م"
      ></HomeRooms>
      <HomeRooms
        iconRoom={<BusinessIcon />}
        titleRoom={t(
          "details_page.details_tabs.specifications_and_features_tab.floor"
        )}
        numRoom="2"
      ></HomeRooms>

      {/* if there is update show it */}
      <Box sx={{ display: "flex", padding: "5px", alignItems: "center" }}>
        <Typography sx={{ marginX: "5px", minWidth: { md: "7rem" } }}>
          {t(
            "details_page.details_tabs.specifications_and_features_tab.last_update"
          )}
          :
        </Typography>
        <Typography sx={{ color: "gray", marginX: "5px" }}>منذ ساعة</Typography>
      </Box>
    </Box>
  );
};

export default DetailsFeaturesBox;
