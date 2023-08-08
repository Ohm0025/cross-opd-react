import "./FollowUpModal.css";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { formatCreatedAt } from "../../../../utility/formatDataTime";

function FollowUpModal() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  return (
    <div className="fu-modal">
      <div className="fu-modal-top">
        <div className="calendar-section">
          <Calendar value={date} onChange={setDate} />
          <div className="date-section">
            <span>{formatCreatedAt(currentDate)}</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <span>{formatCreatedAt(date)}</span>
            <span>{date.getDate() - currentDate.getDate() + " วัน"}</span>
          </div>
        </div>
        <div className="location-section">
          <div className="location-hospital">
            <label htmlFor="location-hos-text">Hospital Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="location-department">
            <label htmlFor="location-depart-text">Department / OPD</label>
            <input type="text" className="form-control" />
          </div>
          <div className="location-detail">
            <textarea
              placeholder="add detail about follow up"
              name=""
              id=""
              cols="10"
              rows="3"
              className="form-control"
            ></textarea>
          </div>
          <div className="location-button">
            <button className="btn btn-danger">ENTER</button>
          </div>
        </div>
      </div>
      <div className="fu-modal-buttom">
        <textarea
          className="form-control"
          name=""
          id=""
          cols="10"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}

export default FollowUpModal;
