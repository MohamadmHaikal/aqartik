import React from "react";

import {
  MainSection,
  ImportantCities,
  Titles,
  TabsFilter,
} from "../../components";

import { Addads } from "../addadsolder";
import { Box, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ marginTop: { xs: "6rem", md: "12rem" } }}>
        <MainSection />
        <ImportantCities />
        <Container>
          <Box
            sx={{
              marginY: "3rem",
              marginX: "auto",
            }}
          >
            <Titles title="أهم الاعلانات"></Titles>
            <TabsFilter />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
