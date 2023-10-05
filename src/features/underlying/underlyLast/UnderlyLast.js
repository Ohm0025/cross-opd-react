import "./UnderlyLast.css";

function UnderlyLast({ lastUd }) {
  return (
    <div className="ud-last-container">
      <h3>ยาประจำตัวล่าสุด</h3>
      <div>
        {lastUd?.caseTreatment[0][1].map((item, index) => {
          return <div key={"un-last-" + index}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}

export default UnderlyLast;
