import React, { useState, useRef, useEffect } from "react";
import { Typography, Box, Container, Button, Grid, Link } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GroupIcon from "@mui/icons-material/Group";
import IosShareIcon from "@mui/icons-material/IosShare";
import { FavoriteIcons } from "../components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import ImagesTest from "../components/Detailsfolder/detailspagexs/ImagesTest";

import {
  DetailsCard,
  DetailsImages,
  DetailsTabs,
  DetailsXsScreens,
} from "../components/Detailsfolder";
import { SpecialAds, PaginationAds } from "../components";

import { List, ListItem, ListItemText, useMediaQuery } from "@mui/material";

const Details = () => {
  const isNewHome = true;
  const [isListOpen, setListOpen] = useState(false);
  const listRef = useRef(null);
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const icons = [
    {
      icon: <FavoriteIcons />,
      number: 1,
    },
    {
      icon: <TwitterIcon />,
      number: 2,
    },
    {
      icon: <LinkIcon />,
      number: 3,
    },
  ];

  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".list-container") &&
      !event.target.classList.contains("share-button")
    ) {
      setListOpen(false);
    }
  };
  const handleCopyLink = () => {
    const linkToCopy = "your_link_url"; // Replace with the actual link you want to copy

    navigator.clipboard.writeText(linkToCopy).then(() => {
      console.log("Link copied!");
    });
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      {/* this section for md and above screens  */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2.25rem" },
              }}
            >
              شقة انيقه بصالة ودخول ذاتي
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginY: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                border: "1px solid #cdddd8",
                borderRadius: "25px",
                padding: "0.2rem 0.5rem",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                رقم الأعلان:
              </Typography>{" "}
              <Typography sx={{ marginX: "0.5rem", fontSize: "12px" }}>
                0989
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                border: "1px solid #cdddd8",
                borderRadius: "25px",
                padding: "0.2rem 0.5rem",
                marginX: "0.3rem",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                تاريخ الإعلان:
              </Typography>
              <Typography sx={{ marginX: "0.5rem", fontSize: "12px" }}>
                0989
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginY: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  marginX: "0.3rem",
                  marginBottom: "4px",
                  fontSize: { xs: "13px", md: "15px" },
                }}
              >
                <StarIcon
                  sx={{
                    color: "var(--green-color)",
                    marginLeft: "3px",
                    fomtSize: "1.2rem",
                  }}
                />
                (لا يوجد تقييمات) 0
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  marginX: "0.3rem",
                  marginBottom: "4px",
                  fontSize: { xs: "13px", md: "15px" },
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: "var(--green-color)",
                    marginLeft: "3px",
                    fomtSize: "1.2rem",
                  }}
                />
                حي الزهور الرياض
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  marginX: "0.3rem",
                  marginBottom: "4px",
                  fontSize: { xs: "13px", md: "15px" },
                }}
              >
                <CropOriginalIcon
                  sx={{
                    color: "var(--green-color)",
                    marginLeft: "3px",
                    fomtSize: "1.2rem",
                  }}
                />
                مساحة الوحدة 100 م²
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  marginX: "0.3rem",
                  marginBottom: "4px",
                  fontSize: { xs: "13px", md: "15px" },
                }}
              >
                <GroupIcon
                  sx={{
                    color: "var(--green-color)",
                    marginLeft: "3px",
                    fomtSize: "1.2rem",
                  }}
                />
                مخصص ل عوائل و عزاب
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginX: "0.3rem",
                  marginBottom: "4px",
                  fontSize: { xs: "13px", md: "15px" },
                }}
              >
                <FavoriteIcons></FavoriteIcons>
                المفضلة
              </Box>
              <Button
                sx={{
                  color: "inherit",
                  marginX: "0.3rem",
                  position: "relative",
                  padding: "0",
                }}
                onClick={() => setListOpen(!isListOpen)}
              >
                <IosShareIcon sx={{ marginLeft: "3px" }} />
                مشاركة
                {isListOpen && (
                  <List
                    sx={{
                      zIndex: "1",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      backgroundColor: "white",
                      width: "14rem",
                      boxShadow:
                        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                    }}
                  >
                    <ListItem
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <a
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          width: "100%",
                          display: "flex",
                        }}
                        href="https://www.facebook.com/sharer/sharer.php?u=your_link_url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                        <ListItemText primary="مشاركة على الفيسبوك" />
                      </a>
                    </ListItem>

                    <ListItem
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <a
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          width: "100%",
                          display: "flex",
                        }}
                        href="https://twitter.com/intent/tweet?text=your_link_text&url=your_link_url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                        <ListItemText primary="مشاركة على تويتر" />
                      </a>
                    </ListItem>

                    <ListItem
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                      onClick={handleCopyLink}
                    >
                      <LinkIcon />
                      <ListItemText primary="نسخ الرابط" />
                    </ListItem>
                  </List>
                )}
              </Button>
            </Box>
          </Box>
          {/* <ImagesTest /> */}
          <DetailsImages />
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "2.25rem" },
                }}
              >
                الوصف
              </Typography>
              <Typography sx={{ fontSize: { xs: "15px", md: "18px" } }}>
                تقع في شمال الرياض بالقرب من طريق أنس بن مالك ، قريبه من جميع
                الخدمات ، ومنها كافيه مقابل العماره . صممت بألوان مريحه ومؤثثة
                بأثاث مودرن . يوجد انترنت سريع وشاشة سمارت فيها كل ما تحتاج
                .تتميز بخصوصية تامه بدخول ذاتي. وتحتوي على صاله جلوس وغرفه نوم
                وركن لتحضير ودوره مياه عزكم الله واتمنى لك اقامه سعيدة وحياك
                الله في بيتك الثاني .
              </Typography>
              {isNewHome && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "23px 40px",
                    backgroundColor: "#eee",
                    borderRadius: "20px",
                    marginY: "2rem",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "red",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      جديد
                    </Typography>
                    <Typography sx={{ fontSize: "18px" }}>
                      عقار مضاف حديثاً
                    </Typography>
                  </Box>
                  <Box sx={{ alignItems: "center", display: "flex" }}>
                    <StarIcon
                      sx={{ color: "#009fff", width: "3rem", height: "3rem" }}
                    />
                  </Box>
                </Box>
              )}
              <DetailsTabs></DetailsTabs>
            </Grid>
            <Grid item xs={12} md={4}>
              <DetailsCard />
            </Grid>
          </Grid>

          {/* similar ads */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginTop: "2rem",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              الإعلانات المشابهة
            </Typography>
            <Box>
              <SpecialAds
                title="شقة شقة شقة شقة"
                location="الرياض"
                icons={icons}
                description="بهندسة معمارية حديثه تراعي الخصوصية ومتطلبات العائلة السعودية سلسلة فلل البدر صممت لتوفر لك مساحة السكن المثالية لعائلتك بادر بالحجز"
                ratings={10}
                price={20000}
                isNew={1}
              ></SpecialAds>
            </Box>
            <PaginationAds />
          </Box>
        </Container>
      </Box>

      {/* this section page for xs screens */}
      <DetailsXsScreens />
      {/* this for price */}
    </>
  );
};

export default Details;
