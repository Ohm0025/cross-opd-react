import { useRegister } from "../../../../../contexts/RegisterContext";
import "./TypeAccountBox.css";
import { DOCTOR, PATIENT } from "../../../../../config/constant";

function TypeAccountBox() {
  const { typeaccount, changeType, input, handleChangeInput } = useRegister();
  return (
    <div className="typeaccount-box">
      <div>
        <label htmlFor="userType" className="form-label">
          User Type
        </label>
        <select
          value={typeaccount}
          className="form-select"
          id="userType"
          onChange={changeType}
        >
          <option value="">Select User Type</option>
          <option value={DOCTOR}>Doctor</option>
          <option value={PATIENT}>Patient</option>
        </select>
      </div>
      <div className={`${typeaccount ? "" : "blind"}`}>
        <label htmlFor="numberId" className={`form-label`}>
          {typeaccount === "DOCTOR" ? "MD number" : "Citizen ID"}
        </label>
        <input
          type="number"
          className={`form-control ${typeaccount ? "" : "is-invalid"}`}
          value={typeaccount === "DOCTOR" ? input.mdId : input.citizenId}
          id="numberId"
          name={typeaccount === "DOCTOR" ? "mdId" : "citizenId"}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
}

export default TypeAccountBox;
