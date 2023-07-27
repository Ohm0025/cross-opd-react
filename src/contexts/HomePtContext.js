import { createContext, useContext, useEffect, useState } from "react";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";
import { PATIENT } from "../config/constant";
import * as opdService from "../api/opdApi";
import { useNavigate } from "react-router-dom";

const HomePtContext = createContext();

function HomePtContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();
  const { typeaccount, user } = useAuth();
  const [input, setInput] = useState({
    chiefComplaintFirst: "",
    presentIllnessFirst: "",
    location: "",
    patientId: user.id,
  });
  const [isWait, setIsWait] = useState(false);
  const [waitCase, setWaitCase] = useState({});
  const navigate = useNavigate();

  const openCard = async () => {
    try {
      startLoading();
      if (typeaccount === PATIENT) {
        const res = await opdService.openCard(input);
        setIsWait(true);
        setWaitCase((prev) => {
          return { ...prev, ...res.data?.waitCase };
        });
      } else {
        throw new Error("your account not allow");
      }
      setInput({
        chiefComplaintFirst: "",
        presentIllnessFirst: "",
        location: "",
        patientId: user.id,
      });
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //   const cancelCard = async () => {};

  //   const updateCard = async () => {};

  useEffect(() => {
    const fetchCard = async () => {
      try {
        startLoading();
        const res = await opdService.fetchOpdCard(user.id);

        if (res.data?.waitCase) {
          setWaitCase((prev) => {
            return { ...prev, ...res.data?.waitCase };
          });
          setIsWait(true);
        }
        return;
      } catch (err) {
        console.log(err);
      } finally {
        stopLoading();
      }
    };
    fetchCard();
  }, [startLoading, stopLoading, user.id]);

  return (
    <HomePtContext.Provider
      value={{ waitCase, isWait, input, openCard, handleChangeInput, navigate }}
    >
      {children}
    </HomePtContext.Provider>
  );
}
export const useHomePt = () => {
  return useContext(HomePtContext);
};

export default HomePtContextProvider;
