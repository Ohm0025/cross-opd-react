import "./TreatmentModal.css";
import { useEffect, useRef, useState } from "react";
import validateTreatment from "../../../../utility/validate/validateTreatment";
import TreatmentItemList from "./treatmentItemList/TreatmentItemList";

function TreatmentModal({
  txList,
  handleSubmitTx,
  diagTitle,
  updateTxObj,
  deleteTx,
  settingCallBack,
  editTxObj,
}) {
  const dropdownEl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const [isEdit, setIsEdit] = useState("");

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

  const [errObj, setErrObj] = useState({
    drug: "",
    proceduce: "",
  });

  const handleSubmitButton = () => {
    if (typeInput === "drug") {
      validateTreatment(
        txobj,
        typeInput,
        (errText) =>
          setErrObj((prev) => {
            return { ...prev, drug: errText };
          }),
        () => {
          setTxObj({
            title: "",
            detail: "",
            type: "drug",
            amount: "",
          });
          return true;
        }
      ) &&
        updateTxObj(diagTitle, {
          title: txobj.title,
          type: "drug",
          detail: `${txobj.detail} # ${txobj.amount}`,
        });
    } else {
      validateTreatment(
        txobj2,
        typeInput,
        (errText) =>
          setErrObj((prev) => {
            return { ...prev, proceduce: errText };
          }),
        () => {
          setTxObj2({
            title: "",
            detail: "",
            type: "proceduce",
          });
          return true;
        }
      ) &&
        updateTxObj(diagTitle, {
          title: txobj2.title,
          type: "proceduce",
          detail: txobj2.detail,
        });
    }
  };

  useEffect(() => {
    settingCallBack(() => {
      setErrObj((prev) => {
        return { drug: "", proceduce: "" };
      });
      if (isEdit >= 0) {
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
        setIsEdit("");
      }
    });
    const handleClickOutSide = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, [settingCallBack]);

  useEffect(() => {
    setErrObj((prev) => {
      return { drug: "", proceduce: "" };
    });
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
  }, [typeInput]);

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
          <TreatmentItemList
            item={item}
            key={"treatmentitemlist" + index}
            deleteTx={() => deleteTx(diagTitle, txList, item)}
            isEdit={isEdit === index}
            changeEdit={(selectItem) => {
              setIsEdit((prev) => {
                return index;
              });

              if (selectItem?.type === "drug") {
                setTxObj((prev) => {
                  return {
                    title: selectItem?.title,
                    detail: selectItem?.detail?.split("#")[0]?.trim(),
                    type: "drug",
                    amount: selectItem?.detail?.split("#")[1]?.trim(),
                  };
                });
              }
            }}
          />
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
                className={`${
                  errObj.drug?.endsWith("title is required.") && "isError"
                } form-control w-75`}
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
                className={`${
                  errObj.drug?.endsWith("amount is required.") && "isError"
                } form-control w-25`}
                value={txobj.amount}
                onChange={(e) =>
                  setTxObj((prev) => {
                    return { ...prev, amount: e.target.value };
                  })
                }
              />
            </div>
            {errObj.drug && (
              <small className="text-danger">{errObj.drug}</small>
            )}
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
              className={`${
                errObj.proceduce?.endsWith("title is required.") && "isError"
              } form-control d-block`}
              value={txobj2.title}
              onChange={(e) =>
                setTxObj2((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
            {errObj.proceduce && (
              <small className="text-danger">{errObj.proceduce}</small>
            )}
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
          <button
            className="btn"
            onClick={
              isEdit >= 0 && isEdit !== ""
                ? () => {
                    editTxObj(isEdit, {
                      title: txobj.title,
                      type: "drug",
                      detail: `${txobj.detail} # ${txobj.amount}`,
                    });
                    setIsEdit("");
                    setTxObj({
                      title: "",
                      detail: "",
                      type: "drug",
                      amount: "",
                    });
                  }
                : handleSubmitButton
            }>
            {isEdit >= 0 && isEdit !== "" ? "Edit" : "Add"}
          </button>
          <button className="btn">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default TreatmentModal;
