import EditDrugUd from "../../../../components/editDrugUd/EditDrugUd";
import FollowUp from "../../../../components/examForm/followUp/FollowUp";
import { validateDrugUd } from "../../../../utility/validate/validateUnderly";
import "./UnderlyAction.css";
import { useState, useEffect } from "react";

function UnderlyAction({
  handleClickAddUD,
  udName,
  drugOnTime,
  deleteDrug,
  editTxObj,
  fuDetail,
  handleChangeFuDetail,
}) {
  const [udObj, setUdObj] = useState({
    title: "",
    detail: "",
    amount: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [isEdit, setIsEdit] = useState("");

  useEffect(() => {
    setErrMessage("");
    setIsEdit("");
  }, [udName]);

  return (
    <div className="ud-action">
      <div className="ud-show">
        {drugOnTime && drugOnTime[1]?.length > 0 ? (
          <div className="ud-show-display">
            {drugOnTime[1]?.map((item, index) => {
              return (
                <div
                  key={"drugOnTime" + index}
                  className="drugOnTime-container">
                  {isEdit === index ? (
                    <EditDrugUd
                      inputObj={item}
                      callBack={(inputObj) => {
                        editTxObj(udName, index, inputObj);
                        setIsEdit("");
                      }}
                    />
                  ) : (
                    <div className="drugOnTime-show">
                      {item?.title} {item?.detail}{" "}
                      {item?.amount ? "#" + item?.amount : ""}
                    </div>
                  )}
                  <div className="btn-group">
                    <button
                      className={`btn ${
                        isEdit === index ? "btn-secondary" : "btn-success"
                      }`}
                      onClick={() =>
                        setIsEdit((prev) => (isEdit === index ? "" : index))
                      }>
                      edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteDrug(drugOnTime[1], index)}>
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h4 className="ud-show-display">- No drug prescript -</h4>
        )}
        <FollowUp fromUd={true} />
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
        </div>

        <button
          className="ud-action-drug-button btn btn-success"
          onClick={() => {
            let errMess = validateDrugUd(
              (drugOnTime && drugOnTime[1])?.map((item) => item?.title),
              udObj
            );
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
      <textarea
        className="form-control"
        rows={5}
        value={fuDetail}
        onChange={(e) => handleChangeFuDetail(e.target.value)}
        placeholder="detail"></textarea>
    </div>
  );
}

export default UnderlyAction;
