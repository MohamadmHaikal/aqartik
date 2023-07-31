import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  styled,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OrderTitles } from "../NewOrder";
import OrderCard from "../OrderConstant/OrderCard";
import { Map } from "../../../assets";
// import './Incoming.module.css'

const CircleIconButton = styled(IconButton)({
  borderRadius: "50%",
  backgroundColor: "#d4d4d4",
  color: "white",
  padding: "0px",
});
const CustomAccordion = styled(Accordion)({
  padding: "18px",
  borderRadius: "12px",
  boxShadow: "none",
  "&:not(:last-child)": {
    marginBottom: "24px",
  },

  "&::before": {
    display: "none",
  },
});

const CustomAccordionSummary = styled(AccordionSummary)({
  borderRadius: "12px",
});

const CustomAccordionDetails = styled(AccordionDetails)({
  borderRadius: "12px",
  padding: "2rem",
});
const IcomingOrders = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [accordions, setAccordions] = useState([
    { id: 1, expanded: false },
    { id: 2, expanded: false },
  ]);
  const handleAccordionChange = (accordionId) => (event, isExpanded) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion) =>
        accordion.id === accordionId
          ? { ...accordion, expanded: isExpanded }
          : accordion
      )
    );
  };
  return (
    <Box sx={{ padding: { xs: "16px 5px", sm: "16px 56px" } }}>
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2.125rem" },
          lineHeight: "1.235",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          overflowY: "auto",
          marginBlockStart: "32px",
          borderRadius: "12px",
          display: "grid",
          gap: "24px",
          alignItems: "start",
          height: "calc(100% - 20px)",
          position: "relative",
          // boxShadow: "2",
        }}
      >
        {accordions.map((accordion) => (
          <CustomAccordion
            key={accordion.id}
            expanded={accordion.expanded}
            onChange={handleAccordionChange(accordion.id)}
          >
            <Box sx={{ paddingInline: "20px" }}>
              <CustomAccordionSummary
                expandIcon={
                  <CircleIconButton size="small">
                    <ExpandMoreIcon sx={{ fontSize: "2rem" }} />
                  </CircleIconButton>
                }
                aria-controls={`panel${accordion.id}-content`}
                id={`panel${accordion.id}-header`}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                    rama
                  </Typography>
                  <Typography
                    sx={{
                      color: accordion.expanded
                        ? "var(--green-color)"
                        : "rgb(244, 67, 54)",
                      marginX: "1rem",
                    }}
                  >
                    {accordion.expanded ? "معاينة" : "غير معروض"}
                  </Typography>
                </Box>
              </CustomAccordionSummary>
            </Box>
            <CustomAccordionDetails>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(350px, 100%), 1fr))",
                  gap: "1rem 16px",
                  marginBlockStart: "0.5rem",
                }}
              >
                <Box>
                  <OrderCard title="معلومات العقار">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography>الاسم</Typography>
                      <Typography>rama</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography>التصنيف</Typography>
                      <Typography>شقة</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>رابط العقار</Typography>
                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          marginBottom: "1rem",
                        }}
                      >
                        نسخ
                      </Typography>
                    </Box>
                  </OrderCard>
                  <OrderCard title="عنوان العقار ">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography>المدينة</Typography>
                      <Typography>جدة</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography>الحي</Typography>
                      <Typography>حي الزمرد</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography>الاتجاه </Typography>
                      <Typography>شمال</Typography>
                    </Box>
                  </OrderCard>
                </Box>
                <Box>
                  <OrderCard title="حالة عرض العقار  ">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography> الحالة</Typography>
                      <Typography
                        sx={{
                          color: "rgb(244, 67, 54)",
                          fontWeight: "600",
                          marginBottom: "1rem",
                        }}
                      >
                        غير معروض
                      </Typography>
                    </Box>
                  </OrderCard>
                  <OrderCard title="  الموقع على الخريطة ">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "rgb(132, 132, 132)",
                          width: { xs: "100%", md: "35%" },
                        }}
                      >
                        8070 العويقلة، 2709، صلاح الدين، الرياض 12434، السعودية
                      </Typography>
                      <Box
                        sx={{
                          width: { xs: "100%", md: "60%" },
                          height: "197px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          marginInlineStart: "auto",
                          position: "relative",
                        }}
                      >
                        <img
                          src={Map}
                          alt="My Image"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    </Box>
                  </OrderCard>
                </Box>
              </Box>
            </CustomAccordionDetails>
          </CustomAccordion>
        ))}
      </Box>
    </Box>
  );
};

export default IcomingOrders;
