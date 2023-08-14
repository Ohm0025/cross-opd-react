import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Diagnosis.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DiagItem from "./diagItem/DiagItem";

function Diagnosis() {
  return (
    <div className="diag-box">
      <label htmlFor="diag_text" className="form-label">
        Diagnosis / Impression / Problem lists
      </label>
      <div className="input-group diag-input">
        <input
          type="text"
          className="form-control"
          id="diag_text"
          placeholder="put diagnosis for this case"
        />
        <button className="btn btn-secondary">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {false ? (
        <>
          <div className="diag-list">
            <ul className="list-group">
              <DiagItem />
            </ul>
          </div>
          <textarea
            placeholder="for more detail or diff diag"
            className="form-control"
            name=""
            id=""
            cols="30"
            rows="2"
          ></textarea>
        </>
      ) : (
        <span className="diag-list-empty">ยังไม่มีรายการวินิจฉัย</span>
      )}
    </div>
  );
}

export default Diagnosis;
