import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import * as examService from "../api/examApi";
import * as underlyService from "../api/underlyApi";
import { formatStringToArr } from "../utility/formatString";
import { useAuth } from "../contexts/AuthContext";
import {
  validateAddUd,
  validateEditUd,
} from "../utility/validate/validateUnderly";
import { useLoading } from "../contexts/LoadingContext";
// import * as testService from "../api/testApi";

const ExamContext = createContext();

function ExamContextProvider({ children }) {
  const [currentId, setCurrentId] = useState(0); //ptId

  const navigate = useNavigate();

  const { startLoading, stopLoading } = useLoading();
  const { user } = useAuth();
  const { caseId } = useParams();

  const [patientObj, setPatientObj] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    underlying: [],
    gender: "",
    id: "",
  });

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
    tx: {},
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

  const updateTxObj = (diagName, newObj) => {
    setRecordObj((prev) => {
      recordObj.tx[diagName] = recordObj.tx[diagName]
        ? [...recordObj.tx[diagName], newObj]
        : [newObj];
      return {
        ...prev,
        tx: {
          ...recordObj.tx,
          [diagName]: recordObj.tx[diagName],
        },
      };
    });
  };

  const changeDiagName = (newDiagName, oldDiagName) => {
    setRecordObj((prev) => {
      return {
        ...prev,
        tx: { ...prev.tx, [newDiagName]: [...prev.tx[oldDiagName]] },
      };
    });
    delete recordObj.tx[oldDiagName];
  };

  const editTxObj = (selectDiagName, selectItem, newObj) => {
    setRecordObj((prev) => {
      return {
        ...prev,
        tx: {
          ...prev.tx,
          [selectDiagName]: prev.tx[selectDiagName].map((item) => {
            return item === selectItem ? newObj : item;
          }),
        },
      };
    });
  };

  const deleteTxObj = (selectDiagName, selectItem) => {
    setRecordObj((prev) => {
      return {
        ...prev,
        tx: {
          ...prev.tx,
          [selectDiagName]: prev.tx[selectDiagName].filter(
            (item) => item !== selectItem
          ),
        },
      };
    });
  };
  useEffect(() => {
    const fetchCurrentCase = async () => {
      try {
        const res = await examService.fetchCurrentPt(caseId, currentId);

        setPatientObj((prev) => {
          return {
            ...prev,
            firstName: res.data.patientObj.firstName,
            lastName: res.data.patientObj.lastName,
            birthDate: res.data.patientObj.birthDate,
            underlying: JSON.parse(res.data.patientObj.underlying || "[]"),
            gender: res.data.patientObj.gender,
            id: res.data.patientObj.id,
          };
        });

        setRecordObj((prev) => {
          return {
            ...prev,
            cc: { ...prev.cc, ...res.data.currentCase.ChiefComplaint },
            pi: { ...prev.pi, ...res.data.currentCase.PresentIll },
            pe: {
              ...prev.pe,
              ...res.data.currentCase.PhysicalExam,
              examImg: formatStringToArr(
                res.data.currentCase.PhysicalExam.examImg || "",
                " "
              ),
            },
            detailDx: { ...prev.detailDx, ...res.data.currentCase.DetailDiag },
            diag: JSON.parse(res.data.currentCase.Diagnosis.diagName || "[]"),
            tx: JSON.parse(res.data.currentCase.Treatment.txList || "{}"),
            lab: JSON.parse(res.data.currentCase.LabOrder.labArray || "[]"),
            img: JSON.parse(res.data.currentCase.Imaging.imgArray || "[]"),
            ad: { ...prev.ad, ...res.data.currentCase.Advice },
            fu: { ...prev.fu, ...res.data.currentCase.FollowUp },
            location: res.data.currentCase.location,
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
      startLoading();
      await examService.recordExam(
        caseId,
        currentId,
        recordObj,
        detailDrug,
        detailProcedure,
        "finish"
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const addUnderly = async (newUdtitle) => {
    const newUdObj = {
      udTitle: newUdtitle,
      udUpdater: `${user.firstName + " " + user.lastName}`,
      udLocation: recordObj.location,
      udDate: new Date(),
    };
    //validate underly
    let resultValidate = validateAddUd(patientObj?.underlying, newUdtitle);
    if (resultValidate) {
      return resultValidate;
    }
    await underlyService.updateUnderly(patientObj.id, [
      ...patientObj.underlying,
      newUdObj,
    ]);
    setPatientObj((prev) => {
      return {
        ...prev,
        underlying: [...prev.underlying, newUdObj],
      };
    });
  };

  const editUnderly = async (selectUdTitle, newEditName) => {
    const newEditObj = {
      udTitle: newEditName,
      udUpdater: `${user.firstName + " " + user.lastName}`,
      udLocation: recordObj.location,
      udDate: new Date(),
    };
    //validate underly
    let resultValidate = validateEditUd(
      patientObj?.underlying,
      newEditName,
      selectUdTitle
    );
    if (resultValidate) {
      return resultValidate;
    }
    await underlyService.updateUnderly(
      patientObj.id,
      patientObj.underlying.map((item) =>
        item.udTitle === selectUdTitle ? newEditObj : item
      )
    );
    setPatientObj((prev) => {
      return {
        ...prev,
        underlying: prev.underlying.map((item) =>
          item.udTitle === selectUdTitle ? newEditObj : item
        ),
      };
    });
  };

  const removeUnderly = async (selectTitle) => {
    await underlyService.updateUnderly(
      patientObj.id,
      patientObj.underlying.filter((item) => item.udTitle !== selectTitle)
    );
    setPatientObj((prev) => {
      return {
        ...prev,
        underlying: prev.underlying.filter(
          (item) => item.udTitle !== selectTitle
        ),
      };
    });
  };

  const pendingOpdCard = async () => {
    try {
      startLoading();
      await examService.recordExam(
        caseId,
        currentId,
        recordObj,
        detailDrug,
        detailProcedure,
        "pending"
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const cancelOpdCard = async () => {
    const res = await examService.cancelOpdCard(+caseId, +patientObj.id);
    navigate("/");
  };

  return (
    <ExamContext.Provider
      value={{
        navigate,
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
        updateTxObj,
        editTxObj,
        deleteTxObj,
        changeDiagName,
        patientObj,
        addUnderly,
        editUnderly,
        removeUnderly,
        pendingOpdCard,
        cancelOpdCard,
      }}>
      <Outlet />
    </ExamContext.Provider>
  );
}

export const useExam = () => {
  return useContext(ExamContext);
};

export default ExamContextProvider;
