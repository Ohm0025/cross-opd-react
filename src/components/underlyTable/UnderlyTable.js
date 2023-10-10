import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UnderlyTable.css";
import {
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { formatCreatedAt } from "../../utility/formatDataTime";
import ButtonReMed from "../../components/buttonRemed/ButtonReMed";

function UnderlyTable({ listCase = [], isDoctor, handleClickRemed }) {
  const [dateOrder, setDateOrder] = useState(true);
  const [selectCase, setSelectCase] = useState(null);

  useEffect(() => {
    setSelectCase((prev) => {
      let tempObj = !dateOrder
        ? listCase.toSorted(
            (a, b) =>
              new Date(a?.caseDate).getTime() - new Date(b?.caseDate).getTime()
          )[0]
        : listCase[0];
      return { ...tempObj };
    });
  }, [listCase, dateOrder]);

  return (
    <div className="ud-body-table">
      <div className="ud-body-table-header">
        <span>
          Date
          <button onClick={() => setDateOrder((prev) => !prev)}>
            <FontAwesomeIcon
              icon={dateOrder ? faArrowCircleUp : faArrowCircleDown}
            />
          </button>
        </span>
        <span>Detail</span>
      </div>
      <div className="ud-body-table-body">
        <div className="ud-body-table-body-date">
          {(!dateOrder
            ? listCase.toSorted(
                (a, b) =>
                  new Date(a?.caseDate).getTime() -
                  new Date(b?.caseDate).getTime()
              )
            : listCase
          ).map((item1, index1) => {
            return (
              <div
                key={"underly-body-header" + index1}
                role="button"
                onClick={() =>
                  setSelectCase((prev) => {
                    return { ...item1 };
                  })
                }>
                {formatCreatedAt(item1.caseDate)}
              </div>
            );
          })}
        </div>
        <div className="ud-body-table-body-detail">
          {selectCase &&
            selectCase?.caseTreatment?.map((item2, index2) => {
              return item2[1].map((item3, index3) => {
                return (
                  <div key={"underlyItem" + index2 + " " + index3}>
                    {index3 + 1 + "."} {item3.title}
                    {item3.detail} {item3.amount}
                  </div>
                );
              });
            })}
          {isDoctor && (
            <ButtonReMed
              handleOnClick={() =>
                handleClickRemed(selectCase?.caseTreatment[0][1])
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default UnderlyTable;
