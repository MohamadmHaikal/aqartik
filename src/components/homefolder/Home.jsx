import React, { useEffect, useState } from "react";

import {
  MainSection,
  ImportantCities,
  Titles,
  TabsFilter,
  PaginationAds,
} from "../../components";

import { Addads } from "../addadsolder";
import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import useDataFetcher from "../../api/useDataFetcher ";

const Home = () => {
  const [per_page, set_per_page] = useState();
  const [current_page, set_current_page] = useState();
  const [ads, setAds] = useState([]);
  const [last_page, set_last_page] = useState();
  const { data, isLoading, error, get, post } = useDataFetcher();
  useEffect(() => {
    get(`/api/ads/get_all_ads?page=${current_page}`);
  }, [current_page]);

  useEffect(() => {
    if (data) {
      set_current_page(data.ads.current_page);
      set_per_page(data.ads.per_page);
      setAds(data.ads.data);
      set_last_page(data.ads.last_page);
    }
    console.log(current_page);
  }, [data]);

  const { t } = useTranslation();

  const handlePageChange = (event, new_page) => {
    set_current_page(new_page);
  };

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
            {isLoading ? (
              "isloading..."
            ) : (
              <>
                <TabsFilter data={ads} />
                <PaginationAds
                  handlePageChange={handlePageChange}
                  current_page={current_page}
                  per_page={per_page}
                  last_page={last_page}
                />
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
