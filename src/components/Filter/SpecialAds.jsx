import React from "react";

import { Box, Typography } from "@mui/material";
import HomeSlider from "./HomeSlider";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteIcons from "./FavoriteIcons";

const SpecialAds = ({
  title,
  location,
  icons,
  description,
  ratings,
  price,
  isNew,
}) => {
  return (
    <>
      <a
        href="details"
        style={{
          display: "flex",
          textDecoration: "none",
          flexDirection: {
            xs: "column",
            md: "row",
          },

          color: "inherit",

          "&:hover, &:focus, &:active": {
            textDecoration: "none",
            color: "inherit",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "100%" },
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            padding: "8px",
            backgroundColor: "transparent",
            borderRadius: "24px",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.086) 0px 3px 6px",
            marginTop: "1rem",
            textDecoration: "none",
            color: "inherit",

            "&:hover, &:focus, &:active": {
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "rgb(245, 248, 252)",
            },
          }}
        >
          {/* <Box>{tab.content}</Box> */}

          <Box
            sx={{
              width: { xs: "100%", md: "300px" },
              height: "219px !important",
              borderRadius: "16px",
              backgroundColor: "rgb(243, 243, 243)",
              position: "relative",
              margin: { xs: "auto", lg: "0" },
            }}
          >
            <HomeSlider />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                padding: "0.5rem",
                display: "flex",

                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginY: { xs: "0.5rem" },
                    fontSize: { xs: "18px", md: "1.25rem" },
                  }}
                >
                  {title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    marginY: { xs: "0.7rem", md: "0rem" },
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ color: "rgb(132, 132, 132)" }}
                  />
                  <Typography sx={{ color: "rgb(132, 132, 132)" }}>
                    {" "}
                    {location}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginY: { xs: "0.5rem" } }}>
                <Typography
                  sx={{
                    color: "var(--green-color)",
                    fontWeight: "600",
                    marginX: "0.3rem",
                    fontSize: { xs: "16px", md: "20px" },
                  }}
                >
                  {price} ر.س
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              {icons &&
                icons.map((icon, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      marginX: "0.5rem",
                      color: "rgb(132, 132, 132)",
                    }}
                  >
                    {icon.icon}
                    <Typography sx={{ marginRight: "5px" }}>
                      {icon.number}
                    </Typography>
                  </Box>
                ))}
            </Box>
            <Box
              sx={{
                color: "rgb(132, 132, 132)",
                fontSize: { xs: "13px", md: "16px" },
                marginBottom: { xs: "0.5rem" },
                padding: "0.3rem 1rem",

                maxWidth: { xs: "100%", md: "80%" },
              }}
            >
              {description}
            </Box>

            <Box
              sx={{
                padding: "0.5rem",
                display: "flex",
                marginTop: "-1rem",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <StarOutlinedIcon sx={{ color: "var(--green-color)" }} />
                <Typography sx={{ color: "rgb(132, 132, 132)" }}>
                  ({ratings})
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {isNew ? (
                  <Box
                    sx={{
                      backgroundColor: "rgb(255, 255, 255)",
                      border: "1px solid rgb(230, 230, 230)",
                      display: "inline-flex",
                      width: "4.5rem",
                      borderRadius: "0.5rem",
                      marginX: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    <StarOutlinedIcon sx={{ color: "gold" }}></StarOutlinedIcon>
                    <Typography>جديد</Typography>
                  </Box>
                ) : null}
                <FavoriteIcons />
              </Box>
            </Box>
          </Box>
        </Box>
      </a>
    </>
  );
};

export default SpecialAds;
