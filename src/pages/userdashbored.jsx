import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { TopNav, SideBar } from "../components/user_dashbord";
import {
  PersonalInfo,
  MyAds,
  NewRequests,
  OutgoingOrder,
  IcomingOrders,
  SpecialAds,
  Usersmangament,
  SubscribeDetails,
} from "../components/user_dashbord";
import { UserDashboradSpeacialAds } from "../components";
import { useTranslation } from "react-i18next";
import useDataFetcher from "../api/useDataFetcher ";
const UserDashbored = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedSubitem, setSelectedSubitem] = useState(0);
  const [userData, setUserData] = useState();
  const { data, get } = useDataFetcher();

  useEffect(() => {
    get("/api/user/get_user_data");
  }, []);
  useEffect(() => {
    if (data) setUserData(data?.user);
  }, [data]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const handleSubitemClick = (index) => {
    setSelectedSubitem(index);
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  let content;
  switch (selectedItem) {
    case 0:
      content = <PersonalInfo />;
      break;
    case 1:
      content = <OutgoingOrder userData={userData} />; // my ads section
      break;
    case 2:
      switch (selectedSubitem) {
        case 0:
          content = <NewRequests />; /// add new request
          break;
        case 1:
          content = <MyAds userData={userData} />; /// my outgoing requests section
          break;
        case 2:
          content = (
            <OutgoingOrder /// my icoming requests section
              userData={userData}
            />
          );
          break;

        default:
          content = null;
          break;
      }
      break;
    case 3:
      content = <UserDashboradSpeacialAds />;
      break;
    case 4:
      content = <Usersmangament />;
      break;
    case 5:
      content = <SubscribeDetails />;
      break;
    default:
      content = null;
      break;
  }
  return (
    <Box>
      <TopNav />
      <Grid container>
        <Grid item xs={12} lg={3}>
          <SideBar
            onItemClick={handleItemClick}
            onSubitemClick={handleSubitemClick}
            selectedItem={selectedItem}
            selectedSubitem={selectedSubitem}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box sx={{ marginTop: "7rem" }}> {content}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashbored;
