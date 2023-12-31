import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Profile, Favorite, Aqar, Call, Logout } from "../../assets";

import Avatar from "@mui/material/Avatar";
const SmallNavLoginMenu = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Box
        sx={{
          top: "0px",
          left: "0px",
          height: "100%",
          width: "100%",
          display: "flex",
          zIndex: "999",
          transition: "top 0.45s ease-in-out 0s",
          opacity: "1",
          position: "absolute",
        }}
      >
        {/* <Box
          sx={{
            backgroundColor: "rgb(13, 13, 16)",
            opacity: "0.24",
            position: "fixed",
            height: "100%",
            width: "100%",
            top: "0px",
            bottom: "0px",
            display: "block",
            zIndex: "0",
          }}
        ></Box> */}
        <Box
          sx={{
            height: "1px",
            width: "100%",
            position: "absolute",
            top: "80px",
            zIndex: "2",
            display: "block",
            backgroundColor: "rgb(242, 242, 242)",
          }}
        ></Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgb(255, 255, 255)",
            position: "absolute",
            zIndex: "1",
            maxHeight: "90vh",
            top: "80px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "25px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Avatar sx={{ width: "80px", height: "80px", marginLeft: "5px" }}>
                ر
              </Avatar>
              <Box sx={{ marginRight: "16px" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                  وائل الديري
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  support.comp@diriw.com
                </Typography>
              </Box>
            </Box>
            <List sx={{ width: "100%", paddingY: "8px" }}>
              <ListItem
                sx={{
                  width: "auto",

                  minHeight: "48px",

                  paddingTop: "6px",
                  whiteSpace: "nowrap",
                  paddingBottom: "6px",
                }}
              >
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    display: "inline-flex",
                    minWidth: "56px",
                    flexShrink: "0",
                  }}
                >
                  <img src={Profile} alt="profile" />
                </Box>
                <Typography>الملف الشخصي</Typography>
              </ListItem>
              <ListItem
                sx={{
                  width: "auto",

                  minHeight: "48px",

                  paddingTop: "6px",
                  whiteSpace: "nowrap",
                  paddingBottom: "6px",
                }}
              >
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    display: "inline-flex",
                    minWidth: "56px",
                    flexShrink: "0",
                  }}
                >
                  <img src={Favorite} alt="profile" />
                </Box>
                <Typography> مفضلتي</Typography>
              </ListItem>
              <ListItem
                sx={{
                  width: "auto",

                  minHeight: "48px",

                  paddingTop: "6px",
                  whiteSpace: "nowrap",
                  paddingBottom: "6px",
                }}
              >
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    display: "inline-flex",
                    minWidth: "56px",
                    flexShrink: "0",
                  }}
                >
                  <img src={Aqar} alt="aqar" />
                </Box>
                <Typography> أضف عقارك</Typography>
              </ListItem>
              <ListItem
                sx={{
                  width: "auto",

                  minHeight: "48px",

                  paddingTop: "6px",
                  whiteSpace: "nowrap",
                  paddingBottom: "6px",
                }}
              >
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    display: "inline-flex",
                    minWidth: "56px",
                    flexShrink: "0",
                  }}
                >
                  <img src={Call} alt="call" />
                </Box>
                <Typography> تواصل معنا </Typography>
              </ListItem>
              <ListItem
                sx={{
                  width: "auto",

                  minHeight: "48px",

                  paddingTop: "6px",
                  whiteSpace: "nowrap",
                  paddingBottom: "6px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    display: "inline-flex",
                    minWidth: "56px",
                    flexShrink: "0",
                  }}
                >
                  <img src={Logout} alt="logout" />
                </Box>
                <Typography> تسجيل الخروج </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallNavLoginMenu;
