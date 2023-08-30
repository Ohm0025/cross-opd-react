import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePastHx } from "../../../contexts/PastContext";
import "./PastBody.css";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { formatStringToArr } from "../../../utility/formatString";
import Modal from "../../../components/Modal";

function PastBody() {
  const { selectedCase } = usePastHx();
  const [openImg, setOpenImg] = useState("");
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
              className=""
              key={"phpe-img" + index}
              onClick={() => setOpenImg(item)}
            >
              <FontAwesomeIcon icon={faFile} />
            </button>
          );
        }
      )}
      <br />
      <br />
      {"Diagnosis : "}
      <br />
      {selectedCase?.Diagnoses.map((item, index) => {
        return (
          <>
            <span key={"diagName" + index}>
              {index + 1 + ". "}
              {item.diagName}
            </span>
            <br />
          </>
        );
      })}
      <br />
      {"Detail : "}
      <br />
      {selectedCase?.DetailDiag.detail}
      <br />
      <br />
      {"Advice : "}
      <br />
      {selectedCase?.Advice.detail}
      <br />
      <br />
      {"Follow up : "}
      {selectedCase?.FollowUp.fuHos} {selectedCase?.FollowUp.fuOPD}
      <br />
      {selectedCase?.FollowUp.fuDetail} {selectedCase?.FollowUp.fuDate}
      <Modal
        title="Physical Examination Image"
        isOpen={Boolean(openImg)}
        onClose={() => setOpenImg("")}
      >
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
