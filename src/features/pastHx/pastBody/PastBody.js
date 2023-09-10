import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePastHx } from "../../../contexts/PastContext";
import "./PastBody.css";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { formatStringToArr } from "../../../utility/formatString";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import Modal from "../../../components/Modal";

function PastBody() {
  const { selectedCase } = usePastHx();
  const [openImg, setOpenImg] = useState("");
  console.log(selectedCase && JSON.parse(selectedCase?.Treatment?.txList));
  return (
    <div className="ph-body">
      {"Chief Complaint : "}
      <br />
      {selectedCase?.ChiefComplaint?.title}
      <br />
      <br />
      {"Present Illness : "}
      <br />
      {selectedCase?.PresentIll.title}
      <br />
      <br />
      {"Physical Examination : "}
      <br />
      {selectedCase?.PhysicalExam.examManual}
      <br />
      {selectedCase?.PhysicalExam.examTemplate}
      <br />
      <br />
      {formatStringToArr(selectedCase?.PhysicalExam.examImg, " ")?.map(
        (item, index) => {
          return (
            <button
              className="past-file-button"
              key={"phpe-img" + index}
              onClick={() => setOpenImg(item)}>
              <FontAwesomeIcon icon={faFile} style={{ fontSize: "2.5rem" }} />
            </button>
          );
        }
      )}
      <br />
      <br />
      {"Lab : "}
      <br />
      {selectedCase &&
        JSON.parse(selectedCase?.LabOrder?.labArray).map((item1, index1) => {
          return item1.img.map((item2, index2) => {
            return (
              <button
                className="past-file-button"
                key={"phlab-img" + index1 + " " + index2}
                onClick={() => setOpenImg(item2)}>
                <FontAwesomeIcon icon={faFile} style={{ fontSize: "2.5rem" }} />
                <br />
                <small>{item1.name + index2}</small>
              </button>
            );
          });
        })}
      <br />
      <br />
      {"Imaging : "}
      <br />
      {selectedCase &&
        JSON.parse(selectedCase?.Imaging?.imgArray).map((item1, index1) => {
          return item1.img.map((item2, index2) => {
            return (
              <button
                className="past-file-button"
                key={"phimg-img" + index1 + " " + index2}
                onClick={() => setOpenImg(item2)}>
                <FontAwesomeIcon icon={faFile} style={{ fontSize: "2.5rem" }} />
                <br />
                <small>{item1.name + index2}</small>
              </button>
            );
          });
        })}
      <br />
      <br />
      {"Diagnosis : "}
      <br />
      {selectedCase &&
        JSON.parse(selectedCase?.Diagnosis?.diagName).map((item, index) => {
          return (
            <div key={"diagName" + index}>
              <span>
                {index + 1 + ". "}
                {item}
              </span>
              <br />
            </div>
          );
        })}
      <br />
      {"Detail : "}
      <br />
      {selectedCase?.DetailDiag.detail}
      <br />
      <br />
      {"Treatment : "}
      <br />
      {selectedCase &&
        Object.keys(JSON.parse(selectedCase?.Treatment?.txList))?.map(
          (item1, index1) => {
            return JSON.parse(selectedCase?.Treatment?.txList)[item1].map(
              (item2, index2) => {
                return (
                  <div key={"txlistItem" + index1 + "" + index2}>
                    {item2.title + " " + item2.detail}
                  </div>
                );
              }
            );
          }
        )}
      <br />
      <br />
      {"Advice : "}
      <br />
      {selectedCase?.Advice.detail}
      <br />
      <br />
      {"Follow up : "}
      <br />
      {selectedCase?.FollowUp.fuHos} {selectedCase?.FollowUp.fuOPD}{" "}
      {selectedCase?.FollowUp.fuDetail}{" "}
      {formatCreatedAt(selectedCase?.FollowUp.fuDate)}
      <Modal
        title="Physical Examination Image"
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

export default PastBody;
// {openImg === item ? (
//   <img src={"http://localhost:8008/images/" + item} alt="" />
// ) : (
