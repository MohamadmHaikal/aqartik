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
import Notification from "../components/user_dashbord/Notification";

import { UserDashboradSpeacialAds } from "../components";
import { useTranslation } from "react-i18next";

const UserDashbored = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedSubitem, setSelectedSubitem] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // useEffect(() => {
  //   if (data) {
  //     setUserdata(data.user);
  //   }
  // }, [data]);
  // console.log(data);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    setShowNotification(false);
  };
  const handleSubitemClick = (index) => {
    setSelectedSubitem(index);
    setShowNotification(false);
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
          content = (
            <IcomingOrders
              title={t("user_dashboard.incoming_orders.page_title2")}
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
      <TopNav
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
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
          <Box sx={{ marginTop: "7rem" }}>
            {showNotification ? <Notification /> : content}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashbored;
