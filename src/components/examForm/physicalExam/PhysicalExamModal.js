import { useState } from "react";
import "./PhysicalExamModal.css";
import SubFormModal from "./subFormModal/SubFormModal";
import VitalSignForm from "./vitalSignForm/VitalSignForm";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  convertToListItem,
  convertToListString,
  convertVitalSign,
} from "../../../utility/selectPEitem";

function PhysicalExamModal({ updateRecord }) {
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

  const [vitalRecord, setVitalRecord] = useState({
    BP: "",
    PR: "",
    RR: "",
    Temp: "",
  });

  const [recordMore, setRecordMore] = useState("");

  const OpenIsRight = (e) => {
    setWhichIs((prev) => e.target.name);
    if (whichIs === e.target.name) {
      setIsRightOpen(false);
      setWhichIs("");
    } else {
      setIsRightOpen(true);
    }
    setRecordMore("");
  };

  const addPEList = (newValue, typePE) => {
    if (!listPE[typePE].includes(newValue)) {
      setListPE((prev) => {
        return { ...prev, [typePE]: [...prev[typePE], newValue] };
      });
    }
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
      <VitalSignForm
        changeVitalRecord={(e) =>
          setVitalRecord((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          })
        }
      />
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
              <textarea
                value={recordMore}
                onChange={(e) => setRecordMore(e.target.value)}
                autoFocus
                name=""
                id=""
                cols="35"
                rows="5"
              ></textarea>
              <button
                onClick={() => {
                  addPEList(recordMore, whichIs);
                  setRecordMore("");
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="PE-template-conclude">
        {convertToListItem(listPE, dropPEList)}
      </div>
      <div className="PE-template-action">
        <button
          className="button-addPeTemp"
          onClick={() =>
            updateRecord(
              convertVitalSign(vitalRecord) + "\n" + convertToListString(listPE)
            )
          }
        >
          Finish Record
        </button>
        <button
          className="button-addPeTemp"
          onClick={() =>
            setListPE({
              HEENT: [],
              Lung: [],
              Heart: [],
              Abdomen: [],
              Extremities: [],
              Neuro: [],
            })
          }
        >
          Clear Record
        </button>
      </div>
    </div>
  );
}

export default PhysicalExamModal;
