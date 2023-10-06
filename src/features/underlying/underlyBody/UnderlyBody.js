import "./UnderlyBody.css";
import * as underlyService from "../../../api/underlyApi";
import { useEffect, useState } from "react";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import UnderlyLast from "../underlyLast/UnderlyLast";
import UnderlyAction from "./underlyAction/UnderlyAction";
import UnderlyFollowUp from "./underlyFollowUp/UnderlyFollowUp";
import UnderlyItem from "./underlyItem/UnderlyItem";
import ButtonReMed from "../../../components/buttonRemed/ButtonReMed";
import { formatStrToObj } from "../../../utility/formatUd";

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
    if (!recordObj?.diag.includes(udName)) {
      updateList("diag", udName);
      updateTxObj(udName, {
        title: udDrugObj.title,
        type: "drug",
        detail: `${udDrugObj.detail} # ${udDrugObj.amount}`,
      });
    } else {
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
                      <div className="table-selectCase">
                        <div>
                          {item1.caseTreatment.map((item2, index2) => {
                            return item2[1].map((item3, index3) => {
                              return (
                                <UnderlyItem
                                  key={
                                    "ud-caseTx" +
                                    index1 +
                                    " " +
                                    index2 +
                                    " " +
                                    index3
                                  }
                                  item={item3}
                                  index={+index3}
                                />
                              );
                            });
                          })}
                        </div>
                        <ButtonReMed
                          handleOnClick={() => {
                            item1.caseTreatment[0][1].forEach((item) => {
                              handleClickAddUD(
                                selectUd?.udTitle,
                                formatStrToObj(item)
                              );
                            });
                          }}
                        />
                      </div>
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
            deleteDrug={(inputTxArr, selectIndex) =>
              updateRecordObj(
                "tx",
                selectUd.udTitle,
                inputTxArr.filter((item, index) => index !== selectIndex)
              )
            }
            udName={selectUd.udTitle}
            drugOnTime={Object.entries(recordObj.tx).find(
              (item) => item[0] === selectUd?.udTitle
            )}
          />
          <UnderlyFollowUp />
        </div>
      )}
    </div>
  );
}

export default UnderlyBody;
