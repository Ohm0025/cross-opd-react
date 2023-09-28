import "./UnderlyBody.css";
import * as underlyService from "../../../api/underlyApi";
import { useEffect, useState } from "react";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import UnderlyLast from "../underlyLast/UnderlyLast";
import UnderlyAction from "./underlyAction/UnderlyAction";
import UnderlyFollowUp from "./underlyFollowUp/UnderlyFollowUp";

function UnderlyBody({
  selectUd,
  patientId,
  isDoctor,
  updateList,
  updateTxObj,
  editTxObj,
  recordObj,
  updateRecordObj,
}) {
  const [listCase, setListCase] = useState([]);
  const [selectCase, setSelectCase] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      const res = await underlyService.fetchUnderlyTreat(
        patientId,
        selectUd.udTitle
      );
      setListCase((prev) => [...res.data?.sendingArr]);
      setSelectCase([...res.data?.sendingArr][0]);
    };
    fetchCase();
  }, [patientId, selectUd]);

  const handleClickAddUD = (udName, udDrugObj) => {
    console.log(recordObj);
    console.log(udName);
    if (!recordObj?.diag.includes(udName)) {
      console.log("if route");
      updateList("diag", udName);
      updateTxObj(udName, {
        title: udDrugObj.title,
        type: "drug",
        detail: `${udDrugObj.detail} # ${udDrugObj.amount}`,
      });
    } else {
      console.log("else route");
      updateTxObj(udName, {
        title: udDrugObj.title,
        type: "drug",
        detail: `${udDrugObj.detail} # ${udDrugObj.amount}`,
      });
    }
  };

  return (
    <div className="ud-body-container">
      <div className="ud-body-header">{selectUd.udTitle}</div>
      <div className="ud-body-center">
        <table className="ud-body-table">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Detail</th>
            </tr>
            {listCase.map((item1, index1) => {
              return (
                <tr key={"tr-ud" + index1}>
                  <td role="button" onClick={() => setSelectCase(item1)}>
                    {formatCreatedAt(item1.caseDate)}
                  </td>
                  <td>
                    {item1.caseDetail}
                    {selectCase === item1 && (
                      <ol>
                        {item1.caseTreatment.map((item2, index2) => {
                          return item2[1].map((item3, index3) => {
                            console.log(item3);
                            return (
                              <li
                                key={
                                  "ud-caseTx" +
                                  index1 +
                                  " " +
                                  index2 +
                                  " " +
                                  index3
                                }>
                                {item3.title} {item3.detail} {item3.amount}
                              </li>
                            );
                          });
                        })}
                      </ol>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <UnderlyLast lastUd={listCase[0]} />
      </div>
      {isDoctor && (
        <div className="ud-body-footer">
          <UnderlyAction
            handleClickAddUD={handleClickAddUD}
            udName={selectUd.udTitle}
          />
          <UnderlyFollowUp />
        </div>
      )}
    </div>
  );
}

export default UnderlyBody;
