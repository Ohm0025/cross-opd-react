import "./FollowUp.css";
import Modal from "../../Modal";
import FollowUpModal from "./followUpModal/FollowUpModal";
import { useState } from "react";
import FollowUpItem from "./followUpItem/FollowUpItem";

function FollowUp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fu-box">
      <div className="fu-action">
        <label htmlFor="fu_btn">Follow Up</label>
        <button
          className="btn btn-secondary"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Add Follow Up
        </button>
      </div>
      <div className="fu-list">
        {false ? (
          <ul className="list-group">
            <FollowUpItem />
          </ul>
        ) : (
          <span className="fu-list-empty">ไม่มีการนัดตรวจติดตามอาการ</span>
        )}
      </div>
      <Modal title="FollowUp" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <FollowUpModal />
      </Modal>
    </div>
  );
}

export default FollowUp;
