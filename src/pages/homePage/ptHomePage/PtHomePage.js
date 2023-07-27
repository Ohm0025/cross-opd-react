import HomePtContextProvider from "../../../contexts/HomePtContext";
import PtContainer from "../../../features/home/patient/ptContainer/PtContainer";

function PtHomePage() {
  return (
    <div>
      <HomePtContextProvider>
        <PtContainer />
      </HomePtContextProvider>
    </div>
  );
}

export default PtHomePage;
