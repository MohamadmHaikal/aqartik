import React, { useRef, useState, useEffect } from "react";
import Cropper from "react-cropper";

import { Button, Modal, Box, Typography } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import CropIcon from "@mui/icons-material/Crop";
import styles from "./cropperImage.module.css";
import "cropperjs/dist/cropper.css";
import { useTranslation } from "react-i18next";

const CropeerImage = ({
  onCrop,
  type,
  width,
  height,
  maxImages,
  hasBackground = true,
  formData,
  setFormData,
}) => {
  const { t } = useTranslation();

  // Added hasBackground prop with default value
  const cropperRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(
    formData.thumbnail || null
  );
  const [open, setOpen] = useState(false);
  const [initialImage, setInitialImage] = useState(null);

  useEffect(() => {
    const button = document.getElementById("cropper-button");
    if (button) {
      const hasImageBackground = button.style.backgroundImage !== "";
      button.style.color = hasImageBackground
        ? "var(--green-color)"
        : "rgb(118, 118, 118)";
    }
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage) {
      setInitialImage(selectedImage);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        handleOpen();
      };
      reader.readAsDataURL(file);
    }
    // const blob = new Blob([file], { type: file.type });
    // console.log(blob);
    if (type === 1) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        thumbnail: file,
      }));
    }
    if (type === 2) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: prevFormData?.images ? [...prevFormData?.images, file] : [file], // Append new blob to the array
      }));
    }
  };

  const handleCrop = () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      if (croppedCanvas) {
        const croppedImageUrl = croppedCanvas.toDataURL();
        // if (type === 1) {
        //   croppedCanvas.toBlob((blob) => {
        //     setFormData((prevFormData) => ({
        //       ...prevFormData,
        //       thumbnail: blob,
        //     }));
        //   });
        // }
        // if (type === 2) {
        //   croppedCanvas.toBlob((blob) => {
        //     setFormData((prevFormData) => ({
        //       ...prevFormData,
        //       images: prevFormData?.images
        //         ? [...prevFormData?.images, blob]
        //         : [blob], // Append new blob to the array
        //     }));
        //   });
        // }
        onCrop(croppedImageUrl);
      }
    }
    handleClose();
  };
  const inputRef = useRef(null);

  const handleChooseImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <Button
        id="cropper-button"
        sx={{
          border: "1px dashed gray",
          borderRadius: "12px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: width || "100%",
          height: height || "200px",
          backgroundColor: "transparent",
          marginBottom: "1rem",

          "&:hover": {
            backgroundColor: "rgba(90, 64, 155, 0.04)",
          },
        }}
        style={{
          backgroundImage:
            hasBackground && selectedImage ? `url(${selectedImage})` : "none", // Set selectedImage as the background image if hasBackground is true
        }}
        onClick={handleChooseImage}
      >
        {hasBackground && selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Selected Image"
              style={{ display: "none" }}
            />
            <Box
              sx={{
                borderRadius: "12px",
                padding: "1rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "var(--green-color)",
              }}
            >
              <AddAPhotoOutlinedIcon
                sx={{
                  width: "1.5em",
                  height: "1.5em",
                  marginRight: "0.5rem",
                }}
              />
              <Typography>
                {t("user_dashboard.property_images.edit_btn")}
              </Typography>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              borderRadius: "12px",
              padding: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AddAPhotoOutlinedIcon
              sx={{
                width: "1.5em",
                height: "1.5em",
                color: "rgb(118, 118, 118)",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              sx={{
                color: "rgb(118, 118, 118)",
              }}
            >
              {t("user_dashboard.property_images.btn3")}
            </Typography>
          </Box>
        )}
      </Button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleImageSelect}
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "24px",

            p: 4,
            textAlign: "center",
          }}
        >
          {selectedImage && (
            <>
              <Cropper
                src={selectedImage}
                style={{ height: 400, width: "100%" }}
                initialAspectRatio={16 / 9}
                guides={false}
                ref={cropperRef}
                viewMode={1} // Set viewMode to "1" for "cropper-view-mode"
                dragMode="move" // Set dragMode to "move" for "cropper-point"
                background={false}
                className={`${styles.custom_cropper} custom_cropper`}
              />
              <Button
                sx={{
                  backgroundColor: "var(--green-color)",
                  color: "white",
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  "&:hover": {
                    backgroundColor: "#35846c",
                    color: "white",
                  },
                }}
                onClick={handleCrop}
              >
                <CropIcon sx={{ marginX: "0.3rem" }} />
                {t("user_dashboard.property_images.cut_btn")}
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default CropeerImage;
