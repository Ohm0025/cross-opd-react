import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Diagnosis.css";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <div className="diag-list">
        <ul className="list-group">
          <li className="list-group-item diag-list-item">
            <span>diag01</span>
            <button className="">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
          <li className="list-group-item">diag2</li>
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
    </div>
  );
}

export default Diagnosis;
