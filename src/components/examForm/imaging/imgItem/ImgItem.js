import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faMagnifyingGlass,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./ImgItem.css";

function ImgItem({ item }) {
  return (
    <div className="img-list-item">
      <div className="img-list-item-name">{item.name}</div>
      <div className="img-list-item-status">
        <small>status : {item.status}</small>
      </div>
      <div className="btn-group">
        <button className="btn">
          <FontAwesomeIcon icon={faAdd} />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default ImgItem;
