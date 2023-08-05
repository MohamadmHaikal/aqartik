import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
const customFormControlClass = {
  flexFlow: "row",
  display: "flex",
  width: "100%",
};

const HomeInformation = ({
  formData,
  setFormData,
  inputErrors,
  setInputErrors,
}) => {
  const [inputValues, setInputValues] = useState(formData.inputValues || {});

  const [radioSelected, setRadioSelected] = useState(
    formData.radioSelected || ""
  );
  const [showAdditionalBox, setShowAdditionalBox] = useState(
    formData.showAdditionalBox || false
  );
  const [additionalRadioSelected, setAdditionalRadioSelected] = useState(
    formData.additionalRadioSelected || ""
  );

  const homedata = [
    {
      title: "السعر",
      subtitle: "ريال سعودي",
      placeholder: "الرجاء كتابة السعر...",
    },
    {
      title: "المساحة",
      subtitle: "متر مربع",
      placeholder: "الرجاء كتابة المساحة...",
    },
    { title: "العرض", subtitle: "متر", placeholder: "الرجاء كتابة العرض..." },
    { title: "طول", subtitle: "متر", placeholder: "الرجاء كتابة طول..." },
  ];
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      radioSelected,
      showAdditionalBox,
      additionalRadioSelected,
    }));
  }, [radioSelected, showAdditionalBox, additionalRadioSelected, setFormData]);

  const formatNumber = (value) => {
    if (!value) return "";

    // Remove thousand separators
    const number = parseFloat(value.replace(/,/g, ""));

    // Check if the parsed value is a valid number
    if (isNaN(number)) return "";

    // Format number with thousand separators
    return number.toLocaleString("en-US");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const formattedValue = formatNumber(value);
    const newInputValues = {
      ...inputValues,
      [name]: formattedValue,
    };
    const allInputsFilled = Object.values(newInputValues).every(
      (val) => val !== ""
    );

    setInputValues(newInputValues);

    if (allInputsFilled) {
      setInputErrors(false);
    } else {
      setInputErrors(true);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      inputValues: newInputValues,
    }));
  };
  const handleRadioChange = (event) => {
    const { name, value } = event.target;

    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setRadioSelected(value);
    if (value === "option3") {
      setShowAdditionalBox(true);
    } else {
      setShowAdditionalBox(false);
      setAdditionalRadioSelected("");
    }
  };
  const handleAdditionalRadioChange = (event) => {
    const { value } = event.target;
    setAdditionalRadioSelected(value);
  };

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            marginBottom: "2.5rem",
            fontSize: { xs: "1.5rem", md: "2.25rem" },
          }}
        >
          معلومات العقار
        </Typography>
        {homedata.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
            key={index}
          >
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <label
                htmlFor={`my-text-field-${index}`}
                style={{ fontWeight: "600", marginBottom: "0.5rem" }}
              >
                {item.title}
              </label>
              <span
                style={{
                  color: "#999",
                  marginRight: "0.5rem",
                  fontSize: "12px",
                }}
              >
                ({item.subtitle}){" "}
              </span>
            </Box>
            <TextField
              type="text"
              name={`input-${index}`}
              placeholder={item.placeholder}
              value={inputValues[`input-${index}`] || ""}
              onChange={handleInputChange}
              error={inputErrors[`input-${index}`]}
              helperText={inputErrors[`input-${index}`] ? "قيمة غير صحيحة" : ""}
              sx={{
                borderRadius: "12px",
                textAlign: "right",
                "& input[type=number]": {
                  " WebkitAppearance": "textfield",
                },
              }}
            />
            {/* {inputErrors && <Typography>يرجى ادخال المعلومات</Typography>} */}
          </Box>
        ))}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "600" }}>علاقة المعلن</Typography>
        <FormControl
          component="fieldset"
          sx={{
            marginTop: "0.5rem",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            flexFlow: "row",
            ".css-17pr1ty-MuiFormGroup-root": {
              display: "row",
              flexDirection: "row",
              flexFlow: "row",
              width: "100%",
            },
            "&.css-3oog02": customFormControlClass,
            "& .MuiFormGroup-root": {
              width: "100%",
              flexFlow: "row",
            },
          }}
        >
          <RadioGroup
            name={`radio-group`}
            value={radioSelected}
            onChange={handleRadioChange}
            sx={{ display: "flex" }}
          >
            {["option1", "option2", "option3"].map((value, index) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio sx={{ opacity: "0" }} />}
                label={
                  value === "option1"
                    ? "مالك"
                    : value === "option2"
                    ? "وكيل"
                    : "مسوق"
                }
                sx={{
                  backgroundColor:
                    radioSelected === value ? "var(--green-color)" : "white",
                  color: radioSelected === value ? "white" : "black",
                  border: "1px solid #cdcdcd",
                  width: "30%",
                  marginX: "0",
                  borderRadius: value === "option3" ? "4px" : "0",
                  padding: "0.3rem",
                  position: "relative",
                  "& .MuiFormControlLabel-label": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  },
                }}
                name={`custom-radio-${index}`} // Add the index to the name prop
              />
            ))}
          </RadioGroup>
        </FormControl>
        {showAdditionalBox && (
          <Box sx={{ marginTop: "1rem" }}>
            <RadioGroup
              name={`additional-radio`}
              value={additionalRadioSelected}
              onChange={handleAdditionalRadioChange}
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "0.5rem",
                justifyContent: "space-evenly",
              }}
            >
              {[
                { value: "exclusive", label: "حصري" },
                { value: "non-exclusive", label: "غير حصري" },
              ].map((option, index) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio sx={{ opacity: "0" }} />}
                  label={option.label}
                  name={`custom-radio-${index}`}
                  sx={{
                    backgroundColor:
                      additionalRadioSelected === option.value
                        ? "var(--green-color)"
                        : "white",
                    color:
                      additionalRadioSelected === option.value
                        ? "white"
                        : "black",
                    border: "1px solid #cdcdcd",
                    borderRadius: "4px",
                    padding: "0.3rem",
                    width: "40%",
                    marginX: "0",
                    position: "relative",
                    "& .MuiFormControlLabel-label": {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </Box>
        )}
      </Box>
    </>
  );
};

export default HomeInformation;
