import "./DrContainer.css";
import { useCaseDoctor } from "../../../../contexts/CaseDoctorContext";

import DrSearchBox from "../drSearchBox/DrSearchBox";
import DrUnfinishCase from "../drUnfinishCase/DrUnfinishCase";
import DrFinishCase from "../drFinishCase/DrFinishCase";

function DrContainer() {
  const { handleSearchCard, finishCaseList, unfinishCaseList } =
    useCaseDoctor();

  return (
    <div>
      <DrSearchBox handleSearchCard={handleSearchCard} />
      <div className="table-container">
        <DrUnfinishCase unfinishCaseList={unfinishCaseList} />
        <DrFinishCase finishCaseList={finishCaseList} />
      </div>
    </div>
  );
}

export default DrContainer;
