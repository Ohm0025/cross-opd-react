import "./DiagItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function DiagItem() {
  return (
    <li className="list-group-item diag-list-item">
      <span>diag01</span>
      <button className="">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
}

export default DiagItem;
