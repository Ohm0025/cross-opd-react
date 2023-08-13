import "./DrUnfinishHeader.css";

function DrUnfinishHeader({ page, length, amount }) {
  return (
    <div className="unfinish-header">
      Unfinish Case <small>{+page + "/" + Math.ceil(+length / +amount)}</small>
    </div>
  );
}
export default DrUnfinishHeader;
