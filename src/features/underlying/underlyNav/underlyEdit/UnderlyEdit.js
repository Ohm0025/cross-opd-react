import { useState } from "react";
import "./UnderlyEdit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function UnderlyEdit({ oldName, handleEdit, onClosed }) {
  const [editName, setEditName] = useState(oldName || "");
  const [isError, setIsError] = useState("");
  return (
    <>
      <div className="input-group underly-edit">
        <input
          className={`form-control ${isError ? "error-ud" : ""}`}
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={() => {
            handleEdit(editName).then((errTitle) => {
              setIsError(errTitle);
              errTitle || onClosed();
            });
          }}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="btn btn-secondary" onClick={onClosed}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <small className="text-danger">{isError}</small>
    </>
  );
}

export default UnderlyEdit;
