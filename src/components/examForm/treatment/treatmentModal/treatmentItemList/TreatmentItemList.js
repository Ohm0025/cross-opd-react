import "./TreatmentItemList.css";

function TreatmentItemList({ item, deleteTx, changeEdit, isEdit }) {
  return (
    <div className="tx-item-list">
      <span>{item.title + item.detail}</span>
      <div className="btn-group">
        <button
          className={`btn ${
            JSON.stringify(isEdit) === JSON.stringify(item)
              ? "btn-secondary"
              : "btn-success"
          }`}
          onClick={() => changeEdit(item)}>
          edit
        </button>
        <button className="btn btn-danger" onClick={deleteTx}>
          delete
        </button>
      </div>
    </div>
  );
}

export default TreatmentItemList;
