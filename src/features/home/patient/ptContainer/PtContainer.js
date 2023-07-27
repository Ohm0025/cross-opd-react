import { useHomePt } from "../../../../contexts/HomePtContext";
import PtCenter from "../ptCenter/PtCenter";
import PtLeftSide from "../ptLeftSide/PtLeftSide";
import PtRightSide from "../ptRightSide/PtRightSide";
import PtWaitPage from "../ptWaitPage/PtWaitPage";
import "./PtContainer.css";

function PtContainer() {
  const { isWait } = useHomePt();
  return (
    <div className="pt-container">
      <PtLeftSide />
      {isWait ? <PtWaitPage /> : <PtCenter />}
      <PtRightSide />
    </div>
  );
}

export default PtContainer;
