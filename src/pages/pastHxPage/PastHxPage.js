import PastHxContextProvider from "../../contexts/PastContext";
import PastBody from "../../features/pastHx/pastBody/PastBody";
import PastFooter from "../../features/pastHx/pastFooter/PastFooter";
import PastNav from "../../features/pastHx/pastNav/PastNav";
import "./PastHxPage.css";

function PastHxPage() {
  return (
    <PastHxContextProvider>
      <div className="ph-page">
        <PastNav />
        <div className="ph-page-container">
          <PastBody />
          <PastFooter />
        </div>
      </div>
    </PastHxContextProvider>
  );
}

export default PastHxPage;
