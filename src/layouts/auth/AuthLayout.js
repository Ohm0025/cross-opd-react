import "./AuthLayout.css";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <Outlet />
      <div className="auth-footer container-fluid">
        <span>created by porramat thaepngoen</span>
        <span>prototype version but please ,support for product version</span>
        <span>https://github.com/Ohm0025</span>
      </div>
    </>
  );
}

export default AuthLayout;
