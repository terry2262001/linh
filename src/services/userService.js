import axios from "axios";

// import axios from "../config/axios";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // set CORS header

// axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "include";

const loginService = (username, password) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/api/login`, {
    method: "POST",
    body: JSON.stringify({
      username: "admin123",
      password: "123456",
    }),
  });
};

const profileUser = (access_token) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/api/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const registerService = ({ ...dataInfo }) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/api/profile`, {
    method: "POST",
    body: JSON.stringify({
      ...dataInfo,
    }),
  });
};
export { loginService, profileUser, registerService };
