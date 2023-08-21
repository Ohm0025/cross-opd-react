import { createContext, useState, useContext } from "react";

const LabContext = createContext();

function LabContextProvider({ children }) {
  const [listLab, setListLab] = useState([]);

  // labobj = {name , status , des , img}
  const createNewLabItem = (input) => {
    const newLabObj = {
      name: input.name ?? "",
      status: input.status ?? "pending",
      des: input.des ?? "",
      img: input.img ?? [],
    };
    setListLab((prev) => {
      return [...prev, newLabObj];
    });
  };

  const editLab = (editLab, newValue) => {
    setListLab((prev) =>
      prev.map((item) => (item === editLab ? { ...item, ...newValue } : item))
    );
  };

  const deletedLab = (deleteLab) => {
    setListLab((prev) => prev.filter((item) => item !== deleteLab));
  };
  return (
    <LabContext.Provider
      value={{ listLab, createNewLabItem, deletedLab, editLab }}
    >
      {children}
    </LabContext.Provider>
  );
}

export const useLab = () => {
  return useContext(LabContext);
};

export default LabContextProvider;
