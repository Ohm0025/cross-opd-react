import logoImg from "../../assets/logo.png";
import "./LoginPage.css";
import doctorIcon from "../../assets/doctorIcon.png";
import patientIcon from "../../assets/patientIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  return (
    <div>
      <div className="login-container">
        <div className="login-type-side">
          <div className="p-3 m-3 ">
            <b className="text-primary-color">Choose Account Type</b>
          </div>
          <div className="icon">
            <img
              src={doctorIcon}
              alt="icon_doctor_user"
              height={200}
              width={200}
            />
            <small>Doctor</small>
          </div>
          <div className="icon">
            <img
              src={patientIcon}
              alt="icon_doctor_user"
              height={200}
              width={200}
            />
            <small>Patient</small>
          </div>
        </div>
        <div className="login-input-side">
          <div className="icon p-3 m-3">
            <img src={logoImg} alt="logo_png" />
          </div>
          <div>
            <p className="text-center">{"Hello Doctor!"}</p>

            <p className="text-center">
              {"Please Fill out the form below to get started"}
            </p>
          </div>

          <input
            className="login-input form-control"
            type="text"
            placeholder="username"
          />

          <input
            className="login-input form-control"
            type="password"
            placeholder="password"
          />
          <div className="eye-icon">
            <span style={{ position: "absolute", right: -188, top: -47 }}>
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>

          <div className="login-button">
            <span>
              {"No Account ? "} <b className="text-primary-color">signup</b>
            </span>

            <button>Login</button>
          </div>
        </div>
      </div>
      <div className="login-footer container-fluid"></div>
    </div>
  );
}
export default LoginPage;
