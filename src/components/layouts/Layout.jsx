import React from "react";
import Nav from "./Nav";
import FooterTwo from "./FooterTwo";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

const Layout = ({ children, showNavFooter = true, contentStyles = {} }) => {
  const location = useLocation();
  const { pathname } = location;
  const hideFooter = pathname === "/mappage" || pathname === "/Mappage";
  const hideNavAndFooter = pathname === "/details";

  const theme = useTheme();
  // Use Mui useMediaQuery to check if screen size is medium (md) and below
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      {showNavFooter && (!hideNavAndFooter || !isMediumScreen) && <Nav />}
      <main style={contentStyles}>{children}</main>
      {showNavFooter &&
        !hideFooter &&
        (!hideNavAndFooter || !isMediumScreen) && <FooterTwo />}
    </div>
  );
};

export { Layout };
