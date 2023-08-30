import { useRegister } from "../../../../../contexts/RegisterContext";
import "./TypeAccountBox.css";
import { DOCTOR, PATIENT } from "../../../../../config/constant";
import { isEmpty } from "lodash";

function TypeAccountBox() {
  const { typeaccount, changeType, input, handleChangeInput, errorObj } =
    useRegister();

  return (
    <div className="typeaccount-box">
      <div>
        <label htmlFor="userType" className="form-label">
          User Type
        </label>
        <select
          value={typeaccount}
          className={`form-select ${
            !isEmpty(errorObj?.typeaccount) ? "input-error" : ""
          }`}
          id="userType"
          onChange={changeType}
        >
          <option value="">Select User Type</option>
          <option value={DOCTOR}>Doctor</option>
          <option value={PATIENT}>Patient</option>
        </select>
        <small
          className={`error-message ${
            isEmpty(errorObj?.typeaccount) ? "d-none" : ""
          }`}
        >
          {errorObj?.typeaccount.required || errorObj?.typeaccount.valid}
        </small>
      </div>
      <div className={`${typeaccount ? "" : "blind"}`}>
        <label htmlFor="numberId" className={`form-label`}>
          {typeaccount === "DOCTOR" ? "MD number" : "Citizen ID"}
        </label>
        <input
          type="number"
          className={`form-control ${typeaccount ? "" : "is-invalid"} ${
            !isEmpty(errorObj?.id) ? "input-error" : ""
          }`}
          value={typeaccount === "DOCTOR" ? input.mdId : input.citizenId}
          id="numberId"
          name={typeaccount === "DOCTOR" ? "mdId" : "citizenId"}
          onChange={handleChangeInput}
        />
        <small
          className={`error-message ${isEmpty(errorObj?.id) ? "d-none" : ""}`}
        >
          {errorObj?.id.required || errorObj?.id.valid || errorObj?.id.other}
        </small>
      </div>
    </div>
  );
}

export default TypeAccountBox;
