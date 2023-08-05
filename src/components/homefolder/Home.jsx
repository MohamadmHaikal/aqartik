import React from "react";

import {
  MainSection,
  ImportantCities,
  Titles,
  TabsFilter,
} from "../../components";

import { Addads } from "../addadsolder";
import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

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
            <Titles title={t("homepage.titles.title2")}></Titles>
            <TabsFilter />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
