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

const PaginationAds = ({
  handlePageChange,
  current_page,
  per_page,
  last_page,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Pagination
          page={current_page}
          count={last_page}
          color="primary"
          onChange={handlePageChange}
          sx={{
            "& .Mui-selected": {
              color: "#FFFFFF !important",
              backgroundColor: "#14b183",
              "&:hover": {
                backgroundColor: "#14b183",
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
