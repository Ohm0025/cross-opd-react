import { useEffect, useState } from "react";
import { usePastHx } from "../../../contexts/PastContext";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import "./PastNav.css";

function PastNav() {
  const { listAllPast, changeSelectedCase } = usePastHx();
  const [selectedItemId, setSelectedItemId] = useState(listAllPast[0]?.id);

  useEffect(() => {
    const lastItem = listAllPast[0];
    setSelectedItemId(lastItem?.id);
  }, [listAllPast]);

  return (
    <div className="ph-navBar">
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
  );
}

export default PastNav;
