import "./Laboratory.css";

function Laboratory() {
  return (
    <div className="lab-box">
      <label className="form-label">Laboratory</label>
      <button>+Add Lab</button>
      <table>
        <tr>
          <span>CBC</span>
        </tr>
        <tr>
          <small>status : pending</small>
          <button>Add</button>
          <button>Cancel</button>
          <button>View</button>
        </tr>
      </table>
    </div>
  );
}

export default Laboratory;
