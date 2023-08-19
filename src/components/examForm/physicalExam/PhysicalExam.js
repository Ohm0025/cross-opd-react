import "./PhysicalExam.css";
import Modal from "../../../components/Modal";
import { useState } from "react";
import PhysicalExamModal from "./PhysicalExamModal";
import { useExam } from "../../../contexts/ExamContext";

function PhysicalExam() {
  const [isOpen, setIsOpen] = useState(false);

  const { recordObj, updateRecordObj } = useExam();
  return (
    <div className="pe-box">
      <label htmlFor="pe_text" className="form-label">
        Physical Examination
      </label>
      <textarea
        value={recordObj.pe.examManual}
        placeholder="add patient's physical exam by manual or template or take picture"
        className="form-control"
        name="pe_text"
        id="pe_text"
        rows="3"
        onChange={(e) => updateRecordObj("pe", { examManual: e.target.value })}
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
        <PhysicalExamModal
          updateRecord={(updatedValue) => {
            updateRecordObj("pe", { examTemplate: updatedValue });
            setIsOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default PhysicalExam;
