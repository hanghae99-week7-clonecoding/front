import axios from "axios";
import { getCookie } from "./cookie";
// const getToken = localStorage.getItem("jwtToken");

const instance = axios.create({
  baseURL: "http://15.164.221.168:8000/",
  headers: { token: `Bearer ${getCookie("jwtToken")}` },
  withCredentials: true,
});
// if (getToken) {
//   instance.defaults.headers.common["token"] = `Bearer ${getToken}`;
// }

export default instance;
