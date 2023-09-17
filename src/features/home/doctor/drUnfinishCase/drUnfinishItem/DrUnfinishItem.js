import "./DrUnfinishItem.css";

function DrUnFinishItem({ itemId, itemTime }) {
  return (
    <div className="unfinish-item">
      <div>{"ID : " + itemId}</div>
      <div>{" time : " + new Date(itemTime).toTimeString().split(" ")[0]}</div>
    </div>
  );
}

export default DrUnFinishItem;
