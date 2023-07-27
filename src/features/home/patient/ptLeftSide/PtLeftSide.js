import "./PtLeftSide.css";
import { useHomePt } from "../../../../contexts/HomePtContext";

function PtLeftSide() {
  const { navigate } = useHomePt();
  return (
    <div className="pt-left-side">
      <div className="pt-left-item">
        <p>
          <b>โรคประจำตัว</b>
        </p>
        <p>
          <span>COPD</span>
        </p>
      </div>
      <div className="pt-left-item">
        <p>
          <b>ประวัติการแพ้ยา</b>
        </p>
        <p>
          <span>Amoxycilin</span>
        </p>
      </div>
      <div className="pt-left-item">
        <p>
          <b>ประวัติการรักษา</b>
        </p>
      </div>
      <div className="pt-left-item" onClick={() => navigate("/drug")}>
        <p>
          <b>ประวัติการใช้ยา</b>
        </p>
      </div>
    </div>
  );
}

export default PtLeftSide;
