import { createContext, useState, useContext, useEffect } from "react";
import * as authService from "../api/authApi";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utility/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [typeaccount, setTypeAccount] = useState("");
  const [initialLoading, setInitialLoading] = useState(true);

  const register = async (typeaccount, input) => {
    const res = await authService.register(typeaccount, input);
    addAccessToken(res.data.token);
    await getme();
  };

  const getme = async () => {
    const res = await authService.getme();
    setUser(res.data.user);
    setTypeAccount(res.data.typeaccount);
  };

  const login = async (typeaccount, input) => {
    const res = await authService.login(typeaccount, input);
    addAccessToken(res.data.token);
    await getme();
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
    setTypeAccount("");
  };
  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getme();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, typeaccount, register, logout, login, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
