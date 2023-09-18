import axios from "../config/axios";

export const fetchFollowUp = (patientId) =>
  axios.post("/followUp/ptFetch", { patientId });

export const activateFollowUp = (fuId) =>
  axios.post("/followUp/ptActivate", { fuId });

export const cancelFollowUp = () => {};
