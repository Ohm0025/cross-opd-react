import { useState, useRef } from "react";
import { useImg } from "../../../../contexts/ImagingContext";
import "./ImgModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ImgPicItem from "./imgPicItem/ImgPicItem";
import { formatStringToArr } from "../../../../utility/formatString";
import validateImg from "../../../../utility/validate/validateImg";
import Camera from "../../../camera/Camera";

function ImgModal({ onClose, editImg, imgItem }) {
  const { createNewImgItem } = useImg();
  const [openPic, setOpenPic] = useState({
    switch: false,
    picSrc: "",
  });

  const [isCam, setIsCam] = useState(false);

  const [imgObj, setImgObj] = useState({
    name: editImg ? imgItem?.name : "",
    status: editImg ? imgItem?.status : "pending",
    des: editImg ? imgItem?.des : "",
    img: editImg ? formatStringToArr(imgItem?.img, " ") : "",
  });

  const resetImgObj = () => {
    setImgObj({
      name: "",
      status: "pending",
      des: "",
      img: "",
    });
  };

  const changeImgObj = (key, value) => {
    setImgObj((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [errMessage, setErrMessage] = useState("");

  const fileEl = useRef();

  return openPic.switch ? (
    <div className="img-home-img">
      <button onClick={() => setOpenPic({ switch: false, picSrc: "" })}>
        <small>{"close"}</small>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
      <div className="img-home-img-div">
        <img
          src={
            typeof openPic.picSrc === "object"
              ? URL.createObjectURL(openPic.picSrc)
              : "http://localhost:8008/images/" + openPic.picSrc
          }
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  ) : (
    <>
      {isCam ? (
        <Camera
          onClose={() => setIsCam(false)}
          onUsePhoto={(photoFile) =>
            changeImgObj("img", [...imgObj.img, photoFile])
          }
        />
      ) : (
        <div className="img-modal">
          <div className="img-name input-group">
            <label htmlFor="img-name">Imaging Name</label>
            <input
              type="text"
              className={`form-control ${errMessage && "isError"}`}
              id="img-name"
              value={imgObj.name}
              onChange={(e) => changeImgObj("name", e.target.value)}
            />
          </div>
          {errMessage && <small className="text-danger">{errMessage}</small>}
          <div className="img-status input-group">
            <label htmlFor="img-status">Imaging Status</label>
            <select
              name=""
              id="img-status"
              className="form-select"
              value={imgObj.status}
              onChange={(e) => changeImgObj("status", e.target.value)}>
              <option className="lab-status-option" value="pending">
                Pending
              </option>
              <option className="lab-status-option" value="complete">
                Complete
              </option>
            </select>
          </div>
          {imgObj.status === "complete" && (
            <div className="img-result">
              <div className="lab-result-input">
                <textarea
                  placeholder="add imaging result"
                  className="form-control"
                  cols="40"
                  rows="5"
                  value={imgObj.des}
                  onChange={(e) =>
                    changeImgObj("des", e.target.value)
                  }></textarea>
                <div className="img-pic-list">
                  {imgObj.img.length > 0 && (
                    <>
                      {imgObj.img?.map((item, index) => {
                        return (
                          <ImgPicItem
                            key={"imgpicitem" + index}
                            imgFile={item}
                            openPic={(file) =>
                              setOpenPic((prev) => {
                                return { switch: true, picSrc: file };
                              })
                            }
                            deletePic={(deletedPic) =>
                              changeImgObj(
                                "img",
                                imgObj.img.filter((item) => item !== deletedPic)
                              )
                            }
                          />
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
              <div className="img-result-button">
                <button onClick={() => fileEl.current.click()}>
                  Add Photo
                </button>
                <input
                  type="file"
                  multiple
                  className="d-none"
                  ref={fileEl}
                  onChange={(e) => {
                    if (e.target.files?.length > 0) {
                      console.log(e.target.files);
                      changeImgObj("img", [...imgObj.img, ...e.target.files]);
                    }
                  }}
                />
                <button onClick={() => setIsCam(true)}>Take Photo</button>
              </div>
            </div>
          )}

          <div className="img-action">
            <button
              onClick={
                editImg
                  ? () => {
                      if (
                        validateImg(imgObj, (errText) => setErrMessage(errText))
                      ) {
                        editImg(imgItem, imgObj);
                        resetImgObj();
                        setErrMessage("");
                        onClose();
                      }
                    }
                  : () => {
                      if (
                        validateImg(imgObj, (errText) => setErrMessage(errText))
                      ) {
                        createNewImgItem(imgObj);
                        if (imgObj.img.length > 0) {
                          fileEl.current.value = "";
                        }
                        resetImgObj();
                        onClose();
                      }
                    }
              }>
              {editImg ? "Edit" : "Add"}
            </button>
            <button onClick={resetImgObj}>Clear</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImgModal;
