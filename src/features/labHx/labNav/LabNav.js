import { useEffect, useState } from "react";
import { useLabHx } from "../../../contexts/LabHxContext";
import "./LabNav.css";
import { formatCreatedAt } from "../../../utility/formatDataTime";

function LabNav() {
  const { listLab, changeSelectedLab } = useLabHx();
  const [selectedItemId, setSelectedItemId] = useState(listLab[0]?.id);

  useEffect(() => {
    const lastItem = listLab[0];
    setSelectedItemId(lastItem?.id);
  }, [listLab]);

  return (
    <div className="lh-navBar">
      {listLab?.map((item, index) => {
        return (
          <div
            role="button"
            className={`lh-nav-item ${
              selectedItemId === item?.id ? "lh-nav-selected" : ""
            }`}
            key={"lh-navbar" + index}
            onClick={() => {
              setSelectedItemId(item?.id);
              changeSelectedLab(item?.id);
            }}>
            {formatCreatedAt(item.updatedAt)}
          </div>
        );
      })}
    </div>
  );
}

export default LabNav;
