import "./ExamHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import IconName from "../../../components/iconName/IconName";
import { useExam } from "../../../contexts/ExamContext";
import { formatTagPtName } from "../../../utility/formatString";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

function ExamHeader() {
  const { handleRecord, patientObj, cancelOpdCard, navigate, pendingOpdCard } =
    useExam();
  const [socket, setSocket] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef();
  const { caseId } = useParams();

  useEffect(() => {
    setSocket(io("http://localhost:8008"));
    const handleClickOutside = (e) => {
      if (
        !dropdownEl.current.contains(e.target) &&
        e.target.className !== "pt-button" &&
        Object.getPrototypeOf(e.target.className)[Symbol.toStringTag] !==
          "SVGAnimatedString"
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="exam-header">
        <div className="header-left">
          <IconName
            char={patientObj && patientObj?.firstName[0]?.toUpperCase()}
            radius="45px"
          />
          <div className="pt-tag">
            {patientObj && formatTagPtName(patientObj)}
            <small>{`id : ${patientObj?.id}`}</small>
          </div>
          <button
            className="pt-button"
            onClick={() => setIsOpen((prev) => !prev)}>
            <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} />
          </button>
        </div>
        <div className="dropdown exam-dropdown" ref={dropdownEl}>
          <ul className={`dropdown-menu ${isOpen ? "d-block" : ""}`}>
            <li
              onClick={() => {
                navigate(`exam/${caseId}/underly/${patientObj?.id}`);
                setIsOpen(false);
              }}
              role="button">
              {"Underlying disease"} <br /> {"COPD"}
            </li>
            <li
              onClick={() => {
                navigate(`exam/${caseId}/allergy/${patientObj?.id}`);
                console.log(caseId);
                console.log(patientObj.id);
                setIsOpen(false);
              }}>
              {"Drug allergy"} <br /> {"Pennicilin"}
            </li>
            <li
              onClick={() => {
                navigate(`exam/${caseId}/pastHx/${patientObj?.id}`);
                setIsOpen(false);
              }}
              role="button">
              ประวัติการรักษา
            </li>
            <li
              onClick={() => {
                navigate(`exam/${caseId}/drug/${patientObj?.id}`);
                setIsOpen(false);
              }}
              role="button">
              ประวัติการใช้ยา
            </li>
            <li
              onClick={() => {
                navigate(`exam/${caseId}/labHx/${patientObj?.id}`);
                setIsOpen(false);
              }}>
              ประวัติการสั่ง Lab
            </li>
            <li
              onClick={() => {
                navigate(`exam/${caseId}/imgHx/${patientObj?.id}`);
                setIsOpen(false);
              }}>
              ประวัติการสั่ง Imaging
            </li>
          </ul>
        </div>
        <div className="header-right">
          <button
            onClick={() => {
              handleRecord();
              socket?.emit("finishCase", patientObj.patientId);
            }}>
            Finish
          </button>
          <button
            onClick={() => {
              pendingOpdCard();
            }}>
            Pending
          </button>
          <button
            onClick={() => {
              cancelOpdCard();
              socket?.emit("cancelCase", patientObj.patientId);
            }}>
            Cancel
          </button>
        </div>
      </div>
      <div style={{ height: "5rem" }}></div>
      <Outlet />
    </>
  );
}

export default ExamHeader;
