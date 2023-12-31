import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import AddIcon from "@mui/icons-material/Add";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Logo, SearchFrameMoblie } from "../../assets";
import Searchframe from "../../assets/searchframe.png";
import { createTheme } from "@mui/material/styles";
import SmallNavLoginMenu from "./SmallNavLoginMenu";

// import Link from "next/link";
import { Link } from "@mui/material";

import {
  SelectCity,
  SelectStreet,
  SelectRealEstate,
  Price,
  Notification,
  LanguageButton,
  LoginButton,
} from "../../components";

import SearchIcon from "@mui/icons-material/Search";
const drawerWidth = 240;
const navItems = [
  { label: "رئيسية", url: "/" },
  { label: "جميع الإعلانات", url: "/ads" },
  { label: "الإعلانات المميزة", url: "/userdashbored" },
  { label: "من نحن", url: "/about" },
  { label: "اتصل بنا", url: "/" },
];

const theme = createTheme();
export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isDetailsPage = location.pathname === "/details";
  const isAboutPage = location.pathname === "/about";

  // Hide the <Box> component on the home page and special ads page
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            underline="none"
            sx={{
              color: "black",
              "&:hover": {
                color: "var(--green-color)",
              },
            }}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // this for selectCities
  const [cityIsOpen, setCityIsOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const [streetIsOpen, setStreetIsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const streetRef = useRef(null);
  const realEstateRef = useRef(null);
  const cityRef = useRef(null);
  const priceRef = useRef(null);
  const [selectedStreet, setSelectedStreet] = useState(null);
  const [isSelectRealEstateOpen, setIsSelectRealEstateOpen] = useState(false);
  const [selectedRealEstate, setSelectedRealEstate] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleBoxClick = () => {
    setCityIsOpen(true);
  };
  const handleBoxStreetClick = () => {
    setStreetIsOpen(true);
  };
  const handleRealEstateSelect = () => {
    setIsSelectRealEstateOpen((prevState) => !prevState);
  };
  const handlePriceToggle = () => {
    setIsPriceOpen((prevValue) => !prevValue);
  };
  const handleOutsideClick = (event) => {
    if (cityRef.current && !cityRef.current.contains(event.target)) {
      setCityIsOpen(false);
    }
    if (priceRef.current && !priceRef.current.contains(event.target)) {
      setIsPriceOpen(false);
    }
    if (streetRef.current && !streetRef.current.contains(event.target)) {
      setStreetIsOpen(false);
    }
    if (
      realEstateRef.current &&
      !realEstateRef.current.contains(event.target)
    ) {
      setIsSelectRealEstateOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setCityIsOpen(false);
  };
  const handleStreetSelection = (street) => {
    setSelectedStreet(street);
    setStreetIsOpen(false);
  };
  // const handlePriceSelection = (price) => {
  //   setSelectedPrice(price);
  //   onPriceSelect(price); // Call the onPriceSelect callback with the selected price
  //   onClose(); // Close the Price component when a price is selected
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "transparent",
          color: "black",
          boxShadow: isHome ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.1)",
          position: "absolute",
          zIndex: "65",
          left: "0",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: "space-between", ms: "space-around" },
            height: { xs: "80px", md: "108px" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <img src={Logo} alt="logo" style={{ width: "120px" }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex", marginLeft: { lg: "10%" } },
            }}
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.url} underline="none">
                <Button
                  sx={{
                    color: "black",
                    fontSize: "1rem",
                    marginX: "0.5rem",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "1rem",
                      marginX: "0.5rem",
                    },
                    "&:hover": {
                      color: "var( --green-color)",
                      backgroundColor: "white",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
          {/* hide this Notifiation now */}
          <Box
            sx={{
              width: { md: "30%", lg: "37%" },
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ minWidth: "0", display: { xs: "none", md: "block" } }}
            >
              <Notification />
            </Button>
            <Link href="/addads" sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  border: "1px solid var(--green-color)",
                  color: "var(--green-color)",
                  borderRadius: "25px",
                  // marginX: {}"0.8rem",
                  minWidth: { xs: "0", lg: "10rem" },
                  height: { md: "3rem" },
                  padding: { xs: "5px", md: "6px 8px" },
                }}
              >
                <AddIcon
                  sx={{
                    display: { xs: "block" },
                    marginX: { xs: "0px", md: "5px" },
                    width: "20px",
                    height: "20px",
                  }}
                />
                <Typography
                  sx={{
                    width: "100%",
                    fontSize: "15px",
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  إضافة إعلان
                </Typography>
              </Button>
            </Link>

            <LoginButton />

            <LanguageButton />
          </Box>
        </Toolbar>
        <SmallNavLoginMenu />

        {/* this next section in nav for search in houses */}
        {!isDetailsPage && !isAboutPage && (
          <Box
            sx={{
              // height: "100px",
              // backgroundColor: "transparent",
              paddingX: "1.3rem",
              marginBottom: "0.5rem",
              backgroundImage: {
                xs: `url(${SearchFrameMoblie})`,
                md: `url(${Searchframe})`,
              },
              backgroundSize: { xs: "100% 8rem", md: "100% 5.5rem" },
              // height: "14rem",
              backgroundRepeat: "no-repeat",
              backgroundPosition: { md: "center" },
              marginTop: { xs: "-1rem", md: "-2rem" },
              backgroundColor: {
                xs: "transparent",
                sm: "white",
                md: "transparent",
              },
              height: isHome ? { xs: "8rem", md: "14rem" } : "9rem",
              borderBottom: {
                xs: "none",
                md: "1px solid transparent",
              },
              borderBottomLeftRadius: { xs: "none", md: "0" },
              borderBottomRightRadius: { xs: "none", md: "0" },
            }}
          >
            <Box
              sx={{
                height: { xs: "74px", md: "90px" },
                border: "5px solid #f1f2f8",
                borderRadius: "100px",
                width: "90%",
                margin: "auto",
                marginTop: "2rem",
                position: "relative",
                backgroundColor: "white",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  height: "5rem",
                  borderRadius: "100px",
                  border: "1px solid #babdd2",
                }}
              >
                <Box
                  sx={{
                    cursor: "pointer",
                    position: "relative",
                    width: "13rem",
                    maxWidth: "13rem",
                  }}
                  onClick={handleBoxClick}
                  ref={cityRef}
                >
                  <Typography
                    sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "1.2rem" }}
                  >
                    أختر المدينة
                  </Typography>
                  <Typography
                    sx={{
                      color: "var( --green-color)",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedCity || "الرياض"}
                  </Typography>
                  {cityIsOpen && (
                    <SelectCity
                      isOpen={cityIsOpen}
                      onClose={() => setCityIsOpen(false)}
                      onCitySelect={handleCitySelection}
                      selectedCity={selectedCity} // Pass the selectedCity prop here
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    position: "relative",
                    width: "13rem",
                    maxWidth: "13rem",
                  }}
                  onClick={handleBoxStreetClick}
                  ref={streetRef}
                >
                  <Typography
                    sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "1.2rem" }}
                  >
                    أختر الحي
                  </Typography>
                  <Typography
                    sx={{
                      color: "var( --green-color)",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedStreet || "حي اول"}
                  </Typography>
                  {streetIsOpen && (
                    <SelectStreet
                      isOpen={streetIsOpen}
                      onClose={() => setStreetIsOpen(false)}
                      onStreetSelect={handleStreetSelection}
                      selectedStreet={selectedStreet} // Pass the selectedStreet prop here
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    position: "relative",
                    width: "13rem",
                    maxWidth: "13rem",
                  }}
                  onClick={handleRealEstateSelect}
                  ref={realEstateRef}
                >
                  <Typography
                    sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "1.2rem" }}
                  >
                    أختر العقار
                  </Typography>
                  <Typography
                    sx={{
                      color: "var( --green-color)",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedRealEstate || "مزارع"}
                  </Typography>
                  {isSelectRealEstateOpen && (
                    <SelectRealEstate
                      isOpen={isSelectRealEstateOpen}
                      onClose={() => setIsSelectRealEstateOpen(false)}
                      onRealEstateSelect={(realEstate) => {
                        setSelectedRealEstate(realEstate);
                        setIsSelectRealEstateOpen(false);
                      }}
                      selectedRealEstate={selectedRealEstate}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    position: "relative",
                    width: "13rem",
                    maxWidth: "13rem",
                  }}
                  onClick={handlePriceToggle}
                  ref={priceRef}
                >
                  <Typography
                    sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "1.2rem" }}
                  >
                    السعر
                  </Typography>
                  <Typography
                    sx={{
                      color: "var( --green-color)",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedPrice || "1000"}
                  </Typography>
                  {isPriceOpen && (
                    <Price
                      isOpen={isPriceOpen}
                      onClose={() => setIsPriceOpen(false)}
                      onPriceSelect={(price) => {
                        setSelectedPrice(price); // Set the selected price value in the state variable
                        setIsPriceOpen(false);
                      }}
                      selectedPrice={selectedPrice} // Pass the selectedPrice prop here
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    background: "var( --green-color)",
                    color: "#fff",
                    height: "68px",
                    width: "68px",
                    borderRadius: "50%",
                    alignItems: "center",
                    display: "flex",
                    position: "absolute",
                    left: "6px",
                  }}
                >
                  <Button href="/ads">
                    <SearchIcon
                      sx={{
                        fontSize: "2.5rem",
                        color: "#fff",
                      }}
                    />
                  </Button>
                </Box>
              </Box>
              {/* this box only on small screen */}
              <Box sx={{ display: { xs: "bock", lg: "none" }, height: "100%" }}>
                <Link href="/ads">
                  <Button
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50px",
                      transition: "background-color 0.3s",
                      ":hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                    }}
                  >
                    <Box
                      sx={{
                        margin: "0.5rem",
                        marginTop: { xs: "12px", md: "0.5rem" },
                      }}
                    >
                      <SearchIcon
                        sx={{
                          color: "var( --green-color)",
                          width: "2rem",
                          height: "2rem",
                        }}
                      />
                    </Box>
                    <Typography sx={{ color: "black", fontWeight: "bold" }}>
                      ابحث عن بيوت العطلات
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        )}
      </AppBar>
      {/* this for LoginNav in small screesns */}

      <Box></Box>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
