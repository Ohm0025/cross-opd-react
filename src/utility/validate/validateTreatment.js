module.exports = (txObj, cb) => {
  if (txObj.title?.trim() === "") {
    cb("treatment title is required.");
    return false;
  }

  if (txObj.amount?.trim() === "") {
    cb("drug amount is required.");
    return false;
  }

  return true;
};
