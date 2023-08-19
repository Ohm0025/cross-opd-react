import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Diagnosis.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DiagItem from "./diagItem/DiagItem";
import { useState } from "react";
import DiagEdit from "./diagEdit/DiagEdit";

function Diagnosis() {
  const [diagTitle, setDiagTitle] = useState("");
  const [diagList, setDiagList] = useState([]);
  const [difDiag, setDifDiag] = useState("");

  const [isEdit, setIsEdit] = useState("");

  const addDiag = () => {
    setDiagList((prev) => {
      return [...prev, diagTitle];
    });
    setDiagTitle("");
  };

  const removeDiag = (deletedDiag) => {
    setDiagList((prev) => {
      return prev.filter((item) => item !== deletedDiag);
    });
  };

  const editDiag = (selectedDiag) => {
    setIsEdit(selectedDiag);
  };
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
          className="form-control"
          id="diag_text"
          placeholder="put diagnosis for this case"
        />
        <button className="btn btn-secondary" onClick={addDiag}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {diagList.length > 0 ? (
        <>
          <div className="diag-list">
            {diagList.map((item, index) => {
              return isEdit === item ? (
                <DiagEdit
                  item={item}
                  updateDiag={(newItem) => {
                    setDiagList((prev) => {
                      return prev.map((item2) =>
                        item2 === item ? newItem : item2
                      );
                    });
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
                  editDiag={editDiag}
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
            value={difDiag}
            onChange={(e) => setDifDiag(e.target.value)}
          ></textarea>
        </>
      ) : (
        <span className="diag-list-empty">- ยังไม่มีรายการวินิจฉัย -</span>
      )}
    </div>
  );
}

export default Diagnosis;
