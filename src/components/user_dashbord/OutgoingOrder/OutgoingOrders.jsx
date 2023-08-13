import React, { useEffect, useState } from "react";
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Map, Logo } from "../../../assets";

import {
  EditInformation,
  EditLocation,
  ShowHomeSatusModal,
  EditMap,
  EditDescription,
} from "./index";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useDataFetcher from "../../../api/useDataFetcher ";
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
const OutGoingOrders = ({ userData }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { data, isLoading, get } = useDataFetcher();
  const [myAds, setMyAds] = useState([]);

  useEffect(() => {
    get("/api/user/get_user_ads");
  }, []);

  useEffect(() => {
    console.log(data);
    if (data) setMyAds(data.ads.data);
  }, [data]);

  const [edditInfo, setEditInfo] = useState(false);
  const [descriptionEdit, setDescriptionEdit] = useState(false);
  const [edditLoc, setEditLoc] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [MapEdit, setMapEdit] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel, work) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
      <OrderTitles title={t("user_dashboard.incoming_orders.page_title")} />
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
        {myAds.map((ad) => (
          <CustomAccordion
            key={ad.id}
            TransitionProps={{ unmountOnExit: true }}
            expanded={expanded === `panel${ad.id}`}
            onChange={handleChange(`panel${ad.id}`, ad)}
          >
            <Box sx={{ paddingInline: "20px" }}>
              <CustomAccordionSummary
                expandIcon={
                  <CircleIconButton size="small">
                    <ExpandMoreIcon sx={{ fontSize: "2rem" }} />
                  </CircleIconButton>
                }
                aria-controls={`panel${ad.id}-content`}
                id={`panel${ad.id}-header`}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                    {ad.title}
                  </Typography>
                  <Typography
                    sx={{
                      color:
                        expanded === `panel${ad.id}`
                          ? "var(--green-color)"
                          : "rgb(244, 67, 54)",
                      marginX: "1rem",
                    }}
                  >
                    {expanded === `panel${ad.id}`
                      ? t("user_dashboard.incoming_orders.ad_expanded.one")
                      : t("user_dashboard.incoming_orders.ad_expanded.two")}
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
                        {t("user_dashboard.incoming_orders.card1.label1")}
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleEditInformation}
                      >
                        {!edditInfo &&
                          t("user_dashboard.outgoing_requests.edit_btn")}
                      </Typography>
                    </Box>
                    {edditInfo && (
                      <Fade in={edditInfo}>
                        <Box>
                          <EditInformation ad={ad} onCancel={onCancel} />
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
                            <Typography>
                              {t("user_dashboard.incoming_orders.card1.label1")}
                            </Typography>
                            <Typography>{ad.title}</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "1rem",
                            }}
                          >
                            <Typography>
                              {t("user_dashboard.incoming_orders.card1.label2")}
                            </Typography>
                            <Typography>
                              {lang === "ar"
                                ? ad.category_aqar.ar_name
                                : ad.category_aqar.en_name}
                            </Typography>
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
                        {t("user_dashboard.incoming_orders.card2.title")}
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleEditLocation}
                      >
                        {!edditLoc &&
                          t("user_dashboard.outgoing_requests.edit_btn")}
                      </Typography>
                    </Box>
                    {edditLoc && (
                      <Fade in={edditLoc}>
                        <Box>
                          <EditLocation
                            ad={ad}
                            onCancel={handleCloseEditLocation}
                          />
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
                            <Typography>
                              {t("user_dashboard.incoming_orders.card2.label1")}
                            </Typography>
                            <Typography>{ad.city}</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "1rem",
                            }}
                          >
                            <Typography>
                              {" "}
                              {t("user_dashboard.incoming_orders.card2.label2")}
                            </Typography>
                            <Typography>{ad?.neighborhood}</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "1rem",
                            }}
                          >
                            <Typography>
                              {lang === "ar" ? "الشارع" : "road"}
                            </Typography>
                            <Typography>{ad?.road}</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "1rem",
                            }}
                          >
                            <Typography>
                              {" "}
                              {t(
                                "user_dashboard.incoming_orders.card2.label3"
                              )}{" "}
                            </Typography>
                            {/* <Typography>
                              {lang === "ar"
                                ? ad?.interface_aqar.ar_name
                                : ad?.interface_aqar.en_name}
                            </Typography> */}
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
                              {t("user_dashboard.incoming_orders.card5.title")}
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
                              {!descriptionEdit &&
                                t("user_dashboard.outgoing_requests.edit_btn")}
                            </Typography>
                          </Box>
                          <Typography>{ad?.description}</Typography>
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
                        {t("user_dashboard.incoming_orders.card3.title")}
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleModalOpen}
                      >
                        {t("user_dashboard.outgoing_requests.state_btn")}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>
                        {" "}
                        {t("user_dashboard.incoming_orders.card3.label1")}
                      </Typography>
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
                        {t("user_dashboard.incoming_orders.card4.title")}
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--green-color)",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={handleMapEdit}
                      >
                        {!MapEdit &&
                          t("user_dashboard.outgoing_requests.edit_btn")}
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
              <OrderCard title="وحدات هذا العقار ">
                <Link
                  to="/EditAds"
                  state={{ ad: ad }}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "rgba(56, 31, 118, 0.04)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingY: "2rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: { xs: "block", md: "flex" },
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={Logo}
                        alt=""
                        style={{ width: "80px", objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginInlineStart: "1rem",
                          alignItems: "start",
                        }}
                      >
                        <Typography>fkfjg</Typography>
                        <Typography sx={{ color: "red" }}>
                          {" "}
                          غير معروض (أوف لابن)
                        </Typography>
                      </Box>
                    </Box>
                    <ChevronLeftIcon sx={{ color: "gray" }} />
                  </Box>
                </Link>
              </OrderCard>
            </CustomAccordionDetails>
          </CustomAccordion>
        ))}
        {modalOpen && <ShowHomeSatusModal onClose={handleModalClose} />}
      </Box>
    </Box>
  );
};

export default OutGoingOrders;
