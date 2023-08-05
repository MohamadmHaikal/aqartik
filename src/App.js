import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Addads, Home } from "./components";
import UserDashbored from "./pages/userdashbored";
import Ads from "./pages/ads";
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

function App() {
  const isMediumScreen = useMediaQuery("(min-width:900px)");
  return (
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
          path="/details"
          element={
            <Layout showNavFooter={true} contentStyles={{ marginTop: "9rem " }}>
              <Details />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout showNavFooter={true} contentStyles={{ marginTop: "9rem " }}>
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
      </Routes>
    </Router>
  );
}

export default App;
