import "./TreatmentModal.css";
import { useEffect, useRef, useState } from "react";
import TreatmentItemList from "./treatmentItemList/TreatmentItemList";

function TreatmentModal({
  txList,
  handleSubmitTx,
  diagTitle,
  closeModal,
  updateTxObj,
}) {
  const dropdownEl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const [filterType, setFilterType] = useState("all");

  const [typeInput, setTypeInput] = useState("drug");

  const [txobj, setTxObj] = useState({
    title: "",
    detail: "",
    type: "drug",
    amount: "",
  });

  const [txobj2, setTxObj2] = useState({
    title: "",
    detail: "",
    type: "proceduce",
  });

  const filterTxList =
    filterType === "all"
      ? txList
      : txList?.filter((item) => item.type === filterType);

  const handleSubmitButton = () => {
    if (typeInput === "drug") {
      updateTxObj(diagTitle, {
        title: txobj.title,
        type: "drug",
        detail: `${txobj.detail} # ${txobj.amount}`,
      });
    } else {
      updateTxObj(diagTitle, {
        title: txobj2.title,
        type: "proceduce",
        detail: txobj2.detail,
      });
    }

    setTxObj({
      title: "",
      detail: "",
      type: "drug",
      amount: "",
    });
    setTxObj2({
      title: "",
      detail: "",
      type: "proceduce",
    });
    closeModal();
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <div className="tx-modal">
      <div className="tx-modal-type">
        <span>Filter Treatment Type</span>
        <div className="dropdown" ref={dropdownEl}>
          <button
            className="btn dropdown-toggle"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}>
            {filterType}
          </button>
          <ul className={`dropdown-menu ${isOpen ? "d-block" : ""}`}>
            <li onClick={() => setFilterType("drug")}>drug</li>
            <li onClick={() => setFilterType("proceduce")}>proceduce</li>
            <li onClick={() => setFilterType("all")}>all</li>
          </ul>
        </div>
      </div>

      {filterTxList?.length > 0 ? (
        filterTxList?.map((item, index) => (
          <TreatmentItemList item={item} key={"treatmentitemlist" + index} />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>
          {filterType === "all"
            ? `no any treatment for this diag`
            : `no ${filterType} for this diag`}
        </h2>
      )}

      <div className="tx-drug-input">
        <select
          name=""
          id="tx-type"
          className="form-select w-25"
          value={typeInput}
          onChange={(e) => setTypeInput(e.target.value)}>
          <option value="drug">Drug</option>
          <option value="proceduce">Proceduce</option>
        </select>
        {typeInput === "drug" ? (
          <>
            <div className="input-group">
              <input
                type="text"
                placeholder="drug name"
                className="form-control w-75"
                value={txobj.title}
                onChange={(e) =>
                  setTxObj((prev) => {
                    return { ...prev, title: e.target.value };
                  })
                }
              />
              <input
                type="number"
                placeholder="amount"
                className="form-control w-25"
                value={txobj.amount}
                onChange={(e) =>
                  setTxObj((prev) => {
                    return { ...prev, amount: e.target.value };
                  })
                }
              />
            </div>
            <input
              type="text"
              placeholder="detail"
              className="form-control d-block"
              value={txobj.detail}
              onChange={(e) =>
                setTxObj((prev) => {
                  return { ...prev, detail: e.target.value };
                })
              }
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="proceduce name"
              className="form-control d-block"
              value={txobj2.title}
              onChange={(e) =>
                setTxObj2((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
            <input
              type="text"
              placeholder="detail"
              className="form-control d-block"
              value={txobj2.detail}
              onChange={(e) =>
                setTxObj2((prev) => {
                  return { ...prev, detail: e.target.value };
                })
              }
            />
          </>
        )}

        <div>
          <button className="btn" onClick={handleSubmitButton}>
            Add
          </button>
          <button className="btn">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default TreatmentModal;
