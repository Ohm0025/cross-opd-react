import "./DrUnfinishCase.css";

import { paginateIndex } from "../../../../utility/pagination";
import { useState } from "react";
import DrUnfinishHeader from "./drUnfinishHeader/DrUnfinishHeader";
import DrUnFinishItem from "./drUnfinishItem/DrUnfinishItem";
import DrUnfinishFooter from "./drUnfinishFooter/DrUnfinishFooter";

function DrUnfinishCase({ unfinishCaseList }) {
  const [amount, setAmount] = useState(5);
  const [displayAmount, setDisplayAmount] = useState(5);
  const [page, setPage] = useState(unfinishCaseList.length ? 1 : 0);

  const finalUnfinishCaseList = unfinishCaseList
    .sort((a, b) => a.updatedAt < b.updatedAt)
    .slice(
      paginateIndex(amount, page).startIndex,
      paginateIndex(amount, page).endIndex
    );

  return (
    <div className="unfinish-table">
      <DrUnfinishHeader
        page={page}
        length={unfinishCaseList.length}
        amount={amount}
      />
      {unfinishCaseList.length ? (
        finalUnfinishCaseList.map((item, index) => (
          <DrUnFinishItem
            keyItem={index + "unfinishCase"}
            itemId={item.patientId}
            itemTime={item.updatedAt}
          />
        ))
      ) : (
        <b style={{ textAlign: "center", fontSize: "1.4rem", padding: "1rem" }}>
          ยังไม่มีเคสที่ตรวจไปแล้ว
        </b>
      )}

      <DrUnfinishFooter
        displayAmount={displayAmount}
        changeDisplayAmount={(e) => setDisplayAmount(e.target.value)}
        changeAmount={(value) => setAmount(value)}
        nextPage={() => setPage((prev) => prev + 1)}
        prevPage={() => setPage((prev) => prev && prev - 1)}
        page={page}
        length={unfinishCaseList.length}
        amount={amount}
      />
    </div>
  );
}

export default DrUnfinishCase;
