import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";
import {
  checkError,
  getOtherObj,
  validateInputObj,
} from "../utility/validate/validateAuth";
import { toast } from "react-toastify";

const RegisterContext = createContext();

function RegisterContextProvider({ children }) {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [typeaccount, setTypeaccount] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpass: "",
    gender: "",
    mdId: "",
    citizenId: "",
    birthDate: "",
  });

  const [errorObj, setErrorObj] = useState(null);

  const changeType = (e) => {
    setTypeaccount(e.target.value);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const validateResult = validateInputObj(input, typeaccount);
    try {
      startLoading();
      setErrorObj((prev) => validateResult);
      checkError(validateResult) &&
        (await register(typeaccount, input).then(() => {
          toast.success("register success");
          navigate("/");
        }));
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message
          ? "server is not running"
          : ""
      );
      getOtherObj(err, setErrorObj);
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        errorObj,
        input,
        typeaccount,
        changeType,
        handleChangeInput,
        handleSubmitForm,
        navigate,
      }}>
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegister = () => {
  return useContext(RegisterContext);
};
export default RegisterContextProvider;
