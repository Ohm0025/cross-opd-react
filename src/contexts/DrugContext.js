import { createContext, useContext, useState, useEffect } from "react";
import * as drugService from "../api/drugApi";
import { useAuth } from "./AuthContext";

const DrugContext = createContext();

function DrugContextProvider({ children }) {
  const [listDrug, setListDrug] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getDrug = async () => {
      try {
        const res = await drugService.fetchDrug(user.id);
        setListDrug(res.data.drugHx);
      } catch (err) {
        console.log(err);
      }
    };
    getDrug();
  }, [user.id]);

  return (
    <DrugContext.Provider value={{ listDrug }}>{children}</DrugContext.Provider>
  );
}

export const useDrug = () => {
  return useContext(DrugContext);
};

export default DrugContextProvider;
