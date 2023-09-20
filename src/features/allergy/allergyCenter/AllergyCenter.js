import AllergyItem from "../allergyItem/AllergyItem";
import "./AllergyCenter.css";

function AllergyCenter({ allergyObjList }) {
  return (
    <div className="allergy-center">
      {allergyObjList.map((item, index) => {
        return <AllergyItem key={"allergyItem" + index} item={item} />;
      })}
    </div>
  );
}

export default AllergyCenter;
