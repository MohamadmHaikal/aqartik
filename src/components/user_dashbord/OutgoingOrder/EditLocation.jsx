import React, { useState } from "react";
import { Box, Select, MenuItem, InputLabel, Button } from "@mui/material";
import styles from "../../../components/addadsolder/confirmLocation.module.css";
import ClearIcon from "@mui/icons-material/Clear";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";

const EditLocation = ({ onCancel }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const defaultValues = {
    المدينة: "Option 1",
    الحي: "Option A",
    الاتجاه: "Option X",
  };
  const [selectedValues, setSelectedValues] = useState(defaultValues);

  const selectDataLocation = [
    {
      label: t("user_dashboard.property_location.label1"),
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      label: t("user_dashboard.property_location.label2"),
      options: ["Option A", "Option B", "Option C"],
    },
    {
      label: t("user_dashboard.property_location.label3"),
      options: ["Option X", "Option Y", "Option Z"],
    },
  ];
  const handleClearSelection = (label) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [label]: "",
    }));
  };

  return (
    <Box>
      <form>
        <Box>
          {selectDataLocation.map((select, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "baseline",
                position: "relative",
              }}
            >
              <InputLabel
                sx={{
                  color: "black",

                  minWidth: { xs: "3rem", sm: "6rem" },
                }}
              >
                {select.label}
              </InputLabel>
              <ClearIcon
                onClick={() => handleClearSelection(select.label)}
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  left: lang === "ar" && "11%",
                  right: lang === "en" && "11%",
                  top: "25px",
                  fontSize: "16px",
                  color: "rgba(0, 0, 0, 0.54)",
                  zIndex: "1",
                }}
              />
              <Select
                label=""
                required
                IconComponent={ArrowDropDownIcon}
                className={`${styles.select} select`}
                classes={lang === "ar" && { icon: styles.selectIcon }}
                sx={{
                  borderRadius: "12px !important",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
                  border: "1px solid rgba(0, 0, 0, 0.06) !important",
                  paddingBlock: "5px",
                  height: "48px",
                  width: { xs: "100%", md: "70%" },
                  margin: "0.5rem 0rem",
                  position: "relative",
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      borderRadius: "1rem",
                      maxHeight: "150px",
                    },
                  },
                }}
                value={selectedValues[select.label] || ""}
                onChange={(e) =>
                  setSelectedValues((prevSelectedValues) => ({
                    ...prevSelectedValues,
                    [select.label]: e.target.value,
                  }))
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
        <Box
          sx={{
            borderWidth: "0px 0px thin",
            borderStyle: "solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            margin: "2rem 4rem",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "1rem ",
            marginInline: "auto",
            flexWrap: "wrap",
          }}
        >
          <Button
            type="submit"
            sx={{
              fontWeight: "600",
              borderRadius: "8px",
              minWidth: "186px",
              padding: "0.75rem 2.5rem",
              height: "50px",
              backgroundColor: "var(--green-color)",
              color: "white",
              "&:hover": {
                backgroundColor: "#0b7b5a",
                color: "white",
              },
            }}
          >
            {t("user_dashboard.outgoing_requests.submit_btn")}
          </Button>
          <Button
            sx={{
              fontWeight: "600",
              borderRadius: "8px",

              border: "1px solid var(--green-color)",
              minWidth: "186px",
              padding: "0.75rem 2.5rem",
              height: "50px",
              backgroundColor: "white",
              color: "var(--green-color)",
              "&:hover": {
                backgroundColor: "#e5f9f4",
              },
            }}
            onClick={onCancel}
          >
            {t("user_dashboard.outgoing_requests.cancel_btn")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditLocation;
