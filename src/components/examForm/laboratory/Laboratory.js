import "./Laboratory.css";

function Laboratory() {
  return (
    <div className="lab-box">
      <label className="form-label">Laboratory</label>
      <button>+Add Lab</button>
      <div className="lab-list">
        <div className="lab-list-item">
          <div>CBC</div>
          <small>status : pending</small>
          <div>
            <button>Add</button>
            <button>Cancel</button>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laboratory;
