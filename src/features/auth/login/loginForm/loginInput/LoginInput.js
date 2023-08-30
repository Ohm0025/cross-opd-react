import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLogin } from "../../../../../contexts/LoginContext";
import "./LoginInput.css";
import { isEmpty } from "lodash";

function LoginInput() {
  const { input, handleInputLogin, errorObj } = useLogin();
  const [isOpenEye, setIsOpenEye] = useState(false);

  return (
    <>
      <div className="login-input-div ">
        <input
          className={`login-input form-control ${
            !isEmpty(errorObj?.email) ? "input-error" : ""
          }`}
          type="text"
          placeholder="email"
          name="email"
          value={input.email}
          onChange={handleInputLogin}
        />
      </div>
      <small
        className={`error-message ${isEmpty(errorObj?.email) ? "d-none" : ""}`}
      >
        {errorObj?.email.required ||
          errorObj?.email.valid ||
          errorObj?.email.other}
      </small>

      <div className="login-input-div ">
        <input
          className={`login-input form-control ${
            !isEmpty(errorObj?.password) ? "input-error" : ""
          }`}
          type={`${isOpenEye ? "text" : "password"}`}
          placeholder="password"
          name="password"
          value={input.password}
          onChange={handleInputLogin}
        />
        <span
          className="eye-icon"
          onClick={() => setIsOpenEye((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isOpenEye ? faEyeSlash : faEye} />
        </span>
      </div>
      <small
        className={`error-message 
          ${isEmpty(errorObj?.password) ? "d-none" : ""}`}
      >
        {errorObj?.password?.required || errorObj?.password?.other}
      </small>
    </>
  );
}

export default LoginInput;
