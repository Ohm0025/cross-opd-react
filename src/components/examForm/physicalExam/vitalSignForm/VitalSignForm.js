import "./VitalSignForm.css";

function VitalSignForm({ changeVitalRecord }) {
  return (
    <div className="vitalsign">
      <label htmlFor="">vital sign : </label>
      <div className="vitalsign-bp">
        <label htmlFor="bp">BP:</label>
        <input
          type="text"
          name="BP"
          id="bp"
          size={4}
          maxLength="7"
          onChange={changeVitalRecord}
        />
        <label htmlFor="bp">mmHg</label>
      </div>
      <div className="vitalsign-hr">
        <label htmlFor="hr">PR:</label>
        <input
          type="text"
          name="PR"
          id="hr"
          size={2}
          maxLength="3"
          onChange={changeVitalRecord}
        />
        <label htmlFor="hr">bpm</label>
      </div>
      <div className="vitalsign-rr">
        <label htmlFor="rr">RR:</label>
        <input
          type="text"
          name="RR"
          id="rr"
          size={2}
          maxLength="2"
          onChange={changeVitalRecord}
        />
        <label htmlFor="rr">/min</label>
      </div>
      <div className="vitalsign-bt">
        <label htmlFor="bt">Temp:</label>
        <input
          type="text"
          name="Temp"
          id="bt"
          size={2}
          maxLength="4"
          onChange={changeVitalRecord}
        />
        <label htmlFor="bt">celsius</label>
      </div>
    </div>
  );
}

export default VitalSignForm;
