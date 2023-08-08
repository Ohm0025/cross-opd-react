import { useEffect, useState, useRef } from "react";
import "./SubFormModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

function SubFormModal({ typePe, listTemplate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
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
    <div className="modalForm">
      <span>{typePe}</span>
      <div className="dropdown" ref={dropdownEl}>
        <button
          className="btn dropdown-toggle"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Select List
        </button>
        <ul className={`dropdown-menu ${isOpen ? "d-block" : ""}`}>
          {listTemplate.map((item, index) => {
            return <li key={"listTemplate" + typePe + index}>{item}</li>;
          })}
        </ul>
      </div>
      {isAdd ? (
        <div className="input-group">
          <input className="form-control" type="text" name="" id="" size={2} />
          <button className="btn btn-success" onClick={() => setIsAdd(false)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="btn btn-secondary" onClick={() => setIsAdd(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      ) : (
        <button className="button-addMore" onClick={() => setIsAdd(true)}>
          Add More
        </button>
      )}
    </div>
  );
}

export default SubFormModal;
