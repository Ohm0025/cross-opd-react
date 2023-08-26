import "./FollowUpModal.css";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  caldiffDate,
  formatCreatedAt,
} from "../../../../utility/formatDataTime";

function FollowUpModal({ item, updateFu, closeModal }) {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  return (
    <div className="fu-modal">
      <div className="fu-modal-top">
        <div className="calendar-section">
          <Calendar value={date} onChange={setDate} minDate={currentDate} />
          <div className="date-section">
            <span>{formatCreatedAt(currentDate)}</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <span>{formatCreatedAt(date)}</span>
            <span>{caldiffDate(date, currentDate) + " วัน"}</span>
          </div>
        </div>
        <div className="location-section">
          <div className="location-hospital">
            <label htmlFor="location-hos-text">Hospital Name</label>
            <input
              type="text"
              className="form-control"
              value={item.fuHos}
              onChange={(e) => updateFu("fuHos", e.target.value)}
            />
          </div>
          <div className="location-department">
            <label htmlFor="location-depart-text">Department / OPD</label>
            <input
              type="text"
              className="form-control"
              value={item.fuOPD}
              onChange={(e) => updateFu("fuOPD", e.target.value)}
            />
          </div>
          <div className="location-detail">
            <textarea
              placeholder="add detail about follow up"
              name=""
              id=""
              cols="10"
              rows="3"
              className="form-control"
              value={item.fuDetail}
              onChange={(e) => updateFu("fuDetail", e.target.value)}
            ></textarea>
          </div>
          <div className="location-button">
            <button
              className="btn btn-danger"
              onClick={() => {
                closeModal();
                updateFu("fuDate", date);
              }}
            >
              ENTER
            </button>
          </div>
        </div>
      </div>
      {/* <div className="fu-modal-buttom">
        <textarea
          className="form-control"
          name=""
          id=""
          cols="10"
          rows="10"
        ></textarea>
      </div> */}
    </div>
  );
}

export default FollowUpModal;
