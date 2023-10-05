import { validateDrugUd } from "../../../../utility/validate/validateUnderly";
import "./UnderlyAction.css";
import { useState } from "react";

function UnderlyAction({ handleClickAddUD, udName, drugOnTime }) {
  const [udObj, setUdObj] = useState({
    title: "",
    detail: "",
    amount: "",
  });
  const [errMessage, setErrMessage] = useState("");
  return (
    <div className="ud-action">
      <div className="ud-show">
        {drugOnTime && drugOnTime[1]?.length > 0 ? (
          <div className="ud-show-display">
            {drugOnTime[1]?.map((item, index) => {
              return (
                <div key={"drugOnTime" + index}>
                  {item?.title} {item?.detail}
                </div>
              );
            })}
          </div>
        ) : (
          <h4 className="ud-show-display">- No drug prescript -</h4>
        )}
        <button className="btn btn-secondary button-remed">Re-med</button>
      </div>
      <div className="ud-action-drug">
        <div className="ud-action-drug-input">
          <div className="ud-action-drug-inputDrugObj">
            <input
              className=""
              value={udObj?.title || ""}
              placeholder="drug name"
              onChange={(e) =>
                setUdObj((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
            <textarea
              className=""
              value={udObj?.detail || ""}
              onChange={(e) =>
                setUdObj((prev) => {
                  return { ...prev, detail: e.target.value };
                })
              }
              placeholder="drug use"
              rows={1}
              cols={50}
            />
            <input
              className=""
              value={udObj?.amount || ""}
              placeholder="amount"
              size={9}
              onChange={(e) =>
                setUdObj((prev) => {
                  return { ...prev, amount: e.target.value };
                })
              }
            />
          </div>
          {errMessage && <small className="text-danger">{errMessage}</small>}
          <textarea
            className="form-control"
            rows={5}
            placeholder="detail"></textarea>
        </div>
        <button
          className="ud-action-drug-button btn btn-success"
          onClick={() => {
            let errMess = validateDrugUd(
              (drugOnTime && drugOnTime[1])?.map((item) => item?.title),
              udObj
            );
            console.log(errMess);
            if (errMess) {
              setErrMessage(errMess);
              return;
            }
            handleClickAddUD(udName, udObj);
            setUdObj((prev) => {
              return {
                title: "",
                detail: "",
                amount: "",
              };
            });
            setErrMessage("");
          }}>
          Add
        </button>
      </div>
    </div>
  );
}

export default UnderlyAction;
