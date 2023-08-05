import React, { useState } from "react";
import { Box, Button, Link, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./swipermap.module.css";
import { house } from "../../assets";
import FavoriteIcons from "../Filter/FavoriteIcons";

const AdsListSmall = () => {
  const [isBoxVisible, setBoxVisible] = useState(true);

  const handleBoxClose = () => {
    setBoxVisible(false);
  };

  if (!isBoxVisible) {
    return null; // Return null when the Box is not visible
  }
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        position: "absolute",
        zIndex: "100000000",
        maxHeight: "90vh",
        bottom: "0px",
        borderRadius: "20px 20px 0px 0px",
        boxShadow: "rgba(0, 0, 0, 0.51) 0px 6px 10px",
        height: "280px",
        display: { md: "none" },
      }}
    >
      <Box sx={{ marginTop: "20px" }}>
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "rgb(132, 132, 132)",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 6px 6px",
            transform: "scale(0.8)",
            padding: "3px",
          }}
          onClick={handleBoxClose}
        >
          <CloseIcon sx={{ color: "white", fontSize: "1.25rem" }} />
        </IconButton>
        <Typography
          sx={{ marginRight: "15px", fontSize: "15px", fontWeight: "700" }}
        >
          المزيد من وحدات هذا العقار
        </Typography>
      </Box>
      <Box sx={{ marginTop: "20px", width: "100%" }}>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className={Styles.swiper_container}
        >
          <SwiperSlide className={Styles.swiper_slide}>
            <Box
              sx={{
                position: "relative",
                paddingTop: "4px",
                paddingBottom: "4px",
              }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  height: "130px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px",
                  overflow: "hidden",
                  position: "relative",
                  display: "block",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      width: "117px",
                      height: "130px",
                      overflow: "hidden",
                      position: "relative",
                      borderRadius: "0px",
                    }}
                  >
                    <img
                      src={house}
                      alt="home"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                  </Box>
                  <Box sx={{ padding: "9px" }}>
                    <Box
                      sx={{
                        display: "flex",

                        alignItems: "center",
                        flexDirection: "row",
                        marginBottom: "10px",
                      }}
                    >
                      <StarIcon
                        sx={{
                          marginLeft: "5px",
                          color: "var(--green-color)",
                          fontSize: "1.2rem",
                        }}
                      />
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        9.3 تقييم
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "700",
                        marginBottom: "10px",
                        color: "black",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      استديو انيق بموقع مميز
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--green-color)",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      1000 ر.س
                    </Typography>
                  </Box>
                  <Box sx={{ position: "absolute", top: "10px", left: "10px" }}>
                    <FavoriteIcons />
                  </Box>
                </Box>
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
                paddingTop: "4px",
                paddingBottom: "4px",
              }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  height: "130px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px",
                  overflow: "hidden",
                  position: "relative",
                  display: "block",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      width: "117px",
                      height: "130px",
                      overflow: "hidden",
                      position: "relative",
                      borderRadius: "0px",
                    }}
                  >
                    <img
                      src={house}
                      alt="home"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                  </Box>
                  <Box sx={{ padding: "9px" }}>
                    <Box
                      sx={{
                        display: "flex",

                        alignItems: "center",
                        flexDirection: "row",
                        marginBottom: "10px",
                      }}
                    >
                      <StarIcon
                        sx={{
                          marginLeft: "5px",
                          color: "var(--green-color)",
                          fontSize: "1.2rem",
                        }}
                      />
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        9.3 تقييم
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "700",
                        marginBottom: "10px",
                        color: "black",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      استديو انيق بموقع مميز
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--green-color)",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      1000 ر.س
                    </Typography>
                  </Box>
                  <Box sx={{ position: "absolute", top: "10px", left: "10px" }}>
                    <FavoriteIcons />
                  </Box>
                </Box>
              </Link>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default AdsListSmall;
