import axios from "axios";

// import axios from "../config/axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "https://bansachweb.vercel.app/v1/api/login"; // set CORS header

const loginService = (username, password) => {
  return axios.post(
    `https://bansachweb.vercel.app/v1/api/login`,
    {
      username,
      password,
    },
    {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );
};

const profileUser = (access_token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  };
  return axios.get(
    "https://bansachweb.vercel.app/v1/api/profile",
    {
      headers,
    },
    {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
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
    `https://bansachweb.vercel.app/v1/api/register`,
    {
      full_name,
      address,
      phone_number,
      email,
      password,
    },
    {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );
};
export { loginService, profileUser, registerService };
