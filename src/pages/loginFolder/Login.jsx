import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Modal,
  Link,
} from "@mui/material";
import { Logo } from "../../assets";



const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCounterActive, setIsCounterActive] = useState(true);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, "");
    setPhoneNumber(inputPhoneNumber);
    setEnteredPhoneNumber(inputPhoneNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimer(120);
    setIsCounterActive(true);
  };
  const handleOtpChange = (event, index) => {
    const inputDigit = event.target.value;
    setOtp((prevOtp) => {
      let updatedOtp = prevOtp;
      updatedOtp =
        updatedOtp.substring(0, index) +
        inputDigit +
        updatedOtp.substring(index + 1);

      // Move cursor to the next input field
      if (inputDigit && index < otp.length - 1) {
        inputRefs[index + 1].current.focus();
      }

      return updatedOtp;
    });
  };
  const handleVerifyOtp = () => {
    // Perform OTP verification logic here
    // You can use the `otp` state variable for further processing
    // For demonstration purposes, let's just close the modal after verifying OTP
    handleCloseModal();
  };
  useEffect(() => {
    let countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          setIsCounterActive(false);
          clearInterval(countdown);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
      setTimer(120);
    };
  }, [isModalOpen, isCounterActive]);

  const formattedTime = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;

  // Create refs for each input field

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  return (
    <>
      <Container>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={12} md={5} sx={{ marginTop: "5rem" }}>
            <Box
              sx={{
                position: "relative",
                paddingX: "2.5rem",
                paddingY: "3rem",
                display: "flex",

                flexDirection: "column",
                justifyContent: "center",
                wordWrap: "break-word",
                backgroundColor: "#fff",
                backgroundClip: "border-box",
                border: "0 solid #f7f7f7",
                borderRadius: ".25rem",
              }}
            >
              <Box
                sx={{
                  width: "250px",
                  height: "60px",
                  position: "relative",
                  margin: "auto",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <form onSubmit={handleSubmit}>
                <Typography sx={{ marginY: "2rem", textAlign: "center" }}>
                  أدخل رقم هاتفك المحمول للوصول إلى لوحة القيادة.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="phoneNumberInput"
                    style={{ color: "gray", marginBottom: "1rem" }}
                  >
                    أدخل رقم الهاتف المحمول
                  </label>
                  <TextField
                    id="phoneNumberInput"
                    type="text"
                    placeholder="الهاتف مطلوب"
                    required
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </Box>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "var(--green-color)",
                    color: "white",
                    padding: "0.5rem 3rem",
                    margin: "auto",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    display: "block",
                    width: "100%",
                    borderRadius: "2rem",
                    "&:hover": {
                      backgroundColor: "var(--green-color)",
                      color: "white",
                    },
                  }}
                >
                  تسجيل الدخول
                </Button>
              </form>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Typography sx={{ color: "rgba(255,255,255,.5)" }}>
                ارجع الى
              </Typography>
              <Link href="/" sx={{ color: "white", marginRight: "0.3rem" }}>
                الرئيسية
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="otp-modal"
          aria-describedby="enter-otp"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "300px",
              bgcolor: "background.paper",

              boxShadow: 24,
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            }}
          >
            <Typography
              sx={{
                color: "var(--green-color)",
                fontWeight: "bold",
                fontSize: "18px",
                borderBottom: "1px solid #dee2e6",
                paddingBottom: "1rem",
              }}
            >
              ادخل الكود المرسل الى رقم جوالك
            </Typography>
            <Box
              sx={{
                color: " #6c757d",
                fontWeight: "600",
                display: "flex",
                marginY: "1rem",
                justifyContent: "center",
              }}
            >
              <Typography>
                لقد ارسلنا رسالة الى الرقم
                <span>{enteredPhoneNumber}</span>
              </Typography>
            </Box>
            <form>
              <Box sx={{ display: "flex", marginY: "1rem", direction: "ltr" }}>
                <input
                  type="text"
                  value={otp[0] || ""}
                  onChange={(event) => handleOtpChange(event, 0)}
                  ref={inputRefs[0]}
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "13px",
                    backgroundColor: "#ffffff",
                    lineHeight: "50px",
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#3c3c3c",
                    margin: "0 2px",
                    border: "1px solid #e2e1e1",
                    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
                  }}
                />
                <input
                  type="text"
                  value={otp[1] || ""}
                  onChange={(event) => handleOtpChange(event, 1)}
                  ref={inputRefs[1]}
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "13px",
                    backgroundColor: "#ffffff",
                    lineHeight: "50px",
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#3c3c3c",
                    margin: "0 2px",
                    border: "1px solid #e2e1e1",
                    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
                  }}
                />
                <input
                  type="text"
                  value={otp[2] || ""}
                  onChange={(event) => handleOtpChange(event, 2)}
                  ref={inputRefs[2]}
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "13px",
                    backgroundColor: "#ffffff",
                    lineHeight: "50px",
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#3c3c3c",
                    margin: "0 2px",
                    border: "1px solid #e2e1e1",
                    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
                  }}
                />
                <input
                  type="text"
                  value={otp[3] || ""}
                  onChange={(event) => handleOtpChange(event, 3)}
                  ref={inputRefs[3]}
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "13px",
                    backgroundColor: "#ffffff",
                    lineHeight: "50px",
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#3c3c3c",
                    margin: "0 2px",
                    border: "1px solid #e2e1e1",
                    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </Box>
              <Link href="/userdashbored">
                <Button
                  sx={{
                    backgroundColor: "var(--green-color)",
                    color: "white",
                    width: "100%",
                    borderRadius: "2rem",
                    marginBottom: "1em",
                    "&:hover": {
                      backgroundColor: "var(--green-color)",
                      color: "white",
                    },
                  }}
                  onClick={handleVerifyOtp}
                >
                  التحقق
                </Button>
              </Link>
              <Box
                sx={{
                  color: "#6c757d",
                  fontSize: "14px",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                في حال لم يصلك كود التحقق يمكنك
                {isCounterActive && (
                  <Typography sx={{ textAlign: "center", color: "red" }}>
                    {formattedTime}
                  </Typography>
                )}
                {!isCounterActive && (
                  <Button
                    sx={{
                      color: "var(--green-color)",
                      border: "1px solid var(--green-color)",
                      borderRadius: "2rem",
                      width: "100%",
                    }}
                    onClick={() => setIsCounterActive(true)}
                  >
                    إعادة إرسال الرمز
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Login;
