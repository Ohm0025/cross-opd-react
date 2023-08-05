import DrugCenter from "../drugCenter/DrugCenter";
import DrugRight from "../drugRight/DrugRight";
import "./DrugContainer.css";

function DrugContainer() {
  return (
    <div className="drug-container">
      <DrugCenter />
      <DrugRight />
    </div>
  );
}

export default DrugContainer;
