import "./FollowUpModal.css";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  caldiffDate,
  formatCreatedAt,
} from "../../../../utility/formatDataTime";

function FollowUpModal({ item, closeModal, updateFollowUp }) {
  // const defaultDate = item.fuDate ? new Date(item.fuDate) : "";
  // const [date, setDate] = useState(currentDate);
  const currentDate = new Date();
  const [newFollowObj, setNewFollowObj] = useState({
    fuHos: "",
    fuDetail: item.fuDetail || "",
    fuOPD: item.fuOPD || "",
    fuDate: item.fuDate || "",
  });

  useEffect(() => {
    setNewFollowObj((prev) => {
      return {
        fuHos: item.fuHos || "",
        fuDetail: item.fuDetail || "",
        fuOPD: item.fuOPD || "",
        fuDate: item.fuDate || "",
      };
    });
  }, [item]);

  const handleChangeFollowObj = (e) => {
    setNewFollowObj((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleChangeDate = (e) => {
    setNewFollowObj((prev) => {
      return { ...prev, fuDate: e };
    });
  };

  return (
    <div className="fu-modal">
      <div className="fu-modal-top">
        <div className="calendar-section">
          <Calendar
            value={newFollowObj.fuDate || currentDate}
            onChange={handleChangeDate}
            minDate={currentDate}
          />
          <div className="date-section">
            <span>{formatCreatedAt(currentDate)}</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <span>{formatCreatedAt(newFollowObj.fuDate) || ""}</span>
            <span>
              {caldiffDate(currentDate, new Date(newFollowObj.fuDate)) || ""}{" "}
              {" วัน"}
            </span>
          </div>
        </div>
        <div className="location-section">
          <div className="location-hospital">
            <label htmlFor="location-hos-text">Hospital Name</label>
            <input
              type="text"
              className="form-control"
              value={newFollowObj.fuHos}
              name="fuHos"
              onChange={handleChangeFollowObj}
            />
          </div>
          <div className="location-department">
            <label htmlFor="location-depart-text">Department / OPD</label>
            <input
              type="text"
              className="form-control"
              value={newFollowObj.fuOPD}
              name="fuOPD"
              onChange={handleChangeFollowObj}
            />
          </div>
          <div className="location-detail">
            <textarea
              placeholder="add detail about follow up"
              id=""
              cols="10"
              rows="3"
              className="form-control"
              value={newFollowObj.fuDetail}
              name="fuDetail"
              onChange={handleChangeFollowObj}></textarea>
          </div>
          <div className="location-button">
            <button
              className="btn btn-success"
              onClick={() => {
                closeModal();
                updateFollowUp(newFollowObj);
              }}>
              ENTER
            </button>
            <button className="btn btn-danger" onClick={() => {}}>
              CLEAR
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
