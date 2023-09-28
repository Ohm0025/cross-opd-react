import "./UnderlyLast.css";

function UnderlyLast({ lastUd }) {
  console.log(lastUd?.caseTreatment[0][1]);
  return (
    <div className="ud-last-container">
      <h3>ยาประจำตัวล่าสุด</h3>
      <div>
        {lastUd?.caseTreatment[0][1].map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </div>
  );
}

export default UnderlyLast;
