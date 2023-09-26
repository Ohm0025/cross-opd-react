import "./LabHxPage.css";
import LabHxContextProvider from "../../contexts/LabHxContext";
import LabNav from "../../features/labHx/labNav/LabNav";
import LabCenter from "../../features/labHx/labCenter/LabCenter";

function LabHxPage() {
  return (
    <LabHxContextProvider>
      <div className="lh-page">
        <LabNav />
        <LabCenter />
      </div>
    </LabHxContextProvider>
  );
}

export default LabHxPage;
