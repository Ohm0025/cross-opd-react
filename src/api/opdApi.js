import axios from "../config/axios";

export const openCard = (input) => axios.post("/opd/open", input);

export const updateCard = (input) => axios.patch("/opd/");

export const fetchOpdCard = (patientId) =>
  axios.post("/opd/wait", { patientId });

export const getOpdCard = (patientId) =>
  axios.post("/opd/search", { patientId });
