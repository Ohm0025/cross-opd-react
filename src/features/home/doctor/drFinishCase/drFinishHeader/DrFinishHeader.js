import "./DrFinishHeader.css";

function DrFinishHeader({ page, length, amount }) {
  return (
    <div className="finish-header">
      Finish Case <small>{+page + "/" + Math.ceil(+length / +amount)}</small>
    </div>
  );
}

export default DrFinishHeader;
