import DrugCenter from "../drugCenter/DrugCenter";
import DrugRight from "../drugRight/DrugRight";

function DrugContainer() {
  return (
    <div className="drug-container">
      <DrugCenter />
      <DrugRight />
    </div>
  );
}

export default DrugContainer;
