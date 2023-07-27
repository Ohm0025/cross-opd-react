import RegisterContextProvider from "../../contexts/RegisterContext";
import RegisterContainer from "../../features/auth/register/body/RegisterContainer";
import RegisterAction from "../../features/auth/register/footer/RegisterAction";
import RegisterHeader from "../../features/auth/register/header/RegisterHeader";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="registerpage">
      <RegisterContextProvider>
        <RegisterHeader />
        <RegisterContainer />
        <RegisterAction />
      </RegisterContextProvider>
    </div>
  );
}

export default RegisterPage;
