import { useRef, useEffect } from "react";
import "./PageBox.css";

function PageBox({ page, prevPage, nextPage, amount, length }) {
  const pageButtonLeft = useRef();
  const pageButtonRight = useRef();

  useEffect(() => {
    if (page <= 1) {
      pageButtonLeft.current.setAttribute("disabled", "");
    } else {
      pageButtonLeft.current.removeAttribute("disabled");
    }

    if (page === Math.ceil(length / amount)) {
      pageButtonRight.current.setAttribute("disabled", "");
    } else {
      pageButtonRight.current.removeAttribute("disabled");
    }
  }, [page, amount, length]);
  return (
    <div className="page-box">
      <span>page</span>
      <button
        className={`page-left-arrow`}
        ref={pageButtonLeft}
        onClick={prevPage}
      >
        &laquo;
      </button>
      <span>{page}</span>
      <button
        className="page-right-arrow"
        ref={pageButtonRight}
        onClick={nextPage}
      >
        &raquo;
      </button>
    </div>
  );
}

export default PageBox;
