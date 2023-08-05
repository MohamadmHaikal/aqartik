import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  styled,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledSelect = styled(Select)({
  "& .MuiSvgIcon-root": {
    marginRight: "auto",
    marginLeft: "0",
    left: `${(prop) => (prop.$lang === "ar" ? "5px" : "")}`,
  },
});

const SelectPlaceholder = styled(MenuItem)`
  && {
    color: #999; /* Customize the color here */
  }
`;

const ReportModal = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [selectedOption, setSelectedOption] = React.useState("");
  const [report, setReport] = useState("");

  const handleReportChange = (event) => {
    setReport(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          {t("report.title")}
        </Typography>
        <FormControl sx={{ width: "80%", margin: "auto", display: "block" }}>
          <StyledSelect
            $lang={lang}
            sx={{ width: "100%" }}
            value={selectedOption}
            onChange={handleSelectChange}
            displayEmpty
          >
            <SelectPlaceholder value="" disabled>
              {t("report.label")}
            </SelectPlaceholder>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </StyledSelect>
          <TextField
            placeholder={t("report.placeholder")}
            multiline
            rows={4}
            value={report}
            onChange={handleReportChange}
            variant="outlined"
            fullWidth
            sx={{ marginY: "1rem" }}
          />
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            sx={{
              backgroundColor: "var(--green-color)",
              color: "white",
              marginX: "0.5rem",
              "&:hover": {
                backgroundColor: "var(--green-color)",
                color: "white",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            {t("report.btn")}
          </Button>

          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              display: "block",
              marginX: "0.5rem",
              backgroundColor: "white",
              color: "var(--green-color)",
              border: "var(--green-color)",
              "&:hover": {
                backgroundColor: "white",
                color: "var(--green-color)",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            {t("report.bt2")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReportModal;
