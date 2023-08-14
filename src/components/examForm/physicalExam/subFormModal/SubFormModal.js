import { useEffect, useState, useRef } from "react";
import "./SubFormModal.css";

function SubFormModal({
  typePe,
  listTemplate,
  OpenIsRight,
  whichIs,
  addPEList,
}) {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="modalForm-top">
      <div className="modalForm-left">{typePe}</div>
      <div className="modalForm-right">
        <div className="dropdown" ref={dropdownEl}>
          <button
            className="btn dropdown-toggle pe-modal-select"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Select List
          </button>
          <ul className={`dropdown-menu ${isOpen ? "d-block" : ""}`}>
            {listTemplate.map((item, index) => {
              return (
                <li
                  className="template-item"
                  onClick={() => addPEList(item, typePe)}
                  key={"listTemplate" + typePe + index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="button-addMore" onClick={OpenIsRight} name={typePe}>
          {whichIs === typePe ? "Cancel" : "Add More"}
        </button>
      </div>
    </div>
  );
}

export default SubFormModal;
