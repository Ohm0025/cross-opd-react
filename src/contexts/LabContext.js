import { createContext, useContext } from "react";
import { useExam } from "./ExamContext";

const LabContext = createContext();

function LabContextProvider({ children }) {
  const { recordObj, updateList, editList, deleteList } = useExam();

  // labobj = {name , status , des , img}
  const createNewLabItem = (input) => {
    const newLabObj = {
      name: input.name ?? "",
      status: input.status ?? "pending",
      des: input.des ?? "",
      img: input.img ?? [],
    };
    updateList("lab", newLabObj);
  };
  //selectItem, newValue, inputType
  const editLab = (selectItem, newValue) => {
    editList(selectItem, newValue, "lab");
  };

  const deletedLab = (deleteLab) => {
    deleteList(deleteLab, "lab");
  };
  return (
    <LabContext.Provider
      value={{
        listLab: recordObj.lab,
        createNewLabItem,
        deletedLab,
        editLab,
      }}
    >
      {children}
    </LabContext.Provider>
  );
}

export const useLab = () => {
  return useContext(LabContext);
};

export default LabContextProvider;
