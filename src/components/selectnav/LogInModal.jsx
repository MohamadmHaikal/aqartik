import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

import { KSA } from "../../assets";

const LogInModal = ({ open, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Phone number input, Step 2: OTP verification
  const [otp, setOTP] = useState("");
  const [isValidOTP, setIsValidOTP] = useState(false);
  const [isOTPInvalid, setIsOTPInvalid] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [codeReceived, setCodeReceived] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const validatePhoneNumber = () => {
    const saudiNumberRegex = /^05[0-9]{8}$/;
    setIsValidPhoneNumber(saudiNumberRegex.test(phoneNumber));
  };

  const verifyOTP = () => {
    const expectedOTP = "1234";

    if (otp === expectedOTP) {
      // OTP is valid
      console.log("OTP is valid"); // Replace this with your desired logic
      setIsOTPInvalid(false); // Reset the OTP error state
    } else {
      // OTP is invalid
      console.log("OTP is invalid"); // Replace this with your desired logic
      setIsOTPInvalid(true); // Set the OTP error state to true
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      // Handle logic for step 1 (phone number input)
      setStep(2); // Move to step 2 (OTP verification)
      setOTP(["", "", "", ""]); // Reset OTP input
      setIsValidOTP(false); // Reset OTP validation
      setResendDisabled(true); // Disable "Resend" button
      setResendCountdown(5); // Start the countdown
      setCodeReceived(false); // Reset the code received state
    } else if (step === 2) {
      // Handle logic for step 2 (OTP verification)
      verifyOTP();
    }
  };

  const handleBack = () => {
    setStep(1);
    setOTP("");
  };

  const handleResendOTP = () => {
    if (countdownFinished && resendDisabled) {
      setResendDisabled(false);
      setCountdownFinished(false);
      setResendCountdown(5); // Restart the countdown
      setCodeReceived(false); // Reset the code received state
      setResendDisabled(true);
    } else if (!countdownFinished && !resendDisabled) {
      setResendCountdown(0); // Stop the current countdown
    }
  };

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => {
        setResendCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCountdownFinished(true);
    }
  }, [resendCountdown]);
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxWidth: "90%",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "16px",
          p: 4,
        }}
      >
        {step === 2 && (
          <Button onClick={handleBack} sx={{ color: "black" }}>
            رجوع
          </Button>
        )}
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {step === 1 ? "أهلا بك!" : "الرجاء إدخال الكود للمتابعة"}
        </Typography>
        <Typography sx={{ marginY: "1rem" }}>
          {step === 1
            ? "أدخل رقم هاتفك الجوال لإنشاء حساب أو تسجيل الدخول."
            : ""}
        </Typography>

        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          {step === 1 && (
            <Box
              sx={{
                height: "96px",
                width: "100%",
                borderRadius: "20px",
                border: "1px solid rgb(186, 189, 210)",
                position: "relative",
                "&:before": {
                  content: "''",
                  position: "absolute",
                  left: "0",
                  borderRadius: "20px",
                  border: "5px solid rgba(221, 223, 238, 0.16)",
                  height: "100%",
                  width: "100%",
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: "1", padding: "24px" , textAlign:"right"}}>
                <label
                  htmlFor="phoneNumber"
                  style={{ color: "rgba(0, 0, 0, 0.54)", display: "block" }}
                >
                  رقم هاتفك الجوال
                </label>
                <img
                  src={KSA}
                  alt="ksa"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "1rem",
                    marginTop: "0.2rem",
                  }}
                />
                <TextField
                  id="phoneNumber"
                  type="text"
                  placeholder="051 2345 678"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    validatePhoneNumber();
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <PhoneIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    direction: "ltr",
                    border: "none",
                    width: "100%",
                    marginTop: "-1rem",
                    "& fieldset": { border: "none" },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                    "& ::placeholder": {
                      fontSize: "20px",
                      fontWeight: "700",
                    },
                  }}
                />
              </Box>
            </Box>
          )}

          {step === 2 && (
            <Box
              sx={{
                // display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Typography>
                {`لقد أرسلنا الكود برسالة إلى الرقم ${phoneNumber}`}
              </Typography>
              {isOTPInvalid && (
                <Typography color="error">
                  رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى.
                </Typography>
              )}
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {step === 2 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  direction: "ltr", // Set the direction to RTL
                }}
              >
                {Array.from({ length: 4 }).map((_, index) => {
                  const inputIndex = index;
                  return (
                    <TextField
                      key={index}
                      type="text"
                      value={otp[inputIndex] || ""}
                      onChange={(e) => {
                        const updatedOTP = [...otp];
                        updatedOTP[inputIndex] = e.target.value;
                        setOTP(updatedOTP.join(""));
                        setIsValidOTP(updatedOTP.join("").length === 4);

                        if (e.target.value && index < 3) {
                          const nextInput = document.getElementById(
                            `otp-input-${index + 1}`
                          );
                          nextInput && nextInput.focus();
                        }
                      }}
                      inputProps={{
                        maxLength: 1,
                      }}
                      autoFocus={index === 0}
                      id={`otp-input-${index}`}
                      sx={{
                        width: "60px",
                        marginLeft: "0.5rem", // Adjust the margin to create the desired spacing
                        "& input": {
                          textAlign: "center",
                          fontSize: "20px",
                        },
                      }}
                    />
                  );
                })}
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              disabled={step === 1 ? !isValidPhoneNumber : !isValidOTP}
              sx={{
                boxShadow: "none",
                backgroundColor:
                  step === 1
                    ? isValidPhoneNumber
                      ? "var(--green-color)"
                      : "rgba(0, 0, 0, 0.12)"
                    : isValidOTP
                    ? "var(--green-color)"
                    : "rgba(0, 0, 0, 0.12)",
                color:
                  step === 1
                    ? isValidPhoneNumber
                      ? "white"
                      : "rgba(0, 0, 0, 0.26)"
                    : isValidOTP
                    ? "white"
                    : "rgba(0, 0, 0, 0.26)",

                marginY: "1rem",
                marginX: "auto",
                width: "10rem",
                display: "block",
                "&:hover": {
                  color:
                    step === 1
                      ? isValidPhoneNumber
                        ? "white"
                        : "rgba(0, 0, 0, 0.26)"
                      : isValidOTP
                      ? "white"
                      : "rgba(0, 0, 0, 0.26)",
                  backgroundColor:
                    step === 1
                      ? isValidPhoneNumber
                        ? "var(--green-color)"
                        : "rgba(0, 0, 0, 0.12)"
                      : isValidOTP
                      ? "var(--green-color)"
                      : "rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              {step === 1 ? "متابعة" : "التحقق"}
            </Button>
          </Box>

          {step === 1 && (
            <Typography>
              سنقوم بإرسال رسالة إلى الرقم المدخل تحتوي على كود للمتابعة..
              <b> تأكد من إدخال رقمك بشكل صحيح.</b>
            </Typography>
          )}

          {step === 2 && (
            <Box>
              {resendCountdown > 0 ? (
                <Typography>({resendCountdown} ثانية)</Typography>
              ) : (
                <Button onClick={handleResendOTP} sx={{ color: "black" }}>
                  قم بإرسال رمز التحقق من جديد
                </Button>
              )}
            </Box>
          )}
        </form>
      </Box>
    </Modal>
  );
};

export default LogInModal;
