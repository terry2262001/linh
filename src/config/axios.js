import axios from "axios";

// Set config defaults when creating the instance
let store;
//fix bug cannot access before init
// export const injectStore = (_store) => {
//   store = _store;
// };
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // withCredentials: true,
});
//use cookie for browser
instance.defaults.withCredentials = true;

// Alter defaults after instance has been created
// declare Authorization to headers

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // const reduxState = store.getState();
    // let headerToken = reduxState?.account?.userInfo?.access_token;
    // if ()
    //   // instance.defaults.headers.common["Authorization"] = `Bearer ${
    //   //   headerToken ?? ""
    //   // }`;
    //   config.headers.Authorization = `Bearer ${headerToken ?? ""}`;
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log("🚀 ~ file: axios.js:47 ~ error:", error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response.status === 400) {
    //   let headerToken = store.getState()?.account?.userInfo?.access_token ?? "";
    //   if (headerToken)
    //     error.config.headers.Authorization = `Bearer ${headerToken}`;
    //   return axios.request(error.config);
    // }
    // if (error && error.response && error.response.data)
    //   return error.response.data;
    return Promise.reject(error);
  }
);

export default instance;
