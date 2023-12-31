import React from "react";
import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import CheckBoxHome from "../Filter/CheckBoxHome";
import { Price, Search } from "../../assets";
import PriceSlider from "../Filter/PriceSlider";

const checkboxesextra = [
  { id: 1, label: "أظهر لي العروض فقط" },
  { id: 2, label: "اظهر لي المتاح فقط" },
  { id: 3, label: "أظهر لي الوحدات بدون تأمين فقط" },
];
const MapFilter = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            maxWidth: "848px",
            width: "100%",
            height: "calc(-224px + 100vh)",
            backgroundColor: "rgb(255, 255, 255)",
            zIndex: "99",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "16px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 64px",
            overflow: "hidden",
            maxHeight: "576px",
          }}
        >
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{
              position: "absolute",
              left: "20px",
              top: "20px",
              zIndex: "9",
              padding: "12px",
              backgroundColor: "rgba(0, 0, 0, 0.32)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.32)",
              },
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: "20px", color: "white" }} />
          </IconButton>
          <Box sx={{ textAlign: "center", padding: "25px" }}>
            <Typography
              sx={{
                color: "var(--green-color)",
                fontWeight: "700",
                fontSize: "1.5rem",
              }}
            >
              تصفية النتائج
            </Typography>
          </Box>
          <Box
            sx={{
              border: "none",
              height: "1px",
              margin: "0",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
            }}
          >
            <Box sx={{ height: "calc(-400px + 100vh)", maxHeight: "400px" }}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  padding: "0px 62px",
                  backgroundColor: "rgb(250, 250, 250)",
                  position: "relative",
                }}
              >
                <Box>
                  <Box sx={{ paddingTop: "40px", paddingBottom: "50px" }}>
                    <Box
                      sx={{
                        display: "flex",

                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <img src={Search} style={{ marginLeft: "16px" }} />
                      <Typography sx={{ fontSize: "17px", fontWeight: " 800" }}>
                        البحث المتقدم
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: "15px", marginRight: "-25px" }}>
                      <CheckBoxHome checkboxes={checkboxesextra} />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: "1px",
                    margin: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.12)",
                  }}
                ></Box>
                <Box
                  sx={{
                    marginTop: { sm: "15px", md: "40px" },
                    marginBottom: "50px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={Price}
                      alt="price"
                      style={{ marginLeft: "16px" }}
                    />
                    <Typography sx={{ fontSize: "17px", fontWeight: " 800" }}>
                      السعر
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "20px" }}>
                    <PriceSlider></PriceSlider>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: "2px",
                  margin: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                }}
              ></Box>
            </Box>
            <Box sx={{ width: "100%", height: "100px" }}>
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  height: "100%",
                  paddingX: "60px",
                }}
              >
                <Button
                  sx={{
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: "700",
                    borderRadius: "12px",
                    color: "var(--green-color)",
                  }}
                >
                  مسح الكل
                </Button>
                <Button
                  sx={{
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: "700",
                    borderRadius: "12px",
                    backgroundColor: "var(--green-color)",
                    color: "white",
                    paddingX: "18px",
                    "&:hover": {
                      backgroundColor: "var(--green-color)",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  اظهر بيوت العطلات
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MapFilter;
