import axios from "axios";

// import axios from "../config/axios";

const loginService = (username, password) => {
  return axios.post("https://book-api-beta.vercel.app/login", {
    username: "long123",
    password: "123456",
  });
};

const profileUser = (access_token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  };
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
    headers,
  });
};

const registerService = ({ ...dataInfo }) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
    ...dataInfo,
  });
};
export { loginService, profileUser, registerService };
