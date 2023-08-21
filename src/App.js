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
import EditOrder from "./components/user_dashbord/OutgoingOrder/EditOrder";

function App() {
  const isMediumScreen = useMediaQuery("(min-width:900px)");
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { data, isLoading, error, get, post } = useDataFetcher();
  const [generalData, setGeneralData] = useState([]);
  const [website_status, set_website_status] = useState(null);

  const { data: userData, get: getUserData } = useDataFetcher();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      getUserData("/api/user/get_user_data");
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData.user));
      }
    }
  }, [userData]);

  useEffect(() => {
    get("/api/settings/genral");
  }, []);

  useEffect(() => {
    if (data) {
      setGeneralData(data.settings);
      set_website_status(data.settings.site_status);
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
      <Router basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                showNavFooter={true}
                contentStyles={{ marginTop: "12rem !important" }}
              >
                <Home />
              </Layout>
            }
          />
          <Route
            path="/addads"
            element={
              <Layout
                showNavFooter={false}
                contentStyles={{ marginTop: "2rem !important" }}
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
              >
                <UserDashbored />
              </Layout>
            }
          />
          <Route
            path="/ads"
            element={
              <Layout showNavFooter={true}>
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
              >
                <Mappage />
              </Layout>
            }
          />
          <Route
            path="/Cards"
            element={
              <Layout
                showNavFooter={true}
                contentStyles={{ marginTop: "12rem !important" }}
              >
                <Cards />
              </Layout>
            }
          />
          <Route
            path="/EditAds"
            element={
              <Layout showNavFooter={false}>
                <EditAds />
              </Layout>
            }
          />
          <Route
            path="/EditOrder"
            element={
              <Layout showNavFooter={false}>
                <EditOrder />
              </Layout>
            }
          />
        </Routes>
      </Router>
      {website_status === 0 && (
        <div
          style={{ width: "100%", height: "100vh", backgroundColor: "#EEE" }}
        >
          <img
            src={Maintence}
            alt="maintence"
            style={{
              width: "600px",
              borderRadius: "1rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </div>
      )}
    </>
  );
}

export default App;
