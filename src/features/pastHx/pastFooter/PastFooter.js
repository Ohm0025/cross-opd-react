import { usePastHx } from "../../../contexts/PastContext";
import "./PastFooter.css";

function PastFooter() {
  const { selectedCase } = usePastHx();
  return (
    <div className="ph-footer">
      {selectedCase?.location}
      <br />
      {"Dr. " +
        selectedCase?.UserDoctor?.firstName +
        " " +
        selectedCase?.UserDoctor?.lastName}
    </div>
  );
}

export default PastFooter;
