import { useState, useRef, useEffect, useCallback } from "react";
import PePicIcon from "./pePicIcon/PePicIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import "./ModalPic.css";
import { formatListToString } from "../../../../utility/formatString";

function ModalPic({ updateRecord, initialList }) {
  const [listPic, setListPic] = useState([...(initialList || [])]);
  const [picSrc, setPicSrc] = useState("");

  const fileEl = useRef();

  useEffect(() => {
    updateRecord(formatListToString(listPic));
  }, [listPic]);
  console.log(listPic);
  return !picSrc ? (
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
        <button>Take Photo</button>
      </div>
    </div>
  ) : (
    <div className="pe-home-img">
      <button onClick={() => setPicSrc("")}>
        <small>{"close"}</small>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
      <img src={URL.createObjectURL(picSrc)} alt="" />
    </div>
  );
}

export default ModalPic;
