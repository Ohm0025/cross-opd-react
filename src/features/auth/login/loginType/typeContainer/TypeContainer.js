import "./TypeContainer.css";
import doctorIcon from "../../../../../assets/doctorIcon.png";
import patientIcon from "../../../../../assets/patientIcon.png";
import TypeSide from "./typeSide/TypeSide";
import { useLogin } from "../../../../../contexts/LoginContext";
import { DOCTOR, PATIENT } from "../../../../../config/constant";
import { isEmpty } from "lodash";

function TypeContainer() {
  const { changeTypeLogin, errorObj } = useLogin();

  return (
    <>
      <div
        className={`login-type-container ${
          !isEmpty(errorObj?.typeaccount) ? "input-error" : ""
        }`}
      >
        <TypeSide
          pic={doctorIcon}
          dis={"Doctor"}
          value={DOCTOR}
          handleClick={changeTypeLogin}
        />
        <TypeSide
          pic={patientIcon}
          dis={"Patient"}
          value={PATIENT}
          handleClick={changeTypeLogin}
        />
      </div>

      <small
        className={`error-message ${
          isEmpty(errorObj?.typeaccount) ? "d-none" : ""
        }`}
      >
        {errorObj?.typeaccount.required ||
          errorObj?.typeaccount.valid ||
          errorObj?.typeaccount.other}
      </small>
    </>
  );
}

export default TypeContainer;
