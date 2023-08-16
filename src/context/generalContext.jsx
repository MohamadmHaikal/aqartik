import { createContext, useState, useEffect } from "react";
import useDataFetcher from "../api/useDataFetcher ";
import Cookies from "js-cookie";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const { data, isLoading, error, get, post } = useDataFetcher();
  const [generalData, setGeneralData] = useState([]);
  const [website_status, set_website_status] = useState(null);
  useEffect(() => {
    const cookieData = Cookies.get("generalData");
    // const cookieWebsiteStatus = Cookies.get("website_status");

    if (cookieData) {
      setGeneralData(JSON.parse(cookieData));
      set_website_status(JSON.parse(cookieData));
    } else {
      get("/api/settings/general");
    }
    console.log(cookieData);
  }, []);
  //   useEffect(() => {
  //     if (data) {
  //       setGeneralData(data.settings);
  //       set_website_status(data.settings.site_status);
  //       // set_website_status(0);
  //     }
  //   }, [data]);
  useEffect(() => {
    // Update cookies whenever the context state changes
    if (data) {
      Cookies.set("generalData", JSON.stringify(data.settings), { expires: 7 }); // Expires in 7 days
      console.log(data);
    }
  }, [data]);
  return (
    <GeneralContext.Provider
      value={{
        generalData,
        website_status,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
