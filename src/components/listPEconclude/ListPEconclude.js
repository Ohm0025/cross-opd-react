import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListPEconclude.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ListPEconclude({ typePE, textPE, dropPEList }) {
  return (
    <div className="ListPE-item">
      <span>{textPE}</span>
      <button onClick={() => dropPEList(typePE, textPE)}>
        <span>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </button>
    </div>
  );
}

export default ListPEconclude;
