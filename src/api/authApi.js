import axios from "../config/axios";

export const register = (typeaccount, input) =>
  axios.post("/auth/register/" + typeaccount, input);

export const getme = () => axios.get("/auth/me");

export const login = (typeaccount, input) =>
  axios.post("/auth/login/" + typeaccount, input);
