import "./PtWaitPage.css";
import { useAuth } from "../../../../contexts/AuthContext";
import { useHomePt } from "../../../../contexts/HomePtContext";

import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function PtWaitPage() {
  const { user } = useAuth();
  const { navigate, input, editOpdCard, cancelCard } = useHomePt();
  const [status, setStatus] = useState(input.status || "waiting");

  const [socket, setSocket] = useState(null);

  const handleEdit = () => {
    navigate("/");
    editOpdCard();
  };

  useEffect(() => {
    setSocket(io("http://localhost:8008"));
  }, []);

  useEffect(() => {
    socket?.emit("newPatient", input.patientId);
  }, [socket, input.patientId]);

  useEffect(() => {
    socket?.on("changeStatus", ({ status, sendPatientId }) => {
      console.log(status);
      console.log(sendPatientId);
      if (sendPatientId === user.id) setStatus(() => status);
    });
    socket?.on("closeStatus", ({ command, sendPatientId }) => {
      if (sendPatientId === user.id && command === "cancelOpdCard") {
        alert("การตรวจถูกยกเลิก");
        setStatus(() => "waiting");
      }
    });
    socket?.on("finishStatus", ({ command, sendPatientId }) => {
      if (sendPatientId === user.id && command === "closeCase") {
        // alert("การตรวจเสร็จสิ้น");
        window.location.reload();
      }
    });
  }, [socket, user.id]);
  return (
    <div className="pt-waitpage">
      <div className="pt-show-item">
        <div>{"เปิดบัตรสำเร็จ"}</div>
        <div>{`ID : ${user.id}`}</div>
      </div>
      <div className="pt-show-item">{`status : ${status}`}</div>
      {status === "inprogress" ? (
        <div className={`pt-waitaction`}>
          <button onClick={handleEdit} disabled>
            Edit
          </button>
          <button onClick={() => cancelCard(input.id)} disabled>
            Cancel
          </button>
        </div>
      ) : (
        <div className={`pt-waitaction`}>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => cancelCard(input.id)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default PtWaitPage;
