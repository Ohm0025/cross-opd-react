import "./Treatment.css";
import TreatmentModal from "./treatmentModal/TreatmentModal";
import Modal from "../../Modal";
import { useState } from "react";
import TreatmentItem from "./treatmentItem/TreatmentItem";

function Treatment() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="tx-box">
      <label htmlFor="tx_btn">Treatment</label>

      <div className="tx-action">
        {false ? (
          <ul className="list-group">
            <TreatmentItem changeModal={() => setIsOpen((prev) => !prev)} />
          </ul>
        ) : (
          <span className="tx-list-empty">
            - ยังไม่มีรายการรักษา โปรดเพิ่มรายการวินิจฉัยก่อน -
          </span>
        )}
      </div>
      <Modal title="Treatment" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <TreatmentModal />
      </Modal>
    </div>
  );
}

export default Treatment;
