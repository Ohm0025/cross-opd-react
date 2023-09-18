import HomePtContextProvider from "../../../contexts/HomePtContext";
import FollowUpContextProvider from "../../../contexts/FollowUpContext";
import PtContainer from "../../../features/home/patient/ptContainer/PtContainer";

function PtHomePage() {
  return (
    <div>
      <HomePtContextProvider>
        <FollowUpContextProvider>
          <PtContainer />
        </FollowUpContextProvider>
      </HomePtContextProvider>
    </div>
  );
}

export default PtHomePage;
