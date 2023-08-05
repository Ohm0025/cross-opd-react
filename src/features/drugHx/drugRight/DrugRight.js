import DrugFilter from "./drugFilter/DrugFilter";
import DrugAllergy from "./drugAllergy/DrugAllergy";
import "./DrugRight.css";

function DrugRight() {
  return (
    <nav className="nav flex-column drug-right">
      <DrugFilter />
      <DrugAllergy />
    </nav>
  );
}

export default DrugRight;
