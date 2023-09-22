export const validateAllergyAdd = (listAllergy, newObj) => {
  let errObj = {
    name: "",
    symp: "",
  };
  console.log(newObj);
  //check is empty ?
  if (newObj?.allerName?.trim() === "") {
    errObj.name = "allergy drug name is required.";
  } else if (newObj?.allerSymp?.trim() === "") {
    errObj.symp = "please put allergic symptoms from this drug.";
  }

  //check in list allergy
  listAllergy
    .map((item1) => item1.allerName)
    .forEach((item2) => {
      if (newObj?.allerName.toLowerCase() === item2.toLowerCase()) {
        errObj.name = "this drug name is already exist.";
        return;
      }
    });
  console.log(errObj);
  return errObj;
};
