import { formatCreatedAt } from "../../../utility/formatDataTime";
import "./AllergyItem.css";

function AllergyItem({ item }) {
  return (
    <div className="allergy-item">
      <div>{item.allerName}</div>
      <div>{item.allerSymp}</div>
      <div>{item?.dateAt && formatCreatedAt(item?.dateAt)}</div>
      <div>{item.allerEditor}</div>
    </div>
  );
}

export default AllergyItem;
