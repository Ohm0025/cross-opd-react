import { createContext, useState, useContext } from "react";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  checkError,
  validateLogin,
  getOtherObj,
} from "../utility/validate/validateAuth";

const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const navigate = useNavigate();
  const [typeLoginAccount, setTypeLoginAccount] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errorObj, setErrorObj] = useState(null);

  const { startLoading, stopLoading } = useLoading();
  const { login } = useAuth();

  const changeTypeLogin = (type) => {
    setTypeLoginAccount(type);
  };

  const handleInputLogin = (event) => {
    setInput((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleClickLogin = async (event) => {
    event.preventDefault();
    const validateResult = validateLogin(input, typeLoginAccount);
    try {
      startLoading();
      setErrorObj((pre) => validateResult);
      checkError(validateResult) &&
        (await login(typeLoginAccount, input).then(() =>
          toast.success("success login")
        ));
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message
          ? err.response?.data?.message || err.message
          : "server is not running"
      );
      getOtherObj(err, setErrorObj);
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <LoginContext.Provider
      value={{
        errorObj,
        input,
        handleClickLogin,
        handleInputLogin,
        navigate,
        typeLoginAccount,
        changeTypeLogin,
      }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => {
  return useContext(LoginContext);
};
export default LoginContextProvider;
