import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Typography } from "@mui/material";
import LogInModal from "./LogInModal";

const LoginButton = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Button
        sx={{
          backgroundColor: { xs: "transparent", md: "var( --green-color)" },
          color: { xs: "var(--green-color)", md: "white" },
          border: { xs: "none", md: "1px solid var( --green-color)" },
          minWidth:"0",
          borderRadius: "25px",
          height: "3rem",
          "&:hover": {
            backgroundColor: "white",
            color: "var( --green-color)",
          },
        }}
        onClick={handleOpenModal}
      >
        <AccountCircleIcon
          sx={{ width: { xs: "30px" }, height: { xs: "30px" } }}
        />
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
          تسجيل الدخول
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
      <LogInModal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default LoginButton;
