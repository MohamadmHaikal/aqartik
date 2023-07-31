import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";




const RoomsNumber = () => {
  return (
    <Box
      sx={{
        "& .custom-textfield": {
          marginTop: "1rem",
          width: "100%",
        },
      }}
    >
      <TextField
        placeholder="غرف النوم"
        variant="outlined"
        type="number"
        dir="rtl"
        className="custom-textfield"
      />
      <TextField
        placeholder="غرف الجلوس"
        variant="outlined"
        type="number"
        dir="rtl"
        className="custom-textfield"
      />
      <TextField
        placeholder="عدد المطابخ"
        variant="outlined"
        type="number"
        dir="rtl"
        className="custom-textfield"
      />
      <TextField
        placeholder=" عدد الحمامات"
        variant="outlined"
        type="number"
        dir="rtl"
        className="custom-textfield"
      />
    </Box>
  );
};

export default RoomsNumber;
