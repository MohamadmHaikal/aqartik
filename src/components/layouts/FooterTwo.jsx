import React from "react";

import { Box, Container, Grid, Link, Typography } from "@mui/material";
import {
  Googleplay,
  Appstore,
  FaceBook,
  Instagram,
  LinkedIn,
  Twitter,
  Mada,
  Logo,
} from "../../assets";
import styles from "./footer.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Mail as MailIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
const phoneNumber = "000000000000";

const FooterTwo = () => {
  const { t } = useTranslation();

  const downloadLinks = [
    { label: "app store", image: Appstore },
    { label: "google play", image: Googleplay },
  ];

  const socialMediaLinks = [
    {
      url: Twitter,
    },

    {
      url: FaceBook,
    },
    {
      url: Instagram,
    },
    {
      url: LinkedIn,
    },
  ];
  const socialMediaLinksSmall = [
    {
      icon: <FacebookIcon sx={{ fontSize: "2.3rem", marginX: "7px" }} />,
      url: "",
    },
    {
      icon: <TwitterIcon sx={{ fontSize: "2.3rem", marginX: "7px" }} />,
      url: "",
    },

    {
      icon: <InstagramIcon sx={{ fontSize: "2.3rem", marginX: "7px" }} />,
      url: "",
    },
    {
      icon: <YouTubeIcon sx={{ fontSize: "2.3rem", marginX: "7px" }} />,
      url: "",
    },
  ];
  return (
    <>
      {/* footer for larger screen */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Container sx={{ marginTop: "2rem", maxWidth: "1350px !important" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={4}
              lg={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{ position: "relative", width: "170px", height: "56px" }}
              >
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <LocationOnIcon sx={{ marginLeft: "5px" }} />
                  المملكة العربية السعودية / الرياض
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MailIcon sx={{ marginLeft: "5px" }} />{" "}
                  <Typography>tsf@gmail.com</Typography>
                </Box>
              </Box>

              {/* <Box
                sx={{ width: "180px", height: "40px", position: "relative" }}
              >
                <img
                  src={Mada}
                  alt="mada card"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                  }}
                />
              </Box> */}
            </Grid>
            <Grid item xs={12} md={8} lg={7}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <ul className={styles.footer_list}>
                  <li
                    style={{
                      // fontWeight: "600",
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    {t("footer.first_list.brand_name")}
                  </li>
                  <li className={styles.aboutus}>
                    <Link
                      href="#"
                      sx={{ textDecoration: "none", color: "gray" }}
                    >
                      {t("footer.first_list.about")}
                    </Link>
                  </li>
                </ul>
                <ul className={styles.footer_list}>
                  <li
                    style={{
                      // fontWeight: "600",
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    {t("footer.second_list.support")}
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      href="#"
                      sx={{ textDecoration: "none", color: "gray" }}
                    >
                      {t("footer.second_list.contact_us")}
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      href="#"
                      sx={{ textDecoration: "none", color: "gray" }}
                    >
                      {t("footer.second_list.frequently_asked_questions")}
                    </Link>
                  </li>
                </ul>

                <ul className={styles.footer_list}>
                  <li
                    style={{
                      // fontWeight: "600",
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    {t("footer.third_list.legal_matters")}
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      href="#"
                      sx={{ textDecoration: "none", color: "gray" }}
                    >
                      {t("footer.third_list.terms_and_conditions")}
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      href="#"
                      sx={{ textDecoration: "none", color: "gray" }}
                    >
                      {t("footer.third_list.privacy_policy")}
                    </Link>
                  </li>
                </ul>

                <ul className={styles.footer_list}>
                  <li
                    className={styles.footer_list}
                    style={{ marginBottom: "10px" }}
                  >
                    {t("footer.download_btn")}
                  </li>
                  {downloadLinks.map((link, index) => (
                    <li key={index}>
                      <Link href="#" sx={{ textDecoration: "none" }}>
                        <Box
                          sx={{
                            width: "160px",
                            height: "45px",
                            borderRadius: "0.5rem",
                            position: "relative",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            src={link.image}
                            alt={link.label}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: { xs: "right", md: "start" },
              }}
            >
              <Typography sx={{ marginLeft: "5px" }}>
                {t("footer.contact_phone")}
              </Typography>
              <Link
                href={`tel:${phoneNumber}`}
                sx={{ textDecoration: "none", color: "black" }}
              >
                {phoneNumber}
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "gray",
                order: { xs: "2", md: "1" },
                fontSize: { xs: "14px" },
              }}
            >
              &#9400; {t("footer.copy_right")} 2023
            </Grid>
            <Grid item xs={12} md={3} sx={{ order: { xs: "1", md: "2" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "end" },
                }}
              >
                {socialMediaLinks.map((socialMediaLink, index) => (
                  <Link key={index} href="#">
                    <img
                      src={socialMediaLink.url}
                      style={{ width: "40px", height: "40px" }}
                      alt="social media"
                    />
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* footer for smaller screens */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            backgroundColor: "#f2f4fa",
            paddingTop: "40px",
            paddingX: "12px",
          }}
        >
          <Box
            sx={{
              flexWrap: "wrap",
              flexDirection: "column",
              marginBottom: "25px",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "none" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Link href="#">
                  <img src={Logo} alt="logo" style={{ width: "140px" }} />
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  borderBottom: "1px solid #e4e5eb",
                  paddingBottom: "44px",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    position: "relative",
                    marginLeft: "0",
                    padding: "0",
                    margin: "0",
                    paddingY: "8px",
                  }}
                >
                  <li className={styles.footer_xs_list}>
                    <Link
                      href="/ads"
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      شاليهات، منتجعات، أستراحات
                    </Link>
                  </li>
                  <li className={styles.footer_xs_list}>مخيّمات</li>
                  <li className={styles.footer_xs_list}>مزارع</li>
                  <li className={styles.footer_xs_list}>شقق وبيوت خاصة</li>
                </ul>
                <ul
                  style={{
                    listStyle: "none",
                    position: "relative",
                    marginLeft: "0",
                    padding: "0",
                    margin: "0",
                    paddingY: "8px",
                  }}
                >
                  <li className={styles.footer_xs_list}>
                    {t("footer.third_list.terms_and_conditions")}
                  </li>
                  <li className={styles.footer_xs_list}>
                    {t("footer.second_list.frequently_asked_questions")}
                  </li>
                  <li className={styles.footer_xs_list}>العروض</li>
                  <li className={styles.footer_xs_list}>
                    {t("footer.second_list.contact_us")}
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
          {/* secound footer section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "25px 0",
              borderTop: "1px solid #eaedf2",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingBottom: "24px",

                borderBottom: "1px solid #e4e5eb",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <PhoneIcon sx={{ marginLeft: "8px" }} />
                  <Typography sx={{ fontWeight: "500" }}>
                    {t("footer.customer_service")}
                  </Typography>
                </Box>
                <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
                  {phoneNumber}
                </Link>
              </Box>
              <Typography>{t("footer.time")}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {socialMediaLinksSmall.map((social, index) => (
              <Link key={index} href={social.url} sx={{ color: "black" }}>
                <Box>{social.icon}</Box>
              </Link>
            ))}
          </Box>
          <Typography
            sx={{
              borderTop: "1px solid #e4e5eb",
              paddingTop: "15px",
              paddingBottom: "25px",
              fontSize: "12px",
              textAlign: "center",
              width: "200px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            &#9400; {t("footer.copy_right")} 2023
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FooterTwo;
