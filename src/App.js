import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { Addads, Home } from "./components";
import UserDashbored from "./pages/userdashbored";
import Ads from "./pages/Ads";
import Login from "./pages/loginFolder/Login";
import Details from "./pages/details";
import About from "./pages/about";
import Mappage from "./pages/mappage";
import Cards from "./pages/Cards";
import EditAds from "./pages/EditAds";
import { useMediaQuery } from "@mui/material";
import { Layout } from "./components/layouts/Layout";
import Offices from "./pages/offices/Offices";
import Office from "./pages/offices/Office";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import useDataFetcher from "./api/useDataFetcher ";
import { Maintence } from "./assets";
import UnderMaintence from "./components/under_mintance/UnderMaintence";

function App() {
  const isMediumScreen = useMediaQuery("(min-width:900px)");
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { data, isLoading, error, get, post } = useDataFetcher();
  const [generalData, setGeneralData] = useState([]);
  const [website_status, set_website_status] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  // this is for take user Location
  useEffect(() => {
    get("/api/settings/genral");
  }, []);
  useEffect(() => {
    if (website_status === 1) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }
    }
  }, [website_status]);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setUserLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  //end  this is for take user Location

  useEffect(() => {
    if (data) {
      setGeneralData(data.settings);
      set_website_status(data.settings.site_status);
      // set_website_status(0);
    }
  }, [data]);
  return (
    <>
      <Helmet>
        <title>
          {lang === "ar"
            ? generalData.site_title_ar
            : generalData.site_title_en}
        </title>
        <meta
          name="description"
          content={
            lang === "ar" ? generalData.site_desc_ar : generalData.site_desc_en
          }
        />
        <meta
          name="keywords"
          content={
            lang === "ar"
              ? generalData.site_keywords_ar
              : generalData.site_keywords_en
          }
        />
      </Helmet>
      {website_status === 1 && (
        <Router basename="/">
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  showNavFooter={true}
                  contentStyles={{ marginTop: "12rem !important" }}
                  generalData={generalData}
                >
                  <Home userLocation={userLocation} />
                </Layout>
              }
            />
            <Route
              path="/addads"
              element={
                <Layout
                  showNavFooter={false}
                  contentStyles={{ marginTop: "2rem !important" }}
                  generalData={generalData}
                >
                  <Addads />
                </Layout>
              }
            />
            <Route
              path="/userdashbored"
              element={
                <Layout
                  showNavFooter={false}
                  contentStyles={{
                    marginTop: "0rem ",
                  }}
                  generalData={generalData}
                >
                  <UserDashbored />
                </Layout>
              }
            />
            <Route
              path="/ads"
              element={
                <Layout showNavFooter={true} generalData={generalData}>
                  <Ads />
                </Layout>
              }
            />

            <Route
              path="/login"
              element={
                <Layout
                  showNavFooter={false}
                  contentStyles={{
                    background:
                      "linear-gradient(to bottom, #15b184, rgb(11, 79, 60))",
                    height: "100vh",
                    marginTop: "0rem ",
                  }}
                >
                  <Login />
                </Layout>
              }
            />
            {/* here goes offices pages  */}
            <Route path="/offices">
              <Route
                index
                element={
                  <Layout
                    showNavFooter={true}
                    contentStyles={{ margin: "8rem 2rem 0rem 2rem" }}
                    generalData={generalData}
                  >
                    <Offices />
                  </Layout>
                }
              />
              <Route
                path=":id"
                element={
                  <Layout
                    showNavFooter={true}
                    contentStyles={{ margin: "8rem 2rem 0rem 2rem" }}
                    generalData={generalData}
                  >
                    <Office />
                  </Layout>
                }
              />
            </Route>
            {/* here goes offices pages  */}
            <Route
              path="/details/:id"
              element={
                <Layout
                  showNavFooter={true}
                  contentStyles={{ marginTop: "9rem " }}
                  generalData={generalData}
                >
                  <Details />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout
                  showNavFooter={true}
                  contentStyles={{ marginTop: "9rem " }}
                  generalData={generalData}
                >
                  <About />
                </Layout>
              }
            />
            <Route
              path="/mappage"
              element={
                <Layout
                  showNavFooter={isMediumScreen}
                  contentStyles={{ marginTop: "9rem !important" }}
                  generalData={generalData}
                >
                  <Mappage />
                </Layout>
              }
            />
            <Route
              path="/memberships"
              element={
                <Layout
                  showNavFooter={true}
                  contentStyles={{ marginTop: "12rem !important" }}
                  generalData={generalData}
                >
                  <Cards />
                </Layout>
              }
            />
            <Route
              path="/EditAds"
              element={
                <Layout showNavFooter={false} generalData={generalData}>
                  <EditAds />
                </Layout>
              }
            />
          </Routes>
        </Router>
      )}
      {website_status === 0 && (
        <UnderMaintence />
        // <div
        //   style={{ width: "100%", height: "100vh", backgroundColor: "#EEE" }}
        // >
        //   <img
        //     src={Maintence}
        //     alt="maintence"
        //     style={{
        //       width: "600px",
        //       borderRadius: "1rem",
        //       position: "absolute",
        //       top: "50%",
        //       left: "50%",
        //       transform: "translate(-50%,-50%)",
        //     }}
        //   />
        // </div>
      )}
    </>
  );
}

export default App;
