import { DOCTOR, PATIENT } from "../../../config/constant";
import "./AllergyEmpty.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AllergyEmpty({ typeaccount, openModal }) {
  return (
    <>
      {typeaccount === PATIENT ? (
        <h2 className="allergy-empty">ไม่มีประวัติการแพ้ยามาก่อน</h2>
      ) : (
        <>
          {typeaccount === DOCTOR ? (
            <div className="allergy-empty">
              {"No Allergy History"} <br />
              {"Click + to add new allergy"}
              <div className="allergy-empty-action">
                <button onClick={openModal}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default AllergyEmpty;
