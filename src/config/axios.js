import axios from "axios";
import { API_ENDPOINT_URL } from "./env";
import { getAccessToken, removeAccessToken } from "../utility/localStorage";

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  (configObj) => {
    if (configObj.url === "/auth/login") return configObj;
    const token = getAccessToken();
    if (token) {
      configObj.headers.Authorization = `Bearer ${token}`;
    }
    return configObj;
  },
  (errObj) => {
    return Promise.reject(errObj);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      removeAccessToken();
      return window.location.replace("/");
    }

    return Promise.reject(err);
  }
);

export default axios;
