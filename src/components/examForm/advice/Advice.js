import { useExam } from "../../../contexts/ExamContext";
import "./Advice.css";

function Advice() {
  const { recordObj, updateRecordObj } = useExam();
  return (
    <div className="adv-box">
      <label htmlFor="adv_text" className="form-label">
        Advice
      </label>
      <textarea
        className="form-control advice-text"
        name=""
        id="adv_text"
        cols="30"
        rows="3"
        value={recordObj.ad.detail}
        onChange={(e) => updateRecordObj("ad", "detail", e.target.value)}
      ></textarea>
    </div>
  );
}

export default Advice;
