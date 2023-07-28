import "./AuthLayout.css";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <Outlet />
      <div className="auth-footer container-fluid"></div>
    </>
  );
}

export default AuthLayout;
