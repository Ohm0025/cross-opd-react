import "./FollowUp.css";
import Modal from "../../Modal";
import FollowUpModal from "./followUpModal/FollowUpModal";
import { useState } from "react";

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
        <ul className="list-group">
          <li className="list-group-item fu-list-item">
            <span>15/08/66</span>
            <div className="btn-group">
              <button className="btn btn-secondary">edit</button>
              <button className="btn btn-secondary">delete</button>
            </div>
          </li>
        </ul>
      </div>
      <Modal title="FollowUp" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <FollowUpModal />
      </Modal>
    </div>
  );
}

export default FollowUp;
