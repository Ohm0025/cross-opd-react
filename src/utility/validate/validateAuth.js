import { isEmpty } from "lodash";
import validator from "validator";

export const validateInputObj = (inputObj, typeaccount) => {
  const errorObj = {
    email: {},
    password: {},
    firstName: {},
    lastName: {},
    typeaccount: {},
    id: {},
    gender: {},
    date: {},
  };

  //validate email
  // required
  if (!inputObj.email) {
    errorObj.email.required = "email is required.";
  }
  // valid
  else if (!validator.isEmail(inputObj.email)) {
    errorObj.email.valid = "email is invalid.";
  }

  //validate password and confirm password
  if (!inputObj.password.trim()) {
    errorObj.password.required = "password is required.";
  } else if (!inputObj.confirmpass.trim()) {
    errorObj.password.confirm = "confirm password must be done.";
  } else if (inputObj.password !== inputObj.confirmpass) {
    errorObj.password.equal = "must be same with password.";
  }

  //validate first and last name
  if (!inputObj.firstName.trim()) {
    errorObj.firstName.required = "firstname is required.";
  }
  if (!inputObj.lastName.trim()) {
    errorObj.lastName.required = "lastname is required.";
  }

  //validate type select
  if (!typeaccount) {
    errorObj.typeaccount.required = "must be select one value.";
  } else if (typeaccount !== "DOCTOR" && typeaccount !== "PATIENT") {
    errorObj.typeaccount.valid = "type is not match.";
  }

  //validate mdId or citizenId
  if (typeaccount === "DOCTOR" && !inputObj.mdId.trim()) {
    errorObj.id.required = "MD id is required.";
  }
  if (typeaccount === "PATIENT" && !inputObj.citizenId.trim()) {
    errorObj.id.required = "citizen id is required.";
  }
  if (
    typeaccount === "PATIENT" &&
    (inputObj.citizenId.trim().length !== 13 || isNaN(inputObj.citizenId))
  ) {
    errorObj.id.valid = "citizen id is invalid.";
  }

  //validate gender
  if (!inputObj.gender.trim()) {
    errorObj.gender.required = "gender is required.";
  } else if (inputObj.gender !== "MALE" && inputObj.gender !== "FEMALE") {
    errorObj.gender.valid = "gender is not match.";
  }

  //validate date
  if (!inputObj.birthDate) {
    errorObj.date.required = "birthDate is required.";
  }

  return errorObj;
};

export const validateLogin = (inputObj, typeaccount) => {
  const errorObj = {
    email: {},
    password: {},
    typeaccount: {},
  };

  //validate email
  // required
  if (!inputObj.email) {
    errorObj.email.required = "email is required.";
  }
  // valid
  else if (!validator.isEmail(inputObj.email)) {
    errorObj.email.valid = "email is invalid.";
  }

  //validate password and confirm password
  if (!inputObj.password.trim()) {
    errorObj.password.required = "password is required.";
  }

  //validate type select
  if (!typeaccount) {
    errorObj.typeaccount.required = "must be select one value.";
  } else if (typeaccount !== "DOCTOR" && typeaccount !== "PATIENT") {
    errorObj.typeaccount.valid = "type is not match.";
  }

  return errorObj;
};

export const checkError = (errObj) => {
  let result = true;
  if (!errObj) {
    result = false;
    return result;
  }

  const objValue = Object.values(errObj);
  objValue.forEach((item) => {
    if (!isEmpty(item)) {
      result = false;
      return result;
    }
  });

  return result;
};

export const getOtherObj = (err, cb) => {
  if (err.response.data.message === "this citizen id has used.") {
    cb((prev) => {
      return {
        ...prev,
        id: { ...prev.id, other: err.response.data.message },
      };
    });
  }
  if (err.response.data.message === "this email has been used.") {
    cb((prev) => {
      return {
        ...prev,
        email: { ...prev.email, other: err.response.data.message },
      };
    });
  }
  if (err.response.data.message === "password is incorrect.") {
    cb((prev) => {
      return {
        ...prev,
        password: { ...prev.password, other: err.response.data.message },
      };
    });
  }
};
