import React, { useEffect, useRef, useState } from "react";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import "../../styles/detailsimages.css";
import { Button, useMediaQuery, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DetailsImages() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const galleryRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const gallery = lightGallery(galleryRef.current, {
      mode: "lg-fade",
    });

    return () => {
      gallery.destroy();
    };
  }, []);

  const images = [
    {
      src: "/pool.jpg",
      alt: "boat image",
    },
    {
      src: "/baranda.jpg",
      alt: "baranda",
    },
    {
      src: "/bedroom.jpg",
      alt: "bed room",
    },
    {
      src: "/childrenjpg.jpg",
      alt: "children",
    },
    {
      src: "/living.jpg",
      alt: "living",
    },
    {
      src: "/abha.jpg",
      alt: "abha",
    },
  ];

  const gridTemplate = {
    1: "1fr",
    2: "1fr 1fr",
    3: "1fr 2fr",
    4: "2fr 2fr ",
    5: "2fr 2fr  4fr ",
  };
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const displayImages = isXsScreen
    ? images.slice(0, 1)
    : showMore
    ? images
    : images.slice(0, 5);
  const totalImages = displayImages.length;

  const handleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Box
        ref={galleryRef}
        sx={{
          display: "grid",
          gridTemplateColumns: gridTemplate[totalImages],
          gap: "10px",
          borderRadius: "20px",
          overflow: "hidden",
          height: { xs: "250px", md: "508px" },
          position: "relative",
          direction: "ltr",
        }}
      >
        {images.map((image, index) => (
          <a
            key={image.src}
            // data-lg-size="1406-1390"
            className="gallery-item"
            data-src={image.src}
            style={{
              height:
                isXsScreen && totalImages === 1
                  ? "250px"
                  : (totalImages === 2 && "508px") ||
                    (totalImages === 2 && "508px") ||
                    (totalImages === 3 && index === 1 && "508px") ||
                    (totalImages === 3 &&
                      (index === 2 || index === 0) &&
                      "254px") ||
                    (totalImages === 4 && "254px") ||
                    (totalImages === 5 && index === 2 && "508px") ||
                    "254px",
              marginTop:
                (totalImages === 3 && index === 2) ||
                (totalImages === 5 && (index === 3 || index === 4))
                  ? "-16rem"
                  : "0",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </a>
        ))}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: lang === "ar" && "40px",
            left: lang === "en" && "40px",
            zIndex: "9",
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexDirection: lang === "en" && "row-reverse",
          }}
        >
          {!showVideo && (
            <button
              style={{
                marginTop: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                backdropFilter: "blur(15px)",
                color: "rgb(255, 255, 255)",
                borderRadius: "12px",
                height: "48px",
                fontSize: "15px",
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
                border: "none",
                padding: "0rem 1rem ",
                alignItems: "center",
                display: "flex",
                pointerEvents: "none",
              }}
            >
              {t("details_page.images_btns.show_vids")}
            </button>
          )}
          {!showMore && images.length > 4 && (
            <button
              onClick={handleShowMore}
              style={{
                marginTop: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                backdropFilter: "blur(15px)",
                color: "rgb(255, 255, 255)",
                borderRadius: "12px",
                height: "48px",
                fontSize: "15px",
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
                border: "none",
                padding: "0rem 1rem ",
                alignItems: "center",
                display: "flex",
                pointerEvents: "none",
              }}
            >
              <PhotoLibraryOutlinedIcon sx={{ marginX: "0.2rem" }} />
              {t("details_page.images_btns.show_more")}
            </button>
          )}
        </div>
      </Box>
    </div>
  );
}
