import { createContext, useContext } from "react";
import { useExam } from "./ExamContext";

const ImagingContext = createContext();

function ImagingContextProvider({ children }) {
  const { recordObj, updateList, editList, deleteList } = useExam();

  //ImgObj = {name , status , des , img}
  const createNewImgItem = (input) => {
    const newImgObj = {
      name: input.name ?? "",
      status: input.status ?? "pending",
      des: input.des ?? "",
      img: input.img ?? [],
    };
    updateList("img", newImgObj);
  };

  const editImg = (editImg, newValue) => {
    editList(editImg, newValue, "img");
  };

  const deletedImg = (deleteImg) => {
    deleteList(deletedImg, "img");
  };
  return (
    <ImagingContext.Provider
      value={{ listImg: recordObj.img, createNewImgItem, editImg, deletedImg }}
    >
      {children}
    </ImagingContext.Provider>
  );
}

export const useImg = () => {
  return useContext(ImagingContext);
};

export default ImagingContextProvider;
