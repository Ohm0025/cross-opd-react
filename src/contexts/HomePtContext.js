import { createContext, useContext, useEffect, useState } from "react";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";
import * as opdService from "../api/opdApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomePtContext = createContext();

function HomePtContextProvider({ children }) {
  //get loading from useLoading
  const { startLoading, stopLoading } = useLoading();
  //get typeaccount และ userObj ของ user ที่กำลัง login อยู่
  const { user } = useAuth();
  //create state เพื่อใช้ดูว่าตอนนี้กำลังอยู่ใน waitsate หรือไม่
  const [isWait, setIsWait] = useState(false);
  //create state เพื่อใช้ดูว่าตอนนี้กำลัง edit อยู่หรือไม่
  const [isEdit, setIsEdit] = useState(false);

  //create state ที่ใช้เก็บค่า input ของ page นี้
  const [input, setInput] = useState({
    chiefComplaintFirst: "",
    presentIllnessFirst: "",
    location: "",
    patientId: user.id,
    status: "waiting",
  });

  useEffect(() => {
    //เริ่ม fetchOpdCasd จาก database
    const fetchCard = async () => {
      try {
        startLoading();
        //ส่ง api ไป post /opd/wait , {patientId}
        const res = await opdService.fetchOpdCard(user.id);
        //เมื่อสามารถเอา waitCaseObj มาได้ แปลว่า case นี้ยังรออยู่ หือ inprogress แต่ยังไม่ finish
        if (res.data?.waitCase) {
          //set ให้ input เป็น case obj ที่ fetch เอามาได้
          setInput((prev) => {
            return { ...prev, ...res.data?.waitCase };
          });
          //ถ้ายังไม่ finish จะ set ให้เป็น wait state คือมีบัตรพร้อมตรวจแล้ว
          setIsWait(true);
        }
        //ไม่ว่าจะมี waitcase หรือไม่ก็จะ return จบการทำงาน แปลว่าถ้า user ไม่มีบัตรก็จะผ่านการทำงานไปเลย
        return;
      } catch (err) {
        console.log(err);
      } finally {
        stopLoading();
      }
    };
    fetchCard();
  }, [startLoading, stopLoading, user.id]);

  //import navigate
  const navigate = useNavigate();

  //function handle change state : inputObj -> สำหรับส่งให้ component อื่นๆใน context
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //function openCard - ส่ง input เพื่อเปิดบัตรออกมา
  const openCard = async () => {
    try {
      startLoading();
      //ส่ง request ไป api post /opd/open
      await opdService.openCard(input);
      //ถ้าไม่เจอ throw err แปลว่าทำงานได้ต่อ คือเปิดบัตรได้สำเร็จ -> จะ set ให้เป็น wait state
      setIsWait(true);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  //function edit card ไว้เปิด UI ในการแก้ไข opd card ซึ่งถ้ายังไม่ inprogress ก็สามารถแก้ได้
  const editOpdCard = () => {
    //check status ของ case ว่าเป็น inprogress ไหม
    if (input.status === "waiting") {
      //ถ้า status เป็น inprogress ก็จะ set ออกจาก wait state
      setIsWait(false);
      //แล้ว set edit state
      setTimeout(() => {
        setIsEdit(true);
      }, 10);
    }
    //ไม่ว่าจะ status ไหนสุดท้ายก็จะสั่งจบการทำงาน
    return;
  };

  //function send edit card
  const sendEditCard = async () => {
    try {
      startLoading();
      //send api patch /opd/edit
      await opdService.editOpdCard(input, input.id);
      //set ให้กลับมาเป็น wait state
      setIsWait(true);
      setTimeout(() => {
        //หลังจาก edit set ออกจาก edit state
        setIsEdit(false);
      }, 10);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  //function cancel card - cancel ได้เฉพาะตอนที่ยังไม่ inprogress
  const cancelCard = async (id) => {
    //send api delete /opd/cancel
    await opdService.deleteOpdCard(id);
    //set ออกจาก wait state
    setIsWait(false);
    //ล้างข้อมูล input ทั้งหมด
    setInput({
      chiefComplaintFirst: "",
      presentIllnessFirst: "",
      location: "",
      patientId: user.id,
    });
  };

  const fetchInputFollowUp = (followObj) => {
    setInput({
      chiefComplaintFirst: followObj?.chiefComplaintFirst,
      presentIllnessFirst: followObj?.presentIllnessFirst,
      location: followObj?.location,
      patientId: followObj?.patientId,
      status: followObj?.status,
    });
  };

  return (
    <HomePtContext.Provider
      value={{
        isEdit,
        isWait,
        input,
        patientId: user.id,
        handleChangeInput,
        openCard,
        editOpdCard,
        sendEditCard,
        cancelCard,
        fetchInputFollowUp,
        navigate,
      }}>
      {children}
    </HomePtContext.Provider>
  );
}

export const useHomePt = () => {
  return useContext(HomePtContext);
};

export default HomePtContextProvider;
