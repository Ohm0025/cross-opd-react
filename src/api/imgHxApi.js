import axios from "../config/axios";

export const fetchAllImg = (patientId) => axios.post("/getImg", { patientId });

// export const fetchSelectImg = (caseId) =>
//   axios.post("/getImg/selectedImg", { caseId });
