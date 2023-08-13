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
const main_array = [
  {
    id: 1,
    ar_name: "فيلا للبيع",
    en_name: "Villa for sale",
  },
  {
    id: 2,
    ar_name: "أرض للبيع",
    en_name: "Land for sale",
  },
  {
    id: 3,
    ar_name: "عمارة للبيع",
    en_name: "Building for sale",
  },
  {
    id: 4,
    ar_name: "بيت للبيع",
    en_name: "House for sale",
  },
  {
    id: 5,
    ar_name: "استراحة للبيع",
    en_name: "Chalet for sale",
  },
  {
    id: 6,
    ar_name: "مزرعة للبيع",
    en_name: "Farm for sale",
  },
  {
    id: 7,
    ar_name: "مستودع للبيع",
    en_name: "Warehouse for sale",
  },
  {
    id: 8,
    ar_name: "شقة للبيع",
    en_name: "Apartment for sale",
  },
  {
    id: 9,
    ar_name: "فيلا للإيجار",
    en_name: "Villa for rent",
  },
  {
    id: 10,
    ar_name: "أرض للإيجار",
    en_name: "Land for rent",
  },
  {
    id: 11,
    ar_name: "عمارة للإيجار",
    en_name: "Building for rent",
  },
  {
    id: 12,
    ar_name: "استراحة للإيجار",
    en_name: "Chalet for rent",
  },
  {
    id: 13,
    ar_name: "مزرعة للإيجار",
    en_name: "Farm for rent",
  },
  {
    id: 14,
    ar_name: "شقة للإيجار",
    en_name: "Apartment for rent",
  },
  {
    id: 15,
    ar_name: "دور للإيجار",
    en_name: "Floor for rent",
  },
  {
    id: 16,
    ar_name: "مكتب للإيجار",
    en_name: "Office for rent",
  },
  {
    id: 17,
    ar_name: "غرفة للإيجار",
    en_name: "Room for rent",
  },
  {
    id: 18,
    ar_name: "محل للإيجار",
    en_name: "Shop for rent",
  },
  {
    id: 19,
    ar_name: "مستودع للإيجار",
    en_name: "Warehouse for rent",
  },
  {
    id: 20,
    ar_name: "مخيم للإيجار",
    en_name: "Camp for rent",
  },
  {
    id: 21,
    ar_name: "محل للتقبيل",
    en_name: "Shop for sale",
  },
];
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

    const filteredValues = Object.fromEntries(
      Object.entries(updatedValues).filter(([key]) => key === "thumbnail")
    );
    console.log(filteredValues);
    fetch(`https://www.dashboard.aqartik.com/api/ads/update/${ad.id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      method: "POST",
      body: JSON.stringify(updatedValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
      })
      .catch((error) => {
        console.error("Error sending FormData:", error);
      });
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
        {/* <Box sx={{ marginTop: "1rem" }}>
          <Typography variant="label">
            {t("user_dashboard.incoming_orders.card1.label2")}
          </Typography>

          <RadioGroup
            value={selectedValue}
            onChange={handleChange}
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {main_array.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id.toString()}
                control={<Radio />}
                label={lang === "ar" ? option?.ar_name : option?.en_name}
                sx={{
                  minWidth: "23.3%",
                  border: "2px solid transparent",
                  padding: " 8px",
                  paddingInlineEnd: "8px",
                  filter: "drop-shadow(rgba(0, 0, 0, 0.16) 0px 1px 3px)",
                  marginRight: "-11px",
                  marginLeft: "16px",
                  borderRadius: "12px",
                  background: "rgb(255, 255, 255)",
                  transition: "all 100ms ease-in-out 0s",
                  ...(selectedValue === option?.id && {
                    border: "2px solid var(--green-color)",
                    color: "var(--green-color)",
                  }),
                  "& .MuiRadio-root.Mui-checked": {
                    color: "var(--green-color)",
                  },
                  "& .MuiFormControlLabel-label": {
                    fontWeight: 600,
                  },
                }}
              />
            ))}
          </RadioGroup>
        </Box> */}
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
