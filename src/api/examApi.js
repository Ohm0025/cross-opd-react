import axios from "../config/axios";

export const activateCard = (patientId) =>
  axios.post("/exam/activate", { patientId });

export const fetchFinishCase = () => axios.get("/exam/finish");

export const fetchUnfinishCase = () => axios.get("/exam/unfinish");

export const fetchCurrentPt = (caseId, patientId) =>
  axios.post("/exam/" + caseId, { patientId });

export const recordExam = async (
  caseId,
  patientId,
  inputData,
  detailDrug,
  detailProcedure
) => {
  //check correct case correct doctor correct patient

  const formData = new FormData();

  formData.append("inputData", JSON.stringify(inputData));
  formData.append("patientId", patientId);
  formData.append("detailDrug", detailDrug);
  formData.append("detailProceduce", detailProcedure);

  let oldPhotoString = "";

  inputData.pe.examImg.forEach((item) => {
    if (typeof item === "string") {
      oldPhotoString += item + " ";
    } else {
      formData.append("pePic", item);
    }
  });

  formData.append("oldPePic", oldPhotoString);

  // {
  //   lab: [{ labName: "", labStatus: "", lasbDesc: "", labImg: [] }];
  // }
  inputData.lab.forEach((item, index) => {
    item.img.forEach((subItem) => {
      formData.append(`labPic`, subItem, item.name);
    });
  });

  inputData.img.forEach((item, index) => {
    item.img.forEach((subItem) => {
      formData.append(`imgPic`, subItem, item.name);
    });
  });

  // const res = await axios.post(`/exam/${caseId}/createRecord`, {
  //   patientId,
  //   inputData,
  //   detailDrug,
  //   detailProcedure,
  // });

  await axios({
    method: "post",
    url: `/exam/${caseId}/uppicture`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  //axios.post(`/exam/${caseId}/complete`, { patientId, inputData });
  //axios.post(`/exam/${caseId}/complete`, { patientId, inputData });
};
