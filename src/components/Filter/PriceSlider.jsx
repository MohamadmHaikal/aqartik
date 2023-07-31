import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/system";

// Custom styles for the range slider
const CustomSlider = styled(Slider)(({ theme }) => ({
  direction: "rtl !important",
  color: "#3f51b5", // Change the color of the track
  height: 8, // Adjust the height of the track
  "& .MuiSlider-thumb": {
    height: "26px",
    width: "26px",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 9px 46px",
    marginTop: "0px",
    marginRight: "-15px",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "none", // Add a hover effect to the thumb
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      right: "50%",
      transform: "translateX(50%)",
      height: "8px",
      width: "8px",
      backgroundColor: "rgb(233, 236, 241)",
      borderRadius: "10px",
    },
    "&::after": {
      top: "-15px",
      right: "-15px",
      left: "-15px",
      bottom: "-15px",
      content: '""',
      position: "absolute",
      borderRadius: "50%",
      borderColor: "black",
    },
  },
  "& .MuiSlider-valueLabel": {
    left: "calc(-50% + 8px)", // Adjust the position of the value label
    backgroundColor: "#fff",
    color: "black",
    border: "1px solid gray",
    borderRadius: "1rem",
    fontWeight: "bold",
    "& .MuiSlider-valueLabelLabel::after": {
      content: `' ر.س'`,
    },
    "&::before": {
      borderBottom: "1px solid gray",
      borderRight: "1px solid gray",
    },
  },
  "& .MuiSlider-track": {
    display: "block",
    position: "absolute",
    borderRadius: "1px",
    backgroundColor: "var(--green-color)",
    borderColor: "var(--green-color)",
    height: "26px",
  },
  "& .MuiSlider-rail": {
    height: "26px",
    backgroundColor: "rgb(234, 237, 242)",
    borderRadius: "16px",
  },
}));

function PriceSlider() {
  const [range, setRange] = useState([20, 80]);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };
  const formatLabel = (value) => {
    return `${value} ر.س`;
  };

  return (
    <div>
      <CustomSlider
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={4000}
        marks={[
          { value: 0, label: `${formatLabel(range[0])}` },
          { value: 4000, label: `${formatLabel(range[1])}` },
        ]}
        aria-labelledby="range-slider"
      />
    </div>
  );
}

export default PriceSlider;
