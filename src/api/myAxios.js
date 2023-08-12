import axios from "axios";

export const myAxios = axios.create({
  baseURL: "https://www.dashboard.aqartik.com",
});
