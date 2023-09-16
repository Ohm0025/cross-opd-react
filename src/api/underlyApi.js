import axios from "../config/axios";

export const fetchUnderly = (patientId) =>
  axios.post("/underly/fetch", { patientId });

export const updateUnderly = (patientId, newListUnderly) =>
  axios.patch("/underly/update", {
    patientId,
    newListUnderly: JSON.stringify(newListUnderly),
  });
