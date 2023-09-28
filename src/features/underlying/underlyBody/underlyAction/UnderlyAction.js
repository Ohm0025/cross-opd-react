import "./UnderlyAction.css";
import { useState } from "react";

function UnderlyAction({ handleClickAddUD, udName }) {
  const [listNewDrug, setListNewDrug] = useState([]);
  const [udObj, setUdObj] = useState({
    title: "",
    detail: "",
    amount: "",
  });
  return (
    <div className="ud-action">
      <div className="ud-show">
        {listNewDrug.length > 0 ? (
          <div className="ud-show-display">
            {listNewDrug?.map((item) => {
              return <div>{item}</div>;
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
              placeholder="drug name"
              onChange={(e) =>
                setUdObj((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
            <textarea
              className=""
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
              placeholder="amount"
              size={9}
              onChange={(e) =>
                setUdObj((prev) => {
                  return { ...prev, amount: e.target.value };
                })
              }
            />
          </div>
          <textarea
            className="form-control"
            rows={5}
            placeholder="detail"></textarea>
        </div>
        <button
          className="ud-action-drug-button btn btn-success"
          onClick={() => handleClickAddUD(udName, udObj)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default UnderlyAction;
