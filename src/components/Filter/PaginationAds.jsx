import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#14b183",
    },
  },
});

const PaginationAds = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Pagination
          count={10}
          color="primary"
          sx={{
            "& .Mui-selected": {
              color: "#FFFFFF !important", // white color
              backgroundColor: "#14b183", // background color when selected
              "&:hover": {
                backgroundColor: "#14b183", // background color when selected and hovered
              },
            },
            "& .MuiButtonBase-root": {
              fontSize: "14px",
              minWidth: "30px",
            },
            justifyContent: "center",
            marginTop: "2rem",
            display: "flex",
          }}
        />
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default PaginationAds;
