module.exports = (imgObj, cb) => {
  if (imgObj.name?.trim() === "") {
    cb("imaging name is required.");
    return false;
  }
  return true;
};
