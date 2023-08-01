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
} from "../components/user_dashbord";
import { UserDashboradSpeacialAds } from "../components";
const UserDashbored = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedSubitem, setSelectedSubitem] = useState(0);

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
      content = <MyAds />;
      break;
    case 2:
      switch (selectedSubitem) {
        case 0:
          content = <NewRequests />;
          break;
        case 1:
          content = <OutgoingOrder />;
          break;
        case 2:
          content = <IcomingOrders title="الطلبات الواردة" />;
          break;

        default:
          content = null;
          break;
      }
      break;
    case 3:
      content = <UserDashboradSpeacialAds />;
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
