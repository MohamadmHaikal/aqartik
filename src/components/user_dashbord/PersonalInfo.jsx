import React, { useState, useEffect } from "react";
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
import { useTranslation } from "react-i18next";
import useDataFetcher from "../../api/useDataFetcher ";
import { event } from "jquery";

const PersonalInfo = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { data, isLoading, error, get, post } = useDataFetcher();
  const [userData, setUserdata] = useState([]);
  const [username, setUserName] = useState(userData.username);
  const [phoneNumber, setPhoneNumber] = useState(userData.phone);
  const [compayName, setCompanyName] = useState(userData.company_name);
  const [officeName, setOfficeName] = useState(userData.office_name);
  const [email, setEmail] = useState(userData.email);
  const [membershipId, setMembershipId] = useState(userData.membershipId);
  const [about, setAbout] = useState(userData.about);

  useEffect(() => {
    get(`api/user/get_user_data`);
  }, []);
  useEffect(() => {
    if (data) {
      setUserdata(data.user);
      setPhoneNumber(userData.phone);
      console.log(data.user);
    }
  }, [data]);

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
          [id]:
            lang === "ar"
              ? "يجب إدخال أحرف صحيحة فقط"
              : "Only  characters must be entered ",
        }));
      }
      // setUserName(event.target.value);
    }

    // Validate email input
    if (id === "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]:
            lang === "ar"
              ? "يجب إدخال عنوان بريد إلكتروني صالح"
              : " must enter a valid email address",
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
          [id]:
            lang === "ar"
              ? "يجب إدخال أرقام فقط"
              : "Only numbers must be entered",
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
          [id]:
            lang === "ar"
              ? "يجب إدخال رقم جوال سعودي "
              : " must enter a Saudi mobile number",
        }));
      }
    }
    switch (id) {
      case "fullname":
        setUserName(value);
        break;
      case "companyname":
        setCompanyName(value);
        break;
      case "deskname":
        setOfficeName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "nationalId":
        setMembershipId(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "description":
        setAbout(value);
        break;
      default:
        break;
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
      lang === "ar"
        ? setLinkError("هذا الحقل مطلوب")
        : setLinkError("this field is required");
    } else if (!value.match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)) {
      lang === "ar"
        ? setLinkError("الرجاء إدخال رابط صحيح")
        : setLinkError("Please enter a valid link");
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
        fullname: lang === "ar" ? "هذا الحقل مطلوب" : "this field in required",
        nationalId:
          lang === "ar" ? "هذا الحقل مطلوب" : "this field in required",
        link: lang === "ar" ? "هذا الحقل مطلوب" : "this field in required",
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
              backgroundImage: selectedImage
                ? `url(${selectedImage})`
                : `https://www.dashboard.aqartik.com//images/avatar/${userData.image}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <input
              id={userData.image_id}
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
            {selectedImage ? null : t("user_dashboard.personal_info.img_btn")}
          </Button>
          <Typography sx={{ color: "gray" }}>
            {t("user_dashboard.personal_info.title1")}
          </Typography>
          <Typography sx={{ color: "red" }}>
            {t("user_dashboard.personal_info.hint1")}
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
            <label htmlFor="fullname">
              {" "}
              {t("user_dashboard.personal_info.label2")}
            </label>
            <TextField
              id="fullname"
              value={username}
              type="text"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.fullname)}
              helperText={errors.fullname}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="companyname">
              {" "}
              {t("user_dashboard.personal_info.label3")}
            </label>
            <TextField
              id="companyname"
              value={compayName}
              type="text"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.companyname)}
              helperText={errors.companyname}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="deskname">
              {" "}
              {t("user_dashboard.personal_info.label4")}
            </label>
            <TextField
              id="deskname"
              value={officeName}
              type="text"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.deskname)}
              helperText={errors.deskname}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="email">
              {" "}
              {t("user_dashboard.personal_info.label5")}
            </label>
            <TextField
              id="email"
              value={email}
              type="email"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="nationalId">
              {" "}
              {t("user_dashboard.personal_info.label6")}
            </label>
            <TextField
              id="nationalId"
              value={membershipId}
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
            <label htmlFor="phoneNumber">
              {" "}
              {t("user_dashboard.personal_info.label7")}
            </label>
            <TextField
              id="phoneNumber"
              value={phoneNumber}
              type="tel"
              fullWidth
              InputProps={{ readOnly: true }}
              sx={{
                marginTop: "1rem",
                "& input[type=tel]": {
                  WebkitAppearance: "textfield",
                },
              }}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <label htmlFor="description">
              {" "}
              {t("user_dashboard.personal_info.label8")}
            </label>
            <TextField
              id="description"
              value={about}
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
            <label htmlFor="membershipType">
              {" "}
              {t("user_dashboard.personal_info.label9")}
            </label>
            <RadioGroup
              name={userData.type_id}
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
                {t("user_dashboard.personal_info.license")}
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
                  label={t("user_dashboard.personal_info.license_btn1")}
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
                  label={t("user_dashboard.personal_info.license_btn2")}
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
                  <label htmlFor="licenseLink">
                    {t("user_dashboard.personal_info.license_modal_title")}*
                  </label>
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
                    {t("user_dashboard.personal_info.license_modal_desc")}
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
                        {t("user_dashboard.personal_info.license_modal_btn1")}
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
                      {t("user_dashboard.personal_info.license_modal_btn2")}
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
          {t("user_dashboard.personal_info.main_btn")}
        </Button>
      </form>
    </Box>
  );
};

export default PersonalInfo;
