import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnderlyBody from "../../features/underlying/underlyBody/UnderlyBody";
import UnderlyNav from "../../features/underlying/underlyNav/UnderlyNav";
import "./UnderlyPage.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import UnderlyModal from "./underlyModal/UnderlyModal";
import { useExam } from "../../contexts/ExamContext";
import * as underlyService from "../../api/underlyApi";

function UnderlyPage({ patientId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectUd, setSelectUd] = useState({});
  const { patientObj, addUnderly, editUnderly, removeUnderly } =
    useExam() || {};
  const [listOfUnderly, setListOfUnderly] = useState([]);

  useEffect(() => {
    const fetchListUd = async () => {
      const res = await underlyService.fetchUnderly(patientId);
      setListOfUnderly((prev) => {
        return [...JSON.parse(res.data?.listOfUnderly?.underlying || "[]")];
      });
    };
    patientId && fetchListUd();
  }, [patientId]);

  return (
    <>
      {patientId ? (
        <div className="underlypage">
          {listOfUnderly?.length > 0 ? (
            <div className="underlypage-container">
              <UnderlyNav
                listUnderly={listOfUnderly}
                handleSelectUd={(item) =>
                  setSelectUd((prev) => {
                    return { ...prev, ...item };
                  })
                }
              />
              <UnderlyBody selectUd={selectUd} />
            </div>
          ) : (
            <h2 className="underlypage-empty">ไม่มีประวัติโรคประจำตัวมาก่อน</h2>
          )}
        </div>
      ) : (
        <div className="underlypage">
          {patientObj?.underlying.length > 0 ? (
            <div className="underlypage-container">
              <UnderlyNav
                patientId={patientId}
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
            <UnderlyModal
              addUnderly={addUnderly}
              closeModal={() => setIsOpen(false)}
            />
          </Modal>
        </div>
      )}
    </>
  );
}
export default UnderlyPage;
