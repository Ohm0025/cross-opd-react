import "./FollowUp.css";
import Modal from "../../Modal";
import FollowUpModal from "./followUpModal/FollowUpModal";
import { useState } from "react";
import FollowUpItem from "./followUpItem/FollowUpItem";
import { useExam } from "../../../contexts/ExamContext";

function FollowUp({ fromUd }) {
  const [isOpen, setIsOpen] = useState(false);
  const { recordObj, updateFollowUp } = useExam();
  return (
    <div className="fu-box">
      <div className={!fromUd ? "fu-action" : "fu-action-ud"}>
        <label htmlFor="fu_btn">{!fromUd && "FollowUp"}</label>
        <button
          className="btn btn-secondary"
          onClick={() => setIsOpen((prev) => !prev)}>
          {recordObj.fu?.fuDate ? "Edit Follow Up" : "Add Follow Up"}
        </button>
      </div>
      <div className="fu-list">
        {recordObj.fu?.fuDate ? (
          <FollowUpItem item={recordObj.fu} />
        ) : (
          <span className="fu-list-empty">- ไม่มีการนัดตรวจติดตามอาการ -</span>
        )}
      </div>
      <Modal title="FollowUp" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <FollowUpModal
          item={{ ...recordObj.fu }}
          location={recordObj.location}
          updateFollowUp={updateFollowUp}
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default FollowUp;
