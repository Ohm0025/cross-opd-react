import { extractDiag } from "../../utility/extractDrug";
import DrugSubItem from "./drugSubItem/DrugSubItem";
import "./DrugItem.css";

function DrugItem({ date, list }) {
  return (
    <div className="drug-item">
      <div className="drug-item-header">{date}</div>
      {extractDiag(list).map((item, index) => {
        return (
          <div key={index + "drugItem"} className="drug-body">
            <ol className="drug-list">
              <DrugSubItem diag={item} list={list} />
              <div>{"Diagnosis : " + item}</div>
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default DrugItem;
