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
    socket?.on("changeStatus", (status) => {
      setStatus(status);
    });
    socket?.on("closeStatus", (command) => {
      if (command === "closeCase") {
        alert("case finish");
        window.location.reload();
      }
    });
  }, [socket]);
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
