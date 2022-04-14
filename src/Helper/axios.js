import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://hoqobajoe.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});