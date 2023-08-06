import axios from "axios";

export const myAxios = axios.create({
  baseURL: "https://aqar-plus.sta.sa/public/",
});
