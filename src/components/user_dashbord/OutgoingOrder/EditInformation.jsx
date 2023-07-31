import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const EditInformation = ({ onCancel }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [title, setTitle] = useState("rama");

  const radioOptions = [
    { id: 1, label: "شقة" },
    { id: 2, label: "شاليه" },
    { id: 3, label: "استراحة" },
    { id: 4, label: "مخيم" },
    { id: 5, label: "فيلا" },
    { id: 6, label: "منتجع فندقي" },
    { id: 7, label: "غرفة" },
    { id: 8, label: "مزرعة" },
  ];
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
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
          <Typography>الاسم</Typography>
          <TextField
            type="text"
            name="title"
            value={title}
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
        <Box sx={{ marginTop: "1rem" }}>
          <Typography variant="label">التصنيف</Typography>

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
            {radioOptions.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id.toString()}
                control={<Radio />}
                label={option.label}
                sx={{
                  minWidth: "23.3%",
                  border: "2px solid transparent",
                  padding: " 8px",
                  paddingInlineEnd: "16px",
                  filter: "drop-shadow(rgba(0, 0, 0, 0.16) 0px 1px 3px)",
                  marginRight: "-11px",
                  marginLeft: "16px",
                  borderRadius: "12px",
                  background: "rgb(255, 255, 255)",
                  transition: "all 100ms ease-in-out 0s",
                  ...(selectedValue === option.id.toString() && {
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
            حفظ التعديلات
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
            إلغاء
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditInformation;
