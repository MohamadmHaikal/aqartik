import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import WeatherApp from "../components/LocationUser/WeatherApp";

const About = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const { title, body } = response.data;
      setTitle(title);
      setDescription(body);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ height: "20rem", maxHeight: "100vh", marginTop: "12rem" }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: "700", marginBottom: "15px" }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "var(--green-color)" }}>
          {description}
        </Typography>
      </Box>
      <WeatherApp />
    </Container>
  );
};

export default About;
