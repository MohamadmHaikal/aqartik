import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Modal,
  Link,
} from "@mui/material";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    nationalId: "",
    phoneNumber: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState("");
  const [license, setLicense] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Validate name input
    if (id === "fullname") {
      if (/^[A-Za-z\s]+$/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: "يجب إدخال أحرف صحيحة فقط",
        }));
      }
    }

    // Validate email input
    if (id === "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: "يجب إدخال عنوان بريد إلكتروني صالح",
        }));
      }
    }

    // Validate number input
    if (id === "nationalId") {
      if (/^\d*$/.test(value) || value === "") {
        setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: "يجب إدخال أرقام فقط",
        }));
      }
    }

    // Validate phone number input
    if (id === "phoneNumber") {
      if (/^966\d{9}$/.test(value) || value === "") {
        setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: "يجب إدخال رقم جوال سعودي ",
        }));
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLicenseChange = (e) => {
    setLicense(e.target.value);
    if (e.target.value === "no") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleMembershipTypeChange = (e) => {
    setMembershipType(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };
  const handleLinkChange = (e) => {
    const { value } = e.target;
    setLink(value);

    if (value.trim() === "") {
      setLinkError("هذا الحقل مطلوب");
    } else if (!value.match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)) {
      setLinkError("الرجاء إدخال رابط صحيح");
    } else {
      setLinkError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fullname, nationalId, and link are empty
    if (
      formData.fullname.trim() === "" ||
      formData.nationalId.trim() === "" ||
      link.trim() === ""
    ) {
      setErrors({
        fullname: "هذا الحقل مطلوب",
        nationalId: "هذا الحقل مطلوب",
        link: "هذا الحقل مطلوب",
      });
      return;
    }

    // Handle form submission here
    console.log("Form submitted successfully!");
  };
  const radioOptions = [
    ["Option 1", "Option 2", "option3", "Option 4", "option5"],
  ];
  return (
    <Box sx={{ marginTop: "10rem", width: "90%", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <Button
            component="label"
            sx={{
              width: "12rem",
              height: "12rem",
              border: selectedImage ? "none" : "1px dashed gray",
              display: "block",
              margin: "auto",
              marginBottom: "auto",
              marginBottom: "1rem",
              borderRadius: "50%",
              color: "gray",
              backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
            {selectedImage ? null : "إضافة صورة"}
          </Button>
          <Typography sx={{ color: "gray" }}>رفع صورة الشعار</Typography>
          <Typography sx={{ color: "red" }}>
            صورة الشعار لا تتجاوز 2MB
          </Typography>
        </Box>
        <Grid
          item
          container
          spacing={2}
          sx={{
            justifyContent: {
              xs: "center",
              md: "right",
            },
          }}
        >
          <Grid item xs={10} md={6}>
            <label htmlFor="fullname">اسم المستخدم</label>
            <TextField
              id="fullname"
              value={formData.fullname}
              type="text"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.fullname)}
              helperText={errors.fullname}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="companyname">اسم الشركة</label>
            <TextField
              id="companyname"
              value={formData.companyname}
              type="text"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.companyname)}
              helperText={errors.companyname}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="deskname">اسم المكتب</label>
            <TextField
              id="deskname"
              value={formData.deskname}
              type="text"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.deskname)}
              helperText={errors.deskname}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="email">البريد الالكتروني</label>
            <TextField
              id="email"
              value={formData.email}
              type="email"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="nationalId">رقم الهوية الوطنية</label>
            <TextField
              id="nationalId"
              value={formData.nationalId}
              type="text"
              fullWidth
              sx={{
                marginTop: "1rem",
                "& input[type=number]": {
                  WebkitAppearance: "textfield",
                },
              }}
              onChange={handleChange}
              error={Boolean(errors.nationalId)}
              helperText={errors.nationalId}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="phoneNumber">رقم الجوال</label>
            <TextField
              id="phoneNumber"
              value="055746474648"
              type="tel"
              fullWidth
              sx={{
                marginTop: "1rem",
                "& input[type=tel]": {
                  WebkitAppearance: "textfield",
                },
              }}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="description">النبذة التعريفية</label>
            <TextField
              id="description"
              value={formData.description}
              type="text"
              fullWidth
              multiline
              rows={4}
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="membershipType">نوع العضوية</label>
            <RadioGroup
              name="membershipType"
              value={membershipType}
              onChange={handleMembershipTypeChange}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
              {radioOptions.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                  }}
                >
                  {row.map((value, index) => (
                    <FormControlLabel
                      key={value}
                      value={value}
                      control={<Radio sx={{ opacity: "0" }} />}
                      label={value}
                      sx={{
                        backgroundColor:
                          membershipType === value
                            ? "var(--green-color)"
                            : "white",
                        color: membershipType === value ? "white" : "black",
                        border: "1px solid #cdcdcd",
                        width: "8rem",
                        marginBottom: "0.5rem",
                        borderRadius: "0",
                        padding: "0.3rem",
                        position: "relative",
                        "& .MuiFormControlLabel-label": {
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        },
                      }}
                      name={`custom-radio-${rowIndex}-${index}`}
                    />
                  ))}
                </div>
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={10} md={6}>
            {/* this section for License */}
            <Box sx={{ marginY: "2rem" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                هل لديك رخصة ممارسة نشاط الوساطة و التسويق العقاري؟
              </Typography>
              <RadioGroup
                name="license"
                value={license}
                onChange={handleLicenseChange}
                sx={{ flexDirection: "row", marginTop: "1rem" }}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio sx={{ opacity: "0" }} />}
                  label="نعم"
                  sx={{
                    backgroundColor:
                      license === "yes" ? "var(--green-color)" : "white",
                    color: license === "yes" ? "white" : "black",
                    border: "1px solid #cdcdcd",

                    width: "8rem",
                    marginBottom: "0.5rem",
                    borderRadius: "2rem",
                    padding: "0.3rem",
                    position: "relative",
                    "& .MuiFormControlLabel-label": {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio sx={{ opacity: "0" }} />}
                  label="لا"
                  sx={{
                    backgroundColor:
                      license === "no" ? "var(--green-color)" : "white",
                    color: license === "no" ? "white" : "black",
                    border: "1px solid #cdcdcd",

                    width: "8rem",
                    marginBottom: "0.5rem",
                    borderRadius: "2rem",
                    padding: "0.3rem",
                    position: "relative",
                    "& .MuiFormControlLabel-label": {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />
              </RadioGroup>
              {license === "yes" && (
                <Box sx={{ marginY: "1rem" }}>
                  <label htmlFor="licenseLink">اضافة رابط الرخصة*</label>
                  <TextField
                    id="licenseLink"
                    type="text"
                    fullWidth
                    sx={{ marginTop: "1rem" }}
                    value={link}
                    onChange={handleLinkChange}
                    error={Boolean(linkError)}
                    helperText={linkError}
                    required
                  />
                </Box>
              )}
              <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "300px", md: "500px" },
                    bgcolor: "white",
                    border: "2px solid transparent",
                    borderRadius: "1rem",
                    boxShadow: 24,
                    textAlign: "center",
                    p: 4,
                  }}
                >
                  <Typography>
                    هل ترغب في التسحيل لدى الهيئة العامة للعقار للحصول على رخصة
                    الوساطة والتسويق العقاري؟
                  </Typography>
                  <Box sx={{ marginY: "1rem" }}>
                    <Button
                      sx={{
                        border: "1px solid var(--green-color)",
                        color: "var(--green-color)",
                        padding: "0.5rem 2rem",
                        marginX: "0.3rem",
                      }}
                    >
                      <Link
                        href="https://eservicesredp.rega.gov.sa/auth/register"
                        sx={{
                          textDecoration: "none",
                          color: "var(--green-color)",
                        }}
                      >
                        موافق
                      </Link>
                    </Button>
                    <Button
                      onClick={handleCloseModal}
                      sx={{
                        border: "1px solid var(--green-color)",
                        color: "var(--green-color)",
                        padding: "0.5rem 2rem",
                        marginX: "0.3rem",
                      }}
                    >
                      لاحقا
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Grid>
        </Grid>

        <Button
          type="submit"
          sx={{
            backgroundColor: "var(--green-color)",
            color: "white",
            marginY: "2rem",
            fontSize: "18px",
            padding: "0.5rem 2rem",
            display: "block",
            marginX: "auto",
            "&:hover": {
              backgroundColor: "var(--green-color)",
              color: "white",
            },
          }}
        >
          حفظ واستمرار
        </Button>
      </form>
    </Box>
  );
};

export default PersonalInfo;
