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
  return (
    <LabContext.Provider value={{ listLab, createNewLabItem }}>
      {children}
    </LabContext.Provider>
  );
}

export const useLab = () => {
  return useContext(LabContext);
};

export default LabContextProvider;
