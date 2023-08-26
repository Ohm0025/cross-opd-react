import "./Treatment.css";
import TreatmentItem from "./treatmentItem/TreatmentItem";
import { useDiag } from "../../../contexts/DiagContext";

function Treatment() {
  const { diagList } = useDiag();
  return (
    <div className="tx-box">
      <label htmlFor="tx_btn">Treatment</label>

      <div className="tx-action">
        {diagList.length > 0 ? (
          <ul className="list-group">
            {diagList.map((item, index) => (
              <TreatmentItem diagTitle={item} key={"txitem" + index} />
            ))}
          </ul>
        ) : (
          <span className="tx-list-empty">
            - ยังไม่มีรายการรักษา โปรดเพิ่มรายการวินิจฉัยก่อน -
          </span>
        )}
      </div>
    </div>
  );
}

export default Treatment;
