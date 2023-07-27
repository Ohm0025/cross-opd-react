import "./TypeContainer.css";
import doctorIcon from "../../../../../assets/doctorIcon.png";
import patientIcon from "../../../../../assets/patientIcon.png";
import TypeSide from "./typeSide/TypeSide";
import { useLogin } from "../../../../../contexts/LoginContext";
import { DOCTOR, PATIENT } from "../../../../../config/constant";

function TypeContainer() {
  const { changeTypeLogin } = useLogin();

  return (
    <div className="login-type-container">
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
  );
}

export default TypeContainer;
