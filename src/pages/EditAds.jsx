import React from "react";
import { useLocation } from "react-router";
import Addads from "./Addads";

const EditAds = () => {
  const ad = useLocation().state.ad;
  console.log(ad);
  return <Addads type={1} ad={ad} />;
};

export default EditAds;
