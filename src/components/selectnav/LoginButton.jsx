import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import LogInModal from "./LogInModal";
import SmallNavLoginMenu from "../layouts/SmallNavLoginMenu";
import Collapse from "@mui/material/Collapse";
import { useTranslation } from "react-i18next";

const LoginButton = ({ isLoggedIn }) => {
  const [openModal, setOpenModal] = useState(false);
  const [islogIN, setIsLogIN] = useState(false);
  const { t } = useTranslation();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handlShowLogMenu = () => {
    setIsLogIN(true);
    setOpenModal(false);
  };
  const handleCLoseLogMenu = () => {
    setIsLogIN(false);
    setOpenModal(false);
  };
  return (
    <>
      <Button
        sx={{
          backgroundColor: { xs: "transparent", lg: "var( --green-color)" },
          color: { xs: "var(--green-color)", lg: "white" },
          border: { xs: "none", lg: "1px solid var( --green-color)" },
          minWidth: "0",
          borderRadius: "25px",
          height: "3rem",
          "&:hover": {
            backgroundColor: "white",
            color: "var( --green-color)",
          },
        }}
        onClick={islogIN ? handleCLoseLogMenu : handleOpenModal}
      >
        {islogIN ? (
          <CloseIcon sx={{ zIndex: "1000", display: { md: "none" } }} />
        ) : (
          <AccountCircleIcon
            sx={{
              width: { xs: "30px", md: "55px", lg: "30px" },
              height: { xs: "30px", md: "55px", lg: "30px" },
            }}
            onClick={handlShowLogMenu}
          />
        )}

        <Typography
          sx={{
            fontSize: { lg: "15px", xl: "1rem" },
            fontWeight: "500",
            marginX: { lg: "0.3rem", xl: "0.8rem" },
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {!isLoggedIn
            ? t("nav.buttons.login_btn")
            : JSON.parse(localStorage.getItem("user"))?.username}
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        />
      </Button>
      <Collapse in={islogIN} orientation="vertical">
        <SmallNavLoginMenu />
      </Collapse>
      {!islogIN && <LogInModal open={openModal} onClose={handleCloseModal} />}
    </>
  );
};

export default LoginButton;
