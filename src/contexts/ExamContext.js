import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Outlet, useParams } from "react-router-dom";

import * as examService from "../api/examApi";
import * as testService from "../api/testApi";

const ExamContext = createContext();

function ExamContextProvider({ children }) {
  const [currentId, setCurrentId] = useState(0); //ptId
  const [currentCase, setCurrentCase] = useState(null);
  const { caseId } = useParams();

  const [recordObj, setRecordObj] = useState({
    cc: { title: "" },
    pi: { title: "" },
    pe: {
      examManual: "",
      examTemplate: "",
      examImg: [],
    },
    detailDx: {
      detail: "",
    },
    diag: [],
    img: [],
    lab: [],
    ad: {
      detail: "",
    },
    fu: {
      fuHos: "",
      fuOPD: "",
      fuDetail: "",
      fuDate: "",
    },
  });

  const updateCase = (obj) => {
    setCurrentCase((prev) => {
      return { ...prev, ...obj };
    });
  };
  const changeId = (id) => {
    setCurrentId(+id);
  };

  const updateRecordObj = (inputType, inputkey, inputvalue) => {
    setRecordObj((prev) => {
      return {
        ...prev,
        [inputType]: { ...recordObj[inputType], [inputkey]: inputvalue },
      };
    });
  };

  // const updateRecordObj = useCallback(
  //   (inputType, inputObj) => {
  //     setRecordObj((prev) => {
  //       return { ...prev, [inputType]: { ...prev.inputType, ...inputObj } };
  //     });
  //   },
  //   [recordObj]
  // );

  useEffect(() => {
    const fetchCurrentCase = async () => {
      try {
        const res = await examService.fetchCurrentPt(caseId, currentId);
        updateCase(res.data.currentCase);
        changeId(res.data.currentCase.patientId);
        updateRecordObj(
          "cc",
          "title",
          res.data.currentCase.ChiefComplaint?.title
        );
        updateRecordObj("pi", "title", res.data.currentCase.PresentIll?.title);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCurrentCase();
  }, [currentId, caseId]);

  const handleRecord = async () => {
    try {
      // await examService.recordExam(caseId, currentId, recordObj);
      await testService.testupload(recordObj);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ExamContext.Provider
      value={{
        changeId,
        recordObj,
        updateRecordObj,
        handleRecord,
      }}
    >
      <Outlet />
    </ExamContext.Provider>
  );
}

export const useExam = () => {
  return useContext(ExamContext);
};

export default ExamContextProvider;
