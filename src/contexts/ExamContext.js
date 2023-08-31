import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import * as examService from "../api/examApi";
import { formatStringToArr } from "../utility/formatString";
// import * as testService from "../api/testApi";

const ExamContext = createContext();

function ExamContextProvider({ children }) {
  const [currentId, setCurrentId] = useState(0); //ptId

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

  const [detailDrug, setDetailDrug] = useState([]);
  const [detailProcedure, setDetailProcedure] = useState([]);

  const updateDetailDrug = ({ title, use, amount, diagTitle }) => {
    setDetailDrug((prev) => [...prev, { title, use, amount, diagTitle }]);
  };

  const updateDetailProceduce = ({ proceduce, procedist, diagTitle }) => {
    setDetailProcedure((prev) => [
      ...prev,
      { proceduce, procedist, diagTitle },
    ]);
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

  const updateList = (inputType, newObj) => {
    setRecordObj((prev) => {
      return {
        ...prev,
        [inputType]: [...recordObj[inputType], newObj],
      };
    });
  };

  const editList = (selectItem, newValue, inputType) => {
    setRecordObj((prev) => {
      return {
        ...prev,
        [inputType]: recordObj[inputType].map((item) => {
          return item === selectItem ? newValue : item;
        }),
      };
    });
  };

  const deleteList = (selectItem, inputType) => {
    setRecordObj((prev) => {
      return {
        ...prev,
        [inputType]: recordObj[inputType].filter((item) => item !== selectItem),
      };
    });
  };

  useEffect(() => {
    const fetchCurrentCase = async () => {
      try {
        const res = await examService.fetchCurrentPt(caseId, currentId);

        //changeId(res.data.currentCase.patientId);

        setRecordObj((prev) => {
          return {
            ...prev,
            cc: { ...prev.cc, ...res.data.currentCase.ChiefComplaint },
            pi: { ...prev.pi, ...res.data.currentCase.PresentIll },
            pe: {
              ...prev.pe,
              ...res.data.currentCase.PhysicalExam,
              examImg: formatStringToArr(
                res.data.currentCase.PhysicalExam.examImg,
                " "
              ),
            },
            detailDx: { ...prev.detailDx, ...res.data.currentCase.DetailDiag },
            diag: res.data.currentCase.Diagnoses.map((item) =>
              item.diagName ? item.diagName : ""
            ),
            ad: { ...prev.ad, ...res.data.currentCase.Advice },
            fu: { ...prev.fu, ...res.data.currentCase.FollowUp },
          };
        });
      } catch (err) {
        console.log(err);
      }
    };
    caseId && fetchCurrentCase();
  }, [currentId, caseId]);

  const handleRecord = async () => {
    try {
      await examService.recordExam(
        caseId,
        currentId,
        recordObj,
        detailDrug,
        detailProcedure
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ExamContext.Provider
      value={{
        changeId,
        recordObj,
        updateList,
        updateRecordObj,
        handleRecord,
        editList,
        deleteList,
        detailDrug,
        detailProcedure,
        updateDetailDrug,
        updateDetailProceduce,
      }}>
      <Outlet />
    </ExamContext.Provider>
  );
}

export const useExam = () => {
  return useContext(ExamContext);
};

export default ExamContextProvider;
