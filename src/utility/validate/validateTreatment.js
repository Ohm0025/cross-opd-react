module.exports = (txObj, typeInput, cb1, cb2) => {
  if (txObj.title?.trim() === "") {
    cb1(typeInput + " title is required.");
    return false;
  }

  if (typeInput === "drug" && txObj.amount?.trim() === "") {
    cb1("drug amount is required.");
    return false;
  }

  return true && cb2();
};
