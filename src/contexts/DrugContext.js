import { createContext, useContext, useState, useEffect } from "react";
import * as drugService from "../api/drugApi";
import { useAuth } from "./AuthContext";
import { PATIENT, DOCTOR } from "../config/constant";
import { useParams } from "react-router-dom";

const DrugContext = createContext();

function DrugContextProvider({ children }) {
  const [listDrug, setListDrug] = useState([]);
  const { user, typeaccount } = useAuth();
  const { encodeParams } = useParams();

  const decodeParams = encodeParams && decodeURIComponent(encodeParams);

  useEffect(() => {
    const getDrug = async () => {
      try {
        if (typeaccount === PATIENT) {
          const res = await drugService.fetchDrug(user.id);
          setListDrug(res.data.listAllDrug);
        } else if (typeaccount === DOCTOR) {
          const res = await drugService.fetchDrug(decodeParams);
          setListDrug(res.data.listAllDrug);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDrug();
  }, [decodeParams, typeaccount, user.id]);

  return (
    <DrugContext.Provider value={{ listDrug }}>{children}</DrugContext.Provider>
  );
}

export const useDrug = () => {
  return useContext(DrugContext);
};

export default DrugContextProvider;
