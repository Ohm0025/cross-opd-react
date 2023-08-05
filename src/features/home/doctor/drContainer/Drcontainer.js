import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "./DrContainer.css";
import { useCaseDoctor } from "../../../../contexts/CaseDoctorContext";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { paginateIndex } from "../../../../utility/pagination";

function DrContainer() {
  const { handleSearchCard, finishCaseList, unfinishCaseList } =
    useCaseDoctor();
  const [patientId, setPatientId] = useState("");
  const [socket, setSocket] = useState(null);
  const [amount, setAmount] = useState(5);
  const [displayAmount, setDisplayAmount] = useState(5);
  const [page, setPage] = useState(1);

  const finalUnfinishCaseList = unfinishCaseList
    .sort((a, b) => a.updatedAt < b.updatedAt)
    .slice(
      paginateIndex(amount, page).startIndex,
      paginateIndex(amount, page).endIndex
    );

  const [isOpen, setIsOpen] = useState(false);
  const amountEl = useRef();
  const arrowEl = useRef();

  const pageButtonLeft = useRef();
  const pageButtonRight = useRef();

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

  const closeDropDown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setSocket(io("http://localhost:8008"));
  }, []);

  useEffect(() => {
    if (page === 1) {
      pageButtonLeft.current.setAttribute("disabled", "");
    } else {
      pageButtonLeft.current.removeAttribute("disabled");
    }

    if (page === Math.ceil(unfinishCaseList.length / amount)) {
      pageButtonRight.current.setAttribute("disabled", "");
    } else {
      pageButtonRight.current.removeAttribute("disabled");
    }
  }, [page, amount, unfinishCaseList]);
  return (
    <div>
      <div className="search-container">
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            placeholder="insert patient id"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              handleSearchCard(+patientId);
              socket?.emit("activatedOpd", patientId);
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="unfinish-table">
          <tr>
            Unfinish Case{" "}
            <small>
              {page + "/" + Math.ceil(unfinishCaseList.length / amount)}
            </small>
          </tr>
          {finalUnfinishCaseList.map((item, index) => (
            <tr key={index + "unfinishCase"}>
              <td>{"ID : " + item.patientId}</td>
              <td>
                {" time : " +
                  new Date(item.updatedAt).toTimeString().split(" ")[0]}
              </td>
            </tr>
          ))}

          <tr>
            <div className="amount-box">
              <span>{`amount`}</span>
              <span>{displayAmount}</span>

              <button onClick={() => setIsOpen((prev) => !prev)} ref={arrowEl}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>

              <div
                className={`dropdown-menu amount-rangeBox ${
                  isOpen ? "d-block" : ""
                }`}
                ref={amountEl}
              >
                <input
                  className="dropdown-item"
                  type="range"
                  name=""
                  id=""
                  min={1}
                  max={unfinishCaseList.length / page}
                  value={displayAmount}
                  onChange={(e) => setDisplayAmount(e.target.value)}
                  onMouseUp={(e) => {
                    setAmount(displayAmount);
                    closeDropDown();
                  }}
                />
              </div>
            </div>
            <span>page</span>
            <button
              className={`page-left-arrow`}
              ref={pageButtonLeft}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >
              &laquo;
            </button>
            <span>{page}</span>
            <button
              className="page-right-arrow"
              ref={pageButtonRight}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              &raquo;
            </button>
          </tr>
        </table>
        <table className="unfinish-table">
          <tr>Finish Case</tr>
          {finishCaseList.map((item, index) => (
            <tr key={index + "finishCase"}>{item.patientId}</tr>
          ))}
          <tr>
            <span>page</span>
            <span>{page}</span>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DrContainer;
