import { createContext, useContext, useEffect, useState } from "react";
import * as allergyService from "../api/allergyApi";
import { useAuth } from "./AuthContext";
import { DOCTOR, PATIENT } from "../config/constant";
import { useParams } from "react-router-dom";

const AllergyContext = createContext();

function AllergyContextProvider({ children }) {
  const [allergyObjList, setAllergyObjList] = useState([]);
  const { typeaccount, user } = useAuth();
  const { encodeParams } = useParams();
  const decodeParams = encodeParams && decodeURIComponent(encodeParams);
  useEffect(() => {
    const fetchAllergy = async () => {
      try {
        let res;
        if (typeaccount === PATIENT) {
          res = await allergyService.fetchAllergy(user.id);
        } else if (typeaccount === DOCTOR) {
          res = await allergyService.fetchAllergy(decodeParams);
        }
        setAllergyObjList((prev) => {
          return [...JSON.parse(res.data.allergyObjList || "[]")];
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllergy();
  }, [decodeParams, user.id, typeaccount]);

  //newAllergyObj : {name,type(drug,food),editor,dateAt}
  const addAllergy = async (newAllergyObj) => {
    try {
      setAllergyObjList((prev) => {
        return [...prev, newAllergyObj];
      });
      await allergyService.editAllergy(decodeParams, allergyObjList);
    } catch (err) {
      console.log(err);
    }
  };

  const removeAllergy = async (allergyName) => {
    try {
      setAllergyObjList((prev) => {
        return prev.filter((item) => item.name !== allergyName);
      });
      await allergyService.editAllergy(decodeParams, allergyObjList);
    } catch (err) {
      console.log(err);
    }
  };

  const editAllergy = async (allergyName, editObj) => {
    try {
      setAllergyObjList((prev) => {
        return prev.map((item) => (item.name === allergyName ? editObj : item));
      });
      await allergyService.editAllergy(decodeParams, allergyObjList);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AllergyContext.Provider
      value={{ allergyObjList, addAllergy, removeAllergy, editAllergy }}>
      {children}
    </AllergyContext.Provider>
  );
}

export const useAllergy = () => {
  return useContext(AllergyContext);
};

export default AllergyContextProvider;
