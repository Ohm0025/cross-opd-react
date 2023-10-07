//drugUdObj = {title:"",detail:"",amount:""}

export const formatStrToObj = (drugStr) => {
  return {
    title: drugStr?.title,
    detail: drugStr?.detail.split("#")[0]?.trim(),
    amount: drugStr?.amount || drugStr?.detail.split("#")[1]?.trim(),
  };
};
