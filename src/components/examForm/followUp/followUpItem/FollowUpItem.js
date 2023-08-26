import "./FollowUpItem.css";
import { formatCreatedAt } from "../../../../utility/formatDataTime";

function FollowUpItem({ item }) {
  return (
    <div>
      <div className="fu-list-item">
        <span>
          {item.fuHos} &nbsp; &nbsp; &nbsp; {item.fuOPD}
        </span>
        <span>{formatCreatedAt(item.fuDate)}</span>
      </div>
      <div className="fu-list-detail">{item.fuDetail}</div>
    </div>
  );
}

export default FollowUpItem;
