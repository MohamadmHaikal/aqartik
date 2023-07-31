import React from "react";
import { Typography, Box, Link, Container, Button, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilterListIcon from "@mui/icons-material/FilterList";
import TabsFilter from "./TabsFilter";
import AccordinFilters from "./AccordinFilters";
import PaginationAds from "./PaginationAds";
import { styled } from "@mui/system";

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
  return (
    <StyledContainer>
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
              sx={{
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
              انتقل للخريطة
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
              فلتر <Typography>(1)</Typography>
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
              مسح الكل
            </Button>
          </Box>
          <Box>
            <AccordinFilters />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <TabsFilter />
        </Grid>
      </Grid>
      <PaginationAds></PaginationAds>
    </StyledContainer>
  );
};

export default HomeFilter;
