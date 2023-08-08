import "./Imaging.css";

function Imaging() {
  return (
    <div className="image-box">
      <label className="form-label">Imaging</label>
      <button>+Add Image</button>
      <div className="image-list">
        <div className="image-list-item">
          <div>film acute abdomen</div>
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

export default Imaging;
