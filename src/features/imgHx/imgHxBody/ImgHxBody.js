import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ImgHxBody.css";
import { useState } from "react";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/Modal";

function ImgHxBody({ selectImg }) {
  const [openImg, setOpenImg] = useState("");
  return (
    <div className="ih-body">
      {"Imaging"}
      <br />
      {selectImg &&
        JSON.parse(selectImg?.Imaging?.imgArray)?.map((item1, index1) => {
          return item1.img?.map((item2, index2) => {
            return (
              <button
                className="img-file-button"
                key={"ihimg-img" + index1 + " " + index2}
                onClick={() => {
                  setOpenImg(item2);
                }}>
                <FontAwesomeIcon icon={faFile} style={{ fontSize: "2.5rem" }} />
                <br />
                <small>{item1.name + index2}</small>
              </button>
            );
          });
        })}
      <Modal
        title="Imaging History Image"
        isOpen={Boolean(openImg)}
        onClose={() => setOpenImg("")}>
        {openImg && (
          <img
            src={"http://localhost:8008/images/" + openImg}
            alt=""
            className="img-fluid"
          />
        )}
      </Modal>
    </div>
  );
}

export default ImgHxBody;
