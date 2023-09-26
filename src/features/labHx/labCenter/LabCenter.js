import { useLabHx } from "../../../contexts/LabHxContext";
import LabBody from "../labBody/LabBody";
import LabFooter from "../labFooter/LabFooter";
import "./LabCenter.css";

function LabCenter() {
  const { selectLab } = useLabHx();
  return (
    <>
      {selectLab ? (
        <div className="lh-page-container">
          <LabBody selectLab={selectLab} />
          <LabFooter />
        </div>
      ) : (
        <h2 className="lh-empty">ไม่มีประวัติการสั่ง Lab มาก่อน</h2>
      )}
    </>
  );
}

export default LabCenter;
