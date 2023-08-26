import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LabItem.css";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../../../Modal";
import LabModal from "../labModal/LabModal";
import { useLab } from "../../../../contexts/LabContext";

function LabItem({ item }) {
  const [isEdit, setIsEdit] = useState(false);
  const { deletedLab, editLab } = useLab();
  return (
    <>
      <div className="lab-list-item">
        <div className="lab-list-item-name">{item.name}</div>
        <div className="lab-list-item-status">
          <small>status : {item.status}</small>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={() => setIsEdit(true)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button className="btn" onClick={() => deletedLab(item)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <Modal
        title="Laboratory"
        isOpen={isEdit}
        onClose={() => setIsEdit(false)}
      >
        <LabModal
          onClose={() => setIsEdit(false)}
          labItem={item}
          labname={item.name}
          labstatus={item.status}
          labdes={item.des}
          labimg={item.img}
          editLab={editLab}
        />
      </Modal>
    </>
  );
}

export default LabItem;
