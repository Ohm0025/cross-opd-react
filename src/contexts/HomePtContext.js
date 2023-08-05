import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";
import { PATIENT } from "../config/constant";
import * as opdService from "../api/opdApi";
import { useNavigate } from "react-router-dom";

const HomePtContext = createContext();

function HomePtContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();
  const { typeaccount, user } = useAuth();
  const [isWait, setIsWait] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [waitCase, setWaitCase] = useState({});

  const [input, setInput] = useState({
    chiefComplaintFirst: waitCase.chiefComplaintFirst || "",
    presentIllnessFirst: waitCase.presentIllnessFirst || "",
    location: waitCase.location || "",
    patientId: user.id,
  });

  const fetchInput = useCallback(async () => {
    try {
      setInput({
        chiefComplaintFirst: waitCase.chiefComplaintFirst || "",
        presentIllnessFirst: waitCase.presentIllnessFirst || "",
        location: waitCase.location || "",
        patientId: user.id,
      });
    } catch (err) {
      console.log(err);
    }
  }, [
    waitCase.chiefComplaintFirst,
    waitCase.presentIllnessFirst,
    waitCase.location,
    user.id,
  ]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        startLoading();
        const res = await opdService.fetchOpdCard(user.id);

        if (res.data?.waitCase) {
          setWaitCase((prev) => {
            return { ...prev, ...res.data?.waitCase };
          });
          await fetchInput();
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
  }, [startLoading, stopLoading, user.id, fetchInput]);

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
      // setInput({
      //   chiefComplaintFirst: "",
      //   presentIllnessFirst: "",
      //   location: "",
      //   patientId: user.id,
      // });
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const editOpdCard = () => {
    setIsWait(false);
    setTimeout(() => {
      setIsEdit(true);
    }, 10);
  };

  const sendEditCard = async () => {
    try {
      startLoading();
      const updateInput = {
        chiefComplaintFirst: input.chiefComplaintFirst,
        presentIllnessFirst: input.presentIllnessFirst,
        location: input.location,
      };

      await opdService.editOpdCard(updateInput, waitCase.id);
      setIsWait(true);
      setTimeout(() => {
        setIsEdit(true);
      }, 10);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const cancelCard = async (id) => {
    await opdService.deleteOpdCard(id);
    setIsWait(false);
    setInput({
      chiefComplaintFirst: "",
      presentIllnessFirst: "",
      location: "",
      patientId: user.id,
    });
  };

  return (
    <HomePtContext.Provider
      value={{
        waitCase,
        isWait,
        input,
        openCard,
        handleChangeInput,
        isEdit,
        editOpdCard,
        cancelCard,
        sendEditCard,
        navigate,
      }}
    >
      {children}
    </HomePtContext.Provider>
  );
}

export const useHomePt = () => {
  return useContext(HomePtContext);
};

export default HomePtContextProvider;
