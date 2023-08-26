import { useEffect, useState, useRef } from "react";
import "./TreatmentModal.css";
import TxDrugItem from "./txDrugItem/TxDrugItem";
import TxProcedureItem from "./txProcedureItem/TxProcedureItem";
import { useExam } from "../../../../contexts/ExamContext";

function TreatmentModal({ diagTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [txType, setTxType] = useState("drug");

  const [title, setTitle] = useState("");
  const [use, setUse] = useState("");
  const [amount, setAmount] = useState("");

  const [proceduce, setProceduce] = useState("");
  const [procedist, setProceist] = useState("");

  const {
    detailDrug,
    detailProcedure,
    updateDetailDrug,
    updateDetailProceduce,
  } = useExam();

  const dropdownEl = useRef();

  const changeSelect = (selectedValue) => {
    setTxType(selectedValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  });

  return (
    <div className="tx-modal">
      <div className="tx-modal-type">
        <span>Select Treatment Type</span>
        <div className="dropdown" ref={dropdownEl}>
          <button
            className="btn dropdown-toggle"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {txType}
          </button>
          <ul className={`dropdown-menu ${isOpen ? "d-block" : ""}`}>
            <li onClick={() => changeSelect("drug")}>drug</li>
            <li onClick={() => changeSelect("proceduce")}>procrduce</li>
          </ul>
        </div>
      </div>

      {txType === "drug" ? (
        <div className="tx-drug-input">
          {detailDrug.length > 0 ? (
            <>
              {detailDrug.map((item) => (
                <TxDrugItem item={item} />
              ))}
            </>
          ) : (
            "- ไม่มีรายการสั่งยา -"
          )}
          <div className="input-group">
            <input
              type="text"
              placeholder="drug name"
              className="form-control w-75"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="amount"
              className="form-control w-25"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="drug using"
            className="form-control d-block"
            value={use}
            onChange={(e) => setUse(e.target.value)}
          />

          <button
            className="btn"
            onClick={() => {
              updateDetailDrug({ title, use, amount, diagTitle });
              setTitle("");
              setAmount("");
              setUse("");
            }}
          >
            add
          </button>
        </div>
      ) : (
        <>
          <div className="tx-drug-input">
            {detailProcedure.length > 0 ? (
              <>
                {detailProcedure.map((item) => (
                  <TxProcedureItem item={item} />
                ))}
              </>
            ) : (
              "- ไม่มีรายการหัตการ -"
            )}
            <input
              type="text"
              placeholder="proceduce name"
              className="form-control d-block"
              value={proceduce}
              onChange={(e) => setProceduce(e.target.value)}
            />
            <input
              type="text"
              placeholder="proceduce detail"
              className="form-control d-block"
              value={procedist}
              onChange={(e) => setProceist(e.target.value)}
            />
            <button
              className="btn"
              onClick={() => {
                updateDetailProceduce({ proceduce, procedist, diagTitle });
                setProceduce("");
                setProceist("");
              }}
            >
              add
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TreatmentModal;
