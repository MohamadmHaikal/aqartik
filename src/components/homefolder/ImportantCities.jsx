import React from "react";
import Titles from "./Titles";
import { Container } from "@mui/material";
import CarsouelCity from "./CarsouelCity";
// import styles from "../../styles/CarsouelCity.module.css";

const ImportantCities = () => {
  return (
    <Container maxWidth="lg">
      <Titles title="أهم المدن" />
      <CarsouelCity></CarsouelCity>
    </Container>
  );
};

export default ImportantCities;
