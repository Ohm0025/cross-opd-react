import "./LabItem.css";

function LabItem() {
  return (
    <div className="lab-list-item">
      <div>CBC</div>
      <small>status : pending</small>
      <div>
        <button>Add</button>
        <button>Cancel</button>
        <button>View</button>
      </div>
    </div>
  );
}

export default LabItem;
