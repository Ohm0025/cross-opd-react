import "./LabBodyItem.css";

function LabBodyItem({ labName, labDes }) {
  return (
    <div className="lh-body-item">
      <h5>{labName}</h5>
      <span>{labDes}</span>
    </div>
  );
}

export default LabBodyItem;
