import axios from "../config/axios";

export const openCard = (input) => axios.post("/opd/open", input);

export const fetchOpdCard = (patientId) =>
  axios.post("/opd/wait", { patientId });

export const getOpdCard = (patientId) =>
  axios.post("/opd/search", { patientId });

export const deleteOpdCard = (waitCaseId) =>
  axios.delete("/opd/cancel/" + waitCaseId);

export const editOpdCard = (updateCase, waitCaseId) =>
  axios.patch("/opd/edit", { updateCase, waitCaseId });
