import axios from "../config/axios";

export const fetchAllPast = (typeAccount, patientId) =>
  axios.post("/getPast", { typeAccount, patientId });

export const fetchSelectedPast = (caseId) =>
  axios.post("/getPast/selectedPast", { caseId });
