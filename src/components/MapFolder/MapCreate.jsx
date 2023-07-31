import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";
import AdsListSmall from "./AdsListSmall";
import AdsList from "./AdsList";

const CustomMarker = ({ price, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",

        padding: "0px 5px",
        height: "35px",
        backgroundColor: isActive ? "var(--green-color)" : "rgb(255, 255, 255)",
        border: isActive
          ? "2px solid var(--green-color)"
          : "2px solid rgb(255, 255, 255)",
        color: isActive ? "white" : "rgb(0, 0, 0)",
        borderRadius: "20px",
        zIndex: isActive ? "20000" : "1",
        transform: "translate(-50%, -50%)",
        display: "flex",

        justifyContent: "center",

        alignItems: "center",
        fontWeight: "700",
        fontSize: "15px",
        fontFamily: "Tajawal",
        boxShadow: "rgba(0, 0, 0, 0.34) 0px 3px 6px",
      }}
    >
      <span>{price} ر.س</span>
    </div>
  );
};
const MapCreate = (props) => {
  const { locations } = props;
  const [mapLoaded, setMapLoaded] = useState(false);
  const [overlayViews, setOverlayViews] = useState([]);
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const [isMarkerClicked, setMarkerClicked] = useState(false);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };
  useEffect(() => {
    if (mapLoaded) {
      // Create an array of overlayViews for the custom markers
      const loadedOverlayViews = locations.map((location, index) => (
        <OverlayView
          key={index}
          position={{ lat: location.latitude, lng: location.longitude }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <CustomMarker
            price={location.price}
            isActive={activeMarkerIndex === index}
            onClick={() => handleMarkerClick(index)}
          />
        </OverlayView>
      ));

      // Set the overlayViews state with the loaded overlayViews
      setOverlayViews(loadedOverlayViews);
    }
  }, [mapLoaded, locations, activeMarkerIndex]);
  const handleMarkerClick = (index) => {
    setActiveMarkerIndex(index);
    setMarkerClicked(true);
  };

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const cityCenter = {
    lat: 24.7136,
    lng: 46.6753,
  };

  const mapOptions = {
    streetViewControl: false,
    mapTypeControl: false,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyCUSxdxRLpvkegxpk9-82sUjCylgekfGUk">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={cityCenter}
          options={mapOptions}
          onLoad={handleMapLoad}
        >
          {overlayViews}
        </GoogleMap>
      </LoadScript>
      {isMarkerClicked && <AdsListSmall />}
    </>
  );
};

export default MapCreate;
