import "./LoginAction.css";
import { useLogin } from "../../../../../contexts/LoginContext";

function LoginAction() {
  const { handleClickLogin, navigate } = useLogin();
  return (
    <div className="login-action">
      <span onClick={() => navigate("/register")}>
        {"No Account ? "} <b>signup</b>
      </span>

      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
}

export default LoginAction;
