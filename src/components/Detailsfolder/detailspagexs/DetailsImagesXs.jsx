import React, { useEffect } from "react";
import "swiper/swiper.min.css";
import Swiper from "swiper";
import SwiperCore, { Pagination } from "swiper";
import styles from "./details.module.css";
import { Box } from "@mui/material";
import { house, boat, abha } from "../../../assets";
import LightGallery from "lightgallery/react";
SwiperCore.use([Pagination]);

const DetailsImagesXs = () => {
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: styles.details_pagination_bullet,
        bulletActiveClass: styles.details_pagination_bullet_active,
      },
    });
  }, []);

  return (
    <Box>
      <Box className={`swiper-container ${styles.details_container}`}>
        <Box className="swiper-wrapper">
          <Box className="swiper-slide">
            <img src={house} className={styles.imgSlider} />
          </Box>
          <Box className="swiper-slide">
            <img src={boat} className={styles.imgSlider} />
          </Box>
          <Box className="swiper-slide">
            <img src={abha} className={styles.imgSlider} />
          </Box>
        </Box>
        <Box className={`swiper-pagination ${styles.details_pagination}`}></Box>
      </Box>
    </Box>
  );
};

export default DetailsImagesXs;
