import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/system";

const GreenCheckbox = styled(Checkbox)(({ theme }) => ({
  "&.Mui-checked": {
    "& .MuiIconButton-label": {
      backgroundColor: "white", // Circular checkbox color when checked
      border: "1px solid gray",
    },
    "& svg": {
      color: "white", // Check icon color when checked
      width: "20px", // Increase the width
      height: "20px", // Increase the height
      backgroundColor: "var(--green-color)",
      border: "1px solid gray",
    },
  },
  "& .MuiIconButton-label": {
    borderRadius: "50%", // Make the checkbox icon circular
    width: "16px",
    height: "16px",
    backgroundColor: "white", // Circular checkbox color when unchecked
    border: "1px solid gray", // Add border when unchecked
  },
  "& svg": {
    borderRadius: "50%", // Make the check icon circular
    color: "white", // Check icon color when unchecked
    border: "1px solid gray",
    width: "20px", // Increase the width
    height: "20px", // Increase the height
  },
}));
const CheckBoxHome = ({ checkboxes }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (event) => {
    const { name } = event.target;
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(name)) {
        return prevCheckedItems.filter((item) => item !== name);
      } else {
        return [...prevCheckedItems, name];
      }
    });
  };

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <FormControlLabel
          key={checkbox.id}
          control={
            <GreenCheckbox
              checked={checkedItems.includes(checkbox.label)}
              onChange={handleChange}
              name={checkbox.label}
              icon={<CheckIcon />}
              checkedIcon={<CheckIcon />}
            />
          }
          label={checkbox.label}
        />
      ))}
    </div>
  );
};

export default CheckBoxHome;
