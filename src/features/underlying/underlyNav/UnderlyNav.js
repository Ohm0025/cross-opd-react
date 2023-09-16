import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UnderlyNav.css";
import UnderlyItem from "./underlyItem/UnderlyItem";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/Modal";
import UnderlyModal from "../../../pages/underlyPage/underlyModal/UnderlyModal";
import { useState } from "react";

function UnderlyNav({ listUnderly, addUnderly, editUnderly, removeUnderly }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState("");

  const handleSelectItem = (item) => {
    setSelectItem(item);
  };

  return (
    <div className="underly-nav">
      {listUnderly.map((item, index) => {
        return (
          <UnderlyItem
            key={"unItem" + index}
            udName={item.udTitle}
            handleSelectItem={() => handleSelectItem(item)}
            isSelected={selectItem === item}
            onClosed={() => setSelectItem("")}
            handleEdit={(editName) => editUnderly(selectItem.udTitle, editName)}
            handleRemove={() => removeUnderly(item.udTitle)}
          />
        );
      })}
      <div className="underly-nav-action">
        <button onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlusCircle} /> {" Add New Underlying"}
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UnderlyModal
          addUnderly={addUnderly}
          closeModal={() => setIsOpen(false)}
          isDestroy={!isOpen}
        />
      </Modal>
    </div>
  );
}

export default UnderlyNav;
