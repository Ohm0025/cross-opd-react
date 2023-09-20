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
        console.log(res.data.waitCase);
        fetchInputFollowUp({ ...res.data?.waitCase });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cancelFollowUp = async (fuId) => {
    try {
      await followUpService.cancelFollowUp(fuId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FollowUpContext.Provider
      value={{ listFu, activateFollowUp, cancelFollowUp }}>
      {children}
    </FollowUpContext.Provider>
  );
}

export const useFollowUp = () => {
  return useContext(FollowUpContext);
};

export default FollowUpContextProvider;
