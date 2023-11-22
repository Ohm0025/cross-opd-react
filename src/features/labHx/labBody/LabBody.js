import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LabBody.css";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../../../components/Modal";
import LabBodyItem from "./labBodyItem/LabBodyItem";

function LabBody({ selectLab }) {
  const [openImg, setOpenImg] = useState("");
  return (
    <div className="lh-body">
      {selectLab &&
        JSON.parse(selectLab?.LabOrder?.labArray)?.map((item1, index1) => {
          return (
            <div
              key={"lh-body-item" + index1}
              className="lh-body-item-container">
              <LabBodyItem labName={item1.name} labDes={item1.des} />
              {item1.img?.map((item2, index2) => {
                return (
                  <button
                    className="lab-file-button"
                    key={"lhlab-img" + index1 + " " + index2}
                    onClick={() => {
                      setOpenImg(item2);
                    }}>
                    <FontAwesomeIcon
                      icon={faFile}
                      style={{ fontSize: "2.5rem" }}
                    />
                    <br />
                    <small>{item1.name + index2}</small>
                  </button>
                );
              })}
            </div>
          );
        })}
      <Modal
        title="Lab History Image"
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

export default LabBody;
