import "./TreatmentItem.css";
import TreatmentModal from "../treatmentModal/TreatmentModal";
import Modal from "../../../Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function TreatmentItem({
  diagTitle,
  txList,
  handleSubmitTx,
  updateTxObj,
  editTxObj,
  deleteTxObj,
  deleteTx,
  order,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  console.log(txList);
  return (
    <>
      <div className="list-group-item tx-list-item">
        <span>{order + ". " + diagTitle}</span>
        <button
          className="btn btn-secondary tx-btn"
          onClick={() => setIsOpen(true)}>
          {txList?.length > 0 ? "Edit Treatment" : "Add Treatment"}
        </button>
      </div>
      {isDetail ? (
        <>
          <div className="list-group-item tx-list-subItem">
            {txList?.map((item, index) => {
              return (
                <div className="detail-tx" key={"listdetaildrug" + index}>
                  - {item.title} {item.detail}
                </div>
              );
            })}
          </div>
          <div className="list-group-item tx-list-item">
            <button
              className="tx-list-button "
              onClick={() => setIsDetail(false)}>
              hide detail drug <FontAwesomeIcon icon={faCaretUp} />
            </button>
          </div>
        </>
      ) : (
        <>
          {txList?.length > 0 && (
            <>
              {!isDetail ? (
                <div className="list-group-item tx-list-item isShow">
                  <button
                    className="tx-list-button "
                    onClick={() => setIsDetail(true)}>
                    show detail drug
                    <span className="badge rounded-pill bg-danger">
                      {txList.length}
                    </span>
                  </button>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
      <Modal
        title={`Treatment for ${diagTitle}`}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <TreatmentModal
          diagTitle={diagTitle}
          txList={txList}
          handleSubmitTx={handleSubmitTx}
          closeModal={() => setIsOpen(false)}
          updateTxObj={updateTxObj}
          editTxObj={editTxObj}
          deleteTxObj={deleteTxObj}
          deleteTx={deleteTx}
        />
      </Modal>
    </>
  );
}

export default TreatmentItem;
