import IconName from "../../components/iconName/IconName";
import "./ExamPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ChiefComplaint from "../../components/examForm/chiefComplaint/ChiefComplaint";
import PresentIllness from "../../components/examForm/presentIllness/PresentIllness";
import PhysicalExam from "../../components/examForm/physicalExam/PhysicalExam";
import Laboratory from "../../components/examForm/laboratory/Laboratory";
import Imaging from "../../components/examForm/imaging/Imaging";
import Diagnosis from "../../components/examForm/diagnosis/Diagnosis";
import Treatment from "../../components/examForm/treatment/Treatment";
import Advice from "../../components/examForm/advice/Advice";
import FollowUp from "../../components/examForm/followUp/FollowUp";

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
          <Diagnosis />
          <Treatment />
          <Advice />
          <FollowUp />
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
