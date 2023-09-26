import DrugFilter from "./drugFilter/DrugFilter";
import DrugAllergy from "./drugAllergy/DrugAllergy";
import "./DrugRight.css";

function DrugRight({ selecType, changeSelecType }) {
  return (
    <nav className="nav flex-column drug-right">
      <DrugFilter selecType={selecType} changeSelecType={changeSelecType} />
      <DrugAllergy />
    </nav>
  );
}

export default DrugRight;
