import axios from "../config/axios";

export const fetchAllLab = (patientId) => axios.post("/getLab", { patientId });

export const fetchSelectLab = (caseId) =>
  axios.post("/getLab/selectedLab", { caseId });
