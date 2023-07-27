import { createContext, useState, useContext } from "react";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const navigate = useNavigate();
  const [typeLoginAccount, setTypeLoginAccount] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
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
    try {
      startLoading();
      await login(typeLoginAccount, input);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <LoginContext.Provider
      value={{
        input,
        handleClickLogin,
        handleInputLogin,
        navigate,
        typeLoginAccount,
        changeTypeLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => {
  return useContext(LoginContext);
};
export default LoginContextProvider;
