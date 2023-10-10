import { useEffect, useState } from "react";
import { usePastHx } from "../../../contexts/PastContext";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import "./PastNav.css";
import { DOCTOR } from "../../../config/constant";

function PastNav() {
  const { listAllPast, changeSelectedCase, typeaccount } = usePastHx();
  const [selectedItemId, setSelectedItemId] = useState(listAllPast[0]?.id);

  useEffect(() => {
    const lastItem = listAllPast[0];
    setSelectedItemId(lastItem?.id);
  }, [listAllPast]);

  return (
    <div className="ph-navBar-container">
      <div
        className={`ph-navBar ${
          typeaccount !== DOCTOR && "ph-navBar-defualt"
        }`}>
        {listAllPast?.map((item, index) => {
          return (
            <div
              className={`ph-nav-item ${
                selectedItemId === item?.id ? "ph-nav-selected" : ""
              }`}
              key={"ph-navbar" + index}
              onClick={() => {
                setSelectedItemId(item?.id);
                changeSelectedCase(item?.id);
              }}>
              {formatCreatedAt(item.updatedAt)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PastNav;
