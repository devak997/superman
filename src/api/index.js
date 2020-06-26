import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const authenticateUser = (email, password) => {
  return API.post("/users/authenticate", { email, password });
};

export const addUser = (userid, email, password) => {
  return API.post("/users/add", { userid, email, password })
    .then((res) => res.data)
    .catch(err => {
      console.log(err);
      return err;
    });
};
