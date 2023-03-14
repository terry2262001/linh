import axios from "axios";

// import axios from "../config/axios";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // set CORS header

// axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "include";

const loginService = async (username, password) => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/api/login`, {
    method: "OPTIONS", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      username: "long123",
      password: "123456",
    }),
  });
  return res.json();
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
