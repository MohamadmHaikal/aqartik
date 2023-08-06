import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Container, Button, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilterListIcon from "@mui/icons-material/FilterList";
import TabsFilter from "./TabsFilter";
import AccordinFilters from "./AccordinFilters";
import PaginationAds from "./PaginationAds";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SpecialAds from "./SpecialAds";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SelectCity from "../selectnav/SelectCity";
import HomeType from "./HomeType";

import { Link } from "react-router-dom";
import { Location } from "../../assets";
import useDataFetcher from "../../api/useDataFetcher ";
import { AdsClick } from "@mui/icons-material";
// Create a custom styled component
const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    maxWidth: "none !important",
    margin: 0,
    padding: theme.spacing(2),
  },
  maxWidth: "1280px !important",
  margin: "3rem auto",
}));

const HomeFilter = () => {
  const [per_page, set_per_page] = useState();
  const [current_page, set_current_page] = useState();
  const [ads, setAds] = useState([]);
  const [last_page, set_last_page] = useState();
  const { data, isLoading, get } = useDataFetcher();

  useEffect(() => {
    get(`/api/ads/get_all_ads?page=${current_page}`);
  }, [current_page]);

  useEffect(() => {
    if (data) {
      set_current_page(data.ads.current_page);
      set_per_page(data.ads.per_page);
      setAds(data.ads.data);
      set_last_page(data.ads.last_page);
    }
  }, [data]);

  const handlePageChange = (event, new_page) => {
    set_current_page(new_page);
  };

  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityIsOpen, setCityIsOpen] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);
  const [homeIsOpen, setHomeIsOpen] = useState(false);
  const cityRef = useRef(null);
  const HomeRef = useRef(null);
  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setCityIsOpen(false);
  };
  const handleHomeSelection = (home) => {
    setSelectedHome(home);
    setHomeIsOpen(false);
  };
  const handleBoxClick = () => {
    setCityIsOpen(true);
  };
  const handleBoxHomeClick = () => {
    setHomeIsOpen(true);
  };

  const handleToggleSearchBox = () => {
    setShowSearchBox((prevShow) => !prevShow);
  };
  const handleOutsideClick = (event) => {
    if (cityRef.current && !cityRef.current.contains(event.target)) {
      setCityIsOpen(false);
    }
    if (HomeRef.current && !HomeRef.current.contains(event.target)) {
      setHomeIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <StyledContainer
        sx={{ display: { xs: "none", md: "block" }, marginTop: "15rem" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={8}>
            <Box sx={{ margin: "3rem 0rem" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "2.25rem" },
                }}
              >
                الرياض
              </Typography>
              <Typography>الكل من 19 يونيو - 20 يونيو (ليلة واحدة)</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "start", sm: "end" },
              marginTop: { xs: "-3rem", sm: "0" },
              marginBottom: { xs: "1rem", sm: "0rem" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                href="/mappage"
                style={{
                  display: "flex",
                  color: "#fff",
                  backgroundColor: "var( --green-color)",
                  height: "48px",
                  borderRadius: "24px",
                  padding: "6px 12px",
                  fontWeight: "bold",
                  alignItems: "center",
                  fontFamily: " Tajawal,Arial,sans-serif",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "#0d8d68",
                  },
                }}
              >
                <Box>
                  <LocationOnIcon />
                </Box>
                {t("advertisements_page.sec1.map_button")}
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <FilterListIcon
                  sx={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    padding: "0.2rem",
                    margin: "0 0.5rem",
                  }}
                />
                {t("advertisements_page.filter_sec.title")}
                <Typography>(1)</Typography>
              </Box>
              <Typography sx={{ marginX: "0.5rem" }}>|</Typography>
              <Button
                sx={{
                  textDecoration: "none",
                  color: "var( --green-color)",
                  fontEeight: "normal",
                  fontSize: "inherit",
                }}
              >
                {t("advertisements_page.filter_sec.delete_button")}
              </Button>
            </Box>
            <Box>
              <AccordinFilters />
            </Box>
          </Grid>
          {isLoading ? (
            "loading..."
          ) : (
            <Grid item xs={12} md={8}>
              <TabsFilter data={ads} />
            </Grid>
          )}
        </Grid>
        {/* <PaginationAds></PaginationAds> */}
      </StyledContainer>
      {/* // this Box for xs small screens */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            boxShadow: "none",
            height: showSearchBox ? "70px" : "270px",
            marginBottom: "20px",
            position: "sticky",
            top: "0px",
            zIndex: "99",
            backgroundColor: "rgb(255, 255, 255)",
            transition: "height 0.3s ease-in-out 0s",
            marginTop: "0rem",
          }}
        >
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              paddingRight: "13px",
              paddingLeft: "13px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
              height: "70px",
            }}
          >
            {showSearchBox ? (
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ChevronRightIcon
                  onClick={handleToggleSearchBox}
                  sx={{
                    color: "var(--green-color)",
                    fontSize: "2.5rem",
                    cursor: "pointer",
                  }}
                />
              </Link>
            ) : (
              <CloseIcon
                onClick={handleToggleSearchBox}
                sx={{
                  color: "gray",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            )}

            {showSearchBox ? (
              <Box
                sx={{
                  flex: "1 1 0%",
                  borderRadius: "18px",
                  maxWidth: "calc(100% - 80px)",
                  marginLeft: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleToggleSearchBox}
              >
                <Box
                  sx={{
                    height: "35px",
                    border: "1px solid rgba(112, 112, 112, 0.4)",
                    backgroundColor: "rgb(247, 247, 247)",
                    borderRadius: "18px",
                    padding: "0px 16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 1 0%",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <SearchIcon
                      sx={{
                        color: "var(--green-color)",
                        marginLeft: "5px",
                        fontSize: "20px",
                      }}
                    />
                    <Typography>الرياض</Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Typography sx={{ fontWeight: "700" }}>
                عدل معلومات بحثك
              </Typography>
            )}

            <Box
              sx={{
                backgroundColor: "var(--green-color)",
                height: "35px",
                width: "35px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to="/MapPage"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <img src={Location} alt="location" /> */}
                <LocationOnIcon sx={{ color: "white", fontSize: "18px" }} />
              </Link>
            </Box>
          </Box>
          {!showSearchBox && (
            <Box sx={{ paddingX: "12px" }}>
              <Box
                sx={{
                  height: "148px",
                  border: "5px solid rgba(221, 223, 238, 0.4)",
                  borderRadius: "28px",
                  marginTop: "20px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    border: "1px solid rgb(186, 189, 210)",
                    borderRadius: "23px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "rgb(255, 255, 255)",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    ref={cityRef}
                    sx={{
                      borderBottom: "1px solid rgb(186, 189, 210)",
                      width: "100%",
                      padding: "12px 16px",
                      cursor: "pointer",
                    }}
                    onClick={handleBoxClick}
                  >
                    <Typography
                      sx={{ color: "rgb(120, 120, 131)", fontSize: "13px" }}
                    >
                      المدينة
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {selectedCity || "الرياض"}
                    </Typography>
                  </Box>

                  {cityIsOpen && (
                    <SelectCity
                      isOpen={cityIsOpen}
                      onClose={() => setCityIsOpen(false)}
                      onCitySelect={handleCitySelection}
                      selectedCity={selectedCity}
                    />
                  )}

                  <Box
                    ref={HomeRef}
                    sx={{
                      width: "100%",
                      padding: "12px 16px",
                      cursor: "pointer",
                    }}
                    onClick={handleBoxHomeClick}
                  >
                    <Typography
                      sx={{ color: "rgb(120, 120, 131)", fontSize: "13px" }}
                    >
                      نوع العقار
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {" "}
                      {selectedHome || "الرياض"}{" "}
                    </Typography>
                    {homeIsOpen && (
                      <HomeType
                        isOpen={homeIsOpen}
                        onClose={() => setHomeIsOpen(false)}
                        onHomeSelect={handleHomeSelection}
                        selectedHome={selectedHome} // Pass the selectedCity prop here
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        <Box sx={{ width: "95%", margin: "auto" }}>
          {ads.map((ad, i) => (
            <SpecialAds key={ad.id} ad={ad} />
          ))}
        </Box>
        {/* <PaginationAds /> */}
      </Box>
      {isLoading ? (
        ""
      ) : (
        <PaginationAds
          handlePageChange={handlePageChange}
          current_page={current_page}
          per_page={per_page}
          last_page={last_page}
        />
      )}
    </>
  );
};

export default HomeFilter;
