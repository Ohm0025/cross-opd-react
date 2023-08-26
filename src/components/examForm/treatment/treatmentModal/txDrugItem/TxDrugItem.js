import "./TxDrugItem.css";

function TxDrugItem({ item }) {
  return <div>{item.title + item.use + item.amount}</div>;
}

export default TxDrugItem;
