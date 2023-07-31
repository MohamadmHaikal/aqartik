import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import { boat, exciting_experience, house } from "../../assets";

import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const MainSection = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const csstransitionRef = useRef(null);
  const images = [
    {
      src: boat,
      alt: "Img Boat",
      title: "صيف بدون حر",

      description:
        "بحث وتصفح اكثر من 26 الف وحدة في اكثر من 180 مدينة ومحافظة وعش تجربة السكن ",
      buttonTitle: "تصفح بيوت العطلات في مكة",
    },
    {
      src: exciting_experience,
      alt: "Image Exciting Experience Image",
      title: "عيش التجربة في جاذران",

      description:
        "نوفر لك العديد من الخيارات للحصول على حجوزات يومية او أسبوعية او شهرية تغطي جميع المناطق لتعيش تجربة فريدة",
      buttonTitle: "تصفح بيوت العطلات في السوده",
    },
    {
      src: house,
      alt: "House Image ",
      title: "Image 3 content",
      description:
        "نوفر لك العديد من الخيارات للحصول على حجوزات يومية او أسبوعية او شهرية تغطي جميع المناطق لتعيش تجربة فري",
      buttonTitle: "تصفح بيوت العطلات في الرياض",
    },
  ];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showBox, setShowBox] = useState(true);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
    setShowBox(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBox(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeSlideIndex]);
  const getBoxTransform = (index) => {
    if (isXsScreen) {
      // For xs screens, show the box on the current slide without any translation
      return "translateX(0)";
    } else if (index === activeSlideIndex && showBox) {
      // For larger screens, show the box on the current slide without any translation
      return "translateX(0)";
    } else if (index === activeSlideIndex - 1 && showBox) {
      // Slide the box to the right
      return "translateX(-100%)";
    } else if (index === activeSlideIndex + 1 && showBox) {
      // Slide the box to the left
      return "translateX(100%)";
    } else {
      // Hide the box off to the left for all other slides
      return "translateX(100%)";
    }
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        className="mySwiper"
        effect={"fade"}
        autoplay={{
          delay: 1000,
          // disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        sx={{ position: "relative", marginTop: "11rem" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                "& img": {
                  width: "100%",
                  height: "550px !important",
                  objectFit: "cover",
                  position: "relative",
                },
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <CSSTransition
              key={index}
              classNames="slide"
              timeout={{ enter: 1000000, exit: 10000000 }}
              in={activeSlideIndex === index}
              unmountOnExit
              ref={csstransitionRef}
            >
              <Box
                sx={{
                  position: "absolute",
                  // top: "5rem",
                  top: { xs: "9rem", md: "8rem" },
                  textAlign: { xs: " center", md: "right" },
                  // transform: {
                  //   xs: "translate(-50%,-50%)",
                  // },
                  width: { xs: "100%", md: "50%" },

                  // right: { md: "5rem" },
                  right: { md: "3rem" },

                  // left: { xs: "50%" },

                  zIndex: "1000",
                  color: "white",
                  transform: getBoxTransform(index), // Apply the transform based on the slide index
                  transition: "transform 1s ease-out",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "2rem",
                      fontSize: { xs: "2rem", md: "3rem" },
                      fontWeight: "bold",
                    }}
                  >
                    {image.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    width: { xs: "50%", md: "28rem" },
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    marginX: { xs: "auto", md: "0rem" },
                  }}
                >
                  {image.description}
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    href="/your-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    component="a"
                    sx={{
                      color: "rgb(255, 255, 255)",
                      border: "2px solid white",
                      minWidth: "304px",
                      fontSize: "18px",
                      marginTop: "32px",
                      borderRadius: "24px",

                      padding: "0.3rem 0.5rem",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "white", // Replace with your desired color on hover
                        color: "var( --green-color)",
                      },
                    }}
                  >
                    {image.buttonTitle}
                  </Button>
                </Box>
              </Box>
            </CSSTransition>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "1rem",
          position: "absolute",

          zIndex: 2,
          left: { xs: "50%", md: "87%" },
          bottom: { xs: "6rem", md: "9rem" },
          transform: { xs: "translate(-50%)" },
        }}
      >
        {/* Render pagination dots */}
        {images.map((image, index) => (
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
