import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { DOCTOR, PATIENT } from "../config/constant";
import * as pastHxService from "../api/pastHx";
import { useParams } from "react-router-dom";

const PastHxContext = createContext();

function PastHxContextProvider({ children }) {
  const { typeaccount, user } = useAuth();
  const [listAllPast, setListAllPast] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const { encodeParams } = useParams();

  const decodeParams = encodeParams && decodeURIComponent(encodeParams);

  useEffect(() => {
    const fetchPast = async () => {
      try {
        if (typeaccount === PATIENT) {
          const res = await pastHxService.fetchAllPast(typeaccount, user.id);
          setListAllPast(res.data?.allPastCase);
          setSelectedCase(res.data?.lastPastCase);
        } else if (typeaccount === DOCTOR) {
          const res = await pastHxService.fetchAllPast(
            typeaccount,
            decodeParams
          );
          setListAllPast(res.data?.allPastCase);
          setSelectedCase(res.data?.lastPastCase);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPast();
  }, [decodeParams, typeaccount, user.id]);

  return (
    <PastHxContext.Provider value={{ listAllPast, selectedCase }}>
      {children}
    </PastHxContext.Provider>
  );
}

export const usePastHx = () => {
  return useContext(PastHxContext);
};

export default PastHxContextProvider;
