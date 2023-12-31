import React, { useState } from "react";
import { Box, Typography, Link, Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import ReportModal from "../layouts/ReportModal";
import WarningIcon from "@mui/icons-material/Warning";
const customLinkStyles = {
  textDecoration: "none",
  color: "inherit",
};

const DetailsCard = () => {
  const [modalReportOpen, setModalReportOpen] = useState(false);

  const handleReportOpenModal = () => {
    setModalReportOpen(true);
  };

  const handleReportCloseModal = () => {
    setModalReportOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          borderRadius: "20px",
          border: "1px solid rgba(111, 125, 149, 0.38)",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 20px 64px",
          maxWidth: "433px",
          position: " relative",
        }}
      >
        <Box
          sx={{ display: "flex", padding: " 1rem", justifyContent: "center" }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              fontSize: "35px",
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
          >
            2500
          </Typography>
          <Typography sx={{ color: "orange", fontSize: "35px" }}>
            ريال
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgb(234, 237, 242)",
            display: "flex",
          }}
        ></Box>
        <Box sx={{ display: "flex", padding: "1rem" }}>
          <Typography sx={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
            اسم المعلن:
          </Typography>
          <Typography>محمد ممجدددد</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "1rem",
            border: "1px solid rgb(234, 237, 242)",
            padding: "0.5rem 0rem",
            margin: "1rem",
            borderRadius: "15px",
            justifyContent: "center",
            width: "10rem",
          }}
        >
          وسيط المعلن
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgb(234, 237, 242)",
            display: "flex",
          }}
        ></Box>
        <Box sx={{ display: "flex", padding: "1rem" }}>
          <Typography sx={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
            رقم مرجعي للاعلان:
          </Typography>
          <Typography> 098978</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            paddingY: "1rem",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Link
              href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
              passHref
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                style={customLinkStyles}
                sx={{
                  padding: "0.7rem 0rem",
                  width: "70%",
                  backgroundColor: "var(--green-color) ",
                  color: "white !important",
                  border: "1px solid var(--green-color)",
                  borderRadius: "25px",
                  boxShadow: "none",
                  fontSize: "17px",

                  "&:hover": {
                    color: "white",
                    backgroundColor: "var(--green-color)",
                    boxShadow: "none",
                  },
                }}
              >
                <WhatsAppIcon sx={{ marginLeft: "0.8rem" , fontSize:"25px"}} />
                واتس آب
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              href="tel:YOUR_PHONE_NUMBER"
              passHref
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                style={customLinkStyles}
                sx={{
                  padding: "0.7rem 0rem",
                  width: "70%",
                  backgroundColor: "var(--green-color) ",
                  color: "white !important",
                  border: "1px solid var(--green-color)",
                  borderRadius: "25px",
                  boxShadow: "none",
                  marginTop: "1rem",
                  fontSize: "17px",
                 
                  "&:hover": {
                    color: "white",
                    backgroundColor: "var(--green-color)",
                    boxShadow: "none",
                  },
                }}
              >
                <CallIcon sx={{ marginLeft: "0.8rem" , fontSize:"25px"}} />
                مكالمة
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "433px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "white",
            color: "var(--green-color)",
            borderRadius: "15px",
            paddingX: "2.5rem",
            fontSize: "15px",
            minWidth: "64px",
            width: "45%",
            padding: "0.8rem",

            border: "1px solid var(--green-color)",
            "&:hover": {
              backgroundColor: "white",
              color: "var(--green-color)",
              boxShadow: "none",
            },
          }}
          onClick={handleReportOpenModal}
        >
          <WarningIcon
            sx={{ color: "var(--green-color)", marginLeft: "15px" }}
          />
          إبلاغ
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "var(--green-color)",
            borderRadius: "15px",
            paddingX: "2.5rem",
            fontSize: "15px",
            minWidth: "64px",
            width: "45%",
            padding: "0.8rem",

            border: "1px solid var(--green-color)",
            "&:hover": {
              backgroundColor: "white",
              color: "var(--green-color)",
              boxShadow: "none",
            },
          }}
        >
          <ChatIcon sx={{ color: "var(--green-color)", marginLeft: "15px" }} />
          محادثة
        </Button>
        <ReportModal open={modalReportOpen} onClose={handleReportCloseModal} />
      </Box>
    </>
  );
};

export default DetailsCard;
