import axios from "axios";
import { getCookie } from "./cookie";

console.log(getCookie("jwtToken"))
const instance = axios.create({
  baseURL: "http://15.164.221.168:8000/",
  headers: { token: `${getCookie("jwtToken")}` },
  withCredentials: true,
});

// if (getToken) {
//   instance.defaults.headers.commㅛㅁ규ㅜ ㄴㅅon["token"] = `Bearer ${getToken}`;
// }

export default instance;
