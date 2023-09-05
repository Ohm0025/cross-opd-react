import axios from "../config/axios";

export const activateCard = (patientId) =>
  axios.post("/exam/activate", { patientId });

export const fetchMyCase = () => axios.get("/exam/myCase");

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

  console.log(inputData);

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

  let listLabImg = [];
  inputData?.lab?.forEach((item1, index1) => {
    // listLabImg.push({ ...item1, img: [] });
    listLabImg = [...listLabImg, { ...item1, img: [] }];
    //console.log(item1.img);
    item1?.img &&
      item1?.img?.forEach((item2) => {
        if (typeof item2 === "string") {
          listLabImg[index1].img.push(item2);
        } else {
          formData.append("labPic", item2, item1.name);
        }
      });
  });

  formData.append("oldLabPic", JSON.stringify(listLabImg));

  let listImgImg = [];
  inputData.img.forEach((item1, index1) => {
    listImgImg = [...listImgImg, { ...item1, img: [] }];
    item1?.img.forEach((item2) => {
      if (typeof item2 === "string") {
        listImgImg[index1].img.push(item2);
      } else {
        formData.append("imgPic", item2, item1.name);
      }
    });
  });

  formData.append("oldImgPic", JSON.stringify(listImgImg));

  await axios({
    method: "post",
    url: `/exam/${caseId}/createRecord`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  //axios.post(`/exam/${caseId}/complete`, { patientId, inputData });
  //axios.post(`/exam/${caseId}/complete`, { patientId, inputData });
};
