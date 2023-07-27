import "./RegisterContainer.css";
import TypeAccountBox from "./registerComponent/TypeAccountBox";
import GeneralDataBox from "./registerComponent/GeneralDataBox";

function RegisterContainer() {
  return (
    <div className="register-container">
      <TypeAccountBox />
      <GeneralDataBox />
    </div>
  );
}

export default RegisterContainer;
