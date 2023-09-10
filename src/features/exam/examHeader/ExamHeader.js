import "./ExamHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import IconName from "../../../components/iconName/IconName";
import { useExam } from "../../../contexts/ExamContext";
import { formatTagPtName } from "../../../utility/formatString";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function ExamHeader() {
  const { handleRecord, patientObj } = useExam();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:8008"));
  }, []);

  return (
    <div className="exam-header">
      <div className="header-left">
        <IconName char={patientObj?.firstName[0].toUpperCase()} radius="45px" />
        <div className="pt-tag">
          {patientObj && formatTagPtName(patientObj)}
          <small>{`id : ${patientObj?.id}`}</small>
        </div>
        <button className="pt-button">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <div className="header-right">
        <button
          onClick={() => {
            handleRecord();
            socket?.emit("finishCase", patientObj.patientId);
          }}>
          Finish
        </button>
        <button>Pending</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default ExamHeader;
