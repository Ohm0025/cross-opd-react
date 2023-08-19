import { useState, useCallback } from "react";
import "./SubFormModal.css";
import { useClickOutside } from "../../../../hooks/useClickOutside";

function SubFormModal({
  typePe,
  listTemplate,
  OpenIsRight,
  whichIs,
  addPEList,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = useCallback(() => setIsOpen(false), []);
  const dropdownEl = useClickOutside(closeDropdown);

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
                  onClick={() => {
                    addPEList(item, typePe);
                    setIsOpen(false);
                  }}
                  key={"listTemplate" + typePe + index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className={`${whichIs === typePe ? "isSelected" : ""} button-addMore`}
          onClick={OpenIsRight}
          name={typePe}
        >
          {whichIs === typePe ? "Cancel" : "Add More"}
        </button>
      </div>
    </div>
  );
}

export default SubFormModal;
