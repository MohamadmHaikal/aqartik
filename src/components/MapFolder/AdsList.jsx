import React, { useState } from "react";
import HomeSliderMap from "../MapFolder/HomeSliderMap";
import NorthIcon from "@mui/icons-material/North";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcons from "../Filter/FavoriteIcons";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Link, Typography } from "@mui/material";
const icons = [
  {
    icon: <TwitterIcon />,
    number: 2,
  },
  {
    icon: <LinkIcon />,
    number: 3,
  },
];

const AdsList = () => {
  const [isBoxVisible, setBoxVisible] = useState(true);

  const handleBoxClose = () => {
    setBoxVisible(false);
  };
  return (
    <>
      {/* if click in some ads */}
      {isBoxVisible && (
        <Box
          sx={{
            backgroundColor: "rgb(255, 255, 255)",
            borderStyle: "solid",
            borderWidth: "1px 1px 1px 5px",
            borderImage: "none 100% / 1 / 0 stretch",
            borderColor:
              "rgba(14, 175, 130, 1) rgba(14, 175, 130, 1) rgba(14, 175, 130, 1) rgba(14, 175, 130, 1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: " 16px 23px 8px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  fontWeight: "700",
                }}
              >
                استديو بأثاث مريح وبسيط
              </Typography>
            </Box>
            <Box>
              <CloseIcon
                sx={{
                  color: "var(--green-color)",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
                onClick={handleBoxClose}
              />
            </Box>
          </Box>
          <Box sx={{ paddingX: "23px" }}>
            {/* this is my ads  */}
            <Box
              sx={{
                position: "relative",
                paddingTop: "12.5px",
                paddingBottom: "12.5px",
              }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  height: "196.5px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px",
                  overflow: "hidden",
                  position: "relative",
                  display: "block",
                  backgroundColor: "white",
                  padding: "8px 8px 8px 0px",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{ position: "absolute", left: "10px", bottom: "18px" }}
                >
                  <FavoriteIcons />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: "13rem",
                        height: "11.5rem",
                      }}
                    >
                      <HomeSliderMap />
                    </Box>
                  </Box>
                  <Box sx={{ padding: "9px 12px" }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        marginBottom: "10px",
                        color: "rgb(5, 5, 54)",
                      }}
                    >
                      استراحة بمسطح اخضر
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "rgb(141, 141, 163)",
                        marginBottom: "10px",
                      }}
                    >
                      الرياض, حي الجبلية
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        marginX: "0.5rem",
                        color: "rgb(132, 132, 132)",
                        marginBottom: "10px",
                        marginRight: "-5px",
                      }}
                    >
                      {icons &&
                        icons.map((icon, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              marginLeft: "10px",
                            }}
                          >
                            {icon.icon}
                            <Typography sx={{ marginRight: "5px" }}>
                              {icon.number}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                    <Typography
                      sx={{
                        color: "var(--green-color)",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      3000 ر.س
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <StarIcon
                        sx={{
                          color: "var(--green-color)",
                          marginLeft: "5px",
                          fontSize: "18px",
                        }}
                      />
                      <Box
                        sx={{
                          color: "gray",
                          display: "flex",
                        }}
                      >
                        <Typography>0.0</Typography>
                        <Typography>(0)</Typography>
                        <Typography>تقييم</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
      {/* start page ads */}
      <Box
        sx={{
          paddingRight: "23px",
          paddingLeft: "23px",
          marginTop: "16px",
          fontWeight: "700",
          fontSize: "17px",
        }}
      >
        قائمة الإعلانات على الخريطة
      </Box>
      <Box sx={{ paddingX: "23px" }}>
        {/* this is my ads  */}
        <Box
          sx={{
            position: "relative",
            paddingTop: "12.5px",
            paddingBottom: "12.5px",
          }}
        >
          <Link
            href="#"
            sx={{
              textDecoration: "none",
              height: "196.5px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px",
              overflow: "hidden",
              position: "relative",
              display: "block",
              backgroundColor: "white",
              padding: "8px 8px 8px 0px",
              borderRadius: "16px",
            }}
          >
            <Box sx={{ position: "absolute", left: "10px", bottom: "18px" }}>
              <FavoriteIcons />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: "13rem",
                    height: "11.5rem",
                  }}
                >
                  <HomeSliderMap />
                </Box>
              </Box>
              <Box sx={{ padding: "9px 12px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "rgb(5, 5, 54)",
                  }}
                >
                  استراحة بمسطح اخضر
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "rgb(141, 141, 163)",
                    marginBottom: "10px",
                  }}
                >
                  الرياض, حي الجبلية
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    marginX: "0.5rem",
                    color: "rgb(132, 132, 132)",
                    marginBottom: "10px",
                    marginRight: "-5px",
                  }}
                >
                  {icons &&
                    icons.map((icon, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          marginLeft: "10px",
                        }}
                      >
                        {icon.icon}
                        <Typography sx={{ marginRight: "5px" }}>
                          {icon.number}
                        </Typography>
                      </Box>
                    ))}
                </Box>
                <Typography
                  sx={{
                    color: "var(--green-color)",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  3000 ر.س
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <StarIcon
                    sx={{
                      color: "var(--green-color)",
                      marginLeft: "5px",
                      fontSize: "18px",
                    }}
                  />
                  <Box
                    sx={{
                      color: "gray",
                      display: "flex",
                    }}
                  >
                    <Typography>0.0</Typography>
                    <Typography>(0)</Typography>
                    <Typography>تقييم</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box sx={{ paddingX: "23px" }}>
        {/* this is my ads  */}
        <Box
          sx={{
            position: "relative",
            paddingTop: "12.5px",
            paddingBottom: "12.5px",
          }}
        >
          <Link
            href="#"
            sx={{
              textDecoration: "none",
              height: "196.5px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px",
              overflow: "hidden",
              position: "relative",
              display: "block",
              backgroundColor: "white",
              padding: "8px 8px 8px 0px",
              borderRadius: "16px",
            }}
          >
            <Box sx={{ position: "absolute", left: "10px", bottom: "18px" }}>
              <FavoriteIcons />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: "13rem",
                    height: "11.5rem",
                  }}
                >
                  <HomeSliderMap />
                </Box>
              </Box>
              <Box sx={{ padding: "9px 12px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "rgb(5, 5, 54)",
                  }}
                >
                  استراحة بمسطح اخضر
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "rgb(141, 141, 163)",
                    marginBottom: "10px",
                  }}
                >
                  الرياض, حي الجبلية
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    marginX: "0.5rem",
                    color: "rgb(132, 132, 132)",
                    marginBottom: "10px",
                    marginRight: "-5px",
                  }}
                >
                  {icons &&
                    icons.map((icon, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          marginLeft: "10px",
                        }}
                      >
                        {icon.icon}
                        <Typography sx={{ marginRight: "5px" }}>
                          {icon.number}
                        </Typography>
                      </Box>
                    ))}
                </Box>
                <Typography
                  sx={{
                    color: "var(--green-color)",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  3000 ر.س
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <StarIcon
                    sx={{
                      color: "var(--green-color)",
                      marginLeft: "5px",
                      fontSize: "18px",
                    }}
                  />
                  <Box
                    sx={{
                      color: "gray",
                      display: "flex",
                    }}
                  >
                    <Typography>0.0</Typography>
                    <Typography>(0)</Typography>
                    <Typography>تقييم</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default AdsList;
