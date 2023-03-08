import axios from "axios";

// import axios from "../config/axios";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // set CORS header

// axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "include";

const loginService = (username, password) => {
  return axios.post(
    `http://localhost:8080/v1/api/login`,
    {
      username,
      password,
    }
    // {
    //   withCredentials: "include",
    // }
  );
};

const profileUser = (access_token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  };
  return axios.get(
    "http://localhost:8080/v1/api/profile",
    {
      headers,
      // withCredentials: true,
    }
    // {
    //   withCredentials: "include",
    // }
  );
};

const registerService = ({
  full_name,
  address,
  phone_number,
  email,
  username,
  password,
}) => {
  return axios.post(
    `http://localhost:8080/v1/api/register`,
    {
      full_name,
      address,
      phone_number,
      email,
      password,
    }
    // {
    //   withCredentials: "include",
    // }
  );
};
export { loginService, profileUser, registerService };
