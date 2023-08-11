import "./DrContainer.css";
import { useCaseDoctor } from "../../../../contexts/CaseDoctorContext";

import DrSearchBox from "../drSearchBox/DrSearchBox";
import DrUnfinishCase from "../drUnfinishCase/DrUnfinishCase";

function DrContainer() {
  const { handleSearchCard, finishCaseList, unfinishCaseList } =
    useCaseDoctor();

  return (
    <div>
      <DrSearchBox handleSearchCard={handleSearchCard} />
      <div className="table-container">
        <DrUnfinishCase unfinishCaseList={unfinishCaseList} />
        <table className="unfinish-table">
          <tr>Finish Case</tr>
          {finishCaseList.map((item, index) => (
            <tr key={index + "finishCase"}>{item.patientId}</tr>
          ))}
          <tr>
            <span>page</span>
            <span></span>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DrContainer;
