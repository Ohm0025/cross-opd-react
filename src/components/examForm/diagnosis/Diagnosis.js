import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Diagnosis.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DiagItem from "./diagItem/DiagItem";
import { useState } from "react";
import DiagEdit from "./diagEdit/DiagEdit";
import { useDiag } from "../../../contexts/DiagContext";

function Diagnosis() {
  const {
    diagList,
    addDiagList,
    editDiagList,
    removeDiag,
    detail,
    changeDDX,
    errMessage,
  } = useDiag();

  const [diagTitle, setDiagTitle] = useState("");

  const [isEdit, setIsEdit] = useState("");

  return (
    <div className="diag-box">
      <label htmlFor="diag_text" className="form-label">
        Diagnosis / Impression / Problem lists
      </label>
      <div className="input-group diag-input">
        <input
          type="text"
          value={diagTitle}
          onChange={(e) => setDiagTitle(e.target.value)}
          className={`${errMessage && "isError"} form-control`}
          id="diag_text"
          placeholder="diagnosis"
        />
        <button
          className="btn btn-secondary"
          onClick={() => {
            addDiagList(diagTitle);
            setDiagTitle("");
          }}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {errMessage && <small className="text-danger">{errMessage}</small>}
      {diagList.length > 0 ? (
        <>
          <div className="diag-list">
            {diagList.map((item, index) => {
              return isEdit === item ? (
                <DiagEdit
                  key={"diagedit" + index}
                  item={item}
                  updateDiag={(updateDiag) => {
                    editDiagList(item, updateDiag);
                    setIsEdit("");
                  }}
                  closeEdit={() => setIsEdit("")}
                />
              ) : (
                <DiagItem
                  key={"diagitem" + index}
                  item={item}
                  number={index}
                  removeDiag={removeDiag}
                  openEdit={(diagname) => setIsEdit(diagname)}
                />
              );
            })}
          </div>
          <textarea
            placeholder="for more detail or diff diag"
            className="form-control"
            name=""
            id=""
            cols="30"
            rows="2"
            value={detail || ""}
            onChange={(e) => changeDDX(e.target.value)}></textarea>
        </>
      ) : (
        <span className="diag-list-empty">- ยังไม่มีรายการวินิจฉัย -</span>
      )}
    </div>
  );
}

export default Diagnosis;
