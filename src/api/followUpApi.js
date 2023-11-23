import axios from "../config/axios";

export const fetchFollowUp = (patientId) =>
  axios.post("/followUp/ptFetch", { patientId });

export const activateFollowUp = (fuId) =>
  axios.post("/followUp/ptActivate", { fuId });

export const cancelFollowUp = (fuId) =>
  axios.patch("/followUp/ptCancel", { fuId });

export const finishFu = (fuId) => axios.patch("/followUp/finishFu", { fuId });

export const deleteFu = (fuId) => axios.patch("/followUp/deleteFu", { fuId });
