import { createContext, useEffect, useState, useContext } from "react";
import { useLoading } from "../contexts/LoadingContext";
import * as examService from "../api/examApi";
import { Outlet, useNavigate } from "react-router-dom";
import { useExam } from "./ExamContext";
import { toast } from "react-toastify";
import { validateSearchPtId } from "../utility/validate/validateSearch";
import { checkError, getOtherObj } from "../utility/validate/validateAuth";

const CaseDoctorContext = createContext();

function CaseDoctorContextProvider({ children }) {
  const navigate = useNavigate();
  const { changeId } = useExam();
  const { startLoading, stopLoading } = useLoading();
  const [finishCaseList, setFinishCaseList] = useState([]);
  const [unfinishCaseList, setUnfinishCaseList] = useState([]);

  const [errorObj, setErrorObj] = useState(null);

  //function search case รับ parameter เป็น patientId
  const handleSearchCard = async (patientId) => {
    const validateResult = validateSearchPtId(patientId);
    try {
      startLoading();
      //check ว่ามี error ไหม
      setErrorObj((prev) => validateResult);
      //ถ้ามีไม่มี error จะ send api
      if (checkError(validateResult)) {
        const res = await examService.activateCard(patientId);
        const caseId = res.data?.currentCase?.id;
        changeId(+patientId);
        navigate("/exam/" + caseId);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      getOtherObj(err, setErrorObj);
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    const fetchCase = async () => {
      try {
        startLoading();
        const res = await examService.fetchMyCase();
        setFinishCaseList(res.data?.finishCase);
        setUnfinishCaseList(res.data?.unfinishCase);
      } catch (err) {
        console.log(err);
      } finally {
        stopLoading();
      }
    };
    fetchCase();
  }, [startLoading, stopLoading]);

  return (
    <CaseDoctorContext.Provider
      value={{
        errorObj,
        handleSearchCard,
        finishCaseList,
        unfinishCaseList,
      }}>
      <Outlet />
    </CaseDoctorContext.Provider>
  );
}
export const useCaseDoctor = () => {
  return useContext(CaseDoctorContext);
};

export default CaseDoctorContextProvider;
