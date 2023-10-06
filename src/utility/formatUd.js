//drugUdObj = {title:"",detail:"",amount:""}

export const formatStrToObj = (drugStr) => {
  console.log(drugStr);
  return {
    title: drugStr?.title,
    detail: drugStr?.detail.split("#")[0]?.trim(),
    amount: drugStr?.detail.split("#"[1]?.trim()),
  };
};
