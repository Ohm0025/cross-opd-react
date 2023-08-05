import "./PresentIllness.css";

function PresentIllness() {
  return (
    <div className="pi-box">
      <label for="pi_text" className="form-label">
        Present Illness
      </label>
      <textarea
        className="form-control"
        name="pi_text"
        id="pi_text"
        rows="3"
      ></textarea>
    </div>
  );
}

export default PresentIllness;
