import "./VitalSignForm.css";

function VitalSignForm() {
  return (
    <div className="vitalsign">
      <label htmlFor="">vital sign : </label>
      <div className="vitalsign-bp">
        <label htmlFor="bp">BP:</label>
        <input type="text" name="bp" id="bp" size={4} maxLength="7" />
        <label htmlFor="bp">mmHg</label>
      </div>
      <div className="vitalsign-hr">
        <label htmlFor="hr">PR:</label>
        <input type="text" name="hr" id="hr" size={2} maxLength="3" />
        <label htmlFor="hr">bpm</label>
      </div>
      <div className="vitalsign-rr">
        <label htmlFor="rr">RR:</label>
        <input type="text" name="rr" id="rr" size={2} maxLength="2" />
        <label htmlFor="rr">/min</label>
      </div>
      <div className="vitalsign-bt">
        <label htmlFor="bt">Temp:</label>
        <input type="text" name="bt" id="bt" size={2} maxLength="4" />
        <label htmlFor="bt">celsius</label>
      </div>
    </div>
  );
}

export default VitalSignForm;
