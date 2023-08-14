import "./FollowUpItem.css";

function FollowUpItem() {
  return (
    <li className="list-group-item fu-list-item">
      <span>15/08/66</span>
      <div className="btn-group">
        <button className="btn btn-secondary">edit</button>
        <button className="btn btn-secondary">delete</button>
      </div>
    </li>
  );
}

export default FollowUpItem;
