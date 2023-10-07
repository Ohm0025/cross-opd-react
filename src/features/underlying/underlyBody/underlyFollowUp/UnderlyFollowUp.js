import "./UnderlyFollowUp.css";

function UnderlyFollowUp({ lastFollow }) {
  return (
    <div className="underly-followup">
      <div className="underly-followup-show">{lastFollow}</div>
      <div className="underly-followup-action"></div>
    </div>
  );
}

export default UnderlyFollowUp;
