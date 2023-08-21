import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ImgItem.css";
import { useState } from "react";
import { useImg } from "../../../../contexts/ImagingContext";
import ImgModal from "../imgModal/ImgModal";
import Modal from "../../../Modal";

function ImgItem({ item }) {
  const [isEdit, setIsEdit] = useState(false);
  const { deletedImg, editImg } = useImg();
  return (
    <>
      <div className="img-list-item">
        <div className="img-list-item-name">{item.name}</div>
        <div className="img-list-item-status">
          <small>status : {item.status}</small>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={() => setIsEdit(true)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="btn" onClick={() => deletedImg(item)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <Modal title="Imaging" isOpen={isEdit} onClose={() => setIsEdit(false)}>
        <ImgModal
          onClose={() => setIsEdit(false)}
          imgname={item.name}
          imgstatus={item.status}
          imgdes={item.des}
          imgimg={item.img}
          editImg={editImg}
        />
      </Modal>
    </>
  );
}

export default ImgItem;
