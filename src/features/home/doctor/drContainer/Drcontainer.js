import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./DrContainer.css";
import { useCaseDoctor } from "../../../../contexts/CaseDoctorContext";
import { useState } from "react";

function DrContainer() {
  const { getCard, unfinishList } = useCaseDoctor();
  const [patientId, setPatientId] = useState("");
  return (
    <div>
      <div className="search-container">
        <div className="time-box">
          <span>
            09:00 <small>AM</small>
          </span>
          <span>27 Jul, 2022</span>
        </div>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            placeholder="insert patient id"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
          <button className="search-button" onClick={() => getCard(+patientId)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="unfinish-table">
          <tr>Unfinish Case</tr>
          {unfinishList.map((item, index) => {
            return <tr key={index}>{item.id}</tr>;
          })}
          <tr>
            <span>page</span>
            <span>{"< 1 >"}</span>
          </tr>
        </table>
        <table className="unfinish-table">
          <tr>Finish Case</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>
            <span>page</span>
            <span>{"< 1 >"}</span>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DrContainer;
