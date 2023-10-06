import "./UnderlyItem.css";

function UnderlyItem({ item, index }) {
  return (
    <div className="underly-item-container">
      {index + 1 + "."} {item.title} {item.detail} {item.amount}
    </div>
  );
}

export default UnderlyItem;
