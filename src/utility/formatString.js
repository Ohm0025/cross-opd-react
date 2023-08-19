export const formatNamePicFile = (labName) => {
  const reName = labName.split(".");
  if (reName[0].length > 4) {
    return reName[0].slice(0, 4) + "...";
  }
  return reName[0];
};
