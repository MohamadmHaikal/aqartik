import React, { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  Button,
  TextField,
} from "@mui/material";
import styles from "../../../components/addadsolder/confirmLocation.module.css";
import ClearIcon from "@mui/icons-material/Clear";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";

const EditLocation = ({ ad, onCancel }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [city, setCity] = useState(ad.city);
  const [neighborhood, setNeighborhood] = useState(ad.neighborhood);
  const [road, setRoad] = useState(ad.road);
  const [selectedInterface, setSelectedInterface] = useState(
    ad.interface_aqar.id
  );

  return (
    <Box>
      <form>
        <Box sx={{ marginY: "16px" }}>
          <div
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
              {lang === "ar" ? "المدينة" : "city"}
            </InputLabel>
            <TextField
              type="text"
              name="title"
              value={city}
              // onChange={handleTitleChange}
              sx={{
                maxWidth: "340px",
                width: { xs: "80%", md: "90%" },
                marginInline: "1rem auto",

                borderRadius: "12px !important",
                boxShadow: "1",
                "& .css-1iy5sao-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
              InputProps={{
                sx: {
                  "& input": {
                    borderRadius: "12px !important",
                    padding: "13px 0.8rem",
                  },
                },
              }}
            ></TextField>
          </div>
        </Box>
        <Box sx={{ marginY: "16px" }}>
          <div
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
              {lang === "ar" ? "الحي" : "neighborhood"}
            </InputLabel>
            <TextField
              type="text"
              name="title"
              value={ad.neighborhood}
              // onChange={handleTitleChange}
              sx={{
                maxWidth: "340px",
                width: { xs: "80%", md: "90%" },
                marginInline: "1rem auto",

                borderRadius: "12px !important",
                boxShadow: "1",
                "& .css-1iy5sao-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
              InputProps={{
                sx: {
                  "& input": {
                    borderRadius: "12px !important",
                    padding: "13px 0.8rem",
                  },
                },
              }}
            ></TextField>
          </div>
        </Box>
        <Box sx={{ marginY: "16px" }}>
          <div
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
              {lang === "ar" ? "الشارع" : "road"}
            </InputLabel>
            <TextField
              type="text"
              name="title"
              value={ad.road}
              // onChange={handleTitleChange}
              sx={{
                maxWidth: "340px",
                width: { xs: "80%", md: "90%" },
                marginInline: "1rem auto",

                borderRadius: "12px !important",
                boxShadow: "1",
                "& .css-1iy5sao-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
              InputProps={{
                sx: {
                  "& input": {
                    borderRadius: "12px !important",
                    padding: "13px 0.8rem",
                  },
                },
              }}
            ></TextField>
          </div>
        </Box>
        <Box sx={{ marginY: "16px" }}>
          <div
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
              {lang === "ar" ? "الواجهة" : "interface"}
            </InputLabel>
            <TextField
              type="text"
              name="title"
              value={ad.road}
              // onChange={handleTitleChange}
              sx={{
                maxWidth: "340px",
                width: { xs: "80%", md: "90%" },
                marginInline: "1rem auto",

                borderRadius: "12px !important",
                boxShadow: "1",
                "& .css-1iy5sao-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
              InputProps={{
                sx: {
                  "& input": {
                    borderRadius: "12px !important",
                    padding: "13px 0.8rem",
                  },
                },
              }}
            ></TextField>
          </div>
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
