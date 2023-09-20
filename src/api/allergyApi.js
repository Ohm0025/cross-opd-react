import axios from "../config/axios";

export const fetchAllergy = (patientId) =>
  axios.post("/allergy/fetchAllergy", { patientId });

export const editAllergy = (patientId, editAllergy) =>
  axios.patch("/allergy/editAllergy", {
    patientId,
    editAllergy: JSON.stringify(editAllergy),
  });
