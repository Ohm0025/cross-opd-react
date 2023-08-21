import axios from "../config/axios";

export const testupload = (recordObj) => {
  const bodyFormData = new FormData();

  recordObj["pe"]["examImg"].forEach((item, index) => {
    bodyFormData.append("files", recordObj["pe"]["examImg"][index]);
  });

  axios({
    method: "post",
    url: "/testupload",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
