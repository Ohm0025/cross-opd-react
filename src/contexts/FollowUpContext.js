import { createContext, useContext, useEffect, useState } from "react";
import * as followUpService from "../api/followUpApi";
import { useHomePt } from "./HomePtContext";

const FollowUpContext = createContext();

function FollowUpContextProvider({ children }) {
  const [listFu, setListFu] = useState([]);
  const { patientId, fetchInputFollowUp } = useHomePt();

  useEffect(() => {
    const fetchAllFollowUp = async () => {
      try {
        const res = await followUpService.fetchFollowUp(patientId);
        setListFu((prev) => {
          return [...res.data.listFu];
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllFollowUp();
  }, [patientId]);

  const activateFollowUp = async (fuId) => {
    try {
      const res = await followUpService.activateFollowUp(fuId);
      if (res.data?.waitCase) {
        fetchInputFollowUp({ ...res.data?.waitCase });
        console.log("activate fu success");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <FollowUpContext.Provider value={{ listFu, activateFollowUp }}>
      {children}
    </FollowUpContext.Provider>
  );
}

export const useFollowUp = () => {
  return useContext(FollowUpContext);
};

export default FollowUpContextProvider;
