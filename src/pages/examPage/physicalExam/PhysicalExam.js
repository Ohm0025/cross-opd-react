import "./PhysicalExam.css";

function PhysicalExam() {
  return (
    <div className="pe-box">
      <label for="pe_text" className="form-label">
        Physical Examination
      </label>
      <textarea
        className="form-control"
        name="pe_text"
        id="pe_text"
        rows="3"
      ></textarea>
      <div className="pe-button">
        <button>template</button>
        <button>image</button>
      </div>
    </div>
  );
}

export default PhysicalExam;
