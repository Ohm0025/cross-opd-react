import "./DrSearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import { io } from "socket.io-client";

function DrSearchBox({ handleSearchCard }) {
  const [patientId, setPatientId] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:8080"));
  }, []);

  return (
    <div className="search-container">
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          placeholder="insert patient id"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <button
          className="btn search-button"
          onClick={() => {
            handleSearchCard(+patientId);
            socket?.emit("activatedOpd", patientId);
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default DrSearchBox;
