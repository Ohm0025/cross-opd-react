import "./PhysicalExam.css";
import Modal from "../../../components/Modal";
import { useState } from "react";
import PhysicalExamModal from "./PhysicalExamModal";

function PhysicalExam() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pe-box">
      <label for="pe_text" className="form-label">
        Physical Examination
      </label>
      <textarea
        className="form-control"
        name="pe_text"
        id="pe_text"
        rows="3"
      ></textarea>
      <div className="pe-button">
        <button onClick={() => setIsOpen(true)}>template</button>
        <button>image</button>
      </div>
      <Modal
        title="Physical Examination"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <PhysicalExamModal />
      </Modal>
    </div>
  );
}

export default PhysicalExam;
