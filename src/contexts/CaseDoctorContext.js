import { createContext, useEffect, useState, useContext } from "react";
import { useLoading } from "../contexts/LoadingContext";
import * as opdService from "../api/opdApi";

const CaseDoctorContext = createContext();

function CaseDoctorContextProvider({ children }) {
  const [finishList, setFinishList] = useState([]);
  const [unfinishList, setUnfinishList] = useState([]);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fectchCase = async () => await opdService.getOpdCard();
  });

  const getCard = async (patientId) => {
    try {
      startLoading();
      const res = await opdService.getOpdCard(patientId);
      setUnfinishList((prev) => {
        return [...prev, res.data.userPt];
      });
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };
  return (
    <CaseDoctorContext.Provider value={{ finishList, unfinishList, getCard }}>
      {children}
    </CaseDoctorContext.Provider>
  );
}
export const useCaseDoctor = () => {
  return useContext(CaseDoctorContext);
};

export default CaseDoctorContextProvider;
