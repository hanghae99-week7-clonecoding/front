import axios from "axios";
import { getCookie } from "./cookie";

const instance = axios.create({
  baseURL: "http://15.164.221.168:8000/",
  headers: { token: getCookie("jwtToken") },
  withCredentials: true,
});

// if (getCookie("jwtToken") === undefined) {
//   instance.defaults.headers.common["token"] = 500;
// } else {
//   instance.defaults.headers.common["token"] = getCookie("jwtToken");
// }

export default instance;
