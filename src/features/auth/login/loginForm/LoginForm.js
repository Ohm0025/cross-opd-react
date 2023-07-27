import "./LoginForm.css";
import LoginLogo from "./loginLogo/LoginLogo";
import LoginAction from "./loginAction/LoginAction";
import LoginHeader from "./loginHeader/LoginHeader";
import LoginInput from "./loginInput/LoginInput";

function LoginForm() {
  return (
    <div className="login-form">
      <LoginLogo />
      <LoginHeader />
      <LoginInput />
      <LoginAction />
    </div>
  );
}

export default LoginForm;
