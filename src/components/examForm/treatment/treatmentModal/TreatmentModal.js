import { useEffect, useState, useRef } from "react";
import "./TreatmentModal.css";

function TreatmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [txType, setTxType] = useState("drug");
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  });

  return (
    <div className="tx-modal">
      <span>Treatment for diag01</span>
      <div className="tx-modal-type">
        <span>Select Treatment Type</span>
        <div className="dropdown" ref={dropdownEl}>
          <button
            className="btn dropdown-toggle"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {txType}
          </button>
          <ul className={`dropdown-menu ${isOpen ? "d-block" : ""}`}>
            <li onClick={() => setTxType("drug")}>drug</li>
            <li onClick={() => setTxType("proceduce")}>procrduce</li>
          </ul>
        </div>
      </div>
      <div>
        <label htmlFor=""></label>
      </div>
    </div>
  );
}

export default TreatmentModal;
