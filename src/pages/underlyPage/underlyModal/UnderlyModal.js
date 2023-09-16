import { useEffect, useState } from "react";
import "./UnderlyModal.css";

function UnderlyModal({ addUnderly, closeModal, isDestroy }) {
  const [UdTitle, setUdTitle] = useState("");
  const [isError, setIsError] = useState("");

  useEffect(() => {
    if (isDestroy) {
      setIsError("");
      setUdTitle("");
    }
  }, [isDestroy]);

  console.log(isDestroy);

  return (
    <div className="underly-modal">
      <input
        value={UdTitle}
        onChange={(e) => setUdTitle(e.target.value)}
        className={`form-control ${isError ? "error-ud" : ""}`}
        placeholder="underlying disease"></input>
      <small className={`${isError ? "d-block" : ""}`}>{isError}</small>
      <div className="underly-modal-action">
        <button
          onClick={() => {
            addUnderly(UdTitle).then((errTitle) => {
              setIsError(errTitle);
              errTitle || closeModal();
            });
          }}>
          Add
        </button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default UnderlyModal;
