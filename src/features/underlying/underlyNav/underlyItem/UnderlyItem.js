import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UnderlyItem.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import UnderlyEdit from "../underlyEdit/UnderlyEdit";

function UnderlyItem({
  udName,
  handleSelectItem,
  isSelected,
  handleEdit,
  onClosed,
  handleRemove,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeDropDown = useCallback(() => setIsOpen(false), []);
  const dropdownEl = useClickOutside(closeDropDown);
  return (
    <>
      {isSelected ? (
        <UnderlyEdit
          oldName={udName}
          handleEdit={handleEdit}
          onClosed={onClosed}
        />
      ) : (
        <div className="underly-item">
          <span>{udName}</span>
          <div className="dropdown" ref={dropdownEl}>
            <button
              className="underly-item-button"
              data-toggle="dropdown"
              onClick={() => setIsOpen((prev) => !prev)}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            <div
              className={`dropdown-menu underly-item-action ${
                isOpen ? "d-block" : ""
              }`}>
              <span
                className="dropdown-item"
                role="button"
                onClick={handleRemove}>
                delete
              </span>
              <span
                className="dropdown-item"
                role="button"
                onClick={handleSelectItem}>
                edit
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UnderlyItem;
