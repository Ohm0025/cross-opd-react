import "./AmountBox.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";

function AmountBox({
  displayAmount,
  length,
  page,
  changeDisplayAmount,
  changeAmount,
}) {
  const amountEl = useRef();
  const arrowEl = useRef();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      //เอาที่ไม่ได้อยู่ใน dropdown
      if (
        !amountEl.current.contains(e.target) &&
        !arrowEl.current.contains(e.target)
      ) {
        //เอาไว้เช็คว่า contains element ไว้หรือไม่
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside); //add eventListener เมื่อ mounting
    return () => document.removeEventListener("mousedown", handleClickOutside); //remove event เมื่อ unmounting
  }, []);

  return (
    <div className="amount-box">
      <span>{`amount`}</span>
      <span>{displayAmount}</span>

      <button onClick={() => setIsOpen(true)} ref={arrowEl}>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>

      <div
        className={`dropdown-menu amount-rangeBox ${
          isOpen ? "d-block" : "d-none"
        }`}
        ref={amountEl}
      >
        <input
          className="dropdown-item"
          type="range"
          name=""
          id=""
          min={1}
          max={length / page || 1}
          value={displayAmount}
          onChange={(e) => changeDisplayAmount(e)}
          onMouseUp={() => {
            changeAmount(displayAmount);
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default AmountBox;
