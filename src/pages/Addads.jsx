import React, { useEffect, useState } from "react";
import { Button, Container, Box, Link } from "@mui/material";
import {
  CatgouryAds,
  MapAds,
  ConfimLocation,
  HomeDescroption,
  HomeImagesAdd,
  HomeDetails,
  HomeInformation,
  LicenseModal,
} from "../components";
import { useTranslation } from "react-i18next";
// import LicenseModal from "./LicenseModal";

const Addads = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [afterWidth, setAfterWidth] = useState(16.3); // Initial width of &:after
  const [error, setError] = useState(false);
  // const [error2, setError2] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  const [hasNextStep, setHasNextStep] = useState(true);
  const isLastStep = step === 7;
  useEffect(() => {
    setIsLicenseModalOpen(true);
  }, []);

  const handleOpenLicenseModal = () => {
    setIsLicenseModalOpen(true);
  };

  const handleCloseLicenseModal = () => {
    setIsLicenseModalOpen(false);
  };

  const hasPrevStep = step > 1;

  const handleNext = () => {
    // Perform form validation
    if (step === 1 && (!formData.name || error)) {
      setError(true);
      return; // Stop execution if the field is empty or has an error
    } else if (step === 2 && (!formData.inputValues || inputErrors)) {
      setInputErrors(true);
      // Check for errors in the input fields of step 2
      return; // Stop execution if there are errors
    }

    setError(false); // Reset the error state if there are no errors
    setInputErrors(false);

    setStep(step + 1);
    setAfterWidth(afterWidth + 13.7); // Increase the width by 10
  };
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      setAfterWidth(afterWidth - 13.7); // Decrease the width by 10
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    // Simulating form submission delay
    setTimeout(() => {
      setLoading(false);
      // Reset form data and go back to the first step
      setFormData({});
      setStep(1);
      setAfterWidth(13.7); // Reset the width after submitting the form
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CatgouryAds
            formData={formData}
            setFormData={setFormData}
            setError={setError}
            error={error}
          />
        );
      case 2:
        return (
          <HomeInformation
            formData={formData}
            setFormData={setFormData}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        );
      case 3:
        return (
          <HomeDetails
            formData={formData}
            setFormData={setFormData}
            setError={setError}
            error={error}
          />
        );
      case 4:
        return (
          <ConfimLocation
            formData={formData}
            setFormData={setFormData}
            setError={setError}
            error={error}
          />
        );
      case 5:
        return (
          <HomeDescroption
            formData={formData}
            setFormData={setFormData}
            setError={setError}
            error={error}
          />
        );
      case 6:
        return (
          <MapAds
            formData={formData}
            setFormData={setFormData}
            setError={setError}
            error={error}
          />
        );
      case 7:
        return (
          <HomeImagesAdd
            formData={formData}
            setFormData={setFormData}
            setError={setError}
            error={error}
          />
        );
      // Render other steps...
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          backgroundColor: "var(--green-color)",
          height: { xs: "calc(100vh - 125px)", md: "100vh" },
          position: "fixed",
          right: "0",
          top: " 0",
          width: "33%",
        }}
      ></Box>
      <Container
        sx={{ padding: { xs: "0" }, marginTop: { xs: "0rem", sm: "2rem" } }}
      >
        {/* {isLicenseModalOpen && (
          <LicenseModal
            isOpen={isLicenseModalOpen}
            onClose={handleCloseLicenseModal}
          />
        )} */}
        <Box
          sx={{
            position: "relative",
            marginInline: "auto",
            marginBlockStart: { xs: "0px", sm: "40px" },
            maxWidth: "500px",
            marginLeft: { lg: "1%" },
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                borderRadius: { xs: "0", sm: "12px 12px 0px 0px" },
                paddingInline: { xs: "15px", md: "5%" },
                paddingBlock: "40px 112px",
                border: "1px solid rgb(220, 220, 220)",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 8px 0px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden auto",
                height: { xs: "100vh", sm: "calc(-40px + 100vh)" },
              }}
            >
              <Link
                href="/"
                sx={{
                  textAlign: lang === "ar" ? "left" : "right",
                  textDecoration: "none",
                  marginBottom: { xs: "-28px", md: "-2rem" },
                  color: "var(--green-color)",
                }}
              >
                الرئيسية{" >>"}
              </Link>
              {/* Render the current step */}
              {renderStep()}
            </Box>
            <Box
              sx={{
                position: "absolute !important",
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
                  padding: { xs: "17px 0px" },
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
                    gap: { xs: "18px", md: "1rem 70px" },
                    justifyContent: "center",
                  }}
                >
                  {/* Prev and Next buttons */}
                  {step >= 1 && (
                    <Button
                      onClick={handlePrev}
                      disabled={loading || !hasPrevStep}
                      sx={{
                        fontWeight: "600",
                        height: "48px",
                        width: "160px",
                        background: "rgb(255, 255, 255)",
                        color: hasPrevStep
                          ? "var(--green-color)"
                          : "rgba(0, 0, 0, 0.26))",
                        borderRadius: "12px",
                        border: `1px solid ${
                          hasPrevStep
                            ? "var(--green-color)"
                            : "rgba(0, 0, 0, 0.12)"
                        }`,
                        pointerEvents: hasPrevStep ? "auto" : "none",
                        "&:hover": {
                          background: "rgb(255, 255, 255)",
                          color: hasPrevStep
                            ? "var(--green-color)"
                            : "rgba(0, 0, 0, 0.26)",
                          transform: hasPrevStep ? "scale(1.02)" : "none",
                          transition: "transform 0.2s ease-in-out",
                        },
                      }}
                    >
                      {t("user_dashboard.new_order.main_btn2")}
                    </Button>
                  )}
                  {step <= 6 && !isLastStep && (
                    <Button
                      onClick={handleNext}
                      disabled={loading || !hasNextStep}
                      sx={{
                        fontWeight: "600",
                        height: "48px",
                        width: "160px",
                        background: formData.name
                          ? "var(--green-color)"
                          : "gray",
                        color: "white",
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        "&:hover": {
                          background: formData.name
                            ? "var(--green-color)"
                            : "gray",
                          color: "white",
                          transform: formData.name ? "scale(1.02)" : "none",
                          transition: "transform 0.2s ease-in-out",
                        },
                      }}
                    >
                      {t("user_dashboard.new_order.main_btn1")}
                    </Button>
                  )}
                  {isLastStep && (
                    <Button
                      onClick={handleSubmit}
                      disabled={loading}
                      sx={{
                        fontWeight: "600",
                        height: "48px",
                        width: "160px",
                        backgroundColor: "var(--green-color)",
                        color: "white",
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        "&:hover": {
                          backgroundColor: "var(--green-color)",
                          color: "white",
                        },
                      }}
                    >
                      {loading
                        ? "Loading..."
                        : t("user_dashboard.new_order.main_btn3")}
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Addads;
