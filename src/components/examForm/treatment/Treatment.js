import "./Treatment.css";
import TreatmentModal from "./treatmentModal/TreatmentModal";
import Modal from "../../Modal";
import { useState } from "react";

function Treatment() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="tx-box">
      <label htmlFor="tx_btn">Treatment</label>
      <div className="tx-action">
        <ul className="list-group">
          <li className="list-group-item tx-list-item">
            <span>diag01</span>
            <button
              className="btn btn-secondary tx-btn"
              onClick={() => setIsOpen(true)}
            >
              Add Treatment
            </button>
          </li>
          <li className="list-group-item tx-list-item">
            <span>diag02</span>
            <div className="btn-group tx-btn-group">
              <button className="btn btn-secondary">edit</button>
              <button className="btn btn-secondary">delete</button>
            </div>
          </li>
        </ul>
      </div>
      <Modal title="Treatment" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <TreatmentModal />
      </Modal>
    </div>
  );
}

export default Treatment;
