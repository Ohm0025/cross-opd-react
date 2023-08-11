import "./ExamLeft.css";

import ChiefComplaint from "../../../../components/examForm/chiefComplaint/ChiefComplaint";
import PresentIllness from "../../../../components/examForm/presentIllness/PresentIllness";
import PhysicalExam from "../../../../components/examForm/physicalExam/PhysicalExam";
import Laboratory from "../../../../components/examForm/laboratory/Laboratory";
import Imaging from "../../../../components/examForm/imaging/Imaging";

function ExamLeft() {
  return (
    <div className="exam-left">
      <ChiefComplaint />
      <PresentIllness />
      <PhysicalExam />
      <Laboratory />
      <Imaging />
    </div>
  );
}

export default ExamLeft;
