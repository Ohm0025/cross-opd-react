import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LabItem.css";
import {
  faAdd,
  faMagnifyingGlass,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function LabItem({ item }) {
  return (
    <div className="lab-list-item">
      <div className="lab-list-item-name">{item.name}</div>
      <div className="lab-list-item-status">
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

export default LabItem;
