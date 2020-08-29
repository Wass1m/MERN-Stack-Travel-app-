import axios from "axios";

export const setAuthToken = (token) => {
  console.log("token 2 " + token);
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
