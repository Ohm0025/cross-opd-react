import AmountBox from "./amountBox/AmountBox";
import "./DrUnfinishFooter.css";
import PageBox from "./pageBox/PageBox";

function DrUnfinishFooter({
  displayAmount,
  changeDisplayAmount,
  changeAmount,
  amount,
  page,
  length,
  nextPage,
  prevPage,
}) {
  return (
    <div className="unfinish-footer">
      <AmountBox
        displayAmount={displayAmount}
        changeAmount={changeAmount}
        page={page}
        length={length}
        changeDisplayAmount={changeDisplayAmount}
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

export default DrUnfinishFooter;
