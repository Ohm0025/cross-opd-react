import "./ExamHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import IconName from "../../../components/iconName/IconName";

function ExamHeader() {
  return (
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
  );
}

export default ExamHeader;
