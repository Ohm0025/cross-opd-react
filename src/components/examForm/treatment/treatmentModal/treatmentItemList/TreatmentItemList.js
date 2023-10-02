import "./TreatmentItemList.css";

function TreatmentItemList({ item, deleteTx }) {
  return (
    <div className="tx-item-list">
      <span>{item.title + item.detail}</span>
      <div className="btn-group">
        <button className="btn btn-success">edit</button>
        <button className="btn btn-danger" onClick={deleteTx}>
          delete
        </button>
      </div>
    </div>
  );
}

export default TreatmentItemList;
