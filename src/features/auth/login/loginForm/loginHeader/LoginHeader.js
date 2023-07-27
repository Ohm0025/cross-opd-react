import "./LoginHeader.css";
import { useLogin } from "../../../../../contexts/LoginContext";

function LoginHeader() {
  const { typeLoginAccount } = useLogin();
  return (
    <div className="login-header">
      <p>{`Hello ${typeLoginAccount ?? ""}!`}</p>
      <p>{"Please Fill out the form below to get started"}</p>
    </div>
  );
}

export default LoginHeader;
