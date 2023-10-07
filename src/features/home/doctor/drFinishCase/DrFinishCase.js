import "./DrFinishCase.css";

import { useState } from "react";
import { paginateIndex } from "../../../../utility/pagination";

import DrFinishHeader from "./drFinishHeader/DrFinishHeader";
import DrFinishFooter from "./drFinishFooter/DrFinishFooter";
import DrUnFinishItem from "../drUnfinishCase/drUnfinishItem/DrUnfinishItem";

function DrFinishCase({ finishCaseList }) {
  const [amount, setAmount] = useState(5);
  const [page, setPage] = useState(1);
  const [displayAmount, setDisplayAmount] = useState(5);

  const finalFinishCaseList = finishCaseList
    .sort((a, b) => a.updatedAt < b.updatedAt)
    .slice(
      paginateIndex(amount, page).startIndex,
      paginateIndex(amount, page).endIndex
    );
  return (
    <div className="finish-table">
      <DrFinishHeader
        page={page}
        length={finishCaseList.length}
        amount={amount}
      />
      {finishCaseList.length ? (
        finalFinishCaseList.map((item, index) => (
          <DrUnFinishItem
            key={index + "finishCase"}
            itemId={item.patientId}
            itemTime={item.updatedAt}
          />
        ))
      ) : (
        <b className="finish-table-empty">ยังไม่มีเคสที่ตรวจไปแล้ว</b>
      )}
      <DrFinishFooter
        displayAmount={displayAmount}
        changeDisplayAmount={(e) => setDisplayAmount(e.target.value)}
        changeAmount={(value) => setAmount(value)}
        nextPage={() => setPage((prev) => prev + 1)}
        prevPage={() => setPage((prev) => prev && prev - 1)}
        page={page}
        length={finishCaseList.length}
        amount={amount}
      />
    </div>
  );
}

export default DrFinishCase;
