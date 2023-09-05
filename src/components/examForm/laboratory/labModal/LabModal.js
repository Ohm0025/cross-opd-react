import { useRef, useState } from "react";
import "./LabModal.css";
import LabPicIcon from "./labPicIcon/LabPicIcon";
import { useLab } from "../../../../contexts/LabContext";
import { formatStringToArr } from "../../../../utility/formatString";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function LabModal({ onClose, editLab, labItem }) {
  const { createNewLabItem } = useLab();

  console.log(editLab);

  const [labObj, setLabObj] = useState({
    name: editLab ? labItem?.name : "",
    status: editLab ? labItem?.status : "pending",
    des: editLab ? labItem?.des : "",
    img: editLab ? formatStringToArr(labItem?.img, " ") : "",
  });

  const resetLabObj = () => {
    setLabObj({
      name: "",
      status: "pending",
      des: "",
      img: "",
    });
  };

  const changeLabObj = (key, value) => {
    setLabObj((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [openPic, setOpenPic] = useState({
    switch: false,
    picSrc: "",
  });

  const fileEl = useRef();

  return openPic.switch ? (
    <div className="lab-home-img">
      <button onClick={() => setOpenPic({ switch: false, picSrc: "" })}>
        <small>{"close"}</small>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
      <div className="lab-home-img-div">
        <img
          alt="openPic.picSrc"
          src={
            typeof openPic.picSrc === "object"
              ? URL.createObjectURL(openPic.picSrc)
              : "http://localhost:8008/images/" + openPic.picSrc
          }
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
          value={labObj.name}
          onChange={(e) => changeLabObj("name", e.target.value)}
        />
      </div>
      <div className="lab-status input-group">
        <label htmlFor="lab-status">Lab Status </label>
        <select
          name=""
          id="lab-status"
          className="form-select"
          value={labObj.status}
          onChange={(e) => changeLabObj("status", e.target.value)}>
          <option className="lab-status-option" value="pending">
            Pending
          </option>
          <option className="lab-status-option" value="complete">
            Complete
          </option>
        </select>
      </div>
      {labObj.status === "complete" && (
        <div className="lab-result">
          <div className="lab-result-input">
            <textarea
              placeholder="add Lab result"
              className="form-control"
              rows={5}
              cols={40}
              value={labObj.des}
              onChange={(e) => changeLabObj("des", e.target.value)}
            />
            <div className="lab-pic-list">
              {labObj.img.length > 0 ? (
                <>
                  {labObj.img?.map((item, index) => (
                    <LabPicIcon
                      key={"labpicitem" + index}
                      labFile={item}
                      openPic={(file) =>
                        setOpenPic((prev) => {
                          return { switch: true, picSrc: file };
                        })
                      }
                      deletePic={(deletedPic) =>
                        changeLabObj(
                          "img",
                          labObj.img.filter((item) => item !== deletedPic)
                        )
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
                console.dir(e.target.files);
                console.dir(e.target.files[0].name);
                if (e.target.files?.length > 0) {
                  changeLabObj("img", [...labObj.img, ...e.target.files]);
                }
              }}></input>
            <button>Take Photo</button>
          </div>
        </div>
      )}
      <div className="lab-action">
        <button
          onClick={
            editLab
              ? () => {
                  editLab(labItem, labObj);
                  resetLabObj();
                  onClose();
                }
              : () => {
                  createNewLabItem(labObj);
                  if (labObj.img.length > 0) {
                    fileEl.current.value = "";
                  }
                  resetLabObj();
                  onClose();
                }
          }>
          {editLab ? "Edit" : "Add"}
        </button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default LabModal;
