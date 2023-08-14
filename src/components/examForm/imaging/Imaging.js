import "./Imaging.css";

import ImgItem from "./imgItem/ImgItem";

function Imaging() {
  return (
    <div className="image-box">
      <label className="form-label">Imaging</label>
      <button>+Add Image</button>
      {false ? (
        <div className="image-list">
          <ImgItem />
        </div>
      ) : (
        <span className="image-list-empty">ไม่มีรายการสั่ง Imaging</span>
      )}
    </div>
  );
}

export default Imaging;
