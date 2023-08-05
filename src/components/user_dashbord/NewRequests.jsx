import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Box, Paper } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import {
  OrderInfo,
  OrderDetails,
  OrderRoomsNum,
  OrderLocation,
  OrderDescripton,
  OrderMap,
} from "./NewOrder";
// import { useAmp } from "next/amp";
const steps = ["معلومات العقار", "تفاصيل الطلب", "location", "الخطوة الأخيرة"];
const NewRequests = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepData, setStepData] = useState({});
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [afterWidth, setAfterWidth] = useState(16);
  const [inputValues, setInputValues] = useState([]);
  const [roomNumbers, setRoomNumbers] = useState([]);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [locationData, setLocationData] = useState({});
  const [description, setDescription] = useState("");

  const formatNumber = (value) => {
    if (!value) return "";

    // Remove thousand separators
    const number = parseFloat(value.replace(/,/g, ""));

    if (isNaN(number)) return "";

    return number.toLocaleString("en-US");
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const formattedValue = formatNumber(value);

    const updatedValues = [...inputValues];
    updatedValues[index] = formattedValue;
    setInputValues(updatedValues);
  };

  const handleNext = () => {
    if (activeStep === 0 && !isCategorySelected) {
      return;
    }

    if (activeStep === 1) {
      const areAllInputsEmpty = inputValues.every(
        (value) => value.trim() === ""
      );
      if (areAllInputsEmpty) {
        return;
      }
    }

    if (activeStep === 3) {
      const areAllOptionsEmpty = Object.values(locationData).every(
        (value) => value.trim() === ""
      );
      if (areAllOptionsEmpty) {
        return;
      }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setAfterWidth(afterWidth + 16);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setAfterWidth(afterWidth - 16);
  };

  const handleSubmit = () => {
    const data = {
      stepData,
      roomNumbers,
      description,
      selectedChoices,
    };
    console.log(data);
  };
  const handleCategorySelect = () => {
    setIsCategorySelected(true);
  };

  const handleUpdate = (data) => {
    setSelectedCategoryId(data.selectedCategoryId);
    setStepData({ ...stepData, ...data.selectedCategoryId });
  };

  const handleLocationChange = (updatedLocationData) => {
    setLocationData(updatedLocationData);
    setStepData({ ...stepData, ...updatedLocationData });
  };
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <Paper
      sx={{
        position: "relative",
        height: {xs:"calc(-40px + 100vh)" , md:"calc(-40px + 100vh)"},
        margin: "auto",
        marginTop:{xs:"-3rem" , sm:"auto"},
        maxWidth: "500px",
        borderRadius: "12px",
        paddingX: { xs: "1rem", md: "4rem" },
        paddingBlock: "40px 112px",
        boxShadow: {
          xs: "none",
          md: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box>
        {activeStep === 0 && (
          <OrderInfo
            onUpdate={handleUpdate}
            onSelect={handleCategorySelect}
            selectedCategoryId={selectedCategoryId}
            setSelectedChoices={setSelectedChoices}
          />
        )}
        {activeStep === 1 && (
          <OrderDetails
            inputValues={inputValues}
            onInputChange={handleInputChange}
          />
        )}
        {activeStep === 2 && (
          <OrderRoomsNum
            roomNumbers={roomNumbers}
            setRoomNumbers={setRoomNumbers}
            selectedChoices={selectedChoices}
            setSelectedChoices={setSelectedChoices}
          />
        )}
        {activeStep === 3 && (
          <OrderLocation
            onChange={handleLocationChange}
            selectedValues={locationData}
          />
        )}
        {activeStep === 4 && (
          <OrderDescripton
            onChange={handleDescriptionChange}
            description={description}
          />
        )}
        {activeStep === 5 && <OrderMap />}
      </Box>

      <Box
        sx={{
          position: "absolute !important",
          left: "0",
          insetBlockEnd: "0px",
          background: "grey",
          marginBlockStart: "1rem",
          isolation: "isolate",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px",
          outline: "none",
          border: "0px solid",
          width: "100%",
          borderRadius: "12px 12px 0px 0px",
          "&:before": {
            content: "''",
            position: "absolute",
            insetBlockStart: "-4px",
            insetInlineStart: "0px",
            height: "100%",
            borderStartStartRadius: "16px",
            borderStartEndRadius: "16px",
            border: "4px solid #b0ebda",
            transition: "all 300ms ease-in-out 0s",
            width: "100%",
            borderInline: "0px none",
            borderBlockEnd: "0px none",
            zIndex: "-2",
          },
          "&:after": {
            content: "''",
            position: "absolute",
            insetBlockStart: "-4px",
            insetInlineStart: "0px",
            height: "100%",
            width: `${afterWidth}%`, // Use dynamic width
            borderStartStartRadius: "16px",
            transition: "all 400ms ease-in-out 0s",
            zIndex: "-1",
            border: "4px solid var(--green-color)",
            borderStartEndradius: "0px",
            borderInline: "0px none",
            borderBlockEnd: "0px none",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "17px 0px",
            background: "rgb(255, 255, 255)",
            borderRadius: "12px 12px 0px 0px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap-reverse",
              gap: "1rem 40px",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                fontWeight: "600",
                height: "48px",
                width: "160px",
                background: "rgb(255, 255, 255)",
                borderRadius: "12px",
                color: "var(--green-color)",
                border: "1px solid var(--green-color)",
              }}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              السابق
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                height: "48px",
                width: "160px",
                borderRadius: "12px",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                backgroundColor: "var(--green-color)",
                color: "white",
                "&:hover": {
                  backgroundColor: "var(--green-color)",
                  color: "white",
                },
              }}
              onClick={activeStep === 5 ? handleSubmit : handleNext}
              disabled={
                (activeStep === 0 && !isCategorySelected) ||
                (activeStep === 1 &&
                  inputValues.every((value) => value.trim() === "")) ||
                (activeStep === 3 &&
                  Object.values(locationData).every(
                    (value) => value.trim() === ""
                  ))
              }
            >
              {activeStep === 5 ? "انتهينا" : "التالي"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewRequests;
