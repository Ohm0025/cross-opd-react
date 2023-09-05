import "./Laboratory.css";
import LabItem from "./labItem/LabItem";

import Modal from "../../../components/Modal";

import { useState } from "react";
import LabModal from "./labModal/LabModal";

import { useLab } from "../../../contexts/LabContext";

function Laboratory() {
  const { listLab } = useLab();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lab-box">
      <label className="form-label">Laboratory</label>
      <button onClick={() => setIsOpen(true)}>+Add Lab</button>

      {listLab?.length > 0 ? (
        <div className="lab-list">
          {listLab.map((item, index) => {
            return <LabItem key={"labitem" + index} item={item} />;
          })}
        </div>
      ) : (
        <span className="lab-list-empty">ไม่มีรายการสั่ง Lab</span>
      )}
      <Modal
        title="Laboratory"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <LabModal onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}

export default Laboratory;
