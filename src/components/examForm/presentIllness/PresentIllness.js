import "./PresentIllness.css";
import { useExam } from "../../../contexts/ExamContext";

function PresentIllness() {
  const { recordObj, updateRecordObj } = useExam();

  return (
    <div className="pi-box">
      <label htmlFor="pi_text" className="form-label">
        Present Illness
      </label>
      <textarea
        value={recordObj?.pi?.title}
        placeholder="add patient's presentillness"
        onChange={(e) => updateRecordObj("pi", { title: e.target.value })}
        className="form-control"
        name="pi_text"
        id="pi_text"
        rows="3"
      ></textarea>
    </div>
  );
}

export default PresentIllness;
