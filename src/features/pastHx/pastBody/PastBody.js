import { usePastHx } from "../../../contexts/PastContext";
import "./PastBody.css";

function PastBody() {
  const { selectedCase } = usePastHx();

  return (
    <div className="ph-body">
      {"CC : " + selectedCase?.ChiefComplaint?.title}
      <br></br>
      {"PI : " + selectedCase?.PresentIll.title}
      <br></br>
      {"PE : " + selectedCase?.PhysicalExam.examManual}
      <br />
      {selectedCase?.PhysicalExam.examTemplate}
      <br />
      {selectedCase?.Diagnoses.map((item) => {
        return <>{item.diagName}</>;
      })}
      <br />
      {selectedCase?.DetailDiag.detail}
      <br />
      {selectedCase?.Advice.detail}
      <br />
      {selectedCase?.FollowUp.fuHos} {selectedCase?.FollowUp.fuOPD}{" "}
      {selectedCase?.FollowUp.fuDetail} {selectedCase?.FollowUp.fuDate}
    </div>
  );
}

export default PastBody;
