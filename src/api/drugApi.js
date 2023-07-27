import axios from "../config/axios";

export const fetchDrug = (patientId) => axios.post("/drug/get", { patientId });
