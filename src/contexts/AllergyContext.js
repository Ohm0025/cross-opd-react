import { createContext, useContext, useEffect, useState } from "react";
import * as allergyService from "../api/allergyApi";
import { useAuth } from "./AuthContext";
import { DOCTOR, PATIENT } from "../config/constant";
import { useParams } from "react-router-dom";
import { validateAllergyAdd } from "../utility/validate/validateAllergy";

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
          console.log([...JSON.parse(res.data.allergyObjList || "[]")]);
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

  //newAllergyObj : {name,symp,editor,dateAt}
  const addAllergy = async (newAllergyObj) => {
    //validate allergyObj
    let resultValidate = validateAllergyAdd(allergyObjList, newAllergyObj);
    if (resultValidate.name || resultValidate.symp) {
      console.log(resultValidate);
      return resultValidate;
    }
    try {
      const upLoadObj = {
        ...newAllergyObj,
        dateAt: new Date(),
        allerEditor: user.firstName + " " + user.lastName,
      };
      setAllergyObjList((prev) => {
        return [...prev, upLoadObj];
      });
      await allergyService.editAllergy(decodeParams, [
        ...allergyObjList,
        upLoadObj,
      ]);
      console.log(upLoadObj);
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
      value={{
        allergyObjList,
        addAllergy,
        removeAllergy,
        editAllergy,
        typeaccount,
      }}>
      {children}
    </AllergyContext.Provider>
  );
}

export const useAllergy = () => {
  return useContext(AllergyContext);
};

export default AllergyContextProvider;
