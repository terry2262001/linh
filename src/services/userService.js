import axios from "axios";

// import axios from "../config/axios";

const headers = {
  "Content-Type": "application/json",
};
const loginService = (username, password) => {
  return axios.post(
    "https://book-api-beta.vercel.app/login",
    {
      username,
      password,
    },
    { headers }
  );
};

const profileUser = (access_token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  };
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}`, {
    headers,
  });
};

const registerService = ({ ...dataInfo }) => {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/register`,
    {
      ...dataInfo,
    },
    { headers }
  );
};
export { loginService, profileUser, registerService };
