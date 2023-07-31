import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Link } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Notification = () => {
  const notificationRef = useRef(null);
  const notificationIconRef = useRef(null);
  const [openNotifivations, setOpenNotification] = useState(false);
  const handleOpenNotification = () => {
    setOpenNotification(!openNotifivations);
  };

  const handleOutsideClick = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target) &&
      !notificationIconRef.current.contains(event.target)
    ) {
      setOpenNotification(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <NotificationsIcon
        ref={notificationIconRef}
        sx={{ fontSize: "28px", color: "var(--green-color)", marginTop: "5px" }}
        onClick={handleOpenNotification}
      />
      {openNotifivations && (
        <Box
          ref={notificationRef}
          sx={{
            backgroundColor: "white",
            boxShadow: "5",
            minWidth: "20rem",
            textAlign: "right",

            borderRadius: "1rem",
            zIndex: "10",
            position: "absolute",
            left: "-120px",
            top: " 3rem",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              borderBottom: "1px solid #eee",
              color: "black",
              padding: " 1rem",
              fontWeight: "600",
            }}
          >
            الإشعارات
          </Typography>
          <Box>
            <Box sx={{ borderBottom: "1px solid #eee", padding: "1rem" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Typography sx={{ color: "var(--green-color)" }}>
                  طلبات العضوية
                </Typography>
                <Typography>jdv jdfvnd dfjvkdjv </Typography>
                <Typography sx={{ color: "gray", textAlign: "left" }}>
                  منذ 14 ساعة
                </Typography>
              </Link>
            </Box>
            <Box sx={{ borderBottom: "1px solid #eee", padding: "1rem" }}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Typography sx={{ color: "var(--green-color)" }}>
                  طلبات العضوية
                </Typography>
                <Typography>jdv jdfvnd dfjvkdjv </Typography>
                <Typography sx={{ color: "gray", textAlign: "left" }}>
                  منذ 14 ساعة
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Notification;
