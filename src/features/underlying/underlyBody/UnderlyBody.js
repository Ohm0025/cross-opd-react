import "./UnderlyBody.css";
import * as underlyService from "../../../api/underlyApi";
import { useEffect, useState } from "react";
import UnderlyLast from "../underlyLast/UnderlyLast";
import UnderlyAction from "./underlyAction/UnderlyAction";
import { formatStrToObj } from "../../../utility/formatUd";
import UnderlyTable from "../../../components/underlyTable/UnderlyTable";

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

  useEffect(() => {
    const fetchCase = async () => {
      const res = await underlyService.fetchUnderlyTreat(
        patientId,
        selectUd.udTitle
      );
      setListCase((prev) => [...res.data?.sendingArr]);
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

  const handleClickRemed = (txArr) => {
    txArr.forEach((item) => {
      if (
        recordObj.tx[selectUd?.udTitle]?.find(
          (findItem) => findItem.title === item.title
        )
      ) {
        return;
      }
      handleClickAddUD(selectUd?.udTitle, formatStrToObj(item));
    });
  };

  return (
    <div className="ud-body-container">
      <div className="ud-body-header">{selectUd.udTitle}</div>
      <div className="ud-body-center">
        <UnderlyTable
          listCase={listCase}
          isDoctor={isDoctor}
          handleClickRemed={handleClickRemed}
        />
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
            editTxObj={editTxObj}
            drugOnTime={Object.entries(recordObj.tx).find(
              (item) => item[0] === selectUd?.udTitle
            )}
            fuDetail={recordObj.ad?.detail || ""}
            handleChangeFuDetail={(inputText) =>
              updateRecordObj("ad", "detail", inputText)
            }
          />
        </div>
      )}

      <br />
    </div>
  );
}

export default UnderlyBody;
