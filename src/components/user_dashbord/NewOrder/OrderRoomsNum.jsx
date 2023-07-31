import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { OrderTitles } from ".";

const OrderRoomsNum = ({
  roomNumbers,
  setRoomNumbers,
  selectedChoices,
  setSelectedChoices,
}) => {
  const showFirstBox = false;
  const roomslabels = [
    "عدد الصالات",
    "عدد الغرف",
    "عدد الحمامات",
    "عدد المطابخ",
  ];
  const proprties = [
    { id: 1, name: "اصنصير مصعد" },
    { id: 2, name: "اطلالة على جبل" },
    { id: 3, name: "اطلالة على حديقة" },
    { id: 4, name: "انترنت" },
    { id: 5, name: "دخول ذاتي" },
  ];
  const [roomsInputValues, setRoomsInputValues] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (roomNumbers.length === 0) {
      setRoomsInputValues([0, 0, 0, 0]);
    } else {
      setRoomsInputValues(roomNumbers);
    }
  }, [roomNumbers]);

  const handleDecrement = (index) => {
    if (roomsInputValues[index] > 0) {
      const updatedValues = [...roomsInputValues];
      updatedValues[index] -= 1;
      setRoomsInputValues(updatedValues);
      setRoomNumbers(updatedValues);
    }
  };

  const handleIncrement = (index) => {
    if (roomsInputValues[index] < 10) {
      const updatedValues = [...roomsInputValues];
      updatedValues[index] += 1;
      setRoomsInputValues(updatedValues);
      setRoomNumbers(updatedValues);
    }
  };

  const handleChange = (event, index) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      const updatedValues = [...roomsInputValues];
      updatedValues[index] = value;
      setRoomsInputValues(updatedValues);
      onInputChange(index, event);
    }
  };
  const handlePropertyClick = (propertyId) => {
    if (selectedChoices.includes(propertyId)) {
      setSelectedChoices(selectedChoices.filter((id) => id !== propertyId));
    } else {
      setSelectedChoices([...selectedChoices, propertyId]);
    }
  };
  const onInputChange = (index, event) => {
    console.log("Input value:", event.target.value);
    console.log("Input index:", index);
  };
  return (
    <Box>
      {showFirstBox && (
        <>
          <OrderTitles title="تفاصيل العقار" />
          <Typography sx={{ color: "gray" }}>
            اختر كل المرافق الموجودة في عقارك
          </Typography>
          {roomsInputValues.map((value, index) => (
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
                  marginLeft: "auto",
                  color:
                    activeIndex === index ? "var(--green-color)" : undefined,
                }}
              >
                {roomslabels[index]}
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
                    min: 0,
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
        </>
      )}

      {!showFirstBox && (
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              marginBottom: "2.5rem",
              fontSize: { xs: "1.5rem", md: "2.25rem" },
            }}
          >
            مميزات العقار
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "space-evenly", md: "space-between" },
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
                  backgroundColor: selectedChoices.includes(property.id)
                    ? "var(--green-color)"
                    : "transparent",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    color: selectedChoices.includes(property.id)
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
    </Box>
  );
};

export default OrderRoomsNum;
