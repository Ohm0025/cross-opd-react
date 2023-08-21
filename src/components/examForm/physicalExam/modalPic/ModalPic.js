import { useState, useRef, useEffect } from "react";
import PePicIcon from "./pePicIcon/PePicIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ModalCamera from "./modalCamera/ModalCamera";

import "./ModalPic.css";

function ModalPic({ updateRecord, initialList }) {
  const [listPic, setListPic] = useState(initialList);
  const [picSrc, setPicSrc] = useState("");

  const [isCam, setIsCam] = useState(false);

  const fileEl = useRef();

  useEffect(() => {
    updateRecord(listPic);
  }, [listPic]);

  return isCam ? (
    <ModalCamera
      updateListPic={(value) =>
        setListPic((prev) => {
          return [...prev, value];
        })
      }
      closeCam={() => setIsCam(false)}
    />
  ) : !picSrc ? (
    <div className="pe-pic-container">
      <div className="pe-pic-list">
        {listPic.length > 0 ? (
          <>
            {listPic?.map((item, index) => {
              return (
                <PePicIcon
                  peFile={item}
                  key={"picicon" + index}
                  openPic={(file) => setPicSrc(file)}
                  deletePic={(deletedPic) =>
                    setListPic((prev) =>
                      prev.filter((item) => item !== deletedPic)
                    )
                  }
                />
              );
            })}
          </>
        ) : (
          "No picture"
        )}
      </div>
      <div className="pe-pic-action">
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
        <button onClick={() => setIsCam(true)}>Take Photo</button>
      </div>
    </div>
  ) : (
    <div className="pe-home-img">
      <button onClick={() => setPicSrc("")}>
        <small>{"close"}</small>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
      <div className="pe-home-img-div">
        <img src={URL.createObjectURL(picSrc)} alt="" />
      </div>
    </div>
  );
}

export default ModalPic;
