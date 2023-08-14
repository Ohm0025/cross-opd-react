import "./TreatmentItem.css";

function TreatmentItem({ changeModal }) {
  return (
    <li className="list-group-item tx-list-item">
      <span>diag01</span>
      <button className="btn btn-secondary tx-btn" onClick={changeModal}>
        Add Treatment
      </button>
    </li>
  );
}

export default TreatmentItem;
