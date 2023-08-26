import "./FollowUp.css";
import Modal from "../../Modal";
import FollowUpModal from "./followUpModal/FollowUpModal";
import { useState } from "react";
import FollowUpItem from "./followUpItem/FollowUpItem";
import { useExam } from "../../../contexts/ExamContext";

function FollowUp() {
  const [isOpen, setIsOpen] = useState(false);
  const { recordObj, updateRecordObj } = useExam();
  return (
    <div className="fu-box">
      <div className="fu-action">
        <label htmlFor="fu_btn">Follow Up</label>
        <button
          className="btn btn-secondary"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {recordObj.fu.fuDate ? "Edit Follow Up" : "Add Follow Up"}
        </button>
      </div>
      <div className="fu-list">
        {false ? (
          <FollowUpItem />
        ) : (
          <>
            {recordObj.fu.fuDate ? (
              <FollowUpItem item={recordObj.fu} />
            ) : (
              <span className="fu-list-empty">
                - ไม่มีการนัดตรวจติดตามอาการ -
              </span>
            )}
          </>
        )}
      </div>
      <Modal title="FollowUp" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <FollowUpModal
          item={recordObj.fu}
          updateFu={(fuSection, newValue) =>
            updateRecordObj("fu", fuSection, newValue)
          }
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default FollowUp;
