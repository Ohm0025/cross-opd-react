import IconName from "../../components/iconName/IconName";
import "./ExamPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ChiefComplaint from "./chiefComplaint/ChiefComplaint";
import PresentIllness from "./presentIllness/PresentIllness";
import PhysicalExam from "./physicalExam/PhysicalExam";
import Laboratory from "./laboratory/Laboratory";
import Imaging from "./imaging/Imaging";

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
          <ChiefComplaint />
          <PresentIllness />
          <PhysicalExam />
          <Laboratory />
          <Imaging />
        </div>
        <div className="exam-right">
          <div className="diag-box">
            <button>+Add Image</button>
            <table>
              <tr>
                <span>Dyspepsia</span>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
