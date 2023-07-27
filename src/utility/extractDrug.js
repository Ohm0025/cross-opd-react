import { formatCreatedAt } from "../utility/formatDataTime";

export const extractList = (date, list) => {
  const result_list = [];

  list.forEach((element) => {
    const dateMem = formatCreatedAt(element.createdAt);
    if (date === dateMem) {
      result_list.push([
        element.drugName,
        element.drugSize,
        element.drugUse,
        element.diagnosis,
      ]);
    }
  });
  return result_list;
};

export const extractDiag = (list) => {
  const diag_arr = [];
  list.forEach((item) => {
    if (!diag_arr.includes(item.diagnosis)) {
      diag_arr.push(item.diagnosis);
    }
  });
  return diag_arr;
};

export const extractDate = (list) => {
  const date_arr = [];
  list.forEach((item) => {
    const dateMem = formatCreatedAt(item.createdAt);
    if (!date_arr.includes(dateMem)) {
      date_arr.push(dateMem);
    }
  });
  return date_arr;
};
