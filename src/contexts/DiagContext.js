import { createContext, useContext } from "react";
import { useExam } from "./ExamContext";

const DiagContext = createContext();

function DiagContextProvider({ children }) {
  const {
    recordObj: {
      diag: diagList,
      detailDx: { detail },
    },
    updateList,
    editList,
    deleteList,
    updateRecordObj,
  } = useExam();

  const addDiagList = (newDiag) => {
    if (!diagList.includes(newDiag)) {
      updateList("diag", newDiag);
    }
  };

  const editDiagList = (selectDiag, newValue) => {
    editList(selectDiag, newValue, "diag");
  };

  const removeDiag = (selectDiag) => {
    deleteList(selectDiag, "diag");
  };

  const changeDDX = (newvalue) => {
    updateRecordObj("detailDx", "detail", newvalue);
  };
  return (
    <DiagContext.Provider
      value={{
        diagList,
        addDiagList,
        editDiagList,
        removeDiag,
        detail,
        changeDDX,
      }}
    >
      {children}
    </DiagContext.Provider>
  );
}

export const useDiag = () => {
  return useContext(DiagContext);
};

export default DiagContextProvider;
