import "./UnderlyLast.css";

function UnderlyLast({ lastUd }) {
  return (
    <div className="ud-last-container">
      <h5>ยาประจำตัวล่าสุด</h5>
      <div>
        {lastUd?.caseTreatment[0][1].map((item, index) => {
          return (
            <div key={"un-last-" + index}>
              {item.title} {item.detail}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UnderlyLast;
