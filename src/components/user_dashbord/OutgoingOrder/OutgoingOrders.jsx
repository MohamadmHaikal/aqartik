import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  styled,
  Fade,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OrderTitles } from "../NewOrder";
import OrderCard from "../OrderConstant/OrderCard";
import {
  EditInformation,
  EditLocation,
  ShowHomeSatusModal,
  EditMap,
  EditDescription,
} from "./index";

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
  padding: { xs: "0rem", md: "2rem" },
});
const OutGoingOrders = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [edditInfo, setEditInfo] = useState(false);
  const [descriptionEdit, setDescriptionEdit] = useState(false);
  const [edditLoc, setEditLoc] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [MapEdit, setMapEdit] = useState(false);

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
  const handleEditInformation = () => {
    setEditInfo(true);
  };
  const handleEditLocation = () => {
    setEditLoc(true);
  };
  const onCancel = () => {
    setEditInfo(!edditInfo);
  };
  // const onCancelMapEdit = () => {
  //   setMapEdit(!MapEdit);
  // };
  const handleCloseEditLocation = () => {
    setEditLoc(!edditLoc);
  };
  const handleCloseEditMap = () => {
    setMapEdit(!MapEdit);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleMapEdit = () => {
    setMapEdit(true);
  };
  return (
    <Box sx={{ padding: { xs: "16px 5px", sm: "16px 56px" } }}>
      <OrderTitles title="الطلبات الصادرة" />
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
                  <OrderCard>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: "600", fontSize: "1.2rem" }}
                      >
                        معلومات العقار
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleEditInformation}
                      >
                        {!edditInfo && " تعديل"}
                      </Typography>
                    </Box>
                    {edditInfo && (
                      <Fade in={edditInfo}>
                        <Box>
                          <EditInformation onCancel={onCancel} />
                        </Box>
                      </Fade>
                    )}
                    {!edditInfo && (
                      <Fade in={!edditInfo}>
                        <Box>
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
                        </Box>
                      </Fade>
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginY: "1rem",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1.2rem",
                          marginTop: "1rem",
                        }}
                      >
                        عنوان العقار
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleEditLocation}
                      >
                        {!edditLoc && " تعديل"}
                      </Typography>
                    </Box>
                    {edditLoc && (
                      <Fade in={edditLoc}>
                        <Box>
                          <EditLocation onCancel={handleCloseEditLocation} />
                        </Box>
                      </Fade>
                    )}
                    {!edditLoc && (
                      <Fade in={!edditLoc}>
                        <Box>
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
                        </Box>
                      </Fade>
                    )}
                  </OrderCard>
                  <OrderCard>
                    {descriptionEdit && (
                      <Fade in={descriptionEdit}>
                        <Box>
                          <EditDescription
                            onCancel={() => {
                              setDescriptionEdit(false);
                            }}
                          />
                        </Box>
                      </Fade>
                    )}
                    {!descriptionEdit && (
                      <Fade in={!descriptionEdit}>
                        <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: "600", fontSize: "1.2rem" }}
                          >
                            وصف العقار
                          </Typography>

                          <Typography
                            sx={{
                              color: "var(--green-color)",
                              fontWeight: "600",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setDescriptionEdit(true);
                            }}
                          >
                            {!descriptionEdit && " تعديل"}
                          </Typography>
                        </Box>
                        <Typography>jsdfnjsd lskdnfsd klsdnf,m sflksslkd</Typography>
                        </Box>
                      </Fade>
                    )}
                  </OrderCard>
                </Box>
                <Box>
                  <OrderCard>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: "600", fontSize: "1.2rem" }}
                      >
                        حالة عرض العقار
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleModalOpen}
                      >
                        تغيير
                      </Typography>
                    </Box>
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
                  <OrderCard>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: "600", fontSize: "1.2rem" }}
                      >
                        الموقع على الخريطة
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleMapEdit}
                      >
                        {!MapEdit && " تعديل"}
                      </Typography>
                    </Box>
                    {MapEdit && (
                      <Fade in={MapEdit}>
                        <Box>
                          <EditMap onCancel={handleCloseEditMap} />
                        </Box>
                      </Fade>
                    )}
                    {!MapEdit && (
                      <Fade in={!MapEdit}>
                        <Box sx={{ display: "flex" }}>
                          <Typography
                            sx={{ color: "rgb(132, 132, 132)", width: "35%" }}
                          >
                            8070 العويقلة، 2709، صلاح الدين، الرياض 12434،
                            السعودية
                          </Typography>
                          <Box
                            sx={{
                              width: "60%",
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
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                        </Box>
                      </Fade>
                    )}
                  </OrderCard>
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: "12px",
                  border: "1px solid rgb(234, 234, 234)",
                  paddingBlock: "1.5rem",
                  paddingInline: "2rem",
                }}
              >
                <Typography sx={{ fontWeight: "600", fontSize: "1.2rem" }}>
                  وحدات هذا العقار
                </Typography>
                <Typography sx={{ color: "rgb(132, 132, 132)" }}>
                  1 وحدات
                </Typography>
              </Box>
            </CustomAccordionDetails>
          </CustomAccordion>
        ))}
        {modalOpen && <ShowHomeSatusModal onClose={handleModalClose} />}
      </Box>
    </Box>
  );
};

export default OutGoingOrders;
