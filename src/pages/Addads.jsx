import React, { useEffect, useState } from "react";
import { Button, Container, Box } from "@mui/material";
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

import AddFeatureComponent from "../components/addadsolder/AddFeatureComponent";

import { useTranslation } from "react-i18next";
import useDataFetcher from "../api/useDataFetcher ";
import { Link } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";
// import LicenseModal from "./LicenseModal";

const Addads = ({ type, ad }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const {
    data: sendFormData,
    isLoading: isLoadingSendForm,
    post,
  } = useDataFetcher();

  //for getting the categories
  const { data, isLoading, get } = useDataFetcher();
  const [categories, setCategories] = useState([]);

  //for getting the category information
  const {
    data: info,
    isLoading: isInfoLoading,
    get: getInfo,
  } = useDataFetcher();

  useEffect(() => {
    get("/api/ads/get_categories");
  }, []);

  useEffect(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);

  //declaring the important arrays
  const [type_aqar, set_type_aqar] = useState([]);
  const [type_res, set_type_res] = useState([]);
  const [interfaces, set_interfaces] = useState([]);
  const [category_bool, set_category_bool] = useState([]);
  const [category_quantity, set_category_quantity] = useState([]);
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    set_type_aqar(info?.type_aqar);
    set_type_res(info?.type_res);
    set_interfaces(info?.interfaces);
    set_category_bool(info?.categoryBool);
    set_category_quantity(info?.categoryQuantity);
  }, [info]);

  const [step, setStep] = useState(1);
  const [isLastStep, setIsLastStep] = useState();

  const [formData, setFormData] = useState({});
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [afterWidth, setAfterWidth] = useState(13.7); // Initial width of &:after
  const [error, setError] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  useEffect(() => {
    type === 1 ? setFormData(ad) : setFormData({});
  }, [type]);
  console.log(formData);
  useEffect(() => {
    if (category_bool?.length > 0 && category_quantity?.length > 0) {
      step === 8 ? setIsLastStep(8) : setIsLastStep(null);
    } else {
      step === 7 ? setIsLastStep(7) : setIsLastStep(null);
    }
  }, [step, category_bool, category_quantity]);

  const [hasNextStep, setHasNextStep] = useState(false);

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

  // useEffect(() => {
  //   if (category_bool?.length > 0 && category_quantity?.length > 0) {
  //     if (step === 1) {
  //       if (
  //         formData.hasOwnProperty("category_id") &&
  //         formData.hasOwnProperty("title") &&
  //         formData?.title !== ""
  //       ) {
  //         setError(false);
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 2) {
  //       if (
  //         formData.hasOwnProperty("inputValues") &&
  //         formData.hasOwnProperty("radioSelected") &&
  //         formData.hasOwnProperty("aqar_type")
  //       ) {
  //         const allInputsFilled = Object.values(formData?.inputValues).every(
  //           (val) => val !== ""
  //         );
  //         const isInputsFour = Object.keys(formData?.inputValues).length >= 4;
  //         if (
  //           !allInputsFilled ||
  //           !isInputsFour ||
  //           formData?.aqar_type === "" ||
  //           formData?.radioSelected === ""
  //         ) {
  //           setError(true);
  //         } else {
  //           setError(false);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 3) {
  //       if (formData.hasOwnProperty("aqarCategoryQuantity")) {
  //         if (
  //           formData.aqarCategoryQuantity.length === category_quantity.length
  //         ) {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 4) {
  //     } else if (step === 6) {
  //       if (formData.hasOwnProperty("description")) {
  //         if (formData.description !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 7) {
  //       if (
  //         formData.hasOwnProperty("interface_id") &&
  //         formData.hasOwnProperty("neighborhood") &&
  //         formData.hasOwnProperty("city") &&
  //         formData.hasOwnProperty("road")
  //       ) {
  //         if (
  //           formData.interface_id !== "" &&
  //           formData.neighborhood !== "" &&
  //           formData.city !== "" &&
  //           formData.road !== ""
  //         ) {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 8) {
  //       if (formData.hasOwnProperty("selectedImage")) {
  //         if (formData.selectedImage !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     }
  //   } else if (category_bool?.length > 0 && category_quantity?.length === 0) {
  //     if (step === 1) {
  //       if (
  //         formData.hasOwnProperty("category_id") &&
  //         formData.hasOwnProperty("title") &&
  //         formData?.title !== ""
  //       ) {
  //         setError(false);
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 2) {
  //       if (
  //         formData.hasOwnProperty("inputValues") &&
  //         formData.hasOwnProperty("radioSelected") &&
  //         formData.hasOwnProperty("aqar_type")
  //       ) {
  //         const allInputsFilled = Object.values(formData?.inputValues).every(
  //           (val) => val !== ""
  //         );
  //         const isInputsFour = Object.keys(formData?.inputValues).length >= 4;
  //         if (
  //           !allInputsFilled ||
  //           !isInputsFour ||
  //           formData?.aqar_type === "" ||
  //           formData?.radioSelected === ""
  //         ) {
  //           setError(true);
  //         } else {
  //           setError(false);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 5) {
  //       if (formData.hasOwnProperty("description")) {
  //         if (formData.description !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 6) {
  //       if (
  //         formData.hasOwnProperty("interface_id") &&
  //         formData.hasOwnProperty("neighborhood") &&
  //         formData.hasOwnProperty("city") &&
  //         formData.hasOwnProperty("road")
  //       ) {
  //         if (
  //           formData.interface_id !== "" &&
  //           formData.neighborhood !== "" &&
  //           formData.city !== "" &&
  //           formData.road !== ""
  //         ) {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 7) {
  //       if (formData.hasOwnProperty("selectedImage")) {
  //         if (formData.selectedImage !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     }
  //   } else if (category_bool?.length === 0 && category_quantity?.length > 0) {
  //     if (step === 1) {
  //       if (
  //         formData.hasOwnProperty("category_id") &&
  //         formData.hasOwnProperty("title") &&
  //         formData?.title !== ""
  //       ) {
  //         setError(false);
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 2) {
  //       if (
  //         formData.hasOwnProperty("inputValues") &&
  //         formData.hasOwnProperty("radioSelected") &&
  //         formData.hasOwnProperty("aqar_type")
  //       ) {
  //         const allInputsFilled = Object.values(formData?.inputValues).every(
  //           (val) => val !== ""
  //         );
  //         const isInputsFour = Object.keys(formData?.inputValues).length >= 4;
  //         if (
  //           !allInputsFilled ||
  //           !isInputsFour ||
  //           formData?.aqar_type === "" ||
  //           formData?.radioSelected === ""
  //         ) {
  //           setError(true);
  //         } else {
  //           setError(false);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 3) {
  //       if (formData.hasOwnProperty("aqarCategoryQuantity")) {
  //         if (
  //           formData.aqarCategoryQuantity.length === category_quantity.length
  //         ) {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 5) {
  //       if (formData.hasOwnProperty("description")) {
  //         if (formData.description !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 6) {
  //       if (
  //         formData.hasOwnProperty("interface_id") &&
  //         formData.hasOwnProperty("neighborhood") &&
  //         formData.hasOwnProperty("city") &&
  //         formData.hasOwnProperty("road")
  //       ) {
  //         if (
  //           formData.interface_id !== "" &&
  //           formData.neighborhood !== "" &&
  //           formData.city !== "" &&
  //           formData.road !== ""
  //         ) {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 7) {
  //       if (formData.hasOwnProperty("selectedImage")) {
  //         if (formData.selectedImage !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     }
  //   } else if (category_bool?.length === 0 && category_quantity?.length === 0) {
  //     if (step === 1) {
  //       if (
  //         formData.hasOwnProperty("category_id") &&
  //         formData.hasOwnProperty("title") &&
  //         formData?.title !== ""
  //       ) {
  //         setError(false);
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 2) {
  //       if (
  //         formData.hasOwnProperty("inputValues") &&
  //         formData.hasOwnProperty("radioSelected") &&
  //         formData.hasOwnProperty("aqar_type")
  //       ) {
  //         const allInputsFilled = Object.values(formData?.inputValues).every(
  //           (val) => val !== ""
  //         );
  //         const isInputsFour = Object.keys(formData?.inputValues).length >= 4;
  //         if (
  //           !allInputsFilled ||
  //           !isInputsFour ||
  //           formData?.aqar_type === "" ||
  //           formData?.radioSelected === ""
  //         ) {
  //           setError(true);
  //         } else {
  //           setError(false);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 4) {
  //       if (formData.hasOwnProperty("description")) {
  //         if (formData.description !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 5) {
  //       if (
  //         formData.hasOwnProperty("interface_id") &&
  //         formData.hasOwnProperty("neighborhood") &&
  //         formData.hasOwnProperty("city") &&
  //         formData.hasOwnProperty("road")
  //       ) {
  //         if (
  //           formData.interface_id !== "" &&
  //           formData.neighborhood !== "" &&
  //           formData.city !== "" &&
  //           formData.road !== ""
  //         ) {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     } else if (step === 6) {
  //       if (formData.hasOwnProperty("selectedImage")) {
  //         if (formData.selectedImage !== "") {
  //           setError(false);
  //         } else {
  //           setError(true);
  //         }
  //       } else {
  //         setError(true);
  //       }
  //     }
  //   } else {
  //     if (step === 1) {
  //       if (
  //         formData.hasOwnProperty("category_id") &&
  //         formData.hasOwnProperty("title") &&
  //         formData?.title !== ""
  //       ) {
  //         setError(false);
  //       } else {
  //         setError(true);
  //       }
  //     }
  //   }
  // }, [formData, step, category_quantity, category_bool]);

  const handleNext = () => {
    // Perform form validation
    if (step === 1) {
      getInfo(`/api/ads/info/${formData?.category_aqar?.id}`);
    }
    setStep(step + 1);

    if (category_bool?.length > 0 && category_quantity?.length > 0) {
      setAfterWidth(afterWidth + 12.32);
    } else {
      setAfterWidth(afterWidth + 13.7);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      if (category_bool?.length > 0 && category_quantity?.length > 0) {
        setAfterWidth(afterWidth - 12.32);
      } else {
        setAfterWidth(afterWidth - 13.7);
      }
    }
  };

  const handleSubmit = async () => {
    // setLoadingSubmit(true);
    const sendForm = new FormData();
    // Iterate through properties of formData and append each property to sendForm
    for (const property in formData) {
      if (formData.hasOwnProperty(property)) {
        sendForm.append(property, formData[property]);
      }
    }
    console.log(formData);
    const requestBody = {};

    // Loop through each key-value pair in sendForm and add to requestBody
    for (const [key, value] of sendForm.entries()) {
      if (formData.category_aqar) {
        requestBody["category_id"] = formData.category_aqar.id;
      }
      if (formData.inputValues.price) {
        requestBody["price"] = formData.inputValues.price;
      }
      if (formData.inputValues.area) {
        requestBody["space"] = formData.inputValues.area;
      }
      if (formData.inputValues.height) {
        requestBody["height"] = formData.inputValues.height;
      }
      if (formData.inputValues.width) {
        requestBody["width"] = formData.inputValues.width;
      }
      if (formData.selectedLocation.lat) {
        requestBody["lat"] = formData.selectedLocation.lat;
      }
      if (formData.selectedLocation.lng) {
        requestBody["lng"] = formData.selectedLocation.lng;
      }
      if (formData.selectedLocation.zoom) {
        requestBody["zoom"] = formData.selectedLocation.zoom;
      }
      if (formData.selectedLocation.zoom) {
        requestBody["zoom"] = formData.selectedLocation.zoom;
      }
      if (formData.aqarCategoryQuantity) {
        requestBody["QuantityAds"] = JSON.stringify(
          formData.aqarCategoryQuantity
        );
      }
      if (formData.selectedBooleansProperties) {
        requestBody["BoolfeatureaAds"] = JSON.stringify(
          formData.selectedBooleansProperties
        );
      }
      if (formData.images) {
        requestBody["images"] = JSON.stringify(formData.images);
      }
      requestBody[key] = value;
    }

    console.log(requestBody);
    //   BoolfeatureaAds
    // QuantityAds

    const formDataSend = new FormData();
    // Iterate through properties of formData and append each property to sendForm
    for (const property in requestBody) {
      if (requestBody.hasOwnProperty(property)) {
        formDataSend.append(property, requestBody[property]);
      }
    }

    try {
      const response = await fetch(
        "https://www.dashboard.aqartik.com/api/ads/store",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("user_token")}`,
          },
          method: "POST",
          body: formDataSend,
        }
      );

      const data = await response.json();
      console.log("API response:", data);
    } catch (error) {
      console.error("Error sending FormData:", error);
    }
  };

  const renderStep = () => {
    //render both steps
    if (category_bool?.length > 0 && category_quantity?.length > 0) {
      switch (step) {
        case 1:
          return isLoading ? (
            "loading"
          ) : (
            <CatgouryAds
              formData={formData}
              setFormData={setFormData}
              categories={categories}
            />
          );
        case 2:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeInformation
              formData={formData}
              setFormData={setFormData}
              inputErrors={inputErrors}
              setInputErrors={setInputErrors}
              setError={setError}
              type_aqar={type_aqar}
            />
          );
        case 3:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeDetails
              formData={formData}
              setFormData={setFormData}
              categoryQuantity={category_quantity}
              setError={setError}
              error={error}
            />
          );
        case 4:
          return isInfoLoading ? (
            "loading"
          ) : (
            <AddFeatureComponent
              formData={formData}
              setFormData={setFormData}
              category_bool={category_bool}
            />
          );
        case 5:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeDescroption
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
            />
          );
        case 6:
          return isInfoLoading ? (
            "loading"
          ) : (
            <MapAds
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
              mapData={mapData}
              setMapData={setMapData}
            />
          );
        case 7:
          return isInfoLoading ? (
            "loading"
          ) : (
            <ConfimLocation
              formData={formData}
              setFormData={setFormData}
              interfaces={interfaces}
              mapData={mapData}
              setError={setError}
              error={error}
            />
          );
        case 8:
          return isInfoLoading ? (
            "loading"
          ) : (
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
    } else if (category_bool?.length > 0 && category_quantity?.length === 0) {
      switch (step) {
        case 1:
          return isLoading ? (
            "loading"
          ) : (
            <CatgouryAds
              formData={formData}
              setFormData={setFormData}
              categories={categories}
            />
          );
        case 2:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeInformation
              formData={formData}
              setFormData={setFormData}
              inputErrors={inputErrors}
              setInputErrors={setInputErrors}
              setError={setError}
              type_aqar={type_aqar}
            />
          );
        case 3:
          return isInfoLoading ? (
            "loading"
          ) : (
            <AddFeatureComponent
              formData={formData}
              setFormData={setFormData}
              category_bool={category_bool}
            />
          );

        case 4:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeDescroption
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
            />
          );
        case 5:
          return isInfoLoading ? (
            "loading"
          ) : (
            <MapAds
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
              mapData={mapData}
              setMapData={setMapData}
            />
          );
        case 6:
          return isInfoLoading ? (
            "loading"
          ) : (
            <ConfimLocation
              formData={formData}
              setFormData={setFormData}
              interfaces={interfaces}
              mapData={mapData}
              setError={setError}
              error={error}
            />
          );
        case 7:
          return isInfoLoading ? (
            "loading"
          ) : (
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
    } else if (category_bool?.length === 0 && category_quantity?.length > 0) {
      switch (step) {
        case 1:
          return isLoading ? (
            "loading"
          ) : (
            <CatgouryAds
              formData={formData}
              setFormData={setFormData}
              categories={categories}
            />
          );
        case 2:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeInformation
              formData={formData}
              setFormData={setFormData}
              inputErrors={inputErrors}
              setInputErrors={setInputErrors}
              setError={setError}
              type_aqar={type_aqar}
            />
          );
        case 3:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeDetails
              formData={formData}
              setFormData={setFormData}
              categoryQuantity={category_quantity}
              setError={setError}
              error={error}
            />
          );

        case 4:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeDescroption
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
            />
          );
        case 5:
          return isInfoLoading ? (
            "loading"
          ) : (
            <MapAds
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
              mapData={mapData}
              setMapData={setMapData}
            />
          );
        case 6:
          return isInfoLoading ? (
            "loading"
          ) : (
            <ConfimLocation
              formData={formData}
              setFormData={setFormData}
              interfaces={interfaces}
              mapData={mapData}
              setError={setError}
              error={error}
            />
          );
        case 7:
          return isInfoLoading ? (
            "loading"
          ) : (
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
    } else if (category_bool?.length === 0 && category_quantity?.length === 0) {
      switch (step) {
        case 1:
          return isLoading ? (
            "loading"
          ) : (
            <CatgouryAds
              formData={formData}
              setFormData={setFormData}
              categories={categories}
            />
          );
        case 2:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeInformation
              formData={formData}
              setFormData={setFormData}
              inputErrors={inputErrors}
              setInputErrors={setInputErrors}
              setError={setError}
              type_aqar={type_aqar}
            />
          );

        case 3:
          return isInfoLoading ? (
            "loading"
          ) : (
            <HomeDescroption
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
            />
          );
        case 4:
          return isInfoLoading ? (
            "loading"
          ) : (
            <MapAds
              formData={formData}
              setFormData={setFormData}
              setError={setError}
              error={error}
              mapData={mapData}
              setMapData={setMapData}
            />
          );
        case 5:
          return isInfoLoading ? (
            "loading"
          ) : (
            <ConfimLocation
              formData={formData}
              setFormData={setFormData}
              interfaces={interfaces}
              mapData={mapData}
              setError={setError}
              error={error}
            />
          );
        case 6:
          return isInfoLoading ? (
            "loading"
          ) : (
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
    } else {
      switch (step) {
        default:
          return isLoading ? (
            "loading"
          ) : (
            <CatgouryAds
              formData={formData}
              setFormData={setFormData}
              categories={categories}
              setError={setError}
              error={error}
            />
          );
      }
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
            maxWidth: "550px",
            marginLeft: { lg: "1%" },
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                borderRadius: { xs: "0", sm: "12px 12px 0px 0px" },
                paddingInline: { xs: "15px", md: "3%" },
                paddingBlock: "16px 112px",
                border: "1px solid rgb(220, 220, 220)",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 8px 0px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden auto",
                height: { xs: "100vh", sm: "calc(-40px + 100vh)" },
              }}
            >
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  color: "var(--green-color)",
                  textAlign: lang === "ar" ? "left" : "right",
                }}
              >
                الرئيسية
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
                  borderEndEndRadius: "16px",
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
                      disabled={loadingSubmit || !hasPrevStep}
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
                  {step <= 7 && !isLastStep && (
                    <Button
                      onClick={handleNext}
                      disabled={loadingSubmit || hasNextStep}
                      sx={{
                        fontWeight: "600",
                        height: "48px",
                        width: "160px",
                        background: "var(--green-color)",
                        color: "white",
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        "&:hover": {
                          background: "var(--green-color)",
                          color: "white",
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
                      disabled={loadingSubmit}
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
                      {loadingSubmit
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
