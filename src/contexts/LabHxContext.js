import { createContext, useContext, useEffect, useState } from "react";
import * as labHxService from "../api/labHxApi";
import { useParams } from "react-router-dom";

const LabHxContext = createContext();

function LabHxContextProvider({ children }) {
  const [listLab, setListLab] = useState([]);
  const [selectLab, setSelectLab] = useState(null);
  const { encodeParams } = useParams();

  const decodeParams = encodeParams && decodeURIComponent(encodeParams);

  useEffect(() => {
    const fetchLab = async () => {
      try {
        const res = await labHxService.fetchAllLab(decodeParams);
        console.log(res.data.allPastLab);
        console.log(res.data.lastPastLab);
        setListLab(res.data?.allPastLab);
        setSelectLab(res.data?.allPastLab[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLab();
  }, [decodeParams]);

  const changeSelectedLab = async (labId) => {
    try {
      setSelectLab((prev) => {
        return listLab.find((item) => item.id === labId);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LabHxContext.Provider value={{ listLab, selectLab, changeSelectedLab }}>
      {children}
    </LabHxContext.Provider>
  );
}

export const useLabHx = () => {
  return useContext(LabHxContext);
};

export default LabHxContextProvider;
