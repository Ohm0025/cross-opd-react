import "./Laboratory.css";
import LabItem from "./labItem/LabItem";

function Laboratory() {
  return (
    <div className="lab-box">
      <label className="form-label">Laboratory</label>
      <button>+Add Lab</button>

      {false ? (
        <div className="lab-list">
          <LabItem />
        </div>
      ) : (
        <span className="lab-list-empty">ไม่มีรายการสั่ง Lab</span>
      )}
    </div>
  );
}

export default Laboratory;
