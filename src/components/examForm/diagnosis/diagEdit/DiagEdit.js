import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DiagEdit.css";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DiagEdit({ item, updateDiag, closeEdit }) {
  const [updatedDiag, setUpdatedDiag] = useState(item);
  return (
    <div className="input-group diag-item-edit">
      <input
        type="text"
        className="form-control"
        value={updatedDiag}
        onChange={(e) => setUpdatedDiag(e.target.value)}
      />
      <button className="btn" onClick={() => updateDiag(updatedDiag)}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="btn" onClick={closeEdit}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

export default DiagEdit;
