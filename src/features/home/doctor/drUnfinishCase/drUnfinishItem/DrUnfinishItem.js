import "./DrUnfinishItem.css";

function DrUnFinishItem({ keyItem, itemId, itemTime }) {
  return (
    <div key={keyItem} className="unfinish-item">
      <div>{"ID : " + itemId}</div>
      <div>{" time : " + new Date(itemTime).toTimeString().split(" ")[0]}</div>
    </div>
  );
}

export default DrUnFinishItem;
