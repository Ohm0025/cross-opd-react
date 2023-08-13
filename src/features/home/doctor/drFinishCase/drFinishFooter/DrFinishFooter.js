import "./DrFinishFooter.css";

import AmountBox from "../../drUnfinishCase/drUnfinishFooter/amountBox/AmountBox";
import PageBox from "../../drUnfinishCase/drUnfinishFooter/pageBox/PageBox";

function DrFinishFooter({
  displayAmount,
  changeDisplayAmount,

  amount,
  changeAmount,

  page,
  nextPage,
  prevPage,

  length,
}) {
  return (
    <div className="finish-footer">
      <AmountBox
        displayAmount={displayAmount}
        changeDisplayAmount={changeDisplayAmount}
        page={page}
        changeAmount={changeAmount}
        length={length}
      />
      <PageBox
        prevPage={prevPage}
        nextPage={nextPage}
        page={page}
        length={length}
        amount={amount}
      />
    </div>
  );
}

export default DrFinishFooter;
