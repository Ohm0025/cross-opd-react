import "./DiagItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function DiagItem({ item, number, removeDiag, editDiag }) {
  return (
    <div className="list-group-item diag-list-item">
      <span role="button" onClick={() => editDiag(item)}>
        {number + 1 + " . " + item}
      </span>
      <button className="" onClick={() => removeDiag(item)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

export default DiagItem;
