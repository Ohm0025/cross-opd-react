import DrugSubItem from "./drugSubItem/DrugSubItem";
import { formatCreatedAt } from "../../utility/formatDataTime";
import "./DrugItem.css";

function DrugItem({ date, list }) {
  return (
    date[1] && (
      <div className="drug-item">
        <div className="drug-item-header">
          {date[1] && formatCreatedAt(date[1])}
        </div>
        {list.map((item, index) => {
          const sItem = item.slice(0, item.length - 1);
          if (sItem[0][1].find((item) => item.type === "drug")) {
            return (
              <div key={index + "drugItem"} className="drug-body">
                <ul className="drug-list">
                  <div>{"Diagnosis : " + sItem[0][0]}</div>
                  <DrugSubItem list={sItem} />
                </ul>
              </div>
            );
          } else {
            return <div key={index + "drugItem"} className="d-none"></div>;
          }
        })}
      </div>
    )
  );
}

export default DrugItem;
