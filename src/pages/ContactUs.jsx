import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Menu,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box sx={{ marginTop: "17rem" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: "var(--green-color)",
            marginBottom: "2rem",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          أرسل لنا رسالة لأي استفسار
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <LocationOnIcon
                sx={{
                  fontSize: { xs: "35px", md: "48px" },
                  color: "var(--green-color)",
                  marginLeft: "10px",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "20px", color: "gray" }}>
                  العنوان
                </Typography>
                <Typography>المملكة العربية السعودية / الرياض</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginY: "2rem" }}>
              <EmailIcon
                sx={{
                  fontSize: { xs: "35px", md: "48px" },
                  color: "var(--green-color)",
                  marginLeft: "10px",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "20px", color: "gray" }}>
                  البريد الالكتروني
                </Typography>
                <Typography>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    info@tamed.sa
                  </a>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <PhoneIcon
                sx={{
                  fontSize: { xs: "35px", md: "48px" },
                  color: "var(--green-color)",
                  marginLeft: "10px",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "20px", color: "gray" }}>
                  الجوال
                </Typography>
                <Typography>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    05775559898
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>

          <Paper
            sx={{
              minWidth: "500px",
              margin: "auto",
              padding: "1rem",
              boxShadow: "2",
            }}
          >
            <FormControl sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "var(--green-color)",
                  fontSize: "18px",
                  marginY: "10px",
                }}
              >
                نوع الرسالة
              </Typography>
              <Select
                id="select"
                value={selectedValue}
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "var(--green-color)",
                  fontSize: "18px",
                  marginY: "10px",
                }}
              >
                المنصة
              </Typography>
              <Select
                id="select"
                value="option1"
                onChange={handleChange}
                sx={{ width: "100%" }}
                readOnly="read-only"
              >
                <MenuItem value="option1" selected>
                  {" "}
                  موقع
                </MenuItem>
              </Select>
            </FormControl>
            <Typography
              sx={{
                color: "var(--green-color)",
                fontSize: "18px",
                marginY: "10px",
              }}
            >
              نوع الرسالة
            </Typography>
            <TextField
              id="message"
              placeholder="وصف الرسالة ... "
              multiline
              rows={4}
              value={message}
              onChange={handleMessageChange}
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "1rem" }}
            />
            <Button
              sx={{
                backgroundColor: "var(--green-color)",
                color: "white",
                margin: "auto",
                padding: "8px 40px",
                "&:hover": {
                  backgroundColor: "var(--green-color)",
                  color: "white",
                },
              }}
            >
              إرسال
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
