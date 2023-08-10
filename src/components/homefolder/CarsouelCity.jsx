import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/CarsouelCity.module.css";

import { abha, jeddah } from "../../assets";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { Link } from "@mui/material";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { cities } from "./cities";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
const CustomPrevButton = ({ onClick }) => {
  // Custom previous button component
  return (
    <button className={styles.custom_prev_button} onClick={() => onClick()}>
      <ChevronLeftIcon />
    </button>
  );
};

const CustomNextButton = ({ onClick }) => {
  // Custom next button component
  return (
    <button className={styles.custom_next_button} onClick={() => onClick()}>
      <ChevronRightIcon />
    </button>
  );
};

const Responsive = {
  0: {
    items: 1.5,
    margin: 5,
  },
  768: {
    items: 2.5,
    margin: 10,
  },
  1024: {
    items: 3,
    margin: 20,
  },
};

const CarsouelCity = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const owlCarouselRef = useRef(null);
  const history = createBrowserHistory();
  const [carouselKey, setCarouselKey] = useState(0);

  const [itemsArray, setItemsArray] = useState(cities);
  const handleCityClick = (city) => {
    history.push(`/mappage/${city.city_lang}/${city.city_long}`);
  };

  const handlePrevClick = () => {
    if (owlCarouselRef.current) {
      owlCarouselRef.current.prev();
    }
    setItemsArray((prevItems) => {
      return prevItems;
    });
  };

  const handleNextClick = () => {
    if (owlCarouselRef.current) {
      owlCarouselRef.current.next();
    }
    setItemsArray((prevItems) => {
      return prevItems;
    });
  };

  const customNavText = [
    <CustomPrevButton onClick={handlePrevClick} />,
    <CustomNextButton onClick={handleNextClick} />,
  ];

  useEffect(() => {
    setCarouselKey((prevKey) => prevKey + 1);
  }, [itemsArray]);
  return (
    <div style={{ position: "relative" }}>
      <OwlCarousel
        ref={owlCarouselRef}
        key={carouselKey}
        loop={true}
        items={2}
        rtl={true}
        startPosition={
          lang === "ar" ? itemsArray.length - 2 : itemsArray.length
        }
        responsive={Responsive}
        autoplay={true}
        autoplayTimeout={7000}
        autoplayHoverPause={true}
        dots={false}
        nav={false}
        navText={customNavText}
        className={styles.city_carsouel}
      >
        {itemsArray.map((city, index) => (
          <div className={styles.item} key={`${city.src}-${index}`}>
            {/* Render your item content here */}
            <Link
              to={`/mappage/${city.city_lang}/${city.city_long}`}
              onClick={(e) => {
                e.preventDefault();
                handleCityClick(city);
              }}
            >
              <div className={styles.cityDiv}>
                <div className={styles.cityImg}>
                  <div className={styles.Imgbackgrounddiv}>
                    <img
                      src={`./cities/${city.img_url}`}
                      // alt={item.alt}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
                <div className={styles.cityImgTitleDiv}>
                  <Typography
                    variant="h5"
                    className={styles.ImgHeading}
                    sx={{ fontWeight: "600 !important" }}
                  >
                    {lang === "ar" ? city.name_ar : city.name_en}
                  </Typography>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </OwlCarousel>
      <CustomPrevButton onClick={handlePrevClick} />
      <CustomNextButton onClick={handleNextClick} />
    </div>
  );
};

export default CarsouelCity;
