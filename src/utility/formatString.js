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

export const formatStringToArr = (str, spliter) => {
  if (typeof str === "object") {
    return str;
  }
  if (str?.trim() === "") {
    return [];
  }
  let result = str?.trim().split(spliter);
  return result;
};

export const formatTagPtName = ({ firstName, lastName, birthDate, gender }) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let preflix = gender?.toLowerCase() === "male" ? "Mr." : "Mrs.";
  let firstname = firstName[0].toUpperCase() + firstName.slice(1);
  let lasename = lastName[0].toUpperCase() + lastName.slice(1);
  let age =
    today.getFullYear() -
    birth.getFullYear() -
    (today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate()));
  return preflix + firstname + " " + lasename + " age " + age + " yr";
};
