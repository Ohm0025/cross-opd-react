export const validateSearchPtId = (id) => {
  const errorObj = {
    searchBar: {},
  };

  //check ว่าใส่ id มาไหม
  if (!id) {
    errorObj.searchBar.required = "patient id is required.";
  } else if (isNaN(+("" + id).trim())) {
    //check ว่าเป็น number ไหม
    errorObj.searchBar.notNumber = "patient id must be number.";
  }
  return errorObj;
};
