import axios from "../config/axios";

export const activateCard = (patientId) =>
  axios.post("/exam/activate", { patientId });

export const fetchFinishCase = () => axios.get("/exam/finish");

export const fetchUnfinishCase = () => axios.get("/exam/unfinish");
