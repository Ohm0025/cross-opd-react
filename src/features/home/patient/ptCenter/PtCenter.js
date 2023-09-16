import PtFollowPage from "../ptFollowPage/PtFollowPage";
import PtOpdForm from "../ptOpdForm/PtOpdForm";
import { useState } from "react";
import "./PtCenter.css";

function PtCenter() {
  const [isFollow, setIsFollow] = useState(false);
  return (
    <>
      <div className="pt-center-nav-button">
        <button
          className={`${isFollow || "selected"}`}
          onClick={() => setIsFollow(false)}>
          OPD
        </button>
        <button
          className={`${isFollow && "selected"}`}
          onClick={() => setIsFollow(true)}>
          FollowUp
        </button>
      </div>
      {isFollow ? <PtFollowPage /> : <PtOpdForm />}
    </>
  );
}

export default PtCenter;
