import DrugItem from "../../../components/drugItem/DrugItem";
import { useDrug } from "../../../contexts/DrugContext";
import { extractList, extractDate } from "../../../utility/extractDrug";
import "./DrugCenter.css";

function DrugCenter() {
  const { listDrug } = useDrug();

  return (
    <div className="drug-center">
      {extractDate(listDrug).map((item, index) => {
        return (
          <DrugItem
            date={item}
            list={extractList(item, listDrug)}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default DrugCenter;
