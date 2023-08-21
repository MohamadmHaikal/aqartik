import React, { useEffect, useRef } from "react";
import "swiper/swiper.min.css";
import Swiper from "swiper";
import SwiperCore, { Pagination } from "swiper";
import styles from "./details.module.css";
import { Box } from "@mui/material";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import { house, boat, abha } from "../../../assets";

SwiperCore.use([Pagination]);

// const images = [
//   {
//     src: "/pool.jpg",
//   },
//   {
//     src: "/baranda.jpg",
//   },
//   {
//     src: "/bedroom.jpg",
//   },
//   {
//     src: "/childrenjpg.jpg",
//   },
//   {
//     src: "/living.jpg",
//   },
//   {
//     src: "/abha.jpg",
//   },
//   {
//     src: "/parking.jpg",
//   },
//   {
//     src: "/house.jpg",
//   },
// ];

const DetailsImagesXs = ({ adInfo }) => {
  const images = adInfo.gallery;
  const galleryRef = useRef(null);
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

    // Initialize LightGallery
    const gallery = lightGallery(galleryRef.current, {
      mode: "lg-fade",
    });
    return () => {
      gallery.destroy();
    };
  }, []);

  return (
    <Box>
      <Box className={`swiper-container ${styles.details_container}`}>
        <Box className="swiper-wrapper" ref={galleryRef}>
          {images.map((image, index) => (
            <a
              key={index}
              data-src={` https://www.dashboard.aqartik.com/assets/images/ads/image/${image.name}`}
              className="swiper-slide"
            >
              <img
                src={` https://www.dashboard.aqartik.com/assets/images/ads/image/${image.name}`}
                className={styles.imgSlider}
                alt={`Image ${index}`}
              />
            </a>
          ))}
          {adInfo.video ? (
            <a
              data-src={` https://www.dashboard.aqartik.com/assets/images/ads/video/${adInfo.video.name}`}
              className="swiper-slide"
            >
              <video
                id="videoElement"
                src={` https://www.dashboard.aqartik.com/assets/images/ads/video/${adInfo.video.name}`}
                controls
                style={{ width: "500px", height: "300px" }}
              ></video>
            </a>
          ) : (
            ""
          )}
        </Box>
        <Box className={`swiper-pagination ${styles.details_pagination}`}></Box>
      </Box>
      <div id="lightgallery" style={{ display: "none" }}></div>
    </Box>
  );
};

export default DetailsImagesXs;
