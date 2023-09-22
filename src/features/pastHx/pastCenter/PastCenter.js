import { usePastHx } from "../../../contexts/PastContext";
import PastBody from "../pastBody/PastBody";
import PastFooter from "../pastFooter/PastFooter";
import "./PastCenter.css";

function PastCenter() {
  const { selectedCase } = usePastHx();
  return (
    <>
      {selectedCase ? (
        <div className="ph-page-container">
          <PastBody selectedCase={selectedCase} />
          <PastFooter />
        </div>
      ) : (
        <h2 className="ph-empty">ไม่มีประวัติการตรวจมาก่อน</h2>
      )}
    </>
  );
}

export default PastCenter;
