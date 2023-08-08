import "./ChiefComplaint.css";

function ChiefComplaint() {
  return (
    <div className="cc-box">
      <label htmlFor="cc_text" className="form-label">
        Chief Complaint
      </label>
      <textarea
        className="form-control"
        name="cc_text"
        id="cc_text"
        rows="1"
      ></textarea>
    </div>
  );
}

export default ChiefComplaint;
