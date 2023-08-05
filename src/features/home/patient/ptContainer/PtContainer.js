import { useHomePt } from "../../../../contexts/HomePtContext";
import PtCenter from "../ptCenter/PtCenter";
import PtWaitPage from "../ptWaitPage/PtWaitPage";
import "./PtContainer.css";

function PtContainer() {
  const { isWait } = useHomePt();

  return (
    <div className="pt-container">{isWait ? <PtWaitPage /> : <PtCenter />}</div>
  );
}

export default PtContainer;
