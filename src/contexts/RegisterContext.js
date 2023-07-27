import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";

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

  const changeType = (e) => {
    setTypeaccount(e.target.value);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await register(typeaccount, input);
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        input,
        typeaccount,
        changeType,
        handleChangeInput,
        handleSubmitForm,
        navigate,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegister = () => {
  return useContext(RegisterContext);
};
export default RegisterContextProvider;
