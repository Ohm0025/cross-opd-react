import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UnderlyNav.css";
import UnderlyItem from "./underlyItem/UnderlyItem";
import { faBars, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/Modal";
import UnderlyModal from "../../../pages/underlyPage/underlyModal/UnderlyModal";
import { useEffect, useState, useRef } from "react";

function UnderlyNav({
  listUnderly,
  addUnderly,
  editUnderly,
  removeUnderly,
  handleSelectUd,
  patientId,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);

  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !dropdownEl.current.contains(e.target) &&
        e.target.className !== "underly-dropdown-button" &&
        Object.getPrototypeOf(e.target.className)[Symbol.toStringTag] !==
          "SVGAnimatedString"
      ) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="underly-dropdown">
        <button
          className="underly-dropdown-button"
          onClick={() => setOpenDropDown((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="dropdown ud-dropdown" ref={dropdownEl}>
          <div className={`dropdown-menu ${openDropDown ? "d-block" : ""}`}>
            {listUnderly.map((item, index) => {
              return (
                <UnderlyItem
                  key={"unItem" + index}
                  udName={item.udTitle}
                  handleSelectItem={() => setSelectItem(item)}
                  isSelected={selectItem === item}
                  onClosed={() => setSelectItem("")}
                  handleEdit={(editName) =>
                    editUnderly(selectItem.udTitle, editName)
                  }
                  handleRemove={() => {
                    removeUnderly(item.udTitle);
                  }}
                  callBackSelect={() => setSelectItem(false)}
                  handleSelectUd={() => handleSelectUd(item)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="underly-nav">
        <div className="underly-nav-list">
          {listUnderly.map((item, index) => {
            return (
              <UnderlyItem
                key={"unItem" + index}
                udName={item.udTitle}
                handleSelectItem={() => setSelectItem(item)}
                isSelected={selectItem === item}
                onClosed={() => setSelectItem("")}
                handleEdit={(editName) =>
                  editUnderly(selectItem.udTitle, editName)
                }
                handleRemove={() => {
                  removeUnderly(item.udTitle);
                }}
                callBackSelect={() => setSelectItem(false)}
                handleSelectUd={() => handleSelectUd(item)}
              />
            );
          })}
        </div>
        {!patientId ? (
          <></>
        ) : (
          <div className="underly-nav-action">
            <button onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faPlusCircle} /> {" Add New Underlying"}
            </button>
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UnderlyModal
          addUnderly={addUnderly}
          closeModal={() => setIsOpen(false)}
          isDestroy={!isOpen}
        />
      </Modal>
    </>
  );
}

export default UnderlyNav;
