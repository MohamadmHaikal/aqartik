import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import useDataFetcher from "../../../api/useDataFetcher ";

const EditInformation = ({ ad, onCancel }) => {
  const { data, isLoading, post } = useDataFetcher();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedValue, setSelectedValue] = useState(ad.category_aqar.id);
  const [title, setTitle] = useState(ad.title);
  const [updatedValues, setUpdatedValues] = useState();
  useEffect(() => {
    setUpdatedValues(ad);
  }, [ad]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setUpdatedValues((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataSend = new FormData();

    // Verify that updatedValues is populated
    console.log("updatedValues:", updatedValues);

    // Iterate through properties of updatedValues and append each property to formDataSend
    // for (const property in updatedValues) {
    //   if (updatedValues.hasOwnProperty(property)) {
    //     console.log(`Appending ${property}: ${updatedValues[property]}`);
    //     formDataSend.append(property, updatedValues[property]);
    //   }
    // }

    // const filteredValues = Object.fromEntries(
    //   Object.entries(updatedValues).filter(([key]) => key === "thumbnail")
    // );
    // console.log(filteredValues);
    // fetch(`https://www.dashboard.aqartik.com/api/ads/update/${ad.id}`, {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("user_token")}`,
    //   },
    //   method: "POST",
    //   body: JSON.stringify(updatedValues),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("API response:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending FormData:", error);
    //   });
  };
  return (
    <Box>
      <form>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography>
            {t("user_dashboard.incoming_orders.card1.label1")}
          </Typography>
          <TextField
            type="text"
            name="title"
            value={updatedValues?.title}
            onChange={handleTitleChange}
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
            onClick={handleSubmit}
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

export default EditInformation;
