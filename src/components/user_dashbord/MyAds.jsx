import React from "react";
import { useTranslation } from "react-i18next";
import IcomingOrders from "./IncomingOrder/IcomingOrders";

const MyAds = () => {
  const { t } = useTranslation();
  return (
    <IcomingOrders title={t("user_dashboard.incoming_orders.page_title")} />
  );
};

export default MyAds;
