import Axios from "axios";
import { useNavigate } from "react-router-dom";
let baseURL = "https://transport-test-server.herokuapp.com/api/v1";
// let baseURL = "http://localhost:5000/api/v1";

const axios = Axios.create({
  baseURL: baseURL,
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("transport-token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("transport-token");
      useNavigate("/login");
    }
    throw error;
  }
);

export default axios;
