import "./DrugItem.css";

function DrugItem({ date, list }) {
  return (
    <div className="drug-item">
      <div className="drug-item-header">{date}</div>
      <div className="drug-item-body">
        {list.map((item, id) => {
          return (
            <>
              <div key={id}>{`${
                item[0] + " " + (item[1] ?? "") + " " + (item[2] ?? "")
              }`}</div>
              <div className="drug-item-footer">{`Diagnosis : ${item[3]}`}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DrugItem;
