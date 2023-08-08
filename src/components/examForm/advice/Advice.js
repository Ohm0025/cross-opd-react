import "./Advice.css";

function Advice() {
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
      ></textarea>
    </div>
  );
}

export default Advice;
