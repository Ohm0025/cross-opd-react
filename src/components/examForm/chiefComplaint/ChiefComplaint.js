import { useExam } from "../../../contexts/ExamContext";
import "./ChiefComplaint.css";

function ChiefComplaint() {
  const { recordObj, updateRecordObj } = useExam();

  return (
    <div className="cc-box">
      <label htmlFor="cc_text" className="form-label">
        Chief Complaint
      </label>
      <textarea
        value={recordObj?.cc?.title}
        placeholder="add patient's chief complaint"
        onChange={(e) => updateRecordObj("cc", { title: e.target.value })}
        className="form-control"
        name="cc_text"
        id="cc_text"
        rows="1"
      ></textarea>
    </div>
  );
}

export default ChiefComplaint;
