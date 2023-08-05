import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomeDetails = ({ formData, setFormData }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedPropertyIds, setSelectedPropertyIds] = useState(
    formData.selectedPropertyIds || []
  );
  const [userInputValues, setUserInputValues] = useState(
    formData.userInputValues || Array(4).fill(0)
  );

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      activeIndex,
      selectedPropertyIds,
      userInputValues,
    }));
  }, [activeIndex, selectedPropertyIds, userInputValues, setFormData]);

  const [inputValues, setInputValues] = useState(userInputValues);
  useEffect(() => {
    setInputValues(userInputValues);
  }, [userInputValues]);
  const labels = [
    t("user_dashboard.property_features.label1"),
    t("user_dashboard.property_features.label2"),
    t("user_dashboard.property_features.label3"),
    t("user_dashboard.property_features.label4"),
  ];
  const showFirstBox = true;
  const proprties = [
    { id: 1, name: "اصنصير مصعد" },
    { id: 2, name: "اطلالة على جبل" },
    { id: 3, name: "اطلالة على حديقة" },
    { id: 4, name: "انترنت" },
    { id: 5, name: "دخول ذاتي" },
  ];
  const handlePropertyClick = (propertyId) => {
    if (selectedPropertyIds.includes(propertyId)) {
      setSelectedPropertyIds(
        selectedPropertyIds.filter((id) => id !== propertyId)
      );
    } else {
      setSelectedPropertyIds([...selectedPropertyIds, propertyId]);
    }
  };
  const handleIncrement = (index) => {
    if (userInputValues[index] < 10) {
      setUserInputValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[index] += 1;
        return updatedValues;
      });
    }
  };

  const handleDecrement = (index) => {
    if (userInputValues[index] > 0) {
      setUserInputValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[index] -= 1;
        return updatedValues;
      });
    }
  };

  const handleChange = (event, index) => {
    let value = parseInt(event.target.value);

    if (isNaN(value)) {
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > 10) {
      value = 10;
    }

    setUserInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  return (
    <>
      {showFirstBox && (
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              marginBottom: "2.5rem",
              fontSize: { xs: "1.5rem", md: "2.25rem" },
            }}
          >
            {t("user_dashboard.property_features.title")}
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              color: "rgb(118, 118, 118)",
              marginBottom: "1rem",
            }}
          >
            {t("user_dashboard.property_features.title2")}
          </Typography>

          {inputValues.map((value, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Typography
                variant="label"
                sx={{
                  fontSize: "18px",
                  display: "block",
                  marginLeft: lang === "ar" ? "auto" : "",
                  marginRight: lang === "en" ? "auto" : "",
                  color:
                    activeIndex === index ? "var(--green-color)" : undefined,
                }}
              >
                {labels[index]}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  onClick={() => handleDecrement(index)}
                  sx={{ fontSize: "2rem", color: "var(--green-color)" }}
                >
                  -
                </Button>
                <TextField
                  type="number"
                  value={value}
                  onChange={(event) => handleChange(event, index)}
                  variant="outlined"
                  sx={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
                    borderRadius: "12px",
                    textAlign: "center",
                    width: "6rem",
                    height: "3.5rem",
                    "& .css-19dwjcc-MuiInputBase-root-MuiOutlinedInput-root": {
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
                      borderRadius: "12px",
                      padding: "8px 0.8rem",
                      width: "100%",
                      height: "100%",
                    },
                    "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                      {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                      WebkitAppearance: "textfield",
                      appearance: "textfield",
                      textAlign: "center",
                    },
                    "& input[type=number]::-moz-number-inner-spin-button, & input[type=number]::-moz-number-outer-spin-button":
                      {
                        MozAppearance: "none",
                        margin: 0,
                      },
                  }}
                  inputProps={{
                    id: `input-${index}`,
                    min: 1,
                    max: 10,
                  }}
                />
                <Button
                  onClick={() => handleIncrement(index)}
                  sx={{ fontSize: "2rem", color: "var(--green-color)" }}
                >
                  +
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {!showFirstBox && (
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", marginBottom: "2.5rem" }}
          >
            مميزات العقار
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {proprties.map((property) => (
              <Box
                key={property.id}
                onClick={() => handlePropertyClick(property.id)}
                sx={{
                  height: "100px",
                  width: "100px",
                  border: "1px solid green",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  cursor: "pointer",
                  marginBottom: "1rem",
                  backgroundColor: selectedPropertyIds.includes(property.id)
                    ? "var(--green-color)"
                    : "transparent",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    color: selectedPropertyIds.includes(property.id)
                      ? "white"
                      : "black",
                  }}
                >
                  {property.name}
                </Typography>
                <input type="hidden" value={property.id} />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default HomeDetails;
