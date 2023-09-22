import PastHxContextProvider from "../../contexts/PastContext";
import PastCenter from "../../features/pastHx/pastCenter/PastCenter";
import PastNav from "../../features/pastHx/pastNav/PastNav";
import "./PastHxPage.css";

function PastHxPage() {
  return (
    <PastHxContextProvider>
      <div className="ph-page">
        <PastNav />
        <PastCenter />
      </div>
    </PastHxContextProvider>
  );
}

export default PastHxPage;
