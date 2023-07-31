import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/700.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Login } from "./components";

const MainApp = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Tajawal, Arial, sans-serif",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

reportWebVitals();
