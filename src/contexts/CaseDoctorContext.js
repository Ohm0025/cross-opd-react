import { createContext, useEffect, useState, useContext } from "react";
import { useLoading } from "../contexts/LoadingContext";
import * as examService from "../api/examApi";
import { Outlet, useNavigate } from "react-router-dom";
import { useExam } from "./ExamContext";

const CaseDoctorContext = createContext();

function CaseDoctorContextProvider({ children }) {
  const navigate = useNavigate();
  const { changeId } = useExam();
  const { startLoading, stopLoading } = useLoading();
  const [finishCaseList, setFinishCaseList] = useState([]);
  const [unfinishCaseList, setUnfinishCaseList] = useState([]);

  const handleSearchCard = async (patientId) => {
    try {
      startLoading();
      if (patientId) {
        const res = await examService.activateCard(patientId);

        if (!res.data.newCase) {
          return console.log("data not found");
        }
        const caseId = res.data?.newCase?.id;
        changeId(+patientId);
        navigate("/exam/" + caseId);
      }
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
        const res1 = await examService.fetchFinishCase();
        setFinishCaseList(res1.data?.finishCase);
        const res2 = await examService.fetchUnfinishCase();
        setUnfinishCaseList(res2.data?.unfinishCase);
      } catch (err) {
        console.log(err);
      } finally {
        stopLoading();
      }
    };
    fetchFinish();
  }, [startLoading, stopLoading]);

  return (
    <CaseDoctorContext.Provider
      value={{
        handleSearchCard,
        finishCaseList,
        unfinishCaseList,
      }}
    >
      <Outlet />
    </CaseDoctorContext.Provider>
  );
}
export const useCaseDoctor = () => {
  return useContext(CaseDoctorContext);
};

export default CaseDoctorContextProvider;
