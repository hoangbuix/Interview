import axios from "axios";

const api = axios.create({
  baseURL: "http://139.162.29.189:3000",
});

export default api;
