import "./ExamContainer.css";
import ExamLeft from "./examLeft/ExamLeft";
import ExamRight from "./examRight/ExamRight";

function ExamContainer() {
  return (
    <div className="exam-container">
      <ExamLeft />
      <ExamRight />
    </div>
  );
}

export default ExamContainer;
