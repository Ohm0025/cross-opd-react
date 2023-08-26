import "./ExamRight.css";

import Diagnosis from "../../../../components/examForm/diagnosis/Diagnosis";
import Treatment from "../../../../components/examForm/treatment/Treatment";
import Advice from "../../../../components/examForm/advice/Advice";
import FollowUp from "../../../../components/examForm/followUp/FollowUp";
import DiagContextProvider from "../../../../contexts/DiagContext";

function ExamRight() {
  return (
    <div className="exam-right">
      <DiagContextProvider>
        <Diagnosis />
        <Treatment />
      </DiagContextProvider>
      <Advice />
      <FollowUp />
    </div>
  );
}

export default ExamRight;
