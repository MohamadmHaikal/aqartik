import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import { boat, exciting_experience, house } from "../../assets";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import useDataFetcher from "../../api/useDataFetcher ";
import { AnimatePresence, motion } from "framer-motion";
const MainSection = () => {
  const { data, isLoading, error, get, post } = useDataFetcher();
  const [bannersData, setBannersData] = useState([]);

  useEffect(() => {
    get("/api/settings/banners/all");
  }, []);
  useEffect(() => {
    if (data && data.banners) {
      localStorage.setItem("bannersData", JSON.stringify(data.banners));
    }
  }, [data]);
  useEffect(() => {
    const storedData = localStorage.getItem("bannersData");
    if (storedData) {
      setBannersData(JSON.parse(storedData));
    } else {
    }
  }, []);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [prevLanguage, setPrevLanguage] = useState(i18n.language);
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    // Check if the language has changed
    if (prevLanguage !== i18n.language) {
      setActiveSlideIndex(0);
      setSwiperKey((prev) => prev + 1);
      // Language has changed, you can perform any necessary actions here
      // For example, update your Swiper slides or other content
      setPrevLanguage(i18n.language); // Update the previous language
    }
  }, [i18n.language, prevLanguage]);

  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    console.log(swiper);
    setActiveSlideIndex(swiper.realIndex);
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowBox(false);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, [activeSlideIndex]);

  // Unnecessary //

  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        key={swiperKey}
        className="mySwiper"
        effect={"Cube"}
        autoplay={{
          delay: 8000,
          // disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        sx={{ position: "relative", marginTop: "11rem" }}
      >
        {data &&
          data.banners.map((banner, index) => {
            return (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "450px !important",
                      objectFit: "cover",
                      position: "relative",
                    },
                  }}
                >
                  {banner.image && (
                    <img
                      src={`https://www.dashboard.aqartik.com/assets/images/banners/${banner.image.name}`}
                      alt={banner.ar_title}
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </Box>
                <AnimatePresence>
                  {activeSlideIndex === index && (
                    <motion.div
                      key={index}
                      classNames="slide"
                      // timeout={{ enter: 10000, exit: 10000 }}
                      // in={activeSlideIndex === index}
                      // unmountOnExit
                      // ref={csstransitionRef}
                      // initial={{ opacity: 0 }}
                      // animate={{
                      //   opacity: 1,
                      //   transition: { type: "spring", duration: ".5" },
                      // }}
                      // exit={{ opacity: 0 }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          // top: "5rem",
                          top: { xs: "9rem", md: "8rem" },
                          textAlign: {
                            xs: " center",
                            md: lang === "ar" ? "right" : "left",
                          },
                          // transform: {
                          //   xs: "translate(-50%,-50%)",
                          // },
                          width: { xs: "100%", md: "50%" },

                          // right: { md: "5rem" },
                          right: { md: lang === "ar" ? "5rem" : "" },
                          left: { md: lang === "ar" ? "" : "3rem" },

                          // left: { xs: "50%" },

                          zIndex: "1000",
                          color: "white",
                          // transform: () => getBoxTransform(index),
                          // transition: "transform 1s ease-out",
                        }}
                      >
                        <Box>
                          <motion.h3
                            style={{
                              marginBottom: "1rem",
                              fontSize: "2.5rem",
                              fontWeight: "bold",
                            }}
                            initial={
                              !isXsScreen && { x: lang === "ar" ? 100 : -100 }
                            }
                            animate={
                              !isXsScreen && {
                                x: 0,
                                transition: {
                                  delay: 0.3,
                                  duration: 0.3,
                                  type: "spring",
                                },
                              }
                            }
                            exit={
                              !isXsScreen && { x: lang === "ar" ? -100 : 100 }
                            }
                          >
                            {banner.ar_title}
                          </motion.h3>
                        </Box>
                        <motion.p
                          style={{
                            width: { xs: "50%", md: "28rem" },
                            fontSize: { xs: "1rem", md: "16px" },
                            marginX: { xs: "auto", md: "0rem" },
                          }}
                          initial={
                            !isXsScreen && { x: lang === "ar" ? 150 : -150 }
                          }
                          animate={
                            !isXsScreen && {
                              x: 0,
                              transition: {
                                delay: 0.3,
                                duration: 0.5,
                                type: "spring",
                              },
                            }
                          }
                          exit={
                            !isXsScreen && { x: lang === "ar" ? -150 : 150 }
                          }
                        >
                          {banner.ar_description}
                        </motion.p>
                        <motion.div
                          initial={
                            !isXsScreen && { x: lang === "ar" ? 200 : -200 }
                          }
                          animate={
                            !isXsScreen && {
                              x: 0,
                              transition: {
                                delay: 0.3,
                                duration: 0.7,
                                type: "spring",
                              },
                            }
                          }
                          exit={
                            !isXsScreen && { x: lang === "ar" ? -200 : 200 }
                          }
                        >
                          <Button
                            variant="contained"
                            href="/your-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            component="a"
                            sx={{
                              color: "rgb(255, 255, 255)",
                              border: "2px solid white",
                              minWidth: "250px",
                              fontSize: "18px",
                              marginTop: "48px",
                              borderRadius: "24px",

                              padding: "0.3rem 0.5rem",
                              backgroundColor: "transparent",
                              "&:hover": {
                                backgroundColor: "white",
                                color: "var( --green-color)",
                              },
                            }}
                          >
                            {banner.button_text_ar}
                          </Button>
                        </motion.div>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "1rem",
          position: "absolute",
          zIndex: 2,
          left: { xs: "50%", md: "87%" },
          bottom: { xs: "6rem", md: "6rem" },
          transform: { xs: "translate(-50%)" },
        }}
      >
        {/* Render pagination dots */}
        {data &&
          data.banners.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-block",
                width: activeSlideIndex === index ? "24px" : "9px",
                height: "9px",
                marginLeft: "4px",
                borderRadius: activeSlideIndex === index ? "5px" : "50%",
                backgroundColor:
                  activeSlideIndex === index ? "rgb(253, 205, 5)" : "white",
                mx: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => setActiveSlideIndex(index)}
            />
          ))}
      </Box>
    </Box>
  );
};

export default MainSection;
