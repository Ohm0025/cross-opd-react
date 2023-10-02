import { createContext, useContext, useState } from "react";
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

  const [errMessage, setErrMessage] = useState("");

  const addDiagList = (newDiag) => {
    if (newDiag.trim() === "") {
      setErrMessage("diagTitle is required.");
    } else {
      if (
        !diagList
          .map((item) => item.toLowerCase())
          .includes(newDiag.toLowerCase())
      ) {
        updateList("diag", newDiag);
        setErrMessage("");
      } else {
        setErrMessage("this diag already exist.");
      }
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

  const deleteTx = (diagName, inputTxArr, selectItem) => {
    updateRecordObj(
      "tx",
      diagName,
      inputTxArr.filter((item) => item !== selectItem)
    );
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
        deleteTx,
        updateTxObj,
        editTxObj,
        deleteTxObj,
        errMessage,
      }}>
      {children}
    </DiagContext.Provider>
  );
}

export const useDiag = () => {
  return useContext(DiagContext);
};

export default DiagContextProvider;
