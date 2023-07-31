import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";

const Price = ({ isOpen, onClose, onPriceSelect, selectedPrice }) => {
  const prices = ["from 100 to 100000", "Price 2", "Price 3", "Price 4"];

  const [selectedOptionPrice, setSelectedOptionPrice] = useState(selectedPrice);

  const handlePriceSelection = (price) => {
    setSelectedOptionPrice(price);
    onPriceSelect(price);
    onClose(); // Close the Price component when a price is selected
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "290px",
        position: "absolute",
        right: "-3rem",
        minHeight: "16px",
        height: "23rem",
        overflowX: "hidden",
        overflowY: "scroll",
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        borderRadius: "32px",
      }}
    >
      {prices.map((price) => (
        <Typography
          key={price}
          sx={{
            position: "relative",
            padding: "15px 28px",
            borderRadius: "25px",
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: "rgb(243, 244, 251)",
            },
            backgroundColor:
              selectedOptionPrice === price ? "rgb(243, 244, 251)" : "",
          }}
          onClick={() => handlePriceSelection(price)}
        >
          {price}
          {selectedOptionPrice === price && (
            <CheckIcon
              sx={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var( --green-color)",
              }}
            />
          )}
        </Typography>
      ))}
    </Box>
  );
};

export default Price;
