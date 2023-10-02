module.exports = (labObj, cb) => {
  if (labObj.name?.trim() === "") {
    cb("lab name is required.");
    return false;
  }
  return true;
};
