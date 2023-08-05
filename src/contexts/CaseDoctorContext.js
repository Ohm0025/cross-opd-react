import { createContext, useEffect, useState, useContext } from "react";
import { useLoading } from "../contexts/LoadingContext";
import * as examService from "../api/examApi";

const CaseDoctorContext = createContext();

function CaseDoctorContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();
  const [finishCaseList, setFinishCaseList] = useState([]);
  const [unfinishCaseList, setUnfinishCaseList] = useState([]);
  const handleSearchCard = async (patientId) => {
    try {
      startLoading();
      const newCase = await examService.activateCard(patientId);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    const fetchFinish = async () => {
      try {
        startLoading();
        const res = await examService.fetchFinishCase();
        setFinishCaseList(res.data?.finishCase);
      } catch (err) {
        console.log(err);
      } finally {
        stopLoading();
      }
    };
    fetchFinish();
  }, [startLoading, stopLoading]);

  useEffect(() => {
    const fetchUnfinish = async () => {
      try {
        startLoading();
        const res = await examService.fetchUnfinishCase();
        setUnfinishCaseList(res.data?.unfinishCase);
      } catch (err) {
        console.log(err);
      } finally {
        stopLoading();
      }
    };
    fetchUnfinish();
  }, [startLoading, stopLoading]);
  return (
    <CaseDoctorContext.Provider
      value={{ handleSearchCard, finishCaseList, unfinishCaseList }}
    >
      {children}
    </CaseDoctorContext.Provider>
  );
}
export const useCaseDoctor = () => {
  return useContext(CaseDoctorContext);
};

export default CaseDoctorContextProvider;
