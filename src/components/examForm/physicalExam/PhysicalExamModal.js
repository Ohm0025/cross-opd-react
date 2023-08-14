import { useState } from "react";
import "./PhysicalExamModal.css";
import SubFormModal from "./subFormModal/SubFormModal";
import VitalSignForm from "./vitalSignForm/VitalSignForm";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertToListString } from "../../../utility/selectPEitem";

function PhysicalExamModal() {
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [listPE, setListPE] = useState({
    HEENT: [],
    Lung: [],
    Heart: [],
    Abdomen: [],
    Extremities: [],
    Neuro: [],
  });

  const [whichIs, setWhichIs] = useState("");

  const OpenIsRight = (e) => {
    setWhichIs((prev) => e.target.name);
    if (whichIs === e.target.name) {
      setIsRightOpen(false);
      setWhichIs("");
    } else {
      setIsRightOpen(true);
    }
  };

  const addPEList = (newValue, typePE) => {
    setListPE((prev) => {
      return { ...prev, [typePE]: [...prev[typePE], newValue] };
    });
  };

  const dropPEList = (typePE, removeValue) => {
    setListPE((prev) => {
      return {
        ...prev,
        [typePE]: prev[typePE].filter((item) => !item.includes(removeValue)),
      };
    });
  };

  return (
    <div className="subPE-container">
      <VitalSignForm />
      <div className="subPE-input">
        <div className="subPE-input-left">
          <SubFormModal
            typePe={"HEENT"}
            OpenIsRight={OpenIsRight}
            addPEList={addPEList}
            whichIs={whichIs}
            listTemplate={[
              "detail HEENT 1",
              "detail HEENT 2",
              "detail HEENT 3",
            ]}
          />
          <SubFormModal
            typePe={"Lung"}
            whichIs={whichIs}
            addPEList={addPEList}
            OpenIsRight={OpenIsRight}
            listTemplate={["detail lung 1", "detail lung 2", "detail lung 3"]}
          />
          <SubFormModal
            typePe={"Heart"}
            whichIs={whichIs}
            addPEList={addPEList}
            OpenIsRight={OpenIsRight}
            listTemplate={[
              "detail HEENT 1",
              "detail HEENT 2",
              "detail HEENT 3",
            ]}
          />
          <SubFormModal
            typePe={"Abdomen"}
            whichIs={whichIs}
            addPEList={addPEList}
            OpenIsRight={OpenIsRight}
            listTemplate={["detail lung 1", "detail lung 2", "detail lung 3"]}
          />
          <SubFormModal
            typePe={"Extremities"}
            whichIs={whichIs}
            addPEList={addPEList}
            OpenIsRight={OpenIsRight}
            listTemplate={[
              "detail HEENT 1",
              "detail HEENT 2",
              "detail HEENT 3",
            ]}
          />
          <SubFormModal
            typePe={"Neuro"}
            whichIs={whichIs}
            addPEList={addPEList}
            OpenIsRight={OpenIsRight}
            listTemplate={["detail lung 1", "detail lung 2", "detail lung 3"]}
          />
        </div>
        <div className="subPE-input-right">
          {isRightOpen ? (
            <div className="sub-PE-right-textarea">
              <textarea autoFocus name="" id="" cols="35" rows="5"></textarea>
              <button>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* <textarea
        value={convertToListString(listPE)}
        name=""
        id=""
        rows="5"
        className="form-control"
      ></textarea> */}
      <div className="PE-template-conclude">
        {convertToListString(listPE, dropPEList)}
      </div>
      <button className="button-addPeTemp">Finish Record</button>
    </div>
  );
}

export default PhysicalExamModal;
