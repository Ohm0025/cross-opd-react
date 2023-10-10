import AllergyCenter from "../allergyCenter/AllergyCenter";
import AllergyEmpty from "../allergyEmpty/AllergyEmpty";
import { useAllergy } from "../../../contexts/AllergyContext";
import "./AllergyContainer.css";
import Modal from "../../../components/Modal";
import AllergyModal from "../allergyEmpty/allergyModal/AllergyModal";
import { useState } from "react";

function AllergyContainer() {
  const { allergyObjList, addAllergy, typeaccount, removeAllergy } =
    useAllergy();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="allergy-container">
      {allergyObjList.length > 0 ? (
        <AllergyCenter
          allergyObjList={allergyObjList}
          openModal={() => setIsOpen(true)}
          typeaccount={typeaccount}
          removeAllergy={removeAllergy}
        />
      ) : (
        <AllergyEmpty
          allergyObjList={allergyObjList}
          addAllergy={addAllergy}
          typeaccount={typeaccount}
          openModal={() => setIsOpen(true)}
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={"Allergy Add"}>
        <AllergyModal
          isDestroy={!isOpen}
          addAllergy={addAllergy}
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default AllergyContainer;
