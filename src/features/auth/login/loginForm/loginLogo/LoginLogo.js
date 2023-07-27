import "./LoginLogo.css";
import logoImg from "../../../../../assets/logo.png";

function LoginLogo() {
  return (
    <div className="login-logo">
      <img src={logoImg} alt="logo_png" />
    </div>
  );
}

export default LoginLogo;
