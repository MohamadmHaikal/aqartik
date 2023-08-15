import React, { useEffect, useState } from "react";
import SpecialAds from "../Filter/SpecialAds";
import { Box, CircularProgress } from "@mui/material";
import useDataFetcher from "../../api/useDataFetcher ";

const UserDashboradSpeacialAds = () => {
  const { data, isLoading, get } = useDataFetcher();
  useEffect(() => {
    get("/api/user/get_user_ads");
  }, []);
  const [myAds, setMyAds] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) setMyAds(data.ads.data);
  }, [data]);
  return !isLoading ? (
    <Box sx={{ maxWidth: "90%", margin: "auto" }}>
      {myAds.map((ad) => (
        <SpecialAds ad={ad} />
      ))}
    </Box>
  ) : (
    <Box
      sx={{
        minHeight: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="success" />
    </Box>
  );
};

export default UserDashboradSpeacialAds;
