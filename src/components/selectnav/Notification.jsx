import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Notification = ({ notificationData }) => {
  const notificationRef = useRef(null);
  const notificationIconRef = useRef(null);
  const [openNotifivations, setOpenNotification] = useState(false);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;
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
            textAlign: lang === "ar" ? "right" : "left",

            borderRadius: "1rem",
            zIndex: "10",
            position: "absolute",
            left: "-120px",
            top: " 3rem",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "black",
                padding: " 1rem",
                fontWeight: "600",
              }}
            >
              {t("notifications.title")}
            </Typography>
            <Link to="/userdashbored" style={{ textDecoration: "none" }}>
              <Typography
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              >
                عرض الكل
              </Typography>
            </Link>
          </Box>
          <Box>
            <Box sx={{ borderBottom: "1px solid #eee", padding: "1rem" }}>
              <Link
                href="#"
                style={{
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
                style={{
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
