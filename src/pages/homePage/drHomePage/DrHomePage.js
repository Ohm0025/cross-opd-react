import CaseDoctorContextProvider from "../../../contexts/CaseDoctorContext";
import DrContainer from "../../../features/home/doctor/drContainer/Drcontainer";
import "./DrHomePage.css";

function DrHomePage() {
  return (
    <CaseDoctorContextProvider>
      <DrContainer />
    </CaseDoctorContextProvider>
  );
}

export default DrHomePage;
