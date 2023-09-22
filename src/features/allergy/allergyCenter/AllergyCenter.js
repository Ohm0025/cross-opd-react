import AllergyItem from "../allergyItem/AllergyItem";
import "./AllergyCenter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DOCTOR } from "../../../config/constant";

function AllergyCenter({ allergyObjList, openModal, typeaccount }) {
  console.log(typeaccount);
  return (
    <div className="allergy-center">
      {allergyObjList.map((item, index) => {
        return <AllergyItem key={"allergyItem" + index} item={item} />;
      })}
      {typeaccount === DOCTOR && (
        <div className="allergy-empty-action">
          <button onClick={openModal}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      )}
    </div>
  );
}

export default AllergyCenter;
