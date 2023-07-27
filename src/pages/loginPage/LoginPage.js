import LoginContextProvider from "../../contexts/LoginContext";
import LoginForm from "../../features/auth/login/loginForm/LoginForm";
import LoginType from "../../features/auth/login/loginType/LoginType";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <LoginContextProvider>
        <LoginType />
        <LoginForm />
      </LoginContextProvider>
    </div>
  );
}
export default LoginPage;
