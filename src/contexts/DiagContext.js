import { createContext, useContext, useState } from "react";

const DiagContext = createContext();

function DiagContextProvider({ children }) {
  const [diagList, setDiagList] = useState([]);
  const addDiagList = (newDiagArr) => {
    setDiagList((prev) => {
      newDiagArr.forEach((item) => {
        if (!prev.includes(item)) {
          prev.push(item);
        }
      });
      return prev;
    });
  };

  return (
    <DiagContext.Provider value={{ diagList, addDiagList }}>
      {children}
    </DiagContext.Provider>
  );
}

export const useDiag = () => {
  return useContext(DiagContext);
};

export default DiagContextProvider;
