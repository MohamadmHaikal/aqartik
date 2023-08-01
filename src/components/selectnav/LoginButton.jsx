import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import LogInModal from "./LogInModal";
import SmallNavLoginMenu from "../layouts/SmallNavLoginMenu";
import Collapse from "@mui/material/Collapse";

const LoginButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const [islogIN, setIsLogIN] = useState(false);

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
          backgroundColor: { xs: "transparent", md: "var( --green-color)" },
          color: { xs: "var(--green-color)", md: "white" },
          border: { xs: "none", md: "1px solid var( --green-color)" },
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
            sx={{ width: { xs: "30px" }, height: { xs: "30px" } }}
            onClick={handlShowLogMenu}
          />
        )}

        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            marginX: "0.8rem",
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {islogIN ? "تسجيل الدخول" : " Rama"}
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
