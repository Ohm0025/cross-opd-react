import { useState } from "react";
import DrugCenter from "../drugCenter/DrugCenter";
import DrugRight from "../drugRight/DrugRight";
import "./DrugContainer.css";

function DrugContainer() {
  const [selecType, setSelecType] = useState("all");

  console.log(selecType);

  const changeSelecType = (e) => {
    setSelecType(e.target.value);
  };
  return (
    <div className="drug-container">
      <DrugCenter selecType={selecType} />
      <DrugRight selecType={selecType} changeSelecType={changeSelecType} />
    </div>
  );
}

export default DrugContainer;
