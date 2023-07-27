import { useRegister } from "../../../../contexts/RegisterContext";
import "./RegisterAction.css";

function RegisterAction() {
  const { navigate, handleSubmitForm } = useRegister();
  return (
    <div className="register-action">
      <button
        className="registeraction-button"
        type="button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <button
        className="registeraction-button"
        type="button"
        onClick={handleSubmitForm}
      >
        Submit
      </button>
    </div>
  );
}

export default RegisterAction;
