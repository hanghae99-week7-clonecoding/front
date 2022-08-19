import axios from "axios";
const getToken = localStorage.getItem("jwtToken");

const instance = axios.create({
  baseURL: "http://nodeapi.myspaceti.me:8002/api",
  headers: { token: `Bearer ${getToken}` },
});
// if (getToken) {
//   instance.defaults.headers.common["token"] = `Bearer ${getToken}`;
// }

export default instance;
