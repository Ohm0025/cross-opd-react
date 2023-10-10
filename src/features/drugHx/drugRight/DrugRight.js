import DrugFilter from "./drugFilter/DrugFilter";
import "./DrugRight.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function DrugRight({ selecType, changeSelecType }) {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="drug-right">
      <button onClick={() => setOpenFilter((prev) => !prev)}>
        <FontAwesomeIcon icon={openFilter ? faArrowRight : faArrowLeft} />
      </button>
      {openFilter && (
        <div className="drug-right-sub">
          <DrugFilter selecType={selecType} changeSelecType={changeSelecType} />
        </div>
      )}
    </div>
  );
}

export default DrugRight;
