import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { abha, boat, house } from "../../assets";
import styles from "../../styles/CarsouelHomeFilter.module.css";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";

const HomeSlider = () => {
  const homeImages = [abha, boat, house];
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box className={styles.custom_prevv_button} onClick={onClick}>
        <KeyboardArrowLeftIcon />
      </Box>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box className={styles.custom_nextt_button} onClick={onClick}>
        <KeyboardArrowRightIcon />
      </Box>
    );
  };

  const settings = {
    dots: true,
    appendDots: (dots) => <div className={styles.custom_dots}>{dots}</div>,
    customPaging: (i) => (
      <div
        className={`${styles.custom_dots} ${
          currentSlide === i ? styles.active_dot : ""
        }`}
      />
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box sx={{ position: "relative", margin: { xs: "auto", lg: "0" } }}>
      <Slider {...settings}>
        {homeImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "219 !important" }}
            className={styles.imageBorder}
          />
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          display: "flex",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          justifyContent: "space-evenly",
          padding: "1px 5px",
          borderRadius: "11px",
          minWidth: "62px",
        }}
      >
        <VisibilityIcon sx={{ width: "1rem" }} />
        <Typography>4K</Typography>
      </Box>
    </Box>
  );
};

export default HomeSlider;
