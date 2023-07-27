import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLogin } from "../../../../../contexts/LoginContext";
import "./LoginInput.css";

function LoginInput() {
  const { input, handleInputLogin } = useLogin();
  const [isOpenEye, setIsOpenEye] = useState(false);

  return (
    <>
      <div className="login-input-div ">
        <input
          className="login-input form-control"
          type="text"
          placeholder="email"
          name="email"
          value={input.email}
          onChange={handleInputLogin}
        />
      </div>

      <div className="login-input-div ">
        <input
          className="login-input form-control"
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
    </>
  );
}

export default LoginInput;
