import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import * as examService from "../api/examApi";

const ExamContext = createContext();

function ExamContextProvider({ children }) {
  const [currentId, setCurrentId] = useState(0);
  const [currentCase, setCurrentCase] = useState(null);
  const { caseId } = useParams();

  const updateCase = (obj) => {
    setCurrentCase((prev) => {
      return { ...prev, ...obj };
    });
  };
  const changeId = (id) => {
    setCurrentId(id);
  };

  useEffect(() => {
    const fetchCurrentCase = async () => {
      try {
        if (currentId) {
          const res1 = await examService.fetchCurrentPt(currentId);
          updateCase(res1.data.currentCase);
        } else if (caseId) {
          const res2 = await examService.fetchCurrentPt(caseId);
          updateCase(res2.data.currentCase);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCurrentCase();
  }, [currentId, caseId]);

  return (
    <ExamContext.Provider value={{ changeId, currentCase }}>
      <Outlet />
    </ExamContext.Provider>
  );
}

export const useExam = () => {
  return useContext(ExamContext);
};

export default ExamContextProvider;
