import "./Imaging.css";

import ImgItem from "./imgItem/ImgItem";

import Modal from "../../../components/Modal";

import ImgModal from "./imgModal/ImgModal";
import { useImg } from "../../../contexts/ImagingContext";
import { useState } from "react";

function Imaging() {
  const { listImg } = useImg();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="image-box">
      <label className="form-label">Imaging</label>
      <button onClick={() => setIsOpen(true)}>+Add Image</button>
      {listImg.length > 0 ? (
        <div className="image-list">
          {listImg.map((item, index) => {
            return <ImgItem key={"imgitem" + index} item={item} />;
          })}
        </div>
      ) : (
        <span className="image-list-empty">ไม่มีรายการสั่ง Imaging</span>
      )}
      <Modal title="Imaging" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ImgModal onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}

export default Imaging;
