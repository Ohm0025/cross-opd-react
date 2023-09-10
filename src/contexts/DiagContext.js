import { createContext, useContext } from "react";
import { useExam } from "./ExamContext";

const DiagContext = createContext();

function DiagContextProvider({ children }) {
  const {
    recordObj: {
      diag: diagList,
      detailDx: { detail },
      tx: txObj,
    },
    updateList,
    editList,
    deleteList,
    updateRecordObj,
    updateTxObj,
    editTxObj,
    deleteTxObj,
    changeDiagName,
  } = useExam();

  const addDiagList = (newDiag) => {
    if (!diagList.includes(newDiag)) {
      updateList("diag", newDiag);
    }
  };

  const editDiagList = (selectDiag, newValue) => {
    editList(selectDiag, newValue, "diag");
    changeDiagName(newValue, selectDiag);
  };

  const removeDiag = (selectDiag) => {
    deleteList(selectDiag, "diag");
    delete txObj[selectDiag];
  };

  const changeDDX = (newvalue) => {
    updateRecordObj("detailDx", "detail", newvalue);
  };

  //treatment obj handle
  const handleSubmitTx = (diagName, inputTxArr) => {
    updateRecordObj("tx", diagName, inputTxArr);
  };

  return (
    <DiagContext.Provider
      value={{
        diagList,
        txObj,
        addDiagList,
        editDiagList,
        removeDiag,
        detail,
        changeDDX,
        handleSubmitTx,
        updateTxObj,
        editTxObj,
        deleteTxObj,
      }}>
      {children}
    </DiagContext.Provider>
  );
}

export const useDiag = () => {
  return useContext(DiagContext);
};

export default DiagContextProvider;
