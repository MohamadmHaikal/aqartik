import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import SearchIcon from "@mui/icons-material/Search";
import PaymentIcon from "@mui/icons-material/Payment";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WifiIcon from "@mui/icons-material/Wifi";
import BedIcon from "@mui/icons-material/Bed";
import PriceSlider from "./PriceSlider";
import CheckBoxHome from "./CheckBoxHome";
import RoomsNumber from "./RoomsNumber";
// import styles from "../../styles/Accordinfilter.module.css";

const checkboxeshome = [
  { id: 1, label: "مزرعة" },
  { id: 2, label: "فيلا" },
  { id: 3, label: "بيت" },

  // Add more checkboxes as needed
];
const checkboxesextra = [
  { id: 1, label: "انترنت" },
  { id: 2, label: "سماعات" },
  { id: 3, label: "Choice C" },
];
const SearchBoxHome = () => {
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");

  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };
  return (
    <>
      <Box>
        <InputLabel sx={{ color: "black" }}>ابحث بأسم العقار</InputLabel>
        <Input placeholder="مثال: شاليهات السعادة" sx={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Box sx={{ marginX: "0.2rem" }}>
          <InputLabel sx={{ color: "black" }}> مساحة</InputLabel>
          <Input placeholder="400" sx={{ width: "100%" }} />
        </Box>
        <Box sx={{ marginX: "0.2rem" }}>
          <InputLabel sx={{ color: "black" }}> طابق</InputLabel>
          <Input placeholder="2" sx={{ width: "100%", marginX: "0.2rem" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          direction: "rtl !important",
        }}
      >
        <Box>
          <InputLabel
            sx={{ color: "black", marginBottom: "0.5rem" }}
            shrink={false}
          >
            {" "}
            المدينة
          </InputLabel>
          <Select
            value={selectedValue1}
            onChange={handleChange1}
            displayEmpty
            sx={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.42)",

              "& .MuiSvgIcon-root": {
                right: "unset",
                left: "7px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "32px",
                paddingRight: "10px !important",
              },
            }}
          >
            <MenuItem value="" disabled>
              <em>مثال: الرمال</em>
            </MenuItem>
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
            <MenuItem value="Option 4">Option 4</MenuItem>
          </Select>
        </Box>
        <Box>
          <InputLabel
            sx={{ color: "black", marginBottom: "0.5rem" }}
            shrink={false}
          >
            الحي
          </InputLabel>
          <Select
            value={selectedValue2}
            onChange={handleChange2}
            displayEmpty
            sx={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.42) !important",
              boxShadow: "none !important",

              "& .MuiSvgIcon-root": {
                right: "unset",
                left: "7px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "32px",
                paddingRight: "10px !important",
              },
            }}
          >
            <MenuItem value="" disabled>
              <em>مثال: الرياض</em>
            </MenuItem>
            <MenuItem value="Option A">Option A</MenuItem>
            <MenuItem value="Option B">Option B</MenuItem>
            <MenuItem value="Option C">Option C</MenuItem>
            <MenuItem value="Option D">Option D</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          direction: "rtl !important",
        }}
      >
        <Box>
          <InputLabel
            sx={{ color: "black", marginBottom: "0.5rem" }}
            shrink={false}
          >
            {" "}
            الاتجاهات
          </InputLabel>
          <Select
            value={selectedValue3}
            onChange={handleChange3}
            displayEmpty
            sx={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.42)",

              "& .MuiSvgIcon-root": {
                right: "unset",
                left: "7px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "32px",
                paddingRight: "10px !important",
              },
            }}
          >
            <MenuItem value="" disabled>
              <em>مثال: غربي</em>
            </MenuItem>
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
            <MenuItem value="Option 4">Option 4</MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  );
};

const accordionData = [
  {
    id: 1,
    icon: <SearchIcon />,
    title: "بحث المتقدم",
    content: <SearchBoxHome />,
  },
  {
    id: 2,
    icon: <PaymentIcon />,
    title: "السعر",
    content: <PriceSlider />,
  },
  {
    id: 3,
    icon: <ApartmentIcon />,
    title: "نوع العقار",
    content: <CheckBoxHome checkboxes={checkboxeshome} />,
  },
  {
    id: 4,
    icon: <WifiIcon />,
    title: "المرافق والإضافات",
    content: <CheckBoxHome checkboxes={checkboxesextra} />,
  },
  {
    id: 5,
    icon: <BedIcon />,
    title: " تفاصيل العقار",
    content: <RoomsNumber />,
  },
];

const AccordinFilters = () => {
  const [expanded, setExpanded] = useState(false);
  const handleAccordionChange = (accordionId) => {
    setExpanded(accordionId === expanded ? null : accordionId);
  };
  return (
    <Box
      sx={{
        borderRadius: "16px",
        border: "1px solid rgba(121, 141, 174, 0.16)",
        "@media (max-width: 600px)": {
          border: "none", // No border in xs breakpoint
        },
        marginTop: "3rem",
      }}
    >
      {accordionData.map((accordion, index) => (
        <React.Fragment key={accordion.id}>
          <Accordion
            key={accordion.id}
            expanded={accordion.id === expanded}
            onChange={() => handleAccordionChange(accordion.id)}
            sx={{
              padding: "20px 39px 20px 33px",
              boxShadow: "none",
              borderTopLeftRadius: index === 0 ? "16px !important" : 0,
              borderTopRightRadius: index === 0 ? "16px !important" : 0,
              borderBottomLeftRadius:
                accordionData.length - 1 ? "16px !important" : "0",
              borderBottomRightRadius:
                accordionData.length - 1 ? "16px !important" : "0",
            }}
          >
            <AccordionSummary
              expandIcon={
                accordion.id === expanded ? <MinimizeIcon /> : <AddIcon />
              }
            >
              {accordion.icon}
              <Typography sx={{ fontWeight: "bold", marginX: "0.5rem" }}>
                {" "}
                {accordion.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{accordion.content}</AccordionDetails>
          </Accordion>
          {index !== accordionData.length - 1 && (
            <Box
              sx={{
                width: "100%",
                backgroundColor: "rgb(234, 237, 242)",
                height: "8px",
                "@media (max-width: 600px)": {
                  height: "2px", // No border in xs breakpoint
                },
              }}
            ></Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default AccordinFilters;
