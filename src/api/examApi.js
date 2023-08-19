import axios from "../config/axios";

export const activateCard = (patientId) =>
  axios.post("/exam/activate", { patientId });

export const fetchFinishCase = () => axios.get("/exam/finish");

export const fetchUnfinishCase = () => axios.get("/exam/unfinish");

export const fetchCurrentPt = (caseId, patientId) =>
  axios.post("/exam/" + caseId, { patientId });

export const recordExam = (caseId, patientId, inputData) =>
  axios.post(`/exam/${caseId}/complete`, { patientId, inputData });
//inputData = {cc,pi,pe...}
