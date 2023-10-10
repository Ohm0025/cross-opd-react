import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import "./AllergyItem.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function AllergyItem({ item, isDoctor, removeAllergy }) {
  return (
    <div className="allergy-item">
      <div>{item.allerName}</div>
      <div>{item.allerSymp}</div>
      <div>{item?.dateAt && formatCreatedAt(item?.dateAt)}</div>
      <div>{item.allerEditor}</div>
      {isDoctor && (
        <div className="allergy-item-action">
          <button onClick={removeAllergy}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </div>
  );
}

export default AllergyItem;
