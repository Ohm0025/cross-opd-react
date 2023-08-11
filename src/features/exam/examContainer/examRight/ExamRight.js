import "./ExamRight.css";

import Diagnosis from "../../../../components/examForm/diagnosis/Diagnosis";
import Treatment from "../../../../components/examForm/treatment/Treatment";
import Advice from "../../../../components/examForm/advice/Advice";
import FollowUp from "../../../../components/examForm/followUp/FollowUp";

function ExamRight() {
  return (
    <div className="exam-right">
      <Diagnosis />
      <Treatment />
      <Advice />
      <FollowUp />
    </div>
  );
}

export default ExamRight;
