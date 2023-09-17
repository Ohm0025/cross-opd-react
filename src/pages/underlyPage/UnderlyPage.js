import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnderlyBody from "../../features/underlying/underlyBody/UnderlyBody";
import UnderlyNav from "../../features/underlying/underlyNav/UnderlyNav";
import "./UnderlyPage.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import { useState } from "react";
import UnderlyModal from "./underlyModal/UnderlyModal";
import { useExam } from "../../contexts/ExamContext";

function UnderlyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectUd, setSelectUd] = useState({});
  const { patientObj, addUnderly, editUnderly, removeUnderly } = useExam();

  return (
    <div className="underlypage">
      {patientObj?.underlying.length > 0 ? (
        <div className="underlypage-container">
          <UnderlyNav
            listUnderly={patientObj?.underlying}
            addUnderly={addUnderly}
            editUnderly={editUnderly}
            removeUnderly={removeUnderly}
            handleSelectUd={(item) =>
              setSelectUd((prev) => {
                return { ...prev, ...item };
              })
            }
          />
          <UnderlyBody selectUd={selectUd} />
        </div>
      ) : (
        <div className="underly-empty">
          {"No Underlying Disease"} <br />
          {"Click + to add new underlying deasease"}
          <div className="underly-empty-action">
            <button onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      )}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UnderlyModal addUnderly={addUnderly} />
      </Modal>
    </div>
  );
}
export default UnderlyPage;
