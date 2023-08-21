export const formatNamePicFile = (labName) => {
  const reName = labName?.split(".");
  if (!reName) return;

  if (reName[0].length > 4) {
    return reName[0].slice(0, 4) + "...";
  }
  return reName[0];
};

export const formatListToString = (listArr) => {
  let result = listArr
    .reverse()
    .reduce(
      (accumulator, currentValue) => currentValue + "," + accumulator,
      ""
    );
  return result;
};
