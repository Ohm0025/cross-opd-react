import "./TreatmentItem.css";
import TreatmentModal from "../treatmentModal/TreatmentModal";
import Modal from "../../../Modal";
import { useState } from "react";

function TreatmentItem({ diagTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li className="list-group-item tx-list-item">
        <span>{diagTitle}</span>
        <button
          className="btn btn-secondary tx-btn"
          onClick={() => setIsOpen(true)}
        >
          Add Treatment
        </button>
      </li>
      <Modal
        title={`Treatment for ${diagTitle}`}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TreatmentModal diagTitle={diagTitle} />
      </Modal>
    </>
  );
}

export default TreatmentItem;
