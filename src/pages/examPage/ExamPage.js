import IconName from "../../components/iconName/IconName";
import "./ExamPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function ExamPage() {
  return (
    <div>
      <div className="exam-header">
        <div className="header-left">
          <IconName char={"M"} radius="45px" />
          <div className="pt-tag">
            Mr.Mashalo Salamanga Age 23 yr<small>Id : 23113</small>
          </div>
          <button className="pt-button">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        <div className="header-right">
          <button>Finish</button>
          <button>Pending</button>
          <button>Cancel</button>
        </div>
      </div>
      <div className="exam-container">
        <div className="exam-left">
          <div className="cc-box">
            <label for="cc_text" className="form-label">
              Chief Complaint
            </label>
            <textarea
              className="form-control"
              name="cc_text"
              id="cc_text"
              rows="1"></textarea>
          </div>
          <div className="pi-box">
            <label for="pi_text" className="form-label">
              Present Illness
            </label>
            <textarea
              className="form-control"
              name="pi_text"
              id="pi_text"
              rows="3"></textarea>
          </div>
          <div className="pe-box">
            <label for="pe_text" className="form-label">
              Physical Examination
            </label>
            <textarea
              className="form-control"
              name="pe_text"
              id="pe_text"
              rows="3"></textarea>
            <div className="pe-button">
              <button>template</button>
              <button>image</button>
            </div>
          </div>
          <div className="lab-box">
            <button>+Add Lab</button>
            <table>
              <tr>
                <span>CBC</span>
              </tr>
              <tr>
                <small>status : pending</small>
                <button>Add</button>
                <button>Cancel</button>
                <button>View</button>
              </tr>
            </table>
          </div>
          <div className="image-box">
            <button>+Add Image</button>
            <table>
              <tr>
                <span>CBC</span>
                <span>status : Pending</span>
              </tr>
            </table>
          </div>
        </div>
        <div className="exam-right"></div>
      </div>
    </div>
  );
}

export default ExamPage;
