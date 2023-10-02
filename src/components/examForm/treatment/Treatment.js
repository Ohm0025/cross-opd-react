import "./Treatment.css";
import TreatmentItem from "./treatmentItem/TreatmentItem";
import { useDiag } from "../../../contexts/DiagContext";

function Treatment() {
  const {
    diagList,
    txObj,
    handleSubmitTx,
    updateTxObj,
    editTxObj,
    deleteTxObj,
    deleteTx,
  } = useDiag();

  return (
    <div className="tx-box">
      <label htmlFor="tx_btn">Treatment</label>

      <div className="tx-action">
        {diagList.length > 0 ? (
          <div className="list-group">
            {diagList.map((item, index) => (
              <TreatmentItem
                order={index + 1}
                diagTitle={item}
                key={"txitem" + index}
                txList={txObj[item]}
                handleSubmitTx={handleSubmitTx}
                updateTxObj={updateTxObj}
                editTxObj={editTxObj}
                deleteTxObj={deleteTxObj}
                deleteTx={deleteTx}
              />
            ))}
          </div>
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

//{diag01:[
//   {title:"" ,type:"" ,detail:""},
//   {title:""}
// ] , diag02:[
//   {},
//   {}
// ]}

//if drug - {title:"paracetamol" , type:"drug" , detail:"1 tab po pc # 20}
//if proceduce - {title:"appendectomy" , type:"proceduce" , detail:"appendex size ... , no complicate"}
