import "./PhysicalExam.css";
import Modal from "../../../components/Modal";
import { useState } from "react";
import PhysicalExamModal from "./PhysicalExamModal";
import { useExam } from "../../../contexts/ExamContext";

import ModalPic from "./modalPic/ModalPic";

function PhysicalExam() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhoto, setIsPhoto] = useState(false); //open add photo modal

  const { recordObj, updateRecordObj } = useExam();

  return (
    <div className="pe-box">
      <label htmlFor="pe_text" className="form-label">
        Physical Examination
      </label>
      <div className="pe-show-text ">
        <textarea
          value={recordObj.pe.examManual}
          placeholder="add patient's physical exam by manual or template or take picture"
          className="form-control"
          name="pe_text"
          id="pe_text"
          rows="3"
          onChange={(e) => updateRecordObj("pe", "examManual", e.target.value)}
        ></textarea>
        <hr style={{ width: "80%", margin: "auto" }} />
        <textarea
          readOnly
          name=""
          id=""
          rows="3"
          className="form-control"
          value={recordObj.pe.examTemplate}
        ></textarea>
      </div>
      <div className="pe-button">
        <button onClick={() => setIsOpen(true)}>template</button>
        <button onClick={() => setIsPhoto(true)}>image</button>
      </div>
      <Modal
        title="Physical Examination"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <PhysicalExamModal
          updateRecord={(updatedValue) => {
            updateRecordObj("pe", "examTemplate", updatedValue);
            setIsOpen(false);
          }}
        />
      </Modal>
      <Modal
        title={"Physical Exam : Photo"}
        isOpen={isPhoto}
        onClose={() => setIsPhoto(false)}
      >
        <ModalPic
          updateRecord={(updatedValue) => {
            updateRecordObj("pe", "examImg", updatedValue);
          }}
          initialList={recordObj.pe.examImg}
        />
      </Modal>
    </div>
  );
}

export default PhysicalExam;
