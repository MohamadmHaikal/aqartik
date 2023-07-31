import React, { useState } from "react";
import { Box, Select, MenuItem, InputLabel } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "../../addadsolder/confirmLocation.module.css";
import { OrderTitles } from ".";

const OrderLocation = ({ onChange, selectedValues }) => {
  const selectData = [
    { label: "المدينة", options: ["Option 1", "Option 2", "Option 3"] },
    { label: "الحي", options: ["Option A", "Option B", "Option C"] },
    { label: "الاتجاه", options: ["Option X", "Option Y", "Option Z"] },
  ];

  //   const [selectedValues, setSelectedValues] = useState({});

  const handleSelectChange = (label, value) => {
    const updatedValues = {
      ...selectedValues,
      [label]: value,
    };
    onChange(updatedValues);
  };

  return (
    <Box>
      <OrderTitles title="تأكيد عنوان العقار" />

      {/* Render select dropdowns */}
      {selectData.map((select, index) => (
        <div key={index}>
          <InputLabel
            sx={{ color: "black", fontWeight: "600",   marginTop: index === 0 ? "3rem" : "1rem", }}
          >
            {select.label}
          </InputLabel>
          <Select
            label=""
            required
            IconComponent={ArrowDropDownIcon}
            className={`${styles.select} select`}
            classes={{ icon: styles.selectIcon }}
            sx={{
              borderRadius: "12px !important",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
              border: "1px solid rgba(0, 0, 0, 0.06) !important",
              paddingBlock: "5px",
              height: "48px",
              width: "100%",
              marginBlock: "1rem 40px",
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  borderRadius: "1rem",
                },
              },
            }}
            value={selectedValues[select.label] || ""}
            onChange={(event) =>
              handleSelectChange(select.label, event.target.value)
            }
          >
            {select.options.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </div>
      ))}
    </Box>
  );
};

export default OrderLocation;
