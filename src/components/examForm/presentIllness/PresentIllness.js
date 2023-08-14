import { useState } from "react";
import "./PresentIllness.css";
import { useExam } from "../../../contexts/ExamContext";

function PresentIllness() {
  const { currentCase } = useExam();
  const [title, setTitle] = useState("");

  // useState(()=>{
  //   setTitle(prev=>{
  //     return currentCase.PresentIllness
  //   })
  // },[])
  return (
    <div className="pi-box">
      <label htmlFor="pi_text" className="form-label">
        Present Illness
      </label>
      <textarea
        value={title}
        placeholder="add patient's presentillness"
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        name="pi_text"
        id="pi_text"
        rows="3"
      ></textarea>
    </div>
  );
}

export default PresentIllness;
