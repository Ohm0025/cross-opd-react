export const validateAddUd = (listUd, newTitle) => {
  let errorMessage = "";
  //check is empty ?
  if (newTitle?.trim() === "") {
    return (errorMessage = "underlying title is required.");
  }

  //check in list underly
  listUd.forEach((item) => {
    if (newTitle?.toLowerCase() === item.udTitle?.toLowerCase()) {
      errorMessage = "this underlying already exist.";
      return;
    }
  });

  return errorMessage;
};

export const validateEditUd = (listUd, editTitle, oldTitle) => {
  let errorMessage = "";
  //check is the same
  if (oldTitle?.toLowerCase() === editTitle?.toLowerCase()) {
    return;
  }
  //check is empty ?
  if (editTitle?.trim() === "") {
    return (errorMessage = "new title is required.");
  }
  //check in list underly
  listUd.forEach((item) => {
    if (editTitle?.toLowerCase() === item.udTitle?.toLowerCase()) {
      errorMessage = "this underlying already exist.";
      return;
    }
  });
  console.log(errorMessage);
  return errorMessage;
};
