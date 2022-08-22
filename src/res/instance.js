import axios from "axios";
const getToken = localStorage.getItem("jwtToken");

const instance = axios.create({
  baseURL: "http://15.164.221.168:8000/",
  headers: { token: `Bearer ${getToken}` },
});
// if (getToken) {
//   instance.defaults.headers.common["token"] = `Bearer ${getToken}`;
// }

export default instance;
