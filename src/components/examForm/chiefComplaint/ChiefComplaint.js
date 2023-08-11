import { useExam } from "../../../contexts/ExamContext";
import "./ChiefComplaint.css";
import { useEffect, useState } from "react";

function ChiefComplaint() {
  const { currentCase } = useExam();

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle((pre) => {
      return currentCase?.ChiefComplaint?.title;
    });
  }, [currentCase?.ChiefComplaint?.title]);
  return (
    <div className="cc-box">
      <label htmlFor="cc_text" className="form-label">
        Chief Complaint
      </label>
      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        name="cc_text"
        id="cc_text"
        rows="1"
      ></textarea>
    </div>
  );
}

export default ChiefComplaint;
