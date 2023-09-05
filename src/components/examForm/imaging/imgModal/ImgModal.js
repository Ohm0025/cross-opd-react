import { useState, useRef } from "react";
import { useImg } from "../../../../contexts/ImagingContext";
import "./ImgModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ImgPicItem from "./imgPicItem/ImgPicItem";

function ImgModal({
  onClose,
  imgname,
  imgstatus,
  imgdes,
  imgimg,
  editImg,
  imgItem,
}) {
  const { createNewImgItem } = useImg();
  const [openPic, setOpenPic] = useState({
    switch: false,
    picSrc: "",
  });
  const [imgName, setImgName] = useState(imgname || "");
  const [imgStatus, setImgStatus] = useState(imgstatus || "pending");
  const [imgDes, setImgDes] = useState(imgdes || "");
  const [listPic, setListPic] = useState(imgimg || []);

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
    <div className="img-modal">
      <div className="img-name input-group">
        <label htmlFor="img-name">Imaging Name</label>
        <input
          type="text"
          className="form-control"
          id="img-name"
          value={imgName}
          onChange={(e) => setImgName(e.target.value)}
        />
      </div>
      <div className="img-status input-group">
        <label htmlFor="img-status">Imaging Status</label>
        <select
          name=""
          id="img-status"
          className="form-select"
          value={imgStatus}
          onChange={(e) => setImgStatus(e.target.value)}>
          <option className="lab-status-option" value="pending">
            Pending
          </option>
          <option className="lab-status-option" value="complete">
            Complete
          </option>
        </select>
      </div>
      {imgStatus === "complete" && (
        <div className="img-result">
          <div className="lab-result-input">
            <textarea
              placeholder="add imaging result"
              className="form-control"
              cols="40"
              rows="5"
              value={imgDes}
              onChange={(e) => setImgDes(e.target.value)}></textarea>
            <div className="img-pic-list">
              {listPic.length > 0 && (
                <>
                  {listPic.map((item, index) => {
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
                          setListPic((prev) => {
                            return prev.filter((item) => item !== deletedPic);
                          })
                        }
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="img-result-button">
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
            />
            <button>Take Photo</button>
          </div>
        </div>
      )}
      <div className="img-action">
        <button
          onClick={
            editImg
              ? () => {
                  editImg(imgItem, {
                    name: imgName,
                    status: imgStatus,
                    des: imgDes,
                    img: listPic,
                  });
                  onClose();
                }
              : () => {
                  createNewImgItem({
                    name: imgName,
                    status: imgStatus,
                    des: imgDes,
                    img: listPic,
                  });
                  if (listPic.length > 0) {
                    setListPic([]);
                    fileEl.current.value = "";
                  }
                  onClose();
                }
          }>
          {editImg ? "Edit" : "Add"}
        </button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default ImgModal;
