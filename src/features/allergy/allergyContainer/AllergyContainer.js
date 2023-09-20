import AllergyCenter from "../allergyCenter/AllergyCenter";
import AllergyEmpty from "../allergyEmpty/AllergyEmpty";
import { useAllergy } from "../../../contexts/AllergyContext";
import "./AllergyContainer.css";

function AllergyContainer() {
  const { allergyObjList } = useAllergy();
  return (
    <div className="allergy-container">
      {allergyObjList.length > 0 ? (
        <AllergyCenter allergyObjList={allergyObjList} />
      ) : (
        <AllergyEmpty />
      )}
    </div>
  );
}

export default AllergyContainer;
