import "./PtWaitPage.css";
import { useAuth } from "../../../../contexts/AuthContext";
import { useHomePt } from "../../../../contexts/HomePtContext";

import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function PtWaitPage() {
  const [status, setStatus] = useState("");
  const { user } = useAuth();
  const { waitCase } = useHomePt();
  const { navigate, editOpdCard, cancelCard } = useHomePt();

  const [socket, setSocket] = useState(null);

  const handleEdit = () => {
    navigate("/");
    editOpdCard();
  };

  useEffect(() => {
    setSocket(io("http://localhost:8080"));
  }, []);

  useEffect(() => {
    socket?.emit("newPatient", waitCase.patientId);
  }, [socket, waitCase.patientId]);

  useEffect(() => {
    socket?.on("changeStatus", (status) => {
      setStatus(status);
    });
  }, [socket]);
  return (
    <div className="pt-waitpage">
      <div className="pt-show-item">
        <div>{"เปิดบัตรสำเร็จ"}</div>
        <div>{`ID : ${user.id}`}</div>
      </div>
      <div className="pt-show-item">{`status : ${
        status || waitCase.status
      }`}</div>
      <div className="pt-waitaction">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => cancelCard(waitCase.id)}>Cancel</button>
      </div>
    </div>
  );
}

export default PtWaitPage;
