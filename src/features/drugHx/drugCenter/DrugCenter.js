import DrugItem from "../../../components/drugItem/DrugItem";
import { useDrug } from "../../../contexts/DrugContext";
import { extractList, extractDate } from "../../../utility/extractDrug";

function DrugCenter() {
  const { listDrug } = useDrug();

  return (
    <>
      {extractDate(listDrug).map((item, index) => {
        return (
          <DrugItem
            date={item}
            list={extractList(item, listDrug)}
            key={index}
          />
        );
      })}
    </>
  );
}
export default DrugCenter;
