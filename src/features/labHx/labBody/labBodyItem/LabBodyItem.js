import "./LabBodyItem.css";

function LabBodyItem({ labName, labDes }) {
  return (
    <div className="lh-body-item">
      <h5>{labName}</h5>
      <p>
        <span> Detail : {labDes}</span>
      </p>
    </div>
  );
}

export default LabBodyItem;
