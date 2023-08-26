import { useRef, useState } from "react";
import "./LabModal.css";
import LabPicIcon from "./labPicIcon/LabPicIcon";
import { useLab } from "../../../../contexts/LabContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function LabModal({
  onClose,
  labname,
  labstatus,
  labdes,
  labimg,
  editLab,
  labItem,
}) {
  const { createNewLabItem } = useLab();

  const [openPic, setOpenPic] = useState({
    switch: false,
    picSrc: "",
  });

  const [listPic, setListPic] = useState(labimg || []);
  const [labName, setLabName] = useState(labname || "");
  const [labStatus, setLabStatus] = useState(labstatus || "pending");
  const [labDes, setLabDes] = useState(labdes || "");

  const fileEl = useRef();

  return openPic.switch ? (
    <div className="lab-home-img">
      <button onClick={() => setOpenPic({ switch: false, picSrc: "" })}>
        <small>{"close"}</small>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
      <div className="lab-home-img-div">
        <img
          alt=""
          src={URL.createObjectURL(openPic.picSrc)}
          className="img-fluid"
        />
      </div>
    </div>
  ) : (
    <div className="lab-modal">
      <div className="lab-name input-group">
        <label htmlFor="lab-name">Lab Name </label>
        <input
          type="text"
          className="form-control"
          id="lab-name"
          value={labName}
          onChange={(e) => setLabName(e.target.value)}
        />
      </div>
      <div className="lab-status input-group">
        <label htmlFor="lab-status">Lab Status </label>
        <select
          name=""
          id="lab-status"
          className="form-select"
          value={labStatus}
          onChange={(e) => setLabStatus(e.target.value)}
        >
          <option className="lab-status-option" value="pending">
            Pending
          </option>
          <option className="lab-status-option" value="complete">
            Complete
          </option>
        </select>
      </div>
      {labStatus === "complete" && (
        <div className="lab-result">
          <div className="lab-result-input">
            <textarea
              placeholder="add Lab result"
              className="form-control"
              rows={5}
              cols={40}
              value={labDes}
              onChange={(e) => setLabDes(e.target.value)}
            />
            <div className="lab-pic-list">
              {listPic.length > 0 ? (
                <>
                  {listPic.map((item, index) => (
                    <LabPicIcon
                      key={"labpicitem" + index}
                      labFile={item}
                      openPic={(file) =>
                        setOpenPic((prev) => {
                          return { switch: true, picSrc: file };
                        })
                      }
                      deletePic={(deletedPic) =>
                        setListPic((prev) => {
                          return prev.filter((item) => item !== deletedPic);
                        })
                      }
                    />
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="lab-result-button">
            <button onClick={() => fileEl.current.click()}>Add Photo</button>
            <input
              type="file"
              multiple
              className="d-none"
              ref={fileEl}
              onChange={(e) => {
                if (e.target.files?.length > 0) {
                  setListPic((prev) => {
                    return [...prev, ...e.target.files];
                  });
                }
              }}
            ></input>
            <button>Take Photo</button>
          </div>
        </div>
      )}
      <div className="lab-action">
        <button
          onClick={
            editLab
              ? () => {
                  editLab(labItem, {
                    name: labName,
                    status: labStatus,
                    des: labDes,
                    img: listPic,
                  });
                  onClose();
                }
              : () => {
                  createNewLabItem({
                    name: labName,
                    status: labStatus,
                    des: labDes,
                    img: listPic,
                  });
                  if (listPic.length > 0) {
                    setListPic([]);
                    fileEl.current.value = "";
                  }
                  onClose();
                }
          }
        >
          {editLab ? "Edit" : "Add"}
        </button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default LabModal;
